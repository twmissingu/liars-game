/**
 * 角色状态管理
 * Code Geass: Liar's Game - Phase 2
 */

import type { CharacterId, CharacterState } from '../types';
import { getCharacter } from './data';

/** 创建初始角色状态 */
export function createCharacterState(characterId: CharacterId): CharacterState {
  const character = getCharacter(characterId);
  // 处理无效的角色ID
  if (!character) {
    return {
      characterId,
      skillUsesRemaining: 0,
      cooldownRemaining: 0,
      isSkillActive: false,
    };
  }
  return {
    characterId,
    skillUsesRemaining: character.skill.maxUses,
    cooldownRemaining: 0,
    isSkillActive: false,
  };
}

/** 检查技能是否可用 */
export function canUseSkill(state: CharacterState): boolean {
  const character = getCharacter(state.characterId);

  // 处理无效的角色ID
  if (!character) {
    return false;
  }

  // 被动技能不能主动使用
  if (character.skill.type === 'passive') {
    return false;
  }

  // 检查使用次数
  if (character.skill.maxUses > 0 && state.skillUsesRemaining <= 0) {
    return false;
  }

  // 检查冷却
  if (state.cooldownRemaining > 0) {
    return false;
  }

  return true;
}

/** 使用技能 */
export function applySkill(state: CharacterState): CharacterState {
  if (!canUseSkill(state)) {
    return state;
  }

  const character = getCharacter(state.characterId);

  // 处理无效的角色ID
  if (!character) {
    return state;
  }

  return {
    ...state,
    skillUsesRemaining: character.skill.maxUses > 0 ? state.skillUsesRemaining - 1 : -1,
    cooldownRemaining: character.skill.cooldown,
    isSkillActive: true,
  };
}

/** 结束回合 - 处理冷却 */
export function onTurnEnd(state: CharacterState): CharacterState {
  return {
    ...state,
    cooldownRemaining: Math.max(0, state.cooldownRemaining - 1),
    isSkillActive: false, // 重置技能激活状态
  };
}

/** 重置技能（新一局） */
export function resetSkill(state: CharacterState): CharacterState {
  const character = getCharacter(state.characterId);
  // 处理无效的角色ID
  if (!character) {
    return {
      ...state,
      skillUsesRemaining: 0,
      cooldownRemaining: 0,
      isSkillActive: false,
    };
  }
  return {
    ...state,
    skillUsesRemaining: character.skill.maxUses,
    cooldownRemaining: 0,
    isSkillActive: false,
  };
}

/** 获取技能使用状态文本 */
export function getSkillStatusText(state: CharacterState): string {
  const character = getCharacter(state.characterId);

  // 处理无效的角色ID
  if (!character) {
    return '不可用';
  }

  if (character.skill.type === 'passive') {
    return '被动生效中';
  }

  if (state.cooldownRemaining > 0) {
    return `冷却中 (${state.cooldownRemaining})`;
  }

  if (character.skill.maxUses > 0 && state.skillUsesRemaining <= 0) {
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
  // 所有角色默认可以出1-3张牌
  // 卡莲特殊：可以出1-4张牌（当技能可用时）
  if (state.characterId === 'kallen' && canUseSkill(state)) {
    return 4;
  }

  return 3;
}

/** 鲁鲁修 - 检查是否可发动绝对命令 */
export function canUseAbsoluteOrder(state: CharacterState): boolean {
  if (state.characterId !== 'lelouch') return false;
  return canUseSkill(state);
}
