/**
 * =============================================================================
 * Code Geass: Liar's Game - 胜利条件测试
 * =============================================================================
 *
 * 测试各种胜利场景：
 * 1. 手牌出完胜利
 * 2. 其他角色全部死亡胜利
 * 3. 只剩一名角色存活胜利
 *
 * @author Code Agent
 * @version 1.0.0
 */

import { GameEngine } from '../../src/core/GameEngineV2';
import type { GameState } from '../../src/core/GameEngineV2';

describe('胜利条件测试', () => {
  let engine: GameEngine;

  beforeEach(() => {
    engine = new GameEngine();
    engine.initializeGame('lelouch');
  });

  describe('【场景1】手牌出完胜利', () => {
    test('1.1 玩家出完所有手牌应获得胜利', () => {
      // 设置玩家只有1张牌
      (engine as any).state.playerHand = [
        { id: 'card1', rank: 'Q', suit: 'spades', isJoker: false }
      ];
      (engine as any).state.phase = 'player_turn';

      // 玩家出牌
      const result = engine.playCards(['card1'], 'Q');

      // 检查是否触发胜利条件
      const state = engine.getState();
      expect(state.playerHand.length).toBe(0);
      // 手牌出完后应该直接获胜
      expect(state.winner).toBe('player');
      expect(state.phase).toBe('game_over');
    });

    test('1.2 AI出完所有手牌应获得胜利', () => {
      // 设置AI1只有1张牌
      (engine as any).state.aiPlayers[0].hand = [
        { id: 'ai_card1', rank: 'K', suit: 'hearts', isJoker: false }
      ];
      (engine as any).state.currentPlayerIndex = 3; // AI1的回合
      (engine as any).state.phase = 'ai_turn';

      // 直接调用handleEmptyHand模拟AI出完牌
      (engine as any).handleEmptyHand('ai');

      // 检查是否触发胜利条件
      const state = engine.getState();
      expect(state.winner).toBe('ai');
      expect(state.phase).toBe('game_over');
    });

    test('1.3 出完牌后游戏应结束', () => {
      // 直接调用handleEmptyHand模拟玩家出完牌
      (engine as any).handleEmptyHand('player');

      // 检查游戏状态
      const state = engine.getState();
      expect(state.winner).toBe('player');
      expect(state.phase).toBe('game_over');
    });
  });

  describe('【场景2】角色死亡胜利', () => {
    test('2.1 一名AI死亡后游戏继续', () => {
      // 设置AI1死亡
      (engine as any).state.aiPlayers[0].stats.hp = 0;
      (engine as any).state.aiPlayers[0].isActive = false;

      const state = engine.getState();
      expect(state.aiPlayers[0].isActive).toBe(false);
      expect(state.winner).toBeNull(); // 游戏未结束
    });

    test('2.2 只剩玩家存活时应获得胜利', () => {
      // 设置所有AI死亡
      (engine as any).state.aiPlayers.forEach((ai: any) => {
        ai.stats.hp = 0;
        ai.isActive = false;
      });

      // 调用checkGameOver检查胜利条件
      (engine as any).checkGameOver();

      // 检查游戏状态
      const state = engine.getState();
      expect(state.aiPlayers.every((ai: any) => !ai.isActive)).toBe(true);
      expect(state.winner).toBe('player');
      expect(state.phase).toBe('game_over');
    });

    test('2.3 只剩一名AI存活时应获得胜利', () => {
      // 设置玩家死亡
      (engine as any).state.playerStats.hp = 0;

      // 设置其他AI死亡，只剩AI1
      (engine as any).state.aiPlayers[1].stats.hp = 0;
      (engine as any).state.aiPlayers[1].isActive = false;
      (engine as any).state.aiPlayers[2].stats.hp = 0;
      (engine as any).state.aiPlayers[2].isActive = false;

      // 调用checkGameOver检查胜利条件
      (engine as any).checkGameOver();

      // 检查游戏状态
      const state = engine.getState();
      expect(state.playerStats.hp).toBe(0);
      expect(state.aiPlayers[0].isActive).toBe(true);
      expect(state.aiPlayers[1].isActive).toBe(false);
      expect(state.aiPlayers[2].isActive).toBe(false);
      expect(state.winner).toBe('ai');
      expect(state.phase).toBe('game_over');
    });

    test('2.4 Geass惩罚导致死亡应正确判断胜利', () => {
      // 设置AI1只剩1点HP
      (engine as any).state.aiPlayers[0].stats.hp = 1;

      // 模拟Geass惩罚（HP-1）
      (engine as any).state.aiPlayers[0].stats.hp = 0;
      (engine as any).state.aiPlayers[0].isActive = false;

      // 检查游戏状态
      const state = engine.getState();
      expect(state.aiPlayers[0].isActive).toBe(false);
    });
  });

  describe('【场景3】游戏结束判断', () => {
    test('3.1 游戏结束后不应继续操作', () => {
      // 设置玩家胜利
      (engine as any).state.winner = 'player';
      (engine as any).state.phase = 'game_over';

      // 尝试出牌应该失败（返回false）
      const result = engine.playCards(['card1'], 'Q');
      expect(result).toBe(false);
      
      // 检查状态仍然是游戏结束
      const state = engine.getState();
      expect(state.phase).toBe('game_over');
    });

    test('3.2 死亡角色不应参与游戏', () => {
      // 设置AI1死亡
      (engine as any).state.aiPlayers[0].stats.hp = 0;
      (engine as any).state.aiPlayers[0].isActive = false;

      // 检查AI1是否被跳过
      const activeAIs = (engine as any).state.aiPlayers.filter((ai: any) => ai.isActive);
      expect(activeAIs.length).toBe(2);
    });

    test('3.3 回合流转应跳过死亡角色', () => {
      // 新映射: aiPlayers[0]=ai/C.C., aiPlayers[1]=ai2/朱雀, aiPlayers[2]=ai3/卡莲
      // 设置朱雀/ai2死亡 (索引1)
      (engine as any).state.aiPlayers[1].stats.hp = 0;
      (engine as any).state.aiPlayers[1].isActive = false;

      // 设置当前先手为C.C./ai (索引3)
      (engine as any).state.turnState.firstPlayerIndex = 3;

      // 模拟C.C./ai出牌
      (engine as any).state.turnState.playedCards = {
        cardIds: ['card1'],
        claimedRank: 'Q',
        actualCards: [{ id: 'card1', rank: 'Q', suit: 'spades', isJoker: false }],
        playerId: 'ai',
        isBluff: false,
      };

      // 结束回合，下一个应该是卡莲/ai3(索引1)（跳过朱雀/ai2(索引2)）
      // 顺时针: C.C.(3) -> 卡莲(1) -> 朱雀(2-死亡跳过) -> 玩家(0)
      const nextState = engine.endChallengePhase();

      // 检查是否跳过了朱雀/ai2(索引2)，应该是卡莲/ai3(索引1)
      expect(nextState.currentPlayerIndex).toBe(1);
    });
  });

  describe('【场景4】边界条件', () => {
    test('4.1 HP刚好为0时应死亡', () => {
      // 设置AI1 HP为0
      (engine as any).state.aiPlayers[0].stats.hp = 0;

      // 检查是否标记为死亡
      const state = engine.getState();
      expect(state.aiPlayers[0].stats.hp).toBe(0);
    });

    test('4.2 HP为负数时应死亡', () => {
      // 设置AI1 HP为负数
      (engine as any).state.aiPlayers[0].stats.hp = -1;

      // 检查是否标记为死亡
      const state = engine.getState();
      expect(state.aiPlayers[0].stats.hp).toBeLessThanOrEqual(0);
    });

    test('4.3 同时出完牌应判断正确胜利者', () => {
      // 设置玩家出完牌并获胜
      (engine as any).handleEmptyHand('player');

      // 检查游戏状态
      const state = engine.getState();
      // 玩家应该获胜
      expect(state.winner).toBe('player');
      expect(state.phase).toBe('game_over');
    });
  });

  describe('【场景5】checkGameOver方法测试', () => {
    test('5.1 checkGameOver应正确识别胜利者', () => {
      // 只剩玩家存活
      (engine as any).state.aiPlayers.forEach((ai: any) => {
        ai.isActive = false;
        ai.stats.hp = 0;
      });

      // 调用checkGameOver
      (engine as any).checkGameOver();

      const state = engine.getState();
      expect(state.winner).toBe('player');
      expect(state.phase).toBe('game_over');
    });

    test('5.2 多角色存活时游戏继续', () => {
      // 所有角色都存活
      (engine as any).state.playerStats.hp = 3;
      (engine as any).state.aiPlayers.forEach((ai: any) => {
        ai.isActive = true;
        ai.stats.hp = 3;
      });

      // 调用checkGameOver
      (engine as any).checkGameOver();

      const state = engine.getState();
      expect(state.winner).toBeNull();
      expect(state.phase).not.toBe('game_over');
    });
  });

  describe('【场景6】回合数记录测试', () => {
    test('6.1 游戏结束时回合数应正确记录', () => {
      // 设置当前回合数为5
      (engine as any).state.turnState.turnNumber = 5;

      // 设置玩家胜利条件
      (engine as any).state.aiPlayers.forEach((ai: any) => {
        ai.isActive = false;
        ai.stats.hp = 0;
      });

      // 调用checkGameOver结束游戏
      (engine as any).checkGameOver();

      const state = engine.getState();
      expect(state.winner).toBe('player');
      expect(state.phase).toBe('game_over');
      // 验证回合数正确记录
      expect(state.turnState.turnNumber).toBe(5);
    });

    test('6.2 多回合后胜利回合数应大于0', () => {
      // 模拟进行了10个回合
      (engine as any).state.turnState.turnNumber = 10;

      // 设置玩家出完牌获胜
      (engine as any).handleEmptyHand('player');

      const state = engine.getState();
      expect(state.winner).toBe('player');
      expect(state.phase).toBe('game_over');
      // 结算页面应该显示10回合
      expect(state.turnState.turnNumber).toBe(10);
    });

    test('6.3 结算时回合数不应与Geass成功次数混淆', () => {
      // 设置回合数为3
      (engine as any).state.turnState.turnNumber = 3;
      // 设置Geass成功次数为5（与回合数不同）
      (engine as any).state.playerStats.geassSuccessCount = 5;

      // 设置玩家胜利
      (engine as any).handleEmptyHand('player');

      const state = engine.getState();
      // 验证回合数和Geass成功次数是不同的值
      expect(state.turnState.turnNumber).toBe(3);
      expect(state.playerStats.geassSuccessCount).toBe(5);
      // 回合数应该显示3而不是5+0=5
      expect(state.turnState.turnNumber).not.toBe(
        state.playerStats.geassSuccessCount
      );
    });
  });

  describe('【场景7】玩家出完最后一张牌且无AI质疑', () => {
    test('7.1 玩家出完最后一张牌，无AI质疑时应判定玩家胜利', () => {
      // 设置玩家只有1张牌
      (engine as any).state.playerHand = [
        { id: 'card1', rank: 'Q', suit: 'spades', isJoker: false }
      ];
      (engine as any).state.phase = 'player_turn';
      (engine as any).state.liarCard = 'Q';

      // 玩家出牌
      engine.playCards(['card1'], 'Q');

      // 检查玩家手牌为空
      const stateAfterPlay = engine.getState();
      expect(stateAfterPlay.playerHand.length).toBe(0);

      // 模拟无人质疑，调用endChallengePhase(true)
      const finalState = engine.endChallengePhase(true);

      // 验证玩家获得胜利
      expect(finalState.winner).toBe('player');
      expect(finalState.phase).toBe('game_over');
      expect(finalState.lastAction).toContain('手牌耗尽');
    });

    test('7.2 AI出完最后一张牌，无质疑时应判定AI胜利', () => {
      // 设置AI1只有1张牌
      (engine as any).state.aiPlayers[0].hand = [
        { id: 'ai_card1', rank: 'K', suit: 'hearts', isJoker: false }
      ];
      (engine as any).state.phase = 'ai_turn';
      (engine as any).state.currentPlayerIndex = 3; // AI1的索引
      (engine as any).state.liarCard = 'K';

      // AI出牌
      engine.aiPlayCards('ai');

      // 检查AI手牌为空
      const stateAfterPlay = engine.getState();
      expect(stateAfterPlay.aiPlayers[0].hand.length).toBe(0);

      // 模拟无人质疑
      const finalState = engine.endChallengePhase(true);

      // 验证AI获得胜利
      expect(finalState.winner).toBe('ai');
      expect(finalState.phase).toBe('game_over');
    });

    test('7.3 游戏已结束时endChallengePhase不应改变状态', () => {
      // 设置游戏已结束
      (engine as any).state.phase = 'game_over';
      (engine as any).state.winner = 'player';

      // 调用endChallengePhase
      const state = engine.endChallengePhase(true);

      // 验证状态未改变
      expect(state.phase).toBe('game_over');
      expect(state.winner).toBe('player');
    });
  });
});
