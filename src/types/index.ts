/**
 * =============================================================================
 * Code Geass: Liar's Game - 统一类型定义
 * =============================================================================
 *
 * 本文件整合所有类型定义，解决类型冲突问题。
 * 统一使用Liar's Bar规则：Q/K/A + JOKER牌组系统
 *
 * @author Code Agent
 * @version 3.0.0
 */

// ============================================
// 基础类型定义
// ============================================

/** 角色ID枚举 - 游戏内所有可用角色 */
export type CharacterId = 'lelouch' | 'cc' | 'suzaku' | 'kallen';

/** 角色阵营 */
export type CharacterFaction = 'black-knights' | 'britannia' | 'neutral';

/** 技能类型 */
export type SkillType = 'active' | 'passive' | 'trigger';

/** 技能目标 */
export type SkillTarget = 'self' | 'enemy' | 'card' | 'none';

/** 技能效果 */
export interface SkillEffect {
  type: 'force-liar' | 'geass-immunity' | 'geass-resistance' | 'multi-play';
  value: number | boolean;
  duration?: number;
}

/** 游戏阶段枚举 */
export type GamePhase =
  | 'setup'
  | 'player_turn'
  | 'ai_turn'
  | 'challenge'
  | 'resolve'
  | 'geass'
  | 'game_over';

/** 屏幕/界面类型 */
export type ScreenType =
  | 'main-menu'
  | 'character-select'
  | 'game-table'
  | 'result'
  | 'settings'
  | 'help';

// ============================================
// 卡牌类型定义 - Liar's Bar规则
// ============================================

/** 卡牌花色 - 包含小丑 */
export type CardSuit = 'spades' | 'hearts' | 'clubs' | 'diamonds' | 'joker';

/** 卡牌点数 - Liar's Bar核心：Q/K/A + JOKER */
export type CardRank = 'Q' | 'K' | 'A' | 'JOKER';

/** 骗子牌类型 - 每回合指定的目标牌 */
export type LiarCard = 'Q' | 'K' | 'A';

/**
 * 卡牌接口 - 游戏中的基本单位
 */
export interface Card {
  id: string;
  suit: CardSuit;
  rank: CardRank;
  value: number;
  isJoker: boolean;
  isRevealed: boolean;
  owner: 'player' | 'ai' | 'ai2' | 'ai3' | 'table' | null;
}

/**
 * 已出牌记录 - 用于质疑阶段验证
 */
export interface PlayedCards {
  cardIds: string[];
  claimedRank: CardRank;
  actualCards: Card[];
  playerId: 'player' | 'ai' | 'ai2' | 'ai3';
}

// ============================================
// 角色类型定义
// ============================================

/**
 * 角色技能接口
 */
export interface CharacterSkill {
  id: string;
  name: string;
  nameEn: string;
  description: string;
  type: SkillType;
  target: SkillTarget;
  maxUses: number;
  cooldown: number;
  effect: SkillEffect;
  icon: string;
}

/**
 * 角色接口 - 完整角色定义
 */
export interface Character {
  id: CharacterId;
  name: string;
  nameEn: string;
  nameJa: string;
  faction: CharacterFaction;
  avatar: string;
  color: string;
  description: string;
  skillName: string;
  skillDescription: string;
  skill: CharacterSkill;
  stats: {
    hp: number;
    difficulty: number;
  };
}

/**
 * 角色状态 - 游戏中动态变化的状态
 */
export interface CharacterState {
  characterId: CharacterId;
  skillUsesRemaining: number;
  cooldownRemaining: number;
  isSkillActive: boolean;
  ccReviveUsed?: boolean;
  suzakuCounterActive?: boolean;
  kallenBoostActive?: boolean;
  kallenCardCount?: number;
}

// ============================================
// 玩家状态定义
// ============================================

/**
 * 玩家基础统计
 */
export interface PlayerStats {
  hp: number;
  maxHp: number;
  geassSuccessCount: number;
  geassFailCount: number;
  ccReviveUsed?: boolean;
  suzakuCounterActive?: boolean;
  kallenBoostActive?: boolean;
  kallenCardCount?: number;
}

/**
 * AI玩家接口
 */
export interface AIPlayer {
  id: 'ai' | 'ai2' | 'ai3';
  name: string;
  character: CharacterId;
  hand: Card[];
  stats: PlayerStats;
  isActive: boolean;
}

// ============================================
// 游戏状态定义
// ============================================

/**
 * 回合状态 - 当前回合的详细信息
 */
export interface TurnState {
  turnNumber: number;
  playedCards: PlayedCards | null;
  tableCards: Card[];
  lastPlayerId: 'player' | 'ai' | 'ai2' | 'ai3' | null;
  /** Geass连续闪避次数（有玩家扣血后重置） */
  geassConsecutiveMisses: number;
  /** 当前回合的先手角色索引（用于顺时针轮转机制） */
  firstPlayerIndex: number;
}

/**
 * Geass判定结果
 */
