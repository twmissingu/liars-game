/**
 * =============================================================================
 * Code Geass: Liar's Game - 智能动态AI决策引擎
 * =============================================================================
 *
 * 重构后的AI决策系统，实现智能动态决策机制：
 * - 自动分析游戏规则及当前局势
 * - 基于概率模型进行自主决策
 * - 无需难度选择，AI自动适应局势
 * - 每个AI角色有独特的决策风格
 *
 * @author Code Agent
 * @version 3.0.0
 */

import type {
  AIDecision,
  StrategyContext,
  AIThought,
  AIAnimationState,
  CardRank,
  CharacterId,
} from '../types';

/**
 * AI决策风格配置
 * 每个角色有独特的决策倾向
 */
interface AIPersonality {
  /** 虚张声势频率 (0-1) */
  bluffTendency: number;
  /** 质疑倾向 (0-1) */
  challengeTendency: number;
  /** 风险偏好 (0-1) */
  riskTolerance: number;
  /** 攻击性 (0-1) */
  aggression: number;
  /** 适应性学习速度 */
  learningRate: number;
}

/**
 * 游戏局势分析结果
 */
interface GameSituation {
  /** 当前回合骗子牌 */
  liarCard: CardRank;
  /** AI当前血量 */
  aiHP: number;
  /** 玩家当前血量 */
  playerHP: number;
  /** AI手牌数量 */
  aiHandSize: number;
  /** 场上已出牌信息 */
  playedCardsInfo: {
    totalPlayed: number;
    claimedRanks: CardRank[];
    actualRanks: CardRank[];
  };
  /** 剩余牌堆估算 */
  remainingCards: Map<CardRank, number>;
  /** 当前出牌者声称的牌 */
  currentClaim?: {
    playerId: string;
    claimedRank: CardRank;
    cardCount: number;
  };
}

/**
 * 概率计算结果
 */
interface ProbabilityAnalysis {
  /** 当前声称是真实的概率 */
  truthProbability: number;
  /** 质疑成功的期望收益 */
  challengeExpectedValue: number;
  /** 各出牌选项的期望值 */
  playOptions: Array<{
    cards: string[];
    claimedRank: CardRank;
    isBluff: boolean;
    expectedValue: number;
    risk: number;
  }>;
}

/**
 * 智能动态AI引擎
 * 实现基于概率模型的自主决策
 */
export class DynamicAIEngine {
  /** AI角色ID */
  private characterId: CharacterId;

  /** AI决策风格 */
  private personality: AIPersonality;

  /** 游戏记忆 */
  private memory: {
    /** 已知的出牌记录 */
    playedCards: Array<{
      round: number;
      playerId: string;
      claimedRank: CardRank;
      actualRank: CardRank;
      wasLie: boolean;
    }>;
    /** 各玩家的撒谎频率统计 */
    playerBluffStats: Map<string, { bluffs: number; total: number }>;
    /** 当前游戏轮数 */
    currentRound: number;
  };

  /** 当前动画状态 */
  private currentState: AIAnimationState = 'idle';

  /** 是否正在决策 */
  private decisionInProgress: boolean = false;

  /**
   * 构造函数
   * @param characterId - AI角色ID，决定决策风格
   */
  constructor(characterId: CharacterId) {
    this.characterId = characterId;
    this.personality = this.createPersonality(characterId);
    this.memory = {
      playedCards: [],
      playerBluffStats: new Map(),
      currentRound: 0,
    };
  }

  /**
   * 根据角色创建决策风格
   * 每个角色有独特的AI行为特征
   */
  private createPersonality(characterId: CharacterId): AIPersonality {
    const personalities: Record<CharacterId, AIPersonality> = {
      lelouch: {
        // 鲁鲁修：高智商，善于计算和欺骗
        bluffTendency: 0.7,
        challengeTendency: 0.6,
        riskTolerance: 0.8,
        aggression: 0.7,
        learningRate: 0.9,
      },
      cc: {
        // C.C.：神秘，保守但关键时刻果断
        bluffTendency: 0.5,
        challengeTendency: 0.4,
        riskTolerance: 0.6,
        aggression: 0.5,
        learningRate: 0.7,
      },
      suzaku: {
        // 朱雀：正直，较少撒谎，但勇敢质疑
        bluffTendency: 0.3,
        challengeTendency: 0.7,
        riskTolerance: 0.5,
        aggression: 0.6,
        learningRate: 0.6,
      },
      kallen: {
        // 卡莲：激进，敢于冒险
        bluffTendency: 0.6,
        challengeTendency: 0.8,
        riskTolerance: 0.9,
        aggression: 0.9,
        learningRate: 0.5,
      },
    };

    return personalities[characterId];
  }

