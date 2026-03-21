/**
 * =============================================================================
 * Code Geass: Liar's Game - 游戏主界面（重构版）
 * =============================================================================
 *
 * 游戏主界面组件，采用新的动画系统架构：
 * - 使用重构后的动画系统，消除硬编码
 * - 角色与动画逻辑完全解耦
 * - 支持灵活的角色配置
 *
 * @author Code Agent
 * @version 4.0.0 - 动画系统重构版
 */

import React, { useState, useEffect, useRef } from 'react';
import { ChibiAvatar, AvatarPreloader } from '../components/characters';
import type { Card, CardRank, CharacterId, FunnyAction, GameState } from '../types';
import cardBack from '/assets/cards/card-back.svg';

// 导入新的动画系统
import {
  useAnimation,
  parseGameStateForAnimation,
  setPlayerCharacter,
  type PlayerId,
  type AnimationType,
} from '../animation';

// ============================================
// 角色信息配置（从角色ID获取显示信息）
// ============================================

/** 角色基础信息映射 */
const CHARACTER_BASE_INFO: Record<CharacterId, { displayName: string; colorTheme: string }> = {
  lelouch: { displayName: '鲁鲁修', colorTheme: '#d4af37' },
  cc: { displayName: 'C.C.', colorTheme: '#22c55e' },
  suzaku: { displayName: '朱雀', colorTheme: '#3b82f6' },
  kallen: { displayName: '卡莲', colorTheme: '#dc2626' },
};

/**
 * 获取角色显示名称
 * @param characterId 角色ID
 */
const getCharacterDisplayName = (characterId: CharacterId | null | undefined): string => {
  if (!characterId) return '未知角色';
  return CHARACTER_BASE_INFO[characterId]?.displayName || '未知角色';
};

/**
 * 获取角色颜色主题
 * @param characterId 角色ID
 */
const getCharacterColorTheme = (characterId: CharacterId | null | undefined): string => {
  if (!characterId) return '#d4af37';
  return CHARACTER_BASE_INFO[characterId]?.colorTheme || '#d4af37';
};

/**
 * GameTable组件属性接口
 */
interface GameTableProps {
  /** 当前游戏状态 */
  gameState: GameState;
  /** 玩家选中的牌ID列表 */
  selectedCards: string[];
  /** 玩家选择的角色ID */
  selectedCharacter: CharacterId | null;
  /** 玩家选择的头像编号 */
  selectedAvatar?: number;
  /** AI角色ID列表 */
  aiCharacters?: CharacterId[];
  /** AI头像映射表 */
  aiAvatars?: Record<string, number>;
  /** 切换牌选择状态回调 */
  onToggleCardSelection: (cardId: string) => void;
  /** 确认出牌回调 */
  onConfirmPlay: () => void;
  /** 不质疑/跳过回调 */
  onPass: () => void;
  /** 质疑回调 */
  onChallenge: () => void;
  /** 返回主菜单回调 */
  onBackToMenu: () => void;
  /** 鲁鲁修技能回调 */
  onLelouchSkill?: (newRank: CardRank) => void;
  /** 游戏日志 */
  gameLog?: string[];
  /** 当前搞笑动作 */
  funnyAction?: FunnyAction | null;
  /** 是否正在处理中 */
  isProcessing?: boolean;
  /** 是否可以使用技能 */
  canUseSkill?: boolean;
  /** AI思考状态 */
  aiThinkingState?: {
    isThinking: boolean;
    aiId: string | null;
  };
}

/**
 * 将动画类型映射到CSS类名
 */
const getAnimationClassName = (type: AnimationType | null): string => {
  if (!type) return '';
  const classMap: Record<AnimationType, string> = {
    play: 'cg-anim-play',
    aiPlay: 'cg-anim-aiPlay',
    challenge: 'cg-anim-challenge',
    dodge: 'cg-anim-dodge',
    hit: 'cg-anim-hit',
    skip: '',
    think: '',
  };
  return classMap[type] || '';
};

/**
 * 获取动画文本样式类
 */
const getAnimationTextClassName = (type: AnimationType | null): string => {
  if (!type) return '';
  return `cg-action-${type}`;
};

/**
 * 游戏主界面组件
 */
