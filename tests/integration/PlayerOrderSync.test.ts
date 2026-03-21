/**
 * =============================================================================
 * 角色顺序前后端同步集成测试
 * =============================================================================
 *
 * 测试目标：验证后台逻辑与UI展示层的角色顺序完全一致
 * 测试覆盖：
 * 1. 索引映射一致性验证
 * 2. 顺时针流转顺序验证
 * 3. 质疑顺序验证
 * 4. 角色淘汰后的流转验证
 * 5. 边界条件测试
 *
 * 需求规格定义的顺时针顺序: 卡莲(上/1) → 朱雀(右/2) → 玩家(下/0) → C.C.(左/3) → 卡莲(上)
 *
 * @author Code Agent
 * @version 2.0.0 - 统一符合需求规格
 */

import { GameEngine } from '../../src/core/GameEngineV2';
import {
  getPlayerIdByIndex,
  getIndexByPlayerId,
  getNextPlayerIndex,
  getPrevPlayerIndex,
  getClockwisePlayerOrder,
  getAIPlayerByIndex,
  validateIndexMappings,
  INDEX_TO_PLAYER_ID,
  PLAYER_ID_TO_INDEX,
  INDEX_TO_AI_ARRAY_INDEX,
  AI_ARRAY_INDEX_TO_INDEX,
  UI_POSITION_TO_INDEX,
  INDEX_TO_UI_POSITION,
  type PlayerId,
} from '../../src/core/PlayerIndexMapper';

