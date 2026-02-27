/**
 * Code Geass: Liar's Game - 全局类型定义
 */

// ============================================
// 基础类型
// ============================================

export type CharacterId = 'lelouch' | 'cc' | 'suzaku' | 'kallen';

export type ScreenType = 
  | 'main-menu'
  | 'character-select'
  | 'game-table'
  | 'result'
  | 'settings'
  | 'help';

export type AnimationState = 
  | 'idle'
  | 'breathing'
  | 'playing-card'
  | 'win'
  | 'lose';

export type GamePhase = 
  | 'setup'
  | 'playing'
  | 'challenge'
  | 'resolve'
  | 'end';

export type Difficulty = 'easy' | 'normal' | 'hard';

// ============================================
// 卡牌类型
// ============================================

export type CardSuit = 'spades' | 'hearts' | 'clubs' | 'diamonds';
export type CardRank = 'A' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | 'J' | 'Q' | 'K';

export interface Card {
  id: string;
  suit: CardSuit;
  rank: CardRank;
  value: number;
  isRevealed: boolean;
}

// ============================================
// 角色类型
// ============================================

export interface Character {
  id: CharacterId;
  name: string;
  nameEn: string;
  color: string;
  secondaryColor: string;
  accentColor: string;
  description: string;
  personality: string;
  pose: string;
  accessories: string[];
}

// ============================================
// 游戏状态类型
// ============================================

export interface GameState {
  currentScreen: ScreenType;
  selectedCharacter: CharacterId | null;
  playerHand: Card[];
  opponentHand: Card[];
  tableCards: Card[];
  currentRound: number;
  maxRounds: number;
  playerScore: number;
  opponentScore: number;
  gamePhase: GamePhase;
  playerHP?: number;
  opponentHP?: number;
  maxHP?: number;
  currentTurn?: 'player' | 'opponent';
  lastAction?: string;
  difficulty?: Difficulty;
}

// ============================================
// 组件Props类型
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
  gameState: GameState;
  onPlayCard: (cardId: string) => void;
  onPass: () => void;
  onChallenge: () => void;
}

export interface ResultScreenProps {
  isWin: boolean;
  playerScore: number;
  opponentScore: number;
  onRestart: () => void;
  onMainMenu: () => void;
}

// ============================================
// AI相关类型
// ============================================

export type AIAnimationState = 
  | 'idle'
  | 'thinking'
  | 'deciding'
  | 'playing'
  | 'challenging'
  | 'reacting';

export type ActionType = 'play' | 'challenge' | 'pass';

export interface AIDecision {
  action: ActionType;
  card?: Card;
  claimedCard?: string;
  confidence: number;
  reasoning: string;
  animationState: AIAnimationState;
}

export interface AIThought {
  state: AIAnimationState;
  progress: number;
  message?: string;
  emotion?: 'confident' | 'uncertain' | 'surprised' | 'calm';
}

// ============================================
// Geass相关类型
// ============================================

export interface GeassResult {
  activated: boolean;
  hit: boolean;
  message: string;
  damage: number;
  funnyAction?: string;
}

export interface PlayerStats {
  hp: number;
  maxHp: number;
  geassSuccessCount: number;
  geassFailCount: number;
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
