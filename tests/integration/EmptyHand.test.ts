/**
 * 手牌耗尽边界测试
 * 测试手牌耗尽时的游戏结束逻辑
 */

import { GameEngine } from '../../src/core/GameEngineV2';

describe('手牌耗尽边界测试', () => {
  let engine: GameEngine;

  beforeEach(() => {
    engine = new GameEngine();
  });

  describe('玩家手牌耗尽', () => {
    test('玩家手牌耗尽立即获胜', () => {
      // 初始化游戏直到玩家先手
      let state = engine.initializeGame('lelouch');
      while (state.currentPlayerIndex !== 0) {
        engine = new GameEngine();
        state = engine.initializeGame('lelouch');
      }

      // 设置玩家只剩1张牌
      const lastCard = state.playerHand[0];
      state.playerHand = [lastCard];

      // 出牌
      engine.toggleCardSelection(lastCard.id);
      state = engine.playerPlayCards();

      // 验证游戏结束，玩家获胜
      expect(state.phase).toBe('game_over');
      expect(state.winner).toBe('player');
    });

    test('玩家手牌耗尽时日志记录正确', () => {
      // 初始化游戏直到玩家先手
      let state = engine.initializeGame('lelouch');
      while (state.currentPlayerIndex !== 0) {
        engine = new GameEngine();
        state = engine.initializeGame('lelouch');
      }

      // 设置玩家只剩1张牌
      const lastCard = state.playerHand[0];
      state.playerHand = [lastCard];

      // 出牌
      engine.toggleCardSelection(lastCard.id);
      state = engine.playerPlayCards();

      // 验证日志
      expect(state.lastAction).toContain('手牌耗尽');
      expect(state.lastAction).toContain('胜利');
    });
  });

  describe('AI手牌耗尽', () => {
    test('AI手牌耗尽立即获胜', () => {
      // 初始化游戏直到AI先手
      let state = engine.initializeGame('lelouch');
      while (state.currentPlayerIndex === 0) {
        engine = new GameEngine();
        state = engine.initializeGame('lelouch');
      }

      // 获取当前AI
      const currentId = engine.getCurrentPlayerId();
      if (currentId === 'player') {
        // 如果当前是玩家，跳过此测试
        return;
      }

      // 设置AI只剩1张牌
      const ai = state.aiPlayers.find(a => a.id === currentId);
      if (ai && ai.hand.length > 0) {
        ai.hand = [ai.hand[0]];
      }

      // AI出牌
      state = engine.aiPlayCards(currentId as 'ai' | 'ai2' | 'ai3');

      // 验证游戏结束
      expect(state.phase).toBe('game_over');
    });
  });

  describe('手牌耗尽边界情况', () => {
    test('玩家出完牌后手牌为空数组', () => {
      // 初始化游戏直到玩家先手
      let state = engine.initializeGame('lelouch');
      while (state.currentPlayerIndex !== 0) {
        engine = new GameEngine();
        state = engine.initializeGame('lelouch');
      }

      // 设置玩家只剩1张牌
      state.playerHand = [state.playerHand[0]];

      // 出牌
      engine.toggleCardSelection(state.playerHand[0].id);
      state = engine.playerPlayCards();

      // 验证手牌为空
      expect(state.playerHand).toHaveLength(0);
    });

    test('手牌耗尽后其他玩家无法行动', () => {
      // 初始化游戏直到玩家先手
      let state = engine.initializeGame('lelouch');
      while (state.currentPlayerIndex !== 0) {
        engine = new GameEngine();
        state = engine.initializeGame('lelouch');
      }

      // 设置玩家只剩1张牌并出牌
      state.playerHand = [state.playerHand[0]];
      engine.toggleCardSelection(state.playerHand[0].id);
      state = engine.playerPlayCards();

      // 验证游戏已结束
      expect(state.phase).toBe('game_over');

      // 验证AI不能再出牌
      expect(() => engine.aiPlayCards('ai')).not.toThrow();
    });
  });
});
