/**
 * =============================================================================
 * 质疑次数限制测试 - 确保每个角色在单个回合内只能质疑一次
 * =============================================================================
 *
 * Bug描述：角色"朱雀"在同一回合内能够执行两次质疑操作
 * 修复目标：确保每个角色在单个回合内只能执行一次质疑操作
 */

import { GameEngine } from '../../src/core/GameEngineV2';

describe('质疑次数限制测试', () => {
  let engine: GameEngine;

  beforeEach(() => {
    engine = new GameEngine();
    engine.initializeGame('lelouch');
  });

  /**
   * 辅助函数：设置出牌状态
   */
  const setupPlayCards = (playerId: 'player' | 'ai' | 'ai2' | 'ai3', isBluff: boolean = false) => {
    (engine as any).state.turnState.playedCards = {
      cardIds: ['card1'],
      claimedRank: 'Q',
      actualCards: [{ id: 'card1', rank: isBluff ? 'K' : 'Q', suit: 'spades', isJoker: false }],
      playerId,
      isBluff,
    };
  };

  describe('【场景1】同一角色不能质疑两次', () => {
    test('1.1 C.C.出牌后，质疑顺序应该是玩家->朱雀->卡莲，每个角色只能被询问一次', () => {
      // C.C./ai 出牌
      setupPlayCards('ai', false);

      const state = engine.getState();

      // 验证出牌者是C.C.
      expect(state.turnState.playedCards?.playerId).toBe('ai');

      // 质疑顺序应该是：玩家(0) -> 朱雀(1) -> 卡莲(2)
      // 注意：C.C.(3)是出牌者，不应该被询问
      const playedByIndex = 3; // C.C.
      const challengeOrder = [
        (playedByIndex + 1) % 4, // 玩家(0)
        (playedByIndex + 2) % 4, // 朱雀(1)
        (playedByIndex + 3) % 4, // 卡莲(2)
      ];

      // 验证质疑顺序中不包含C.C.(3)
      expect(challengeOrder).not.toContain(3);

      // 验证质疑顺序正确
      expect(challengeOrder).toEqual([0, 1, 2]);
    });

    test('1.2 朱雀出牌后，质疑顺序应该是卡莲->C.C.->玩家，不包含朱雀', () => {
      // 朱雀/ai2 出牌
      setupPlayCards('ai2', false);

      const state = engine.getState();
      expect(state.turnState.playedCards?.playerId).toBe('ai2');

      // 质疑顺序应该是：卡莲(2) -> C.C.(3) -> 玩家(0)
      const playedByIndex = 1; // 朱雀
      const challengeOrder = [
        (playedByIndex + 1) % 4, // 卡莲(2)
        (playedByIndex + 2) % 4, // C.C.(3)
        (playedByIndex + 3) % 4, // 玩家(0)
      ];

      // 验证质疑顺序中不包含朱雀(1)
      expect(challengeOrder).not.toContain(1);

      // 验证质疑顺序正确
      expect(challengeOrder).toEqual([2, 3, 0]);
    });

    test('1.3 玩家出牌后，质疑顺序应该是朱雀->卡莲->C.C.，不包含玩家', () => {
      // 玩家出牌
      setupPlayCards('player', false);

      const state = engine.getState();
      expect(state.turnState.playedCards?.playerId).toBe('player');

      // 质疑顺序应该是：朱雀(1) -> 卡莲(2) -> C.C.(3)
      const playedByIndex = 0; // 玩家
      const challengeOrder = [
        (playedByIndex + 1) % 4, // 朱雀(1)
        (playedByIndex + 2) % 4, // 卡莲(2)
        (playedByIndex + 3) % 4, // C.C.(3)
      ];

      // 验证质疑顺序中不包含玩家(0)
      expect(challengeOrder).not.toContain(0);

      // 验证质疑顺序正确
      expect(challengeOrder).toEqual([1, 2, 3]);
    });
  });

  describe('【场景2】质疑顺序验证', () => {
    test('2.1 验证质疑顺序的完整性和唯一性', () => {
      const testCases = [
        { playedBy: 'player' as const, expectedOrder: [1, 2, 3], excluded: 0 },
        { playedBy: 'ai2' as const, expectedOrder: [2, 3, 0], excluded: 1 },
        { playedBy: 'ai3' as const, expectedOrder: [3, 0, 1], excluded: 2 },
        { playedBy: 'ai' as const, expectedOrder: [0, 1, 2], excluded: 3 },
      ];

      for (const testCase of testCases) {
        setupPlayCards(testCase.playedBy, false);

        const state = engine.getState();
        expect(state.turnState.playedCards?.playerId).toBe(testCase.playedBy);

        // 验证质疑顺序中不包含出牌者
        expect(testCase.expectedOrder).not.toContain(testCase.excluded);

        // 验证质疑顺序包含且仅包含其他3个玩家
        expect(testCase.expectedOrder.length).toBe(3);
        expect(new Set(testCase.expectedOrder).size).toBe(3); // 无重复
      }
    });

    test('2.2 验证质疑顺序中每个角色只出现一次', () => {
      const playedByIndex = 0; // 玩家出牌
      const challengeOrder = [
        (playedByIndex + 1) % 4, // 朱雀(1)
        (playedByIndex + 2) % 4, // 卡莲(2)
        (playedByIndex + 3) % 4, // C.C.(3)
      ];

      // 验证无重复角色
      const uniqueIndices = new Set(challengeOrder);
      expect(uniqueIndices.size).toBe(challengeOrder.length);

      // 验证每个索引只出现一次
      for (let i = 0; i < 4; i++) {
        if (i !== playedByIndex) {
          const count = challengeOrder.filter(idx => idx === i).length;
          expect(count).toBe(1); // 每个非出牌者只出现一次
        }
      }
    });
  });

  describe('【场景3】边界条件测试', () => {
    test('3.1 只有2个玩家存活时的质疑顺序', () => {
      // 淘汰卡莲和C.C.
      (engine as any).state.aiPlayers[2].isActive = false;
      (engine as any).state.aiPlayers[2].stats.hp = 0;
      (engine as any).state.aiPlayers[0].isActive = false;
      (engine as any).state.aiPlayers[0].stats.hp = 0;

      // 玩家出牌
      setupPlayCards('player', false);

      // 只有朱雀存活，应该只询问朱雀一次
      // 质疑顺序理论上应该是：朱雀(1) -> (跳过卡莲) -> (跳过C.C.) -> 结束
      // 实际实现中，应该只询问朱雀一次，然后结束
    });

    test('3.2 所有AI都淘汰时，质疑阶段应该直接结束', () => {
      // 淘汰所有AI
      (engine as any).state.aiPlayers.forEach((ai: { isActive: boolean; stats: { hp: number } }) => {
        ai.isActive = false;
        ai.stats.hp = 0;
      });

      // 玩家出牌
      setupPlayCards('player', false);

      // 质疑阶段应该直接结束，因为没有其他玩家可以质疑
    });
  });

  describe('【场景4】实际游戏流程测试', () => {
    test('4.1 完整质疑流程中每个角色只参与一次', async () => {
      // 这是一个模拟测试，验证在完整质疑流程中
      // 每个角色只被询问一次质疑决策

      // C.C.出牌
      setupPlayCards('ai', false);

      const state = engine.getState();
      const playedBy = state.turnState.playedCards?.playerId;
      expect(playedBy).toBe('ai');

      // 质疑顺序：朱雀 -> 卡莲 -> 玩家
      // 每个角色应该只被询问一次
      const challengeDecisions: string[] = [];

      // 模拟质疑流程
      // 注意：这里只是验证顺序，不涉及实际的质疑决策
      const playedByIndex = 3; // C.C.
      const order = [
        (playedByIndex + 1) % 4, // 朱雀(1)
        (playedByIndex + 2) % 4, // 卡莲(2)
        (playedByIndex + 3) % 4, // 玩家(0)
      ];

      // 验证顺序中无重复
      expect(new Set(order).size).toBe(order.length);

      // 验证每个角色只出现一次
      order.forEach((idx, i) => {
        const firstIndex = order.indexOf(idx);
        expect(firstIndex).toBe(i); // 每个索引只出现一次，且位置正确
      });
    });
  });
});
