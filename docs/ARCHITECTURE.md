# Code Geass: Liar's Game - 架构设计文档

> 本文档描述《Code Geass: Liar's Game》的技术架构设计，旨在帮助开发人员理解系统结构、模块职责和数据流。

**版本**: v2.1.0  
**日期**: 2026-03-14  
**作者**: PM Agent  
**状态**: 完善中

---

## 📋 目录

- [架构概述](#-架构概述)
- [系统架构图](#-系统架构图)
- [核心模块说明](#-核心模块说明)
- [数据流](#-数据流)
- [状态管理](#-状态管理)
- [扩展性设计](#-扩展性设计)
- [性能优化](#-性能优化)

---

## 🏗️ 架构概述

### 设计目标

| 目标 | 说明 |
|------|------|
| **可维护性** | 清晰的模块划分，便于后续开发和维护 |
| **可扩展性** | 支持未来功能扩展（新角色、新模式） |
| **高性能** | 流畅的游戏体验，60fps动画 |
| **可靠性** | 稳定的游戏逻辑，完善的错误处理 |

### 技术选型

| 层级 | 技术 | 版本 | 选型理由 |
|------|------|------|----------|
| 框架 | React | 18.2.0 | 组件化开发，生态丰富 |
| 语言 | TypeScript | 5.2.2 | 类型安全，IDE支持好 |
| 构建 | Vite | 5.0.8 | 快速冷启动，HMR支持 |
| 状态 | React Hooks | - | 轻量级，无需引入Redux |
| 音效 | Howler.js | 2.2.4 | 跨浏览器兼容性好 |
| 样式 | CSS Modules | - | 样式隔离，避免冲突 |
| 部署 | GitHub Pages | - | 免费，自动化部署 |

### 架构风格

采用**分层架构** + **组件化设计**：

```
┌─────────────────────────────────────────────────────────────┐
│                        表现层 (Presentation)                  │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────────────┐│
│  │   MainMenu   │  │CharacterSelect│  │      GameTable      ││
│  │   (主菜单)    │  │  (角色选择)   │  │      (游戏桌)       ││
│  └──────────────┘  └──────────────┘  └──────────────────────┘│
├─────────────────────────────────────────────────────────────┤
│                        业务逻辑层 (Business Logic)            │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────────────┐│
│  │  GameEngine  │  │  CardSystem  │  │    GeassSystem      ││
│  │   (游戏引擎)  │  │   (卡牌系统)  │  │    (Geass系统)      ││
│  └──────────────┘  └──────────────┘  └──────────────────────┘│
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────────────┐│
│  │   AIEngine   │  │SoundManager  │  │  EffectManager      ││
│  │   (AI引擎)   │  │  (音效管理)   │  │    (特效管理)       ││
│  └──────────────┘  └──────────────┘  └──────────────────────┘│
├─────────────────────────────────────────────────────────────┤
│                        数据层 (Data Layer)                    │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────────────┐│
│  │    Types     │  │  Characters  │  │    Game State       ││
│  │   (类型定义)  │  │   (角色数据)  │  │    (游戏状态)       ││
│  └──────────────┘  └──────────────┘  └──────────────────────┘│
└─────────────────────────────────────────────────────────────┘
```

---

## 🗺️ 系统架构图

### 整体架构

```
┌─────────────────────────────────────────────────────────────────┐
│                           用户界面层                              │
├─────────────────────────────────────────────────────────────────┤
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐             │
│  │  MainMenu   │  │ Character   │  │  GameTable  │             │
│  │  (主菜单)   │  │  Select     │  │  (游戏桌)   │             │
│  └──────┬──────┘  └──────┬──────┘  └──────┬──────┘             │
│         │                │                │                    │
│         └────────────────┼────────────────┘                    │
│                          │                                      │
│                          ▼                                      │
│                   ┌─────────────┐                               │
│                   │   App.tsx   │                               │
│                   │  (状态管理)  │                               │
│                   └──────┬──────┘                               │
└──────────────────────────┼──────────────────────────────────────┘
                           │
┌──────────────────────────┼──────────────────────────────────────┐
│                          ▼                                      │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │                      游戏核心层                          │   │
│  │  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐     │   │
│  │  │ GameEngine  │  │ CardSystem  │  │ GeassSystem │     │   │
│  │  │  (游戏引擎)  │  │  (卡牌系统)  │  │ (Geass系统) │     │   │
│  │  └──────┬──────┘  └──────┬──────┘  └──────┬──────┘     │   │
│  │         │                │                │            │   │
│  │         └────────────────┼────────────────┘            │   │
│  │                          │                            │   │
│  │         ┌────────────────┼────────────────┐            │   │
│  │         ▼                ▼                ▼            │   │
│  │  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐     │   │
│  │  │  AIEngine   │  │SoundManager │  │EffectManager│     │   │
│  │  │  (AI引擎)   │  │ (音效管理)  │  │ (特效管理)  │     │   │
│  │  └─────────────┘  └─────────────┘  └─────────────┘     │   │
│  └─────────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────────┘
                           │
┌──────────────────────────┼──────────────────────────────────────┐
│                          ▼                                      │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │                      数据层                              │   │
│  │  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐     │   │
│  │  │    Types    │  │ Characters  │  │    Utils    │     │   │
│  │  │  (类型定义)  │  │  (角色数据)  │  │  (工具函数)  │     │   │
│  │  └─────────────┘  └─────────────┘  └─────────────┘     │   │
│  └─────────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────────┘
```

### 模块依赖关系

```
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

## 🔧 核心模块说明

### 1. 游戏引擎 (GameEngine)

#### 职责
- 管理游戏生命周期（初始化、进行、结束）
- 处理玩家和AI的操作
- 维护游戏状态
- 协调其他系统

#### 类图

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

#### 状态机

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

### 2. 卡牌系统 (CardSystem)

#### 职责
- 管理牌组（生成、洗牌、发牌）
- 处理骗子牌逻辑
- 管理卡牌状态

#### 类图

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

#### 卡牌数据结构

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

### 3. Geass系统 (GeassSystem)

#### 职责
- 执行Geass判定
- 应用角色技能效果
- 计算伤害和特效

#### 类图

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

#### Geass判定流程

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

### 4. AI系统

#### 架构

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

#### 策略接口

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

### 5. 音效系统 (SoundManager)

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

---

## 🌊 数据流

### 游戏流程数据流

```
用户操作
    │
    ▼
┌─────────────────┐
│   UI Component  │
│  (React组件)    │
└────────┬────────┘
         │ 调用
         ▼
┌─────────────────┐
│   GameEngine    │
│   (游戏引擎)     │
└────────┬────────┘
         │ 调用
         ▼
┌─────────────────────────────────────────┐
│           核心系统调用                   │
│  ┌──────────┐ ┌──────────┐ ┌──────────┐ │
│  │CardSystem│ │GeassSys  │ │AIEngine  │ │
│  └──────────┘ └──────────┘ └──────────┘ │
└─────────────────────────────────────────┘
         │
         ▼ 返回新状态
┌─────────────────┐
│   setState()    │
│  (React状态更新) │
└────────┬────────┘
         │
         ▼ 触发重渲染
┌─────────────────┐
│   UI Re-render  │
│   (界面更新)     │
└─────────────────┘
```

### 出牌流程数据流

```
1. 用户点击出牌按钮
         │
         ▼
2. App.tsx 调用 gameEngine.playerPlayCards()
         │
         ▼
3. GameEngine 验证并更新状态
   ├── 验证当前阶段
   ├── 验证选中牌
   ├── 调用 cardSystem.playCards()
   └── 更新 gameState
         │
         ▼
4. 进入质疑阶段
   ├── 设置 phase = 'challenge'
   └── 通知AI进行质疑决策
         │
         ▼
5. AI质疑决策
   ├── AIEngine.decideChallenge()
   ├── 根据策略决定是否质疑
   └── 返回决策结果
         │
         ▼
6. 质疑结算
   ├── 翻牌验证
   ├── 判定胜负
   └── 触发Geass判定
         │
         ▼
7. Geass判定
   ├── GeassSystem.performGeass()
   ├── 计算命中率
   ├── 检查角色技能
   └── 返回判定结果
         │
         ▼
8. 更新游戏状态
   ├── 更新HP
   ├── 检查游戏结束
   └── 切换到下一玩家
```

---

## 🗄️ 状态管理

### 游戏状态结构

```typescript
interface GameState {
  // 基础状态
  phase: GamePhase;                    // 当前游戏阶段
  currentScreen: ScreenType;           // 当前屏幕

  // 角色信息
  selectedCharacter: CharacterId | null;
  playerCharacter: CharacterId | null;
  aiCharacters: CharacterId[];
  characterStates: Map<string, CharacterState>;

  // 卡牌状态
  liarCard: LiarCard | null;           // 当前骗子牌
  playerHand: Card[];                  // 玩家手牌
  aiPlayers: AIPlayer[];               // AI玩家列表
  tableCards: Card[];                  // 桌面上的牌

  // 回合状态
  currentPlayerIndex: number;          // 当前玩家索引
  turnNumber: number;                  // 回合数
  playedCards: PlayedCards | null;     // 已出的牌
  lastPlayerId: PlayerId | null;       // 最后出牌玩家

  // 玩家统计
  playerStats: PlayerStats;

  // 游戏结果
  winner: 'player' | 'ai' | null;
  lastAction: string;
  geassResult: GeassResult | null;

  // UI状态
  playerSelectedCards: string[];
  gameLog: string[];
}
```

### 状态更新原则

1. **不可变性**: 每次状态更新都创建新对象
   ```typescript
   this.state = {
     ...this.state,
     playerHand: newHand,
     phase: 'challenge'
   };
   ```

2. **集中管理**: 所有状态变更通过GameEngine方法
   ```typescript
   // ✅ 正确
   const newState = gameEngine.playerPlayCards();
   setGameState(newState);
   
   // ❌ 错误
   gameState.playerHand = newHand; // 直接修改
   ```

3. **派生状态**: 使用useMemo计算派生状态
   ```typescript
   const currentPlayer = useMemo(() => {
     return gameState.currentPlayerIndex === 0 
       ? 'player' 
       : gameState.aiPlayers[gameState.currentPlayerIndex - 1];
   }, [gameState.currentPlayerIndex]);
   ```

---

## 🔮 扩展性设计

### 新增角色

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

### 新增AI策略

1. 实现 `StrategyInterface`
2. 在 `AIEngine` 中注册

```typescript
class NewStrategy implements StrategyInterface {
  decidePlay(ai, state) { /* ... */ }
  decideChallenge(ai, play, state) { /* ... */ }
  getDifficulty() { return 'expert'; }
}
```

### 联网对战（未来）

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

## ⚡ 性能优化

### 渲染优化

#### React优化

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

#### CSS优化

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

### 资源优化

#### 图片优化
- 使用WebP格式
- 懒加载非首屏图片
- 使用CSS精灵图合并小图标

#### 音效优化
- 压缩至128kbps
- 延迟加载非关键音效
- 使用对象池复用Howl实例

### 代码优化

```typescript
// 避免重复计算
// 优化前
const liarCards = hand.filter(c => c.rank === liarCard);
const hasLiarCard = liarCards.length > 0;

// 优化后
const hasLiarCard = hand.some(c => c.rank === liarCard);

// 使用合适的数据结构
// 使用Set提高查找效率
const selectedCardSet = new Set(selectedCards);
const isSelected = selectedCardSet.has(cardId); // O(1)
```

---

## 📚 相关文档

- [PRD.md](./PRD.md) - 产品需求文档
- [SRS.md](./SRS.md) - 软件需求规格书
- [API.md](./API.md) - API接口文档
- [CONTRIBUTING.md](./CONTRIBUTING.md) - 贡献指南
- [DEV_GUIDE.md](./DEV_GUIDE.md) - 开发维护手册

---

**文档结束**
