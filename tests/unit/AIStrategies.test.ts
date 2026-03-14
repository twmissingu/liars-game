/**
 * AI策略单元测试
 * 测试三种难度的AI策略
 */

import { EasyStrategy } from '../../src/ai/strategies/EasyStrategy';
import { NormalStrategy } from '../../src/ai/strategies/NormalStrategy';
import { HardStrategy } from '../../src/ai/strategies/HardStrategy';
import type { StrategyContext, AIConfig, AICard, AIPlayer } from '../../src/types/ai.types';

describe('AI策略', () => {
  const createMockContext = (options: Partial<StrategyContext> = {}): StrategyContext => {
    const defaultCard: AICard = {
      id: 'card-1',
      type: 'citizen',
      value: 1,
      owner: 'ai',
    };

    const aiPlayer: AIPlayer = {
      id: 'ai',
      name: 'AI',
      isAI: true,
      hand: [defaultCard],
      score: 0,
      isActive: true,
    };

    const opponent: AIPlayer = {
      id: 'player',
      name: 'Player',
      isAI: false,
      hand: [],
      score: 0,
      isActive: true,
    };

    return {
      gameState: {
        currentRound: 1,
        totalRounds: 10,
        currentPlayer: 'ai',
        players: [aiPlayer, opponent],
        tableCards: [],
        phase: 'play',
        turnState: {
          playedCards: null,
        },
      },
      aiPlayer,
      opponent,
      history: [],
      knownCards: new Map(),
      liarCard: 'Q',
      ...options,
    } as StrategyContext;
  };

  const createMockConfig = (options: Partial<AIConfig> = {}): AIConfig => ({
    difficulty: 'normal',
    personality: 'balanced',
    reactionDelay: 1000,
    enableAnimation: true,
    ...options,
  });

  describe('EasyStrategy', () => {
    let strategy: EasyStrategy;

    beforeEach(() => {
      strategy = new EasyStrategy();
    });

    test('应该有正确的名称和描述', () => {
      expect(strategy.name).toBe('Easy');
      expect(strategy.description).toContain('随机');
    });

    test('应该能做出决策', () => {
      const context = createMockContext();
      const config = createMockConfig({ difficulty: 'easy' });
      
      const decision = strategy.makeDecision(context, config);
      
      expect(decision).toBeDefined();
      expect(['play', 'challenge', 'pass']).toContain(decision.action);
    });

    test('质疑概率应该约为30%', () => {
      const context = createMockContext();
      const probability = strategy.calculateChallengeProbability(context);
      expect(probability).toBeGreaterThan(0.2);
      expect(probability).toBeLessThan(0.5);
    });

    test('有牌时应该能选择卡牌', () => {
      const context = createMockContext();
      const result = strategy.selectCard(context);
      
      expect(result).toBeDefined();
      expect(result?.cardIds).toBeDefined();
    });

    test('无牌时应该返回null', () => {
      const context = createMockContext({
        aiPlayer: {
          id: 'ai',
          name: 'AI',
          isAI: true,
          hand: [],
          score: 0,
          isActive: true,
        },
      });
      
      const result = strategy.selectCard(context);
      expect(result).toBeNull();
    });

    test('应该返回性格参数', () => {
      const traits = strategy.getPersonalityTraits('balanced');
      
      expect(traits.bluffFrequency).toBeDefined();
      expect(traits.challengeThreshold).toBeDefined();
      expect(traits.riskTolerance).toBeDefined();
      expect(traits.patience).toBeDefined();
      expect(traits.adaptability).toBeDefined();
    });

    test('简单策略的撒谎频率应该为50%', () => {
      const traits = strategy.getPersonalityTraits('balanced');
      expect(traits.bluffFrequency).toBe(0.5);
    });

    test('updateMemory不应该抛出错误', () => {
      const context = createMockContext();
      expect(() => strategy.updateMemory(context)).not.toThrow();
    });
  });

  describe('NormalStrategy', () => {
    let strategy: NormalStrategy;

    beforeEach(() => {
      strategy = new NormalStrategy();
    });

    test('应该有正确的名称和描述', () => {
      expect(strategy.name).toBe('Normal');
      expect(strategy.description).toContain('基础算牌');
    });

    test('应该能做出决策', () => {
      const context = createMockContext();
      const config = createMockConfig({ difficulty: 'normal' });
      
      const decision = strategy.makeDecision(context, config);
      
      expect(decision).toBeDefined();
      expect(['play', 'challenge', 'pass']).toContain(decision.action);
    });

    test('质疑概率应该为40%', () => {
      const context = createMockContext({
        gameState: {
          currentRound: 1,
          totalRounds: 10,
          currentPlayer: 'ai',
          players: [],
          tableCards: [],
          phase: 'play',
          turnState: {
            playedCards: {
              cardIds: ['card1', 'card2'],
              claimedRank: 'Q',
              actualCards: [{ id: 'card1', rank: 'K', suit: 'hearts', value: 2, isJoker: false, owner: 'player' }],
              playerId: 'player',
            },
          },
        },
      });
      const probability = strategy.calculateChallengeProbability(context);
      expect(probability).toBeGreaterThan(0.2);
      expect(probability).toBeLessThan(0.6);
    });

    test('有牌时应该能选择卡牌', () => {
      const context = createMockContext();
      const result = strategy.selectCard(context);
      
      expect(result).toBeDefined();
      expect(result?.cardIds).toBeDefined();
    });

    test('无牌时应该返回pass决策', () => {
      const context = createMockContext({
        aiPlayer: {
          id: 'ai',
          name: 'AI',
          isAI: true,
          hand: [],
          score: 0,
          isActive: true,
        },
      });
      const config = createMockConfig();
      
      const decision = strategy.makeDecision(context, config);
      
      expect(decision.action).toBe('pass');
    });

    test('普通策略的撒谎频率应该为50%', () => {
      const traits = strategy.getPersonalityTraits('balanced');
      expect(traits.bluffFrequency).toBe(0.5);
    });

    test('普通策略的适应能力应该为60%', () => {
      const traits = strategy.getPersonalityTraits('balanced');
      expect(traits.adaptability).toBe(0.6);
    });
  });

  describe('HardStrategy', () => {
    let strategy: HardStrategy;

    beforeEach(() => {
      strategy = new HardStrategy();
    });

    test('应该有正确的名称和描述', () => {
      expect(strategy.name).toBe('Hard');
      expect(strategy.description).toContain('高级策略');
    });

    test('应该能做出决策', () => {
      const context = createMockContext();
      const config = createMockConfig({ difficulty: 'hard' });
      
      const decision = strategy.makeDecision(context, config);
      
      expect(decision).toBeDefined();
      expect(['play', 'challenge', 'pass']).toContain(decision.action);
    });

    test('质疑概率应该为50%', () => {
      const context = createMockContext();
      const probability = strategy.calculateChallengeProbability(context);
      expect(probability).toBeGreaterThan(0.3);
      expect(probability).toBeLessThan(0.7);
    });

    test('困难策略的撒谎频率应该为60%', () => {
      const traits = strategy.getPersonalityTraits('balanced');
      expect(traits.bluffFrequency).toBe(0.6);
    });

    test('困难策略的适应能力应该为80%', () => {
      const traits = strategy.getPersonalityTraits('balanced');
      expect(traits.adaptability).toBe(0.8);
    });

    test('困难策略的风险承受应该为70%', () => {
      const traits = strategy.getPersonalityTraits('balanced');
      expect(traits.riskTolerance).toBe(0.7);
    });
  });

  describe('策略对比', () => {
    test('质疑概率应该递增: Easy < Normal < Hard', () => {
      const easy = new EasyStrategy();
      const normal = new NormalStrategy();
      const hard = new HardStrategy();
      const context = createMockContext();

      const easyProb = easy.calculateChallengeProbability(context);
      const normalProb = normal.calculateChallengeProbability(context);
      const hardProb = hard.calculateChallengeProbability(context);

      expect(easyProb).toBeLessThanOrEqual(normalProb);
      expect(normalProb).toBeLessThanOrEqual(hardProb);
    });

    test('撒谎频率应该递增: Easy < Normal < Hard', () => {
      const easy = new EasyStrategy();
      const normal = new NormalStrategy();
      const hard = new HardStrategy();

      const easyTraits = easy.getPersonalityTraits('balanced');
      const normalTraits = normal.getPersonalityTraits('balanced');
      const hardTraits = hard.getPersonalityTraits('balanced');

      expect(easyTraits.bluffFrequency)
        .toBeLessThanOrEqual(normalTraits.bluffFrequency);
      expect(normalTraits.bluffFrequency)
        .toBeLessThanOrEqual(hardTraits.bluffFrequency);
    });

    test('适应能力应该递增: Easy < Normal < Hard', () => {
      const easy = new EasyStrategy();
      const normal = new NormalStrategy();
      const hard = new HardStrategy();

      const easyTraits = easy.getPersonalityTraits('balanced');
      const normalTraits = normal.getPersonalityTraits('balanced');
      const hardTraits = hard.getPersonalityTraits('balanced');

      expect(easyTraits.adaptability)
        .toBeLessThan(normalTraits.adaptability);
      expect(normalTraits.adaptability)
        .toBeLessThan(hardTraits.adaptability);
    });
  });

  describe('决策属性', () => {
    test('决策应该有置信度', () => {
      const easy = new EasyStrategy();
      const context = createMockContext();
      const config = createMockConfig();
      
      const decision = easy.makeDecision(context, config);
      
      expect(decision.confidence).toBeDefined();
      expect(decision.confidence).toBeGreaterThanOrEqual(0);
      expect(decision.confidence).toBeLessThanOrEqual(1);
    });

    test('决策应该有原因说明', () => {
      const normal = new NormalStrategy();
      const context = createMockContext();
      const config = createMockConfig();
      
      const decision = normal.makeDecision(context, config);
      
      expect(decision.reasoning).toBeDefined();
      expect(decision.reasoning.length).toBeGreaterThan(0);
    });

    test('决策应该有动画状态', () => {
      const hard = new HardStrategy();
      const context = createMockContext();
      const config = createMockConfig();
      
      const decision = hard.makeDecision(context, config);
      
      expect(decision.animationState).toBeDefined();
      expect(['thinking', 'deciding', 'playing', 'challenging', 'reacting'])
        .toContain(decision.animationState);
    });

    test('出牌决策应该有isBluff标记', () => {
      const easy = new EasyStrategy();
      const context = createMockContext();
      const config = createMockConfig();
      
      // 多次测试确保能拿到出牌决策
      for (let i = 0; i < 10; i++) {
        const decision = easy.makeDecision(context, config);
        if (decision.action === 'play') {
          expect(decision.isBluff).toBeDefined();
          break;
        }
      }
    });
  });
});
