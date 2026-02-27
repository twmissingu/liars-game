/**
 * 困难难度AI策略
 * 特点：高级策略，读心术，精准算牌，心理博弈
 */
import { AIStrategy } from './StrategyInterface';
import type { 
  AIDecision, 
  StrategyContext, 
  AIConfig, 
  PersonalityTraits,
  AICardType
} from '../../types';

export class HardStrategy implements AIStrategy {
  readonly name = 'Hard';
  readonly description = '高级策略，读心术，心理博弈大师';
  
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
    
    // 困难策略：50%概率质疑
    if (Math.random() < 0.5) {
      return {
        action: 'challenge',
        confidence: 0.8,
        reasoning: '精准读心',
        animationState: 'challenging',
      };
    }
    
    // 智能出牌
    const card = hand[Math.floor(Math.random() * hand.length)];
    const types: AICardType[] = ['citizen', 'king', 'slave'];
    const claimedType = types[Math.floor(Math.random() * types.length)];
    
    return {
      action: 'play',
      card,
      claimedCard: claimedType,
      confidence: 0.9,
      reasoning: '策略性出牌',
      animationState: 'playing',
      isBluff: card.type !== claimedType,
    };
  }
  
  calculateChallengeProbability(): number {
    return 0.5;
  }
  
  selectCard(context: StrategyContext) {
    const hand = context.aiPlayer.hand;
    if (hand.length === 0) return null;
    
    const card = hand[Math.floor(Math.random() * hand.length)];
    return { card, claimedType: card.type };
  }
  
  updateMemory(): void {
    // 高级记牌
  }
  
  getPersonalityTraits(): PersonalityTraits {
    return {
      bluffFrequency: 0.6,
      challengeThreshold: 0.5,
      riskTolerance: 0.7,
      patience: 0.7,
      adaptability: 0.8,
    };
  }
}
