/**
 * 游戏状态管理 - 角色系统扩展 (Phase 2)
 * 使用 Zustand 管理角色系统状态
 * 
 * 与Phase 1的gameStore.ts配合使用
 */

import type { CharacterId, CharacterState } from '../characters/types';
import type { CharacterGameState, SelectionPhaseState } from '../core/CharacterIntegration';
import {
  createCharacterGameState,
  selectCharacterForPlayer,
  canPlayerUseCharacterSkill,
  playerUseCharacterSkill,
  endCharacterTurn,
  resetCharacterRound,
  activateAbsoluteOrder,
  tryGeassImmunity,
  calculateGeassChance,
  getPlayerMaxPlayCount,
  createSelectionPhase,
  selectCharacterInPhase,
  confirmSelection,
  isAllReady,
  getSelectedCharacterIds,
} from '../core/CharacterIntegration';

/** 角色Store状态 */
export interface CharacterStoreState {
  // 核心状态
  characterGameState: CharacterGameState;
  selectionPhase: SelectionPhaseState;
  
  // UI状态
  activeSkillEffect: { playerId: string; characterId: CharacterId } | null;
  
  // 玩家ID（当前用户）
  currentPlayerId: string | null;
}

/** 角色Store动作 */
export interface CharacterStoreActions {
  // 初始化
  initCharacterGame: () => void;
  setCurrentPlayer: (playerId: string) => void;
  
  // 角色选择
  selectCharacter: (characterId: CharacterId) => void;
  confirmCharacterSelection: () => void;
  getAvailableCharacters: () => CharacterId[];
  getSelectedCharacters: () => CharacterId[];
  isSelectionComplete: (playerCount: number) => boolean;
  
  // 技能使用
  canUseCharacterSkill: () => boolean;
  useCharacterSkill: () => boolean;
  activateSkillEffect: (playerId: string, characterId: CharacterId) => void;
  clearSkillEffect: () => void;
  
  // 回合管理
  endCharacterTurn: () => void;
  resetCharacterRound: () => void;
  
  // 角色特定技能
  useAbsoluteOrder: (targetCardId: string) => { success: boolean; forcedLiarCardId?: string };
  checkGeassImmunity: () => boolean;
  getGeassChance: (baseChance: number, currentHp: number) => number;
  getMaxPlayCount: () => number;
  
  // 查询
  getCharacterState: () => CharacterState | undefined;
  getPlayerCharacterState: (playerId: string) => CharacterState | undefined;
}

/** 创建初始Store状态 */
export function createInitialCharacterState(): CharacterStoreState {
  return {
    characterGameState: createCharacterGameState(),
    selectionPhase: createSelectionPhase(),
    activeSkillEffect: null,
    currentPlayerId: null,
  };
}

/** 
 * 创建CharacterStore（供Zustand使用）
 * 
 * 使用示例：
 * ```ts
 * import { create } from 'zustand';
 * import { createCharacterStore } from './store/CharacterStore';
 * 
 * export const useCharacterStore = create<CharacterStoreState & CharacterStoreActions>(
 *   createCharacterStore
 * );
 * ```
 */
