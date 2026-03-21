/**
 * Code Geass: Liar's Game - 结算界面
 * 胜利/失败动画 + 分数展示
 */

import React, { useEffect, useState } from 'react';
import { ChibiAvatar } from '../components/characters';
import { playBGM } from '../audio';
import type { ResultScreenProps, CharacterId } from '../types';

export const ResultScreen: React.FC<ResultScreenProps> = ({
  isWin,
  turnNumber,
  onRestart,
  onMainMenu,
  playerCharacter,
}) => {
  const [showConfetti, setShowConfetti] = useState(false);
  const [animationComplete, setAnimationComplete] = useState(false);

  useEffect(() => {
    // 确保播放正确的BGM
    if (isWin) {
      playBGM('victory');
      setShowConfetti(true);
    } else {
      playBGM('defeat');
    }
    const timer = setTimeout(() => setAnimationComplete(true), 1000);
    return () => clearTimeout(timer);
  }, [isWin]);

  // 使用玩家实际选择的角色，如果没有传入则根据胜负选择默认角色
  const resultCharacter: CharacterId = playerCharacter || (isWin ? 'lelouch' : 'cc');

  return (
    <div className={`cg-result-screen ${isWin ? 'cg-result-win' : 'cg-result-lose'}`}>
      {/* 背景 */}
      <div className="cg-result-bg">
        <div className="cg-result-bg-gradient" />

        {isWin ? (
          <div className="cg-result-bg-win">
            <div className="cg-victory-rays" />
          </div>
        ) : (
          <div className="cg-result-bg-lose">
            <div className="cg-defeat-shadow" />
          </div>
        )}
      </div>

      {/* 彩花效果（胜利时） */}
      {showConfetti && <ConfettiEffect />}

      {/* 内容 */}
      <div className={`cg-result-content ${animationComplete ? 'cg-animate-in' : ''}`}>
        {/* 结果标题 */}
        <div className="cg-result-header">
          <div className="cg-result-badge">
            {isWin ? (
              <svg viewBox="0 0 100 100" className="cg-badge-icon cg-badge-win">
                <circle cx="50" cy="50" r="45" fill="none" stroke="#d4af37" strokeWidth="2" />
                <path
                  d="M30 50 L45 65 L70 35"
                  fill="none"
                  stroke="#d4af37"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <animate
                    attributeName="stroke-dasharray"
                    from="0 100"
                    to="100 0"
                    dur="1s"
                    fill="freeze"
                  />
                </path>
                {/* 星星装饰 */}
                {[...Array(5)].map((_, i) => (
                  <circle
                    key={i}
                    cx={50 + 35 * Math.cos(((i * 72 - 90) * Math.PI) / 180)}
                    cy={50 + 35 * Math.sin(((i * 72 - 90) * Math.PI) / 180)}
                    r="3"
                    fill="#d4af37"
                  >
                    <animate
                      attributeName="opacity"
                      values="0;1;0.5;1"
                      dur="2s"
                      begin={`${i * 0.2}s`}
                      repeatCount="indefinite"
                    />
                  </circle>
                ))}
              </svg>
            ) : (
              <svg viewBox="0 0 100 100" className="cg-badge-icon cg-badge-lose">
                <circle cx="50" cy="50" r="45" fill="none" stroke="#dc2626" strokeWidth="2" />
                <path
                  d="M35 35 L65 65 M65 35 L35 65"
                  fill="none"
                  stroke="#dc2626"
                  strokeWidth="4"
                  strokeLinecap="round"
                >
                  <animate
                    attributeName="stroke-dasharray"
                    from="0 100"
                    to="100 0"
                    dur="0.5s"
                    fill="freeze"
                  />
                </path>
              </svg>
            )}
          </div>

          <h1 className={`cg-result-title ${isWin ? 'cg-title-win' : 'cg-title-lose'}`}>
            {isWin ? '胜利' : '失败'}
          </h1>

          <p className="cg-result-subtitle">
            {isWin ? 'All Hail Britannia!' : '命运的车轮仍在转动...'}
          </p>
        </div>

        {/* 角色展示 */}
        <div className="cg-result-character">
          <div className="cg-character-showcase">
            <ChibiAvatar characterId={resultCharacter} size={200} priority />

            {/* 角色光环效果 */}
            <div className={`cg-character-aura ${isWin ? 'cg-aura-win' : 'cg-aura-lose'}`} />
          </div>
        </div>

        {/* 分数展示 - 简洁版本 */}
        <div className="cg-result-score">
          <div className="cg-score-simple">
            <span className="cg-score-label">回合数</span>
            <span className="cg-score-value">{turnNumber}</span>
          </div>
        </div>

        {/* 操作按钮 */}
        <div className="cg-result-actions">
          <button className="cg-result-button cg-button-restart" onClick={onRestart}>
            <span className="cg-button-icon">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z" />
              </svg>
            </span>
            <span>再来一局</span>
          </button>

          <button className="cg-result-button cg-button-menu" onClick={onMainMenu}>
            <span className="cg-button-icon">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
              </svg>
            </span>
            <span>返回主菜单</span>
          </button>
        </div>
      </div>

      <style>{`
        .cg-result-screen {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          touch-action: manipulation;
          -webkit-user-select: none;
          user-select: none;
        }

        .cg-result-win {
          --result-color: #d4af37;
          --result-glow: rgba(212, 175, 55, 0.5);
        }

        .cg-result-lose {
          --result-color: #dc2626;
          --result-glow: rgba(220, 38, 38, 0.5);
        }

        .cg-result-bg {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 0;
        }

        .cg-result-bg-gradient {
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

        .cg-result-bg-win .cg-victory-rays {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 200%;
          height: 200%;
          background: conic-gradient(
            from 0deg,
            transparent 0deg,
            rgba(212, 175, 55, 0.05) 10deg,
            transparent 20deg,
            transparent 40deg,
            rgba(212, 175, 55, 0.05) 50deg,
            transparent 60deg,
            transparent 80deg,
            rgba(212, 175, 55, 0.05) 90deg,
            transparent 100deg,
            transparent 120deg,
            rgba(212, 175, 55, 0.05) 130deg,
            transparent 140deg,
            transparent 160deg,
            rgba(212, 175, 55, 0.05) 170deg,
            transparent 180deg,
            transparent 200deg,
            rgba(212, 175, 55, 0.05) 210deg,
            transparent 220deg,
            transparent 240deg,
            rgba(212, 175, 55, 0.05) 250deg,
            transparent 260deg,
            transparent 280deg,
            rgba(212, 175, 55, 0.05) 290deg,
            transparent 300deg,
            transparent 320deg,
            rgba(212, 175, 55, 0.05) 330deg,
            transparent 340deg,
            transparent 360deg
          );
          animation: rotateRays 20s linear infinite;
        }

        @keyframes rotateRays {
          from { transform: translate(-50%, -50%) rotate(0deg); }
          to { transform: translate(-50%, -50%) rotate(360deg); }
        }

        .cg-result-bg-lose .cg-defeat-shadow {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: radial-gradient(
            ellipse at center,
            transparent 0%,
            rgba(220, 38, 38, 0.1) 50%,
            rgba(10, 10, 15, 0.8) 100%
          );
        }

        .cg-result-content {
          position: relative;
          z-index: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
          padding: 1.5rem;
          opacity: 0;
          transform: scale(0.9);
          transition: all 0.5s ease;
          max-height: 100vh;
          overflow-y: auto;
        }

        .cg-result-content.cg-animate-in {
          opacity: 1;
          transform: scale(1);
        }

        .cg-result-header {
          text-align: center;
        }

        .cg-result-badge {
          width: 80px;
          height: 80px;
          margin: 0 auto 0.5rem;
        }

        .cg-badge-icon {
          width: 100%;
          height: 100%;
        }

        .cg-result-title {
          font-family: 'Cinzel Decorative', serif;
          font-size: 2.5rem;
          font-weight: 700;
          margin: 0 0 0.25rem;
          letter-spacing: 0.15em;
        }

        .cg-title-win {
          background: linear-gradient(135deg, #d4af37, #f4d03f, #d4af37);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          text-shadow: 0 0 30px rgba(212, 175, 55, 0.5);
        }

        .cg-title-lose {
          color: #dc2626;
          text-shadow: 0 0 30px rgba(220, 38, 38, 0.5);
        }

        .cg-result-subtitle {
          font-family: 'Noto Serif SC', serif;
          font-size: 1rem;
          color: #a1a1aa;
          letter-spacing: 0.1em;
          margin: 0;
        }

        .cg-result-character {
          position: relative;
        }

        .cg-character-showcase {
          position: relative;
          padding: 0.5rem;
        }

        .cg-character-aura {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 180px;
          height: 180px;
          border-radius: 50%;
          pointer-events: none;
        }

        .cg-aura-win {
          background: radial-gradient(circle, rgba(212, 175, 55, 0.3) 0%, transparent 70%);
          animation: pulseAura 2s ease-in-out infinite;
        }

        .cg-aura-lose {
          background: radial-gradient(circle, rgba(220, 38, 38, 0.2) 0%, transparent 70%);
        }

        @keyframes pulseAura {
          0%, 100% { transform: translate(-50%, -50%) scale(1); opacity: 0.5; }
          50% { transform: translate(-50%, -50%) scale(1.1); opacity: 0.8; }
        }

        .cg-result-score {
          width: 100%;
          max-width: 300px;
        }

        .cg-score-simple {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
          padding: 1rem 2rem;
          background: linear-gradient(135deg, rgba(26, 26, 36, 0.8) 0%, rgba(37, 37, 50, 0.8) 100%);
          backdrop-filter: blur(10px);
          border: 1px solid var(--result-color);
          border-radius: 0.75rem;
          box-shadow: 0 0 20px var(--result-glow);
        }

        .cg-score-simple .cg-score-label {
          font-family: 'Noto Sans SC', sans-serif;
          font-size: 0.875rem;
          color: #a1a1aa;
          letter-spacing: 0.1em;
        }

        .cg-score-simple .cg-score-value {
          font-family: 'Cinzel', serif;
          font-size: 2rem;
          font-weight: 700;
          color: var(--result-color);
        }

        .cg-result-actions {
          display: flex;
          gap: 1rem;
        }

        .cg-result-button {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.875rem 1.5rem;
          font-family: 'Noto Sans SC', sans-serif;
          font-size: 0.875rem;
          font-weight: 600;
          border: none;
          border-radius: 0.5rem;
          cursor: pointer;
          transition: all 0.3s ease;
          touch-action: manipulation;
          -webkit-tap-highlight-color: transparent;
          min-height: 44px;
        }

        .cg-result-button:active {
          transform: scale(0.98);
          opacity: 0.9;
        }

        .cg-button-restart {
          background: linear-gradient(135deg, #b8941f 0%, #d4af37 100%);
          color: #0a0a0f;
        }

        .cg-button-restart:hover {
          box-shadow: 0 0 20px rgba(212, 175, 55, 0.4);
          transform: scale(1.02);
        }

        .cg-button-menu {
          background: linear-gradient(135deg, #3f3f46 0%, #52525b 100%);
          color: #f5f5f5;
        }

        .cg-button-menu:hover {
          background: linear-gradient(135deg, #52525b 0%, #71717a 100%);
        }

        .cg-button-icon svg {
          width: 20px;
          height: 20px;
        }

        /* 彩花效果 */
        .cg-confetti {
          position: absolute;
          width: 10px;
          height: 10px;
          animation: confetti-fall 3s ease-out forwards;
        }

        @keyframes confetti-fall {
          0% {
            transform: translateY(-100vh) rotate(0deg);
            opacity: 1;
          }
          100% {
            transform: translateY(100vh) rotate(720deg);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};

// 彩花效果组件
const ConfettiEffect: React.FC = () => {
  const colors = ['#d4af37', '#f4d03f', '#dc2626', '#f5f5f5', '#71717a'];

  return (
    <div className="cg-confetti-container">
      {[...Array(50)].map((_, i) => (
        <div
          key={i}
          className="cg-confetti"
          style={{
            left: `${Math.random() * 100}%`,
            backgroundColor: colors[Math.floor(Math.random() * colors.length)],
            animationDelay: `${Math.random() * 2}s`,
            animationDuration: `${2 + Math.random() * 2}s`,
          }}
        />
      ))}
    </div>
  );
};

export default ResultScreen;
