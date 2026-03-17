/**
 * Code Geass: Liar's Game - 动画组件
 * 角色待机呼吸、出牌动画、胜利/失败动画
 */

import React, { useEffect, useState } from 'react';
import type { AIAnimationState } from '../../types';

// ============================================
// 呼吸动画包装器
// ============================================

interface BreathingAnimationProps {
  children: React.ReactNode;
  intensity?: 'light' | 'normal' | 'heavy';
  className?: string;
}

export const BreathingAnimation: React.FC<BreathingAnimationProps> = ({
  children,
  intensity = 'normal',
  className = '',
}) => {
  const intensityMap = {
    light: { scale: [1, 1.01, 1], duration: 4 },
    normal: { scale: [1, 1.02, 1], duration: 3 },
    heavy: { scale: [1, 1.04, 1], duration: 2 },
  };

  const config = intensityMap[intensity];

  return (
    <div
      className={`cg-breathing ${className}`}
      style={{
        animation: `cg-breathing ${config.duration}s ease-in-out infinite`,
      }}
    >
      {children}
      <style>{`
        @keyframes cg-breathing {
          0%, 100% { transform: scale(${config.scale[0]}); }
          50% { transform: scale(${config.scale[1]}); }
        }
      `}</style>
    </div>
  );
};

// ============================================
// 悬浮动画包装器
// ============================================

interface FloatAnimationProps {
  children: React.ReactNode;
  amplitude?: number;
  duration?: number;
  className?: string;
}

export const FloatAnimation: React.FC<FloatAnimationProps> = ({
  children,
  amplitude = 10,
  duration = 2,
  className = '',
}) => {
  return (
    <div
      className={`cg-float ${className}`}
      style={{
        animation: `cg-float ${duration}s ease-in-out infinite`,
      }}
    >
      {children}
      <style>{`
        @keyframes cg-float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-${amplitude}px); }
        }
      `}</style>
    </div>
  );
};

// ============================================
// Geass脉冲效果
// ============================================

interface GeassPulseProps {
  children: React.ReactNode;
  color?: string;
  intensity?: 'low' | 'medium' | 'high';
  className?: string;
}

export const GeassPulse: React.FC<GeassPulseProps> = ({
  children,
  color = '#dc2626',
  intensity = 'medium',
  className = '',
}) => {
  const intensityMap = {
    low: { shadow: `0 0 10px ${color}40`, spread: '20px' },
    medium: { shadow: `0 0 20px ${color}60, 0 0 40px ${color}40`, spread: '40px' },
    high: {
      shadow: `0 0 30px ${color}80, 0 0 60px ${color}60, 0 0 90px ${color}40`,
      spread: '60px',
    },
  };

  const config = intensityMap[intensity];

  return (
    <div
      className={`cg-geass-pulse ${className}`}
      style={{
        animation: 'cg-geass-pulse 1.5s ease-in-out infinite',
      }}
    >
      {children}
      <style>{`
        .cg-geass-pulse {
          position: relative;
        }
        
        .cg-geass-pulse::after {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 100%;
          height: 100%;
          border-radius: inherit;
          box-shadow: ${config.shadow};
          animation: cg-geass-pulse-shadow 1.5s ease-in-out infinite;
          pointer-events: none;
        }
        
        @keyframes cg-geass-pulse {
          0%, 100% { filter: brightness(1); }
          50% { filter: brightness(1.1); }
        }
        
        @keyframes cg-geass-pulse-shadow {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 1; }
        }
      `}</style>
    </div>
  );
};

// ============================================
// 出牌动画组件
// ============================================

interface PlayCardAnimationProps {
  children: React.ReactNode;
  isPlaying: boolean;
  onComplete?: () => void;
  className?: string;
}

export const PlayCardAnimation: React.FC<PlayCardAnimationProps> = ({
  children,
  isPlaying,
  onComplete,
  className = '',
}) => {
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (isPlaying) {
      setIsAnimating(true);
      const timer = setTimeout(() => {
        setIsAnimating(false);
        onComplete?.();
      }, 400);
      return () => clearTimeout(timer);
    }
  }, [isPlaying, onComplete]);

  return (
    <div className={`cg-play-card ${isAnimating ? 'cg-playing' : ''} ${className}`}>
      {children}
      <style>{`
        .cg-play-card {
          transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        
        .cg-play-card.cg-playing {
          animation: cg-play-card 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        
        @keyframes cg-play-card {
          0% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-50px) scale(1.15) rotate(-5deg); }
          100% { transform: translateY(0) scale(1); }
        }
      `}</style>
    </div>
  );
};

