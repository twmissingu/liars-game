/**
 * =============================================================================
 * Code Geass: Liar's Game - 回合流转顺序测试
 * =============================================================================
 *
 * 验证无人质疑后的回合流转顺序是否符合顺时针规则
 *
 * 需求规格定义的顺时针顺序：
 * 上方AI角色（卡莲）→ 右方AI角色（朱雀）→ 下方玩家角色 → 左方AI角色（C.C.）→ 上方AI角色
 *
 * UI布局与索引映射：
 * - 上方 = 卡莲/ai3 (currentPlayerIndex = 1) -> aiPlayers[2]
 * - 右方 = 朱雀/ai2 (currentPlayerIndex = 2) -> aiPlayers[1]
 * - 下方 = 玩家 (currentPlayerIndex = 0)
 * - 左方 = C.C./ai (currentPlayerIndex = 3) -> aiPlayers[0]
 *
 * 顺时针流转：卡莲(1) → 朱雀(2) → 玩家(0) → C.C.(3) → 卡莲(1)
 *
 * aiPlayers数组布局:
 * - aiPlayers[0] = ai (C.C.) -> currentPlayerIndex=3
 * - aiPlayers[1] = ai2 (朱雀) -> currentPlayerIndex=2
 * - aiPlayers[2] = ai3 (卡莲) -> currentPlayerIndex=1
 *
 * @author Code Agent
 * @version 4.0.0 - 统一符合需求规格
 */

import { GameEngine } from '../../src/core/GameEngineV2';

