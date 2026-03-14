/**
 * =============================================================================
 * Code Geass: Liar's Game - 游戏引擎
 * =============================================================================
 * 
 * 游戏核心逻辑控制器，负责：
 * - 游戏状态管理
 * - 回合流程控制
 * - 角色技能集成
 * - AI决策协调
 * - 胜负判定
 * 
 * 游戏流程：
 * 1. 初始化 → 2. 发牌 → 3. 回合循环 → 4. 质疑结算 → 5. Geass判定 → 6. 胜负判定
 * 
 * @author Code Agent
 * @version 2.0.0
 */

import { CardSystem } from './CardSystem';
import { GeassSystem } from './GeassSystem';
import type { 
  CharacterId, 
  CardRank,
  Card,
  GameState,
  AIPlayer,
  GeassResult,
  PlayedCards,
  Difficulty,
} from '../types';
import { getCharacterName } from '../data/characters';

/**
 * 游戏引擎类
 * 核心游戏逻辑控制器
 */
export class GameEngine {
  /** 卡牌系统实例 */
  private cardSystem: CardSystem;
  
  /** Geass系统实例 */
  private geassSystem: GeassSystem;
  
  /** 当前游戏状态 */
  private state: GameState;
  
  /** 玩家选择的角色 */
  private playerCharacter: CharacterId | null = null;
  
  /** 游戏难度 */
  private difficulty: Difficulty = 'normal';

  constructor() {
    this.cardSystem = new CardSystem();
    this.geassSystem = new GeassSystem();
    this.state = this.createInitialState();
  }

