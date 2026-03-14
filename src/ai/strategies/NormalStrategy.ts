/**
 * =============================================================================
 * Code Geass: Liar's Game - 普通难度AI策略
 * =============================================================================
 * 
 * 特点：基础算牌，合理质疑，有一定策略性
 * 适合大多数玩家
 * 
 * @author Code Agent
 * @version 2.0.0
 */

import { AIStrategy } from './StrategyInterface';
import type { 
  AIDecision, 
  StrategyContext, 
  AIConfig, 
  PersonalityTraits,
  AIAnimationState,
  CardRank,
} from '../../types';

export class NormalStrategy implements AIStrategy {
  readonly name = 'Normal';
  readonly description = '基础算牌，合理质疑，有策略性';
  
  /** 记忆存储 */
  private memory: {
    playedCards: string[];
    challengeHistory: Array<{
      round: number;
      challenger: string;
      wasLie: boolean;
    }>;
  } = {
    playedCards: [],
    challengeHistory: [],
  };

  /**
   * 做出决策
   */
  makeDecision(
    context: StrategyContext, 
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    config: AIConfig
  ): AIDecision {
    // 决定是否质疑
    const challengeProb = this.calculateChallengeProbability(context);
    const shouldChallenge = Math.random() < challengeProb;
    
    if (shouldChallenge) {
      return {
        action: 'challenge',
        confidence: 0.6 + Math.random() * 0.3,
        reasoning: '根据局势质疑',
        animationState: 'challenging' as AIAnimationState,
      };
    }
    
    // 选择出牌
    const cardSelection = this.selectCard(context);
    
    if (cardSelection) {
      return {
        action: 'play',
        cardIds: cardSelection.cardIds,
        claimedRank: cardSelection.claimedRank as CardRank,
        confidence: 0.7,
        reasoning: cardSelection.isBluff ? '策略性虚张声势' : '正常出牌',
        animationState: 'playing' as AIAnimationState,
        isBluff: cardSelection.isBluff,
      };
    }
    
    return {
      action: 'pass',
      confidence: 0.5,
      reasoning: '无牌可出',
      animationState: 'playing' as AIAnimationState,
    };
  }
  
  /**
   * 计算质疑概率
   * 普通策略：根据多种因素综合判断
   */
  calculateChallengeProbability(context: StrategyContext): number {
    const traits = this.getPersonalityTraits('balanced');
    let probability = 0.3;
    
    const playedCards = context.gameState.turnState.playedCards;
    if (!playedCards) return 0;
    
    // 根据出牌数量调整
    const cardCount = playedCards.cardIds.length;
    if (cardCount >= 3) probability += 0.25;
    else if (cardCount === 2) probability += 0.1;
    
    // 根据AI血条调整
    const aiHP = context.aiPlayer.stats.hp;
    if (aiHP === 1) probability -= 0.15;
    else if (aiHP >= 3) probability += 0.1;
    
    // 根据历史记录调整
    const recentChallenges = this.memory.challengeHistory.slice(-3);
    const successRate = recentChallenges.filter(c => c.wasLie).length / 
      (recentChallenges.length || 1);
    if (successRate > 0.5) probability += 0.1;
    
    // 应用性格影响
    probability *= (2 - traits.challengeThreshold);
    
    return Math.max(0.1, Math.min(0.9, probability));
  }
  
  /**
   * 选择要出的牌
   * 普通策略：优先出骗子牌，没有则考虑是否撒谎
   */
  selectCard(context: StrategyContext): { 
    cardIds: string[]; 
    claimedRank: string;
    isBluff: boolean;
  } | null {
    const hand = context.aiPlayer.hand;
    const liarCard = context.liarCard;
    
    if (hand.length === 0) return null;
    
    // 分类手牌
    const liarCards = hand.filter(c => c.rank === liarCard || c.isJoker);
    const otherCards = hand.filter(c => c.rank !== liarCard && !c.isJoker);
    
    // 优先出骗子牌
    if (liarCards.length > 0 && Math.random() > 0.3) {
      const card = liarCards[0];
      return {
        cardIds: [card.id],
        claimedRank: liarCard,
        isBluff: false,
      };
    }
    
    // 出其他牌（撒谎）
    if (otherCards.length > 0) {
      const card = otherCards[0];
      return {
        cardIds: [card.id],
        claimedRank: liarCard,
        isBluff: true,
      };
    }
    
    // 保底选择
    const card = hand[0];
    return {
      cardIds: [card.id],
      claimedRank: liarCard,
      isBluff: card.rank !== liarCard,
    };
  }
  
  /**
   * 更新记忆
   */
  updateMemory(context: StrategyContext): void {
    const playedCards = context.gameState.turnState.playedCards;
    if (playedCards) {
      this.memory.playedCards.push(...playedCards.cardIds);
    }
  }
  
  /**
   * 获取性格特征
   */
  getPersonalityTraits(personality: string): PersonalityTraits {
    const traits: Record<string, PersonalityTraits> = {
      aggressive: {
        bluffFrequency: 0.7,
        challengeThreshold: 0.4,
        riskTolerance: 0.8,
        patience: 0.3,
        adaptability: 0.5,
      },
      conservative: {
        bluffFrequency: 0.2,
        challengeThreshold: 0.8,
        riskTolerance: 0.3,
        patience: 0.8,
        adaptability: 0.4,
      },
      balanced: {
        bluffFrequency: 0.5,
        challengeThreshold: 0.6,
        riskTolerance: 0.6,
        patience: 0.6,
        adaptability: 0.6,
      },
    };
    
    return traits[personality] || traits.balanced;
  }
}
