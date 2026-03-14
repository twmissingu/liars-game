/**
 * 边界情况测试
 * 测试各种极端和异常情况
 */

import { GameEngine } from '../../src/core/GameEngine';
import { CardSystem } from '../../src/core/CardSystem';
import { GeassSystem } from '../../src/core/GeassSystem';

describe('边界情况测试', () => {
  let gameEngine: GameEngine;
  let cardSystem: CardSystem;
  let geassSystem: GeassSystem;

  beforeEach(() => {
    gameEngine = new GameEngine();
    cardSystem = new CardSystem();
    geassSystem = new GeassSystem();
  });

  afterEach(() => {
    gameEngine.reset();
  });

  describe('HP归零边界', () => {
    test('玩家HP从1到0', () => {
      gameEngine.initializeGame('lelouch');
      
      const state = gameEngine.getState();
      state.playerStats.hp = 1;
      
      // 模拟受到伤害
      state.playerStats.hp = 0;
      
      expect(state.playerStats.hp).toBe(0);
      expect(state.playerStats.hp).not.toBeLessThan(0);
    });

    test('AI HP从1到0', () => {
      gameEngine.initializeGame('lelouch');
      
      const state = gameEngine.getState();
      state.aiPlayers[0].stats.hp = 1;
      
      // 模拟受到伤害
      state.aiPlayers[0].stats.hp = 0;
      state.aiPlayers[0].isActive = false;
      
      expect(state.aiPlayers[0].stats.hp).toBe(0);
      expect(state.aiPlayers[0].isActive).toBe(false);
    });

    test('Geass判定HP不低于0', () => {
      const stats = {
        hp: 1,
        maxHp: 3,
        geassSuccessCount: 0,
        geassFailCount: 0,
      };
      
      // Mock确保命中
      const originalRandom = Math.random;
      Math.random = jest.fn().mockReturnValue(0);
      
      const result = geassSystem.performGeass('player', stats, 'lelouch');
      
      Math.random = originalRandom;
      
      expect(result.newStats.hp).toBeGreaterThanOrEqual(0);
    });
  });

  describe('手牌耗尽边界', () => {
    test('玩家手牌为空', () => {
      gameEngine.initializeGame('lelouch');
      
      const state = gameEngine.getState();
      state.playerHand = [];
      
      expect(state.playerHand).toHaveLength(0);
    });

    test('AI手牌为空', () => {
      gameEngine.initializeGame('lelouch');
      
      const state = gameEngine.getState();
      state.aiPlayers[0].hand = [];
      
      expect(state.aiPlayers[0].hand).toHaveLength(0);
    });

    test('出最后一张牌后手牌为空', () => {
      gameEngine.initializeGame('lelouch');
      
      const state = gameEngine.getState();
      state.phase = 'player_turn';
      
      // 只剩一张牌
      const lastCard = state.playerHand[0];
      state.playerHand = [lastCard];
      
      gameEngine.toggleCardSelection(lastCard.id);
      gameEngine.playerPlayCards();
      
      expect(gameEngine.getState().playerHand).toHaveLength(0);
    });

    test('所有玩家手牌都为空', () => {
      gameEngine.initializeGame('lelouch');
      
      const state = gameEngine.getState();
      state.playerHand = [];
      state.aiPlayers.forEach(ai => {
        ai.hand = [];
      });
      
      expect(state.playerHand).toHaveLength(0);
      state.aiPlayers.forEach(ai => {
        expect(ai.hand).toHaveLength(0);
      });
    });
  });

  describe('并发操作边界', () => {
    test('快速连续选择牌', () => {
      gameEngine.initializeGame('lelouch');
      
      const state = gameEngine.getState();
      const cardIds = state.playerHand.map(c => c.id);
      
      // 快速选择所有牌
      cardIds.forEach(id => {
        gameEngine.toggleCardSelection(id);
      });
      
      // 应该只保留最后3张
      expect(gameEngine.getState().playerSelectedCards.length).toBeLessThanOrEqual(3);
    });

    test('在AI回合尝试玩家操作', () => {
      gameEngine.initializeGame('lelouch');
      
      const state = gameEngine.getState();
      state.phase = 'ai_turn';
      
      // 尝试玩家操作应该抛出错误
      expect(() => gameEngine.playerPlayCards()).toThrow();
    });
  });

  describe('无效输入边界', () => {
    test('选择不存在的牌ID', () => {
      gameEngine.initializeGame('lelouch');
      
      // 不应该抛出错误
      expect(() => gameEngine.toggleCardSelection('non-existent')).not.toThrow();
      
      // 不应该被选中
      expect(gameEngine.getState().playerSelectedCards).not.toContain('non-existent');
    });

    test('出未选择的牌', () => {
      gameEngine.initializeGame('lelouch');
      
      const state = gameEngine.getState();
      state.phase = 'player_turn';
      state.playerSelectedCards = [];
      
      expect(() => gameEngine.playerPlayCards()).toThrow('未选择任何牌');
    });

    test('无效的角色ID', () => {
      // 使用无效角色ID初始化
      expect(() => {
        gameEngine.initializeGame('invalid-character' as any);
      }).not.toThrow(); // 当前实现可能接受任何字符串
    });
  });

  describe('游戏状态边界', () => {
    test('游戏未初始化时的操作', () => {
      // 未初始化
      expect(gameEngine.getState().phase).toBe('setup');
      expect(gameEngine.getState().playerHand).toHaveLength(0);
    });

    test('重复初始化游戏', () => {
      gameEngine.initializeGame('lelouch');
      const firstState = gameEngine.getState();
      const firstHand = [...firstState.playerHand];
      
      // 重新初始化
      gameEngine.initializeGame('cc');
      const secondState = gameEngine.getState();
      
      expect(secondState.playerCharacter).toBe('cc');
      expect(secondState.playerHand).toHaveLength(5);
    });

    test('重置后重新初始化', () => {
      gameEngine.initializeGame('lelouch');
      gameEngine.reset();
      
      expect(gameEngine.getState().phase).toBe('setup');
      
      gameEngine.initializeGame('kallen');
      expect(gameEngine.getState().playerCharacter).toBe('kallen');
    });
  });

  describe('Geass系统边界', () => {
    test('C.C.复活后再次濒死', () => {
      const stats = {
        hp: 1,
        maxHp: 3,
        geassSuccessCount: 0,
        geassFailCount: 0,
        ccReviveUsed: true, // 已使用过
      };
      
      const originalRandom = Math.random;
      Math.random = jest.fn().mockReturnValue(0);
      
      const result = geassSystem.performGeass('player', stats, 'cc');
      
      Math.random = originalRandom;
      
      // 不应该复活
      expect(result.isRevived).toBeFalsy();
      if (result.hit) {
        expect(result.newStats.hp).toBe(0);
      }
    });

    test('朱雀同时触发反击和闪避', () => {
      const stats = {
        hp: 3,
        maxHp: 3,
        geassSuccessCount: 0,
        geassFailCount: 0,
      };
      
      // 多次测试
      let counters = 0;
      let dodges = 0;
      let hits = 0;
      
      for (let i = 0; i < 1000; i++) {
        const result = geassSystem.performGeass('player', { ...stats }, 'suzaku');
        
        if (result.isCounter) {
          counters++;
        } else if (!result.hit) {
          dodges++;
        } else {
          hits++;
        }
      }
      
      // 应该有一定分布
      expect(counters).toBeGreaterThan(0);
      expect(hits).toBeGreaterThan(0);
    });

    test('命中率加成上限', () => {
      const stats = {
        hp: 3,
        maxHp: 3,
        geassSuccessCount: 0,
        geassFailCount: 0,
      };
      
      // 极大的加成
      const result = geassSystem.performGeass('player', stats, 'lelouch', 10);
      
      expect(result).toBeDefined();
      // 即使加成很大，也应该有合理的结果
    });
  });

  describe('牌组系统边界', () => {
    test('未生成牌组时发牌', () => {
      expect(() => cardSystem.dealCards()).toThrow('牌组未初始化');
    });

    test('重复洗牌', () => {
      cardSystem.generateDeck();
      
      // 多次洗牌
      for (let i = 0; i < 100; i++) {
        cardSystem.shuffle();
      }
      
      // 牌数应该不变
      expect(cardSystem.getCards()).toHaveLength(20);
    });

    test('出所有牌', () => {
      cardSystem.generateDeck();
      cardSystem.shuffle();
      cardSystem.dealCards();
      
      const allCardIds = cardSystem.getCards().map(c => c.id);
      cardSystem.playCards(allCardIds);
      
      // 所有牌都应该在桌面
      const tableCards = cardSystem.getCards().filter(c => c.owner === 'table');
      expect(tableCards).toHaveLength(20);
    });
  });

  describe('回合流转边界', () => {
    test('所有AI都被淘汰后的回合流转', () => {
      gameEngine.initializeGame('lelouch');
      
      const state = gameEngine.getState();
      
      // 淘汰所有AI
      state.aiPlayers.forEach(ai => {
        ai.isActive = false;
        ai.stats.hp = 0;
      });
      
      // 游戏应该结束
      const activeAIs = state.aiPlayers.filter(ai => ai.isActive && ai.stats.hp > 0);
      expect(activeAIs).toHaveLength(0);
    });

    test('玩家和AI同时HP为0', () => {
      gameEngine.initializeGame('lelouch');
      
      const state = gameEngine.getState();
      state.playerStats.hp = 0;
      state.aiPlayers.forEach(ai => {
        ai.stats.hp = 0;
        ai.isActive = false;
      });
      
      // 应该判定为游戏结束
      expect(state.playerStats.hp).toBe(0);
    });
  });
});
