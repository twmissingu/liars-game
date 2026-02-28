/**
 * Code Geass: Liar's Game - Geass特效系统
 * 红色符文动画、全屏特效、角色控制动画
 */

import React, { useEffect, useState } from 'react';

// ============================================
// Geass符号SVG组件
// ============================================

interface GeassSymbolProps {
  size?: number;
  className?: string;
  animate?: boolean;
}

export const GeassSymbol: React.FC<GeassSymbolProps> = ({
  size = 100,
  className = '',
  animate = true,
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      className={`cg-geass-symbol ${className}`}
    >
      <defs>
        <radialGradient id="geassRed" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#ef4444" />
          <stop offset="50%" stopColor="#dc2626" />
          <stop offset="100%" stopColor="#991b1b" />
        </radialGradient>
        <filter id="geassGlow">
          <feGaussianBlur stdDeviation="3" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      
      {/* 外圈 */}
      <circle
        cx="50"
        cy="50"
        r="45"
        fill="none"
        stroke="url(#geassRed)"
        strokeWidth="2"
        filter="url(#geassGlow)"
        opacity="0.8"
      />
      
      {/* Geass星形 */}
      <path
        d="M50 10 L57 40 L90 50 L57 60 L50 90 L43 60 L10 50 L43 40 Z"
        fill="none"
        stroke="#dc2626"
        strokeWidth="3"
        filter="url(#geassGlow)"
      >
        {animate && (
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="0 50 50"
            to="360 50 50"
            dur="8s"
            repeatCount="indefinite"
          />
        )}
      </path>
      
      {/* 内圈 */}
      <circle
        cx="50"
        cy="50"
        r="15"
        fill="#dc2626"
        filter="url(#geassGlow)"
      >
        {animate && (
          <animate
            attributeName="r"
            values="15;18;15"
            dur="2s"
            repeatCount="indefinite"
          />
        )}
      </circle>
      
      {/* 中心点 */}
      <circle cx="50" cy="50" r="5" fill="#f5f5f5" />
      
      {/* 装饰符文 */}
      {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
        <line
          key={i}
          x1="50"
          y1="50"
          x2={50 + 35 * Math.cos((angle * Math.PI) / 180)}
          y2={50 + 35 * Math.sin((angle * Math.PI) / 180)}
          stroke="#dc2626"
          strokeWidth="1"
          opacity="0.5"
        >
          {animate && (
            <animate
              attributeName="opacity"
              values="0.5;1;0.5"
              dur="1.5s"
              begin={`${i * 0.1}s`}
              repeatCount="indefinite"
            />
          )}
        </line>
      ))}
    </svg>
  );
};

// ============================================
// Geass全屏特效组件
// ============================================

interface GeassFullscreenEffectProps {
  isActive: boolean;
  onComplete?: () => void;
  target?: 'player' | 'opponent';
}

