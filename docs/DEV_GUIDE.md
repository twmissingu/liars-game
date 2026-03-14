# Code Geass: Liar's Game - 开发维护手册

**版本**: v1.0.0  
**日期**: 2026-03-14  
**作者**: PM Agent

---

## 1. 开发环境搭建

### 1.1 系统要求

| 项目 | 最低要求 | 推荐配置 |
|------|----------|----------|
| Node.js | 16.x | 18.x LTS |
| npm | 8.x | 9.x |
| 内存 | 4GB | 8GB |
| 硬盘 | 1GB可用空间 | 5GB可用空间 |

### 1.2 环境安装

#### 1.2.1 安装Node.js
```bash
# 使用nvm安装（推荐）
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
nvm install 18
nvm use 18

# 验证安装
node -v  # v18.x.x
npm -v   # 9.x.x
```

#### 1.2.2 克隆项目
```bash
git clone https://github.com/yourusername/liars-game.git
cd liars-game
```

#### 1.2.3 安装依赖
```bash
npm install
```

#### 1.2.4 启动开发服务器
```bash
npm run dev
```

访问 http://localhost:5173 查看应用

### 1.3 开发工具推荐

| 工具 | 用途 | 配置 |
|------|------|------|
| VS Code | 代码编辑器 | 推荐插件见下方 |
| Chrome DevTools | 调试 | 内置 |
| React DevTools | React调试 | 浏览器扩展 |
| ESLint | 代码检查 | 已配置 |
| Prettier | 代码格式化 | 已配置 |

**VS Code推荐插件**:
- ESLint
- Prettier - Code: formatter
- TypeScript Importer
- Auto Rename Tag
- Bracket Pair Colorizer

---

## 2. 项目结构详解

### 2.1 目录结构说明

```
src/
├── ai/                    # AI系统
│   ├── AIEngine.ts        # AI引擎主类
│   ├── AIConfig.ts        # AI配置
│   └── strategies/        # AI策略实现
│       ├── StrategyInterface.ts   # 策略接口
│       ├── EasyStrategy.ts        # 简单策略
│       ├── NormalStrategy.ts      # 普通策略
│       └── HardStrategy.ts        # 困难策略
│
├── audio/                 # 音效管理
│   ├── SoundManager.ts    # 音效管理器
│   └── index.ts           # 导出
│
├── characters/            # 角色系统
│   ├── types.ts           # 角色类型定义
│   ├── data.ts            # 角色数据
│   └── state.ts           # 角色状态管理
│
├── components/            # React组件
│   ├── animations/        # 动画组件
│   ├── characters/        # 角色相关组件
│   ├── effects/           # 特效组件
│   ├── CharacterSelect.tsx    # 角色选择界面
│   ├── GameBoard.tsx          # 游戏主面板
│   └── ...
│
├── core/                  # 游戏核心逻辑
│   ├── GameEngine.ts      # 游戏引擎
│   ├── CardSystem.ts      # 卡牌系统
│   ├── GeassSystem.ts     # Geass系统
│   └── index.ts           # 导出
│
├── data/                  # 游戏数据
│   ├── characters.ts      # 角色配置
│   └── cards.ts           # 卡牌配置
│
├── effects/               # 特效系统
│   ├── EffectManager.ts   # 特效管理器
│   └── index.ts           # 导出
│
├── store/                 # 状态管理
│   ├── CharacterStore.ts  # 角色状态
│   └── GameStore.ts       # 游戏状态
│
├── styles/                # 样式文件
│   ├── theme.ts           # 主题配置
│   ├── global.css         # 全局样式
│   └── components/        # 组件样式
│
├── types/                 # 类型定义
│   ├── game.types.ts      # 游戏相关类型
│   ├── ai.types.ts        # AI相关类型
│   └── index.ts           # 导出
│
├── ui/                    # 页面级UI组件
│   ├── MainMenu.tsx       # 主菜单
│   ├── CharacterSelect.tsx    # 角色选择
│   ├── GameTable.tsx      # 游戏桌
│   └── ResultScreen.tsx   # 结果界面
│
├── utils/                 # 工具函数
│   ├── gameLogic.ts       # 游戏逻辑辅助
│   └── helpers.ts         # 通用辅助函数
│
├── App.tsx                # 主应用组件
└── main.tsx               # 应用入口
```

