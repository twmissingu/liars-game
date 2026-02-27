/**
 * Code Geass: Liar's Game - Q版朱雀 SVG组件
 * 特征：白色块 + 热血姿势
 */

import React from 'react';
import { characterColors } from '../../data/characters';
import type { AnimationState } from '../../types';

interface ChibiSuzakuProps {
  size?: number;
  animationState?: AnimationState;
  className?: string;
}

export const ChibiSuzaku: React.FC<ChibiSuzakuProps> = ({
  size = 200,
  animationState = 'idle',
  className = '',
}) => {
  const colors = characterColors.suzaku;
  
  const getAnimationTransform = () => {
    switch (animationState) {
      case 'breathing':
        return 'scale(1.02)';
      case 'win':
        return 'translateY(-15px) scale(1.08)';
      case 'lose':
        return 'translateY(5px) scale(0.95)';
      case 'playing-card':
        return 'rotate(-3deg) scale(1.02)';
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
        <linearGradient id="suzakuBodyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={colors.highlight} />
          <stop offset="50%" stopColor={colors.primary} />
          <stop offset="100%" stopColor={colors.secondary} />
        </linearGradient>
        <linearGradient id="suzakuCapeGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor={colors.primary} />
          <stop offset="100%" stopColor={colors.shadow} />
        </linearGradient>
        <linearGradient id="suzakuUniformGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#e2e8f0" />
          <stop offset="50%" stopColor="#cbd5e1" />
          <stop offset="100%" stopColor="#94a3b8" />
        </linearGradient>
      </defs>

      {/* 披风（后层） */}
      <path
        d="M55 100 Q35 140 30 180 L170 180 Q165 140 145 100 Z"
        fill="url(#suzakuCapeGrad)"
        stroke={colors.outline}
        strokeWidth="2"
      />

      {/* 身体（骑士制服） */}
      <ellipse
        cx="100"
        cy="135"
        rx="42"
        ry="38"
        fill="url(#suzakuUniformGrad)"
        stroke={colors.outline}
        strokeWidth="2"
      />

      {/* 制服细节 - 金色装饰 */}
      <path
        d="M70 120 Q100 140 130 120"
        fill="none"
        stroke="#d4af37"
        strokeWidth="2"
      />
      <rect x="95" y="110" width="10" height="40" fill="#d4af37" />

      {/* 兰斯洛特徽章 */}
      <circle cx="100" cy="130" r="8" fill="#3b82f6" stroke={colors.outline} strokeWidth="1" />
      <path d="M96 130 L100 126 L104 130 L100 134 Z" fill="white" />

      {/* 头部 */}
      <circle
        cx="100"
        cy="72"
        r="43"
        fill={colors.primary}
        stroke={colors.outline}
        strokeWidth="2"
      />

      {/* 头发 */}
      <path
        d="M57 72 Q55 40 75 32 Q100 25 125 32 Q145 40 143 72 Q145 90 135 95 L100 90 L65 95 Q55 90 57 72"
        fill="#5c4033"
        stroke={colors.outline}
        strokeWidth="1.5"
      />

      {/* 头发（刺猬状） */}
      <path
        d="M60 55 L55 45 L68 52 L72 40 L80 50 L85 35 L95 48 L100 30 L105 48 L115 35 L120 50 L128 40 L132 52 L145 45 L140 55"
        fill="#5c4033"
        stroke={colors.outline}
        strokeWidth="1"
      />

      {/* 眼睛（热血/坚定） */}
      <ellipse cx="78" cy="76" rx="10" ry="11" fill="#f8fafc" stroke={colors.outline} strokeWidth="1.5" />
      <ellipse cx="78" cy="76" rx="6" ry="7" fill={colors.eye} />
      <circle cx="80" cy="74" r="2" fill="white" />
      {/* 眼神光 */}
      <path d="M72 70 L78 72" stroke={colors.outline} strokeWidth="1" />

      <ellipse cx="122" cy="76" rx="10" ry="11" fill="#f8fafc" stroke={colors.outline} strokeWidth="1.5" />
      <ellipse cx="122" cy="76" rx="6" ry="7" fill={colors.eye} />
      <circle cx="124" cy="74" r="2" fill="white" />
      <path d="M128 70 L122 72" stroke={colors.outline} strokeWidth="1" />

      {/* 眉毛（热血/坚定） */}
      <path d="M68 62 L88 68" fill="none" stroke={colors.outline} strokeWidth="2" strokeLinecap="round" />
      <path d="M132 62 L112 68" fill="none" stroke={colors.outline} strokeWidth="2" strokeLinecap="round" />

      {/* 嘴巴（热血笑容） */}
      <path
        d="M90 95 Q100 102 110 95"
        fill="none"
        stroke={colors.outline}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path d="M92 97 L108 97" fill="none" stroke={colors.outline} strokeWidth="1" />

      {/* 手（热血姿势 - 握拳） */}
      <g transform="translate(55, 115)">
        <circle cx="0" cy="0" r="12" fill={colors.primary} stroke={colors.outline} strokeWidth="1.5" />
        <ellipse cx="-3" cy="-5" rx="4" ry="5" fill={colors.primary} stroke={colors.outline} strokeWidth="1" />
        <ellipse cx="3" cy="-5" rx="4" ry="5" fill={colors.primary} stroke={colors.outline} strokeWidth="1" />
        <ellipse cx="0" cy="-8" rx="4" ry="5" fill={colors.primary} stroke={colors.outline} strokeWidth="1" />
      </g>

      <g transform="translate(145, 115)">
        <circle cx="0" cy="0" r="12" fill={colors.primary} stroke={colors.outline} strokeWidth="1.5" />
        <ellipse cx="-3" cy="-5" rx="4" ry="5" fill={colors.primary} stroke={colors.outline} strokeWidth="1" />
        <ellipse cx="3" cy="-5" rx="4" ry="5" fill={colors.primary} stroke={colors.outline} strokeWidth="1" />
        <ellipse cx="0" cy="-8" rx="4" ry="5" fill={colors.primary} stroke={colors.outline} strokeWidth="1" />
      </g>

      {/* 热血效果线（胜利时显示） */}
      {animationState === 'win' && (
        <g stroke="#fbbf24" strokeWidth="2" opacity="0.8">
          <line x1="40" y1="60" x2="30" y2="50">
            <animate attributeName="opacity" values="0;1;0" dur="0.5s" repeatCount="indefinite" />
          </line>
          <line x1="160" y1="60" x2="170" y2="50">
            <animate attributeName="opacity" values="0;1;0" dur="0.5s" repeatCount="indefinite" />
          </line>
          <line x1="50" y1="40" x2="45" y2="30">
            <animate attributeName="opacity" values="0;1;0" dur="0.5s" begin="0.2s" repeatCount="indefinite" />
          </line>
          <line x1="150" y1="40" x2="155" y2="30">
            <animate attributeName="opacity" values="0;1;0" dur="0.5s" begin="0.2s" repeatCount="indefinite" />
          </line>
        </g>
      )}

      {/* 呼吸动画 */}
      {animationState === 'breathing' && (
        <ellipse
          cx="100"
          cy="135"
          rx="45"
          ry="41"
          fill="none"
          stroke={colors.eye}
          strokeWidth="1"
          opacity="0.3"
        >
          <animate
            attributeName="rx"
            values="45;47;45"
            dur="3s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="ry"
            values="41;43;41"
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

export default ChibiSuzaku;
