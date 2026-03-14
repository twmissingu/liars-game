/**
 * =============================================================================
 * Code Geass: Liar's Game - 统一类型定义
 * =============================================================================
 * 
 * 本文件整合所有类型定义，解决类型冲突问题。
 * 统一使用Liar's Bar规则：Q/K/A + JOKER牌组系统
 * 
 * @author Code Agent
 * @version 2.0.0
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
  duration?: number; // 持续回合数，undefined表示永久/即时
}

/** 游戏难度等级 */
export type Difficulty = 'easy' | 'normal' | 'hard';

/** AI性格类型 - 影响AI决策行为 */
export type Personality = 'aggressive' | 'conservative' | 'balanced';

/** 游戏阶段枚举 */
export type GamePhase = 
  | 'setup'           // 游戏初始化阶段
  | 'player_turn'     // 玩家回合
  | 'ai_turn'         // AI回合
  | 'challenge'       // 质疑阶段
  | 'resolve'         // 结算阶段
  | 'geass'           // Geass判定阶段
  | 'game_over';      // 游戏结束

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

/** 卡牌花色 - 仅用于视觉效果，不影响游戏逻辑 */
export type CardSuit = 'spades' | 'hearts' | 'clubs' | 'diamonds' | 'joker';

/** 卡牌点数 - Liar's Bar核心：Q/K/A + JOKER */
export type CardRank = 'Q' | 'K' | 'A' | 'JOKER';

/**
 * 卡牌接口 - 游戏中的基本单位
 * 
 * @property id - 唯一标识符
 * @property suit - 花色（仅视觉效果）
 * @property rank - 点数（Q/K/A/JOKER）
 * @property value - 数值（Q=1, K=2, A=3, JOKER=0）
 * @property isJoker - 是否为小丑牌（万能牌）
 * @property owner - 当前持有者
 */
export interface Card {
  id: string;
  suit: CardSuit;
  rank: CardRank;
  value: number;
  isJoker: boolean;
  owner: 'player' | 'ai' | 'ai2' | 'ai3' | 'table' | null;
}

/**
 * 已出牌记录 - 用于质疑阶段验证
 */
export interface PlayedCards {
  cardIds: string[];           // 出的牌的ID列表
  claimedRank: CardRank;       // 声称的点数
  actualCards: Card[];         // 实际出的牌
  playerId: 'player' | 'ai' | 'ai2' | 'ai3';  // 出牌者
}

// ============================================
// 角色类型定义
// ============================================

/**
 * 角色技能效果类型
 */
export type SkillEffectType = 
  | 'force-liar'      // 强制指定骗子牌（鲁鲁修）
  | 'geass-immunity'  // Geass免疫（C.C.）
  | 'geass-resistance'// Geass抗性（朱雀）
  | 'multi-play';     // 多张出牌（卡莲）

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
  maxUses: number;      // -1表示无限使用
  cooldown: number;     // 冷却回合数
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
    difficulty: number;  // 难度等级1-5
  };
}

/**
 * 角色状态 - 游戏中动态变化的状态
 */
export interface CharacterState {
  characterId: CharacterId;
  skillUsesRemaining: number;   // 剩余技能使用次数
  cooldownRemaining: number;    // 冷却剩余回合
  isSkillActive: boolean;       // 技能是否激活
  // 角色特定状态
  ccReviveUsed?: boolean;       // C.C.是否已使用复活
  suzakuCounterActive?: boolean;// 朱雀反击是否激活
  kallenBoostActive?: boolean;  // 卡莲爆发是否激活
  kallenCardCount?: number;     // 卡莲出牌张数
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
  geassSuccessCount: number;  // Geass成功次数
  geassFailCount: number;     // Geass失败次数
  // 角色技能相关状态
  ccReviveUsed?: boolean;
  suzakuCounterActive?: boolean;
  kallenBoostActive?: boolean;
  kallenCardCount?: number;
}

