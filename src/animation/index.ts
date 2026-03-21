/**
 * =============================================================================
 * Code Geass: Liar's Game - 动画系统
 * =============================================================================
 *
 * 统一的动画系统入口，提供完整的动画管理能力
 *
 * @module animation
 * @version 1.0.0
 */

// 类型导出
export type {
  AnimationType,
  AnimationState,
  PersistentAnimationState,
  AnimationEvent,
  AnimationEventType,
  AnimationEventHandler,
  AnimationConfig,
  AnimationConfigMap,
  CharacterAnimationConfig,
  CharacterAnimationRegistry,
  AnimationQueueItem,
  AnimationQueueState,
  UseAnimationReturn,
  AnimationTrigger,
  AnimationTriggerRegistry,
  PlayerId,
  AIPlayerId,
} from './types';

// 常量导出
export {
  ANIMATION_DURATION,
  ANIMATION_PRIORITY,
  ANIMATION_CONFIG,
  DEFAULT_ANIMATION_TEXTS,
  ANIMATION_EVENTS,
  QUEUE_CONFIG,
} from './constants';

// 角色注册表导出
export {
  characterRegistry,
  DEFAULT_CHARACTER_REGISTRY,
  setPlayerCharacter,
  getPlayerCharacterId,
  getCharacterConfig,
  getPlayerIdByCharacterId,
  getCharacterIdByPlayerId,
  getDisplayName,
  getColorTheme,
  getAnimationText,
} from './characterRegistry';

// Hook导出
export { useAnimation } from './useAnimation';

// 触发器导出
export {
  animationTriggerRegistry,
  DEFAULT_ANIMATION_TRIGGERS,
  registerTrigger,
  unregisterTrigger,
  parseGameStateForAnimation,
} from './triggers';
