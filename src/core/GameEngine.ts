/**
 * =============================================================================
 * Code Geass: Liar's Game - GameEngine 兼容层
 * =============================================================================
 *
 * 为了兼容旧测试文件，重新导出 GameEngineV2
 *
 * @author Code Agent
 * @version 1.0.0
 */

// 重新导出 GameEngineV2 的所有内容
export { GameEngine } from './GameEngineV2';

// 为了保持兼容性，也导出类型
export type {
  GameState,
  AIPlayer,
  PlayedCards,
  TurnState,
  GeassResult,
} from '../types';

// 导出游戏阶段枚举
export enum GamePhase {
  SETUP = 'setup',
  PLAYER_TURN = 'player_turn',
  AI_TURN = 'ai_turn',
  CHALLENGE = 'challenge',
  GEASS = 'geass',
  GAME_OVER = 'game_over',
}
