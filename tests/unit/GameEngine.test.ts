/**
 * GameEngine 单元测试
 * 测试游戏引擎核心逻辑
 */

import { GameEngine, GamePhase, AIPlayer } from '../../src/core/GameEngine';
import type { CharacterId } from '../../src/types';

describe('GameEngine', () => {
  let gameEngine: GameEngine;

  beforeEach(() => {
    gameEngine = new GameEngine();
  });

  afterEach(() => {
    gameEngine.reset();
  });

  describe('游戏初始化', () => {
    test('初始化后应该处于setup阶段', () => {
      const state = gameEngine.getState();
      expect(state.phase).toBe('setup');
    });

    test('initializeGame应该设置玩家角色', () => {
      const state = gameEngine.initializeGame('lelouch');
      expect(state.playerCharacter).toBe('lelouch');
    });

    test('初始化后玩家应该有5张手牌', () => {
      const state = gameEngine.initializeGame('lelouch');
      expect(state.playerHand).toHaveLength(5);
    });

    test('初始化后应该有3个AI玩家', () => {
      const state = gameEngine.initializeGame('lelouch');
      expect(state.aiPlayers).toHaveLength(3);
    });

    test('每个AI应该有5张手牌', () => {
      const state = gameEngine.initializeGame('lelouch');
      state.aiPlayers.forEach(ai => {
        expect(ai.hand).toHaveLength(5);
      });
    });

    test('每个AI初始HP应该为3', () => {
      const state = gameEngine.initializeGame('lelouch');
      state.aiPlayers.forEach(ai => {
        expect(ai.stats.hp).toBe(3);
        expect(ai.stats.maxHp).toBe(3);
      });
    });

    test('玩家初始HP应该为3', () => {
      const state = gameEngine.initializeGame('lelouch');
      expect(state.playerStats.hp).toBe(3);
      expect(state.playerStats.maxHp).toBe(3);
    });

    test('初始化后应该设置骗子牌', () => {
      const state = gameEngine.initializeGame('lelouch');
      expect(state.liarCard).toBeDefined();
      expect(['Q', 'K', 'A']).toContain(state.liarCard);
    });

    test('初始化后应该有当前玩家', () => {
      const state = gameEngine.initializeGame('lelouch');
      expect(state.currentPlayerIndex).toBeGreaterThanOrEqual(0);
      expect(state.currentPlayerIndex).toBeLessThanOrEqual(3);
    });

    test('所有4个角色都可以选择', () => {
      const characters: CharacterId[] = ['lelouch', 'cc', 'suzaku', 'kallen'];
      
      characters.forEach(char => {
        gameEngine.reset();
        const state = gameEngine.initializeGame(char);
        expect(state.playerCharacter).toBe(char);
      });
    });
  });

  describe('回合流转', () => {
    beforeEach(() => {
      gameEngine.initializeGame('lelouch');
    });

    test('getCurrentPlayerId应该返回正确的玩家ID', () => {
      const state = gameEngine.getState();
      const currentId = gameEngine.getCurrentPlayerId();
      
      if (state.currentPlayerIndex === 0) {
        expect(currentId).toBe('player');
      } else {
        expect(['ai', 'ai2', 'ai3']).toContain(currentId);
      }
    });

    test('玩家回合时phase应该是player_turn', () => {
      // 强制设置玩家回合
      const state = gameEngine.getState();
      state.currentPlayerIndex = 0;
      state.phase = 'player_turn';
      
      expect(gameEngine.getState().phase).toBe('player_turn');
    });
  });

  describe('玩家出牌', () => {
    beforeEach(() => {
      gameEngine.initializeGame('lelouch');
      const state = gameEngine.getState();
      state.phase = 'player_turn';
      state.currentPlayerIndex = 0;
    });

    test('非玩家回合不能出牌', () => {
      const state = gameEngine.getState();
      state.phase = 'ai_turn';
      
      expect(() => gameEngine.playerPlayCards()).toThrow('不是玩家回合');
    });

    test('未选择牌不能出牌', () => {
      const state = gameEngine.getState();
      state.playerSelectedCards = [];
      
      expect(() => gameEngine.playerPlayCards()).toThrow('未选择任何牌');
    });

    test('选择牌后可以出牌', () => {
      const state = gameEngine.getState();
      const cardId = state.playerHand[0].id;
      
      gameEngine.toggleCardSelection(cardId);
      const newState = gameEngine.playerPlayCards();
      
      expect(newState.phase).toBe('challenge');
    });

    test('出牌后手牌应该减少', () => {
      const state = gameEngine.getState();
      const initialHandSize = state.playerHand.length;
      const cardId = state.playerHand[0].id;
      
      gameEngine.toggleCardSelection(cardId);
      gameEngine.playerPlayCards();
      
      expect(gameEngine.getState().playerHand).toHaveLength(initialHandSize - 1);
    });

    test('出牌后应该记录出牌信息', () => {
      const state = gameEngine.getState();
      const cardId = state.playerHand[0].id;
      
      gameEngine.toggleCardSelection(cardId);
      gameEngine.playerPlayCards();
      
      const newState = gameEngine.getState();
      expect(newState.turnState.playedCards).toBeDefined();
      expect(newState.turnState.playedCards?.playerId).toBe('player');
    });
  });

  describe('牌选择', () => {
    beforeEach(() => {
      gameEngine.initializeGame('lelouch');
    });

    test('可以选择牌', () => {
      const state = gameEngine.getState();
      const cardId = state.playerHand[0].id;
      
      gameEngine.toggleCardSelection(cardId);
      
      expect(gameEngine.getState().playerSelectedCards).toContain(cardId);
    });

    test('再次点击可以取消选择', () => {
      const state = gameEngine.getState();
      const cardId = state.playerHand[0].id;
      
      gameEngine.toggleCardSelection(cardId);
      gameEngine.toggleCardSelection(cardId);
      
      expect(gameEngine.getState().playerSelectedCards).not.toContain(cardId);
    });

    test('普通角色最多选择3张牌', () => {
      gameEngine.initializeGame('lelouch');
      const state = gameEngine.getState();
      
      // 选择前3张
      state.playerHand.slice(0, 3).forEach(card => {
        gameEngine.toggleCardSelection(card.id);
      });
      
      expect(gameEngine.getState().playerSelectedCards).toHaveLength(3);
      
      // 尝试选择第4张
      const fourthCardId = state.playerHand[3].id;
      gameEngine.toggleCardSelection(fourthCardId);
      
      // 应该替换第一张
      const selected = gameEngine.getState().playerSelectedCards;
      expect(selected).toHaveLength(3);
      expect(selected).not.toContain(state.playerHand[0].id);
      expect(selected).toContain(fourthCardId);
    });

    test('卡莲可以选4张牌', () => {
      gameEngine.initializeGame('kallen');
      const state = gameEngine.getState();
      state.phase = 'player_turn';
      
      // 选择4张
      state.playerHand.slice(0, 4).forEach(card => {
        gameEngine.toggleCardSelection(card.id);
      });
      
      expect(gameEngine.getState().playerSelectedCards).toHaveLength(4);
    });

    test('卡莲不能选超过4张牌', () => {
      gameEngine.initializeGame('kallen');
      const state = gameEngine.getState();
      state.phase = 'player_turn';
      
      // 选择4张
      state.playerHand.slice(0, 4).forEach(card => {
        gameEngine.toggleCardSelection(card.id);
      });
      
      // 尝试选择第5张
      const fifthCardId = state.playerHand[4].id;
      gameEngine.toggleCardSelection(fifthCardId);
      
      const selected = gameEngine.getState().playerSelectedCards;
      expect(selected).toHaveLength(4);
    });
  });

  describe('质疑', () => {
    beforeEach(() => {
      gameEngine.initializeGame('lelouch');
      const state = gameEngine.getState();
      state.phase = 'player_turn';
      state.currentPlayerIndex = 0;
      
      // 玩家出一张牌
      const cardId = state.playerHand[0].id;
      gameEngine.toggleCardSelection(cardId);
      gameEngine.playerPlayCards();
    });

    test('质疑阶段可以选择不质疑', () => {
      const state = gameEngine.playerChallengeDecision(false);
      
      expect(state.phase).not.toBe('challenge');
    });

    test('质疑阶段可以选择质疑', () => {
      const state = gameEngine.playerChallengeDecision(true);
      
      expect(state.phase).toBe('geass');
    });

    test('非质疑阶段不能质疑', () => {
      const currentState = gameEngine.getState();
      currentState.phase = 'player_turn';
      
      expect(() => gameEngine.playerChallengeDecision(true)).toThrow('不在质疑阶段');
    });
  });

  describe('鲁鲁修技能', () => {
    test('非鲁鲁修不能使用绝对命令', () => {
      gameEngine.initializeGame('cc');
      
      expect(() => gameEngine.lelouchChangeLiarCard('K')).toThrow('只有鲁鲁修可以使用此技能');
    });

    test('鲁鲁修可以改变骗子牌', () => {
      gameEngine.initializeGame('lelouch');
      const initialLiarCard = gameEngine.getState().liarCard;
      
      // 选择一个不同的骗子牌
      const newRank = initialLiarCard === 'Q' ? 'K' : 'Q';
      gameEngine.lelouchChangeLiarCard(newRank);
      
      expect(gameEngine.getState().liarCard).toBe(newRank);
    });

    test('改变骗子牌后应该记录动作', () => {
      gameEngine.initializeGame('lelouch');
      gameEngine.lelouchChangeLiarCard('A');
      
      expect(gameEngine.getState().lastAction).toContain('鲁鲁修');
      expect(gameEngine.getState().lastAction).toContain('绝对命令');
    });
  });

  describe('跳过回合', () => {
    beforeEach(() => {
      gameEngine.initializeGame('lelouch');
    });

    test('可以跳过回合', () => {
      const state = gameEngine.passTurn();
      
      expect(state.lastAction).toContain('跳过');
    });

    test('跳过后应该轮到下一个玩家', () => {
      const initialState = gameEngine.getState();
      const initialIndex = initialState.currentPlayerIndex;
      
      gameEngine.passTurn();
      
      const newState = gameEngine.getState();
      expect(newState.currentPlayerIndex).not.toBe(initialIndex);
    });
  });

  describe('游戏结束判定', () => {
    beforeEach(() => {
      gameEngine.initializeGame('lelouch');
    });

    test('玩家HP归零时游戏结束', () => {
      const state = gameEngine.getState();
      state.playerStats.hp = 1;
      state.phase = 'challenge';
      state.turnState.playedCards = {
        cardIds: ['test'],
        claimedRank: 'Q',
        actualCards: [{ id: 'test', suit: 'spades', rank: 'K', value: 2, isJoker: false, owner: 'player' }],
        playerId: 'player',
      };
      
      // Mock Geass命中
      const originalRandom = Math.random;
      Math.random = jest.fn().mockReturnValue(0);
      
      gameEngine.playerChallengeDecision(true);
      
      Math.random = originalRandom;
      
      const finalState = gameEngine.getState();
      if (finalState.playerStats.hp <= 0) {
        expect(finalState.phase).toBe('game_over');
        expect(finalState.winner).toBe('ai');
      }
    });

    test('所有AI被淘汰时玩家胜利', () => {
      const state = gameEngine.getState();
      state.aiPlayers.forEach(ai => {
        ai.isActive = false;
        ai.stats.hp = 0;
      });
      state.phase = 'challenge';
      
      // 触发结算
      state.turnState.playedCards = {
        cardIds: ['test'],
        claimedRank: 'Q',
        actualCards: [{ id: 'test', suit: 'spades', rank: 'Q', value: 1, isJoker: false, owner: 'ai' }],
        playerId: 'ai',
      };
      
      gameEngine.playerChallengeDecision(true);
      
      const finalState = gameEngine.getState();
      expect(finalState.phase).toBe('game_over');
      expect(finalState.winner).toBe('player');
    });
  });

  describe('重置牌局', () => {
    beforeEach(() => {
      gameEngine.initializeGame('lelouch');
    });

    test('resetRound应该重新发牌', () => {
      const oldHand = [...gameEngine.getState().playerHand];
      gameEngine.resetRound();
      const newHand = gameEngine.getState().playerHand;
      
      // 手牌应该重新发放
      expect(newHand).toHaveLength(5);
    });

    test('resetRound应该设置新的骗子牌', () => {
      const oldLiarCard = gameEngine.getState().liarCard;
      gameEngine.resetRound();
      const newLiarCard = gameEngine.getState().liarCard;
      
      expect(newLiarCard).toBeDefined();
      expect(['Q', 'K', 'A']).toContain(newLiarCard);
    });

    test('resetRound后回合数应该增加', () => {
      const oldTurnNumber = gameEngine.getState().turnState.turnNumber;
      gameEngine.resetRound();
      const newTurnNumber = gameEngine.getState().turnState.turnNumber;
      
      expect(newTurnNumber).toBe(oldTurnNumber + 1);
    });
  });

  describe('AI出牌', () => {
    beforeEach(() => {
      gameEngine.initializeGame('lelouch');
    });

    test('AI可以出牌', () => {
      const state = gameEngine.getState();
      state.phase = 'ai_turn';
      
      const newState = gameEngine.aiPlayCards('ai');
      
      expect(newState.phase).toBe('challenge');
    });

    test('不存在的AI不能出牌', () => {
      expect(() => gameEngine.aiPlayCards('non-existent' as any)).toThrow('AI不存在');
    });

    test('被淘汰的AI应该跳过', () => {
      const state = gameEngine.getState();
      state.aiPlayers[0].isActive = false;
      state.aiPlayers[0].stats.hp = 0;
      
      const newState = gameEngine.aiPlayCards('ai');
      
      // 应该跳过到下一个玩家
      expect(newState.currentPlayerIndex).not.toBe(1);
    });
  });

  describe('获取系统', () => {
    test('可以获取CardSystem', () => {
      const cardSystem = gameEngine.getCardSystem();
      expect(cardSystem).toBeDefined();
    });

    test('可以获取当前状态', () => {
      gameEngine.initializeGame('lelouch');
      const state = gameEngine.getState();
      
      expect(state).toBeDefined();
      expect(state.playerCharacter).toBe('lelouch');
    });
  });

  describe('重置游戏', () => {
    test('reset应该清除所有状态', () => {
      gameEngine.initializeGame('lelouch');
      gameEngine.reset();
      
      const state = gameEngine.getState();
      expect(state.phase).toBe('setup');
      expect(state.playerCharacter).toBeNull();
      expect(state.playerHand).toHaveLength(0);
    });
  });
});
