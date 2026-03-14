/**
 * =============================================================================
 * Code Geass: Liar's Game - AI策略接口
 * =============================================================================
 *
 * 定义AI策略的标准接口，所有策略实现必须遵循此接口
 *
 * @author Code Agent
 * @version 2.0.0
 */

import type { AIDecision, StrategyContext, AIConfig, PersonalityTraits } from '../../types';

/**
 * AI策略接口
 * 所有AI难度策略必须实现此接口
 */
export interface AIStrategy {
  /** 策略名称 */
  readonly name: string;

  /** 策略描述 */
  readonly description: string;

  /**
   * 做出决策
   *
   * @param context - 策略上下文
   * @param config - AI配置
   * @returns AI决策结果
   */
  makeDecision(context: StrategyContext, config: AIConfig): AIDecision;

  /**
   * 计算质疑概率
   *
   * @param context - 策略上下文
   * @returns 质疑概率 0-1
   */
  calculateChallengeProbability(context: StrategyContext): number;

  /**
   * 选择要出的牌
   *
   * @param context - 策略上下文
   * @returns 选择的牌和声称的点数
   */
  selectCard(context: StrategyContext): {
    cardIds: string[];
    claimedRank: string;
    isBluff: boolean;
  } | null;

  /**
   * 更新记忆（算牌）
   *
   * @param context - 策略上下文
   */
  updateMemory(context: StrategyContext): void;

  /**
   * 获取性格特征
   *
   * @param personality - 性格类型
   * @returns 性格特征参数
   */
  getPersonalityTraits(personality: string): PersonalityTraits;
}
