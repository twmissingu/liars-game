/**
 * =============================================================================
 * PlayerIndexMapper 测试 - 验证需求规格的UI布局
 * =============================================================================
 *
 * 需求规格定义的顺时针顺序：
 * 上方AI角色（卡莲）→ 右方AI角色（朱雀）→ 下方玩家角色 → 左方AI角色（C.C.）→ 上方AI角色
 *
 * 映射规则：
 * - 上方 = 卡莲/ai3 (currentPlayerIndex = 1)
 * - 右方 = 朱雀/ai2 (currentPlayerIndex = 2)
 * - 下方 = 玩家 (currentPlayerIndex = 0)
 * - 左方 = C.C./ai (currentPlayerIndex = 3)
 *
 * @version 3.0.0 - 统一使用Jest框架，符合需求规格
 */

import {
  INDEX_TO_PLAYER_ID,
  PLAYER_ID_TO_INDEX,
  INDEX_TO_AI_ARRAY_INDEX,
  AI_ARRAY_INDEX_TO_INDEX,
  UI_POSITION_TO_INDEX,
  INDEX_TO_UI_POSITION,
  UI_POSITION_TO_PLAYER_ID,
  PLAYER_ID_TO_UI_POSITION,
  PLAYER_ID_TO_AI_ARRAY_INDEX,
  AI_ARRAY_INDEX_TO_PLAYER_ID,
  getPlayerIdByIndex,
  getIndexByPlayerId,
  getAIArrayIndexByIndex,
  getIndexByAIArrayIndex,
  getAIArrayIndexByPlayerId,
  getPlayerIdByAIArrayIndex,
  getIndexByUIPosition,
  getUIPositionByIndex,
  getPlayerIdByUIPosition,
  getUIPositionByPlayerId,
  getNextPlayerIndex,
  getPrevPlayerIndex,
  getClockwisePlayerOrder,
  validateIndexMappings,
  type UIPosition,
  type PlayerId,
} from '../../src/core/PlayerIndexMapper';
import type { AIPlayer } from '../../src/core/GameEngineV2';

// ============================================
// 测试数据
// ============================================

const mockAIPlayers: AIPlayer[] = [
  { id: 'ai', name: 'C.C.', character: 'cc', hand: [], stats: { hp: 3, maxHp: 3, geassSuccessCount: 0, geassFailCount: 0 }, isActive: true },
  { id: 'ai2', name: '朱雀', character: 'suzaku', hand: [], stats: { hp: 4, maxHp: 4, geassSuccessCount: 0, geassFailCount: 0 }, isActive: true },
  { id: 'ai3', name: '卡莲', character: 'kallen', hand: [], stats: { hp: 3, maxHp: 3, geassSuccessCount: 0, geassFailCount: 0 }, isActive: true },
];

// ============================================
// 【需求规格1】UI位置映射验证
// ============================================

describe('PlayerIndexMapper - 【需求规格1】UI位置映射验证', () => {
  test('1.1 上方AI角色应该是卡莲/ai3', () => {
    expect(UI_POSITION_TO_PLAYER_ID['top']).toBe('ai3');
    expect(PLAYER_ID_TO_UI_POSITION['ai3']).toBe('top');
    expect(UI_POSITION_TO_INDEX['top']).toBe(1);
    expect(INDEX_TO_UI_POSITION[1]).toBe('top');
  });

  test('1.2 右方AI角色应该是朱雀/ai2', () => {
    expect(UI_POSITION_TO_PLAYER_ID['right']).toBe('ai2');
    expect(PLAYER_ID_TO_UI_POSITION['ai2']).toBe('right');
    expect(UI_POSITION_TO_INDEX['right']).toBe(2);
    expect(INDEX_TO_UI_POSITION[2]).toBe('right');
  });

  test('1.3 下方玩家角色应该是玩家/player', () => {
    expect(UI_POSITION_TO_PLAYER_ID['bottom']).toBe('player');
    expect(PLAYER_ID_TO_UI_POSITION['player']).toBe('bottom');
    expect(UI_POSITION_TO_INDEX['bottom']).toBe(0);
    expect(INDEX_TO_UI_POSITION[0]).toBe('bottom');
  });

  test('1.4 左方AI角色应该是C.C./ai', () => {
    expect(UI_POSITION_TO_PLAYER_ID['left']).toBe('ai');
    expect(PLAYER_ID_TO_UI_POSITION['ai']).toBe('left');
    expect(UI_POSITION_TO_INDEX['left']).toBe(3);
    expect(INDEX_TO_UI_POSITION[3]).toBe('left');
  });
});

