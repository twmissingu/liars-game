/**
 * 游戏引擎 - 角色系统集成
 * Code Geass: Liar's Game - Phase 2
 * 
 * 与Phase 1游戏引擎对接 - 扩展版本
 */

import type { 
  CharacterId, 
  CharacterState, 
  CharacterSelection 
} from '../characters/types';
import { 
  createCharacterState, 
  canUseSkill, 
  applySkill,
  onTurnEnd,
  resetSkill,
  checkGeassImmunity,
  getGeassResistance,
  getMaxPlayCount,
  canUseAbsoluteOrder,
} from '../characters/state';

// ==================== 角色状态管理 ====================

/** 
 * 角色游戏状态 - 扩展GameState 
 * 与Phase 1的GameState兼容
 */
export interface CharacterGameState {
  /** 玩家角色状态映射 */
  playerStates: Map<string, CharacterState>;
}

/** 创建角色游戏状态 */
export function createCharacterGameState(): CharacterGameState {
  return {
    playerStates: new Map(),
  };
}

/** 玩家选择角色 */
export function selectCharacterForPlayer(
  state: CharacterGameState,
  playerId: string,
  characterId: CharacterId
): CharacterGameState {
  const characterState = createCharacterState(characterId);
  
  const newPlayerStates = new Map(state.playerStates);
  newPlayerStates.set(playerId, characterState);
  
  return {
    ...state,
    playerStates: newPlayerStates,
  };
}

/** 获取玩家角色状态 */
export function getPlayerCharacterState(
  state: CharacterGameState,
  playerId: string
): CharacterState | undefined {
  return state.playerStates.get(playerId);
}

/** 检查玩家是否可以使用技能 */
export function canPlayerUseCharacterSkill(
  state: CharacterGameState,
  playerId: string
): boolean {
  const playerState = state.playerStates.get(playerId);
  if (!playerState) return false;
  
  return canUseSkill(playerState);
}

/** 玩家使用技能 */
export function playerUseCharacterSkill(
  state: CharacterGameState,
  playerId: string
): { state: CharacterGameState; success: boolean; characterId?: CharacterId } {
  const playerState = state.playerStates.get(playerId);
  if (!playerState) {
    return { state, success: false };
  }
  
  if (!canUseSkill(playerState)) {
    return { state, success: false };
  }
  
  const newState = applySkill(playerState);
  const newPlayerStates = new Map(state.playerStates);
  newPlayerStates.set(playerId, newState);
  
  return {
    state: {
      ...state,
      playerStates: newPlayerStates,
    },
    success: true,
    characterId: playerState.characterId,
  };
}

/** 结束回合 - 处理角色冷却 */
export function endCharacterTurn(state: CharacterGameState, playerId: string): CharacterGameState {
  const playerState = state.playerStates.get(playerId);
  if (!playerState) return state;
  
  const newState = onTurnEnd(playerState);
  const newPlayerStates = new Map(state.playerStates);
  newPlayerStates.set(playerId, newState);
  
  return {
    ...state,
    playerStates: newPlayerStates,
  };
}

/** 开始新一局 - 重置所有技能 */
export function resetCharacterRound(state: CharacterGameState): CharacterGameState {
  const newPlayerStates = new Map<string, CharacterState>();
  
  state.playerStates.forEach((playerState, playerId) => {
    newPlayerStates.set(playerId, resetSkill(playerState));
  });
  
  return {
    ...state,
    playerStates: newPlayerStates,
  };
}

// ==================== 角色特定技能集成 ====================

/** 
 * 鲁鲁修 - 发动绝对命令
 * 强制指定一张牌为骗子牌
 */
