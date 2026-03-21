/**
 * =============================================================================
 * 玩家索引映射系统 - 统一处理currentPlayerIndex与aiPlayers数组的映射关系
 * =============================================================================
 *
 * 需求规格定义的顺时针顺序：
 * 上方AI角色（卡莲）→ 右方AI角色（朱雀）→ 下方玩家角色 → 左方AI角色（C.C.）→ 上方AI角色
 *
 * UI布局对应关系：
 * - 上方 = 卡莲/ai3 (currentPlayerIndex = 1)
 * - 右方 = 朱雀/ai2 (currentPlayerIndex = 2)
 * - 下方 = 玩家 (currentPlayerIndex = 0)
 * - 左方 = C.C./ai (currentPlayerIndex = 3)
 *
 * 映射规则（统一标准）：
 * ============================================================================
 * currentPlayerIndex | 玩家ID   | 角色    | UI位置 | aiPlayers数组索引
 * -------------------|----------|---------|--------|------------------
 * 0                  | 'player' | 玩家    | 下方   | - (玩家单独存储)
 * 1                  | 'ai3'    | 卡莲    | 上方   | 2
 * 2                  | 'ai2'    | 朱雀    | 右方   | 1
 * 3                  | 'ai'     | C.C.    | 左方   | 0
 * ============================================================================
 *
 * 顺时针流转顺序: 卡莲(1) → 朱雀(2) → 玩家(0) → C.C.(3) → 卡莲(1)
 * aiPlayers数组顺序: [ai(C.C.)索引0, ai2(朱雀)索引1, ai3(卡莲)索引2]
 *
 * @module core/PlayerIndexMapper
 * @version 2.0.0 - 匹配需求规格的UI布局
 */

import type { AIPlayer } from './GameEngineV2';

// ============================================
// 常量定义
// ============================================

/** 玩家ID类型 */
export type PlayerId = 'player' | 'ai' | 'ai2' | 'ai3';

/** UI位置类型 */
export type UIPosition = 'top' | 'right' | 'bottom' | 'left';

/** 当前玩家索引到玩家ID的映射
 * 顺时针顺序: 卡莲(1/上方) → 朱雀(2/右方) → 玩家(0/下方) → C.C.(3/左方) → 卡莲(1)
 * UI位置: 卡莲=上方(index 1), 朱雀=右方(index 2), 玩家=下方(index 0), C.C.=左方(index 3)
 */
export const INDEX_TO_PLAYER_ID: Record<number, PlayerId> = {
  0: 'player',  // 下方 - 玩家
  1: 'ai3',     // 上方 - 卡莲
  2: 'ai2',     // 右方 - 朱雀
  3: 'ai',      // 左方 - C.C.
};

/** 玩家ID到当前玩家索引的映射 */
export const PLAYER_ID_TO_INDEX: Record<PlayerId, number> = {
  player: 0,  // 下方
  ai3: 1,     // 上方 - 卡莲
  ai2: 2,     // 右方 - 朱雀
  ai: 3,      // 左方 - C.C.
};

/** UI位置到currentPlayerIndex的映射 */
export const UI_POSITION_TO_INDEX: Record<UIPosition, number> = {
  bottom: 0,  // 玩家
  right: 2,   // 朱雀
  top: 1,     // 卡莲
  left: 3,    // C.C.
};

/** currentPlayerIndex到UI位置的映射 */
export const INDEX_TO_UI_POSITION: Record<number, UIPosition> = {
  0: 'bottom',
  1: 'top',
  2: 'right',
  3: 'left',
};

/**
 * currentPlayerIndex 到 aiPlayers数组索引的映射
 * aiPlayers数组顺序: [C.C.(索引0), 朱雀(索引1), 卡莲(索引2)]
 */
export const INDEX_TO_AI_ARRAY_INDEX: Record<number, number | null> = {
  0: null,  // 玩家，不在aiPlayers数组中
  1: 2,     // ai3/卡莲(上方) -> aiPlayers[2]
  2: 1,     // ai2/朱雀(右方) -> aiPlayers[1]
  3: 0,     // ai/C.C.(左方) -> aiPlayers[0]
};

/**
 * aiPlayers数组索引到currentPlayerIndex的映射
 */
export const AI_ARRAY_INDEX_TO_INDEX: Record<number, number> = {
  0: 3,     // aiPlayers[0]/C.C.(左方) -> currentPlayerIndex=3
  1: 2,     // aiPlayers[1]/朱雀(右方) -> currentPlayerIndex=2
  2: 1,     // aiPlayers[2]/卡莲(上方) -> currentPlayerIndex=1
};

