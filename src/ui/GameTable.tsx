/**
 * Code Geass: Liar's Game - 游戏主界面（牌桌）
 * 黑金主题牌桌 + Geass纹路装饰
 */

import React from 'react';
import { CharacterRenderer } from '../components/characters';
import type { Card, CharacterId, FunnyAction } from '../types';

interface GameTableProps {
  gameState: {
    selectedCharacter: CharacterId | null;
    playerHand: Card[];
    opponentHand: Card[];
    tableCards: Card[];
    currentRound: number;
    playerScore: number;
    opponentScore: number;
    playerHP: number;
    opponentHP: number;
    maxHP: number;
    currentTurn: 'player' | 'opponent';
    lastAction: string;
  };
  onPlayCard: (cardId: string) => void;
  onPass: () => void;
  onChallenge: () => void;
  gameLog?: string[];
  funnyAction?: FunnyAction | null;
}

export const GameTable: React.FC<GameTableProps> = ({
  gameState,
  onPlayCard,
  onPass,
  onChallenge,
  gameLog = [],
  funnyAction,
}) => {
  const { 
    selectedCharacter, 
    playerHand, 
    tableCards, 
    currentRound, 
    playerScore, 
    opponentScore, 
    playerHP, 
    opponentHP, 
    maxHP, 
    currentTurn, 
    lastAction 
  } = gameState;

  return (
    <div className="cg-game-table">
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

      <header className="cg-table-header">
        <div className="cg-round-info">
          <span className="cg-round-label">回合</span>
          <span className="cg-round-value">{currentRound}/5</span>
        </div>

        <div className="cg-score-board">
          <div className="cg-score cg-player-score">
            <span className="cg-score-label">玩家</span>
            <span className="cg-score-value">{playerScore}</span>
          </div>
          
          <div className="cg-score-divider">:</div>
          
          <div className="cg-score cg-opponent-score">
            <span className="cg-score-value">{opponentScore}</span>
            <span className="cg-score-label">对手</span>
          </div>
        </div>

        <div className="cg-hp-display">
          <div className="cg-hp-bar">
            <span className="cg-hp-label">HP</span>
            <div className="cg-hp-hearts">
              {Array.from({ length: maxHP || 3 }).map((_, i) => (
                <span key={i} className={`cg-hp-heart ${i < (playerHP || 3) ? 'active' : ''}`}>
                  {i < (playerHP || 3) ? '❤️' : '🖤'}
                </span>
              ))}
            </div>
          </div>
        </div>
      </header>

      <div className="cg-opponent-area">
        <div className="cg-opponent-hand">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="cg-card cg-card-back">
              <div className="cg-card-pattern">
                <svg viewBox="0 0 40 60">
                  <rect width="40" height="60" fill="#1a1a24" />
                  <path
                    d="M20 10 L23 22 L35 25 L23 28 L20 40 L17 28 L5 25 L17 22 Z"
                    fill="none"
                    stroke="#dc2626"
                    strokeWidth="1"
                    opacity="0.5"
                  />
                </svg>
              </div>
            </div>
          ))}
        </div>

        <div className="cg-opponent-avatar">
          <div className={`cg-avatar-frame ${currentTurn === 'opponent' ? 'cg-avatar-active' : ''}`}>
            <CharacterRenderer
              characterId="cc"
              size={80}
              animationState={currentTurn === 'opponent' ? 'breathing' : 'idle'}
            />
          </div>
          <div className="cg-opponent-name">C.C.</div>
          <div className="cg-opponent-hp">
            {Array.from({ length: maxHP || 3 }).map((_, i) => (
              <span key={i} className="cg-hp-heart-small">
                {i < (opponentHP || 3) ? '❤️' : '🖤'}
              </span>
            ))}
          </div>
        </div>
      </div>

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
              {tableCards.length === 0 ? (
                <div className="cg-play-placeholder">
                  <span>出牌区域</span>
                </div>
              ) : (
                <div className="cg-played-cards">
                  {tableCards.map((card, index) => (
                    <div 
                      key={card.id}
                      className="cg-card cg-card-played"
                      style={{ 
                        transform: `rotate(${(index - tableCards.length / 2) * 5}deg) translateY(${index * -5}px)`,
                      }}
                    >
                      <div className="cg-card-content">
                        <span className="cg-card-rank">{card.rank}</span>
                        <span className="cg-card-suit">{getSuitSymbol(card.suit)}</span>
                      </div>
                    </div>
                  ))}
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

      <div className="cg-game-log">
        {gameLog.map((log, index) => (
          <div key={index} className="cg-log-entry">
            {log}
          </div>
        ))}
      </div>

      <div className="cg-player-area">
        <div className="cg-player-avatar">
          <div className={`cg-avatar-frame ${currentTurn === 'player' ? 'cg-avatar-active' : ''}`}>
            {selectedCharacter && (
              <CharacterRenderer
                characterId={selectedCharacter}
                size={80}
                animationState={currentTurn === 'player' ? 'breathing' : 'idle'}
              />
            )}
          </div>
          <div className="cg-player-name">玩家</div>
        </div>

        <div className="cg-player-hand">
          {playerHand.map((card, index) => (
            <button
              key={card.id}
              className={`cg-card cg-card-front ${currentTurn !== 'player' ? 'disabled' : ''}`}
              onClick={() => currentTurn === 'player' && onPlayCard(card.id)}
              style={{
                transform: `translateX(${(index - playerHand.length / 2) * 30}px)`,
              }}
              disabled={currentTurn !== 'player'}
            >
              <div className="cg-card-inner">
                <div className="cg-card-rank cg-card-rank-tl">{card.rank}</div>
                <div className="cg-card-suit-center">{getSuitSymbol(card.suit)}</div>
                <div className="cg-card-rank cg-card-rank-br">{card.rank}</div>
              </div>
            </button>
          ))}
        </div>
      </div>

      <div className="cg-action-bar">
        <button 
          className="cg-action-button cg-button-pass" 
          onClick={onPass}
          disabled={currentTurn !== 'player'}
        >
          <span>跳过</span>
        </button>
        
        <button 
          className="cg-action-button cg-button-challenge cg-button-geass" 
          onClick={onChallenge}
          disabled={currentTurn !== 'player' || tableCards.length === 0}
        >
          <span className="cg-button-icon">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
            </svg>
          </span>
          <span>质疑</span>
        </button>
      </div>

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
          padding: 0.75rem 1.5rem;
          background: linear-gradient(180deg, rgba(10, 10, 15, 0.9) 0%, transparent 100%);
        }

        .cg-round-info {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .cg-round-label {
          font-family: 'Noto Sans SC', sans-serif;
          font-size: 0.875rem;
          color: #71717a;
        }

        .cg-round-value {
          font-family: 'Cinzel', serif;
          font-size: 1.25rem;
          font-weight: 600;
          color: #d4af37;
        }

        .cg-score-board {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 0.5rem 1rem;
          background: rgba(26, 26, 36, 0.8);
          border: 1px solid #3f3f46;
          border-radius: 0.5rem;
        }

        .cg-score {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .cg-score-label {
          font-size: 0.75rem;
          color: #71717a;
        }

        .cg-score-value {
          font-family: 'Cinzel', serif;
          font-size: 1.25rem;
          font-weight: 700;
          color: #f5f5f5;
        }

        .cg-score-divider {
          font-family: 'Cinzel', serif;
          font-size: 1.25rem;
          color: #d4af37;
        }

        .cg-hp-display {
          display: flex;
          align-items: center;
        }

        .cg-hp-bar {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.25rem 0.75rem;
          background: rgba(26, 26, 36, 0.8);
          border: 1px solid #3f3f46;
          border-radius: 0.5rem;
        }

        .cg-hp-label {
          font-family: 'Cinzel', serif;
          font-size: 0.75rem;
          color: #dc2626;
          font-weight: 600;
        }

        .cg-hp-hearts {
          display: flex;
          gap: 0.25rem;
        }

        .cg-hp-heart {
          font-size: 1rem;
        }

        .cg-hp-heart-small {
          font-size: 0.75rem;
        }

        .cg-opponent-area {
          position: relative;
          z-index: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 2rem;
          padding: 0.5rem;
        }

        .cg-opponent-avatar,
        .cg-player-avatar {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.25rem;
        }

        .cg-avatar-frame {
          padding: 0.375rem;
          background: linear-gradient(135deg, #1a1a24 0%, #252532 100%);
          border: 2px solid #3f3f46;
          border-radius: 50%;
          transition: all 0.3s ease;
        }

        .cg-avatar-active {
          border-color: #d4af37;
          box-shadow: 0 0 20px rgba(212, 175, 55, 0.3);
        }

        .cg-opponent-name,
        .cg-player-name {
          font-family: 'Noto Sans SC', sans-serif;
          font-size: 0.75rem;
          color: #a1a1aa;
        }

        .cg-opponent-hp {
          display: flex;
          gap: 0.125rem;
        }

        .cg-opponent-hand,
        .cg-player-hand {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .cg-table-center {
          position: relative;
          z-index: 1;
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1rem;
          min-height: 0;
        }

        .cg-table-surface {
          position: relative;
          width: 100%;
          max-width: 500px;
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
          width: 120px;
          height: 120px;
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
          align-items: center;
          justify-content: center;
        }

        .cg-play-placeholder {
          padding: 1.5rem 3rem;
          border: 2px dashed rgba(212, 175, 55, 0.3);
          border-radius: 0.5rem;
        }

        .cg-play-placeholder span {
          font-family: 'Noto Sans SC', sans-serif;
          font-size: 0.875rem;
          color: rgba(212, 175, 55, 0.5);
        }

        .cg-played-cards {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .cg-funny-action {
          position: absolute;
          top: 10%;
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
          font-family: 'Noto Sans SC', sans-serif;
          font-size: 0.875rem;
          color: white;
          font-weight: 600;
        }

        .cg-last-action {
          position: absolute;
          bottom: 10%;
          left: 50%;
          transform: translateX(-50%);
          font-family: 'Noto Sans SC', sans-serif;
          font-size: 0.875rem;
          color: #d4af37;
          background: rgba(10, 10, 15, 0.8);
          padding: 0.5rem 1rem;
          border-radius: 0.375rem;
          white-space: nowrap;
        }

        .cg-game-log {
          position: absolute;
          left: 1rem;
          top: 50%;
          transform: translateY(-50%);
          width: 180px;
          max-height: 200px;
          overflow-y: auto;
          background: rgba(10, 10, 15, 0.8);
          border: 1px solid #3f3f46;
          border-radius: 0.5rem;
          padding: 0.75rem;
          z-index: 5;
        }

        .cg-log-entry {
          font-family: 'Noto Sans SC', sans-serif;
          font-size: 0.75rem;
          color: #a1a1aa;
          margin-bottom: 0.375rem;
          padding-bottom: 0.375rem;
          border-bottom: 1px solid rgba(63, 63, 70, 0.5);
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
          align-items: center;
          justify-content: center;
          gap: 2rem;
          padding: 0.5rem;
        }

        .cg-card {
          position: relative;
          width: 50px;
          height: 75px;
          background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
          border-radius: 0.375rem;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
          border: none;
        }

        .cg-card-back {
          background: linear-gradient(135deg, #1a1a24 0%, #252532 100%);
          border: 1px solid #3f3f46;
        }

        .cg-card-pattern {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 25px;
          height: 37px;
        }

        .cg-card-front {
          background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
          border: 1px solid #cbd5e1;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .cg-card-front:hover:not(.disabled) {
          transform: translateY(-15px) scale(1.1) !important;
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.4);
          z-index: 10;
        }

        .cg-card-front.disabled {
          opacity: 0.6;
          cursor: not-allowed;
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
          font-size: 0.75rem;
          font-weight: 700;
          color: #1a1a24;
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
          position: absolute;
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
          padding: 0.75rem;
          background: linear-gradient(0deg, rgba(10, 10, 15, 0.9) 0%, transparent 100%);
        }

        .cg-action-button {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.625rem 1.25rem;
          font-family: 'Noto Sans SC', sans-serif;
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

        @media (max-width: 768px) {
          .cg-game-log {
            display: none;
          }
          
          .cg-table-surface {
            max-width: 350px;
          }
          
          .cg-card {
            width: 40px;
            height: 60px;
          }
          
          .cg-table-logo {
            width: 80px;
            height: 80px;
          }
        }
      `}</style>
    </div>
  );
};

function getSuitSymbol(suit: string): string {
  const symbols: Record<string, string> = {
    spades: '♠',
    hearts: '♥',
    clubs: '♣',
    diamonds: '♦',
  };
  return symbols[suit] || suit;
}

export default GameTable;