export const GeassFullscreenEffect: React.FC<GeassFullscreenEffectProps> = ({
  isActive,
  onComplete,
  target = 'opponent',
}) => {
  const [phase, setPhase] = useState<'idle' | 'charging' | 'release' | 'fade'>('idle');

  useEffect(() => {
    if (isActive && phase === 'idle') {
      setPhase('charging');
      
      // 充能阶段
      const chargeTimer = setTimeout(() => {
        setPhase('release');
      }, 1500);
      
      // 释放阶段
      const releaseTimer = setTimeout(() => {
        setPhase('fade');
      }, 2500);
      
      // 结束
      const endTimer = setTimeout(() => {
        setPhase('idle');
        onComplete?.();
      }, 3500);
      
      return () => {
        clearTimeout(chargeTimer);
        clearTimeout(releaseTimer);
        clearTimeout(endTimer);
      };
    }
  }, [isActive, phase, onComplete]);

  if (!isActive || phase === 'idle') return null;

  return (
    <div className={`cg-geass-fullscreen cg-phase-${phase}`}>
      {/* 背景暗化 */}
      <div className="cg-geass-overlay" />
      
      {/* 红色光晕 */}
      <div className="cg-geass-aura" />
      
      {/* 中央Geass符号 */}
      <div className="cg-geass-center">
        <GeassSymbol size={200} animate={phase === 'charging'} />
      </div>
      
      {/* 旋转符文环 */}
      <div className="cg-geass-rings">
        <div className="cg-ring cg-ring-1" />
        <div className="cg-ring cg-ring-2" />
        <div className="cg-ring cg-ring-3" />
      </div>
      
      {/* 能量光束 */}
      {phase === 'release' && (
        <div className="cg-geass-beams">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="cg-beam"
              style={{
                transform: `rotate(${i * 45}deg)`,
                animationDelay: `${i * 0.1}s`,
              }}
            />
          ))}
        </div>
      )}
      
      {/* 目标标记 */}
      {phase === 'release' && (
        <div className={`cg-geass-target cg-target-${target}`}>
          <div className="cg-target-ring" />
          <div className="cg-target-crosshair" />
        </div>
      )}
      
      {/* 文字效果 */}
      <div className="cg-geass-text">
        <span className="cg-geass-command">以鲁鲁修·vi·布里塔尼亚之名</span>
        <span className="cg-geass-command-sub">命令你...</span>
      </div>

      <style>{`
        .cg-geass-fullscreen {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          z-index: 1000;
          pointer-events: none;
          overflow: hidden;
        }

        .cg-geass-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: radial-gradient(circle at center, transparent 0%, rgba(10, 10, 15, 0.9) 100%);
          animation: geassOverlay 0.5s ease forwards;
        }

        @keyframes geassOverlay {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        .cg-geass-aura {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 150vmax;
          height: 150vmax;
          background: radial-gradient(circle, rgba(220, 38, 38, 0.3) 0%, transparent 50%);
          animation: geassAuraPulse 2s ease-in-out infinite;
        }

        @keyframes geassAuraPulse {
          0%, 100% { transform: translate(-50%, -50%) scale(1); opacity: 0.5; }
          50% { transform: translate(-50%, -50%) scale(1.2); opacity: 0.8; }
        }

        .cg-geass-center {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          animation: geassCenterPulse 1s ease-in-out infinite;
        }

        @keyframes geassCenterPulse {
          0%, 100% { transform: translate(-50%, -50%) scale(1); }
          50% { transform: translate(-50%, -50%) scale(1.1); }
        }

        .cg-geass-rings {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }

        .cg-ring {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          border: 2px solid rgba(220, 38, 38, 0.5);
          border-radius: 50%;
          box-shadow: 0 0 20px rgba(220, 38, 38, 0.3);
        }

        .cg-ring-1 {
          width: 300px;
          height: 300px;
          animation: ringRotate 10s linear infinite, ringPulse 2s ease-in-out infinite;
        }

        .cg-ring-2 {
          width: 400px;
          height: 400px;
          animation: ringRotate 15s linear infinite reverse, ringPulse 2.5s ease-in-out infinite;
        }

        .cg-ring-3 {
          width: 500px;
          height: 500px;
          animation: ringRotate 20s linear infinite, ringPulse 3s ease-in-out infinite;
        }

        @keyframes ringRotate {
          from { transform: translate(-50%, -50%) rotate(0deg); }
          to { transform: translate(-50%, -50%) rotate(360deg); }
        }

        @keyframes ringPulse {
          0%, 100% { opacity: 0.3; border-width: 2px; }
          50% { opacity: 0.8; border-width: 3px; }
        }

        .cg-geass-beams {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }

        .cg-beam {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 4px;
          height: 100vh;
          background: linear-gradient(to bottom, rgba(220, 38, 38, 0) 0%, rgba(220, 38, 38, 0.8) 50%, rgba(220, 38, 38, 0) 100%);
          transform-origin: center;
          animation: beamShoot 0.5s ease-out forwards;
          opacity: 0;
        }

        @keyframes beamShoot {
          0% { opacity: 0; transform: rotate(var(--rotation, 0deg)) scaleY(0); }
          50% { opacity: 1; transform: rotate(var(--rotation, 0deg)) scaleY(1); }
          100% { opacity: 0; transform: rotate(var(--rotation, 0deg)) scaleY(1.5); }
        }

        .cg-geass-target {
          position: absolute;
          width: 150px;
          height: 150px;
          animation: targetLock 0.5s ease forwards;
        }

        .cg-target-opponent {
          top: 20%;
          right: 20%;
        }

        .cg-target-player {
          bottom: 20%;
          left: 20%;
        }

        @keyframes targetLock {
          0% { transform: scale(2); opacity: 0; }
          100% { transform: scale(1); opacity: 1; }
        }

        .cg-target-ring {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 100%;
          height: 100%;
          border: 3px solid #dc2626;
          border-radius: 50%;
          animation: targetPulse 0.5s ease-in-out infinite;
        }

        @keyframes targetPulse {
          0%, 100% { transform: translate(-50%, -50%) scale(1); opacity: 1; }
          50% { transform: translate(-50%, -50%) scale(1.1); opacity: 0.7; }
        }

        .cg-target-crosshair {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 100%;
          height: 100%;
        }

        .cg-target-crosshair::before,
        .cg-target-crosshair::after {
          content: '';
          position: absolute;
          background: #dc2626;
        }

        .cg-target-crosshair::before {
          top: 50%;
          left: 0;
          width: 100%;
          height: 2px;
          transform: translateY(-50%);
        }

        .cg-target-crosshair::after {
          top: 0;
          left: 50%;
          width: 2px;
          height: 100%;
          transform: translateX(-50%);
        }

        .cg-geass-text {
          position: absolute;
          bottom: 20%;
          left: 50%;
          transform: translateX(-50%);
          text-align: center;
          animation: textFadeIn 1s ease forwards;
        }

        @keyframes textFadeIn {
          from { opacity: 0; transform: translateX(-50%) translateY(20px); }
          to { opacity: 1; transform: translateX(-50%) translateY(0); }
        }

        .cg-geass-command {
          display: block;
          font-family: 'Noto Serif SC', serif;
          font-size: 1.5rem;
          color: #dc2626;
          text-shadow: 0 0 20px rgba(220, 38, 38, 0.8);
          letter-spacing: 0.2em;
          margin-bottom: 0.5rem;
        }

        .cg-geass-command-sub {
          display: block;
          font-family: 'Cinzel', serif;
          font-size: 1rem;
          color: #ef4444;
          opacity: 0.8;
        }

        /* 阶段特定样式 */
        .cg-phase-charging .cg-geass-beams {
          display: none;
        }

        .cg-phase-fade {
          animation: geassFadeOut 1s ease forwards;
        }

        @keyframes geassFadeOut {
          to { opacity: 0; }
        }
      `}</style>
    </div>
  );
};

