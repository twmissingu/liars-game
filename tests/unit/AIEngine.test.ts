/**
 * AIEngine 单元测试
 * 测试AI引擎的核心功能
 */

import { AIEngine, AIEngineManager } from '../../src/ai/AIEngine';
import type { StrategyContext, AIPlayer, AIGameState } from '../../src/types';

describe('AIEngine', () => {
  let aiEngine: AIEngine;

  beforeEach(() => {
    aiEngine = new AIEngine('normal', 'balanced');
  });

  afterEach(() => {
    AIEngineManager.clearAll();
  });

  describe('构造函数', () => {
    test('应该创建AI引擎实例', () => {
      expect(aiEngine).toBeDefined();
    });

    test('默认难度应该是normal', () => {
      const config = aiEngine.getConfig();
      expect(config.difficulty).toBe('normal');
    });

    test('默认性格应该是balanced', () => {
      const config = aiEngine.getConfig();
      expect(config.personality).toBe('balanced');
    });

    test('可以创建easy难度AI', () => {
      const easyAI = new AIEngine('easy', 'balanced');
      expect(easyAI.getStrategyName()).toBe('Easy');
    });

    test('可以创建hard难度AI', () => {
      const hardAI = new AIEngine('hard', 'balanced');
      expect(hardAI.getStrategyName()).toBe('Hard');
    });
  });

  describe('配置管理', () => {
    test('可以获取当前配置', () => {
      const config = aiEngine.getConfig();
      expect(config).toBeDefined();
      expect(config.difficulty).toBe('normal');
      expect(config.personality).toBe('balanced');
    });

    test('可以更新配置', () => {
      aiEngine.updateConfig({ personality: 'aggressive' });
      const config = aiEngine.getConfig();
      expect(config.personality).toBe('aggressive');
    });

    test('更新难度会改变策略', () => {
      expect(aiEngine.getStrategyName()).toBe('Normal');
      aiEngine.updateConfig({ difficulty: 'hard' });
      expect(aiEngine.getStrategyName()).toBe('Hard');
    });

    test('更新配置保留未改变的值', () => {
      aiEngine.updateConfig({ difficulty: 'hard' });
      const config = aiEngine.getConfig();
      expect(config.personality).toBe('balanced'); // 未改变
      expect(config.difficulty).toBe('hard'); // 已改变
    });
  });

  describe('策略信息', () => {
    test('可以获取策略名称', () => {
      expect(aiEngine.getStrategyName()).toBe('Normal');
    });

    test('可以获取策略描述', () => {
      const description = aiEngine.getStrategyDescription();
      expect(description).toBeDefined();
      expect(description.length).toBeGreaterThan(0);
    });

    test('不同难度有不同的策略名称', () => {
      const easyAI = new AIEngine('easy', 'balanced');
      const normalAI = new AIEngine('normal', 'balanced');
      const hardAI = new AIEngine('hard', 'balanced');

      expect(easyAI.getStrategyName()).toBe('Easy');
      expect(normalAI.getStrategyName()).toBe('Normal');
      expect(hardAI.getStrategyName()).toBe('Hard');
    });
  });

  describe('快速决策', () => {
    const createMockContext = (): StrategyContext => ({
      gameState: {
        currentRound: 1,
        totalRounds: 10,
        currentPlayer: 'ai',
        players: [
          {
            id: 'ai',
            name: 'AI',
            isAI: true,
            hand: [
              { id: 'card1', type: 'citizen', value: 1, owner: 'ai', rank: 'Q', suit: 'spades', isJoker: false },
            ],
            score: 0,
            isActive: true,
            stats: { hp: 3, maxHp: 3, geassSuccessCount: 0, geassFailCount: 0 },
          },
          {
            id: 'player',
            name: 'Player',
            isAI: false,
            hand: [],
            score: 0,
            isActive: true,
            stats: { hp: 3, maxHp: 3, geassSuccessCount: 0, geassFailCount: 0 },
          },
        ],
        tableCards: [],
        phase: 'play',
        turnState: { playedCards: null },
      },
      aiPlayer: {
        id: 'ai',
        name: 'AI',
        isAI: true,
        hand: [
          { id: 'card1', type: 'citizen', value: 1, owner: 'ai', rank: 'Q', suit: 'spades', isJoker: false },
        ],
        score: 0,
        isActive: true,
        stats: { hp: 3, maxHp: 3, geassSuccessCount: 0, geassFailCount: 0 },
      },
      opponent: {
        id: 'player',
        name: 'Player',
        isAI: false,
        hand: [],
        score: 0,
        isActive: true,
        stats: { hp: 3, maxHp: 3, geassSuccessCount: 0, geassFailCount: 0 },
      },
      history: [],
      knownCards: new Map(),
      liarCard: 'Q',
    });

    test('可以快速决策', () => {
      const context = createMockContext();
      const decision = aiEngine.makeDecisionInstant(context);

      expect(decision).toBeDefined();
      expect(['play', 'challenge', 'pass']).toContain(decision.action);
    });

    test('决策包含必要字段', () => {
      const context = createMockContext();
      const decision = aiEngine.makeDecisionInstant(context);

      expect(decision.action).toBeDefined();
      expect(decision.confidence).toBeDefined();
      expect(decision.reasoning).toBeDefined();
      expect(decision.animationState).toBeDefined();
    });

    test('有牌时通常选择出牌或质疑', () => {
      const context = createMockContext();
      const decision = aiEngine.makeDecisionInstant(context);

      // 有牌时不应该选择pass
      if (context.aiPlayer.hand.length > 0) {
        expect(['play', 'challenge']).toContain(decision.action);
      }
    });

    test('空手牌时选择pass', () => {
      const context = createMockContext();
      context.aiPlayer.hand = [];
      context.gameState.players[0].hand = [];

      const decision = aiEngine.makeDecisionInstant(context);

      expect(decision.action).toBe('pass');
    });
  });

  describe('思考状态', () => {
    test('可以获取当前思考状态', () => {
      const thought = aiEngine.getCurrentThought();

      expect(thought).toBeDefined();
      expect(thought.state).toBeDefined();
      expect(thought.progress).toBeDefined();
      expect(thought.message).toBeDefined();
      expect(thought.emotion).toBeDefined();
    });

    test('初始状态是idle', () => {
      const thought = aiEngine.getCurrentThought();
      expect(thought.state).toBe('idle');
    });

    test('可以设置思考回调', () => {
      const mockCallback = jest.fn();
      aiEngine.setThoughtCallback(mockCallback);

      // 回调已设置，不会抛出错误
      expect(() => aiEngine.setThoughtCallback(mockCallback)).not.toThrow();
    });
  });

  describe('性格特征', () => {
    test('可以获取性格特征', () => {
      const traits = aiEngine.getPersonalityTraits();

      expect(traits).toBeDefined();
      expect(traits.bluffFrequency).toBeDefined();
      expect(traits.challengeThreshold).toBeDefined();
      expect(traits.riskTolerance).toBeDefined();
      expect(traits.patience).toBeDefined();
      expect(traits.adaptability).toBeDefined();
    });

    test('不同性格有不同的特征值', () => {
      const balancedAI = new AIEngine('normal', 'balanced');
      const aggressiveAI = new AIEngine('normal', 'aggressive');
      const conservativeAI = new AIEngine('normal', 'conservative');

      const balancedTraits = balancedAI.getPersonalityTraits();
      const aggressiveTraits = aggressiveAI.getPersonalityTraits();
      const conservativeTraits = conservativeAI.getPersonalityTraits();

      // 激进型更敢虚张声势
      expect(aggressiveTraits.bluffFrequency).toBeGreaterThan(conservativeTraits.bluffFrequency);
      // 保守型更谨慎
      expect(conservativeTraits.challengeThreshold).toBeGreaterThan(aggressiveTraits.challengeThreshold);
    });
  });

  describe('记忆更新', () => {
    test('可以更新记忆', () => {
      const context: StrategyContext = {
        gameState: {
          currentRound: 1,
          totalRounds: 10,
          currentPlayer: 'ai',
          players: [],
          tableCards: [],
          phase: 'play',
          turnState: {
            playedCards: {
              cardIds: ['card1'],
              claimedRank: 'Q',
              actualCards: [
                { id: 'card1', rank: 'Q', suit: 'spades', value: 1, isJoker: false, owner: 'player' },
              ],
              playerId: 'player',
            },
          },
        },
        aiPlayer: {
          id: 'ai',
          name: 'AI',
          isAI: true,
          hand: [],
          score: 0,
          isActive: true,
          stats: { hp: 3, maxHp: 3, geassSuccessCount: 0, geassFailCount: 0 },
        },
        opponent: {
          id: 'player',
          name: 'Player',
          isAI: false,
          hand: [],
          score: 0,
          isActive: true,
          stats: { hp: 3, maxHp: 3, geassSuccessCount: 0, geassFailCount: 0 },
        },
        history: [],
        knownCards: new Map(),
        liarCard: 'Q',
      };

      // 不应该抛出错误
      expect(() => aiEngine.updateMemory(context)).not.toThrow();
    });
  });

  describe('AIEngineManager', () => {
    test('可以获取单例实例', () => {
      const instance1 = AIEngineManager.getInstance('ai1');
      const instance2 = AIEngineManager.getInstance('ai1');

      expect(instance1).toBe(instance2);
    });

    test('不同ID获取不同实例', () => {
      const instance1 = AIEngineManager.getInstance('ai1');
      const instance2 = AIEngineManager.getInstance('ai2');

      expect(instance1).not.toBe(instance2);
    });

    test('可以移除实例', () => {
      const instance1 = AIEngineManager.getInstance('ai1');
      AIEngineManager.removeInstance('ai1');
      const instance2 = AIEngineManager.getInstance('ai1');

      expect(instance1).not.toBe(instance2);
    });

    test('可以清除所有实例', () => {
      AIEngineManager.getInstance('ai1');
      AIEngineManager.getInstance('ai2');
      AIEngineManager.getInstance('ai3');

      AIEngineManager.clearAll();

      // 清除后应该创建新实例
      const newInstance = AIEngineManager.getInstance('ai1');
      expect(newInstance).toBeDefined();
    });
  });

  describe('动画决策', () => {
    test('动画决策返回Promise', () => {
      const context: StrategyContext = {
        gameState: {
          currentRound: 1,
          totalRounds: 10,
          currentPlayer: 'ai',
          players: [
            {
              id: 'ai',
              name: 'AI',
              isAI: true,
              hand: [
                { id: 'card1', type: 'citizen', value: 1, owner: 'ai', rank: 'Q', suit: 'spades', isJoker: false },
              ],
              score: 0,
              isActive: true,
              stats: { hp: 3, maxHp: 3, geassSuccessCount: 0, geassFailCount: 0 },
            },
            {
              id: 'player',
              name: 'Player',
              isAI: false,
              hand: [],
              score: 0,
              isActive: true,
              stats: { hp: 3, maxHp: 3, geassSuccessCount: 0, geassFailCount: 0 },
            },
          ],
          tableCards: [],
          phase: 'play',
          turnState: { playedCards: null },
        },
        aiPlayer: {
          id: 'ai',
          name: 'AI',
          isAI: true,
          hand: [
            { id: 'card1', type: 'citizen', value: 1, owner: 'ai', rank: 'Q', suit: 'spades', isJoker: false },
          ],
          score: 0,
          isActive: true,
          stats: { hp: 3, maxHp: 3, geassSuccessCount: 0, geassFailCount: 0 },
        },
        opponent: {
          id: 'player',
          name: 'Player',
          isAI: false,
          hand: [],
          score: 0,
          isActive: true,
          stats: { hp: 3, maxHp: 3, geassSuccessCount: 0, geassFailCount: 0 },
        },
        history: [],
        knownCards: new Map(),
        liarCard: 'Q',
      };

      const result = aiEngine.makeDecision(context);
      expect(result).toBeInstanceOf(Promise);
    });

    test('不能同时进行多个决策', async () => {
      const context: StrategyContext = {
        gameState: {
          currentRound: 1,
          totalRounds: 10,
          currentPlayer: 'ai',
          players: [
            {
              id: 'ai',
              name: 'AI',
              isAI: true,
              hand: [
                { id: 'card1', type: 'citizen', value: 1, owner: 'ai', rank: 'Q', suit: 'spades', isJoker: false },
              ],
              score: 0,
              isActive: true,
              stats: { hp: 3, maxHp: 3, geassSuccessCount: 0, geassFailCount: 0 },
            },
            {
              id: 'player',
              name: 'Player',
              isAI: false,
              hand: [],
              score: 0,
              isActive: true,
              stats: { hp: 3, maxHp: 3, geassSuccessCount: 0, geassFailCount: 0 },
            },
          ],
          tableCards: [],
          phase: 'play',
          turnState: { playedCards: null },
        },
        aiPlayer: {
          id: 'ai',
          name: 'AI',
          isAI: true,
          hand: [
            { id: 'card1', type: 'citizen', value: 1, owner: 'ai', rank: 'Q', suit: 'spades', isJoker: false },
          ],
          score: 0,
          isActive: true,
          stats: { hp: 3, maxHp: 3, geassSuccessCount: 0, geassFailCount: 0 },
        },
        opponent: {
          id: 'player',
          name: 'Player',
          isAI: false,
          hand: [],
          score: 0,
          isActive: true,
          stats: { hp: 3, maxHp: 3, geassSuccessCount: 0, geassFailCount: 0 },
        },
        history: [],
        knownCards: new Map(),
        liarCard: 'Q',
      };

      // 开始第一个决策
      const decision1 = aiEngine.makeDecision(context);

      // 尝试开始第二个决策应该抛出错误
      await expect(aiEngine.makeDecision(context)).rejects.toThrow('AI决策正在进行中');

      // 等待第一个决策完成
      await decision1;
    });
  });
});
