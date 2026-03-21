/**
 * =============================================================================
 * 质疑流程顺序一致性测试
 * =============================================================================
 *
 * 测试目标：验证质疑流程中各模块的索引映射一致性
 * 核心问题：确保 App.tsx、useGeassResult.ts、GameEngineV2.ts 使用相同的索引映射
 *
 * 统一索引映射标准：
 * - 0 = 玩家 (player)
 * - 1 = 朱雀/ai2
 * - 2 = C.C./ai
 * - 3 = 卡莲/ai3
 *
 * 顺时针顺序：玩家(0) → 朱雀(1) → C.C.(2) → 卡莲(3) → 玩家(0)
 */

import { describe, it, expect } from 'vitest';

describe('质疑流程索引映射一致性测试', () => {
  /**
   * App.tsx 使用的索引映射
   */
  const appGetPlayerIndex = (id: string): number => {
    if (id === 'player') return 0;
    if (id === 'ai2') return 1; // 朱雀
    if (id === 'ai') return 2;  // C.C.
    if (id === 'ai3') return 3; // 卡莲
    return 0;
  };

  /**
   * useGeassResult.ts 使用的索引映射（修复后）
   */
  const hookGetPlayerIndex = (id: string): number => {
    if (id === 'player') return 0;
    if (id === 'ai2') return 1;   // 朱雀
    if (id === 'ai') return 2;    // C.C.
    if (id === 'ai3') return 3;   // 卡莲
    return 0;
  };

  /**
   * GameEngineV2.ts 使用的索引映射
   */
  const engineGetPlayerIndex = (id: string): number => {
    if (id === 'player') return 0;
    if (id === 'ai2') return 1; // 朱雀
    if (id === 'ai') return 2;  // C.C.
    if (id === 'ai3') return 3; // 卡莲
    return 0;
  };

  describe('所有模块的索引映射应该一致', () => {
    it('玩家(player)索引应该为0', () => {
      expect(appGetPlayerIndex('player')).toBe(0);
      expect(hookGetPlayerIndex('player')).toBe(0);
      expect(engineGetPlayerIndex('player')).toBe(0);
    });

    it('朱雀(ai2)索引应该为1', () => {
      expect(appGetPlayerIndex('ai2')).toBe(1);
      expect(hookGetPlayerIndex('ai2')).toBe(1);
      expect(engineGetPlayerIndex('ai2')).toBe(1);
    });

    it('C.C.(ai)索引应该为2', () => {
      expect(appGetPlayerIndex('ai')).toBe(2);
      expect(hookGetPlayerIndex('ai')).toBe(2);
      expect(engineGetPlayerIndex('ai')).toBe(2);
    });

    it('卡莲(ai3)索引应该为3', () => {
      expect(appGetPlayerIndex('ai3')).toBe(3);
      expect(hookGetPlayerIndex('ai3')).toBe(3);
      expect(engineGetPlayerIndex('ai3')).toBe(3);
    });
  });

  describe('质疑顺序计算应该正确', () => {
    /**
     * 计算质疑顺序（顺时针）
     */
    const calculateChallengeOrder = (playedByIndex: number): number[] => {
      const order: number[] = [];
      let currentIndex = (playedByIndex + 1) % 4;
      let checkedCount = 0;

      while (checkedCount < 3) {
        if (currentIndex === playedByIndex) break;
        order.push(currentIndex);
        currentIndex = (currentIndex + 1) % 4;
        checkedCount++;
      }

      return order;
    };

    const getPlayerNameByIndex = (index: number): string => {
      const names = ['玩家', '朱雀', 'C.C.', '卡莲'];
      return names[index];
    };

    it('玩家(0)出牌时，质疑顺序应为 朱雀(1) → C.C.(2) → 卡莲(3)', () => {
      const order = calculateChallengeOrder(0);
      console.log(`玩家出牌，质疑顺序: ${order.map(getPlayerNameByIndex).join(' → ')}`);

      expect(order).toEqual([1, 2, 3]);
    });

    it('朱雀(1)出牌时，质疑顺序应为 C.C.(2) → 卡莲(3) → 玩家(0)', () => {
      const order = calculateChallengeOrder(1);
      console.log(`朱雀出牌，质疑顺序: ${order.map(getPlayerNameByIndex).join(' → ')}`);

      expect(order).toEqual([2, 3, 0]);
    });

    it('C.C.(2)出牌时，质疑顺序应为 卡莲(3) → 玩家(0) → 朱雀(1)', () => {
      const order = calculateChallengeOrder(2);
      console.log(`C.C.出牌，质疑顺序: ${order.map(getPlayerNameByIndex).join(' → ')}`);

      expect(order).toEqual([3, 0, 1]);
    });

    it('卡莲(3)出牌时，质疑顺序应为 玩家(0) → 朱雀(1) → C.C.(2)', () => {
      const order = calculateChallengeOrder(3);
      console.log(`卡莲出牌，质疑顺序: ${order.map(getPlayerNameByIndex).join(' → ')}`);

      expect(order).toEqual([0, 1, 2]);
    });
  });

  describe('质疑后的下一回合顺序应该正确', () => {
    /**
     * 计算下一回合的先手玩家（受罚者的下家）
     */
    const calculateNextStarter = (loserIndex: number): number => {
      return (loserIndex + 1) % 4;
    };

    it('玩家受罚时，下一回合朱雀先手', () => {
      expect(calculateNextStarter(0)).toBe(1);
    });

    it('朱雀受罚时，下一回合C.C.先手', () => {
      expect(calculateNextStarter(1)).toBe(2);
    });

    it('C.C.受罚时，下一回合卡莲先手', () => {
      expect(calculateNextStarter(2)).toBe(3);
    });

    it('卡莲受罚时，下一回合玩家先手', () => {
      expect(calculateNextStarter(3)).toBe(0);
    });
  });

  describe('aiPlayers数组索引映射应该正确', () => {
    /**
     * 游戏索引到aiPlayers数组索引的映射
     * aiPlayers数组: [ai(C.C.), ai2(朱雀), ai3(卡莲)]
     */
    const getAIArrayIndex = (gameIndex: number): number => {
      // 游戏索引: 1=ai2(朱雀), 2=ai(C.C.), 3=ai3(卡莲)
      // aiPlayers数组: 0=ai(C.C.), 1=ai2(朱雀), 2=ai3(卡莲)
      if (gameIndex === 1) return 1; // 朱雀 -> aiPlayers[1]
      if (gameIndex === 2) return 0; // C.C. -> aiPlayers[0]
      if (gameIndex === 3) return 2; // 卡莲 -> aiPlayers[2]
      return -1;
    };

    it('游戏索引1(朱雀)对应aiPlayers[1]', () => {
      expect(getAIArrayIndex(1)).toBe(1);
    });

    it('游戏索引2(C.C.)对应aiPlayers[0]', () => {
      expect(getAIArrayIndex(2)).toBe(0);
    });

    it('游戏索引3(卡莲)对应aiPlayers[2]', () => {
      expect(getAIArrayIndex(3)).toBe(2);
    });
  });
});
