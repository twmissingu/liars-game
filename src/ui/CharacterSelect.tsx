/**
 * Code Geass: Liar's Game - 角色选择界面
 * 展示4个Q版角色
 */

import React, { useState } from 'react';
import { characters } from '../data/characters';
import { CharacterRenderer } from '../components/characters';
import type { CharacterSelectProps, CharacterId } from '../types';

export const CharacterSelect: React.FC<CharacterSelectProps> = ({
  selectedId,
  onSelect,
  onConfirm,
  onBack,
}) => {
  const [hoveredId, setHoveredId] = useState<CharacterId | null>(null);

  const selectedCharacter = characters.find(c => c.id === selectedId);

  return (
    <div className="cg-character-select">
      {/* 背景 */}
      <div className="cg-select-bg">
        <div className="cg-select-bg-gradient" />
        <div className="cg-select-bg-pattern" />
      </div>

      {/* 内容 */}
      <div className="cg-select-content">
        {/* 标题 */}
        <header className="cg-select-header">
          <button className="cg-back-button" onClick={onBack}>
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z" />
            </svg>
            <span>返回</span>
          </button>
          
          <h2 className="cg-select-title">
            <span className="cg-title-gold">选择角色</span>
          </h2>
          
          <div className="cg-select-placeholder" />
        </header>

        {/* 角色网格 */}
        <div className="cg-character-grid">
          {characters.map((character) => {
            const isSelected = selectedId === character.id;
            const isHovered = hoveredId === character.id;

            return (
              <div
                key={character.id}
                className={`cg-character-card ${isSelected ? 'cg-selected' : ''} ${isHovered ? 'cg-hovered' : ''}`}
                onClick={() => onSelect(character.id)}
                onMouseEnter={() => setHoveredId(character.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                <div className="cg-card-frame">
                  <div className="cg-frame-corner cg-corner-tl" />
                  <div className="cg-frame-corner cg-corner-tr" />
                  <div className="cg-frame-corner cg-corner-bl" />
                  <div className="cg-frame-corner cg-corner-br" />
                </div>

                <div className="cg-character-preview">
                  <CharacterRenderer
                    characterId={character.id}
                    size={150}
                    animationState={isSelected ? 'breathing' : 'idle'}
                  />
                </div>

                <div className="cg-character-info">
                  <h3 className="cg-character-name">{character.name}</h3>
                  <p className="cg-character-name-en">{character.nameEn}</p>
                </div>

                {isSelected && (
                  <div className="cg-selected-indicator">
                    <svg viewBox="0 0 24 24" fill="#d4af37">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                    </svg>
                  </div>
                )}

                <div 
                  className="cg-character-glow"
                  style={{ 
                    background: `radial-gradient(circle, ${character.color}40 0%, transparent 70%)`,
                  }}
                />
              </div>
            );
          })}
        </div>

        {/* 角色详情 */}
        {selectedCharacter && (
          <div className="cg-character-detail">
            <div className="cg-detail-frame">
              <div className="cg-detail-content">
                <p className="cg-detail-description">{selectedCharacter.description}</p>
                <div className="cg-detail-traits">
                  <span className="cg-trait-label">性格:</span>
                  <span className="cg-trait-value">
                    {selectedCharacter.personality === 'calculating' && '深谋远虑'}
                    {selectedCharacter.personality === 'mysterious' && '神秘莫测'}
                    {selectedCharacter.personality === 'passionate' && '热血正义'}
                    {selectedCharacter.personality === 'tsundere' && '傲娇坚强'}
                  </span>
                </div>
              </div>

              <button 
                className="cg-confirm-button cg-button-primary"
                onClick={onConfirm}
              >
                <span>确认选择</span>
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
                </svg>
              </button>
            </div>
          </div>
        )}
      </div>

      <style>{`
        .cg-character-select {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }

        .cg-select-bg {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 0;
        }

        .cg-select-bg-gradient {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            180deg,
            #0a0a0f 0%,
            #0f0f1a 50%,
            #1a1a24 100%
          );
        }

        .cg-select-bg-pattern {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image: 
            radial-gradient(circle at 30% 20%, rgba(220, 38, 38, 0.03) 0%, transparent 40%),
            radial-gradient(circle at 70% 80%, rgba(212, 175, 55, 0.02) 0%, transparent 40%);
        }

        .cg-select-content {
          position: relative;
          z-index: 1;
          display: flex;
          flex-direction: column;
          width: 100%;
          max-width: 900px;
          height: 100%;
          max-height: 100vh;
          padding: 2rem;
          box-sizing: border-box;
          overflow-y: auto;
        }

        .cg-select-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 2rem;
        }

        .cg-back-button {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.5rem 1rem;
          font-family: 'Noto Sans SC', sans-serif;
          font-size: 0.875rem;
          color: #a1a1aa;
          background: transparent;
          border: 1px solid #3f3f46;
          border-radius: 0.375rem;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .cg-back-button:hover {
          color: #f5f5f5;
          border-color: #d4af37;
        }

        .cg-back-button svg {
          width: 20px;
          height: 20px;
        }

        .cg-select-title {
          margin: 0;
          font-family: 'Noto Serif SC', serif;
          font-size: 1.5rem;
          font-weight: 600;
        }

        .cg-title-gold {
          background: linear-gradient(135deg, #d4af37, #f4d03f, #d4af37);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .cg-select-placeholder {
          width: 80px;
        }

        .cg-character-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.5rem;
          margin-bottom: 2rem;
        }

        @media (max-width: 768px) {
          .cg-character-select {
            overflow-y: auto;
            -webkit-overflow-scrolling: touch;
          }
          
          .cg-select-content {
            height: auto;
            min-height: 100vh;
            padding: 1rem;
          }
          
          .cg-character-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 1rem;
          }
          
          .cg-character-card {
            padding: 1rem 0.5rem;
          }
          
          .cg-character-preview {
            transform: scale(0.8);
          }
          
          .cg-character-detail {
            position: fixed;
            bottom: 0;
            left: 0;
            right: 0;
            background: linear-gradient(180deg, transparent 0%, #0a0a0f 20%);
            padding: 2rem 1rem 1rem;
            z-index: 10;
          }
          
          .cg-detail-frame {
            flex-direction: column;
            gap: 1rem;
            padding: 1rem;
          }
          
          .cg-detail-content {
            text-align: center;
          }
          
          .cg-confirm-button {
            width: 100%;
            justify-content: center;
            padding: 1rem;
            font-size: 1rem;
          }
        }

        .cg-character-card {
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 1.5rem 1rem;
          background: linear-gradient(135deg, #1a1a24 0%, #252532 100%);
          border: 1px solid #3f3f46;
          border-radius: 0.75rem;
          cursor: pointer;
          transition: all 0.3s ease;
          overflow: hidden;
        }

        .cg-character-card:hover,
        .cg-character-card.cg-hovered {
          border-color: #d4af37;
          transform: translateY(-5px);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        }

        .cg-character-card.cg-selected {
          border-color: #d4af37;
          box-shadow: 
            0 0 20px rgba(212, 175, 55, 0.3),
            inset 0 0 30px rgba(212, 175, 55, 0.1);
        }

        .cg-card-frame {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          pointer-events: none;
        }

        .cg-frame-corner {
          position: absolute;
          width: 20px;
          height: 20px;
          border: 2px solid transparent;
          transition: all 0.3s ease;
        }

        .cg-character-card:hover .cg-frame-corner,
        .cg-character-card.cg-selected .cg-frame-corner {
          border-color: #d4af37;
        }

        .cg-corner-tl {
          top: -2px;
          left: -2px;
          border-right: none;
          border-bottom: none;
        }

        .cg-corner-tr {
          top: -2px;
          right: -2px;
          border-left: none;
          border-bottom: none;
        }

        .cg-corner-bl {
          bottom: -2px;
          left: -2px;
          border-right: none;
          border-top: none;
        }

        .cg-corner-br {
          bottom: -2px;
          right: -2px;
          border-left: none;
          border-top: none;
        }

        .cg-character-preview {
          position: relative;
          z-index: 1;
          margin-bottom: 1rem;
        }

        .cg-character-info {
          text-align: center;
          z-index: 1;
        }

        .cg-character-name {
          margin: 0 0 0.25rem;
          font-family: 'Noto Sans SC', sans-serif;
          font-size: 1.125rem;
          font-weight: 600;
          color: #f5f5f5;
        }

        .cg-character-name-en {
          margin: 0;
          font-family: 'Cinzel', serif;
          font-size: 0.75rem;
          color: #71717a;
          letter-spacing: 0.1em;
        }

        .cg-selected-indicator {
          position: absolute;
          top: 0.5rem;
          right: 0.5rem;
          width: 24px;
          height: 24px;
          z-index: 2;
        }

        .cg-character-glow {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 150px;
          height: 150px;
          border-radius: 50%;
          opacity: 0;
          transition: opacity 0.3s ease;
          pointer-events: none;
        }

        .cg-character-card:hover .cg-character-glow,
        .cg-character-card.cg-selected .cg-character-glow {
          opacity: 0.5;
        }

        .cg-character-detail {
          margin-top: 1rem;
          padding-top: 1rem;
          flex-shrink: 0;
        }

        .cg-detail-frame {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 2rem;
          padding: 1.5rem;
          background: linear-gradient(135deg, rgba(26, 26, 36, 0.9) 0%, rgba(37, 37, 50, 0.9) 100%);
          backdrop-filter: blur(10px);
          border: 1px solid #3f3f46;
          border-radius: 0.75rem;
        }

        .cg-detail-content {
          flex: 1;
        }

        .cg-detail-description {
          margin: 0 0 0.75rem;
          font-family: 'Noto Sans SC', sans-serif;
          font-size: 0.875rem;
          color: #a1a1aa;
          line-height: 1.6;
        }

        .cg-detail-traits {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .cg-trait-label {
          font-size: 0.75rem;
          color: #71717a;
        }

        .cg-trait-value {
          font-size: 0.75rem;
          color: #d4af37;
          font-weight: 500;
        }

        .cg-confirm-button {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.75rem 1.5rem;
          font-family: 'Noto Sans SC', sans-serif;
          font-size: 0.875rem;
          font-weight: 600;
          color: #0a0a0f;
          background: linear-gradient(135deg, #b8941f 0%, #d4af37 100%);
          border: none;
          border-radius: 0.5rem;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .cg-confirm-button:hover {
          box-shadow: 0 0 20px rgba(212, 175, 55, 0.4);
          transform: scale(1.02);
        }

        .cg-confirm-button svg {
          width: 20px;
          height: 20px;
        }
      `}</style>
    </div>
  );
};

export default CharacterSelect;