// ============================================
// 胜利动画组件
// ============================================

interface VictoryAnimationProps {
  children: React.ReactNode;
  isVictory: boolean;
  className?: string;
}

export const VictoryAnimation: React.FC<VictoryAnimationProps> = ({
  children,
  isVictory,
  className = '',
}) => {
  return (
    <div className={`cg-victory ${isVictory ? 'cg-victory-active' : ''} ${className}`}>
      {children}
      <style>{`
        .cg-victory {
          transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .cg-victory.cg-victory-active {
          animation: cg-victory 1s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        @keyframes cg-victory {
          0% { transform: scale(0.8); opacity: 0; }
          50% { transform: scale(1.1); }
          100% { transform: scale(1); opacity: 1; }
        }
      `}</style>
    </div>
  );
};

// ============================================
// 失败动画组件
// ============================================

interface DefeatAnimationProps {
  children: React.ReactNode;
  isDefeat: boolean;
  className?: string;
}

export const DefeatAnimation: React.FC<DefeatAnimationProps> = ({
  children,
  isDefeat,
  className = '',
}) => {
  return (
    <div className={`cg-defeat ${isDefeat ? 'cg-defeat-active' : ''} ${className}`}>
      {children}
      <style>{`
        .cg-defeat {
          transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .cg-defeat.cg-defeat-active {
          animation: cg-defeat 0.8s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        @keyframes cg-defeat {
          0% { transform: translateY(0) scale(1); filter: brightness(1); }
          25% { transform: translateY(10px) scale(0.95); filter: brightness(0.8); }
          50% { transform: translateY(5px) scale(0.97); filter: brightness(0.9); }
          100% { transform: translateY(0) scale(1); filter: brightness(1); }
        }
      `}</style>
    </div>
  );
};

// ============================================
// 金色闪烁效果
// ============================================

interface GoldShimmerProps {
  children: React.ReactNode;
  className?: string;
}

export const GoldShimmer: React.FC<GoldShimmerProps> = ({ children, className = '' }) => {
  return (
    <div className={`cg-gold-shimmer ${className}`}>
      {children}
      <div className="cg-shimmer-overlay" />
      <style>{`
        .cg-gold-shimmer {
          position: relative;
          overflow: hidden;
        }
        
        .cg-shimmer-overlay {
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(212, 175, 55, 0.3),
            transparent
          );
          animation: cg-shimmer 2s infinite;
        }
        
        @keyframes cg-shimmer {
          0% { left: -100%; }
          100% { left: 100%; }
        }
      `}</style>
    </div>
  );
};

// ============================================
// 过渡动画包装器
// ============================================

interface FadeTransitionProps {
  children: React.ReactNode;
  show: boolean;
  duration?: number;
  className?: string;
}

export const FadeTransition: React.FC<FadeTransitionProps> = ({
  children,
  show,
  duration = 300,
  className = '',
}) => {
  return (
    <div
      className={`cg-fade-transition ${show ? 'cg-fade-in' : 'cg-fade-out'} ${className}`}
      style={{ transitionDuration: `${duration}ms` }}
    >
      {children}
      <style>{`
        .cg-fade-transition {
          transition: opacity ease, transform ease;
        }
        
        .cg-fade-in {
          opacity: 1;
          transform: translateY(0);
        }
        
        .cg-fade-out {
          opacity: 0;
          transform: translateY(-10px);
          pointer-events: none;
        }
      `}</style>
    </div>
  );
};

// ============================================
// 动画控制器 Hook
// ============================================

export const useAnimation = (initialState: AIAnimationState = 'idle') => {
  const [state, setState] = useState<AIAnimationState>(initialState);
  const [isAnimating, setIsAnimating] = useState(false);

  const playAnimation = (newState: AIAnimationState, duration: number = 1000) => {
    setState(newState);
    setIsAnimating(true);

    setTimeout(() => {
      setIsAnimating(false);
      setState('idle');
    }, duration);
  };

  return {
    state,
    isAnimating,
    playAnimation,
    setAnimationState: setState,
  };
};

// ============================================
// 导出所有动画组件
// ============================================

export const Animations = {
  Breathing: BreathingAnimation,
  Float: FloatAnimation,
  GeassPulse,
  PlayCard: PlayCardAnimation,
  Victory: VictoryAnimation,
  Defeat: DefeatAnimation,
  GoldShimmer,
  Fade: FadeTransition,
};

export default Animations;
