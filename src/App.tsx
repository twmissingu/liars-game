/**
 * =============================================================================
 * Code Geass: Liar's Game - 主应用组件
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
 * @author Code Agent
 * @version 3.0.0 - 重构版：简化质疑流程
 */

import React, { useState, useCallback, useEffect, useRef } from 'react';

// UI组件导入
import { MainMenu } from './ui/MainMenu';
import { CharacterSelect } from './ui/CharacterSelect';
import { GameTable } from './ui/GameTable';
import { ResultScreen } from './ui/ResultScreen';

// 数据和工具导入
import { characters, getCharacterName } from './data/characters';
import { soundManager, playSound, playBGM, stopBGM } from './audio';
import type { SoundType } from './audio';
import { GameEngine } from './core/GameEngine';
import { storage } from './utils';

// 类型导入
import type {
  CharacterId,
  CardRank,
  FunnyAction,
  GameSettings,
  GameState,
  Difficulty,
  Personality,
} from './types';
import { FUNNY_ACTIONS } from './types';

// 样式导入
import './styles/global.css';

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

  /** 当前屏幕 */
  const [currentScreen, setCurrentScreen] = useState<ScreenType>('main-menu');

  /** 玩家选择的角色 */
  const [selectedCharacter, setSelectedCharacter] = useState<CharacterId | null>(null);

  /** 玩家选中的头像编号 */
  const [selectedAvatar, setSelectedAvatar] = useState<number>(1);

  /** AI角色列表 */
  const [aiCharacters, setAiCharacters] = useState<CharacterId[]>(['cc', 'suzaku', 'kallen']);

  /** AI头像映射 */
  const [aiAvatars, setAiAvatars] = useState<Record<string, number>>({});

  /** 游戏难度 */
  const [difficulty, setDifficulty] = useState<Difficulty>('normal');

  /** AI性格 */
  const [personality, setPersonality] = useState<Personality>('balanced');

  /** 游戏引擎引用 */
  const gameEngineRef = useRef<GameEngine | null>(null);

  /** 游戏状态 */
  const [gameState, setGameState] = useState<GameState | null>(null);

  /** 游戏日志 */
  const [gameLog, setGameLog] = useState<string[]>([]);

  /** 当前搞笑动作 */
  const [currentFunnyAction, setCurrentFunnyAction] = useState<FunnyAction | null>(null);

  /** 玩家选中的牌 */
  const [selectedCards, setSelectedCards] = useState<string[]>([]);

  /** 是否正在处理中（防止重复操作） */
  const [isProcessing, setIsProcessing] = useState(false);

  // ============================================
  // Ref定义 - 用于避免循环依赖
  // ============================================

  /** AI回合函数ref - 用于递归调用避免循环依赖 */
  const aiTurnRef = useRef<(() => void) | null>(null);

  // ============================================
  // 初始化效果
  // ============================================

  /**
   * 初始化音效和加载设置
   * 只在组件挂载时执行一次
   */
  useEffect(() => {
    const init = async () => {
      try {
        // 预加载音效
        await soundManager.preload();
        console.log('音效预加载完成');

        // 加载保存的设置
        const savedSettings = storage.load<GameSettings>();
        if (savedSettings) {
          setDifficulty(savedSettings.difficulty);
          setPersonality(savedSettings.personality || 'balanced');
          soundManager.setBGMVolume(savedSettings.bgmVolume);
          soundManager.setSFXVolume(savedSettings.sfxVolume);
        }

        // 播放主菜单背景音乐
        playBGM('bgm-menu');
      } catch (e) {
        console.warn('初始化失败:', e);
      }
    };

    init();

    // 清理函数
    return () => {
      stopBGM();
    };
  }, []);

  /**
   * 保存设置到本地存储
   * 当难度或性格变化时自动保存
   */
  useEffect(() => {
    const settings: GameSettings = {
      difficulty,
      bgmVolume: soundManager.getStatus().bgmVolume,
      sfxVolume: soundManager.getStatus().sfxVolume,
      personality,
    };
    storage.save(settings);
  }, [difficulty, personality]);

  // ============================================
  // 工具函数
  // ============================================

  /**
   * 添加游戏日志
   * 最多保留最近20条日志
   *
   * @param message - 日志消息
   */
  const addLog = useCallback((message: string) => {
    setGameLog(prev => [...prev.slice(-19), message]);
  }, []);

  /**
   * 处理Geass结果
   * 显示动画效果并检查游戏是否结束
   *
   * @param newState - 新的游戏状态
   * @param challengerName - 质疑者名称
   * @param targetName - 目标名称（被质疑者）
   * @param loserName - 受罚者名称
   */
  const handleGeassResult = useCallback(
    (newState: GameState, challengerName?: string, targetName?: string, loserName?: string) => {
      setGameState(newState);

      if (newState.geassResult) {
        const target = targetName || '对手';
        const loser = loserName || target;

        if (newState.geassResult.hit) {
          // Geass命中
          playSound('sfx-geass-hit');
          const funnyAction = FUNNY_ACTIONS[Math.floor(Math.random() * FUNNY_ACTIONS.length)];
          setCurrentFunnyAction(funnyAction);
          playSound(funnyAction.soundType as SoundType);

          // 详细记录Geass结果
          addLog(`${loser}受到Geass！`);
          addLog(`突然${funnyAction.description}`);
          addLog(`Geass命中！${loser}HP-1`);
        } else {
          // Geass未命中
          playSound('sfx-geass-miss');

          // 记录闪避结果
          if (newState.geassResult.isRevived) {
            addLog(`${loser}闪避了Geass！`);
            addLog(`🔄 ${newState.geassResult.message}`);
          } else if (newState.geassResult.isCounter) {
            addLog(`${loser}闪避了Geass！`);
            addLog(`⚔️ ${newState.geassResult.message}`);
          } else {
            addLog(`${loser}闪避了Geass！`);
          }
        }
      }

      // 检查游戏结束
      if (newState.phase === 'game_over') {
        setTimeout(() => {
          if (newState.winner === 'player') {
            playBGM('bgm-victory');
          } else {
            playBGM('bgm-defeat');
          }
          setCurrentScreen('result');
        }, 2000);
        return;
      }

      // 惩罚后重置牌局
      setTimeout(() => {
        setCurrentFunnyAction(null);
        if (gameEngineRef.current) {
          const resetState = gameEngineRef.current.resetRound();
          setGameState(resetState);
          setSelectedCards([]);

          const isPlayerFirst = resetState.currentPlayerIndex === 0;
          const firstPlayerName = isPlayerFirst
            ? getCharacterName(selectedCharacter!)
            : resetState.aiPlayers[resetState.currentPlayerIndex - 1]?.name;

          addLog(`【第${resetState.turnState.turnNumber}回合】骗子牌是${resetState.liarCard}`);
          addLog(`${firstPlayerName}先手！`);

          // 如果AI先手，自动执行AI回合
          if (!isPlayerFirst) {
            setTimeout(() => {
              // 使用ref避免循环依赖
              aiTurnRef.current?.();
            }, 1500);
          }
        }
      }, 2500);
    },
    [addLog, selectedCharacter]
  );

  // ============================================
  // AI回合处理 - 同步化重构核心
  // ============================================

  /**
   * AI出牌后进入质疑阶段
   * 同步调用质疑处理流程
   *
   * @param engine - 游戏引擎实例
   * @param state - 当前游戏状态
   */
  const enterChallengePhase = useCallback((engine: GameEngine, state: GameState) => {
    console.log('[enterChallengePhase] 进入质疑阶段');

    // 获取出牌者信息
    const playedBy = state.turnState.playedCards?.playerId;
    if (!playedBy) {
      console.error('[enterChallengePhase] 没有出牌记录');
      return;
    }

    // 计算出牌者的索引 (0=玩家, 1=AI1, 2=AI2, 3=AI3)
    const playedByIndex =
      playedBy === 'player'
        ? 0
        : state.aiPlayers.findIndex((ai: { id: string }) => ai.id === playedBy) + 1;

    // 从出牌者的下家开始质疑
    let currentIndex = (playedByIndex + 1) % 4;
    let checkedCount = 0;

    // 依次询问每个玩家（最多3个，因为不能质疑自己）
    while (checkedCount < 3) {
      // 跳过出牌者自己
      if (currentIndex === playedByIndex) {
        currentIndex = (currentIndex + 1) % 4;
        continue;
      }

      if (currentIndex === 0) {
        // 轮到玩家质疑，设置状态并等待玩家操作
        console.log('[enterChallengePhase] 轮到玩家质疑，等待玩家决策');
        setIsProcessing(false);
        addLog('等待玩家决策...');
        return;
      }

      // AI质疑
      const challengerAI = state.aiPlayers[currentIndex - 1];
      if (!challengerAI || !challengerAI.isActive || challengerAI.stats.hp <= 0) {
        // 该AI已淘汰，跳过
        console.log('[enterChallengePhase] AI已淘汰，跳过:', challengerAI?.name);
        currentIndex = (currentIndex + 1) % 4;
        checkedCount++;
        continue;
      }

      // AI决策（30%概率质疑）
      const shouldChallenge = Math.random() < 0.3;
      console.log('[enterChallengePhase] AI决策:', { aiName: challengerAI.name, shouldChallenge });

      if (shouldChallenge) {
        playSound('sfx-challenge');
        const targetName =
          playedBy === 'player'
            ? getCharacterName(selectedCharacter!)
            : state.aiPlayers.find((ai: { id: string }) => ai.id === playedBy)?.name || playedBy;

        // 记录AI发起质疑
        addLog(`${challengerAI.name}向${targetName}发起质疑！`);

        // 执行质疑结算
        const newState = engine.aiChallengeDecision(challengerAI.id);

        // 计算质疑结果
        const playedCards = state.turnState.playedCards;
        const wasLie = playedCards
          ? playedCards.actualCards.some(
              (c: { rank: string; isJoker: boolean }) =>
                c.rank !== playedCards.claimedRank && !c.isJoker
            )
          : false;

        // 记录质疑结果
        if (wasLie) {
          addLog(`质疑成功！${targetName}在撒谎！`);
        } else {
          addLog(`质疑失败！${targetName}没有撒谎！`);
        }

        const loser = wasLie ? playedBy : challengerAI.id;
        const loserName =
          loser === 'player'
            ? getCharacterName(selectedCharacter!)
            : state.aiPlayers.find((ai: { id: string }) => ai.id === loser)?.name || loser;

        // 更新状态并处理Geass结果
        setGameState(newState);
        handleGeassResult(newState, challengerAI.name, targetName, loserName);
        return;
      } else {
        // 记录AI选择不质疑
        addLog(`${challengerAI.name}选择不质疑`);
      }

      // 移动到下一个质疑者
      currentIndex = (currentIndex + 1) % 4;
      checkedCount++;
    }

    // 所有人都未质疑，继续下一回合
    console.log('[enterChallengePhase] 所有人都未质疑，继续下一回合');
    addLog('无人质疑，回合继续');

    // 将牌放到桌面
    if (state.turnState.playedCards) {
      state.turnState.tableCards = [
        ...state.turnState.tableCards,
        ...state.turnState.playedCards.actualCards,
      ];
    }

    // 计算下一个玩家（从出牌者的下家开始）
    let nextIndex = (playedByIndex + 1) % 4;

    // 跳过已淘汰的玩家
    let attempts = 0;
    while (attempts < 4) {
      if (nextIndex === 0) {
        // 玩家
        if (state.playerStats.hp > 0) break;
      } else {
        // AI
        const ai = state.aiPlayers[nextIndex - 1];
        if (ai && ai.isActive && ai.stats.hp > 0) break;
      }
      nextIndex = (nextIndex + 1) % 4;
      attempts++;
    }

    state.currentPlayerIndex = nextIndex;

    if (nextIndex === 0) {
      state.phase = 'player_turn';
      state.turnState.turnNumber++;
      addLog(`第 ${state.turnState.turnNumber} 回合开始`);
      setIsProcessing(false);
    } else {
      state.phase = 'ai_turn';
      // 延迟执行AI回合
      setTimeout(() => {
        // 使用ref避免循环依赖
        aiTurnRef.current?.();
      }, 500);
    }

    state.turnState.playedCards = null;
    setGameState({ ...state });
  }, [addLog, selectedCharacter, handleGeassResult]);

  /**
   * 处理AI回合
   * 按照Liar's Bar规则：玩家→AI1→AI2→AI3循环
   *
   * 重构说明：
   * - 同步处理AI出牌
   * - 出牌后直接调用质疑流程
   * - 无需useEffect监听phase变化
   */
  const handleAITurn = useCallback(() => {
    console.log('[handleAITurn] 开始执行');

    if (!gameEngineRef.current) {
      console.log('[handleAITurn] 游戏引擎不存在，返回');
      return;
    }

    const engine = gameEngineRef.current;
    const state = engine.getState();

    console.log('[handleAITurn] 当前状态:', {
      phase: state.phase,
      currentPlayerIndex: state.currentPlayerIndex,
    });

    // 检查是否是AI回合
    if (state.phase === 'player_turn' || state.phase === 'game_over') {
      console.log('[handleAITurn] 不是AI回合，跳过');
      return;
    }

    // 根据currentPlayerIndex确定当前应该行动的AI
    // currentPlayerIndex: 0=玩家, 1=AI1(cc), 2=AI2(suzaku), 3=AI3(kallen)
    const currentAIIndex = state.currentPlayerIndex - 1;
    if (currentAIIndex < 0 || currentAIIndex >= state.aiPlayers.length) {
      console.log('[handleAITurn] AI索引无效:', currentAIIndex);
      return;
    }

    const ai = state.aiPlayers[currentAIIndex];
    if (!ai) {
      console.log('[handleAITurn] AI不存在');
      return;
    }

    const currentAIId = ai.id as 'ai' | 'ai2' | 'ai3';

    // 跳过已淘汰的AI
    if (!ai.isActive || ai.stats.hp <= 0) {
      console.log('[handleAITurn] AI已淘汰，跳过:', ai.name);
      // 自动进入下一个玩家
      const nextIndex = (state.currentPlayerIndex + 1) % 4;
      state.currentPlayerIndex = nextIndex;
      setGameState({ ...state });

      // 如果下一个是AI，递归处理
      if (nextIndex !== 0) {
        setTimeout(() => aiTurnRef.current?.(), 500);
      }
      return;
    }

    setIsProcessing(true);
    playSound('sfx-turn-start');
    addLog(`${ai.name} 的回合...`);

    // AI思考延迟
    setTimeout(() => {
      try {
        console.log('[handleAITurn] AI开始出牌:', ai.name);

        // AI出牌
        const newState = engine.aiPlayCards(currentAIId);
        console.log('[handleAITurn] AI出牌完成, 新状态:', {
          phase: newState.phase,
          playedBy: newState.turnState.playedCards?.playerId,
        });

        setGameState(newState);

        // 详细记录AI出牌信息
        const playedCards = newState.turnState.playedCards;
        if (playedCards) {
          const cardCount = playedCards.cardIds.length;
          const claimedRank = playedCards.claimedRank;
          addLog(`${ai.name}出了${cardCount}张牌，声称是${claimedRank}`);
        }

        // 延迟后进入质疑阶段 - 直接同步调用质疑流程
        setTimeout(() => {
          console.log('[handleAITurn] 进入质疑阶段');
          enterChallengePhase(engine, newState);
        }, 1000);
      } catch (e) {
        console.error('AI出牌错误:', e);
        setIsProcessing(false);
      }
    }, 1000);
  }, [addLog, enterChallengePhase]);

  // 更新ref - 必须在函数定义之后
  useEffect(() => {
    aiTurnRef.current = handleAITurn;
  }, [handleAITurn]);

  // ============================================
  // 事件处理函数
  // ============================================

  /** 开始游戏 */
  const handleStart = useCallback(() => {
    playSound('sfx-button-click');
    setCurrentScreen('character-select');
  }, []);

  /** 打开设置 */
  const handleSettings = useCallback(() => {
    playSound('sfx-button-click');
    setCurrentScreen('settings');
  }, []);

  /** 打开帮助 */
  const handleHelp = useCallback(() => {
    playSound('sfx-button-click');
    setCurrentScreen('help');
  }, []);

  /** 选择角色 */
  const handleSelectCharacter = useCallback((id: CharacterId, avatarNum?: number) => {
    playSound('sfx-character-select');
    setSelectedCharacter(id);
    // 如果传入了头像编号则使用，否则随机生成
    setSelectedAvatar(avatarNum || Math.floor(Math.random() * 4) + 1);
  }, []);

  /** 确认角色选择并开始游戏 */
  const handleConfirmCharacter = useCallback(() => {
    if (!selectedCharacter) return;

    playSound('sfx-button-click');

    // 随机分配AI角色
    const allCharacters: CharacterId[] = ['lelouch', 'cc', 'suzaku', 'kallen'];
    const remainingCharacters = allCharacters.filter(c => c !== selectedCharacter);
    const shuffled = remainingCharacters.sort(() => Math.random() - 0.5);
    setAiCharacters(shuffled);

    // 为每个AI随机分配头像
    const avatars: Record<string, number> = {};
    shuffled.forEach(char => {
      avatars[char] = Math.floor(Math.random() * 4) + 1;
    });
    setAiAvatars(avatars);

    // 初始化游戏引擎
    gameEngineRef.current = new GameEngine();
    const initialState = gameEngineRef.current.initializeGame(
      selectedCharacter,
      difficulty,
      shuffled
    );

    setGameState(initialState);
    setSelectedCards([]);

    // 判断谁先手
    const isPlayerFirst = initialState.currentPlayerIndex === 0;
    const firstPlayerName = isPlayerFirst
      ? getCharacterName(selectedCharacter)
      : initialState.aiPlayers[initialState.currentPlayerIndex - 1]?.name;

    setGameLog([
      '游戏开始！',
      `【第1回合】骗子牌是${initialState.liarCard}`,
      `${firstPlayerName}先手！`,
    ]);

    setCurrentScreen('game-table');
    playBGM('bgm-game');

    // 如果AI先手，自动执行AI回合
    if (!isPlayerFirst) {
      setTimeout(() => {
        handleAITurn();
      }, 1500);
    }
  }, [selectedCharacter, difficulty, handleAITurn]);

  /** 返回主菜单 */
  const handleBack = useCallback(() => {
    playSound('sfx-button-click');
    setCurrentScreen('main-menu');
    setSelectedCharacter(null);
  }, []);

  /** 返回主菜单并重置游戏 */
  const handleBackToMenu = useCallback(() => {
    playSound('sfx-button-click');
    setCurrentScreen('main-menu');
    setSelectedCharacter(null);
    setGameState(null);
    setGameLog([]);
    setSelectedCards([]);
    setCurrentFunnyAction(null);
    playBGM('bgm-menu');
  }, []);

  /** 玩家选择/取消选择牌 */
  const handleToggleCardSelection = useCallback(
    (cardId: string) => {
      if (!gameEngineRef.current || isProcessing) return;

      const engine = gameEngineRef.current;
      const state = engine.getState();

      if (state.phase !== 'player_turn') return;

      // 更新引擎中的选中状态
      engine.toggleCardSelection(cardId);

      // 从引擎获取最新的选中状态来更新UI
      const newState = engine.getState();
      setSelectedCards(newState.playerSelectedCards);

      playSound('sfx-button-click');
    },
    [isProcessing]
  );

  /** 玩家确认出牌 */
  const handleConfirmPlay = useCallback(() => {
    if (!gameEngineRef.current || selectedCards.length === 0 || isProcessing) return;

    setIsProcessing(true);
    playSound('sfx-play-card');

    const engine = gameEngineRef.current;

    try {
      const newState = engine.playerPlayCards();
      setGameState(newState);
      setSelectedCards([]);

      const playerName = getCharacterName(selectedCharacter!);
      const playedCards = newState.turnState.playedCards;
      if (playedCards) {
        const cardCount = playedCards.cardIds.length;
        const claimedRank = playedCards.claimedRank;
        addLog(`${playerName}出了${cardCount}张牌，声称是${claimedRank}`);
      }

      // 延迟后进入质疑阶段 - 直接同步调用
      setTimeout(() => {
        enterChallengePhase(engine, newState);
      }, 1500);
    } catch (e) {
      console.error('出牌错误:', e);
      setIsProcessing(false);
    }
  }, [selectedCards, isProcessing, addLog, selectedCharacter, enterChallengePhase]);

  /**
   * 玩家质疑
   * 重构后：直接处理质疑逻辑，无需等待useEffect
   */
  const handleChallenge = useCallback(() => {
    if (!gameEngineRef.current || isProcessing) return;

    setIsProcessing(true);
    playSound('sfx-challenge');

    const engine = gameEngineRef.current;
    const state = engine.getState();
    const playedCards = state.turnState.playedCards;
    const playedBy = playedCards?.playerId;

    const playerName = getCharacterName(selectedCharacter!);
    const targetName =
      playedBy === 'player'
        ? playerName
        : state.aiPlayers.find((ai: { id: string }) => ai.id === playedBy)?.name || playedBy;

    // 记录玩家发起质疑
    addLog(`${playerName}向${targetName}发起质疑！`);

    const newState = engine.playerChallengeDecision(true);

    // 计算质疑结果
    const wasLie = playedCards
      ? playedCards.actualCards.some(
          (c: { rank: string; isJoker: boolean }) =>
            c.rank !== playedCards.claimedRank && !c.isJoker
        )
      : false;

    // 记录质疑结果
    if (wasLie) {
      addLog(`质疑成功！${targetName}在撒谎！`);
    } else {
      addLog(`质疑失败！${targetName}没有撒谎！`);
    }

    const loser = wasLie ? playedBy : 'player';
    const loserName =
      loser === 'player'
        ? playerName
        : state.aiPlayers.find((ai: { id: string }) => ai.id === loser)?.name || loser;

    // 更新状态并处理Geass结果
    setGameState(newState);
    handleGeassResult(newState, playerName, targetName, loserName);
  }, [isProcessing, addLog, selectedCharacter, handleGeassResult]);

  /**
   * 玩家不质疑（跳过）
   * 重构后：继续询问下一个AI，或无人质疑时进入下一回合
   */
  const handlePass = useCallback(() => {
    if (!gameEngineRef.current || isProcessing) return;

    playSound('sfx-button-click');

    const engine = gameEngineRef.current;
    const state = engine.getState();
    const playedBy = state.turnState.playedCards?.playerId;
    const playerName = getCharacterName(selectedCharacter!);

    // 记录玩家选择不质疑
    addLog(`${playerName}选择不质疑`);

    // 计算出牌者的索引 (0=玩家, 1=AI1, 2=AI2, 3=AI3)
    const playedByIndex =
      playedBy === 'player'
        ? 0
        : state.aiPlayers.findIndex((ai: { id: string }) => ai.id === playedBy) + 1;

    // 玩家是索引0，下家是索引1（AI1）
    let nextIndex = 1;

    // 继续询问剩余的AI
    while (nextIndex < 4) {
      // 跳过出牌者
      if (nextIndex === playedByIndex) {
        nextIndex++;
        continue;
      }

      const challengerAI = state.aiPlayers[nextIndex - 1];
      if (!challengerAI || !challengerAI.isActive || challengerAI.stats.hp <= 0) {
        // 该AI已淘汰，跳过
        nextIndex++;
        continue;
      }

      // AI决策
      const shouldChallenge = Math.random() < 0.3;

      if (shouldChallenge) {
        playSound('sfx-challenge');
        const targetName =
          playedBy === 'player'
            ? playerName
            : state.aiPlayers.find((ai: { id: string }) => ai.id === playedBy)?.name || playedBy;

        addLog(`${challengerAI.name}向${targetName}发起质疑！`);

        const newState = engine.aiChallengeDecision(challengerAI.id);

        // 计算质疑结果
        const playedCards = state.turnState.playedCards;
        const wasLie = playedCards
          ? playedCards.actualCards.some(
              (c: { rank: string; isJoker: boolean }) =>
                c.rank !== playedCards.claimedRank && !c.isJoker
            )
          : false;

        if (wasLie) {
          addLog(`质疑成功！${targetName}在撒谎！`);
        } else {
          addLog(`质疑失败！${targetName}没有撒谎！`);
        }

        const loser = wasLie ? playedBy : challengerAI.id;
        const loserName =
          loser === 'player'
            ? playerName
            : state.aiPlayers.find((ai: { id: string }) => ai.id === loser)?.name || loser;

        setGameState(newState);
        handleGeassResult(newState, challengerAI.name, targetName, loserName);
        return;
      } else {
        addLog(`${challengerAI.name}选择不质疑`);
      }

      nextIndex++;
    }

    // 所有人都未质疑，继续下一回合
    console.log('[handlePass] 所有人都未质疑，继续下一回合');
    addLog('无人质疑，回合继续');

    // 将牌放到桌面
    if (state.turnState.playedCards) {
      state.turnState.tableCards = [
        ...state.turnState.tableCards,
        ...state.turnState.playedCards.actualCards,
      ];
    }

    // 计算下一个玩家（从出牌者的下家开始）
    let nextPlayerIndex = (playedByIndex + 1) % 4;

    // 跳过已淘汰的玩家
    let attempts = 0;
    while (attempts < 4) {
      if (nextPlayerIndex === 0) {
        if (state.playerStats.hp > 0) break;
      } else {
        const ai = state.aiPlayers[nextPlayerIndex - 1];
        if (ai && ai.isActive && ai.stats.hp > 0) break;
      }
      nextPlayerIndex = (nextPlayerIndex + 1) % 4;
      attempts++;
    }

    state.currentPlayerIndex = nextPlayerIndex;

    if (nextPlayerIndex === 0) {
      state.phase = 'player_turn';
      state.turnState.turnNumber++;
      addLog(`第 ${state.turnState.turnNumber} 回合开始`);
      setIsProcessing(false);
    } else {
      state.phase = 'ai_turn';
      setTimeout(() => {
        handleAITurn();
      }, 500);
    }

    state.turnState.playedCards = null;
    setGameState({ ...state });
  }, [isProcessing, addLog, selectedCharacter, handleGeassResult, handleAITurn]);

  /** 鲁鲁修技能：改变骗子牌 */
  const handleLelouchSkill = useCallback(
    (newRank: CardRank) => {
      if (!gameEngineRef.current || selectedCharacter !== 'lelouch') return;

      const engine = gameEngineRef.current;

      // 检查技能是否可用
      if (!engine.canPlayerUseSkill('player')) {
        addLog('❌ 绝对命令使用次数已耗尽（每局限1次）');
        return;
      }

      playSound('sfx-geass-activate');
      const newState = engine.lelouchChangeLiarCard(newRank);
      setGameState(newState);
      addLog(`鲁鲁修发动绝对命令！骗子牌变为 ${newRank}`);
      addLog('⚠️ 绝对命令已使用，本局无法再次使用');
    },
    [selectedCharacter, addLog]
  );

  /** 重新开始游戏 */
  const handleRestart = useCallback(() => {
    playSound('sfx-button-click');
    setCurrentScreen('character-select');
    setSelectedCharacter(null);
    setGameState(null);
    setGameLog([]);
    setSelectedCards([]);
    setCurrentFunnyAction(null);
    playBGM('bgm-menu');
  }, []);

  /** 返回主菜单 */
  const handleMainMenu = useCallback(() => {
    playSound('sfx-button-click');
    setCurrentScreen('main-menu');
    setSelectedCharacter(null);
    setGameState(null);
    setGameLog([]);
    setSelectedCards([]);
    setCurrentFunnyAction(null);
    playBGM('bgm-menu');
  }, []);

  // ============================================
  // 屏幕渲染
  // ============================================

  /**
   * 渲染当前屏幕
   * @returns 当前屏幕对应的JSX元素
   */
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

        return (
          <ResultScreen
            isWin={isWin}
            playerScore={playerScore}
            opponentScore={aiScore}
            onRestart={handleRestart}
            onMainMenu={handleMainMenu}
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

  /**
   * 渲染设置屏幕
   * @returns 设置屏幕JSX元素
   */
  const renderSettingsScreen = () => (
    <div className="cg-placeholder-screen">
      <h2>设置</h2>
      <div className="cg-settings-content">
        <div className="cg-setting-item">
          <label>难度:</label>
          <select
            className="cg-setting-select"
            value={difficulty}
            onChange={e => setDifficulty(e.target.value as Difficulty)}
          >
            <option value="easy">简单</option>
            <option value="normal">普通</option>
            <option value="hard">困难</option>
          </select>
        </div>

        <div className="cg-setting-item">
          <label>AI性格:</label>
          <select
            className="cg-setting-select"
            value={personality}
            onChange={e => setPersonality(e.target.value as Personality)}
          >
            <option value="aggressive">激进</option>
            <option value="balanced">平衡</option>
            <option value="conservative">保守</option>
          </select>
        </div>

        <p style={{ color: '#a1a1aa', textAlign: 'center', marginTop: '1rem' }}>设置已自动保存</p>

        <button onClick={() => setCurrentScreen('main-menu')} className="cg-menu-button">
          返回
        </button>
      </div>
    </div>
  );

  /**
   * 渲染帮助屏幕
   * @returns 帮助屏幕JSX元素
   */
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

  // ============================================
  // 主渲染
  // ============================================

  return (
    <div className="cg-app">
      {renderScreen()}

      <style>{`
        .cg-app {
          width: 100vw;
          height: 100vh;
          overflow: hidden;
        }

        .cg-placeholder-screen {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          width: 100%;
          height: 100%;
          background: linear-gradient(180deg, #0a0a0f 0%, #1a1a24 100%);
          color: #f5f5f5;
          gap: 1rem;
          padding: 2rem;
        }

        .cg-placeholder-screen h2 {
          font-family: 'Cinzel', serif;
          font-size: 2rem;
          color: #d4af37;
          margin-bottom: 1rem;
        }

        .cg-menu-button {
          padding: 0.75rem 1.5rem;
          font-family: 'Noto Sans SC', sans-serif;
          font-size: 1rem;
          color: #0a0a0f;
          background: linear-gradient(135deg, #b8941f 0%, #d4af37 100%);
          border: none;
          border-radius: 0.5rem;
          cursor: pointer;
          transition: all 0.3s ease;
          margin-top: 1rem;
        }

        .cg-menu-button:hover {
          box-shadow: 0 0 20px rgba(212, 175, 55, 0.4);
          transform: translateY(-2px);
        }

        .cg-settings-content {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          min-width: 300px;
        }

        .cg-setting-item {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
        }

        .cg-setting-item label {
          color: #d4af37;
          font-family: 'Noto Sans SC', sans-serif;
        }

        .cg-setting-select {
          padding: 0.5rem 1rem;
          background: #1a1a24;
          border: 1px solid #3f3f46;
          border-radius: 0.375rem;
          color: #f5f5f5;
          font-family: 'Noto Sans SC', sans-serif;
          cursor: pointer;
        }

        .cg-help-content {
          max-width: 600px;
          text-align: left;
          max-height: 70vh;
          overflow-y: auto;
          padding-right: 1rem;
        }

        .cg-help-section {
          margin-bottom: 2rem;
        }

        .cg-help-section h3 {
          color: #d4af37;
          font-family: 'Cinzel', serif;
          margin-bottom: 1rem;
          font-size: 1.25rem;
        }

        .cg-help-section ul {
          list-style: none;
          padding: 0;
        }

        .cg-help-section li {
          color: #a1a1aa;
          font-family: 'Noto Sans SC', sans-serif;
          margin-bottom: 0.5rem;
          padding-left: 1.5rem;
          position: relative;
        }

        .cg-help-section li::before {
          content: '◆';
          position: absolute;
          left: 0;
          color: #dc2626;
          font-size: 0.5rem;
          top: 0.4rem;
        }

        .cg-help-section strong {
          color: #f5f5f5;
        }
      `}</style>
    </div>
  );
};

export default App;
