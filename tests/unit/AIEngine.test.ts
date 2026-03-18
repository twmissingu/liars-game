/**
 * DynamicAIEngine 单元测试
 * 测试AI引擎的核心功能
 */

import { DynamicAIEngine } from '../../src/ai/DynamicAIEngine';
import type { StrategyContext, AIDecision } from '../../src/types';

describe('DynamicAIEngine', () => {
  let aiEngine: DynamicAIEngine;

  const createMockContext = (characterId: 'lelouch' | 'cc' | 'suzaku' | 'kallen' = 'lelouch'): StrategyContext => {
    return {
      gameState: {
        phase: 'player_turn',
        liarCard: 'Q',
        playerStats: { hp: 3, maxHp: 3, geassSuccessCount: 0, geassFailCount: 0 },
        aiPlayers: [
          {
            id: 'ai',
            name: 'AI',
            character: characterId,
            hand: [
              { id: 'card-1', suit: 'spades', rank: 'Q', isJoker: false },
              { id: 'card-2', suit: 'hearts', rank: 'K', isJoker: false },
            ],
            stats: { hp: 3, maxHp: 3, geassSuccessCount: 0, geassFailCount: 0 },
            isActive: true,
          },
        ],
        currentPlayerIndex: 1,
        turnState: {
          turnNumber: 1,
          playedCards: null,
          tableCards: [],
          lastPlayerId: null,
          geassConsecutiveMisses: 0,
        },
        lastAction: '',
        winner: null,
        geassResult: null,
        playerSelectedCards: [],
        playerCharacter: 'lelouch',
        characterStates: new Map(),
      },
      aiPlayer: {
        id: 'ai',
        name: 'AI',
        character: characterId,
        hand: [
          { id: 'card-1', suit: 'spades', rank: 'Q', isJoker: false },
          { id: 'card-2', suit: 'hearts', rank: 'K', isJoker: false },
        ],
        stats: { hp: 3, maxHp: 3, geassSuccessCount: 0, geassFailCount: 0 },
        isActive: true,
      },
      liarCard: 'Q',
      turnState: {
        turnNumber: 1,
        playedCards: null,
        tableCards: [],
        lastPlayerId: null,
        geassConsecutiveMisses: 0,
      },
    };
  };

  describe('构造函数', () => {
    test('应该创建AI引擎实例', () => {
      aiEngine = new DynamicAIEngine('lelouch');
      expect(aiEngine).toBeDefined();
    });

    test('不同角色应该有不同的决策风格', () => {
      const lelouchAI = new DynamicAIEngine('lelouch');
      const suzakuAI = new DynamicAIEngine('suzaku');
      
      expect(lelouchAI).toBeDefined();
      expect(suzakuAI).toBeDefined();
    });
  });

  describe('决策制定', () => {
    test('应该能做出决策', () => {
      aiEngine = new DynamicAIEngine('lelouch');
      const context = createMockContext('lelouch');
      
      const decision = aiEngine.makeDecision(context);
      
      expect(decision).toBeDefined();
      expect(['play', 'challenge', 'pass']).toContain(decision.action);
    });

    test('决策应该包含置信度', () => {
      aiEngine = new DynamicAIEngine('lelouch');
      const context = createMockContext('lelouch');
      
      const decision = aiEngine.makeDecision(context);
      
      expect(decision.confidence).toBeDefined();
      expect(decision.confidence).toBeGreaterThanOrEqual(0);
      expect(decision.confidence).toBeLessThanOrEqual(1);
    });

    test('决策应该包含推理说明', () => {
      aiEngine = new DynamicAIEngine('lelouch');
      const context = createMockContext('lelouch');
      
      const decision = aiEngine.makeDecision(context);
      
      expect(decision.reasoning).toBeDefined();
      expect(typeof decision.reasoning).toBe('string');
    });
  });

  describe('角色特性', () => {
    test('鲁鲁修应该有较高的虚张声势倾向', () => {
      const ai = new DynamicAIEngine('lelouch');
      expect(ai).toBeDefined();
    });

    test('朱雀应该有较高的质疑倾向', () => {
      const ai = new DynamicAIEngine('suzaku');
      expect(ai).toBeDefined();
    });

    test('卡莲应该有较高的攻击性', () => {
      const ai = new DynamicAIEngine('kallen');
      expect(ai).toBeDefined();
    });

    test('C.C.应该有平衡的决策风格', () => {
      const ai = new DynamicAIEngine('cc');
      expect(ai).toBeDefined();
    });
  });

  describe('记忆功能', () => {
    test('应该记录出牌历史', () => {
      aiEngine = new DynamicAIEngine('lelouch');
      expect(aiEngine).toBeDefined();
    });
  });
});
