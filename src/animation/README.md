# 动画系统重构总结

## 重构目标

消除动画代码中的硬编码问题，实现角色与动画逻辑的完全解耦，提高代码的可维护性、可扩展性和可测试性。

## 已识别的问题

### 1. 硬编码角色名（重构前）
```typescript
// GameTable.tsx 中的硬编码
const playerId = lastAction.includes('玩家') ? 'player' :
  lastAction.includes('朱雀') ? 'ai2' :
  lastAction.includes('卡莲') ? 'ai3' :
  lastAction.includes('C.C.') ? 'ai' : 'ai';
```

### 2. 分散的动画状态管理
- 多个 useState 和 useEffect 分散管理动画
- 动画队列逻辑与 UI 组件耦合

### 3. 缺乏测试覆盖
- 动画逻辑难以单元测试
- 新增角色时无法自动验证动画是否正常

## 重构方案

### 新架构组件

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

### 核心改进

#### 1. 角色配置机制 (`characterRegistry.ts`)
- 集中管理角色与动画的映射关系
- 支持动态设置玩家角色
- 提供统一的角色信息查询接口

```typescript
// 设置玩家角色
setPlayerCharacter('lelouch');

// 获取角色信息
getDisplayName('player');  // '鲁鲁修'
getColorTheme('player');   // '#d4af37'
```

#### 2. 动画状态管理 (`useAnimation.ts`)
- 统一的 Hook 管理所有动画状态
- 支持动画队列和优先级
- 自动清理过期动画

```typescript
const {
  animation,
  persistentAnimation,
  triggerAnimation,
  enqueueAnimation,
} = useAnimation();
```

#### 3. 动画触发器系统 (`triggers.ts`)
- 从游戏状态解析动画事件
- 可扩展的触发器注册机制
- 消除硬编码的字符串匹配

```typescript
// 解析游戏状态获取动画事件
const event = parseGameStateForAnimation(gameState);
if (event) {
  triggerAnimation(event.playerId, event.data.animationType);
}
```

## 添加新角色的流程

### 重构前
需要修改多个文件：
1. GameTable.tsx - 添加角色名匹配
2. GameEngineV2.ts - 添加角色名映射
3. App.tsx - 添加角色索引映射
4. 多处硬编码字符串

### 重构后
只需修改 `characterRegistry.ts`：

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

## 测试覆盖

### 单元测试
- `characterRegistry.test.ts` - 角色注册表功能测试
- `triggers.test.ts` - 动画触发器解析测试

### 集成测试
- `integration.test.ts` - 完整游戏流程测试

### 运行测试
```bash
npm test -- src/animation/__tests__
```

## API 文档

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

// 通过角色ID获取玩家ID
getPlayerIdByCharacterId(characterId: CharacterId): PlayerId | null

// 通过玩家ID获取角色ID
getCharacterIdByPlayerId(playerId: PlayerId): CharacterId | null
```

### Animation Hook

```typescript
interface UseAnimationReturn {
  // 当前动画状态
  animation: AnimationState;
  
  // 持续动画状态
  persistentAnimation: PersistentAnimationState;
  
  // 触发动画
  triggerAnimation: (playerId: PlayerId, type: AnimationType, text?: string) => void;
  
  // 触发持续动画
  triggerPersistentAnimation: (playerId: PlayerId, type: AnimationType, text: string) => void;
  
  // 清除动画
  clearAnimation: (playerId: PlayerId) => void;
  
  // 清除持续动画
  clearPersistentAnimation: () => void;
  
  // 动画队列
  queue: AnimationQueueState;
  
  // 添加动画到队列
  enqueueAnimation: (playerId: PlayerId, type: AnimationType, text?: string, priority?: number) => void;
}
```

### Animation Triggers

```typescript
// 解析游戏状态获取动画事件
parseGameStateForAnimation(gameState: GameState): AnimationEvent | null

// 注册自定义触发器
registerTrigger(trigger: AnimationTrigger): void

// 注销触发器
unregisterTrigger(triggerId: string): void
```

## 迁移指南

详见 [MIGRATION_GUIDE.md](./MIGRATION_GUIDE.md)

## 性能优化

- 使用 React useCallback 缓存动画触发函数
- 动画队列避免同时播放多个动画
- 自动清理过期动画状态
- 使用 TypeScript 类型检查避免运行时错误

## 向后兼容性

- 保持与现有 GameState 类型的兼容性
- lastAction 字段仍可正常使用
- 逐步迁移，无需一次性替换所有代码

## 总结

本次重构实现了：
1. ✅ 消除所有硬编码角色名
2. ✅ 角色与动画逻辑完全解耦
3. ✅ 可扩展的角色配置机制
4. ✅ 完整的动画状态管理系统
5. ✅ 全面的单元测试和集成测试
6. ✅ 添加新角色无需修改核心代码
7. ✅ 有效检测动画相关问题的测试覆盖
