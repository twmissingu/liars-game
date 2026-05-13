/**
 * =============================================================================
 * Code Geass: Liar's Game - 动画触发器系统
 * =============================================================================
 *
 * 从游戏状态解析并触发动画，消除硬编码的lastAction解析
 *
 * @module animation/triggers
 * @version 1.0.0
 */

import type { GameState } from '../types';
import type { AnimationTrigger, PlayerId, AnimationEvent } from './types';
import { getPlayerIdByCharacterId, getCharacterIdByDisplayName } from './characterRegistry';

const isDev = import.meta.env.DEV;

// ============================================
// 游戏状态类型守卫 - 使用交叉类型避免扩展冲突
// ============================================

type GameStateWithOptionalLastAction = Omit<GameState, 'lastAction'> & {
  lastAction?: string;
};

type GameStateWithOptionalGeassResult = Omit<GameState, 'geassResult'> & {
  geassResult?: {
    activated: boolean;
    hit?: boolean;
    isDodge?: boolean;
    victimId?: 'player' | 'ai' | 'ai2' | 'ai3';
  } | null;
};

// ============================================
// 动画触发器工厂函数
// ============================================

/**
 * 创建质疑动画触发器
 */
function createChallengeTrigger(): AnimationTrigger {
  return {
    id: 'challenge_initiated',
    condition: (gameState: unknown): boolean => {
      const state = gameState as GameStateWithOptionalLastAction;
      const lastAction = state.lastAction || '';
      // 匹配 "XXX向YYY发起质疑！" 格式
      const matches = lastAction.includes('发起质疑') && lastAction.includes('向');
      isDev && console.log('[Challenge Trigger] condition check:', { lastAction, matches });
      return matches;
    },
    animationType: 'challenge',
    getText: (): string => '质疑',
    getPlayerId: (gameState: unknown): PlayerId => {
      const state = gameState as GameStateWithOptionalLastAction;
      const lastAction = state.lastAction || '';
      
      // 解析质疑者名称（"XXX向YYY发起质疑！"中的XXX）
      const match = lastAction.match(/^(.+?)向/);
      const challengerName = match ? match[1] : '';
      
      isDev && console.log('[Challenge Trigger] getPlayerId:', { lastAction, challengerName });
      
      // 通过名称查找对应的playerId
      return resolvePlayerIdByName(challengerName, state as GameState);
    },
    getData: (gameState: unknown): Record<string, unknown> => {
      const state = gameState as GameStateWithOptionalLastAction;
      const lastAction = state.lastAction || '';
      
      // 解析被质疑者名称（"XXX向YYY发起质疑！"中的YYY）
      const targetMatch = lastAction.match(/向(.+?)发起质疑/);
      const targetName = targetMatch ? targetMatch[1] : '';
      
      // 解析质疑者名称
      const challengerMatch = lastAction.match(/^(.+?)向/);
      const challengerName = challengerMatch ? challengerMatch[1] : '';
      
      const targetId = resolvePlayerIdByName(targetName, state as GameState);
      const challengerId = resolvePlayerIdByName(challengerName, state as GameState);
      
      isDev && console.log('[Challenge Trigger] getData:', { targetName, targetId, challengerName, challengerId });
      
      return {
        targetId,
        challengerId,
        targetName,
        challengerName,
      };
    },
  };
}

/**
 * 创建跳过质疑动画触发器
 */
function createSkipTrigger(): AnimationTrigger {
  return {
    id: 'challenge_skipped',
    condition: (gameState: unknown): boolean => {
      const state = gameState as GameStateWithOptionalLastAction;
      const lastAction = state.lastAction || '';
      return lastAction.includes('选择不质疑');
    },
    animationType: 'skip',
    getText: (): string => '跳过',
    getPlayerId: (gameState: unknown): PlayerId => {
      const state = gameState as GameStateWithOptionalLastAction;
      const lastAction = state.lastAction || '';
      
      // 解析角色名称（"XXX选择不质疑"中的XXX）
      const match = lastAction.match(/^(.+?)选择不质疑/);
      const characterName = match ? match[1] : '';
      
      return resolvePlayerIdByName(characterName, state as GameState);
    },
  };
}

/**
 * 创建闪避动画触发器
 */
function createDodgeTrigger(): AnimationTrigger {
  return {
    id: 'geass_dodge',
    condition: (gameState: unknown): boolean => {
      const state = gameState as GameStateWithOptionalGeassResult;
      return !!(
        state.geassResult?.activated && 
        (state.geassResult.isDodge || !state.geassResult.hit)
      );
    },
    animationType: 'dodge',
    getText: (): string => '闪避',
    getPlayerId: (gameState: unknown): PlayerId => {
      const state = gameState as GameStateWithOptionalGeassResult;
      // 使用 geassResult.victimId 来确定受害者
      // 如果 victimId 不存在，则回退到 playedCards.playerId
      return state.geassResult?.victimId || 
             (gameState as GameState).turnState?.playedCards?.playerId || 
             'player';
    },
  };
}

/**
 * 创建命中动画触发器
 */
function createHitTrigger(): AnimationTrigger {
  return {
    id: 'geass_hit',
    condition: (gameState: unknown): boolean => {
      const state = gameState as GameStateWithOptionalGeassResult;
      return !!(state.geassResult?.activated && state.geassResult.hit);
    },
    animationType: 'hit',
    getText: (): string => '命中',
    getPlayerId: (gameState: unknown): PlayerId => {
      const state = gameState as GameStateWithOptionalGeassResult;
      // 使用 geassResult.victimId 来确定受害者
      // 如果 victimId 不存在，则回退到 playedCards.playerId
      return state.geassResult?.victimId ||
             (gameState as GameState).turnState?.playedCards?.playerId ||
             'player';
    },
  };
}

