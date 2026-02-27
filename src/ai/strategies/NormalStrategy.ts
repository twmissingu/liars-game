/**
 * 普通难度AI策略
 * 特点：基础算牌，合理质疑，有一定策略性
 */
import { AIStrategy } from './StrategyInterface';
import type { 
  AIDecision, 
  StrategyContext, 
  AIConfig, 
  PersonalityTraits,
  AICardType
} from '../../types';

export class NormalStrategy implements AIStrategy {
  readonly name = 'Normal';
  readonly description = '基础算牌，合理质疑，有策略性';
  
  private memory: any = {};
  
  makeDecision(context: StrategyContext, config: AIConfig): AIDecision {
    const hand = context.aiPlayer.hand;
    
    if (hand.length === 0) {
      return {
        action: 'pass',
        confidence: 0,
        reasoning: '无牌可出',
        animationState: 'playing',
      };
    }
    
    // 简单策略：30%概率质疑
    if (Math.random() < 0.3) {
      return {
        action: 'challenge',
        confidence: 0.6,
        reasoning: '根据局势质疑',
        animationState: 'challenging',
      };
    }
    
    // 出牌
    const card = hand[0];
    return {
      action: 'play',
      card,
      claimedCard: card.type as AICardType,
      confidence: 0.7,
      reasoning: '正常出牌',
      animationState: 'playing',
      isBluff: false,
    };
  }
  
  calculateChallengeProbability(): number {
    return 0.4;
  }
  
  selectCard(context: StrategyContext) {
    const hand = context.aiPlayer.hand;
    if (hand.length === 0) return null;
    
    const card = hand[0];
    return { card, claimedType: card.type };
  }
  
  updateMemory(): void {
    // 基础记牌
  }
  
  getPersonalityTraits(): PersonalityTraits {
    return {
      bluffFrequency: 0.4,
      challengeThreshold: 0.6,
      riskTolerance: 0.6,
      patience: 0.6,
      adaptability: 0.5,
    };
  }
}
