/**
 * CardSystem 单元测试
 * 测试牌组系统的核心功能
 */

import { CardSystem, CardRank, CardSuit } from '../../src/core/CardSystem';

describe('CardSystem', () => {
  let cardSystem: CardSystem;

  beforeEach(() => {
    cardSystem = new CardSystem();
  });

  afterEach(() => {
    cardSystem.reset();
  });

  describe('牌组生成', () => {
    test('应该生成20张牌', () => {
      const cards = cardSystem.generateDeck();
      expect(cards).toHaveLength(20);
    });

    test('应该包含Q/K/A各6张', () => {
      cardSystem.generateDeck();
      const cards = cardSystem.getCards();
      
      const qCards = cards.filter(c => c.rank === 'Q');
      const kCards = cards.filter(c => c.rank === 'K');
      const aCards = cards.filter(c => c.rank === 'A');
      
      expect(qCards).toHaveLength(6);
      expect(kCards).toHaveLength(6);
      expect(aCards).toHaveLength(6);
    });

    test('应该包含2张小丑牌', () => {
      cardSystem.generateDeck();
      const cards = cardSystem.getCards();
      
      const jokers = cards.filter(c => c.isJoker);
      expect(jokers).toHaveLength(2);
    });

    test('小丑牌应该有正确的属性', () => {
      cardSystem.generateDeck();
      const cards = cardSystem.getCards();
      
      const joker = cards.find(c => c.isJoker);
      expect(joker).toBeDefined();
      expect(joker?.suit).toBe('joker');
      expect(joker?.rank).toBe('JOKER');
      expect(joker?.value).toBe(0);
    });

    test('普通牌应该有正确的value值', () => {
      cardSystem.generateDeck();
      const cards = cardSystem.getCards();
      
      const qCard = cards.find(c => c.rank === 'Q' && !c.isJoker);
      const kCard = cards.find(c => c.rank === 'K' && !c.isJoker);
      const aCard = cards.find(c => c.rank === 'A' && !c.isJoker);
      
      expect(qCard?.value).toBe(1);
      expect(kCard?.value).toBe(2);
      expect(aCard?.value).toBe(3);
    });

    test('每张牌应该有唯一的ID', () => {
      cardSystem.generateDeck();
      const cards = cardSystem.getCards();
      const ids = cards.map(c => c.id);
      const uniqueIds = new Set(ids);
      
      expect(uniqueIds.size).toBe(ids.length);
    });
  });

  describe('洗牌', () => {
    test('洗牌后牌数不变', () => {
      cardSystem.generateDeck();
      const before = cardSystem.getCards().map(c => c.id);
      cardSystem.shuffle();
      const after = cardSystem.getCards();
      
      expect(after).toHaveLength(20);
    });

    test('洗牌会改变牌序（概率性测试）', () => {
      cardSystem.generateDeck();
      const originalOrder = cardSystem.getCards().map(c => c.id).join(',');
      
      // 多次洗牌，至少有一次顺序不同
      let orderChanged = false;
      for (let i = 0; i < 10; i++) {
        cardSystem.shuffle();
        const newOrder = cardSystem.getCards().map(c => c.id).join(',');
        if (newOrder !== originalOrder) {
          orderChanged = true;
          break;
        }
      }
      
      expect(orderChanged).toBe(true);
    });
  });

  describe('发牌', () => {
    test('发牌前必须先生成牌组', () => {
      expect(() => cardSystem.dealCards()).toThrow('牌组未初始化或牌数不正确');
    });

    test('每人应该发5张牌', () => {
      cardSystem.generateDeck();
      cardSystem.shuffle();
      
      const { playerCards, ai1Cards, ai2Cards, ai3Cards } = cardSystem.dealCards();
      
      expect(playerCards).toHaveLength(5);
      expect(ai1Cards).toHaveLength(5);
      expect(ai2Cards).toHaveLength(5);
      expect(ai3Cards).toHaveLength(5);
    });

    test('发牌后没有剩余牌', () => {
      cardSystem.generateDeck();
      cardSystem.shuffle();
      
      const { remaining } = cardSystem.dealCards();
      expect(remaining).toHaveLength(0);
    });

    test('发牌后牌的owner应该正确设置', () => {
      cardSystem.generateDeck();
      cardSystem.shuffle();
      
      const { playerCards, ai1Cards, ai2Cards, ai3Cards } = cardSystem.dealCards();
      
      expect(playerCards.every(c => c.owner === 'player')).toBe(true);
      expect(ai1Cards.every(c => c.owner === 'ai')).toBe(true);
      expect(ai2Cards.every(c => c.owner === 'ai2')).toBe(true);
      expect(ai3Cards.every(c => c.owner === 'ai3')).toBe(true);
    });

    test('不同玩家拿到的牌不重复', () => {
      cardSystem.generateDeck();
      cardSystem.shuffle();
      
      const { playerCards, ai1Cards, ai2Cards, ai3Cards } = cardSystem.dealCards();
      const allCards = [...playerCards, ...ai1Cards, ...ai2Cards, ...ai3Cards];
      const ids = allCards.map(c => c.id);
      const uniqueIds = new Set(ids);
      
      expect(uniqueIds.size).toBe(20);
    });
  });

  describe('骗子牌设置', () => {
    test('setLiarCard应该返回Q/K/A之一', () => {
      const liarCard = cardSystem.setLiarCard();
      expect(['Q', 'K', 'A']).toContain(liarCard);
    });

    test('多次设置骗子牌应该都在有效范围内', () => {
      for (let i = 0; i < 100; i++) {
        const liarCard = cardSystem.setLiarCard();
        expect(['Q', 'K', 'A']).toContain(liarCard);
      }
    });

    test('getLiarCard应该返回当前骗子牌', () => {
      const liarCard = cardSystem.setLiarCard();
      expect(cardSystem.getLiarCard()).toBe(liarCard);
    });

    test('forceSetLiarCard应该能强制设置骗子牌', () => {
      cardSystem.forceSetLiarCard('K');
      expect(cardSystem.getLiarCard()).toBe('K');
    });

    test('forceSetLiarCard不应该允许设置JOKER', () => {
      cardSystem.setLiarCard();
      const before = cardSystem.getLiarCard();
      cardSystem.forceSetLiarCard('JOKER' as CardRank);
      // JOKER不应该被设置为骗子牌
      expect(cardSystem.getLiarCard()).toBe(before);
    });
  });

  describe('出牌', () => {
    beforeEach(() => {
      cardSystem.generateDeck();
      cardSystem.shuffle();
      cardSystem.dealCards();
    });

    test('出牌应该将牌移到桌面', () => {
      const playerCards = cardSystem.getPlayerCards();
      const cardIds = playerCards.slice(0, 2).map(c => c.id);
      
      const playedCards = cardSystem.playCards(cardIds);
      
      expect(playedCards).toHaveLength(2);
      expect(playedCards.every(c => c.owner === 'table')).toBe(true);
    });

    test('出牌后牌的owner应该变为table', () => {
      const playerCards = cardSystem.getPlayerCards();
      const cardId = playerCards[0].id;
      
      cardSystem.playCards([cardId]);
      const allCards = cardSystem.getCards();
      const playedCard = allCards.find(c => c.id === cardId);
      
      expect(playedCard?.owner).toBe('table');
    });

    test('出多张牌应该全部移到桌面', () => {
      const playerCards = cardSystem.getPlayerCards();
      const cardIds = playerCards.map(c => c.id);
      
      const playedCards = cardSystem.playCards(cardIds);
      
      expect(playedCards).toHaveLength(5);
    });
  });

  describe('骗子牌判断', () => {
    beforeEach(() => {
      cardSystem.generateDeck();
    });

    test('小丑牌应该总是被认为是骗子牌', () => {
      cardSystem.setLiarCard();
      const cards = cardSystem.getCards();
      const joker = cards.find(c => c.isJoker)!;
      
      expect(cardSystem.isLiarCard(joker)).toBe(true);
    });

    test('与骗子牌点数相同的牌应该被认为是骗子牌', () => {
      cardSystem.setLiarCard();
      const liarCardRank = cardSystem.getLiarCard();
      const cards = cardSystem.getCards();
      const liarCards = cards.filter(c => c.rank === liarCardRank && !c.isJoker);
      
      expect(liarCards.length).toBeGreaterThan(0);
      expect(liarCards.every(c => cardSystem.isLiarCard(c))).toBe(true);
    });

    test('与骗子牌点数不同的牌不应该被认为是骗子牌', () => {
      cardSystem.setLiarCard();
      const liarCardRank = cardSystem.getLiarCard();
      const cards = cardSystem.getCards();
      const nonLiarCards = cards.filter(c => 
        c.rank !== liarCardRank && !c.isJoker
      );
      
      if (nonLiarCards.length > 0) {
        expect(nonLiarCards.every(c => !cardSystem.isLiarCard(c))).toBe(true);
      }
    });
  });

  describe('重置', () => {
    test('重置后牌组应该为空', () => {
      cardSystem.generateDeck();
      cardSystem.reset();
      
      expect(cardSystem.getCards()).toHaveLength(0);
      expect(cardSystem.getLiarCard()).toBeNull();
    });

    test('重置后可以重新生成牌组', () => {
      cardSystem.generateDeck();
      cardSystem.reset();
      const cards = cardSystem.generateDeck();
      
      expect(cards).toHaveLength(20);
    });
  });

  describe('边界情况', () => {
    test('出不存在的牌应该返回空数组', () => {
      cardSystem.generateDeck();
      const playedCards = cardSystem.playCards(['non-existent-id']);

      expect(playedCards).toHaveLength(0);
    });

    test('混合存在和不存在的牌ID', () => {
      cardSystem.generateDeck();
      cardSystem.shuffle();
      cardSystem.dealCards();

      const playerCards = cardSystem.getPlayerCards();
      const mixedIds = [playerCards[0].id, 'non-existent'];

      const playedCards = cardSystem.playCards(mixedIds);

      expect(playedCards).toHaveLength(1);
    });
  });

  describe('checkBluff - 撒谎检测', () => {
    beforeEach(() => {
      cardSystem.generateDeck();
      cardSystem.setLiarCard();
    });

    test('出的牌与声称点数相同不算撒谎', () => {
      const liarCard = cardSystem.getLiarCard();
      const cards = cardSystem.getCards();
      const sameRankCards = cards.filter(c => c.rank === liarCard && !c.isJoker).slice(0, 2);

      if (sameRankCards.length > 0) {
        const isBluff = cardSystem.checkBluff(sameRankCards, liarCard!);
        expect(isBluff).toBe(false);
      }
    });

    test('出的牌与声称点数不同算撒谎', () => {
      const liarCard = cardSystem.getLiarCard();
      const cards = cardSystem.getCards();

      // 找到与骗子牌不同的牌
      const differentRank = liarCard === 'Q' ? 'K' : 'Q';
      const differentCards = cards.filter(c => c.rank === differentRank && !c.isJoker).slice(0, 2);

      if (differentCards.length > 0) {
        const isBluff = cardSystem.checkBluff(differentCards, liarCard!);
        expect(isBluff).toBe(true);
      }
    });

    test('小丑牌不算撒谎', () => {
      const liarCard = cardSystem.getLiarCard();
      const cards = cardSystem.getCards();
      const jokers = cards.filter(c => c.isJoker);

      if (jokers.length > 0) {
        const isBluff = cardSystem.checkBluff(jokers, liarCard!);
        expect(isBluff).toBe(false);
      }
    });

    test('混合牌中有非骗子牌算撒谎', () => {
      const liarCard = cardSystem.getLiarCard();
      const cards = cardSystem.getCards();

      const liarCards = cards.filter(c => c.rank === liarCard && !c.isJoker).slice(0, 1);
      const differentRank = liarCard === 'Q' ? 'K' : 'Q';
      const differentCards = cards.filter(c => c.rank === differentRank && !c.isJoker).slice(0, 1);

      if (liarCards.length > 0 && differentCards.length > 0) {
        const mixedCards = [...liarCards, ...differentCards];
        const isBluff = cardSystem.checkBluff(mixedCards, liarCard!);
        expect(isBluff).toBe(true);
      }
    });
  });

  describe('drawCards - 抽牌', () => {
    beforeEach(() => {
      cardSystem.generateDeck();
    });

    test('可以抽取指定数量的牌', () => {
      const drawnCards = cardSystem.drawCards(3);

      expect(drawnCards).toHaveLength(3);
    });

    test('抽牌后owner设置为player', () => {
      const drawnCards = cardSystem.drawCards(2);

      expect(drawnCards.every(c => c.owner === 'player')).toBe(true);
    });

    test('抽牌后剩余牌数减少', () => {
      const initialRemaining = cardSystem.getRemainingCards();
      cardSystem.drawCards(3);
      const finalRemaining = cardSystem.getRemainingCards();

      expect(finalRemaining).toBe(initialRemaining - 3);
    });

    test('不能抽取超过剩余数量的牌', () => {
      const remaining = cardSystem.getRemainingCards();
      const drawnCards = cardSystem.drawCards(remaining + 10);

      expect(drawnCards.length).toBeLessThanOrEqual(remaining);
    });

    test('抽取0张牌返回空数组', () => {
      const drawnCards = cardSystem.drawCards(0);

      expect(drawnCards).toHaveLength(0);
    });
  });

  describe('redealCards - 重新发牌', () => {
    test('重新发牌返回新的手牌分配', () => {
      cardSystem.generateDeck();
      cardSystem.shuffle();
      cardSystem.dealCards();

      const oldPlayerCards = cardSystem.getPlayerCards().map(c => c.id);

      const { playerCards, ai1Cards, ai2Cards, ai3Cards } = cardSystem.redealCards();

      expect(playerCards).toHaveLength(5);
      expect(ai1Cards).toHaveLength(5);
      expect(ai2Cards).toHaveLength(5);
      expect(ai3Cards).toHaveLength(5);
    });

    test('重新发牌后牌组重置', () => {
      cardSystem.generateDeck();
      cardSystem.dealCards();

      // 出一些牌
      const playerCards = cardSystem.getPlayerCards();
      cardSystem.playCards(playerCards.slice(0, 2).map(c => c.id));

      cardSystem.redealCards();

      // 重新发牌后应该又有20张牌
      expect(cardSystem.getCards()).toHaveLength(20);
    });

    test('重新发牌后骗子牌重新设置', () => {
      cardSystem.generateDeck();
      cardSystem.dealCards();

      cardSystem.redealCards();
      // redealCards不会自动设置骗子牌，需要手动设置
      cardSystem.setLiarCard();
      const newLiarCard = cardSystem.getLiarCard();

      expect(newLiarCard).toBeDefined();
      expect(newLiarCard).not.toBeNull();
      expect(['Q', 'K', 'A']).toContain(newLiarCard);
    });
  });

  describe('getAICards - 获取AI手牌', () => {
    beforeEach(() => {
      cardSystem.generateDeck();
      cardSystem.shuffle();
      cardSystem.dealCards();
    });

    test('可以获取AI1的手牌', () => {
      const ai1Cards = cardSystem.getAICards('ai');

      expect(ai1Cards).toHaveLength(5);
      expect(ai1Cards.every(c => c.owner === 'ai')).toBe(true);
    });

    test('可以获取AI2的手牌', () => {
      const ai2Cards = cardSystem.getAICards('ai2');

      expect(ai2Cards).toHaveLength(5);
      expect(ai2Cards.every(c => c.owner === 'ai2')).toBe(true);
    });

    test('可以获取AI3的手牌', () => {
      const ai3Cards = cardSystem.getAICards('ai3');

      expect(ai3Cards).toHaveLength(5);
      expect(ai3Cards.every(c => c.owner === 'ai3')).toBe(true);
    });

    test('默认获取AI1的手牌', () => {
      const aiCards = cardSystem.getAICards();

      expect(aiCards).toHaveLength(5);
      expect(aiCards.every(c => c.owner === 'ai')).toBe(true);
    });
  });

  describe('getRemainingCards - 获取剩余牌数', () => {
    test('初始状态剩余20张牌', () => {
      cardSystem.generateDeck();

      expect(cardSystem.getRemainingCards()).toBe(20);
    });

    test('发牌后剩余0张', () => {
      cardSystem.generateDeck();
      cardSystem.shuffle();
      cardSystem.dealCards();

      expect(cardSystem.getRemainingCards()).toBe(0);
    });

    test('抽牌后剩余减少', () => {
      cardSystem.generateDeck();

      cardSystem.drawCards(5);

      expect(cardSystem.getRemainingCards()).toBe(15);
    });
  });
});
