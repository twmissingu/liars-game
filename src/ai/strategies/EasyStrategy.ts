/**
 * =============================================================================
 * Code Geass: Liar's Game - 简单难度AI策略
 * =============================================================================
 *
 * 特点：随机出牌，随机质疑，无算牌能力
 * 适合新手玩家练习
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

export class EasyStrategy implements AIStrategy {
  readonly name = 'Easy';
  readonly description = '随机出牌，随机质疑，适合新手';

  /** 记忆存储 */
  private memory: Map<string, unknown> = new Map();

  /**
   * 做出决策
   */
  makeDecision(
    context: StrategyContext,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    config: AIConfig
  ): AIDecision {
    // 根据性格决定是否质疑
    const challengeProb = this.calculateChallengeProbability(context);
    const shouldChallenge = Math.random() < challengeProb;

    if (shouldChallenge) {
      return {
        action: 'challenge',
        confidence: Math.random() * 0.5 + 0.3,
        reasoning: '随机质疑',
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
        confidence: 0.5,
        reasoning: '随机出牌',
        animationState: 'playing' as AIAnimationState,
        isBluff: cardSelection.isBluff,
      };
    }

    // 无牌可出，选择跳过
    return {
      action: 'pass',
      confidence: 0.3,
      reasoning: '无牌可出',
      animationState: 'playing' as AIAnimationState,
    };
  }

  /**
   * 计算质疑概率
   * 简单策略：固定30%概率质疑
   */
  calculateChallengeProbability(context: StrategyContext): number {
    const traits = this.getPersonalityTraits('balanced');

    // 基础概率
    let probability = 0.3;

    // 根据出牌数量调整
    const playedCards = context.gameState.turnState.playedCards;
    if (playedCards) {
      const cardCount = playedCards.cardIds.length;
      if (cardCount >= 3) probability += 0.2;
      else if (cardCount === 2) probability += 0.1;
    }

    // 应用性格影响
    probability *= 2 - traits.challengeThreshold;

    return Math.max(0.1, Math.min(0.9, probability));
  }

  /**
   * 选择要出的牌
   * 简单策略：随机选择1张牌
   */
  selectCard(context: StrategyContext): {
    cardIds: string[];
    claimedRank: string;
    isBluff: boolean;
  } | null {
    const hand = context.aiPlayer.hand;
    if (hand.length === 0) return null;

    // 随机选择1张牌
    const card = hand[Math.floor(Math.random() * hand.length)];

    // 50%概率撒谎
    const isBluff = Math.random() > 0.5;
    const liarCard = context.liarCard;

    // 声称的点数
    const claimedRank = isBluff ? liarCard : card.rank;

    return {
      cardIds: [card.id],
      claimedRank,
      isBluff: isBluff && card.rank !== liarCard,
    };
  }

  /**
   * 更新记忆
   * 简单策略：不记牌
   */
  updateMemory(): void {
    // 简单策略不记牌
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
        adaptability: 0.3,
      },
      conservative: {
        bluffFrequency: 0.2,
        challengeThreshold: 0.8,
        riskTolerance: 0.3,
        patience: 0.8,
        adaptability: 0.3,
      },
      balanced: {
        bluffFrequency: 0.5,
        challengeThreshold: 0.6,
        riskTolerance: 0.5,
        patience: 0.5,
        adaptability: 0.4,
      },
    };

    return traits[personality] || traits.balanced;
  }
}
