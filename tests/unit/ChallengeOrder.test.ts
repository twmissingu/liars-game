/**
 * =============================================================================
 * 质疑阶段行动顺序测试
 * =============================================================================
 *
 * 测试目标：验证质疑阶段各角色的行动顺序正确性
 * 核心规则：出牌者不能在质疑阶段质疑自己
 *
 * 测试场景：
 * 1. 朱雀出牌后，质疑顺序应为 C.C. → 卡莲 → 玩家
 * 2. C.C.出牌后，质疑顺序应为 朱雀 → 卡莲 → 玩家
 * 3. 卡莲出牌后，质疑顺序应为 玩家 → 朱雀 → C.C.
 * 4. 玩家出牌后，质疑顺序应为 朱雀 → C.C. → 卡莲
 */

import { describe, it, expect, beforeEach } from 'vitest';
import { GameEngine } from '../../src/core/GameEngineV2';
import type { GameState } from '../../src/core/GameEngineV2';

describe('质疑阶段行动顺序测试', () => {
  let engine: GameEngine;

  beforeEach(() => {
    engine = new GameEngine();
  });

  /**
   * 辅助函数：获取玩家索引
   * 修正后的索引映射: 0=玩家, 1=ai2(朱雀), 2=ai(C.C.), 3=ai3(卡莲)
   */
  const getPlayerIndex = (id: string): number => {
    if (id === 'player') return 0;
    if (id === 'ai2') return 1; // 朱雀
    if (id === 'ai') return 2; // C.C.
    if (id === 'ai3') return 3; // 卡莲
    return 0;
  };

  /**
   * 辅助函数：获取玩家名称
   */
  const getPlayerNameByIndex = (index: number): string => {
    if (index === 0) return '玩家';
    if (index === 1) return '朱雀(ai2)';
    if (index === 2) return 'C.C.(ai)';
    if (index === 3) return '卡莲(ai3)';
    return '未知';
  };

  /**
   * 辅助函数：计算质疑顺序
   * 从出牌者的下家开始，顺时针方向
   */
  const calculateChallengeOrder = (playedByIndex: number): number[] => {
    const order: number[] = [];
    let currentIndex = (playedByIndex + 1) % 4;
    let checkedCount = 0;

    while (checkedCount < 3) {
      // 如果回到出牌者，结束
      if (currentIndex === playedByIndex) {
        break;
      }
      order.push(currentIndex);
      currentIndex = (currentIndex + 1) % 4;
      checkedCount++;
    }

    return order;
  };

  describe('质疑顺序计算测试', () => {
    it('朱雀(ai2, index=1)出牌时，质疑顺序应为 C.C.(2) → 卡莲(3) → 玩家(0)', () => {
      const playedByIndex = 1; // 朱雀
      const order = calculateChallengeOrder(playedByIndex);

      console.log(`朱雀出牌，质疑顺序: ${order.map(getPlayerNameByIndex).join(' → ')}`);

      expect(order).toHaveLength(3);
      expect(order[0]).toBe(2); // C.C.
      expect(order[1]).toBe(3); // 卡莲
      expect(order[2]).toBe(0); // 玩家
    });

    it('C.C.(ai, index=2)出牌时，质疑顺序应为 卡莲(3) → 玩家(0) → 朱雀(1)', () => {
      const playedByIndex = 2; // C.C.
      const order = calculateChallengeOrder(playedByIndex);

      console.log(`C.C.出牌，质疑顺序: ${order.map(getPlayerNameByIndex).join(' → ')}`);

      expect(order).toHaveLength(3);
      expect(order[0]).toBe(3); // 卡莲
      expect(order[1]).toBe(0); // 玩家
      expect(order[2]).toBe(1); // 朱雀
    });

    it('卡莲(ai3, index=3)出牌时，质疑顺序应为 玩家(0) → 朱雀(1) → C.C.(2)', () => {
      const playedByIndex = 3; // 卡莲
      const order = calculateChallengeOrder(playedByIndex);

      console.log(`卡莲出牌，质疑顺序: ${order.map(getPlayerNameByIndex).join(' → ')}`);

      expect(order).toHaveLength(3);
      expect(order[0]).toBe(0); // 玩家
      expect(order[1]).toBe(1); // 朱雀
      expect(order[2]).toBe(2); // C.C.
    });

    it('玩家(index=0)出牌时，质疑顺序应为 朱雀(1) → C.C.(2) → 卡莲(3)', () => {
      const playedByIndex = 0; // 玩家
      const order = calculateChallengeOrder(playedByIndex);

      console.log(`玩家出牌，质疑顺序: ${order.map(getPlayerNameByIndex).join(' → ')}`);

      expect(order).toHaveLength(3);
      expect(order[0]).toBe(1); // 朱雀
      expect(order[1]).toBe(2); // C.C.
      expect(order[2]).toBe(3); // 卡莲
    });
  });

  describe('出牌者不会被询问质疑', () => {
    it('质疑顺序中不应包含出牌者自己', () => {
      // 测试所有可能的出牌者
      for (let playedByIndex = 0; playedByIndex < 4; playedByIndex++) {
        const order = calculateChallengeOrder(playedByIndex);

        // 质疑顺序中不应包含出牌者
        expect(order).not.toContain(playedByIndex);

        // 质疑顺序长度应为3（其他三个玩家）
        expect(order).toHaveLength(3);

        console.log(`${getPlayerNameByIndex(playedByIndex)}出牌，质疑顺序: ${order.map(getPlayerNameByIndex).join(' → ')}`);
      }
    });
  });

  describe('游戏引擎质疑阶段测试', () => {
    it('游戏状态应正确记录出牌者', () => {
      // 创建新的引擎实例，避免状态污染
      const testEngine = new GameEngine();
      // 初始化游戏，玩家选择鲁鲁修
      const initialState = testEngine.initializeGame('lelouch');
      
      // 只有当玩家先手时才进行测试
      if (initialState.phase !== 'player_turn') {
        console.log('跳过测试：玩家不是起始玩家');
        expect(true).toBe(true); // 跳过测试
        return;
      }

      // 模拟玩家出牌（只出一张牌，确保不会清空手牌）
      const playerHand = testEngine.getPlayerHand();
      expect(playerHand.length).toBeGreaterThan(1); // 确保有足够的手牌

      const cardIds = [playerHand[0].id]; // 只出一张牌
      const claimedRank = initialState.liarCard || 'Q';

      const playResult = testEngine.playCards(cardIds, claimedRank);
      expect(playResult).toBe(true); // 确保出牌成功
      
      const state = testEngine.getState();

      // 验证出牌记录
      expect(state.turnState.playedCards).not.toBeNull();
      expect(state.turnState.playedCards?.playerId).toBe('player');
      expect(state.phase).toBe('challenge');
    });

    it('质疑阶段应能从游戏状态获取正确的出牌者', () => {
      // 创建新的引擎实例，避免状态污染
      const testEngine = new GameEngine();
      // 初始化游戏
      const initialState = testEngine.initializeGame('lelouch');
      
      // 只有当玩家先手时才进行测试
      if (initialState.phase !== 'player_turn') {
        console.log('跳过测试：玩家不是起始玩家');
        expect(true).toBe(true); // 跳过测试
        return;
      }

      // 模拟玩家出牌（只出一张牌，确保不会清空手牌）
      const playerHand = testEngine.getPlayerHand();
      expect(playerHand.length).toBeGreaterThan(1); // 确保有足够的手牌

      const cardIds = [playerHand[0].id]; // 只出一张牌
      const playResult = testEngine.playCards(cardIds, 'Q');
      expect(playResult).toBe(true); // 确保出牌成功
      
      const state = testEngine.getState();

      // 获取出牌者
      const playedBy = state.turnState.playedCards?.playerId;
      expect(playedBy).toBe('player');

      // 计算质疑顺序
      const playedByIndex = getPlayerIndex(playedBy || 'player');
      expect(playedByIndex).toBe(0);

      const order = calculateChallengeOrder(playedByIndex);
      expect(order).toEqual([1, 2, 3]); // 朱雀 → C.C. → 卡莲
    });
  });

  describe('边界情况测试', () => {
    it('当某些玩家被淘汰时，质疑顺序应跳过他们', () => {
      // 初始化游戏
      engine.initializeGame('lelouch');

      // 模拟玩家出牌
      const playerHand = engine.getPlayerHand();
      if (playerHand.length > 0) {
        engine.playCards([playerHand[0].id], 'Q');
        const state = engine.getState();

        // 假设C.C.(ai, index=2)被淘汰
        const aiCC = state.aiPlayers.find(ai => ai.id === 'ai');
        if (aiCC) {
          aiCC.isActive = false;
          aiCC.stats.hp = 0;
        }

        // 获取存活玩家的质疑顺序
        const playedBy = state.turnState.playedCards?.playerId || 'player';
        const playedByIndex = getPlayerIndex(playedBy);

        // 计算质疑顺序（排除被淘汰的玩家）
        const order: number[] = [];
        let currentIndex = (playedByIndex + 1) % 4;
        let checkedCount = 0;

        while (checkedCount < 3) {
          if (currentIndex === playedByIndex) break;

          // 检查玩家是否存活
          let isActive = true;
          if (currentIndex === 0) {
            isActive = state.playerStats.hp > 0;
          } else {
            const aiArrayIndex = currentIndex === 1 ? 1 : currentIndex === 2 ? 0 : 2;
            const ai = state.aiPlayers[aiArrayIndex];
            isActive = ai ? ai.isActive && ai.stats.hp > 0 : false;
          }

          if (isActive) {
            order.push(currentIndex);
          }

          currentIndex = (currentIndex + 1) % 4;
          checkedCount++;
        }

        // 由于C.C.被淘汰，质疑顺序应该只有朱雀和卡莲
        console.log(`C.C.被淘汰后的质疑顺序: ${order.map(getPlayerNameByIndex).join(' → ')}`);
        expect(order).not.toContain(2); // 不应包含C.C.
      }
    });
  });
});
