/**
 * =============================================================================
 * Code Geass: Liar's Game - 工具函数
 * =============================================================================
 *
 * 提供各种通用的工具函数，包括：
 * - 卡牌工具
 * - 角色工具
 * - 动画工具
 * - 存储工具
 * - 随机工具
 *
 * @author Code Agent
 * @version 2.0.0
 */

import type { Card, CharacterId, CardSuit, CardRank } from '../types';

// ============================================
// 常量定义
// ============================================

/** 本地存储键名 */
const STORAGE_KEY = 'code-geass-game';

/** 游戏日志存储键名 */
const LOG_STORAGE_KEY = 'code-geass-game-logs';

// ============================================
// 卡牌工具函数
// ============================================

/**
 * 创建一副Liar's Bar扑克牌（20张：Q/K/A各6张 + 2张小丑牌）
 *
 * @returns 新牌组
 */
export const createDeck = (): Card[] => {
  const suits: CardSuit[] = ['spades', 'hearts', 'clubs', 'diamonds'];
  const ranks: CardRank[] = ['Q', 'K', 'A'];
  const deck: Card[] = [];

  // 生成Q/K/A各6张
  for (const rank of ranks) {
    for (let i = 0; i < 6; i++) {
      const suit = suits[i % 4];
      deck.push({
        id: `${rank}-${i}-${Math.random().toString(36).substr(2, 9)}`,
        suit: suit,
        rank: rank,
        value: rank === 'Q' ? 1 : rank === 'K' ? 2 : 3,
        isJoker: false,
        owner: null,
      });
    }
  }

  // 添加2张小丑牌
  for (let i = 0; i < 2; i++) {
    deck.push({
      id: `JOKER-${i}-${Math.random().toString(36).substr(2, 9)}`,
      suit: 'joker',
      rank: 'JOKER',
      value: 0,
      isJoker: true,
      owner: null,
    });
  }

  return deck;
};

/**
 * 洗牌（Fisher-Yates算法）
 *
 * @param deck - 要洗的牌组
 * @returns 打乱后的牌组
 */
export const shuffleDeck = (deck: Card[]): Card[] => {
  const shuffled = [...deck];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

/**
 * 发牌 - 1v3模式，每人5张
 *
 * @param deck - 牌组
 * @param handSize - 手牌大小（默认5张）
 * @returns 分发后的手牌
 */
export const dealCards = (
  deck: Card[],
  handSize: number = 5
): {
  playerHand: Card[];
  ai1Hand: Card[];
  ai2Hand: Card[];
  ai3Hand: Card[];
  remaining: Card[];
} => {
  const shuffled = shuffleDeck(deck);
  const playerHand = shuffled.slice(0, handSize);
  const ai1Hand = shuffled.slice(handSize, handSize * 2);
  const ai2Hand = shuffled.slice(handSize * 2, handSize * 3);
  const ai3Hand = shuffled.slice(handSize * 3, handSize * 4);
  const remaining = shuffled.slice(handSize * 4);

  return { playerHand, ai1Hand, ai2Hand, ai3Hand, remaining };
};

/**
 * 获取花色符号
 *
 * @param suit - 花色
 * @returns 符号
 */
export const getSuitSymbol = (suit: CardSuit): string => {
  const symbols: Record<CardSuit, string> = {
    spades: '♠',
    hearts: '♥',
    clubs: '♣',
    diamonds: '♦',
    joker: '🃏',
  };
  return symbols[suit];
};

/**
 * 获取花色颜色
 *
 * @param suit - 花色
 * @returns 颜色代码
 */
export const getSuitColor = (suit: CardSuit): string => {
  if (suit === 'joker') return '#FFD700';
  return suit === 'hearts' || suit === 'diamonds' ? '#dc2626' : '#0a0a0f';
};

// ============================================
// 角色工具函数
// ============================================

/**
 * 获取角色主色调
 *
 * @param characterId - 角色ID
 * @returns 颜色代码
 */
export const getCharacterColor = (characterId: CharacterId): string => {
  const colors: Record<CharacterId, string> = {
    lelouch: '#8B00FF',
    cc: '#00FF88',
    suzaku: '#0088FF',
    kallen: '#FF0044',
  };
  return colors[characterId];
};

/**
 * 获取角色名字
 *
 * @param characterId - 角色ID
 * @returns 角色名
 */
export const getCharacterName = (characterId: CharacterId): string => {
  const names: Record<CharacterId, string> = {
    lelouch: '鲁鲁修',
    cc: 'C.C.',
    suzaku: '朱雀',
    kallen: '卡莲',
  };
  return names[characterId];
};

/**
 * 获取角色技能信息
 *
 * @param characterId - 角色ID
 * @returns 技能信息
 */
export const getCharacterSkill = (
  characterId: CharacterId
): {
  name: string;
  description: string;
} => {
  const skills: Record<CharacterId, { name: string; description: string }> = {
    lelouch: {
      name: '绝对命令',
      description: '每局限1次，强制改变骗子牌为任意点数',
    },
    cc: {
      name: 'Code之力',
      description: '首次致命伤害50%概率复活',
    },
    suzaku: {
      name: '枢木剑术',
      description: '25%概率反击，15%基础闪避',
    },
    kallen: {
      name: '红莲二式',
      description: '可出1-4张牌，多张增加命中率',
    },
  };
  return skills[characterId];
};

// ============================================
// 动画工具函数
// ============================================

/**
 * 延迟函数
 *
 * @param ms - 毫秒数
 * @returns Promise
 */
export const delay = (ms: number): Promise<void> => {
  return new Promise(resolve => setTimeout(resolve, ms));
};

/**
 * 缓动函数集合
 */
export const easing = {
  /**
   * 缓入缓出
   *
   * @param t - 时间 0-1
   * @returns 缓动值
   */
  easeInOut: (t: number): number => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t),

  /**
   * 缓出
   *
   * @param t - 时间 0-1
   * @returns 缓动值
   */
  easeOut: (t: number): number => t * (2 - t),

  /**
   * 缓入
   *
   * @param t - 时间 0-1
   * @returns 缓动值
   */
  easeIn: (t: number): number => t * t,

  /**
   * 弹性效果
   *
   * @param t - 时间 0-1
   * @returns 缓动值
   */
  elastic: (t: number): number => {
    const c4 = (2 * Math.PI) / 3;
    return t === 0 ? 0 : t === 1 ? 1 : -Math.pow(2, 10 * t - 10) * Math.sin((t * 10 - 10.75) * c4);
  },
};