export function createCharacterStore(
  set: (fn: (state: CharacterStoreState) => Partial<CharacterStoreState>) => void,
  get: () => CharacterStoreState
): CharacterStoreActions {
  return {
    // 初始化
    initCharacterGame: () => {
      set(() => createInitialCharacterState());
    },
    
    setCurrentPlayer: (playerId: string) => {
      set((state) => ({
        currentPlayerId: playerId,
      }));
    },
    
    // 角色选择
    selectCharacter: (characterId: CharacterId) => {
      const state = get();
      const playerId = state.currentPlayerId;
      if (!playerId) return;
      
      set((state) => ({
        selectionPhase: selectCharacterInPhase(
          state.selectionPhase,
          playerId,
          characterId
        ),
      }));
    },
    
    confirmCharacterSelection: () => {
      const state = get();
      const playerId = state.currentPlayerId;
      if (!playerId) return;
      
      const selection = state.selectionPhase.selections.get(playerId);
      if (!selection) return;
      
      set((state) => ({
        selectionPhase: confirmSelection(state.selectionPhase, playerId),
        characterGameState: selectCharacterForPlayer(
          state.characterGameState,
          playerId,
          selection.characterId
        ),
      }));
    },
    
    getAvailableCharacters: () => {
      return get().selectionPhase.availableCharacters;
    },
    
    getSelectedCharacters: () => {
      return getSelectedCharacterIds(get().selectionPhase);
    },
    
    isSelectionComplete: (playerCount: number) => {
      return isAllReady(get().selectionPhase, playerCount);
    },
    
    // 技能使用
    canUseCharacterSkill: () => {
      const state = get();
      const playerId = state.currentPlayerId;
      if (!playerId) return false;
      
      return canPlayerUseCharacterSkill(state.characterGameState, playerId);
    },
    
    useCharacterSkill: () => {
      const state = get();
      const playerId = state.currentPlayerId;
      if (!playerId) return false;
      
      const result = playerUseCharacterSkill(state.characterGameState, playerId);
      
      if (result.success) {
        set(() => ({
          characterGameState: result.state,
        }));
        
        // 触发技能特效
        if (result.characterId) {
          set(() => ({
            activeSkillEffect: {
              playerId,
              characterId: result.characterId!,
            },
          }));
        }
      }
      
      return result.success;
    },
    
    activateSkillEffect: (playerId: string, characterId: CharacterId) => {
      set(() => ({
        activeSkillEffect: { playerId, characterId },
      }));
    },
    
    clearSkillEffect: () => {
      set(() => ({
        activeSkillEffect: null,
      }));
    },
    
    // 回合管理
    endCharacterTurn: () => {
      const state = get();
      const playerId = state.currentPlayerId;
      if (!playerId) return;
      
      set((state) => ({
        characterGameState: endCharacterTurn(state.characterGameState, playerId),
      }));
    },
    
    resetCharacterRound: () => {
      set((state) => ({
        characterGameState: resetCharacterRound(state.characterGameState),
      }));
    },
    
    // 角色特定技能
    useAbsoluteOrder: (targetCardId: string) => {
      const state = get();
      const playerId = state.currentPlayerId;
      if (!playerId) return { success: false };
      
      const result = activateAbsoluteOrder(
        state.characterGameState,
        playerId,
        targetCardId
      );
      
      if (result.success) {
        set(() => ({
          characterGameState: result.state,
        }));
      }
      
      return {
        success: result.success,
        forcedLiarCardId: result.forcedLiarCardId,
      };
    },
    
    checkGeassImmunity: () => {
      const state = get();
      const playerId = state.currentPlayerId;
      if (!playerId) return false;
      
      const result = tryGeassImmunity(state.characterGameState, playerId);
      return result.immune;
    },
    
    getGeassChance: (baseChance: number, currentHp: number) => {
      const state = get();
      const playerId = state.currentPlayerId;
      if (!playerId) return baseChance;
      
      const result = calculateGeassChance(
        state.characterGameState,
        playerId,
        baseChance,
        currentHp
      );
      
      return result.chance;
    },
    
    getMaxPlayCount: () => {
      const state = get();
      const playerId = state.currentPlayerId;
      if (!playerId) return 1;
      
      const result = getPlayerMaxPlayCount(state.characterGameState, playerId);
      return result.count;
    },
    
    // 查询
    getCharacterState: () => {
      const state = get();
      const playerId = state.currentPlayerId;
      if (!playerId) return undefined;
      
      return state.characterGameState.playerStates.get(playerId);
    },
    
    getPlayerCharacterState: (playerId: string) => {
      return get().characterGameState.playerStates.get(playerId);
    },
  };
}