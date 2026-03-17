/**
 * 角色类型定义
 * Code Geass: Liar's Game - Phase 2
 *
 * 注意：此文件保留用于向后兼容，所有类型定义已移至 src/types/index.ts
 */

export type {
  CharacterId,
  CharacterFaction,
  Character,
  CharacterSkill,
  CharacterState,
  SkillType,
  SkillTarget,
  SkillEffect,
} from '../types';

// CharacterSelection类型 - 用于角色选择阶段
export interface CharacterSelection {
  playerId: string;
  characterId: import('../types').CharacterId;
  isReady: boolean;
  timestamp?: number;
}
