/**
 * Code Geass: Liar's Game - 统一类型定义
 * 
 * 本文件整合所有类型定义，解决类型冲突问题
 * 遵循Liar's Bar规则：使用Q/K/A + JOKER牌组
 * 
 * @module types/unified
 * @version 2.1.0
 * @author Liars Game Team
 */

// ============================================
// 基础类型
// ============================================

/** 角色ID - 游戏中的四个可选角色 */
export type CharacterId = 'lelouch' | 'cc' | 'suzaku' | 'kallen';

/** 角色阵营 */
export type CharacterFaction = 'black-knights' | 'britannia' | 'neutral';

/** 游戏难度 */
export type Difficulty = 'easy' | 'normal' | 'hard';

/** 游戏阶段 */
export type GamePhase = 
  | 'setup'           // 游戏初始化
  | 'player_turn'     // 玩家回合
  | 'ai_turn'         // AI回合
  | 'challenge'       // 质疑阶段
  | 'resolve'         // 结算阶段
  | 'geass'           // Geass判定
  | 'game_over';      // 游戏结束

/** 屏幕类型 */
export type ScreenType = 
  | 'main-menu'
  | 'character-select'
  | 'game-table'
  | 'result'
  | 'settings'
  | 'help';

/** 动画状态 */
export type AnimationState = 
  | 'idle'
  | 'breathing'
  | 'playing-card'
  | 'win'
  | 'lose';

// ============================================
// 卡牌类型 - Liar's Bar规则
// ============================================

/** 卡牌花色 - 包含小丑 */
export type CardSuit = 'spades' | 'hearts' | 'clubs' | 'diamonds' | 'joker';

/** 
 * 卡牌点数 - Liar's Bar只使用Q、K、A + JOKER
 * Q=1分, K=2分, A=3分, JOKER=0分（万能牌）
 */
export type CardRank = 'Q' | 'K' | 'A' | 'JOKER';

/** 
 * 卡牌接口 - 统一的卡牌定义
 * @property id - 唯一标识符
 * @property suit - 花色
 * @property rank - 点数
 * @property value - 分值（Q=1, K=2, A=3, JOKER=0）
 * @property isJoker - 是否小丑牌
 * @property isRevealed - 是否已揭示（用于UI显示）
 * @property owner - 拥有者（null表示在牌堆或桌面）
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

/** 骗子牌类型 - 每回合指定的目标牌 */
export type LiarCard = 'Q' | 'K' | 'A';

// ============================================
// 角色技能类型
// ============================================

/** 技能类型 */
export type SkillType = 'active' | 'passive' | 'trigger';

/** 技能目标 */
export type SkillTarget = 'self' | 'enemy' | 'card' | 'none';

/** 
 * 技能效果类型
 * - force-liar: 强制指定骗子牌（鲁鲁修）
 * - geass-immunity: Geass免疫（C.C.）
 * - geass-resistance: Geass抗性（朱雀）
 * - multi-play: 多出牌（卡莲）
 */
export type SkillEffectType = 'force-liar' | 'geass-immunity' | 'geass-resistance' | 'multi-play';

/** 技能效果 */
export interface SkillEffect {
  type: SkillEffectType;
  value: number | boolean;
  duration?: number;
}

/** 角色技能定义 */
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

/** 角色数据 */
export interface Character {
  id: CharacterId;
  name: string;
  nameEn: string;
  nameJa: string;
  faction: CharacterFaction;
  avatar: string;
  color: string;
  description: string;
  skill: CharacterSkill;
  stats: {
    hp: number;
    difficulty: 1 | 2 | 3 | 4 | 5;
  };
}

/** 
 * 角色状态 - 游戏中动态变化的状态
 * @property skillUsesLeft - 剩余技能使用次数
 * @property skillCooldown - 当前冷却回合数
 * @property skillActive - 技能是否激活中
 * @property passiveActive - 被动技能是否生效
 */
export interface CharacterState {
  characterId: CharacterId;
  skillUsesLeft: number;
  skillCooldown: number;
  skillActive: boolean;
  passiveActive: boolean;
}

/** 角色选择信息 */
export interface CharacterSelection {
  playerId: string;
  characterId: CharacterId;
  isReady: boolean;
}

// ============================================
// 玩家状态类型
// ============================================

/** 
 * 玩家统计信息
 * @property hp - 当前生命值
 * @property maxHp - 最大生命值
 * @property geassSuccessCount - Geass成功次数
 * @property geassFailCount - Geass失败次数
 */
export interface PlayerStats {
  hp: number;
  maxHp: number;
  geassSuccessCount: number;
  geassFailCount: number;
}

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
}

// ============================================
// 游戏状态类型
// ============================================

/** 
 * 游戏状态 - 完整的游戏状态对象
 * 用于状态管理和存档
 */
export interface GameState {
  // 基础状态
  phase: GamePhase;
  currentScreen: ScreenType;
  
  // 角色信息
  selectedCharacter: CharacterId | null;
  playerCharacter: CharacterId | null;
  aiCharacters: CharacterId[];
  
  // 角色状态映射（用于技能系统）
  characterStates: Map<string, CharacterState>;
  
