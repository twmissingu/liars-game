/**
 * 角色技能集成测试
 * 测试各角色技能在真实对局中的效果
 */

import { GameEngine } from '../../src/core/GameEngineV2';
import { GeassSystem } from '../../src/core/GeassSystem';

describe('角色技能集成测试', () => {
  let gameEngine: GameEngine;
  let geassSystem: GeassSystem;

  beforeEach(() => {
    gameEngine = new GameEngine();
    geassSystem = new GeassSystem();
  });

  describe('角色HP差异', () => {
    test('鲁鲁修应该有3点HP', () => {
      const state = gameEngine.initializeGame('lelouch');
      expect(state.playerStats.maxHp).toBe(3);
      expect(state.playerStats.hp).toBe(3);
    });

    test('朱雀应该有4点HP', () => {
      const state = gameEngine.initializeGame('suzaku');
      expect(state.playerStats.maxHp).toBe(4);
      expect(state.playerStats.hp).toBe(4);
    });

    test('C.C.应该有3点HP', () => {
      const state = gameEngine.initializeGame('cc');
      expect(state.playerStats.maxHp).toBe(3);
      expect(state.playerStats.hp).toBe(3);
    });

    test('卡莲应该有3点HP', () => {
      const state = gameEngine.initializeGame('kallen');
      expect(state.playerStats.maxHp).toBe(3);
      expect(state.playerStats.hp).toBe(3);
    });

    test('AI朱雀也应该有4点HP', () => {
      // 创建游戏，让AI选择朱雀
      const state = gameEngine.initializeGame('lelouch', ['suzaku', 'cc', 'kallen']);
      
      // 查找朱雀AI
      const suzakuAI = state.aiPlayers.find(ai => ai.character === 'suzaku');
      expect(suzakuAI?.stats.maxHp).toBe(4);
      expect(suzakuAI?.stats.hp).toBe(4);
    });
  });

  describe('Geass系统 - 角色特效', () => {
    test('C.C.复活机制', () => {
      const stats = {
        hp: 1,
        maxHp: 3,
        geassSuccessCount: 0,
        geassFailCount: 0,
      };
      
      // 测试多次Geass判定，验证复活概率
      let reviveCount = 0;
      const testCount = 100;
      
      for (let i = 0; i < testCount; i++) {
        const result = geassSystem.performGeass('player', { ...stats }, 'cc');
        if (result.isRevived) {
          reviveCount++;
        }
      }
      
      // C.C.应该有约50%的复活概率
      expect(reviveCount).toBeGreaterThan(30);
      expect(reviveCount).toBeLessThan(70);
    });

    test('朱雀反击机制', () => {
      const stats = {
        hp: 3,
        maxHp: 4,
        geassSuccessCount: 0,
        geassFailCount: 0,
      };
      
      // 测试多次Geass判定，验证反击概率
      let counterCount = 0;
      const testCount = 100;
      
      for (let i = 0; i < testCount; i++) {
        const result = geassSystem.performGeass('player', { ...stats }, 'suzaku');
        if (result.isCounter) {
          counterCount++;
        }
      }
      
      // 朱雀应该有约25%的反击概率
      expect(counterCount).toBeGreaterThan(10);
      expect(counterCount).toBeLessThan(50);
    });

    test('卡莲Geass命中率加成', () => {
      // 卡莲出牌张数增加命中率
      const boost1Card = geassSystem.calculateKallenBoost(1);
      const boost2Cards = geassSystem.calculateKallenBoost(2);
      const boost3Cards = geassSystem.calculateKallenBoost(3);
      const boost4Cards = geassSystem.calculateKallenBoost(4);
      
      // 1张牌无加成
      expect(boost1Card).toBe(0);
      
      // 2张牌+20%
      expect(boost2Cards).toBeCloseTo(0.2, 5);
      
      // 3张牌+40%
      expect(boost3Cards).toBeCloseTo(0.4, 5);
      
      // 4张牌+60%
      expect(boost4Cards).toBeCloseTo(0.6, 5);
    });
  });

  describe('游戏流程中的角色特性', () => {
    test('不同角色可以正常进行游戏', () => {
      const characters = ['lelouch', 'cc', 'suzaku', 'kallen'] as const;
      
      characters.forEach(char => {
        const engine = new GameEngine();
        const state = engine.initializeGame(char);
        
        // 验证游戏初始化成功
        expect(state.phase).toBeDefined();
        expect(state.playerHand.length).toBeGreaterThan(0);
        expect(state.liarCard).toBeDefined();
      });
    });

    test('AI角色可以正常行动', () => {
      const state = gameEngine.initializeGame('lelouch');
      
      // 找到第一个AI回合
      let currentState = state;
      let attempts = 0;
      
      while (currentState.currentPlayerIndex !== 1 && attempts < 10) {
        // 模拟游戏进行
        const aiPlayer = currentState.aiPlayers.find(ai => {
          const playerIndex = ai.id === 'ai' ? 1 : ai.id === 'ai2' ? 2 : 3;
          return playerIndex === currentState.currentPlayerIndex;
        });
        
        if (aiPlayer) {
          currentState = gameEngine.aiPlayCards(aiPlayer.id);
        }
        attempts++;
      }
      
      // 验证AI可以正常出牌
      expect(currentState).toBeDefined();
    });
  });
});
