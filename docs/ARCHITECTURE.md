# Code Geass: Liar's Game - 架构设计文档 (ARCHITECTURE)

**版本**: v1.0.0  
**日期**: 2026-03-14  
**作者**: PM Agent  
**状态**: 初版

---

## 1. 架构概述

### 1.1 设计目标

本文档描述《Code Geass: Liar's Game》的技术架构设计，旨在实现：
- **可维护性**: 清晰的模块划分，便于后续开发和维护
- **可扩展性**: 支持未来功能扩展（新角色、新模式）
- **高性能**: 流畅的游戏体验，60fps动画
- **可靠性**: 稳定的游戏逻辑，完善的错误处理

### 1.2 技术选型

| 层级 | 技术 | 版本 | 选型理由 |
|------|------|------|----------|
| 框架 | React | 18.2.0 | 组件化开发，生态丰富 |
| 语言 | TypeScript | 5.2.2 | 类型安全，IDE支持好 |
| 构建 | Vite | 5.0.8 | 快速冷启动，HMR支持 |
| 状态 | React Hooks | - | 轻量级，无需引入Redux |
| 音效 | Howler.js | 2.2.4 | 跨浏览器兼容性好 |
| 样式 | CSS Modules | - | 样式隔离，避免冲突 |
| 部署 | GitHub Pages | - | 免费，自动化部署 |

### 1.3 架构风格

采用**分层架构** + **组件化设计**：
- **表现层**: React组件，负责UI渲染
- **业务逻辑层**: Hooks和核心类，处理游戏逻辑
- **数据层**: 类型定义和数据文件

---

## 2. 系统架构图

### 2.1 整体架构

```
┌─────────────────────────────────────────────────────────────────┐
│                        表现层 (Presentation)                      │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────────────┐  │
│  │   MainMenu   │  │CharacterSelect│  │      GameTable       │  │
│  │   (主菜单)    │  │  (角色选择)   │  │      (游戏桌)        │  │
│  └──────────────┘  └──────────────┘  └──────────────────────┘  │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────────────┐  │
│  │ ResultScreen │  │  GameBoard   │  │    UI Components     │  │
│  │  (结果界面)   │  │   (游戏板)   │  │     (UI组件)         │  │
│  └──────────────┘  └──────────────┘  └──────────────────────┘  │
├─────────────────────────────────────────────────────────────────┤
│                        业务逻辑层 (Business Logic)                │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────────────┐  │
│  │  GameEngine  │  │  CardSystem  │  │    GeassSystem       │  │
│  │   (游戏引擎)  │  │   (卡牌系统)  │  │    (Geass系统)       │  │
│  └──────────────┘  └──────────────┘  └──────────────────────┘  │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────────────┐  │
│  │   AIEngine   │  │SoundManager  │  │  EffectManager       │  │
│  │   (AI引擎)   │  │  (音效管理)   │  │    (特效管理)        │  │
│  └──────────────┘  └──────────────┘  └──────────────────────┘  │
├─────────────────────────────────────────────────────────────────┤
│                        数据层 (Data Layer)                        │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────────────┐  │
│  │    Types     │  │  Characters  │  │    Game State        │  │
│  │   (类型定义)  │  │   (角色数据)  │  │    (游戏状态)        │  │
│  └──────────────┘  └──────────────┘  └──────────────────────┘  │
└─────────────────────────────────────────────────────────────────┘
```

### 2.2 数据流

```
┌─────────┐     ┌─────────────┐     ┌─────────────┐     ┌─────────┐
│  User   │────▶│   UI Event  │────▶│ GameEngine  │────▶│  State  │
│ Action  │     │   Handler   │     │   Method    │     │ Update  │
└─────────┘     └─────────────┘     └─────────────┘     └─────────┘
                                                              │
                                                              ▼
┌─────────┐     ┌─────────────┐     ┌─────────────┐     ┌─────────┐
│  Render │◀────│   React     │◀────│   Props     │◀────│  State  │
│  Update │     │  Re-render  │     │   Pass      │     │ Change  │
└─────────┘     └─────────────┘     └─────────────┘     └─────────┘
```

