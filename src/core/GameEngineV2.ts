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
import { getCharacterName } from '../data/characters';
import type { CharacterId } from '../types';
import type { CharacterState as CharacterStateInternal } from '../characters/types';
import {
  createCharacterState,
  canUseSkill,
  applySkill,
  onTurnEnd,
  resetSkill,
  getMaxPlayCount,
} from '../characters/state';
import {
  INDEX_TO_PLAYER_ID,
  INDEX_TO_AI_ARRAY_INDEX,
  getNextPlayerIndex as getNextIndex,
  getIndexByPlayerId,
  getAIPlayerByIndex,
  getAIPlayerById,
  type PlayerId,
} from './PlayerIndexMapper';

// ============================================
// 模块级辅助函数
// ============================================

/** 获取角色初始HP（朱雀4点，其他3点） */
const getCharacterInitialHP = (charId: CharacterId): number =>
  charId === 'suzaku' ? 4 : 3;

// ============================================
// 类型定义
// ============================================

/** 游戏阶段 */
export type GamePhase =
  | 'setup' // 游戏初始化
  | 'player_turn' // 玩家回合
  | 'ai_turn' // AI回合
  | 'challenge' // 质疑阶段
  | 'resolve' // 结算阶段
  | 'geass' // Geass判定
  | 'game_over'; // 游戏结束

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
  isBluff: boolean; // 是否为虚张声势
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
    geassConsecutiveMisses: number;
    /** 当前回合的先手角色索引（用于顺时针轮转） */
    firstPlayerIndex: number;
  };
  lastAction: string;
  winner: 'player' | 'ai' | null;
  geassResult: GeassResult | null;
  playerSelectedCards: string[];
  playerCharacter: CharacterId | null;
  characterStates: Map<string, CharacterStateInternal>; // 角色技能状态
}

// ============================================
// 游戏引擎类
// ============================================

