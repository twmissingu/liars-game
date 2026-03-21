/**
 * =============================================================================
 * Code Geass: Liar's Game - 动画系统类型定义
 * =============================================================================
 *
 * 提供完整的动画系统类型支持，实现角色与动画的解耦
 *
 * @module animation/types
 * @version 1.0.0
 */

import type { CharacterId } from '../types';

// ============================================
// 动画类型定义
// ============================================

/** 动画类型枚举 */
export type AnimationType =
  | 'play'      // 玩家出牌
  | 'aiPlay'    // AI出牌
  | 'challenge' // 质疑
  | 'dodge'     // 闪避
  | 'hit'       // 命中
  | 'skip'      // 不质疑/跳过
  | 'think';    // 思考中

/** 动画状态 */
export interface AnimationState {
  type: AnimationType | null;
  text: string;
  startTime: number;
  duration: number;
  playerId: PlayerId;
}

/** 持续动画状态 */
export interface PersistentAnimationState {
  playerId: PlayerId | null;
  type: 'play' | 'aiPlay' | 'challenge' | null;
  text: string;
  startTime: number;
}

/** 玩家ID类型 */
export type PlayerId = 'player' | 'ai' | 'ai2' | 'ai3';

/** AI玩家ID映射 */
export type AIPlayerId = 'ai' | 'ai2' | 'ai3';

// ============================================
// 动画事件类型
// ============================================

/** 动画事件类型 */
export type AnimationEventType =
  | 'challenge_initiated'  // 质疑发起
  | 'challenge_skipped'    // 质疑跳过
  | 'geass_dodge'          // Geass闪避
  | 'geass_hit'            // Geass命中
  | 'card_played'          // 出牌
  | 'turn_started';        // 回合开始

/** 动画事件 */
export interface AnimationEvent {
  type: AnimationEventType;
  playerId: PlayerId;
  targetId?: PlayerId;
  timestamp: number;
  data?: Record<string, unknown>;
}

/** 动画事件处理器 */
export type AnimationEventHandler = (event: AnimationEvent) => void;

// ============================================
// 动画配置类型
// ============================================

/** 动画配置 */
export interface AnimationConfig {
  duration: number;
  priority: number;
  interruptible: boolean;
  persistent?: boolean;
}

/** 动画类型配置映射 */
export type AnimationConfigMap = Record<AnimationType, AnimationConfig>;

// ============================================
// 角色动画映射类型
// ============================================

/** 角色动画配置 */
export interface CharacterAnimationConfig {
  /** 角色ID */
  characterId: CharacterId;
  /** 角色显示名称 */
  displayName: string;
  /** 玩家ID映射 */
  playerId: PlayerId;
  /** 动画文本配置 */
  animationTexts: Partial<Record<AnimationType, string>>;
  /** 动画颜色主题 */
  colorTheme: string;
}

/** 角色动画注册表 */
export type CharacterAnimationRegistry = Record<PlayerId, CharacterAnimationConfig>;

// ============================================
// 动画队列类型
// ============================================

/** 动画队列项 */
export interface AnimationQueueItem {
  id: string;
  playerId: PlayerId;
  type: AnimationType;
  text: string;
  duration: number;
  priority: number;
  timestamp: number;
}

/** 动画队列状态 */
export interface AnimationQueueState {
  items: AnimationQueueItem[];
  current: AnimationQueueItem | null;
  isProcessing: boolean;
}

// ============================================
// 动画Hook类型
// ============================================

/** 玩家质疑动画状态 */
export interface PlayerChallengeAnimationState {
  show: boolean;
  targetId: PlayerId | null;
}

/** 动画Hook返回值 */
export interface UseAnimationReturn {
  /** 当前动画状态（玩家） */
  animation: AnimationState;
  /** 所有玩家动画状态 */
  animations: Record<PlayerId, AnimationState>;
  /** 持续动画状态 */
  persistentAnimation: PersistentAnimationState;
  /** 玩家质疑动画状态 */
  playerChallengeAnimation: PlayerChallengeAnimationState;
  /** 设置玩家质疑动画状态 */
  setPlayerChallengeAnimation: (state: PlayerChallengeAnimationState) => void;
  /** 触发动画 */
  triggerAnimation: (playerId: PlayerId, type: AnimationType, text?: string) => void;
  /** 触发持续动画 */
  triggerPersistentAnimation: (playerId: PlayerId, type: 'play' | 'aiPlay' | 'challenge', text: string) => void;
  /** 清除动画 */
  clearAnimation: (playerId: PlayerId) => void;
  /** 清除持续动画 */
  clearPersistentAnimation: () => void;
  /** 动画队列 */
  queue: AnimationQueueState;
  /** 添加动画到队列 */
  enqueueAnimation: (playerId: PlayerId, type: AnimationType, text?: string, priority?: number) => void;
}

// ============================================
// 动画解析器类型
// ============================================

/** 动画触发器 */
export interface AnimationTrigger {
  /** 触发器ID */
  id: string;
  /** 匹配条件 */
  condition: (gameState: unknown) => boolean;
  /** 动画类型 */
  animationType: AnimationType;
  /** 获取动画文本 */
  getText: (gameState: unknown) => string;
  /** 获取目标玩家ID */
  getPlayerId: (gameState: unknown) => PlayerId;
  /** 获取额外数据（可选） */
  getData?: (gameState: unknown) => Record<string, unknown>;
}

/** 动画触发器注册表 */
export type AnimationTriggerRegistry = Map<string, AnimationTrigger>;
