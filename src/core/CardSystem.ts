/**
 * 牌组系统 - CardSystem.ts
 * Liar's Bar规则：20张牌（Q/K/A各6张 + 2张小丑牌）
 */

export type CardSuit = 'spades' | 'hearts' | 'clubs' | 'diamonds' | 'joker';
export type CardRank = 'Q' | 'K' | 'A' | 'JOKER'; // Liar's Bar使用Q、K、A + 小丑

export interface Card {
  id: string;
  suit: CardSuit;
  rank: CardRank;
  value: number;
  isJoker: boolean;
  owner: 'player' | 'ai' | 'ai2' | 'ai3' | 'table' | null;
}

export class CardSystem {
  private cards: Card[] = [];
  private liarCard: CardRank | null = null;

  /**
   * 生成Liar's Bar牌组（20张：Q/K/A各6张 + 2张小丑牌）
   */
  generateDeck(): Card[] {
    this.cards = [];
    const suits: CardSuit[] = ['spades', 'hearts', 'clubs', 'diamonds'];
    const ranks: CardRank[] = ['Q', 'K', 'A'];

    // 生成Q/K/A各6张（每种点数6张，不区分花色，用随机花色）
    for (const rank of ranks) {
      for (let i = 0; i < 6; i++) {
        const suit = suits[i % 4];
        this.cards.push({
          id: `${rank}-${i}-${Math.random().toString(36).substr(2, 9)}`,
          suit: suit,
          rank: rank,
          value: rank === 'Q' ? 1 : rank === 'K' ? 2 : 3,
          isJoker: false,
          owner: null,
        });
      }
    }

    // 添加2张小丑牌
    for (let i = 0; i < 2; i++) {
      this.cards.push({
        id: `JOKER-${i}-${Math.random().toString(36).substr(2, 9)}`,
        suit: 'joker',
        rank: 'JOKER',
        value: 0,
        isJoker: true,
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
   * 发牌 - 玩家和3个AI各发5张牌（Liar's Bar共20张牌，每人5张）
   */
  dealCards(): { 
    playerCards: Card[]; 
    ai1Cards: Card[]; 
    ai2Cards: Card[]; 
    ai3Cards: Card[];
    remaining: Card[];
  } {
    if (this.cards.length !== 20) {
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
    if (rank !== 'JOKER') {
      this.liarCard = rank;
    }
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
   * 检查牌是否是骗子牌（包括小丑牌）
   */
  isLiarCard(card: Card): boolean {
    if (card.isJoker) return true; // 小丑牌可以当作骗子牌
    return card.rank === this.liarCard;
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