export class GameEngine {
  private cardSystem: CardSystem;
  private geassSystem: GeassSystem;
  private state: GameState;

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
        {
          id: 'ai',
          name: 'C.C.',
          character: 'cc',
          hand: [],
          stats: { hp: 3, maxHp: 3, geassSuccessCount: 0, geassFailCount: 0 },
          isActive: true,
        },
        {
          id: 'ai2',
          name: '朱雀',
          character: 'suzaku',
          hand: [],
          stats: { hp: 3, maxHp: 3, geassSuccessCount: 0, geassFailCount: 0 },
          isActive: true,
        },
        {
          id: 'ai3',
          name: '卡莲',
          character: 'kallen',
          hand: [],
          stats: { hp: 3, maxHp: 3, geassSuccessCount: 0, geassFailCount: 0 },
          isActive: true,
        },
      ],
      currentPlayerIndex: 0,
      turnState: {
        turnNumber: 0,
        playedCards: null,
        tableCards: [],
        lastPlayerId: null,
        geassConsecutiveMisses: 0,
        firstPlayerIndex: 0,
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
  initializeGame(playerCharacter: CharacterId, aiCharacters?: CharacterId[]): GameState {

    // 生成并洗牌
    this.cardSystem.generateDeck();
    this.cardSystem.shuffle();

    // 发牌
    const { playerCards, ai1Cards, ai2Cards, ai3Cards } = this.cardSystem.dealCards();

    // 设定骗子牌
    const liarCard = this.cardSystem.setLiarCard();

    // 随机选择起始玩家
    const startingPlayerIndex = Math.floor(Math.random() * 4);

    // 确定AI角色（如果未提供则使用默认）
    const aiChars = aiCharacters || ['cc', 'suzaku', 'kallen'];

    // 初始化角色技能状态
    const characterStates = new Map<string, CharacterStateInternal>();
    characterStates.set('player', createCharacterState(playerCharacter) as CharacterStateInternal);
    characterStates.set('ai', createCharacterState(aiChars[0]) as CharacterStateInternal);
    characterStates.set('ai2', createCharacterState(aiChars[1]) as CharacterStateInternal);
    characterStates.set('ai3', createCharacterState(aiChars[2]) as CharacterStateInternal);

    this.state = {
      ...this.createInitialState(),
      phase: startingPlayerIndex === 0 ? 'player_turn' : 'ai_turn',
      liarCard,
      playerCharacter,
      currentPlayerIndex: startingPlayerIndex,
      playerHand: playerCards,
      aiPlayers: [
        {
          id: 'ai',
          name: getCharacterName(aiChars[0]),
          character: aiChars[0],
          hand: ai1Cards,
          stats: { hp: getCharacterInitialHP(aiChars[0]), maxHp: getCharacterInitialHP(aiChars[0]), geassSuccessCount: 0, geassFailCount: 0 },
          isActive: true,
        },
        {
          id: 'ai2',
          name: getCharacterName(aiChars[1]),
          character: aiChars[1],
          hand: ai2Cards,
          stats: { hp: getCharacterInitialHP(aiChars[1]), maxHp: getCharacterInitialHP(aiChars[1]), geassSuccessCount: 0, geassFailCount: 0 },
          isActive: true,
        },
        {
          id: 'ai3',
          name: getCharacterName(aiChars[2]),
          character: aiChars[2],
          hand: ai3Cards,
          stats: { hp: getCharacterInitialHP(aiChars[2]), maxHp: getCharacterInitialHP(aiChars[2]), geassSuccessCount: 0, geassFailCount: 0 },
          isActive: true,
        },
      ],
      playerStats: { hp: getCharacterInitialHP(playerCharacter), maxHp: getCharacterInitialHP(playerCharacter), geassSuccessCount: 0, geassFailCount: 0 },
      turnState: {
        turnNumber: 1,
        playedCards: null,
        tableCards: [],
        lastPlayerId: null,
        geassConsecutiveMisses: 0,
        firstPlayerIndex: startingPlayerIndex,
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
    return INDEX_TO_PLAYER_ID[this.state.currentPlayerIndex] || 'player';
  }

  /**
   * 获取下一个玩家索引
   * @returns 下一个玩家的索引
   */
  private getNextPlayerIndex(): number {
    let nextIndex = getNextIndex(this.state.currentPlayerIndex);

    // 跳过已淘汰的玩家
    let attempts = 0;
    while (attempts < 4) {
      if (nextIndex === 0) {
        if (this.state.playerStats.hp > 0) return nextIndex;
      } else {
        // 使用统一的映射系统获取AI
        const aiArrayIndex = INDEX_TO_AI_ARRAY_INDEX[nextIndex];
        if (aiArrayIndex !== null && aiArrayIndex !== undefined) {
          const ai = this.state.aiPlayers[aiArrayIndex];
          if (ai && ai.isActive && ai.stats.hp > 0) return nextIndex;
        }
      }
      nextIndex = getNextIndex(nextIndex);
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
    this.state.playerHand = this.state.playerHand.filter(c => !cardIds.includes(c.id));

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

    // 将牌添加到桌面（使用不可变更新）
    this.state.turnState.tableCards = [...this.state.turnState.tableCards, ...cards];

    this.state.lastAction = `玩家出了${cardIds.length}张牌，声称是${claimedRank}`;

    // 检查手牌是否耗尽
    if (this.state.playerHand.length === 0) {
      this.handleEmptyHand('player');
    } else {
      // 进入质疑阶段
      this.state.phase = 'challenge';
    }

    return true;
  }



  /**
   * 处理手牌耗尽 - 直接获得胜利
   * @param playerId - 玩家ID
   */
  private handleEmptyHand(playerId: 'player' | 'ai' | 'ai2' | 'ai3'): void {
    this.state.lastAction = `${playerId === 'player' ? '玩家' : playerId}手牌耗尽，获得胜利！`;

    // 手牌耗尽直接获得胜利
    this.state.winner = playerId === 'player' ? 'player' : 'ai';
    this.state.phase = 'game_over';
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
    
    // 确定攻击者ID（用于反击技能）
    // 当质疑失败时，攻击者是出牌者（targetId）
    // 当质疑成功时，攻击者是质疑者（challengerId）
    const attackerId = isBluff ? challengerId : targetId;

    // 设置lastAction用于动画触发 - 使用PlayerIndexMapper获取名称
    const getPlayerName = (playerId: PlayerId): string => {
      if (playerId === 'player') return '玩家';
      const ai = getAIPlayerById(playerId, this.state.aiPlayers);
      return ai?.name || playerId;
    };
    const challengerName = getPlayerName(challengerId as PlayerId);
    const targetName = getPlayerName(targetId as PlayerId);
    this.state.lastAction = `${challengerName}向${targetName}发起质疑！`;

    // 执行Geass判定，传入攻击者ID用于反击技能
    this.executeGeass(victimId, attackerId);

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
   * @param challengerId - 质疑者ID（用于反击技能）
   */
  private executeGeass(targetId: 'player' | 'ai' | 'ai2' | 'ai3', challengerId?: 'player' | 'ai' | 'ai2' | 'ai3'): void {
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

    // 计算卡莲技能加成
    let hitChanceBoost = 0;
    if (charState?.characterId === 'kallen' && charState.kallenCardCount && charState.kallenCardCount >= 2) {
      hitChanceBoost = Math.min(0.8, charState.kallenCardCount * 0.2);
    }

    // 使用GeassSystem执行判定，传入连续闪避次数和攻击者ID（用于反击）
    const result = this.geassSystem.performGeass(
      targetId,
      targetStats,
      charState?.characterId || null,
      hitChanceBoost,
      this.state.turnState.geassConsecutiveMisses,
      challengerId  // 传递攻击者ID，用于朱雀反击
    );

    this.state.geassResult = result;

    // 处理朱雀反击技能
    if (!result.hit && result.isCounter && challengerId) {
      // 反击：让质疑者承受伤害
      const damage = 1;

      if (challengerId === 'player') {
        this.state.playerStats = {
          ...this.state.playerStats,
          hp: Math.max(0, this.state.playerStats.hp - damage),
        };
        if (this.state.playerStats.hp <= 0) {
          this.checkGameOver();
        }
      } else {
        const challengerAI = this.state.aiPlayers.find(a => a.id === challengerId);
        if (challengerAI) {
          challengerAI.stats = {
            ...challengerAI.stats,
            hp: Math.max(0, challengerAI.stats.hp - damage),
          };
          if (challengerAI.stats.hp <= 0) {
            challengerAI.isActive = false;
            this.checkGameOver();
          }
        }
      }
      this.state.lastAction = `${targetId === 'player' ? '玩家' : targetId}发动枢木剑术反击！${challengerId === 'player' ? '玩家' : challengerId}受到反弹伤害！`;
      // 反击造成了实际伤害，重置连续闪避次数
      this.state.turnState.geassConsecutiveMisses = 0;
      return;
    }

    // 应用伤害
    if (result.hit && result.newStats) {
      // 更新目标状态
      if (targetId === 'player') {
        this.state.playerStats = result.newStats;
      } else {
        const ai = this.state.aiPlayers.find(a => a.id === targetId);
        if (ai) ai.stats = result.newStats;
      }

      // 更新角色状态中的复活标记
      if (result.newStats.ccReviveUsed && charState) {
        charState.ccReviveUsed = true;
      }

      // 检查是否被淘汰
      if (result.newStats.hp <= 0) {
        if (targetId !== 'player') {
          const ai = this.state.aiPlayers.find(a => a.id === targetId);
          if (ai) ai.isActive = false;
        }
        // 检查游戏是否结束
        this.checkGameOver();
      }

      // 有玩家扣血，重置连续闪避次数
      this.state.turnState.geassConsecutiveMisses = 0;

      this.state.lastAction = `${targetId === 'player' ? '玩家' : targetId}受到了Geass！${result.funnyAction || ''}`;
    } else {
      // 更新闪避计数
      if (result.newStats) {
        if (targetId === 'player') {
          this.state.playerStats = result.newStats;
        } else {
          const ai = this.state.aiPlayers.find(a => a.id === targetId);
          if (ai) ai.stats = result.newStats;
        }
      }
      // Geass未命中，增加连续闪避次数
      this.state.turnState.geassConsecutiveMisses++;
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
   * @param startingPlayerIndex - 指定起始玩家索引（可选，默认选择下一个存活玩家）
   * @returns 重置后的状态
   */
  resetRound(startingPlayerIndex?: number): GameState {
    // 重置牌组
    this.cardSystem.reset();
    this.cardSystem.generateDeck();
    this.cardSystem.shuffle();

    // 重新发牌
    const { playerCards, ai1Cards, ai2Cards, ai3Cards } = this.cardSystem.dealCards();

    // 设定新的骗子牌
    const liarCard = this.cardSystem.setLiarCard();

    // 选择起始玩家
    let nextStartingPlayerIndex: number;
    
    if (startingPlayerIndex !== undefined) {
      // 如果指定了起始玩家，检查是否存活
      nextStartingPlayerIndex = this.findNextActivePlayer(startingPlayerIndex);
    } else {
      // 随机选择，但确保是存活的玩家
      const activePlayers = this.getActivePlayerIndices();
      nextStartingPlayerIndex = activePlayers[Math.floor(Math.random() * activePlayers.length)];
    }

    // 更新状态
    this.state.playerHand = playerCards;
    this.state.aiPlayers[0].hand = ai1Cards;
    this.state.aiPlayers[1].hand = ai2Cards;
    this.state.aiPlayers[2].hand = ai3Cards;
    this.state.liarCard = liarCard;
    this.state.phase = nextStartingPlayerIndex === 0 ? 'player_turn' : 'ai_turn';
    this.state.currentPlayerIndex = nextStartingPlayerIndex;
    this.state.playerSelectedCards = [];
    this.state.turnState = {
      ...this.state.turnState,
      turnNumber: this.state.turnState.turnNumber + 1,
      playedCards: null,
      tableCards: [],
      lastPlayerId: null,
      geassConsecutiveMisses: this.state.turnState.geassConsecutiveMisses,
      firstPlayerIndex: nextStartingPlayerIndex, // 同步更新先手角色索引
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
   * 重置游戏到初始状态
   * @returns 重置后的状态
   */
  reset(): GameState {
    this.state = this.createInitialState();
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
    const aiAliveCount = this.state.aiPlayers.filter(ai => ai.isActive && ai.stats.hp > 0).length;

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

  /**
   * 获取所有存活玩家的索引
   * @returns 存活玩家索引数组 [0=玩家, 1=AI3, 2=AI2, 3=AI1]
   */
  private getActivePlayerIndices(): number[] {
    const activeIndices: number[] = [];

    // 检查玩家 (currentPlayerIndex = 0)
    if (this.state.playerStats.hp > 0) {
      activeIndices.push(0);
    }

    // 使用PlayerIndexMapper系统检查AI（与 PLAYER_ID_TO_INDEX 保持一致）
    // ai3/卡莲 -> currentPlayerIndex = 1 (上方)
    const ai3 = getAIPlayerById('ai3', this.state.aiPlayers);
    if (ai3 && ai3.isActive && ai3.stats.hp > 0) {
      activeIndices.push(1);
    }

    // ai2/朱雀 -> currentPlayerIndex = 2 (右方)
    const ai2 = getAIPlayerById('ai2', this.state.aiPlayers);
    if (ai2 && ai2.isActive && ai2.stats.hp > 0) {
      activeIndices.push(2);
    }

    // ai/C.C. -> currentPlayerIndex = 3
    const ai1 = getAIPlayerById('ai', this.state.aiPlayers);
    if (ai1 && ai1.isActive && ai1.stats.hp > 0) {
      activeIndices.push(3);
    }

    return activeIndices;
  }

  /**
   * 查找下一个存活的玩家
   * @param startIndex - 起始索引
   * @returns 下一个存活玩家的索引
   */
  private findNextActivePlayer(startIndex: number): number {
    const activePlayers = this.getActivePlayerIndices();
    
    if (activePlayers.length === 0) {
      return 0; // 默认返回玩家
    }
    
    // 如果起始玩家存活，直接返回
    if (activePlayers.includes(startIndex)) {
      return startIndex;
    }
    
    // 否则顺时针查找下一个存活的玩家
    for (let i = 1; i <= 4; i++) {
      const nextIndex = (startIndex + i) % 4;
      if (activePlayers.includes(nextIndex)) {
        return nextIndex;
      }
    }
    
    return activePlayers[0]; // 默认返回第一个存活的玩家
  }

  // ============================================
  // 状态获取
  // ============================================

  /**
   * 获取当前游戏状态
   * @returns 游戏状态（深拷贝，使用 structuredClone 正确处理 Map 类型）
   */
  getState(): GameState {
    return structuredClone(this.state);
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

  // ============================================
  // App.tsx 兼容方法
  // ============================================

  /**
   * 切换牌的选中状态（用于UI交互）
   * @param cardId - 卡牌ID
   */
  toggleCardSelection(cardId: string): void {
    // 检查牌是否存在于玩家手牌中
    const cardExists = this.state.playerHand.some(c => c.id === cardId);
    if (!cardExists) return;

    const index = this.state.playerSelectedCards.indexOf(cardId);
    if (index > -1) {
      this.state.playerSelectedCards.splice(index, 1);
    } else {
      // 检查出牌数量限制（统一使用 characters/state.ts 中的 getMaxPlayCount）
      const charState = this.state.characterStates.get('player');
      const maxCards = charState ? getMaxPlayCount(charState) : 1;
      if (this.state.playerSelectedCards.length < maxCards) {
        this.state.playerSelectedCards.push(cardId);
      }
    }
  }

  /**
   * 清除所有选中的牌
   */
  clearCardSelection(): void {
    this.state.playerSelectedCards = [];
  }

  /**
   * 玩家出牌（使用已选中的牌）
   * @returns 新的游戏状态
   */
  playerPlayCards(): GameState {
    if (this.state.playerSelectedCards.length === 0) {
      throw new Error('未选择任何牌');
    }

    // 检查是否是玩家回合
    if (this.state.phase !== 'player_turn') {
      throw new Error('当前不是玩家回合');
    }

    // 自动确定声称的牌型（使用当前骗子牌）
    const claimedRank = this.state.liarCard || 'Q';

    const success = this.playCards(this.state.playerSelectedCards, claimedRank);
    if (!success) {
      throw new Error('出牌失败');
    }

    this.state.playerSelectedCards = [];

    return this.getState();
  }

  /**
   * AI自动出牌
   * @param aiId - AI玩家ID
   * @param preferredCardIds - 外部决策引擎提供的优选卡牌ID（可选，否则随机选择）
   * @returns 新的游戏状态
   */
  aiPlayCards(aiId: 'ai' | 'ai2' | 'ai3', preferredCardIds?: string[]): GameState {
    if (this.state.phase !== 'ai_turn') {
      return this.getState();
    }

    const ai = this.state.aiPlayers.find(a => a.id === aiId);
    if (!ai || ai.hand.length === 0) return this.getState();

    let cardIds: string[];
    if (preferredCardIds && preferredCardIds.length > 0) {
      // 验证外部决策的卡牌确实在手牌中
      const validIds = preferredCardIds.filter(id => ai.hand.some(c => c.id === id));
      cardIds = validIds.length > 0 ? validIds : [ai.hand[0].id];
    } else {
      // 默认随机选1-2张
      const cardCount = Math.min(ai.hand.length, Math.floor(Math.random() * 2) + 1);
      cardIds = ai.hand.slice(0, cardCount).map(c => c.id);
    }

    const claimedRank = this.state.liarCard || 'Q';
    this.aiPlayCardsInternal(aiId, cardIds, claimedRank);

    return this.getState();
  }

  /**
   * 内部AI出牌方法（重命名以避免递归）
   */
  private aiPlayCardsInternal(aiId: 'ai' | 'ai2' | 'ai3', cardIds: string[], claimedRank: CardRank): boolean {
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

    // 将牌添加到桌面（使用不可变更新）
    this.state.turnState.tableCards = [...this.state.turnState.tableCards, ...cards];

    this.state.lastAction = `${ai.name}出了${cardIds.length}张牌，声称是${claimedRank}`;

    // 检查手牌是否耗尽
    if (ai.hand.length === 0) {
      this.handleEmptyHand(aiId);
    } else {
      // 进入质疑阶段
      this.state.phase = 'challenge';
    }

    return true;
  }

  /**
   * 玩家质疑决策
   * @param shouldChallenge - 是否质疑
   * @returns 新的游戏状态
   */
  playerChallengeDecision(shouldChallenge: boolean): GameState {
    if (!shouldChallenge) {
      // 不质疑，结束质疑阶段
      return this.endChallengePhase();
    }

    // challenge方法内部已经执行了executeGeass，这里不需要重复调用
    this.challenge('player');

    return this.getState();
  }

  /**
   * AI质疑决策
   * @param aiId - AI玩家ID
   * @returns 新的游戏状态
   */
  aiChallengeDecision(aiId: 'ai' | 'ai2' | 'ai3'): GameState {
    // challenge方法内部已经执行了executeGeass，这里不需要重复调用
    this.challenge(aiId);

    return this.getState();
  }

  /**
   * 检查玩家是否可以使用技能
   * @param playerId - 玩家ID
   * @returns 是否可以使用
   */
  canPlayerUseSkill(playerId: 'player' | 'ai' | 'ai2' | 'ai3'): boolean {
    const charState = this.state.characterStates.get(playerId);
    if (!charState) return false;

    return canUseSkill(charState);
  }

  /**
   * 鲁鲁修技能：改变骗子牌
   * @param newRank - 新的骗子牌点数
   * @returns 新的游戏状态
   */
  lelouchChangeLiarCard(newRank: CardRank): GameState {
    const charState = this.state.characterStates.get('player');
    if (!charState || charState.characterId !== 'lelouch') {
      throw new Error('只有鲁鲁修可以使用此技能');
    }

    if (!canUseSkill(charState)) {
      throw new Error('技能冷却中或已使用');
    }

    // 应用技能
    const newState = applySkill(charState);
    this.state.characterStates.set('player', newState as CharacterStateInternal);

    // 改变骗子牌
    this.state.liarCard = newRank;
    this.state.lastAction = `鲁鲁修发动绝对命令！骗子牌变为 ${newRank}`;

    return this.getState();
  }

  /**
   * 进入质疑阶段
   * @returns 新的游戏状态
   */
  enterChallengePhase(): GameState {
    this.state.phase = 'challenge';
    this.state.lastAction = '进入质疑阶段';
    return this.getState();
  }

  /**
   * 结束质疑阶段，继续下一回合
   * @param continueWithSamePlayer - 无人质疑时是否由原出牌者继续出牌
   * @returns 新的游戏状态
   */
  endChallengePhase(continueWithSamePlayer: boolean = false): GameState {
    // 注意：tableCards 在 playCards/aiPlayCardsInternal 出牌时已添加，此处不再重复添加

    // 检查游戏是否已经结束（手牌耗尽等情况）
    if (this.state.phase === 'game_over') {
      return this.getState();
    }

    if (continueWithSamePlayer) {
      // 无人质疑，同一出牌者继续出牌
      // 维持当前回合状态不变，先保存出牌者信息
      const playedBy = this.state.turnState.lastPlayerId || this.state.turnState.playedCards?.playerId;
      
      // 检查出牌者手牌是否为空（手牌耗尽胜利条件）
      if (playedBy === 'player' && this.state.playerHand.length === 0) {
        this.state.lastAction = '玩家手牌耗尽，获得胜利！';
        this.state.winner = 'player';
        this.state.phase = 'game_over';
        return this.getState();
      } else if (playedBy && playedBy !== 'player') {
        const ai = this.state.aiPlayers.find(a => a.id === playedBy);
        if (ai && ai.hand.length === 0) {
          this.state.lastAction = `${ai.name}手牌耗尽，获得胜利！`;
          this.state.winner = 'ai';
          this.state.phase = 'game_over';
          return this.getState();
        }
      }
      
      this.state.turnState.playedCards = null;
      this.state.lastAction = '无人质疑，回合继续';

      // 使用统一的PlayerIndexMapper系统设置currentPlayerIndex和phase
      // 无人质疑时，先手角色保持不变（同一玩家继续出牌）
      if (playedBy) {
        const playerIndex = getIndexByPlayerId(playedBy as PlayerId);
        if (playerIndex !== null) {
          this.state.currentPlayerIndex = playerIndex;
          this.state.phase = playerIndex === 0 ? 'player_turn' : 'ai_turn';
          // 更新firstPlayerIndex为当前出牌者，确保下一回合轮转正确
          this.state.turnState.firstPlayerIndex = playerIndex;
        } else {
          // 默认情况，使用当前索引
          this.state.phase = this.state.currentPlayerIndex === 0 ? 'player_turn' : 'ai_turn';
        }
      } else {
        // 默认情况，使用当前索引
        this.state.phase = this.state.currentPlayerIndex === 0 ? 'player_turn' : 'ai_turn';
      }

      // 记录日志 - 使用PlayerIndexMapper获取名称
      const getPlayerName = (playerId: PlayerId): string => {
        if (playerId === 'player') return '玩家';
        const ai = getAIPlayerById(playerId, this.state.aiPlayers);
        return ai?.name || playerId;
      };
      if (process.env.NODE_ENV !== 'production') {
        const playedByName = playedBy ? getPlayerName(playedBy as PlayerId) : playedBy;
        console.log(`[endChallengePhase] 无人质疑，${playedByName}继续出牌，currentPlayerIndex: ${this.state.currentPlayerIndex}`);
      }

      return this.getState();
    }

    // 有质疑发生，正常进入下一回合
    // 新机制：从上一回合先手角色的下家开始（顺时针轮转）
    const currentFirstPlayerIndex = this.state.turnState.firstPlayerIndex;

    // 计算下一回合的先手角色（当前先手角色的下家）
    let nextFirstPlayerIndex = getNextIndex(currentFirstPlayerIndex);

    // 跳过已淘汰的玩家
    let attempts = 0;
    while (attempts < 4) {
      if (nextFirstPlayerIndex === 0) {
        if (this.state.playerStats.hp > 0) break;
      } else {
        // 使用统一的映射系统获取AI
        const aiArrayIndex = INDEX_TO_AI_ARRAY_INDEX[nextFirstPlayerIndex];
        if (aiArrayIndex !== null && aiArrayIndex !== undefined) {
          const ai = this.state.aiPlayers[aiArrayIndex];
          if (ai && ai.isActive && ai.stats.hp > 0) break;
        }
      }
      nextFirstPlayerIndex = getNextIndex(nextFirstPlayerIndex);
      attempts++;
    }

    // 更新先手角色
    this.state.currentPlayerIndex = nextFirstPlayerIndex;
    this.state.phase = nextFirstPlayerIndex === 0 ? 'player_turn' : 'ai_turn';
    this.state.turnState.firstPlayerIndex = nextFirstPlayerIndex;

    // 回合数增加
    this.state.turnState.turnNumber++;

    this.state.turnState.playedCards = null;

    // 使用 PlayerIndexMapper 获取名称（避免手写条件映射）
    const getNameByIndex = (idx: number): string => {
      if (idx === 0) return '玩家';
      const ai = getAIPlayerByIndex(idx, this.state.aiPlayers);
      return ai?.name || `索引${idx}`;
    };
    const prevFirstPlayerName = getNameByIndex(currentFirstPlayerIndex);
    const nextFirstPlayerName = getNameByIndex(nextFirstPlayerIndex);

    if (process.env.NODE_ENV !== 'production') {
      console.log(`[endChallengePhase] 第${this.state.turnState.turnNumber}回合，先手角色: ${nextFirstPlayerName}(索引${nextFirstPlayerIndex})，上一回合先手: ${prevFirstPlayerName}(索引${currentFirstPlayerIndex})`);
    }

    this.state.lastAction = `第${this.state.turnState.turnNumber}回合开始，${nextFirstPlayerName}先手`;

    return this.getState();
  }
}
