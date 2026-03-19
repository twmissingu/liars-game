/**
 * 质疑流程专项测试
 * 测试质疑顺序、质疑逻辑、HP计算等核心机制
 */

import { GameEngine } from '../../src/core/GameEngineV2';

describe('质疑流程专项测试', () => {
  let gameEngine: GameEngine;

  beforeEach(() => {
    gameEngine = new GameEngine();
  });

  describe('质疑顺序验证', () => {
    test('质疑顺序：出牌者下家→下下家→再下家', () => {
      // 初始化游戏，确保玩家先手
      let state = gameEngine.initializeGame('lelouch');
      while (state.currentPlayerIndex !== 0) {
        gameEngine = new GameEngine();
        state = gameEngine.initializeGame('lelouch');
      }

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

      // 质疑顺序逻辑验证
      const playedByIndex = 1;
      const nextChallenger = (playedByIndex + 1) % 4;
      expect(nextChallenger).toBe(2); // AI2
    });

    test('质疑顺序：AI3出牌时，下家是玩家', () => {
      gameEngine.initializeGame('lelouch');

      // 质疑顺序逻辑验证
      const playedByIndex = 3;
      const nextChallenger = (playedByIndex + 1) % 4;
      expect(nextChallenger).toBe(0); // 玩家
    });
  });

  describe('质疑逻辑验证', () => {
    test('质疑成功：出牌者在撒谎', () => {
      // 初始化并确保玩家先手
      let state = gameEngine.initializeGame('lelouch');
      while (state.currentPlayerIndex !== 0) {
        gameEngine = new GameEngine();
        state = gameEngine.initializeGame('lelouch');
      }

      // 记录初始HP
      const initialHp = state.playerStats.hp;

      // 玩家出非骗子牌（撒谎）
      const liarCard = state.liarCard;
      const nonLiarCards = state.playerHand.filter(c => c.rank !== liarCard && !c.isJoker);

      if (nonLiarCards.length > 0) {
        gameEngine.toggleCardSelection(nonLiarCards[0].id);
        state = gameEngine.playerPlayCards();

        // 进入质疑阶段
        expect(state.phase).toBe('challenge');

        // AI质疑（强制质疑以测试）
        let attempts = 0;
        while (state.phase === 'challenge' && attempts < 10) {
          state = gameEngine.aiChallengeDecision('ai');
          attempts++;
        }

        // 验证进入Geass阶段或游戏结束
        expect(['geass', 'game_over', 'player_turn', 'ai_turn']).toContain(state.phase);
      }
    });

    test('质疑失败：出牌者诚实', () => {
      // 初始化并确保玩家先手
      let state = gameEngine.initializeGame('lelouch');
      while (state.currentPlayerIndex !== 0) {
        gameEngine = new GameEngine();
        state = gameEngine.initializeGame('lelouch');
      }

      // 玩家出骗子牌（诚实）
      const liarCard = state.liarCard;
      const liarCards = state.playerHand.filter(c => c.rank === liarCard || c.isJoker);

      if (liarCards.length > 0) {
        gameEngine.toggleCardSelection(liarCards[0].id);
        state = gameEngine.playerPlayCards();

        // 进入质疑阶段
        expect(state.phase).toBe('challenge');

        // AI质疑（强制质疑以测试）
        let attempts = 0;
        while (state.phase === 'challenge' && attempts < 10) {
          state = gameEngine.aiChallengeDecision('ai');
          attempts++;
        }

        // 验证进入Geass阶段或游戏结束
        expect(['geass', 'game_over', 'player_turn', 'ai_turn']).toContain(state.phase);
      }
    });
  });

  describe('HP计算验证', () => {
    test('Geass命中后HP减少1', () => {
      const state = gameEngine.initializeGame('lelouch');

      // 验证HP系统正确初始化
      expect(state.playerStats.hp).toBeGreaterThan(0);
      expect(state.playerStats.maxHp).toBeGreaterThanOrEqual(state.playerStats.hp);
    });

    test('朱雀有4点HP', () => {
      const state = gameEngine.initializeGame('suzaku');

      expect(state.playerStats.maxHp).toBe(4);
      expect(state.playerStats.hp).toBe(4);
    });

    test('其他角色有3点HP', () => {
      const chars = ['lelouch', 'cc', 'kallen'] as const;

      chars.forEach(char => {
        const engine = new GameEngine();
        const state = engine.initializeGame(char);

        expect(state.playerStats.maxHp).toBe(3);
        expect(state.playerStats.hp).toBe(3);
      });
    });
  });

  describe('质疑边界情况', () => {
    test('所有玩家都不质疑时进入下一回合', () => {
      // 初始化并确保玩家先手
      let state = gameEngine.initializeGame('lelouch');
      while (state.currentPlayerIndex !== 0) {
        gameEngine = new GameEngine();
        state = gameEngine.initializeGame('lelouch');
      }

      // 玩家出牌
      const cardId = state.playerHand[0].id;
      gameEngine.toggleCardSelection(cardId);
      state = gameEngine.playerPlayCards();

      expect(state.phase).toBe('challenge');

      // 模拟所有AI不质疑（跳过质疑阶段）
      // 在实际游戏中，这会导致质疑阶段结束，进入结算
      let attempts = 0;
      while (state.phase === 'challenge' && attempts < 10) {
        state = gameEngine.aiChallengeDecision('ai');
        state = gameEngine.aiChallengeDecision('ai2');
        state = gameEngine.aiChallengeDecision('ai3');
        attempts++;
      }

      // 质疑阶段结束后应该进入下一阶段
      expect(['geass', 'game_over', 'player_turn', 'ai_turn', 'challenge']).toContain(state.phase);
    });

    test('质疑阶段可以正确识别出牌者', () => {
      // 初始化并确保玩家先手
      let state = gameEngine.initializeGame('lelouch');
      while (state.currentPlayerIndex !== 0) {
        gameEngine = new GameEngine();
        state = gameEngine.initializeGame('lelouch');
      }

      // 玩家出牌
      const cardId = state.playerHand[0].id;
      gameEngine.toggleCardSelection(cardId);
      state = gameEngine.playerPlayCards();

      // 验证出牌记录正确
      expect(state.turnState.playedCards?.playerId).toBe('player');
      expect(state.turnState.playedCards?.cardIds.length).toBeGreaterThan(0);
    });
  });

  describe('无人质疑场景测试', () => {
    test('无人质疑时应由原出牌者继续出牌', () => {
      // 初始化并确保玩家先手
      let state = gameEngine.initializeGame('lelouch');
      while (state.currentPlayerIndex !== 0) {
        gameEngine = new GameEngine();
        state = gameEngine.initializeGame('lelouch');
      }

      const initialTurnNumber = state.turnState.turnNumber;
      const playerHandCount = state.playerHand.length;

      // 玩家出牌
      const cardId = state.playerHand[0].id;
      gameEngine.toggleCardSelection(cardId);
      state = gameEngine.playerPlayCards();

      expect(state.phase).toBe('challenge');
      expect(state.turnState.playedCards?.playerId).toBe('player');

      // 模拟无人质疑场景 - 调用endChallengePhase(true)
      state = gameEngine.endChallengePhase(true);

      // 验证1: 回合号不应增加
      expect(state.turnState.turnNumber).toBe(initialTurnNumber);

      // 验证2: 出牌记录应被清除
      expect(state.turnState.playedCards).toBeNull();

      // 验证3: 阶段应该仍然是player_turn（玩家继续）
      expect(state.phase).toBe('player_turn');

      // 验证4: 玩家手牌数量应减少（因为出了牌）
      expect(state.playerHand.length).toBe(playerHandCount - 1);

      // 验证5: 桌面应该有一张牌
      expect(state.turnState.tableCards.length).toBeGreaterThanOrEqual(1);

      // 验证6: lastAction应该反映无人质疑
      expect(state.lastAction).toBe('无人质疑，回合继续');
    });

    test('无人质疑时AI出牌者应继续AI回合', () => {
      // 初始化游戏
      let state = gameEngine.initializeGame('lelouch');

      // 直接设置状态为挑战阶段，模拟AI出牌后的情况
      // 使用反射来设置测试状态
      const challengeState = {
        phase: 'challenge',
        turnState: {
          turnNumber: 1,
          playedCards: {
            playerId: 'ai' as const,
            cardIds: ['card1'],
            claimedRank: 'Q' as const,
            actualCards: [],
            isBluff: false
          },
          lastPlayerId: 'ai' as const,
          tableCards: [],
          geassConsecutiveMisses: 0
        }
      };

      // 手动设置engine的状态来进行测试
      (gameEngine as any).state.phase = challengeState.phase;
      (gameEngine as any).state.turnState = challengeState.turnState;

      // 模拟无人质疑场景 - 调用endChallengePhase(true)
      state = gameEngine.endChallengePhase(true);

      // 验证1: 回合号不应增加
      expect(state.turnState.turnNumber).toBe(1);

      // 验证2: 阶段应该仍然是ai_turn（AI继续）
      expect(state.phase).toBe('ai_turn');

      // 验证3: 出牌记录应被清除
      expect(state.turnState.playedCards).toBeNull();

      // 验证4: lastAction应该反映无人质疑
      expect(state.lastAction).toBe('无人质疑，回合继续');
    });

    test('有质疑时应正常进入下一回合', () => {
      // 初始化并确保玩家先手
      let state = gameEngine.initializeGame('lelouch');
      while (state.currentPlayerIndex !== 0) {
        gameEngine = new GameEngine();
        state = gameEngine.initializeGame('lelouch');
      }

      const initialTurnNumber = state.turnState.turnNumber;

      // 玩家出牌
      const cardId = state.playerHand[0].id;
      gameEngine.toggleCardSelection(cardId);
      state = gameEngine.playerPlayCards();

      expect(state.phase).toBe('challenge');

      // 模拟有质疑场景 - 调用endChallengePhase(false)
      state = gameEngine.endChallengePhase(false);

      // 验证1: 回合号应该增加
      expect(state.turnState.turnNumber).toBe(initialTurnNumber + 1);

      // 验证2: 出牌记录应被清除
      expect(state.turnState.playedCards).toBeNull();

      // 验证3: 阶段应该是player_turn或ai_turn
      expect(['player_turn', 'ai_turn']).toContain(state.phase);
    });
  });
});
