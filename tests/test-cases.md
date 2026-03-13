# Liars Game 测试用例设计

## 1. 单元测试

### 1.1 游戏引擎测试 (GameEngine)
```typescript
describe('GameEngine', () => {
  // 初始化测试
  test('should initialize game with 4 players', () => {});
  test('should deal 5 cards to each player', () => {});
  test('should set random liar card', () => {});
  
  // 出牌逻辑测试
  test('should allow player to play cards', () => {});
  test('should validate card play', () => {});
  test('should handle liar declaration', () => {});
  
  // 质疑逻辑测试
  test('should allow challenge on liar declaration', () => {});
  test('should determine challenge success/fail', () => {});
  test('should apply Geass on challenge success', () => {});
  
  // 回合顺序测试
  test('should rotate turns correctly', () => {});
  test('should skip eliminated players', () => {});
});
```

### 1.2 AI引擎测试 (AIEngine)
```typescript
describe('AIEngine', () => {
  test('should select appropriate strategy based on difficulty', () => {});
  test('should decide to play truth or lie', () => {});
  test('should decide to challenge or not', () => {});
  test('should use character skill appropriately', () => {});
});
```

### 1.3 角色技能测试
```typescript
describe('Character Skills', () => {
  test('Lelouch: should change liar card', () => {});
  test('C.C.: should have 50% immunity', () => {});
  test('Suzaku: should reduce Geass hit rate when HP low', () => {});
  test('Kallen: should play 1-4 cards', () => {});
});
```

## 2. E2E测试

### 2.1 完整游戏流程
```typescript
describe('Full Game Flow', () => {
  test('should complete a full game from start to finish', () => {
    // 1. 进入游戏
    // 2. 选择角色
    // 3. 进行多轮游戏
    // 4. 游戏结束，显示结果
  });
});
```

### 2.2 Bug修复验证
```typescript
describe('Bug Fixes', () => {
  // Bug 2: 页面滚动
  test('should scroll on low resolution screen', () => {});
  
  // Bug 3: 记录信息
  test('should display challenge result in log', () => {});
  test('should display Geass target in log', () => {});
  
  // Bug 4: 出牌玩家信息
  test('should display current player on table', () => {});
  
  // Bug 5: AI轮流逻辑
  test('should rotate all 4 players in order', () => {});
});
```

## 3. 测试文件结构
```
tests/
├── unit/
│   ├── GameEngine.test.ts
│   ├── AIEngine.test.ts
│   ├── CharacterSkills.test.ts
│   └── utils.test.ts
├── e2e/
│   ├── game-flow.spec.ts
│   └── bug-fixes.spec.ts
└── setup.ts
```

## 4. 测试工具
- **单元测试**: Vitest
- **E2E测试**: Playwright
- **覆盖率**: c8

---
*创建时间: 2026-03-13*
*创建人: Test Agent*
