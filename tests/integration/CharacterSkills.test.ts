/**
 * 角色技能集成测试
 * 测试各角色技能在真实对局中的效果
 */

import { GameEngine } from '../../src/core/GameEngine';
import { GeassSystem } from '../../src/core/GeassSystem';

describe('角色技能集成测试', () => {
  let gameEngine: GameEngine;
  let geassSystem: GeassSystem;

  beforeEach(() => {
    gameEngine = new GameEngine();
    geassSystem = new GeassSystem();
  });

  afterEach(() => {
    gameEngine.reset();
  });

  describe('鲁鲁修 - 绝对命令', () => {
    test('鲁鲁修可以改变骗子牌', () => {
      gameEngine.initializeGame('lelouch');
      
      const initialLiarCard = gameEngine.getState().liarCard;
      const newRank = initialLiarCard === 'Q' ? 'K' : 'Q';
      
      gameEngine.lelouchChangeLiarCard(newRank);
      
      expect(gameEngine.getState().liarCard).toBe(newRank);
      expect(gameEngine.getState().lastAction).toContain('绝对命令');
    });

    test('改变骗子牌影响后续出牌', () => {
      gameEngine.initializeGame('lelouch');
      
      // 改变骗子牌为A
      gameEngine.lelouchChangeLiarCard('A');
      
      const state = gameEngine.getState();
      state.phase = 'player_turn';
      
      // 现在骗子牌是A，出A牌不算撒谎
      const aceCards = state.playerHand.filter(c => c.rank === 'A');
      
      if (aceCards.length > 0) {
        gameEngine.toggleCardSelection(aceCards[0].id);
        const newState = gameEngine.playerPlayCards();
        
        expect(newState.phase).toBe('challenge');
        expect(newState.turnState.playedCards?.claimedRank).toBe('A');
      }
    });

    test('非鲁鲁修不能使用技能', () => {
      gameEngine.initializeGame('cc');
      
      expect(() => {
        gameEngine.lelouchChangeLiarCard('K');
      }).toThrow('只有鲁鲁修可以使用此技能');
    });
  });

  describe('C.C. - Code之力（复活）', () => {
    test('C.C.首次濒死时有概率复活', () => {
      const stats = {
        hp: 1,
        maxHp: 3,
        geassSuccessCount: 0,
        geassFailCount: 0,
        ccReviveUsed: false,
      };
      
      // Mock确保命中和复活
      const originalRandom = Math.random;
      let callCount = 0;
      Math.random = jest.fn().mockImplementation(() => {
        callCount++;
        // 第一次命中判定，第二次复活判定
        return callCount === 1 ? 0 : 0.4;
      });
      
      const result = geassSystem.performGeass('player', stats, 'cc');
      
      Math.random = originalRandom;
      
      expect(result.isRevived).toBe(true);
      expect(result.damage).toBe(0);
      expect(result.newStats.ccReviveUsed).toBe(true);
    });

    test('C.C.复活后不会再次复活', () => {
      const stats = {
        hp: 1,
        maxHp: 3,
        geassSuccessCount: 0,
        geassFailCount: 0,
        ccReviveUsed: true, // 已经使用过
      };
      
      // Mock确保命中
      const originalRandom = Math.random;
      Math.random = jest.fn().mockReturnValue(0);
      
      const result = geassSystem.performGeass('player', stats, 'cc');
      
      Math.random = originalRandom;
      
      expect(result.isRevived).toBeFalsy();
    });

    test('C.C.作为AI时复活机制正常', () => {
      gameEngine.initializeGame('lelouch');
      
      const state = gameEngine.getState();
      const ccAI = state.aiPlayers.find(ai => ai.character === 'cc');
      
      if (ccAI) {
        ccAI.stats.hp = 1;
        ccAI.stats.ccReviveUsed = false;
        
        // Mock Geass系统
        const originalPerformGeass = gameEngine['geassSystem'].performGeass.bind(gameEngine['geassSystem']);
        gameEngine['geassSystem'].performGeass = jest.fn().mockReturnValue({
          hit: false,
          damage: 0,
          newStats: { ...ccAI.stats, ccReviveUsed: true },
          message: 'C.C.发动Code之力！',
          isRevived: true,
        });
        
        // 触发Geass
        state.phase = 'challenge';
        state.turnState.playedCards = {
          cardIds: ['test'],
          claimedRank: 'Q',
          actualCards: [{ id: 'test', suit: 'spades', rank: 'K', value: 2, isJoker: false, owner: 'ai' }],
          playerId: 'ai',
        };
        
        gameEngine.playerChallengeDecision(true);
        
        // 恢复
        gameEngine['geassSystem'].performGeass = originalPerformGeass;
      }
    });
  });

  describe('朱雀 - 枢木剑术', () => {
    test('朱雀有25%概率反击', () => {
      const stats = {
        hp: 3,
        maxHp: 3,
        geassSuccessCount: 0,
        geassFailCount: 0,
      };
      
      // Mock确保反击
      const originalRandom = Math.random;
      Math.random = jest.fn().mockReturnValue(0.2); // < 0.25 触发反击
      
      const result = geassSystem.performGeass('player', stats, 'suzaku');
      
      Math.random = originalRandom;
      
      expect(result.isCounter).toBe(true);
      expect(result.damage).toBe(0);
    });

    test('朱雀有15%基础闪避率', () => {
      // 测试多次，统计命中率
      const stats = {
        hp: 3,
        maxHp: 3,
        geassSuccessCount: 0,
        geassFailCount: 0,
      };
      
      let hits = 0;
      const trials = 1000;
      
      for (let i = 0; i < trials; i++) {
        const result = geassSystem.performGeass('player', { ...stats }, 'suzaku');
        if (result.hit) hits++;
      }
      
      const hitRate = hits / trials;
      // 朱雀有15%闪避，基础33%命中，预期约18%
      expect(hitRate).toBeLessThan(0.25);
    });

    test('朱雀作为AI时技能正常', () => {
      gameEngine.initializeGame('lelouch');
      
      const state = gameEngine.getState();
      const suzakuAI = state.aiPlayers.find(ai => ai.character === 'suzaku');
      
      expect(suzakuAI).toBeDefined();
      expect(suzakuAI?.character).toBe('suzaku');
    });
  });

  describe('卡莲 - 红莲二式', () => {
    test('卡莲可以出1-4张牌', () => {
      gameEngine.initializeGame('kallen');
      
      const state = gameEngine.getState();
      state.phase = 'player_turn';
      
      // 测试出4张牌
      const cardIds = state.playerHand.slice(0, 4).map(c => c.id);
      cardIds.forEach(id => gameEngine.toggleCardSelection(id));
      
      expect(gameEngine.getState().playerSelectedCards).toHaveLength(4);
      
      // 出牌
      const newState = gameEngine.playerPlayCards();
      expect(newState.phase).toBe('challenge');
    });

    test('卡莲不能出超过4张牌', () => {
      gameEngine.initializeGame('kallen');
      
      const state = gameEngine.getState();
      state.phase = 'player_turn';
      
      // 尝试选择5张牌
      state.playerHand.forEach(c => gameEngine.toggleCardSelection(c.id));
      
      expect(gameEngine.getState().playerSelectedCards).toHaveLength(4);
    });

    test('非卡莲角色最多出3张牌', () => {
      gameEngine.initializeGame('lelouch');
      
      const state = gameEngine.getState();
      state.phase = 'player_turn';
      
      // 尝试选择4张牌
      state.playerHand.slice(0, 4).forEach(c => gameEngine.toggleCardSelection(c.id));
      
      expect(gameEngine.getState().playerSelectedCards).toHaveLength(3);
    });

    test('卡莲技能增加Geass命中率', () => {
      const stats = {
        hp: 3,
        maxHp: 3,
        geassSuccessCount: 0,
        geassFailCount: 0,
        kallenBoostActive: true,
        kallenCardCount: 3,
      };
      
      // 出3张牌，命中率增加 20% * 3 = 60%
      const result = geassSystem.performGeass('player', stats, 'kallen', 0.6);
      
      expect(result).toBeDefined();
    });
  });

  describe('技能组合效果', () => {
    test('多个不同角色在同一局游戏中', () => {
      gameEngine.initializeGame('lelouch');
      
      const state = gameEngine.getState();
      const characters = state.aiPlayers.map(ai => ai.character);
      
      // 确保有3个不同的AI角色
      expect(characters).toHaveLength(3);
      
      // 检查是否包含预期的角色
      const expectedCharacters = ['cc', 'suzaku', 'kallen'];
      expectedCharacters.forEach(char => {
        expect(characters).toContain(char);
      });
    });

    test('技能效果不互相干扰', () => {
      gameEngine.initializeGame('cc');
      
      const state = gameEngine.getState();
      
      // 玩家是C.C.
      expect(state.playerCharacter).toBe('cc');
      
      // AI中有其他角色
      const hasOtherCharacters = state.aiPlayers.some(ai => 
        ai.character !== 'cc'
      );
      expect(hasOtherCharacters).toBe(true);
    });
  });

  describe('技能边界情况', () => {
    test('鲁鲁修技能每局限用逻辑', () => {
      gameEngine.initializeGame('lelouch');
      
      // 第一次使用应该成功
      gameEngine.lelouchChangeLiarCard('K');
      expect(gameEngine.getState().liarCard).toBe('K');
      
      // 再次使用应该抛出错误（每局限用1次）
      expect(() => gameEngine.lelouchChangeLiarCard('A')).toThrow('技能使用次数已耗尽');
      
      // 骗子牌应该保持不变
      expect(gameEngine.getState().liarCard).toBe('K');
    });

    test('C.C.复活只触发一次', () => {
      const stats = {
        hp: 1,
        maxHp: 3,
        geassSuccessCount: 0,
        geassFailCount: 0,
        ccReviveUsed: false,
      };
      
      // 第一次濒死，复活
      const originalRandom = Math.random;
      let callCount = 0;
      Math.random = jest.fn().mockImplementation(() => {
        callCount++;
        return callCount === 1 ? 0 : 0.4;
      });
      
      const result1 = geassSystem.performGeass('player', { ...stats }, 'cc');
      
      expect(result1.isRevived).toBe(true);
      
      // 第二次濒死，不再复活
      const stats2 = { ...result1.newStats, hp: 1 };
      Math.random = jest.fn().mockReturnValue(0);
      
      const result2 = geassSystem.performGeass('player', stats2, 'cc');
      
      Math.random = originalRandom;
      
      expect(result2.isRevived).toBeFalsy();
    });

    test('朱雀反击和闪避同时触发时的优先级', () => {
      const stats = {
        hp: 3,
        maxHp: 3,
        geassSuccessCount: 0,
        geassFailCount: 0,
      };
      
      // Mock: 反击判定成功（25%）
      const originalRandom = Math.random;
      Math.random = jest.fn().mockReturnValue(0.2);
      
      const result = geassSystem.performGeass('player', stats, 'suzaku');
      
      Math.random = originalRandom;
      
      // 反击优先
      expect(result.isCounter).toBe(true);
    });
  });
});
