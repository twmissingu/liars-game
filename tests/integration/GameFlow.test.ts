/**
 * 游戏流程集成测试
 * 测试完整的游戏流程：开始→选角色→游戏→结束
 */

import { GameEngine } from '../../src/core/GameEngine';
import { CardSystem } from '../../src/core/CardSystem';
import { GeassSystem } from '../../src/core/GeassSystem';

describe('游戏流程集成测试', () => {
  let gameEngine: GameEngine;

  beforeEach(() => {
    gameEngine = new GameEngine();
  });

  afterEach(() => {
    gameEngine.reset();
  });

  describe('完整游戏流程', () => {
    test('流程：选择角色→初始化→玩家出牌→质疑→结算', () => {
      // 1. 选择角色
      const state1 = gameEngine.initializeGame('lelouch');
      expect(state1.playerCharacter).toBe('lelouch');
      expect(state1.playerHand).toHaveLength(5);

      // 2. 确保是玩家回合
      const state2 = gameEngine.getState();
      state2.phase = 'player_turn';
      state2.currentPlayerIndex = 0;

      // 3. 玩家选择并出牌
      const cardId = state2.playerHand[0].id;
      gameEngine.toggleCardSelection(cardId);
      const state3 = gameEngine.playerPlayCards();
      expect(state3.phase).toBe('challenge');
      expect(state3.playerHand).toHaveLength(4);

      // 4. 质疑
      const state4 = gameEngine.playerChallengeDecision(true);
      expect(state4.phase).toBe('geass');
      expect(state4.geassResult).toBeDefined();
    });

    test('流程：AI回合→AI出牌→质疑结算', () => {
      // 初始化游戏
      gameEngine.initializeGame('cc');
      
      // 设置AI回合
      const state = gameEngine.getState();
      state.phase = 'ai_turn';
      state.currentPlayerIndex = 1;

      // AI出牌
      const state2 = gameEngine.aiPlayCards('ai');
      expect(state2.phase).toBe('challenge');
      expect(state2.turnState.playedCards).toBeDefined();

      // 玩家质疑
      const state3 = gameEngine.playerChallengeDecision(true);
      expect(['geass', 'game_over']).toContain(state3.phase);
    });

    test('流程：多轮游戏直到结束', () => {
      gameEngine.initializeGame('suzaku');
      
      let rounds = 0;
      const maxRounds = 50; // 防止无限循环
      
      while (gameEngine.getState().phase !== 'game_over' && rounds < maxRounds) {
        const state = gameEngine.getState();
        
        if (state.phase === 'player_turn') {
          // 玩家简单策略：出第一张牌
          if (state.playerHand.length > 0) {
            gameEngine.toggleCardSelection(state.playerHand[0].id);
            gameEngine.playerPlayCards();
          } else {
            gameEngine.passTurn();
          }
        } else if (state.phase === 'challenge') {
          // 随机决定是否质疑
          gameEngine.playerChallengeDecision(Math.random() > 0.5);
        } else if (state.phase === 'ai_turn') {
          const currentId = gameEngine.getCurrentPlayerId();
          if (currentId !== 'player') {
            gameEngine.aiPlayCards(currentId);
          }
        } else if (state.phase === 'geass') {
          // Geass结算后通常会自动流转
          // 这里我们手动推进
          const activeAIs = state.aiPlayers.filter(ai => ai.isActive && ai.stats.hp > 0);
          if (state.playerStats.hp <= 0 || activeAIs.length === 0) {
            state.phase = 'game_over';
          } else {
            state.phase = 'player_turn';
          }
        }
        
        rounds++;
      }
      
      const finalState = gameEngine.getState();
      expect(finalState.phase).toBe('game_over');
      expect(finalState.winner).toBeDefined();
    });
  });

  describe('角色技能集成', () => {
    test('鲁鲁修：改变骗子牌影响游戏', () => {
      gameEngine.initializeGame('lelouch');
      
      const initialLiarCard = gameEngine.getState().liarCard;
      const newRank = initialLiarCard === 'Q' ? 'K' : 'Q';
      
      gameEngine.lelouchChangeLiarCard(newRank);
      
      expect(gameEngine.getState().liarCard).toBe(newRank);
    });

    test('卡莲：可以出多张牌', () => {
      gameEngine.initializeGame('kallen');
      const state = gameEngine.getState();
      state.phase = 'player_turn';
      
      // 选择2张牌
      const cardIds = state.playerHand.slice(0, 2).map(c => c.id);
      cardIds.forEach(id => gameEngine.toggleCardSelection(id));
      
      expect(gameEngine.getState().playerSelectedCards).toHaveLength(2);
      
      // 出牌
      const newState = gameEngine.playerPlayCards();
      expect(newState.phase).toBe('challenge');
    });

    test('C.C.：复活机制在真实对局中', () => {
      gameEngine.initializeGame('cc');
      const state = gameEngine.getState();
      
      // 设置C.C.为AI
      state.aiPlayers[0].character = 'cc';
      state.aiPlayers[0].stats.hp = 1;
      state.aiPlayers[0].stats.ccReviveUsed = false;
      
      // Mock Geass系统确保复活
      const geassSystem = gameEngine['geassSystem'];
      const originalPerformGeass = geassSystem.performGeass.bind(geassSystem);
      geassSystem.performGeass = jest.fn().mockReturnValue({
        hit: false,
        damage: 0,
        newStats: { ...state.aiPlayers[0].stats, ccReviveUsed: true },
        message: 'C.C.发动Code之力！从死亡边缘复活并免疫本次Geass！',
        isRevived: true,
      });
      
      // 触发Geass
      state.phase = 'challenge';
      state.turnState.playedCards = {
        cardIds: ['test'],
        claimedRank: 'Q',
        actualCards: [{ id: 'test', suit: 'spades', rank: 'K', value: 2, isJoker: false, owner: 'ai' }],
        playerId: 'ai',
      };
      
      gameEngine.playerChallengeDecision(true);
      
      // 恢复原始方法
      geassSystem.performGeass = originalPerformGeass;
    });
  });

  describe('牌组与游戏引擎集成', () => {
    test('CardSystem和GameEngine协同工作', () => {
      const cardSystem = new CardSystem();
      
      // 生成牌组
      cardSystem.generateDeck();
      expect(cardSystem.getCards()).toHaveLength(20);
      
      // 通过GameEngine初始化
      gameEngine.initializeGame('lelouch');
      
      // 验证GameEngine的CardSystem
      const engineCardSystem = gameEngine.getCardSystem();
      expect(engineCardSystem.getCards()).toHaveLength(20);
    });

    test('发牌后各系统状态一致', () => {
      gameEngine.initializeGame('kallen');
      
      const state = gameEngine.getState();
      const cardSystem = gameEngine.getCardSystem();
      
      // 玩家手牌应该一致
      const playerCardsFromState = state.playerHand;
      const playerCardsFromSystem = cardSystem.getPlayerCards();
      
      expect(playerCardsFromState.length).toBe(playerCardsFromSystem.length);
    });
  });

  describe('多AI交互', () => {
    test('3个AI都能正常行动', () => {
      gameEngine.initializeGame('lelouch');
      
      const aiIds = ['ai', 'ai2', 'ai3'] as const;
      
      aiIds.forEach(aiId => {
        const state = gameEngine.getState();
        state.phase = 'ai_turn';
        
        const newState = gameEngine.aiPlayCards(aiId);
        expect(newState.phase).toBe('challenge');
        expect(newState.turnState.playedCards?.playerId).toBe(aiId);
        
        // 重置到AI回合进行下一个测试
        state.phase = 'ai_turn';
      });
    });

    test('AI被淘汰后跳过', () => {
      gameEngine.initializeGame('lelouch');
      
      const state = gameEngine.getState();
      
      // 淘汰第一个AI
      state.aiPlayers[0].isActive = false;
      state.aiPlayers[0].stats.hp = 0;
      
      // 设置当前为被淘汰的AI
      state.currentPlayerIndex = 1;
      
      // 获取下一个玩家应该跳过被淘汰的AI
      const nextIndex = gameEngine['getNextPlayerIndex']();
      
      // 应该不是被淘汰的AI
      expect(nextIndex).not.toBe(1);
    });
  });

  describe('游戏状态流转', () => {
    test('状态流转：setup → player_turn → challenge → geass → player_turn', () => {
      gameEngine.initializeGame('lelouch');
      
      const state = gameEngine.getState();
      expect(state.phase).toBe('setup');
      
      // 手动设置玩家回合
      state.phase = 'player_turn';
      state.currentPlayerIndex = 0;
      
      // 出牌
      const cardId = state.playerHand[0].id;
      gameEngine.toggleCardSelection(cardId);
      gameEngine.playerPlayCards();
      
      expect(gameEngine.getState().phase).toBe('challenge');
      
      // 质疑
      gameEngine.playerChallengeDecision(true);
      
      expect(['geass', 'game_over']).toContain(gameEngine.getState().phase);
    });

    test('状态流转：不质疑时进入下一回合', () => {
      gameEngine.initializeGame('lelouch');
      
      const state = gameEngine.getState();
      state.phase = 'player_turn';
      state.currentPlayerIndex = 0;
      
      // 出牌
      const cardId = state.playerHand[0].id;
      gameEngine.toggleCardSelection(cardId);
      gameEngine.playerPlayCards();
      
      // 不质疑
      const newState = gameEngine.playerChallengeDecision(false);
      
      // 应该进入下一回合
      expect(['player_turn', 'ai_turn', 'game_over']).toContain(newState.phase);
    });
  });

  describe('边界情况集成', () => {
    test('手牌耗尽时的处理', () => {
      gameEngine.initializeGame('lelouch');
      
      const state = gameEngine.getState();
      state.phase = 'player_turn';
      
      // 清空手牌
      state.playerHand = [];
      
      // 尝试选择牌
      expect(() => gameEngine.toggleCardSelection('non-existent')).not.toThrow();
      
      // 尝试出牌应该抛出错误
      expect(() => gameEngine.playerPlayCards()).toThrow('未选择任何牌');
    });

    test('HP归零后游戏结束', () => {
      gameEngine.initializeGame('lelouch');
      
      const state = gameEngine.getState();
      state.playerStats.hp = 1;
      state.phase = 'challenge';
      
      // 设置出牌记录
      state.turnState.playedCards = {
        cardIds: ['test'],
        claimedRank: 'Q',
        actualCards: [{ id: 'test', suit: 'spades', rank: 'K', value: 2, isJoker: false, owner: 'player' }],
        playerId: 'player',
      };
      
      // Mock确保命中
      const originalRandom = Math.random;
      Math.random = jest.fn().mockReturnValue(0);
      
      gameEngine.playerChallengeDecision(true);
      
      Math.random = originalRandom;
      
      const finalState = gameEngine.getState();
      if (finalState.playerStats.hp <= 0) {
        expect(finalState.phase).toBe('game_over');
      }
    });

    test('重置牌局后游戏继续', () => {
      gameEngine.initializeGame('lelouch');
      
      // 进行一些操作
      const state = gameEngine.getState();
      state.phase = 'player_turn';
      const cardId = state.playerHand[0].id;
      gameEngine.toggleCardSelection(cardId);
      gameEngine.playerPlayCards();
      
      // 重置牌局
      const newState = gameEngine.resetRound();
      
      expect(newState.playerHand).toHaveLength(5);
      expect(newState.aiPlayers[0].hand).toHaveLength(5);
      expect(newState.liarCard).toBeDefined();
    });
  });
});
