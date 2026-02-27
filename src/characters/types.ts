/**
 * 角色类型定义
 * Code Geass: Liar's Game - Phase 2
 */

/** 角色ID */
export type CharacterId = 'lelouch' | 'cc' | 'suzaku' | 'kallen';

/** 角色阵营 */
export type CharacterFaction = 'black-knights' | 'britannia' | 'neutral';

/** 技能类型 */
export type SkillType = 'active' | 'passive' | 'trigger';

/** 技能目标 */
export type SkillTarget = 'self' | 'enemy' | 'card' | 'none';

/** 技能效果 */
export interface SkillEffect {
  type: 'force-liar' | 'geass-immunity' | 'geass-resistance' | 'multi-play';
  value: number | boolean;
  duration?: number; // 持续回合数，undefined表示永久/即时
}

/** 角色技能定义 */
export interface CharacterSkill {
  id: string;
  name: string;
  nameEn: string;
  description: string;
  type: SkillType;
  target: SkillTarget;
  maxUses: number; // 每局最大使用次数，-1表示无限
  cooldown: number; // 冷却回合数，0表示无冷却
  effect: SkillEffect;
  icon: string; // 图标路径或emoji占位
}

/** 角色数据 */
export interface Character {
  id: CharacterId;
  name: string;
  nameEn: string;
  nameJa: string;
  faction: CharacterFaction;
  avatar: string; // 头像路径或颜色占位
  color: string; // 主题色
  description: string;
  skill: CharacterSkill;
  stats: {
    hp: number;
    difficulty: 1 | 2 | 3 | 4 | 5; // 操作难度
  };
}

/** 角色使用状态 */
export interface CharacterState {
  characterId: CharacterId;
  skillUsesLeft: number; // 剩余使用次数
  skillCooldown: number; // 当前冷却回合
  skillActive: boolean; // 技能是否激活中
  passiveActive: boolean; // 被动是否生效
}

/** 角色选择信息 */
export interface CharacterSelection {
  playerId: string;
  characterId: CharacterId;
  isReady: boolean;
}
