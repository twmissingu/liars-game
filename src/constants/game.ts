/**
 * 游戏核心常量
 * 集中管理所有游戏相关的魔法数字
 */

// ============================================
// 卡牌系统常量
// ============================================

/** 每点数卡牌数量（4花色 + 4小丑） */
export const CARDS_PER_RANK = 8;

/** 游戏使用的牌点数 */
export const GAME_RANKS = ['Q', 'K', 'A'] as const;

/** 卡牌花色 */
export const CARD_SUITS = ['spades', 'hearts', 'clubs', 'diamonds'] as const;

// ============================================
// Geass系统常量
// ============================================

/** 基础命中率：第一次33.3% */
export const GEASS_BASE_HIT_CHANCE_FIRST = 1 / 3;

/** 基础命中率：第二次50% */
export const GEASS_BASE_HIT_CHANCE_SECOND = 1 / 2;

/** 基础命中率：第三次及以上100% */
export const GEASS_BASE_HIT_CHANCE_THIRD = 1.0;

/** 命中率上下限 */
export const GEASS_HIT_CHANCE_MIN = 0.1;
export const GEASS_HIT_CHANCE_MAX = 0.9;

/** C.C.复活概率 */
export const CC_REVIVE_CHANCE = 0.5;

/** 朱雀反击概率 */
export const SUZAKU_COUNTER_CHANCE = 0.25;

/** 朱雀基础闪避率 */
export const SUZAKU_DODGE_CHANCE = 0.15;

/** 卡莲技能加成系数（每张牌20%） */
export const KALLEN_BOOST_PER_CARD = 0.2;

/** 卡莲技能加成上限 */
export const KALLEN_BOOST_MAX = 0.8;

// ============================================
// AI决策常量
// ============================================

/** 默认撒谎率（用于概率计算） */
export const DEFAULT_BLUFF_RATE = 0.3;

/** 质疑阈值基础值 */
export const CHALLENGE_THRESHOLD_BASE = -2;

/** 出牌阈值 */
export const PLAY_THRESHOLD = 0;

/** 决策置信度上限 */
export const MAX_CONFIDENCE = 0.95;

/** 决策置信度基础值（质疑） */
export const BASE_CHALLENGE_CONFIDENCE = 0.5;

/** 决策置信度基础值（出牌） */
export const BASE_PLAY_CONFIDENCE = 0.6;

// ============================================
// 游戏数值常量
// ============================================

/** 默认玩家血量 */
export const DEFAULT_HP = 3;

/** 最大玩家血量 */
export const MAX_HP = 4;

/** 玩家数量 */
export const PLAYER_COUNT = 4;

/** AI数量 */
export const AI_COUNT = 3;

// ============================================
// 动画时间常量（毫秒）
// ============================================

/** Geass动画充能阶段 */
export const GEASS_ANIMATION_CHARGE = 1500;

/** Geass动画释放阶段 */
export const GEASS_ANIMATION_RELEASE = 2500;

/** Geass动画结束 */
export const GEASS_ANIMATION_END = 3500;

/** 技能动画时长 */
export const SKILL_ANIMATION_DURATION = 2000;

/** 出牌动画时长 */
export const PLAY_CARD_ANIMATION_DURATION = 400;

/** 回合重置延迟 */
export const ROUND_RESET_DELAY = 2500;

/** AI行动延迟 */
export const AI_ACTION_DELAY = 1500;

// ============================================
// 玩家索引映射
// ============================================

/** UI顺序到玩家ID的映射 */
export const INDEX_TO_PLAYER_ID: Record<number, string> = {
  0: 'player',
  1: 'ai3',
  2: 'ai2',
  3: 'ai',
};

/** 玩家ID到UI索引的映射 */
export const PLAYER_ID_TO_INDEX: Record<string, number> = {
  player: 0,
  ai3: 1,
  ai2: 2,
  ai: 3,
};

/** AI数组索引映射（UI索引 -> 数组索引） */
export const AI_ARRAY_INDEX_MAP: Record<number, number> = {
  1: 2, // ai3 -> index 2
  2: 1, // ai2 -> index 1
  3: 0, // ai -> index 0
};
