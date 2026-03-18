/**
 * 性能测试
 * 测试游戏各模块的性能表现
 */

import { GameEngine } from '../../src/core/GameEngineV2';
import { CardSystem } from '../../src/core/CardSystem';
import { GeassSystem } from '../../src/core/GeassSystem';
import { DynamicAIEngine } from '../../src/ai/DynamicAIEngine';

describe('性能测试', () => {
  describe('CardSystem 性能', () => {
    test('生成牌组应该在10ms内完成', () => {
      const cardSystem = new CardSystem();
      
      const start = performance.now();
      cardSystem.generateDeck();
      const end = performance.now();
      
      expect(end - start).toBeLessThan(10);
    });

    test('洗牌应该在5ms内完成', () => {
      const cardSystem = new CardSystem();
      cardSystem.generateDeck();
      
      const start = performance.now();
      cardSystem.shuffle();
      const end = performance.now();
      
      expect(end - start).toBeLessThan(5);
    });

    test('发牌应该在5ms内完成', () => {
      const cardSystem = new CardSystem();
      cardSystem.generateDeck();
      cardSystem.shuffle();
      
      const start = performance.now();
      cardSystem.dealCards();
      const end = performance.now();
      
      expect(end - start).toBeLessThan(5);
    });
  });

  describe('GeassSystem 性能', () => {
    test('单次Geass判定应该在1ms内完成', () => {
      const geassSystem = new GeassSystem();
      const targetStats = { hp: 3, maxHp: 3, geassSuccessCount: 0, geassFailCount: 0 };
      
      const start = performance.now();
      geassSystem.performGeass('player', targetStats, null, 0, 0);
      const end = performance.now();
      
      expect(end - start).toBeLessThan(1);
    });

    test('100次Geass判定应该在10ms内完成', () => {
      const geassSystem = new GeassSystem();
      const targetStats = { hp: 3, maxHp: 3, geassSuccessCount: 0, geassFailCount: 0 };
      
      const start = performance.now();
      for (let i = 0; i < 100; i++) {
        geassSystem.performGeass('player', targetStats, null, 0, 0);
      }
      const end = performance.now();
      
      expect(end - start).toBeLessThan(10);
    });
  });

  describe('GameEngine 性能', () => {
    test('游戏初始化应该在50ms内完成', () => {
      const gameEngine = new GameEngine();
      
      const start = performance.now();
      gameEngine.initializeGame('lelouch');
      const end = performance.now();
      
      expect(end - start).toBeLessThan(50);
    });

    test('玩家出牌应该在10ms内完成', () => {
      const gameEngine = new GameEngine();
      gameEngine.initializeGame('lelouch');
      const state = gameEngine.getState();
      const cardIds = state.playerHand.slice(0, 1).map(c => c.id);
      
      const start = performance.now();
      gameEngine.playCards(cardIds, 'Q');
      const end = performance.now();
      
      expect(end - start).toBeLessThan(10);
    });
  });

  describe('DynamicAIEngine 性能', () => {
    test('AI决策应该在20ms内完成', () => {
      const aiEngine = new DynamicAIEngine('lelouch');
      const context = {
        gameState: {
          phase: 'player_turn' as const,
          liarCard: 'Q' as const,
          playerStats: { hp: 3, maxHp: 3, geassSuccessCount: 0, geassFailCount: 0 },
          aiPlayers: [
            {
              id: 'ai' as const,
              name: 'AI',
              character: 'lelouch' as const,
              hand: [
                { id: 'card-1', suit: 'spades' as const, rank: 'Q' as const, isJoker: false },
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
          playerCharacter: 'lelouch' as const,
          characterStates: new Map(),
        },
        aiPlayer: {
          id: 'ai' as const,
          name: 'AI',
          character: 'lelouch' as const,
          hand: [
            { id: 'card-1', suit: 'spades' as const, rank: 'Q' as const, isJoker: false },
          ],
          stats: { hp: 3, maxHp: 3, geassSuccessCount: 0, geassFailCount: 0 },
          isActive: true,
        },
        liarCard: 'Q' as const,
        turnState: {
          turnNumber: 1,
          playedCards: null,
          tableCards: [],
          lastPlayerId: null,
          geassConsecutiveMisses: 0,
        },
      };
      
      const start = performance.now();
      aiEngine.makeDecision(context);
      const end = performance.now();
      
      expect(end - start).toBeLessThan(20);
    });
  });
});
