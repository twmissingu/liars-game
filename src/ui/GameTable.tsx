/**
 * Code Geass: Liar's Game - 游戏主界面（圆桌布局）
 * 统一角色格式 + 显示AI手牌数 + 优化布局
 */

import React, { useState } from 'react';
import { CharacterRenderer } from '../components/characters';
import { characters, getCharacterName } from '../data/characters';
import type { Card, CardRank, CharacterId, FunnyAction } from '../types';

interface GameTableProps {
  gameState: any;
  selectedCards: string[];
  selectedCharacter: CharacterId | null;
  onToggleCardSelection: (cardId: string) => void;
  onConfirmPlay: () => void;
  onPass: () => void;
  onChallenge: () => void;
  onBackToMenu: () => void;
  onLelouchSkill?: (newRank: CardRank) => void;
  gameLog?: string[];
  funnyAction?: FunnyAction | null;
  isProcessing?: boolean;
}

// 获取角色颜色
const getCharacterColor = (characterId: CharacterId | null): string => {
  if (!characterId) return '#d4af37';
  const char = characters.find(c => c.id === characterId);
  return char?.accentColor || '#d4af37';
};

// AI 配置
const AI_CONFIG = [
  { id: 'ai', name: 'C.C.', character: 'cc' as CharacterId, color: '#22c55e', position: 'top' },
  { id: 'ai2', name: '朱雀', character: 'suzaku' as CharacterId, color: '#3b82f6', position: 'left' },
  { id: 'ai3', name: '卡莲', character: 'kallen' as CharacterId, color: '#dc2626', position: 'right' },
];