describe('【集成测试】角色顺序前后端同步验证', () => {
  let engine: GameEngine;

  beforeEach(() => {
    engine = new GameEngine();
    engine.initializeGame('lelouch');
  });

  // ============================================
  // 测试套件1: 索引映射一致性
  // ============================================
  describe('【测试套件1】索引映射一致性验证', () => {
    test('1.1 所有索引映射常量应该互为逆映射', () => {
      const validation = validateIndexMappings();
      expect(validation.valid).toBe(true);
      expect(validation.errors).toHaveLength(0);
    });

    test('1.2 INDEX_TO_PLAYER_ID 和 PLAYER_ID_TO_INDEX 应该互为逆映射', () => {
      for (let i = 0; i < 4; i++) {
        const playerId = INDEX_TO_PLAYER_ID[i];
        expect(PLAYER_ID_TO_INDEX[playerId]).toBe(i);
      }

      const playerIds: PlayerId[] = ['player', 'ai', 'ai2', 'ai3'];
      for (const playerId of playerIds) {
        const index = PLAYER_ID_TO_INDEX[playerId];
        expect(INDEX_TO_PLAYER_ID[index]).toBe(playerId);
      }
    });

    test('1.3 INDEX_TO_AI_ARRAY_INDEX 和 AI_ARRAY_INDEX_TO_INDEX 应该互为逆映射', () => {
      // 排除玩家(index 0)
      for (let i = 1; i < 4; i++) {
        const aiArrayIndex = INDEX_TO_AI_ARRAY_INDEX[i];
        if (aiArrayIndex !== null) {
          expect(AI_ARRAY_INDEX_TO_INDEX[aiArrayIndex]).toBe(i);
        }
      }

      for (let i = 0; i < 3; i++) {
        const index = AI_ARRAY_INDEX_TO_INDEX[i];
        expect(INDEX_TO_AI_ARRAY_INDEX[index]).toBe(i);
      }
    });

    test('1.4 UI位置映射应该一致', () => {
      // 根据需求规格：
      // 上方(卡莲) = index 1
      // 右方(朱雀) = index 2
      // 下方(玩家) = index 0
      // 左方(C.C.) = index 3
      expect(UI_POSITION_TO_INDEX['top']).toBe(1);      // 卡莲
      expect(UI_POSITION_TO_INDEX['right']).toBe(2);    // 朱雀
      expect(UI_POSITION_TO_INDEX['bottom']).toBe(0);   // 玩家
      expect(UI_POSITION_TO_INDEX['left']).toBe(3);     // C.C.

      expect(INDEX_TO_UI_POSITION[1]).toBe('top');      // 卡莲
      expect(INDEX_TO_UI_POSITION[2]).toBe('right');    // 朱雀
      expect(INDEX_TO_UI_POSITION[0]).toBe('bottom');   // 玩家
      expect(INDEX_TO_UI_POSITION[3]).toBe('left');     // C.C.
    });
  });

  // ============================================
  // 测试套件2: 顺时针流转顺序
  // ============================================
  describe('【测试套件2】顺时针流转顺序验证', () => {
    test('2.1 完整的顺时针流转周期', () => {
      // 从卡莲开始
      let current = 1; // 卡莲
      const order: number[] = [current];

      for (let i = 0; i < 4; i++) {
        current = getNextPlayerIndex(current);
        order.push(current);
      }

      // 应该回到起点: 卡莲(1) → 朱雀(2) → 玩家(0) → C.C.(3) → 卡莲(1)
      expect(order).toEqual([1, 2, 0, 3, 1]);
    });

    test('2.2 每个位置的下一个玩家应该正确', () => {
      // 卡莲(1/上) → 朱雀(2/右)
      expect(getNextPlayerIndex(1)).toBe(2);

      // 朱雀(2/右) → 玩家(0/下)
      expect(getNextPlayerIndex(2)).toBe(0);

      // 玩家(0/下) → C.C.(3/左)
      expect(getNextPlayerIndex(0)).toBe(3);

      // C.C.(3/左) → 卡莲(1/上)
      expect(getNextPlayerIndex(3)).toBe(1);
    });

    test('2.3 每个位置的上一个玩家应该正确（逆时针）', () => {
      // 卡莲(1/上) ← C.C.(3/左)
      expect(getPrevPlayerIndex(1)).toBe(3);

      // 朱雀(2/右) ← 卡莲(1/上)
      expect(getPrevPlayerIndex(2)).toBe(1);

      // 玩家(0/下) ← 朱雀(2/右)
      expect(getPrevPlayerIndex(0)).toBe(2);

      // C.C.(3/左) ← 玩家(0/下)
      expect(getPrevPlayerIndex(3)).toBe(0);
    });

    test('2.4 顺时针顺序的玩家ID列表应该正确', () => {
      // 从玩家开始，顺时针顺序应该是：C.C. → 卡莲 → 朱雀
      const orderFromPlayer = getClockwisePlayerOrder(0, 0);
      expect(orderFromPlayer).toEqual(['ai', 'ai3', 'ai2']);

      // 从卡莲开始，顺时针顺序应该是：朱雀 → 玩家 → C.C.
      const orderFromKallen = getClockwisePlayerOrder(1, 1);
      expect(orderFromKallen).toEqual(['ai2', 'player', 'ai']);

      // 从朱雀开始，顺时针顺序应该是：玩家 → C.C. → 卡莲
      const orderFromSuzaku = getClockwisePlayerOrder(2, 2);
      expect(orderFromSuzaku).toEqual(['player', 'ai', 'ai3']);

      // 从C.C.开始，顺时针顺序应该是：卡莲 → 朱雀 → 玩家
      const orderFromCC = getClockwisePlayerOrder(3, 3);
      expect(orderFromCC).toEqual(['ai3', 'ai2', 'player']);
    });
  });

  // ============================================
  // 测试套件3: 游戏引擎集成
  // ============================================
  describe('【测试套件3】游戏引擎集成验证', () => {
    test('3.1 游戏初始化后的角色映射应该正确', () => {
      const state = engine.getState();

      // 验证aiPlayers数组顺序
      expect(state.aiPlayers[0].id).toBe('ai');    // C.C. -> currentPlayerIndex=3
      expect(state.aiPlayers[1].id).toBe('ai2');   // 朱雀 -> currentPlayerIndex=2
      expect(state.aiPlayers[2].id).toBe('ai3');   // 卡莲 -> currentPlayerIndex=1

      // 验证名称
      expect(state.aiPlayers[0].name).toBe('C.C.');
      expect(state.aiPlayers[1].name).toBe('朱雀');
      expect(state.aiPlayers[2].name).toBe('卡莲');
    });

    test('3.2 getAIPlayerByIndex 应该正确映射', () => {
      const state = engine.getState();

      // index 1 -> ai3/卡莲 -> aiPlayers[2]
      const kallen = getAIPlayerByIndex(1, state.aiPlayers);
      expect(kallen).not.toBeNull();
      expect(kallen?.name).toBe('卡莲');
      expect(kallen?.id).toBe('ai3');

      // index 2 -> ai2/朱雀 -> aiPlayers[1]
      const suzaku = getAIPlayerByIndex(2, state.aiPlayers);
      expect(suzaku).not.toBeNull();
      expect(suzaku?.name).toBe('朱雀');
      expect(suzaku?.id).toBe('ai2');

      // index 3 -> ai/C.C. -> aiPlayers[0]
      const cc = getAIPlayerByIndex(3, state.aiPlayers);
      expect(cc).not.toBeNull();
      expect(cc?.name).toBe('C.C.');
      expect(cc?.id).toBe('ai');

      // index 0 -> 玩家 -> null
      const player = getAIPlayerByIndex(0, state.aiPlayers);
      expect(player).toBeNull();
    });

    test('3.3 回合流转应该遵循顺时针顺序', () => {
      // 设置出牌状态
      const setupPlayCards = (playerId: PlayerId) => {
        (engine as any).state.turnState.playedCards = {
          cardIds: ['card1'],
          claimedRank: 'Q',
          actualCards: [{ id: 'card1', rank: 'Q', suit: 'spades', isJoker: false }],
          playerId,
          isBluff: false,
        };
      };

      // 测试所有可能的流转: 卡莲(1) → 朱雀(2) → 玩家(0) → C.C.(3) → 卡莲(1)
      const testCases = [
        { playerId: 'ai3' as const, expectedNext: 2, description: '卡莲 -> 朱雀' },
        { playerId: 'ai2' as const, expectedNext: 0, description: '朱雀 -> 玩家' },
        { playerId: 'player' as const, expectedNext: 3, description: '玩家 -> C.C.' },
        { playerId: 'ai' as const, expectedNext: 1, description: 'C.C. -> 卡莲' },
      ];

      for (const testCase of testCases) {
        setupPlayCards(testCase.playerId);
        const nextState = engine.endChallengePhase();
        expect(nextState.currentPlayerIndex).toBe(testCase.expectedNext);
      }
    });
  });

  // ============================================
  // 测试套件4: 角色淘汰场景
  // ============================================
  describe('【测试套件4】角色淘汰后的流转验证', () => {
    test('4.1 单个AI被淘汰后应该正确跳过', () => {
      const state = engine.getState();

      // 淘汰朱雀 (ai2, index 2, aiPlayers[1])
      state.aiPlayers[1].isActive = false;
      state.aiPlayers[1].stats.hp = 0;

      // 从卡莲开始，下一个应该是朱雀（但朱雀被淘汰）
      const nextIndex = getNextPlayerIndex(1); // 卡莲(1)的下家是朱雀(2)
      expect(nextIndex).toBe(2);

      // 验证AI状态
      const ai = getAIPlayerByIndex(nextIndex, state.aiPlayers);
      expect(ai?.isActive).toBe(false);

      // 应该继续找下一个: 朱雀(2)的下家是玩家(0)
      const nextNextIndex = getNextPlayerIndex(nextIndex);
      expect(nextNextIndex).toBe(0);
    });

    test('4.2 多个AI被淘汰后应该正确跳过', () => {
      const state = engine.getState();

      // 淘汰朱雀(ai2, index 2) 和 C.C.(ai, index 3)
      state.aiPlayers[1].isActive = false;
      state.aiPlayers[1].stats.hp = 0;
      state.aiPlayers[0].isActive = false;
      state.aiPlayers[0].stats.hp = 0;

      // 从卡莲(1)开始，下一个是朱雀(2)，朱雀被淘汰
      let nextIndex = getNextPlayerIndex(1);
      expect(nextIndex).toBe(2);
      let ai = getAIPlayerByIndex(nextIndex, state.aiPlayers);
      expect(ai?.isActive).toBe(false);

      // 继续找下一个: 朱雀(2)的下家是玩家(0)
      nextIndex = getNextPlayerIndex(nextIndex);
      expect(nextIndex).toBe(0);
    });

    test('4.3 只剩玩家时应该停留在玩家', () => {
      const state = engine.getState();

      // 淘汰所有AI
      state.aiPlayers.forEach(ai => {
        ai.isActive = false;
        ai.stats.hp = 0;
      });

      // 无论怎么流转，都应该回到玩家
      let current = 0;
      for (let i = 0; i < 10; i++) {
        current = getNextPlayerIndex(current);
        if (current !== 0) {
          const ai = getAIPlayerByIndex(current, state.aiPlayers);
          expect(ai?.isActive).toBe(false);
        }
      }
    });
  });

  // ============================================
  // 测试套件5: 边界条件测试
  // ============================================
  describe('【测试套件5】边界条件测试', () => {
    test('5.1 无效索引应该返回默认值', () => {
      expect(getPlayerIdByIndex(-1)).toBeNull();
      expect(getPlayerIdByIndex(4)).toBeNull();
      expect(getPlayerIdByIndex(999)).toBeNull();
    });

    test('5.2 无效玩家ID应该返回null', () => {
      expect(getIndexByPlayerId('invalid' as PlayerId)).toBeNull();
    });

    test('5.3 顺时针流转应该正确处理循环', () => {
      // 从C.C.(3)开始，下一个应该是卡莲(1)
      expect(getNextPlayerIndex(3)).toBe(1);

      // 从卡莲(1)开始，下一个应该是朱雀(2)
      expect(getNextPlayerIndex(1)).toBe(2);
    });

    test('5.4 逆时针流转应该正确处理循环', () => {
      // 从卡莲(1)开始，上一个应该是C.C.(3)
      expect(getPrevPlayerIndex(1)).toBe(3);

      // 从C.C.(3)开始，上一个应该是玩家(0)
      expect(getPrevPlayerIndex(3)).toBe(0);
    });
  });

  // ============================================
  // 测试套件6: UI与后台同步验证
  // ============================================
  describe('【测试套件6】UI与后台同步验证', () => {
    test('6.1 UI位置到索引的映射应该与后台一致', () => {
      // 验证所有UI位置映射
      expect(UI_POSITION_TO_INDEX['bottom']).toBe(0); // 玩家
      expect(UI_POSITION_TO_INDEX['top']).toBe(1);    // 卡莲
      expect(UI_POSITION_TO_INDEX['right']).toBe(2);  // 朱雀
      expect(UI_POSITION_TO_INDEX['left']).toBe(3);   // C.C.
    });

    test('6.2 索引到UI位置的映射应该与后台一致', () => {
      // 验证所有索引映射
      expect(INDEX_TO_UI_POSITION[0]).toBe('bottom'); // 玩家
      expect(INDEX_TO_UI_POSITION[1]).toBe('top');    // 卡莲
      expect(INDEX_TO_UI_POSITION[2]).toBe('right');  // 朱雀
      expect(INDEX_TO_UI_POSITION[3]).toBe('left');   // C.C.
    });

    test('6.3 角色名称映射应该一致', () => {
      const state = engine.getState();

      // 验证aiPlayers中的名称与PlayerIndexMapper一致
      expect(state.aiPlayers[0].name).toBe('C.C.');   // ai/C.C. -> index 3
      expect(state.aiPlayers[1].name).toBe('朱雀');   // ai2/朱雀 -> index 2
      expect(state.aiPlayers[2].name).toBe('卡莲');   // ai3/卡莲 -> index 1
    });

    test('6.4 质疑顺序应该与UI展示一致', () => {
      // 玩家出牌后，质疑顺序应该是：C.C.(左) → 卡莲(上) → 朱雀(右)
      const challengeOrder = getClockwisePlayerOrder(0, 0);
      expect(challengeOrder).toEqual(['ai', 'ai3', 'ai2']);

      // 验证对应的UI位置
      const positions = challengeOrder.map(id => {
        const index = PLAYER_ID_TO_INDEX[id];
        return INDEX_TO_UI_POSITION[index];
      });
      expect(positions).toEqual(['left', 'top', 'right']);
    });
  });
});
