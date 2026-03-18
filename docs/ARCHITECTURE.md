# Code Geass: Liar's Game - 架构说明文档

**版本**: 1.0.0  
**更新日期**: 2026-03-18  

---

## 一、系统架构概览

### 1.1 架构图

```
┌─────────────────────────────────────────────────────────────────┐
│                        用户界面层 (UI Layer)                      │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐             │
│  │  MainMenu   │  │  GameTable  │  │ ResultScreen│             │
│  └─────────────┘  └─────────────┘  └─────────────┘             │
└─────────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│                       应用逻辑层 (App Layer)                      │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │                      App.tsx                            │   │
│  │  - 游戏状态管理    - 事件处理    - 路由控制              │   │
│  └─────────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│                       核心逻辑层 (Core Layer)                     │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐             │
│  │GameEngineV2 │  │ CardSystem  │  │ GeassSystem │             │
│  └─────────────┘  └─────────────┘  └─────────────┘             │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐             │
│  │DynamicAIEng │  │CharacterInt │  │  Character  │             │
│  └─────────────┘  └─────────────┘  └─────────────┘             │
└─────────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│                      基础服务层 (Service Layer)                   │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐             │
│  │SoundManager │  │  Utilities  │  │    Types    │             │
│  └─────────────┘  └─────────────┘  └─────────────┘             │
└─────────────────────────────────────────────────────────────────┘
```

### 1.2 技术栈

| 层级 | 技术 | 用途 |
|------|------|------|
| 前端框架 | React 18 | UI 渲染 |
| 构建工具 | Vite 5 | 项目构建和开发服务器 |
| 类型系统 | TypeScript 5 | 类型安全 |
| 样式方案 | CSS-in-JS | 组件样式 |
| 测试框架 | Jest + React Testing Library | 单元测试 |
| 音频管理 | Web Audio API | 音效播放 |

---

## 二、模块详细说明

### 2.1 核心游戏引擎 (GameEngineV2)

**文件**: `src/core/GameEngineV2.ts`

**职责**: 
- 游戏状态管理
- 回合流程控制
- 玩家行动处理
- 游戏结束判定

**主要方法**:

| 方法 | 描述 | 参数 | 返回值 |
|------|------|------|--------|
| `initializeGame()` | 初始化游戏 | `playerCharacter: CharacterId` | `GameState` |
| `playCards()` | 玩家出牌 | `cardIds: string[], claimedRank: string` | `boolean` |
| `challenge()` | 质疑出牌 | `challengerId: string` | `ChallengeResult` |
| `aiPlay()` | AI出牌 | `aiId: string` | `GameState` |
| `resetRound()` | 重置回合 | `startingPlayerIndex?: number` | `GameState` |

**状态流转图**:

```
setup → player_turn → ai_turn → challenge → geass → (resetRound) → player_turn
         ↑___________________________________________________________|
```

---

### 2.2 卡牌系统 (CardSystem)

**文件**: `src/core/CardSystem.ts`

**职责**:
- 牌组生成和管理
- 洗牌算法
- 发牌逻辑
- 骗子牌设定

**数据结构**:

```typescript
interface Card {
  id: string;
  rank: 'A' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | 'J' | 'Q' | 'K' | 'JOKER';
  suit: 'spades' | 'hearts' | 'clubs' | 'diamonds' | 'joker';
  isJoker: boolean;
}
```

---

### 2.3 Geass判定系统 (GeassSystem)

**文件**: `src/core/GeassSystem.ts`

**职责**:
- Geass命中判定
- 角色技能处理
- 闪避/反击逻辑

**技能系统**:

| 角色 | 技能名称 | 效果 | 触发概率 |
|------|---------|------|----------|
| 鲁鲁修 | Geass之力 | 命中+15% | 被动 |
| 朱雀 | 枢木剑术 | 闪避+15%，反击25% | 被动/触发 |
| C.C. | 不老不死 | 复活1次 | 100% |
| 卡莲 | 红莲之牙 | 每多1张牌命中+20% | 被动 |

---

### 2.4 AI引擎 (DynamicAIEngine)

**文件**: `src/ai/DynamicAIEngine.ts`

**职责**:
- AI决策逻辑
- 性格模拟
- 难度适配

**决策流程**:

```
1. 分析当前局势（手牌、骗子牌、对手行为）
2. 根据性格计算决策概率
3. 执行决策（出牌/质疑）
4. 更新学习数据
```

**性格参数**:

```typescript
interface AIPersonality {
  bluffTendency: number;      // 虚张声势倾向 (0-1)
  challengeTendency: number;  // 质疑倾向 (0-1)
  riskTolerance: number;      // 风险承受度 (0-1)
  aggressiveness: number;     // 攻击性 (0-1)
}
```

