/**
 * 策略索引文件
 * 导出所有AI策略
 */
export type { AIStrategy, StrategyFactory } from './StrategyInterface';
// 简化导出，避免类型问题
export { EasyStrategy } from './EasyStrategy';
export { NormalStrategy } from './NormalStrategy';
export { HardStrategy } from './HardStrategy';
