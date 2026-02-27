/**
 * AI策略接口定义
 * 所有AI策略必须实现此接口
 */
import { AIDecision, StrategyContext, AIConfig, PersonalityTraits } from '../../types';

export interface AIStrategy {
  readonly name: string;
  readonly description: string;
  
  /**
   * 做出决策
   * @param context 策略上下文
   * @param config AI配置
   * @returns AI决策结果
   */
  makeDecision(context: StrategyContext, config: AIConfig): AIDecision;
  
  /**
   * 计算质疑概率
   * @param context 策略上下文
   * @param lastAction 上一个动作
   * @returns 质疑概率 0-1
   */
  calculateChallengeProbability(context: StrategyContext): number;
  
  /**
   * 选择要打出的卡牌
   * @param context 策略上下文
   * @returns 选择的卡牌和声称的类型
   */
  selectCard(context: StrategyContext): { card: any; claimedType: any } | null;
  
  /**
   * 更新算牌记忆
   * @param context 策略上下文
   */
  updateMemory(context: StrategyContext): void;
  
  /**
   * 获取性格参数
   * @param personality 性格类型
   * @returns 性格特质参数
   */
  getPersonalityTraits(personality: string): PersonalityTraits;
}

/**
 * 策略工厂接口
 */
export interface StrategyFactory {
  createStrategy(difficulty: string): AIStrategy;
}
