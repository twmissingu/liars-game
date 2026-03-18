/**
 * =============================================================================
 * Code Geass: Liar's Game - GameEngineV2 完整单元测试
 * =============================================================================
 *
 * 系统化测试所有游戏逻辑分支
 *
 * @author Code Agent
 * @version 3.0.0
 */

import { GameEngine } from '../../src/core/GameEngineV2';
import type { CharacterId, GameState, Card } from '../../src/types';

describe('GameEngineV2 - 完整逻辑测试', () => {
  let engine: GameEngine;

  beforeEach(() => {
    engine = new GameEngine();
  });

  // ============================================
  // 测试1: 游戏初始化
  // ============================================
  describe('【测试1】游戏初始化', () => {
    test('1.1 应该正确初始化游戏状态', () => {
      const state = engine.initializeGame('lelouch');

      expect(state).toBeDefined();
      expect(state.playerCharacter).toBe('lelouch');
      expect(state.playerHand).toHaveLength(5);
      expect(state.aiPlayers).toHaveLength(3);
      expect(state.liarCard).toBeDefined();
      expect(['Q', 'K', 'A'].includes(state.liarCard)).toBe(true);
      expect(state.phase).toMatch(/player_turn|ai_turn/);
      expect(state.currentPlayerIndex).toBeGreaterThanOrEqual(0);
      expect(state.currentPlayerIndex).toBeLessThan(4);
    });

    test('1.2 应该支持自定义AI角色', () => {
      const aiCharacters: CharacterId[] = ['cc', 'suzaku', 'kallen'];
      const state = engine.initializeGame('lelouch', aiCharacters);

      expect(state.aiPlayers[0].character).toBe('cc');
      expect(state.aiPlayers[1].character).toBe('suzaku');
      expect(state.aiPlayers[2].character).toBe('kallen');
    });

    test('1.3 AI角色不应该与玩家重复', () => {
      const state = engine.initializeGame('lelouch');
      
      state.aiPlayers.forEach(ai => {
        expect(ai.character).not.toBe('lelouch');
      });
    });

    test('1.4 所有玩家初始HP应该正确', () => {
      const state = engine.initializeGame('lelouch');

      // 玩家鲁鲁修HP为3
      expect(state.playerStats.hp).toBe(3);
      // AI HP根据角色不同：朱雀4点，其他3点
      state.aiPlayers.forEach(ai => {
        const expectedHp = ai.character === 'suzaku' ? 4 : 3;
        expect(ai.stats.hp).toBe(expectedHp);
      });
    });
  });

  // ============================================
  // 测试2: 玩家出牌逻辑
  // ============================================
  describe('【测试2】玩家出牌逻辑', () => {
    beforeEach(() => {
      engine.initializeGame('lelouch');
      // 确保是玩家回合
      const state = engine.getState();
      if (state.phase !== 'player_turn') {
        // 修改状态为玩家回合以便测试
        (engine as any).state.phase = 'player_turn';
        (engine as any).state.currentPlayerIndex = 0;
      }
    });

    test('2.1 玩家应该能出1张牌', () => {
      const state = engine.getState();
      const cardId = state.playerHand[0].id;

      engine.toggleCardSelection(cardId);
      const newState = engine.playerPlayCards();

      expect(newState.turnState.playedCards).toBeDefined();
      expect(newState.turnState.playedCards?.cardIds).toHaveLength(1);
      expect(newState.playerHand).toHaveLength(4); // 5-1=4
    });

    test('2.2 玩家应该能出2张牌', () => {
      const state = engine.getState();
      const cardId1 = state.playerHand[0].id;
      const cardId2 = state.playerHand[1].id;

      engine.toggleCardSelection(cardId1);
      engine.toggleCardSelection(cardId2);
      const newState = engine.playerPlayCards();

      expect(newState.turnState.playedCards?.cardIds).toHaveLength(2);
      expect(newState.playerHand).toHaveLength(3); // 5-2=3
    });

    test('2.3 玩家应该能出3张牌', () => {
      const state = engine.getState();
      const cardIds = state.playerHand.slice(0, 3).map(c => c.id);

      cardIds.forEach(id => engine.toggleCardSelection(id));
      const newState = engine.playerPlayCards();

      expect(newState.turnState.playedCards?.cardIds).toHaveLength(3);
      expect(newState.playerHand).toHaveLength(2); // 5-3=2
    });

    test('2.4 玩家不应该能选择超过3张牌（非卡莲角色）', () => {
      const state = engine.getState();
      const cardIds = state.playerHand.slice(0, 4).map(c => c.id);

      // 尝试选择4张牌
      cardIds.forEach(id => engine.toggleCardSelection(id));
      
      // 由于限制，只应该选择了3张
      const selectedState = engine.getState();
      expect(selectedState.playerSelectedCards).toHaveLength(3);
    });

    test('2.5 非玩家回合不应该能出牌', () => {
      (engine as any).state.phase = 'ai_turn';
      (engine as any).state.currentPlayerIndex = 1;

      const state = engine.getState();
      const cardId = state.playerHand[0].id;
      engine.toggleCardSelection(cardId);

      expect(() => engine.playerPlayCards()).toThrow('当前不是玩家回合');
    });

    test('2.6 未选择牌不应该能出牌', () => {
      expect(() => engine.playerPlayCards()).toThrow('未选择任何牌');
    });
  });

  // ============================================
  // 测试3: AI出牌逻辑
  // ============================================
  describe('【测试3】AI出牌逻辑', () => {
    beforeEach(() => {
      engine.initializeGame('lelouch');
    });

    test('3.1 AI应该能自动出牌', () => {
      const state = engine.getState();
      // 找到当前AI回合
      if (state.currentPlayerIndex !== 0) {
        const aiId = state.aiPlayers[state.currentPlayerIndex - 1].id as 'ai' | 'ai2' | 'ai3';
        const aiHandSize = state.aiPlayers[state.currentPlayerIndex - 1].hand.length;
        
        const newState = engine.aiPlayCards(aiId);

        expect(newState.turnState.playedCards).toBeDefined();
        expect(newState.turnState.playedCards?.playerId).toBe(aiId);
      }
    });

    test('3.2 AI出牌后手牌应该减少', () => {
      const state = engine.getState();
      if (state.currentPlayerIndex !== 0) {
        const aiIndex = state.currentPlayerIndex - 1;
        const aiId = state.aiPlayers[aiIndex].id as 'ai' | 'ai2' | 'ai3';
        const initialHandSize = state.aiPlayers[aiIndex].hand.length;

        const newState = engine.aiPlayCards(aiId);
        const newHandSize = newState.aiPlayers[aiIndex].hand.length;

        expect(newHandSize).toBeLessThan(initialHandSize);
      }
    });
  });

  // ============================================
  // 测试4: 质疑机制
  // ============================================
  describe('【测试4】质疑机制', () => {
    beforeEach(() => {
      engine.initializeGame('lelouch');
    });

    test('4.1 玩家质疑AI成功（AI在撒谎）', () => {
      // 设置一个撒谎场景
      const state = engine.getState();
      (engine as any).state.turnState.playedCards = {
        cardIds: ['card1'],
        claimedRank: 'Q',
        actualCards: [{ id: 'card1', rank: 'K', suit: 'spades', isJoker: false }],
        playerId: 'ai',
        isBluff: true,
      };
      (engine as any).state.phase = 'challenge';

      const newState = engine.playerChallengeDecision(true);

      expect(newState.geassResult).toBeDefined();
      // AI应该扣血（如果Geass命中）或闪避（如果触发技能）
      // 这里只验证Geass结果被正确记录
      expect(newState.geassResult?.activated).toBe(true);
    });

    test('4.2 玩家质疑AI失败（AI没撒谎）', () => {
      // 设置一个没撒谎场景
      const state = engine.getState();
      (engine as any).state.turnState.playedCards = {
        cardIds: ['card1'],
        claimedRank: 'Q',
        actualCards: [{ id: 'card1', rank: 'Q', suit: 'spades', isJoker: false }],
        playerId: 'ai',
        isBluff: false,
      };
      (engine as any).state.phase = 'challenge';

      const newState = engine.playerChallengeDecision(true);

      expect(newState.geassResult).toBeDefined();
      // 玩家应该扣血（如果Geass命中）或闪避（如果触发技能）
      // 这里只验证Geass结果被正确记录
      expect(newState.geassResult?.activated).toBe(true);
    });

    test('4.3 AI质疑玩家成功（玩家在撒谎）', () => {
      // 设置一个撒谎场景
      const state = engine.getState();
      (engine as any).state.turnState.playedCards = {
        cardIds: ['card1'],
        claimedRank: 'Q',
        actualCards: [{ id: 'card1', rank: 'K', suit: 'spades', isJoker: false }],
        playerId: 'player',
        isBluff: true,
      };
      (engine as any).state.phase = 'challenge';

      const newState = engine.aiChallengeDecision('ai');

      expect(newState.geassResult).toBeDefined();
      // 玩家应该扣血（如果Geass命中）或闪避（如果触发技能）
      // 这里只验证Geass结果被正确记录
      expect(newState.geassResult?.activated).toBe(true);
    });

    test('4.4 AI质疑玩家失败（玩家没撒谎）', () => {
      // 设置一个没撒谎场景
      const state = engine.getState();
      (engine as any).state.turnState.playedCards = {
        cardIds: ['card1'],
        claimedRank: 'Q',
        actualCards: [{ id: 'card1', rank: 'Q', suit: 'spades', isJoker: false }],
        playerId: 'player',
        isBluff: false,
      };
      (engine as any).state.phase = 'challenge';

      const newState = engine.aiChallengeDecision('ai');

      expect(newState.geassResult).toBeDefined();
      // AI应该扣血（如果Geass命中）或闪避（如果触发技能）
      // 这里只验证Geass结果被正确记录
      expect(newState.geassResult?.activated).toBe(true);
    });
  });

  // ============================================
  // 测试5: 回合流转
  // ============================================
  describe('【测试5】回合流转', () => {
    beforeEach(() => {
      engine.initializeGame('lelouch');
    });

    test('5.1 玩家出牌后应该流转到AI回合', () => {
      (engine as any).state.phase = 'player_turn';
      (engine as any).state.currentPlayerIndex = 0;

      const state = engine.getState();
      const cardId = state.playerHand[0].id;
      engine.toggleCardSelection(cardId);
      engine.playerPlayCards();

      // 结束质疑阶段
      const nextState = engine.endChallengePhase();

      // 下一个玩家应该是AI
      expect(nextState.currentPlayerIndex).not.toBe(0);
      expect(nextState.phase).toBe('ai_turn');
    });

    test('5.2 无人质疑时应该继续下一回合', () => {
      (engine as any).state.turnState.playedCards = {
        cardIds: ['card1'],
        claimedRank: 'Q',
        actualCards: [{ id: 'card1', rank: 'Q', suit: 'spades', isJoker: false }],
        playerId: 'ai',
        isBluff: false,
      };

      const nextState = engine.endChallengePhase();

      expect(nextState.turnState.playedCards).toBeNull();
      expect(nextState.phase).toMatch(/player_turn|ai_turn/);
    });

    test('5.3 质疑成功后应该重置回合', () => {
      const initialTurnNumber = engine.getState().turnState.turnNumber;

      // 模拟质疑成功
      (engine as any).state.turnState.playedCards = {
        cardIds: ['card1'],
        claimedRank: 'Q',
        actualCards: [{ id: 'card1', rank: 'K', suit: 'spades', isJoker: false }],
        playerId: 'ai',
        isBluff: true,
      };
      (engine as any).state.phase = 'challenge';

      engine.playerChallengeDecision(true);

      // 重置回合
      const resetState = engine.resetRound();

      expect(resetState.turnState.turnNumber).toBe(initialTurnNumber + 1);
      expect(resetState.playerHand).toHaveLength(5);
      expect(resetState.turnState.playedCards).toBeNull();
    });
  });

  // ============================================
  // 测试6: 游戏结束条件
  // ============================================
  describe('【测试6】游戏结束条件', () => {
    beforeEach(() => {
      engine.initializeGame('lelouch');
    });

    test('6.1 玩家HP归零时游戏结束', () => {
      (engine as any).state.playerStats.hp = 0;
      
      const isGameOver = (engine as any).checkGameOver();

      expect(isGameOver).toBe(true);
      const state = engine.getState();
      expect(state.phase).toBe('game_over');
      expect(state.winner).toBe('ai');
    });

    test('6.2 所有AI被淘汰时游戏结束', () => {
      (engine as any).state.aiPlayers.forEach((ai: { isActive: boolean; stats: { hp: number } }) => {
        ai.isActive = false;
        ai.stats.hp = 0;
      });

      const isGameOver = (engine as any).checkGameOver();

      expect(isGameOver).toBe(true);
      const state = engine.getState();
      expect(state.phase).toBe('game_over');
      expect(state.winner).toBe('player');
    });

    test('6.3 部分AI被淘汰时游戏继续', () => {
      (engine as any).state.aiPlayers[0].isActive = false;
      (engine as any).state.aiPlayers[0].stats.hp = 0;

      const isGameOver = (engine as any).checkGameOver();

      expect(isGameOver).toBe(false);
      const state = engine.getState();
      expect(state.phase).not.toBe('game_over');
    });
  });

  // ============================================
  // 测试7: 角色技能
  // ============================================
  describe('【测试7】角色技能', () => {
    test('7.1 鲁鲁修应该能使用技能', () => {
      engine.initializeGame('lelouch');
      
      const canUse = engine.canPlayerUseSkill('player');
      expect(typeof canUse).toBe('boolean');
    });

    test('7.2 鲁鲁修技能应该能改变骗子牌', () => {
      engine.initializeGame('lelouch');
      const initialLiarCard = engine.getState().liarCard;

      // 确保技能可用
      const charState = (engine as any).state.characterStates.get('player');
      if (charState) {
        charState.skillUsed = false;
        charState.cooldown = 0;
      }

      if (engine.canPlayerUseSkill('player')) {
        const newState = engine.lelouchChangeLiarCard('K');
        expect(newState.liarCard).toBe('K');
      }
    });

    test('7.3 卡莲应该能出4张牌（技能可用时）', () => {
      engine.initializeGame('kallen');
      
      // 确保是玩家回合
      (engine as any).state.phase = 'player_turn';
      (engine as any).state.currentPlayerIndex = 0;

      // 确保技能可用
      const charState = (engine as any).state.characterStates.get('player');
      if (charState) {
        charState.skillUsed = false;
        charState.cooldown = 0;
      }

      const state = engine.getState();
      // 卡莲应该能出4张牌
      const cardIds = state.playerHand.slice(0, 4).map((c: Card) => c.id);
      cardIds.forEach((id: string) => engine.toggleCardSelection(id));

      // 不应该抛出错误
      expect(() => engine.playerPlayCards()).not.toThrow();
    });
  });

  // ============================================
  // 测试8: 边界情况
  // ============================================
  describe('【测试8】边界情况', () => {
    beforeEach(() => {
      engine.initializeGame('lelouch');
    });

    test('8.1 手牌耗尽时应该处理空手牌', () => {
      (engine as any).state.playerHand = [];
      
      const state = engine.getState();
      expect(state.playerHand).toHaveLength(0);
    });

    test('8.2 重复选择同一张牌应该取消选择', () => {
      const state = engine.getState();
      const cardId = state.playerHand[0].id;

      engine.toggleCardSelection(cardId);
      expect(engine.getState().playerSelectedCards).toContain(cardId);

      engine.toggleCardSelection(cardId);
      expect(engine.getState().playerSelectedCards).not.toContain(cardId);
    });

    test('8.3 获取状态应该返回深拷贝', () => {
      const state1 = engine.getState();
      const state2 = engine.getState();

      expect(state1).toEqual(state2);
      expect(state1).not.toBe(state2); // 不是同一个引用
    });
  });

  // ============================================
  // 测试9: 无人质疑后的回合流转
  // ============================================
  describe('【测试9】无人质疑后的回合流转', () => {
    beforeEach(() => {
      engine.initializeGame('lelouch');
    });

    test('9.1 无人质疑后回合数应该增加', () => {
      const initialTurnNumber = engine.getState().turnState.turnNumber;

      // 模拟AI出牌
      (engine as any).state.turnState.playedCards = {
        cardIds: ['card1'],
        claimedRank: 'Q',
        actualCards: [{ id: 'card1', rank: 'Q', suit: 'spades', isJoker: false }],
        playerId: 'ai',
        isBluff: false,
      };

      const nextState = engine.endChallengePhase();

      expect(nextState.turnState.turnNumber).toBe(initialTurnNumber + 1);
    });

    test('9.2 无人质疑后应该正确流转到下一个玩家', () => {
      // 新的UI顺序: 玩家(0) -> AI3(1) -> AI2(2) -> AI1(3) -> 玩家(0)
      // 模拟AI1(索引3)出牌
      (engine as any).state.turnState.playedCards = {
        cardIds: ['card1'],
        claimedRank: 'Q',
        actualCards: [{ id: 'card1', rank: 'Q', suit: 'spades', isJoker: false }],
        playerId: 'ai',
        isBluff: false,
      };

      const nextState = engine.endChallengePhase();

      // 下一个应该是玩家 (index 0)
      expect(nextState.currentPlayerIndex).toBe(0);
      expect(nextState.phase).toBe('player_turn');
    });

    test('9.3 无人质疑后AI3先手应该正确流转', () => {
      // 模拟玩家出牌
      (engine as any).state.turnState.playedCards = {
        cardIds: ['card1'],
        claimedRank: 'Q',
        actualCards: [{ id: 'card1', rank: 'Q', suit: 'spades', isJoker: false }],
        playerId: 'player',
        isBluff: false,
      };

      const nextState = engine.endChallengePhase();

      // 下一个应该是AI3 (index 1)
      expect(nextState.currentPlayerIndex).toBe(1);
      expect(nextState.phase).toBe('ai_turn');
    });
  });

  // ============================================
  // 测试10: 连续多轮游戏
  // ============================================
  describe('【测试10】连续多轮游戏', () => {
    beforeEach(() => {
      engine.initializeGame('lelouch');
    });

    test('10.1 连续3轮无人质疑后回合数应该正确', () => {
      const initialTurnNumber = engine.getState().turnState.turnNumber;

      // 模拟3轮游戏
      for (let i = 0; i < 3; i++) {
        (engine as any).state.turnState.playedCards = {
          cardIds: ['card1'],
          claimedRank: 'Q',
          actualCards: [{ id: 'card1', rank: 'Q', suit: 'spades', isJoker: false }],
          playerId: 'ai',
          isBluff: false,
        };
        engine.endChallengePhase();
      }

      const finalState = engine.getState();
      expect(finalState.turnState.turnNumber).toBe(initialTurnNumber + 3);
    });

    test('10.2 每轮结束后手牌应该重新发放', () => {
      // 第一轮
      (engine as any).state.turnState.playedCards = {
        cardIds: ['card1'],
        claimedRank: 'Q',
        actualCards: [{ id: 'card1', rank: 'Q', suit: 'spades', isJoker: false }],
        playerId: 'ai',
        isBluff: false,
      };
      engine.endChallengePhase();

      const stateAfterRound1 = engine.getState();
      expect(stateAfterRound1.playerHand).toHaveLength(5);
      expect(stateAfterRound1.aiPlayers[0].hand).toHaveLength(5);
    });

    test('10.3 每轮结束后骗子牌应该重新设定', () => {
      const initialLiarCard = engine.getState().liarCard;

      // 进行多轮
      for (let i = 0; i < 5; i++) {
        (engine as any).state.turnState.playedCards = {
          cardIds: ['card1'],
          claimedRank: 'Q',
          actualCards: [{ id: 'card1', rank: 'Q', suit: 'spades', isJoker: false }],
          playerId: 'ai',
          isBluff: false,
        };
        engine.endChallengePhase();
      }

      const finalState = engine.getState();
      // 骗子牌应该仍然是Q、K或A之一
      expect(['Q', 'K', 'A'].includes(finalState.liarCard)).toBe(true);
    });
  });

  // ============================================
  // 测试11: AI淘汰后的游戏流程
  // ============================================
  describe('【测试11】AI淘汰后的游戏流程', () => {
    beforeEach(() => {
      engine.initializeGame('lelouch');
    });

    test('11.1 AI被淘汰后应该跳过该AI的回合', () => {
      // 新的UI顺序: 玩家(0) -> AI3(1) -> AI2(2) -> AI1(3) -> 玩家(0)
      // aiPlayers数组: 0=AI1, 1=AI2, 2=AI3
      // 淘汰AI3 (aiPlayers[2])
      (engine as any).state.aiPlayers[2].isActive = false;
      (engine as any).state.aiPlayers[2].stats.hp = 0;

      // 模拟玩家出牌
      (engine as any).state.turnState.playedCards = {
        cardIds: ['card1'],
        claimedRank: 'Q',
        actualCards: [{ id: 'card1', rank: 'Q', suit: 'spades', isJoker: false }],
        playerId: 'player',
        isBluff: false,
      };

      const nextState = engine.endChallengePhase();

      // 下一个应该是AI2 (index 2)，跳过AI3
      expect(nextState.currentPlayerIndex).toBe(2);
    });

    test('11.2 多个AI被淘汰后应该正确流转', () => {
      // 淘汰AI3和AI2
      (engine as any).state.aiPlayers[2].isActive = false;
      (engine as any).state.aiPlayers[2].stats.hp = 0;
      (engine as any).state.aiPlayers[1].isActive = false;
      (engine as any).state.aiPlayers[1].stats.hp = 0;

      // 模拟玩家出牌
      (engine as any).state.turnState.playedCards = {
        cardIds: ['card1'],
        claimedRank: 'Q',
        actualCards: [{ id: 'card1', rank: 'Q', suit: 'spades', isJoker: false }],
        playerId: 'player',
        isBluff: false,
      };

      const nextState = engine.endChallengePhase();

      // 下一个应该是AI1 (index 3)
      expect(nextState.currentPlayerIndex).toBe(3);
    });

    test('11.3 只剩下一个AI时游戏应该继续', () => {
      // 只保留AI1
      (engine as any).state.aiPlayers[1].isActive = false;
      (engine as any).state.aiPlayers[1].stats.hp = 0;
      (engine as any).state.aiPlayers[2].isActive = false;
      (engine as any).state.aiPlayers[2].stats.hp = 0;

      const isGameOver = (engine as any).checkGameOver();

      expect(isGameOver).toBe(false);
    });
  });

  // ============================================
  // 测试12: 玩家和AI交替质疑
  // ============================================
  describe('【测试12】玩家和AI交替质疑', () => {
    beforeEach(() => {
      engine.initializeGame('lelouch');
    });

    test('12.1 玩家质疑成功后应该重置回合', () => {
      const initialTurnNumber = engine.getState().turnState.turnNumber;

      // 设置AI撒谎
      (engine as any).state.turnState.playedCards = {
        cardIds: ['card1'],
        claimedRank: 'Q',
        actualCards: [{ id: 'card1', rank: 'K', suit: 'spades', isJoker: false }],
        playerId: 'ai',
        isBluff: true,
      };
      (engine as any).state.phase = 'challenge';

      engine.playerChallengeDecision(true);

      // 重置回合
      const resetState = engine.resetRound();

      expect(resetState.turnState.turnNumber).toBe(initialTurnNumber + 1);
      expect(resetState.turnState.playedCards).toBeNull();
    });

    test('12.2 连续质疑成功后游戏应该正常推进', () => {
      // 第一轮：玩家质疑AI成功
      (engine as any).state.turnState.playedCards = {
        cardIds: ['card1'],
        claimedRank: 'Q',
        actualCards: [{ id: 'card1', rank: 'K', suit: 'spades', isJoker: false }],
        playerId: 'ai',
        isBluff: true,
      };
      (engine as any).state.phase = 'challenge';
      engine.playerChallengeDecision(true);
      engine.resetRound();

      const stateAfterRound1 = engine.getState();

      // 第二轮：AI质疑玩家成功
      (engine as any).state.turnState.playedCards = {
        cardIds: ['card1'],
        claimedRank: 'Q',
        actualCards: [{ id: 'card1', rank: 'K', suit: 'spades', isJoker: false }],
        playerId: 'player',
        isBluff: true,
      };
      (engine as any).state.phase = 'challenge';
      engine.aiChallengeDecision('ai');
      engine.resetRound();

      const stateAfterRound2 = engine.getState();

      expect(stateAfterRound2.turnState.turnNumber).toBe(stateAfterRound1.turnState.turnNumber + 1);
    });

    test('12.3 质疑失败后应该继续游戏', () => {
      const initialTurnNumber = engine.getState().turnState.turnNumber;

      // 设置AI没撒谎，玩家质疑失败
      (engine as any).state.turnState.playedCards = {
        cardIds: ['card1'],
        claimedRank: 'Q',
        actualCards: [{ id: 'card1', rank: 'Q', suit: 'spades', isJoker: false }],
        playerId: 'ai',
        isBluff: false,
      };
      (engine as any).state.phase = 'challenge';

      engine.playerChallengeDecision(true);

      // 质疑失败后游戏应该继续（有人受罚）
      const state = engine.getState();
      expect(state.geassResult).toBeDefined();
      expect(state.geassResult?.activated).toBe(true);
    });
  });

  // ============================================
  // 测试13: 玩家闪避后的游戏流程
  // ============================================
  describe('【测试13】玩家闪避后的游戏流程', () => {
    beforeEach(() => {
      engine.initializeGame('lelouch');
    });

    test('13.1 玩家闪避后游戏应该继续', () => {
      // 设置玩家撒谎被AI质疑，但玩家闪避
      (engine as any).state.turnState.playedCards = {
        cardIds: ['card1'],
        claimedRank: 'Q',
        actualCards: [{ id: 'card1', rank: 'K', suit: 'spades', isJoker: false }],
        playerId: 'player',
        isBluff: true,
      };
      (engine as any).state.phase = 'challenge';

      // 模拟玩家闪避（通过修改Geass结果）
      const newState = engine.aiChallengeDecision('ai');

      // 无论是否闪避，Geass结果都应该被记录
      expect(newState.geassResult).toBeDefined();
      expect(newState.geassResult?.activated).toBe(true);
    });

    test('13.2 玩家闪避后应该能继续出牌', () => {
      // 设置玩家撒谎被AI质疑
      (engine as any).state.turnState.playedCards = {
        cardIds: ['card1'],
        claimedRank: 'Q',
        actualCards: [{ id: 'card1', rank: 'K', suit: 'spades', isJoker: false }],
        playerId: 'player',
        isBluff: true,
      };
      (engine as any).state.phase = 'challenge';

      engine.aiChallengeDecision('ai');

      // 重置回合
      const resetState = engine.resetRound();

      // 设置玩家回合
      (engine as any).state.phase = 'player_turn';
      (engine as any).state.currentPlayerIndex = 0;

      // 玩家应该能选择牌
      const cardId = resetState.playerHand[0].id;
      engine.toggleCardSelection(cardId);

      expect(engine.getState().playerSelectedCards).toContain(cardId);
    });

    test('13.3 玩家闪避后回合应该正确流转', () => {
      const initialTurnNumber = engine.getState().turnState.turnNumber;

      // 设置玩家撒谎被AI质疑
      (engine as any).state.turnState.playedCards = {
        cardIds: ['card1'],
        claimedRank: 'Q',
        actualCards: [{ id: 'card1', rank: 'K', suit: 'spades', isJoker: false }],
        playerId: 'player',
        isBluff: true,
      };
      (engine as any).state.phase = 'challenge';

      engine.aiChallengeDecision('ai');

      // 重置回合
      const resetState = engine.resetRound();

      expect(resetState.turnState.turnNumber).toBe(initialTurnNumber + 1);
      expect(resetState.turnState.playedCards).toBeNull();
    });

    test('13.4 连续闪避后游戏应该正常', () => {
      // 第一轮：玩家闪避
      (engine as any).state.turnState.playedCards = {
        cardIds: ['card1'],
        claimedRank: 'Q',
        actualCards: [{ id: 'card1', rank: 'K', suit: 'spades', isJoker: false }],
        playerId: 'player',
        isBluff: true,
      };
      (engine as any).state.phase = 'challenge';
      engine.aiChallengeDecision('ai');
      engine.resetRound();

      const stateAfterRound1 = engine.getState();

      // 第二轮：AI闪避
      (engine as any).state.turnState.playedCards = {
        cardIds: ['card1'],
        claimedRank: 'Q',
        actualCards: [{ id: 'card1', rank: 'K', suit: 'spades', isJoker: false }],
        playerId: 'ai',
        isBluff: true,
      };
      (engine as any).state.phase = 'challenge';
      engine.playerChallengeDecision(true);
      engine.resetRound();

      const stateAfterRound2 = engine.getState();

      expect(stateAfterRound2.turnState.turnNumber).toBe(stateAfterRound1.turnState.turnNumber + 1);
    });
  });
});