/** 玩家ID到aiPlayers数组索引的映射 */
export const PLAYER_ID_TO_AI_ARRAY_INDEX: Record<PlayerId, number | null> = {
  player: null,  // 玩家不在aiPlayers数组中
  ai: 0,         // C.C.
  ai2: 1,        // 朱雀
  ai3: 2,        // 卡莲
};

/** aiPlayers数组索引到玩家ID的映射 */
export const AI_ARRAY_INDEX_TO_PLAYER_ID: Record<number, PlayerId> = {
  0: 'ai',   // C.C.
  1: 'ai2',  // 朱雀
  2: 'ai3',  // 卡莲
};

/** UI位置到玩家ID的映射 */
export const UI_POSITION_TO_PLAYER_ID: Record<UIPosition, PlayerId> = {
  bottom: 'player',
  top: 'ai3',
  right: 'ai2',
  left: 'ai',
};

/** 玩家ID到UI位置的映射 */
export const PLAYER_ID_TO_UI_POSITION: Record<PlayerId, UIPosition> = {
  player: 'bottom',
  ai3: 'top',
  ai2: 'right',
  ai: 'left',
};

// ============================================
// 映射函数
// ============================================

/**
 * 根据currentPlayerIndex获取玩家ID
 * @param index currentPlayerIndex
 * @returns 玩家ID
 */
export function getPlayerIdByIndex(index: number): PlayerId | null {
  return INDEX_TO_PLAYER_ID[index] || null;
}

/**
 * 根据玩家ID获取currentPlayerIndex
 * @param playerId 玩家ID
 * @returns currentPlayerIndex
 */
export function getIndexByPlayerId(playerId: PlayerId): number | null {
  return PLAYER_ID_TO_INDEX[playerId] ?? null;
}

/**
 * 根据UI位置获取currentPlayerIndex
 * @param position UI位置
 * @returns currentPlayerIndex
 */
export function getIndexByUIPosition(position: UIPosition): number {
  return UI_POSITION_TO_INDEX[position];
}

/**
 * 根据currentPlayerIndex获取UI位置
 * @param index currentPlayerIndex
 * @returns UI位置
 */
export function getUIPositionByIndex(index: number): UIPosition | null {
  return INDEX_TO_UI_POSITION[index] || null;
}

/**
 * 根据UI位置获取玩家ID
 * @param position UI位置
 * @returns 玩家ID
 */
export function getPlayerIdByUIPosition(position: UIPosition): PlayerId {
  return UI_POSITION_TO_PLAYER_ID[position];
}

/**
 * 根据玩家ID获取UI位置
 * @param playerId 玩家ID
 * @returns UI位置
 */
export function getUIPositionByPlayerId(playerId: PlayerId): UIPosition {
  return PLAYER_ID_TO_UI_POSITION[playerId];
}

/**
 * 根据currentPlayerIndex获取aiPlayers数组索引
 * @param index currentPlayerIndex
 * @returns aiPlayers数组索引，如果是玩家则返回null
 */
export function getAIArrayIndexByIndex(index: number): number | null {
  return INDEX_TO_AI_ARRAY_INDEX[index] ?? null;
}

/**
 * 根据aiPlayers数组索引获取currentPlayerIndex
 * @param aiArrayIndex aiPlayers数组索引
 * @returns currentPlayerIndex
 */
export function getIndexByAIArrayIndex(aiArrayIndex: number): number | null {
  return AI_ARRAY_INDEX_TO_INDEX[aiArrayIndex] ?? null;
}

/**
 * 根据玩家ID获取aiPlayers数组索引
 * @param playerId 玩家ID
 * @returns aiPlayers数组索引，如果是玩家则返回null
 */
export function getAIArrayIndexByPlayerId(playerId: PlayerId): number | null {
  return PLAYER_ID_TO_AI_ARRAY_INDEX[playerId] ?? null;
}

/**
 * 根据aiPlayers数组索引获取玩家ID
 * @param aiArrayIndex aiPlayers数组索引
 * @returns 玩家ID
 */
export function getPlayerIdByAIArrayIndex(aiArrayIndex: number): PlayerId | null {
  return AI_ARRAY_INDEX_TO_PLAYER_ID[aiArrayIndex] || null;
}