  // 卡牌状态
  liarCard: LiarCard | null;
  playerHand: Card[];
  aiPlayers: AIPlayer[];
  tableCards: Card[];
  
  // 回合状态
  currentPlayerIndex: number;
  turnNumber: number;
  playedCards: PlayedCards | null;
  lastPlayerId: 'player' | 'ai' | 'ai2' | 'ai3' | null;
  
  // 玩家统计
  playerStats: PlayerStats;
  
  // 游戏结果
  winner: 'player' | 'ai' | null;
  lastAction: string;
  
  // Geass结果
  geassResult: GeassResult | null;
  
  // UI状态
  playerSelectedCards: string[];
  gameLog: string[];
}

// ============================================
// Geass系统类型
// ============================================

/** 
 * Geass判定结果
 * @property hit - 是否命中
 * @property damage - 伤害值
 * @property funnyAction - 触发的搞笑动作
 * @property message - 结果消息
 */
export interface GeassResult {
  hit: boolean;
  damage: number;
  funnyAction: FunnyAction;
  message: string;
}

/** 
 * 搞笑动作
 * Geass命中时触发的趣味效果
 */
export interface FunnyAction {
  id: number;
  emoji: string;
  description: string;
  soundType: string;
}

/** 预定义的8个搞笑动作 */
export const FUNNY_ACTIONS: FunnyAction[] = [
  { id: 0, emoji: '😵', description: '突然跳起了奇怪的舞蹈', soundType: 'sfx-funny-dance' },
  { id: 1, emoji: '🙈', description: '开始模仿猴子抓痒', soundType: 'sfx-funny-monkey' },
  { id: 2, emoji: '🤪', description: '不停地说"披萨"', soundType: 'sfx-funny-pizza' },
  { id: 3, emoji: '😂', description: '大笑30秒停不下来', soundType: 'sfx-funny-laugh' },
  { id: 4, emoji: '🐔', description: '学鸡打鸣', soundType: 'sfx-funny-chicken' },
  { id: 5, emoji: '🎭', description: '朗诵中二台词', soundType: 'sfx-funny-chuuni' },
  { id: 6, emoji: '🍕', description: '化身披萨宣传员', soundType: 'sfx-funny-pizza2' },
  { id: 7, emoji: '🦋', description: '追着蝴蝶跑', soundType: 'sfx-funny-butterfly' },
];

// ============================================
// AI系统类型
// ============================================

/** AI性格 */
export type Personality = 'aggressive' | 'conservative' | 'balanced';

/** AI动作类型 */
export type AIActionType = 'play' | 'challenge' | 'pass';

/** AI决策 */
export interface AIDecision {
  action: AIActionType;
  cardIds?: string[];
  claimedRank?: CardRank;
  targetId?: string;
  confidence: number;
  reasoning: string;
}

/** AI动画状态 */
export type AIAnimationState = 
  | 'idle'
  | 'thinking'
  | 'deciding'
  | 'playing'
  | 'challenging'
  | 'reacting';

/** AI思考信息 */
export interface AIThought {
  state: AIAnimationState;
  message: string;
  progress?: number;
}

/** AI配置 */
export interface AIConfig {
  difficulty: Difficulty;
  personality: Personality;
  reactionDelay: number;
  bluffFrequency: number;
  challengeThreshold: number;
}

// ============================================
// 组件Props类型
// ============================================

/** 主菜单组件Props */
export interface MainMenuProps {
  onStart: () => void;
  onSettings: () => void;
  onHelp: () => void;
}

/** 角色选择组件Props */
export interface CharacterSelectProps {
  characters: Character[];
  selectedId: CharacterId | null;
  onSelect: (id: CharacterId) => void;
  onConfirm: () => void;
  onBack: () => void;
}

/** 游戏桌组件Props */
export interface GameTableProps {
  gameState: GameState;
  onPlayCards: (cardIds: string[], claimedRank: CardRank) => void;
  onChallenge: () => void;
  onUseSkill: () => void;
  onBackToMenu: () => void;
}

/** 结算界面Props */
export interface ResultScreenProps {
  winner: 'player' | 'ai' | null;
  playerScore: number;
  opponentScore: number;
  onPlayAgain: () => void;
  onBackToMenu: () => void;
}

// ============================================
// 存储类型
// ============================================

/** 游戏设置 */
export interface GameSettings {
  difficulty: Difficulty;
  soundEnabled: boolean;
  musicEnabled: boolean;
  soundVolume: number;
  musicVolume: number;
}

/** 游戏存档 */
export interface GameSave {
  id: string;
  timestamp: number;
  gameState: GameState;
  settings: GameSettings;
}

/** 游戏统计 */
export interface GameStatistics {
  totalGames: number;
  wins: number;
  losses: number;
  winRate: number;
  favoriteCharacter: CharacterId | null;
  totalPlayTime: number;
}

// ============================================
// 工具类型
// ============================================

/** 可空类型 */
export type Nullable<T> = T | null;

/** 可选类型 */
export type Optional<T> = T | undefined;

/** 事件处理器 */
export type EventHandler<T = void> = (event: T) => void;

/** 异步函数 */
export type AsyncFunction<T = void, R = void> = (arg: T) => Promise<R>;
