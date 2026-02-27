/**
 * Code Geass: Liar's Game - 游戏引擎 (Phase 1)
 * 核心游戏逻辑实现
 */

import { CardSystem, Card, CardRank } from './CardSystem';
import { GeassSystem, GeassResult, PlayerStats } from './GeassSystem';

export type GamePhase = 
  | 'setup'           // 游戏初始化
  | 'player_turn'     // 玩家回合
  | 'ai_turn'         // AI回合
  | 'challenge'       // 质疑阶段
  | 'resolve'         // 结算阶段
  | 'geass'           // Geass判定
  | 'game_over';      // 游戏结束

export interface PlayedCards {
  cardIds: string[];
  claimedRank: CardRank;
  actualCards: Card[];
}

export interface TurnState {
  turnNumber: number;
  currentPlayer: 'player' | 'ai';
  playedCards: PlayedCards | null;
  tableCards: Card[];
}

export interface GameState {
  phase: GamePhase;
  liarCard: CardRank | null;
  playerStats: PlayerStats;
  aiStats: PlayerStats;
  turnState: TurnState;
  lastAction: string;
  winner: 'player' | 'ai' | null;
  geassResult: GeassResult | null;
}

export interface ChallengeResult {
  wasLie: boolean;
  actualCards: Card[];
  damage: number;
  geassResult?: GeassResult;
}

export class GameEngine {
  private cardSystem: CardSystem;
  private geassSystem: GeassSystem;
  private state: GameState;

  constructor() {
    this.cardSystem = new CardSystem();
    this.geassSystem = new GeassSystem();
    this.state = this.createInitialState();
  }

  private createInitialState(): GameState {
    return {
      phase: 'setup',
      liarCard: null,
      playerStats: { hp: 3, maxHp: 3, geassSuccessCount: 0, geassFailCount: 0 },
      aiStats: { hp: 3, maxHp: 3, geassSuccessCount: 0, geassFailCount: 0 },
      turnState: {
        turnNumber: 0,
        currentPlayer: 'player',
        playedCards: null,
        tableCards: [],
      },
      lastAction: '',
      winner: null,
      geassResult: null,
    };
  }

  /**
   * 初始化游戏
   */
  initializeGame(): GameState {
    // 生成并洗牌
    this.cardSystem.generateDeck();
    this.cardSystem.shuffle();
    
    // 发牌
    this.cardSystem.dealCards();
    
    // 设定骗子牌
    const liarCard = this.cardSystem.setLiarCard();
    
    this.state = {
      ...this.createInitialState(),
      phase: 'player_turn',
      liarCard,
      turnState: {
        turnNumber: 1,
        currentPlayer: 'player',
        playedCards: null,
        tableCards: [],
      },
    };

    return this.state;
  }

  /**
   * 玩家出牌
   */
  playerPlayCards(cardIds: string[], claimedRank: CardRank): GameState {
    if (this.state.phase !== 'player_turn') {
      throw new Error('不是玩家回合');
    }

    const cards = this.cardSystem.playCards(cardIds);
    
    this.state = {
      ...this.state,
      phase: 'challenge',
      turnState: {
        ...this.state.turnState,
        playedCards: {
          cardIds,
          claimedRank,
          actualCards: cards,
        },
      },
      lastAction: `玩家出了 ${cardIds.length} 张牌，声称是 ${claimedRank}`,
    };

    return this.state;
  }

  /**
   * AI出牌
   */
  aiPlayCards(): GameState {
    if (this.state.phase !== 'ai_turn') {
      throw new Error('不是AI回合');
    }

    // AI策略：简单实现
    const aiCards = this.cardSystem.getAICards();
    const liarCard = this.state.liarCard!;
    
    // 找是否有骗子牌
    const liarCards = aiCards.filter(c => c.rank === liarCard);
    const otherCards = aiCards.filter(c => c.rank !== liarCard);
    
    let selectedCards: typeof aiCards;
    let claimedRank: CardRank;
    
    if (liarCards.length > 0 && Math.random() > 0.3) {
      // 有骗子牌，大概率出真的
      selectedCards = liarCards.slice(0, Math.min(3, liarCards.length));
      claimedRank = liarCard;
    } else {
      // 出其他牌，撒谎
      selectedCards = otherCards.slice(0, Math.min(3, otherCards.length));
      claimedRank = liarCard; // 声称是骗子牌
    }

    const cardIds = selectedCards.map(c => c.id);
    const cards = this.cardSystem.playCards(cardIds);

    this.state = {
      ...this.state,
      phase: 'challenge',
      turnState: {
        ...this.state.turnState,
        playedCards: {
          cardIds,
          claimedRank,
          actualCards: cards,
        },
      },
      lastAction: `AI出了 ${cardIds.length} 张牌，声称是 ${claimedRank}`,
    };

    return this.state;
  }

