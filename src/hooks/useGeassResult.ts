/**
 * Geass结果处理Hook
 * 将App.tsx中的handleGeassResult逻辑抽取为独立的可复用hook
 */

import React, { useCallback } from 'react';
import { playSound, playBGM, SFXType } from '../audio';
import { FUNNY_ACTIONS, type GameState, type CharacterId } from '../types';
import { getCharacterName } from '../data/characters';
import type { GameEngine } from '../core/GameEngineV2';

/** 获取玩家ID对应的索引 */
const getPlayerIndex = (id: string): number => {
  if (id === 'player') return 0;
  if (id === 'ai') return 3;
  if (id === 'ai2') return 2;
  if (id === 'ai3') return 1;
  return 0;
};

/** 从索引获取玩家ID */
const getPlayerIdFromIndex = (idx: number): string => {
  if (idx === 0) return 'player';
  if (idx === 1) return 'ai3';
  if (idx === 2) return 'ai2';
  if (idx === 3) return 'ai';
  return 'player';
};

/** 查找下一个存活的玩家索引 */
const findNextActivePlayer = (
  startIndex: number,
  state: GameState
): number => {
  for (let i = 0; i < 4; i++) {
    const checkIndex = (startIndex + i) % 4;
    const checkId = getPlayerIdFromIndex(checkIndex);

    if (checkId === 'player') {
      if (state.playerStats.hp > 0) {
        return checkIndex;
      }
    } else {
      const ai = state.aiPlayers.find((a: { id: string }) => a.id === checkId);
      if (ai && ai.isActive && ai.stats.hp > 0) {
        return checkIndex;
      }
    }
  }
  return startIndex;
};

/** 确定受罚者ID */
const determineLoserId = (
  state: GameState,
  loserName: string | undefined,
  selectedCharacter: CharacterId | null
): { loserId: 'player' | 'ai' | 'ai2' | 'ai3' | null; actualLoserName: string | null } => {
  const playedBy = state.turnState.playedCards?.playerId;
  let actualLoserName: string | null = loserName ?? null;

  if (!actualLoserName && playedBy) {
    if (playedBy === 'player') {
      actualLoserName = getCharacterName(selectedCharacter ?? undefined);
    } else {
      const ai = state.aiPlayers.find((a: { id: string }) => a.id === playedBy);
      actualLoserName = ai?.name ?? null;
    }
  }

  if (!actualLoserName) {
    console.error('[determineLoserId] 无法确定受罚者');
    return { loserId: null, actualLoserName: null };
  }

  if (actualLoserName === getCharacterName(selectedCharacter ?? undefined)) {
    return { loserId: 'player', actualLoserName };
  }

  const ai = state.aiPlayers.find((a: { name: string }) => a.name === actualLoserName);
  if (ai) {
    return { loserId: ai.id as 'ai' | 'ai2' | 'ai3', actualLoserName };
  }

  console.error(`[determineLoserId] 找不到AI: ${actualLoserName}`);
  return { loserId: null, actualLoserName };
};

/** 处理Geass命中的效果 */
const handleGeassHit = (
  _geassResult: NonNullable<GameState['geassResult']>,
  loser: string,
  addLog: (msg: string) => void,
  setCurrentFunnyAction: (action: typeof FUNNY_ACTIONS[number] | null) => void
): void => {
  playSound('geass-hit');
  const funnyAction = FUNNY_ACTIONS[Math.floor(Math.random() * FUNNY_ACTIONS.length)];
  setCurrentFunnyAction(funnyAction);
  playSound(funnyAction.soundType as SFXType);

  addLog(`${loser}受到Geass！`);
  addLog(`突然${funnyAction.description}`);
  addLog(`Geass命中！${loser}HP-1`);
};

/** 处理Geass未命中的效果 */
const handleGeassMiss = (
  geassResult: NonNullable<GameState['geassResult']>,
  loser: string,
  addLog: (msg: string) => void
): void => {
  playSound('geass-miss');

  if (geassResult.isRevived) {
    addLog(`${loser}闪避了Geass！`);
    addLog(`🔄 ${geassResult.message}`);
  } else if (geassResult.isCounter) {
    addLog(`${loser}闪避了Geass！`);
    addLog(`⚔️ ${geassResult.message}`);
    addLog(`💥 反击生效！质疑者受到反弹伤害！`);
  } else {
    addLog(`${loser}闪避了Geass！`);
  }
};

