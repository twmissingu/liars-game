/**
 * =============================================================================
 * Code Geass: Liar's Game - 主应用组件 (重构版 v3.0.0)
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
 * @version 3.0.0 - 重构版：移除难度/性格设置，简化系统架构
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
import { GameEngine } from './core/GameEngineV2';
import { storage } from './utils';

// Hooks导入
import { useGeassResult } from './hooks/useGeassResult';
import { useAnimationSync } from './hooks/useAnimationSync';
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

  /** AI思考状态 */
  const [aiThinkingState, setAiThinkingState] = useState<{ isThinking: boolean; aiId: string | null }>({
    isThinking: false,
    aiId: null,
  });

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
        const savedSettings = storage.load<GameSettings>('gameSettings');
        if (savedSettings) {
          soundManager.setBGMVolume(savedSettings.musicVolume ?? 0.5);
          soundManager.setSFXVolume(savedSettings.soundVolume ?? 0.7);
        }

        // 播放主菜单背景音乐
        playBGM('main-menu');
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
   * 当音量设置变化时自动保存
   */
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

  /**
   * 添加游戏日志
   * 保留所有日志，不限制数量
   *
   * @param message - 日志消息
   */
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

    // UI布局顺序: 顶部=AI2, 左侧=AI3, 右侧=AI1, 底部=玩家
    // 顺时针顺序: 玩家(底部) -> AI3(左侧) -> AI2(顶部) -> AI1(右侧) -> 玩家(底部)
    // 索引映射: 0=玩家, 1=AI3(ai3), 2=AI2(ai2), 3=AI1(ai)
    const getPlayerIndex = (id: string): number => {
      if (id === 'player') return 0;
      if (id === 'ai') return 3; // AI1 (C.C.)
      if (id === 'ai2') return 2; // AI2 (朱雀)
      if (id === 'ai3') return 1; // AI3 (卡莲)
      return 0;
    };

    const playedByIndex = getPlayerIndex(playedBy);

    // 从出牌者的下家开始质疑（顺时针）
    // 注意：质疑顺序应该是顺时针，即索引递增
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

        // 更新游戏状态为质疑阶段
        const challengeState = engine.enterChallengePhase();
        setGameState(challengeState);

        setIsProcessing(false);
        addLog('等待玩家决策...');
        return;
      }

      // AI质疑 - 根据索引映射到aiPlayers数组
      // aiPlayers[0]=AI1(ai), aiPlayers[1]=AI2(ai2), aiPlayers[2]=AI3(ai3)
      const aiArrayIndex = currentIndex === 1 ? 2 : currentIndex === 2 ? 1 : 0;
      const challengerAI = state.aiPlayers[aiArrayIndex];
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
        playSound('challenge');
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
            : newState.aiPlayers.find((ai: { id: string }) => ai.id === loser)?.name || loser;

        // 更新状态并处理Geass结果
        setGameState(newState);
        handleGeassResult(newState, challengerAI.name, targetName, loserName);

        // 无论质疑成功还是失败，都会有人受罚，结束质疑流程，开始新回合
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

    // 使用引擎方法结束质疑阶段
    const nextState = engine.endChallengePhase();
    setGameState(nextState);

    // 索引映射: 1 (AI3/卡莲) -> 2, 2 (AI2/朱雀) -> 1, 3 (AI1/C.C.) -> 0
    const aiArrayIndexMap: Record<number, number> = { 1: 2, 2: 1, 3: 0 };
    const firstPlayerName = nextState.currentPlayerIndex === 0
      ? getCharacterName(selectedCharacter!)
      : nextState.aiPlayers[aiArrayIndexMap[nextState.currentPlayerIndex]]?.name;

    addLog(`【第${nextState.turnState.turnNumber}回合】骗子牌是${nextState.liarCard}`);
    addLog(`${firstPlayerName}先手！`);

    if (nextState.currentPlayerIndex === 0) {
      setIsProcessing(false);
    } else {
      // 延迟执行AI回合 - 使用统一的回合切换延迟
      setTimeout(() => {
        aiTurnRef.current?.();
      }, AI_DELAY.TURN_SWITCH);
    }
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
    // 索引映射: currentPlayerIndex -> aiPlayers数组索引
    // 1 (AI3/卡莲) -> 2
    // 2 (AI2/朱雀) -> 1
    // 3 (AI1/C.C.) -> 0
    const aiArrayIndexMap: Record<number, number> = { 1: 2, 2: 1, 3: 0 };
    const currentAIIndex = aiArrayIndexMap[state.currentPlayerIndex];
    
    if (currentAIIndex === undefined || currentAIIndex < 0 || currentAIIndex >= state.aiPlayers.length) {
      console.log('[handleAITurn] AI索引无效:', state.currentPlayerIndex, '->', currentAIIndex);
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
      
      // 检查是否只剩玩家存活
      const activeAIs = state.aiPlayers.filter((a) => a.isActive && a.stats.hp > 0);
      if (activeAIs.length === 0 && state.playerStats.hp > 0) {
        // 只剩玩家存活，玩家获胜
        console.log('[handleAITurn] 只剩玩家存活，玩家获胜');
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
        // 下一个玩家但玩家已死亡，继续跳过
        setTimeout(() => aiTurnRef.current?.(), AI_DELAY.TURN_SWITCH);
      }
      return;
    }

    setIsProcessing(true);
    playSound('turn-start');
    addLog(`${ai.name} 的回合...`);

    // 设置AI思考状态（显示思考指示器）
    setAiThinkingState({ isThinking: true, aiId: currentAIId });

    // AI思考延迟 - 使用统一的延迟配置
    setTimeout(() => {
      try {
        console.log('[handleAITurn] AI开始出牌:', ai.name);

        // 清除思考状态
        setAiThinkingState({ isThinking: false, aiId: null });

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

        // 延迟后进入质疑阶段 - 使用AI_DELAY.PLAY_TO_CHALLENGE确保动画完成
        setTimeout(() => {
          console.log('[handleAITurn] 进入质疑阶段');
          enterChallengePhase(engine, newState);
        }, AI_DELAY.PLAY_TO_CHALLENGE);
      } catch (e) {
        console.error('AI出牌错误:', e);
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

  /** 开始游戏 */
  const handleStart = useCallback(() => {
    playSound('button-click');
    setCurrentScreen('character-select');
  }, []);

  /** 打开设置 */
  const handleSettings = useCallback(() => {
    playSound('button-click');
    setCurrentScreen('settings');
  }, []);

  /** 打开帮助 */
  const handleHelp = useCallback(() => {
    playSound('button-click');
    setCurrentScreen('help');
  }, []);

  /** 选择角色 */
  const handleSelectCharacter = useCallback((id: CharacterId, avatarNum?: number) => {
    playSound('character-select');
    setSelectedCharacter(id);
    setSelectedAvatar(avatarNum || Math.floor(Math.random() * 4) + 1);
  }, []);

  /** 确认角色选择并开始游戏 */
  const handleConfirmCharacter = useCallback(() => {
    if (!selectedCharacter) return;

    playSound('button-click');

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
    const initialState = gameEngineRef.current.initializeGame(selectedCharacter, shuffled);

    setGameState(initialState);
    setSelectedCards([]);

    // 判断谁先手
    const isPlayerFirst = initialState.currentPlayerIndex === 0;
    // 索引映射: 1 (AI3/卡莲) -> 2, 2 (AI2/朱雀) -> 1, 3 (AI1/C.C.) -> 0
    const aiArrayIndexMap: Record<number, number> = { 1: 2, 2: 1, 3: 0 };
    const firstPlayerName = isPlayerFirst
      ? getCharacterName(selectedCharacter)
      : initialState.aiPlayers[aiArrayIndexMap[initialState.currentPlayerIndex]]?.name;

    setGameLog([
      '游戏开始！',
      `【第1回合】骗子牌是${initialState.liarCard}`,
      `${firstPlayerName}先手！`,
    ]);

    setCurrentScreen('game-table');
    playBGM('game-normal');

    // 如果AI先手，自动执行AI回合
    if (!isPlayerFirst) {
      setTimeout(() => {
        handleAITurn();
      }, 1500);
    }
  }, [selectedCharacter, handleAITurn]);

  /** 返回主菜单 */
  const handleBack = useCallback(() => {
    playSound('button-click');
    setCurrentScreen('main-menu');
    setSelectedCharacter(null);
  }, []);

  /** 返回主菜单并重置游戏 */
  const handleBackToMenu = useCallback(() => {
    playSound('button-click');
    setCurrentScreen('main-menu');
    setSelectedCharacter(null);
    setGameState(null);
    setGameLog([]);
    setSelectedCards([]);
    setCurrentFunnyAction(null);
    playBGM('main-menu');
  }, []);

  /** 玩家选择/取消选择牌 */
  const handleToggleCardSelection = useCallback(
    (cardId: string) => {
      if (!gameEngineRef.current || isProcessing) return;

      const engine = gameEngineRef.current;
      const state = engine.getState();

      console.log('[handleToggleCardSelection] 当前阶段:', state.phase, '是否是玩家回合:', state.phase === 'player_turn');

      if (state.phase !== 'player_turn') {
        console.log('[handleToggleCardSelection] 不是玩家回合，无法选择牌');
        return;
      }

      // 更新引擎中的选中状态
      engine.toggleCardSelection(cardId);

      // 从引擎获取最新的选中状态来更新UI
      const newState = engine.getState();
      console.log('[handleToggleCardSelection] 选中状态更新:', newState.playerSelectedCards);
      setSelectedCards(newState.playerSelectedCards);

      playSound('button-click');
    },
    [isProcessing]
  );

  /** 玩家确认出牌 */
  const handleConfirmPlay = useCallback(() => {
    if (!gameEngineRef.current || selectedCards.length === 0 || isProcessing) return;

    setIsProcessing(true);
    playSound('card-play');

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

      // 延迟后进入质疑阶段 - 使用统一的延迟配置
      setTimeout(() => {
        enterChallengePhase(engine, newState);
      }, AI_DELAY.PLAY_TO_CHALLENGE);
    } catch (e) {
      console.error('出牌错误:', e);
      setIsProcessing(false);
    }
  }, [selectedCards, isProcessing, addLog, selectedCharacter, enterChallengePhase]);

  /** 玩家质疑 */
  const handleChallenge = useCallback(() => {
    if (!gameEngineRef.current || isProcessing) return;

    setIsProcessing(true);
    playSound('challenge');

    const engine = gameEngineRef.current;
    const state = engine.getState();
    const playedCards = state.turnState.playedCards;
    const playedBy = playedCards?.playerId;

    const playerName = getCharacterName(selectedCharacter!);
    const targetName =
      playedBy === 'player'
        ? playerName
        : state.aiPlayers.find((ai: { id: string }) => ai.id === playedBy)?.name || playedBy;

    addLog(`${playerName}向${targetName}发起质疑！`);

    const newState = engine.playerChallengeDecision(true);

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

    const loser = wasLie ? playedBy : 'player';
    const loserName =
      loser === 'player'
        ? playerName
        : state.aiPlayers.find((ai: { id: string }) => ai.id === loser)?.name || loser;

    setGameState(newState);
    handleGeassResult(newState, playerName, targetName, loserName);
  }, [isProcessing, addLog, selectedCharacter, handleGeassResult]);

  /** 玩家不质疑（跳过） */
  const handlePass = useCallback(() => {
    if (!gameEngineRef.current || isProcessing) return;

    playSound('button-click');

    const engine = gameEngineRef.current;
    const state = engine.getState();
    const playedBy = state.turnState.playedCards?.playerId;
    const playerName = getCharacterName(selectedCharacter!);

    addLog(`${playerName}选择不质疑`);

    // UI顺序: 玩家(0) -> AI3(1) -> AI2(2) -> AI1(3) -> 玩家(0)
    const getPlayerIndex = (id: string): number => {
      if (id === 'player') return 0;
      if (id === 'ai') return 3; // AI1 (C.C.)
      if (id === 'ai2') return 2; // AI2 (朱雀)
      if (id === 'ai3') return 1; // AI3 (卡莲)
      return 0;
    };

    const playedByIndex = getPlayerIndex(playedBy || 'player');

    // 玩家不质疑后，继续检查玩家之后的AI（顺时针方向）
    // 玩家索引是0，下家是AI3(1)，然后是AI2(2)，然后是AI1(3)
    let currentIndex = 1; // 从AI3开始
    let checkedCount = 0;

    // 依次询问剩余的AI
    while (checkedCount < 3) {
      // 如果回到出牌者，说明所有人都已询问完毕
      if (currentIndex === playedByIndex) {
        break;
      }

      // 根据索引映射到aiPlayers数组
      // aiPlayers[0]=AI1(ai), aiPlayers[1]=AI2(ai2), aiPlayers[2]=AI3(ai3)
      const aiArrayIndex = currentIndex === 1 ? 2 : currentIndex === 2 ? 1 : 0;
      const challengerAI = state.aiPlayers[aiArrayIndex];

      if (!challengerAI || !challengerAI.isActive || challengerAI.stats.hp <= 0) {
        // 该AI已淘汰，跳过
        console.log('[handlePass] AI已淘汰，跳过:', challengerAI?.name);
        currentIndex = (currentIndex + 1) % 4;
        checkedCount++;
        continue;
      }

      // AI决策（30%概率质疑）
      const shouldChallenge = Math.random() < 0.3;

      if (shouldChallenge) {
        playSound('challenge');
        const targetName =
          playedBy === 'player'
            ? playerName
            : state.aiPlayers.find((ai: { id: string }) => ai.id === playedBy)?.name || playedBy;

        addLog(`${challengerAI.name}向${targetName}发起质疑！`);

        const newState = engine.aiChallengeDecision(challengerAI.id);

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
            : newState.aiPlayers.find((ai: { id: string }) => ai.id === loser)?.name || loser;

        setGameState(newState);
        handleGeassResult(newState, challengerAI.name, targetName, loserName);
        return;
      } else {
        addLog(`${challengerAI.name}选择不质疑`);
      }

      currentIndex = (currentIndex + 1) % 4;
      checkedCount++;
    }

    addLog('无人质疑，回合继续');

    // 使用引擎方法结束质疑阶段
    const nextState = engine.endChallengePhase();
    setGameState(nextState);

    const nextPlayerIndex = nextState.currentPlayerIndex;

    if (nextPlayerIndex === 0) {
      addLog(`【第${nextState.turnState.turnNumber}回合】骗子牌是${nextState.liarCard}`);
      const firstPlayerName = nextPlayerIndex === 0 ? playerName : state.aiPlayers[nextPlayerIndex - 1]?.name;
      addLog(`${firstPlayerName}先手！`);
      setIsProcessing(false);
    } else {
      setTimeout(() => {
        handleAITurn();
      }, AI_DELAY.TURN_SWITCH);
    }
  }, [isProcessing, addLog, selectedCharacter, handleGeassResult, handleAITurn]);

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

  /** 重新开始游戏 */
  const handleRestart = useCallback(() => {
    playSound('button-click');
    setCurrentScreen('character-select');
    setSelectedCharacter(null);
    setGameState(null);
    setGameLog([]);
    setSelectedCards([]);
    setCurrentFunnyAction(null);
    playBGM('main-menu');
  }, []);

  /** 返回主菜单 */
  const handleMainMenu = useCallback(() => {
    playSound('button-click');
    setCurrentScreen('main-menu');
    setSelectedCharacter(null);
    setGameState(null);
    setGameLog([]);
    setSelectedCards([]);
    setCurrentFunnyAction(null);
    playBGM('main-menu');
  }, []);

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
   * 渲染设置屏幕 - 简化版，移除难度/性格设置
   */
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

  /**
   * 渲染帮助屏幕
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