// ============================================
// 【需求规格2】顺时针流转顺序验证
// ============================================

describe('PlayerIndexMapper - 【需求规格2】顺时针流转顺序验证', () => {
  test('2.1 卡莲(上方) → 朱雀(右方)', () => {
    expect(getNextPlayerIndex(1)).toBe(2);
  });

  test('2.2 朱雀(右方) → 玩家(下方)', () => {
    expect(getNextPlayerIndex(2)).toBe(0);
  });

  test('2.3 玩家(下方) → C.C.(左方)', () => {
    expect(getNextPlayerIndex(0)).toBe(3);
  });

  test('2.4 C.C.(左方) → 卡莲(上方)', () => {
    expect(getNextPlayerIndex(3)).toBe(1);
  });

  test('2.5 完整顺时针流转一圈', () => {
    const order = [1, 2, 0, 3]; // 卡莲 → 朱雀 → 玩家 → C.C.
    for (let i = 0; i < order.length; i++) {
      const current = order[i];
      const expectedNext = order[(i + 1) % order.length];
      expect(getNextPlayerIndex(current)).toBe(expectedNext);
    }
  });
});

// ============================================
// 【需求规格3】逆时针流转顺序验证
// ============================================

describe('PlayerIndexMapper - 【需求规格3】逆时针流转顺序验证', () => {
  test('3.1 卡莲(上方) ← C.C.(左方)', () => {
    expect(getPrevPlayerIndex(1)).toBe(3);
  });

  test('3.2 朱雀(右方) ← 卡莲(上方)', () => {
    expect(getPrevPlayerIndex(2)).toBe(1);
  });

  test('3.3 玩家(下方) ← 朱雀(右方)', () => {
    expect(getPrevPlayerIndex(0)).toBe(2);
  });

  test('3.4 C.C.(左方) ← 玩家(下方)', () => {
    expect(getPrevPlayerIndex(3)).toBe(0);
  });
});

// ============================================
// 【需求规格4】质疑顺序验证
// ============================================

describe('PlayerIndexMapper - 【需求规格4】质疑顺序验证', () => {
  test('4.1 卡莲出牌后的质疑顺序', () => {
    // 卡莲(1)出牌，质疑顺序应该是：朱雀(2) → 玩家(0) → C.C.(3)
    const order = getClockwisePlayerOrder(1, 1);
    expect(order).toEqual(['ai2', 'player', 'ai']);
  });

  test('4.2 朱雀出牌后的质疑顺序', () => {
    // 朱雀(2)出牌，质疑顺序应该是：玩家(0) → C.C.(3) → 卡莲(1)
    const order = getClockwisePlayerOrder(2, 2);
    expect(order).toEqual(['player', 'ai', 'ai3']);
  });

  test('4.3 玩家出牌后的质疑顺序', () => {
    // 玩家(0)出牌，质疑顺序应该是：C.C.(3) → 卡莲(1) → 朱雀(2)
    const order = getClockwisePlayerOrder(0, 0);
    expect(order).toEqual(['ai', 'ai3', 'ai2']);
  });

  test('4.4 C.C.出牌后的质疑顺序', () => {
    // C.C.(3)出牌，质疑顺序应该是：卡莲(1) → 朱雀(2) → 玩家(0)
    const order = getClockwisePlayerOrder(3, 3);
    expect(order).toEqual(['ai3', 'ai2', 'player']);
  });
});

// ============================================
// 【需求规格5】数组索引映射验证
// ============================================

