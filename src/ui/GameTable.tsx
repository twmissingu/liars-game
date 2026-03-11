/**
 * Code Geass: Liar's Game - 游戏主界面（圆桌布局）
 * 圆桌布局 + 角色名称显示 + 优化日志
 */

import React, { useState } from 'react';
import { CharacterRenderer } from '../components/characters';
import { characters } from '../data/characters';
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

// 获取角色名称
const getCharacterName = (characterId: CharacterId | null): string => {
  if (!characterId) return '玩家';
  const char = characters.find(c => c.id === characterId);
  return char?.name || '玩家';
};

// 获取角色颜色
const getCharacterColor = (characterId: CharacterId | null): string => {
  if (!characterId) return '#d4af37';
  const char = characters.find(c => c.id === characterId);
  return char?.accentColor || '#d4af37';
};

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
    if (suit === 'joker') return '#d4af37';
    return suit === 'hearts' || suit === 'diamonds' ? '#dc2626' : '#1a1a24';
  };

  // 玩家角色名称和颜色
  const playerName = getCharacterName(selectedCharacter);
  const playerColor = getCharacterColor(selectedCharacter);

  return (
    <div className="cg-game-table">
      {/* 顶部信息栏 */}
      <div className="cg-top-bar">
        <button className="cg-back-button" onClick={onBackToMenu}>← 主页面</button>
        <div className="cg-round-info">回合 {currentRound}</div>
        <div className="cg-liar-card">
          骗子牌 <span className="cg-liar-rank">{liarCard}</span>
        </div>
        <div className="cg-hp-display">
          HP {Array(playerStats.hp).fill('❤️').join('')}
        </div>
      </div>

      {/* 主游戏区域 - 圆桌布局 */}
      <div className="cg-round-table-container">
        {/* 顶部AI - C.C. */}
        <div className="cg-ai-position cg-ai-top">
          <div className="cg-ai-info">
            <div className="cg-ai-name" style={{ color: '#22c55e' }}>C.C.</div>
            <div className="cg-ai-hp">{Array(aiPlayers?.[0]?.stats?.hp || 3).fill('❤️').join('')}</div>
          </div>
          <div className="cg-ai-avatar">
            <CharacterRenderer characterId="cc" size={60} animationState="idle" />
          </div>
        </div>

        {/* 左侧AI - 朱雀 */}
        <div className="cg-ai-position cg-ai-left">
          <div className="cg-ai-info">
            <div className="cg-ai-name" style={{ color: '#3b82f6' }}>朱雀</div>
            <div className="cg-ai-hp">{Array(aiPlayers?.[1]?.stats?.hp || 3).fill('❤️').join('')}</div>
          </div>
          <div className="cg-ai-avatar">
            <CharacterRenderer characterId="suzaku" size={60} animationState="idle" />
          </div>
        </div>

        {/* 右侧AI - 卡莲 */}
        <div className="cg-ai-position cg-ai-right">
          <div className="cg-ai-info">
            <div className="cg-ai-name" style={{ color: '#dc2626' }}>卡莲</div>
            <div className="cg-ai-hp">{Array(aiPlayers?.[2]?.stats?.hp || 3).fill('❤️').join('')}</div>
          </div>
          <div className="cg-ai-avatar">
            <CharacterRenderer characterId="kallen" size={60} animationState="idle" />
          </div>
        </div>

        {/* 中央圆桌 */}
        <div className="cg-round-table">
          <div className="cg-table-felt">
            {/* 出牌区域 */}
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
                  <div className="cg-claimed-rank">
                    声称: 骗子牌 {liarCard}
                  </div>
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

      {/* 左侧游戏日志 - 更大更清晰 */}
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

      {/* 底部玩家区域 */}
      <div className="cg-player-area">
        <div className="cg-player-info">
          <div className="cg-player-avatar">
            {selectedCharacter && (
              <CharacterRenderer
                characterId={selectedCharacter}
                size={80}
                animationState={isPlayerTurn ? 'breathing' : 'idle'}
              />
            )}
          </div>
          <div className="cg-player-details">
            <div className="cg-player-name" style={{ color: playerColor }}>{playerName}</div>
            <div className="cg-player-hp">{Array(playerStats.hp).fill('❤️').join('')}</div>
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
                  transform: `translateX(${(index - playerHand.length / 2) * 40}px) ${isSelected ? 'translateY(-20px)' : ''}`,
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
                  <div className="cg-card-rank cg-card-rank-br" style={{ color: getSuitColor(card.suit) }}
003e
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
              <span className="cg-button-icon">⚔️</span>
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
              {['Q', 'K', 'A'].map(rank => (
                <button
                  key={rank}
                  className={`cg-rank-button ${rank === liarCard ? 'current' : ''}`}
                  onClick={() => handleLelouchRankSelect(rank as CardRank)}
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
          width: 100vw;
          height: 100vh;
          display: grid;
          grid-template-rows: 60px 1fr 180px 80px;
          grid-template-columns: 300px 1fr;
          grid-template-areas:
            "top top"
            "log table"
            "log player"
            "action action";
          overflow: hidden;
          font-family: 'Noto Sans SC', sans-serif;
          background: linear-gradient(180deg, #0a0a0f 0%, #1a1a24 100%);
        }

        /* 顶部栏 */
        .cg-top-bar {
          grid-area: top;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 20px;
          background: rgba(0, 0, 0, 0.3);
          border-bottom: 1px solid rgba(212, 175, 55, 0.2);
        }

        .cg-back-button {
          padding: 8px 16px;
          background: transparent;
          border: 1px solid rgba(212, 175, 55, 0.5);
          color: #d4af37;
          border-radius: 4px;
          cursor: pointer;
          font-size: 14px;
        }

        .cg-round-info {
          font-size: 18px;
          color: #d4af37;
          font-weight: bold;
        }

        .cg-liar-card {
          font-size: 16px;
          color: #f5f5f5;
        }

        .cg-liar-rank {
          color: #dc2626;
          font-weight: bold;
          font-size: 20px;
        }

        .cg-hp-display {
          font-size: 16px;
        }

        /* 日志区域 - 更大 */
        .cg-game-log {
          grid-area: log;
          background: rgba(0, 0, 0, 0.4);
          border-right: 1px solid rgba(212, 175, 55, 0.2);
          padding: 15px;
          display: flex;
          flex-direction: column;
          overflow: hidden;
        }

        .cg-log-title {
          font-size: 16px;
          color: #d4af37;
          margin-bottom: 10px;
          padding-bottom: 10px;
          border-bottom: 1px solid rgba(212, 175, 55, 0.3);
        }

        .cg-log-content {
          flex: 1;
          overflow-y: auto;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .cg-log-entry {
          padding: 8px 12px;
          background: rgba(255, 255, 255, 0.05);
          border-radius: 6px;
          font-size: 14px;
          line-height: 1.5;
          color: #e5e5e5;
        }

        .cg-log-challenge {
          background: rgba(220, 38, 38, 0.2);
          border-left: 3px solid #dc2626;
        }

        .cg-log-geass {
          background: rgba(212, 175, 55, 0.2);
          border-left: 3px solid #d4af37;
        }

        /* 圆桌区域 */
        .cg-round-table-container {
          grid-area: table;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .cg-round-table {
          width: 400px;
          height: 400px;
          border-radius: 50%;
          background: linear-gradient(145deg, #1a3a1a 0%, #0d260d 100%);
          border: 8px solid #2d5016;
          box-shadow: 
            inset 0 0 60px rgba(0, 0, 0, 0.5),
            0 0 40px rgba(0, 0, 0, 0.5);
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
        }

        .cg-table-felt {
          width: 360px;
          height: 360px;
          border-radius: 50%;
          background: radial-gradient(circle, #1e4a1e 0%, #143614 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
        }

        /* AI位置 - 四等分对称 */
        .cg-ai-position {
          position: absolute;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
        }

        .cg-ai-top {
          top: 20px;
          left: 50%;
          transform: translateX(-50%);
        }

        .cg-ai-left {
          left: 20px;
          top: 50%;
          transform: translateY(-50%);
        }

        .cg-ai-right {
          right: 20px;
          top: 50%;
          transform: translateY(-50%);
        }

        .cg-ai-info {
          text-align: center;
        }

        .cg-ai-name {
          font-size: 16px;
          font-weight: bold;
          text-shadow: 0 2px 4px rgba(0, 0, 0, 0.8);
        }

        .cg-ai-hp {
          font-size: 14px;
          margin-top: 4px;
        }

        .cg-ai-avatar {
          filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.5));
        }

        /* 出牌区域 */
        .cg-play-area {
          text-align: center;
        }

        .cg-play-placeholder {
          color: rgba(255, 255, 255, 0.3);
          font-size: 18px;
        }

        .cg-played-by {
          color: #d4af37;
          font-size: 16px;
          margin-bottom: 10px;
        }

        .cg-played-cards-list {
          display: flex;
          justify-content: center;
          gap: 10px;
          margin: 10px 0;
        }

        .cg-claimed-rank {
          color: #f5f5f5;
          font-size: 14px;
        }

        /* 玩家区域 */
        .cg-player-area {
          grid-area: player;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 10px;
        }

        .cg-player-info {
          display: flex;
          align-items: center;
          gap: 15px;
          margin-bottom: 15px;
        }

        .cg-player-details {
          text-align: center;
        }

        .cg-player-name {
          font-size: 20px;
          font-weight: bold;
          text-shadow: 0 2px 4px rgba(0, 0, 0, 0.8);
        }

        .cg-player-hp {
          font-size: 18px;
          margin-top: 5px;
        }

        .cg-skill-button {
          margin-top: 8px;
          padding: 6px 12px;
          background: linear-gradient(135deg, #4c1d95 0%, #7c3aed 100%);
          border: none;
          border-radius: 4px;
          color: white;
          font-size: 12px;
          cursor: pointer;
        }

        .cg-player-hand {
          display: flex;
          justify-content: center;
          position: relative;
          height: 100px;
        }

        /* 操作栏 */
        .cg-action-bar {
          grid-area: action;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 15px;
          padding: 15px;
          background: rgba(0, 0, 0, 0.3);
          border-top: 1px solid rgba(212, 175, 55, 0.2);
        }

        .cg-action-button {
          padding: 12px 30px;
          font-size: 16px;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 8px;
          transition: all 0.2s;
        }

        .cg-button-play {
          background: linear-gradient(135deg, #15803d 0%, #22c55e 100%);
          color: white;
        }

        .cg-button-challenge {
          background: linear-gradient(135deg, #dc2626 0%, #ef4444 100%);
          color: white;
        }

        .cg-button-pass {
          background: rgba(255, 255, 255, 0.1);
          color: #f5f5f5;
          border: 1px solid rgba(255, 255, 255, 0.2);
        }

        .cg-waiting-text {
          color: rgba(255, 255, 255, 0.5);
          font-size: 16px;
        }

        /* 卡片样式 */
        .cg-card {
          width: 60px;
          height: 84px;
          border-radius: 8px;
          background: white;
          border: 2px solid #d4af37;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.2s;
        }

        .cg-card.selected {
          transform: translateY(-20px);
          box-shadow: 0 0 20px rgba(212, 175, 55, 0.5);
        }

        .cg-card.disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        .cg-card-inner {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-between;
          height: 100%;
          padding: 4px;
        }

        /* 弹窗 */
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
          z-index: 1000;
        }

        .cg-modal {
          background: linear-gradient(180deg, #1a1a24 0%, #0a0a0f 100%);
          padding: 30px;
          border-radius: 12px;
          border: 1px solid rgba(212, 175, 55, 0.3);
          text-align: center;
        }

        .cg-modal h3 {
          color: #d4af37;
          margin-bottom: 20px;
        }

        .cg-rank-grid {
          display: flex;
          gap: 15px;
          margin-bottom: 20px;
        }

        .cg-rank-button {
          width: 60px;
          height: 60px;
          font-size: 24px;
          border: 2px solid rgba(212, 175, 55, 0.5);
          background: rgba(0, 0, 0, 0.5);
          color: #f5f5f5;
          border-radius: 8px;
          cursor: pointer;
        }

        .cg-rank-button.current {
          border-color: #d4af37;
          background: rgba(212, 175, 55, 0.2);
        }
      `}</style>
    </div>
  );
};