export const GameTable: React.FC<GameTableProps> = ({
  gameState,
  selectedCards,
  selectedCharacter,
  onToggleCardSelection,
  onConfirmPlay,
  onPass,
  onChallenge,
  onBackToMenu,
  onLelouchSkill,
  gameLog = [],
  funnyAction,
  isProcessing = false,
}) => {
  const [showLelouchSkill, setShowLelouchSkill] = useState(false);

  if (!gameState) return null;

  const { 
    phase,
    liarCard,
    playerStats,
    aiPlayers,
    turnState,
    lastAction,
  } = gameState;

  const isPlayerTurn = phase === 'player_turn';
  const isChallengePhase = phase === 'challenge';
  const currentPlayerId = turnState?.lastPlayerId;
  const isPlayerLastPlayed = currentPlayerId === 'player';

  const playerHand = gameState.playerHand || [];
  const currentRound = turnState?.turnNumber || 1;

  // 获取当前AI（最后出牌的）
  const lastAI = currentPlayerId && currentPlayerId !== 'player' 
    ? aiPlayers?.find((ai: any) => ai.id === currentPlayerId)
    : null;

  const handlePlayClick = () => {
    if (selectedCards.length > 0) {
      onConfirmPlay();
    }
  };

  const handleLelouchSkillClick = () => {
    setShowLelouchSkill(true);
  };

  const handleLelouchRankSelect = (rank: CardRank) => {
    setShowLelouchSkill(false);
    onLelouchSkill?.(rank);
  };

  const getSuitSymbol = (suit: string): string => {
    const symbols: Record<string, string> = {
      spades: '♠', hearts: '♥', clubs: '♣', diamonds: '♦', joker: '🃏',
    };
    return symbols[suit] || suit;
  };

  const getSuitColor = (suit: string): string => {
    if (suit === 'joker') return '#d4af37';
    return suit === 'hearts' || suit === 'diamonds' ? '#dc2626' : '#1a1a24';
  };

  // 玩家角色名称和颜色
  const playerName = getCharacterName(selectedCharacter);
  const playerColor = getCharacterColor(selectedCharacter);

  // 渲染AI角色（统一格式）
  const renderAI = (aiConfig: typeof AI_CONFIG[0], index: number) => {
    const ai = aiPlayers?.[index];
    if (!ai) return null;
    
    return (
      <div key={aiConfig.id} className={`cg-player-wrapper cg-ai-${aiConfig.position}`}>
        <div className="cg-player-info-vertical">
          <div className="cg-player-avatar-small">
            <CharacterRenderer characterId={aiConfig.character} size={50} animationState="idle" />
          </div>
          <div className="cg-player-details-vertical">
            <div className="cg-player-name-small" style={{ color: aiConfig.color }}>{aiConfig.name}</div>
            <div className="cg-player-stats">
              <span className="cg-hp-small">{Array(ai.stats.hp).fill('❤️').join('')}</span>
              <span className="cg-card-count">🃏 {ai.hand?.length || 0}</span>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="cg-game-table">
      {/* 顶部信息栏 */}
      <div className="cg-top-bar">
        <button className="cg-back-button" onClick={onBackToMenu}>← 主页面</button>
        <div className="cg-round-info">回合 {currentRound}</div>
        <div className="cg-liar-card">
          骗子牌 <span className="cg-liar-rank">{liarCard}</span>
        </div>
        <div className="cg-placeholder"></div>
      </div>

      {/* 主游戏区域 */}
      <div className="cg-main-area">
        {/* 左侧日志 */}
        <div className="cg-game-log">
          <div className="cg-log-title">📜 游戏记录</div>
          <div className="cg-log-content">
            {gameLog.map((log, index) => (
              <div key={index} className={`cg-log-entry ${log.includes('质疑') ? 'cg-log-challenge' : ''} ${log.includes('Geass') ? 'cg-log-geass' : ''}`}>
                {log}
              </div>
            ))}
          </div>
        </div>

        {/* 圆桌游戏区 */}
        <div className="cg-table-area">
          {/* 顶部AI - C.C. */}
          {renderAI(AI_CONFIG[0], 0)}

          {/* 中间区域：左右AI + 圆桌 */}
          <div className="cg-middle-row">
            {/* 左侧AI - 朱雀 */}
            {renderAI(AI_CONFIG[1], 1)}

            {/* 中央圆桌 */}
            <div className="cg-round-table">
              <div className="cg-table-felt">
                <div className="cg-play-area">
                  {turnState?.playedCards ? (
                    <div className="cg-played-cards">
                      <div className="cg-played-by">
                        {turnState.playedCards.playerId === 'player' ? playerName : 
                          aiPlayers?.find((ai: any) => ai.id === turnState.playedCards?.playerId)?.name} 出了
                      </div>
                      <div className="cg-played-cards-list">
                        {turnState.playedCards.actualCards.map((card: Card, index: number) => (
                          <div 
                            key={card.id}
                            className="cg-card cg-card-played"
                            style={{ 
                              transform: `rotate(${(index - turnState.playedCards!.actualCards.length / 2) * 5}deg) translateY(${index * -5}px)`,
                            }}
                          >
                            <div className="cg-card-content">
                              <span className="cg-card-rank">{card.rank}</span>
                              <span className="cg-card-suit" style={{ color: getSuitColor(card.suit) }}>
                                {getSuitSymbol(card.suit)}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                      <div className="cg-claimed-rank">声称: 骗子牌 {liarCard}</div>
                    </div>
                  ) : (
                    <div className="cg-play-placeholder"><span>出牌区域</span></div>
                  )}
                </div>

                {funnyAction && (
                  <div className="cg-funny-action">
                    <div className="cg-funny-action-content">
                      <span className="cg-funny-emoji">{funnyAction.emoji}</span>
                      <span className="cg-funny-text">{funnyAction.description}</span>
                    </div>
                  </div>
                )}

                {lastAction && <div className="cg-last-action">{lastAction}</div>}
              </div>
            </div>

            {/* 右侧AI - 卡莲 */}
            {renderAI(AI_CONFIG[2], 2)}
          </div>

          {/* 底部玩家 */}
          <div className="cg-player-wrapper cg-player-bottom">
            <div className="cg-player-info-vertical">
              <div className="cg-player-avatar-small">
                {selectedCharacter && (
                  <CharacterRenderer characterId={selectedCharacter} size={50} animationState={isPlayerTurn ? 'breathing' : 'idle'} />
                )}
              </div>
              <div className="cg-player-details-vertical">
                <div className="cg-player-name-small" style={{ color: playerColor }}>{playerName}</div>
                <div className="cg-player-stats">
                  <span className="cg-hp-small">{Array(playerStats.hp).fill('❤️').join('')}</span>
                  <span className="cg-card-count">🃏 {playerHand.length}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 玩家手牌区域 */}
      <div className="cg-player-hand-area">
        <div className="cg-player-hand">
          {playerHand.map((card: Card, index: number) => {
            const isSelected = selectedCards.includes(card.id);
            return (
              <button
                key={card.id}
                className={`cg-card cg-card-front ${isSelected ? 'selected' : ''} ${!isPlayerTurn || isProcessing ? 'disabled' : ''}`}
                onClick={() => onToggleCardSelection(card.id)}
                style={{ transform: `translateX(${(index - playerHand.length / 2) * 40}px) ${isSelected ? 'translateY(-15px)' : ''}` }}
                disabled={!isPlayerTurn || isProcessing}
              >
                <div className="cg-card-inner">
                  <div className="cg-card-rank cg-card-rank-tl" style={{ color: getSuitColor(card.suit) }}>{card.rank}</div>
                  <div className="cg-card-suit-center" style={{ color: getSuitColor(card.suit) }}>{getSuitSymbol(card.suit)}</div>
                  <div className="cg-card-rank cg-card-rank-br" style={{ color: getSuitColor(card.suit) }}>{card.rank}</div>
                </div>
                {isSelected && <div className="cg-card-selected-indicator">✓</div>}
              </button>
            );
          })}
        </div>
      </div>

      {/* 操作栏 */}
      <div className="cg-action-bar">
        {isPlayerTurn && selectedCards.length > 0 && (
          <button className="cg-action-button cg-button-play" onClick={handlePlayClick} disabled={isProcessing}>
            <span>出牌 ({selectedCards.length})</span>
          </button>
        )}

        {isPlayerTurn && selectedCards.length === 0 && (
          <button className="cg-action-button cg-button-pass" onClick={onPass} disabled={isProcessing}>
            <span>跳过</span>
          </button>
        )}
        
        {isChallengePhase && !isPlayerLastPlayed && lastAI?.isActive && (
          <>
            <button className="cg-action-button cg-button-challenge" onClick={onChallenge} disabled={isProcessing}>
              <span>⚔️ 质疑</span>
            </button>
            <button className="cg-action-button cg-button-pass" onClick={onPass} disabled={isProcessing}>
              <span>不质疑</span>
            </button>
          </>
        )}

        {isChallengePhase && isPlayerLastPlayed && <div className="cg-waiting-text">等待AI决策...</div>}
        {!isPlayerTurn && !isChallengePhase && <div className="cg-waiting-text">AI回合中...</div>}
      </div>

      {/* 鲁鲁修技能弹窗 */}
      {showLelouchSkill && (
        <div className="cg-modal-overlay">
          <div className="cg-modal">
            <h3>绝对命令 - 选择新的骗子牌</h3>
            <div className="cg-rank-grid">
              {['Q', 'K', 'A'].map(rank => (
                <button key={rank} className={`cg-rank-button ${rank === liarCard ? 'current' : ''}`} onClick={() => handleLelouchRankSelect(rank as CardRank)}>
                  {rank} {rank === liarCard && <span className="cg-current-badge">当前</span>}
                </button>
              ))}
            </div>
            <button className="cg-modal-close" onClick={() => setShowLelouchSkill(false)}>取消</button>
          </div>
        </div>
      )}

      <style>{`
        .cg-game-table {
          position: fixed; top: 0; left: 0; width: 100vw; height: 100vh;
          display: flex; flex-direction: column;
          background: linear-gradient(180deg, #0a0a0f 0%, #1a1a24 100%);
          font-family: 'Noto Sans SC', sans-serif; overflow: hidden;
        }
        .cg-top-bar { display: flex; align-items: center; justify-content: space-between; padding: 10px 20px; background: rgba(0,0,0,0.3); border-bottom: 1px solid rgba(212,175,55,0.2); }
        .cg-back-button { padding: 6px 12px; background: transparent; border: 1px solid rgba(212,175,55,0.5); color: #d4af37; border-radius: 4px; cursor: pointer; }
        .cg-round-info { font-size: 18px; color: #d4af37; font-weight: bold; }
        .cg-liar-card { font-size: 16px; color: #f5f5f5; }
        .cg-liar-rank { color: #dc2626; font-weight: bold; font-size: 20px; }
        .cg-placeholder { width: 80px; }
        
        .cg-main-area { flex: 1; display: flex; overflow: hidden; }
        .cg-game-log { width: 280px; background: rgba(0,0,0,0.4); border-right: 1px solid rgba(212,175,55,0.2); padding: 15px; display: flex; flex-direction: column; }
        .cg-log-title { font-size: 16px; color: #d4af37; margin-bottom: 10px; padding-bottom: 10px; border-bottom: 1px solid rgba(212,175,55,0.3); }
        .cg-log-content { flex: 1; overflow-y: auto; display: flex; flex-direction: column; gap: 6px; }
        .cg-log-entry { padding: 6px 10px; background: rgba(255,255,255,0.05); border-radius: 6px; font-size: 13px; line-height: 1.4; color: #e5e5e5; }
        .cg-log-challenge { background: rgba(220,38,38,0.2); border-left: 3px solid #dc2626; }
        .cg-log-geass { background: rgba(212,175,55,0.2); border-left: 3px solid #d4af37; }
        
        .cg-table-area { flex: 1; display: flex; flex-direction: column; align-items: center; justify-content: space-between; padding: 10px; position: relative; }
        .cg-middle-row { display: flex; align-items: center; justify-content: center; gap: 20px; flex: 1; width: 100%; }
        
        .cg-round-table { width: 320px; height: 320px; border-radius: 50%; background: linear-gradient(145deg, #1a3a1a 0%, #0d260d 100%); border: 6px solid #2d5016; box-shadow: inset 0 0 50px rgba(0,0,0,0.5), 0 0 30px rgba(0,0,0,0.5); display: flex; align-items: center; justify-content: center; }
        .cg-table-felt { width: 290px; height: 290px; border-radius: 50%; background: radial-gradient(circle, #1e4a1e 0%, #143614 100%); display: flex; align-items: center; justify-content: center; position: relative; }
        
        .cg-player-wrapper { display: flex; flex-direction: column; align-items: center; }
        .cg-ai-top { position: absolute; top: 10px; }
        .cg-ai-left { margin-right: 10px; }
        .cg-ai-right { margin-left: 10px; }
        .cg-player-bottom { margin-bottom: 10px; }
        
        .cg-player-info-vertical { display: flex; flex-direction: column; align-items: center; gap: 5px; background: rgba(0,0,0,0.4); padding: 10px; border-radius: 10px; border: 1px solid rgba(212,175,55,0.2); }
        .cg-player-avatar-small { filter: drop-shadow(0 4px 8px rgba(0,0,0,0.5)); }
        .cg-player-details-vertical { text-align: center; }
        .cg-player-name-small { font-size: 14px; font-weight: bold; text-shadow: 0 2px 4px rgba(0,0,0,0.8); }
        .cg-player-stats { display: flex; gap: 10px; align-items: center; margin-top: 3px; }
        .cg-hp-small { font-size: 12px; }
        .cg-card-count { font-size: 12px; color: #d4af37; }
        
        .cg-play-area { text-align: center; }
        .cg-play-placeholder { color: rgba(255,255,255,0.3); font-size: 16px; }
        .cg-played-by { color: #d4af37; font-size: 14px; margin-bottom: 8px; }
        .cg-played-cards-list { display: flex; justify-content: center; gap: 8px; margin: 8px 0; }
        .cg-claimed-rank { color: #f5f5f5; font-size: 12px; }
        
        .cg-player-hand-area { height: 120px; display: flex; align-items: center; justify-content: center; }
        .cg-player-hand { display: flex; justify-content: center; position: relative; height: 90px; }
        
        .cg-card { width: 55px; height: 77px; border-radius: 6px; background: white; border: 2px solid #d4af37; display: flex; align-items: center; justify-content: center; cursor: pointer; transition: all 0.2s; }
        .cg-card.selected { transform: translateY(-15px); box-shadow: 0 0 15px rgba(212,175,55,0.5); }
        .cg-card.disabled { opacity: 0.5; cursor: not-allowed; }
        .cg-card-inner { display: flex; flex-direction: column; align-items: center; justify-content: space-between; height: 100%; padding: 3px; }
        
        .cg-action-bar { display: flex; align-items: center; justify-content: center; gap: 15px; padding: 15px; background: rgba(0,0,0,0.3); border-top: 1px solid rgba(212,175,55,0.2); }
        .cg-action-button { padding: 10px 25px; font-size: 15px; border: none; border-radius: 6px; cursor: pointer; display: flex; align-items: center; gap: 6px; }
        .cg-button-play { background: linear-gradient(135deg, #15803d 0%, #22c55e 100%); color: white; }
        .cg-button-challenge { background: linear-gradient(135deg, #dc2626 0%, #ef4444 100%); color: white; }
        .cg-button-pass { background: rgba(255,255,255,0.1); color: #f5f5f5; border: 1px solid rgba(255,255,255,0.2); }
        .cg-waiting-text { color: rgba(255,255,255,0.5); font-size: 14px; }
        
        .cg-modal-overlay { position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.8); display: flex; align-items: center; justify-content: center; z-index: 1000; }
        .cg-modal { background: linear-gradient(180deg, #1a1a24 0%, #0a0a0f 100%); padding: 25px; border-radius: 10px; border: 1px solid rgba(212,175,55,0.3); text-align: center; }
        .cg-modal h3 { color: #d4af37; margin-bottom: 15px; }
        .cg-rank-grid { display: flex; gap: 12px; margin-bottom: 15px; }
        .cg-rank-button { width: 50px; height: 50px; font-size: 20px; border: 2px solid rgba(212,175,55,0.5); background: rgba(0,0,0,0.5); color: #f5f5f5; border-radius: 6px; cursor: pointer; }
        .cg-rank-button.current { border-color: #d4af37; background: rgba(212,175,55,0.2); }
      `}</style>
    </div>
  );
};
