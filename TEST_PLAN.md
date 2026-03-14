# Liars Game 测试补充计划

## 当前测试覆盖率分析

根据 `npm run test:coverage` 的结果：

| 模块 | 语句覆盖率 | 分支覆盖率 | 函数覆盖率 | 行覆盖率 |
|------|-----------|-----------|-----------|---------|
| All files | 77.53% | 65.36% | 70.98% | 79.81% |
| ai/AIEngine.ts | 30.26% | 20.68% | 26.92% | 31.08% |
| ai/strategies/ | 81.59% | 67.41% | 80.55% | 87.5% |
| characters/ | 52.94% | 17.24% | 33.33% | 56.96% |
| core/CardSystem.ts | 83.72% | 90.9% | 69.56% | 84.72% |
| core/GameEngine.ts | 87.94% | 76.12% | 94% | 89.8% |
| core/GeassSystem.ts | 91.66% | 92.85% | 87.5% | 94.28% |
| data/characters.ts | 100% | 100% | 100% | 100% |

## 需要补充的测试

### 1. 单元测试补充

#### CardSystem.test.ts (已覆盖较好，补充边界)
- [x] 已有基础测试
- [ ] 补充 `checkBluff` 方法测试
- [ ] 补充 `drawCards` 方法测试
- [ ] 补充 `redealCards` 方法测试

#### GeassSystem.test.ts (已覆盖较好)
- [x] 已有基础测试
- [ ] 补充 `calculateKallenBoost` 边界测试

#### GameEngine.test.ts
- [x] 已有基础测试
- [ ] 补充 `resetRound` 测试
- [ ] 补充 `getNextPlayerIndex` 测试
- [ ] 补充 `aiChallengeDecision` 测试
- [ ] 补充游戏结束判定测试

#### 新增 AIEngine.test.ts
- [ ] AIEngine 基础功能测试
- [ ] 动画状态测试
- [ ] 配置更新测试
- [ ] 思考回调测试

#### 新增 CharacterState.test.ts
- [ ] createCharacterState 测试
- [ ] canUseSkill 测试
- [ ] applySkill 测试
- [ ] resetSkill 测试

### 2. 集成测试补充

#### ChallengeFlow.test.ts (已有)
- [x] 质疑顺序验证
- [x] 质疑逻辑验证
- [x] HP计算验证

#### GameFlow.test.ts (已有)
- [x] 完整游戏流程
- [x] 角色技能集成
- [x] 多AI交互

#### 新增 GameStateTransitions.test.ts
- [ ] 状态流转测试
- [ ] 异常状态处理
- [ ] 并发操作测试

### 3. E2E测试补充

#### game-flow.spec.ts (已有)
- [x] 首页显示
- [x] 角色选择
- [x] 游戏界面

#### gameplay.spec.ts (已有)
- [x] 游戏进行
- [x] 游戏结束

#### 新增 character-skills.spec.ts
- [ ] 鲁鲁修技能测试
- [ ] C.C.复活测试
- [ ] 朱雀反击测试
- [ ] 卡莲多牌测试

### 4. 覆盖率目标

- [ ] 核心模块达到 85%+
- [ ] AI模块达到 60%+
- [ ] 角色模块达到 70%+
- [ ] 整体达到 80%+

## 执行计划

1. 先补充单元测试，特别是AIEngine和CharacterState
2. 补充集成测试，特别是状态流转
3. 补充E2E测试
4. 运行覆盖率检查，针对性补充