/** 处理游戏结束 */
const handleGameOver = (
  winner: 'player' | 'ai' | null,
  setCurrentScreen: (screen: 'result') => void
): void => {
  setTimeout(() => {
    if (winner === 'player') {
      playBGM('victory');
    } else {
      playBGM('defeat');
    }
    setCurrentScreen('result');
  }, 2000);
};

/** 重置回合 */
const resetGameRound = (
  engine: GameEngine,
  loserId: 'player' | 'ai' | 'ai2' | 'ai3',
  state: GameState,
  selectedCharacter: CharacterId | null,
  addLog: (msg: string) => void,
  setGameState: (state: GameState) => void,
  setSelectedCards: (cards: string[]) => void,
  setIsProcessing: (processing: boolean) => void,
  aiTurnRef: { current: (() => void) | null }
): void => {
  const loserIndex = getPlayerIndex(loserId);
  let nextStarterIndex = (loserIndex + 1) % 4;

  // 查找下一个存活的玩家
  nextStarterIndex = findNextActivePlayer(nextStarterIndex, state);

  const resetState = engine.resetRound(nextStarterIndex);
  setGameState(resetState);
  setSelectedCards([]);

  const isPlayerFirst = resetState.currentPlayerIndex === 0;
  const aiArrayIndexMap: Record<number, number> = { 1: 2, 2: 1, 3: 0 };
  const firstPlayerName = isPlayerFirst
    ? getCharacterName(selectedCharacter ?? undefined)
    : resetState.aiPlayers[aiArrayIndexMap[resetState.currentPlayerIndex]]?.name;

  addLog(`【第${resetState.turnState.turnNumber}回合】骗子牌是${resetState.liarCard}`);
  addLog(`${firstPlayerName}先手！`);

  setIsProcessing(false);

  // 如果AI先手，自动执行AI回合
  if (!isPlayerFirst) {
    setTimeout(() => {
      aiTurnRef.current?.();
    }, 1500);
  }
};

/** Geass结果处理Hook参数 */
interface UseGeassResultParams {
  gameEngineRef: React.MutableRefObject<GameEngine | null>;
  selectedCharacter: CharacterId | null;
  addLog: (msg: string) => void;
  setGameState: (state: GameState) => void;
  setCurrentFunnyAction: (action: typeof FUNNY_ACTIONS[number] | null) => void;
  setSelectedCards: (cards: string[]) => void;
  setIsProcessing: (processing: boolean) => void;
  setCurrentScreen: (screen: 'result') => void;
  aiTurnRef: React.MutableRefObject<(() => void) | null>;
}

/** Geass结果处理Hook */
export const useGeassResult = ({
  gameEngineRef,
  selectedCharacter,
  addLog,
  setGameState,
  setCurrentFunnyAction,
  setSelectedCards,
  setIsProcessing,
  setCurrentScreen,
  aiTurnRef,
}: UseGeassResultParams) => {
  return useCallback(
    (newState: GameState, _challengerName?: string, targetName?: string, loserName?: string) => {
      setGameState(newState);

      if (newState.geassResult) {
        const target = targetName || '对手';
        const loser = loserName || target;

        if (newState.geassResult.hit) {
          handleGeassHit(newState.geassResult, loser, addLog, setCurrentFunnyAction);
        } else {
          handleGeassMiss(newState.geassResult, loser, addLog);
        }
      }

      // 检查游戏结束
      if (newState.phase === 'game_over') {
        handleGameOver(newState.winner, setCurrentScreen);
        return;
      }

      // 惩罚后重置牌局
      setTimeout(() => {
        setCurrentFunnyAction(null);
        const engine = gameEngineRef.current;
        if (!engine) return;

        const state = engine.getState();
        const { loserId, actualLoserName } = determineLoserId(state, loserName, selectedCharacter);

        if (!loserId || !actualLoserName) {
          setIsProcessing(false);
          return;
        }

        resetGameRound(
          engine,
          loserId,
          state,
          selectedCharacter,
          addLog,
          setGameState,
          setSelectedCards,
          setIsProcessing,
          aiTurnRef
        );
      }, 2500);
    },
    [
      gameEngineRef,
      selectedCharacter,
      addLog,
      setGameState,
      setCurrentFunnyAction,
      setSelectedCards,
      setIsProcessing,
      setCurrentScreen,
      aiTurnRef,
    ]
  );
};

export default useGeassResult;