/**
 * 创建出牌动画触发器
 */
function createPlayCardTrigger(): AnimationTrigger {
  return {
    id: 'card_played',
    condition: (gameState: unknown): boolean => {
      const state = gameState as GameStateWithOptionalLastAction;
      const lastAction = state.lastAction || '';
      return lastAction.includes('出牌') || lastAction.includes('出了');
    },
    animationType: 'play',
    getText: (): string => '出牌',
    getPlayerId: (gameState: unknown): PlayerId => {
      const state = gameState as GameState;
      return state.turnState?.playedCards?.playerId || 'player';
    },
    getData: (gameState: unknown): Record<string, unknown> => {
      const state = gameState as GameState;
      const playerId = state.turnState?.playedCards?.playerId || 'player';
      const isPlayer = playerId === 'player';
      return {
        animationType: isPlayer ? 'play' : 'aiPlay',
      };
    },
  };
}

// ============================================
// 名称解析辅助函数
// ============================================

/**
 * 通过角色名称解析PlayerId
 * 这个函数集中处理所有角色名称到PlayerId的映射
 */
function resolvePlayerIdByName(name: string, state: GameState): PlayerId {
  // 空名称检查
  if (!name || name.trim() === '') {
    return 'player';
  }

  const trimmedName = name.trim();

  // 检查是否是玩家
  // 玩家可能使用任何角色，需要通过游戏状态判断
  // 注意：PlayerStats中没有characterId字段，需要通过其他方式判断
  // 这里简化处理，检查是否匹配"玩家"
  if (trimmedName === '玩家') {
    return 'player';
  }

  // 检查AI角色
  // 通过游戏状态中的AI玩家列表匹配
  isDev && console.log('[resolvePlayerIdByName] 尝试匹配AI:', { trimmedName });
  for (const ai of state.aiPlayers || []) {
    if (ai.name === trimmedName) {
      isDev && console.log('[resolvePlayerIdByName] 匹配成功:', ai.id);
      return ai.id as PlayerId;
    }
  }

  // 通过显示名称动态查找角色ID（不依赖硬编码名称）
  const characterIdFromName = getCharacterIdByDisplayName(trimmedName);
  if (characterIdFromName) {
    const playerId = getPlayerIdByCharacterId(characterIdFromName);
    if (playerId) {
      isDev && console.log('[resolvePlayerIdByName] 通过显示名称匹配成功:', playerId);
      return playerId;
    }
  }

  // 默认返回player
  isDev && console.warn(`[Animation Trigger] Could not resolve player ID for name: ${trimmedName}`);
  return 'player';
}

// ============================================
// 触发器注册表
// ============================================

/**
 * 默认动画触发器列表
 */
export const DEFAULT_ANIMATION_TRIGGERS: AnimationTrigger[] = [
  createChallengeTrigger(),
  createSkipTrigger(),
  createDodgeTrigger(),
  createHitTrigger(),
  createPlayCardTrigger(),
];

/**
 * 动画触发器注册表
 */
class AnimationTriggerRegistry {
  private triggers: Map<string, AnimationTrigger> = new Map();

  constructor() {
    // 注册默认触发器
    DEFAULT_ANIMATION_TRIGGERS.forEach(trigger => {
      this.triggers.set(trigger.id, trigger);
    });
  }

  /**
   * 注册触发器
   */
  register(trigger: AnimationTrigger): void {
    this.triggers.set(trigger.id, trigger);
  }

  /**
   * 注销触发器
   */
  unregister(triggerId: string): void {
    this.triggers.delete(triggerId);
  }

  /**
   * 获取触发器
   */
  get(triggerId: string): AnimationTrigger | undefined {
    return this.triggers.get(triggerId);
  }

  /**
   * 获取所有触发器
   */
  getAll(): AnimationTrigger[] {
    return Array.from(this.triggers.values());
  }

  /**
   * 解析游戏状态，返回匹配的动画事件
   */
  parseGameState(gameState: GameState): AnimationEvent | null {
    const lastAction = (gameState as GameStateWithOptionalLastAction).lastAction;
    isDev && console.log('[parseGameState] 开始解析:', { lastAction, phase: gameState.phase });

    for (const trigger of this.triggers.values()) {
      isDev && console.log('[parseGameState] 检查触发器:', trigger.id);
      if (trigger.condition(gameState)) {
        isDev && console.log('[parseGameState] 触发器匹配成功:', trigger.id);

        // 获取触发器提供的额外数据
        const extraData = trigger.getData ? trigger.getData(gameState) : {};

        return {
          type: trigger.id as import('./types').AnimationEventType,
          playerId: trigger.getPlayerId(gameState),
          timestamp: Date.now(),
          data: {
            animationType: trigger.animationType,
            text: trigger.getText(gameState),
            ...extraData,
          },
        };
      }
    }
    isDev && console.log('[parseGameState] 没有匹配的触发器');
    return null;
  }

  /**
   * 重置注册表
   */
  reset(): void {
    this.triggers.clear();
    DEFAULT_ANIMATION_TRIGGERS.forEach(trigger => {
      this.triggers.set(trigger.id, trigger);
    });
  }
}

// ============================================
// 导出单例
// ============================================

export const animationTriggerRegistry = new AnimationTriggerRegistry();

// ============================================
// 便捷导出
// ============================================

export const registerTrigger = (trigger: AnimationTrigger): void =>
  animationTriggerRegistry.register(trigger);

export const unregisterTrigger = (triggerId: string): void =>
  animationTriggerRegistry.unregister(triggerId);

export const parseGameStateForAnimation = (gameState: GameState): AnimationEvent | null =>
  animationTriggerRegistry.parseGameState(gameState);
