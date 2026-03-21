/**
 * =============================================================================
 * Code Geass: Liar's Game - 主应用组件 (重构版 v4.0.0)
 * =============================================================================
 *
 * 应用入口组件，整合所有UI组件、状态管理和音效系统
 *
 * 主要功能：
 * - 屏幕路由管理（主菜单/角色选择/游戏桌/结果）
 * - 游戏状态管理
 * - 音效控制
 * - 角色技能集成
 * - 数据持久化
 *
 * 游戏流程：
 * 1. 主菜单 → 2. 角色选择 → 3. 游戏桌 → 4. 结算
 *
 * @version 4.0.0 - 重构版：提取公共逻辑，接入DynamicAIEngine，修复Map序列化Bug
 */

import React, { useState, useCallback, useEffect, useRef } from 'react';
import { flushSync } from 'react-dom';

// UI组件导入
import { MainMenu } from './ui/MainMenu';
import { CharacterSelect } from './ui/CharacterSelect';
import { GameTable } from './ui/GameTable';
import { ResultScreen } from './ui/ResultScreen';

// 数据和工具导入
import { characters, getCharacterName } from './data/characters';
import { soundManager, playSound, playBGM, stopBGM } from './audio';
import { GameEngine } from './core/GameEngineV2';
import { storage } from './utils';
import {
  getAIPlayerByIndex,
  getAIPlayerById,
  getIndexByPlayerId,
  getClockwisePlayerOrder,
  type PlayerId,
} from './core/PlayerIndexMapper';
import { createAIEngine } from './ai';
import type { DynamicAIEngine } from './ai/DynamicAIEngine';

// Hooks导入
import { useGeassResult } from './hooks/useGeassResult';
import { AI_DELAY } from './constants/animation';

// 类型导入
import type {
  CharacterId,
  CardRank,
  FunnyAction,
  GameSettings,
  GameState,
} from './types';

// 样式导入
import './styles/global.css';

const isDev = import.meta.env.DEV;

/** 屏幕类型 */
type ScreenType = 'main-menu' | 'character-select' | 'game-table' | 'result' | 'settings' | 'help';

/**
 * 主应用组件
 * 负责整体游戏流程控制和状态管理
 */
