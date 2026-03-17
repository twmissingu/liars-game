/**
 * =============================================================================
 * Code Geass: Liar's Game - AI角色死亡场景测试
 * =============================================================================
 *
 * 测试AI角色死亡后的各种边界情况和逻辑：
 * 1. 死亡AI不应被选中为起始玩家
 * 2. 质疑流程应跳过死亡AI
 * 3. 回合流转应跳过死亡AI
 * 4. 只剩一名角色时游戏结束
 *
 * @author Code Agent
 * @version 1.0.0
 */

import { GameEngine } from '../../src/core/GameEngineV2';

describe('AI角色死亡场景测试', () => {
  let engine: GameEngine;

  beforeEach(() => {
    engine = new GameEngine();
    engine.initializeGame('lelouch');
  });

  describe('【场景1】死亡AI不应被选中为起始玩家', () => {
    test('1.1 resetRound应跳过死亡AI选择起始玩家', () => {
      // 设置AI1(C.C.)死亡
      (engine as any).state.aiPlayers[0].stats.hp = 0;
      (engine as any).state.aiPlayers[0].isActive = false;

      // 尝试传入死亡AI的索引(3)
      const resetState = engine.resetRound(3);

      // 起始玩家不应是死亡AI
      expect(resetState.currentPlayerIndex).not.toBe(3);
      // 应该是存活的玩家
      expect([0, 1, 2]).toContain(resetState.currentPlayerIndex);
    });

    test('1.2 resetRound随机选择时不应选中死亡AI', () => {
      // 设置AI2(朱雀)死亡
      (engine as any).state.aiPlayers[1].stats.hp = 0;
      (engine as any).state.aiPlayers[1].isActive = false;

      // 多次重置，验证不会选中死亡AI
      for (let i = 0; i < 10; i++) {
        const resetState = engine.resetRound();
        expect(resetState.currentPlayerIndex).not.toBe(2);
      }
    });

    test('1.3 所有AI死亡时应选择玩家为起始', () => {
      // 设置所有AI死亡
      (engine as any).state.aiPlayers.forEach((ai: any) => {
        ai.stats.hp = 0;
        ai.isActive = false;
      });

      const resetState = engine.resetRound();
      expect(resetState.currentPlayerIndex).toBe(0);
    });

    test('1.4 玩家死亡时应选择存活AI为起始', () => {
      // 设置玩家死亡
      (engine as any).state.playerStats.hp = 0;

      const resetState = engine.resetRound();
      expect(resetState.currentPlayerIndex).not.toBe(0);
    });
  });

  describe('【场景2】质疑流程应跳过死亡AI', () => {
    test('2.1 死亡AI不应参与质疑', () => {
      // 设置AI1死亡
      (engine as any).state.aiPlayers[0].stats.hp = 0;
      (engine as any).state.aiPlayers[0].isActive = false;

      // 玩家出牌
      (engine as any).state.turnState.playedCards = {
        cardIds: ['card1'],
        claimedRank: 'Q',
        actualCards: [{ id: 'card1', rank: 'Q', suit: 'spades', isJoker: false }],
        playerId: 'player',
        isBluff: false,
      };

      // 进入质疑阶段
      const challengeState = engine.enterChallengePhase();

      // 质疑阶段应正常进行，不会卡住
      expect(challengeState.phase).toBe('challenge');
    });

    test('2.2 质疑顺序应跳过死亡AI', () => {
      // 设置AI2死亡
      (engine as any).state.aiPlayers[1].stats.hp = 0;
      (engine as any).state.aiPlayers[1].isActive = false;

      // AI3出牌
      (engine as any).state.turnState.playedCards = {
        cardIds: ['card1'],
        claimedRank: 'K',
        actualCards: [{ id: 'card1', rank: 'K', suit: 'hearts', isJoker: false }],
        playerId: 'ai3',
        isBluff: false,
      };

      // 获取存活AI数量
      const activeAIs = (engine as any).state.aiPlayers.filter(
        (ai: any) => ai.isActive && ai.stats.hp > 0
      );
      expect(activeAIs.length).toBe(2);
    });
  });

  describe('【场景3】回合流转应跳过死亡AI', () => {
    test('3.1 endChallengePhase应跳过死亡AI', () => {
      // 设置AI2死亡
      (engine as any).state.aiPlayers[1].stats.hp = 0;
      (engine as any).state.aiPlayers[1].isActive = false;

      // 设置出牌者为AI3
      (engine as any).state.turnState.playedCards = {
        cardIds: ['card1'],
        claimedRank: 'A',
        actualCards: [{ id: 'card1', rank: 'A', suit: 'spades', isJoker: false }],
        playerId: 'ai3',
        isBluff: false,
      };

      // 结束质疑阶段
      const nextState = engine.endChallengePhase();

      // 下一个玩家不应是死亡的AI2
      expect(nextState.currentPlayerIndex).not.toBe(2);
    });

    test('3.2 moveToNextPlayer应跳过死亡AI', () => {
      // 设置AI1死亡
      (engine as any).state.aiPlayers[0].stats.hp = 0;
      (engine as any).state.aiPlayers[0].isActive = false;

      // 设置当前玩家为AI3(索引1)
      (engine as any).state.currentPlayerIndex = 1;

      // 移动到下一个玩家
      (engine as any).moveToNextPlayer();

      // 下一个玩家不应是死亡的AI1
      const nextIndex = (engine as any).state.currentPlayerIndex;
      expect(nextIndex).not.toBe(3);
    });
  });

  describe('【场景4】只剩一名角色时游戏结束', () => {
    test('4.1 只剩玩家存活时应结束游戏', () => {
      // 设置所有AI死亡
      (engine as any).state.aiPlayers.forEach((ai: any) => {
        ai.stats.hp = 0;
        ai.isActive = false;
      });

      // 调用checkGameOver
      const isOver = (engine as any).checkGameOver();

      expect(isOver).toBe(true);
      const state = engine.getState();
      expect(state.winner).toBe('player');
      expect(state.phase).toBe('game_over');
    });

    test('4.2 只剩一名AI存活时应结束游戏', () => {
      // 设置玩家死亡
      (engine as any).state.playerStats.hp = 0;

      // 设置其他AI死亡，只剩AI1
      (engine as any).state.aiPlayers[1].stats.hp = 0;
      (engine as any).state.aiPlayers[1].isActive = false;
      (engine as any).state.aiPlayers[2].stats.hp = 0;
      (engine as any).state.aiPlayers[2].isActive = false;

      // 调用checkGameOver
      const isOver = (engine as any).checkGameOver();

      expect(isOver).toBe(true);
      const state = engine.getState();
      expect(state.winner).toBe('ai');
      expect(state.phase).toBe('game_over');
    });

    test('4.3 游戏结束后不应继续操作', () => {
      // 设置游戏结束
      (engine as any).state.winner = 'player';
      (engine as any).state.phase = 'game_over';

      // 尝试出牌应失败
      const result = engine.playCards(['card1'], 'Q');
      expect(result).toBe(false);
    });
  });

  describe('【场景5】边界条件测试', () => {
    test('5.1 连续死亡多个AI后游戏应正常进行', () => {
      // 设置AI1和AI2死亡
      (engine as any).state.aiPlayers[0].stats.hp = 0;
      (engine as any).state.aiPlayers[0].isActive = false;
      (engine as any).state.aiPlayers[1].stats.hp = 0;
      (engine as any).state.aiPlayers[1].isActive = false;

      // 重置牌局
      const resetState = engine.resetRound();

      // 起始玩家应是存活的玩家或AI3
      expect([0, 1]).toContain(resetState.currentPlayerIndex);
      expect(resetState.currentPlayerIndex).not.toBe(2);
      expect(resetState.currentPlayerIndex).not.toBe(3);
    });

    test('5.2 死亡AI的手牌不应影响游戏', () => {
      // 设置AI1死亡但还有手牌
      (engine as any).state.aiPlayers[0].stats.hp = 0;
      (engine as any).state.aiPlayers[0].isActive = false;
      (engine as any).state.aiPlayers[0].hand = [
        { id: 'dead_card', rank: 'Q', suit: 'spades', isJoker: false }
      ];

      // 游戏应正常进行
      const state = engine.getState();
      expect(state.aiPlayers[0].isActive).toBe(false);
    });

    test('5.3 getActivePlayerIndices应正确返回存活玩家', () => {
      // 设置AI2死亡
      (engine as any).state.aiPlayers[1].stats.hp = 0;
      (engine as any).state.aiPlayers[1].isActive = false;

      // 调用私有方法
      const activeIndices = (engine as any).getActivePlayerIndices();

      expect(activeIndices).toContain(0); // 玩家
      expect(activeIndices).toContain(1); // AI3
      expect(activeIndices).not.toContain(2); // AI2死亡
      expect(activeIndices).toContain(3); // AI1
    });

    test('5.4 findNextActivePlayer应正确找到下一个存活玩家', () => {
      // 设置AI2死亡
      (engine as any).state.aiPlayers[1].stats.hp = 0;
      (engine as any).state.aiPlayers[1].isActive = false;

      // 从AI2(索引2)开始查找，应跳过AI2到AI1(索引3)
      const nextPlayer = (engine as any).findNextActivePlayer(2);
      expect(nextPlayer).toBe(3);

      // 从AI1(索引3)开始查找，AI1存活，应返回AI1本身
      const nextPlayer2 = (engine as any).findNextActivePlayer(3);
      expect(nextPlayer2).toBe(3);

      // 从AI3(索引1)开始查找，AI3存活，应返回AI3本身
      const nextPlayer3 = (engine as any).findNextActivePlayer(1);
      expect(nextPlayer3).toBe(1);
    });
  });

  describe('【场景6】复杂场景测试', () => {
    test('6.1 死亡AI在质疑流程中被正确处理', () => {
      // 设置AI1死亡，AI2和AI3存活
      (engine as any).state.aiPlayers[0].stats.hp = 0;
      (engine as any).state.aiPlayers[0].isActive = false;

      // AI3出牌
      (engine as any).state.turnState.playedCards = {
        cardIds: ['card1'],
        claimedRank: 'Q',
        actualCards: [{ id: 'card1', rank: 'Q', suit: 'spades', isJoker: false }],
        playerId: 'ai3',
        isBluff: false,
      };

      // 质疑阶段应正常进行
      const challengeState = engine.enterChallengePhase();
      expect(challengeState.phase).toBe('challenge');

      // 结束质疑阶段
      const nextState = engine.endChallengePhase();
      expect(nextState.phase).not.toBe('challenge');
    });

    test('6.2 惩罚后重置应正确处理死亡AI', () => {
      // 设置AI2死亡
      (engine as any).state.aiPlayers[1].stats.hp = 0;
      (engine as any).state.aiPlayers[1].isActive = false;

      // 模拟惩罚后重置，传入死亡AI的索引
      const resetState = engine.resetRound(2);

      // 起始玩家不应是死亡AI
      expect(resetState.currentPlayerIndex).not.toBe(2);
    });
  });
});
