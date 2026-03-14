# Code Geass: Liar's Game - API接口文档

> 本文档描述《Code Geass: Liar's Game》的内部API接口，供开发人员参考。

**版本**: v2.1.0  
**日期**: 2026-03-14  
**作者**: PM Agent

---

## 📋 目录

- [概述](#-概述)
- [类型定义](#-类型定义)
- [GameEngine API](#-gameengine-api)
- [CardSystem API](#-cardsystem-api)
- [GeassSystem API](#-geasssystem-api)
- [AIEngine API](#-aiengine-api)
- [SoundManager API](#-soundmanager-api)
- [工具函数](#-工具函数)
- [常量定义](#-常量定义)

---

## 📝 概述

### 文档约定

- **类型定义**: 使用TypeScript语法
- **可选参数**: 使用 `?` 标记
- **返回值**: 使用 `=>` 标记
- **泛型**: 使用 `Type<T>` 语法

### 核心模块

| 模块 | 路径 | 说明 |
|------|------|------|
| GameEngine | `src/core/GameEngine.ts` | 游戏引擎 |
| CardSystem | `src/core/CardSystem.ts` | 卡牌系统 |
| GeassSystem | `src/core/GeassSystem.ts` | Geass系统 |
| AIEngine | `src/ai/AIEngine.ts` | AI引擎 |
| SoundManager | `src/audio/SoundManager.ts` | 音效管理 |
| Utils | `src/utils/index.ts` | 工具函数 |

---

## 🔧 类型定义

### 基础类型

```typescript
// 角色ID
type CharacterId = 'lelouch' | 'cc' | 'suzaku' | 'kallen';

// 玩家ID
type PlayerId = 'player' | 'ai' | 'ai2' | 'ai3';

// 游戏阶段
type GamePhase = 
  | 'setup'           // 初始化
  | 'player_turn'     // 玩家回合
  | 'ai_turn'         // AI回合
  | 'challenge'       // 质疑阶段
  | 'resolve'         // 结算阶段
  | 'geass'           // Geass判定
  | 'game_over';      // 游戏结束

// 卡牌点数
type CardRank = 'Q' | 'K' | 'A';

// 卡牌花色
type CardSuit = 'spades' | 'hearts' | 'clubs' | 'diamonds';

// AI难度
type Difficulty = 'easy' | 'normal' | 'hard';
```

### 数据模型

#### Card (卡牌)

```typescript
interface Card {
  /** 唯一标识符 */
  id: string;
  
  /** 花色 */
  suit: CardSuit;
  
  /** 点数 */
  rank: CardRank;
  
  /** 数值权重 (Q=12, K=13, A=14) */
  value: number;
  
  /** 是否已揭示 */
  isRevealed: boolean;
  
  /** 是否小丑牌 */
  isJoker: boolean;
}
```

#### Character (角色)

```typescript
interface Character {
  /** 角色ID */
  id: CharacterId;
  
  /** 中文名 */
  name: string;
  
  /** 英文名 */
  nameEn: string;
  
  /** 日文名 */
  nameJa: string;
  
  /** 阵营 */
  faction: 'black-knights' | 'britannia' | 'neutral';
  
  /** 头像路径 */
  avatar: string;
  
  /** 主题色 */
  color: string;
  
  /** 角色描述 */
  description: string;
  
  /** 角色技能 */
  skill: CharacterSkill;
  
  /** 角色属性 */
  stats: {
    /** 生命值 */
    hp: number;
    /** 操作难度 (1-5) */
    difficulty: 1 | 2 | 3 | 4 | 5;
  };
}
```

#### CharacterSkill (角色技能)

```typescript
interface CharacterSkill {
  /** 技能ID */
  id: string;
  
  /** 技能名称 */
  name: string;
  
  /** 英文名称 */
  nameEn: string;
  
  /** 技能描述 */
  description: string;
  
  /** 技能类型 */
  type: 'active' | 'passive' | 'trigger';
  
  /** 技能目标 */
  target: 'self' | 'enemy' | 'card' | 'none';
  
  /** 每局最大使用次数 (-1表示无限) */
  maxUses: number;
  
  /** 冷却回合数 */
  cooldown: number;
  
  /** 技能效果 */
  effect: SkillEffect;
  
  /** 图标路径 */
  icon: string;
}
```

#### PlayerStats (玩家状态)

```typescript
interface PlayerStats {
  /** 当前HP */
  hp: number;
  
  /** 最大HP */
  maxHp: number;
  
  /** Geass成功次数 */
  geassSuccessCount: number;
  
  /** Geass失败次数 */
  geassFailCount: number;
  
  /** 卡莲技能激活状态 */
  kallenBoostActive?: boolean;
  
  /** 卡莲出牌张数 */
  kallenCardCount?: number;
}
```

#### AIPlayer (AI玩家)

```typescript
interface AIPlayer {
  /** AI ID */
  id: 'ai' | 'ai2' | 'ai3';
  
  /** 显示名称 */
  name: string;
  
  /** 角色ID */
  character: CharacterId;
  
  /** 手牌 */
  hand: Card[];
  
  /** 玩家状态 */
  stats: PlayerStats;
  
  /** 是否存活 */
  isActive: boolean;
}
```

#### GameState (游戏状态)

```typescript
interface GameState {
  /** 当前游戏阶段 */
  phase: GamePhase;
  
  /** 当前骗子牌 */
  liarCard: CardRank | null;
  
  /** 玩家状态 */
  playerStats: PlayerStats;
  
  /** 玩家手牌 */
  playerHand: Card[];
  
  /** AI玩家列表 */
  aiPlayers: AIPlayer[];
  
  /** 当前玩家索引 (0=玩家, 1-3=AI) */
  currentPlayerIndex: number;
  
  /** 回合状态 */
  turnState: TurnState;
  
  /** 最后一条动作记录 */
  lastAction: string;
  
  /** 获胜者 */
  winner: 'player' | 'ai' | null;
  
  /** Geass判定结果 */
  geassResult: GeassResult | null;
  
  /** 玩家选中的牌 */
  playerSelectedCards: string[];
  
  /** 玩家角色 */
  playerCharacter: CharacterId | null;
}
```

#### GeassResult (Geass结果)

```typescript
interface GeassResult {
  /** 是否激活 */
  activated: boolean;
  
  /** 是否命中 */
  hit: boolean;
  
  /** 结果消息 */
  message: string;
  
  /** 伤害值 */
  damage: number;
  
  /** 搞笑动作 */
  funnyAction?: string;
  
  /** 是否免疫 */
  isImmune?: boolean;
  
  /** 是否闪避 */
  isEvaded?: boolean;
  
  /** 是否反击 */
  isCounter?: boolean;
  
  /** 是否复活 */
  isRevived?: boolean;
  
  /** 更新后的状态 */
  newStats: PlayerStats;
}
```

---

## 🎮 GameEngine API

### 游戏生命周期

#### initializeGame

初始化游戏，创建玩家、发牌、设置初始状态。

```typescript
/**
 * 初始化游戏
 * @param playerCharacter - 玩家选择的角色ID
 * @returns 初始游戏状态
 * @throws 当角色ID无效时抛出错误
 */
initializeGame(playerCharacter: CharacterId): GameState
```

**示例**:
```typescript
const engine = new GameEngine();
const state = engine.initializeGame('lelouch');
console.log(state.phase); // 'player_turn' 或 'ai_turn'
```

#### resetRound

重置牌局（惩罚后重新发牌）。

```typescript
/**
 * 重置牌局
 * @returns 重置后的游戏状态
 */
resetRound(): GameState
```

#### reset

完全重置游戏引擎。

```typescript
/**
 * 重置游戏
 */
reset(): void
```

#### getState

获取当前游戏状态。

```typescript
/**
 * 获取当前状态
 * @returns 当前游戏状态
 */
getState(): GameState
```

### 玩家操作

#### toggleCardSelection

玩家选择/取消选择手牌。

```typescript
/**
 * 切换牌的选中状态
 * @param cardId - 卡牌ID
 * @returns 更新后的游戏状态
 * @throws 当不在玩家回合时抛出错误
 */
toggleCardSelection(cardId: string): GameState
```

**示例**:
```typescript
// 选择第一张手牌
const cardId = engine.getState().playerHand[0].id;
engine.toggleCardSelection(cardId);

// 再次调用取消选择
engine.toggleCardSelection(cardId);
```

**限制**:
- 普通角色最多选3张
- 卡莲角色最多选4张

#### playerPlayCards

玩家出牌。

```typescript
/**
 * 玩家出牌
 * @returns 更新后的游戏状态
 * @throws 当不是玩家回合时抛出错误
 * @throws 当未选择任何牌时抛出错误
 * @throws 当出牌数量超过限制时抛出错误
 */
playerPlayCards(): GameState
```

**示例**:
```typescript
// 选择牌后出牌
try {
  const state = engine.playerPlayCards();
  console.log(state.phase); // 'challenge'
} catch (error) {
  console.error(error.message);
}
```

#### playerChallengeDecision

玩家质疑决策。

```typescript
/**
 * 玩家质疑决策
 * @param challenge - true=质疑, false=不质疑
 * @returns 更新后的游戏状态
 * @throws 当不在质疑阶段时抛出错误
 */
playerChallengeDecision(challenge: boolean): GameState
```

**示例**:
```typescript
// 选择质疑
const state = engine.playerChallengeDecision(true);

// 选择不质疑
const state = engine.playerChallengeDecision(false);
```

#### lelouchChangeLiarCard

鲁鲁修技能：强制改变骗子牌。

```typescript
/**
 * 鲁鲁修技能：强制改变骗子牌
 * @param newRank - 新的骗子牌点数
 * @returns 更新后的游戏状态
 * @throws 当玩家不是鲁鲁修时抛出错误
 */
lelouchChangeLiarCard(newRank: CardRank): GameState
```

**示例**:
```typescript
// 将骗子牌改为Q
const state = engine.lelouchChangeLiarCard('Q');
console.log(state.liarCard); // 'Q'
```

#### passTurn

跳过回合。

```typescript
/**
 * 跳过回合
 * @returns 更新后的游戏状态
 */
passTurn(): GameState
```

### AI操作

#### aiPlayCards

AI出牌。

```typescript
/**
 * AI出牌
 * @param aiId - AI ID ('ai' | 'ai2' | 'ai3')
 * @returns 更新后的游戏状态
 * @throws 当AI不存在时抛出错误
 */
aiPlayCards(aiId: 'ai' | 'ai2' | 'ai3'): GameState
```

#### aiChallengeDecision

AI质疑决策。

```typescript
/**
 * AI质疑决策
 * @param aiId - AI ID
 * @returns 更新后的游戏状态
 * @throws 当不在质疑阶段时抛出错误
 */
aiChallengeDecision(aiId: 'ai' | 'ai2' | 'ai3'): GameState
```

### 辅助方法

#### getCurrentPlayerId

获取当前活动玩家ID。

```typescript
/**
 * 获取当前玩家ID
 * @returns 当前玩家ID
 */
getCurrentPlayerId(): PlayerId
```

#### getCardSystem

获取卡牌系统实例。

```typescript
/**
 * 获取牌组系统
 * @returns CardSystem实例
 */
getCardSystem(): CardSystem
```

---

## 🃏 CardSystem API

### 牌组管理

#### generateDeck

生成牌组。

```typescript
/**
 * 生成牌组 (20张Q/K/A牌 + 2张JOKER)
 */
generateDeck(): void
```

#### shuffle

洗牌。

```typescript
/**
 * 洗牌 (Fisher-Yates算法)
 */
shuffle(): void
```

#### dealCards

发牌。

```typescript
/**
 * 发牌
 * @returns 发牌结果
 */
dealCards(): {
  playerCards: Card[];
  ai1Cards: Card[];
  ai2Cards: Card[];
  ai3Cards: Card[];
}
```

#### reset

重置牌组。

```typescript
/**
 * 重置牌组
 */
reset(): void
```

### 骗子牌管理

#### setLiarCard

设置骗子牌（随机）。

```typescript
/**
 * 设置骗子牌
 * @returns 设置的骗子牌点数
 */
setLiarCard(): CardRank
```

#### forceSetLiarCard

强制设置骗子牌。

```typescript
/**
 * 强制设置骗子牌
 * @param rank - 骗子牌点数
 */
forceSetLiarCard(rank: CardRank): void
```

#### getLiarCard

获取当前骗子牌。

```typescript
/**
 * 获取当前骗子牌
 * @returns 骗子牌点数或null
 */
getLiarCard(): CardRank | null
```

### 卡牌操作

#### playCards

出牌。

```typescript
/**
 * 出牌
 * @param cardIds - 要出的牌ID列表
 * @returns 出的牌
 */
playCards(cardIds: string[]): Card[]
```

#### drawCard

抽牌。

```typescript
/**
 * 抽牌
 * @returns 抽到的牌或null（牌组为空）
 */
drawCard(): Card | null
```

---

## ⚡ GeassSystem API

### Geass判定

#### performGeass

执行Geass判定。

```typescript
/**
 * 执行Geass判定
 * @param target - 目标玩家ID
 * @param stats - 目标玩家状态
 * @param character - 目标角色ID
 * @param hitChanceBoost - 命中率加成
 * @returns Geass结果
 */
performGeass(
  target: PlayerId,
  stats: PlayerStats,
  character: CharacterId,
  hitChanceBoost: number
): GeassResult
```

**示例**:
```typescript
const geassSystem = new GeassSystem();
const result = geassSystem.performGeass(
  'ai',
  { hp: 3, maxHp: 3, geassSuccessCount: 0, geassFailCount: 0 },
  'cc',
  0
);

if (result.hit) {
  console.log('Geass命中！');
}
```

### 辅助方法

#### calculateHitChance

计算命中率。

```typescript
/**
 * 计算命中率
 * @param base - 基础命中率 (默认1/3)
 * @param boost - 加成值
 * @returns 最终命中率
 */
calculateHitChance(base: number, boost: number): number
```

#### getRandomFunnyAction

获取随机搞笑动作。

```typescript
/**
 * 获取随机搞笑动作
 * @returns 搞笑动作
 */
getRandomFunnyAction(): FunnyAction
```

---

## 🤖 AIEngine API

### AI决策

#### decidePlay

决定出牌。

```typescript
/**
 * 决定出牌
 * @param aiPlayer - AI玩家
 * @param gameState - 游戏状态
 * @returns 出牌决策
 */
decidePlay(
  aiPlayer: AIPlayer,
  gameState: GameState
): {
  cards: Card[];
  claimedRank: CardRank;
  isLie: boolean;
}
```

#### decideChallenge

决定是否质疑。

```typescript
/**
 * 决定是否质疑
 * @param aiPlayer - AI玩家
 * @param lastPlay - 上一次的出牌
 * @param gameState - 游戏状态
 * @returns true=质疑, false=不质疑
 */
decideChallenge(
  aiPlayer: AIPlayer,
  lastPlay: PlayedCards,
  gameState: GameState
): boolean
```

### 策略管理

#### setStrategy

设置AI策略。

```typescript
/**
 * 设置AI策略
 * @param aiId - AI ID
 * @param difficulty - 难度等级
 */
setStrategy(aiId: AIPlayerId, difficulty: Difficulty): void
```

---

## 🔊 SoundManager API

### 初始化

#### initialize

初始化音效管理器。

```typescript
/**
 * 初始化音效
 * @returns Promise
 */
initialize(): Promise<void>
```

#### load

加载音效。

```typescript
/**
 * 加载音效
 * @param soundId - 音效ID
 * @param url - 音效文件URL
 * @returns Promise
 */
load(soundId: string, url: string): Promise<void>
```

### 播放控制

#### play

播放音效。

```typescript
/**
 * 播放音效
 * @param soundId - 音效ID
 */
play(soundId: string): void
```

#### stop

停止音效。

```typescript
/**
 * 停止音效
 * @param soundId - 音效ID
 */
stop(soundId: string): void
```

#### playBGM

播放背景音乐。

```typescript
/**
 * 播放背景音乐
 * @param bgmId - BGM ID
 */
playBGM(bgmId: string): void
```

#### stopBGM

停止背景音乐。

```typescript
/**
 * 停止背景音乐
 */
stopBGM(): void
```

### 音量控制

#### setVolume

设置主音量。

```typescript
/**
 * 设置音量
 * @param volume - 音量 (0-1)
 */
setVolume(volume: number): void
```

#### setBGMVolume

设置BGM音量。

```typescript
/**
 * 设置BGM音量
 * @param volume - 音量 (0-1)
 */
setBGMVolume(volume: number): void
```

#### setSFXVolume

设置音效音量。

```typescript
/**
 * 设置音效音量
 * @param volume - 音量 (0-1)
 */
setSFXVolume(volume: number): void
```

### 静音控制

#### mute

静音。

```typescript
/**
 * 静音
 */
mute(): void
```

#### unmute

取消静音。

```typescript
/**
 * 取消静音
 */
unmute(): void
```

#### toggleMute

切换静音状态。

```typescript
/**
 * 切换静音
 */
toggleMute(): void
```

---

## 🛠️ 工具函数

### 卡牌工具

#### createDeck

创建一副Liar's Bar扑克牌。

```typescript
/**
 * 创建一副Liar's Bar扑克牌（20张：Q/K/A各6张 + 2张小丑牌）
 * @returns 新牌组
 */
export const createDeck = (): Card[]
```

#### shuffleDeck

洗牌（Fisher-Yates算法）。

```typescript
/**
 * 洗牌
 * @param deck - 要洗的牌组
 * @returns 打乱后的牌组
 */
export const shuffleDeck = (deck: Card[]): Card[]
```

#### dealCards

发牌 - 1v3模式，每人5张。

```typescript
/**
 * 发牌
 * @param deck - 牌组
 * @param handSize - 手牌大小（默认5张）
 * @returns 分发后的手牌
 */
export const dealCards = (
  deck: Card[],
  handSize?: number
): {
  playerHand: Card[];
  ai1Hand: Card[];
  ai2Hand: Card[];
  ai3Hand: Card[];
  remaining: Card[];
}
```

#### getSuitSymbol

获取花色符号。

```typescript
/**
 * 获取花色符号
 * @param suit - 花色
 * @returns 符号
 */
export const getSuitSymbol = (suit: CardSuit): string
```

#### getSuitColor

获取花色颜色。

```typescript
/**
 * 获取花色颜色
 * @param suit - 花色
 * @returns 颜色代码
 */
export const getSuitColor = (suit: CardSuit): string
```

### 角色工具

#### getCharacterColor

获取角色主色调。

```typescript
/**
 * 获取角色主色调
 * @param characterId - 角色ID
 * @returns 颜色代码
 */
export const getCharacterColor = (characterId: CharacterId): string
```

#### getCharacterName

获取角色名字。

```typescript
/**
 * 获取角色名字
 * @param characterId - 角色ID
 * @returns 角色名
 */
export const getCharacterName = (characterId: CharacterId): string
```

#### getCharacterSkill

获取角色技能信息。

```typescript
/**
 * 获取角色技能信息
 * @param characterId - 角色ID
 * @returns 技能信息
 */
export const getCharacterSkill = (
  characterId: CharacterId
): {
  name: string;
  description: string;
}
```

### 动画工具

#### delay

延迟函数。

```typescript
/**
 * 延迟函数
 * @param ms - 毫秒数
 * @returns Promise
 */
export const delay = (ms: number): Promise<void>
```

#### easing

缓动函数集合。

```typescript
export const easing = {
  easeInOut: (t: number) => number;
  easeOut: (t: number) => number;
  easeIn: (t: number) => number;
  elastic: (t: number) => number;
}
```

### 存储工具

#### storage

本地存储工具。

```typescript
export const storage = {
  save: (data: unknown) => void;
  load: <T>() => T | null;
  clear: () => void;
}
```

#### gameLogStorage

游戏日志存储工具。

```typescript
export const gameLogStorage = {
  save: (log: GameLogEntry) => void;
  loadAll: () => GameLogEntry[];
  clear: () => void;
}
```

### 随机工具

#### random

随机工具对象。

```typescript
export const random = {
  int: (min: number, max: number) => number;
  float: (min: number, max: number) => number;
  choice: <T>(arr: T[]) => T;
  shuffle: <T>(arr: T[]) => T[];
  uuid: () => string;
}
```

---

## 📊 常量定义

### 游戏常量

```typescript
// 游戏配置
const GAME_CONFIG = {
  /** 初始HP */
  INITIAL_HP: 3,
  
  /** 最大HP */
  MAX_HP: 3,
  
  /** 初始手牌数 */
  INITIAL_HAND_SIZE: 5,
  
  /** Geass基础命中率 */
  BASE_GEASS_HIT_CHANCE: 1 / 3,
  
  /** 最大出牌数（普通角色） */
  MAX_CARDS_PER_TURN: 3,
  
  /** 最大出牌数（卡莲） */
  MAX_CARDS_KALLEN: 4,
} as const;

// 角色技能配置
const SKILL_CONFIG = {
  lelouch: {
    maxUses: 1,
  },
  cc: {
    reviveChance: 0.5,
  },
  suzaku: {
    evadeChance: 0.15,
    counterChance: 0.25,
  },
  kallen: {
    maxCards: 4,
    hitChancePerCard: 0.2,
  },
} as const;

// AI配置
const AI_CONFIG = {
  easy: {
    challengeProbability: 0.2,
    lieProbability: 0.5,
  },
  normal: {
    challengeProbability: 0.4,
    lieProbability: 0.4,
  },
  hard: {
    challengeProbability: 0.6,
    lieProbability: 0.3,
  },
} as const;
```

### 音效ID列表

```typescript
const SOUND_IDS = {
  // BGM
  BGM_MENU: 'bgm-menu',
  BGM_GAME: 'bgm-game',
  BGM_VICTORY: 'bgm-victory',
  BGM_DEFEAT: 'bgm-defeat',
  
  // UI
  UI_CLICK: 'ui-click',
  UI_HOVER: 'ui-hover',
  UI_BACK: 'ui-back',
  
  // 卡牌
  CARD_DRAW: 'card-draw',
  CARD_PLAY: 'card-play',
  CARD_SHUFFLE: 'card-shuffle',
  
  // 游戏
  GAME_CHALLENGE: 'game-challenge',
  GAME_GEASS_START: 'game-geass-start',
  GAME_GEASS_HIT: 'game-geass-hit',
  GAME_GEASS_MISS: 'game-geass-miss',
  
  // 技能
  SKILL_LELOUCH: 'skill-lelouch',
  SKILL_CC: 'skill-cc',
  SKILL_SUZAKU: 'skill-suzaku',
  SKILL_KALLEN: 'skill-kallen',
} as const;
```

### 搞笑动作列表

```typescript
const FUNNY_ACTIONS = [
  { id: 0, emoji: '😵', description: '突然跳起了奇怪的舞蹈', soundType: 'sfx-funny-dance' },
  { id: 1, emoji: '🙈', description: '开始模仿猴子抓痒', soundType: 'sfx-funny-monkey' },
  { id: 2, emoji: '🤪', description: '不停地说"披萨"', soundType: 'sfx-funny-pizza' },
  { id: 3, emoji: '😂', description: '大笑30秒停不下来', soundType: 'sfx-funny-laugh' },
  { id: 4, emoji: '🐔', description: '学鸡打鸣', soundType: 'sfx-funny-chicken' },
  { id: 5, emoji: '🎭', description: '朗诵中二台词', soundType: 'sfx-funny-chuuni' },
  { id: 6, emoji: '🍕', description: '化身披萨宣传员', soundType: 'sfx-funny-pizza2' },
  { id: 7, emoji: '🦋', description: '追着蝴蝶跑', soundType: 'sfx-funny-butterfly' },
] as const;
```

---

## 📚 相关文档

- [PRD.md](./PRD.md) - 产品需求文档
- [SRS.md](./SRS.md) - 软件需求规格书
- [ARCHITECTURE.md](./ARCHITECTURE.md) - 架构设计文档
- [CONTRIBUTING.md](./CONTRIBUTING.md) - 贡献指南
- [DEV_GUIDE.md](./DEV_GUIDE.md) - 开发维护手册

---

**文档结束**