// ============================================
// 本地存储工具
// ============================================

/**
 * 游戏设置接口
 */
export interface GameSettings {
  difficulty: 'easy' | 'normal' | 'hard';
  personality: 'aggressive' | 'conservative' | 'balanced';
  bgmVolume: number;
  sfxVolume: number;
}

/**
 * 游戏日志条目
 */
export interface GameLogEntry {
  id: string;
  date: string;
  playerCharacter: CharacterId;
  result: 'win' | 'lose';
  playerScore: number;
  opponentScore: number;
  rounds: number;
}

/**
 * 存储工具对象
 */
export const storage = {
  /**
   * 保存数据
   *
   * @param data - 要保存的数据
   */
  save: (data: unknown): void => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    } catch (e) {
      console.error('Failed to save to localStorage:', e);
    }
  },

  /**
   * 加载数据
   *
   * @returns 保存的数据
   */
  load: <T>(): T | null => {
    try {
      const data = localStorage.getItem(STORAGE_KEY);
      return data ? (JSON.parse(data) as T) : null;
    } catch (e) {
      console.error('Failed to load from localStorage:', e);
      return null;
    }
  },

  /**
   * 清除数据
   */
  clear: (): void => {
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch (e) {
      console.error('Failed to clear localStorage:', e);
    }
  },
};

/**
 * 游戏日志存储工具
 */
export const gameLogStorage = {
  /**
   * 保存游戏日志
   *
   * @param log - 日志条目
   */
  save: (log: GameLogEntry): void => {
    try {
      const logs = gameLogStorage.loadAll();
      logs.unshift(log);
      // 只保留最近50条
      localStorage.setItem(LOG_STORAGE_KEY, JSON.stringify(logs.slice(0, 50)));
    } catch (e) {
      console.error('Failed to save game log:', e);
    }
  },

  /**
   * 加载所有日志
   *
   * @returns 日志列表
   */
  loadAll: (): GameLogEntry[] => {
    try {
      const data = localStorage.getItem(LOG_STORAGE_KEY);
      return data ? JSON.parse(data) : [];
    } catch (e) {
      console.error('Failed to load game logs:', e);
      return [];
    }
  },

  /**
   * 清除所有日志
   */
  clear: (): void => {
    try {
      localStorage.removeItem(LOG_STORAGE_KEY);
    } catch (e) {
      console.error('Failed to clear game logs:', e);
    }
  },
};

// ============================================
// 随机工具
// ============================================

/**
 * 随机工具对象
 */
export const random = {
  /**
   * 生成指定范围内的随机整数
   *
   * @param min - 最小值（包含）
   * @param max - 最大值（包含）
   * @returns 随机整数
   */
  int: (min: number, max: number): number => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  },

  /**
   * 生成指定范围内的随机浮点数
   *
   * @param min - 最小值
   * @param max - 最大值
   * @returns 随机浮点数
   */
  float: (min: number, max: number): number => {
    return Math.random() * (max - min) + min;
  },

  /**
   * 从数组中随机选择一个元素
   *
   * @param arr - 数组
   * @returns 随机元素
   */
  choice: <T>(arr: T[]): T => {
    return arr[Math.floor(Math.random() * arr.length)];
  },

  /**
   * 随机打乱数组
   *
   * @param arr - 数组
   * @returns 打乱后的数组
   */
  shuffle: <T>(arr: T[]): T[] => {
    const shuffled = [...arr];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  },

  /**
   * 生成UUID
   *
   * @returns UUID字符串
   */
  uuid: (): string => {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
      const r = (Math.random() * 16) | 0;
      const v = c === 'x' ? r : (r & 0x3) | 0x8;
      return v.toString(16);
    });
  },
};