  /**
   * 分析当前游戏局势
   * 收集所有相关信息用于决策
   */
  private analyzeSituation(context: StrategyContext): GameSituation {
    const gameState = context.gameState;
    const aiPlayer = context.aiPlayer;
    const turnState = gameState.turnState;

    // 分析已出牌信息
    const playedCardsInfo = {
      totalPlayed: this.memory.playedCards.length,
      claimedRanks: this.memory.playedCards.map(p => p.claimedRank),
      actualRanks: this.memory.playedCards.map(p => p.actualRank),
    };

    // 估算剩余牌
    const remainingCards = this.estimateRemainingCards(context);

    // 获取当前声称信息
    const currentClaim = turnState.playedCards
      ? {
          playerId: turnState.playedCards.playerId,
          claimedRank: turnState.playedCards.claimedRank,
          cardCount: turnState.playedCards.cardIds.length,
        }
      : undefined;

    // 获取玩家HP（非AI玩家）
    const playerHP = gameState.playerStats?.hp || 3;

    return {
      liarCard: context.liarCard,
      aiHP: aiPlayer.stats.hp,
      playerHP,
      aiHandSize: aiPlayer.hand.length,
      playedCardsInfo,
      remainingCards,
      currentClaim,
    };
  }

  /**
   * 估算剩余牌分布
   * 基于已出牌和已知信息计算概率
   */
  private estimateRemainingCards(context: StrategyContext): Map<CardRank, number> {
    const totalCardsPerRank = 8; // 每点数8张牌（4花色 + 4小丑）
    const remaining = new Map<CardRank, number>();

    // 初始化
    (['Q', 'K', 'A'] as CardRank[]).forEach(rank => {
      remaining.set(rank, totalCardsPerRank);
    });

    // 减去已知的牌
    this.memory.playedCards.forEach(play => {
      const current = remaining.get(play.actualRank) || 0;
      remaining.set(play.actualRank, Math.max(0, current - 1));
    });

    // 减去AI自己手中的牌
    context.aiPlayer.hand.forEach(card => {
      if (!card.isJoker) {
        const current = remaining.get(card.rank) || 0;
        remaining.set(card.rank, Math.max(0, current - 1));
      }
    });

    return remaining;
  }

  /**
   * 概率分析
   * 计算各种决策的期望值
   */
  private analyzeProbabilities(
    situation: GameSituation,
    context: StrategyContext
  ): ProbabilityAnalysis {
    const { currentClaim, remainingCards, aiHP, playerHP } = situation;

    // 如果没有当前声称（第一手牌），返回默认值
    if (!currentClaim) {
      return {
        truthProbability: 0.5,
        challengeExpectedValue: 0,
        playOptions: this.analyzePlayOptions(context, situation),
      };
    }

    // 计算声称为真实的概率
    const claimedRank = currentClaim.claimedRank;
    const cardCount = currentClaim.cardCount;
    const remainingOfClaimed = remainingCards.get(claimedRank) || 0;

    // 基于剩余牌计算真实概率
    const totalRemaining = Array.from(remainingCards.values()).reduce((a, b) => a + b, 0);
    const baseTruthProb = totalRemaining > 0 ? remainingOfClaimed / totalRemaining : 0.5;

    // 考虑出牌者的撒谎历史
    const playerStats = this.memory.playerBluffStats.get(currentClaim.playerId);
    const bluffRate = playerStats && playerStats.total > 0
      ? playerStats.bluffs / playerStats.total
      : 0.3; // 默认30%撒谎率

    // 综合计算真实概率
    const truthProbability = baseTruthProb * (1 - bluffRate * 0.5);

    // 计算质疑的期望收益
    const challengeSuccessValue = this.calculateChallengeValue(true, aiHP, playerHP);
    const challengeFailValue = this.calculateChallengeValue(false, aiHP, playerHP);
    const challengeExpectedValue =
      (1 - truthProbability) * challengeSuccessValue +
      truthProbability * challengeFailValue;

    // 分析出牌选项
    const playOptions = this.analyzePlayOptions(context, situation);

    return {
      truthProbability,
      challengeExpectedValue,
      playOptions,
    };
  }