/**
 * 角色选择信息
 */
export interface CharacterSelection {
  playerId: string;
  characterId: CharacterId;
  isReady: boolean;
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
  challengeRound?: number;  // 质疑轮次
}

/**
 * Geass判定结果
 */
export interface GeassResult {
  activated: boolean;         // 是否激活
  hit: boolean;               // 是否命中
  damage: number;             // 伤害值
  newStats?: PlayerStats;     // 更新后的状态
  funnyAction?: string;       // 搞笑动作描述
  message: string;            // 结果消息
  isImmune?: boolean;         // 是否免疫
  isRevived?: boolean;        // 是否复活（C.C.）
  isCounter?: boolean;        // 是否反击（朱雀）
}

/**
 * 游戏状态 - 完整的游戏状态对象
 */
export interface GameState {
  // 基础状态
  phase: GamePhase;
  liarCard: CardRank | null;
  currentPlayerIndex: number;  // 0=player, 1=ai1, 2=ai2, 3=ai3
  
  // 玩家状态
  playerStats: PlayerStats;
  playerHand: Card[];
  playerCharacter: CharacterId | null;
  playerSelectedCards: string[];
  
  // AI状态
  aiPlayers: AIPlayer[];
  
  // 回合状态
  turnState: TurnState;
  
  // 游戏结果
  lastAction: string;
  winner: 'player' | 'ai' | null;
  geassResult: GeassResult | null;
  
  // 设置
  difficulty: Difficulty;
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
  cardIds?: string[];         // 出的牌的ID列表
  claimedRank?: CardRank;     // 声称的点数
  confidence: number;         // 信心度 0-1
  reasoning: string;          // 决策理由
  animationState: AIAnimationState;
  isBluff?: boolean;          // 是否虚张声势
}

/**
 * AI思考信息 - 用于UI显示
 */
export interface AIThought {
  state: AIAnimationState;
  progress: number;           // 0-100
  message?: string;
  emotion?: 'confident' | 'uncertain' | 'surprised' | 'calm';
}

/**
 * AI配置
 */
export interface AIConfig {
  difficulty: Difficulty;
  personality: Personality;
  reactionDelay: number;      // 思考时间(ms)
  enableAnimation: boolean;
}

/**
 * AI性格特征 - 影响AI行为参数
 */
export interface PersonalityTraits {
  bluffFrequency: number;     // 撒谎频率 0-1
  challengeThreshold: number; // 质疑阈值 0-1 (越低越爱质疑)
  riskTolerance: number;      // 风险承受 0-1
  patience: number;           // 耐心程度 0-1
  adaptability: number;       // 适应能力 0-1
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
  onSelect: (id: CharacterId) => void;
  onConfirm: () => void;
  onBack: () => void;
}

export interface GameTableProps {
  gameState: GameState | null;
  selectedCards: string[];
  selectedCharacter: CharacterId | null;
  selectedAvatar: number;
  aiCharacters: CharacterId[];
  aiAvatars: Record<string, number>;
  onToggleCardSelection: (cardId: string) => void;
  onConfirmPlay: () => void;
  onPass: () => void;
  onChallenge: () => void;
  onBackToMenu: () => void;
  onLelouchSkill: (newRank: CardRank) => void;
  gameLog: string[];
  funnyAction: FunnyAction | null;
  isProcessing: boolean;
}

export interface ResultScreenProps {
  isWin: boolean;
  playerScore: number;
  opponentScore: number;
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
  difficulty: Difficulty;
  bgmVolume: number;
  sfxVolume: number;
  personality: Personality;
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

/**
 * 延迟函数类型
 */
export type DelayFn = (ms: number) => Promise<void>;

/**
 * 可选类型
 */
export type Optional<T> = T | undefined | null;

/**
 * 部分必填类型
 */
export type PartialRequired<T, K extends keyof T> = Partial<T> & Pick<T, K>;
