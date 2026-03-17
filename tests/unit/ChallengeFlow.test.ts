/**
 * =============================================================================
 * Code Geass: Liar's Game - 质疑流程测试
 * =============================================================================
 *
 * 测试场景：所有角色都不质疑后，游戏应正确进入下一回合
 * 而不是重复进入质疑流程
 *
 * @author Code Agent
 * @version 1.0.0
 */

import { GameEngine } from '../../src/core/GameEngineV2';

describe('质疑流程测试 - 无人质疑场景', () => {
  let engine: GameEngine;

  beforeEach(() => {
    engine = new GameEngine();
    engine.initializeGame('lelouch');
  });

  describe('【场景1】AI出牌，所有角色都不质疑', () => {
    test('1.1 AI3(卡莲)出牌，无人质疑后应进入下一回合', () => {
      // 设置AI3(卡莲)出牌
      (engine as any).state.currentPlayerIndex = 1; // AI3的索引
      (engine as any).state.phase = 'ai_turn';
      (engine as any).state.turnState.playedCards = {
        cardIds: ['card1'],
        claimedRank: 'A',
        actualCards: [{ id: 'card1', rank: 'K', suit: 'spades', isJoker: false }], // 实际牌是K，声称是A（撒谎）
        playerId: 'ai3',
        isBluff: true,
      };

      // 模拟进入质疑阶段
      const challengeState = engine.enterChallengePhase();
      expect(challengeState.phase).toBe('challenge');

      // 模拟所有AI都不质疑（直接调用endChallengePhase）
      const nextState = engine.endChallengePhase();

      // 验证：应该进入下一回合，而不是停留在质疑阶段
      expect(nextState.phase).not.toBe('challenge');
      expect(['player_turn', 'ai_turn']).toContain(nextState.phase);
      expect(nextState.turnState.turnNumber).toBe(2);
    });

    test('1.2 玩家不质疑后，AI不应再次质疑', () => {
      // 设置AI1(C.C.)出牌
      (engine as any).state.turnState.playedCards = {
        cardIds: ['card1'],
        claimedRank: 'Q',
        actualCards: [{ id: 'card1', rank: 'Q', suit: 'spades', isJoker: false }],
        playerId: 'ai',
        isBluff: false,
      };

      // 进入质疑阶段
      engine.enterChallengePhase();

      // 记录质疑阶段次数
      let challengeCount = 0;
      const originalPhase = (engine as any).state.phase;

      // 模拟无人质疑，结束质疑阶段
      const nextState = engine.endChallengePhase();
      
      // 验证：质疑阶段应该结束
      expect(nextState.phase).not.toBe('challenge');
    });
  });

  describe('【场景2】质疑流程重复执行检测', () => {
    test('2.1 质疑阶段不应重复触发', () => {
      // 设置初始状态
      (engine as any).state.turnState.playedCards = {
        cardIds: ['card1'],
        claimedRank: 'K',
        actualCards: [{ id: 'card1', rank: 'K', suit: 'hearts', isJoker: false }],
        playerId: 'ai2',
        isBluff: false,
      };

      // 第一次进入质疑阶段
      const state1 = engine.enterChallengePhase();
      expect(state1.phase).toBe('challenge');

      // 结束质疑阶段
      const state2 = engine.endChallengePhase();
      expect(state2.phase).not.toBe('challenge');

      // 验证：再次检查状态，不应回到质疑阶段
      const state3 = engine.getState();
      expect(state3.phase).not.toBe('challenge');
    });
  });

  describe('【场景3】handlePass流程测试', () => {
    test('3.1 玩家不质疑后应正确流转', () => {
      // 设置AI出牌
      (engine as any).state.turnState.playedCards = {
        cardIds: ['card1'],
        claimedRank: 'A',
        actualCards: [{ id: 'card1', rank: 'A', suit: 'spades', isJoker: false }],
        playerId: 'ai',
        isBluff: false,
      };

      // 进入质疑阶段
      engine.enterChallengePhase();

      // 模拟所有AI都不质疑（直接结束质疑阶段）
      const nextState = engine.endChallengePhase();

      // 验证：流转到下一个玩家
      expect(nextState.currentPlayerIndex).toBeDefined();
      expect(nextState.phase).not.toBe('challenge');
    });
  });
});
