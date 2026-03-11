/**
 * Code Geass: Liar's Game - 游戏引擎
 * 1v3人机对战核心逻辑
 */

import { CardSystem, Card, CardRank } from './CardSystem';
import { GeassSystem, GeassResult, PlayerStats, FUNNY_ACTIONS } from './GeassSystem';
import type { CharacterId } from '../types';

export type GamePhase = 
  | 'setup'           // 游戏初始化
  | 'player_turn'     // 玩家回合
  | 'ai_turn'         // AI回合
  | 'challenge'       // 质疑阶段
  | 'resolve'         // 结算阶段
  | 'geass'           // Geass判定
  | 'game_over';      // 游戏结束

export interface AIPlayer {
  id: 'ai' | 'ai2' | 'ai3';
  name: string;
  character: CharacterId;
  hand: Card[];
  stats: PlayerStats;
  isActive: boolean;
}

export interface PlayedCards {
  cardIds: string[];
  claimedRank: CardRank;
  actualCards: Card[];
  playerId: 'player' | 'ai' | 'ai2' | 'ai3';
}

export interface GameState {
  phase: GamePhase;
  liarCard: CardRank | null;
  playerStats: PlayerStats;
  playerHand: Card[]; // 玩家手牌
  aiPlayers: AIPlayer[];
  currentPlayerIndex: number; // 0=player, 1=ai1, 2=ai2, 3=ai3
  turnState: {
    turnNumber: number;
    playedCards: PlayedCards | null;
    tableCards: Card[];
    lastPlayerId: 'player' | 'ai' | 'ai2' | 'ai3' | null;
  };
  lastAction: string;
  winner: 'player' | 'ai' | null;
  geassResult: GeassResult | null;
  playerSelectedCards: string[]; // 玩家当前选中的牌
  playerCharacter: CharacterId | null;
}

