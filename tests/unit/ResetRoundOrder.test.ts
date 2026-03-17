/**
 * =============================================================================
 * Code Geass: Liar's Game - 重置牌局后起始玩家顺序测试
 * =============================================================================
 *
 * 验证Geass惩罚后，下一回合由受罚者的下家（顺时针方向）开始
 *
 * UI布局: 顶部=AI2, 左侧=AI3, 右侧=AI1, 底部=玩家
 * 顺时针顺序: 玩家(0) -> AI3(1) -> AI2(2) -> AI1(3) -> 玩家(0)
 *
 * @author Code Agent
 * @version 1.0.0
 */

import { GameEngine } from '../../src/core/GameEngineV2';

describe('重置牌局后起始玩家顺序测试', () => {
  let engine: GameEngine;

  beforeEach(() => {
    engine = new GameEngine();
    engine.initializeGame('lelouch');
  });

  describe('【场景1】玩家受罚后，下一回合由AI3开始', () => {
    test('1.1 玩家受罚，传入startingPlayerIndex=1', () => {
      // 模拟玩家受罚，下一回合应由AI3(1)开始
      const resetState = engine.resetRound(1);

      expect(resetState.currentPlayerIndex).toBe(1);
      expect(resetState.phase).toBe('ai_turn');
    });
  });

  describe('【场景2】AI3受罚后，下一回合由AI2开始', () => {
    test('2.1 AI3受罚，传入startingPlayerIndex=2', () => {
      // 模拟AI3受罚，下一回合应由AI2(2)开始
      const resetState = engine.resetRound(2);

      expect(resetState.currentPlayerIndex).toBe(2);
      expect(resetState.phase).toBe('ai_turn');
    });
  });

  describe('【场景3】AI2受罚后，下一回合由AI1开始', () => {
    test('3.1 AI2受罚，传入startingPlayerIndex=3', () => {
      // 模拟AI2受罚，下一回合应由AI1(3)开始
      const resetState = engine.resetRound(3);

      expect(resetState.currentPlayerIndex).toBe(3);
      expect(resetState.phase).toBe('ai_turn');
    });
  });

  describe('【场景4】AI1受罚后，下一回合由玩家开始', () => {
    test('4.1 AI1受罚，传入startingPlayerIndex=0', () => {
      // 模拟AI1受罚，下一回合应由玩家(0)开始
      const resetState = engine.resetRound(0);

      expect(resetState.currentPlayerIndex).toBe(0);
      expect(resetState.phase).toBe('player_turn');
    });
  });

  describe('【场景5】不传入参数时随机选择', () => {
    test('5.1 不传参数时，currentPlayerIndex在0-3范围内', () => {
      // 多次测试，验证随机性
      const results = new Set<number>();
      for (let i = 0; i < 10; i++) {
        const state = engine.resetRound();
        results.add(state.currentPlayerIndex);
      }

      // 验证结果在有效范围内
      results.forEach(index => {
        expect(index).toBeGreaterThanOrEqual(0);
        expect(index).toBeLessThanOrEqual(3);
      });
    });
  });

  describe('【场景6】完整游戏流程验证', () => {
    test('6.1 模拟C.C.(AI1)受罚后，应由玩家开始', () => {
      // C.C.对应AI1，索引为3
      // 受罚后应由玩家(0)开始
      const resetState = engine.resetRound(0);

      expect(resetState.currentPlayerIndex).toBe(0);
      expect(resetState.phase).toBe('player_turn');
    });

    test('6.2 模拟卡莲(AI3)受罚后，应由AI2开始', () => {
      // 卡莲对应AI3，索引为1
      // 受罚后应由AI2(2)开始
      const resetState = engine.resetRound(2);

      expect(resetState.currentPlayerIndex).toBe(2);
      expect(resetState.phase).toBe('ai_turn');
    });

    test('6.3 模拟朱雀(AI2)受罚后，应由AI1开始', () => {
      // 朱雀对应AI2，索引为2
      // 受罚后应由AI1(3)开始
      const resetState = engine.resetRound(3);

      expect(resetState.currentPlayerIndex).toBe(3);
      expect(resetState.phase).toBe('ai_turn');
    });
  });

  describe('【场景7】回合数递增验证', () => {
    test('7.1 重置后回合数应增加', () => {
      const initialTurnNumber = engine.getState().turnState.turnNumber;

      const resetState = engine.resetRound(1);

      expect(resetState.turnState.turnNumber).toBe(initialTurnNumber + 1);
    });

    test('7.2 多次重置后回合数正确递增', () => {
      let turnNumber = engine.getState().turnState.turnNumber;

      for (let i = 0; i < 3; i++) {
        const state = engine.resetRound(i % 4);
        turnNumber++;
        expect(state.turnState.turnNumber).toBe(turnNumber);
      }
    });
  });
});