---

## 3. 模块详细设计

### 3.1 游戏引擎 (GameEngine)

#### 3.1.1 职责
- 管理游戏生命周期（初始化、进行、结束）
- 处理玩家和AI的操作
- 维护游戏状态
- 协调其他系统

#### 3.1.2 类图

```
┌─────────────────────────────────────────────────────────────┐
│                        GameEngine                           │
├─────────────────────────────────────────────────────────────┤
│ - cardSystem: CardSystem                                    │
│ - geassSystem: GeassSystem                                  │
│ - state: GameState                                          │
│ - playerCharacter: CharacterId | null                       │
├─────────────────────────────────────────────────────────────┤
│ + initializeGame(playerCharacter: CharacterId): GameState   │
│ + resetRound(): GameState                                   │
│ + toggleCardSelection(cardId: string): GameState            │
│ + playerPlayCards(): GameState                              │
│ + playerChallengeDecision(challenge: boolean): GameState    │
│ + aiPlayCards(aiId: AIPlayerId): GameState                  │
│ + aiChallengeDecision(aiId: AIPlayerId): GameState          │
│ + lelouchChangeLiarCard(newRank: CardRank): GameState       │
│ + passTurn(): GameState                                     │
│ + getState(): GameState                                     │
│ + reset(): void                                             │
├─────────────────────────────────────────────────────────────┤
│ - getNextPlayerIndex(): number                              │
│ - resolveChallenge(challenger: PlayerId): GameState         │
│ - executeGeass(loser: PlayerId, boost: number): GeassResult │
└─────────────────────────────────────────────────────────────┘
```

#### 3.1.3 状态机

```
                    ┌─────────────┐
         ┌─────────▶│    setup    │◀────────┐
         │          │   (初始化)   │         │
         │          └─────────────┘         │
         │                  │               │
         │                  ▼               │
         │          ┌─────────────┐         │
         │    ┌────│ player_turn │────┐    │
         │    │    │  (玩家回合)  │    │    │
         │    │    └─────────────┘    │    │
         │    │            │          │    │
         │    │            ▼          │    │
         │    │    ┌─────────────┐    │    │
         │    └───▶│  ai_turn    │◀───┘    │
         │         │  (AI回合)   │         │
         │         └─────────────┘         │
         │                  │              │
         │                  ▼              │
         │         ┌─────────────┐         │
         │         │  challenge  │         │
         │         │  (质疑阶段)  │         │
         │         └─────────────┘         │
         │                  │              │
         │                  ▼              │
         │         ┌─────────────┐         │
         │         │   resolve   │         │
         │         │  (结算阶段)  │         │
         │         └─────────────┘         │
         │                  │              │
         │                  ▼              │
         │         ┌─────────────┐         │
         └────────▶│    geass    │─────────┘
                   │ (Geass判定) │
                   └─────────────┘
                            │
                            ▼
                   ┌─────────────┐
                   │  game_over  │
                   │  (游戏结束)  │
                   └─────────────┘
```

### 3.2 卡牌系统 (CardSystem)

#### 3.2.1 职责
- 管理牌组（生成、洗牌、发牌）
- 处理骗子牌逻辑
- 管理卡牌状态

#### 3.2.2 类图

```
┌─────────────────────────────────────────────────────────────┐
│                        CardSystem                           │
├─────────────────────────────────────────────────────────────┤
│ - deck: Card[]                                              │
│ - discardPile: Card[]                                       │
│ - liarCard: CardRank | null                                 │
│ - playedCards: Card[]                                       │
├─────────────────────────────────────────────────────────────┤
│ + generateDeck(): void                                      │
│ + shuffle(): void                                           │
│ + dealCards(): DealResult                                   │
│ + setLiarCard(): CardRank                                   │
│ + forceSetLiarCard(rank: CardRank): void                    │
│ + playCards(cardIds: string[]): Card[]                      │
│ + drawCard(): Card | null                                   │
│ + reset(): void                                             │
├─────────────────────────────────────────────────────────────┤
│ - createCard(suit: CardSuit, rank: CardRank): Card          │
│ - generateId(): string                                      │
└─────────────────────────────────────────────────────────────┘
```