  /**
   * 创建初始游戏状态
   * 
   * @returns 初始状态对象
   */
  private createInitialState(): GameState {
    return {
      phase: 'setup',
      liarCard: null,
      playerStats: { 
        hp: 3, 
        maxHp: 3, 
        geassSuccessCount: 0, 
        geassFailCount: 0 
      },
      playerHand: [],
      playerCharacter: null,
      playerSelectedCards: [],
      aiPlayers: [
        { 
          id: 'ai', 
          name: 'C.C.', 
          character: 'cc', 
          hand: [], 
          stats: { hp: 3, maxHp: 3, geassSuccessCount: 0, geassFailCount: 0 }, 
          isActive: true 
        },
        { 
          id: 'ai2', 
          name: '朱雀', 
          character: 'suzaku', 
          hand: [], 
          stats: { hp: 3, maxHp: 3, geassSuccessCount: 0, geassFailCount: 0 }, 
          isActive: true 
        },
        { 
          id: 'ai3', 
          name: '卡莲', 
          character: 'kallen', 
          hand: [], 
          stats: { hp: 3, maxHp: 3, geassSuccessCount: 0, geassFailCount: 0 }, 
          isActive: true 
        },
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
      difficulty: 'normal',
    };
  }

  /**
   * 初始化游戏
   * 
   * @param playerCharacter - 玩家选择的角色
   * @param difficulty - 游戏难度
   * @returns 初始化后的游戏状态
   */
  initializeGame(playerCharacter: CharacterId, difficulty: Difficulty = 'normal'): GameState {
    this.playerCharacter = playerCharacter;
    this.difficulty = difficulty;
    
    // 生成并洗牌
    this.cardSystem.generateDeck();
    this.cardSystem.shuffle();
    
    // 发牌
    const { playerCards, ai1Cards, ai2Cards, ai3Cards } = this.cardSystem.dealCards();
    
    // 设定骗子牌
    const liarCard = this.cardSystem.setLiarCard();
    
    // 随机选择起始玩家
    const startingPlayerIndex = Math.floor(Math.random() * 4);
    
    // 根据角色调整初始HP（朱雀有4点HP）
    const playerMaxHp = playerCharacter === 'suzaku' ? 4 : 3;
    
    this.state = {
      ...this.createInitialState(),
      phase: startingPlayerIndex === 0 ? 'player_turn' : 'ai_turn',
      liarCard,
      playerCharacter,
      difficulty,
      currentPlayerIndex: startingPlayerIndex,
      playerHand: playerCards,
      playerStats: { 
        hp: playerMaxHp, 
        maxHp: playerMaxHp, 
        geassSuccessCount: 0, 
        geassFailCount: 0 
      },
      aiPlayers: [
        { 
          id: 'ai', 
          name: 'C.C.', 
          character: 'cc', 
          hand: ai1Cards, 
          stats: { hp: 3, maxHp: 3, geassSuccessCount: 0, geassFailCount: 0 }, 
          isActive: true 
        },
        { 
          id: 'ai2', 
          name: '朱雀', 
          character: 'suzaku', 
          hand: ai2Cards, 
          stats: { hp: 4, maxHp: 4, geassSuccessCount: 0, geassFailCount: 0 }, 
          isActive: true 
        },
        { 
          id: 'ai3', 
          name: '卡莲', 
          character: 'kallen', 
          hand: ai3Cards, 
          stats: { hp: 3, maxHp: 3, geassSuccessCount: 0, geassFailCount: 0 }, 
          isActive: true 
        },
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
   * 保留HP等状态，只重置牌组
   * 
   * @returns 重置后的游戏状态
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
    
    // 更新状态（保留HP和统计）
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
    
    return this.state;
  }

  /**
   * 获取当前活动玩家ID
   * 
   * @returns 当前玩家ID
   */
  getCurrentPlayerId(): 'player' | 'ai' | 'ai2' | 'ai3' {
    if (this.state.currentPlayerIndex === 0) return 'player';
    return this.state.aiPlayers[this.state.currentPlayerIndex - 1]?.id || 'ai';
  }

  /**
   * 获取下一个玩家索引（跳过已淘汰玩家）
   * Liar's Bar规则：玩家→AI1→AI2→AI3循环
   * 
   * @returns 下一个活跃玩家的索引
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
        // AI (索引1-3对应aiPlayers[0-2])
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
   * 
   * @param cardId - 牌的ID
   * @returns 更新后的游戏状态
   */
  toggleCardSelection(cardId: string): GameState {
    // 验证牌ID是否存在于玩家手牌中
    const cardExists = this.state.playerHand.some(c => c.id === cardId);
    if (!cardExists) {
      // 无效ID，忽略操作
      return this.state;
    }
    
    const selectedCards = this.state.playerSelectedCards;
    const cardIndex = selectedCards.indexOf(cardId);
    
    // 根据角色确定最大可选牌数
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
   * 
   * @returns 更新后的游戏状态
   * @throws 如果不是玩家回合或没有选牌则抛出错误
   */
  playerPlayCards(): GameState {
    if (this.state.phase !== 'player_turn') {
      throw new Error('不是玩家回合');
    }

    const cardIds = this.state.playerSelectedCards;
    if (cardIds.length === 0) {
      throw new Error('未选择任何牌');
    }

    // 检查出牌数量限制
    if (this.playerCharacter === 'kallen') {
      if (cardIds.length > 4) {
        throw new Error('红莲突击最多出4张牌');
      }
    } else if (cardIds.length > 3) {
      throw new Error('最多只能出3张牌');
    }

    // 获取出的牌
    const cards = this.cardSystem.playCards(cardIds);
    
    // 更新玩家手牌
    this.state.playerHand = this.state.playerHand.filter(c => !cardIds.includes(c.id));
    
    // 检查玩家是否出完牌
    const isPlayerOutOfCards = this.state.playerHand.length === 0;
    
    // 卡莲技能：记录出牌张数
    if (this.playerCharacter === 'kallen' && cardIds.length >= 2) {
      this.state.playerStats.kallenBoostActive = true;
      this.state.playerStats.kallenCardCount = cardIds.length;
    }
    
    // 自动声称是骗子牌
    const claimedRank = this.state.liarCard!;

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
      lastAction: `玩家出了 ${cardIds.length} 张牌${isPlayerOutOfCards ? '（玩家手牌已出完！）' : ''}`,
    };

    return this.state;
  }

  /**
   * AI出牌
   * 
   * @param aiId - AI的ID
   * @returns 更新后的游戏状态
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
    
    // AI策略：优先出骗子牌，没有则出其他牌（撒谎）
    const liarCards = aiCards.filter(c => c.rank === liarCard || c.isJoker);
    const otherCards = aiCards.filter(c => c.rank !== liarCard && !c.isJoker);
    
    let selectedCards: Card[];
    let claimedRank: CardRank;
    
    // 卡莲AI可以出1-3张，其他AI出1张
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
      claimedRank = liarCard;
    }
    
    // 如果没有可选的牌，从所有手牌中选
    if (selectedCards.length === 0 && aiCards.length > 0) {
      selectedCards = [aiCards[0]];
    }
    
    // 最终保护
    if (selectedCards.length === 0) {
      console.error('AI没有牌可出，但不应该发生');
      selectedCards = aiCards.slice(0, 1);
    }

    const cardIds = selectedCards.map(c => c.id);
    const playedCards = this.cardSystem.playCards(cardIds);
    
    // 更新AI手牌
    ai.hand = ai.hand.filter(c => !cardIds.includes(c.id));
    
    // 卡莲技能
    if (ai.character === 'kallen' && cardIds.length >= 2) {
      ai.stats.kallenBoostActive = true;
      ai.stats.kallenCardCount = cardIds.length;
    }
    
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
      lastAction: `${ai.name}出了 ${cardIds.length} 张牌${isAIOutOfCards ? '（' + ai.name + '手牌已出完！）' : ''}`,
    };

    return this.state;
  }

  /**
   * 玩家质疑决策
   * 
   * @param challenge - 是否质疑
   * @returns 更新后的游戏状态
   */
  playerChallengeDecision(challenge: boolean): GameState {
    if (this.state.phase !== 'challenge') {
      throw new Error('不在质疑阶段');
    }

    const playedCards = this.state.turnState.playedCards;
    if (!playedCards) throw new Error('没有出牌记录');

    if (!challenge) {
      // 选择不质疑，进入下一个玩家回合
      return this.passToNextPlayer();
    }

    // 选择质疑，进入结算
    return this.resolveChallenge('player');
  }

  /**
   * AI质疑决策
   * 
   * @param aiId - AI的ID
   * @returns 更新后的游戏状态
   */
  aiChallengeDecision(aiId: 'ai' | 'ai2' | 'ai3'): GameState {
    if (this.state.phase !== 'challenge') {
      throw new Error('不在质疑阶段');
    }

    const playedCards = this.state.turnState.playedCards;
    if (!playedCards) throw new Error('没有出牌记录');

    // AI不质疑自己
    if (playedCards.playerId === aiId) {
      return this.passToNextPlayer();
    }

    // AI决策逻辑
    const ai = this.state.aiPlayers.find(a => a.id === aiId);
    if (!ai) throw new Error('AI不存在');

    // 根据难度和性格计算质疑概率
    const shouldChallenge = this.calculateAIChallengeProbability(ai, playedCards);

    if (!shouldChallenge) {
      return this.passToNextPlayer();
    }

    return this.resolveChallenge(aiId);
  }

  /**
   * 计算AI质疑概率
   * 
   * @param ai - AI玩家
   * @param playedCards - 出的牌
   * @returns 是否质疑
   */
  private calculateAIChallengeProbability(ai: AIPlayer, playedCards: PlayedCards): boolean {
    // 基础概率
    let probability = 0.3;
    
    // 根据出牌数量调整（出多张牌更可能是撒谎）
    const cardCount = playedCards.cardIds.length;
    if (cardCount >= 3) probability += 0.3;
    else if (cardCount === 2) probability += 0.15;
    
    // 根据AI血条调整（血少时更谨慎）
    if (ai.stats.hp === 1) probability -= 0.2;
    
    // 朱雀技能：更激进
    if (ai.character === 'suzaku') probability += 0.1;
    
    // C.C.技能：更保守
    if (ai.character === 'cc') probability -= 0.1;
    
    // 根据难度调整
    switch (this.difficulty) {
      case 'easy':
        probability *= 0.8;
        break;
      case 'hard':
        probability *= 1.2;
        break;
    }
    
    return Math.random() < probability;
  }

  /**
   * 将回合传递给下一个玩家
   * 
   * @returns 更新后的游戏状态
   */
  private passToNextPlayer(): GameState {
    const playedCards = this.state.turnState.playedCards;
    if (!playedCards) throw new Error('没有出牌记录');

    // 将牌放到桌面
    this.state.turnState.tableCards = [
      ...this.state.turnState.tableCards,
      ...playedCards.actualCards,
    ];
    
    // 检查是否所有玩家手牌都出完了
    if (this.checkHandDepletion()) {
      return this.handleEmptyHand();
    }

    // 从出牌者开始计算下一个玩家（不是从当前currentPlayerIndex）
    const playedByIndex = playedCards.playerId === 'player' ? 0 : 
      this.state.aiPlayers.findIndex(ai => ai.id === playedCards.playerId) + 1;
    
    // 计算下一个玩家（从出牌者的下家开始）
    let nextIndex = (playedByIndex + 1) % 4;
    
    // 跳过已淘汰的玩家
    let attempts = 0;
    while (attempts < 4) {
      if (nextIndex === 0) {
        // 玩家
        if (this.state.playerStats.hp > 0) break;
      } else {
        // AI (索引1-3对应aiPlayers[0-2])
        const ai = this.state.aiPlayers[nextIndex - 1];
        if (ai && ai.isActive && ai.stats.hp > 0) break;
      }
      nextIndex = (nextIndex + 1) % 4;
      attempts++;
    }
    
    this.state.currentPlayerIndex = nextIndex;
    const nextPlayerId = this.getCurrentPlayerId();
    
    this.state = {
      ...this.state,
      phase: nextPlayerId === 'player' ? 'player_turn' : 'ai_turn',
      turnState: {
        ...this.state.turnState,
        playedCards: null,
        turnNumber: nextPlayerId === 'player' ? this.state.turnState.turnNumber + 1 : this.state.turnState.turnNumber,
      },
    };
    
    return this.state;
  }

  /**
   * 结算质疑
   * 
   * @param challenger - 质疑者ID
   * @returns 更新后的游戏状态
   */
  private resolveChallenge(challenger: 'player' | 'ai' | 'ai2' | 'ai3'): GameState {
    const playedCards = this.state.turnState.playedCards!;
    
    // 检查是否撒谎（使用CardSystem的验证方法）
    const wasLie = this.cardSystem.checkBluff(playedCards.actualCards, playedCards.claimedRank);
    
    // 确定谁受伤（撒谎者或质疑失败者）
    const loser: 'player' | 'ai' | 'ai2' | 'ai3' = wasLie 
      ? playedCards.playerId
      : challenger;

    // 获取玩家名称
    const getPlayerName = (id: string) => {
      if (id === 'player') return this.playerCharacter ? getCharacterName(this.playerCharacter) : '玩家';
      const ai = this.state.aiPlayers.find(a => a.id === id);
      return ai?.name || id;
    };

    // 记录实际出的牌
    const actualCardsStr = playedCards.actualCards.map(c => c.rank).join(', ');

    // 生成清晰的日志信息
    const challengerName = getPlayerName(challenger);
    const playedByName = getPlayerName(playedCards.playerId);
    const resultText = wasLie ? '成功' : '失败';
    const loserName = getPlayerName(loser);

    // 进入Geass判定阶段
    this.state = {
      ...this.state,
      phase: 'geass',
      lastAction: `${challengerName}质疑${playedByName}${resultText}！实际出牌: ${actualCardsStr}`,
    };

    // 计算卡莲技能加成
    let kallenHitChance = 0;
    if (wasLie) {
      const playedBy = playedCards.playerId;
      if (playedBy === 'player' && this.playerCharacter === 'kallen' && this.state.playerStats.kallenBoostActive) {
        const cardCount = this.state.playerStats.kallenCardCount || 2;
        kallenHitChance = this.geassSystem.calculateKallenBoost(cardCount);
      } else if (playedBy !== 'player') {
        const ai = this.state.aiPlayers.find(ai => ai.id === playedBy);
        if (ai?.character === 'kallen' && ai.stats.kallenBoostActive) {
          const cardCount = ai.stats.kallenCardCount || 2;
          kallenHitChance = this.geassSystem.calculateKallenBoost(cardCount);
        }
      }
    }
    
    // 执行Geass判定
    const geassResult = this.executeGeass(loser, kallenHitChance);
    this.state.geassResult = geassResult;

    // 添加Geass结果到日志
    if (geassResult.hit) {
      this.state.lastAction = `${challengerName}质疑${playedByName}${resultText}！${loserName}受到Geass！`;
    } else {
      this.state.lastAction = `${challengerName}质疑${playedByName}${resultText}！${loserName}闪避了Geass！`;
    }

    // 检查游戏结束
    return this.checkGameEnd();
  }

  /**
   * 执行Geass判定
   * 
   * @param loser - 受罚者ID
   * @param hitChanceBoost - 命中率加成
   * @returns Geass判定结果
   */
  private executeGeass(
    loser: 'player' | 'ai' | 'ai2' | 'ai3', 
    hitChanceBoost: number = 0
  ): GeassResult {
    let geassResult: GeassResult;
    
    if (loser === 'player') {
      // 玩家受伤
      geassResult = this.geassSystem.performGeass(
        'player', 
        this.state.playerStats, 
        this.playerCharacter, 
        hitChanceBoost
      );
      this.state.playerStats = geassResult.newStats;
    } else {
      // AI受伤
      const aiIndex = this.state.aiPlayers.findIndex(ai => ai.id === loser);
      const ai = this.state.aiPlayers[aiIndex];
      
      geassResult = this.geassSystem.performGeass(loser, ai.stats, ai.character, hitChanceBoost);
      ai.stats = geassResult.newStats;
      
      // 检查AI是否被淘汰
      if (ai.stats.hp <= 0) {
        ai.isActive = false;
      }
    }
    
    return geassResult;
  }

  /**
   * 检查游戏是否结束
   * 
   * @returns 更新后的游戏状态
   */
  private checkGameEnd(): GameState {
    const activeAIs = this.state.aiPlayers.filter(ai => ai.isActive && ai.stats.hp > 0);
    
    // 检查玩家是否被淘汰
    if (this.state.playerStats.hp <= 0) {
      this.state = {
        ...this.state,
        phase: 'game_over',
        winner: 'ai',
        lastAction: '玩家生命归零，游戏结束！',
      };
      return this.state;
    }
    
    // 检查AI是否全部被淘汰
    if (activeAIs.length === 0) {
      this.state = {
        ...this.state,
        phase: 'game_over',
        winner: 'player',
        lastAction: '所有AI被淘汰，玩家胜利！',
      };
      return this.state;
    }

    return this.state;
  }

  /**
   * 鲁鲁修技能：强制改变骗子牌
   * 
   * @param newRank - 新的骗子牌点数
   * @returns 更新后的游戏状态
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
   * 当玩家没有手牌时可以选择跳过
   * 
   * @returns 更新后的游戏状态
   */
  passTurn(): GameState {
    // 检查是否可以跳过（例如没有手牌）
    if (this.state.playerHand.length > 0) {
      throw new Error('还有手牌，不能跳过回合');
    }

    // 将回合传递给下一个玩家
    this.state.currentPlayerIndex = this.getNextPlayerIndex();
    const nextPlayerId = this.getCurrentPlayerId();

    this.state = {
      ...this.state,
      phase: nextPlayerId === 'player' ? 'player_turn' : 'ai_turn',
      lastAction: '玩家跳过回合',
    };

    return this.state;
  }

  /**
   * 检查手牌耗尽 - 需要重新发牌
   * Liar's Bar规则：当所有玩家手牌都出完后，重新洗牌发牌继续游戏
   * 
   * @returns 是否需要重新发牌
   */
  checkHandDepletion(): boolean {
    const playerEmpty = this.state.playerHand.length === 0;
    const allAIEmpty = this.state.aiPlayers.every(ai => ai.hand.length === 0);
    
    // 只有当所有玩家都没牌时才需要重新发牌
    if (playerEmpty && allAIEmpty) {
      return true;
    }
    
    return false;
  }

  /**
   * 处理手牌耗尽 - 重新发牌继续游戏
   * Liar's Bar规则：牌出完后重新洗牌发牌，继续游戏
   * 
   * @returns 更新后的游戏状态
   */
  handleEmptyHand(): GameState {
    // 检查是否真的所有玩家都没牌了
    if (!this.checkHandDepletion()) {
      return this.state;
    }
    
    // 重置牌组并重新发牌
    this.cardSystem.reset();
    this.cardSystem.generateDeck();
    this.cardSystem.shuffle();
    
    // 重新发牌
    const { playerCards, ai1Cards, ai2Cards, ai3Cards } = this.cardSystem.dealCards();
    
    // 设定新的骗子牌
    const liarCard = this.cardSystem.setLiarCard();
    
    // 更新状态（保留HP和统计）
    this.state.playerHand = playerCards;
    this.state.aiPlayers[0].hand = ai1Cards;
    this.state.aiPlayers[1].hand = ai2Cards;
    this.state.aiPlayers[2].hand = ai3Cards;
    this.state.liarCard = liarCard;
    
    // 清空桌面牌
    this.state.turnState.tableCards = [];
    this.state.turnState.playedCards = null;
    
    this.state.lastAction = '所有玩家手牌出完，重新洗牌发牌';
    
    return this.state;
  }

  /**
   * 获取卡牌系统
   * 
   * @returns 卡牌系统实例
   */
  getCardSystem(): CardSystem {
    return this.cardSystem;
  }

  /**
   * 获取当前状态
   * 
   * @returns 当前游戏状态
   */
  getState(): GameState {
    return this.state;
  }

  /**
   * 获取Geass系统
   * 
   * @returns Geass系统实例
   */
  getGeassSystem(): GeassSystem {
    return this.geassSystem;
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

/**
 * 游戏引擎单例
 */
export const gameEngine = new GameEngine();