// ============================================
// 角色被Geass控制动画
// ============================================

interface GeassControlledProps {
  children: React.ReactNode;
  isControlled: boolean;
  className?: string;
}

export const GeassControlled: React.FC<GeassControlledProps> = ({
  children,
  isControlled,
  className = '',
}) => {
  return (
    <div className={`cg-geass-controlled ${isControlled ? 'cg-controlled-active' : ''} ${className}`}>
      {children}
      
      {/* Geass眼睛覆盖层 */}
      {isControlled && (
        <div className="cg-geass-eye-overlay">
          <div className="cg-geass-eye-glow" />
          <GeassSymbol size={60} animate={false} />
        </div>
      )}

      <style>{`
        .cg-geass-controlled {
          position: relative;
          display: inline-block;
        }

        .cg-controlled-active {
          animation: controlledShake 0.5s ease-in-out infinite;
          filter: sepia(50%) hue-rotate(-30deg) saturate(150%);
        }

        @keyframes controlledShake {
          0%, 100% { transform: translateX(0) rotate(0deg); }
          25% { transform: translateX(-2px) rotate(-1deg); }
          75% { transform: translateX(2px) rotate(1deg); }
        }

        .cg-geass-eye-overlay {
          position: absolute;
          top: 30%;
          right: 20%;
          width: 60px;
          height: 60px;
          z-index: 10;
          animation: eyePulse 1s ease-in-out infinite;
        }

        @keyframes eyePulse {
          0%, 100% { transform: scale(1); opacity: 0.9; }
          50% { transform: scale(1.1); opacity: 1; }
        }

        .cg-geass-eye-glow {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 100px;
          height: 100px;
          background: radial-gradient(circle, rgba(220, 38, 38, 0.5) 0%, transparent 70%);
          animation: glowPulse 1s ease-in-out infinite;
        }

        @keyframes glowPulse {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 1; }
        }
      `}</style>
    </div>
  );
};