### 2.2 核心模块关系

```
App.tsx
  ├── MainMenu
  ├── CharacterSelect
  └── GameBoard
        ├── GameEngine (核心)
        │     ├── CardSystem
        │     ├── GeassSystem
        │     └── AIEngine
        ├── SoundManager
        └── EffectManager
```

---

## 3. 开发规范

### 3.1 代码风格

#### 3.1.1 TypeScript规范

```typescript
// ✅ 好的实践

// 1. 明确的类型定义
interface Player {
  id: string;
  name: string;
  hp: number;
}

// 2. 使用类型别名
type PlayerId = 'player' | 'ai' | 'ai2' | 'ai3';

// 3. 函数返回类型明确
function calculateDamage(base: number, multiplier: number): number {
  return Math.floor(base * multiplier);
}

// 4. 使用枚举
enum GamePhase {
  Setup = 'setup',
  Playing = 'playing',
  Challenge = 'challenge',
  Resolve = 'resolve',
}

// 5. 可选属性和默认值
interface Config {
  required: string;
  optional?: number;
  withDefault: boolean;
}

const defaultConfig: Config = {
  required: '',
  withDefault: true,
};
```

#### 3.1.2 React组件规范

```typescript
// ✅ 好的实践

// 1. 明确的Props类型
interface GameBoardProps {
  gameState: GameState;
  onPlayCard: (cardId: string) => void;
  onChallenge: () => void;
}

// 2. 使用React.FC（可选，看团队习惯）
const GameBoard: React.FC<GameBoardProps> = ({ 
  gameState, 
  onPlayCard, 
  onChallenge 
}) => {
  // ...
};

// 3. 使用自定义hooks提取逻辑
function useGameLogic(initialState: GameState) {
  const [state, setState] = useState(initialState);
  // ...
  return { state, actions };
}

// 4. 使用useMemo缓存计算
const sortedPlayers = useMemo(() => {
  return players.sort((a, b) => b.hp - a.hp);
}, [players]);

// 5. 使用useCallback缓存回调
const handlePlay = useCallback((cardId: string) => {
  onPlayCard(cardId);
}, [onPlayCard]);
```

#### 3.1.3 命名规范

| 类型 | 规范 | 示例 |
|------|------|------|
| 组件 | PascalCase | `GameBoard`, `CharacterCard` |
| 函数 | camelCase | `playCards`, `calculateDamage` |
| 常量 | UPPER_SNAKE_CASE | `MAX_HP`, `BASE_HIT_CHANCE` |
| 接口 | PascalCase | `GameState`, `PlayerStats` |
| 类型别名 | PascalCase | `PlayerId`, `CardRank` |
| 枚举 | PascalCase | `GamePhase`, `CardSuit` |
| 文件 | camelCase | `gameEngine.ts`, `cardSystem.ts` |
| 组件文件 | PascalCase | `GameBoard.tsx` |

### 3.2 注释规范

```typescript
/**
 * 游戏引擎类
 * 负责管理游戏生命周期、处理玩家操作、维护游戏状态
 * 
 * @example
 * const engine = new GameEngine();
 * engine.initializeGame('lelouch');
 */
class GameEngine {
  /**
   * 初始化游戏
   * @param playerCharacter - 玩家选择的角色ID
   * @returns 初始游戏状态
   * @throws 当角色ID无效时抛出错误
   */
  initializeGame(playerCharacter: CharacterId): GameState {
    // ...
  }
  
  // 简单注释
  private helperMethod(): void {
    // TODO: 实现辅助功能
  }
}
```

### 3.3 Git工作流

#### 3.3.1 分支策略

