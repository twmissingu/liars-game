/**
 * 简单难度AI策略
 * 特点：随机出牌，随机质疑，无算牌能力
 */
import { AIStrategy } from './StrategyInterface';
import type { 
  AIDecision, 
  StrategyContext, 
  AIConfig, 
  PersonalityTraits,
  AIAnimationState,
  AICardType
} from '../../types';

export class EasyStrategy implements AIStrategy {
  readonly name = 'Easy';
  readonly description = '随机出牌，随机质疑，适合新手';
  
  private memory: Map<string, any> = new Map();
  
  makeDecision(context: StrategyContext, config: AIConfig): AIDecision {
    const shouldChallenge = Math.random() < 0.3;
    
    if (shouldChallenge) {
      return {
        action: 'challenge',
        confidence: Math.random(),
        reasoning: '随机质疑',
        animationState: 'challenging' as AIAnimationState,
      };
    }
    
    const aiPlayer = context.aiPlayer;
    if (aiPlayer.hand.length > 0) {
      const randomCard = aiPlayer.hand[Math.floor(Math.random() * aiPlayer.hand.length)];
      const types: AICardType[] = ['citizen', 'king', 'slave'];
      const randomType = types[Math.floor(Math.random() * types.length)];
      
      return {
        action: 'play',
        card: randomCard,
        claimedCard: randomType,
        confidence: 0.5,
        reasoning: '随机出牌',
        animationState: 'playing' as AIAnimationState,
        isBluff: randomCard.type !== randomType,
      };
    }
    
    return {
      action: 'pass',
      confidence: 0.5,
      reasoning: '无牌可出',
      animationState: 'playing' as AIAnimationState,
    };
  }
  
  calculateChallengeProbability(): number {
    return 0.3;
  }
  
  selectCard(context: StrategyContext) {
    const hand = context.aiPlayer.hand;
    if (hand.length === 0) return null;
    
    const card = hand[Math.floor(Math.random() * hand.length)];
    return { card, claimedType: card.type };
  }
  
  updateMemory(): void {
    // 简单策略不记牌
  }
  
  getPersonalityTraits(personality: string): PersonalityTraits {
    return {
      bluffFrequency: 0.5,
      challengeThreshold: 0.7,
      riskTolerance: 0.5,
      patience: 0.5,
      adaptability: 0.3,
    };
  }
}