#### 3.2.3 卡牌数据结构

```typescript
// 卡牌定义
interface Card {
  id: string;              // 唯一标识符
  suit: CardSuit;          // 花色
  rank: CardRank;          // 点数
  value: number;           // 数值权重
  isRevealed: boolean;     // 是否已揭示
  isJoker: boolean;        // 是否小丑牌
}

type CardSuit = 'spades' | 'hearts' | 'clubs' | 'diamonds';
type CardRank = 'Q' | 'K' | 'A';

// 发牌结果
interface DealResult {
  playerCards: Card[];
  ai1Cards: Card[];
  ai2Cards: Card[];
  ai3Cards: Card[];
}
```

### 3.3 Geass系统 (GeassSystem)

#### 3.3.1 职责
- 执行Geass判定
- 应用角色技能效果
- 计算伤害和特效

#### 3.3.2 类图

```
┌─────────────────────────────────────────────────────────────┐
│                        GeassSystem                          │
├─────────────────────────────────────────────────────────────┤
│ - funnyActions: FunnyAction[]                               │
├─────────────────────────────────────────────────────────────┤
│ + performGeass(                                              │
│     target: PlayerId,                                        │
│     stats: PlayerStats,                                      │
│     character: CharacterId,                                  │
│     hitChanceBoost: number                                   │
│   ): GeassResult                                             │
│ + calculateHitChance(base: number, boost: number): number   │
│ + getRandomFunnyAction(): FunnyAction                       │
├─────────────────────────────────────────────────────────────┤
│ - checkCCImmunity(): boolean                                │
│ - checkSuzakuEvade(): boolean                               │
│ - checkSuzakuCounter(): boolean                             │
└─────────────────────────────────────────────────────────────┘
```

#### 3.3.3 Geass判定流程

```
开始Geass判定
    │
    ▼
计算基础命中率 (33.33%)
    │
    ▼
应用命中率加成 (卡莲技能)
    │
    ▼
检查C.C.免疫 (50%概率)
    │
    ├── 免疫成功 ──▶ 结果: 免疫
    │
    ▼
检查朱雀闪避 (15%概率)
    │
    ├── 闪避成功 ──▶ 检查反击 (25%概率)
    │                    │
    │                    ├── 反击成功 ──▶ 结果: 闪避+反击
    │                    │
    │                    └── 反击失败 ──▶ 结果: 闪避
    │
    ▼
执行随机判定
    │
    ├── 命中 ──▶ HP-1, 选择搞笑动作 ──▶ 结果: 命中
    │
    └── 未命中 ──▶ 结果: 未命中
```

### 3.4 AI系统

#### 3.4.1 架构

```
┌─────────────────────────────────────────────────────────────┐
│                         AIEngine                            │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐         │
│  │ EasyStrategy│  │NormalStrategy│  │ HardStrategy│         │
│  │  (简单策略)  │  │  (普通策略)  │  │  (困难策略)  │         │
│  └─────────────┘  └─────────────┘  └─────────────┘         │
│         │                │                │                │
│         └────────────────┼────────────────┘                │
│                          │                                 │
│                          ▼                                 │
│              ┌─────────────────────┐                       │
│              │  StrategyInterface  │                       │
│              │    (策略接口)        │                       │
│              └─────────────────────┘                       │
│                          │                                 │
│                          ▼                                 │
│                   ┌─────────────┐                          │
│                   │  AIEngine   │                          │
│                   │  (AI引擎)   │                          │
│                   └─────────────┘                          │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

#### 3.4.2 策略接口

```typescript
interface StrategyInterface {
  // 决定出牌
  decidePlay(
    aiPlayer: AIPlayer,
    gameState: GameState
  ): PlayDecision;
  
