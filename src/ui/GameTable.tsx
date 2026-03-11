/**
 * Code Geass: Liar's Game - 游戏主界面（圆桌布局）
 * 统一角色格式 + 显示AI手牌数 + 优化布局
 */

import React, { useState } from 'react';
import { ChibiAvatar } from '../components/characters';
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
  return char?.color || '#d4af37';
};

// 所有角色配置（包括玩家）
const ALL_CHARACTERS = [
  { id: 'cc', name: 'C.C.', color: '#22c55e' },
  { id: 'suzaku', name: '朱雀', color: '#3b82f6' },
  { id: 'kallen', name: '卡莲', color: '#dc2626' },
  { id: 'lelouch', name: '鲁鲁修', color: '#d4af37' },
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

  const { phase, liarCard, playerStats, aiPlayers, turnState } = gameState;
  const isPlayerTurn = phase === 'player_turn';
  const isChallengePhase = phase === 'challenge';
  const currentPlayerId = turnState?.lastPlayerId;
  const isPlayerLastPlayed = currentPlayerId === 'player';
  const playerHand = gameState.playerHand || [];
  const currentRound = turnState?.turnNumber || 1;

  const lastAI = currentPlayerId && currentPlayerId !== 'player' 
    ? aiPlayers?.find((ai: any) => ai.id === currentPlayerId)
    : null;

  const handlePlayClick = () => {
    if (selectedCards.length > 0) onConfirmPlay();
  };

  const handleLelouchSkillClick = () => setShowLelouchSkill(true);
  const handleLelouchRankSelect = (rank: CardRank) => {
    setShowLelouchSkill(false);
    onLelouchSkill?.(rank);
  };

  const getSuitSymbol = (suit: string) => ({ spades: '♠', hearts: '♥', clubs: '♣', diamonds: '♦', joker: '🃏' }[suit] || suit);
  const getSuitColor = (suit: string) => suit === 'joker' ? '#d4af37' : (suit === 'hearts' || suit === 'diamonds' ? '#dc2626' : '#1a1a24');

  const playerName = getCharacterName(selectedCharacter);
  const playerColor = getCharacterColor(selectedCharacter);

  // 渲染角色（统一格式）
  const renderCharacter = (name: string, characterId: CharacterId | null, hp: number, cardCount: number, color: string, isTop: boolean = false) => (
    <div className={`cg-character ${isTop ? 'cg-character-top' : ''}`}>
      <div className="cg-character-avatar">
        {characterId && <ChibiAvatar characterId={characterId} size={80} />}
      </div>
      <div className="cg-character-info">
        <div className="cg-character-name" style={{ color }}>{name}</div>
        <div className="cg-character-stats">
          <span>{Array(hp).fill('❤️').join('')}</span>
          <span className="cg-card-count">🃏{cardCount}</span>
        </div>
      </div>
    </div>
  );

  return (
    <div className="cg-game-table">
      {/* 顶部栏 */}
      <div className="cg-top-bar">
        <button className="cg-back-button" onClick={onBackToMenu}>← 主页面</button>
        <div className="cg-round-info">回合 {currentRound}</div>
        <div className="cg-liar-card">骗子牌 <span>{liarCard}</span></div>
        <div className="cg-placeholder"></div>
      </div>

      <div className="cg-main">
        {/* 日志 */}
        <div className="cg-log">
          <div className="cg-log-title">📜 游戏记录</div>
          <div className="cg-log-content">
            {gameLog.map((log, i) => (
              <div key={i} className={`cg-log-item ${log.includes('质疑') ? 'challenge' : ''} ${log.includes('Geass') ? 'geass' : ''}`}>{log}</div>
            ))}
          </div>
        </div>

        {/* 游戏区 */}
        <div className="cg-play-area">
          {/* C.C. */}
          {renderCharacter('C.C.', 'cc', aiPlayers?.[0]?.stats?.hp || 3, aiPlayers?.[0]?.hand?.length || 0, '#22c55e', true)}

          {/* 中间行 */}
          <div className="cg-middle-row">
            {/* 朱雀 */}
            {renderCharacter('朱雀', 'suzaku', aiPlayers?.[1]?.stats?.hp || 3, aiPlayers?.[1]?.hand?.length || 0, '#3b82f6')}

            {/* 圆桌 */}
            <div className="cg-table">
              <div className="cg-table-inner">
                {turnState?.playedCards ? (
                  <div className="cg-played">
                    <div className="cg-cards">
                      {/* 出牌时显示背面，质疑后才显示实际牌 */}
                      {turnState.playedCards.actualCards.map((c: Card, i: number) => (
                        <div key={c.id} className="cg-card-small cg-card-back">
                          <img src="/assets/cards/card-back.webp" alt="牌背" />
                        </div>
                      ))}
                    </div>
                    <div className="cg-card-count-display">{turnState.playedCards.cardIds.length} 张牌</div>
                  </div>
                ) : (
                  <div className="cg-placeholder-text">等待出牌...</div>
                )}
              </div>
            </div>

            {/* 卡莲 */}
            {renderCharacter('卡莲', 'kallen', aiPlayers?.[2]?.stats?.hp || 3, aiPlayers?.[2]?.hand?.length || 0, '#dc2626')}
          </div>

          {/* 玩家 */}
          <div className="cg-player-position">
            {renderCharacter(playerName, selectedCharacter, playerStats.hp, playerHand.length, playerColor)}
            {selectedCharacter === 'lelouch' && isPlayerTurn && (
              <button className="cg-skill-btn" onClick={handleLelouchSkillClick} disabled={isProcessing}>绝对命令</button>
            )}
          </div>
        </div>
      </div>

      {/* 手牌 */}
      <div className="cg-hand-area">
        <div className="cg-hand">
          {playerHand.map((card: Card, i: number) => {
            const isSelected = selectedCards.includes(card.id);
            return (
              <button
                key={card.id}
                className={`cg-card ${isSelected ? 'selected' : ''} ${!isPlayerTurn || isProcessing ? 'disabled' : ''}`}
                onClick={() => onToggleCardSelection(card.id)}
                style={{ transform: `translateX(${(i - playerHand.length / 2) * 45}px) ${isSelected ? 'translateY(-20px)' : ''}` }}
                disabled={!isPlayerTurn || isProcessing}
              >
                <div className="cg-card-face">
                  <div style={{ color: getSuitColor(card.suit) }}>{card.rank}</div>
                  <div style={{ color: getSuitColor(card.suit), fontSize: '20px' }}>{getSuitSymbol(card.suit)}</div>
                </div>
                {isSelected && <div className="cg-check">✓</div>}
              </button>
            );
          })}
        </div>
      </div>

      {/* 操作栏 */}
      <div className="cg-actions">
        {isPlayerTurn && selectedCards.length > 0 && (
          <button className="cg-btn cg-btn-play" onClick={handlePlayClick} disabled={isProcessing}>出牌 ({selectedCards.length})</button>
        )}
        {isPlayerTurn && selectedCards.length === 0 && (
          <button className="cg-btn cg-btn-skip" onClick={onPass} disabled={isProcessing}>跳过</button>
        )}
        {isChallengePhase && !isPlayerLastPlayed && lastAI?.isActive && (
          <>
            <button className="cg-btn cg-btn-challenge" onClick={onChallenge} disabled={isProcessing}>⚔️ 质疑</button>
            <button className="cg-btn cg-btn-skip" onClick={onPass} disabled={isProcessing}>不质疑</button>
          </>
        )}
        {isChallengePhase && isPlayerLastPlayed && <span className="cg-wait">等待AI...</span>}
        {!isPlayerTurn && !isChallengePhase && <span className="cg-wait">AI回合...</span>}
      </div>

      {/* 技能弹窗 */}
      {showLelouchSkill && (
        <div className="cg-modal">
          <div className="cg-modal-content">
            <h3>选择新的骗子牌</h3>
            <div className="cg-rank-btns">
              {['Q', 'K', 'A'].map(r => (
                <button key={r} className={r === liarCard ? 'current' : ''} onClick={() => handleLelouchRankSelect(r as CardRank)}>{r}</button>
              ))}
            </div>
            <button className="cg-btn-skip" onClick={() => setShowLelouchSkill(false)}>取消</button>
          </div>
        </div>
      )}

      <style>{`
        .cg-game-table { position: fixed; inset: 0; display: flex; flex-direction: column; background: linear-gradient(180deg, #0a0a0f, #1a1a24); font-family: 'Noto Sans SC', sans-serif; }
        .cg-top-bar { display: flex; align-items: center; justify-content: space-between; padding: 10px 20px; background: rgba(0,0,0,0.3); border-bottom: 1px solid rgba(212,175,55,0.2); }
        .cg-back-button { padding: 6px 12px; background: transparent; border: 1px solid #d4af37; color: #d4af37; border-radius: 4px; cursor: pointer; }
        .cg-round-info { font-size: 18px; color: #d4af37; font-weight: bold; }
        .cg-liar-card { font-size: 16px; color: #fff; }
        .cg-liar-card span { color: #dc2626; font-weight: bold; font-size: 20px; }
        .cg-placeholder { width: 80px; }
        
        .cg-main { flex: 1; display: flex; overflow: hidden; }
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
        .cg-card { width: 60px; height: 84px; border-radius: 6px; background: white; border: 2px solid #d4af37; display: flex; align-items: center; justify-content: center; cursor: pointer; transition: all 0.2s; position: relative; }
        .cg-card.selected { transform: translateY(-20px); box-shadow: 0 0 15px rgba(212,175,55,0.5); }
        .cg-card.disabled { opacity: 0.5; cursor: not-allowed; }
        .cg-card-face { display: flex; flex-direction: column; align-items: center; gap: 5px; }
        .cg-check { position: absolute; top: -5px; right: -5px; width: 20px; height: 20px; background: #22c55e; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; font-size: 12px; }
        
        .cg-actions { display: flex; align-items: center; justify-content: center; gap: 15px; padding: 15px; background: rgba(0,0,0,0.3); border-top: 1px solid rgba(212,175,55,0.2); }
        .cg-btn { padding: 10px 25px; font-size: 15px; border: none; border-radius: 6px; cursor: pointer; }
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
