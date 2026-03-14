/**
 * =============================================================================
 * Code Geass: Liar's Game - 卡牌系统
 * =============================================================================
 *
 * Liar's Bar规则实现：
 * - 20张牌：Q/K/A各6张 + 2张小丑牌
 * - 小丑牌(JOKER)是万能牌，可当任意点数使用
 * - 每局随机指定一张"骗子牌"(Q/K/A)
 *
 * @author Code Agent
 * @version 2.0.0
 */

import type { Card, CardSuit, CardRank } from '../types';

/**
 * 卡牌系统类
 * 负责牌组生成、洗牌、发牌、骗子牌管理等核心功能
 */
export class CardSystem {
  /** 牌组中的所有牌 */
  private cards: Card[] = [];

  /** 当前骗子牌 */
  private liarCard: CardRank | null = null;

  /**
   * 生成Liar's Bar牌组（20张：Q/K/A各6张 + 2张小丑牌）
   *
   * @returns 生成的牌组
   */
  generateDeck(): Card[] {
    this.cards = [];
    const suits: CardSuit[] = ['spades', 'hearts', 'clubs', 'diamonds'];
    const ranks: CardRank[] = ['Q', 'K', 'A'];

    // 生成Q/K/A各6张（每种点数6张，循环使用花色）
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
   * Fisher-Yates洗牌算法 - 均匀随机打乱牌组
   * 时间复杂度: O(n)
   *
   * @returns 打乱后的牌组
   */
  shuffle(): Card[] {
    for (let i = this.cards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
    }
    return this.cards;
  }

  /**
   * 发牌 - 玩家和3个AI各发5张牌
   * Liar's Bar共20张牌，4人游戏，每人5张
   *
   * @returns 分发后的各人手牌
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

    return { playerCards, ai1Cards, ai2Cards, ai3Cards, remaining: [] };
  }

  /**
   * 随机指定骗子牌 (Q/K/A)
   * 小丑牌不能作为骗子牌
   *
   * @returns 指定的骗子牌
   */
  setLiarCard(): CardRank {
    const ranks: CardRank[] = ['Q', 'K', 'A'];
    this.liarCard = ranks[Math.floor(Math.random() * ranks.length)];
    return this.liarCard;
  }

  /**
   * 获取当前骗子牌
   *
   * @returns 当前骗子牌，未设置则返回null
   */
  getLiarCard(): CardRank | null {
    return this.liarCard;
  }

  /**
   * 强制设置骗子牌（鲁鲁修技能用）
   *
   * @param rank - 要设置的骗子牌点数
   */
  forceSetLiarCard(rank: CardRank): void {
    if (rank !== 'JOKER') {
      this.liarCard = rank;
    }
  }

  /**
   * 获取所有牌
   *
   * @returns 牌组中的所有牌
   */
  getCards(): Card[] {
    return this.cards;
  }

  /**
   * 获取玩家手牌
   *
   * @returns 属于玩家的牌
   */
  getPlayerCards(): Card[] {
    return this.cards.filter(c => c.owner === 'player');
  }

  /**
   * 获取指定AI的手牌
   *
   * @param aiId - AI的ID
   * @returns 属于该AI的牌
   */
  getAICards(aiId: 'ai' | 'ai2' | 'ai3' = 'ai'): Card[] {
    return this.cards.filter(c => c.owner === aiId);
  }

  /**
   * 出牌 - 将牌移到桌面
   *
   * @param cardIds - 要出的牌的ID列表
   * @returns 实际出的牌
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
   * 小丑牌可以当作任意骗子牌使用
   *
   * @param card - 要检查的牌
   * @returns 是否是骗子牌
   */
  isLiarCard(card: Card): boolean {
    if (card.isJoker) return true;
    return card.rank === this.liarCard;
  }

  /**
   * 验证出牌是否撒谎
   *
   * @param cards - 出的牌
   * @param claimedRank - 声称的点数
   * @returns 是否撒谎（true=撒谎，false=实话）
   */
  checkBluff(cards: Card[], claimedRank: CardRank): boolean {
    return cards.some(c => c.rank !== claimedRank && !c.isJoker);
  }

  /**
   * 获取剩余牌数
   *
   * @returns 剩余牌数量
   */
  getRemainingCards(): number {
    return this.cards.filter(c => c.owner === null).length;
  }

  /**
   * 抽取指定数量的牌
   *
   * @param count - 要抽取的牌数
   * @returns 抽到的牌
   */
  drawCards(count: number): Card[] {
    const availableCards = this.cards.filter(c => c.owner === null);
    const drawnCards = availableCards.slice(0, count);

    for (const card of drawnCards) {
      card.owner = 'player'; // 默认给玩家，调用者可以修改
    }

    return drawnCards;
  }

  /**
   * 重置牌组 - 清空所有牌和状态
   */
  reset(): void {
    this.cards = [];
    this.liarCard = null;
  }

  /**
   * 重新发牌 - 用于手牌耗尽时的处理
   *
   * @returns 新的手牌分配
   */
  redealCards(): {
    playerCards: Card[];
    ai1Cards: Card[];
    ai2Cards: Card[];
    ai3Cards: Card[];
  } {
    // 重置并重新生成牌组
    this.reset();
    this.generateDeck();
    this.shuffle();

    // 重新发牌
    return this.dealCards();
  }
}

/**
 * 卡牌系统单例
 */
export const cardSystem = new CardSystem();

// ============================================
// 导出类型
// ============================================

export type { Card, CardSuit, CardRank };