  // 决定是否质疑
  decideChallenge(
    aiPlayer: AIPlayer,
    lastPlay: PlayAction,
    gameState: GameState
  ): boolean;
  
  // 获取难度等级
  getDifficulty(): Difficulty;
}
```

#### 3.4.3 策略实现

**EasyStrategy**:
- 出牌: 随机选择，50%概率撒谎
- 质疑: 固定20%概率

**NormalStrategy**:
- 出牌: 有骗子牌时70%出真牌
- 质疑: 基础40%，有骗子牌时+40%

**HardStrategy**:
- 出牌: 分析手牌和局势，最优选择
- 质疑: 基础60%，分析玩家历史模式

### 3.5 音效系统 (SoundManager)

#### 3.5.1 架构

```
┌─────────────────────────────────────────────────────────────┐
│                       SoundManager                          │
├─────────────────────────────────────────────────────────────┤
│ - sounds: Map<string, Howl>                                 │
│ - bgm: Howl | null                                          │
│ - volume: number                                            │
│ - muted: boolean                                            │
├─────────────────────────────────────────────────────────────┤
│ + initialize(): Promise<void>                               │
│ + load(soundId: string, url: string): Promise<void>         │
│ + play(soundId: string): void                               │
│ + stop(soundId: string): void                               │
│ + playBGM(bgmId: string): void                              │
│ + stopBGM(): void                                           │
│ + setVolume(volume: number): void                           │
│ + mute(): void                                              │
│ + unmute(): void                                            │
└─────────────────────────────────────────────────────────────┘
```

#### 3.5.2 音效配置

```typescript
const SOUND_CONFIG = {
  // BGM
  'bgm-menu': { src: '/audio/bgm/menu.mp3', loop: true, volume: 0.3 },
  'bgm-game': { src: '/audio/bgm/game.mp3', loop: true, volume: 0.3 },
  
  // SFX
  'card-play': { src: '/audio/sfx/card-play.mp3', volume: 0.7 },
  'geass-hit': { src: '/audio/sfx/geass-hit.mp3', volume: 0.8 },
  'geass-miss': { src: '/audio/sfx/geass-miss.mp3', volume: 0.7 },
  // ...
};
```

### 3.6 特效系统 (EffectManager)

#### 3.6.1 职责
- 管理游戏特效的触发和播放
- 协调视觉和音效
- 控制特效性能

#### 3.6.2 特效类型

```typescript
interface EffectConfig {
  id: string;
  type: 'geass' | 'funny' | 'skill' | 'damage';
  duration: number;
  animation: AnimationConfig;
  sound?: string;
  particles?: ParticleConfig;
}

