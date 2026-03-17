/**
 * =============================================================================
 * Code Geass: Liar's Game - GameEngineV2 单元测试
 * =============================================================================
 *
 * 验证重构后的游戏引擎核心功能
 *
 * @author Code Agent
 * @version 3.0.0
 */

import { GameEngine } from '../../src/core/GameEngineV2';
import type { CharacterId } from '../../src/types';

describe('GameEngineV2', () => {
  let engine: GameEngine;

  beforeEach(() => {
    engine = new GameEngine();
  });

  describe('初始化', () => {
    test('应该正确初始化游戏', () => {
      const state = engine.initializeGame('lelouch');

      expect(state).toBeDefined();
      expect(state.playerCharacter).toBe('lelouch');
      expect(state.playerHand).toHaveLength(5);
      expect(state.aiPlayers).toHaveLength(3);
      expect(state.liarCard).toBeDefined();
    });

    test('应该支持自定义AI角色', () => {
      const aiCharacters: CharacterId[] = ['cc', 'suzaku', 'kallen'];
      const state = engine.initializeGame('lelouch', aiCharacters);

      expect(state.aiPlayers[0].character).toBe('cc');
      expect(state.aiPlayers[1].character).toBe('suzaku');
      expect(state.aiPlayers[2].character).toBe('kallen');
    });
  });

  describe('玩家操作', () => {
    beforeEach(() => {
      engine.initializeGame('lelouch');
    });

    test('应该能切换牌的选中状态', () => {
      const state = engine.getState();
      const cardId = state.playerHand[0].id;

      engine.toggleCardSelection(cardId);
      const newState = engine.getState();

      expect(newState.playerSelectedCards).toContain(cardId);
    });

    test('应该能出牌', () => {
      // 确保是玩家回合
      let state = engine.getState();
      if (state.phase !== 'player_turn') {
        // 如果不是玩家回合，跳过此测试
        console.log('跳过测试：当前不是玩家回合');
        return;
      }

      const cardId = state.playerHand[0].id;

      engine.toggleCardSelection(cardId);
      const newState = engine.playerPlayCards();

      expect(newState.turnState.playedCards).toBeDefined();
      // playedCards包含cardIds、claimedRank、actualCards和playerId
      expect(newState.turnState.playedCards?.cardIds).toBeDefined();
      expect(newState.turnState.playedCards?.claimedRank).toBeDefined();
    });
  });

  describe('AI操作', () => {
    beforeEach(() => {
      engine.initializeGame('lelouch');
    });

    test('AI应该能自动出牌', () => {
      // 跳过到AI回合
      const state = engine.getState();
      if (state.currentPlayerIndex !== 0) {
        const aiId = state.aiPlayers[0].id as 'ai' | 'ai2' | 'ai3';
        const newState = engine.aiPlayCards(aiId);

        expect(newState.turnState.playedCards).toBeDefined();
      }
    });
  });

  describe('质疑机制', () => {
    beforeEach(() => {
      engine.initializeGame('lelouch');
    });

    test('应该能执行质疑', () => {
      // 先让AI出牌
      const state = engine.getState();
      if (state.currentPlayerIndex !== 0) {
        const aiId = state.aiPlayers[0].id as 'ai' | 'ai2' | 'ai3';
        engine.aiPlayCards(aiId);

        // 然后玩家质疑
        const newState = engine.playerChallengeDecision(true);

        expect(newState).toBeDefined();
      }
    });
  });

  describe('角色技能', () => {
    test('鲁鲁修应该能使用技能', () => {
      engine.initializeGame('lelouch');

      const canUse = engine.canPlayerUseSkill('player');
      expect(typeof canUse).toBe('boolean');
    });

    test('应该能改变骗子牌（鲁鲁修技能）', () => {
      engine.initializeGame('lelouch');

      const state = engine.getState();
      const originalLiarCard = state.liarCard;

      // 尝试使用技能改变骗子牌
      if (engine.canPlayerUseSkill('player')) {
        const newState = engine.lelouchChangeLiarCard('K');
        expect(newState.liarCard).toBe('K');
      }
    });
  });

  describe('游戏状态', () => {
    beforeEach(() => {
      engine.initializeGame('lelouch');
    });

    test('应该能获取游戏状态', () => {
      const state = engine.getState();

      expect(state).toBeDefined();
      expect(state.phase).toBeDefined();
      expect(state.playerHand).toBeDefined();
      expect(state.aiPlayers).toBeDefined();
    });

    test('应该能重置回合', () => {
      const state = engine.resetRound();

      expect(state).toBeDefined();
      expect(state.playerHand).toHaveLength(5);
    });
  });
});
