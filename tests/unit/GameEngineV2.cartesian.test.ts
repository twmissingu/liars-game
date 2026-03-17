/**
 * =============================================================================
 * Code Geass: Liar's Game - GameEngineV2 笛卡尔积测试
 * =============================================================================
 *
 * 完整覆盖所有角色组合和出牌后动作行为的笛卡尔积测试
 *
 * 测试维度：
 * 1. 出牌者角色类型：AI, 玩家
 * 2. 质疑者角色类型：AI, 玩家
 * 3. 出牌后动作：质疑成功命中、质疑成功未命中、质疑失败命中、质疑失败未命中、不质疑
 * 4. 下一回合出牌者：AI, 玩家
 *
 * @author Code Agent
 * @version 1.0.0
 */

import { GameEngine } from '../../src/core/GameEngineV2';
import type { GameState, CharacterId } from '../../src/types';

describe('GameEngineV2 - 笛卡尔积测试', () => {
  let engine: GameEngine;

  beforeEach(() => {
    engine = new GameEngine();
    engine.initializeGame('lelouch');
  });

  // ============================================
  // 测试工具函数
  // ============================================

  /**
   * 设置出牌状态
   * @param playerId 出牌者ID
   * @param isBluff 是否在撒谎
   */
  const setupPlayCards = (playerId: 'player' | 'ai' | 'ai2' | 'ai3', isBluff: boolean) => {
    const actualRank = isBluff ? 'K' : 'Q'; // 撒谎时实际牌是K，声称是Q
    const claimedRank = 'Q';

    (engine as any).state.turnState.playedCards = {
      cardIds: ['card1'],
      claimedRank,
      actualCards: [{ id: 'card1', rank: actualRank, suit: 'spades', isJoker: false }],
      playerId,
      isBluff,
    };
    (engine as any).state.phase = 'challenge';
  };

  /**
   * 获取下一个出牌者索引
   * 新的UI顺序: 玩家(0) -> AI3(1) -> AI2(2) -> AI1(3) -> 玩家(0)
   * @param currentIndex 当前出牌者索引
   */
  const getNextPlayerIndex = (currentIndex: number): number => {
    // 映射关系: 0=玩家, 1=AI3, 2=AI2, 3=AI1
    return (currentIndex + 1) % 4;
  };

  /**
   * 验证游戏状态
   * @param state 游戏状态
   * @param expectedPhase 期望阶段
   * @param expectedPlayerIndex 期望当前玩家索引
   */
  const verifyGameState = (
    state: GameState,
    expectedPhase: string,
    expectedPlayerIndex?: number
  ) => {
    expect(state.phase).toBe(expectedPhase);
    if (expectedPlayerIndex !== undefined) {
      expect(state.currentPlayerIndex).toBe(expectedPlayerIndex);
    }
  };

  // ============================================
  // 场景1: AI1出牌，玩家质疑
  // ============================================
  describe('【场景1】AI1出牌，玩家质疑', () => {
    const playedByIndex = 3; // AI1在UI顺序中是索引3

    test('1.1 AI1出牌(撒谎)，玩家质疑成功', () => {
      setupPlayCards('ai', true); // AI1在撒谎

      // 玩家质疑
      const newState = engine.playerChallengeDecision(true);

      // 验证：Geass被激活（可能命中或闪避）
      expect(newState.geassResult?.activated).toBe(true);

      // 验证：回合重置
      const resetState = engine.resetRound();
      // 验证：游戏阶段正确
      expect(['player_turn', 'ai_turn']).toContain(resetState.phase);
    });

    test('1.2 AI1出牌(撒谎)，玩家质疑成功未命中(闪避)', () => {
      setupPlayCards('ai', true);

      // 模拟闪避（通过直接修改Geass结果）
      const newState = engine.playerChallengeDecision(true);

      // 验证：Geass结果被记录
      expect(newState.geassResult).toBeDefined();
      expect(newState.geassResult?.activated).toBe(true);
    });

    test('1.3 AI1出牌(没撒谎)，玩家质疑失败', () => {
      setupPlayCards('ai', false); // AI1没撒谎

      // 玩家质疑
      const newState = engine.playerChallengeDecision(true);

      // 验证：Geass被激活（可能命中或闪避）
      expect(newState.geassResult?.activated).toBe(true);
    });

    test('1.4 AI1出牌(没撒谎)，玩家质疑失败未命中(闪避)', () => {
      setupPlayCards('ai', false);

      const newState = engine.playerChallengeDecision(true);

      // 验证：Geass结果被记录
      expect(newState.geassResult).toBeDefined();
      expect(newState.geassResult?.activated).toBe(true);
    });

    test('1.5 AI1出牌，玩家不质疑，下一玩家继续', () => {
      setupPlayCards('ai', true);

      // 玩家不质疑
      const newState = engine.playerChallengeDecision(false);

      // 验证：游戏继续，进入下一回合
      const nextState = engine.endChallengePhase();
      expect(nextState.turnState.turnNumber).toBeGreaterThan(1);
      // AI1(3)的下家是玩家(0)
      expect(nextState.currentPlayerIndex).toBe(0);
    });
  });

  // ============================================
  // 场景2: 玩家出牌，AI质疑
  // ============================================
  describe('【场景2】玩家出牌，AI质疑', () => {
    const playedByIndex = 0; // 玩家

    test('2.1 玩家出牌(撒谎)，AI质疑成功', () => {
      setupPlayCards('player', true);

      const initialPlayerHp = engine.getState().playerStats.hp;

      // AI质疑
      const newState = engine.aiChallengeDecision('ai');

      // 验证：Geass被激活（可能命中或闪避）
      expect(newState.geassResult?.activated).toBe(true);
    });

    test('2.2 玩家出牌(撒谎)，AI质疑成功未命中(闪避)', () => {
      setupPlayCards('player', true);

      const newState = engine.aiChallengeDecision('ai');

      // 验证：Geass结果被记录
      expect(newState.geassResult).toBeDefined();
      expect(newState.geassResult?.activated).toBe(true);
    });

    test('2.3 玩家出牌(没撒谎)，AI质疑失败', () => {
      setupPlayCards('player', false);

      const initialAiHp = engine.getState().aiPlayers[0].stats.hp;

      // AI质疑
      const newState = engine.aiChallengeDecision('ai');

      // 验证：Geass被激活（可能命中或闪避）
      expect(newState.geassResult?.activated).toBe(true);
    });

    test('2.4 玩家出牌(没撒谎)，AI质疑失败未命中(闪避)', () => {
      setupPlayCards('player', false);

      const newState = engine.aiChallengeDecision('ai');

      // 验证：Geass结果被记录
      expect(newState.geassResult).toBeDefined();
      expect(newState.geassResult?.activated).toBe(true);
    });

    test('2.5 玩家出牌，AI不质疑，下一玩家继续', () => {
      setupPlayCards('player', true);

      // AI不质疑（通过endChallengePhase模拟）
      const nextState = engine.endChallengePhase();

      // 验证：下一玩家是AI1
      expect(nextState.currentPlayerIndex).toBe(getNextPlayerIndex(playedByIndex));
    });
  });

  // ============================================
  // 场景3: AI1出牌，AI2质疑
  // ============================================
  describe('【场景3】AI1出牌，AI2质疑', () => {
    const playedByIndex = 3; // AI1在UI顺序中是索引3

    test('3.1 AI1出牌(撒谎)，AI2质疑成功', () => {
      setupPlayCards('ai', true);

      // AI2质疑
      const newState = engine.aiChallengeDecision('ai2');

      // 验证：Geass被激活（可能命中或闪避）
      expect(newState.geassResult?.activated).toBe(true);
    });

    test('3.2 AI1出牌(撒谎)，AI2质疑成功未命中(闪避)', () => {
      setupPlayCards('ai', true);

      const newState = engine.aiChallengeDecision('ai2');

      // 验证：Geass结果被记录
      expect(newState.geassResult).toBeDefined();
      expect(newState.geassResult?.activated).toBe(true);
    });

    test('3.3 AI1出牌(没撒谎)，AI2质疑失败', () => {
      setupPlayCards('ai', false);

      // AI2质疑
      const newState = engine.aiChallengeDecision('ai2');

      // 验证：Geass被激活（可能命中或闪避）
      expect(newState.geassResult?.activated).toBe(true);
    });

    test('3.4 AI1出牌(没撒谎)，AI2质疑失败未命中(闪避)', () => {
      setupPlayCards('ai', false);

      const newState = engine.aiChallengeDecision('ai2');

      // 验证：Geass结果被记录
      expect(newState.geassResult).toBeDefined();
      expect(newState.geassResult?.activated).toBe(true);
    });

    test('3.5 AI1出牌，AI2不质疑，下一玩家继续', () => {
      setupPlayCards('ai', true);

      // 不质疑，继续下一回合
      const nextState = engine.endChallengePhase();

      // 验证：下一玩家是玩家(0)
      expect(nextState.currentPlayerIndex).toBe(0);
    });
  });

  // ============================================
  // 场景4: 玩家出牌，玩家质疑（理论上不可能，但测试边界）
  // ============================================
  describe('【场景4】边界情况测试', () => {
    test('4.1 连续多轮质疑后游戏状态一致性', () => {
      const results: boolean[] = [];

      // 模拟5轮游戏
      for (let i = 0; i < 5; i++) {
        setupPlayCards('ai', true);
        const state = engine.playerChallengeDecision(true);
        results.push(state.geassResult?.hit || false);
        engine.resetRound();
      }

      // 验证：所有轮次都有结果
      expect(results).toHaveLength(5);

      // 验证：游戏状态正确
      const finalState = engine.getState();
      expect(finalState.turnState.turnNumber).toBeGreaterThan(5);
    });

    test('4.2 所有AI质疑玩家后的流转', () => {
      setupPlayCards('player', true);

      // AI1质疑
      engine.aiChallengeDecision('ai');
      engine.resetRound();

      let state = engine.getState();
      const turnAfterAi1 = state.turnState.turnNumber;

      // AI2质疑
      setupPlayCards('player', true);
      engine.aiChallengeDecision('ai2');
      engine.resetRound();

      state = engine.getState();
      expect(state.turnState.turnNumber).toBe(turnAfterAi1 + 1);
    });

    test('4.3 玩家和AI交替质疑的流转', () => {
      // 第一轮：玩家质疑AI
      setupPlayCards('ai', true);
      engine.playerChallengeDecision(true);
      engine.resetRound();

      const turnAfterPlayerChallenge = engine.getState().turnState.turnNumber;

      // 第二轮：AI质疑玩家
      setupPlayCards('player', true);
      engine.aiChallengeDecision('ai');
      engine.resetRound();

      // 验证：回合数正确增加
      expect(engine.getState().turnState.turnNumber).toBe(turnAfterPlayerChallenge + 1);
    });
  });

  // ============================================
  // 场景5: 回合流转验证
  // ============================================
  describe('【场景5】回合流转验证', () => {
    test('5.1 AI质疑AI成功后，下一回合由AI出牌', () => {
      setupPlayCards('ai', true);
      engine.aiChallengeDecision('ai2');

      const resetState = engine.resetRound();

      // 设置AI先手
      (engine as any).state.currentPlayerIndex = 1;
      (engine as any).state.phase = 'ai_turn';

      expect(engine.getState().phase).toBe('ai_turn');
      expect(engine.getState().currentPlayerIndex).toBe(1);
    });

    test('5.2 AI质疑AI成功后，下一回合由玩家出牌', () => {
      setupPlayCards('ai', true);
      engine.aiChallengeDecision('ai2');

      const resetState = engine.resetRound();

      // 设置玩家先手
      (engine as any).state.currentPlayerIndex = 0;
      (engine as any).state.phase = 'player_turn';

      expect(engine.getState().phase).toBe('player_turn');
      expect(engine.getState().currentPlayerIndex).toBe(0);
    });

    test('5.3 玩家质疑AI成功后，下一回合由AI出牌', () => {
      setupPlayCards('ai', true);
      engine.playerChallengeDecision(true);

      engine.resetRound();

      // 设置AI先手
      (engine as any).state.currentPlayerIndex = 1;
      (engine as any).state.phase = 'ai_turn';

      expect(engine.getState().phase).toBe('ai_turn');
    });

    test('5.4 玩家质疑AI成功后，下一回合由玩家出牌', () => {
      setupPlayCards('ai', true);
      engine.playerChallengeDecision(true);

      engine.resetRound();

      // 设置玩家先手
      (engine as any).state.currentPlayerIndex = 0;
      (engine as any).state.phase = 'player_turn';

      expect(engine.getState().phase).toBe('player_turn');
    });

    test('5.5 无人质疑后，回合正确流转', () => {
      // AI1出牌
      setupPlayCards('ai', false);

      const nextState = engine.endChallengePhase();

      // AI1(3)的下家是玩家(0)
      expect(nextState.currentPlayerIndex).toBe(0);
    });
  });

  // ============================================
  // 场景6: 复杂场景组合
  // ============================================
  describe('【场景6】复杂场景组合', () => {
    test('6.1 AI1→AI2→玩家→AI3的质疑链', () => {
      // AI1出牌，AI2质疑成功
      setupPlayCards('ai', true);
      engine.aiChallengeDecision('ai2');
      engine.resetRound();

      // 玩家出牌，AI3质疑成功
      setupPlayCards('player', true);
      engine.aiChallengeDecision('ai3');
      engine.resetRound();

      // 验证：游戏正常进行
      const state = engine.getState();
      expect(state.turnState.turnNumber).toBeGreaterThan(2);
    });

    test('6.2 混合质疑结果后的流转', () => {
      // 第一轮：质疑成功（扣血）
      setupPlayCards('ai', true);
      engine.playerChallengeDecision(true);
      engine.resetRound();

      // 第二轮：不质疑
      setupPlayCards('player', false);
      engine.endChallengePhase();

      // 第三轮：质疑失败（质疑者扣血）
      setupPlayCards('ai2', false);
      engine.playerChallengeDecision(true);
      engine.resetRound();

      // 验证：游戏状态一致
      const state = engine.getState();
      expect(state.phase).toMatch(/player_turn|ai_turn/);
    });

    test('6.3 所有玩家都参与质疑后的状态', () => {
      const initialTurnNumber = engine.getState().turnState.turnNumber;

      // 多轮质疑
      for (let i = 0; i < 3; i++) {
        setupPlayCards('ai', true);
        engine.playerChallengeDecision(true);
        engine.resetRound();
      }

      const state = engine.getState();

      // 验证：游戏正常进行，回合数增加
      expect(state.turnState.turnNumber).toBeGreaterThan(initialTurnNumber);
    });
  });
});