const EFFECTS: EffectConfig[] = [
  {
    id: 'geass-activation',
    type: 'geass',
    duration: 2000,
    animation: {
      name: 'geass-expand',
      keyframes: [...],
    },
    sound: 'geass-activation',
  },
  // ...
];
```

---

## 4. 项目结构

### 4.1 目录结构

```
liars-game/
├── public/                     # 静态资源
│   ├── assets/                 # 游戏资源
│   │   ├── audio/              # 音效文件
│   │   │   ├── bgm/            # 背景音乐
│   │   │   └── sfx/            # 音效
│   │   ├── images/             # 图片资源
│   │   │   ├── avatars/        # 角色头像
│   │   │   ├── cards/          # 卡牌图片
│   │   │   └── ui/             # UI元素
│   │   └── fonts/              # 字体文件
│   └── index.html              # HTML模板
│
├── src/                        # 源代码
│   ├── ai/                     # AI系统
│   │   ├── AIEngine.ts         # AI引擎
│   │   ├── AIConfig.ts         # AI配置
│   │   └── strategies/         # 策略实现
│   │       ├── StrategyInterface.ts
│   │       ├── EasyStrategy.ts
│   │       ├── NormalStrategy.ts
│   │       └── HardStrategy.ts
│   │
│   ├── audio/                  # 音效管理
│   │   ├── SoundManager.ts     # 音效管理器
│   │   └── index.ts            # 导出
│   │
│   ├── characters/             # 角色系统
│   │   ├── types.ts            # 角色类型
│   │   ├── data.ts             # 角色数据
│   │   └── state.ts            # 角色状态管理
│   │
│   ├── components/             # React组件
│   │   ├── animations/         # 动画组件
│   │   ├── characters/         # 角色组件
│   │   ├── effects/            # 特效组件
│   │   ├── CharacterSelect.tsx # 角色选择
│   │   ├── GameBoard.tsx       # 游戏面板
│   │   └── ...
│   │
│   ├── core/                   # 游戏核心
│   │   ├── GameEngine.ts       # 游戏引擎
│   │   ├── CardSystem.ts       # 卡牌系统
│   │   ├── GeassSystem.ts      # Geass系统
│   │   └── index.ts            # 导出
│   │
│   ├── data/                   # 游戏数据
│   │   ├── characters.ts       # 角色配置
│   │   └── cards.ts            # 卡牌配置
│   │
│   ├── effects/                # 特效系统
│   │   ├── EffectManager.ts    # 特效管理器
│   │   └── index.ts            # 导出
│   │
│   ├── store/                  # 状态管理
│   │   ├── CharacterStore.ts   # 角色状态
│   │   └── GameStore.ts        # 游戏状态
│   │
│   ├── styles/                 # 样式文件
│   │   ├── theme.ts            # 主题配置
│   │   ├── global.css          # 全局样式
│   │   └── components/         # 组件样式
│   │
│   ├── types/                  # 类型定义
│   │   ├── game.types.ts       # 游戏类型
│   │   ├── ai.types.ts         # AI类型
│   │   └── index.ts            # 导出
│   │
│   ├── ui/                     # 页面UI
│   │   ├── MainMenu.tsx        # 主菜单
│   │   ├── CharacterSelect.tsx # 角色选择
│   │   ├── GameTable.tsx       # 游戏桌
│   │   └── ResultScreen.tsx    # 结果界面
│   │
│   ├── utils/                  # 工具函数
│   │   ├── gameLogic.ts        # 游戏逻辑
│   │   └── helpers.ts          # 辅助函数
│   │
│   ├── App.tsx                 # 主应用组件
│   └── main.tsx                # 应用入口
│
├── docs/                       # 文档
│   ├── PRD.md                  # 产品需求文档
│   ├── SRS.md                  # 软件需求规格书
│   ├── ARCHITECTURE.md         # 架构设计文档
│   ├── USER_GUIDE.md           # 用户手册
│   ├── DEV_GUIDE.md            # 开发维护手册
│   └── API_REFERENCE.md        # API接口文档
│
├── tests/                      # 测试文件
│   ├── unit/                   # 单元测试
│   ├── integration/            # 集成测试
│   └── e2e/                    # E2E测试
│
├── package.json                # 项目配置
├── tsconfig.json               # TypeScript配置
├── vite.config.ts              # Vite配置
└── README.md                   # 项目说明
```

### 4.2 模块依赖关系

```
┌─────────────────────────────────────────────────────────────┐
│                        依赖关系图                            │
└─────────────────────────────────────────────────────────────┘

                    ┌─────────────┐
                    │    App      │
                    └──────┬──────┘
                           │
           ┌───────────────┼───────────────┐
           │               │               │
           ▼               ▼               ▼
    ┌─────────────┐ ┌─────────────┐ ┌─────────────┐
    │  MainMenu   │ │CharacterSel │ │  GameTable  │
    └─────────────┘ └─────────────┘ └──────┬──────┘
                                           │
                                           ▼
                                    ┌─────────────┐
                                    │  GameBoard  │
                                    └──────┬──────┘
                                           │
                    ┌──────────────────────┼──────────────────────┐
                    │                      │                      │
                    ▼                      ▼                      ▼
            ┌─────────────┐        ┌─────────────┐        ┌─────────────┐
            │ GameEngine  │◀──────▶│ CardSystem  │        │SoundManager │
            └──────┬──────┘        └─────────────┘        └─────────────┘
                   │
        ┌──────────┼──────────┐
        │          │          │
        ▼          ▼          ▼