```
main (生产分支)
  │
  ├── develop (开发分支)
  │     │
  │     ├── feature/role-skill (功能分支)
  │     ├── feature/new-ui
  │     └── bugfix/card-display
  │
  └── hotfix/critical-bug (热修复分支)
```

#### 3.3.2 提交规范

```
<type>(<scope>): <subject>

<body>

<footer>
```

**类型(type)**:
- `feat`: 新功能
- `fix`: 修复
- `docs`: 文档
- `style`: 格式（不影响代码运行）
- `refactor`: 重构
- `test`: 测试
- `chore`: 构建过程或辅助工具的变动

**示例**:
```
feat(ai): 新增困难难度AI策略

- 实现模式识别算法
- 优化质疑决策逻辑
- 添加历史记录分析

Closes #123
```

---

## 4. 核心模块开发指南

### 4.1 添加新角色

#### 步骤1: 定义角色数据

```typescript
// src/data/characters.ts
export const characters: Character[] = [
  // ... 现有角色
  {
    id: 'new-character',
    name: '新角色',
    nameEn: 'New Character',
    nameJa: '新キャラ',
    faction: 'black-knights',
    avatar: '/avatars/new-character/1.png',
    color: '#ff6b6b',
    description: '角色描述',
    skill: {
      id: 'new-skill',
      name: '新技能',
      nameEn: 'New Skill',
      description: '技能描述',
      type: 'active',
      target: 'enemy',
      maxUses: 1,
      cooldown: 0,
      effect: {
        type: 'custom-effect',
        value: 1,
      },
      icon: '/icons/skills/new-skill.png',
    },
    stats: {
      hp: 3,
      difficulty: 3,
    },
  },
];
```

#### 步骤2: 实现技能效果

```typescript
// src/characters/skills/newCharacterSkill.ts
import { GameState, PlayerStats } from '../../types';

export function newCharacterSkill(
  gameState: GameState,
  targetStats: PlayerStats
): SkillResult {
  // 实现技能逻辑
  return {
    success: true,
    message: '技能触发成功',
    newStats: {
      ...targetStats,
      // 修改后的状态
    },
  };
}
```

#### 步骤3: 在GeassSystem中集成

```typescript
// src/core/GeassSystem.ts
performGeass(
  target: PlayerId,
  stats: PlayerStats,
  character: CharacterId,
  hitChanceBoost: number
): GeassResult {
  // ... 现有逻辑
  
  // 添加新角色技能检查
  if (character === 'new-character') {
    return this.handleNewCharacterSkill(stats);
  }
  
  // ...
}
```

#### 步骤4: 添加资源
- 角色头像: `public/avatars/new-character/1.png`
- 技能图标: `public/icons/skills/new-skill.png`
- 音效: `public/audio/skills/new-skill.mp3`

### 4.2 添加新AI策略

#### 步骤1: 实现策略接口

```typescript
// src/ai/strategies/ExpertStrategy.ts
import { StrategyInterface } from './StrategyInterface';

export class ExpertStrategy implements StrategyInterface {
  decidePlay(ai: AIPlayer, gameState: GameState): PlayDecision {
    // 实现出牌决策
    // 分析局势，做出最优选择
    return {
      cards: selectedCards,
      claimedRank: gameState.liarCard!,
      isLie: false,
    };
  }
  
  decideChallenge(
    ai: AIPlayer,
    lastPlay: PlayAction,
    gameState: GameState
  ): boolean {
    // 实现质疑决策
    // 分析玩家历史模式
    return shouldChallenge;
  }
  
  getDifficulty(): Difficulty {
    return 'expert';
  }
}
```

#### 步骤2: 注册策略

```typescript
// src/ai/AIEngine.ts
import { ExpertStrategy } from './strategies/ExpertStrategy';

export class AIEngine {
  private strategies: Map<Difficulty, StrategyInterface>;
  
  constructor() {
    this.strategies = new Map([
      ['easy', new EasyStrategy()],
      ['normal', new NormalStrategy()],
      ['hard', new HardStrategy()],
      ['expert', new ExpertStrategy()], // 新增
    ]);
  }
}
```