/**
 * 根据currentPlayerIndex获取AI玩家对象
 * @param index currentPlayerIndex
 * @param aiPlayers AI玩家数组
 * @returns AI玩家对象，如果是玩家回合则返回null
 */
export function getAIPlayerByIndex(index: number, aiPlayers: AIPlayer[]): AIPlayer | null {
  const aiArrayIndex = getAIArrayIndexByIndex(index);
  if (aiArrayIndex === null) return null;
  return aiPlayers[aiArrayIndex] || null;
}

/**
 * 根据玩家ID获取AI玩家对象
 * @param playerId 玩家ID
 * @param aiPlayers AI玩家数组
 * @returns AI玩家对象，如果是玩家则返回null
 */
export function getAIPlayerById(playerId: PlayerId, aiPlayers: AIPlayer[]): AIPlayer | null {
  const aiArrayIndex = getAIArrayIndexByPlayerId(playerId);
  if (aiArrayIndex === null) return null;
  return aiPlayers[aiArrayIndex] || null;
}

/**
 * 根据UI位置获取AI玩家对象
 * @param position UI位置
 * @param aiPlayers AI玩家数组
 * @returns AI玩家对象，如果是底部(玩家)则返回null
 */
export function getAIPlayerByUIPosition(position: UIPosition, aiPlayers: AIPlayer[]): AIPlayer | null {
  if (position === 'bottom') return null;
  const playerId = getPlayerIdByUIPosition(position);
  return getAIPlayerById(playerId, aiPlayers);
}

// ============================================
// 回合流转辅助函数
// ============================================

/**
 * 计算下一个玩家的索引（顺时针方向）
 * 顺时针顺序: 卡莲(1/上方) → 朱雀(2/右方) → 玩家(0/下方) → C.C.(3/左方) → 卡莲(1)
 * @param currentIndex 当前玩家索引
 * @returns 下一个玩家索引
 */
export function getNextPlayerIndex(currentIndex: number): number {
  // 卡莲(1/上方) → 朱雀(2/右方)
  // 朱雀(2/右方) → 玩家(0/下方)
  // 玩家(0/下方) → C.C.(3/左方)
  // C.C.(3/左方) → 卡莲(1/上方)
  const nextMap: Record<number, number> = {
    0: 3,  // 玩家(下方) → C.C.(左方)
    1: 2,  // 卡莲(上方) → 朱雀(右方)
    2: 0,  // 朱雀(右方) → 玩家(下方)
    3: 1,  // C.C.(左方) → 卡莲(上方)
  };
  return nextMap[currentIndex] ?? 0;
}

/**
 * 计算上一个玩家的索引（逆时针方向）
 * 逆时针顺序: 卡莲(1) ← 朱雀(2) ← 玩家(0) ← C.C.(3) ← 卡莲(1)
 * @param currentIndex 当前玩家索引
 * @returns 上一个玩家索引
 */
export function getPrevPlayerIndex(currentIndex: number): number {
  const prevMap: Record<number, number> = {
    0: 2,  // 玩家(下方) ← 朱雀(右方)
    1: 3,  // 卡莲(上方) ← C.C.(左方)
    2: 1,  // 朱雀(右方) ← 卡莲(上方)
    3: 0,  // C.C.(左方) ← 玩家(下方)
  };
  return prevMap[currentIndex] ?? 0;
}

/**
 * 获取从指定索引开始的顺时针顺序的玩家ID列表
 * @param startIndex 起始索引
 * @param excludeIndex 要排除的索引（通常是出牌者）
 * @returns 玩家ID列表
 */
export function getClockwisePlayerOrder(startIndex: number, excludeIndex?: number): PlayerId[] {
  const order: PlayerId[] = [];
  let current = startIndex;

  for (let i = 0; i < 3; i++) {
    current = getNextPlayerIndex(current);
    if (current !== excludeIndex) {
      const playerId = getPlayerIdByIndex(current);
      if (playerId) {
        order.push(playerId);
      }
    }
  }

  return order;
}

/**
 * 获取顺时针顺序的下一个活跃玩家索引
 * @param currentIndex 当前玩家索引
 * @param aiPlayers AI玩家数组
 * @param playerHP 玩家生命值
 * @returns 下一个活跃玩家的索引，如果没有则返回-1
 */
