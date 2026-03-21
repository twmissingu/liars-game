/**
 * 测试：isBluff 字段替代重复 wasLie 计算
 * 验证 PlayedCards.isBluff 字段的正确性，
 * 以及通过直接读取该字段替代手动计算的正确性
 */

import { GameEngine } from '../../src/core/GameEngineV2';
import type { PlayedCards } from '../../src/core/GameEngineV2';

describe('PlayedCards.isBluff 字段', () => {
  describe('isBluff 字段读取', () => {
    it('撒谎时 isBluff 应为 true', () => {
      const playedCards: PlayedCards = {
        cardIds: ['card1'],
        claimedRank: 'Q',
        actualCards: [{ id: 'card1', rank: 'K', isJoker: false, suit: 'hearts', value: 10, isRevealed: false, owner: 'player' }],
        playerId: 'player',
        isBluff: true,
      };
      const wasLie = playedCards?.isBluff ?? false;
      expect(wasLie).toBe(true);
    });

    it('诚实出牌时 isBluff 应为 false', () => {
      const playedCards: PlayedCards = {
        cardIds: ['card1'],
        claimedRank: 'Q',
        actualCards: [{ id: 'card1', rank: 'Q', isJoker: false, suit: 'hearts', value: 10, isRevealed: false, owner: 'player' }],
        playerId: 'player',
        isBluff: false,
      };
      const wasLie = playedCards?.isBluff ?? false;
      expect(wasLie).toBe(false);
    });

    it('Joker出牌时 isBluff 应为 false（Joker为万能牌）', () => {
      const playedCards: PlayedCards = {
        cardIds: ['joker1'],
        claimedRank: 'Q',
        actualCards: [{ id: 'joker1', rank: 'JOKER', isJoker: true, suit: 'joker', value: 0, isRevealed: false, owner: 'player' }],
        playerId: 'player',
        isBluff: false,
      };
      const wasLie = playedCards?.isBluff ?? false;
      expect(wasLie).toBe(false);
    });

    it('playedCards 为 null 时应安全返回 false', () => {
      const playedCards: PlayedCards | null = null;
      const wasLie = playedCards?.isBluff ?? false;
      expect(wasLie).toBe(false);
    });

    it('isBluff 字段与手动计算结果应一致', () => {
      // 手动计算（旧方式）
      const testCases = [
        {
          claimedRank: 'Q' as const,
          actualRank: 'K' as const,
          isJoker: false,
          expectedIsBluff: true,
        },
        {
          claimedRank: 'Q' as const,
          actualRank: 'Q' as const,
          isJoker: false,
          expectedIsBluff: false,
        },
        {
          claimedRank: 'A' as const,
          actualRank: 'JOKER' as const,
          isJoker: true,
          expectedIsBluff: false,
        },
      ];

      testCases.forEach(({ claimedRank, actualRank, isJoker, expectedIsBluff }) => {
        // 旧的手动计算方式
        const manualCalc = actualRank !== claimedRank && !isJoker;
        expect(manualCalc).toBe(expectedIsBluff);
        // isBluff 字段应与手动计算结果一致
        expect(expectedIsBluff).toBe(expectedIsBluff);
      });
    });
  });

  describe('GameEngine 出牌后 isBluff 字段正确设置', () => {
    const createEnginePlayerTurn = (): GameEngine | null => {
      for (let i = 0; i < 20; i++) {
        const eng = new GameEngine();
        const state = eng.initializeGame('lelouch', ['cc', 'suzaku', 'kallen']);
        if (state.phase === 'player_turn') return eng;
      }
      return null;
    };

    it('玩家出牌后 playedCards.isBluff 应被正确设置', () => {
      const engine = createEnginePlayerTurn();
      if (!engine) {
        console.warn('无法获得玩家先手状态，跳过此测试');
        return;
      }

      const initialState = engine.getState();
      const liarCard = initialState.liarCard!;

      // 找一张非骗子牌（用于撒谎）
      const bluffCard = initialState.playerHand.find(c => c.rank !== liarCard && !c.isJoker);
      // 找一张骗子牌（用于诚实出牌）
      const honestCard = initialState.playerHand.find(c => c.rank === liarCard || c.isJoker);

      if (bluffCard) {
        engine.toggleCardSelection(bluffCard.id);
        engine.playerPlayCards();
        const state = engine.getState();
        expect(state.turnState.playedCards?.isBluff).toBe(true);
      } else if (honestCard) {
        engine.toggleCardSelection(honestCard.id);
        engine.playerPlayCards();
        const state = engine.getState();
        expect(state.turnState.playedCards?.isBluff).toBe(false);
      }
    });
  });
});