  /**
   * 计算质疑的价值
   */
  private calculateChallengeValue(
    success: boolean,
    aiHP: number,
    playerHP: number
  ): number {
    if (success) {
      // 质疑成功：对方扣血
      return 10 + (playerHP <= 1 ? 20 : 0); // 如果玩家快死了，价值更高
    } else {
      // 质疑失败：自己扣血
      return -10 - (aiHP <= 1 ? -20 : 0); // 如果自己快死了，损失更大
    }
  }

  /**
   * 分析出牌选项
   */
  private analyzePlayOptions(
    context: StrategyContext,
    situation: GameSituation
  ): Array<{
    cards: string[];
    claimedRank: CardRank;
    isBluff: boolean;
    expectedValue: number;
    risk: number;
  }> {
    const hand = context.aiPlayer.hand;
    const { liarCard, aiHP, playerHP } = situation;
    const options: ReturnType<typeof this.analyzePlayOptions> = [];

    if (hand.length === 0) return options;

    // 分类手牌
    const liarCards = hand.filter(c => c.rank === liarCard || c.isJoker);
    const otherCards = hand.filter(c => c.rank !== liarCard && !c.isJoker);

    // 选项1：出骗子牌（诚实）
    if (liarCards.length > 0) {
      const card = liarCards[0];
      const risk = this.calculatePlayRisk(true, false, aiHP, playerHP);
      options.push({
        cards: [card.id],
        claimedRank: liarCard,
        isBluff: false,
        expectedValue: 5 - risk,
        risk,
      });
    }

    // 选项2：出其他牌（撒谎）
    if (otherCards.length > 0) {
      const card = otherCards[0];
      const risk = this.calculatePlayRisk(false, true, aiHP, playerHP);
      const bluffBonus = this.personality.bluffTendency * 5;
      options.push({
        cards: [card.id],
        claimedRank: liarCard,
        isBluff: true,
        expectedValue: 3 + bluffBonus - risk,
        risk,
      });
    }

    // 选项3：出多张牌（如果有）
    if (liarCards.length >= 2) {
      const cards = liarCards.slice(0, 2);
      const risk = this.calculatePlayRisk(true, false, aiHP, playerHP) * 1.5;
      options.push({
        cards: cards.map(c => c.id),
        claimedRank: liarCard,
        isBluff: false,
        expectedValue: 8 - risk,
        risk,
      });
    }

    return options;
  }

  /**
   * 计算出牌风险
   */
  private calculatePlayRisk(
    hasRealCard: boolean,
    isBluff: boolean,
    aiHP: number,
    playerHP: number
  ): number {
    let risk = 0;

    // 撒谎的风险
    if (isBluff) {
      risk += 3;
    }

    // 血量低时风险更高
    if (aiHP <= 1) {
      risk += 5;
    }

    // 对方快死时更愿意冒险
    if (playerHP <= 1) {
      risk -= 2;
    }

    return Math.max(0, risk);
  }

  /**
   * 做出决策
   * 核心决策逻辑，综合所有因素
   */
  makeDecision(context: StrategyContext): AIDecision {
    if (this.decisionInProgress) {
      throw new Error('AI决策正在进行中');
    }

    this.decisionInProgress = true;

    try {
      // 1. 分析局势
      const situation = this.analyzeSituation(context);

      // 2. 概率计算
      const probabilities = this.analyzeProbabilities(situation, context);

      // 3. 决策选择
      return this.selectBestDecision(context, situation, probabilities);
    } finally {
      this.decisionInProgress = false;
    }
  }

  /**
   * 选择最佳决策
   */
  private selectBestDecision(
    context: StrategyContext,
    situation: GameSituation,
    probabilities: ProbabilityAnalysis
  ): AIDecision {
    const { currentClaim, aiHP } = situation;
    const { challengeExpectedValue, playOptions } = probabilities;

    // 决策阈值（根据AI性格调整）
    const challengeThreshold = -2 + this.personality.challengeTendency * 4;
    const playThreshold = 0;

    // 如果有可质疑的牌
    if (currentClaim && challengeExpectedValue > challengeThreshold) {
      const confidence = Math.min(0.95, 0.5 + challengeExpectedValue / 20);
      return {
        action: 'challenge',
        confidence,
        reasoning: this.generateChallengeReasoning(situation, probabilities),
        animationState: 'challenging',
      };
    }

    // 选择最佳出牌选项
    if (playOptions.length > 0) {
      // 按期望值排序
      playOptions.sort((a, b) => b.expectedValue - a.expectedValue);
      const bestOption = playOptions[0];

      if (bestOption.expectedValue > playThreshold) {
        const confidence = Math.min(0.95, 0.6 + bestOption.expectedValue / 10);
        return {
          action: 'play',
          cardIds: bestOption.cards,
          claimedRank: bestOption.claimedRank,
          confidence,
          reasoning: this.generatePlayReasoning(bestOption),
          animationState: 'playing',
          isBluff: bestOption.isBluff,
        };
      }
    }

    // 默认：过牌
    return {
      action: 'pass',
      confidence: 0.5,
      reasoning: '无有利选项，选择保守',
      animationState: 'playing',
    };
  }

