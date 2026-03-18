/**
 * 小丑牌万能机制测试
 * 测试PRD 2.3.3节描述的小丑牌规则
 */

import { GameEngine } from '../../src/core/GameEngineV2';
import { CardSystem } from '../../src/core/CardSystem';
import type { CardRank } from '../../src/types';

describe('小丑牌万能机制测试', () => {
  let engine: GameEngine;
  let cardSystem: CardSystem;

  beforeEach(() => {
    engine = new GameEngine();
    cardSystem = new CardSystem();
    cardSystem.generateDeck();
  });

  describe('小丑牌基本功能', () => {
    test('牌组应包含2张小丑牌', () => {
      const cards = cardSystem.getCards();
      const jokers = cards.filter(c => c.isJoker);
      expect(jokers).toHaveLength(2);
    });

    test('小丑牌可以当作任意点数使用', () => {
      // 获取小丑牌
      const jokers = cardSystem.getCards().filter(c => c.isJoker);

      // 声称是任意点数
      const claimedRank: CardRank = 'K';

      // 验证不算撒谎
      const isBluff = cardSystem.checkBluff(jokers, claimedRank);
      expect(isBluff).toBe(false);
    });

    test('小丑牌可以当作Q使用', () => {
      const jokers = cardSystem.getCards().filter(c => c.isJoker);
      const isBluff = cardSystem.checkBluff(jokers, 'Q');
      expect(isBluff).toBe(false);
    });

    test('小丑牌可以当作A使用', () => {
      const jokers = cardSystem.getCards().filter(c => c.isJoker);
      const isBluff = cardSystem.checkBluff(jokers, 'A');
      expect(isBluff).toBe(false);
    });
  });

  describe('小丑牌混合使用', () => {
    test('小丑牌配合真牌使用不算撒谎', () => {
      // 设置骗子牌是K
      cardSystem.setLiarCard();
      const liarCard = cardSystem.getLiarCard();

      // 获取K牌和小丑牌
      const kCards = cardSystem.getCards().filter(c => c.rank === liarCard).slice(0, 1);
      const jokers = cardSystem.getCards().filter(c => c.isJoker).slice(0, 1);
      const mixedCards = [...kCards, ...jokers];

      // 验证不算撒谎
      const isBluff = cardSystem.checkBluff(mixedCards, liarCard!);
      expect(isBluff).toBe(false);
    });

    test('小丑牌配合假牌使用仍算撒谎', () => {
      // 设置骗子牌是K
      cardSystem.setLiarCard();

      // 获取Q牌（非骗子牌）和小丑牌
      const qCards = cardSystem.getCards().filter(c => c.rank === 'Q').slice(0, 1);
      const jokers = cardSystem.getCards().filter(c => c.isJoker).slice(0, 1);
      const mixedCards = [...qCards, ...jokers];

      // 声称是K，但包含Q牌，应该算撒谎
      const isBluff = cardSystem.checkBluff(mixedCards, 'K');
      expect(isBluff).toBe(true);
    });
  });

  describe('全小丑牌出牌', () => {
    test('全小丑牌出牌永远不算撒谎', () => {
      const jokers = cardSystem.getCards().filter(c => c.isJoker);

      // 声称是任意点数
      const isBluffQ = cardSystem.checkBluff(jokers, 'Q');
      const isBluffK = cardSystem.checkBluff(jokers, 'K');
      const isBluffA = cardSystem.checkBluff(jokers, 'A');

      expect(isBluffQ).toBe(false);
      expect(isBluffK).toBe(false);
      expect(isBluffA).toBe(false);
    });
  });

  describe('小丑牌属性验证', () => {
    test('小丑牌应有正确的属性', () => {
      const jokers = cardSystem.getCards().filter(c => c.isJoker);

      jokers.forEach(joker => {
        expect(joker.isJoker).toBe(true);
        expect(joker.rank).toBe('JOKER');
        expect(joker.suit).toBe('joker');
      });
    });

    test('小丑牌ID应唯一', () => {
      const jokers = cardSystem.getCards().filter(c => c.isJoker);
      const ids = jokers.map(j => j.id);
      const uniqueIds = new Set(ids);
      expect(uniqueIds.size).toBe(ids.length);
    });
  });
});
