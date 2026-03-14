/**
 * Code Geass: Liar's Game - 游戏引擎（优化版）
 * 
 * 核心游戏逻辑，包含：
 * - 卡牌系统管理
 * - 回合制流程控制
 * - Geass判定系统
 * - 角色技能集成
 * - 胜负判定
 * 
 * @module core/GameEngine
 * @version 2.1.0
 * @requires CardSystem
 * @requires GeassSystem
 */

import { CardSystem, Card, CardRank } from './CardSystem';
import { GeassSystem, GeassResult, PlayerStats } from './GeassSystem';
import { FUNNY_ACTIONS } from '../types/game.types';
import { executeGeassWithChance } from './GeassSystemCompat';
import { getCharacterName } from '../data/characters';
import type { CharacterId } from '../types';
import type { CharacterState as CharacterStateInternal } from '../characters/types';
import { 
  createCharacterState, 
  canUseSkill, 
  applySkill,
  onTurnEnd,
  resetSkill,
  checkGeassImmunity,
  getGeassResistance,
  getMaxPlayCount,
} from '../characters/state';

// ============================================
// 类型定义
// ============================================

/** 游戏阶段 */
export type GamePhase = 
  | 'setup'           // 游戏初始化
  | 'player_turn'     // 玩家回合
  | 'ai_turn'         // AI回合
  | 'challenge'       // 质疑阶段
  | 'resolve'         // 结算阶段
  | 'geass'           // Geass判定
  | 'game_over';      // 游戏结束

/** AI玩家 */
export interface AIPlayer {
  id: 'ai' | 'ai2' | 'ai3';
  name: string;
  character: CharacterId;
  hand: Card[];
  stats: PlayerStats;
  isActive: boolean;
}

/** 出牌记录 */
export interface PlayedCards {
  cardIds: string[];
  claimedRank: CardRank;
  actualCards: Card[];
  playerId: 'player' | 'ai' | 'ai2' | 'ai3';
  isBluff: boolean;  // 是否为虚张声势
}

/** 游戏状态 */
export interface GameState {
  phase: GamePhase;
  liarCard: CardRank | null;
  playerStats: PlayerStats;
  playerHand: Card[];
  aiPlayers: AIPlayer[];
  currentPlayerIndex: number;
  turnState: {
    turnNumber: number;
    playedCards: PlayedCards | null;
    tableCards: Card[];
    lastPlayerId: 'player' | 'ai' | 'ai2' | 'ai3' | null;
  };
  lastAction: string;
  winner: 'player' | 'ai' | null;
  geassResult: GeassResult | null;
  playerSelectedCards: string[];
  playerCharacter: CharacterId | null;
  characterStates: Map<string, CharacterStateInternal>;  // 角色技能状态
}

