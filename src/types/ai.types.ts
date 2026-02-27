/**
 * Code Geass: Liar's Game - AI系统类型定义
 * Phase 3: AI系统开发
 */

// 游戏卡牌类型（AI系统使用）
export type AICardType = 'citizen' | 'king' | 'slave';

export interface AICard {
  id: string;
  type: AICardType;
  value: number;
  owner: string;
}

// 游戏状态（AI系统使用）
export interface AIGameState {
  currentRound: number;
  totalRounds: number;
  currentPlayer: string;
  players: AIPlayer[];
  tableCards: AICard[];
  lastAction?: AIGameAction;
  phase: 'setup' | 'play' | 'challenge' | 'resolve' | 'end';
}

export interface AIPlayer {
  id: string;
  name: string;
  isAI: boolean;
  hand: AICard[];
  score: number;
  isActive: boolean;
}

// 游戏动作
export type AIActionType = 'play' | 'challenge' | 'pass';

export interface AIGameAction {
  type: AIActionType;
  playerId: string;
  card?: AICard;
  claimedCard?: AICardType;
  timestamp: number;
}

// AI配置
export type Difficulty = 'easy' | 'normal' | 'hard';
export type Personality = 'aggressive' | 'conservative' | 'balanced';

export interface AIConfig {
  difficulty: Difficulty;
  personality: Personality;
  reactionDelay: number; // 思考时间(ms)
  enableAnimation: boolean;
}

// AI决策结果
export interface AIDecision {
  action: AIActionType;
  card?: AICard;
  claimedCard?: AICardType;
  confidence: number; // 0-1
  reasoning: string;
  animationState: AIAnimationState;
  isBluff?: boolean;
}

// AI动画状态
export type AIAnimationState = 
  | 'idle'
  | 'thinking'
  | 'deciding'
  | 'playing'
  | 'challenging'
  | 'reacting';

// AI思考信息
export interface AIThought {
  state: AIAnimationState;
  progress: number; // 0-100
  message?: string;
  emotion?: 'confident' | 'uncertain' | 'surprised' | 'calm';
}

// 策略上下文
export interface StrategyContext {
  gameState: AIGameState;
  aiPlayer: AIPlayer;
  opponent: AIPlayer;
  history: AIGameAction[];
  knownCards: Map<string, AICardType[]>; // 已知的对手卡牌信息
}

// 算牌记忆
export interface CardMemory {
  playedCards: AICard[];
  claimedCards: Map<string, AICardType[]>; // 玩家ID -> 声称的卡牌类型
  actualCards: Map<string, AICardType[]>; // 玩家ID -> 实际打出的卡牌类型
  challengeHistory: ChallengeRecord[];
}

export interface ChallengeRecord {
  round: number;
  challenger: string;
  challenged: string;
  wasLie: boolean;
  success: boolean;
}

// AI性格参数
export interface PersonalityTraits {
  bluffFrequency: number; // 撒谎频率 0-1
  challengeThreshold: number; // 质疑阈值 0-1 (越低越爱质疑)
  riskTolerance: number; // 风险承受 0-1
  patience: number; // 耐心程度 0-1
  adaptability: number; // 适应能力 0-1
}
