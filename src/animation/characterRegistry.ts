/**
 * =============================================================================
 * Code Geass: Liar's Game - 角色动画注册表
 * =============================================================================
 *
 * 集中管理角色与动画的映射关系，消除硬编码
 *
 * @module animation/characterRegistry
 * @version 1.0.0
 */

import type { CharacterId } from '../types';
import type { CharacterAnimationRegistry, PlayerId, AnimationType } from './types';
import { DEFAULT_ANIMATION_TEXTS } from './constants';

// ============================================
// 角色基础信息配置
// ============================================

/** 角色基础信息 */
interface CharacterBaseInfo {
  id: CharacterId;
  displayName: string;
  colorTheme: string;
}

/** 所有角色基础信息 */
const CHARACTER_BASE_INFO: Record<CharacterId, CharacterBaseInfo> = {
  lelouch: {
    id: 'lelouch',
    displayName: '鲁鲁修',
    colorTheme: '#d4af37',
  },
  cc: {
    id: 'cc',
    displayName: 'C.C.',
    colorTheme: '#22c55e',
  },
  suzaku: {
    id: 'suzaku',
    displayName: '朱雀',
    colorTheme: '#3b82f6',
  },
  kallen: {
    id: 'kallen',
    displayName: '卡莲',
    colorTheme: '#dc2626',
  },
};

// ============================================
// 玩家ID与角色ID映射
// ============================================

/** 玩家ID到角色ID的映射 */
const PLAYER_TO_CHARACTER_MAP: Record<PlayerId, CharacterId | null> = {
  player: null, // 玩家角色是动态的，由选择决定
  ai: 'cc',
  ai2: 'suzaku',
  ai3: 'kallen',
};

/** 角色ID到玩家ID的映射 */
const CHARACTER_TO_PLAYER_MAP: Record<CharacterId, PlayerId | null> = {
  lelouch: null, // 鲁鲁修只能是玩家
  cc: 'ai',
  suzaku: 'ai2',
  kallen: 'ai3',
};

// ============================================
// 角色动画注册表
// ============================================

/**
 * 创建角色动画配置
 */
function createCharacterAnimationConfig(
  characterId: CharacterId,
  playerId: PlayerId,
  customTexts?: Partial<Record<AnimationType, string>>
): import('./types').CharacterAnimationConfig {
  const baseInfo = CHARACTER_BASE_INFO[characterId];
  return {
    characterId,
    displayName: baseInfo.displayName,
    playerId,
    animationTexts: {
      ...DEFAULT_ANIMATION_TEXTS,
      ...customTexts,
    },
    colorTheme: baseInfo.colorTheme,
  };
}

/**
 * 默认角色动画注册表
 * 用于AI角色，玩家角色是动态的
 */
export const DEFAULT_CHARACTER_REGISTRY: CharacterAnimationRegistry = {
  player: {
    characterId: 'lelouch', // 默认，实际会被覆盖
    displayName: '玩家',
    playerId: 'player',
    animationTexts: { ...DEFAULT_ANIMATION_TEXTS },
    colorTheme: '#d4af37',
  },
  ai: createCharacterAnimationConfig('cc', 'ai'),
  ai2: createCharacterAnimationConfig('suzaku', 'ai2'),
  ai3: createCharacterAnimationConfig('kallen', 'ai3'),
};

// ============================================
// 角色动画注册表管理器
// ============================================

class CharacterAnimationRegistryManager {
  private registry: CharacterAnimationRegistry;
  private playerCharacterId: CharacterId | null = null;

  constructor() {
    this.registry = { ...DEFAULT_CHARACTER_REGISTRY };
  }

  /**
   * 设置玩家角色
   * @param characterId 玩家选择的角色ID
   */
  setPlayerCharacter(characterId: CharacterId): void {
    this.playerCharacterId = characterId;
    const baseInfo = CHARACTER_BASE_INFO[characterId];
    
    this.registry.player = {
      characterId,
      displayName: baseInfo.displayName,
      playerId: 'player',
      animationTexts: { ...DEFAULT_ANIMATION_TEXTS },
      colorTheme: baseInfo.colorTheme,
    };
  }

  /**
   * 获取玩家角色ID
   */
  getPlayerCharacterId(): CharacterId | null {
    return this.playerCharacterId;
  }

  /**
   * 获取角色配置
   * @param playerId 玩家ID
   */
  getCharacterConfig(playerId: PlayerId): import('./types').CharacterAnimationConfig | undefined {
    return this.registry[playerId];
  }

  /**
   * 通过角色ID获取玩家ID
   * @param characterId 角色ID
   */
  getPlayerIdByCharacterId(characterId: CharacterId): PlayerId | null {
    return CHARACTER_TO_PLAYER_MAP[characterId];
  }

  /**
   * 通过玩家ID获取角色ID
   * @param playerId 玩家ID
   */
  getCharacterIdByPlayerId(playerId: PlayerId): CharacterId | null {
    return PLAYER_TO_CHARACTER_MAP[playerId];
  }

  /**
   * 获取角色显示名称
   * @param playerId 玩家ID
   */
  getDisplayName(playerId: PlayerId): string {
    const config = this.registry[playerId];
    return config?.displayName || '未知角色';
  }

  /**
   * 获取角色颜色主题
   * @param playerId 玩家ID
   */
  getColorTheme(playerId: PlayerId): string {
    const config = this.registry[playerId];
    return config?.colorTheme || '#d4af37';
  }

  /**
   * 获取动画文本
   * @param playerId 玩家ID
   * @param animationType 动画类型
   */
  getAnimationText(playerId: PlayerId, animationType: AnimationType): string {
    const config = this.registry[playerId];
    return config?.animationTexts?.[animationType] || DEFAULT_ANIMATION_TEXTS[animationType];
  }

  /**
   * 重置注册表
   */
  reset(): void {
    this.registry = { ...DEFAULT_CHARACTER_REGISTRY };
    this.playerCharacterId = null;
  }

  /**
   * 获取完整注册表
   */
  getRegistry(): CharacterAnimationRegistry {
    return { ...this.registry };
  }
}

// ============================================
// 导出单例实例
// ============================================

export const characterRegistry = new CharacterAnimationRegistryManager();

// ============================================
// 便捷导出函数
// ============================================

export const setPlayerCharacter = (characterId: CharacterId): void => 
  characterRegistry.setPlayerCharacter(characterId);

export const getPlayerCharacterId = (): CharacterId | null => 
  characterRegistry.getPlayerCharacterId();

export const getCharacterConfig = (playerId: PlayerId) => 
  characterRegistry.getCharacterConfig(playerId);

export const getPlayerIdByCharacterId = (characterId: CharacterId): PlayerId | null => 
  characterRegistry.getPlayerIdByCharacterId(characterId);

export const getCharacterIdByPlayerId = (playerId: PlayerId): CharacterId | null => 
  characterRegistry.getCharacterIdByPlayerId(playerId);

export const getDisplayName = (playerId: PlayerId): string => 
  characterRegistry.getDisplayName(playerId);

export const getColorTheme = (playerId: PlayerId): string => 
  characterRegistry.getColorTheme(playerId);

export const getAnimationText = (playerId: PlayerId, animationType: AnimationType): string => 
  characterRegistry.getAnimationText(playerId, animationType);
