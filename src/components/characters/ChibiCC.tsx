/**
 * Code Geass: Liar's Game - Q版C.C. SVG组件
 * 特征：绿色块 + 披萨
 */

import React from 'react';
import { characterColors } from '../../data/characters';
import type { AnimationState } from '../../types';

interface ChibiCCProps {
  size?: number;
  animationState?: AnimationState;
  className?: string;
}

export const ChibiCC: React.FC<ChibiCCProps> = ({
  size = 200,
  animationState = 'idle',
  className = '',
}) => {
  const colors = characterColors.cc;
  
  const getAnimationTransform = () => {
    switch (animationState) {
      case 'breathing':
        return 'scale(1.02)';
      case 'win':
        return 'translateY(-10px) scale(1.05)';
      case 'lose':
        return 'translateY(5px) scale(0.95)';
      case 'playing-card':
        return 'rotate(5deg)';
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
        <linearGradient id="ccBodyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={colors.highlight} />
          <stop offset="50%" stopColor={colors.primary} />
          <stop offset="100%" stopColor={colors.secondary} />
        </linearGradient>
        <linearGradient id="ccHairGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor={colors.highlight} />
          <stop offset="100%" stopColor={colors.primary} />
        </linearGradient>
        <linearGradient id="ccPizzaGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#fbbf24" />
          <stop offset="50%" stopColor="#f59e0b" />
          <stop offset="100%" stopColor="#d97706" />
        </linearGradient>
      </defs>

      {/* 长发（后层） */}
      <path
        d="M50 80 Q30 120 25 160 Q20 180 30 190 L170 190 Q180 180 175 160 Q170 120 150 80 Q100 70 50 80"
        fill="url(#ccHairGrad)"
        stroke={colors.outline}
        strokeWidth="2"
      />

      {/* 身体（白色拘束服） */}
      <ellipse
        cx="100"
        cy="135"
        rx="40"
        ry="35"
        fill="#f8fafc"
        stroke={colors.outline}
        strokeWidth="2"
      />

      {/* 拘束服细节 */}
      <rect x="85" y="110" width="30" height="50" rx="5" fill="none" stroke={colors.outline} strokeWidth="1.5" />
      <line x1="100" y1="110" x2="100" y2="160" stroke={colors.outline} strokeWidth="1" />
      <circle cx="92" cy="125" r="3" fill={colors.outline} />
      <circle cx="108" cy="125" r="3" fill={colors.outline} />
      <circle cx="92" cy="145" r="3" fill={colors.outline} />
      <circle cx="108" cy="145" r="3" fill={colors.outline} />

      {/* 头部 */}
      <circle
        cx="100"
        cy="75"
        r="42"
        fill={colors.primary}
        stroke={colors.outline}
        strokeWidth="2"
      />

      {/* 头发（前层/刘海） */}
      <path
        d="M58 75 Q60 45 85 50 Q100 40 115 50 Q140 45 142 75 Q140 95 130 90 L100 85 L70 90 Q60 95 58 75"
        fill="url(#ccHairGrad)"
        stroke={colors.outline}
        strokeWidth="1.5"
      />

      {/* 眼睛（慵懒表情） */}
      <ellipse cx="78" cy="78" rx="9" ry="10" fill="#f8fafc" stroke={colors.outline} strokeWidth="1.5" />
      <ellipse cx="78" cy="78" rx="5" ry="6" fill={colors.eye} />
      <circle cx="80" cy="76" r="1.5" fill="white" />

      <ellipse cx="122" cy="78" rx="9" ry="10" fill="#f8fafc" stroke={colors.outline} strokeWidth="1.5" />
      <ellipse cx="122" cy="78" rx="5" ry="6" fill={colors.eye} />
      <circle cx="124" cy="76" r="1.5" fill="white" />

      {/* 眉毛（慵懒） */}
      <path d="M70 65 Q78 68 86 65" fill="none" stroke={colors.outline} strokeWidth="1.5" strokeLinecap="round" />
      <path d="M114 65 Q122 68 130 65" fill="none" stroke={colors.outline} strokeWidth="1.5" strokeLinecap="round" />

      {/* 嘴巴（慵懒微笑） */}
      <path
        d="M95 95 Q100 98 105 95"
        fill="none"
        stroke={colors.outline}
        strokeWidth="1.5"
        strokeLinecap="round"
      />

      {/* 披萨 */}
      <g transform="translate(130, 100) rotate(-20)">
        {/* 披萨饼底 */}
        <path
          d="M0 0 L-20 40 Q0 50 20 40 Z"
          fill="url(#ccPizzaGrad)"
          stroke={colors.outline}
          strokeWidth="1.5"
        />
        {/* 芝士 */}
        <path
          d="M-2 5 L-15 35 Q0 42 15 35 L2 5 Z"
          fill="#fef3c7"
          opacity="0.9"
        />
        {/* 意大利辣香肠 */}
        <circle cx="-5" cy="20" r="3" fill="#dc2626" />
        <circle cx="5" cy="25" r="3" fill="#dc2626" />
        <circle cx="0" cy="32" r="2.5" fill="#dc2626" />
      </g>

      {/* 手（拿着披萨） */}
      <ellipse cx="140" cy="120" rx="10" ry="8" fill={colors.primary} stroke={colors.outline} strokeWidth="1.5" />
      <ellipse cx="60" cy="125" rx="10" ry="8" fill={colors.primary} stroke={colors.outline} strokeWidth="1.5" />

      {/* 呼吸动画 */}
      {animationState === 'breathing' && (
        <ellipse
          cx="100"
          cy="135"
          rx="43"
          ry="38"
          fill="none"
          stroke={colors.highlight}
          strokeWidth="1"
          opacity="0.3"
        >
          <animate
            attributeName="rx"
            values="43;45;43"
            dur="3s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="ry"
            values="38;40;38"
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

export default ChibiCC;
