/**
 * =============================================================================
 * Code Geass: Liar's Game - 角色数据
 * =============================================================================
 * 
 * 定义游戏中所有角色的基础数据和技能
 * 
 * 角色列表：
 * - 鲁鲁修：绝对命令（强制改变骗子牌）
 * - C.C.：Code之力（复活）
 * - 朱雀：枢木剑术（闪避反击）
 * - 卡莲：红莲二式（多张出牌）
 * 
 * @author Code Agent
 * @version 2.0.0
 */

import type { Character, CharacterId, CharacterSkill } from '../types';

// ============================================
// 角色技能定义
// ============================================

/** 鲁鲁修技能：绝对命令 */
const lelouchSkill: CharacterSkill = {
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
  icon: '👁️',
};

/** C.C.技能：Code之力 */
const ccSkill: CharacterSkill = {
  id: 'code-power',
  name: 'Code之力',
  nameEn: 'Code Power',
  description: '首次受到致命伤害时，50%概率复活并免疫本次伤害',
  type: 'passive',
  target: 'self',
  maxUses: -1,
  cooldown: 0,
  effect: {
    type: 'geass-immunity',
    value: 0.5,
  },
  icon: '♾️',
};

/** 朱雀技能：枢木剑术 */
const suzakuSkill: CharacterSkill = {
  id: 'suzaku-sword',
  name: '枢木剑术',
  nameEn: 'Suzaku Sword',
  description: '受到Geass时25%概率反击，15%基础闪避率',
  type: 'passive',
  target: 'self',
  maxUses: -1,
  cooldown: 0,
  effect: {
    type: 'geass-resistance',
    value: 0.25,
  },
  icon: '🛡️',
};

/** 卡莲技能：红莲二式 */
const kallenSkill: CharacterSkill = {
  id: 'guren-assault',
  name: '红莲二式',
  nameEn: 'Guren Assault',
  description: '可出1-4张牌，出2张+被质疑且质疑失败，Geass命中率=20%×出牌张数',
  type: 'active',
  target: 'self',
  maxUses: -1,
  cooldown: 1,
  effect: {
    type: 'multi-play',
    value: 4,
  },
  icon: '⚡',
};

// ============================================
// 角色定义
// ============================================

/** 鲁鲁修 - 黑色骑士团领袖 */
export const lelouch: Character = {
  id: 'lelouch',
  name: '鲁鲁修',
  nameEn: 'Lelouch',
  nameJa: 'ルルーシュ',
  faction: 'black-knights',
  avatar: '🔮',
  color: '#8B00FF',
  description: '黑色骑士团的领袖，拥有绝对命令的Geass能力。可以强制指定一张牌为骗子牌。',
  skill: lelouchSkill,
  stats: {
    hp: 3,
    difficulty: 4,
  },
};

/** C.C. - 神秘魔女 */
export const cc: Character = {
  id: 'cc',
  name: 'C.C.',
  nameEn: 'C.C.',
  nameJa: 'シーツー',
  faction: 'neutral',
  avatar: '🧀',
  color: '#00FF88',
  description: '赋予鲁鲁修Geass的神秘少女，拥有不老不死的能力。有概率免疫Geass效果。',
  skill: ccSkill,
  stats: {
    hp: 3,
    difficulty: 2,
  },
};

/** 朱雀 - 枢木剑士 */
export const suzaku: Character = {
  id: 'suzaku',
  name: '朱雀',
  nameEn: 'Suzaku',
  nameJa: 'スザク',
  faction: 'britannia',
  avatar: '⚔️',
  color: '#0088FF',
  description: '布里塔尼亚的枢木朱雀，拥有惊人的生存能力。生命值低时更难被Geass命中。',
  skill: suzakuSkill,
  stats: {
    hp: 4, // 朱雀有额外生命值
    difficulty: 2,
  },
};

/** 卡莲 - 红莲驾驶员 */
export const kallen: Character = {
  id: 'kallen',
  name: '卡莲',
  nameEn: 'Kallen',
  nameJa: 'カレン',
  faction: 'black-knights',
  avatar: '🔥',
  color: '#FF0044',
  description: '黑色骑士团的王牌驾驶员，驾驶红莲贰式。可以一次性出多张牌进行突击。',
  skill: kallenSkill,
  stats: {
    hp: 3,
    difficulty: 3,
  },
};

// ============================================
// 角色集合
// ============================================

/** 所有角色映射表 */
export const characters: Record<CharacterId, Character> = {
  lelouch,
  cc,
  suzaku,
  kallen,
};

/** 角色列表 */
export const characterList: Character[] = [lelouch, cc, suzaku, kallen];

// ============================================
// 工具函数
// ============================================

/**
 * 获取角色数据
 * 
 * @param id - 角色ID
 * @returns 角色数据
 */
export function getCharacter(id: CharacterId): Character {
  return characters[id];
}

/**
 * 获取所有角色ID
 * 
 * @returns 角色ID数组
 */
export function getCharacterIds(): CharacterId[] {
  return Object.keys(characters) as CharacterId[];
}

/**
 * 获取角色名称
 * 
 * @param id - 角色ID
 * @returns 角色名称
 */
export function getCharacterName(id: CharacterId): string {
  return characters[id]?.name || id;
}

/**
 * 获取角色技能描述
 * 
 * @param id - 角色ID
 * @returns 技能描述
 */
export function getCharacterSkillDescription(id: CharacterId): string {
  const character = characters[id];
  if (!character) return '';
  return `${character.skill.name}：${character.skill.description}`;
}

/**
 * 获取角色颜色
 * 
 * @param id - 角色ID
 * @returns 角色主题色
 */
export function getCharacterColor(id: CharacterId): string {
  return characters[id]?.color || '#888888';
}