### 4.3 添加新特效

#### 步骤1: 定义特效配置

```typescript
// src/effects/configs.ts
export const EFFECTS: EffectConfig[] = [
  // ... 现有特效
  {
    id: 'new-effect',
    type: 'custom',
    duration: 1500,
    animation: {
      name: 'new-animation',
      keyframes: [
        { offset: 0, opacity: 0, transform: 'scale(0)' },
        { offset: 0.5, opacity: 1, transform: 'scale(1.2)' },
        { offset: 1, opacity: 0, transform: 'scale(1)' },
      ],
    },
    sound: 'new-effect-sound',
  },
];
```

#### 步骤2: 创建特效组件

```tsx
// src/components/effects/NewEffect.tsx
import React from 'react';
import './NewEffect.css';

interface NewEffectProps {
  onComplete?: () => void;
}

export const NewEffect: React.FC<NewEffectProps> = ({ onComplete }) => {
  return (
    <div className="new-effect" onAnimationEnd={onComplete}>
      <div className="effect-particle" />
      <div className="effect-glow" />
    </div>
  );
};
```

#### 步骤3: 添加样式

```css
/* src/components/effects/NewEffect.css */
.new-effect {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation: new-animation 1.5s ease-out forwards;
}

@keyframes new-animation {
  0% {
    opacity: 0;
    transform: translate(-50%, -50%) scale(0);
  }
  50% {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1.2);
  }
  100% {
    opacity: 0;
    transform: translate(-50%, -50%) scale(1);
  }
}
```

---

## 5. 测试指南

### 5.1 单元测试

#### 5.1.1 测试文件位置
```
tests/
├── unit/
│   ├── core/
│   │   ├── GameEngine.test.ts
│   │   ├── CardSystem.test.ts
│   │   └── GeassSystem.test.ts
│   ├── ai/
│   │   └── AIEngine.test.ts
│   └── utils/
│       └── gameLogic.test.ts
```

#### 5.1.2 编写测试

```typescript
// tests/unit/core/GameEngine.test.ts
import { GameEngine } from '../../../src/core/GameEngine';

describe('GameEngine', () => {
  let engine: GameEngine;
  
  beforeEach(() => {
    engine = new GameEngine();
  });
  
  describe('initializeGame', () => {
    it('should create game with 4 players', () => {
      const state = engine.initializeGame('lelouch');
      expect(state.aiPlayers).toHaveLength(3);
    });
    
    it('should deal 5 cards to each player', () => {
      const state = engine.initializeGame('lelouch');
      expect(state.playerHand).toHaveLength(5);
      state.aiPlayers.forEach(ai => {
        expect(ai.hand).toHaveLength(5);
      });
    });
    
    it('should set liar card', () => {
      const state = engine.initializeGame('lelouch');
      expect(state.liarCard).toBeDefined();
      expect(['Q', 'K', 'A']).toContain(state.liarCard);
    });
  });
  
  describe('playerPlayCards', () => {
    it('should throw error when not player turn', () => {
      engine.initializeGame('lelouch');
      // 设置非玩家回合
      expect(() => engine.playerPlayCards()).toThrow('不是玩家回合');
    });
    
    it('should remove played cards from hand', () => {
      engine.initializeGame('lelouch');
      const initialHandSize = engine.getState().playerHand.length;
      
      // 选择并出牌
      engine.toggleCardSelection(engine.getState().playerHand[0].id);
      engine.playerPlayCards();
      
      expect(engine.getState().playerHand).toHaveLength(initialHandSize - 1);
    });
  });
});
```

#### 5.1.3 运行测试

```bash
# 运行所有测试
npm test

# 运行特定测试文件
npm test GameEngine

# 运行测试并生成覆盖率报告
npm run test:coverage

# 监视模式
npm run test:watch
```

### 5.2 集成测试