export function activateAbsoluteOrder(
  state: CharacterGameState,
  playerId: string,
  targetCardId: string
): { state: CharacterGameState; success: boolean; forcedLiarCardId?: string } {
  const playerState = state.playerStates.get(playerId);
  if (!playerState || playerState.characterId !== 'lelouch') {
    return { state, success: false };
  }
  
  if (!canUseAbsoluteOrder(playerState)) {
    return { state, success: false };
  }
  
  // 使用技能
  const result = playerUseCharacterSkill(state, playerId);
  if (!result.success) {
    return { state, success: false };
  }
  
  return {
    state: result.state,
    success: true,
    forcedLiarCardId: targetCardId,
  };
}

/**
 * C.C. - 尝试免疫Geass
 * 返回是否免疫成功
 */
export function tryGeassImmunity(
  state: CharacterGameState,
  playerId: string
): { state: CharacterGameState; immune: boolean } {
  const playerState = state.playerStates.get(playerId);
  if (!playerState || playerState.characterId !== 'cc') {
    return { state, immune: false };
  }
  
  const immune = checkGeassImmunity(playerState);
  
  return { state, immune };
}

/**
 * 朱雀 - 计算Geass命中概率
 * 考虑生存本能的减益效果
 */
export function calculateGeassChance(
  state: CharacterGameState,
  playerId: string,
  baseChance: number,
  currentHp: number
): { state: CharacterGameState; chance: number } {
  const playerState = state.playerStates.get(playerId);
  if (!playerState) {
    return { state, chance: baseChance };
  }
  
  const resistance = getGeassResistance(playerState, currentHp);
  const chance = baseChance * resistance;
  
  return { state, chance };
}

/**
 * 卡莲 - 获取当前可出牌数量
 */
export function getPlayerMaxPlayCount(
  state: CharacterGameState,
  playerId: string
): { state: CharacterGameState; count: number } {
  const playerState = state.playerStates.get(playerId);
  if (!playerState) {
    return { state, count: 1 };
  }
  
  const count = getMaxPlayCount(playerState);
  
  return { state, count };
}

// ==================== 角色选择界面状态 ====================

/** 选择阶段状态 */
export interface SelectionPhaseState {
  selections: Map<string, CharacterSelection>;
  availableCharacters: CharacterId[];
}

/** 创建选择阶段状态 */
export function createSelectionPhase(): SelectionPhaseState {
  return {
    selections: new Map(),
    availableCharacters: ['lelouch', 'cc', 'suzaku', 'kallen'],
  };
}

/** 玩家选择角色（选择阶段） */
export function selectCharacterInPhase(
  phaseState: SelectionPhaseState,
  playerId: string,
  characterId: CharacterId
): SelectionPhaseState {
  const newSelections = new Map(phaseState.selections);
  newSelections.set(playerId, {
    playerId,
    characterId,
    isReady: false,
  });
  
  return {
    ...phaseState,
    selections: newSelections,
  };
}

/** 玩家确认选择 */
export function confirmSelection(
  phaseState: SelectionPhaseState,
  playerId: string
): SelectionPhaseState {
  const selection = phaseState.selections.get(playerId);
  if (!selection) return phaseState;
  
  const newSelections = new Map(phaseState.selections);
  newSelections.set(playerId, {
    ...selection,
    isReady: true,
  });
  
  // 从未可用列表中移除
  const newAvailable = phaseState.availableCharacters.filter(
    id => id !== selection.characterId
  );
  
  return {
    selections: newSelections,
    availableCharacters: newAvailable,
  };
}

/** 检查是否所有玩家都准备就绪 */
export function isAllReady(
  phaseState: SelectionPhaseState,
  playerCount: number
): boolean {
  if (phaseState.selections.size !== playerCount) return false;
  
  for (const selection of phaseState.selections.values()) {
    if (!selection.isReady) return false;
  }
  
  return true;
}

/** 获取已选择的角色ID列表 */
export function getSelectedCharacterIds(
  phaseState: SelectionPhaseState
): CharacterId[] {
  return Array.from(phaseState.selections.values())
    .map(s => s.characterId);
}

/** 获取已选择的玩家ID列表 */
export function getSelectedPlayerIds(
  phaseState: SelectionPhaseState
): string[] {
  return Array.from(phaseState.selections.keys());
}
