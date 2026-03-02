/**
 * Code Geass: Liar's Game - 工具函数
 */

import type { Card, CharacterId, CardSuit, CardRank } from '../types/game.types';

// ============================================
// 卡牌工具函数
// ============================================

/**
 * 创建一副标准扑克牌（52张）
 */
export const createDeck = (): Card[] => {
  const suits: CardSuit[] = ['spades', 'hearts', 'clubs', 'diamonds'];
  const ranks: CardRank[] = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
  const deck: Card[] = [];

  for (const suit of suits) {
    for (let i = 0; i < ranks.length; i++) {
      deck.push({
        id: `${suit}-${ranks[i]}-${Math.random().toString(36).substr(2, 9)}`,
        suit: suit,
        rank: ranks[i],
        value: i + 1,
        isRevealed: false,
      });
    }
  }

  return deck;
};

/**
 * 洗牌（Fisher-Yates算法）
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
 */
export const dealCards = (deck: Card[], handSize: number = 5): { 
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
 */
export const getSuitSymbol = (suit: CardSuit): string => {
  const symbols: Record<CardSuit, string> = {
    spades: '♠',
    hearts: '♥',
    clubs: '♣',
    diamonds: '♦',
  };
  return symbols[suit];
};

/**
 * 获取花色颜色
 */
export const getSuitColor = (suit: CardSuit): string => {
  return suit === 'hearts' || suit === 'diamonds' ? '#dc2626' : '#0a0a0f';
};

// ============================================
// 角色工具函数
// ============================================

/**
 * 获取角色主色调
 */
export const getCharacterColor = (characterId: CharacterId): string => {
  const colors: Record<CharacterId, string> = {
    lelouch: '#4c1d95',
    cc: '#15803d',
    suzaku: '#f8fafc',
    kallen: '#dc2626',
  };
  return colors[characterId];
};

/**
 * 获取角色名字
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
 */
export const getCharacterSkill = (characterId: CharacterId): { name: string; description: string } => {
  const skills: Record<CharacterId, { name: string; description: string }> = {
    lelouch: {
      name: '绝对命令',
      description: '可以强制指定骗子牌为任意点数',
    },
    cc: {
      name: '不老不死',
      description: '50%概率免疫Geass效果',
    },
    suzaku: {
      name: '生存本能',
      description: 'HP≤1时，Geass命中概率减半',
    },
    kallen: {
      name: '红莲突击',
      description: '每回合可出1-4张牌',
    },
  };
  return skills[characterId];
};

// ============================================
// 动画工具函数
// ============================================

/**
 * 延迟函数
 */
export const delay = (ms: number): Promise<void> => {
  return new Promise(resolve => setTimeout(resolve, ms));
};

/**
 * 缓动函数
 */
export const easing = {
  easeInOut: (t: number): number => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t,
  easeOut: (t: number): number => t * (2 - t),
  easeIn: (t: number): number => t * t,
  elastic: (t: number): number => {
    const c4 = (2 * Math.PI) / 3;
    return t === 0 ? 0 : t === 1 ? 1 : -Math.pow(2, 10 * t - 10) * Math.sin((t * 10 - 10.75) * c4);
  },
};

// ============================================
// 本地存储工具
// ============================================

const STORAGE_KEY = 'code-geass-game';

export const storage = {
  save: (data: unknown): void => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    } catch (e) {
      console.error('Failed to save to localStorage:', e);
    }
  },

  load: <T>(): T | null => {
    try {
      const data = localStorage.getItem(STORAGE_KEY);
      return data ? JSON.parse(data) as T : null;
    } catch (e) {
      console.error('Failed to load from localStorage:', e);
      return null;
    }
  },

  clear: (): void => {
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch (e) {
      console.error('Failed to clear localStorage:', e);
    }
  },
};

// ============================================
// 随机工具
// ============================================

export const random = {
  /**
   * 生成指定范围内的随机整数
   */
  int: (min: number, max: number): number => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  },

  /**
   * 生成指定范围内的随机浮点数
   */
  float: (min: number, max: number): number => {
    return Math.random() * (max - min) + min;
  },

  /**
   * 从数组中随机选择一个元素
   */
  choice: <T>(arr: T[]): T => {
    return arr[Math.floor(Math.random() * arr.length)];
  },

  /**
   * 随机打乱数组
   */
  shuffle: <T>(arr: T[]): T[] => {
    const shuffled = [...arr];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  },
};