  /**
   * 生成质疑决策的理由描述
   */
  private generateChallengeReasoning(
    situation: GameSituation,
    probabilities: ProbabilityAnalysis
  ): string {
    const { truthProbability } = probabilities;
    const { currentClaim } = situation;

    if (!currentClaim) return '根据直觉质疑';

    const doubtLevel = Math.round((1 - truthProbability) * 100);

    if (doubtLevel > 70) {
      return `高度怀疑（${doubtLevel}%），对方可能在撒谎`;
    } else if (doubtLevel > 40) {
      return `中度怀疑（${doubtLevel}%），值得一试`;
    } else {
      return `策略性质疑，试探对方反应`;
    }
  }

  /**
   * 生成出牌决策的理由描述
   */
  private generatePlayReasoning(option: {
    isBluff: boolean;
    expectedValue: number;
    risk: number;
  }): string {
    if (option.isBluff) {
      return `策略性虚张声势（期望值:${option.expectedValue.toFixed(1)}）`;
    } else {
      return `诚实出牌，稳扎稳打（期望值:${option.expectedValue.toFixed(1)}）`;
    }
  }

  /**
   * 更新记忆
   * 记录游戏事件用于后续决策
   */
  updateMemory(
    playerId: string,
    claimedRank: CardRank,
    actualRank: CardRank,
    wasLie: boolean
  ): void {
    this.memory.currentRound++;

    // 记录出牌
    this.memory.playedCards.push({
      round: this.memory.currentRound,
      playerId,
      claimedRank,
      actualRank,
      wasLie,
    });

    // 更新玩家撒谎统计
    const stats = this.memory.playerBluffStats.get(playerId) || {
      bluffs: 0,
      total: 0,
    };
    stats.total++;
    if (wasLie) {
      stats.bluffs++;
    }
    this.memory.playerBluffStats.set(playerId, stats);
  }

  /**
   * 获取当前思考信息
   */
  getCurrentThought(): AIThought {
    return {
      state: this.currentState,
      progress: this.getProgressForState(this.currentState),
      message: this.getMessageForState(this.currentState),
      emotion: this.getEmotionForState(this.currentState),
    };
  }

  /**
   * 获取状态进度
   */
  private getProgressForState(state: AIAnimationState): number {
    const progressMap: Record<AIAnimationState, number> = {
      idle: 0,
      thinking: 0.3,
      deciding: 0.5,
      playing: 0.7,
      challenging: 0.8,
      reacting: 0.9,
    };
    return progressMap[state] || 0;
  }

  /**
   * 获取状态消息
   */
  private getMessageForState(state: AIAnimationState): string {
    const messages: Record<AIAnimationState, string> = {
      idle: '等待中...',
      thinking: '分析局势...',
      deciding: '做出决策...',
      playing: '出牌中...',
      challenging: '质疑中...',
      reacting: '反应中...',
    };
    return messages[state] || '思考中...';
  }

  /**
   * 获取状态情绪
   */
  private getEmotionForState(state: AIAnimationState): 'confident' | 'uncertain' | 'surprised' | 'calm' {
    const emotions: Record<AIAnimationState, 'confident' | 'uncertain' | 'surprised' | 'calm'> = {
      idle: 'calm',
      thinking: 'uncertain',
      deciding: 'uncertain',
      playing: 'confident',
      challenging: 'confident',
      reacting: 'surprised',
    };
    return emotions[state] || 'calm';
  }

  /**
   * 设置动画状态
   */
  setAnimationState(state: AIAnimationState): void {
    this.currentState = state;
  }

  /**
   * 获取角色ID
   */
  getCharacterId(): CharacterId {
    return this.characterId;
  }

  /**
   * 重置AI状态
   */
  reset(): void {
    this.memory = {
      playedCards: [],
      playerBluffStats: new Map(),
      currentRound: 0,
    };
    this.currentState = 'idle';
    this.decisionInProgress = false;
  }
}

/**
 * AI引擎工厂
 * 创建对应角色的AI引擎
 */
export function createAIEngine(characterId: CharacterId): DynamicAIEngine {
  return new DynamicAIEngine(characterId);
}
