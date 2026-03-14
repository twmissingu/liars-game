# Liars Game 代码优化重构计划

**执行时间**: 2026-03-14
**执行人**: 灵犀
**项目**: Code Geass: Liar's Game

---

## 一、Bug修复清单

### P0 - 严重问题（必须修复）

#### P0-001: 角色技能未实际集成
**问题**: CharacterIntegration.ts已存在，但App.tsx未调用
**修复方案**:
1. 在App.tsx中导入CharacterIntegration
2. 在游戏初始化时创建角色状态
3. 在合适的时机调用技能效果
4. 修改Geass判定逻辑，考虑角色技能

**涉及文件**:
- src/App.tsx
- src/core/GameEngine.ts
- src/core/GeassSystem.ts

#### P0-002: 骗子牌核心机制不完整
**问题**: CardSystem使用Q/K/A/JOKER，但App.tsx使用标准扑克牌
**修复方案**:
1. 统一牌组系统为Liar's Bar规则（Q/K/A）
2. 在handleChallenge中实现真伪判定逻辑
3. 完善质疑流程

**涉及文件**:
- src/App.tsx
- src/core/CardSystem.ts
- src/core/GameEngine.ts

### P1 - 重要问题

#### P1-001: 多张出牌未实现
**问题**: 只能单张出牌，卡莲技能无法使用
**修复方案**:
1. 修改handlePlayCard接受数组
2. 添加多选UI
3. 更新出牌逻辑

#### P1-003: 手牌耗尽无处理
**问题**: 手牌出完时游戏无处理
**修复方案**:
1. 添加手牌检测逻辑
2. 实现重新发牌或结算

#### P1-004: 数据持久化未使用
**问题**: storage工具未在游戏中使用
**修复方案**:
1. 集成storage工具
2. 保存游戏设置和进度

---

## 二、代码注释计划

### 核心文件注释
1. **App.tsx** - 应用入口，状态管理
2. **GameEngine.ts** - 游戏引擎核心逻辑
3. **CardSystem.ts** - 卡牌系统
4. **GeassSystem.ts** - Geass判定系统
5. **AIEngine.ts** - AI引擎
6. **CharacterIntegration.ts** - 角色技能集成

### 组件注释
1. **GameTable.tsx** - 游戏主界面
2. **CharacterSelect.tsx** - 角色选择
3. **MainMenu.tsx** - 主菜单
4. **ResultScreen.tsx** - 结算界面

---

## 三、代码重构计划

### 1. 类型统一
- 合并重复的类型定义
- 统一Card类型
- 统一GameState类型

### 2. 状态管理优化
- 提取游戏状态管理逻辑
- 优化状态更新流程
- 减少不必要的重渲染

### 3. 工具函数提取
- 提取通用工具函数
- 创建utils目录
- 编写工具函数单元测试

---

## 四、执行步骤

### Step 1: 类型统一（1-2小时）
1. 分析所有类型定义
2. 创建统一的types/index.ts
3. 更新所有引用

### Step 2: Bug修复（4-6小时）
1. 修复P0-001: 角色技能集成
2. 修复P0-002: 骗子牌机制
3. 修复P1-001: 多张出牌
4. 修复P1-003: 手牌耗尽
5. 修复P1-004: 数据持久化

### Step 3: 代码注释（2-3小时）
1. 为核心文件添加JSDoc注释
2. 为复杂逻辑添加行内注释
3. 添加文件头注释

### Step 4: 代码重构（2-3小时）
1. 提取公共逻辑
2. 优化状态管理
3. 性能优化

### Step 5: 测试验证（2小时）
1. 运行测试
2. 验证修复效果
3. 生成测试报告

---

## 五、预期交付物

1. 修复后的完整源代码
2. CODE_REFACTOR.md - 重构说明
3. COMMENTS_GUIDE.md - 注释规范
4. BUGFIX_REPORT.md - Bug修复报告

---

*计划创建: 2026-03-14*