// ============================================
// Geass激活按钮特效
// ============================================

interface GeassButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isCharged?: boolean;
  chargeProgress?: number;
}

export const GeassButton: React.FC<GeassButtonProps> = ({
  children,
  isCharged = false,
  chargeProgress = 0,
  className = '',
  ...props
}) => {
  return (
    <button
      className={`cg-geass-button ${isCharged ? 'cg-charged' : ''} ${className}`}
      {...props}
    >
      {/* 充能进度环 */}
      <svg className="cg-charge-ring" viewBox="0 0 100 100">
        <circle
          className="cg-charge-bg"
          cx="50"
          cy="50"
          r="45"
        />
        <circle
          className="cg-charge-progress"
          cx="50"
          cy="50"
          r="45"
          style={{
            strokeDasharray: `${2 * Math.PI * 45}`,
            strokeDashoffset: `${2 * Math.PI * 45 * (1 - chargeProgress / 100)}`,
          }}
        />
      </svg>
      
      <span className="cg-button-content">{children}</span>
      
      {/* Geass符号 */}
      {isCharged && (
        <div className="cg-button-geass-icon">
          <GeassSymbol size={24} animate={true} />
        </div>
      )}

      <style>{`
        .cg-geass-button {
          position: relative;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 0.75rem 1.5rem;
          font-family: 'Noto Sans SC', sans-serif;
          font-size: 0.875rem;
          font-weight: 600;
          color: #f5f5f5;
          background: linear-gradient(135deg, #7f1d1d 0%, #dc2626 100%);
          border: 2px solid #dc2626;
          border-radius: 0.5rem;
          cursor: pointer;
          overflow: hidden;
          transition: all 0.3s ease;
        }

        .cg-geass-button:hover:not(:disabled) {
          box-shadow: 0 0 30px rgba(220, 38, 38, 0.5);
          transform: scale(1.02);
        }

        .cg-geass-button:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        .cg-geass-button.cg-charged {
          background: linear-gradient(135deg, #dc2626 0%, #ef4444 100%);
          border-color: #ef4444;
          box-shadow: 0 0 20px rgba(220, 38, 38, 0.4);
          animation: chargedPulse 1.5s ease-in-out infinite;
        }

        @keyframes chargedPulse {
          0%, 100% { box-shadow: 0 0 20px rgba(220, 38, 38, 0.4); }
          50% { box-shadow: 0 0 40px rgba(220, 38, 38, 0.6), 0 0 60px rgba(220, 38, 38, 0.3); }
        }

        .cg-charge-ring {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 120%;
          height: 120%;
          pointer-events: none;
        }

        .cg-charge-bg {
          fill: none;
          stroke: rgba(220, 38, 38, 0.2);
          stroke-width: 3;
        }

        .cg-charge-progress {
          fill: none;
          stroke: #ef4444;
          stroke-width: 3;
          stroke-linecap: round;
          transform: rotate(-90deg);
          transform-origin: center;
          transition: stroke-dashoffset 0.3s ease;
        }

        .cg-button-content {
          position: relative;
          z-index: 1;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .cg-button-geass-icon {
          position: absolute;
          top: -10px;
          right: -10px;
          width: 24px;
          height: 24px;
          animation: iconSpin 4s linear infinite;
        }

        @keyframes iconSpin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </button>
  );
};

// ============================================
// 导出所有Geass特效
// ============================================

export const GeassEffects = {
  Symbol: GeassSymbol,
  Fullscreen: GeassFullscreenEffect,
  Controlled: GeassControlled,
  Button: GeassButton,
};

export default GeassEffects;
