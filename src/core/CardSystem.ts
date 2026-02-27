/**
 * 牌组系统 - CardSystem.ts
 * 管理20张牌的生成、洗牌、发牌逻辑
 */

export type CardRank = 'Q' | 'K' | 'A';
export type CardType = CardRank | 'JOKER';

export interface Card {
  id: string;
  type: CardType;
  rank: CardRank | 'JOKER';
  owner: 'player' | 'ai' | 'table' | null;
}

export class CardSystem {
  private cards: Card[] = [];
  private liarCard: CardRank | null = null;

  /**
   * 生成20张牌
   * Q/K/A 各6张 + 小丑2张
   */
  generateDeck(): Card[] {
    this.cards = [];
    let idCounter = 0;

    // Q/K/A 各6张
    const ranks: CardRank[] = ['Q', 'K', 'A'];
    for (const rank of ranks) {
      for (let i = 0; i < 6; i++) {
        this.cards.push({
          id: `card_${idCounter++}`,
          type: rank,
          rank: rank,
          owner: null,
        });
      }
    }

    // 小丑2张
    for (let i = 0; i < 2; i++) {
      this.cards.push({
        id: `card_${idCounter++}`,
        type: 'JOKER',
        rank: 'JOKER',
        owner: null,
      });
    }

    return this.cards;
  }

  /**
   * Fisher-Yates 洗牌算法
   */
  shuffle(): Card[] {
    for (let i = this.cards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
    }
    return this.cards;
  }

  /**
   * 发牌 - 每人5张
   */
  dealCards(): { playerCards: Card[]; aiCards: Card[] } {
    if (this.cards.length !== 20) {
      throw new Error('牌组未初始化或牌数不正确');
    }

    const playerCards: Card[] = [];
    const aiCards: Card[] = [];

    // 玩家拿前5张
    for (let i = 0; i < 5; i++) {
      const card = this.cards[i];
      card.owner = 'player';
      playerCards.push(card);
    }

    // AI拿接下来5张
    for (let i = 5; i < 10; i++) {
      const card = this.cards[i];
      card.owner = 'ai';
      aiCards.push(card);
    }

    // 剩余10张留在牌堆
    for (let i = 10; i < 20; i++) {
      this.cards[i].owner = null;
    }

    return { playerCards, aiCards };
  }

  /**
   * 随机指定骗子牌 (Q/K/A)
   */
  setLiarCard(): CardRank {
    const ranks: CardRank[] = ['Q', 'K', 'A'];
    this.liarCard = ranks[Math.floor(Math.random() * ranks.length)];
    return this.liarCard;
  }

  /**
   * 获取当前骗子牌
   */
  getLiarCard(): CardRank | null {
    return this.liarCard;
  }

  /**
   * 获取所有牌
   */
  getCards(): Card[] {
    return this.cards;
  }

  /**
   * 获取玩家手牌
   */
  getPlayerCards(): Card[] {
    return this.cards.filter(c => c.owner === 'player');
  }

  /**
   * 获取AI手牌
   */
  getAICards(): Card[] {
    return this.cards.filter(c => c.owner === 'ai');
  }

  /**
   * 出牌 - 将牌移到桌面
   */
  playCards(cardIds: string[]): Card[] {
    const playedCards: Card[] = [];
    for (const cardId of cardIds) {
      const card = this.cards.find(c => c.id === cardId);
      if (card) {
        card.owner = 'table';
        playedCards.push(card);
      }
    }
    return playedCards;
  }

  /**
   * 重置牌组
   */
  reset(): void {
    this.cards = [];
    this.liarCard = null;
  }
}

export const cardSystem = new CardSystem();