┌─────────────┐ ┌─────────────┐ ┌─────────────┐
│GeassSystem  │ │  AIEngine   │ │EffectManager│
└─────────────┘ └──────┬──────┘ └─────────────┘
                       │
              ┌────────┴────────┐
              │                 │
              ▼                 ▼
    ┌─────────────────┐ ┌─────────────────┐
    │ StrategyInterface│ │   CharacterData  │
    └─────────────────┘ └─────────────────┘
```

---

## 5. 关键算法

### 5.1 洗牌算法 (Fisher-Yates)

```typescript
function shuffle(deck: Card[]): Card[] {
  const array = [...deck];
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
```

**复杂度**: O(n)  
**随机性**: 均匀分布

### 5.2 Geass判定算法

```typescript
function performGeass(
  targetStats: PlayerStats,
  character: CharacterId,
  hitChanceBoost: number
): GeassResult {
  // 基础命中率
  let hitChance = 1/3 + hitChanceBoost;
  
  // C.C.免疫检查
  if (character === 'cc' && targetStats.skillAvailable) {
    if (Math.random() < 0.5) {
      return { hit: false, isImmune: true, ... };
    }
  }
  
  // 朱雀闪避检查
  if (character === 'suzaku') {
    if (Math.random() < 0.15) {
      const counter = Math.random() < 0.25;
      return { hit: false, isEvaded: true, isCounter: counter, ... };
    }
  }
  
  // 命中判定
  const hit = Math.random() < hitChance;
  
  if (hit) {
    targetStats.hp -= 1;
    const funnyAction = getRandomFunnyAction();
    return { hit: true, funnyAction, ... };
  }
  
  return { hit: false, ... };
}
```

### 5.3 AI决策算法

```typescript
function decidePlay(ai: AIPlayer, gameState: GameState): PlayDecision {
  const liarCard = gameState.liarCard;
  const hand = ai.hand;
  
  // 分离骗子牌和其他牌
  const liarCards = hand.filter(c => c.rank === liarCard || c.isJoker);
  const otherCards = hand.filter(c => c.rank !== liarCard && !c.isJoker);
  
  // 决策逻辑
  const shouldLie = liarCards.length === 0 || Math.random() < 0.3;
  
  if (!shouldLie && liarCards.length > 0) {
    // 出真牌
    const maxCards = ai.character === 'kallen' ? 4 : 3;
    const count = Math.min(liarCards.length, maxCards);
    return {
      cards: liarCards.slice(0, count),
      claimedRank: liarCard,
      isLie: false
    };
  } else {
    // 撒谎
    const cardsToPlay = otherCards.length > 0 ? otherCards : hand;
    return {
      cards: cardsToPlay.slice(0, 1),
      claimedRank: liarCard,
      isLie: true
    };
  }
}
```

---

## 6. 性能优化策略

### 6.1 渲染优化

#### 6.1.1 React优化

```typescript
// 使用memo避免不必要的重渲染
const GameBoard = React.memo(({ gameState, onAction }: Props) => {
  // ...
});

// 使用useMemo缓存计算结果
const sortedPlayers = useMemo(() => 
  players.sort((a, b) => b.hp - a.hp),
  [players]
);

// 使用useCallback缓存回调
const handlePlayCard = useCallback((cardId: string) => {
  // ...
}, [gameState]);
```

#### 6.1.2 CSS优化

```css
/* 使用transform代替top/left */
.card {
  transform: translateX(100px); /* 好 */
  /* left: 100px; */ /* 避免 */
}

/* 使用will-change提示浏览器优化 */
.animating {
  will-change: transform, opacity;
}

/* 动画结束后移除will-change */
.animation-complete {
  will-change: auto;
}
```

### 6.2 资源优化

#### 6.2.1 图片优化
- 使用WebP格式
- 懒加载非首屏图片
- 使用CSS精灵图合并小图标

#### 6.2.2 音效优化
- 压缩至128kbps
- 延迟加载非关键音效
- 使用对象池复用Howl实例

### 6.3 代码优化

#### 6.3.1 避免重复计算
```typescript
// 优化前
const liarCards = hand.filter(c => c.rank === liarCard);
const hasLiarCard = liarCards.length > 0;

// 优化后
const hasLiarCard = hand.some(c => c.rank === liarCard);
```

#### 6.3.2 使用合适的数据结构
```typescript
// 使用Set提高查找效率
const selectedCardSet = new Set(selectedCards);
const isSelected = selectedCardSet.has(cardId); // O(1)
```

---

## 7. 错误处理

### 7.1 错误分类

| 类别 | 示例 | 处理方式 |
|------|------|----------|
| 业务错误 | 非法出牌 | 提示用户，阻止操作 |
| 系统错误 | 资源加载失败 | 重试或降级 |
| 运行时错误 | 空指针 | 捕获并记录 |

### 7.2 错误处理策略

```typescript
// 业务错误
function playCards(cardIds: string[]): Result<GameState, Error> {
  if (this.state.phase !== 'player_turn') {
    return Err(new Error('不是玩家回合'));
  }
  if (cardIds.length === 0) {
    return Err(new Error('未选择任何牌'));
  }
  // ...
  return Ok(newState);
}

// 全局错误边界
class ErrorBoundary extends React.Component {
  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error('Game error:', error);
    // 上报错误
    reportError(error, info);
  }
  
  render() {
    if (this.state.hasError) {
      return <ErrorFallback />;
    }
    return this.props.children;
  }
}
```

---

## 8. 扩展性设计

### 8.1 新增角色

要新增角色，只需：
1. 在 `src/data/characters.ts` 添加角色数据
2. 在 `src/characters/` 添加技能实现
3. 添加角色头像资源

```typescript
// 新增角色示例
{
  id: 'new-character',
  name: '新角色',
  skill: {
    name: '新技能',
    effect: newCharacterEffect
  }
}
```

### 8.2 新增AI策略

1. 实现 `StrategyInterface`
2. 在 `AIEngine` 中注册

```typescript
class NewStrategy implements StrategyInterface {
  decidePlay(ai, state) { /* ... */ }
  decideChallenge(ai, play, state) { /* ... */ }
  getDifficulty() { return 'expert'; }
}
```

### 8.3 联网对战（未来）

架构预留：
```
┌─────────────┐     WebSocket     ┌─────────────┐
│   Client    │◀─────────────────▶│   Server    │
│  (Browser)  │                   │  (Node.js)  │
└─────────────┘                   └─────────────┘
                                         │
                                         ▼
                                  ┌─────────────┐
                                  │  Game Room  │
                                  │   Manager   │
                                  └─────────────┘
