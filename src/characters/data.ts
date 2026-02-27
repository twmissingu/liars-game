/**
 * 角色数据定义
 * Code Geass: Liar's Game - Phase 2
 */

import type { Character, CharacterId } from './types';

/** 鲁鲁修 - 绝对命令 */
export const lelouch: Character = {
  id: 'lelouch',
  name: '鲁鲁修',
  nameEn: 'Lelouch',
  nameJa: 'ルルーシュ',
  faction: 'black-knights',
  avatar: '🔮', // Q版占位：紫色水晶/面具
  color: '#8B00FF', // Geass紫色
  description: '黑色骑士团的领袖，拥有绝对命令的Geass能力。可以强制指定一张牌为骗子牌。',
  skill: {
    id: 'absolute-order',
    name: '绝对命令',
    nameEn: 'Absolute Order',
    description: '每局游戏限1次，强制指定一张牌为骗子牌（无论实际是什么牌）',
    type: 'active',
    target: 'card',
    maxUses: 1,
    cooldown: 0,
    effect: {
      type: 'force-liar',
      value: true,
    },
    icon: '👁️', // Geass之眼
  },
  stats: {
    hp: 3,
    difficulty: 4,
  },
};

/** C.C. - 不老不死 */
export const cc: Character = {
  id: 'cc',
  name: 'C.C.',
  nameEn: 'C.C.',
  nameJa: 'シーツー',
  faction: 'neutral',
  avatar: '🧀', // Q版占位：绿色长发/披萨
  color: '#00FF88', // 契约绿
  description: '赋予鲁鲁修Geass的神秘少女，拥有不老不死的能力。有概率免疫Geass效果。',
  skill: {
    id: 'immortal',
    name: '不老不死',
    nameEn: 'Immortal',
    description: '被动技能：当被Geass命中时，有50%概率免疫该效果',
    type: 'passive',
    target: 'self',
    maxUses: -1, // 无限触发
    cooldown: 0,
    effect: {
      type: 'geass-immunity',
      value: 0.5, // 50%概率
    },
    icon: '♾️', // 无限符号
  },
  stats: {
    hp: 3,
    difficulty: 2,
  },
};

/** 朱雀 - 生存本能 */
export const suzaku: Character = {
  id: 'suzaku',
  name: '朱雀',
  nameEn: 'Suzaku',
  nameJa: 'スザク',
  faction: 'britannia',
  avatar: '⚔️', // Q版占位：蓝色骑士
  color: '#0088FF', // 骑士蓝
  description: '布里塔尼亚的枢木朱雀，拥有惊人的生存能力。生命值低时更难被Geass命中。',
  skill: {
    id: 'survival-instinct',
    name: '生存本能',
    nameEn: 'Survival Instinct',
    description: '被动技能：当生命值≤1时，被Geass命中的概率减半',
    type: 'passive',
    target: 'self',
    maxUses: -1,
    cooldown: 0,
    effect: {
      type: 'geass-resistance',
      value: 0.5, // 概率减半
    },
    icon: '🛡️', // 盾牌
  },
  stats: {
    hp: 4, // 额外生命值
    difficulty: 2,
  },
};

/** 卡莲 - 红莲突击 */
export const kallen: Character = {
  id: 'kallen',
  name: '卡莲',
  nameEn: 'Kallen',
  nameJa: 'カレン',
  faction: 'black-knights',
  avatar: '🔥', // Q版占位：红色机甲/火焰
  color: '#FF0044', // 红莲红
  description: '黑色骑士团的王牌驾驶员，驾驶红莲贰式。可以一次性出多张牌进行突击。',
  skill: {
    id: 'guren-assault',
    name: '红莲突击',
    nameEn: 'Guren Assault',
    description: '主动技能：出牌阶段可以出1-4张牌（正常为1张）',
    type: 'active',
    target: 'self',
    maxUses: -1, // 每回合可用
    cooldown: 1, // 每回合冷却
    effect: {
      type: 'multi-play',
      value: 4, // 最多4张
    },
    icon: '⚡', // 闪电
  },
  stats: {
    hp: 3,
    difficulty: 3,
  },
};

/** 所有角色映射 */
export const characters: Record<CharacterId, Character> = {
  lelouch,
  cc,
  suzaku,
  kallen,
};

/** 角色列表 */
export const characterList: Character[] = [lelouch, cc, suzaku, kallen];

/** 获取角色数据 */
export function getCharacter(id: CharacterId): Character {
  return characters[id];
}

/** 获取所有角色ID */
export function getCharacterIds(): CharacterId[] {
  return Object.keys(characters) as CharacterId[];
}
