# Code Geass: Liar's Game - 项目文档

> **Code Geass: Liar's Game** 是一款基于《Code Geass》世界观的卡牌对战游戏，融合了经典动画角色与《骗子酒吧》的核心玩法。

[![Deploy to GitHub Pages](https://github.com/twmissingu/liars-game/actions/workflows/deploy.yml/badge.svg)](https://github.com/twmissingu/liars-game/actions/workflows/deploy.yml)
[![Version](https://img.shields.io/badge/version-2.1.0-blue.svg)](./CHANGELOG.md)
[![License](https://img.shields.io/badge/license-MIT-green.svg)](./LICENSE)

---

## 🎮 在线体验

**[点击开始游戏 →](https://twmissingu.github.io/liars-game/)**

---

## 📖 目录

- [项目概述](#-项目概述)
- [技术栈](#-技术栈)
- [快速开始](#-快速开始)
- [项目结构](#-项目结构)
- [开发指南](#-开发指南)
- [文档索引](#-文档索引)
- [贡献指南](#-贡献指南)
- [许可证](#-许可证)

---

## 🎯 项目概述

### 游戏简介

《Code Geass: Liar's Game》是一款结合了策略、欺骗和Geass能力的卡牌对战游戏。玩家将扮演《Code Geass》中的经典角色，与3个AI对手进行激烈的谎言对决。

### 核心特色

| 特色 | 说明 |
|------|------|
| 🎭 **4个可玩角色** | 鲁鲁修、C.C.、朱雀、卡莲，每个角色都有独特的Geass技能 |
| 🃏 **骗子牌机制** | 每回合随机指定骗子牌，玩家可选择诚实出牌或撒谎 |
| ⚡ **Geass判定** | 质疑成功触发Geass判定，有概率造成1点伤害 |
| 🤖 **智能AI对手** | 3个AI对手各具特色，提供富有挑战性的对战体验 |
| 🎵 **完整音效** | BGM背景音乐 + 角色技能音效 + 搞笑动作音效 |

### 游戏规则速览

1. **角色选择** - 选择你想扮演的角色
2. **初始发牌** - 每人5张牌（Q/K/A + 小丑牌）
3. **骗子牌** - 每回合随机指定一张骗子牌（Q/K/A）
4. **出牌** - 轮流出牌，声称是骗子牌（可能撒谎）
5. **质疑** - 其他玩家可以质疑出牌
6. **Geass判定** - 质疑成功触发Geass判定
7. **胜利条件** - 淘汰所有对手，成为最后幸存者

---

## 🛠️ 技术栈

### 核心技术

| 技术 | 版本 | 用途 |
|------|------|------|
| [React](https://react.dev/) | 18.2.0 | UI框架 |
| [TypeScript](https://www.typescriptlang.org/) | 5.2.2 | 类型安全 |
| [Vite](https://vitejs.dev/) | 5.0.8 | 构建工具 |
| [Howler.js](https://howlerjs.com/) | 2.2.4 | 音效管理 |

### 开发工具

| 工具 | 用途 |
|------|------|
| [ESLint](https://eslint.org/) | 代码检查 |
| [Prettier](https://prettier.io/) | 代码格式化 |
| [Jest](https://jestjs.io/) | 单元测试 |
| [Playwright](https://playwright.dev/) | E2E测试 |

### 部署

- **平台**: [GitHub Pages](https://pages.github.com/)
- **CI/CD**: GitHub Actions
- **自动化**: 推送到main分支自动部署

---

## 🚀 快速开始

### 环境要求

- **Node.js** >= 16.0.0
- **npm** >= 8.0.0
- **Git**

### 安装步骤

```bash
# 1. 克隆仓库
git clone https://github.com/twmissingu/liars-game.git
cd liars-game

# 2. 安装依赖
npm install

# 3. 启动开发服务器
npm run dev

# 4. 打开浏览器访问
open http://localhost:5173
```

### 常用命令

```bash
# 开发
npm run dev              # 启动开发服务器
npm run build            # 构建生产版本
npm run preview          # 预览生产构建

# 代码质量
npm run lint             # 运行ESLint检查
npm run lint:fix         # 自动修复ESLint问题
npm run format           # 格式化代码
npm run type-check       # TypeScript类型检查

# 测试
npm run test             # 运行所有测试
npm run test:unit        # 运行单元测试
npm run test:integration # 运行集成测试
npm run test:e2e         # 运行E2E测试
npm run test:coverage    # 生成测试覆盖率报告

# 部署
npm run deploy           # 部署到GitHub Pages
```

---

## 📁 项目结构

```
liars-game/
├── 📂 public/                    # 静态资源
│   ├── 📂 assets/                # 游戏资源
│   │   ├── 📂 audio/             # 音效文件
│   │   │   ├── 📂 bgm/           # 背景音乐
│   │   │   └── 📂 sfx/           # 音效
│   │   └── 📂 images/            # 图片资源
│   └── index.html                # HTML模板
│
├── 📂 src/                       # 源代码
│   ├── 📂 ai/                    # AI系统
│   │   ├── AIEngine.ts           # AI引擎
│   │   └── strategies/           # AI策略实现
│   │
│   ├── 📂 audio/                 # 音效管理
│   │   └── SoundManager.ts       # 音效管理器
│   │
│   ├── 📂 characters/            # 角色系统
│   │   ├── types.ts              # 角色类型定义
│   │   ├── data.ts               # 角色数据
│   │   └── state.ts              # 角色状态管理
│   │
│   ├── 📂 components/            # React组件
│   │   ├── 📂 animations/        # 动画组件
│   │   ├── 📂 characters/        # 角色组件
│   │   ├── 📂 effects/           # 特效组件
│   │   ├── CharacterSelect.tsx   # 角色选择界面
│   │   ├── GameBoard.tsx         # 游戏主界面
│   │   └── ...
│   │
│   ├── 📂 core/                  # 游戏核心逻辑 ⭐
│   │   ├── GameEngine.ts         # 游戏引擎
│   │   ├── GameEngineV2.ts       # 优化版游戏引擎
│   │   ├── CardSystem.ts         # 卡牌系统
│   │   ├── GeassSystem.ts        # Geass判定系统
│   │   └── index.ts              # 模块导出
│   │
│   ├── 📂 data/                  # 游戏数据
│   │   └── characters.ts         # 角色配置数据
│   │
│   ├── 📂 effects/               # 特效系统
│   │   └── EffectManager.ts      # 特效管理器
│   │
│   ├── 📂 store/                 # 状态管理
│   │   └── ...
│   │
│   ├── 📂 styles/                # 样式文件
│   │   ├── theme.ts              # 主题配置
│   │   └── global.css            # 全局样式
│   │
│   ├── 📂 types/                 # TypeScript类型定义 ⭐
│   │   ├── unified.ts            # 统一类型定义
│   │   ├── game.types.ts         # 游戏类型
│   │   ├── ai.types.ts           # AI类型
│   │   └── index.ts              # 类型导出
│   │
│   ├── 📂 ui/                    # 页面UI组件
│   │   ├── MainMenu.tsx          # 主菜单
│   │   ├── CharacterSelect.tsx   # 角色选择
│   │   ├── GameTable.tsx         # 游戏桌
│   │   └── ResultScreen.tsx      # 结果界面
│   │
│   ├── 📂 utils/                 # 工具函数 ⭐
│   │   └── index.ts              # 工具函数库
│   │
│   ├── App.tsx                   # 主应用组件
│   └── main.tsx                  # 应用入口
│
├── 📂 docs/                      # 项目文档 ⭐
│   ├── PRD.md                    # 产品需求文档
│   ├── SRS.md                    # 软件需求规格书
│   ├── ARCHITECTURE.md           # 架构设计文档
│   ├── API.md                    # API接口文档
│   ├── CONTRIBUTING.md           # 贡献指南
│   ├── USER_GUIDE.md             # 用户手册
│   └── DEV_GUIDE.md              # 开发维护手册
│
├── 📂 tests/                     # 测试文件
│   ├── 📂 unit/                  # 单元测试
│   ├── 📂 integration/           # 集成测试
│   └── 📂 e2e/                   # E2E测试
│
├── package.json                  # 项目配置
├── tsconfig.json                 # TypeScript配置
├── vite.config.ts                # Vite配置
├── jest.config.cjs               # Jest配置
├── playwright.config.ts          # Playwright配置
├── eslint.config.js              # ESLint配置
├── .prettierrc                   # Prettier配置
└── README.md                     # 本文件
```

### 关键目录说明

| 目录 | 说明 |
|------|------|
| `src/core/` | 游戏核心逻辑，包含引擎、卡牌系统、Geass系统 |
| `src/types/` | 统一类型定义，是整个项目的类型基础 |
| `src/utils/` | 工具函数库，包含卡牌、角色、动画、存储等工具 |
| `src/ai/` | AI引擎和策略实现 |
| `docs/` | 完整的项目文档 |
| `tests/` | 测试代码 |

---

## 💻 开发指南

### 开发流程

```
1. 创建功能分支
   git checkout -b feature/your-feature-name

2. 编写代码
   - 遵循TypeScript类型规范
   - 添加必要的JSDoc注释
   - 保持代码风格一致

3. 运行测试
   npm run test
   npm run test:e2e

4. 提交代码
   git add .
   git commit -m "feat: 描述你的更改"

5. 推送到远程
   git push origin feature/your-feature-name

6. 创建Pull Request
```

### 代码规范

#### TypeScript规范

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

// ✅ 使用JSDoc注释
/**
 * 执行Geass判定
 * @param target - 目标玩家ID
 * @param stats - 目标玩家状态
 * @returns Geass判定结果
 */
function performGeass(target: PlayerId, stats: PlayerStats): GeassResult {
  // ...
}
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

### 调试技巧

```typescript
// 使用console.log进行调试
console.log('[GameEngine] Current state:', this.state);

// 使用debugger断点
debugger;

// 使用React DevTools检查组件状态
// 使用浏览器DevTools检查网络请求
```

### 性能优化

```typescript
// ✅ 使用React.memo避免不必要的重渲染
const GameBoard = React.memo(({ gameState }: Props) => {
  // ...
});

// ✅ 使用useMemo缓存计算结果
const sortedPlayers = useMemo(() => 
  players.sort((a, b) => b.hp - a.hp),
  [players]
);

// ✅ 使用useCallback缓存回调
const handlePlayCard = useCallback((cardId: string) => {
  // ...
}, [gameState]);
```

---

## 📚 文档索引

### 核心文档

| 文档 | 说明 | 路径 |
|------|------|------|
| **PRD** | 产品需求文档 - 游戏规则、角色技能、UI规范 | [`docs/PRD.md`](./docs/PRD.md) |
| **SRS** | 软件需求规格书 - 功能需求、非功能需求 | [`docs/SRS.md`](./docs/SRS.md) |
| **ARCHITECTURE** | 架构设计文档 - 系统架构、模块设计 | [`docs/ARCHITECTURE.md`](./docs/ARCHITECTURE.md) |
| **API** | API接口文档 - 类型定义、接口说明 | [`docs/API.md`](./docs/API.md) |
| **CONTRIBUTING** | 贡献指南 - 开发规范、提交流程 | [`docs/CONTRIBUTING.md`](./docs/CONTRIBUTING.md) |

### 其他文档

| 文档 | 说明 | 路径 |
|------|------|------|
| USER_GUIDE | 用户手册 - 游戏玩法说明 | [`docs/USER_GUIDE.md`](./docs/USER_GUIDE.md) |
| DEV_GUIDE | 开发维护手册 - 开发细节 | [`docs/DEV_GUIDE.md`](./docs/DEV_GUIDE.md) |
| TECH_STACK | 技术栈文档 - 技术选型说明 | [`docs/TECH_STACK.md`](./docs/TECH_STACK.md) |

---

## 🤝 贡献指南

我们欢迎所有形式的贡献！详见 [`CONTRIBUTING.md`](./docs/CONTRIBUTING.md)。

### 快速贡献流程

1. **Fork** 本仓库
2. **创建** 你的特性分支 (`git checkout -b feature/AmazingFeature`)
3. **提交** 你的更改 (`git commit -m 'feat: Add some AmazingFeature'`)
4. **推送** 到分支 (`git push origin feature/AmazingFeature`)
5. **创建** Pull Request

### 报告Bug

如果你发现了Bug，请通过 [GitHub Issues](https://github.com/twmissingu/liars-game/issues) 报告，并包含以下信息：

- 问题描述
- 复现步骤
- 期望行为
- 实际行为
- 浏览器/环境信息

---

## 📄 许可证

本项目采用 [MIT License](./LICENSE) 许可证。

---

## ⚠️ 免责声明

本项目是基于《Code Geass》的同人作品，仅供学习和娱乐使用。《Code Geass》的所有权利归其原始版权所有者所有。

---

## 🙏 致谢

- 《Code Geass》制作团队 - 创造了这个伟大的作品
- 开源社区 - 提供了优秀的工具和库
- 所有测试玩家 - 帮助改进游戏体验

---

**享受游戏，愿Geass与你同在！** 🎮✨

---

<p align="center">
  Made with ❤️ by Liars Game Team
</p>
