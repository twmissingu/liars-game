# 动画系统重构迁移指南

## 概述

本次重构将动画系统从硬编码方式改造为灵活的配置驱动架构，实现了角色与动画逻辑的完全解耦。

## 主要改进

### 1. 消除硬编码
- **重构前**: 在 GameTable.tsx 中硬编码解析 "朱雀"、"卡莲"、"C.C." 等角色名
- **重构后**: 使用 `characterRegistry` 集中管理角色配置，通过 `playerId` 统一标识

### 2. 动画状态管理
- **重构前**: 分散的 useState 和 useEffect 管理动画状态
- **重构后**: 统一的 `useAnimation` Hook，提供完整的动画生命周期管理

### 3. 动画触发机制
- **重构前**: 通过解析 `lastAction` 字符串触发动画
- **重构后**: 使用 `AnimationTrigger` 系统，从游戏状态解析动画事件

## 新架构组件

```
src/animation/
├── types.ts              # 类型定义
├── constants.ts          # 动画配置常量
├── characterRegistry.ts  # 角色动画注册表
├── useAnimation.ts       # 动画管理 Hook
├── triggers.ts           # 动画触发器系统
├── index.ts              # 统一入口
└── __tests__/            # 测试文件
    ├── characterRegistry.test.ts
    ├── triggers.test.ts
    └── integration.test.ts
```

## 迁移步骤

### 步骤 1: 更新 GameTable.tsx

**重构前:**
```typescript
// 硬编码解析角色名
const playerId = lastAction.includes('玩家') ? 'player' :
  lastAction.includes('朱雀') ? 'ai2' :
  lastAction.includes('卡莲') ? 'ai3' :
  lastAction.includes('C.C.') ? 'ai' : 'ai';
```

**重构后:**
```typescript
import { parseGameStateForAnimation, useAnimation } from '../animation';

// 使用触发器系统解析
const event = parseGameStateForAnimation(gameState);
if (event) {
  triggerAnimation(event.playerId, event.data.animationType, event.data.text);
}
```

### 步骤 2: 初始化角色注册表

在 App.tsx 或游戏初始化时:

```typescript
import { setPlayerCharacter } from './animation';

// 玩家选择角色后
setPlayerCharacter(selectedCharacterId);
```

### 步骤 3: 使用新的动画 Hook

```typescript
import { useAnimation } from './animation';

function GameTable({ gameState }) {
  const { 
    animation, 
    persistentAnimation,
    triggerAnimation,
    clearAnimation 
  } = useAnimation();

  // 监听游戏状态变化
  useEffect(() => {
    const event = parseGameStateForAnimation(gameState);
    if (event) {
      triggerAnimation(event.playerId, event.data.animationType);
    }
  }, [gameState]);
}
```

## API 参考

### Character Registry

```typescript
// 设置玩家角色
setPlayerCharacter(characterId: CharacterId): void

// 获取角色显示名称
getDisplayName(playerId: PlayerId): string

// 获取角色颜色主题
getColorTheme(playerId: PlayerId): string

// 获取动画文本
getAnimationText(playerId: PlayerId, type: AnimationType): string
```

### Animation Hook

```typescript
interface UseAnimationReturn {
  animation: AnimationState;
  persistentAnimation: PersistentAnimationState;
  triggerAnimation: (playerId: PlayerId, type: AnimationType, text?: string) => void;
  triggerPersistentAnimation: (playerId: PlayerId, type: AnimationType, text: string) => void;
  clearAnimation: (playerId: PlayerId) => void;
  clearPersistentAnimation: () => void;
  queue: AnimationQueueState;
  enqueueAnimation: (playerId: PlayerId, type: AnimationType, text?: string, priority?: number) => void;
}
```

### Animation Triggers

```typescript
// 解析游戏状态获取动画事件
parseGameStateForAnimation(gameState: GameState): AnimationEvent | null

// 注册自定义触发器
registerTrigger(trigger: AnimationTrigger): void
```

## 添加新角色

添加新角色只需修改 `characterRegistry.ts`:

```typescript
const CHARACTER_BASE_INFO: Record<CharacterId, CharacterBaseInfo> = {
  // ... 现有角色
  newCharacter: {
    id: 'newCharacter',
    displayName: '新角色',
    colorTheme: '#ff0000',
  },
};
```

无需修改任何动画触发逻辑！

## 测试

运行测试套件:

```bash
npm test -- src/animation/__tests__
```

测试覆盖:
- 角色注册表功能
- 动画触发器解析
- 集成测试（完整游戏流程）

## 向后兼容性

重构后的系统保持与现有 GameState 类型的兼容性，`lastAction` 字段仍可正常使用。

## 性能优化

- 使用 React useCallback 缓存动画触发函数
- 动画队列避免同时播放多个动画
- 自动清理过期动画状态
