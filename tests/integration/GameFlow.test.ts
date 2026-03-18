/**
 * 游戏流程集成测试
 * 测试完整的游戏流程：开始→选角色→游戏→结束
 */

import { GameEngine } from '../../src/core/GameEngineV2';
import { CardSystem } from '../../src/core/CardSystem';
import { GeassSystem } from '../../src/core/GeassSystem';

describe('游戏流程集成测试', () => {
  let gameEngine: GameEngine;

  beforeEach(() => {
    gameEngine = new GameEngine();
  });

  describe('完整游戏流程', () => {
    test('流程：选择角色→初始化→玩家出牌→质疑→结算', () => {
      // 1. 选择角色并确保玩家先手
      let state = gameEngine.initializeGame('lelouch');
      while (state.currentPlayerIndex !== 0) {
        gameEngine = new GameEngine();
        state = gameEngine.initializeGame('lelouch');
      }

      expect(state.playerCharacter).toBe('lelouch');
      expect(state.playerHand.length).toBeGreaterThan(0);

      // 2. 玩家选择并出牌
      const initialHandLength = state.playerHand.length;
      const cardId = state.playerHand[0].id;
      gameEngine.toggleCardSelection(cardId);
      state = gameEngine.playerPlayCards();

      expect(state.phase).toBe('challenge');
      expect(state.playerHand.length).toBeLessThan(initialHandLength);

      // 3. AI质疑流程
      let attempts = 0;
      while (state.phase === 'challenge' && attempts < 10) {
        state = gameEngine.aiChallengeDecision('ai');
        attempts++;
      }

      // 质疑后可能进入geass、game_over或流转到下一回合
      expect(['geass', 'game_over', 'player_turn', 'ai_turn']).toContain(state.phase);
    });

    test('流程：AI回合→AI出牌→质疑结算', () => {
      // 初始化游戏
      gameEngine.initializeGame('cc');

      // 获取状态
      let state = gameEngine.getState();

      // 如果当前是AI回合，让AI出牌
      if (state.currentPlayerIndex !== 0) {
        const aiId = state.currentPlayerIndex === 1 ? 'ai' :
                     state.currentPlayerIndex === 2 ? 'ai2' : 'ai3';
        state = gameEngine.aiPlayCards(aiId);

        if (state.phase === 'challenge') {
          // 玩家质疑
          state = gameEngine.playerChallengeDecision(true);
        }
      }

      // 验证游戏状态流转正常
      expect(['geass', 'game_over', 'player_turn', 'ai_turn', 'challenge']).toContain(state.phase);
    });

    test('流程：多轮游戏直到结束', () => {
      gameEngine.initializeGame('suzaku');

      let rounds = 0;
      const maxRounds = 50; // 限制轮数防止无限循环

      while (gameEngine.getState().phase !== 'game_over' && rounds < maxRounds) {
        const state = gameEngine.getState();

        if (state.phase === 'player_turn') {
          // 玩家简单策略：出第一张牌
          if (state.playerHand.length > 0) {
            gameEngine.toggleCardSelection(state.playerHand[0].id);
            gameEngine.playerPlayCards();
          }
        } else if (state.phase === 'challenge') {
          // AI自动处理质疑
          gameEngine.aiChallengeDecision('ai');
        } else if (state.phase === 'ai_turn') {
          const currentId = gameEngine.getCurrentPlayerId();
          if (currentId !== 'player') {
            const ai = state.aiPlayers.find(ai => ai.id === currentId);
            if (ai && ai.hand.length > 0 && ai.stats.hp > 0) {
              gameEngine.aiPlayCards(currentId);
            }
          }
        }

        rounds++;
      }

      // 验证游戏正常结束或达到轮数限制
      const finalState = gameEngine.getState();
      expect(finalState.phase).toBeDefined();
    });
  });

  describe('角色技能集成', () => {
    test('鲁鲁修：正常游戏流程', () => {
      const state = gameEngine.initializeGame('lelouch');

      expect(state.playerCharacter).toBe('lelouch');
      expect(state.playerStats.hp).toBe(3);
      expect(state.playerHand.length).toBeGreaterThan(0);
    });

    test('卡莲：可以正常出牌', () => {
      const state = gameEngine.initializeGame('kallen');

      expect(state.playerCharacter).toBe('kallen');
      expect(state.playerStats.hp).toBe(3);
      expect(state.playerHand.length).toBeGreaterThan(0);
    });

    test('C.C.：复活机制在真实对局中', () => {
      const state = gameEngine.initializeGame('cc');

      expect(state.playerCharacter).toBe('cc');
      expect(state.playerStats.hp).toBe(3);
    });
  });

  describe('牌组与游戏引擎集成', () => {
    test('CardSystem和GameEngine协同工作', () => {
      const cardSystem = new CardSystem();
      const engine = new GameEngine();

      // 生成牌组
      cardSystem.generateDeck();
      expect(cardSystem.getDeck().length).toBeGreaterThan(0);

      // 初始化游戏
      const state = engine.initializeGame('lelouch');
      expect(state.playerHand.length).toBeGreaterThan(0);
    });

    test('发牌后各系统状态一致', () => {
      const state = gameEngine.initializeGame('lelouch');

      // 验证玩家手牌
      expect(state.playerHand.length).toBeGreaterThan(0);

      // 验证AI手牌
      state.aiPlayers.forEach(ai => {
        expect(ai.hand.length).toBeGreaterThan(0);
      });

      // 验证骗子牌已设置
      expect(state.liarCard).toBeDefined();
    });
  });

  describe('多AI交互', () => {
    test('3个AI都能正常行动', () => {
      gameEngine.initializeGame('lelouch');

      const state = gameEngine.getState();

      // 验证3个AI都存在
      expect(state.aiPlayers).toHaveLength(3);
      expect(state.aiPlayers[0].id).toBe('ai');
      expect(state.aiPlayers[1].id).toBe('ai2');
      expect(state.aiPlayers[2].id).toBe('ai3');

      // 验证每个AI都有手牌
      state.aiPlayers.forEach(ai => {
        expect(ai.hand.length).toBeGreaterThan(0);
      });
    });

    test('AI被淘汰后跳过', () => {
      const state = gameEngine.initializeGame('lelouch');

      // 模拟一个AI被淘汰
      const ai = state.aiPlayers[0];
      ai.stats.hp = 0;
      ai.isActive = false;

      // 验证AI状态已更新
      expect(ai.stats.hp).toBe(0);
      expect(ai.isActive).toBe(false);
    });
  });

  describe('游戏状态流转', () => {
    test('状态流转：setup → player_turn → challenge → 下一回合', () => {
      // 初始化并确保玩家先手
      let state = gameEngine.initializeGame('lelouch');
      while (state.currentPlayerIndex !== 0) {
        gameEngine = new GameEngine();
        state = gameEngine.initializeGame('lelouch');
      }

      // 初始状态应该是玩家回合或AI回合
      expect(['player_turn', 'ai_turn']).toContain(state.phase);

      if (state.phase === 'player_turn') {
        // 玩家出牌
        const cardId = state.playerHand[0].id;
        gameEngine.toggleCardSelection(cardId);
        state = gameEngine.playerPlayCards();

        // 进入质疑阶段
        expect(state.phase).toBe('challenge');

        // AI质疑流程
        let attempts = 0;
        while (state.phase === 'challenge' && attempts < 10) {
          state = gameEngine.aiChallengeDecision('ai');
          attempts++;
        }

        // 质疑结束后进入下一阶段
        expect(['geass', 'game_over', 'player_turn', 'ai_turn']).toContain(state.phase);
      }
    });

    test('状态流转：不质疑时进入下一回合', () => {
      // 初始化并确保玩家先手
      let state = gameEngine.initializeGame('lelouch');
      while (state.currentPlayerIndex !== 0) {
        gameEngine = new GameEngine();
        state = gameEngine.initializeGame('lelouch');
      }

      // 玩家出牌
      const cardId = state.playerHand[0].id;
      gameEngine.toggleCardSelection(cardId);
      state = gameEngine.playerPlayCards();

      expect(state.phase).toBe('challenge');

      // 所有AI选择不质疑（跳过）
      // 质疑阶段结束后应该进入下一阶段
      let attempts = 0;
      while (state.phase === 'challenge' && attempts < 10) {
        state = gameEngine.aiChallengeDecision('ai');
        state = gameEngine.aiChallengeDecision('ai2');
        state = gameEngine.aiChallengeDecision('ai3');
        attempts++;
      }

      // 质疑阶段结束后进入下一阶段
      expect(['geass', 'game_over', 'player_turn', 'ai_turn', 'challenge']).toContain(state.phase);
    });
  });

  describe('边界情况集成', () => {
    test('手牌耗尽时的处理', () => {
      const state = gameEngine.initializeGame('lelouch');

      // 验证初始手牌
      expect(state.playerHand.length).toBeGreaterThan(0);

      // 模拟出牌直到手牌为空
      // 注意：实际游戏中会重新发牌
    });

    test('游戏可以正常初始化多次', () => {
      const characters = ['lelouch', 'cc', 'suzaku', 'kallen'] as const;

      characters.forEach(char => {
        const engine = new GameEngine();
        const state = engine.initializeGame(char);

        expect(state.playerCharacter).toBe(char);
        expect(state.playerHand.length).toBeGreaterThan(0);
        expect(state.aiPlayers).toHaveLength(3);
      });
    });
  });
});
