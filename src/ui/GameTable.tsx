/**
 * =============================================================================
 * Code Geass: Liar's Game - 游戏主界面（圆桌布局）
 * =============================================================================
 *
 * 游戏主界面组件，采用圆桌布局展示：
 * - 顶部：AI玩家1
 * - 左侧：AI玩家2
 * - 右侧：AI玩家3
 * - 底部：玩家自己
 *
 * 功能特性：
 * - 统一角色格式显示
 * - 显示AI手牌数
 * - 头像预加载优化
 * - 质疑阶段UI交互
 *
 * @author Code Agent
 * @version 2.0.0 - 重构版：简化质疑流程
 */

import React, { useState, useEffect } from 'react';
import { ChibiAvatar, AvatarPreloader } from '../components/characters';
import { characters, getCharacterName } from '../data/characters';
import type { Card, CardRank, CharacterId, FunnyAction, GameState } from '../types';
import cardBack from '/assets/cards/card-back.svg';

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
}

/**
 * 获取角色颜色
 * 根据角色ID返回对应的主题色
 *
 * @param characterId - 角色ID
 * @returns 颜色代码（十六进制）
 */
const getCharacterColor = (characterId: CharacterId | null): string => {
  if (!characterId) return '#d4af37';
  const char = characters.find(c => c.id === characterId);
  return char?.color || '#d4af37';
};

