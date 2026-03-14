# Liars Game 测试文档

## 测试结构

```
tests/
├── unit/                    # 单元测试
│   ├── CardSystem.test.ts   # 牌组系统测试
│   ├── GeassSystem.test.ts  # Geass系统测试
│   ├── GameEngine.test.ts   # 游戏引擎测试
│   ├── AIStrategies.test.ts # AI策略测试
│   ├── Characters.test.ts   # 角色数据测试
│   └── EdgeCases.test.ts    # 边界情况测试
├── integration/             # 集成测试
│   ├── GameFlow.test.ts     # 游戏流程测试
│   ├── CharacterSkills.test.ts # 角色技能测试
│   └── AIDecisions.test.ts  # AI决策测试
├── e2e/                     # E2E测试
│   ├── game-flow.spec.ts    # 游戏主流程
│   ├── character-select.spec.ts # 角色选择
│   └── gameplay.spec.ts     # 游戏进行
├── performance/             # 性能测试
│   └── Performance.test.ts  # 性能基准测试
├── __mocks__/               # Mock文件
│   └── fileMock.js          # 文件Mock
├── setup.ts                 # 测试环境设置
└── TEST_REPORT.md           # 测试报告
```

## 快速开始

### 安装依赖

```bash
npm install
```

### 运行测试

```bash
# 运行所有测试
npm test

# 运行单元测试
npm run test:unit

# 运行集成测试
npm run test:integration

# 运行E2E测试（需要先启动开发服务器）
npm run test:e2e

# 运行性能测试
npm run test:performance

# 生成覆盖率报告
npm run test:coverage

# 监视模式
npm run test:watch
```

## 测试覆盖范围

### 单元测试 (Unit Tests)

#### CardSystem.test.ts
- 牌组生成（20张牌）
- 洗牌算法
- 发牌逻辑
- 骗子牌设置
- 出牌操作
- 边界情况

#### GeassSystem.test.ts
- 基础Geass判定（1/3概率）
- 伤害计算
- C.C.复活技能
- 朱雀反击/闪避技能
- 卡莲命中率加成
- 搞笑动作系统

#### GameEngine.test.ts
- 游戏初始化
- 回合流转
- 玩家出牌
- 质疑机制
- 角色技能
- 游戏结束判定

#### AIStrategies.test.ts
- Easy策略（30%质疑）
- Normal策略（40%质疑）
- Hard策略（50%质疑）
- 性格参数
- 决策属性

#### Characters.test.ts
- 角色数据完整性
- 头像系统
- 技能描述

#### EdgeCases.test.ts
- HP归零边界
- 手牌耗尽边界
- 并发操作边界
- 无效输入边界
- 游戏状态边界

### 集成测试 (Integration Tests)

#### GameFlow.test.ts
- 完整游戏流程
- 多轮游戏
- 牌组与引擎集成
- 多AI交互
- 状态流转

#### CharacterSkills.test.ts
- 鲁鲁修技能集成
- C.C.复活机制
- 朱雀反击/闪避
- 卡莲多张出牌
- 技能组合效果

#### AIDecisions.test.ts
- AI基本决策
- AI质疑决策
- AI引擎配置
- AI与引擎集成
- AI策略行为

### E2E测试 (End-to-End Tests)

#### game-flow.spec.ts
- 首页显示
- 角色选择
- 游戏界面
- 响应式布局

#### character-select.spec.ts
- 角色展示
- 技能信息
- 选择交互

#### gameplay.spec.ts
- 回合显示
- HP显示
- 出牌操作
- 质疑操作
- 游戏结束

### 性能测试 (Performance Tests)

#### Performance.test.ts
- CardSystem性能
- GeassSystem性能
- GameEngine性能
- AI决策性能
- 内存使用
- 并发性能

## 测试配置

### Jest配置 (jest.config.js)

```javascript
{
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  roots: ['<rootDir>/tests', '<rootDir>/src'],
  testMatch: ['**/tests/**/*.test.ts', '**/tests/**/*.test.tsx'],
  moduleNameMapping: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  coverageThreshold: {
    global: {
      branches: 70,
      functions: 70,
      lines: 70,
      statements: 70,
    },
  },
}
```

### Playwright配置 (playwright.config.ts)

```javascript
{
  testDir: './tests/e2e',
  projects: [
    { name: 'chromium', use: { ...devices['Desktop Chrome'] } },
    { name: 'firefox', use: { ...devices['Desktop Firefox'] } },
    { name: 'webkit', use: { ...devices['Desktop Safari'] } },
    { name: 'Mobile Chrome', use: { ...devices['Pixel 5'] } },
    { name: 'Mobile Safari', use: { ...devices['iPhone 12'] } },
  ],
}
```

## 编写测试

### 单元测试示例

```typescript
import { CardSystem } from '../../src/core/CardSystem';

describe('CardSystem', () => {
  let cardSystem: CardSystem;

  beforeEach(() => {
    cardSystem = new CardSystem();
  });

  test('应该生成20张牌', () => {
    const cards = cardSystem.generateDeck();
    expect(cards).toHaveLength(20);
  });
});
```

### 集成测试示例

```typescript
describe('游戏流程集成测试', () => {
  test('完整游戏流程', () => {
    const gameEngine = new GameEngine();
    
    // 1. 初始化
    const state1 = gameEngine.initializeGame('lelouch');
    expect(state1.playerHand).toHaveLength(5);
    
    // 2. 出牌
    gameEngine.toggleCardSelection(state1.playerHand[0].id);
    const state2 = gameEngine.playerPlayCards();
    expect(state2.phase).toBe('challenge');
  });
});
```

### E2E测试示例

```typescript
import { test, expect } from '@playwright/test';

test('游戏主流程', async ({ page }) => {
  await page.goto('/');
  
  // 开始游戏
  await page.click('button:has-text("开始游戏")');
  
  // 选择角色
  await page.click('[data-testid="character-lelouch"]');
  await page.click('button:has-text("确认")');
  
  // 验证游戏界面
  await expect(page.locator('[data-testid="game-board"]')).toBeVisible();
});
```

## 测试报告

运行测试后会生成以下报告：

1. **控制台报告**: 实时显示测试结果
2. **覆盖率报告**: `coverage/` 目录
3. **HTML报告**: `playwright-report/` (E2E)
4. **测试报告文档**: `tests/TEST_REPORT.md`

## 最佳实践

1. **测试命名**: 使用描述性名称，如`应该生成20张牌`
2. **独立性**: 每个测试应该独立运行
3. **Mock**: 使用Mock隔离外部依赖
4. **边界情况**: 测试正常和异常输入
5. **性能**: 关注关键路径的性能

## 故障排除

### 常见问题

1. **测试超时**
   ```bash
   npm test -- --testTimeout=30000
   ```

2. **特定测试文件**
   ```bash
   npm test -- CardSystem.test.ts
   ```

3. **更新快照**
   ```bash
   npm test -- --updateSnapshot
   ```

4. **调试模式**
   ```bash
   npm test -- --verbose
   ```

## 持续集成

建议的CI配置：

```yaml
# .github/workflows/test.yml
name: Tests

on: [push, pull_request]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm ci
      - run: npm test
      - run: npm run test:coverage
```

## 联系方式

如有问题，请联系Test Agent或查看项目文档。
