/**
 * Code Geass: Liar's Game - Q版鲁鲁修 SVG组件
 * 特征：黑紫色块 + 眼罩
 */

import React from 'react';
import { characterColors } from '../../data/characters';
import type { AnimationState } from '../../types';

interface ChibiLelouchProps {
  size?: number;
  animationState?: AnimationState;
  className?: string;
}

export const ChibiLelouch: React.FC<ChibiLelouchProps> = ({
  size = 200,
  animationState = 'idle',
  className = '',
}) => {
  const colors = characterColors.lelouch;
  
  // 根据动画状态计算变换
  const getAnimationTransform = () => {
    switch (animationState) {
      case 'breathing':
        return 'scale(1.02)';
      case 'win':
        return 'translateY(-10px) scale(1.05)';
      case 'lose':
        return 'translateY(5px) scale(0.95)';
      case 'playing-card':
        return 'rotate(-5deg)';
      default:
        return '';
    }
  };

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      className={`cg-chibi ${className}`}
      style={{
        filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.3))',
        transition: 'transform 0.3s ease',
        transform: getAnimationTransform(),
      }}
    >
      <defs>
        {/* 渐变定义 */}
        <linearGradient id="lelouchBodyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={colors.highlight} />
          <stop offset="50%" stopColor={colors.primary} />
          <stop offset="100%" stopColor={colors.secondary} />
        </linearGradient>
        <linearGradient id="lelouchCapeGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor={colors.secondary} />
          <stop offset="100%" stopColor={colors.shadow} />
        </linearGradient>
        <radialGradient id="lelouchEyeGrad" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor={colors.eye} />
          <stop offset="70%" stopColor={colors.eye} />
          <stop offset="100%" stopColor="#7f1d1d" />
        </radialGradient>
        {/* Geass符号 */}
        <symbol id="geassSymbol" viewBox="0 0 40 40">
          <path
            d="M20 5 L23 18 L36 20 L23 22 L20 35 L17 22 L4 20 L17 18 Z"
            fill="none"
            stroke={colors.eye}
            strokeWidth="2"
          />
          <circle cx="20" cy="20" r="3" fill={colors.eye} />
        </symbol>
      </defs>

      {/* 披风（后层） */}
      <path
        d="M60 100 Q40 140 30 180 L170 180 Q160 140 140 100 Z"
        fill="url(#lelouchCapeGrad)"
        stroke={colors.outline}
        strokeWidth="2"
      />

      {/* 身体 */}
      <ellipse
        cx="100"
        cy="130"
        rx="45"
        ry="40"
        fill="url(#lelouchBodyGrad)"
        stroke={colors.outline}
        strokeWidth="2"
      />

      {/* 金色装饰线 */}
      <path
        d="M70 130 Q100 145 130 130"
        fill="none"
        stroke="#d4af37"
        strokeWidth="2"
      />

      {/* 头部 */}
      <circle
        cx="100"
        cy="70"
        r="45"
        fill={colors.primary}
        stroke={colors.outline}
        strokeWidth="2"
      />

      {/* 头发（后层） */}
      <path
        d="M55 70 Q50 40 70 30 Q100 20 130 30 Q150 40 145 70 Q150 90 140 100 L60 100 Q50 90 55 70"
        fill={colors.shadow}
        stroke={colors.outline}
        strokeWidth="2"
      />

      {/* 头发（前层/刘海） */}
      <path
        d="M60 50 Q70 35 85 45 Q100 30 115 45 Q130 35 140 50 Q135 65 130 60 L100 55 L70 60 Q65 65 60 50"
        fill={colors.primary}
        stroke={colors.outline}
        strokeWidth="1.5"
      />

      {/* 左眼（正常眼） */}
      <ellipse cx="82" cy="75" rx="10" ry="12" fill="#f8fafc" stroke={colors.outline} strokeWidth="1.5" />
      <ellipse cx="82" cy="75" rx="6" ry="8" fill="#1e293b" />
      <circle cx="84" cy="73" r="2" fill="white" />

      {/* 右眼（Geass之眼 - 带眼罩） */}
      <ellipse cx="118" cy="75" rx="10" ry="12" fill="#1a1a24" stroke={colors.outline} strokeWidth="1.5" />
      
      {/* 眼罩 */}
      <rect x="108" y="65" width="20" height="20" rx="3" fill={colors.shadow} stroke={colors.outline} strokeWidth="1.5" />
      <line x1="108" y1="75" x2="128" y2="75" stroke={colors.outline} strokeWidth="1" />
      <line x1="118" y1="65" x2="118" y2="85" stroke={colors.outline} strokeWidth="1" />
      
      {/* 眼罩带子 */}
      <path d="M128 75 Q145 70 155 65" fill="none" stroke={colors.shadow} strokeWidth="3" />
      <path d="M108 75 Q90 70 80 65" fill="none" stroke={colors.shadow} strokeWidth="3" />

      {/* 嘴巴（思考表情） */}
      <path
        d="M92 95 Q100 92 108 95"
        fill="none"
        stroke={colors.outline}
        strokeWidth="1.5"
        strokeLinecap="round"
      />

      {/* 手（思考姿势 - 托腮） */}
      <ellipse cx="65" cy="110" rx="12" ry="10" fill={colors.primary} stroke={colors.outline} strokeWidth="1.5" />
      <ellipse cx="135" cy="115" rx="12" ry="10" fill={colors.primary} stroke={colors.outline} strokeWidth="1.5" />

      {/* Geass符号装饰 */}
      <use href="#geassSymbol" x="150" y="20" width="30" height="30" opacity="0.6">
        <animateTransform
          attributeName="transform"
          type="rotate"
          from="0 165 35"
          to="360 165 35"
          dur="10s"
          repeatCount="indefinite"
        />
      </use>

      {/* 呼吸动画效果 */}
      {animationState === 'breathing' && (
        <ellipse
          cx="100"
          cy="130"
          rx="48"
          ry="43"
          fill="none"
          stroke={colors.eye}
          strokeWidth="1"
          opacity="0.3"
        >
          <animate
            attributeName="rx"
            values="48;50;48"
            dur="3s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="ry"
            values="43;45;43"
            dur="3s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="opacity"
            values="0.3;0.1;0.3"
            dur="3s"
            repeatCount="indefinite"
          />
        </ellipse>
      )}
    </svg>
  );
};

export default ChibiLelouch;