/**
 * 游戏主界面组件
 * 采用圆桌布局，支持质疑阶段交互
 *
 * @param props - 组件属性
 * @returns 游戏主界面JSX元素
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
}) => {
  /** 是否显示鲁鲁修技能弹窗 */
  const [showLelouchSkill, setShowLelouchSkill] = useState(false);

  /**
   * 预加载所有游戏页面需要的头像
   * 在组件挂载或角色变化时执行
   */
  useEffect(() => {
    if (selectedCharacter) {
      // 预加载玩家选择的角色头像
      AvatarPreloader.preloadAvatar(selectedCharacter, selectedAvatar);
    }
    // 预加载所有AI角色头像
    aiCharacters.forEach(char => {
      const avatarNum = aiAvatars[char] || 1;
      AvatarPreloader.preloadAvatar(char, avatarNum);
    });
  }, [selectedCharacter, selectedAvatar, aiCharacters, aiAvatars]);

  // 如果没有游戏状态，不渲染
  if (!gameState) return null;

  // 解构游戏状态
  const { phase, liarCard, playerStats, aiPlayers, turnState } = gameState;

  // 判断当前阶段
  const isPlayerTurn = phase === 'player_turn';
  const isChallengePhase = phase === 'challenge';

  // 获取玩家手牌
  const playerHand = gameState.playerHand || [];

  // 获取当前回合数
  const currentRound = turnState?.turnNumber || 1;

  /**
   * 判断是否是玩家的质疑回合
   * 在质疑阶段，且轮到玩家决策时返回true
   */
  const isPlayerChallengeTurn = isChallengePhase;

  /**
   * 处理出牌按钮点击
   */
  const handlePlayClick = () => {
    if (selectedCards.length > 0) onConfirmPlay();
  };

  /**
   * 处理鲁鲁修技能按钮点击
   * 显示技能选择弹窗
   */
  const handleLelouchSkillClick = () => setShowLelouchSkill(true);

  /**
   * 处理选择新的骗子牌
   *
   * @param rank - 新的骗子牌点数
   */
  const handleLelouchRankSelect = (rank: CardRank) => {
    setShowLelouchSkill(false);
    onLelouchSkill?.(rank);
  };

  /**
   * 获取花色符号
   *
   * @param suit - 花色
   * @returns 对应的符号
   */
  const getSuitSymbol = (suit: string) =>
    ({ spades: '♠', hearts: '♥', clubs: '♣', diamonds: '♦', joker: '🃏' })[suit] || suit;

  /**
   * 获取花色颜色
   *
   * @param suit - 花色
   * @returns 对应的颜色代码
   */
  const getSuitColor = (suit: string) =>
    suit === 'joker' ? '#d4af37' : suit === 'hearts' || suit === 'diamonds' ? '#dc2626' : '#1a1a24';

  // 获取玩家名称和颜色
  const playerName = getCharacterName(selectedCharacter);
  const playerColor = getCharacterColor(selectedCharacter);

  /**
   * 渲染角色组件
   * 统一格式的角色信息显示
   *
   * @param name - 角色名称
   * @param characterId - 角色ID
   * @param hp - 当前生命值
   * @param cardCount - 手牌数量
   * @param color - 角色主题色
   * @param avatarNum - 头像编号
   * @param isTop - 是否在顶部位置
   * @returns 角色信息JSX元素
   */
  const renderCharacter = (
    name: string,
    characterId: CharacterId | null,
    hp: number,
    cardCount: number,
    color: string,
    avatarNum: number,
    isTop: boolean = false
  ) => (
    <div className={`cg-character ${isTop ? 'cg-character-top' : ''}`}>
      <div className="cg-character-avatar">
        {characterId && (
          <ChibiAvatar
            characterId={characterId}
            size={160}
            avatarNumber={avatarNum}
            priority={true}
          />
        )}
      </div>
      <div className="cg-character-info">
        <div className="cg-character-name" style={{ color }}>
          {name}
        </div>
        <div className="cg-character-stats">
          <span>{Array(hp).fill('❤️').join('')}</span>
          <span className="cg-card-count">🃏{cardCount}</span>
        </div>
      </div>
    </div>
  );

  return (
    <div className="cg-game-table">
      {/* 顶部栏：返回按钮、回合信息、骗子牌 */}
      <div className="cg-top-bar">
        <button className="cg-back-button" onClick={onBackToMenu}>
          ← 主页面
        </button>
        <div className="cg-round-info">回合 {currentRound}</div>
        <div className="cg-liar-card">
          骗子牌 <span>{liarCard}</span>
        </div>
        <div className="cg-placeholder"></div>
      </div>

      <div className="cg-main">
        {/* 左侧日志面板 */}
        <div className="cg-log">
          <div className="cg-log-title">📜 游戏记录</div>
          <div className="cg-log-content">
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

        {/* 游戏区域 */}
        <div className="cg-play-area">
          {/* AI 1 - 顶部 (id='ai') */}
          {renderCharacter(
            getCharacterName(aiPlayers?.[0]?.character || aiCharacters[0]),
            aiPlayers?.[0]?.character || aiCharacters[0],
            aiPlayers?.[0]?.stats?.hp || 3,
            aiPlayers?.[0]?.hand?.length || 0,
            getCharacterColor(aiPlayers?.[0]?.character || aiCharacters[0]),
            aiAvatars[aiPlayers?.[0]?.character || aiCharacters[0]] || 1,
            true
          )}

          {/* 中间行：AI2 + 圆桌 + AI3 */}
          <div className="cg-middle-row">
            {/* AI 2 - 左侧 (id='ai2') */}
            {renderCharacter(
              getCharacterName(aiPlayers?.[1]?.character || aiCharacters[1]),
              aiPlayers?.[1]?.character || aiCharacters[1],
              aiPlayers?.[1]?.stats?.hp || 3,
              aiPlayers?.[1]?.hand?.length || 0,
              getCharacterColor(aiPlayers?.[1]?.character || aiCharacters[1]),
              aiAvatars[aiPlayers?.[1]?.character || aiCharacters[1]] || 1
            )}

            {/* 圆桌区域 */}
            <div className="cg-table">
              <div className="cg-table-inner">
                {turnState?.playedCards ? (
                  <div className="cg-played">
                    <div
                      className="cg-player-name"
                      style={{ color: '#d4af37', fontWeight: 'bold', marginBottom: '8px' }}
                    >
                      {turnState.playedCards.playerId === 'player'
                        ? playerName
                        : turnState.playedCards.playerId.startsWith('ai')
                          ? getCharacterName(
                              aiPlayers?.find(
                                (ai: { id: string }) => ai.id === turnState.playedCards.playerId
                              )?.character || 'cc'
                            )
                          : '未知玩家'}{' '}
                      出牌
                    </div>
                    <div className="cg-cards">
                      {/* 出牌时显示背面，质疑后才显示实际牌 */}
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

            {/* AI 3 - 右侧 (id='ai3') */}
            {renderCharacter(
              getCharacterName(aiPlayers?.[2]?.character || aiCharacters[2]),
              aiPlayers?.[2]?.character || aiCharacters[2],
              aiPlayers?.[2]?.stats?.hp || 3,
              aiPlayers?.[2]?.hand?.length || 0,
              getCharacterColor(aiPlayers?.[2]?.character || aiCharacters[2]),
              aiAvatars[aiPlayers?.[2]?.character || aiCharacters[2]] || 1
            )}
          </div>

          {/* 玩家区域 */}
          <div className="cg-player-position">
            {renderCharacter(
              playerName,
              selectedCharacter,
              playerStats.hp,
              playerHand.length,
              playerColor,
              selectedAvatar
            )}
            {/* 鲁鲁修技能按钮 */}
            {selectedCharacter === 'lelouch' && isPlayerTurn && (
              <button
                className="cg-skill-btn"
                onClick={handleLelouchSkillClick}
                disabled={isProcessing || !canUseSkill}
                title={canUseSkill ? '每局限用1次' : '已使用'}
              >
                {canUseSkill ? '绝对命令' : '绝对命令 (已用)'}
              </button>
            )}
          </div>
        </div>
      </div>

      {/* 手牌区域 */}
      <div className="cg-hand-area">
        <div className="cg-hand">
          {playerHand.map((card: Card, i: number) => {
            const isSelected = selectedCards.includes(card.id);
            return (
              <button
                key={card.id}
                className={`cg-card ${isSelected ? 'selected' : ''} ${!isPlayerTurn || isProcessing ? 'disabled' : ''}`}
                onClick={() => onToggleCardSelection(card.id)}
                style={{
                  transform: `translateX(${(i - playerHand.length / 2) * 45}px) ${isSelected ? 'translateY(-20px)' : ''}`,
                }}
                disabled={!isPlayerTurn || isProcessing}
              >
                <div className="cg-card-face">
                  <div style={{ color: getSuitColor(card.suit) }}>{card.rank}</div>
                  <div style={{ color: getSuitColor(card.suit), fontSize: '20px' }}>
                    {getSuitSymbol(card.suit)}
                  </div>
                </div>
                {isSelected && <div className="cg-check">✓</div>}
              </button>
            );
          })}
        </div>
      </div>

      {/* 操作栏 */}
      <div className="cg-actions">
        {/* 玩家回合：出牌按钮 */}
        {isPlayerTurn && selectedCards.length > 0 && (
          <button className="cg-btn cg-btn-play" onClick={handlePlayClick} disabled={isProcessing}>
            出牌 ({selectedCards.length})
          </button>
        )}

        {/* 玩家回合：跳过按钮（未选牌时） */}
        {isPlayerTurn && selectedCards.length === 0 && (
          <button className="cg-btn cg-btn-skip" onClick={onPass} disabled={isProcessing}>
            跳过
          </button>
        )}

        {/* 质疑阶段：质疑/不质疑按钮 */}
        {isPlayerChallengeTurn && (
          <>
            <button
              className="cg-btn cg-btn-challenge"
              onClick={onChallenge}
              disabled={isProcessing}
            >
              ⚔️ 质疑
            </button>
            <button className="cg-btn cg-btn-skip" onClick={onPass} disabled={isProcessing}>
              不质疑
            </button>
          </>
        )}

        {/* 质疑阶段：等待其他玩家质疑 */}
        {isChallengePhase && !isPlayerChallengeTurn && (
          <span className="cg-wait">等待其他玩家质疑...</span>
        )}

        {/* AI回合 */}
        {!isPlayerTurn && !isChallengePhase && <span className="cg-wait">AI回合...</span>}
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
        .cg-game-table { position: fixed; inset: 0; display: flex; flex-direction: column; background: linear-gradient(180deg, #0a0a0f, #1a1a24); font-family: 'Noto Sans SC', sans-serif; touch-action: manipulation; -webkit-user-select: none; user-select: none; }
        .cg-top-bar { display: flex; align-items: center; justify-content: space-between; padding: 10px 20px; background: rgba(0,0,0,0.3); border-bottom: 1px solid rgba(212,175,55,0.2); }
        .cg-back-button { padding: 6px 12px; background: transparent; border: 1px solid #d4af37; color: #d4af37; border-radius: 4px; cursor: pointer; }
        .cg-round-info { font-size: 18px; color: #d4af37; font-weight: bold; }
        .cg-liar-card { font-size: 16px; color: #fff; }
        .cg-liar-card span { color: #dc2626; font-weight: bold; font-size: 20px; }
        .cg-placeholder { width: 80px; }
        
        .cg-main { flex: 1; display: flex; overflow: auto; }
        .cg-log { width: 260px; background: rgba(0,0,0,0.4); border-right: 1px solid rgba(212,175,55,0.2); padding: 15px; display: flex; flex-direction: column; }
        .cg-log-title { font-size: 16px; color: #d4af37; margin-bottom: 10px; padding-bottom: 10px; border-bottom: 1px solid rgba(212,175,55,0.3); }
        .cg-log-content { flex: 1; overflow-y: auto; display: flex; flex-direction: column; gap: 6px; }
        .cg-log-item { padding: 6px 10px; background: rgba(255,255,255,0.05); border-radius: 6px; font-size: 13px; color: #e5e5e5; }
        .cg-log-item.challenge { background: rgba(220,38,38,0.2); border-left: 3px solid #dc2626; }
        .cg-log-item.geass { background: rgba(212,175,55,0.2); border-left: 3px solid #d4af37; }
        
        .cg-play-area { flex: 1; display: flex; flex-direction: column; align-items: center; justify-content: space-between; padding: 10px; }
        .cg-character { display: flex; flex-direction: column; align-items: center; gap: 5px; background: rgba(0,0,0,0.4); padding: 10px; border-radius: 10px; border: 1px solid rgba(212,175,55,0.2); }
        .cg-character-top { margin-top: 5px; }
        .cg-character-avatar { filter: drop-shadow(0 4px 8px rgba(0,0,0,0.5)); }
        .cg-character-info { text-align: center; }
        .cg-character-name { font-size: 14px; font-weight: bold; }
        .cg-character-stats { display: flex; gap: 10px; align-items: center; margin-top: 3px; font-size: 12px; }
        .cg-card-count { color: #d4af37; }
        
        .cg-middle-row { display: flex; align-items: center; justify-content: center; gap: 30px; flex: 1; width: 100%; }
        
        .cg-table { width: 280px; height: 280px; border-radius: 50%; background: linear-gradient(145deg, #1a3a1a, #0d260d); border: 6px solid #2d5016; box-shadow: inset 0 0 50px rgba(0,0,0,0.5); display: flex; align-items: center; justify-content: center; }
        .cg-table-inner { width: 250px; height: 250px; border-radius: 50%; background: radial-gradient(circle, #1e4a1e, #143614); display: flex; align-items: center; justify-content: center; }
        .cg-played { text-align: center; }
        .cg-played div:first-child { color: #d4af37; font-size: 14px; margin-bottom: 10px; }
        .cg-cards { display: flex; justify-content: center; gap: 8px; }
        .cg-card-small { width: 40px; height: 56px; border-radius: 4px; border: 2px solid #d4af37; overflow: hidden; }
        .cg-card-small img { width: 100%; height: 100%; object-fit: cover; }
        .cg-card-back { background: linear-gradient(135deg, #4c1d95, #1e1b4b); }
        .cg-card-count-display { color: #d4af37; font-size: 14px; margin-top: 10px; }
        .cg-placeholder-text { color: rgba(255,255,255,0.3); font-size: 16px; }
        
        .cg-player-position { display: flex; flex-direction: column; align-items: center; gap: 5px; margin-bottom: 5px; }
        .cg-skill-btn { padding: 5px 10px; background: linear-gradient(135deg, #4c1d95, #7c3aed); border: none; border-radius: 4px; color: white; font-size: 12px; cursor: pointer; }
        
        .cg-hand-area { height: 110px; display: flex; align-items: center; justify-content: center; }
        .cg-hand { display: flex; justify-content: center; position: relative; height: 90px; }
        .cg-card { width: 60px; height: 84px; border-radius: 6px; background: white; border: 2px solid #d4af37; display: flex; align-items: center; justify-content: center; cursor: pointer; transition: all 0.2s; position: relative; touch-action: manipulation; -webkit-tap-highlight-color: transparent; }
        .cg-card:active { transform: scale(0.95); }
        .cg-card.selected { transform: translateY(-20px); box-shadow: 0 0 15px rgba(212,175,55,0.5); }
        @media (max-width: 414px) { .cg-card.selected { transform: translateY(-10px); } }
        .cg-card.disabled { opacity: 0.5; cursor: not-allowed; }
        .cg-card.disabled:active { transform: none; }
        .cg-card-face { display: flex; flex-direction: column; align-items: center; gap: 5px; }
        .cg-check { position: absolute; top: -5px; right: -5px; width: 20px; height: 20px; background: #22c55e; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; font-size: 12px; }
        
        .cg-actions { display: flex; align-items: center; justify-content: center; gap: 15px; padding: 15px; background: rgba(0,0,0,0.3); border-top: 1px solid rgba(212,175,55,0.2); }
        .cg-btn { padding: 10px 25px; font-size: 15px; border: none; border-radius: 6px; cursor: pointer; touch-action: manipulation; -webkit-tap-highlight-color: transparent; min-height: 44px; }
        .cg-btn:active { transform: scale(0.98); opacity: 0.9; }
        .cg-btn-play { background: linear-gradient(135deg, #15803d, #22c55e); color: white; }
        .cg-btn-challenge { background: linear-gradient(135deg, #dc2626, #ef4444); color: white; }
        .cg-btn-skip { background: rgba(255,255,255,0.1); color: #fff; border: 1px solid rgba(255,255,255,0.2); }
        .cg-wait { color: rgba(255,255,255,0.5); font-size: 14px; }
        
        .cg-modal { position: fixed; inset: 0; background: rgba(0,0,0,0.8); display: flex; align-items: center; justify-content: center; z-index: 1000; }
        .cg-modal-content { background: linear-gradient(180deg, #1a1a24, #0a0a0f); padding: 25px; border-radius: 10px; border: 1px solid rgba(212,175,55,0.3); text-align: center; }
        .cg-modal-content h3 { color: #d4af37; margin-bottom: 15px; }
        .cg-rank-btns { display: flex; gap: 12px; margin-bottom: 15px; }
        .cg-rank-btns button { width: 50px; height: 50px; font-size: 20px; border: 2px solid rgba(212,175,55,0.5); background: rgba(0,0,0,0.5); color: #fff; border-radius: 6px; cursor: pointer; }
        .cg-rank-btns button.current { border-color: #d4af37; background: rgba(212,175,55,0.2); }
      `}</style>
    </div>
  );
};
