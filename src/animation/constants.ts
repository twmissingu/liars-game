/**
 * =============================================================================
 * Code Geass: Liar's Game - 动画系统常量
 * =============================================================================
 *
 * 集中管理动画配置，消除硬编码
 *
 * @module animation/constants
 * @version 1.0.0
 */

import type { AnimationConfigMap, AnimationType } from './types';

// ============================================
// 动画持续时间配置（毫秒）
// ============================================

export const ANIMATION_DURATION: Record<AnimationType, number> = {
  play: 1500,
  aiPlay: 1500,
  challenge: 1500,
  dodge: 1500,
  hit: 1500,
  skip: 1500,
  think: 1000,
} as const;

// ============================================
// 动画优先级配置
// ============================================

export const ANIMATION_PRIORITY: Record<AnimationType, number> = {
  play: 3,
  aiPlay: 3,
  challenge: 5,
  dodge: 4,
  hit: 4,
  skip: 2,
  think: 1,
} as const;

// ============================================
// 完整动画配置
// ============================================

export const ANIMATION_CONFIG: AnimationConfigMap = {
  play: {
    duration: ANIMATION_DURATION.play,
    priority: ANIMATION_PRIORITY.play,
    interruptible: false,
  },
  aiPlay: {
    duration: ANIMATION_DURATION.aiPlay,
    priority: ANIMATION_PRIORITY.aiPlay,
    interruptible: false,
  },
  challenge: {
    duration: ANIMATION_DURATION.challenge,
    priority: ANIMATION_PRIORITY.challenge,
    interruptible: true,
  },
  dodge: {
    duration: ANIMATION_DURATION.dodge,
    priority: ANIMATION_PRIORITY.dodge,
    interruptible: true,
  },
  hit: {
    duration: ANIMATION_DURATION.hit,
    priority: ANIMATION_PRIORITY.hit,
    interruptible: true,
  },
  skip: {
    duration: ANIMATION_DURATION.skip,
    priority: ANIMATION_PRIORITY.skip,
    interruptible: true,
  },
  think: {
    duration: ANIMATION_DURATION.think,
    priority: ANIMATION_PRIORITY.think,
    interruptible: true,
  },
} as const;

// ============================================
// 默认动画文本
// ============================================

export const DEFAULT_ANIMATION_TEXTS: Record<AnimationType, string> = {
  play: '出牌',
  aiPlay: '出牌',
  challenge: '质疑',
  dodge: '闪避',
  hit: '命中',
  skip: '跳过',
  think: '思考中...',
} as const;

// ============================================
// 动画事件类型常量
// ============================================

export const ANIMATION_EVENTS = {
  CHALLENGE_INITIATED: 'challenge_initiated',
  CHALLENGE_SKIPPED: 'challenge_skipped',
  GEASS_DODGE: 'geass_dodge',
  GEASS_HIT: 'geass_hit',
  CARD_PLAYED: 'card_played',
  TURN_STARTED: 'turn_started',
} as const;

// ============================================
// 队列处理配置
// ============================================

export const QUEUE_CONFIG = {
  /** 最大队列长度 */
  MAX_QUEUE_SIZE: 10,
  /** 队列处理间隔（毫秒） */
  PROCESS_INTERVAL: 100,
  /** 默认动画缓冲时间 */
  BUFFER_TIME: 100,
} as const;
