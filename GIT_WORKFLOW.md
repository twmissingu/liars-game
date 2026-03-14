# Git 工作流规范

本文档定义了 Liars Game 项目的 Git 工作流规范，包括分支策略、提交规范和版本号规范。

---

## 📋 分支策略

本项目采用 **Git Flow** 分支模型，包含以下分支类型：

```
main (生产分支)
  ↑
develop (开发分支)
  ↑
feature/* (功能分支)
release/* (发布分支)
hotfix/* (热修复分支)
```

### 分支说明

| 分支类型 | 命名规范 | 从哪创建 | 合并到哪 | 说明 |
|---------|---------|---------|---------|------|
| **main** | `main` | - | - | 生产环境代码，始终保持可部署状态 |
| **develop** | `develop` | - | - | 开发分支，包含最新开发特性 |
| **feature** | `feature/描述` | develop | develop | 新功能开发分支 |
| **release** | `release/版本号` | develop | main + develop | 版本发布准备分支 |
| **hotfix** | `hotfix/描述` | main | main + develop | 生产环境紧急修复 |

### 分支生命周期

#### 1. 功能开发流程

```bash
# 1. 从 develop 创建功能分支
git checkout develop
git pull origin develop
git checkout -b feature/add-new-character

# 2. 开发并提交更改
git add .
git commit -m "feat: 添加新角色 C.C. 的技能动画"

# 3. 推送到远程
git push -u origin feature/add-new-character

# 4. 创建 Pull Request 合并到 develop
# 5. 代码审查通过后合并
# 6. 删除功能分支
```

#### 2. 版本发布流程

```bash
# 1. 从 develop 创建发布分支
git checkout develop
git checkout -b release/2.1.0

# 2. 在发布分支上进行版本号更新和最后修复
# 3. 更新 CHANGELOG.md

# 4. 合并到 main
git checkout main
git merge --no-ff release/2.1.0
git tag -a v2.1.0 -m "Release version 2.1.0"

# 5. 合并回 develop
git checkout develop
git merge --no-ff release/2.1.0

# 6. 删除发布分支
```

#### 3. 热修复流程

```bash
# 1. 从 main 创建热修复分支
git checkout main
git checkout -b hotfix/fix-critical-bug

# 2. 修复问题并提交

# 3. 合并到 main
git checkout main
git merge --no-ff hotfix/fix-critical-bug
git tag -a v2.0.1 -m "Hotfix version 2.0.1"

# 4. 合并到 develop
git checkout develop
git merge --no-ff hotfix/fix-critical-bug

# 5. 删除热修复分支
```

---

## 📝 提交规范

本项目采用 [Conventional Commits](https://www.conventionalcommits.org/) 规范。

### 提交格式

```
<type>(<scope>): <subject>

<body>

<footer>
```

### 类型 (Type)

| 类型 | 说明 | 示例 |
|-----|------|------|
| **feat** | 新功能 | `feat: 添加新角色朱雀` |
| **fix** | Bug修复 | `fix: 修复AI出牌逻辑错误` |
| **docs** | 文档更新 | `docs: 更新README安装说明` |
| **style** | 代码格式调整 | `style: 统一缩进格式` |
| **refactor** | 代码重构 | `refactor: 优化游戏状态管理` |
| **perf** | 性能优化 | `perf: 减少音效加载时间` |
| **test** | 测试相关 | `test: 添加AI逻辑单元测试` |
| **chore** | 构建/工具 | `chore: 更新依赖版本` |
| **ci** | CI/CD配置 | `ci: 添加自动化测试工作流` |
| **revert** | 回滚更改 | `revert: 回滚音效系统更改` |

### 作用域 (Scope)

可选，用于指定更改的范围：

- `game` - 游戏逻辑
- `ui` - 用户界面
- `ai` - AI系统
- `audio` - 音效系统
- `docs` - 文档
- `build` - 构建配置
- `ci` - CI/CD配置

### 主题 (Subject)

- 使用祈使语气（"添加" 而非 "添加了"）
- 首字母小写
- 末尾不加句号
- 长度不超过50个字符

### 正文 (Body)

- 详细描述更改内容
- 解释 "为什么" 而非 "是什么"
- 每行不超过72个字符
- 使用空行分隔段落

### 页脚 (Footer)

- 引用相关 Issue：`Closes #123`
- 破坏性更改说明：`BREAKING CHANGE: ...`

### 提交示例

```
feat(game): 添加Geass判定动画效果

- 实现8种不同的Geass动作动画
- 添加动画播放状态管理
- 优化动画性能，减少重绘

Closes #45
```

```
fix(ai): 修复AI在特定情况下无限循环的问题

当AI手牌为空且轮到其出牌时，会进入无限循环状态。
现在会正确跳过该AI并进入下一玩家回合。

Fixes #67
```

---

## 🏷️ 版本号规范

本项目采用 [Semantic Versioning](https://semver.org/lang/zh-CN/)（语义化版本）规范。

### 版本号格式

```
MAJOR.MINOR.PATCH
```

- **MAJOR**（主版本号）：不兼容的API更改
- **MINOR**（次版本号）：向后兼容的功能添加
- **PATCH**（修订号）：向后兼容的问题修复

### 版本号递增规则

| 场景 | 版本变化 | 示例 |
|-----|---------|------|
| 修复Bug | PATCH + 1 | 2.0.0 → 2.0.1 |
| 添加新功能 | MINOR + 1, PATCH = 0 | 2.0.1 → 2.1.0 |
| 重大重构/不兼容更改 | MAJOR + 1, MINOR = 0, PATCH = 0 | 2.1.0 → 3.0.0 |

### 预发布版本

```
MAJOR.MINOR.PATCH-标签.编号
```

示例：
- `2.0.0-alpha.1` - 内测版本
- `2.0.0-beta.1` - 公测版本
- `2.0.0-rc.1` - 候选发布版本

### 版本标签

每次发布新版本时，需要创建 Git 标签：

```bash
# 创建带注释的标签
git tag -a v2.1.0 -m "Release version 2.1.0"

# 推送标签到远程
git push origin v2.1.0

# 推送所有标签
git push origin --tags
```

---

## 🔀 合并策略

### Pull Request 要求

1. **必须通过 CI 检查** - 所有自动化测试必须通过
2. **代码审查** - 至少需要 1 名审查者批准
3. **无冲突** - 必须解决所有合并冲突
4. **提交信息规范** - 符合 Conventional Commits 规范

### 合并方式

- **功能分支 → develop**: Squash and Merge（压缩合并）
- **release/hotfix → main**: Merge Commit（合并提交）
- **release/hotfix → develop**: Merge Commit（合并提交）

### 压缩合并规范

使用 Squash Merge 时，提交信息格式：

```
<type>(<scope>): <subject>

<包含的所有提交描述>

Closes #<PR编号>
```

---

## 🚫 禁止事项

1. **禁止直接向 main 分支推送代码**
2. **禁止在 main 分支上进行开发**
3. **禁止提交包含敏感信息的代码**
4. **禁止提交大型二进制文件到仓库**
5. **禁止使用 `git push --force` 到主分支**

---

## 📚 参考资源

- [Git Flow 工作流](https://nvie.com/posts/a-successful-git-branching-model/)
- [Conventional Commits](https://www.conventionalcommits.org/)
- [Semantic Versioning](https://semver.org/)
- [GitHub Flow](https://docs.github.com/en/get-started/quickstart/github-flow)

---

*最后更新: 2025-03-14*
