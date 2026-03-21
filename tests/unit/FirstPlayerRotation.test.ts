/**
 * =============================================================================
 * 回合先手角色轮转机制测试
 * =============================================================================
 *
 * 验证回合先手角色的确定机制：
 * 1. 第一回合采用随机方式决定先手角色
 * 2. 从第二回合开始，后续回合的先手角色严格按照顺时针方向依次轮转
 *
 * 顺时针顺序: 卡莲(上/1) → 朱雀(右/2) → 玩家(下/0) → C.C.(左/3) → 卡莲(上)
 *
 * @author Code Agent
 * @version 1.0.0
 */

import { GameEngine } from '../../src/core/GameEngineV2';

describe('回合先手角色轮转机制测试', () => {
  let engine: GameEngine;

  beforeEach(() => {
    engine = new GameEngine();
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

  describe('【场景1】第一回合随机先手', () => {
    test('1.1 多次初始化游戏，先手角色应该随机分布', () => {
      const firstPlayerCounts = { 0: 0, 1: 0, 2: 0, 3: 0 };
      const sampleSize = 100;

      for (let i = 0; i < sampleSize; i++) {
        const newEngine = new GameEngine();
        newEngine.initializeGame('lelouch');
        const firstPlayerIndex = newEngine.getState().turnState.firstPlayerIndex;
        firstPlayerCounts[firstPlayerIndex as keyof typeof firstPlayerCounts]++;
      }

      // 验证每个角色都有机会成为先手（随机性验证）
      expect(firstPlayerCounts[0]).toBeGreaterThan(0); // 玩家
      expect(firstPlayerCounts[1]).toBeGreaterThan(0); // 卡莲
      expect(firstPlayerCounts[2]).toBeGreaterThan(0); // 朱雀
      expect(firstPlayerCounts[3]).toBeGreaterThan(0); // C.C.

      console.log('第一回合先手角色分布:', firstPlayerCounts);
    });

    test('1.2 初始化后firstPlayerIndex应与currentPlayerIndex一致', () => {
      engine.initializeGame('lelouch');
      const state = engine.getState();

      expect(state.turnState.firstPlayerIndex).toBe(state.currentPlayerIndex);
    });
  });

  describe('【场景2】后续回合顺时针轮转', () => {
    test('2.1 从卡莲开始，下一回合先手应该是朱雀', () => {
      engine.initializeGame('lelouch');

      // 设置当前先手为卡莲(index 1)
      (engine as any).state.currentPlayerIndex = 1;
      (engine as any).state.turnState.firstPlayerIndex = 1;
      (engine as any).state.phase = 'ai_turn';

      setupPlayCards('ai3'); // 卡莲出牌
      const nextState = engine.endChallengePhase();

      // 下一回合先手应该是朱雀(index 2)
      expect(nextState.turnState.firstPlayerIndex).toBe(2);
      expect(nextState.currentPlayerIndex).toBe(2);
    });

    test('2.2 从朱雀开始，下一回合先手应该是玩家', () => {
      engine.initializeGame('lelouch');

      // 设置当前先手为朱雀(index 2)
      (engine as any).state.currentPlayerIndex = 2;
      (engine as any).state.turnState.firstPlayerIndex = 2;
      (engine as any).state.phase = 'ai_turn';

      setupPlayCards('ai2'); // 朱雀出牌
      const nextState = engine.endChallengePhase();

      // 下一回合先手应该是玩家(index 0)
      expect(nextState.turnState.firstPlayerIndex).toBe(0);
      expect(nextState.currentPlayerIndex).toBe(0);
    });

    test('2.3 从玩家开始，下一回合先手应该是C.C.', () => {
      engine.initializeGame('lelouch');

      // 设置当前先手为玩家(index 0)
      (engine as any).state.currentPlayerIndex = 0;
      (engine as any).state.turnState.firstPlayerIndex = 0;
      (engine as any).state.phase = 'player_turn';

      setupPlayCards('player'); // 玩家出牌
      const nextState = engine.endChallengePhase();

      // 下一回合先手应该是C.C.(index 3)
      expect(nextState.turnState.firstPlayerIndex).toBe(3);
      expect(nextState.currentPlayerIndex).toBe(3);
    });

    test('2.4 从C.C.开始，下一回合先手应该是卡莲', () => {
      engine.initializeGame('lelouch');

      // 设置当前先手为C.C.(index 3)
      (engine as any).state.currentPlayerIndex = 3;
      (engine as any).state.turnState.firstPlayerIndex = 3;
      (engine as any).state.phase = 'ai_turn';

      setupPlayCards('ai'); // C.C.出牌
      const nextState = engine.endChallengePhase();

      // 下一回合先手应该是卡莲(index 1)
      expect(nextState.turnState.firstPlayerIndex).toBe(1);
      expect(nextState.currentPlayerIndex).toBe(1);
    });
  });

  describe('【场景3】完整轮转周期', () => {
    test('3.1 四个回合完成一轮顺时针轮转', () => {
      engine.initializeGame('lelouch');

      // 从卡莲开始
      (engine as any).state.currentPlayerIndex = 1;
      (engine as any).state.turnState.firstPlayerIndex = 1;
      (engine as any).state.phase = 'ai_turn';

      const order: number[] = [1];

      // 进行4个回合
      for (let i = 0; i < 4; i++) {
        const currentFirst = engine.getState().turnState.firstPlayerIndex;
        const playerId = currentFirst === 0 ? 'player' :
                        currentFirst === 1 ? 'ai3' :
                        currentFirst === 2 ? 'ai2' : 'ai';
        setupPlayCards(playerId as any);
        const nextState = engine.endChallengePhase();
        order.push(nextState.turnState.firstPlayerIndex);
      }

      // 应该完成一轮轮转: 卡莲(1) → 朱雀(2) → 玩家(0) → C.C.(3) → 卡莲(1)
      expect(order).toEqual([1, 2, 0, 3, 1]);
    });
  });

  describe('【场景4】淘汰玩家后的轮转', () => {
    test('4.1 朱雀被淘汰后，轮转应跳过朱雀', () => {
      engine.initializeGame('lelouch');

      // 淘汰朱雀(ai2, index 2)
      (engine as any).state.aiPlayers[1].isActive = false;
      (engine as any).state.aiPlayers[1].stats.hp = 0;

      // 从卡莲开始
      (engine as any).state.currentPlayerIndex = 1;
      (engine as any).state.turnState.firstPlayerIndex = 1;
      (engine as any).state.phase = 'ai_turn';

      setupPlayCards('ai3'); // 卡莲出牌
      const nextState = engine.endChallengePhase();

      // 下一回合先手应该跳过朱雀(2)，直接到玩家(0)
      expect(nextState.turnState.firstPlayerIndex).toBe(0);
      expect(nextState.currentPlayerIndex).toBe(0);
    });

    test('4.2 只剩玩家时，先手始终为玩家', () => {
      engine.initializeGame('lelouch');

      // 淘汰所有AI
      (engine as any).state.aiPlayers.forEach((ai: any) => {
        ai.isActive = false;
        ai.stats.hp = 0;
      });

      // 从玩家开始
      (engine as any).state.currentPlayerIndex = 0;
      (engine as any).state.turnState.firstPlayerIndex = 0;
      (engine as any).state.phase = 'player_turn';

      // 进行3个回合
      for (let i = 0; i < 3; i++) {
        setupPlayCards('player');
        const nextState = engine.endChallengePhase();
        // 先手始终应该是玩家
        expect(nextState.turnState.firstPlayerIndex).toBe(0);
        expect(nextState.currentPlayerIndex).toBe(0);
      }
    });
  });

  describe('【场景5】回合数递增', () => {
    test('5.1 每完成一个回合，回合数应增加', () => {
      engine.initializeGame('lelouch');
      const initialTurnNumber = engine.getState().turnState.turnNumber;

      // 设置先手为卡莲
      (engine as any).state.currentPlayerIndex = 1;
      (engine as any).state.turnState.firstPlayerIndex = 1;
      (engine as any).state.phase = 'ai_turn';

      setupPlayCards('ai3');
      const nextState = engine.endChallengePhase();

      expect(nextState.turnState.turnNumber).toBe(initialTurnNumber + 1);
    });

    test('5.2 多轮轮转后回合数正确', () => {
      engine.initializeGame('lelouch');
      let turnNumber = engine.getState().turnState.turnNumber;

      // 设置先手为卡莲
      (engine as any).state.currentPlayerIndex = 1;
      (engine as any).state.turnState.firstPlayerIndex = 1;
      (engine as any).state.phase = 'ai_turn';

      // 进行4个回合（一轮）
      for (let i = 0; i < 4; i++) {
        const currentFirst = engine.getState().turnState.firstPlayerIndex;
        const playerId = currentFirst === 0 ? 'player' :
                        currentFirst === 1 ? 'ai3' :
                        currentFirst === 2 ? 'ai2' : 'ai';
        setupPlayCards(playerId as any);
        const state = engine.endChallengePhase();
        turnNumber++;
        expect(state.turnState.turnNumber).toBe(turnNumber);
      }
    });
  });

  describe('【场景6】日志记录', () => {
    test('6.1 回合切换时应记录日志', () => {
      const consoleSpy = jest.spyOn(console, 'log').mockImplementation();
      engine.initializeGame('lelouch');

      // 设置先手为卡莲
      (engine as any).state.currentPlayerIndex = 1;
      (engine as any).state.turnState.firstPlayerIndex = 1;
      (engine as any).state.phase = 'ai_turn';

      setupPlayCards('ai3');
      engine.endChallengePhase();

      // 验证日志中包含先手角色信息
      const logCalls = consoleSpy.mock.calls;
      const hasFirstPlayerLog = logCalls.some(call =>
        call[0] && typeof call[0] === 'string' &&
        call[0].includes('先手角色')
      );
      expect(hasFirstPlayerLog).toBe(true);

      consoleSpy.mockRestore();
    });
  });
});
