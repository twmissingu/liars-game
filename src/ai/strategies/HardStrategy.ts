/**
 * =============================================================================
 * Code Geass: Liar's Game - 困难难度AI策略
 * =============================================================================
 * 
 * 特点：高级策略，精准算牌，心理博弈
 * 适合追求挑战的玩家
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
  Card,
} from '../../types';

export class HardStrategy implements AIStrategy {
  readonly name = 'Hard';
  readonly description = '高级策略，精准算牌，心理博弈大师';
  
  /** 记忆存储 */
  private memory: {
    playedCards: Map<string, number>;
    playerPatterns: Map<string, {
      bluffRate: number;
      challengeRate: number;
    }>;
    challengeHistory: Array<{
      round: number;
      challenger: string;
      wasLie: boolean;
    }>;
  } = {
    playedCards: new Map(),
    playerPatterns: new Map(),
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
    // 高级质疑决策
    const challengeProb = this.calculateChallengeProbability(context);
    const shouldChallenge = Math.random() < challengeProb;
    
    if (shouldChallenge) {
      const confidence = this.calculateChallengeConfidence(context);
      return {
        action: 'challenge',
        confidence,
        reasoning: this.getChallengeReason(context),
        animationState: 'challenging' as AIAnimationState,
      };
    }
    
    // 智能出牌
    const cardSelection = this.selectCard(context);
    
    if (cardSelection) {
      const confidence = cardSelection.isBluff ? 0.8 : 0.9;
      return {
        action: 'play',
        cardIds: cardSelection.cardIds,
        claimedRank: cardSelection.claimedRank as CardRank,
        confidence,
        reasoning: cardSelection.isBluff ? '精准读心，策略性虚张声势' : '最优出牌',
        animationState: 'playing' as AIAnimationState,
        isBluff: cardSelection.isBluff,
      };
    }
    
    return {
      action: 'pass',
      confidence: 0.5,
      reasoning: '战略保留',
      animationState: 'playing' as AIAnimationState,
    };
  }
  
  /**
   * 计算质疑概率
   * 困难策略：多因素综合判断
   */
  calculateChallengeProbability(context: StrategyContext): number {
    const traits = this.getPersonalityTraits('balanced');
    let probability = 0.4;
    
    const playedCards = context.gameState.turnState.playedCards;
    if (!playedCards) return 0;
    
    // 出牌数量分析
    const cardCount = playedCards.cardIds.length;
    if (cardCount >= 3) probability += 0.3;
    else if (cardCount === 2) probability += 0.15;
    
    // 剩余牌分析（算牌）
    const remainingLiarCards = this.calculateRemainingLiarCards(context);
    const totalRemaining = this.calculateTotalRemainingCards(context);
    if (totalRemaining > 0) {
      const liarCardRatio = remainingLiarCards / totalRemaining;
      // 如果骗子牌比例低，对方更可能在撒谎
      if (liarCardRatio < 0.2) probability += 0.2;
    }
    
    // AI血条分析
    const aiHP = context.aiPlayer.stats.hp;
    if (aiHP === 1) probability -= 0.2;
    else if (aiHP >= 3) probability += 0.1;
    
    // 历史成功率
    const recentChallenges = this.memory.challengeHistory.slice(-5);
    if (recentChallenges.length >= 3) {
      const successRate = recentChallenges.filter(c => c.wasLie).length / recentChallenges.length;
      probability += (successRate - 0.5) * 0.2;
    }
    
    // 应用性格影响
    probability *= (2 - traits.challengeThreshold);
    
    return Math.max(0.1, Math.min(0.9, probability));
  }
  
  /**
   * 计算质疑信心度
   */
  private calculateChallengeConfidence(context: StrategyContext): number {
    const baseConfidence = 0.7;
    const playedCards = context.gameState.turnState.playedCards;
    
    if (!playedCards) return baseConfidence;
    
    // 根据出牌数量调整信心
    const cardCount = playedCards.cardIds.length;
    let confidence = baseConfidence;
    
    if (cardCount >= 3) confidence += 0.15;
    else if (cardCount === 1) confidence -= 0.1;
    
    return Math.max(0.5, Math.min(0.95, confidence));
  }
  
  /**
   * 获取质疑理由
   */
  private getChallengeReason(context: StrategyContext): string {
    const playedCards = context.gameState.turnState.playedCards;
    if (!playedCards) return '直觉判断';
    
    const cardCount = playedCards.cardIds.length;
    
    if (cardCount >= 3) return '出牌数量异常，疑似撒谎';
    if (this.calculateRemainingLiarCards(context) < 2) return '算牌分析，骗子牌不足';
    
    return '精准读心';
  }
  
  /**
   * 计算剩余骗子牌数量
   */
  private calculateRemainingLiarCards(context: StrategyContext): number {
    const liarCard = context.liarCard;
    const totalLiarCards = 6; // Q/K/A各6张
    const playedLiarCards = this.memory.playedCards.get(liarCard) || 0;
    return Math.max(0, totalLiarCards - playedLiarCards);
  }
  
  /**
   * 计算剩余总牌数
   */
  private calculateTotalRemainingCards(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    context: StrategyContext
  ): number {
    const totalCards = 18; // Q/K/A共18张（不含小丑）
    let playedCount = 0;
    this.memory.playedCards.forEach((count) => {
      playedCount += count;
    });
    return Math.max(0, totalCards - playedCount);
  }
  
  /**
   * 选择要出的牌
   * 困难策略：最优选择，考虑多种因素
   */
  selectCard(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    context: StrategyContext
  ): { 
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
    
    // 策略分析
    const traits = this.getPersonalityTraits('balanced');
    const shouldBluff = Math.random() < traits.bluffFrequency;
    
    // 有骗子牌时优先出
    if (liarCards.length > 0 && !shouldBluff) {
      const card = this.selectBestCard(liarCards);
      return {
        cardIds: [card.id],
        claimedRank: liarCard,
        isBluff: false,
      };
    }
    
    // 策略性撒谎
    if (otherCards.length > 0 && shouldBluff) {
      const card = this.selectBestCard(otherCards);
      return {
        cardIds: [card.id],
        claimedRank: liarCard,
        isBluff: true,
      };
    }
    
    // 保底选择
    const card = this.selectBestCard(hand);
    return {
      cardIds: [card.id],
      claimedRank: liarCard,
      isBluff: card.rank !== liarCard && !card.isJoker,
    };
  }
  
  /**
   * 选择最优牌
   */
  private selectBestCard(cards: Card[]): Card {
    // 优先保留小丑牌
    const nonJokerCards = cards.filter(c => !c.isJoker);
    if (nonJokerCards.length > 0) {
      return nonJokerCards[0];
    }
    return cards[0];
  }
  
  /**
   * 更新记忆
   */
  updateMemory(context: StrategyContext): void {
    const playedCards = context.gameState.turnState.playedCards;
    if (playedCards) {
      // 记录已出牌
      playedCards.actualCards.forEach(card => {
        const current = this.memory.playedCards.get(card.rank) || 0;
        this.memory.playedCards.set(card.rank, current + 1);
      });
      
      // 记录玩家模式
      const playerId = playedCards.playerId;
      const wasBluff = playedCards.actualCards.some(
        c => c.rank !== playedCards.claimedRank && !c.isJoker
      );
      
      const pattern = this.memory.playerPatterns.get(playerId) || {
        bluffRate: 0.5,
        challengeRate: 0.5,
      };
      
      // 更新虚张声势率
      pattern.bluffRate = pattern.bluffRate * 0.8 + (wasBluff ? 1 : 0) * 0.2;
      this.memory.playerPatterns.set(playerId, pattern);
    }
  }
  
  /**
   * 获取性格特征
   */
  getPersonalityTraits(personality: string): PersonalityTraits {
    const traits: Record<string, PersonalityTraits> = {
      aggressive: {
        bluffFrequency: 0.8,
        challengeThreshold: 0.35,
        riskTolerance: 0.9,
        patience: 0.2,
        adaptability: 0.7,
      },
      conservative: {
        bluffFrequency: 0.3,
        challengeThreshold: 0.75,
        riskTolerance: 0.4,
        patience: 0.9,
        adaptability: 0.5,
      },
      balanced: {
        bluffFrequency: 0.6,
        challengeThreshold: 0.5,
        riskTolerance: 0.7,
        patience: 0.7,
        adaptability: 0.8,
      },
    };
    
    return traits[personality] || traits.balanced;
  }
}