  /**
   * 玩家质疑决策
   */
  playerChallengeDecision(challenge: boolean): GameState {
    if (this.state.phase !== 'challenge') {
      throw new Error('不在质疑阶段');
    }

    if (!challenge) {
      // 选择跟牌，进入AI回合
      this.state = {
        ...this.state,
        phase: 'ai_turn',
        turnState: {
          ...this.state.turnState,
          currentPlayer: 'ai',
          tableCards: [
            ...this.state.turnState.tableCards,
            ...(this.state.turnState.playedCards?.actualCards || []),
          ],
          playedCards: null,
        },
        lastAction: '玩家选择跟牌',
      };
      return this.state;
    }

    // 选择质疑，进入结算
    return this.resolveChallenge('player');
  }

  /**
   * AI质疑决策
   */
  aiChallengeDecision(): GameState {
    if (this.state.phase !== 'challenge') {
      throw new Error('不在质疑阶段');
    }

    // AI简单策略：随机质疑
    const shouldChallenge = Math.random() > 0.6;

    if (!shouldChallenge) {
      this.state = {
        ...this.state,
        phase: 'player_turn',
        turnState: {
          ...this.state.turnState,
          currentPlayer: 'player',
          turnNumber: this.state.turnState.turnNumber + 1,
          tableCards: [
            ...this.state.turnState.tableCards,
            ...(this.state.turnState.playedCards?.actualCards || []),
          ],
          playedCards: null,
        },
        lastAction: 'AI选择跟牌',
      };
      return this.state;
    }

    return this.resolveChallenge('ai');
  }

  /**
   * 结算质疑
   */
  private resolveChallenge(challenger: 'player' | 'ai'): GameState {
    const playedCards = this.state.turnState.playedCards!;
    const liarCard = this.state.liarCard!;
    
    // 检查是否撒谎
    const wasLie = playedCards.actualCards.some(c => c.rank !== liarCard);
    
    // 确定谁受伤
    const loser = wasLie 
      ? (this.state.turnState.currentPlayer === 'player' ? 'player' : 'ai')
      : challenger;

    // 进入Geass判定
    this.state = {
      ...this.state,
      phase: 'geass',
      lastAction: `${challenger} 质疑！${wasLie ? '撒谎了！' : '是实话！'}`,
    };

    // 执行Geass判定
    const geassResult = this.geassSystem.performGeass(loser);
    
    // 更新状态
    if (loser === 'player') {
      this.state.playerStats = geassResult.newStats;
    } else {
      this.state.aiStats = geassResult.newStats;
    }

    this.state.geassResult = geassResult;

    // 检查游戏结束
    if (geassResult.newStats.hp <= 0) {
      this.state = {
        ...this.state,
        phase: 'game_over',
        winner: loser === 'player' ? 'ai' : 'player',
        lastAction: `${loser} 生命归零，游戏结束！`,
      };
      return this.state;
    }

    // 继续游戏
    this.state = {
      ...this.state,
      phase: loser === 'player' ? 'ai_turn' : 'player_turn',
      turnState: {
        ...this.state.turnState,
        currentPlayer: loser === 'player' ? 'ai' : 'player',
        turnNumber: this.state.turnState.turnNumber + 1,
        tableCards: [
          ...this.state.turnState.tableCards,
          ...playedCards.actualCards,
        ],
        playedCards: null,
      },
    };

    return this.state;
  }

  /**
   * 获取牌组系统
   */
  getCardSystem(): CardSystem {
    return this.cardSystem;
  }

  /**
   * 获取当前状态
   */
  getState(): GameState {
    return this.state;
  }

  /**
   * 重置游戏
   */
  reset(): void {
    this.state = this.createInitialState();
    this.cardSystem = new CardSystem();
  }
}

// 单例实例
export const gameEngine = new GameEngine();
