/**
 * 角色状态管理
 * Code Geass: Liar's Game - Phase 2
 */

import type { CharacterId, CharacterState } from './types';
import { getCharacter } from './data';

/** 创建初始角色状态 */
export function createCharacterState(characterId: CharacterId): CharacterState {
  const character = getCharacter(characterId);
  return {
    characterId,
    skillUsesLeft: character.skill.maxUses,
    skillCooldown: 0,
    skillActive: false,
    passiveActive: character.skill.type === 'passive',
  };
}

/** 检查技能是否可用 */
export function canUseSkill(state: CharacterState): boolean {
  const character = getCharacter(state.characterId);
  
  // 被动技能不能主动使用
  if (character.skill.type === 'passive') {
    return false;
  }
  
  // 检查使用次数
  if (character.skill.maxUses > 0 && state.skillUsesLeft <= 0) {
    return false;
  }
  
  // 检查冷却
  if (state.skillCooldown > 0) {
    return false;
  }
  
  return true;
}

/** 使用技能 */
export function useSkill(state: CharacterState): CharacterState {
  if (!canUseSkill(state)) {
    return state;
  }
  
  const character = getCharacter(state.characterId);
  
  return {
    ...state,
    skillUsesLeft: character.skill.maxUses > 0 
      ? state.skillUsesLeft - 1 
      : -1,
    skillCooldown: character.skill.cooldown,
    skillActive: true,
  };
}

/** 结束回合 - 处理冷却 */
export function onTurnEnd(state: CharacterState): CharacterState {
  return {
    ...state,
    skillCooldown: Math.max(0, state.skillCooldown - 1),
    skillActive: false, // 重置技能激活状态
  };
}

/** 重置技能（新一局） */
export function resetSkill(state: CharacterState): CharacterState {
  const character = getCharacter(state.characterId);
  return {
    ...state,
    skillUsesLeft: character.skill.maxUses,
    skillCooldown: 0,
    skillActive: false,
  };
}

/** 获取技能使用状态文本 */
export function getSkillStatusText(state: CharacterState): string {
  const character = getCharacter(state.characterId);
  
  if (character.skill.type === 'passive') {
    return '被动生效中';
  }
  
  if (state.skillCooldown > 0) {
    return `冷却中 (${state.skillCooldown})`;
  }
  
  if (character.skill.maxUses > 0 && state.skillUsesLeft <= 0) {
    return '已用完';
  }
  
  return '可使用';
}

/** C.C. - 检查Geass免疫 */
export function checkGeassImmunity(state: CharacterState): boolean {
  if (state.characterId !== 'cc') return false;
  
  // 50%概率免疫
  return Math.random() < 0.5;
}

/** 朱雀 - 获取Geass抗性倍率 */
export function getGeassResistance(state: CharacterState, currentHp: number): number {
  if (state.characterId !== 'suzaku') return 1;
  
  // 生命值≤1时，概率减半
  if (currentHp <= 1) {
    return 0.5;
  }
  
  return 1;
}

/** 卡莲 - 获取最大出牌数 */
export function getMaxPlayCount(state: CharacterState): number {
  if (state.characterId !== 'kallen') return 1;
  
  // 检查技能是否可用
  if (!canUseSkill(state)) return 1;
  
  return 4;
}

/** 鲁鲁修 - 检查是否可发动绝对命令 */
export function canUseAbsoluteOrder(state: CharacterState): boolean {
  if (state.characterId !== 'lelouch') return false;
  return canUseSkill(state);
}
