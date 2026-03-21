/**
 * 测试：tableCards 双重添加修复
 * 验证出牌时 tableCards 只增加一次，endChallengePhase 不再重复累积
 */

import { GameEngine } from '../../src/core/GameEngineV2';

/**
 * 创建一个保证特定阶段的引擎（通过多次尝试）
 */
const createEngineWithPhase = (targetPhase: 'player_turn' | 'ai_turn'): GameEngine | null => {
  // 由于起始玩家随机，最多尝试20次
  for (let i = 0; i < 20; i++) {
    const eng = new GameEngine();
    const state = eng.initializeGame('lelouch', ['cc', 'suzaku', 'kallen']);
    if (state.phase === targetPhase) return eng;
  }
  return null;
};

describe('GameEngine - tableCards 双重添加修复', () => {
  describe('玩家出牌场景', () => {
    it('玩家出1张牌后 tableCards 增加1，endChallengePhase(true) 不再额外增加', () => {
      const engine = createEngineWithPhase('player_turn');
      if (!engine) {
        // 如果无法获得玩家先手状态，跳过
        console.warn('无法获得玩家先手状态，跳过此测试');
        return;
      }

      const initialState = engine.getState();
      const before = initialState.turnState.tableCards.length;

      // 选择并出一张牌
      const cardId = initialState.playerHand[0].id;
      engine.toggleCardSelection(cardId);
      engine.playerPlayCards();

      const afterPlay = engine.getState().turnState.tableCards.length;
      expect(afterPlay).toBe(before + 1);

      // 无人质疑，原出牌者继续（continueWithSamePlayer = true）
      engine.endChallengePhase(true);
      const afterEnd = engine.getState().turnState.tableCards.length;

      // tableCards 不应再次增加
      expect(afterEnd).toBe(afterPlay);
    });

    it('玩家出牌后有质疑发生，tableCards 计数正确', () => {
      const engine = createEngineWithPhase('player_turn');
      if (!engine) {
        console.warn('无法获得玩家先手状态，跳过此测试');
        return;
      }

      const initialState = engine.getState();
      const before = initialState.turnState.tableCards.length;

      // 出一张牌
      const cardId = initialState.playerHand[0].id;
      engine.toggleCardSelection(cardId);
      engine.playerPlayCards();

      const afterPlay = engine.getState().turnState.tableCards.length;
      expect(afterPlay).toBe(before + 1);

      // 执行质疑（continueWithSamePlayer = false，正常进入下一回合）
      engine.endChallengePhase(false);
      const afterEnd = engine.getState().turnState.tableCards.length;

      // tableCards 不应再次增加（修复后）
      expect(afterEnd).toBe(afterPlay);
    });
  });

  describe('AI出牌场景', () => {
    it('AI出牌后 tableCards 增量等于实际出牌张数', () => {
      const engine = createEngineWithPhase('ai_turn');
      if (!engine) {
        console.warn('无法获得AI先手状态，跳过此测试');
        return;
      }

      const state = engine.getState();
      const before = state.turnState.tableCards.length;

      // 确定当前AI
      const aiIds = ['ai', 'ai2', 'ai3'] as const;
      const currentAI = aiIds.find(id => {
        const indexMap: Record<string, number> = { ai: 3, ai2: 2, ai3: 1 };
        return indexMap[id] === state.currentPlayerIndex;
      });

      if (!currentAI) return;

      engine.aiPlayCards(currentAI);
      const afterPlay = engine.getState().turnState.tableCards.length;

      const diff = afterPlay - before;
      // AI出1-2张牌，增量应在1-2之间
      expect(diff).toBeGreaterThan(0);
      expect(diff).toBeLessThanOrEqual(2);

      // 记录出牌张数
      const playedCardCount = diff;

      // endChallengePhase(true) 不应再增加
      engine.endChallengePhase(true);
      const afterEnd = engine.getState().turnState.tableCards.length;
      expect(afterEnd).toBe(before + playedCardCount);
    });
  });

  describe('多轮累积验证', () => {
    it('经过多轮游戏，tableCards 在每轮 resetRound 后清零', () => {
      const engine = new GameEngine();
      engine.initializeGame('lelouch', ['cc', 'suzaku', 'kallen']);

      const state = engine.getState();
      if (state.phase !== 'player_turn') return;

      // 出牌
      const cardId = state.playerHand[0].id;
      engine.toggleCardSelection(cardId);
      engine.playerPlayCards();
      engine.endChallengePhase(true);

      // 重置牌局后 tableCards 应清零
      engine.resetRound();
      const afterReset = engine.getState().turnState.tableCards.length;
      expect(afterReset).toBe(0);
    });
  });
});
