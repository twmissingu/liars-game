/**
 * 牌组系统 - CardSystem.ts
 * Liar's Bar规则：只使用Q、K、A（12张牌）
 */

export type CardSuit = 'spades' | 'hearts' | 'clubs' | 'diamonds';
export type CardRank = 'Q' | 'K' | 'A'; // Liar's Bar只使用Q、K、A

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
   * 生成Liar's Bar牌组（12张：4花色 × Q/K/A）
   */
  generateDeck(): Card[] {
    this.cards = [];
    const suits: CardSuit[] = ['spades', 'hearts', 'clubs', 'diamonds'];
    const ranks: CardRank[] = ['Q', 'K', 'A']; // 只使用Q、K、A

    for (const suit of suits) {
      for (let i = 0; i < ranks.length; i++) {
        this.cards.push({
          id: `${suit}-${ranks[i]}-${Math.random().toString(36).substr(2, 9)}`,
          suit: suit,
          rank: ranks[i],
          value: i + 1, // Q=1, K=2, A=3
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
   * 发牌 - 玩家和3个AI各发牌（Liar's Bar共12张牌，每人3张）
   */
  dealCards(): { 
    playerCards: Card[]; 
    ai1Cards: Card[]; 
    ai2Cards: Card[]; 
    ai3Cards: Card[];
    remaining: Card[];
  } {
    if (this.cards.length !== 12) {
      throw new Error('牌组未初始化或牌数不正确');
    }

    const playerCards: Card[] = [];
    const ai1Cards: Card[] = [];
    const ai2Cards: Card[] = [];
    const ai3Cards: Card[] = [];

    // 玩家拿前3张
    for (let i = 0; i < 3; i++) {
      const card = this.cards[i];
      card.owner = 'player';
      playerCards.push(card);
    }

    // AI1拿接下来3张
    for (let i = 3; i < 6; i++) {
      const card = this.cards[i];
      card.owner = 'ai';
      ai1Cards.push(card);
    }

    // AI2拿接下来3张
    for (let i = 6; i < 9; i++) {
      const card = this.cards[i];
      card.owner = 'ai2';
      ai2Cards.push(card);
    }

    // AI3拿接下来3张
    for (let i = 9; i < 12; i++) {
      const card = this.cards[i];
      card.owner = 'ai3';
      ai3Cards.push(card);
    }

    // 没有剩余牌
    const remaining: Card[] = [];

    return { playerCards, ai1Cards, ai2Cards, ai3Cards, remaining };
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