describe('回合流转顺序测试', () => {
  let engine: GameEngine;

  beforeEach(() => {
    engine = new GameEngine();
    engine.initializeGame('lelouch');
  });

  /**
   * 辅助函数：设置出牌状态
   */
  const setupPlayCards = (playerId: 'player' | 'ai' | 'ai2' | 'ai3') => {
    (engine as any).state.turnState.playedCards = {
      cardIds: ['card1'],
      claimedRank: 'Q',
      actualCards: [{ id: 'card1', rank: 'Q', suit: 'spades', isJoker: false }],
      playerId,
      isBluff: false,
    };
  };

  describe('【场景1】卡莲/ai3出牌，无人质疑', () => {
    test('1.1 卡莲出牌后，下一个应该是朱雀/ai2(右方)', () => {
      setupPlayCards('ai3');

      const nextState = engine.endChallengePhase();

      // 卡莲(1)的下家是朱雀(2)
      expect(nextState.currentPlayerIndex).toBe(2);
      expect(nextState.phase).toBe('ai_turn');
    });
  });

  describe('【场景2】朱雀/ai2出牌，无人质疑', () => {
    test('2.1 朱雀出牌后，下一个应该是玩家(下方)', () => {
      setupPlayCards('ai2');

      const nextState = engine.endChallengePhase();

      // 朱雀(2)的下家是玩家(0)
      expect(nextState.currentPlayerIndex).toBe(0);
      expect(nextState.phase).toBe('player_turn');
    });
  });

  describe('【场景3】玩家出牌，无人质疑', () => {
    test('3.1 玩家出牌后，下一个应该是C.C./ai(左方)', () => {
      setupPlayCards('player');

      const nextState = engine.endChallengePhase();

      // 玩家(0)的下家是C.C.(3)
      expect(nextState.currentPlayerIndex).toBe(3);
      expect(nextState.phase).toBe('ai_turn');
    });
  });

  describe('【场景4】C.C./ai出牌，无人质疑', () => {
    test('4.1 C.C.出牌后，下一个应该是卡莲/ai3(上方)', () => {
      setupPlayCards('ai');

      const nextState = engine.endChallengePhase();

      // C.C.(3)的下家是卡莲(1)
      expect(nextState.currentPlayerIndex).toBe(1);
      expect(nextState.phase).toBe('ai_turn');
    });
  });

  describe('【场景5】完整顺时针流转', () => {
    test('5.1 完整一圈流转验证', () => {
      // 卡莲 -> 朱雀
      setupPlayCards('ai3');
      let state = engine.endChallengePhase();
      expect(state.currentPlayerIndex).toBe(2);

      // 朱雀 -> 玩家
      setupPlayCards('ai2');
      state = engine.endChallengePhase();
      expect(state.currentPlayerIndex).toBe(0);

      // 玩家 -> C.C.
      setupPlayCards('player');
      state = engine.endChallengePhase();
      expect(state.currentPlayerIndex).toBe(3);

      // C.C. -> 卡莲
      setupPlayCards('ai');
      state = engine.endChallengePhase();
      expect(state.currentPlayerIndex).toBe(1);
    });
  });

  describe('【场景6】跳过已淘汰玩家', () => {
    test('6.1 朱雀被淘汰后，卡莲出牌应跳过朱雀到玩家', () => {
      // aiPlayers数组: [0]=ai/C.C., [1]=ai2/朱雀, [2]=ai3/卡莲
      // currentPlayerIndex: 1=ai3/卡莲, 2=ai2/朱雀, 3=ai/C.C.
      // 淘汰朱雀/ai2 (currentPlayerIndex=2, aiPlayers[1])
      (engine as any).state.aiPlayers[1].isActive = false;
      (engine as any).state.aiPlayers[1].stats.hp = 0;

      setupPlayCards('ai3');
      const nextState = engine.endChallengePhase();

      // 卡莲(1)的下家是朱雀(2)，但朱雀被淘汰
      // 应该跳过朱雀到玩家(0)
      expect(nextState.currentPlayerIndex).toBe(0);
    });

    test('6.2 多个AI被淘汰后的流转', () => {
      // 淘汰朱雀/ai2 (currentPlayerIndex=2) 和 C.C./ai (currentPlayerIndex=3)
      (engine as any).state.aiPlayers[1].isActive = false;
      (engine as any).state.aiPlayers[1].stats.hp = 0;
      (engine as any).state.aiPlayers[0].isActive = false;
      (engine as any).state.aiPlayers[0].stats.hp = 0;

      setupPlayCards('ai3');
      const nextState = engine.endChallengePhase();

      // 卡莲(1)的下家是朱雀(2)，朱雀和C.C.都被淘汰
      // 应流转到玩家(0)
      expect(nextState.currentPlayerIndex).toBe(0);
    });
  });

  describe('【场景7】回合数递增', () => {
    test('7.1 每次流转后回合数应增加', () => {
      const initialTurnNumber = engine.getState().turnState.turnNumber;

      setupPlayCards('ai3');
      const nextState = engine.endChallengePhase();

      expect(nextState.turnState.turnNumber).toBe(initialTurnNumber + 1);
    });

    test('7.2 多轮流转后回合数正确', () => {
      let turnNumber = engine.getState().turnState.turnNumber;

      // 顺序: 卡莲 -> 朱雀 -> 玩家 -> C.C. -> 卡莲
      const playerOrder: ('player' | 'ai' | 'ai2' | 'ai3')[] = ['ai3', 'ai2', 'player', 'ai'];
      for (let i = 0; i < 4; i++) {
        setupPlayCards(playerOrder[i]);
        const state = engine.endChallengePhase();
        turnNumber++;
        expect(state.turnState.turnNumber).toBe(turnNumber);
      }
    });
  });

  describe('【场景8】索引映射一致性验证', () => {
    test('8.1 aiPlayers数组索引与currentPlayerIndex映射正确', () => {
      const state = engine.getState();

      // 验证aiPlayers数组中的ID与currentPlayerIndex映射一致
      // aiPlayers[0] = ai (C.C.) -> currentPlayerIndex=3 (左方)
      expect(state.aiPlayers[0].id).toBe('ai');
      expect(state.aiPlayers[0].name).toBe('C.C.');

      // aiPlayers[1] = ai2 (朱雀) -> currentPlayerIndex=2 (右方)
      expect(state.aiPlayers[1].id).toBe('ai2');
      expect(state.aiPlayers[1].name).toBe('朱雀');

      // aiPlayers[2] = ai3 (卡莲) -> currentPlayerIndex=1 (上方)
      expect(state.aiPlayers[2].id).toBe('ai3');
      expect(state.aiPlayers[2].name).toBe('卡莲');
    });

    test('8.2 不同玩家出牌后的流转顺序符合需求规格', () => {
      // 测试所有可能的出牌者，验证流转顺序符合需求规格
      // 顺时针顺序: 卡莲(1) -> 朱雀(2) -> 玩家(0) -> C.C.(3) -> 卡莲(1)
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
});