export const GameTable: React.FC<GameTableProps> = ({
  gameState,
  selectedCards,
  selectedCharacter,
  selectedAvatar = 1,
  aiCharacters = ['cc', 'suzaku', 'kallen'],
  aiAvatars = {},
  onToggleCardSelection,
  onConfirmPlay,
  onPass,
  onChallenge,
  onBackToMenu,
  onLelouchSkill,
  gameLog = [],
  isProcessing = false,
  canUseSkill = true,
  aiThinkingState,
}) => {
  const [showLelouchSkill, setShowLelouchSkill] = useState(false);
  const [isLogExpanded, setIsLogExpanded] = useState(false);
  const logContentRef = useRef<HTMLDivElement>(null);
  const logPanelRef = useRef<HTMLDivElement>(null);
  const prevLogLengthRef = useRef(gameLog.length);
  const autoCollapseTimerRef = useRef<NodeJS.Timeout | null>(null);
  const isMobile = typeof window !== 'undefined' && window.innerWidth <= 768;
  const processedActionRef = useRef<string | null>(null);

  // 使用新的动画系统
  const {
    animations,
    persistentAnimation,
    playerChallengeAnimation,
    triggerAnimation,
    triggerPersistentAnimation,
    clearPersistentAnimation,
    setPlayerChallengeAnimation,
  } = useAnimation();

  // 初始化玩家角色到动画系统
  useEffect(() => {
    if (selectedCharacter) {
      setPlayerCharacter(selectedCharacter);
    }
  }, [selectedCharacter]);

  // 自动滚动到最新日志
  useEffect(() => {
    if (logContentRef.current && gameLog.length > prevLogLengthRef.current) {
      const logContainer = logContentRef.current;
      logContainer.scrollTo({
        top: logContainer.scrollHeight,
        behavior: 'smooth'
      });
    }
    prevLogLengthRef.current = gameLog.length;
  }, [gameLog]);

  // 移动端3秒无操作自动收起日志栏
  useEffect(() => {
    if (!isMobile || !isLogExpanded) return;

    const resetTimer = () => {
      if (autoCollapseTimerRef.current) {
        clearTimeout(autoCollapseTimerRef.current);
      }
      autoCollapseTimerRef.current = setTimeout(() => {
        setIsLogExpanded(false);
      }, 3000);
    };

    resetTimer();

    const logPanel = logPanelRef.current;
    if (logPanel) {
      const events = ['click', 'touchstart', 'scroll'];
      events.forEach(event => {
        logPanel.addEventListener(event, resetTimer);
      });

      return () => {
        events.forEach(event => {
          logPanel.removeEventListener(event, resetTimer);
        });
        if (autoCollapseTimerRef.current) {
          clearTimeout(autoCollapseTimerRef.current);
        }
      };
    }

    return () => {
      if (autoCollapseTimerRef.current) {
        clearTimeout(autoCollapseTimerRef.current);
      }
    };
  }, [isLogExpanded, isMobile]);

  // 监听游戏状态变化触发动画 - 使用新的动画系统
  useEffect(() => {
    if (!gameState) return;

    const { lastAction, phase, geassResult } = gameState;

    console.log('[GameTable Animation] useEffect triggered:', { lastAction, processedAction: processedActionRef.current, phase });

    // 防止重复处理同一个动作
    if (lastAction && lastAction === processedActionRef.current) {
      console.log('[GameTable Animation] 跳过重复动作');
      return;
    }

    // 使用新的触发器系统解析动画
    const animationEvent = parseGameStateForAnimation(gameState);
    console.log('[GameTable Animation] parseGameStateForAnimation result:', animationEvent);

    if (animationEvent) {
      const { playerId, data } = animationEvent;
      const animType = data?.animationType as AnimationType;
      const text = (data?.text as string) || '';

      console.log('[Animation] 触发:', { playerId, type: animType, text });

      // 记录已处理的动作
      if (lastAction) {
        processedActionRef.current = lastAction;
      }

      // 处理出牌动画 - 需要特殊处理持续动画
      if (animType === 'play' || animType === 'aiPlay') {
        // 设置持续动画
        triggerPersistentAnimation(
          playerId,
          animType === 'play' ? 'play' : 'aiPlay',
          '出牌中...'
        );
        // 触发普通动画
        triggerAnimation(playerId, animType, text || '出牌');
      }
      // 处理质疑动画
      else if (animType === 'challenge') {
        // 获取被质疑者ID（从触发器数据中获取）
        const targetId = data?.targetId as PlayerId | undefined;
        const challengerId = data?.challengerId as PlayerId | undefined;

        console.log('[Animation] 质疑动画:', { playerId, targetId, challengerId, isPlayer: playerId === 'player' });

        if (playerId === 'player' && targetId) {
          // 玩家质疑时设置持续动画
          setPlayerChallengeAnimation({
            show: true,
            targetId: targetId
          });
          triggerAnimation(playerId, 'challenge', '质疑中...');
        } else if (targetId) {
          // AI质疑时，同时显示质疑者和被质疑者的动画
          // 质疑者显示"质疑中..."
          triggerAnimation(playerId, 'challenge', '质疑中...');
          // 被质疑者显示"被质疑"
          triggerAnimation(targetId, 'challenge', '被质疑');
        } else {
          // 如果没有targetId，只显示质疑者动画
          triggerAnimation(playerId, 'challenge', text || '质疑');
        }
      }
      // 其他动画类型
      else {
        triggerAnimation(playerId, animType, text);
      }
    }

    // 当进入质疑阶段时，清除出牌持续动画
    if (phase === 'challenge' && persistentAnimation.playerId) {
      setTimeout(() => {
        clearPersistentAnimation();
      }, 500);
    }

    // 当Geass结果出现时，清除玩家质疑动画
    if (geassResult?.activated && playerChallengeAnimation.show) {
      setTimeout(() => {
        setPlayerChallengeAnimation({ show: false, targetId: null });
      }, 500);
    }
  }, [gameState, triggerAnimation, triggerPersistentAnimation, clearPersistentAnimation, setPlayerChallengeAnimation]);

  // 预加载头像
  useEffect(() => {
    if (selectedCharacter) {
      AvatarPreloader.preloadAvatar(selectedCharacter, selectedAvatar);
    }
    aiCharacters.forEach(char => {
      const avatarNum = aiAvatars[char] || 1;
      AvatarPreloader.preloadAvatar(char, avatarNum);
    });
  }, [selectedCharacter, selectedAvatar, aiCharacters, aiAvatars]);

  if (!gameState) return null;

  const { phase, liarCard, playerStats, aiPlayers, turnState } = gameState;
  const isPlayerTurn = phase === 'player_turn';
  const isChallengePhase = phase === 'challenge';
  const playerHand = gameState.playerHand || [];
  const currentRound = turnState?.turnNumber || 1;
  const isPlayerChallengeTurn = isChallengePhase;

  const handlePlayClick = () => {
    if (selectedCards.length > 0) onConfirmPlay();
  };

  const handleLelouchSkillClick = () => setShowLelouchSkill(true);

  const toggleLogPanel = () => {
    setIsLogExpanded(prev => !prev);
  };

  const handleLelouchRankSelect = (rank: CardRank) => {
    setShowLelouchSkill(false);
    onLelouchSkill?.(rank);
  };

  const getSuitSymbol = (suit: string) =>
    ({ spades: '♠', hearts: '♥', clubs: '♣', diamonds: '♦', joker: '🃏' })[suit] || suit;

  const getSuitColor = (suit: string) =>
    suit === 'joker' ? '#d4af37' : suit === 'hearts' || suit === 'diamonds' ? '#dc2626' : '#1a1a24';

  // 从gameState动态获取玩家角色信息
  const playerCharacterId = selectedCharacter;
  const playerName = playerCharacterId ? getCharacterDisplayName(playerCharacterId) : '玩家';
  const playerColor = getCharacterColorTheme(playerCharacterId);

  /**
   * 渲染角色组件 - 使用新的动画系统
   */
  const renderCharacter = (
    name: string,
    characterId: CharacterId | null,
    hp: number,
    cardCount: number,
    color: string,
    avatarNum: number,
    isTop: boolean = false,
    isActive: boolean = true,
    playerId: PlayerId = 'player'
  ) => {
    // 从新的动画系统获取动画状态
    const animation = animations[playerId];
    const animationClass = getAnimationClassName(animation?.type || null);

    // 检查是否显示思考指示器
    const isThinking = aiThinkingState?.isThinking && aiThinkingState?.aiId === playerId;

    // 检查是否显示持续动画（出牌中）
    const isPersistentAnimating = persistentAnimation.playerId === playerId && persistentAnimation.type;
    const persistentAnimationClass = isPersistentAnimating ? getAnimationClassName(persistentAnimation.type) : '';

    // 检查是否显示玩家质疑动画
    const isPlayerChallenging = playerChallengeAnimation.show && playerId === 'player';
    const isBeingChallenged = playerChallengeAnimation.show && playerChallengeAnimation.targetId === playerId;

    // 获取动画文本
    const animationText = animation?.text || '';
    const persistentText = isPersistentAnimating ? persistentAnimation.text : '';

    return (
      <div className={`cg-character ${isTop ? 'cg-character-top' : ''} ${!isActive ? 'cg-character-dead' : ''} ${animationClass} ${persistentAnimationClass} ${isThinking ? 'cg-character-thinking' : ''} ${isPlayerChallenging ? 'cg-player-challenging' : ''} ${isBeingChallenged ? 'cg-being-challenged' : ''}`}>
        {/* 动画文字提示 */}
        {animationText && (
          <div className={`cg-action-text ${getAnimationTextClassName(animation.type)}`}>
            {animationText}
          </div>
        )}
        {/* 持续动画提示（出牌中） */}
        {isPersistentAnimating && (
          <div className={`cg-action-text ${getAnimationTextClassName(persistentAnimation.type)} cg-persistent-text`}>
            {persistentText}
          </div>
        )}
        {/* 玩家质疑动画提示 */}
        {isPlayerChallenging && (
          <div className="cg-action-text cg-action-challenge cg-persistent-text">
            质疑中...
          </div>
        )}
        {/* 被质疑动画提示 */}
        {isBeingChallenged && (
          <div className="cg-action-text cg-action-challenge cg-persistent-text">
            被质疑
          </div>
        )}
        {/* AI思考指示器 */}
        {isThinking && (
          <div className="cg-thinking-indicator">
            <span className="cg-thinking-dots">...</span>
          </div>
        )}
        <div className="cg-character-avatar">
          {characterId && (
            <ChibiAvatar
              characterId={characterId}
              size={120}
              avatarNumber={avatarNum}
              priority={true}
            />
          )}
        </div>
        <div className="cg-character-info">
          <div className="cg-character-name" style={{ color }}>{name}</div>
          <div className="cg-character-stats">
            <span className="cg-hp-display">{Array(hp).fill('❤').join('')}</span>
            <span className="cg-card-count">🃏{cardCount}</span>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="cg-game-table">
      {/* 顶部栏 - 移动端显示游戏记录按钮，桌面端隐藏 */}
      <div className="cg-top-bar">
        <button
          className={`cg-log-toggle-btn-top ${isLogExpanded ? 'expanded' : ''}`}
          onClick={toggleLogPanel}
          aria-label={isLogExpanded ? '收起记录' : '展开记录'}
        >
          <span className="cg-log-toggle-icon">📜</span>
          <span className="cg-log-toggle-text">记录</span>
          {!isLogExpanded && gameLog.length > 0 && (
            <span className="cg-log-badge">{gameLog.length}</span>
          )}
        </button>
      </div>

      {/* 主布局：左侧日志 + 中间游戏区 */}
      <div className="cg-main-layout">
        {/* 左侧游戏记录栏 */}
        <div
          ref={logPanelRef}
          className={`cg-log-panel ${isLogExpanded ? 'expanded' : 'collapsed'}`}
        >
          <div className="cg-log-header">
            <span>📜 游戏记录</span>
            <button className="cg-log-close-btn mobile-only" onClick={toggleLogPanel}>✕</button>
          </div>
          <div ref={logContentRef} className="cg-log-content">
            {gameLog.map((log, i) => (
              <div
                key={i}
                className={`cg-log-item ${log.includes('质疑') ? 'challenge' : ''} ${log.includes('Geass') ? 'geass' : ''}`}
              >
                {log}
              </div>
            ))}
          </div>
        </div>

        {/* 遮罩层 - 移动端展开时显示 */}
        {isLogExpanded && <div className="cg-log-overlay" onClick={toggleLogPanel} />}

        {/* 中间游戏区域 */}
        <div className="cg-game-area">
          {/* 顶部AI (ai3/卡莲) - 需求规格：上方AI角色 */}
          <div className="cg-ai-top">
            {renderCharacter(
              getCharacterDisplayName(aiPlayers?.[2]?.character),
              aiPlayers?.[2]?.character || aiCharacters[2],
              aiPlayers?.[2]?.stats?.hp || 0,
              aiPlayers?.[2]?.hand?.length || 0,
              getCharacterColorTheme(aiPlayers?.[2]?.character),
              aiAvatars[aiPlayers?.[2]?.character || aiCharacters[2]] || 1,
              true,
              aiPlayers?.[2]?.isActive !== false && (aiPlayers?.[2]?.stats?.hp || 0) > 0,
              'ai3'
            )}
          </div>

          {/* 中间行：左侧AI + 圆桌 + 右侧AI */}
          <div className="cg-middle-section">
            {/* 左侧AI (ai/C.C.) - 需求规格：左方AI角色 */}
            <div className="cg-ai-left">
              {renderCharacter(
                getCharacterDisplayName(aiPlayers?.[0]?.character),
                aiPlayers?.[0]?.character || aiCharacters[0],
                aiPlayers?.[0]?.stats?.hp || 0,
                aiPlayers?.[0]?.hand?.length || 0,
                getCharacterColorTheme(aiPlayers?.[0]?.character),
                aiAvatars[aiPlayers?.[0]?.character || aiCharacters[0]] || 1,
                false,
                aiPlayers?.[0]?.isActive !== false && (aiPlayers?.[0]?.stats?.hp || 0) > 0,
                'ai'
              )}
            </div>

            {/* 圆桌区域 */}
            <div className="cg-table-area">
              <div className="cg-table">
                <div className="cg-table-inner">
                  {turnState?.playedCards ? (
                    <div className="cg-played">
                      <div className="cg-played-name">
                        {turnState.playedCards.playerId === 'player'
                          ? playerName
                          : turnState.playedCards.playerId.startsWith('ai')
                            ? getCharacterDisplayName(
                                aiPlayers?.find(ai => ai.id === turnState.playedCards?.playerId)?.character
                              )
                            : '未知玩家'}{' '}
                        出牌
                      </div>
                      <div className="cg-cards">
                        {turnState.playedCards.actualCards.map((c: Card) => (
                          <div key={c.id} className="cg-card-small cg-card-back">
                            <img src={cardBack} alt="牌背" />
                          </div>
                        ))}
                      </div>
                      <div className="cg-card-count-display">
                        {turnState.playedCards.cardIds.length} 张牌
                      </div>
                    </div>
                  ) : (
                    <div className="cg-placeholder-text">等待出牌...</div>
                  )}
                </div>
              </div>
            </div>

            {/* 右侧AI (ai2/朱雀) - 需求规格：右方AI角色 */}
            <div className="cg-ai-right">
              {renderCharacter(
                getCharacterDisplayName(aiPlayers?.[1]?.character),
                aiPlayers?.[1]?.character || aiCharacters[1],
                aiPlayers?.[1]?.stats?.hp || 0,
                aiPlayers?.[1]?.hand?.length || 0,
                getCharacterColorTheme(aiPlayers?.[1]?.character),
                aiAvatars[aiPlayers?.[1]?.character || aiCharacters[1]] || 1,
                false,
                aiPlayers?.[1]?.isActive !== false && (aiPlayers?.[1]?.stats?.hp || 0) > 0,
                'ai2'
              )}
            </div>
          </div>

          {/* 底部玩家区域 - 角色左侧，手牌右侧 */}
          <div className="cg-player-section">
            {/* 左侧：玩家信息 */}
            <div className="cg-player-info">
              {renderCharacter(
                playerName,
                selectedCharacter,
                playerStats.hp,
                playerHand.length,
                playerColor,
                selectedAvatar,
                false,
                true,
                'player'
              )}
            </div>

            {/* 右侧：手牌区域 + 技能按钮 */}
            <div className="cg-hand-section">
              <div className="cg-hand" style={{ width: `${Math.max(60, playerHand.length * 26 + 22)}px` }}>
                {playerHand.map((card: Card, i: number) => {
                  const isSelected = selectedCards.includes(card.id);
                  return (
                    <button
                      key={card.id}
                      className={`cg-card ${isSelected ? 'selected' : ''} ${!isPlayerTurn || isProcessing ? 'disabled' : ''}`}
                      onClick={() => onToggleCardSelection(card.id)}
                      style={{
                        left: `${i * 26}px`,
                        transform: isSelected ? 'translateY(-8px)' : 'none',
                        zIndex: isSelected ? playerHand.length + 10 : playerHand.length - i,
                      }}
                      disabled={!isPlayerTurn || isProcessing}
                    >
                      <div className="cg-card-face">
                        <div style={{ color: getSuitColor(card.suit), fontSize: '13px' }}>{card.rank}</div>
                        <div style={{ color: getSuitColor(card.suit), fontSize: '15px' }}>
                          {getSuitSymbol(card.suit)}
                        </div>
                      </div>
                      {isSelected && <div className="cg-check">✓</div>}
                    </button>
                  );
                })}
              </div>
              {/* 鲁鲁修技能按钮 - 移至手牌区域下方 */}
              {selectedCharacter === 'lelouch' && (
                <button
                  className="cg-skill-btn"
                  onClick={handleLelouchSkillClick}
                  disabled={isProcessing || !canUseSkill || !isPlayerTurn}
                >
                  {canUseSkill ? '绝对命令' : '已使用'}
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* 底部功能栏 */}
      <div className="cg-bottom-bar">
        {/* 左侧：返回按钮 */}
        <div className="cg-bottom-left">
          <button className="cg-back-btn" onClick={onBackToMenu}>
            ← 主页面
          </button>
        </div>

        {/* 中间：操作区 */}
        <div className="cg-bottom-center">
          {/* 过程提示文本 - 仅在非质疑阶段显示 */}
          {!isPlayerChallengeTurn && (
            <div className="cg-status-text">
              {isPlayerTurn && selectedCards.length === 0 && '请选择要出的牌'}
              {isPlayerTurn && selectedCards.length > 0 && `已选择 ${selectedCards.length} 张牌`}
              {isChallengePhase && !isPlayerChallengeTurn && '等待其他玩家质疑...'}
              {!isPlayerTurn && !isChallengePhase && 'AI回合中...'}
            </div>
          )}

          {/* 操作按钮 */}
          <div className="cg-action-buttons">
            {isPlayerTurn && selectedCards.length > 0 && (
              <button className="cg-btn cg-btn-play" onClick={handlePlayClick} disabled={isProcessing}>
                出牌 ({selectedCards.length})
              </button>
            )}

            {isPlayerChallengeTurn && (
              <>
                <button className="cg-btn cg-btn-challenge" onClick={onChallenge} disabled={isProcessing}>
                  ⚔️ 质疑
                </button>
                <button className="cg-btn cg-btn-skip" onClick={onPass} disabled={isProcessing}>
                  不质疑
                </button>
              </>
            )}
          </div>
        </div>

        {/* 右侧：回合信息 */}
        <div className="cg-bottom-right">
          <div className="cg-round-display">
            <div className="cg-round-label">回合</div>
            <div className="cg-round-number">{currentRound}</div>
          </div>
          <div className="cg-liar-display">
            <div className="cg-liar-label">骗子牌</div>
            <div className="cg-liar-value">{liarCard}</div>
          </div>
        </div>
      </div>

      {/* 鲁鲁修技能弹窗 */}
      {showLelouchSkill && (
        <div className="cg-modal">
          <div className="cg-modal-content">
            <h3>选择新的骗子牌</h3>
            <div className="cg-rank-btns">
              {['Q', 'K', 'A'].map(r => (
                <button
                  key={r}
                  className={r === liarCard ? 'current' : ''}
                  onClick={() => handleLelouchRankSelect(r as CardRank)}
                >
                  {r}
                </button>
              ))}
            </div>
            <button className="cg-btn-skip" onClick={() => setShowLelouchSkill(false)}>
              取消
            </button>
          </div>
        </div>
      )}

      <style>{`
        /* 基础布局 */
        .cg-game-table { 
          position: fixed; 
          inset: 0; 
          display: flex; 
          flex-direction: column; 
          background: linear-gradient(180deg, #0a0a0f, #1a1a24); 
          font-family: 'Noto Sans SC', sans-serif; 
          overflow: hidden;
        }

        /* 主布局：日志 + 游戏区 */
        .cg-main-layout { 
          flex: 1; 
          display: flex; 
          overflow: hidden;
          margin-bottom: 0;
        }

        /* 左侧游戏记录栏 - 桌面端固定定位 */
        .cg-log-panel {
          width: 240px;
          min-width: 240px;
          background: rgba(0,0,0,0.5);
          border-right: 1px solid rgba(212,175,55,0.2);
          display: flex;
          flex-direction: column;
          height: calc(100vh - 70px);
          position: fixed;
          left: 0;
          top: 0;
          z-index: 40;
        }
        .cg-log-header { 
          padding: 12px 15px;
          font-size: 14px; 
          color: #d4af37; 
          font-weight: bold;
          border-bottom: 1px solid rgba(212,175,55,0.3); 
          background: rgba(0,0,0,0.3);
        }
        .cg-log-content { 
          flex: 1; 
          overflow-y: auto; 
          padding: 10px;
          display: flex; 
          flex-direction: column; 
          gap: 5px; 
          scroll-behavior: smooth;
          -webkit-overflow-scrolling: touch;
        }
        .cg-log-content::-webkit-scrollbar {
          width: 6px;
        }
        .cg-log-content::-webkit-scrollbar-track {
          background: rgba(0,0,0,0.2);
          border-radius: 3px;
        }
        .cg-log-content::-webkit-scrollbar-thumb {
          background: rgba(212,175,55,0.4);
          border-radius: 3px;
          transition: background 0.2s;
        }
        .cg-log-content::-webkit-scrollbar-thumb:hover {
          background: rgba(212,175,55,0.6);
        }
        .cg-log-content::-webkit-scrollbar-thumb:active {
          background: rgba(212,175,55,0.8);
        }
        .cg-log-item { 
          padding: 6px 10px; 
          background: rgba(255,255,255,0.05); 
          border-radius: 4px; 
          font-size: 12px; 
          color: #e5e5e5; 
          line-height: 1.4;
        }
        .cg-log-item.challenge { 
          background: rgba(220,38,38,0.2); 
          border-left: 2px solid #dc2626; 
        }
        .cg-log-item.geass { 
          background: rgba(212,175,55,0.2); 
          border-left: 2px solid #d4af37; 
        }

        /* 中间游戏区域 - 为固定左侧栏留出空间 */
        .cg-game-area {
          flex: 1;
          display: flex;
          flex-direction: column;
          padding: 5px 20px;
          gap: 5px;
          overflow: hidden;
          margin-left: 240px;
        }

        /* 顶部AI - 调整垂直位置向下移动 */
        .cg-ai-top {
          display: flex;
          justify-content: center;
          height: 160px;
          margin-bottom: -10px;
          margin-top: 40px;
          position: relative;
          z-index: 5;
        }

        /* 中间行 */
        .cg-middle-section { 
          flex: 1;
          display: flex; 
          align-items: center; 
          justify-content: center; 
          gap: 10px;
          min-height: 0;
        }
        .cg-ai-left, .cg-ai-right {
          width: 160px;
          display: flex;
          justify-content: center;
        }
        .cg-table-area {
          flex: 1;
          display: flex;
          justify-content: center;
          align-items: center;
          max-width: 260px;
        }

        /* 圆桌 */
        .cg-table { 
          width: 200px; 
          height: 200px; 
          border-radius: 50%; 
          background: linear-gradient(145deg, #1a3a1a, #0d260d); 
          border: 4px solid #2d5016; 
          box-shadow: inset 0 0 40px rgba(0,0,0,0.5); 
          display: flex; 
          align-items: center; 
          justify-content: center; 
        }
        .cg-table-inner { 
          width: 170px; 
          height: 170px; 
          border-radius: 50%; 
          background: radial-gradient(circle, #1e4a1e, #143614); 
          display: flex; 
          align-items: center; 
          justify-content: center; 
        }
        .cg-played { text-align: center; }
        .cg-played-name { color: #d4af37; font-size: 13px; margin-bottom: 8px; }
        .cg-cards { display: flex; justify-content: center; gap: 6px; }
        .cg-card-small { 
          width: 32px; 
          height: 44px; 
          border-radius: 3px; 
          border: 1px solid #d4af37; 
          overflow: hidden; 
        }
        .cg-card-small img { width: 100%; height: 100%; object-fit: cover; }
        .cg-card-back { background: linear-gradient(135deg, #4c1d95, #1e1b4b); }
        .cg-card-count-display { color: #d4af37; font-size: 12px; margin-top: 8px; }
        .cg-placeholder-text { color: rgba(255,255,255,0.3); font-size: 14px; }

        /* 顶部栏 */
        .cg-top-bar {
          position: fixed;
          top: 10px;
          left: 10px;
          z-index: 50;
          display: flex;
          align-items: center;
        }
        .cg-log-toggle-btn-top {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 8px 14px;
          background: linear-gradient(135deg, rgba(212, 175, 55, 0.9), rgba(180, 148, 31, 0.9));
          border: 2px solid rgba(212, 175, 55, 1);
          border-radius: 20px;
          color: #0a0a0f;
          font-size: 13px;
          font-weight: bold;
          cursor: pointer;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);
          transition: all 0.3s ease;
        }
        .cg-log-toggle-btn-top:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 16px rgba(212, 175, 55, 0.4);
        }
        .cg-log-toggle-btn-top.expanded {
          background: rgba(60, 60, 70, 0.95);
          border-color: rgba(255, 255, 255, 0.3);
          color: white;
        }
        .cg-log-toggle-text {
          font-size: 12px;
        }

        /* 角色卡片 - 统一尺寸 */
        .cg-character { 
          display: flex; 
          flex-direction: column; 
          align-items: center; 
          gap: 6px; 
          background: rgba(0,0,0,0.5); 
          padding: 10px; 
          border-radius: 10px; 
          border: 1px solid rgba(212,175,55,0.3);
          width: 140px;
          min-width: 140px;
          height: 170px;
          min-height: 170px;
          justify-content: flex-start;
          transition: all 0.3s ease;
          position: relative;
        }
        .cg-character-dead {
          opacity: 0.4;
          filter: grayscale(100%);
          border-color: rgba(100,100,100,0.3);
          background: rgba(0,0,0,0.8);
        }
        .cg-character-dead .cg-character-name {
          color: #666 !important;
          text-decoration: line-through;
        }
        .cg-character-avatar { 
          filter: drop-shadow(0 3px 6px rgba(0,0,0,0.5)); 
          height: 100px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .cg-character-dead .cg-character-avatar {
          filter: grayscale(100%) brightness(0.5);
        }
        .cg-character-info { 
          text-align: center; 
          display: flex;
          flex-direction: column;
          gap: 4px;
        }
        .cg-character-name { font-size: 14px; font-weight: bold; }
        .cg-character-stats {
          display: flex;
          gap: 8px;
          align-items: center;
          justify-content: center;
          font-size: 12px;
          white-space: nowrap;
          flex-wrap: nowrap;
        }
        .cg-hp-display {
          display: flex;
          align-items: center;
          gap: 1px;
          font-size: 11px;
        }

        /* 动作文字提示 */
        .cg-action-text {
          position: absolute;
          top: -35px;
          left: 50%;
          transform: translateX(-50%);
          padding: 6px 16px;
          border-radius: 14px;
          font-size: 13px;
          font-weight: bold;
          white-space: nowrap;
          z-index: 1000;
          text-shadow: 0 1px 2px rgba(0,0,0,0.5);
          overflow: visible;
          max-width: none;
          min-width: max-content;
          pointer-events: none;
        }
        /* 顶部角色动画文字 - 统一显示在上方 */
        .cg-ai-top .cg-action-text {
          top: -35px;
          bottom: auto;
        }
        .cg-action-play {
          background: linear-gradient(135deg, #22c55e, #16a34a);
          color: white;
          box-shadow: 0 2px 8px rgba(34, 197, 94, 0.5);
          animation: actionTextPopPlay 1.5s ease-out forwards;
        }
        .cg-action-aiPlay {
          background: linear-gradient(135deg, #f97316, #ea580c);
          color: white;
          box-shadow: 0 2px 8px rgba(249, 115, 22, 0.5);
          animation: actionTextPopPlay 1.5s ease-out forwards;
        }
        .cg-action-challenge {
          background: linear-gradient(135deg, #9D50BB, #6E48AA);
          color: white;
          box-shadow: 0 2px 8px rgba(157, 80, 187, 0.5);
          animation: actionTextPopChallenge 1.5s ease-out forwards;
        }
        .cg-action-dodge {
          background: transparent;
          color: white;
          text-shadow: 0 0 4px #1E90FF, 0 0 8px #1E90FF;
          animation: actionTextPopDodge 1.5s ease-out forwards;
        }
        .cg-action-hit {
          background: transparent;
          color: white;
          text-shadow: 0 0 4px #DC143C, 0 0 8px #DC143C;
          animation: actionTextPopHit 1.5s ease-out forwards;
        }
        .cg-action-skip {
          background: linear-gradient(135deg, #6B7280, #4B5563);
          color: white;
          box-shadow: 0 2px 8px rgba(107, 114, 128, 0.5);
          animation: actionTextPopSkip 1.5s ease-out forwards;
        }

        /* 出牌文字动画 - 1500ms */
        @keyframes actionTextPopPlay {
          0% {
            opacity: 0;
            transform: translateX(-50%) translateY(10px) scale(0.8);
          }
          10% {
            opacity: 1;
            transform: translateX(-50%) translateY(0) scale(1.1);
          }
          15% {
            transform: translateX(-50%) translateY(0) scale(1);
          }
          85% {
            opacity: 1;
            transform: translateX(-50%) translateY(0) scale(1);
          }
          100% {
            opacity: 0;
            transform: translateX(-50%) translateY(-10px) scale(0.9);
          }
        }

        /* 质疑文字动画 - 1500ms */
        @keyframes actionTextPopChallenge {
          0% {
            opacity: 0;
            transform: translateX(-50%) translateY(10px) scale(0.8);
          }
          10% {
            opacity: 1;
            transform: translateX(-50%) translateY(0) scale(1.1);
          }
          15% {
            transform: translateX(-50%) translateY(0) scale(1);
          }
          85% {
            opacity: 1;
            transform: translateX(-50%) translateY(0) scale(1);
          }
          100% {
            opacity: 0;
            transform: translateX(-50%) translateY(-10px) scale(0.9);
          }
        }

        /* 闪避文字动画 - 1500ms */
        @keyframes actionTextPopDodge {
          0% {
            opacity: 0;
            transform: translateX(-50%) translateY(10px) scale(0.8);
          }
          20% {
            opacity: 1;
            transform: translateX(-50%) translateY(0) scale(1.1);
          }
          30% {
            transform: translateX(-50%) translateY(0) scale(1);
          }
          70% {
            opacity: 1;
            transform: translateX(-50%) translateY(0) scale(1);
          }
          100% {
            opacity: 0;
            transform: translateX(-50%) translateY(-8px) scale(0.95);
          }
        }

        /* 命中文字动画 - 1500ms */
        @keyframes actionTextPopHit {
          0% {
            opacity: 0;
            transform: translateX(-50%) translateY(10px) scale(0.8);
          }
          10% {
            opacity: 1;
            transform: translateX(-50%) translateY(0) scale(1.1);
          }
          15% {
            transform: translateX(-50%) translateY(0) scale(1);
          }
          85% {
            opacity: 1;
            transform: translateX(-50%) translateY(0) scale(1);
          }
          100% {
            opacity: 0;
            transform: translateX(-50%) translateY(-10px) scale(0.9);
          }
        }

        /* 不质疑文字动画 - 1500ms */
        @keyframes actionTextPopSkip {
          0% {
            opacity: 0;
            transform: translateX(-50%) translateY(10px) scale(0.8);
          }
          10% {
            opacity: 1;
            transform: translateX(-50%) translateY(0) scale(1.1);
          }
          15% {
            transform: translateX(-50%) translateY(0) scale(1);
          }
          85% {
            opacity: 1;
            transform: translateX(-50%) translateY(0) scale(1);
          }
          100% {
            opacity: 0;
            transform: translateX(-50%) translateY(-10px) scale(0.9);
          }
        }

        /* 持续动画文字样式 */
        .cg-persistent-text {
          animation: none !important;
          opacity: 1 !important;
        }

        /* 玩家质疑动画样式 */
        .cg-player-challenging {
          border-color: #9D50BB !important;
          box-shadow: 0 0 20px rgba(157, 80, 187, 0.6), inset 0 0 15px rgba(157, 80, 187, 0.3);
          animation: challengingPulse 1.5s ease-in-out infinite;
        }
        @keyframes challengingPulse {
          0%, 100% {
            transform: scale(1);
            box-shadow: 0 0 20px rgba(157, 80, 187, 0.6), inset 0 0 15px rgba(157, 80, 187, 0.3);
          }
          50% {
            transform: scale(1.02);
            box-shadow: 0 0 30px rgba(157, 80, 187, 0.8), inset 0 0 20px rgba(157, 80, 187, 0.4);
          }
        }

        /* 被质疑动画样式 */
        .cg-being-challenged {
          border-color: #ff6b6b !important;
          box-shadow: 0 0 20px rgba(255, 107, 107, 0.6), inset 0 0 15px rgba(255, 107, 107, 0.3);
          animation: beingChallengedPulse 1.5s ease-in-out infinite;
        }
        @keyframes beingChallengedPulse {
          0%, 100% {
            transform: scale(1);
            box-shadow: 0 0 20px rgba(255, 107, 107, 0.6), inset 0 0 15px rgba(255, 107, 107, 0.3);
          }
          50% {
            transform: scale(1.02);
            box-shadow: 0 0 30px rgba(255, 107, 107, 0.8), inset 0 0 20px rgba(255, 107, 107, 0.4);
          }
        }

        /* 角色动画效果 */
        /* 出牌动画 - 玩家绿色，350ms，缩放1.0→1.1→1.0 */
        .cg-anim-play {
          animation: playPulse 0.35s ease-out;
        }
        /* AI出牌动画 - 橙色系，350ms，缩放1.0→1.1→1.0 */
        .cg-anim-aiPlay {
          animation: aiPlayPulse 0.35s ease-out;
        }
        @keyframes playPulse {
          0% { transform: scale(1); }
          50% { transform: scale(1.1); }
          100% { transform: scale(1); }
        }
        @keyframes aiPlayPulse {
          0% { transform: scale(1); }
          50% {
            transform: scale(1.1);
            border-color: #f97316;
            box-shadow: 0 0 20px rgba(249, 115, 22, 0.6);
          }
          100% { transform: scale(1); }
        }

        /* 质疑动画 - 紫色边框闪烁 #9D50BB/#6E48AA，1800ms */
        .cg-anim-challenge {
          animation: challengeFlash 1.8s ease-out;
        }
        @keyframes challengeFlash {
          0%, 100% {
            border-color: rgba(212, 175, 55, 0.3);
            box-shadow: none;
          }
          10%, 30%, 50%, 70% {
            border-color: #9D50BB;
            box-shadow: 0 0 15px rgba(157, 80, 187, 0.7), inset 0 0 10px rgba(157, 80, 187, 0.3);
          }
          20%, 40%, 60%, 80% {
            border-color: #6E48AA;
            box-shadow: 0 0 25px rgba(110, 72, 170, 0.9), inset 0 0 15px rgba(110, 72, 170, 0.4);
          }
        }

        /* 闪避动画 - 蓝色 #1E90FF，±5px抖动，900ms */
        .cg-anim-dodge {
          animation: dodgeSuccess 0.9s ease-out;
        }
        @keyframes dodgeSuccess {
          0%, 100% {
            transform: translateX(0);
            border-color: rgba(212, 175, 55, 0.3);
            box-shadow: none;
          }
          10% {
            transform: translateX(-5px);
            border-color: #1E90FF;
            box-shadow: 0 0 20px rgba(30, 144, 255, 0.8);
          }
          20% {
            transform: translateX(5px);
            box-shadow: 0 0 30px rgba(30, 144, 255, 0.6);
          }
          30% {
            transform: translateX(-5px);
            box-shadow: 0 0 20px rgba(30, 144, 255, 0.4);
          }
          40% {
            transform: translateX(5px);
          }
          50% {
            transform: translateX(0);
            border-color: #1E90FF;
            box-shadow: 0 0 25px rgba(30, 144, 255, 0.5);
          }
          60% {
            transform: translateX(-3px);
          }
          70% {
            transform: translateX(3px);
          }
          80% {
            transform: translateX(-2px);
          }
          90% {
            transform: translateX(2px);
          }
        }

        /* AI思考指示器样式 */
        .cg-character-thinking {
          border-color: #3b82f6 !important;
          box-shadow: 0 0 15px rgba(59, 130, 246, 0.5), inset 0 0 10px rgba(59, 130, 246, 0.2);
        }
        .cg-thinking-indicator {
          position: absolute;
          top: -25px;
          left: 50%;
          transform: translateX(-50%);
          background: linear-gradient(135deg, #3b82f6, #2563eb);
          padding: 4px 12px;
          border-radius: 12px;
          font-size: 12px;
          font-weight: bold;
          color: white;
          z-index: 20;
          box-shadow: 0 2px 8px rgba(59, 130, 246, 0.5);
          animation: thinkingPulse 1s ease-in-out infinite;
        }
        .cg-thinking-dots {
          display: inline-block;
          min-width: 20px;
          text-align: center;
        }
        @keyframes thinkingPulse {
          0%, 100% {
            opacity: 1;
            transform: translateX(-50%) scale(1);
          }
          50% {
            opacity: 0.8;
            transform: translateX(-50%) scale(1.05);
          }
        }

        /* 命中动画 - 红色 #DC143C，脉冲+缩放，900ms */
        .cg-anim-hit {
          animation: hitImpact 0.9s ease-out;
        }
        @keyframes hitImpact {
          0% {
            transform: scale(1);
            border-color: rgba(212, 175, 55, 0.3);
            box-shadow: none;
          }
          15% {
            transform: scale(0.95);
            border-color: #DC143C;
            box-shadow: 0 0 15px rgba(220, 20, 60, 0.7);
          }
          30% {
            transform: scale(1.05);
            box-shadow: 0 0 30px rgba(220, 20, 60, 0.9);
          }
          45% {
            transform: scale(0.98);
            box-shadow: 0 0 20px rgba(220, 20, 60, 0.6);
          }
          60% {
            transform: scale(1.02);
            border-color: #DC143C;
            box-shadow: 0 0 25px rgba(220, 20, 60, 0.7);
          }
          75% {
            transform: scale(0.99);
            box-shadow: 0 0 15px rgba(220, 20, 60, 0.5);
          }
          100% {
            transform: scale(1);
            border-color: rgba(212, 175, 55, 0.3);
            box-shadow: none;
          }
        }
        .cg-card-count { color: #d4af37; }

        /* 底部玩家区域 - 水平布局：角色左侧，手牌右侧 */
        .cg-player-section { 
          display: flex; 
          flex-direction: row;
          align-items: center;
          justify-content: center;
          gap: 25px;
          height: 190px;
          margin-top: -5px;
          padding: 0 20px;
        }
        .cg-player-info { 
          display: flex; 
          flex-direction: column; 
          align-items: center; 
          gap: 4px;
          flex-shrink: 0;
        }
        .cg-skill-btn { 
          padding: 6px 14px; 
          background: linear-gradient(135deg, #4c1d95, #7c3aed); 
          border: none; 
          border-radius: 6px; 
          color: white; 
          font-size: 12px; 
          font-weight: bold;
          cursor: pointer; 
          box-shadow: 0 2px 8px rgba(76, 29, 149, 0.4);
          transition: all 0.2s ease;
          white-space: nowrap;
        }
        .cg-skill-btn:hover:not(:disabled) {
          background: linear-gradient(135deg, #5c2da5, #8c4afd);
          box-shadow: 0 4px 12px rgba(76, 29, 149, 0.6);
          transform: translateY(-1px);
        }
        .cg-skill-btn:disabled {
          background: linear-gradient(135deg, #3a3a4a, #4a4a5a);
          cursor: not-allowed;
          opacity: 0.7;
        }

        /* 手牌区域 - 位于角色右侧，层叠布局 */
        .cg-hand-section { 
          flex: 1;
          min-width: 150px;
          max-width: 400px;
          display: flex; 
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 8px;
          min-height: 120px;
          padding: 0 10px;
          overflow: visible;
        }
        .cg-hand { 
          display: flex; 
          justify-content: flex-start; 
          position: relative; 
          height: 80px;
          min-width: 50px;
        }
        .cg-card { 
          width: 48px; 
          height: 70px; 
          border-radius: 6px; 
          background: linear-gradient(135deg, #f5f5f5, #ffffff); 
          border: 1px solid #d4af37; 
          display: flex; 
          align-items: center; 
          justify-content: center; 
          cursor: pointer; 
          transition: transform 0.2s ease, box-shadow 0.2s ease; 
          position: absolute;
          top: 5px;
          box-shadow: 2px 2px 8px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.8);
        }
        .cg-card:hover {
          box-shadow: 3px 3px 12px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.8);
        }
        .cg-card.selected { 
          box-shadow: 0 0 20px rgba(212,175,55,0.8), 0 8px 16px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.9);
          border-color: #f0d78c;
          border-width: 2px;
        }
        .cg-card.disabled { 
          cursor: not-allowed;
          filter: brightness(0.9);
        }
        .cg-card.disabled:hover { 
          box-shadow: 2px 2px 8px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.8);
        }
        .cg-card-face { display: flex; flex-direction: column; align-items: center; gap: 3px; }
        .cg-check { 
          position: absolute; 
          top: -5px; 
          right: -5px; 
          width: 18px; 
          height: 18px; 
          background: #22c55e; 
          border-radius: 50%; 
          display: flex; 
          align-items: center; 
          justify-content: center; 
          color: white; 
          font-size: 11px; 
          box-shadow: 0 2px 4px rgba(0,0,0,0.3);
        }

        /* 底部功能栏 */
        .cg-bottom-bar { 
          display: flex; 
          align-items: center; 
          height: 70px;
          min-height: 70px;
          padding: 0 20px;
          background: rgba(0,0,0,0.7); 
          border-top: 1px solid rgba(212,175,55,0.2); 
          gap: 20px;
          flex-shrink: 0;
        }
        .cg-bottom-left { 
          width: 140px;
          display: flex;
          align-items: center;
        }
        .cg-back-btn { 
          padding: 8px 16px; 
          background: rgba(220,38,38,0.8); 
          border: none;
          border-radius: 6px; 
          color: white;
          font-size: 13px;
          cursor: pointer;
          font-weight: bold;
        }
        .cg-back-btn:hover {
          background: rgba(220,38,38,1);
        }
        .cg-bottom-center { 
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 6px;
          height: 100%;
        }
        .cg-status-text {
          color: rgba(255,255,255,0.7);
          font-size: 13px;
          min-height: 18px;
        }
        .cg-action-buttons {
          display: flex;
          gap: 15px;
          align-items: center;
          justify-content: center;
        }
        .cg-btn { 
          padding: 8px 20px; 
          font-size: 14px; 
          border: none; 
          border-radius: 6px; 
          cursor: pointer;
          font-weight: bold;
        }
        .cg-btn-play { 
          background: linear-gradient(135deg, #15803d, #22c55e); 
          color: white; 
        }
        .cg-btn-challenge { 
          background: linear-gradient(135deg, #dc2626, #ef4444); 
          color: white; 
        }
        .cg-btn-skip { 
          background: rgba(255,255,255,0.1); 
          color: #fff; 
          border: 1px solid rgba(255,255,255,0.3); 
        }
        .cg-btn:disabled {
          opacity: 0.5;
          cursor: not-allowed;
          filter: grayscale(0.5);
        }
        .cg-btn:disabled:hover {
          transform: none;
        }
        .cg-bottom-right { 
          width: 140px;
          display: flex;
          justify-content: flex-end;
          gap: 20px;
        }
        .cg-round-display, .cg-liar-display {
          text-align: center;
        }
        .cg-round-label, .cg-liar-label {
          font-size: 11px;
          color: rgba(255,255,255,0.5);
          margin-bottom: 2px;
        }
        .cg-round-number {
          font-size: 20px;
          color: #d4af37;
          font-weight: bold;
        }
        .cg-liar-value {
          font-size: 20px;
          color: #dc2626;
          font-weight: bold;
        }

        /* 弹窗 */
        .cg-modal { 
          position: fixed; 
          inset: 0; 
          background: rgba(0,0,0,0.8); 
          display: flex; 
          align-items: center; 
          justify-content: center; 
          z-index: 1000; 
        }
        .cg-modal-content { 
          background: linear-gradient(180deg, #1a1a24, #0a0a0f); 
          padding: 20px; 
          border-radius: 10px; 
          border: 1px solid rgba(212,175,55,0.3); 
          text-align: center; 
        }
        .cg-modal-content h3 { 
          color: #d4af37; 
          margin-bottom: 15px; 
          font-size: 16px;
        }
        .cg-rank-btns { 
          display: flex; 
          gap: 10px; 
          margin-bottom: 15px; 
        }
        .cg-rank-btns button { 
          width: 45px; 
          height: 45px; 
          font-size: 18px; 
          border: 2px solid rgba(212,175,55,0.5); 
          background: rgba(0,0,0,0.5); 
          color: #fff; 
          border-radius: 6px; 
          cursor: pointer; 
        }
        .cg-rank-btns button.current { 
          border-color: #d4af37; 
          background: rgba(212,175,55,0.2); 
        }

        /* 响应式适配 */
        @media (max-width: 1024px) {
          .cg-log-panel { width: 200px; min-width: 200px; }
          .cg-table { width: 180px; height: 180px; }
          .cg-table-inner { width: 155px; height: 155px; }
        }

        /* 移动端日志栏优化 */
        @media (max-width: 768px) {
          /* 日志面板默认收起 */
          .cg-log-panel {
            position: fixed;
            left: 0;
            top: 0;
            bottom: 70px;
            width: 280px;
            min-width: 280px;
            z-index: 100;
            transform: translateX(-100%);
            transition: transform 0.3s ease;
            background: rgba(10, 10, 15, 0.98);
            border-right: 1px solid rgba(212, 175, 55, 0.3);
          }
          .cg-log-panel.expanded {
            transform: translateX(0);
          }
          .cg-log-panel.collapsed {
            transform: translateX(-100%);
          }

          /* 展开/收起按钮 */
          .cg-log-toggle-btn {
            position: fixed;
            left: 10px;
            top: 50%;
            transform: translateY(-50%);
            width: 44px;
            height: 44px;
            border-radius: 50%;
            background: linear-gradient(135deg, rgba(212, 175, 55, 0.9), rgba(180, 148, 31, 0.9));
            border: 2px solid rgba(212, 175, 55, 1);
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            z-index: 99;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.5);
            transition: all 0.3s ease;
          }
          .cg-log-toggle-btn.expanded {
            left: 290px;
            background: rgba(60, 60, 70, 0.95);
            border-color: rgba(255, 255, 255, 0.3);
          }
          .cg-log-toggle-btn:active {
            transform: translateY(-50%) scale(0.95);
          }
          .cg-log-toggle-icon {
            font-size: 20px;
          }
          .cg-log-badge {
            position: absolute;
            top: -4px;
            right: -4px;
            width: 18px;
            height: 18px;
            border-radius: 50%;
            background: #dc2626;
            color: white;
            font-size: 10px;
            font-weight: bold;
            display: flex;
            align-items: center;
            justify-content: center;
          }

          /* 关闭按钮 */
          .cg-log-close-btn {
            background: none;
            border: none;
            color: rgba(255, 255, 255, 0.7);
            font-size: 16px;
            cursor: pointer;
            padding: 4px 8px;
            border-radius: 4px;
            transition: all 0.2s;
          }
          .cg-log-close-btn:hover {
            background: rgba(255, 255, 255, 0.1);
            color: white;
          }

          /* 遮罩层 */
          .cg-log-overlay {
            position: fixed;
            inset: 0;
            background: rgba(0, 0, 0, 0.6);
            z-index: 99;
            backdrop-filter: blur(2px);
          }

          /* 游戏区域居中 */
          .cg-game-area {
            padding: 5px 10px;
            width: 100%;
            max-width: 100%;
          }

          /* 调整角色尺寸 */
          .cg-character-avatar { transform: scale(0.75); }
          .cg-character {
            width: 110px;
            min-width: 110px;
            height: 150px;
            min-height: 150px;
            padding: 8px;
          }
          .cg-character-name { font-size: 12px; }
          .cg-character-stats { font-size: 11px; gap: 6px; }

          /* 调整圆桌尺寸 */
          .cg-table { width: 140px; height: 140px; }
          .cg-table-inner { width: 115px; height: 115px; }
          .cg-played-name { font-size: 11px; }
          .cg-card-small { width: 28px; height: 38px; }
          .cg-card-count-display { font-size: 11px; }

          /* 调整AI区域 */
          .cg-ai-top { height: 130px; margin-bottom: -5px; }
          .cg-ai-left, .cg-ai-right { width: 120px; }
          .cg-table-area { max-width: 200px; }

          /* 调整玩家区域 */
          .cg-player-section {
            height: 180px;
            gap: 12px;
            padding: 0 10px;
          }
          .cg-hand-section {
            min-width: 120px;
            max-width: 280px;
            min-height: 110px;
            gap: 6px;
          }
          .cg-card {
            width: 42px;
            height: 62px;
          }
          .cg-skill-btn {
            padding: 5px 12px;
            font-size: 11px;
          }

          /* 底部栏优化 */
          .cg-bottom-bar {
            padding: 0 10px;
            height: 60px;
            gap: 10px;
          }
          .cg-bottom-left, .cg-bottom-right { width: 70px; }
          .cg-back-btn {
            padding: 6px 8px;
            font-size: 11px;
          }
          .cg-status-text { font-size: 11px; }
          .cg-btn {
            padding: 6px 12px;
            font-size: 12px;
          }
          .cg-round-number, .cg-liar-value { font-size: 16px; }
          .cg-round-label, .cg-liar-label { font-size: 10px; }
        }

        /* 超小屏幕适配 */
        @media (max-width: 480px) {
          .cg-log-panel {
            width: 260px;
            min-width: 260px;
          }
          .cg-log-toggle-btn.expanded {
            left: 270px;
          }
          .cg-character {
            width: 100px;
            min-width: 100px;
            height: 140px;
            min-height: 140px;
          }
          .cg-character-avatar { transform: scale(0.65); }
          .cg-character-stats { font-size: 10px; gap: 4px; }
          .cg-hp-display { font-size: 10px; }
          .cg-ai-top { height: 110px; }
          .cg-ai-left, .cg-ai-right { width: 100px; }
          .cg-table { width: 120px; height: 120px; }
          .cg-table-inner { width: 100px; height: 100px; }
          .cg-player-section {
            height: 160px;
            gap: 8px;
          }
          .cg-hand-section {
            min-height: 100px;
          }
          .cg-card {
            width: 38px;
            height: 56px;
          }
          .cg-hand { height: 65px; }
          .cg-skill-btn {
            padding: 4px 10px;
            font-size: 10px;
          }
        }

        /* 移动端顶部按钮调整 */
        @media (max-width: 768px) {
          .cg-top-bar {
            top: 8px;
            left: 8px;
          }
          .cg-log-toggle-btn-top {
            padding: 6px 10px;
            font-size: 11px;
          }
          .cg-log-toggle-text {
            font-size: 10px;
          }
          /* 动作文字提示位置调整 */
          .cg-action-text {
            top: -20px;
            padding: 3px 8px;
            font-size: 10px;
          }
        }

        /* 桌面端样式优化 */
        @media (min-width: 769px) {
          /* 隐藏移动端按钮 */
          .cg-log-toggle-btn,
          .cg-log-overlay,
          .cg-log-close-btn.mobile-only,
          .cg-top-bar {
            display: none !important;
          }

          /* 桌面端日志栏始终显示 */
          .cg-log-panel {
            transform: none !important;
          }

          /* 桌面端游戏区域调整 */
          .cg-game-area {
            margin-left: 240px;
          }
        }

        /* 移动端样式 */
        @media (max-width: 768px) {
          /* 移动端日志栏可收起 */
          .cg-log-panel {
            position: fixed;
            transform: translateX(-100%);
          }
          .cg-log-panel.expanded {
            transform: translateX(0);
          }

          /* 移动端游戏区域无左边距 */
          .cg-game-area {
            margin-left: 0;
          }

          /* 显示移动端按钮 */
          .cg-top-bar {
            display: flex;
          }
        }
      `}</style>
    </div>
  );
};
