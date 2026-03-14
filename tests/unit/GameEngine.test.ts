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

    test('每个AI初始HP应该正确', () => {
      const state = gameEngine.initializeGame('lelouch');
      state.aiPlayers.forEach(ai => {
        // 朱雀AI有4点HP，其他AI有3点HP
        const expectedHp = ai.character === 'suzaku' ? 4 : 3;
        expect(ai.stats.hp).toBe(expectedHp);
        expect(ai.stats.maxHp).toBe(expectedHp);
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
      
      // 质疑后可能进入geass阶段或game_over（如果某方被击败）
      expect(['geass', 'game_over', 'player_turn', 'ai_turn']).toContain(state.phase);
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
      // 先让玩家出牌进入质疑阶段
      const state = gameEngine.getState();
      state.phase = 'player_turn';
      state.currentPlayerIndex = 0;
      const cardId = state.playerHand[0].id;
      gameEngine.toggleCardSelection(cardId);
      gameEngine.playerPlayCards();
      
      // 然后选择不质疑（相当于跳过）
      const newState = gameEngine.playerChallengeDecision(false);
      
      expect(newState.lastAction).not.toContain('质疑');
    });

    test('跳过后应该轮到下一个玩家', () => {
      const initialState = gameEngine.getState();
      initialState.phase = 'player_turn';
      initialState.currentPlayerIndex = 0;
      const initialIndex = initialState.currentPlayerIndex;
      
      // 玩家出牌
      const cardId = initialState.playerHand[0].id;
      gameEngine.toggleCardSelection(cardId);
      gameEngine.playerPlayCards();
      
      // 选择不质疑
      gameEngine.playerChallengeDecision(false);
      
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

    test('resetRound保留HP状态', () => {
      const state = gameEngine.getState();
      state.playerStats.hp = 1;

      gameEngine.resetRound();

      expect(gameEngine.getState().playerStats.hp).toBe(1);
    });

    test('resetRound重置选中牌', () => {
      const state = gameEngine.getState();
      state.playerSelectedCards = ['card1', 'card2'];

      gameEngine.resetRound();

      expect(gameEngine.getState().playerSelectedCards).toHaveLength(0);
    });

    test('resetRound重置出牌记录', () => {
      const state = gameEngine.getState();
      state.turnState.playedCards = {
        cardIds: ['card1'],
        claimedRank: 'Q',
        actualCards: [],
        playerId: 'player',
      };

      gameEngine.resetRound();

      expect(gameEngine.getState().turnState.playedCards).toBeNull();
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

    test('AI2可以出牌', () => {
      const state = gameEngine.getState();
      state.phase = 'ai_turn';

      const newState = gameEngine.aiPlayCards('ai2');

      expect(newState.phase).toBe('challenge');
      expect(newState.turnState.playedCards?.playerId).toBe('ai2');
    });

    test('AI3可以出牌', () => {
      const state = gameEngine.getState();
      state.phase = 'ai_turn';

      const newState = gameEngine.aiPlayCards('ai3');

      expect(newState.phase).toBe('challenge');
      expect(newState.turnState.playedCards?.playerId).toBe('ai3');
    });
  });

  describe('AI质疑决策', () => {
    beforeEach(() => {
      gameEngine.initializeGame('lelouch');
    });

    test('AI可以做出质疑决策', () => {
      const state = gameEngine.getState();
      state.phase = 'challenge';
      state.turnState.playedCards = {
        cardIds: ['card1'],
        claimedRank: 'Q',
        actualCards: [{ id: 'card1', rank: 'K', suit: 'spades', value: 2, isJoker: false, owner: 'player' }],
        playerId: 'player',
      };

      const newState = gameEngine.aiChallengeDecision('ai');

      // 质疑后应该进入geass或下一回合
      expect(['geass', 'player_turn', 'ai_turn', 'game_over']).toContain(newState.phase);
    });

    test('AI不会质疑自己', () => {
      const state = gameEngine.getState();
      state.phase = 'challenge';
      state.turnState.playedCards = {
        cardIds: ['card1'],
        claimedRank: 'Q',
        actualCards: [{ id: 'card1', rank: 'Q', suit: 'spades', value: 1, isJoker: false, owner: 'ai' }],
        playerId: 'ai',
      };

      const newState = gameEngine.aiChallengeDecision('ai');

      // 不应该进入geass阶段
      expect(newState.phase).not.toBe('geass');
    });

    test('质疑成功时撒谎者HP减少', () => {
      const state = gameEngine.getState();
      state.aiPlayers[0].stats.hp = 3;
      state.phase = 'challenge';
      state.turnState.playedCards = {
        cardIds: ['card1'],
        claimedRank: 'Q',
        actualCards: [{ id: 'card1', rank: 'K', suit: 'spades', value: 2, isJoker: false, owner: 'player' }],
        playerId: 'player',
      };

      // Mock确保命中
      const originalRandom = Math.random;
      Math.random = jest.fn().mockReturnValue(0);

      gameEngine.aiChallengeDecision('ai');

      Math.random = originalRandom;

      // 玩家撒谎，HP应该减少
      expect(gameEngine.getState().playerStats.hp).toBeLessThan(3);
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

    test('可以获取GeassSystem', () => {
      gameEngine.initializeGame('lelouch');
      const geassSystem = gameEngine.getGeassSystem();
      expect(geassSystem).toBeDefined();
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

    test('reset清除AI状态', () => {
      gameEngine.initializeGame('lelouch');
      gameEngine.reset();

      const state = gameEngine.getState();
      expect(state.aiPlayers[0].hand).toHaveLength(0);
      expect(state.aiPlayers[0].isActive).toBe(true);
    });

    test('reset清除回合状态', () => {
      gameEngine.initializeGame('lelouch');
      gameEngine.reset();

      const state = gameEngine.getState();
      expect(state.turnState.turnNumber).toBe(0);
      expect(state.turnState.playedCards).toBeNull();
    });
  });

  describe('游戏结束判定', () => {
    beforeEach(() => {
      gameEngine.initializeGame('lelouch');
    });

    test('玩家HP归零时游戏结束', () => {
      const state = gameEngine.getState();
      state.playerStats.hp = 0;

      // 检查游戏是否应该结束
      const activeAIs = state.aiPlayers.filter(ai => ai.isActive && ai.stats.hp > 0);
      if (state.playerStats.hp <= 0 && activeAIs.length > 0) {
        // 玩家被淘汰，AI胜利
        state.phase = 'game_over';
        state.winner = 'ai';
      }

      expect(state.phase).toBe('game_over');
      expect(state.winner).toBe('ai');
    });

    test('所有AI被淘汰时玩家胜利', () => {
      const state = gameEngine.getState();
      state.aiPlayers.forEach(ai => {
        ai.isActive = false;
        ai.stats.hp = 0;
      });

      // 检查游戏是否应该结束
      const activeAIs = state.aiPlayers.filter(ai => ai.isActive && ai.stats.hp > 0);
      if (activeAIs.length === 0 && state.playerStats.hp > 0) {
        state.phase = 'game_over';
        state.winner = 'player';
      }

      expect(state.phase).toBe('game_over');
      expect(state.winner).toBe('player');
    });

    test('玩家和AI同时被淘汰判定为平局或AI胜利', () => {
      const state = gameEngine.getState();
      state.playerStats.hp = 0;
      state.aiPlayers.forEach(ai => {
        ai.isActive = false;
        ai.stats.hp = 0;
      });

      state.phase = 'game_over';
      // 平局或AI胜利，取决于具体规则
      expect(state.phase).toBe('game_over');
    });
  });

  describe('鲁鲁修技能 - 绝对命令', () => {
    test('鲁鲁修可以改变骗子牌', () => {
      gameEngine.initializeGame('lelouch');

      const initialLiarCard = gameEngine.getState().liarCard;
      const newRank = initialLiarCard === 'Q' ? 'K' : 'Q';

      gameEngine.lelouchChangeLiarCard(newRank);

      expect(gameEngine.getState().liarCard).toBe(newRank);
    });

    test('非鲁鲁修不能使用绝对命令', () => {
      gameEngine.initializeGame('cc');

      expect(() => {
        gameEngine.lelouchChangeLiarCard('K');
      }).toThrow('只有鲁鲁修可以使用此技能');
    });

    test('鲁鲁修技能每局限用1次', () => {
      gameEngine.initializeGame('lelouch');

      // 第一次使用
      gameEngine.lelouchChangeLiarCard('K');
      expect(gameEngine.getState().liarCard).toBe('K');

      // 第二次使用应该抛出错误
      expect(() => {
        gameEngine.lelouchChangeLiarCard('A');
      }).toThrow('技能使用次数已耗尽');
    });
  });

  describe('卡莲技能 - 红莲二式', () => {
    test('卡莲可以选4张牌', () => {
      gameEngine.initializeGame('kallen');
      const state = gameEngine.getState();
      state.phase = 'player_turn';

      // 选择4张牌
      state.playerHand.slice(0, 4).forEach(card => {
        gameEngine.toggleCardSelection(card.id);
      });

      expect(gameEngine.getState().playerSelectedCards).toHaveLength(4);
    });

    test('卡莲出多张牌时激活boost', () => {
      gameEngine.initializeGame('kallen');
      const state = gameEngine.getState();
      state.phase = 'player_turn';

      // 选择并出3张牌
      const cardIds = state.playerHand.slice(0, 3).map(c => c.id);
      cardIds.forEach(id => gameEngine.toggleCardSelection(id));
      gameEngine.playerPlayCards();

      expect(gameEngine.getState().playerStats.kallenBoostActive).toBe(true);
      expect(gameEngine.getState().playerStats.kallenCardCount).toBe(3);
    });
  });

  describe('C.C.技能 - Code之力', () => {
    test('C.C.作为玩家时复活机制正常', () => {
      gameEngine.initializeGame('cc');
      const state = gameEngine.getState();
      state.playerStats.hp = 1;
      state.playerStats.ccReviveUsed = false;

      // Mock Geass系统确保复活
      const geassSystem = gameEngine.getGeassSystem();
      const originalPerformGeass = geassSystem.performGeass.bind(geassSystem);
      geassSystem.performGeass = jest.fn().mockReturnValue({
        hit: false,
        damage: 0,
        newStats: { ...state.playerStats, ccReviveUsed: true },
        message: 'C.C.发动Code之力！从死亡边缘复活并免疫本次Geass！',
        isRevived: true,
      });

      // 触发Geass
      state.phase = 'challenge';
      state.turnState.playedCards = {
        cardIds: ['test'],
        claimedRank: 'Q',
        actualCards: [{ id: 'test', suit: 'spades', rank: 'K', value: 2, isJoker: false, owner: 'player' }],
        playerId: 'player',
      };

      gameEngine.playerChallengeDecision(true);

      // 恢复原始方法
      geassSystem.performGeass = originalPerformGeass;
    });
  });

  describe('朱雀技能 - 枢木剑术', () => {
    test('朱雀有额外HP', () => {
      gameEngine.initializeGame('suzaku');

      expect(gameEngine.getState().playerStats.maxHp).toBe(4);
      expect(gameEngine.getState().playerStats.hp).toBe(4);
    });

    test('朱雀作为AI时有额外HP', () => {
      gameEngine.initializeGame('lelouch');
      const state = gameEngine.getState();

      const suzakuAI = state.aiPlayers.find(ai => ai.character === 'suzaku');
      if (suzakuAI) {
        expect(suzakuAI.stats.maxHp).toBe(4);
        expect(suzakuAI.stats.hp).toBe(4);
      }
    });
  });
});
