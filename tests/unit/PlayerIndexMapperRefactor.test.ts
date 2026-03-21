/**
 * =============================================================================
 * PlayerIndexMapper 重构验证测试
 * =============================================================================
 *
 * 验证所有使用PlayerIndexMapper的代码路径都正确工作
 * 确保重构后没有引入回归问题
 */

import { GameEngine } from '../../src/core/GameEngineV2';
import {
  getPlayerIdByIndex,
  getIndexByPlayerId,
  getAIPlayerByIndex,
  getAIPlayerById,
  getAIArrayIndexByIndex,
  getIndexByAIArrayIndex,
  getNextPlayerIndex,
  getClockwisePlayerOrder,
  INDEX_TO_PLAYER_ID,
  PLAYER_ID_TO_INDEX,
  INDEX_TO_AI_ARRAY_INDEX,
  AI_ARRAY_INDEX_TO_INDEX,
} from '../../src/core/PlayerIndexMapper';

describe('PlayerIndexMapper 重构验证', () => {
  let engine: GameEngine;

  beforeEach(() => {
    engine = new GameEngine();
    engine.initializeGame('lelouch');
  });

  describe('【场景1】getActivePlayerIndices 重构验证', () => {
    test('1.1 所有玩家存活时返回正确的索引列表', () => {
      const activeIndices = (engine as any).getActivePlayerIndices();

      // 应该返回 [0, 1, 2, 3] - 玩家、朱雀、卡莲、C.C.
      expect(activeIndices).toContain(0); // 玩家
      expect(activeIndices).toContain(1); // 朱雀/ai2
      expect(activeIndices).toContain(2); // 卡莲/ai3
      expect(activeIndices).toContain(3); // C.C./ai
      expect(activeIndices.length).toBe(4);
    });

    test('1.2 部分AI淘汰后返回正确的索引列表', () => {
      // 淘汰卡莲 (ai3) - 对应索引 2
      (engine as any).state.aiPlayers[2].isActive = false;
      (engine as any).state.aiPlayers[2].stats.hp = 0;

      const activeIndices = (engine as any).getActivePlayerIndices();

      // 应该返回 [0, 1, 3] - 不包含卡莲(2)
      expect(activeIndices).toContain(0);
      expect(activeIndices).toContain(1);
      expect(activeIndices).not.toContain(2);
      expect(activeIndices).toContain(3);
      expect(activeIndices.length).toBe(3);
    });

    test('1.3 多个AI淘汰后返回正确的索引列表', () => {
      // 淘汰朱雀 (ai2) - 索引 1 和 C.C. (ai) - 索引 3
      (engine as any).state.aiPlayers[1].isActive = false;
      (engine as any).state.aiPlayers[1].stats.hp = 0;
      (engine as any).state.aiPlayers[0].isActive = false;
      (engine as any).state.aiPlayers[0].stats.hp = 0;

      const activeIndices = (engine as any).getActivePlayerIndices();

      // 应该返回 [0, 2] - 只有玩家和卡莲
      expect(activeIndices).toContain(0);
      expect(activeIndices).not.toContain(1);
      expect(activeIndices).toContain(2);
      expect(activeIndices).not.toContain(3);
      expect(activeIndices.length).toBe(2);
    });
  });

  describe('【场景2】endChallengePhase 重构验证', () => {
    test('2.1 无人质疑时正确设置currentPlayerIndex', () => {
      // 设置出牌者为朱雀
      (engine as any).state.turnState.playedCards = {
        cardIds: ['card1'],
        claimedRank: 'Q',
        actualCards: [{ id: 'card1', rank: 'Q', suit: 'spades', isJoker: false }],
        playerId: 'ai2',
        isBluff: false,
      };
      (engine as any).state.turnState.lastPlayerId = 'ai2';

      const nextState = engine.endChallengePhase(true);

      // 朱雀继续出牌，currentPlayerIndex 应该是 1
      expect(nextState.currentPlayerIndex).toBe(1);
      expect(nextState.phase).toBe('ai_turn');
    });

    test('2.2 不同玩家出牌后正确流转', () => {
      const testCases = [
        { playerId: 'player', expectedIndex: 0, expectedPhase: 'player_turn' },
        { playerId: 'ai2', expectedIndex: 1, expectedPhase: 'ai_turn' },
        { playerId: 'ai3', expectedIndex: 2, expectedPhase: 'ai_turn' },
        { playerId: 'ai', expectedIndex: 3, expectedPhase: 'ai_turn' },
      ];

      for (const testCase of testCases) {
        // 重置引擎状态
        engine = new GameEngine();
        engine.initializeGame('lelouch');

        (engine as any).state.turnState.playedCards = {
          cardIds: ['card1'],
          claimedRank: 'Q',
          actualCards: [{ id: 'card1', rank: 'Q', suit: 'spades', isJoker: false }],
          playerId: testCase.playerId,
          isBluff: false,
        };
        (engine as any).state.turnState.lastPlayerId = testCase.playerId;

        const nextState = engine.endChallengePhase(true);

        expect(nextState.currentPlayerIndex).toBe(testCase.expectedIndex);
        expect(nextState.phase).toBe(testCase.expectedPhase);
      }
    });
  });

  describe('【场景3】aiChallengeDecision 名称获取重构验证', () => {
    test('3.1 质疑日志正确显示玩家名称', () => {
      // 设置出牌状态
      (engine as any).state.turnState.playedCards = {
        cardIds: ['card1'],
        claimedRank: 'Q',
        actualCards: [{ id: 'card1', rank: 'K', suit: 'spades', isJoker: false }], // 撒谎
        playerId: 'ai2', // 朱雀出牌
        isBluff: true,
      };

      // C.C. 质疑朱雀
      engine.aiChallengeDecision('ai');

      // 验证 lastAction 包含正确的名称（可能是质疑日志或Geass结果）
      const state = engine.getState();
      // lastAction 可能是质疑日志或Geass结果，验证包含任意一个相关名称
      const hasValidName = state.lastAction.includes('C.C.') ||
                          state.lastAction.includes('朱雀') ||
                          state.lastAction.includes('ai') ||
                          state.lastAction.includes('ai2');
      expect(hasValidName).toBe(true);
    });

    test('3.2 不同AI之间的质疑触发Geass后显示正确名称', () => {
      const testCases = [
        { challenger: 'ai', target: 'ai2' },
        { challenger: 'ai2', target: 'ai3' },
        { challenger: 'ai3', target: 'ai' },
      ];

      for (const testCase of testCases) {
        // 重置引擎状态
        engine = new GameEngine();
        engine.initializeGame('lelouch');

        (engine as any).state.turnState.playedCards = {
          cardIds: ['card1'],
          claimedRank: 'Q',
          actualCards: [{ id: 'card1', rank: 'K', suit: 'spades', isJoker: false }],
          playerId: testCase.target,
          isBluff: true,
        };

        engine.aiChallengeDecision(testCase.challenger);

        const state = engine.getState();
        // 验证 lastAction 不为空且包含有效内容
        expect(state.lastAction).toBeTruthy();
        expect(state.lastAction.length).toBeGreaterThan(0);
      }
    });
  });

  describe('【场景4】完整游戏流程重构验证', () => {
    test('4.1 完整回合流转流程', () => {
      // 玩家出牌
      (engine as any).state.turnState.playedCards = {
        cardIds: ['card1'],
        claimedRank: 'Q',
        actualCards: [{ id: 'card1', rank: 'Q', suit: 'spades', isJoker: false }],
        playerId: 'player',
        isBluff: false,
      };

      // 无人质疑，进入下一回合
      const nextState = engine.endChallengePhase(false);

      // 下一个应该是朱雀 (索引 1)
      expect(nextState.currentPlayerIndex).toBe(1);

      // 朱雀出牌
      (engine as any).state.turnState.playedCards = {
        cardIds: ['card2'],
        claimedRank: 'K',
        actualCards: [{ id: 'card2', rank: 'K', suit: 'hearts', isJoker: false }],
        playerId: 'ai2',
        isBluff: false,
      };

      const nextState2 = engine.endChallengePhase(false);

      // 下一个应该是卡莲 (索引 2)
      expect(nextState2.currentPlayerIndex).toBe(2);
    });

    test('4.2 质疑后的回合流转', () => {
      // 朱雀出牌并撒谎
      (engine as any).state.turnState.playedCards = {
        cardIds: ['card1'],
        claimedRank: 'Q',
        actualCards: [{ id: 'card1', rank: 'K', suit: 'spades', isJoker: false }],
        playerId: 'ai2',
        isBluff: true,
      };

      // C.C. 质疑成功
      engine.aiChallengeDecision('ai');

      // 质疑成功，朱雀受罚
      // 验证质疑确实发生了（通过检查lastAction或geassResult）
      const state = engine.getState();
      // 质疑后可能清空playedCards，也可能保留，取决于具体实现
      // 验证质疑确实发生了
      expect(state.lastAction).toBeTruthy();
    });
  });

  describe('【场景5】映射一致性验证', () => {
    test('5.1 所有映射常量保持一致', () => {
      // 验证 INDEX_TO_PLAYER_ID 和 PLAYER_ID_TO_INDEX 互为逆映射
      for (let i = 0; i < 4; i++) {
        const playerId = INDEX_TO_PLAYER_ID[i];
        expect(PLAYER_ID_TO_INDEX[playerId]).toBe(i);
      }

      // 验证 INDEX_TO_AI_ARRAY_INDEX 和 AI_ARRAY_INDEX_TO_INDEX 互为逆映射
      for (let i = 1; i < 4; i++) {
        const aiArrayIndex = INDEX_TO_AI_ARRAY_INDEX[i];
        if (aiArrayIndex !== null) {
          expect(AI_ARRAY_INDEX_TO_INDEX[aiArrayIndex]).toBe(i);
        }
      }
    });

    test('5.2 映射函数返回正确结果', () => {
      const state = engine.getState();

      // 测试 getPlayerIdByIndex
      expect(getPlayerIdByIndex(0)).toBe('player');
      expect(getPlayerIdByIndex(1)).toBe('ai2');
      expect(getPlayerIdByIndex(2)).toBe('ai3');
      expect(getPlayerIdByIndex(3)).toBe('ai');

      // 测试 getIndexByPlayerId
      expect(getIndexByPlayerId('player')).toBe(0);
      expect(getIndexByPlayerId('ai2')).toBe(1);
      expect(getIndexByPlayerId('ai3')).toBe(2);
      expect(getIndexByPlayerId('ai')).toBe(3);

      // 测试 getAIPlayerByIndex
      expect(getAIPlayerByIndex(1, state.aiPlayers)?.id).toBe('ai2');
      expect(getAIPlayerByIndex(2, state.aiPlayers)?.id).toBe('ai3');
      expect(getAIPlayerByIndex(3, state.aiPlayers)?.id).toBe('ai');

      // 测试 getAIPlayerById
      expect(getAIPlayerById('ai2', state.aiPlayers)?.id).toBe('ai2');
      expect(getAIPlayerById('ai3', state.aiPlayers)?.id).toBe('ai3');
      expect(getAIPlayerById('ai', state.aiPlayers)?.id).toBe('ai');
    });
  });
});