export class GameEngine {
  private cardSystem: CardSystem;
  private geassSystem: GeassSystem;
  private state: GameState;
  private playerCharacter: CharacterId | null = null;

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
      playerHand: [], // 初始为空
      aiPlayers: [
        { id: 'ai', name: 'C.C.', character: 'cc', hand: [], stats: { hp: 3, maxHp: 3, geassSuccessCount: 0, geassFailCount: 0 }, isActive: true },
        { id: 'ai2', name: '朱雀', character: 'suzaku', hand: [], stats: { hp: 3, maxHp: 3, geassSuccessCount: 0, geassFailCount: 0 }, isActive: true },
        { id: 'ai3', name: '卡莲', character: 'kallen', hand: [], stats: { hp: 3, maxHp: 3, geassSuccessCount: 0, geassFailCount: 0 }, isActive: true },
      ],
      currentPlayerIndex: 0,
      turnState: {
        turnNumber: 0,
        playedCards: null,
        tableCards: [],
        lastPlayerId: null,
      },
      lastAction: '',
      winner: null,
      geassResult: null,
      playerSelectedCards: [],
      playerCharacter: null,
    };
  }

  /**
   * 初始化游戏
   */
  initializeGame(playerCharacter: CharacterId): GameState {
    this.playerCharacter = playerCharacter;
    
    // 生成并洗牌
    this.cardSystem.generateDeck();
    this.cardSystem.shuffle();
    
    // 发牌
    const { playerCards, ai1Cards, ai2Cards, ai3Cards } = this.cardSystem.dealCards();
    
    // 设定骗子牌
    const liarCard = this.cardSystem.setLiarCard();
    
    this.state = {
      ...this.createInitialState(),
      phase: 'player_turn',
      liarCard,
      playerCharacter,
      playerHand: playerCards, // 保存玩家手牌
      aiPlayers: [
        { id: 'ai', name: 'C.C.', character: 'cc', hand: ai1Cards, stats: { hp: 3, maxHp: 3, geassSuccessCount: 0, geassFailCount: 0 }, isActive: true },
        { id: 'ai2', name: '朱雀', character: 'suzaku', hand: ai2Cards, stats: { hp: 3, maxHp: 3, geassSuccessCount: 0, geassFailCount: 0 }, isActive: true },
        { id: 'ai3', name: '卡莲', character: 'kallen', hand: ai3Cards, stats: { hp: 3, maxHp: 3, geassSuccessCount: 0, geassFailCount: 0 }, isActive: true },
      ],
      turnState: {
        turnNumber: 1,
        playedCards: null,
        tableCards: [],
        lastPlayerId: null,
      },
    };

    return this.state;
  }

  /**
   * 重置牌局（惩罚后重新发牌）
   */
  resetRound(): GameState {
    // 重置牌组
    this.cardSystem.reset();
    this.cardSystem.generateDeck();
    this.cardSystem.shuffle();
    
    // 重新发牌
    const { playerCards, ai1Cards, ai2Cards, ai3Cards } = this.cardSystem.dealCards();
    
    // 设定新的骗子牌
    const liarCard = this.cardSystem.setLiarCard();
    
    // 更新状态
    this.state.playerHand = playerCards;
    this.state.aiPlayers[0].hand = ai1Cards;
    this.state.aiPlayers[1].hand = ai2Cards;
    this.state.aiPlayers[2].hand = ai3Cards;
    this.state.liarCard = liarCard;
    this.state.phase = 'player_turn';
    this.state.currentPlayerIndex = 0;
    this.state.playerSelectedCards = [];
    this.state.turnState = {
      ...this.state.turnState,
      turnNumber: this.state.turnState.turnNumber + 1,
      playedCards: null,
      tableCards: [],
      lastPlayerId: null,
    };
    this.state.geassResult = null;
    this.state.lastAction = '牌局重置，重新发牌';
    
    return this.state;
  }

  /**
   * 获取当前活动玩家ID
   */
  getCurrentPlayerId(): 'player' | 'ai' | 'ai2' | 'ai3' {
    if (this.state.currentPlayerIndex === 0) return 'player';
    return this.state.aiPlayers[this.state.currentPlayerIndex - 1]?.id || 'ai';
  }

  /**
   * 获取下一个玩家索引
   */
  private getNextPlayerIndex(): number {
    let nextIndex = (this.state.currentPlayerIndex + 1) % 4;
    
    // 跳过已淘汰的玩家
    let attempts = 0;
    while (attempts < 4) {
      if (nextIndex === 0) {
        // 玩家
        if (this.state.playerStats.hp > 0) return nextIndex;
      } else {
        // AI
        const ai = this.state.aiPlayers[nextIndex - 1];
        if (ai && ai.isActive && ai.stats.hp > 0) return nextIndex;
      }
      nextIndex = (nextIndex + 1) % 4;
      attempts++;
    }
    
    return 0;
  }

  /**
   * 玩家选择/取消选择牌
   */
  toggleCardSelection(cardId: string): GameState {
    const selectedCards = this.state.playerSelectedCards;
    const cardIndex = selectedCards.indexOf(cardId);
    
    // Liar's Bar规则：每次可出1-3张牌
    // 卡莲技能：最多可选4张，其他角色最多3张
    const maxCards = this.playerCharacter === 'kallen' ? 4 : 3;
    
    if (cardIndex > -1) {
      // 取消选择
      this.state.playerSelectedCards = selectedCards.filter(id => id !== cardId);
    } else {
      // 选择牌
      if (selectedCards.length >= maxCards) {
        // 已达到上限，替换最后一张
        this.state.playerSelectedCards = [...selectedCards.slice(1), cardId];
      } else {
        this.state.playerSelectedCards = [...selectedCards, cardId];
      }
    }
    
    return this.state;
  }

  /**
   * 玩家出牌
   */
  playerPlayCards(claimedRank: CardRank): GameState {
    if (this.state.phase !== 'player_turn') {
      throw new Error('不是玩家回合');
    }

    const cardIds = this.state.playerSelectedCards;
    if (cardIds.length === 0) {
      throw new Error('未选择任何牌');
    }

    // 检查出牌数量限制
    if (this.playerCharacter === 'kallen' && cardIds.length > 4) {
      throw new Error('红莲突击最多出4张牌');
    }
    if (cardIds.length > 3) {
      throw new Error('最多只能出3张牌');
    }

    const cards = this.cardSystem.playCards(cardIds);
    
    // 更新玩家手牌 - 移除已出的牌
    this.state.playerHand = this.state.playerHand.filter(c => !cardIds.includes(c.id));
    
    // 检查玩家是否出完牌
    const isPlayerOutOfCards = this.state.playerHand.length === 0;
    
    this.state = {
      ...this.state,
      phase: 'challenge',
      playerSelectedCards: [],
      turnState: {
        ...this.state.turnState,
        playedCards: {
          cardIds,
          claimedRank,
          actualCards: cards,
          playerId: 'player',
        },
        lastPlayerId: 'player',
      },
      lastAction: `玩家出了 ${cardIds.length} 张牌，声称是 ${claimedRank}${isPlayerOutOfCards ? '（玩家手牌已出完！）' : ''}`,
    };

    return this.state;
  }

  /**
   * AI出牌
   */
  aiPlayCards(aiId: 'ai' | 'ai2' | 'ai3'): GameState {
    const aiIndex = this.state.aiPlayers.findIndex(ai => ai.id === aiId);
    if (aiIndex === -1) throw new Error('AI不存在');
    
    const ai = this.state.aiPlayers[aiIndex];
    if (!ai.isActive || ai.stats.hp <= 0) {
      // AI已淘汰，跳过
      this.state.currentPlayerIndex = this.getNextPlayerIndex();
      return this.state;
    }

    const aiCards = ai.hand;
    const liarCard = this.state.liarCard!;
    
    // AI策略
    // 注意：小丑牌(JOKER)可以当作骗子牌使用
    const liarCards = aiCards.filter(c => c.rank === liarCard || c.isJoker);
    const otherCards = aiCards.filter(c => c.rank !== liarCard && !c.isJoker);
    
    let selectedCards: Card[];
    let claimedRank: CardRank;
    
    // 卡莲AI可以出1-3张
    const maxAiCards = ai.character === 'kallen' ? 3 : 1;
    
    if (liarCards.length > 0 && Math.random() > 0.3) {
      // 有骗子牌，大概率出真的
      const count = Math.max(1, Math.min(maxAiCards, liarCards.length, Math.floor(Math.random() * maxAiCards) + 1));
      selectedCards = liarCards.slice(0, count);
      claimedRank = liarCard;
    } else {
      // 出其他牌，撒谎
      const count = Math.max(1, Math.min(maxAiCards, otherCards.length, Math.floor(Math.random() * maxAiCards) + 1));
      selectedCards = otherCards.slice(0, count);
      claimedRank = liarCard; // 声称是骗子牌
    }
    
    // 如果没有可选的牌，从所有手牌中选1张
    if (selectedCards.length === 0 && aiCards.length > 0) {
      selectedCards = [aiCards[0]];
    }
    
    // 最终保护：确保至少出1张牌
    if (selectedCards.length === 0) {
      console.error('AI没有牌可出，但不应该发生');
      selectedCards = aiCards.slice(0, 1);
    }

    const cardIds = selectedCards.map(c => c.id);
    const playedCards = this.cardSystem.playCards(cardIds);
    
    // 更新AI手牌
    ai.hand = ai.hand.filter(c => !cardIds.includes(c.id));
    
    // 检查AI是否出完牌
    const isAIOutOfCards = ai.hand.length === 0;

    this.state = {
      ...this.state,
      phase: 'challenge',
      turnState: {
        ...this.state.turnState,
        playedCards: {
          cardIds,
          claimedRank,
          actualCards: playedCards,
          playerId: aiId,
        },
        lastPlayerId: aiId,
      },
      lastAction: `${ai.name}出了 ${cardIds.length} 张牌，声称是 ${claimedRank}${isAIOutOfCards ? '（' + ai.name + '手牌已出完！）' : ''}`,
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

    const playedCards = this.state.turnState.playedCards;
    if (!playedCards) throw new Error('没有出牌记录');

    if (!challenge) {
      // 选择不质疑，进入下一个玩家回合
      this.state.currentPlayerIndex = this.getNextPlayerIndex();
      const nextPlayerId = this.getCurrentPlayerId();
      
      this.state = {
        ...this.state,
        phase: nextPlayerId === 'player' ? 'player_turn' : `${nextPlayerId}_turn` as GamePhase,
        turnState: {
          ...this.state.turnState,
          tableCards: [
            ...this.state.turnState.tableCards,
            ...playedCards.actualCards,
          ],
          playedCards: null,
          turnNumber: nextPlayerId === 'player' ? this.state.turnState.turnNumber + 1 : this.state.turnState.turnNumber,
        },
        lastAction: '玩家选择不质疑',
      };
      return this.state;
    }

    // 选择质疑，进入结算
    return this.resolveChallenge('player');
  }

  /**
   * AI质疑决策
   */
  aiChallengeDecision(aiId: 'ai' | 'ai2' | 'ai3'): GameState {
    if (this.state.phase !== 'challenge') {
      throw new Error('不在质疑阶段');
    }

    const playedCards = this.state.turnState.playedCards;
    if (!playedCards) throw new Error('没有出牌记录');

    // AI简单策略：随机质疑，但如果出牌者就是AI自己则不质疑
    if (playedCards.playerId === aiId) {
      // 不质疑自己，进入下一回合
      this.state.currentPlayerIndex = this.getNextPlayerIndex();
      const nextPlayerId = this.getCurrentPlayerId();
      
      this.state = {
        ...this.state,
        phase: nextPlayerId === 'player' ? 'player_turn' : `${nextPlayerId}_turn` as GamePhase,
        turnState: {
          ...this.state.turnState,
          tableCards: [
            ...this.state.turnState.tableCards,
            ...playedCards.actualCards,
          ],
          playedCards: null,
        },
        lastAction: `${aiId}选择不质疑`,
      };
      return this.state;
    }

    // 随机决定是否质疑
    const shouldChallenge = Math.random() > 0.6;

    if (!shouldChallenge) {
      this.state.currentPlayerIndex = this.getNextPlayerIndex();
      const nextPlayerId = this.getCurrentPlayerId();
      
      this.state = {
        ...this.state,
        phase: nextPlayerId === 'player' ? 'player_turn' : `${nextPlayerId}_turn` as GamePhase,
        turnState: {
          ...this.state.turnState,
          tableCards: [
            ...this.state.turnState.tableCards,
            ...playedCards.actualCards,
          ],
          playedCards: null,
        },
        lastAction: `${aiId}选择不质疑`,
      };
      return this.state;
    }

    return this.resolveChallenge(aiId);
  }

  /**
   * 执行Geass判定
   */
  private executeGeass(loser: 'player' | 'ai' | 'ai2' | 'ai3'): GeassResult {
    let geassResult: GeassResult;
    
    if (loser === 'player') {
      // 玩家受伤 - 检查是否是C.C.或朱雀
      const isCC = this.playerCharacter === 'cc';
      const isSuzaku = this.playerCharacter === 'suzaku';
      const isLowHP = isSuzaku && this.state.playerStats.hp <= 1;
      
      geassResult = this.geassSystem.performGeass('player', this.state.playerStats, isCC, isLowHP);
      this.state.playerStats = geassResult.newStats;
    } else {
      // AI受伤 - 检查AI角色
      const aiIndex = this.state.aiPlayers.findIndex(ai => ai.id === loser);
      const ai = this.state.aiPlayers[aiIndex];
      const isCC = ai.character === 'cc';
      const isSuzaku = ai.character === 'suzaku';
      const isLowHP = isSuzaku && ai.stats.hp <= 1;
      
      geassResult = this.geassSystem.performGeass(loser, ai.stats, isCC, isLowHP);
      ai.stats = geassResult.newStats;
      
      // 检查AI是否被淘汰
      if (ai.stats.hp <= 0) {
        ai.isActive = false;
      }
    }
    
    return geassResult;
  }

  /**
   * 结算质疑
   */
  private resolveChallenge(challenger: 'player' | 'ai' | 'ai2' | 'ai3'): GameState {
    const playedCards = this.state.turnState.playedCards!;
    const liarCard = this.state.liarCard!;
    
    // 检查是否撒谎
    const wasLie = playedCards.actualCards.some(c => c.rank !== liarCard);
    
    // 确定谁受伤
    const loser: 'player' | 'ai' | 'ai2' | 'ai3' = wasLie 
      ? playedCards.playerId
      : challenger;

    // 进入Geass判定
    this.state = {
      ...this.state,
      phase: 'geass',
      lastAction: `${challenger} 质疑！${wasLie ? '撒谎了！' : '是实话！'}`,
    };

    // 执行Geass判定
    const geassResult = this.executeGeass(loser);
    this.state.geassResult = geassResult;

    // 检查游戏结束
    const activeAIs = this.state.aiPlayers.filter(ai => ai.isActive && ai.stats.hp > 0);
    
    if (this.state.playerStats.hp <= 0) {
      this.state = {
        ...this.state,
        phase: 'game_over',
        winner: 'ai',
        lastAction: '玩家生命归零，游戏结束！',
      };
      return this.state;
    }
    
    if (activeAIs.length === 0) {
      this.state = {
        ...this.state,
        phase: 'game_over',
        winner: 'player',
        lastAction: '所有AI被淘汰，玩家胜利！',
      };
      return this.state;
    }

    // 继续游戏 - 惩罚后重置牌局（Liar's Bar规则）
    // 延迟后重置牌局
    setTimeout(() => {
      this.resetRound();
    }, 2000);
    
    // 先返回当前状态，让UI显示惩罚结果
    return this.state;
  }

  /**
   * 鲁鲁修技能：强制改变骗子牌
   */
  lelouchChangeLiarCard(newRank: CardRank): GameState {
    if (this.playerCharacter !== 'lelouch') {
      throw new Error('只有鲁鲁修可以使用此技能');
    }
    
    this.cardSystem.forceSetLiarCard(newRank);
    this.state.liarCard = newRank;
    this.state.lastAction = `鲁鲁修发动绝对命令！骗子牌变为 ${newRank}`;
    
    return this.state;
  }

  /**
   * 跳过回合
   */
  passTurn(): GameState {
    this.state.currentPlayerIndex = this.getNextPlayerIndex();
    const nextPlayerId = this.getCurrentPlayerId();
    
    this.state = {
      ...this.state,
      phase: nextPlayerId === 'player' ? 'player_turn' : `${nextPlayerId}_turn` as GamePhase,
      turnState: {
        ...this.state.turnState,
        turnNumber: nextPlayerId === 'player' ? this.state.turnState.turnNumber + 1 : this.state.turnState.turnNumber,
      },
      lastAction: '玩家选择跳过',
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
    this.playerCharacter = null;
  }
}

// 单例实例
export const gameEngine = new GameEngine();
