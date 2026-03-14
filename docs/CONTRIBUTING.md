# Code Geass: Liar's Game - 贡献指南

> 感谢您对《Code Geass: Liar's Game》项目的关注！本指南将帮助您了解如何为项目做出贡献。

---

## 📋 目录

- [开发环境](#-开发环境)
- [开发规范](#-开发规范)
- [代码风格](#-代码风格)
- [测试要求](#-测试要求)
- [提交规范](#-提交规范)
- [Pull Request流程](#-pull-request流程)
- [常见问题](#-常见问题)

---

## 🛠️ 开发环境

### 环境要求

- **Node.js** >= 16.0.0
- **npm** >= 8.0.0
- **Git**
- **VS Code** (推荐)

### 推荐VS Code插件

| 插件 | 用途 |
|------|------|
| ESLint | 代码检查 |
| Prettier | 代码格式化 |
| TypeScript Importer | 自动导入 |
| GitLens | Git增强 |
| Bracket Pair Colorizer | 括号匹配 |

### 初始设置

```bash
# 1. Fork并克隆仓库
git clone https://github.com/YOUR_USERNAME/liars-game.git
cd liars-game

# 2. 安装依赖
npm install

# 3. 启动开发服务器
npm run dev

# 4. 运行测试
npm run test
```

---

## 📐 开发规范

### 分支命名规范

```
类型/简短描述

示例：
feature/add-new-character    # 新功能
bugfix/fix-card-display      # Bug修复
docs/update-readme           # 文档更新
refactor/optimize-engine     # 代码重构
test/add-unit-tests          # 测试相关
```

### 文件组织规范

```
src/
├── ai/              # AI系统
├── audio/           # 音效管理
├── characters/      # 角色系统
├── components/      # React组件
├── core/            # 游戏核心逻辑
├── data/            # 游戏数据
├── effects/         # 特效系统
├── store/           # 状态管理
├── styles/          # 样式文件
├── types/           # 类型定义
├── ui/              # 页面UI
└── utils/           # 工具函数
```

### 模块导出规范

```typescript
// ✅ 推荐：使用命名导出
export class GameEngine { }
export interface GameState { }

// ✅ 推荐：在index.ts中集中导出
export { GameEngine } from './GameEngine';
export { CardSystem } from './CardSystem';
export type { GameState, Card } from './types';

// ❌ 避免：默认导出
export default class GameEngine { }
```

---

## 🎨 代码风格

### TypeScript规范

#### 类型定义

```typescript
// ✅ 使用明确的类型定义
function playCards(cards: Card[]): GameState {
  // ...
}

// ✅ 使用接口定义对象结构
interface PlayerStats {
  hp: number;
  maxHp: number;
}

// ✅ 使用类型别名定义联合类型
type GamePhase = 'setup' | 'player_turn' | 'ai_turn';

// ❌ 避免使用any
function playCards(cards: any): any { }
```

#### 命名规范

| 类型 | 规范 | 示例 |
|------|------|------|
| 组件 | PascalCase | `GameBoard.tsx` |
| 类 | PascalCase | `GameEngine` |
| 接口 | PascalCase | `GameState` |
| 函数 | camelCase | `playCards` |
| 常量 | UPPER_SNAKE_CASE | `MAX_HP` |
| 变量 | camelCase | `currentPlayer` |
| 类型 | PascalCase | `CardRank` |
| 枚举 | PascalCase | `GamePhase` |
| 文件名 | camelCase / PascalCase | `gameEngine.ts`, `GameBoard.tsx` |

### 注释规范

#### JSDoc注释

```typescript
/**
 * 执行Geass判定
 * 
 * @param target - 目标玩家ID
 * @param stats - 目标玩家状态
 * @param character - 目标角色ID
 * @param hitChanceBoost - 命中率加成 (默认0)
 * @returns Geass判定结果，包含是否命中、伤害值等信息
 * @throws 当目标玩家不存在时抛出错误
 * 
 * @example
 * const result = performGeass('ai', stats, 'cc', 0);
 * if (result.hit) {
 *   console.log('Geass命中！');
 * }
 */
function performGeass(
  target: PlayerId,
  stats: PlayerStats,
  character: CharacterId,
  hitChanceBoost: number = 0
): GeassResult {
  // ...
}
```

#### 行内注释

```typescript
// ✅ 解释"为什么"而不是"是什么"
// 使用Fisher-Yates算法确保均匀分布
function shuffle(deck: Card[]): Card[] {
  // ...
}

// ❌ 避免显而易见的注释
// 增加HP
player.hp++; // 这行代码本身就很清楚
```

### React组件规范

#### 组件结构

```typescript
// ✅ 推荐结构
import React, { useState, useCallback, useMemo } from 'react';
import { Card } from '../types';
import './GameBoard.css';

// 类型定义
interface GameBoardProps {
  cards: Card[];
  onPlayCard: (cardId: string) => void;
}

// 组件定义
export const GameBoard: React.FC<GameBoardProps> = ({ cards, onPlayCard }) => {
  // 状态定义
  const [selectedCards, setSelectedCards] = useState<string[]>([]);
  
  // 计算属性
  const canPlay = useMemo(() => selectedCards.length > 0, [selectedCards]);
  
  // 事件处理
  const handleCardClick = useCallback((cardId: string) => {
    setSelectedCards(prev => 
      prev.includes(cardId) 
        ? prev.filter(id => id !== cardId)
        : [...prev, cardId]
    );
  }, []);
  
  // 渲染
  return (
    <div className="game-board">
      {/* ... */}
    </div>
  );
};
```

#### Hooks使用规范

```typescript
// ✅ 在组件顶层使用Hooks
function GameBoard() {
  const [state, setState] = useState(initialState);
  const memoizedValue = useMemo(() => computeExpensiveValue(state), [state]);
  
  // ...
}

// ❌ 避免在条件语句中使用Hooks
function GameBoard() {
  if (condition) {
    const [state, setState] = useState(); // 错误！
  }
}
```

### CSS规范

#### BEM命名规范

```css
/* Block */
.game-board { }

/* Element */
.game-board__header { }
.game-board__content { }
.game-board__card { }

/* Modifier */
.game-board__card--selected { }
.game-board__card--disabled { }
```

#### CSS变量

```css
:root {
  /* 颜色 */
  --color-primary: #8B00FF;
  --color-secondary: #00FF88;
  --color-danger: #FF0044;
  
  /* 尺寸 */
  --spacing-xs: 4px;
  --spacing-sm: 8px;
  --spacing-md: 16px;
  --spacing-lg: 24px;
  
  /* 动画 */
  --transition-fast: 150ms;
  --transition-normal: 300ms;
  --transition-slow: 500ms;
}
```

---

## 🧪 测试要求

### 测试覆盖率要求

| 类型 | 覆盖率要求 |
|------|-----------|
| 语句覆盖率 | >= 70% |
| 分支覆盖率 | >= 60% |
| 函数覆盖率 | >= 80% |
| 行覆盖率 | >= 70% |

### 测试文件组织

```
tests/
├── unit/              # 单元测试
│   ├── core/          # 核心逻辑测试
│   │   ├── GameEngine.test.ts
│   │   ├── CardSystem.test.ts
│   │   └── GeassSystem.test.ts
│   └── utils/         # 工具函数测试
│       └── index.test.ts
├── integration/       # 集成测试
│   └── game-flow.test.ts
└── e2e/               # E2E测试
    └── gameplay.spec.ts
```

### 单元测试规范

```typescript
import { GameEngine } from '../../src/core/GameEngine';

describe('GameEngine', () => {
  let engine: GameEngine;
  
  beforeEach(() => {
    engine = new GameEngine();
  });
  
  describe('initializeGame', () => {
    it('应该正确初始化游戏状态', () => {
      const state = engine.initializeGame('lelouch');
      
      expect(state.phase).toBe('player_turn');
      expect(state.playerHand).toHaveLength(5);
      expect(state.playerStats.hp).toBe(3);
    });
    
    it('应该为所有AI分配角色', () => {
      const state = engine.initializeGame('lelouch');
      
      expect(state.aiPlayers).toHaveLength(3);
      expect(state.aiPlayers[0].character).toBeDefined();
    });
  });
  
  describe('playerPlayCards', () => {
    it('应该抛出错误当不在玩家回合', () => {
      engine.initializeGame('lelouch');
      // 切换到AI回合
      
      expect(() => engine.playerPlayCards()).toThrow('不是玩家回合');
    });
    
    it('应该正确出牌并进入质疑阶段', () => {
      engine.initializeGame('lelouch');
      const cardId = engine.getState().playerHand[0].id;
      
      engine.toggleCardSelection(cardId);
      const state = engine.playerPlayCards();
      
      expect(state.phase).toBe('challenge');
      expect(state.turnState.playedCards).toBeDefined();
    });
  });
});
```

### 测试命令

```bash
# 运行所有测试
npm run test

# 运行单元测试
npm run test:unit

# 运行集成测试
npm run test:integration

# 运行E2E测试
npm run test:e2e

# 生成覆盖率报告
npm run test:coverage
```

---

## 📝 提交规范

### Commit Message格式

```
<类型>(<作用域>): <描述>

[可选的正文]

[可选的脚注]
```

### 类型说明

| 类型 | 说明 |
|------|------|
| `feat` | 新功能 |
| `fix` | Bug修复 |
| `docs` | 文档更新 |
| `style` | 代码格式（不影响代码运行的变动）|
| `refactor` | 重构（既不是新增功能，也不是修改bug的代码变动）|
| `perf` | 性能优化 |
| `test` | 增加测试 |
| `chore` | 构建过程或辅助工具的变动 |

### 示例

```bash
# 新功能
feat(character): 添加新角色"尤菲米娅"

# Bug修复
fix(engine): 修复手牌耗尽时的崩溃问题

# 文档更新
docs(readme): 更新安装说明

# 代码重构
refactor(cardsystem): 优化洗牌算法

# 测试
test(geass): 添加Geass判定单元测试
```

### 提交频率

- **频繁提交**: 每个逻辑单元完成后提交
- **原子性**: 每次提交只包含一个逻辑变更
- **清晰性**: 提交信息清晰描述变更内容

---

## 🔀 Pull Request流程

### PR提交前检查清单

- [ ] 代码已通过ESLint检查 (`npm run lint`)
- [ ] 代码已格式化 (`npm run format`)
- [ ] TypeScript类型检查通过 (`npm run type-check`)
- [ ] 所有测试通过 (`npm run test`)
- [ ] 新增功能有对应的测试
- [ ] 文档已更新（如需要）

### PR标题格式

```
[<类型>] <简要描述>

示例：
[Feature] 添加新角色"尤菲米娅"
[Bugfix] 修复手牌耗尽时的崩溃问题
[Docs] 更新API文档
```

### PR描述模板

```markdown
## 变更描述
简要描述本次PR的变更内容

## 变更类型
- [ ] 新功能
- [ ] Bug修复
- [ ] 文档更新
- [ ] 代码重构
- [ ] 性能优化
- [ ] 测试相关

## 测试情况
- [ ] 本地测试通过
- [ ] 单元测试通过
- [ ] 集成测试通过

## 相关Issue
Fixes #123

## 截图（如适用）
[如果有UI变更，请附上截图]

## 其他说明
[其他需要说明的内容]
```

### PR审查流程

1. **提交PR** → 等待CI检查通过
2. **代码审查** → 维护者审查代码
3. **修改反馈** → 根据反馈修改代码
4. **合并** → 审查通过后合并到main分支

---

## ❓ 常见问题

### Q: 如何添加新角色？

A: 添加新角色需要以下步骤：

1. 在 `src/data/characters.ts` 添加角色数据
2. 在 `src/characters/state.ts` 添加技能逻辑
3. 添加角色头像图片到 `public/assets/images/avatars/`
4. 添加角色音效（可选）
5. 更新文档

### Q: 如何调试游戏逻辑？

A: 使用以下方法调试：

```typescript
// 在关键位置添加日志
console.log('[GameEngine] Current state:', this.state);

// 使用debugger断点
debugger;

// 使用React DevTools检查组件状态
```

### Q: 如何运行单个测试文件？

A: 

```bash
# 运行单个测试文件
npx jest tests/unit/core/GameEngine.test.ts

# 运行单个测试用例
npx jest -t "应该正确初始化游戏状态"
```

### Q: 遇到类型错误怎么办？

A:

1. 首先检查类型定义是否正确
2. 使用 `// @ts-ignore` 临时忽略（不推荐长期使用）
3. 使用类型断言 `as Type`（确保类型安全）
4. 如果类型定义有问题，请修复类型定义

---

## 📚 相关文档

- [README.md](../README.md) - 项目说明
- [PRD.md](./PRD.md) - 产品需求文档
- [ARCHITECTURE.md](./ARCHITECTURE.md) - 架构设计文档
- [API.md](./API.md) - API接口文档
- [DEV_GUIDE.md](./DEV_GUIDE.md) - 开发维护手册

---

## 🤝 行为准则

### 我们的承诺

- 使用友好和包容的语言
- 尊重不同的观点和经验
- 优雅地接受建设性批评
- 关注对社区最有利的事情
- 对其他社区成员表示同理心

### 不可接受的行为

- 使用性化语言或图像
- 挑衅、侮辱/贬损评论，以及个人或政治攻击
- 公开或私下骚扰
- 未经明确许可发布他人的私人信息
- 其他在专业环境中被认为不适当的行为

---

**感谢您的贡献！** 🎉

---

**文档结束**
