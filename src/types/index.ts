/**
 * 类型定义索引文件
 */

// 从ai.types导出的类型
export type {
  AICardType,
  AICard,
  AIGameState,
  AIPlayer,
  AIActionType,
  AIGameAction,
  Difficulty,
  Personality,
  AIConfig,
  AIDecision,
  AIAnimationState,
  AIThought,
  StrategyContext,
  CardMemory,
  ChallengeRecord,
  PersonalityTraits,
} from './ai.types';

// 游戏类型
export type {
  CharacterId,
  ScreenType,
  AnimationState,
  GamePhase,
  CardSuit,
  CardRank,
  Card,
  Character,
  GameState,
  MainMenuProps,
  CharacterSelectProps,
  GameTableProps,
  ResultScreenProps,
  GeassResult,
  PlayerStats,
  FunnyAction,
} from './game.types';

export { FUNNY_ACTIONS } from './game.types';
