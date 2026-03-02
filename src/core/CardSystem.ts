/**
 * 牌组系统 - CardSystem.ts
 * 标准52张扑克牌 + 骗子牌机制
 */

export type CardSuit = 'spades' | 'hearts' | 'clubs' | 'diamonds';
export type CardRank = 'A' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | 'J' | 'Q' | 'K';

export interface Card {
  id: string;
  suit: CardSuit;
  rank: CardRank;
  value: number;
  owner: 'player' | 'ai' | 'ai2' | 'ai3' | 'table' | null;
}

export class CardSystem {
  private cards: Card[] = [];
  private liarCard: CardRank | null = null;

  /**
   * 生成52张标准扑克牌
   */
  generateDeck(): Card[] {
    this.cards = [];
    const suits: CardSuit[] = ['spades', 'hearts', 'clubs', 'diamonds'];
    const ranks: CardRank[] = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];

    for (const suit of suits) {
      for (let i = 0; i < ranks.length; i++) {
        this.cards.push({
          id: `${suit}-${ranks[i]}-${Math.random().toString(36).substr(2, 9)}`,
          suit: suit,
          rank: ranks[i],
          value: i + 1,
          owner: null,
        });
      }
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
   * 发牌 - 玩家和3个AI各5张牌
   */
  dealCards(): { 
    playerCards: Card[]; 
    ai1Cards: Card[]; 
    ai2Cards: Card[]; 
    ai3Cards: Card[];
    remaining: Card[];
  } {
    if (this.cards.length !== 52) {
      throw new Error('牌组未初始化或牌数不正确');
    }

    const playerCards: Card[] = [];
    const ai1Cards: Card[] = [];
    const ai2Cards: Card[] = [];
    const ai3Cards: Card[] = [];

    // 玩家拿前5张
    for (let i = 0; i < 5; i++) {
      const card = this.cards[i];
      card.owner = 'player';
      playerCards.push(card);
    }

    // AI1拿接下来5张
    for (let i = 5; i < 10; i++) {
      const card = this.cards[i];
      card.owner = 'ai';
      ai1Cards.push(card);
    }

    // AI2拿接下来5张
    for (let i = 10; i < 15; i++) {
      const card = this.cards[i];
      card.owner = 'ai2';
      ai2Cards.push(card);
    }

    // AI3拿接下来5张
    for (let i = 15; i < 20; i++) {
      const card = this.cards[i];
      card.owner = 'ai3';
      ai3Cards.push(card);
    }

    // 剩余32张留在牌堆
    const remaining = this.cards.slice(20);

    return { playerCards, ai1Cards, ai2Cards, ai3Cards, remaining };
  }

  /**
   * 随机指定骗子牌 (A-K)
   */
  setLiarCard(): CardRank {
    const ranks: CardRank[] = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
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
   * 设置骗子牌（鲁鲁修技能用）
   */
  forceSetLiarCard(rank: CardRank): void {
    this.liarCard = rank;
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
  getAICards(aiId: 'ai' | 'ai2' | 'ai3' = 'ai'): Card[] {
    return this.cards.filter(c => c.owner === aiId);
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
