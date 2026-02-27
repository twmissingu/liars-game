// 核心模块导出
export { CardSystem, cardSystem, type Card, type CardRank, type CardType } from './CardSystem';
export { GeassSystem, geassSystem, type GeassResult, type PlayerStats } from './GeassSystem';
export { 
  GameEngine, 
  gameEngine, 
  type GamePhase, 
  type GameState, 
  type TurnState, 
  type PlayedCards,
  type ChallengeResult 
} from './GameEngine';

// Phase 2: 角色系统集成
export {
  // 状态管理
  createCharacterGameState,
  selectCharacterForPlayer,
  getPlayerCharacterState,
  canPlayerUseCharacterSkill,
  playerUseCharacterSkill,
  endCharacterTurn,
  resetCharacterRound,
  // 角色技能
  activateAbsoluteOrder,
  tryGeassImmunity,
  calculateGeassChance,
  getPlayerMaxPlayCount,
  // 选择阶段
  createSelectionPhase,
  selectCharacterInPhase,
  confirmSelection,
  isAllReady,
  getSelectedCharacterIds,
  getSelectedPlayerIds,
  // 类型
  type CharacterGameState,
  type SelectionPhaseState,
} from './CharacterIntegration';
