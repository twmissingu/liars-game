# Code Geass: Liar's Game - Phase 1 完成

## 已完成内容

### 1. 牌组系统 (`src/core/CardSystem.ts`)
- ✅ 20张牌生成（Q/K/A各6张 + 小丑2张）
- ✅ Fisher-Yates 洗牌算法
- ✅ 发牌逻辑（每人5张）
- ✅ 骗子牌随机指定（Q/K/A中随机）
- ✅ 出牌逻辑（将牌移到桌面）

### 2. 回合流程 (`src/core/GameEngine.ts`)
- ✅ 出牌逻辑（1-3张，声称是骗子牌）
- ✅ 质疑/跟牌选择
- ✅ 翻牌验证（检查是否说谎）
- ✅ 回合切换（玩家↔AI）
- ✅ AI策略（基础AI实现）

### 3. Geass判定系统 (`src/core/GeassSystem.ts`)
- ✅ 发动者判定（质疑成功/失败方发动）
- ✅ 命中概率：1/3
- ✅ 命中效果：搞笑动作 + 扣1点生命
- ✅ 未命中：侥幸逃脱
- ✅ 8种搞笑动作库

### 4. 生命系统
- ✅ 3点生命上限
- ✅ 扣减逻辑
- ✅ 败北判定（HP≤0）

### 5. 状态管理 (`src/store/gameStore.ts`)
- ✅ Zustand状态管理
- ✅ 游戏状态同步
- ✅ 玩家手牌管理
- ✅ 自动AI回合处理

## 文件结构
```
src/
├── core/
│   ├── CardSystem.ts      # 牌组系统
│   ├── GeassSystem.ts     # Geass判定
│   ├── GameEngine.ts      # 游戏引擎
│   └── index.ts           # 核心模块导出
└── store/
    └── gameStore.ts       # Zustand状态管理
```

## 游戏流程
1. 初始化游戏 → 生成牌组、洗牌、发牌、设定骗子牌
2. 玩家回合 → 选择1-3张牌，声称是骗子牌
3. AI选择 → 质疑或跟牌
4. 质疑时 → 翻牌验证 → Geass判定 → 扣血
5. 回合切换 → 直到一方生命归零

## 技术栈
- React 18 + TypeScript
- Zustand 状态管理
- Vite 构建工具