const App: React.FC = () => {
  // ============================================
  // 状态定义
  // ============================================

  const [currentScreen, setCurrentScreen] = useState<ScreenType>('main-menu');
  const [selectedCharacter, setSelectedCharacter] = useState<CharacterId | null>(null);
  const [selectedAvatar, setSelectedAvatar] = useState<number>(1);
  const [aiCharacters, setAiCharacters] = useState<CharacterId[]>(['cc', 'suzaku', 'kallen']);
  const [aiAvatars, setAiAvatars] = useState<Record<string, number>>({});
  const gameEngineRef = useRef<GameEngine | null>(null);
  const [gameState, setGameState] = useState<GameState | null>(null);
  const [gameLog, setGameLog] = useState<string[]>([]);
  const [currentFunnyAction, setCurrentFunnyAction] = useState<FunnyAction | null>(null);
  const [selectedCards, setSelectedCards] = useState<string[]>([]);
  const [isProcessing, setIsProcessing] = useState(false);

  /** 按钮点击锁定ref（防止快速重复点击） */
  const buttonLockRef = useRef<{ pass: boolean; challenge: boolean }>({
    pass: false,
    challenge: false,
  });

  const [aiThinkingState, setAiThinkingState] = useState<{ isThinking: boolean; aiId: string | null }>({
    isThinking: false,
    aiId: null,
  });

  /** 质疑进度 - 记录已经询问过的AI，防止重复询问 */
  const [challengeProgress, setChallengeProgress] = useState<{
    playedBy: string | null;
    checkedPlayers: string[];
  }>({
    playedBy: null,
    checkedPlayers: [],
  });

  /** AI引擎实例映射（每个AI角色对应一个DynamicAIEngine） */
  const aiEnginesRef = useRef<Map<string, DynamicAIEngine>>(new Map());

  // ============================================
  // Ref定义 - 用于避免循环依赖
  // ============================================

  /** AI回合函数ref - 用于递归调用避免循环依赖 */
  const aiTurnRef = useRef<(() => void) | null>(null);

  // ============================================
  // 初始化效果
  // ============================================

  useEffect(() => {
    const init = async () => {
      try {
        await soundManager.preload();
        const savedSettings = storage.load<GameSettings>('gameSettings');
        if (savedSettings) {
          soundManager.setBGMVolume(savedSettings.musicVolume ?? 0.5);
          soundManager.setSFXVolume(savedSettings.soundVolume ?? 0.7);
        }
        playBGM('main-menu');
      } catch (e) {
        isDev && console.warn('初始化失败:', e);
      }
    };

    init();

    return () => {
      stopBGM();
    };
  }, []);

  useEffect(() => {
    const status = soundManager.getStatus();
    const settings: GameSettings = {
      soundEnabled: status.enabled,
      musicEnabled: true,
      soundVolume: status.sfxVolume,
      musicVolume: status.bgmVolume,
    };
    storage.save('gameSettings', settings);
  }, []);

  // ============================================
  // 工具函数
  // ============================================

  const addLog = useCallback((message: string) => {
    setGameLog(prev => [...prev, message]);
  }, []);

  // 使用抽取的Geass结果处理Hook
  const handleGeassResult = useGeassResult({
    gameEngineRef,
    selectedCharacter,
    addLog,
    setGameState,
    setCurrentFunnyAction,
    setSelectedCards,
    setIsProcessing,
    setCurrentScreen: (screen: 'result') => setCurrentScreen(screen as ScreenType),
    aiTurnRef,
  });

  // ============================================
  // 公共工具：获取玩家名称
  // ============================================

  const getPlayerName = useCallback((playerId: string, state: GameState): string => {
    if (playerId === 'player') return getCharacterName(selectedCharacter!);
    return state.aiPlayers.find(ai => ai.id === playerId)?.name || playerId;
  }, [selectedCharacter]);

  // ============================================
  // 公共工具：提取公共质疑循环逻辑
  // ============================================

  /**
   * 处理剩余AI的质疑决策（公共逻辑）
   * 将 enterChallengePhase 和 handlePass 中的重复AI质疑循环提取为此函数
   *
   * @returns true 表示有AI发起了质疑（质疑流程结束），false 表示所有AI均未质疑
   */
  const processAIChallengerDecisions = useCallback(async (
    engine: GameEngine,
    state: GameState,
    playedBy: string,
    challengersToProcess: PlayerId[]
  ): Promise<boolean> => {
    for (const challengerId of challengersToProcess) {
      if (challengerId === 'player') continue;

      const challengerAI = getAIPlayerById(challengerId, state.aiPlayers);

      if (!challengerAI || !challengerAI.isActive || challengerAI.stats.hp <= 0) {
        isDev && console.log('[processAIChallengerDecisions] AI已淘汰，跳过:', challengerAI?.name);
        continue;
      }

      // 使用 DynamicAIEngine 决策，降级到随机
      let shouldChallenge = false;
      const aiEngine = aiEnginesRef.current.get(challengerId);
      const currentState = engine.getState();
      if (aiEngine && currentState.turnState.playedCards) {
        try {
          const decision = aiEngine.makeDecision({
            gameState: currentState,
            aiPlayer: challengerAI,
            liarCard: currentState.liarCard!,
          });
          shouldChallenge = decision.action === 'challenge';
          isDev && console.log(`[processAIChallengerDecisions] AI ${challengerAI.name} DynamicAI决策: ${decision.action}`);
        } catch (e) {
          isDev && console.warn('[processAIChallengerDecisions] DynamicAIEngine决策失败，降级随机:', e);
          shouldChallenge = Math.random() < 0.3;
        }
      } else {
        shouldChallenge = Math.random() < 0.3;
      }

      if (shouldChallenge) {
        playSound('challenge');
        const targetName = getPlayerName(playedBy, state);

        addLog(`${challengerAI.name}向${targetName}发起质疑！`);

        flushSync(() => {
          setGameState({
            ...engine.getState(),
            lastAction: `${challengerAI.name}向${targetName}发起质疑！`,
          });
        });

        await new Promise(resolve => setTimeout(resolve, AI_DELAY.CHALLENGE_DISPLAY));

        const newState = engine.aiChallengeDecision(challengerAI.id);
        // 直接读取 isBluff 字段，无需重新计算
        const wasLie = state.turnState.playedCards?.isBluff ?? false;

        addLog(wasLie ? `质疑成功！${targetName}在撒谎！` : `质疑失败！${targetName}没有撒谎！`);

        const loser = wasLie ? playedBy : challengerAI.id;
        const loserName = getPlayerName(loser, newState);

        setGameState(newState);
        handleGeassResult(newState, challengerAI.name, targetName, loserName);
        return true;
      } else {
        addLog(`${challengerAI.name}选择不质疑`);

        flushSync(() => {
          setGameState({
            ...engine.getState(),
            lastAction: `${challengerAI.name}选择不质疑`,
          });
        });

        await new Promise(resolve => setTimeout(resolve, AI_DELAY.NO_CHALLENGE_DISPLAY));
      }
    }
    return false;
  }, [addLog, getPlayerName, handleGeassResult]);

  // ============================================
  // AI回合处理 - 同步化重构核心
  // ============================================

  /**
   * AI出牌后进入质疑阶段
   */
  const enterChallengePhase = useCallback(async (engine: GameEngine, _initialState: GameState) => {
    isDev && console.log('[enterChallengePhase] 进入质疑阶段');

    const state = engine.getState();
    const playedBy = state.turnState.playedCards?.playerId;
    if (!playedBy) {
      isDev && console.error('[enterChallengePhase] 没有出牌记录');
      return;
    }

    const playedByIndex = getIndexByPlayerId(playedBy as PlayerId) ?? 0;
    const challengeOrder = getClockwisePlayerOrder(playedByIndex, playedByIndex);

    isDev && console.log(`[enterChallengePhase] 出牌者: ${playedBy}, 质疑顺序: ${challengeOrder.join(' -> ')}`);

    // 找出玩家在质疑队列中的位置
    const playerPosition = challengeOrder.indexOf('player');

    if (playerPosition !== -1) {
      // 先处理玩家之前的AI
      const beforePlayer = challengeOrder.slice(0, playerPosition).filter(id => id !== 'player') as PlayerId[];
      const challenged = await processAIChallengerDecisions(engine, state, playedBy, beforePlayer);
      if (challenged) return;

      // 轮到玩家质疑
      isDev && console.log('[enterChallengePhase] 轮到玩家质疑，等待玩家决策');
      setChallengeProgress({
        playedBy,
        checkedPlayers: beforePlayer,
      });

      const challengeState = engine.enterChallengePhase();
      setGameState(challengeState);
      setIsProcessing(false);
      addLog('等待玩家决策...');
      return;
    }

    // 玩家是出牌者，处理所有AI的质疑决策
    const challenged = await processAIChallengerDecisions(engine, state, playedBy, challengeOrder);
    if (challenged) return;

    // 所有人都未质疑
    isDev && console.log('[enterChallengePhase] 质疑阶段结束，无人质疑');
    addLog('无人质疑，回合继续');
    setChallengeProgress({ playedBy: null, checkedPlayers: [] });

    const nextState = engine.endChallengePhase(true);
    setGameState(nextState);

    // 检查游戏是否已经结束
    if (nextState.phase === 'game_over') {
      addLog(nextState.lastAction || '游戏结束！');
      setIsProcessing(false);
      // 跳转到结果页面
      setTimeout(() => {
        if (nextState.winner === 'player') {
          playBGM('victory');
        } else {
          playBGM('defeat');
        }
        setCurrentScreen('result');
      }, 1500);
      return;
    }

    const currentPlayerId = nextState.turnState.lastPlayerId || nextState.turnState.playedCards?.playerId;
    if (currentPlayerId === 'player' || !currentPlayerId) {
      setIsProcessing(false);
      addLog('轮到玩家出牌');
    } else {
      setTimeout(() => aiTurnRef.current?.(), AI_DELAY.TURN_SWITCH);
    }
  }, [addLog, processAIChallengerDecisions]);

  /**
   * 处理AI回合
   */
  const handleAITurn = useCallback(() => {
    isDev && console.log('[handleAITurn] 开始执行');

    if (!gameEngineRef.current) return;

    const engine = gameEngineRef.current;
    const state = engine.getState();

    isDev && console.log('[handleAITurn] 当前状态:', { phase: state.phase, currentPlayerIndex: state.currentPlayerIndex });

    if (state.phase === 'player_turn' || state.phase === 'game_over') {
      isDev && console.log('[handleAITurn] 不是AI回合，跳过');
      return;
    }

    const ai = getAIPlayerByIndex(state.currentPlayerIndex, state.aiPlayers);
    if (!ai) {
      isDev && console.log('[handleAITurn] AI不存在或当前是玩家回合');
      return;
    }

    const currentAIId = ai.id as 'ai' | 'ai2' | 'ai3';

    // 跳过已淘汰的AI
    if (!ai.isActive || ai.stats.hp <= 0) {
      isDev && console.log('[handleAITurn] AI已淘汰，跳过:', ai.name);

      const activeAIs = state.aiPlayers.filter((a) => a.isActive && a.stats.hp > 0);
      if (activeAIs.length === 0 && state.playerStats.hp > 0) {
        isDev && console.log('[handleAITurn] 只剩玩家存活，玩家获胜');
        state.winner = 'player';
        state.phase = 'game_over';
        setGameState({ ...state });
        addLog('游戏结束！玩家获胜！');
        setIsProcessing(false);
        return;
      }

      const nextIndex = (state.currentPlayerIndex + 1) % 4;
      state.currentPlayerIndex = nextIndex;
      setGameState({ ...state });

      if (nextIndex !== 0) {
        setTimeout(() => aiTurnRef.current?.(), AI_DELAY.TURN_SWITCH);
      } else if (state.playerStats.hp <= 0) {
        setTimeout(() => aiTurnRef.current?.(), AI_DELAY.TURN_SWITCH);
      }
      return;
    }

    setIsProcessing(true);
    playSound('turn-start');
    addLog(`${ai.name} 的回合...`);
    setAiThinkingState({ isThinking: true, aiId: currentAIId });

    setTimeout(() => {
      try {
        isDev && console.log('[handleAITurn] AI开始出牌:', ai.name);
        setAiThinkingState({ isThinking: false, aiId: null });

        // 使用 DynamicAIEngine 决策出牌
        let preferredCardIds: string[] | undefined;
        const aiEngine = aiEnginesRef.current.get(currentAIId);
        if (aiEngine && state.liarCard) {
          try {
            const decision = aiEngine.makeDecision({
              gameState: state,
              aiPlayer: ai,
              liarCard: state.liarCard,
            });
            if (decision.action === 'play' && decision.cardIds && decision.cardIds.length > 0) {
              preferredCardIds = decision.cardIds;
              isDev && console.log(`[handleAITurn] DynamicAI出牌决策: ${preferredCardIds}`);
            }
          } catch (e) {
            isDev && console.warn('[handleAITurn] DynamicAIEngine决策失败，使用随机:', e);
          }
        }

        const newState = engine.aiPlayCards(currentAIId, preferredCardIds);
        isDev && console.log('[handleAITurn] AI出牌完成, phase:', newState.phase);

        flushSync(() => {
          setGameState(newState);
        });

        const playedCards = newState.turnState.playedCards;
        if (playedCards) {
          addLog(`${ai.name}出了${playedCards.cardIds.length}张牌，声称是${playedCards.claimedRank}`);
        }

        setTimeout(() => {
          isDev && console.log('[handleAITurn] 进入质疑阶段');
          enterChallengePhase(engine, newState);
        }, AI_DELAY.PLAY_TO_CHALLENGE);
      } catch (e) {
        isDev && console.error('AI出牌错误:', e);
        setIsProcessing(false);
        setAiThinkingState({ isThinking: false, aiId: null });
      }
    }, AI_DELAY.THINKING);
  }, [addLog, enterChallengePhase]);

  // 更新ref
  useEffect(() => {
    aiTurnRef.current = handleAITurn;
  }, [handleAITurn]);

  // ============================================
  // 事件处理函数
  // ============================================

  /** 重置游戏状态到指定屏幕（公共逻辑） */
  const resetToScreen = useCallback((screen: 'main-menu' | 'character-select') => {
    setCurrentScreen(screen);
    setSelectedCharacter(null);
    setGameState(null);
    setGameLog([]);
    setSelectedCards([]);
    setCurrentFunnyAction(null);
    playBGM('main-menu');
  }, []);

  const handleStart = useCallback(() => {
    playSound('button-click');
    setCurrentScreen('character-select');
  }, []);

  const handleSettings = useCallback(() => {
    playSound('button-click');
    setCurrentScreen('settings');
  }, []);

  const handleHelp = useCallback(() => {
    playSound('button-click');
    setCurrentScreen('help');
  }, []);

  const handleSelectCharacter = useCallback((id: CharacterId, avatarNum?: number) => {
    playSound('character-select');
    setSelectedCharacter(id);
    setSelectedAvatar(avatarNum || Math.floor(Math.random() * 4) + 1);
  }, []);

  const handleConfirmCharacter = useCallback(() => {
    if (!selectedCharacter) return;

    playSound('button-click');

    const allCharacters: CharacterId[] = ['lelouch', 'cc', 'suzaku', 'kallen'];
    const remainingCharacters = allCharacters.filter(c => c !== selectedCharacter);
    const shuffled = remainingCharacters.sort(() => Math.random() - 0.5);
    setAiCharacters(shuffled);

    const avatars: Record<string, number> = {};
    shuffled.forEach(char => {
      avatars[char] = Math.floor(Math.random() * 4) + 1;
    });
    setAiAvatars(avatars);

    // 初始化游戏引擎
    gameEngineRef.current = new GameEngine();
    const initialState = gameEngineRef.current.initializeGame(selectedCharacter, shuffled);

    // 初始化 DynamicAIEngine（每个AI对应一个引擎实例）
    const aiIdMap = ['ai', 'ai2', 'ai3'] as const;
    aiEnginesRef.current.clear();
    shuffled.forEach((char, idx) => {
      aiEnginesRef.current.set(aiIdMap[idx], createAIEngine(char));
    });

    setGameState(initialState);
    setSelectedCards([]);

    const isPlayerFirst = initialState.currentPlayerIndex === 0;
    const firstPlayerAI = !isPlayerFirst
      ? getAIPlayerByIndex(initialState.currentPlayerIndex, initialState.aiPlayers)
      : null;
    const firstPlayerName = isPlayerFirst
      ? getCharacterName(selectedCharacter)
      : firstPlayerAI?.name;

    setGameLog([
      '游戏开始！',
      `【第1回合】骗子牌是${initialState.liarCard}`,
      `${firstPlayerName}先手！`,
    ]);

    setCurrentScreen('game-table');
    playBGM('game-normal');

    if (!isPlayerFirst) {
      setTimeout(() => {
        handleAITurn();
      }, 1500);
    }
  }, [selectedCharacter, handleAITurn]);

  const handleBack = useCallback(() => {
    playSound('button-click');
    setCurrentScreen('main-menu');
    setSelectedCharacter(null);
  }, []);

  const handleBackToMenu = useCallback(() => {
    playSound('button-click');
    resetToScreen('main-menu');
  }, [resetToScreen]);

  const handleToggleCardSelection = useCallback(
    (cardId: string) => {
      if (!gameEngineRef.current || isProcessing) return;

      const engine = gameEngineRef.current;
      const state = engine.getState();

      if (state.phase !== 'player_turn') return;

      engine.toggleCardSelection(cardId);
      const newState = engine.getState();
      setSelectedCards(newState.playerSelectedCards);
      playSound('button-click');
    },
    [isProcessing]
  );

  const handleConfirmPlay = useCallback(() => {
    if (!gameEngineRef.current || selectedCards.length === 0 || isProcessing) return;

    setIsProcessing(true);
    playSound('card-play');

    const engine = gameEngineRef.current;

    try {
      const newState = engine.playerPlayCards();

      flushSync(() => {
        setGameState(newState);
      });
      setSelectedCards([]);

      const playerName = getCharacterName(selectedCharacter!);
      const playedCards = newState.turnState.playedCards;
      if (playedCards) {
        addLog(`${playerName}出了${playedCards.cardIds.length}张牌，声称是${playedCards.claimedRank}`);
      }

      setTimeout(() => {
        enterChallengePhase(engine, newState);
      }, AI_DELAY.PLAY_TO_CHALLENGE);
    } catch (e) {
      isDev && console.error('出牌错误:', e);
      setIsProcessing(false);
    }
  }, [selectedCards, isProcessing, addLog, selectedCharacter, enterChallengePhase]);

  /** 玩家质疑 */
  const handleChallenge = useCallback(async () => {
    if (!gameEngineRef.current || isProcessing) return;

    setIsProcessing(true);
    playSound('challenge');

    const engine = gameEngineRef.current;
    const state = engine.getState();
    const playedCards = state.turnState.playedCards;
    const playedBy = playedCards?.playerId;

    const playerName = getCharacterName(selectedCharacter!);
    const targetName = getPlayerName(playedBy || 'player', state);

    addLog(`${playerName}向${targetName}发起质疑！`);

    flushSync(() => {
      setGameState({
        ...state,
        lastAction: `${playerName}向${targetName}发起质疑！`,
      });
    });

    await new Promise(resolve => setTimeout(resolve, AI_DELAY.CHALLENGE_DISPLAY));

    const newState = engine.playerChallengeDecision(true);

    // 直接读取 isBluff 字段，无需重新计算
    const wasLie = playedCards?.isBluff ?? false;

    addLog(wasLie ? `质疑成功！${targetName}在撒谎！` : `质疑失败！${targetName}没有撒谎！`);

    const loser = wasLie ? (playedBy || 'player') : 'player';
    const loserName = getPlayerName(loser, newState);

    setGameState(newState);
    handleGeassResult(newState, playerName, targetName, loserName);
  }, [isProcessing, addLog, selectedCharacter, handleGeassResult, getPlayerName]);

  /** 玩家不质疑（跳过） */
  const handlePass = useCallback(async () => {
    if (!gameEngineRef.current || isProcessing || buttonLockRef.current.pass) return;

    buttonLockRef.current.pass = true;
    setIsProcessing(true);
    playSound('button-click');

    const engine = gameEngineRef.current;
    const state = engine.getState();
    const playedBy = state.turnState.playedCards?.playerId;
    const playerName = getCharacterName(selectedCharacter!);

    addLog(`${playerName}选择不质疑`);

    flushSync(() => {
      setGameState({
        ...state,
        lastAction: `${playerName}选择不质疑`,
      });
    });

    await new Promise(resolve => setTimeout(resolve, AI_DELAY.NO_CHALLENGE_DISPLAY));

    // 获取玩家之后还需处理的AI（跳过已在 enterChallengePhase 中处理的）
    const playedByIndex = getIndexByPlayerId((playedBy || 'player') as PlayerId) ?? 0;
    const clockwiseOrder = getClockwisePlayerOrder(playedByIndex, playedByIndex);

    const alreadyChecked = challengeProgress.playedBy === playedBy
      ? challengeProgress.checkedPlayers
      : [];

    const remaining = clockwiseOrder.filter(
      id => id !== 'player' && !alreadyChecked.includes(id)
    ) as PlayerId[];

    const challenged = await processAIChallengerDecisions(engine, state, playedBy || 'player', remaining);
    if (challenged) {
      buttonLockRef.current.pass = false;
      return;
    }

    addLog('无人质疑，回合继续');
    setChallengeProgress({ playedBy: null, checkedPlayers: [] });

    const nextState = engine.endChallengePhase(true);
    setGameState(nextState);

    // 检查游戏是否已经结束
    if (nextState.phase === 'game_over') {
      addLog(nextState.lastAction || '游戏结束！');
      setIsProcessing(false);
      buttonLockRef.current.pass = false;
      // 跳转到结果页面
      setTimeout(() => {
        if (nextState.winner === 'player') {
          playBGM('victory');
        } else {
          playBGM('defeat');
        }
        setCurrentScreen('result');
      }, 1500);
      return;
    }

    const currentPlayerId = nextState.turnState.lastPlayerId;
    isDev && console.log(`[handlePass] 无人质疑，原出牌者 ${currentPlayerId} 继续出牌`);

    if (currentPlayerId === 'player' || !currentPlayerId) {
      setIsProcessing(false);
      setTimeout(() => { buttonLockRef.current.pass = false; }, 500);
    } else {
      setTimeout(() => {
        handleAITurn();
        buttonLockRef.current.pass = false;
      }, AI_DELAY.TURN_SWITCH);
    }
  }, [isProcessing, addLog, selectedCharacter, handleGeassResult, handleAITurn, processAIChallengerDecisions, challengeProgress]);

  /** 鲁鲁修技能：改变骗子牌 */
  const handleLelouchSkill = useCallback(
    (newRank: CardRank) => {
      if (!gameEngineRef.current || selectedCharacter !== 'lelouch') return;

      const engine = gameEngineRef.current;

      if (!engine.canPlayerUseSkill('player')) {
        addLog('❌ 绝对命令使用次数已耗尽（每局限1次）');
        return;
      }

      playSound('geass-activate');
      const newState = engine.lelouchChangeLiarCard(newRank);
      setGameState(newState);
      addLog(`鲁鲁修发动绝对命令！骗子牌变为 ${newRank}`);
      addLog('⚠️ 绝对命令已使用，本局无法再次使用');
    },
    [selectedCharacter, addLog]
  );

  const handleRestart = useCallback(() => {
    playSound('button-click');
    resetToScreen('character-select');
  }, [resetToScreen]);

  const handleMainMenu = useCallback(() => {
    playSound('button-click');
    resetToScreen('main-menu');
  }, [resetToScreen]);

  // ============================================
  // 屏幕渲染
  // ============================================

  const renderScreen = () => {
    switch (currentScreen) {
      case 'main-menu':
        return <MainMenu onStart={handleStart} onSettings={handleSettings} onHelp={handleHelp} />;

      case 'character-select':
        return (
          <CharacterSelect
            characters={characters}
            selectedId={selectedCharacter}
            selectedAvatar={selectedAvatar}
            onSelect={handleSelectCharacter}
            onConfirm={handleConfirmCharacter}
            onBack={handleBack}
          />
        );

      case 'game-table':
        return gameState ? (
          <GameTable
            gameState={gameState}
            selectedCards={selectedCards}
            selectedCharacter={selectedCharacter}
            selectedAvatar={selectedAvatar}
            aiCharacters={aiCharacters}
            aiAvatars={aiAvatars}
            onToggleCardSelection={handleToggleCardSelection}
            onConfirmPlay={handleConfirmPlay}
            onPass={handlePass}
            onChallenge={handleChallenge}
            onBackToMenu={handleBackToMenu}
            onLelouchSkill={handleLelouchSkill}
            gameLog={gameLog}
            funnyAction={currentFunnyAction}
            isProcessing={isProcessing}
            canUseSkill={gameEngineRef.current?.canPlayerUseSkill('player') ?? true}
            aiThinkingState={aiThinkingState}
          />
        ) : null;

      case 'result': {
        const isWin = gameState?.winner === 'player';
        const playerScore = gameState?.playerStats?.geassSuccessCount || 0;
        const aiScore =
          gameState?.aiPlayers?.reduce(
            (sum: number, ai: { stats?: { geassSuccessCount?: number } }) =>
              sum + (ai.stats?.geassSuccessCount || 0),
            0
          ) || 0;
        const turnNumber = gameState?.turnState?.turnNumber || 0;

        return (
          <ResultScreen
            isWin={isWin}
            playerScore={playerScore}
            opponentScore={aiScore}
            turnNumber={turnNumber}
            onRestart={handleRestart}
            onMainMenu={handleMainMenu}
            playerCharacter={selectedCharacter || undefined}
          />
        );
      }

      case 'settings':
        return renderSettingsScreen();

      case 'help':
        return renderHelpScreen();

      default:
        return <MainMenu onStart={handleStart} onSettings={handleSettings} onHelp={handleHelp} />;
    }
  };

  const renderSettingsScreen = () => (
    <div className="cg-placeholder-screen">
      <h2>设置</h2>
      <div className="cg-settings-content">
        <p style={{ color: '#a1a1aa', textAlign: 'center' }}>
          游戏采用智能动态AI系统，无需手动设置难度
        </p>
        <p style={{ color: '#666', textAlign: 'center', fontSize: '0.9rem', marginTop: '0.5rem' }}>
          AI将根据局势自动调整策略
        </p>
        <button onClick={() => setCurrentScreen('main-menu')} className="cg-menu-button">
          返回
        </button>
      </div>
    </div>
  );

  const renderHelpScreen = () => (
    <div className="cg-placeholder-screen">
      <h2>游戏帮助</h2>
      <div className="cg-help-content">
        <section className="cg-help-section">
          <h3>🎮 游戏规则</h3>
          <ul>
            <li>每人初始5张牌（Q/K/A + 小丑牌），轮流出牌</li>
            <li>每回合随机指定一张&quot;骗子牌&quot;（Q/K/A）</li>
            <li>
              <strong>出牌：</strong>选择1-3张牌打出，自动声称是骗子牌
            </li>
            <li>
              <strong>质疑：</strong>下家可以选择相信或质疑
            </li>
            <li>质疑后翻牌验证：</li>
            <li>
              • 出的牌<strong>确实是</strong>骗子牌 → 质疑者撒谎，受惩罚
            </li>
            <li>
              • 出的牌<strong>不是</strong>骗子牌 → 你撒谎，受惩罚
            </li>
            <li>
              <strong>惩罚：</strong>触发Geass判定，命中则HP-1，然后牌局重置
            </li>
            <li>HP归零被淘汰，最后存活者获胜</li>
            <li>手牌出完且未被质疑成功，直接获胜</li>
          </ul>
        </section>

        <section className="cg-help-section">
          <h3>👤 角色技能详解</h3>
          <ul>
            <li>
              <strong style={{ color: '#d4af37' }}>鲁鲁修 · 绝对命令</strong>
              <br />
              <small>
                每局限用1次，强制将当前骗子牌改为任意点数（Q/K/A）。掌控全局的王者技能。
              </small>
            </li>
            <li>
              <strong style={{ color: '#22c55e' }}>C.C. · Code之力</strong>
              <br />
              <small>
                首次受到致命伤害（HP归零）时，50%概率复活并免疫本次伤害。不老不死的神秘力量，每局限1次。
              </small>
            </li>
            <li>
              <strong style={{ color: '#3b82f6' }}>朱雀 · 枢木剑术</strong>
              <br />
              <small>
                受到Geass判定时：15%基础闪避率 +
                25%概率完美闪避并反击（让攻击者承受本次伤害）。骑士的战斗技巧。
              </small>
            </li>
            <li>
              <strong style={{ color: '#dc2626' }}>卡莲 · 红莲二式</strong>
              <br />
              <small>
                可出1-4张牌。出2张及以上时，若被质疑且质疑失败（撒谎被揭穿），对质疑者的Geass命中率
                = 20% × 出牌张数（最高80%）。高风险高回报的爆发战术！
              </small>
            </li>
          </ul>
        </section>

        <section className="cg-help-section">
          <h3>🃏 特殊牌</h3>
          <ul>
            <li>
              <strong>小丑牌（JOKER）</strong>：万能牌，可以当作任意骗子牌使用
            </li>
          </ul>
        </section>

        <button onClick={() => setCurrentScreen('main-menu')} className="cg-menu-button">
          返回
        </button>
      </div>
    </div>
  );

  return (
    <div className="cg-app">
      {renderScreen()}
    </div>
  );
};

export default App;
