# 版本发布流程

本文档定义了 Liars Game 项目的版本发布流程和规范。

---

## 📋 版本号规范

本项目采用 [Semantic Versioning](https://semver.org/lang/zh-CN/)（语义化版本）规范。

### 版本号格式

```
MAJOR.MINOR.PATCH
```

| 位置 | 说明 | 递增时机 |
|-----|------|---------|
| **MAJOR** | 主版本号 | 不兼容的 API 更改 |
| **MINOR** | 次版本号 | 向后兼容的功能添加 |
| **PATCH** | 修订号 | 向后兼容的问题修复 |

### 版本号示例

- `2.0.0` - 重大版本发布
- `2.1.0` - 功能更新
- `2.1.1` - Bug 修复

---

## 🔄 发布流程

### 1. 准备阶段

#### 1.1 确定版本号

根据变更内容确定版本号：

```bash
# 检查当前版本
git describe --tags --abbrev=0

# 查看自上次发布以来的提交
git log $(git describe --tags --abbrev=0)..HEAD --oneline
```

#### 1.2 创建发布分支

```bash
# 从 develop 创建 release 分支
git checkout develop
git pull origin develop
git checkout -b release/2.1.0

# 推送发布分支
git push -u origin release/2.1.0
```

#### 1.3 更新版本号

```bash
# 更新 package.json 版本号
npm version 2.1.0 --no-git-tag-version

# 或者手动编辑 package.json
```

### 2. 完善阶段

#### 2.1 更新 CHANGELOG.md

```bash
# 在 CHANGELOG.md 中添加新版本条目
## [2.1.0] - 2025-03-14

### Added
- 新增功能 A
- 新增功能 B

### Fixed
- 修复问题 C
- 修复问题 D
```

#### 2.2 最终测试

```bash
# 运行完整测试套件
npm run test
npm run build

# 手动测试关键功能
npm run preview
```

#### 2.3 修复发现的问题

在 release 分支上修复测试中发现的问题：

```bash
# 修复问题
git add .
git commit -m "fix: 修复发布前发现的问题"
git push origin release/2.1.0
```

### 3. 发布阶段

#### 3.1 合并到 main

```bash
# 切换到 main 分支
git checkout main
git pull origin main

# 合并 release 分支
git merge --no-ff release/2.1.0 -m "Merge release/2.1.0 into main"

# 创建版本标签
git tag -a v2.1.0 -m "Release version 2.1.0

主要更新:
- 新增功能 A
- 新增功能 B
- 修复问题 C
"

# 推送到远程
git push origin main
git push origin v2.1.0
```

#### 3.2 合并回 develop

```bash
# 切换到 develop 分支
git checkout develop
git pull origin develop

# 合并 release 分支
git merge --no-ff release/2.1.0 -m "Merge release/2.1.0 into develop"

# 推送到远程
git push origin develop
```

#### 3.3 删除 release 分支

```bash
# 删除本地分支
git branch -d release/2.1.0

# 删除远程分支
git push origin --delete release/2.1.0
```

### 4. 部署阶段

#### 4.1 创建 GitHub Release

1. 访问 [GitHub Releases](../../releases)
2. 点击 "Draft a new release"
3. 选择标签 `v2.1.0`
4. 填写发布说明
5. 发布 Release

#### 4.2 部署到生产环境

```bash
# 触发 CI/CD 部署
# 或手动部署
npm run deploy
```

---

## 🏷️ 版本标签管理

### 标签命名规范

| 标签类型 | 格式 | 示例 |
|---------|------|------|
| 正式版本 | `vMAJOR.MINOR.PATCH` | `v2.1.0` |
| 预发布版本 | `vMAJOR.MINOR.PATCH-标签.N` | `v2.1.0-alpha.1` |
| 热修复版本 | `vMAJOR.MINOR.PATCH-hotfix.N` | `v2.1.1-hotfix.1` |

### 预发布版本标签

```bash
# Alpha 版本（内部测试）
git tag -a v2.1.0-alpha.1 -m "Alpha release 2.1.0-alpha.1"

# Beta 版本（公开测试）
git tag -a v2.1.0-beta.1 -m "Beta release 2.1.0-beta.1"

# RC 版本（候选发布）
git tag -a v2.1.0-rc.1 -m "Release candidate 2.1.0-rc.1"
```

### 标签管理命令

```bash
# 列出所有标签
git tag -l

# 查看标签详情
git show v2.1.0

# 推送单个标签到远程
git push origin v2.1.0

# 推送所有标签到远程
git push origin --tags

# 删除本地标签
git tag -d v2.1.0

# 删除远程标签
git push origin --delete v2.1.0
```

---

## 📝 发布说明模板

### GitHub Release 说明

```markdown
## 🎉 新版本发布: v2.1.0

### ✨ 新功能
- 功能 A 的详细描述 (#123)
- 功能 B 的详细描述 (#124)

### 🐛 Bug 修复
- 修复了问题 C (#125)
- 修复了问题 D (#126)

### 📝 文档
- 更新了安装文档 (#127)

### 🔧 其他
- 性能优化
- 依赖更新

### 📦 安装
\`\`\`bash
npm install code-geass-liars-game@2.1.0
\`\`\`

### 🔗 相关链接
- [完整变更日志](./CHANGELOG.md)
- [文档](./docs)

---

**感谢所有贡献者！** 🙏
```

---

## 🚨 热修复流程

### 紧急修复步骤

```bash
# 1. 从 main 创建 hotfix 分支
git checkout main
git pull origin main
git checkout -b hotfix/critical-fix

# 2. 修复问题并提交
git add .
git commit -m "fix: 修复关键问题"
git push -u origin hotfix/critical-fix

# 3. 创建 PR 合并到 main（快速审查）

# 4. 合并到 main
git checkout main
git merge --no-ff hotfix/critical-fix
git tag -a v2.1.1 -m "Hotfix version 2.1.1"
git push origin main
git push origin v2.1.1

# 5. 合并到 develop
git checkout develop
git merge --no-ff hotfix/critical-fix
git push origin develop

# 6. 删除 hotfix 分支
git branch -d hotfix/critical-fix
git push origin --delete hotfix/critical-fix
```

---

## 📊 发布检查清单

### 发布前检查

- [ ] 版本号已更新
- [ ] CHANGELOG.md 已更新
- [ ] 所有测试通过
- [ ] 文档已更新
- [ ] 代码审查完成

### 发布时检查

- [ ] 标签已创建
- [ ] GitHub Release 已发布
- [ ] 部署成功
- [ ] 生产环境验证通过

### 发布后检查

- [ ] release 分支已合并到 develop
- [ ] release 分支已删除
- [ ] 监控无异常
- [ ] 用户反馈正常

---

*最后更新: 2025-03-14*
