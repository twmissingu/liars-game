/**
 * =============================================================================
 * Code Geass: Liar's Game - 核心模块导出
 * =============================================================================
 *
 * v3.0.0: 统一使用GameEngineV2，移除旧版引擎
 *
 * @author Code Agent
 * @version 3.0.0
 */

// 卡牌系统
export { CardSystem, cardSystem } from './CardSystem';

// Geass系统
export { GeassSystem, geassSystem } from './GeassSystem';

// 游戏引擎 - 统一使用V2版本
export { GameEngine } from './GameEngineV2';