describe('PlayerIndexMapper - 【需求规格5】数组索引映射验证', () => {
  test('5.1 aiPlayers数组索引映射正确', () => {
    // aiPlayers[0] = C.C. → currentPlayerIndex=3 (左方)
    expect(AI_ARRAY_INDEX_TO_INDEX[0]).toBe(3);
    expect(INDEX_TO_AI_ARRAY_INDEX[3]).toBe(0);

    // aiPlayers[1] = 朱雀 → currentPlayerIndex=2 (右方)
    expect(AI_ARRAY_INDEX_TO_INDEX[1]).toBe(2);
    expect(INDEX_TO_AI_ARRAY_INDEX[2]).toBe(1);

    // aiPlayers[2] = 卡莲 → currentPlayerIndex=1 (上方)
    expect(AI_ARRAY_INDEX_TO_INDEX[2]).toBe(1);
    expect(INDEX_TO_AI_ARRAY_INDEX[1]).toBe(2);
  });

  test('5.2 玩家ID到数组索引映射正确', () => {
    expect(PLAYER_ID_TO_AI_ARRAY_INDEX['ai']).toBe(0);   // C.C.
    expect(PLAYER_ID_TO_AI_ARRAY_INDEX['ai2']).toBe(1);  // 朱雀
    expect(PLAYER_ID_TO_AI_ARRAY_INDEX['ai3']).toBe(2);  // 卡莲
    expect(PLAYER_ID_TO_AI_ARRAY_INDEX['player']).toBeNull();
  });

  test('5.3 数组索引到玩家ID映射正确', () => {
    expect(AI_ARRAY_INDEX_TO_PLAYER_ID[0]).toBe('ai');   // C.C.
    expect(AI_ARRAY_INDEX_TO_PLAYER_ID[1]).toBe('ai2');  // 朱雀
    expect(AI_ARRAY_INDEX_TO_PLAYER_ID[2]).toBe('ai3');  // 卡莲
  });
});

// ============================================
// 【需求规格6】映射一致性验证
// ============================================

describe('PlayerIndexMapper - 【需求规格6】映射一致性验证', () => {
  test('6.1 所有映射验证通过', () => {
    const validation = validateIndexMappings();
    expect(validation.valid).toBe(true);
    expect(validation.errors).toHaveLength(0);
  });

  test('6.2 索引到玩家ID映射一致', () => {
    expect(INDEX_TO_PLAYER_ID[0]).toBe('player');
    expect(INDEX_TO_PLAYER_ID[1]).toBe('ai3');
    expect(INDEX_TO_PLAYER_ID[2]).toBe('ai2');
    expect(INDEX_TO_PLAYER_ID[3]).toBe('ai');
  });

  test('6.3 玩家ID到索引映射一致', () => {
    expect(PLAYER_ID_TO_INDEX['player']).toBe(0);
    expect(PLAYER_ID_TO_INDEX['ai3']).toBe(1);
    expect(PLAYER_ID_TO_INDEX['ai2']).toBe(2);
    expect(PLAYER_ID_TO_INDEX['ai']).toBe(3);
  });
});

// ============================================
// 【需求规格7】映射函数验证
// ============================================

describe('PlayerIndexMapper - 【需求规格7】映射函数验证', () => {
  test('7.1 getPlayerIdByIndex 应该正确返回玩家ID', () => {
    expect(getPlayerIdByIndex(0)).toBe('player');
    expect(getPlayerIdByIndex(1)).toBe('ai3');
    expect(getPlayerIdByIndex(2)).toBe('ai2');
    expect(getPlayerIdByIndex(3)).toBe('ai');
    expect(getPlayerIdByIndex(99)).toBeNull();
  });

  test('7.2 getIndexByPlayerId 应该正确返回索引', () => {
    expect(getIndexByPlayerId('player')).toBe(0);
    expect(getIndexByPlayerId('ai3')).toBe(1);
    expect(getIndexByPlayerId('ai2')).toBe(2);
    expect(getIndexByPlayerId('ai')).toBe(3);
  });

  test('7.3 getAIArrayIndexByIndex 应该正确返回数组索引', () => {
    expect(getAIArrayIndexByIndex(0)).toBeNull(); // 玩家
    expect(getAIArrayIndexByIndex(1)).toBe(2);    // 卡莲
    expect(getAIArrayIndexByIndex(2)).toBe(1);    // 朱雀
    expect(getAIArrayIndexByIndex(3)).toBe(0);    // C.C.
  });

  test('7.4 getIndexByAIArrayIndex 应该正确返回索引', () => {
    expect(getIndexByAIArrayIndex(0)).toBe(3); // C.C.
    expect(getIndexByAIArrayIndex(1)).toBe(2); // 朱雀
    expect(getIndexByAIArrayIndex(2)).toBe(1); // 卡莲
  });

  test('7.5 getAIArrayIndexByPlayerId 应该正确返回数组索引', () => {
    expect(getAIArrayIndexByPlayerId('player')).toBeNull();
    expect(getAIArrayIndexByPlayerId('ai')).toBe(0);   // C.C.
    expect(getAIArrayIndexByPlayerId('ai2')).toBe(1);  // 朱雀
    expect(getAIArrayIndexByPlayerId('ai3')).toBe(2);  // 卡莲
  });

  test('7.6 getPlayerIdByAIArrayIndex 应该正确返回玩家ID', () => {
    expect(getPlayerIdByAIArrayIndex(0)).toBe('ai');   // C.C.
    expect(getPlayerIdByAIArrayIndex(1)).toBe('ai2');  // 朱雀
    expect(getPlayerIdByAIArrayIndex(2)).toBe('ai3');  // 卡莲
  });
});