export interface GeassResult {
  activated: boolean;
  hit: boolean;
  damage: number;
  newStats?: PlayerStats;
  funnyAction?: string;
  message: string;
  isImmune?: boolean;
  isRevived?: boolean;
  isCounter?: boolean;
  isDodge?: boolean;
  victimId?: 'player' | 'ai' | 'ai2' | 'ai3';
  /** 反击目标ID（当isCounter为true时使用） */
  counterTargetId?: 'player' | 'ai' | 'ai2' | 'ai3';
  /** 反击伤害值 */
  counterDamage?: number;
}

/**
 * 游戏状态 - 完整的游戏状态对象
 */
export interface GameState {
  phase: GamePhase;
  liarCard: CardRank | null;
  currentPlayerIndex: number;
  playerStats: PlayerStats;
  playerHand: Card[];
  playerCharacter: CharacterId | null;
  playerSelectedCards: string[];
  aiPlayers: AIPlayer[];
  turnState: TurnState;
  lastAction: string;
  winner: 'player' | 'ai' | null;
  geassResult: GeassResult | null;
}

// ============================================
// AI相关类型
// ============================================

/** AI动画状态 */
export type AIAnimationState =
  | 'idle'
  | 'thinking'
  | 'deciding'
  | 'playing'
  | 'challenging'
  | 'reacting';

/** AI动作类型 */
export type AIActionType = 'play' | 'challenge' | 'pass';

/**
 * AI决策结果
 */
export interface AIDecision {
  action: AIActionType;
  cardIds?: string[];
  claimedRank?: CardRank;
  confidence: number;
  reasoning: string;
  animationState: AIAnimationState;
  isBluff?: boolean;
}

/**
 * AI思考信息 - 用于UI显示
 */
export interface AIThought {
  state: AIAnimationState;
  progress: number;
  message?: string;
  emotion?: 'confident' | 'uncertain' | 'surprised' | 'calm';
}

/**
 * 策略上下文 - AI决策时传入的上下文信息
 */
export interface StrategyContext {
  gameState: GameState;
  aiPlayer: AIPlayer;
  liarCard: CardRank;
  history: AIDecision[];
}

// ============================================
// UI组件Props类型
// ============================================

export interface MainMenuProps {
  onStart: () => void;
  onSettings: () => void;
  onHelp: () => void;
}

export interface CharacterSelectProps {
  characters: Character[];
  selectedId: CharacterId | null;
  selectedAvatar?: number;
  onSelect: (id: CharacterId, avatarNum?: number) => void;
  onConfirm: () => void;
  onBack: () => void;
}

export interface GameTableProps {
  gameState: GameState | null;
  selectedCards: string[];
  selectedCharacter: CharacterId | null;
  onToggleCardSelection: (cardId: string) => void;
  onConfirmPlay: () => void;
  onPass: () => void;
  onChallenge: () => void;
  onBackToMenu: () => void;
  onLelouchSkill: (newRank: CardRank) => void;
  gameLog: string[];
  isProcessing: boolean;
}

export interface ResultScreenProps {
  isWin: boolean;
  playerScore: number;
  opponentScore: number;
  turnNumber: number;
  onRestart: () => void;
  onMainMenu: () => void;
}

// ============================================
// 搞笑动作类型
// ============================================

export interface FunnyAction {
  id: number;
  emoji: string;
  description: string;
  soundType: string;
}

/** 预定义的搞笑动作列表 */
export const FUNNY_ACTIONS: FunnyAction[] = [
  { id: 0, emoji: '😵', description: '突然跳起了奇怪的舞蹈', soundType: 'sfx-funny-dance' },
  { id: 1, emoji: '🙈', description: '开始模仿猴子叫', soundType: 'sfx-funny-monkey' },
  { id: 2, emoji: '🤪', description: '不停地说"披萨"', soundType: 'sfx-funny-pizza' },
  { id: 3, emoji: '😂', description: '无法控制地大笑30秒', soundType: 'sfx-funny-laugh' },
  { id: 4, emoji: '🐔', description: '学鸡打鸣', soundType: 'sfx-funny-chicken' },
  { id: 5, emoji: '🎭', description: '开始背诵中二台词', soundType: 'sfx-funny-chunibyo' },
  { id: 6, emoji: '🍕', description: '声称自己是披萨的化身', soundType: 'sfx-funny-pizza' },
  { id: 7, emoji: '🦋', description: '追逐不存在的蝴蝶', soundType: 'sfx-funny-butterfly' },
];

// ============================================
// 存储相关类型
// ============================================

/**
 * 游戏设置 - 可持久化的设置项
 */
export interface GameSettings {
  soundEnabled: boolean;
  musicEnabled: boolean;
  soundVolume: number;
  musicVolume: number;
}

/**
 * 游戏日志记录
 */
export interface GameLogEntry {
  id: string;
  date: string;
  playerCharacter: CharacterId;
  result: 'win' | 'lose';
  playerScore: number;
  opponentScore: number;
  rounds: number;
}

// ============================================
// 工具类型
// ============================================

/** 可空类型 */
export type Nullable<T> = T | null;

/** 可选类型 */
export type Optional<T> = T | undefined;
