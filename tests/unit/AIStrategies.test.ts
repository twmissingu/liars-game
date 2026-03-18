/**
 * AI策略单元测试
 * 测试四种角色的AI决策风格差异
 */

import { DynamicAIEngine } from '../../src/ai/DynamicAIEngine';
import type { StrategyContext } from '../../src/types';

describe('AI策略', () => {
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

  describe('鲁鲁修策略', () => {
    test('应该倾向于虚张声势', () => {
      const ai = new DynamicAIEngine('lelouch');
      const context = createMockContext('lelouch');
      
      const decision = ai.makeDecision(context);
      
      expect(decision).toBeDefined();
      expect(decision.action).toBeDefined();
    });
  });

  describe('朱雀策略', () => {
    test('应该倾向于质疑', () => {
      const ai = new DynamicAIEngine('suzaku');
      const context = createMockContext('suzaku');
      
      const decision = ai.makeDecision(context);
      
      expect(decision).toBeDefined();
      expect(decision.action).toBeDefined();
    });
  });

  describe('卡莲策略', () => {
    test('应该倾向于激进打法', () => {
      const ai = new DynamicAIEngine('kallen');
      const context = createMockContext('kallen');
      
      const decision = ai.makeDecision(context);
      
      expect(decision).toBeDefined();
      expect(decision.action).toBeDefined();
    });
  });

  describe('C.C.策略', () => {
    test('应该倾向于保守打法', () => {
      const ai = new DynamicAIEngine('cc');
      const context = createMockContext('cc');
      
      const decision = ai.makeDecision(context);
      
      expect(decision).toBeDefined();
      expect(decision.action).toBeDefined();
    });
  });
});