```typescript
// tests/integration/gameFlow.test.ts
describe('Game Flow Integration', () => {
  it('should complete a full game round', () => {
    const engine = new GameEngine();
    
    // 初始化游戏
    engine.initializeGame('lelouch');
    
    // 玩家出牌
    const cardId = engine.getState().playerHand[0].id;
    engine.toggleCardSelection(cardId);
    engine.playerPlayCards();
    
    // 验证进入质疑阶段
    expect(engine.getState().phase).toBe('challenge');
    
    // AI质疑决策
    engine.aiChallengeDecision('ai');
    
    // 验证状态变化
    // ...
  });
});
```

### 5.3 E2E测试

```typescript
// tests/e2e/game.spec.ts
describe('Game E2E', () => {
  beforeEach(() => {
    cy.visit('/');
  });
  
  it('should start a new game', () => {
    // 点击开始
    cy.contains('开始游戏').click();
    
    // 选择角色
    cy.get('[data-testid="character-lelouch"]').click();
    cy.contains('确认').click();
    
    // 验证进入游戏
    cy.get('[data-testid="game-board"]').should('be.visible');
    cy.get('[data-testid="player-hand"]').should('be.visible');
  });
  
  it('should play a card', () => {
    // 开始游戏
    cy.contains('开始游戏').click();
    cy.get('[data-testid="character-lelouch"]').click();
    cy.contains('确认').click();
    
    // 选择并出牌
    cy.get('[data-testid="card"]').first().click();
    cy.contains('出牌').click();
    
    // 验证进入质疑阶段
    cy.get('[data-testid="challenge-phase"]').should('be.visible');
  });
});
```

---

## 6. 调试技巧

### 6.1 使用React DevTools

1. 安装React DevTools浏览器扩展
2. 打开DevTools -> Components标签
3. 查看组件树和props
4. 使用Profiler分析渲染性能

### 6.2 日志调试

```typescript
// 使用console.group组织日志
console.group('Game Action');
console.log('Action:', action);
console.log('Prev State:', prevState);
console.log('Next State:', nextState);
console.groupEnd();

// 使用console.table查看表格数据
console.table(players.map(p => ({
  name: p.name,
  hp: p.hp,
  handCount: p.hand.length,
})));

// 条件日志
if (process.env.NODE_ENV === 'development') {
  console.log('Debug info:', debugData);
}
```

### 6.3 断点调试

在VS Code中配置调试：

```json
// .vscode/launch.json
{
  "version": "0.2.0",
  "configurations": [
    {
      "type": "chrome",
      "request": "launch",
      "name": "Debug Game",
      "url": "http://localhost:5173",
      "webRoot": "${workspaceFolder}",
      "sourceMapPathOverrides": {
        "webpack:///src/*": "${webRoot}/src/*"
      }
    }
  ]
}
```

### 6.4 性能分析

```typescript
// 使用performance API
function measurePerformance() {
  performance.mark('start');
  
  // 执行操作
  heavyOperation();
  
  performance.mark('end');
  performance.measure('operation', 'start', 'end');
  
  const entries = performance.getEntriesByName('operation');
  console.log(`Operation took ${entries[0].duration}ms`);
}

// 使用React Profiler
import { Profiler } from 'react';

function onRenderCallback(
  id: string,
  phase: 'mount' | 'update',
  actualDuration: number,
  baseDuration: number,
  startTime: number,
  commitTime: number
) {
  console.log('Component:', id);
  console.log('Render time:', actualDuration);
}

// 使用
<Profiler id="GameBoard" onRender={onRenderCallback}>
  <GameBoard />
</Profiler>
```

---

## 7. 性能优化

### 7.1 渲染优化

