/**
 * =============================================================================
 * Code Geass: Liar's Game - 回合流转顺序测试
 * =============================================================================
 *
 * 验证无人质疑后的回合流转顺序是否符合顺时针规则
 *
 * UI布局: 顶部=AI2, 左侧=AI3, 右侧=AI1, 底部=玩家
 * 顺时针顺序: 玩家(0) -> AI3(1) -> AI2(2) -> AI1(3) -> 玩家(0)
 *
 * @author Code Agent
 * @version 1.0.0
 */

import { GameEngine } from '../../src/core/GameEngineV2';

describe('回合流转顺序测试', () => {
  let engine: GameEngine;

  beforeEach(() => {
    engine = new GameEngine();
    engine.initializeGame('lelouch');
  });

  /**
   * 辅助函数：设置出牌状态
   */
  const setupPlayCards = (playerId: 'player' | 'ai' | 'ai2' | 'ai3') => {
    (engine as any).state.turnState.playedCards = {
      cardIds: ['card1'],
      claimedRank: 'Q',
      actualCards: [{ id: 'card1', rank: 'Q', suit: 'spades', isJoker: false }],
      playerId,
      isBluff: false,
    };
  };

  describe('【场景1】玩家出牌，无人质疑', () => {
    test('1.1 玩家出牌后，下一个应该是AI3(左侧)', () => {
      setupPlayCards('player');

      const nextState = engine.endChallengePhase();

      // 玩家(0)的下家是AI3(1)
      expect(nextState.currentPlayerIndex).toBe(1);
      expect(nextState.phase).toBe('ai_turn');
    });
  });

  describe('【场景2】AI3出牌，无人质疑', () => {
    test('2.1 AI3出牌后，下一个应该是AI2(顶部)', () => {
      setupPlayCards('ai3');

      const nextState = engine.endChallengePhase();

      // AI3(1)的下家是AI2(2)
      expect(nextState.currentPlayerIndex).toBe(2);
      expect(nextState.phase).toBe('ai_turn');
    });
  });

  describe('【场景3】AI2出牌，无人质疑', () => {
    test('3.1 AI2出牌后，下一个应该是AI1(右侧)', () => {
      setupPlayCards('ai2');

      const nextState = engine.endChallengePhase();

      // AI2(2)的下家是AI1(3)
      expect(nextState.currentPlayerIndex).toBe(3);
      expect(nextState.phase).toBe('ai_turn');
    });
  });

  describe('【场景4】AI1出牌，无人质疑', () => {
    test('4.1 AI1出牌后，下一个应该是玩家(底部)', () => {
      setupPlayCards('ai');

      const nextState = engine.endChallengePhase();

      // AI1(3)的下家是玩家(0)
      expect(nextState.currentPlayerIndex).toBe(0);
      expect(nextState.phase).toBe('player_turn');
    });
  });

  describe('【场景5】完整顺时针流转', () => {
    test('5.1 完整一圈流转验证', () => {
      // 玩家 -> AI3
      setupPlayCards('player');
      let state = engine.endChallengePhase();
      expect(state.currentPlayerIndex).toBe(1);

      // AI3 -> AI2
      setupPlayCards('ai3');
      state = engine.endChallengePhase();
      expect(state.currentPlayerIndex).toBe(2);

      // AI2 -> AI1
      setupPlayCards('ai2');
      state = engine.endChallengePhase();
      expect(state.currentPlayerIndex).toBe(3);

      // AI1 -> 玩家
      setupPlayCards('ai');
      state = engine.endChallengePhase();
      expect(state.currentPlayerIndex).toBe(0);
    });
  });

  describe('【场景6】跳过已淘汰玩家', () => {
    test('6.1 AI3被淘汰后，玩家出牌应跳过AI3到AI2', () => {
      // 淘汰AI3
      (engine as any).state.aiPlayers[2].isActive = false;
      (engine as any).state.aiPlayers[2].stats.hp = 0;

      setupPlayCards('player');
      const nextState = engine.endChallengePhase();

      // 玩家(0)的下家是AI3(1)，但AI3被淘汰，应跳过到AI2(2)
      expect(nextState.currentPlayerIndex).toBe(2);
    });

    test('6.2 多个AI被淘汰后的流转', () => {
      // 淘汰AI3和AI2
      (engine as any).state.aiPlayers[2].isActive = false;
      (engine as any).state.aiPlayers[2].stats.hp = 0;
      (engine as any).state.aiPlayers[1].isActive = false;
      (engine as any).state.aiPlayers[1].stats.hp = 0;

      setupPlayCards('player');
      const nextState = engine.endChallengePhase();

      // 玩家(0)的下家是AI3(1)，AI3和AI2都被淘汰，应跳过到AI1(3)
      expect(nextState.currentPlayerIndex).toBe(3);
    });
  });

  describe('【场景7】回合数递增', () => {
    test('7.1 每次流转后回合数应增加', () => {
      const initialTurnNumber = engine.getState().turnState.turnNumber;

      setupPlayCards('player');
      const nextState = engine.endChallengePhase();

      expect(nextState.turnState.turnNumber).toBe(initialTurnNumber + 1);
    });

    test('7.2 多轮流转后回合数正确', () => {
      let turnNumber = engine.getState().turnState.turnNumber;

      for (let i = 0; i < 4; i++) {
        setupPlayCards(i === 0 ? 'player' : i === 1 ? 'ai3' : i === 2 ? 'ai2' : 'ai');
        const state = engine.endChallengePhase();
        turnNumber++;
        expect(state.turnState.turnNumber).toBe(turnNumber);
      }
    });
  });
});