// ============================================
// 【需求规格8】边界条件测试
// ============================================

describe('PlayerIndexMapper - 【需求规格8】边界条件测试', () => {
  test('8.1 无效索引应该返回null', () => {
    expect(getPlayerIdByIndex(-1)).toBeNull();
    expect(getPlayerIdByIndex(4)).toBeNull();
    expect(getPlayerIdByIndex(999)).toBeNull();
  });

  test('8.2 无效数组索引应该返回null', () => {
    expect(getIndexByAIArrayIndex(-1)).toBeNull();
    expect(getIndexByAIArrayIndex(3)).toBeNull();
    expect(getIndexByAIArrayIndex(999)).toBeNull();
  });

  test('8.3 映射函数返回正确结果', () => {
    expect(getIndexByUIPosition('top')).toBe(1);
    expect(getIndexByUIPosition('right')).toBe(2);
    expect(getIndexByUIPosition('bottom')).toBe(0);
    expect(getIndexByUIPosition('left')).toBe(3);

    expect(getUIPositionByIndex(1)).toBe('top');
    expect(getUIPositionByIndex(2)).toBe('right');
    expect(getUIPositionByIndex(0)).toBe('bottom');
    expect(getUIPositionByIndex(3)).toBe('left');

    expect(getPlayerIdByUIPosition('top')).toBe('ai3');
    expect(getPlayerIdByUIPosition('right')).toBe('ai2');
    expect(getPlayerIdByUIPosition('bottom')).toBe('player');
    expect(getPlayerIdByUIPosition('left')).toBe('ai');
  });

  test('8.4 顺时针顺序应该正确处理循环', () => {
    // 从C.C.(3)开始，下一个应该是卡莲(1)
    expect(getNextPlayerIndex(3)).toBe(1);
    // 从卡莲(1)开始，下一个应该是朱雀(2)
    expect(getNextPlayerIndex(1)).toBe(2);
  });
});

// ============================================
// 【需求规格9】关键场景：回合顺序一致性
// ============================================

describe('PlayerIndexMapper - 【需求规格9】关键场景：回合顺序一致性', () => {
  test('9.1 卡莲先手时，currentPlayerIndex=1，应该正确映射到aiPlayers[2]', () => {
    const aiArrayIndex = getAIArrayIndexByIndex(1);
    expect(aiArrayIndex).toBe(2);
    expect(mockAIPlayers[aiArrayIndex!].name).toBe('卡莲');
    expect(mockAIPlayers[aiArrayIndex!].id).toBe('ai3');
  });

  test('9.2 朱雀先手时，currentPlayerIndex=2，应该正确映射到aiPlayers[1]', () => {
    const aiArrayIndex = getAIArrayIndexByIndex(2);
    expect(aiArrayIndex).toBe(1);
    expect(mockAIPlayers[aiArrayIndex!].name).toBe('朱雀');
    expect(mockAIPlayers[aiArrayIndex!].id).toBe('ai2');
  });

  test('9.3 C.C.先手时，currentPlayerIndex=3，应该正确映射到aiPlayers[0]', () => {
    const aiArrayIndex = getAIArrayIndexByIndex(3);
    expect(aiArrayIndex).toBe(0);
    expect(mockAIPlayers[aiArrayIndex!].name).toBe('C.C.');
    expect(mockAIPlayers[aiArrayIndex!].id).toBe('ai');
  });

  test('9.4 玩家先手时，currentPlayerIndex=0，应该返回null（玩家不在aiPlayers中）', () => {
    const aiArrayIndex = getAIArrayIndexByIndex(0);
    expect(aiArrayIndex).toBeNull();
  });
});
