/**
 * Code Geass: Liar's Game - Q版卡莲 SVG组件
 * 特征：红色块 + 傲娇姿势
 */

import React from 'react';
import { characterColors } from '../../data/characters';
import type { AnimationState } from '../../types';

interface ChibiKallenProps {
  size?: number;
  animationState?: AnimationState;
  className?: string;
}

export const ChibiKallen: React.FC<ChibiKallenProps> = ({
  size = 200,
  animationState = 'idle',
  className = '',
}) => {
  const colors = characterColors.kallen;
  
  const getAnimationTransform = () => {
    switch (animationState) {
      case 'breathing':
        return 'scale(1.02)';
      case 'win':
        return 'translateY(-10px) scale(1.05)';
      case 'lose':
        return 'translateY(5px) scale(0.95)';
      case 'playing-card':
        return 'rotate(3deg)';
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
        <linearGradient id="kallenBodyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={colors.highlight} />
          <stop offset="50%" stopColor={colors.primary} />
          <stop offset="100%" stopColor={colors.secondary} />
        </linearGradient>
        <linearGradient id="kallenHairGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor={colors.highlight} />
          <stop offset="100%" stopColor={colors.primary} />
        </linearGradient>
        <linearGradient id="kallenSuitGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#991b1b" />
          <stop offset="50%" stopColor="#7f1d1d" />
          <stop offset="100%" stopColor="#450a0a" />
        </linearGradient>
      </defs>

      {/* 头发（后层/长发） */}
      <path
        d="M50 80 Q40 120 35 160 Q30 185 45 190 L155 190 Q170 185 165 160 Q160 120 150 80 Q100 70 50 80"
        fill="url(#kallenHairGrad)"
        stroke={colors.outline}
        strokeWidth="2"
      />

      {/* 身体（驾驶服） */}
      <ellipse
        cx="100"
        cy="135"
        rx="40"
        ry="36"
        fill="url(#kallenSuitGrad)"
        stroke={colors.outline}
        strokeWidth="2"
      />

      {/* 驾驶服细节 */}
      <path
        d="M75 120 Q100 135 125 120"
        fill="none"
        stroke={colors.highlight}
        strokeWidth="2"
      />
      <rect x="95" y="115" width="10" height="35" fill={colors.highlight} opacity="0.5" />

      {/* 红莲徽章 */}
      <circle cx="100" cy="130" r="7" fill={colors.eye} stroke={colors.outline} strokeWidth="1" />
      <path d="M97 130 L100 127 L103 130 L100 133 Z" fill={colors.shadow} />

      {/* 头部 */}
      <circle
        cx="100"
        cy="72"
        r="42"
        fill={colors.primary}
        stroke={colors.outline}
        strokeWidth="2"
      />

      {/* 头发（前层/短发+头巾） */}
      <path
        d="M58 72 Q60 42 85 48 Q100 38 115 48 Q140 42 142 72 Q140 92 130 88 L100 82 L70 88 Q60 92 58 72"
        fill="url(#kallenHairGrad)"
        stroke={colors.outline}
        strokeWidth="1.5"
      />

      {/* 红色头巾 */}
      <path
        d="M55 60 Q100 45 145 60 L148 75 Q100 60 52 75 Z"
        fill={colors.secondary}
        stroke={colors.outline}
        strokeWidth="1.5"
      />
      <rect x="95" y="50" width="10" height="15" fill={colors.highlight} />

      {/* 头巾飘带 */}
      <path
        d="M55 65 Q40 80 35 100 L45 95 Q50 80 58 70"
        fill={colors.secondary}
        stroke={colors.outline}
        strokeWidth="1"
      >
        <animateTransform
          attributeName="transform"
          type="rotate"
          values="0 55 65;5 55 65;0 55 65"
          dur="2s"
          repeatCount="indefinite"
        />
      </path>

      {/* 眼睛（傲娇/锐利） */}
      <ellipse cx="78" cy="76" rx="10" ry="11" fill="#f8fafc" stroke={colors.outline} strokeWidth="1.5" />
      <ellipse cx="78" cy="76" rx="6" ry="7" fill={colors.eye} />
      <circle cx="80" cy="74" r="2" fill="white" />

      <ellipse cx="122" cy="76" rx="10" ry="11" fill="#f8fafc" stroke={colors.outline} strokeWidth="1.5" />
      <ellipse cx="122" cy="76" rx="6" ry="7" fill={colors.eye} />
      <circle cx="124" cy="74" r="2" fill="white" />

      {/* 眉毛（傲娇/锐利） */}
      <path d="M68 62 L88 66" fill="none" stroke={colors.outline} strokeWidth="2" strokeLinecap="round" />
      <path d="M132 62 L112 66" fill="none" stroke={colors.outline} strokeWidth="2" strokeLinecap="round" />

      {/* 嘴巴（傲娇撇嘴） */}
      <path
        d="M95 96 Q100 94 108 97"
        fill="none"
        stroke={colors.outline}
        strokeWidth="1.5"
        strokeLinecap="round"
      />

      {/* 手（傲娇姿势 - 双臂交叉） */}
      <path
        d="M60 125 Q80 135 100 130 Q120 135 140 125"
        fill="none"
        stroke={colors.primary}
        strokeWidth="12"
        strokeLinecap="round"
      />
      <path
        d="M60 125 Q80 135 100 130 Q120 135 140 125"
        fill="none"
        stroke={colors.outline}
        strokeWidth="2"
        strokeLinecap="round"
      />

      {/* 交叉的手臂细节 */}
      <ellipse cx="85" cy="128" rx="8" ry="6" fill={colors.primary} stroke={colors.outline} strokeWidth="1" />
      <ellipse cx="115" cy="128" rx="8" ry="6" fill={colors.primary} stroke={colors.outline} strokeWidth="1" />

      {/* 脸红（傲娇特征） */}
      <ellipse cx="65" cy="85" rx="8" ry="5" fill="#fca5a5" opacity="0.6" />
      <ellipse cx="135" cy="85" rx="8" ry="5" fill="#fca5a5" opacity="0.6" />

      {/* 生气符号（特定状态） */}
      {(animationState === 'lose') && (
        <g stroke={colors.outline} strokeWidth="2">
          <path d="M40 50 L50 55 M45 45 L52 52">
            <animate attributeName="opacity" values="1;0.5;1" dur="0.5s" repeatCount="indefinite" />
          </path>
          <path d="M160 50 L150 55 M155 45 L148 52">
            <animate attributeName="opacity" values="1;0.5;1" dur="0.5s" repeatCount="indefinite" />
          </path>
        </g>
      )}

      {/* 呼吸动画 */}
      {animationState === 'breathing' && (
        <ellipse
          cx="100"
          cy="135"
          rx="43"
          ry="39"
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
            values="39;41;39"
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

export default ChibiKallen;
