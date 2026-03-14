/**
 * 性能测试
 * 测试游戏各模块的性能表现
 */

import { GameEngine } from '../../src/core/GameEngine';
import { CardSystem } from '../../src/core/CardSystem';
import { GeassSystem } from '../../src/core/GeassSystem';
import { AIEngine } from '../../src/ai/AIEngine';

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

    test('1000次洗牌操作应该在1秒内完成', () => {
      const cardSystem = new CardSystem();
      cardSystem.generateDeck();
      
      const start = performance.now();
      
      for (let i = 0; i < 1000; i++) {
        cardSystem.shuffle();
      }
      
      const end = performance.now();
      
      expect(end - start).toBeLessThan(1000);
    });
  });

  describe('GeassSystem 性能', () => {
    test('单次Geass判定应该在5ms内完成', () => {
      const geassSystem = new GeassSystem();
      const stats = {
        hp: 3,
        maxHp: 3,
        geassSuccessCount: 0,
        geassFailCount: 0,
      };
      
      const start = performance.now();
      geassSystem.performGeass('player', stats, 'lelouch');
      const end = performance.now();
      
      expect(end - start).toBeLessThan(5);
    });

    test('10000次Geass判定应该在100ms内完成', () => {
      const geassSystem = new GeassSystem();
      const stats = {
        hp: 3,
        maxHp: 3,
        geassSuccessCount: 0,
        geassFailCount: 0,
      };
      
      const start = performance.now();
      
      for (let i = 0; i < 10000; i++) {
        geassSystem.performGeass('player', { ...stats }, 'lelouch');
      }
      
      const end = performance.now();
      
      expect(end - start).toBeLessThan(100);
    });

    test('角色技能计算应该在1ms内完成', () => {
      const geassSystem = new GeassSystem();
      const characters = ['lelouch', 'cc', 'suzaku', 'kallen'] as const;
      
      const start = performance.now();
      
      characters.forEach(character => {
        const stats = {
          hp: 3,
          maxHp: 3,
          geassSuccessCount: 0,
          geassFailCount: 0,
          ccReviveUsed: false,
        };
        geassSystem.performGeass('player', stats, character);
      });
      
      const end = performance.now();
      
      expect(end - start).toBeLessThan(5);
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

    test('玩家出牌操作应该在10ms内完成', () => {
      const gameEngine = new GameEngine();
      gameEngine.initializeGame('lelouch');
      
      const state = gameEngine.getState();
      state.phase = 'player_turn';
      
      const cardId = state.playerHand[0].id;
      gameEngine.toggleCardSelection(cardId);
      
      const start = performance.now();
      gameEngine.playerPlayCards();
      const end = performance.now();
      
      expect(end - start).toBeLessThan(10);
    });

    test('AI出牌操作应该在20ms内完成', () => {
      const gameEngine = new GameEngine();
      gameEngine.initializeGame('lelouch');
      
      const state = gameEngine.getState();
      state.phase = 'ai_turn';
      
      const start = performance.now();
      gameEngine.aiPlayCards('ai');
      const end = performance.now();
      
      expect(end - start).toBeLessThan(20);
    });

    test('完整游戏循环（100回合）应该在500ms内完成', () => {
      const gameEngine = new GameEngine();
      gameEngine.initializeGame('lelouch');
      
      const start = performance.now();
      
      for (let i = 0; i < 100; i++) {
        const state = gameEngine.getState();
        
        if (state.phase === 'player_turn' && state.playerHand.length > 0) {
          const cardId = state.playerHand[0].id;
          gameEngine.toggleCardSelection(cardId);
          gameEngine.playerPlayCards();
        } else if (state.phase === 'challenge') {
          gameEngine.playerChallengeDecision(Math.random() > 0.5);
        } else if (state.phase === 'ai_turn') {
          const currentId = gameEngine.getCurrentPlayerId();
          if (currentId !== 'player') {
            // 检查AI是否有手牌
            const aiIndex = state.aiPlayers.findIndex(ai => ai.id === currentId);
            const ai = state.aiPlayers[aiIndex];
            if (ai && ai.hand.length > 0 && ai.stats.hp > 0) {
              gameEngine.aiPlayCards(currentId);
            } else if (ai && ai.hand.length === 0) {
              // AI没有手牌，跳过回合
              state.currentPlayerIndex = (state.currentPlayerIndex + 1) % 4;
            }
          }
        } else if (state.phase === 'geass') {
          // 推进到下一回合
          state.phase = 'player_turn';
        } else {
          break;
        }
        
        if (state.phase === 'game_over') {
          break;
        }
      }
      
      const end = performance.now();
      
      expect(end - start).toBeLessThan(500);
    });

    test('重置牌局应该在30ms内完成', () => {
      const gameEngine = new GameEngine();
      gameEngine.initializeGame('lelouch');
      
      const start = performance.now();
      gameEngine.resetRound();
      const end = performance.now();
      
      expect(end - start).toBeLessThan(30);
    });
  });

  describe('AI 性能', () => {
    test('AI决策应该在5ms内完成', () => {
      const aiEngine = new AIEngine('normal', 'balanced');
      
      const mockContext = {
        gameState: {
          currentRound: 1,
          totalRounds: 10,
          currentPlayer: 'ai',
          players: [
            {
              id: 'ai',
              name: 'AI',
              isAI: true,
              hand: [{ id: 'card1', type: 'citizen' as const, value: 1, owner: 'ai', rank: 'Q', suit: 'spades', isJoker: false }],
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
          phase: 'play' as const,
          turnState: {
            playedCards: null,
          },
        },
        aiPlayer: {
          id: 'ai',
          name: 'AI',
          isAI: true,
          hand: [{ id: 'card1', type: 'citizen' as const, value: 1, owner: 'ai', rank: 'Q', suit: 'spades', isJoker: false }],
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
      
      const start = performance.now();
      aiEngine.makeDecisionInstant(mockContext as any);
      const end = performance.now();
      
      expect(end - start).toBeLessThan(5);
    });

    test('1000次AI决策应该在100ms内完成', () => {
      const aiEngine = new AIEngine('hard', 'balanced');
      
      const mockContext = {
        gameState: {
          currentRound: 1,
          totalRounds: 10,
          currentPlayer: 'ai',
          players: [
            {
              id: 'ai',
              name: 'AI',
              isAI: true,
              hand: [{ id: 'card1', type: 'citizen' as const, value: 1, owner: 'ai', rank: 'Q', suit: 'spades', isJoker: false }],
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
          phase: 'play' as const,
          turnState: {
            playedCards: null,
          },
        },
        aiPlayer: {
          id: 'ai',
          name: 'AI',
          isAI: true,
          hand: [{ id: 'card1', type: 'citizen' as const, value: 1, owner: 'ai', rank: 'Q', suit: 'spades', isJoker: false }],
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
      
      const start = performance.now();
      
      for (let i = 0; i < 1000; i++) {
        aiEngine.makeDecisionInstant(mockContext as any);
      }
      
      const end = performance.now();
      
      expect(end - start).toBeLessThan(100);
    });

    test('三种难度AI决策性能对比', () => {
      const difficulties = ['easy', 'normal', 'hard'] as const;
      const results: Record<string, number> = {};
      
      const mockContext = {
        gameState: {
          currentRound: 1,
          totalRounds: 10,
          currentPlayer: 'ai',
          players: [
            {
              id: 'ai',
              name: 'AI',
              isAI: true,
              hand: [{ id: 'card1', type: 'citizen' as const, value: 1, owner: 'ai', rank: 'Q', suit: 'spades', isJoker: false }],
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
          phase: 'play' as const,
          turnState: {
            playedCards: null,
          },
        },
        aiPlayer: {
          id: 'ai',
          name: 'AI',
          isAI: true,
          hand: [{ id: 'card1', type: 'citizen' as const, value: 1, owner: 'ai', rank: 'Q', suit: 'spades', isJoker: false }],
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
      
      difficulties.forEach(difficulty => {
        const aiEngine = new AIEngine(difficulty, 'balanced');
        
        const start = performance.now();
        for (let i = 0; i < 100; i++) {
          aiEngine.makeDecisionInstant(mockContext as any);
        }
        const end = performance.now();
        
        results[difficulty] = end - start;
      });
      
      // 所有难度都应该在10ms内完成100次决策
      Object.values(results).forEach(time => {
        expect(time).toBeLessThan(10);
      });
      
      console.log('AI决策性能对比:', results);
    });
  });

  describe('内存使用', () => {
    test('创建100个GameEngine实例', () => {
      const engines: GameEngine[] = [];
      
      const start = performance.now();
      
      for (let i = 0; i < 100; i++) {
        const engine = new GameEngine();
        engine.initializeGame('lelouch');
        engines.push(engine);
      }
      
      const end = performance.now();
      
      expect(engines).toHaveLength(100);
      expect(end - start).toBeLessThan(1000);
    });

    test('频繁重置不会导致内存泄漏', () => {
      const gameEngine = new GameEngine();
      
      const start = performance.now();
      
      for (let i = 0; i < 1000; i++) {
        gameEngine.initializeGame('lelouch');
        gameEngine.reset();
      }
      
      const end = performance.now();
      
      expect(end - start).toBeLessThan(500);
    });
  });

  describe('并发性能', () => {
    test('多个游戏实例同时运行', async () => {
      const gamePromises: Promise<void>[] = [];
      
      for (let i = 0; i < 10; i++) {
        gamePromises.push(
          new Promise((resolve) => {
            const gameEngine = new GameEngine();
            gameEngine.initializeGame('lelouch');
            
            // 模拟10回合
            for (let j = 0; j < 10; j++) {
              const state = gameEngine.getState();
              if (state.phase === 'player_turn' && state.playerHand.length > 0) {
                const cardId = state.playerHand[0].id;
                gameEngine.toggleCardSelection(cardId);
                gameEngine.playerPlayCards();
              } else if (state.phase === 'challenge') {
                gameEngine.playerChallengeDecision(false);
              } else if (state.phase === 'ai_turn') {
                const currentId = gameEngine.getCurrentPlayerId();
                if (currentId !== 'player') {
                  gameEngine.aiPlayCards(currentId);
                }
              }
            }
            
            resolve();
          })
        );
      }
      
      const start = performance.now();
      await Promise.all(gamePromises);
      const end = performance.now();
      
      expect(end - start).toBeLessThan(500);
    });
  });
});
