/**
 * Code Geass: Liar's Game - 游戏主界面（牌桌）
 * 1v3人机对战 + 骗子牌显示 + 角色技能
 */

import React, { useState } from 'react';
import { CharacterRenderer } from '../components/characters';
import type { Card, CharacterId, FunnyAction } from '../types';

interface GameTableProps {
  gameState: any;
  selectedCards: string[];
  selectedCharacter: CharacterId | null;
  onToggleCardSelection: (cardId: string) => void;
  onConfirmPlay: () => void;  // 修改为无参数，直接出牌
  onPass: () => void;
  onChallenge: () => void;
  onBackToMenu: () => void;
  onLelouchSkill?: (newRank: CardRank) => void;
  gameLog?: string[];
  funnyAction?: FunnyAction | null;
  isProcessing?: boolean;
}

const CARD_RANKS: CardRank[] = ['Q', 'K', 'A']; // Liar's Bar只使用Q、K、A

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
  const tableCards = turnState?.tableCards || [];
  const currentRound = turnState?.turnNumber || 1;

  // 获取当前AI（最后出牌的）
  const lastAI = currentPlayerId && currentPlayerId !== 'player' 
    ? aiPlayers?.find((ai: any) => ai.id === currentPlayerId)
    : null;

  const handlePlayClick = () => {
    if (selectedCards.length > 0) {
      // 直接出牌，不需要选择声称点数
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
      spades: '♠',
      hearts: '♥',
      clubs: '♣',
      diamonds: '♦',
      joker: '🃏',
    };
    return symbols[suit] || suit;
  };

  const getSuitColor = (suit: string): string => {
    if (suit === 'joker') return '#d4af37'; // 小丑牌用金色
    return suit === 'hearts' || suit === 'diamonds' ? '#dc2626' : '#1a1a24';
  };

  return (
    <div className="cg-game-table">
      {/* 背景 */}
      <div className="cg-table-bg">
        <div className="cg-table-bg-gradient" />
        <div className="cg-table-pattern">
          <svg className="cg-table-geass-pattern" viewBox="0 0 200 200">
            <defs>
              <pattern id="geassPattern" x="0" y="0" width="50" height="50" patternUnits="userSpaceOnUse">
                <path
                  d="M25 5 L28 20 L42 25 L28 30 L25 45 L22 30 L8 25 L22 20 Z"
                  fill="none"
                  stroke="rgba(220, 38, 38, 0.05)"
                  strokeWidth="0.5"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#geassPattern)" />
          </svg>
        </div>
      </div>

      {/* 顶部栏 */}
      <header className="cg-table-header">
        <div className="cg-header-left">
          <button className="cg-back-to-menu" onClick={onBackToMenu}>
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z" />
            </svg>
            主页面
          </button>
        </div>

        <div className="cg-round-info">
          <span className="cg-round-label">回合</span>
          <span className="cg-round-value">{currentRound}</span>
        </div>

        <div className="cg-liar-card-display">
          <span className="cg-liar-label">骗子牌</span>
          <span className="cg-liar-value">{liarCard || '?'}</span>
        </div>

        <div className="cg-player-hp">
          <span className="cg-hp-label">HP</span>
          <div className="cg-hp-hearts">
            {Array.from({ length: playerStats?.maxHp || 3 }).map((_, i) => (
              <span key={i} className={`cg-hp-heart ${i < (playerStats?.hp || 0) ? 'active' : ''}`}>
                {i < (playerStats?.hp || 0) ? '❤️' : '🖤'}
              </span>
            ))}
          </div>
        </div>
      </header>

      {/* AI区域 */}
      <div className="cg-ai-area">
        {aiPlayers?.map((ai: any, index: number) => (
          <div 
            key={ai.id} 
            className={`cg-ai-player ${!ai.isActive || ai.stats.hp <= 0 ? 'eliminated' : ''} ${
              currentPlayerId === ai.id ? 'current' : ''
            }`}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="cg-ai-avatar">
              <CharacterRenderer
                characterId={ai.character}
                size={60}
                animationState={currentPlayerId === ai.id ? 'breathing' : 'idle'}
              />
              {ai.isActive && ai.stats.hp > 0 && (
                <div className="cg-ai-hand-count">
                  {ai.hand?.length || 0}
                </div>
              )}
            </div>
            <div className="cg-ai-info">
              <div className="cg-ai-name">{ai.name}</div>
              <div className="cg-ai-hp">
                {Array.from({ length: ai.stats.maxHp }).map((_, i) => (
                  <span key={i} className="cg-hp-heart-small">
                    {i < ai.stats.hp ? '❤️' : '🖤'}
                  </span>
                ))}
              </div>
              {!ai.isActive && <span className="cg-eliminated-tag">淘汰</span>}
            </div>
          </div>
        ))}
      </div>

      {/* 桌面中央 */}
      <div className="cg-table-center">
        <div className="cg-table-surface">
          <div className="cg-table-felt">
            <div className="cg-felt-border">
              <div className="cg-felt-corner cg-felt-tl" />
              <div className="cg-felt-corner cg-felt-tr" />
              <div className="cg-felt-corner cg-felt-bl" />
              <div className="cg-felt-corner cg-felt-br" />
            </div>

            <div className="cg-table-logo">
              <svg viewBox="0 0 100 100" className="cg-logo-geass">
                <circle cx="50" cy="50" r="45" fill="none" stroke="#d4af37" strokeWidth="1" opacity="0.3" />
                <circle cx="50" cy="50" r="35" fill="none" stroke="#d4af37" strokeWidth="0.5" opacity="0.2" />
                <path
                  d="M50 15 L55 40 L80 50 L55 60 L50 85 L45 60 L20 50 L45 40 Z"
                  fill="none"
                  stroke="#dc2626"
                  strokeWidth="2"
                  opacity="0.4"
                >
                  <animateTransform
                    attributeName="transform"
                    type="rotate"
                    from="0 50 50"
                    to="360 50 50"
                    dur="120s"
                    repeatCount="indefinite"
                  />
                </path>
              </svg>
            </div>

            <div className="cg-play-area">
              {turnState?.playedCards ? (
                <div className="cg-played-cards">
                  <div className="cg-played-by">
                    {turnState.playedCards.playerId === 'player' ? '你' : 
                      aiPlayers?.find((ai: any) => ai.id === turnState.playedCards?.playerId)?.name}
                    出了
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
                  <div className="cg-claimed-rank">
                    声称: {turnState.playedCards.claimedRank}
                  </div>
                </div>
              ) : tableCards.length > 0 ? (
                <div className="cg-table-cards-count">
                  桌面有 {tableCards.length} 张牌
                </div>
              ) : (
                <div className="cg-play-placeholder">
                  <span>出牌区域</span>
                </div>
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

            {lastAction && (
              <div className="cg-last-action">
                {lastAction}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* 游戏日志 */}
      <div className="cg-game-log">
        {gameLog.map((log, index) => (
          <div key={index} className="cg-log-entry">
            {log}
          </div>
        ))}
      </div>

      {/* 玩家区域 */}
      <div className="cg-player-area">
        <div className="cg-player-info">
          <div className="cg-player-avatar">
            {selectedCharacter && (
              <CharacterRenderer
                characterId={selectedCharacter}
                size={70}
                animationState={isPlayerTurn ? 'breathing' : 'idle'}
              />
            )}
          </div>
          <div className="cg-player-details">
            <div className="cg-player-name">玩家</div>
            {selectedCharacter === 'lelouch' && isPlayerTurn && (
              <button 
                className="cg-skill-button"
                onClick={handleLelouchSkillClick}
                disabled={isProcessing}
              >
                绝对命令
              </button>
            )}
          </div>
        </div>

        <div className="cg-player-hand">
          {playerHand.map((card: Card, index: number) => {
            const isSelected = selectedCards.includes(card.id);
            return (
              <button
                key={card.id}
                className={`cg-card cg-card-front ${isSelected ? 'selected' : ''} ${!isPlayerTurn || isProcessing ? 'disabled' : ''}`}
                onClick={() => onToggleCardSelection(card.id)}
                style={{
                  transform: `translateX(${(index - playerHand.length / 2) * 35}px) ${isSelected ? 'translateY(-20px)' : ''}`,
                }}
                disabled={!isPlayerTurn || isProcessing}
              >
                <div className="cg-card-inner">
                  <div className="cg-card-rank cg-card-rank-tl" style={{ color: getSuitColor(card.suit) }}>
                    {card.rank}
                  </div>
                  <div className="cg-card-suit-center" style={{ color: getSuitColor(card.suit) }}>
                    {getSuitSymbol(card.suit)}
                  </div>
                  <div className="cg-card-rank cg-card-rank-br" style={{ color: getSuitColor(card.suit) }}>
                    {card.rank}
                  </div>
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
          <button 
            className="cg-action-button cg-button-play"
            onClick={handlePlayClick}
            disabled={isProcessing}
          >
            <span>出牌 ({selectedCards.length})</span>
          </button>
        )}

        {isPlayerTurn && selectedCards.length === 0 && (
          <button 
            className="cg-action-button cg-button-pass"
            onClick={onPass}
            disabled={isProcessing}
          >
            <span>跳过</span>
          </button>
        )}
        
        {isChallengePhase && !isPlayerLastPlayed && lastAI?.isActive && (
          <>
            <button 
              className="cg-action-button cg-button-challenge cg-button-geass"
              onClick={onChallenge}
              disabled={isProcessing}
            >
              <span className="cg-button-icon">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                </svg>
              </span>
              <span>质疑</span>
            </button>
            <button 
              className="cg-action-button cg-button-pass"
              onClick={onPass}
              disabled={isProcessing}
            >
              <span>不质疑</span>
            </button>
          </>
        )}

        {isChallengePhase && isPlayerLastPlayed && (
          <div className="cg-waiting-text">等待AI决策...</div>
        )}

        {!isPlayerTurn && !isChallengePhase && (
          <div className="cg-waiting-text">AI回合中...</div>
        )}
      </div>

      {/* 鲁鲁修技能弹窗 */}
      {showLelouchSkill && (
        <div className="cg-modal-overlay">
          <div className="cg-modal">
            <h3>绝对命令 - 选择新的骗子牌</h3>
            <div className="cg-rank-grid">
              {CARD_RANKS.map(rank => (
                <button
                  key={rank}
                  className={`cg-rank-button ${rank === liarCard ? 'current' : ''}`}
                  onClick={() => handleLelouchRankSelect(rank)}
                >
                  {rank}
                  {rank === liarCard && <span className="cg-current-badge">当前</span>}
                </button>
              ))}
            </div>
            <button className="cg-modal-close" onClick={() => setShowLelouchSkill(false)}>取消</button>
          </div>
        </div>
      )}

      <style>{`
        .cg-game-table {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          overflow: hidden;
          font-family: 'Noto Sans SC', sans-serif;
        }

        .cg-table-bg {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 0;
        }

        .cg-table-bg-gradient {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            180deg,
            #0a0a0f 0%,
            #0f0f1a 20%,
            #1a1a24 50%,
            #0f0f1a 80%,
            #0a0a0f 100%
          );
        }

        .cg-table-pattern {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          opacity: 0.5;
        }

        .cg-table-geass-pattern {
          width: 100%;
          height: 100%;
        }

        .cg-table-header {
          position: relative;
          z-index: 1;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0.75rem 1rem;
          background: linear-gradient(180deg, rgba(10, 10, 15, 0.9) 0%, transparent 100%);
          gap: 1rem;
        }

        .cg-header-left {
          display: flex;
          align-items: center;
        }

        .cg-back-to-menu {
          display: flex;
          align-items: center;
          gap: 0.25rem;
          padding: 0.4rem 0.75rem;
          font-size: 0.8rem;
          color: #a1a1aa;
          background: rgba(26, 26, 36, 0.8);
          border: 1px solid #3f3f46;
          border-radius: 0.375rem;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .cg-back-to-menu:hover {
          color: #f5f5f5;
          border-color: #d4af37;
        }

        .cg-back-to-menu svg {
          width: 16px;
          height: 16px;
        }

        .cg-round-info, .cg-liar-card-display, .cg-player-hp {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.4rem 0.75rem;
          background: rgba(26, 26, 36, 0.8);
          border: 1px solid #3f3f46;
          border-radius: 0.5rem;
        }

        .cg-round-label, .cg-hp-label {
          font-size: 0.75rem;
          color: #71717a;
        }

        .cg-round-value {
          font-family: 'Cinzel', serif;
          font-size: 1.1rem;
          font-weight: 600;
          color: #d4af37;
        }

        .cg-liar-label {
          font-size: 0.75rem;
          color: #dc2626;
        }

        .cg-liar-value {
          font-family: 'Cinzel', serif;
          font-size: 1.25rem;
          font-weight: 700;
          color: #dc2626;
          text-shadow: 0 0 10px rgba(220, 38, 38, 0.5);
        }

        .cg-hp-hearts {
          display: flex;
          gap: 0.25rem;
        }

        .cg-hp-heart {
          font-size: 1rem;
          opacity: 0.3;
          transition: opacity 0.3s;
        }

        .cg-hp-heart.active {
          opacity: 1;
        }

        .cg-ai-area {
          position: relative;
          z-index: 1;
          display: flex;
          justify-content: center;
          gap: 1.5rem;
          padding: 0.5rem;
          flex-wrap: wrap;
        }

        .cg-ai-player {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.25rem;
          padding: 0.5rem;
          background: rgba(26, 26, 36, 0.6);
          border: 1px solid #3f3f46;
          border-radius: 0.75rem;
          transition: all 0.3s ease;
          animation: fadeInDown 0.5s ease;
        }

        .cg-ai-player.current {
          border-color: #d4af37;
          box-shadow: 0 0 15px rgba(212, 175, 55, 0.3);
        }

        .cg-ai-player.eliminated {
          opacity: 0.4;
          filter: grayscale(1);
        }

        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .cg-ai-avatar {
          position: relative;
        }

        .cg-ai-hand-count {
          position: absolute;
          bottom: -5px;
          right: -5px;
          width: 22px;
          height: 22px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #dc2626;
          color: white;
          font-size: 0.75rem;
          font-weight: 600;
          border-radius: 50%;
        }

        .cg-ai-info {
          text-align: center;
        }

        .cg-ai-name {
          font-size: 0.8rem;
          color: #f5f5f5;
          font-weight: 500;
        }

        .cg-ai-hp {
          display: flex;
          gap: 0.125rem;
          justify-content: center;
        }

        .cg-hp-heart-small {
          font-size: 0.7rem;
        }

        .cg-eliminated-tag {
          font-size: 0.65rem;
          color: #71717a;
          background: #1a1a24;
          padding: 0.1rem 0.3rem;
          border-radius: 0.25rem;
        }

        .cg-table-center {
          position: relative;
          z-index: 1;
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0.5rem;
          min-height: 0;
        }

        .cg-table-surface {
          position: relative;
          width: 100%;
          max-width: 450px;
          aspect-ratio: 16/10;
        }

        .cg-table-felt {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, #0f3814 0%, #1a4d20 50%, #0f3814 100%);
          border-radius: 1rem;
          box-shadow: 
            inset 0 0 60px rgba(0, 0, 0, 0.5),
            0 10px 40px rgba(0, 0, 0, 0.5);
        }

        .cg-felt-border {
          position: absolute;
          top: 10px;
          left: 10px;
          right: 10px;
          bottom: 10px;
          border: 2px solid #d4af37;
          border-radius: 0.75rem;
          opacity: 0.3;
        }

        .cg-felt-corner {
          position: absolute;
          width: 30px;
          height: 30px;
          border: 2px solid #d4af37;
        }

        .cg-felt-tl { top: -2px; left: -2px; border-right: none; border-bottom: none; }
        .cg-felt-tr { top: -2px; right: -2px; border-left: none; border-bottom: none; }
        .cg-felt-bl { bottom: -2px; left: -2px; border-right: none; border-top: none; }
        .cg-felt-br { bottom: -2px; right: -2px; border-left: none; border-top: none; }

        .cg-table-logo {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 100px;
          height: 100px;
          opacity: 0.5;
        }

        .cg-logo-geass {
          width: 100%;
          height: 100%;
        }

        .cg-play-area {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
        }

        .cg-play-placeholder {
          padding: 1rem 2rem;
          border: 2px dashed rgba(212, 175, 55, 0.3);
          border-radius: 0.5rem;
        }

        .cg-play-placeholder span {
          font-size: 0.875rem;
          color: rgba(212, 175, 55, 0.5);
        }

        .cg-played-cards {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
        }

        .cg-played-by {
          font-size: 0.75rem;
          color: #d4af37;
          background: rgba(10, 10, 15, 0.8);
          padding: 0.25rem 0.75rem;
          border-radius: 0.375rem;
        }

        .cg-played-cards-list {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.25rem;
        }

        .cg-claimed-rank {
          font-size: 0.75rem;
          color: #a1a1aa;
          background: rgba(10, 10, 15, 0.8);
          padding: 0.25rem 0.75rem;
          border-radius: 0.375rem;
        }

        .cg-table-cards-count {
          font-size: 0.875rem;
          color: #a1a1aa;
        }

        .cg-funny-action {
          position: absolute;
          top: 5%;
          left: 50%;
          transform: translateX(-50%);
          background: rgba(220, 38, 38, 0.9);
          padding: 0.75rem 1.5rem;
          border-radius: 0.5rem;
          animation: funnyPop 0.5s ease;
          z-index: 10;
        }

        @keyframes funnyPop {
          0% { transform: translateX(-50%) scale(0); }
          50% { transform: translateX(-50%) scale(1.1); }
          100% { transform: translateX(-50%) scale(1); }
        }

        .cg-funny-action-content {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .cg-funny-emoji {
          font-size: 1.5rem;
        }

        .cg-funny-text {
          font-size: 0.875rem;
          color: white;
          font-weight: 600;
          white-space: nowrap;
        }

        .cg-last-action {
          position: absolute;
          bottom: 8%;
          left: 50%;
          transform: translateX(-50%);
          font-size: 0.8rem;
          color: #d4af37;
          background: rgba(10, 10, 15, 0.8);
          padding: 0.4rem 0.75rem;
          border-radius: 0.375rem;
          white-space: nowrap;
          max-width: 90%;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .cg-game-log {
          position: absolute;
          left: 0.5rem;
          top: 50%;
          transform: translateY(-50%);
          width: 160px;
          max-height: 180px;
          overflow-y: auto;
          background: rgba(10, 10, 15, 0.85);
          border: 1px solid #3f3f46;
          border-radius: 0.5rem;
          padding: 0.5rem;
          z-index: 5;
        }

        .cg-log-entry {
          font-size: 0.7rem;
          color: #a1a1aa;
          margin-bottom: 0.25rem;
          padding-bottom: 0.25rem;
          border-bottom: 1px solid rgba(63, 63, 70, 0.5);
          line-height: 1.4;
        }

        .cg-log-entry:last-child {
          margin-bottom: 0;
          padding-bottom: 0;
          border-bottom: none;
          color: #d4af37;
        }

        .cg-player-area {
          position: relative;
          z-index: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
          padding: 0.5rem;
        }

        .cg-player-info {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .cg-player-avatar {
          padding: 0.25rem;
          background: linear-gradient(135deg, #1a1a24 0%, #252532 100%);
          border: 2px solid #3f3f46;
          border-radius: 50%;
        }

        .cg-player-details {
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
        }

        .cg-player-name {
          font-size: 0.875rem;
          color: #f5f5f5;
          font-weight: 500;
        }

        .cg-skill-button {
          padding: 0.3rem 0.6rem;
          font-size: 0.7rem;
          color: #0a0a0f;
          background: linear-gradient(135deg, #b8941f 0%, #d4af37 100%);
          border: none;
          border-radius: 0.25rem;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .cg-skill-button:hover:not(:disabled) {
          box-shadow: 0 0 10px rgba(212, 175, 55, 0.4);
        }

        .cg-skill-button:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        .cg-player-hand {
          display: flex;
          align-items: center;
          justify-content: center;
          height: 90px;
        }

        .cg-card {
          position: relative;
          width: 50px;
          height: 75px;
          background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
          border-radius: 0.375rem;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
          border: none;
          transition: all 0.3s ease;
        }

        .cg-card-front {
          background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
          border: 1px solid #cbd5e1;
          cursor: pointer;
        }

        .cg-card-front:hover:not(.disabled) {
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.4);
          z-index: 10;
        }

        .cg-card-front.selected {
          box-shadow: 0 0 0 2px #d4af37, 0 10px 20px rgba(0, 0, 0, 0.4);
          z-index: 10;
        }

        .cg-card-front.disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        .cg-card-selected-indicator {
          position: absolute;
          top: -8px;
          right: -8px;
          width: 20px;
          height: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #d4af37;
          color: #0a0a0f;
          font-size: 0.75rem;
          font-weight: 700;
          border-radius: 50%;
        }

        .cg-card-inner {
          position: relative;
          width: 100%;
          height: 100%;
          padding: 0.375rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }

        .cg-card-rank {
          font-family: 'Cinzel', serif;
          font-size: 0.7rem;
          font-weight: 700;
        }

        .cg-card-rank-tl {
          position: absolute;
          top: 0.25rem;
          left: 0.25rem;
        }

        .cg-card-rank-br {
          position: absolute;
          bottom: 0.25rem;
          right: 0.25rem;
          transform: rotate(180deg);
        }

        .cg-card-suit-center {
          font-size: 1.25rem;
        }

        .cg-card-played {
          position: relative;
        }

        .cg-card-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          height: 100%;
          gap: 0.25rem;
        }

        .cg-action-bar {
          position: relative;
          z-index: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1rem;
          padding: 0.5rem;
          background: linear-gradient(0deg, rgba(10, 10, 15, 0.9) 0%, transparent 100%);
          min-height: 50px;
        }

        .cg-action-button {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.5rem 1rem;
          font-size: 0.875rem;
          font-weight: 600;
          border: none;
          border-radius: 0.5rem;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .cg-action-button:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        .cg-button-pass {
          background: linear-gradient(135deg, #3f3f46 0%, #52525b 100%);
          color: #f5f5f5;
        }

        .cg-button-pass:hover:not(:disabled) {
          background: linear-gradient(135deg, #52525b 0%, #71717a 100%);
        }

        .cg-button-play {
          background: linear-gradient(135deg, #15803d 0%, #22c55e 100%);
          color: white;
        }

        .cg-button-play:hover:not(:disabled) {
          background: linear-gradient(135deg, #166534 0%, #16a34a 100%);
          box-shadow: 0 0 20px rgba(34, 197, 94, 0.4);
        }

        .cg-button-challenge {
          background: linear-gradient(135deg, #991b1b 0%, #dc2626 100%);
          color: #f5f5f5;
        }

        .cg-button-challenge:hover:not(:disabled) {
          background: linear-gradient(135deg, #b91c1c 0%, #ef4444 100%);
          box-shadow: 0 0 20px rgba(220, 38, 38, 0.4);
        }

        .cg-button-icon svg {
          width: 18px;
          height: 18px;
        }

        .cg-waiting-text {
          font-size: 0.875rem;
          color: #71717a;
          animation: pulse 1.5s infinite;
        }

        @keyframes pulse {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 1; }
        }

        .cg-modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.8);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 100;
        }

        .cg-modal {
          background: linear-gradient(135deg, #1a1a24 0%, #252532 100%);
          border: 1px solid #3f3f46;
          border-radius: 1rem;
          padding: 1.5rem;
          max-width: 400px;
          width: 90%;
        }

        .cg-modal h3 {
          margin: 0 0 1rem;
          font-family: 'Cinzel', serif;
          font-size: 1.1rem;
          color: #d4af37;
          text-align: center;
        }

        .cg-rank-grid {
          display: grid;
          grid-template-columns: repeat(7, 1fr);
          gap: 0.5rem;
          margin-bottom: 1rem;
        }

        .cg-rank-button {
          padding: 0.5rem;
          font-size: 1rem;
          font-weight: 600;
          color: #f5f5f5;
          background: #252532;
          border: 1px solid #3f3f46;
          border-radius: 0.375rem;
          cursor: pointer;
          transition: all 0.3s ease;
          position: relative;
        }

        .cg-rank-button:hover {
          border-color: #d4af37;
          background: #3f3f46;
        }

        .cg-rank-button.is-liar {
          border-color: #dc2626;
          color: #dc2626;
        }

        .cg-rank-button.current {
          border-color: #d4af37;
          color: #d4af37;
        }

        .cg-liar-badge, .cg-current-badge {
          position: absolute;
          bottom: -8px;
          left: 50%;
          transform: translateX(-50%);
          font-size: 0.5rem;
          padding: 0.1rem 0.3rem;
          border-radius: 0.25rem;
          white-space: nowrap;
        }

        .cg-liar-badge {
          background: #dc2626;
          color: white;
        }

        .cg-current-badge {
          background: #d4af37;
          color: #0a0a0f;
        }

        .cg-modal-close {
          width: 100%;
          padding: 0.5rem;
          font-size: 0.875rem;
          color: #a1a1aa;
          background: transparent;
          border: 1px solid #3f3f46;
          border-radius: 0.375rem;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .cg-modal-close:hover {
          border-color: #d4af37;
          color: #f5f5f5;
        }

        @media (max-width: 768px) {
          .cg-game-log {
            display: none;
          }
          
          .cg-table-surface {
            max-width: 320px;
          }
          
          .cg-card {
            width: 40px;
            height: 60px;
          }
          
          .cg-table-logo {
            width: 70px;
            height: 70px;
          }

          .cg-ai-area {
            gap: 0.5rem;
          }

          .cg-ai-player {
            padding: 0.25rem;
          }

          .cg-rank-grid {
            grid-template-columns: repeat(4, 1fr);
          }
        }
      `}</style>
    </div>
  );
};

export default GameTable;
