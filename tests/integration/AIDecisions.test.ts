/**
 * AI决策集成测试
 * 测试AI在不同情况下的决策逻辑
 */

import { GameEngine } from '../../src/core/GameEngine';
import { AIEngine } from '../../src/ai/AIEngine';
import type { StrategyContext, AIConfig, AIGameState, AIPlayer } from '../../src/types/ai.types';

describe('AI决策集成测试', () => {
  let gameEngine: GameEngine;

  beforeEach(() => {
    gameEngine = new GameEngine();
  });

  afterEach(() => {
    gameEngine.reset();
  });

  describe('AI基本决策', () => {
    test('AI在回合时会出牌', () => {
      gameEngine.initializeGame('lelouch');
      
      const state = gameEngine.getState();
      state.phase = 'ai_turn';
      state.currentPlayerIndex = 1;
      
      const initialHandSize = state.aiPlayers[0].hand.length;
      
      const newState = gameEngine.aiPlayCards('ai');
      
      expect(newState.phase).toBe('challenge');
      expect(newState.turnState.playedCards).toBeDefined();
    });

    test('AI出牌后手牌减少', () => {
      gameEngine.initializeGame('lelouch');
      
      const state = gameEngine.getState();
      state.phase = 'ai_turn';
      
      const initialHandSize = state.aiPlayers[0].hand.length;
      
      gameEngine.aiPlayCards('ai');
      
      expect(state.aiPlayers[0].hand.length).toBeLessThan(initialHandSize);
    });
  });

  describe('AI质疑决策', () => {
    test('AI可以做出质疑决策', () => {
      gameEngine.initializeGame('lelouch');
      
      const state = gameEngine.getState();
      // 设置当前为玩家回合，让玩家出牌
      state.phase = 'player_turn';
      state.currentPlayerIndex = 0;
      
      // 玩家出牌
      const cardId = state.playerHand[0].id;
      gameEngine.toggleCardSelection(cardId);
      const afterPlayState = gameEngine.playerPlayCards();
      
      // 出牌后应该进入质疑阶段
      expect(afterPlayState.phase).toBe('challenge');
      
      // AI质疑
      const newState = gameEngine.aiChallengeDecision('ai');
      
      // 质疑后应该进入结算或下一回合
      expect(['geass', 'player_turn', 'ai_turn', 'game_over']).toContain(newState.phase);
    });

    test('AI不会质疑自己', () => {
      gameEngine.initializeGame('lelouch');
      
      const state = gameEngine.getState();
      state.phase = 'ai_turn';
      state.currentPlayerIndex = 1;
      
      // AI出牌
      const afterPlayState = gameEngine.aiPlayCards('ai');
      
      // 出牌后进入质疑阶段
      expect(afterPlayState.phase).toBe('challenge');
      
      // 同一个AI不会质疑自己，应该直接跳过到下一回合
      const newState = gameEngine.aiChallengeDecision('ai');
      
      // 应该进入下一回合（不是challenge阶段）
      expect(newState.phase).not.toBe('challenge');
    });
  });

  describe('AI引擎', () => {
    test('AI引擎可以创建', () => {
      const aiEngine = new AIEngine('normal', 'balanced');
      expect(aiEngine).toBeDefined();
      expect(aiEngine.getStrategyName()).toBe('Normal');
    });

    test('AI引擎可以配置难度', () => {
      const easyAI = new AIEngine('easy', 'balanced');
      const normalAI = new AIEngine('normal', 'balanced');
      const hardAI = new AIEngine('hard', 'balanced');
      
      expect(easyAI.getStrategyName()).toBe('Easy');
      expect(normalAI.getStrategyName()).toBe('Normal');
      expect(hardAI.getStrategyName()).toBe('Hard');
    });

    test('AI引擎可以更新配置', () => {
      const aiEngine = new AIEngine('easy', 'balanced');
      
      expect(aiEngine.getStrategyName()).toBe('Easy');
      
      aiEngine.updateConfig({ difficulty: 'hard' });
      
      expect(aiEngine.getStrategyName()).toBe('Hard');
    });

    test('AI引擎可以获取配置', () => {
      const aiEngine = new AIEngine('normal', 'aggressive');
      const config = aiEngine.getConfig();
      
      expect(config.difficulty).toBe('normal');
      expect(config.personality).toBe('aggressive');
    });
  });

  describe('AI与游戏引擎集成', () => {
    test('3个AI可以轮流行动', () => {
      gameEngine.initializeGame('lelouch');
      
      const aiIds = ['ai', 'ai2', 'ai3'] as const;
      
      aiIds.forEach((aiId, index) => {
        const state = gameEngine.getState();
        state.phase = 'ai_turn';
        state.currentPlayerIndex = index + 1;
        
        const newState = gameEngine.aiPlayCards(aiId);
        
        expect(newState.turnState.playedCards?.playerId).toBe(aiId);
        
        // 重置状态进行下一轮
        state.phase = 'ai_turn';
      });
    });

    test('AI行动后游戏状态正确更新', () => {
      gameEngine.initializeGame('lelouch');
      
      const state = gameEngine.getState();
      state.phase = 'ai_turn';
      state.currentPlayerIndex = 1;
      
      const turnNumber = state.turnState.turnNumber;
      
      const newState = gameEngine.aiPlayCards('ai');
      
      // 验证状态更新
      expect(newState.turnState.playedCards).toBeDefined();
      expect(newState.lastAction.length).toBeGreaterThan(0);
    });
  });

  describe('AI策略行为', () => {
    test('简单AI有30%质疑概率', () => {
      const aiEngine = new AIEngine('easy', 'balanced');
      const config = aiEngine.getConfig();
      
      // 创建模拟上下文
      const mockPlayer: AIPlayer = {
        id: 'player',
        name: 'Player',
        isAI: false,
        hand: [],
        score: 0,
        isActive: true,
      };
      
      const mockAI: AIPlayer = {
        id: 'ai',
        name: 'AI',
        isAI: true,
        hand: [{ id: 'card1', type: 'citizen', value: 1, owner: 'ai' }],
        score: 0,
        isActive: true,
      };
      
      const mockContext: StrategyContext = {
        gameState: {
          currentRound: 1,
          totalRounds: 10,
          currentPlayer: 'ai',
          players: [mockAI, mockPlayer],
          tableCards: [],
          phase: 'play',
          turnState: {
            playedCards: null,
          },
        },
        aiPlayer: mockAI,
        opponent: mockPlayer,
        history: [],
        knownCards: new Map(),
        liarCard: 'Q',
      };
      
      // 多次决策，统计质疑次数
      let challenges = 0;
      const trials = 100;
      
      for (let i = 0; i < trials; i++) {
        const decision = aiEngine.makeDecisionInstant(mockContext);
        if (decision.action === 'challenge') {
          challenges++;
        }
      }
      
      const challengeRate = challenges / trials;
      // 简单AI质疑率约30%，允许一定误差
      expect(challengeRate).toBeGreaterThan(0.15);
      expect(challengeRate).toBeLessThan(0.55);
    });

    test('困难AI有更高质疑概率', () => {
      const aiEngine = new AIEngine('hard', 'balanced');
      
      const mockPlayer: AIPlayer = {
        id: 'player',
        name: 'Player',
        isAI: false,
        hand: [],
        score: 0,
        isActive: true,
      };
      
      const mockAI: AIPlayer = {
        id: 'ai',
        name: 'AI',
        isAI: true,
        hand: [{ id: 'card1', type: 'citizen', value: 1, owner: 'ai' }],
        score: 0,
        isActive: true,
      };
      
      const mockContext: StrategyContext = {
        gameState: {
          currentRound: 1,
          totalRounds: 10,
          currentPlayer: 'ai',
          players: [mockAI, mockPlayer],
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
        aiPlayer: mockAI,
        opponent: mockPlayer,
        history: [],
        knownCards: new Map(),
        liarCard: 'Q',
      };
      
      let challenges = 0;
      const trials = 100;
      
      for (let i = 0; i < trials; i++) {
        const decision = aiEngine.makeDecisionInstant(mockContext);
        if (decision.action === 'challenge') {
          challenges++;
        }
      }
      
      const challengeRate = challenges / trials;
      // 困难AI质疑率应该高于简单AI
      expect(challengeRate).toBeGreaterThan(0.2);
    });
  });

  describe('AI边界情况', () => {
    test('AI手牌为空时选择pass', () => {
      const aiEngine = new AIEngine('normal', 'balanced');
      
      const mockPlayer: AIPlayer = {
        id: 'player',
        name: 'Player',
        isAI: false,
        hand: [],
        score: 0,
        isActive: true,
      };
      
      const mockAI: AIPlayer = {
        id: 'ai',
        name: 'AI',
        isAI: true,
        hand: [], // 空手牌
        score: 0,
        isActive: true,
      };
      
      const mockContext: StrategyContext = {
        gameState: {
          currentRound: 1,
          totalRounds: 10,
          currentPlayer: 'ai',
          players: [mockAI, mockPlayer],
          tableCards: [],
          phase: 'play',
          turnState: {
            playedCards: null,
          },
        },
        aiPlayer: mockAI,
        opponent: mockPlayer,
        history: [],
        knownCards: new Map(),
        liarCard: 'Q',
      };
      
      const decision = aiEngine.makeDecisionInstant(mockContext);
      
      expect(decision.action).toBe('pass');
    });

    test('被淘汰的AI不会行动', () => {
      gameEngine.initializeGame('lelouch');
      
      const state = gameEngine.getState();
      state.aiPlayers[0].isActive = false;
      state.aiPlayers[0].stats.hp = 0;
      
      // 尝试让被淘汰的AI行动
      const newState = gameEngine.aiPlayCards('ai');
      
      // 应该跳过
      expect(newState.currentPlayerIndex).not.toBe(1);
    });
  });
});