```typescript
// 1. 使用React.memo
const Card = React.memo(({ card, onClick }: CardProps) => {
  return (
    <div className="card" onClick={onClick}>
      {card.rank} of {card.suit}
    </div>
  );
});

// 2. 使用useMemo缓存计算
const expensiveCalculation = useMemo(() => {
  return players.reduce((acc, player) => {
    return acc + calculateScore(player);
  }, 0);
}, [players]);

// 3. 使用useCallback缓存回调
const handleCardClick = useCallback((cardId: string) => {
  onPlayCard(cardId);
}, [onPlayCard]);

// 4. 虚拟列表（如果手牌很多）
import { FixedSizeList } from 'react-window';

<FixedSizeList
  height={200}
  itemCount={cards.length}
  itemSize={80}
  width={600}
>
  {({ index, style }) => (
    <Card card={cards[index]} style={style} />
  )}
</FixedSizeList>
```

### 7.2 资源优化

```typescript
// 1. 图片懒加载
import { LazyLoadImage } from 'react-lazy-load-image-component';

<LazyLoadImage
  src={character.avatar}
  alt={character.name}
  effect="blur"
/>

// 2. 音效预加载策略
const soundManager = useRef(new SoundManager());

useEffect(() => {
  // 预加载关键音效
  soundManager.current.preload([
    'card-play',
    'geass-hit',
    'geass-miss',
  ]);
}, []);

// 3. 代码分割
const GameBoard = lazy(() => import('./GameBoard'));

<Suspense fallback={<Loading />}>
  <GameBoard />
</Suspense>
```

---

## 8. 部署流程

### 8.1 本地构建

```bash
# 构建生产版本
npm run build

# 预览构建结果
npm run preview
```

### 8.2 GitHub Pages部署

```bash
# 1. 确保构建成功
npm run build

# 2. 部署到gh-pages分支
npm run deploy

# 或使用GitHub Actions自动部署（推荐）
# 推送代码到main分支即可自动触发部署
```

### 8.3 自定义域名（可选）

1. 在`public`目录添加`CNAME`文件
2. 内容为你的域名：`game.yourdomain.com`
3. 在DNS服务商添加CNAME记录指向`yourusername.github.io`

---

## 9. 故障排查

### 9.1 常见问题

#### 问题1: 构建失败
```
Error: Cannot find module 'xxx'
```
**解决方案**:
```bash
rm -rf node_modules package-lock.json
npm install
```

#### 问题2: 类型错误
```
Type 'X' is not assignable to type 'Y'
```
**解决方案**:
- 检查类型定义
- 使用类型断言（临时方案）
- 修复类型不匹配

#### 问题3: 热更新失效
**解决方案**:
- 检查vite配置
- 重启开发服务器
- 清除浏览器缓存

### 9.2 性能问题

| 症状 | 可能原因 | 解决方案 |
|------|----------|----------|
| 卡顿 | 频繁重渲染 | 使用React.memo/useMemo |
| 内存泄漏 | 未清理订阅 | useEffect返回清理函数 |
| 加载慢 | 资源过大 | 压缩图片/音效，懒加载 |

### 9.3 调试清单

- [ ] 检查控制台错误
- [ ] 检查网络请求
- [ ] 检查React DevTools
- [ ] 检查状态变化
- [ ] 检查性能指标

---

## 10. 附录

### 10.1 环境变量

```bash
# .env.development
VITE_API_URL=http://localhost:3000
VITE_DEBUG=true

# .env.production
VITE_API_URL=https://api.example.com
VITE_DEBUG=false
```

### 10.2 脚本命令

```bash
# 开发
npm run dev          # 启动开发服务器
npm run build        # 构建生产版本
npm run preview      # 预览生产构建

# 测试
npm test             # 运行测试
npm run test:coverage # 生成覆盖率报告
npm run test:watch   # 监视模式

# 代码质量
npm run lint         # 运行ESLint
npm run lint:fix     # 自动修复
npm run format       # 格式化代码

# 类型检查
npm run type-check   # 运行TypeScript检查
```

### 10.3 相关文档

- [PRD.md](./PRD.md) - 产品需求文档
- [SRS.md](./SRS.md) - 软件需求规格书
- [ARCHITECTURE.md](./ARCHITECTURE.md) - 架构设计文档
- [USER_GUIDE.md](./USER_GUIDE.md) - 用户手册

---

**文档结束**