// ============================================
// 游戏引擎类
// ============================================

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

  // ============================================
  // 初始化方法
  // ============================================

  /**
   * 创建初始游戏状态
   * @returns 初始状态对象
   */
  private createInitialState(): GameState {
    return {
      phase: 'setup',
      liarCard: null,
      playerStats: { hp: 3, maxHp: 3, geassSuccessCount: 0, geassFailCount: 0 },
      playerHand: [],
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
      characterStates: new Map(),
    };
  }

  /**
   * 初始化游戏
   * @param playerCharacter - 玩家选择的角色
   * @returns 初始化后的游戏状态
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
    
    // 随机选择起始玩家
    const startingPlayerIndex = Math.floor(Math.random() * 4);
    
    // 初始化角色技能状态
    const characterStates = new Map<string, CharacterStateInternal>();
    characterStates.set('player', createCharacterState(playerCharacter) as CharacterStateInternal);
    characterStates.set('ai', createCharacterState('cc') as CharacterStateInternal);
    characterStates.set('ai2', createCharacterState('suzaku') as CharacterStateInternal);
    characterStates.set('ai3', createCharacterState('kallen') as CharacterStateInternal);
    
    this.state = {
      ...this.createInitialState(),
      phase: startingPlayerIndex === 0 ? 'player_turn' : 'ai_turn',
      liarCard,
      playerCharacter,
      currentPlayerIndex: startingPlayerIndex,
      playerHand: playerCards,
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
      characterStates,
    };

    return this.state;
  }

  // ============================================
  // 回合管理
  // ============================================

  /**
   * 获取当前玩家ID
   * @returns 当前玩家ID
   */
  getCurrentPlayerId(): 'player' | 'ai' | 'ai2' | 'ai3' {
    if (this.state.currentPlayerIndex === 0) return 'player';
    return this.state.aiPlayers[this.state.currentPlayerIndex - 1]?.id || 'ai';
  }

  /**
   * 获取下一个玩家索引
   * @returns 下一个玩家的索引
   */
  private getNextPlayerIndex(): number {
    let nextIndex = (this.state.currentPlayerIndex + 1) % 4;
    
    // 跳过已淘汰的玩家
    let attempts = 0;
    while (attempts < 4) {
      if (nextIndex === 0) {
        if (this.state.playerStats.hp > 0) return nextIndex;
      } else {
        const ai = this.state.aiPlayers[nextIndex - 1];
        if (ai && ai.isActive && ai.stats.hp > 0) return nextIndex;
      }
      nextIndex = (nextIndex + 1) % 4;
      attempts++;
    }
    
    return -1; // 游戏结束
  }

  /**
   * 切换到下一个玩家
   */
  private moveToNextPlayer(): void {
    const nextIndex = this.getNextPlayerIndex();
    
    if (nextIndex === -1) {
      // 游戏结束
      this.checkGameOver();
      return;
    }
    
    this.state.currentPlayerIndex = nextIndex;
    this.state.phase = nextIndex === 0 ? 'player_turn' : 'ai_turn';
    
    // 处理角色技能冷却
    const playerId = this.getCurrentPlayerId();
    const charState = this.state.characterStates.get(playerId);
    if (charState) {
      const newState = onTurnEnd(charState);
      this.state.characterStates.set(playerId, newState as CharacterStateInternal);
    }
  }

  // ============================================
  // 出牌逻辑
  // ============================================

  /**
   * 玩家出牌
   * @param cardIds - 出的牌ID数组
   * @param claimedRank - 声称的牌型
   * @returns 是否成功出牌
   */
  playCards(cardIds: string[], claimedRank: CardRank): boolean {
    if (this.state.phase !== 'player_turn') return false;
    
    // 检查玩家手牌
    const cards: Card[] = [];
    for (const cardId of cardIds) {
      const card = this.state.playerHand.find(c => c.id === cardId);
      if (!card) return false;
      cards.push(card);
    }
    
    // 检查出牌数量限制（卡莲技能）
    const playerCharState = this.state.characterStates.get('player');
    const maxCards = playerCharState ? getMaxPlayCount(playerCharState) : 1;
    if (cardIds.length > maxCards) return false;
    
    // 从手牌中移除
    this.state.playerHand = this.state.playerHand.filter(
      c => !cardIds.includes(c.id)
    );
    
    // 检查是否为虚张声势
    const isBluff = cards.some(c => c.rank !== claimedRank && !c.isJoker);
    
    // 记录出牌
    this.state.turnState.playedCards = {
      cardIds,
      claimedRank,
      actualCards: cards,
      playerId: 'player',
      isBluff,
    };
    this.state.turnState.lastPlayerId = 'player';
    
    // 将牌添加到桌面
    this.state.turnState.tableCards.push(...cards);
    
    this.state.lastAction = `玩家出了${cardIds.length}张牌，声称是${claimedRank}`;
    
    // 检查手牌是否耗尽
    if (this.state.playerHand.length === 0) {
      this.handleEmptyHand('player');
    }
    
    return true;
  }

  /**
   * AI出牌
   * @param aiId - AI玩家ID
   * @param cardIds - 出的牌ID数组
   * @param claimedRank - 声称的牌型
   * @returns 是否成功出牌
   */
  aiPlayCards(
    aiId: 'ai' | 'ai2' | 'ai3',
    cardIds: string[],
    claimedRank: CardRank
  ): boolean {
    if (this.state.phase !== 'ai_turn') return false;
    
    const ai = this.state.aiPlayers.find(a => a.id === aiId);
    if (!ai) return false;
    
    // 检查AI手牌
    const cards: Card[] = [];
    for (const cardId of cardIds) {
      const card = ai.hand.find(c => c.id === cardId);
      if (!card) return false;
      cards.push(card);
    }
    
    // 检查出牌数量限制
    const charState = this.state.characterStates.get(aiId);
    const maxCards = charState ? getMaxPlayCount(charState) : 1;
    if (cardIds.length > maxCards) return false;
    
    // 从手牌中移除
    ai.hand = ai.hand.filter(c => !cardIds.includes(c.id));
    
    // 检查是否为虚张声势
    const isBluff = cards.some(c => c.rank !== claimedRank && !c.isJoker);
    
    // 记录出牌
    this.state.turnState.playedCards = {
      cardIds,
      claimedRank,
      actualCards: cards,
      playerId: aiId,
      isBluff,
    };
    this.state.turnState.lastPlayerId = aiId;
    
    // 将牌添加到桌面
    this.state.turnState.tableCards.push(...cards);
    
    this.state.lastAction = `${ai.name}出了${cardIds.length}张牌，声称是${claimedRank}`;
    
    // 检查手牌是否耗尽
    if (ai.hand.length === 0) {
      this.handleEmptyHand(aiId);
    }
    
    return true;
  }

  /**
   * 处理手牌耗尽
   * @param playerId - 玩家ID
   */
  private handleEmptyHand(playerId: 'player' | 'ai' | 'ai2' | 'ai3'): void {
    this.state.lastAction = `${playerId === 'player' ? '玩家' : playerId}手牌耗尽，重新发牌`;
    
    // 检查剩余牌堆
    const remainingCards = this.cardSystem.getRemainingCards();
    
    if (remainingCards < 4) {
      // 牌堆不足，重置牌局
      this.resetRound();
    } else {
      // 给该玩家补牌
      const newCards = this.cardSystem.drawCards(5);
      if (playerId === 'player') {
        this.state.playerHand.push(...newCards);
      } else {
        const ai = this.state.aiPlayers.find(a => a.id === playerId);
        if (ai) ai.hand.push(...newCards);
      }
    }
  }

  // ============================================
  // 质疑逻辑
  // ============================================

  /**
   * 质疑当前出牌
   * @param challengerId - 质疑者ID
   * @returns 质疑结果
   */
  challenge(challengerId: 'player' | 'ai' | 'ai2' | 'ai3'): {
    success: boolean;
    isBluff: boolean;
    targetId: 'player' | 'ai' | 'ai2' | 'ai3';
  } {
    const playedCards = this.state.turnState.playedCards;
    if (!playedCards) {
      return { success: false, isBluff: false, targetId: 'player' };
    }
    
    // 检查是否为虚张声势
    const isBluff = playedCards.isBluff;
    const targetId = playedCards.playerId;
    
    this.state.phase = 'geass';
    
    // 确定谁受到Geass
    const victimId = isBluff ? targetId : challengerId;
    
    // 执行Geass判定
    this.executeGeass(victimId);
    
    return {
      success: true,
      isBluff,
      targetId,
    };
  }

  // ============================================
  // Geass判定
  // ============================================

  /**
   * 执行Geass判定
   * @param targetId - 目标玩家ID
   */
  private executeGeass(targetId: 'player' | 'ai' | 'ai2' | 'ai3'): void {
    let baseChance = 1 / 3; // 基础1/3概率
    
    // 获取目标角色状态
    const charState = this.state.characterStates.get(targetId);
    let targetStats: PlayerStats;
    
    if (targetId === 'player') {
      targetStats = this.state.playerStats;
    } else {
      const ai = this.state.aiPlayers.find(a => a.id === targetId);
      if (!ai) return;
      targetStats = ai.stats;
    }
    
    // 应用角色技能效果
    if (charState) {
      // C.C. - 尝试免疫
      if (charState.characterId === 'cc') {
        const immune = checkGeassImmunity(charState);
        if (immune) {
          this.state.geassResult = {
            activated: true,
            hit: false,
            damage: 0,
            funnyAction: FUNNY_ACTIONS[0].description,
            message: 'C.C.的不老不死发动，免疫了Geass！',
            isImmune: true,
          };
          this.state.lastAction = `C.C.免疫了Geass！`;
          return;
        }
      }
      
      // 朱雀 - 计算抗性
      if (charState.characterId === 'suzaku') {
        const resistance = getGeassResistance(charState, targetStats.hp);
        baseChance *= resistance;
      }
    }
    
    // 执行判定
    const result = executeGeassWithChance(targetId, baseChance);
    this.state.geassResult = result;
    
    // 应用伤害
    if (result.hit) {
      targetStats.hp -= result.damage;
      targetStats.geassSuccessCount++;
      
      // 检查是否被淘汰
      if (targetStats.hp <= 0) {
        if (targetId !== 'player') {
          const ai = this.state.aiPlayers.find(a => a.id === targetId);
          if (ai) ai.isActive = false;
        }
      }
      
      this.state.lastAction = `${targetId === 'player' ? '玩家' : targetId}受到了Geass！${result.funnyAction}`;
    } else {
      targetStats.geassFailCount++;
      this.state.lastAction = `${targetId === 'player' ? '玩家' : targetId}躲过了Geass！`;
    }
  }

  // ============================================
  // 角色技能
  // ============================================

  /**
   * 使用角色技能
   * @param playerId - 玩家ID
   * @returns 是否成功使用
   */
  useCharacterSkill(playerId: 'player' | 'ai' | 'ai2' | 'ai3'): boolean {
    const charState = this.state.characterStates.get(playerId);
    if (!charState) return false;
    
    if (!canUseSkill(charState)) return false;
    
    const newState = applySkill(charState);
    this.state.characterStates.set(playerId, newState);
    
    // 鲁鲁修技能 - 强制改变骗子牌
    if (charState.characterId === 'lelouch' && this.state.liarCard) {
      const ranks: CardRank[] = ['Q', 'K', 'A'];
      const currentIndex = ranks.indexOf(this.state.liarCard);
      const nextIndex = (currentIndex + 1) % ranks.length;
      this.state.liarCard = ranks[nextIndex];
      this.state.lastAction = '鲁鲁修发动绝对命令，改变了骗子牌！';
    } else {
      const name = playerId === 'player' ? '玩家' : playerId;
      this.state.lastAction = `${name}发动了${getCharacterName(charState.characterId)}的技能！`;
    }
    
    return true;
  }

  /**
   * 检查是否可以使用技能
   * @param playerId - 玩家ID
   * @returns 是否可以使用
   */
  canUseCharacterSkill(playerId: 'player' | 'ai' | 'ai2' | 'ai3'): boolean {
    const charState = this.state.characterStates.get(playerId);
    if (!charState) return false;
    return canUseSkill(charState);
  }

  // ============================================
  // 游戏流程控制
  // ============================================

  /**
   * 结束当前回合
   */
  endTurn(): void {
    this.state.turnState.turnNumber++;
    this.state.turnState.playedCards = null;
    this.state.geassResult = null;
    
    this.moveToNextPlayer();
    this.checkGameOver();
  }

  /**
   * 重置牌局（惩罚后重新发牌）
   * @returns 重置后的状态
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
    
    // 随机选择起始玩家
    const startingPlayerIndex = Math.floor(Math.random() * 4);
    
    // 更新状态
    this.state.playerHand = playerCards;
    this.state.aiPlayers[0].hand = ai1Cards;
    this.state.aiPlayers[1].hand = ai2Cards;
    this.state.aiPlayers[2].hand = ai3Cards;
    this.state.liarCard = liarCard;
    this.state.phase = startingPlayerIndex === 0 ? 'player_turn' : 'ai_turn';
    this.state.currentPlayerIndex = startingPlayerIndex;
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
    
    // 重置角色技能
    this.state.characterStates.forEach((charState, id) => {
      this.state.characterStates.set(id, resetSkill(charState));
    });
    
    return this.state;
  }

  /**
   * 检查游戏是否结束
   * @returns 是否结束
   */
  checkGameOver(): boolean {
    // 检查玩家是否存活
    const playerAlive = this.state.playerStats.hp > 0;
    
    // 检查AI是否全部淘汰
    const aiAliveCount = this.state.aiPlayers.filter(
      ai => ai.isActive && ai.stats.hp > 0
    ).length;
    
    if (!playerAlive) {
      this.state.winner = 'ai';
      this.state.phase = 'game_over';
      return true;
    }
    
    if (aiAliveCount === 0) {
      this.state.winner = 'player';
      this.state.phase = 'game_over';
      return true;
    }
    
    return false;
  }

  // ============================================
  // 状态获取
  // ============================================

  /**
   * 获取当前游戏状态
   * @returns 游戏状态（深拷贝）
   */
  getState(): GameState {
    return JSON.parse(JSON.stringify(this.state));
  }

  /**
   * 获取玩家手牌
   * @returns 玩家手牌数组
   */
  getPlayerHand(): Card[] {
    return [...this.state.playerHand];
  }

  /**
   * 获取AI手牌
   * @param aiId - AI玩家ID
   * @returns AI手牌数组
   */
  getAIHand(aiId: 'ai' | 'ai2' | 'ai3'): Card[] {
    const ai = this.state.aiPlayers.find(a => a.id === aiId);
    return ai ? [...ai.hand] : [];
  }

  /**
   * 获取当前骗子牌
   * @returns 骗子牌
   */
  getLiarCard(): CardRank | null {
    return this.state.liarCard;
  }

  /**
   * 获取角色状态
   * @param playerId - 玩家ID
   * @returns 角色状态
   */
  getCharacterState(playerId: string): CharacterStateInternal | undefined {
    return this.state.characterStates.get(playerId);
  }
}