export function getNextActivePlayerIndex(
  currentIndex: number,
  aiPlayers: AIPlayer[],
  playerHP: number
): number {
  let nextIndex = getNextPlayerIndex(currentIndex);
  let attempts = 0;

  while (attempts < 4) {
    if (nextIndex === 0) {
      // 检查玩家是否存活
      if (playerHP > 0) return nextIndex;
    } else {
      // 检查AI是否存活
      const ai = getAIPlayerByIndex(nextIndex, aiPlayers);
      if (ai && ai.isActive && ai.stats.hp > 0) return nextIndex;
    }
    nextIndex = getNextPlayerIndex(nextIndex);
    attempts++;
  }

  return -1; // 没有活跃玩家
}

// ============================================
// 验证函数
// ============================================

/**
 * 验证索引映射的一致性
 * @returns 验证结果
 */
export function validateIndexMappings(): { valid: boolean; errors: string[] } {
  const errors: string[] = [];

  // 验证 INDEX_TO_PLAYER_ID 和 PLAYER_ID_TO_INDEX 互为逆映射
  for (let i = 0; i < 4; i++) {
    const playerId = INDEX_TO_PLAYER_ID[i];
    if (playerId && PLAYER_ID_TO_INDEX[playerId] !== i) {
      errors.push(`索引${i}和玩家ID${playerId}的映射不一致`);
    }
  }

  // 验证 INDEX_TO_AI_ARRAY_INDEX 和 AI_ARRAY_INDEX_TO_INDEX 互为逆映射（排除玩家）
  for (let i = 1; i < 4; i++) {
    const aiArrayIndex = INDEX_TO_AI_ARRAY_INDEX[i];
    if (aiArrayIndex !== null && AI_ARRAY_INDEX_TO_INDEX[aiArrayIndex] !== i) {
      errors.push(`currentPlayerIndex=${i}和aiArrayIndex=${aiArrayIndex}的映射不一致`);
    }
  }

  // 验证 PLAYER_ID_TO_AI_ARRAY_INDEX 和 AI_ARRAY_INDEX_TO_PLAYER_ID 互为逆映射
  const aiPlayerIds: PlayerId[] = ['ai', 'ai2', 'ai3'];
  for (const playerId of aiPlayerIds) {
    const aiArrayIndex = PLAYER_ID_TO_AI_ARRAY_INDEX[playerId];
    if (aiArrayIndex !== null && AI_ARRAY_INDEX_TO_PLAYER_ID[aiArrayIndex] !== playerId) {
      errors.push(`玩家ID${playerId}和aiArrayIndex=${aiArrayIndex}的映射不一致`);
    }
  }

  // 验证 UI位置映射
  const positions: UIPosition[] = ['top', 'right', 'bottom', 'left'];
  for (const position of positions) {
    const index = UI_POSITION_TO_INDEX[position];
    const playerId = UI_POSITION_TO_PLAYER_ID[position];
    
    // 验证位置到索引再到位置的映射
    if (INDEX_TO_UI_POSITION[index] !== position) {
      errors.push(`UI位置${position}的索引映射不一致`);
    }
    
    // 验证位置到玩家ID再到位置的映射
    if (PLAYER_ID_TO_UI_POSITION[playerId] !== position) {
      errors.push(`UI位置${position}的玩家ID映射不一致`);
    }
    
    // 验证索引和玩家ID的一致性
    if (INDEX_TO_PLAYER_ID[index] !== playerId) {
      errors.push(`UI位置${position}的索引和玩家ID映射不一致`);
    }
  }

  // 验证顺时针流转顺序
  // 卡莲(1/上方) → 朱雀(2/右方) → 玩家(0/下方) → C.C.(3/左方) → 卡莲(1)
  const expectedClockwise = [1, 2, 0, 3];
  for (let i = 0; i < 4; i++) {
    const nextIndex = getNextPlayerIndex(expectedClockwise[i]);
    const expectedNext = expectedClockwise[(i + 1) % 4];
    if (nextIndex !== expectedNext) {
      errors.push(`顺时针流转顺序错误: ${expectedClockwise[i]}的下一个应该是${expectedNext}，但得到${nextIndex}`);
    }
  }

  return { valid: errors.length === 0, errors };
}

// 模块加载时自动验证
const validation = validateIndexMappings();
if (!validation.valid) {
  // 验证失败是严重的配置错误，始终输出
  console.error('[PlayerIndexMapper] 索引映射验证失败:', validation.errors);
} else if (process.env.NODE_ENV !== 'production') {
  console.log('[PlayerIndexMapper] 索引映射验证通过');
}