```

---

## 9. 部署架构

### 9.1 部署流程

```
┌─────────┐    ┌─────────┐    ┌─────────┐    ┌─────────┐
│  Code   │───▶│  Build  │───▶│  Test   │───▶│ Deploy  │
│  Push   │    │  (Vite) │    │  (CI)   │    │(GitHub  │
│         │    │         │    │         │    │ Pages)  │
└─────────┘    └─────────┘    └─────────┘    └─────────┘
```

### 9.2 CI/CD配置

```yaml
# .github/workflows/deploy.yml
name: Deploy
on:
  push:
    branches: [main]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node
        uses: actions/setup-node@v3
        with:
          node-version: '18'
      
      - name: Install
        run: npm ci
      
      - name: Test
        run: npm test
      
      - name: Build
        run: npm run build
      
      - name: Deploy
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

---

## 10. 附录

### 10.1 参考资料
- [React官方文档](https://react.dev/)
- [TypeScript手册](https://www.typescriptlang.org/docs/)
- [Vite指南](https://vitejs.dev/guide/)
- [Howler.js文档](https://howlerjs.com/)

### 10.2 版本历史

| 版本 | 日期 | 变更内容 |
|------|------|----------|
| v1.0.0 | 2026-03-14 | 初始架构设计 |

---

**文档结束**
