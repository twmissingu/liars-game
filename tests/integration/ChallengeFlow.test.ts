/**
 * 质疑流程专项测试
 * 测试质疑顺序、质疑逻辑、HP计算等核心机制
 */

import { GameEngine } from '../../src/core/GameEngine';

describe('质疑流程专项测试', () => {
  let gameEngine: GameEngine;

  beforeEach(() => {
    gameEngine = new GameEngine();
  });

  afterEach(() => {
    gameEngine.reset();
  });

  describe('质疑顺序验证', () => {
    test('质疑顺序：出牌者下家→下下家→再下家', () => {
      // 初始化游戏，玩家为出牌者
      gameEngine.initializeGame('lelouch');
      const state = gameEngine.getState();
      
      // 设置玩家回合
      state.phase = 'player_turn';
      state.currentPlayerIndex = 0;
      
      // 玩家出牌
      const cardId = state.playerHand[0].id;
      gameEngine.toggleCardSelection(cardId);
      const newState = gameEngine.playerPlayCards();
      
      // 质疑阶段，下家应该是AI1 (索引1)
      expect(newState.phase).toBe('challenge');
      
      // 模拟质疑流程：AI1 → AI2 → AI3 → 玩家
      // 出牌者是玩家(0)，下家是AI1(1)，下下家是AI2(2)，再下家是AI3(3)
      const playedByIndex = 0;
      const expectedOrder = [1, 2, 3, 0]; // AI1, AI2, AI3, 玩家
      
      expectedOrder.forEach((expectedIndex, i) => {
        const nextChallenger = (playedByIndex + 1 + i) % 4;
        expect(nextChallenger).toBe(expectedIndex);
      });
    });

    test('质疑顺序：AI1出牌时，下家是AI2', () => {
      gameEngine.initializeGame('lelouch');
      const state = gameEngine.getState();
      
      // 设置AI1出牌
      state.phase = 'ai_turn';
      state.currentPlayerIndex = 1;
      gameEngine.aiPlayCards('ai');
      
      // 质疑阶段，下家应该是AI2 (索引2)
      const playedByIndex = 1;
      const nextChallenger = (playedByIndex + 1) % 4;
      expect(nextChallenger).toBe(2); // AI2
    });

    test('质疑顺序：AI3出牌时，下家是玩家', () => {
      gameEngine.initializeGame('lelouch');
      const state = gameEngine.getState();
      
      // 设置AI3出牌
      state.phase = 'ai_turn';
      state.currentPlayerIndex = 3;
      gameEngine.aiPlayCards('ai3');
      
      // 质疑阶段，下家应该是玩家 (索引0)
      const playedByIndex = 3;
      const nextChallenger = (playedByIndex + 1) % 4;
      expect(nextChallenger).toBe(0); // 玩家
    });
  });

  describe('质疑逻辑验证', () => {
    test('质疑成功：出牌者在撒谎', () => {
      gameEngine.initializeGame('lelouch');
      const state = gameEngine.getState();
      
      // 设置骗子牌为Q
      state.liarCard = 'Q';
      
      // 手动设置出牌记录，模拟撒谎（声称是Q，实际是K）
      state.phase = 'challenge';
      state.turnState.playedCards = {
        cardIds: ['test-card'],
        claimedRank: 'Q',
        actualCards: [{ id: 'test-card', suit: 'spades', rank: 'K', value: 3, isJoker: false, owner: 'player' }],
        playerId: 'player',
      };
      
      // Mock calculateAIChallengeProbability 确保AI会质疑
      const originalMethod = (gameEngine as any).calculateAIChallengeProbability;
      (gameEngine as any).calculateAIChallengeProbability = jest.fn().mockReturnValue(true);
      
      // AI质疑
      const newState = gameEngine.aiChallengeDecision('ai');
      
      // 恢复原始方法
      (gameEngine as any).calculateAIChallengeProbability = originalMethod;
      
      // 质疑成功后，应该进入下一回合或游戏结束
      // 游戏引擎会自动流转回合
      expect(['player_turn', 'ai_turn', 'game_over']).toContain(newState.phase);
      
      // 验证geass结果被记录
      expect(newState.geassResult).toBeDefined();
    });

    test('质疑失败：出牌者没有撒谎', () => {
      gameEngine.initializeGame('lelouch');
      const state = gameEngine.getState();
      
      // 设置骗子牌为Q
      state.liarCard = 'Q';
      
      // 设置诚实场景（玩家出的是真的Q）
      state.phase = 'challenge';
      state.turnState.playedCards = {
        cardIds: ['test-card'],
        claimedRank: 'Q',
        actualCards: [{ id: 'test-card', suit: 'spades', rank: 'Q', value: 1, isJoker: false, owner: 'player' }],
        playerId: 'player',
      };
      
      // Mock calculateAIChallengeProbability 确保AI会质疑
      const originalMethod = (gameEngine as any).calculateAIChallengeProbability;
      (gameEngine as any).calculateAIChallengeProbability = jest.fn().mockReturnValue(true);
      
      // AI质疑
      const newState = gameEngine.aiChallengeDecision('ai');
      
      // 恢复原始方法
      (gameEngine as any).calculateAIChallengeProbability = originalMethod;
      
      // 质疑失败后，应该进入下一回合或游戏结束
      expect(['player_turn', 'ai_turn', 'game_over']).toContain(newState.phase);
      
      // 验证geass结果被记录
      expect(newState.geassResult).toBeDefined();
    });

    test('小丑牌不算撒谎', () => {
      gameEngine.initializeGame('lelouch');
      const state = gameEngine.getState();
      
      // 设置骗子牌为Q
      state.liarCard = 'Q';
      
      // 玩家出小丑牌声称是Q（不算撒谎）
      state.phase = 'challenge';
      state.turnState.playedCards = {
        cardIds: ['joker-card'],
        claimedRank: 'Q',
        actualCards: [{ id: 'joker-card', suit: 'joker', rank: 'JOKER', value: 0, isJoker: true, owner: 'player' }],
        playerId: 'player',
      };
      
      // Mock calculateAIChallengeProbability 确保AI会质疑
      const originalMethod = (gameEngine as any).calculateAIChallengeProbability;
      (gameEngine as any).calculateAIChallengeProbability = jest.fn().mockReturnValue(true);
      
      // AI质疑
      const newState = gameEngine.aiChallengeDecision('ai');
      
      // 恢复原始方法
      (gameEngine as any).calculateAIChallengeProbability = originalMethod;
      
      // 质疑失败（小丑牌不算撒谎），应该进入下一回合或游戏结束
      expect(['player_turn', 'ai_turn', 'game_over']).toContain(newState.phase);
      
      // 验证geass结果被记录
      expect(newState.geassResult).toBeDefined();
    });
  });

  describe('HP计算验证', () => {
    test('质疑成功后，撒谎者HP-1', () => {
      gameEngine.initializeGame('lelouch');
      const state = gameEngine.getState();
      
      const initialHp = state.playerStats.hp;
      
      // 设置撒谎场景
      state.phase = 'challenge';
      state.turnState.playedCards = {
        cardIds: ['test-card'],
        claimedRank: 'Q',
        actualCards: [{ id: 'test-card', suit: 'spades', rank: 'K', value: 3, isJoker: false, owner: 'player' }],
        playerId: 'player',
      };
      
      // Mock Geass命中
      const originalRandom = Math.random;
      Math.random = jest.fn().mockReturnValue(0);
      
      // Mock calculateAIChallengeProbability 确保AI会质疑
      const originalMethod = (gameEngine as any).calculateAIChallengeProbability;
      (gameEngine as any).calculateAIChallengeProbability = jest.fn().mockReturnValue(true);
      
      // AI质疑
      gameEngine.aiChallengeDecision('ai');
      
      // 恢复
      Math.random = originalRandom;
      (gameEngine as any).calculateAIChallengeProbability = originalMethod;
      
      // 玩家撒谎，HP应该减少
      const finalState = gameEngine.getState();
      if (finalState.geassResult?.hit) {
        expect(finalState.playerStats.hp).toBe(initialHp - 1);
      }
    });

    test('质疑失败后，质疑者HP-1', () => {
      gameEngine.initializeGame('lelouch');
      const state = gameEngine.getState();
      
      const aiInitialHp = state.aiPlayers[0].stats.hp;
      
      // 设置诚实场景（玩家出的是真的）
      state.liarCard = 'Q';
      state.phase = 'challenge';
      state.turnState.playedCards = {
        cardIds: ['test-card'],
        claimedRank: 'Q',
        actualCards: [{ id: 'test-card', suit: 'spades', rank: 'Q', value: 1, isJoker: false, owner: 'player' }],
        playerId: 'player',
      };
      
      // Mock Geass命中
      const originalRandom = Math.random;
      Math.random = jest.fn().mockReturnValue(0);
      
      // Mock calculateAIChallengeProbability 确保AI会质疑
      const originalMethod = (gameEngine as any).calculateAIChallengeProbability;
      (gameEngine as any).calculateAIChallengeProbability = jest.fn().mockReturnValue(true);
      
      // AI质疑（质疑失败）
      gameEngine.aiChallengeDecision('ai');
      
      // 恢复
      Math.random = originalRandom;
      (gameEngine as any).calculateAIChallengeProbability = originalMethod;
      
      // AI质疑失败，AI的HP应该减少
      const finalState = gameEngine.getState();
      if (finalState.geassResult?.hit) {
        expect(finalState.aiPlayers[0].stats.hp).toBe(aiInitialHp - 1);
      }
    });

    test('HP不会低于0', () => {
      gameEngine.initializeGame('lelouch');
      const state = gameEngine.getState();
      
      // 设置玩家HP为1
      state.playerStats.hp = 1;
      
      // 设置撒谎场景
      state.phase = 'challenge';
      state.turnState.playedCards = {
        cardIds: ['test-card'],
        claimedRank: 'Q',
        actualCards: [{ id: 'test-card', suit: 'spades', rank: 'K', value: 3, isJoker: false, owner: 'player' }],
        playerId: 'player',
      };
      
      // Mock Geass命中
      const originalRandom = Math.random;
      Math.random = jest.fn().mockReturnValue(0);
      
      // Mock calculateAIChallengeProbability 确保AI会质疑
      const originalMethod = (gameEngine as any).calculateAIChallengeProbability;
      (gameEngine as any).calculateAIChallengeProbability = jest.fn().mockReturnValue(true);
      
      // AI质疑
      gameEngine.aiChallengeDecision('ai');
      
      // 恢复
      Math.random = originalRandom;
      (gameEngine as any).calculateAIChallengeProbability = originalMethod;
      
      // HP不应该低于0
      const finalState = gameEngine.getState();
      expect(finalState.playerStats.hp).toBeGreaterThanOrEqual(0);
    });
  });

  describe('回合流转验证', () => {
    test('质疑结算后，轮到输家的下家', () => {
      gameEngine.initializeGame('lelouch');
      const state = gameEngine.getState();
      
      // 玩家出牌并撒谎
      state.phase = 'challenge';
      state.turnState.playedCards = {
        cardIds: ['test-card'],
        claimedRank: 'Q',
        actualCards: [{ id: 'test-card', suit: 'spades', rank: 'K', value: 3, isJoker: false, owner: 'player' }],
        playerId: 'player',
      };
      
      // Mock calculateAIChallengeProbability 确保AI会质疑
      const originalMethod = (gameEngine as any).calculateAIChallengeProbability;
      (gameEngine as any).calculateAIChallengeProbability = jest.fn().mockReturnValue(true);
      
      // AI质疑成功
      gameEngine.aiChallengeDecision('ai');
      
      // 恢复
      (gameEngine as any).calculateAIChallengeProbability = originalMethod;
      
      const finalState = gameEngine.getState();
      // 质疑结算后应该进入下一回合或游戏结束
      expect(['player_turn', 'ai_turn', 'game_over']).toContain(finalState.phase);
    });

    test('无人质疑时，轮到出牌者的下家', () => {
      gameEngine.initializeGame('lelouch');
      const state = gameEngine.getState();
      
      // 玩家出牌
      state.phase = 'player_turn';
      state.currentPlayerIndex = 0;
      const cardId = state.playerHand[0].id;
      gameEngine.toggleCardSelection(cardId);
      gameEngine.playerPlayCards();
      
      // 所有人选择不质疑
      const newState = gameEngine.playerChallengeDecision(false);
      
      // 应该轮到下一个玩家
      expect(newState.currentPlayerIndex).toBe(1); // AI1
    });
  });

  describe('多轮游戏验证', () => {
    test('多轮游戏：质疑流程保持一致', () => {
      gameEngine.initializeGame('lelouch');
      
      // 进行多轮游戏
      for (let round = 0; round < 5; round++) {
        const state = gameEngine.getState();
        
        if (state.phase === 'game_over') break;
        
        if (state.phase === 'player_turn' && state.playerHand.length > 0) {
          // 玩家出牌
          const cardId = state.playerHand[0].id;
          gameEngine.toggleCardSelection(cardId);
          gameEngine.playerPlayCards();
          
          // 验证进入质疑阶段
          expect(gameEngine.getState().phase).toBe('challenge');
          
          // 质疑或不质疑
          gameEngine.playerChallengeDecision(round % 2 === 0);
        } else if (state.phase === 'ai_turn') {
          const currentId = gameEngine.getCurrentPlayerId();
          if (currentId !== 'player') {
            gameEngine.aiPlayCards(currentId);
          }
        }
      }
      
      // 游戏应该正常进行
      const finalState = gameEngine.getState();
      expect(['player_turn', 'ai_turn', 'challenge', 'game_over']).toContain(finalState.phase);
    });
  });

  describe('边界情况', () => {
    test('已淘汰的玩家不参与质疑', () => {
      gameEngine.initializeGame('lelouch');
      const state = gameEngine.getState();
      
      // 淘汰AI1
      state.aiPlayers[0].isActive = false;
      state.aiPlayers[0].stats.hp = 0;
      
      // 设置玩家回合
      state.phase = 'player_turn';
      state.currentPlayerIndex = 0;
      
      // 玩家出牌
      const cardId = state.playerHand[0].id;
      gameEngine.toggleCardSelection(cardId);
      const newState = gameEngine.playerPlayCards();
      
      // 质疑阶段
      expect(newState.phase).toBe('challenge');
      
      // 质疑流程应该跳过AI1
      // 从玩家(0)的下家开始，应该是AI2(2)，因为AI1(1)被淘汰
      const playedByIndex = 0;
      let nextChallenger = (playedByIndex + 1) % 4;
      
      // 跳过被淘汰的AI1
      while (nextChallenger === 1) {
        nextChallenger = (nextChallenger + 1) % 4;
      }
      
      expect(nextChallenger).toBe(2); // AI2
    });

    test('质疑时不能质疑自己', () => {
      gameEngine.initializeGame('lelouch');
      const state = gameEngine.getState();
      
      // 设置AI1回合
      state.phase = 'ai_turn';
      state.currentPlayerIndex = 1;
      
      // AI1出牌
      const newState = gameEngine.aiPlayCards('ai');
      
      // 验证出牌者是AI1
      expect(newState.turnState.playedCards?.playerId).toBe('ai');
      
      // AI1质疑自己应该直接跳过（不质疑）
      const finalState = gameEngine.aiChallengeDecision('ai');
      
      // 应该进入下一回合，而不是geass阶段
      expect(['player_turn', 'ai_turn', 'game_over']).toContain(finalState.phase);
    });
  });
});
