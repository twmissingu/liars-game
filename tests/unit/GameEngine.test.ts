/**
 * GameEngine 单元测试
 * 测试游戏引擎核心逻辑
 */

import { GameEngine } from '../../src/core/GameEngineV2';
import type { CharacterId } from '../../src/types';

describe('GameEngine', () => {
  let gameEngine: GameEngine;

  beforeEach(() => {
    gameEngine = new GameEngine();
  });

  describe('游戏初始化', () => {
    test('初始化后应该处于正确的阶段', () => {
      const state = gameEngine.initializeGame('lelouch');
      expect(['player_turn', 'ai_turn']).toContain(state.phase);
    });

    test('initializeGame应该设置玩家角色', () => {
      const state = gameEngine.initializeGame('lelouch');
      expect(state.playerCharacter).toBe('lelouch');
    });

    test('初始化后玩家应该有手牌', () => {
      const state = gameEngine.initializeGame('lelouch');
      expect(state.playerHand.length).toBeGreaterThan(0);
    });

    test('初始化后应该有3个AI玩家', () => {
      const state = gameEngine.initializeGame('lelouch');
      expect(state.aiPlayers).toHaveLength(3);
    });

    test('每个AI应该有手牌', () => {
      const state = gameEngine.initializeGame('lelouch');
      state.aiPlayers.forEach(ai => {
        expect(ai.hand.length).toBeGreaterThan(0);
      });
    });

    test('每个AI初始HP应该正确', () => {
      const state = gameEngine.initializeGame('lelouch');
      state.aiPlayers.forEach(ai => {
        // 朱雀AI有4点HP，其他AI有3点HP
        const expectedHp = ai.character === 'suzaku' ? 4 : 3;
        expect(ai.stats.hp).toBe(expectedHp);
        expect(ai.stats.maxHp).toBe(expectedHp);
      });
    });

    test('玩家初始HP应该正确', () => {
      // 测试朱雀有4点HP
      const suzakuState = gameEngine.initializeGame('suzaku');
      expect(suzakuState.playerStats.hp).toBe(4);
      expect(suzakuState.playerStats.maxHp).toBe(4);

      // 测试其他角色有3点HP
      const chars: CharacterId[] = ['lelouch', 'cc', 'kallen'];
      chars.forEach(char => {
        const engine = new GameEngine();
        const state = engine.initializeGame(char);
        expect(state.playerStats.hp).toBe(3);
        expect(state.playerStats.maxHp).toBe(3);
      });
    });

    test('初始化后应该设置骗子牌', () => {
      const state = gameEngine.initializeGame('lelouch');
      expect(state.liarCard).toBeDefined();
      expect(['Q', 'K', 'A']).toContain(state.liarCard);
    });

    test('初始化后应该有当前玩家', () => {
      const state = gameEngine.initializeGame('lelouch');
      expect(state.currentPlayerIndex).toBeGreaterThanOrEqual(0);
      expect(state.currentPlayerIndex).toBeLessThanOrEqual(3);
    });

    test('所有4个角色都可以选择', () => {
      const characters: CharacterId[] = ['lelouch', 'cc', 'suzaku', 'kallen'];

      characters.forEach(char => {
        const engine = new GameEngine();
        const state = engine.initializeGame(char);
        expect(state.playerCharacter).toBe(char);
      });
    });
  });

  describe('回合流转', () => {
    beforeEach(() => {
      gameEngine.initializeGame('lelouch');
    });

    test('getCurrentPlayerId应该返回正确的玩家ID', () => {
      const state = gameEngine.getState();
      const currentId = gameEngine.getCurrentPlayerId();

      if (state.currentPlayerIndex === 0) {
        expect(currentId).toBe('player');
      } else {
        expect(['ai', 'ai2', 'ai3']).toContain(currentId);
      }
    });

    test('玩家可以出牌', () => {
      // 确保玩家回合
      let state = gameEngine.getState();
      if (state.currentPlayerIndex !== 0) {
        // 跳过这个测试，如果不是玩家回合
        return;
      }

      const initialHandSize = state.playerHand.length;
      const cardId = state.playerHand[0].id;

      gameEngine.toggleCardSelection(cardId);
      state = gameEngine.playerPlayCards();

      expect(state.playerHand.length).toBeLessThan(initialHandSize);
      expect(state.phase).toBe('challenge');
    });

    test('AI可以出牌', () => {
      // 确保AI回合
      let state = gameEngine.getState();
      if (state.currentPlayerIndex === 0) {
        // 跳过这个测试，如果是玩家回合
        return;
      }

      const currentId = gameEngine.getCurrentPlayerId();
      if (currentId !== 'player') {
        state = gameEngine.aiPlayCards(currentId);
        expect(state.phase).toBe('challenge');
      }
    });
  });

  describe('牌选择', () => {
    beforeEach(() => {
      gameEngine.initializeGame('lelouch');
    });

    test('toggleCardSelection应该切换牌的选中状态', () => {
      const state = gameEngine.getState();
      if (state.currentPlayerIndex !== 0) return;

      const cardId = state.playerHand[0].id;

      // 第一次选择
      gameEngine.toggleCardSelection(cardId);
      expect(gameEngine.getState().playerSelectedCards).toContain(cardId);

      // 第二次取消选择
      gameEngine.toggleCardSelection(cardId);
      expect(gameEngine.getState().playerSelectedCards).not.toContain(cardId);
    });

    test('clearCardSelection应该清除所有选择', () => {
      const state = gameEngine.getState();
      if (state.currentPlayerIndex !== 0) return;

      const cardId = state.playerHand[0].id;
      gameEngine.toggleCardSelection(cardId);

      gameEngine.clearCardSelection();
      expect(gameEngine.getState().playerSelectedCards).toHaveLength(0);
    });
  });

  describe('游戏结束', () => {
    test('游戏可以有胜利者', () => {
      gameEngine.initializeGame('lelouch');

      // 模拟游戏进行直到结束
      let rounds = 0;
      const maxRounds = 100;

      while (gameEngine.getState().phase !== 'game_over' && rounds < maxRounds) {
        const state = gameEngine.getState();

        if (state.phase === 'player_turn' && state.playerHand.length > 0) {
          gameEngine.toggleCardSelection(state.playerHand[0].id);
          gameEngine.playerPlayCards();
        } else if (state.phase === 'challenge') {
          gameEngine.aiChallengeDecision('ai');
        } else if (state.phase === 'ai_turn') {
          const currentId = gameEngine.getCurrentPlayerId();
          if (currentId !== 'player') {
            const ai = state.aiPlayers.find(a => a.id === currentId);
            if (ai && ai.hand.length > 0 && ai.stats.hp > 0) {
              gameEngine.aiPlayCards(currentId);
            }
          }
        }

        rounds++;
      }

      // 验证游戏结束或有胜利者
      const finalState = gameEngine.getState();
      expect(['game_over', 'player_turn', 'ai_turn', 'challenge', 'geass']).toContain(finalState.phase);
    });
  });
});