---

## 三、数据流设计

### 3.1 游戏状态流

```
用户操作 → App.tsx事件处理 → GameEngine方法调用 → 状态更新 → UI重新渲染
                ↓
         游戏日志记录
                ↓
         音频效果播放
```

### 3.2 状态管理

**全局状态** (App.tsx):
- `gameState`: 游戏核心状态
- `gameLog`: 游戏日志
- `selectedCards`: 玩家选中的牌
- `currentScreen`: 当前屏幕

**引擎状态** (GameEngineV2):
- `phase`: 游戏阶段
- `playerStats`: 玩家状态
- `aiPlayers`: AI玩家数组
- `turnState`: 回合状态

---

## 四、接口设计

### 4.1 核心类型定义

```typescript
// 游戏状态
interface GameState {
  phase: GamePhase;
  liarCard: string | null;
  playerStats: PlayerStats;
  playerHand: Card[];
  aiPlayers: AIPlayer[];
  turnState: TurnState;
  geassResult: GeassResult | null;
}

// 玩家状态
interface PlayerStats {
  hp: number;
  maxHp: number;
  geassSuccessCount: number;
  geassFailCount: number;
}

// AI玩家
interface AIPlayer {
  id: 'ai' | 'ai2' | 'ai3';
  name: string;
  character: CharacterId;
  hand: Card[];
  stats: PlayerStats;
  isActive: boolean;
}

// 回合状态
interface TurnState {
  turnNumber: number;
  currentPlayerIndex: number;
  playedCards: PlayedCards | null;
  geassConsecutiveMisses: number;
}
```

### 4.2 事件接口

```typescript
// 游戏事件
interface GameEvents {
  onCardPlay: (cards: Card[], claimedRank: string) => void;
  onChallenge: (challengerId: string) => void;
  onPass: () => void;
  onGameEnd: (winner: 'player' | 'ai') => void;
}
```

---

## 五、性能优化策略

### 5.1 已实施优化

1. **组件懒加载**: 使用 `React.lazy` 延迟加载非首屏组件
2. **图片优化**: 使用 WebP 格式，实现懒加载
3. **状态优化**: 使用 `useMemo` 和 `useCallback` 减少不必要重渲染
4. **日志限制**: 限制游戏日志数量为最近100条

### 5.2 待实施优化

1. **代码分割**: 按路由分割代码包
2. **状态管理**: 引入 Zustand 替代部分 useState
3. **虚拟列表**: 长列表使用虚拟化
4. **Web Workers**: 复杂计算移至 Worker 线程

---

## 六、安全设计

### 6.1 XSS 防护

- ✅ 使用 React JSX 自动转义
- ✅ 避免使用 `dangerouslySetInnerHTML`
- ✅ 用户输入验证

### 6.2 状态安全

- ✅ 状态更新使用不可变模式
- ✅ 关键操作前验证游戏阶段
- ✅ 防止非法状态转换

---

## 七、扩展性设计

### 7.1 新增角色

1. 在 `src/data/characters.ts` 添加角色数据
2. 在 `src/core/GeassSystem.ts` 实现角色技能
3. 在 `src/ai/DynamicAIEngine.ts` 配置AI性格

### 7.2 新增游戏模式

1. 扩展 `GamePhase` 类型
2. 在 `GameEngineV2` 实现新模式逻辑
3. 更新UI组件支持新模式

---

## 八、部署架构

### 8.1 构建流程

```
源代码 → TypeScript编译 → Vite打包 → 静态资源 → CDN部署
```

### 8.2 环境配置

| 环境 | 构建命令 | 输出目录 |
|------|---------|----------|
| 开发 | `npm run dev` | - |
| 生产 | `npm run build` | `dist/` |
| 测试 | `npm test` | - |

---

## 九、监控与日志

### 9.1 日志级别

- **ERROR**: 系统错误，需要立即处理
- **WARN**: 警告信息，需要注意
- **INFO**: 一般信息，正常运行
- **DEBUG**: 调试信息，开发使用

### 9.2 性能监控

- 游戏帧率监控
- 内存使用监控
- 用户操作响应时间

---

## 十、附录

### 10.1 术语表

| 术语 | 说明 |
|------|------|
| Geass | 游戏中的惩罚机制 |
| Liar Card | 每回合指定的骗子牌 |
| Bluff | 虚张声势，出的牌与声称不符 |
| Challenge | 质疑对方的出牌 |

### 10.2 参考资料

- [React 官方文档](https://react.dev/)
- [TypeScript 官方文档](https://www.typescriptlang.org/)
- [Vite 官方文档](https://vitejs.dev/)

---

**文档维护**: Code Agent  
**最后更新**: 2026-03-18
