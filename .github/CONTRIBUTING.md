# 贡献指南

感谢你对 Liars Game 项目的关注！我们欢迎所有形式的贡献，包括但不限于：

- 提交 Bug 报告
- 提出新功能建议
- 改进文档
- 提交代码修复
- 分享使用经验

---

## 📋 目录

1. [行为准则](#-行为准则)
2. [如何贡献](#-如何贡献)
3. [开发环境设置](#-开发环境设置)
4. [代码规范](#-代码规范)
5. [提交规范](#-提交规范)
6. [Pull Request 流程](#-pull-request-流程)
7. [审查流程](#-审查流程)

---

## 📜 行为准则

本项目采用 [Contributor Covenant](https://www.contributor-covenant.org/) 行为准则。参与本项目即表示你同意遵守此准则。

### 我们的承诺

- 使用友好和包容的语言
- 尊重不同的观点和经验
- 优雅地接受建设性批评
- 关注对社区最有利的事情
- 对其他社区成员表示同理心

---

## 🚀 如何贡献

### 报告 Bug

如果你发现了 Bug，请通过 [GitHub Issues](../../issues) 提交报告。

**提交前请确认：**

1. 搜索现有 Issue，确认问题未被报告
2. 使用最新的 develop 分支测试，确认问题仍然存在
3. 使用 [Bug 报告模板](../../issues/new?template=bug_report.md) 提交

**有效的 Bug 报告应包含：**

- 清晰的问题描述
- 复现步骤
- 预期行为 vs 实际行为
- 环境信息（操作系统、浏览器、版本）
- 相关截图或日志

### 提出功能建议

如果你有新功能的想法，欢迎通过 [GitHub Issues](../../issues) 提交。

**提交前请确认：**

1. 搜索现有 Issue，确认功能未被建议
2. 使用 [功能请求模板](../../issues/new?template=feature_request.md) 提交

**有效的功能请求应包含：**

- 清晰的功能描述
- 动机和背景
- 详细的实现建议
- 可能的替代方案

### 提交代码

1. Fork 本仓库
2. 创建你的功能分支 (`git checkout -b feature/AmazingFeature`)
3. 提交你的更改 (`git commit -m 'feat: Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 打开一个 Pull Request

---

## 🛠️ 开发环境设置

### 环境要求

- **Node.js**: >= 16.0.0
- **npm**: >= 8.0.0
- **Git**: >= 2.30.0

### 本地开发

```bash
# 1. Fork 并克隆仓库
git clone https://github.com/<你的用户名>/liars-game.git
cd liars-game

# 2. 添加上游仓库
git remote add upstream https://github.com/twmissingu/liars-game.git

# 3. 安装依赖
npm install

# 4. 启动开发服务器
npm run dev

# 5. 打开浏览器访问 http://localhost:5173
```

### 同步上游更改

```bash
# 获取上游更新
git fetch upstream

# 切换到 develop 分支
git checkout develop

# 合并上游更改
git merge upstream/develop

# 推送到你的 Fork
git push origin develop
```

---

## 📝 代码规范

### TypeScript 规范

- 使用 TypeScript 严格模式
- 所有函数和变量必须声明类型
- 避免使用 `any` 类型
- 使用接口（interface）定义数据结构

```typescript
// ✅ 推荐
interface Player {
  id: string;
  name: string;
  hp: number;
}

function calculateDamage(player: Player, damage: number): number {
  return Math.max(0, player.hp - damage);
}

// ❌ 避免
function calculateDamage(player: any, damage: any) {
  return player.hp - damage;
}
```

### React 规范

- 使用函数组件和 Hooks
- 组件名使用 PascalCase
- Props 使用接口定义
- 使用自定义 Hooks 封装逻辑

```typescript
// ✅ 推荐
interface GameBoardProps {
  players: Player[];
  currentPlayer: string;
  onPlayCard: (card: Card) => void;
}

export function GameBoard({ players, currentPlayer, onPlayCard }: GameBoardProps) {
  const { gameState, dispatch } = useGame();
  
  return (
    <div className="game-board">
      {/* ... */}
    </div>
  );
}

// ❌ 避免
export function gameboard(props) {
  return <div>...</div>;
}
```

### CSS 规范

- 使用 CSS Modules 或 CSS-in-JS
- 类名使用 kebab-case
- 避免使用 !important
- 使用 CSS 变量管理主题色

```css
/* ✅ 推荐 */
.game-board {
  --primary-color: #ff0000;
  display: flex;
  justify-content: center;
}

.player-card {
  background-color: var(--primary-color);
}

/* ❌ 避免 */
.gameBoard {
  background-color: red !important;
}
```

### 文件组织

```
src/
├── components/          # React 组件
│   ├── CharacterSelect/
│   │   ├── index.tsx
│   │   ├── CharacterSelect.module.css
│   │   └── types.ts
│   └── ...
├── hooks/               # 自定义 Hooks
├── types/               # TypeScript 类型定义
├── utils/               # 工具函数
├── data/                # 静态数据
└── assets/              # 图片、音频等资源
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

### 类型说明

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

详细规范请参考 [GIT_WORKFLOW.md](./GIT_WORKFLOW.md)。

---

## 🔄 Pull Request 流程

### 创建 PR 前

1. **同步分支**
   ```bash
   git fetch upstream
   git rebase upstream/develop
   ```

2. **运行测试**
   ```bash
   npm run test
   npm run lint
   ```

3. **更新文档**
   - 更新 CHANGELOG.md
   - 更新相关文档（如需要）

### PR 要求

- 使用 [PR 模板](../pull_request_template.md) 创建 PR
- 标题遵循 Conventional Commits 格式
- 描述清楚变更内容和动机
- 关联相关的 Issue
- 确保 CI 检查通过

### PR 标题格式

```
<type>(<scope>): <描述>

例如:
feat(game): 添加多人对战模式
fix(ai): 修复AI无限循环问题
docs: 更新贡献指南
```

---

## 👀 审查流程

### 审查标准

- **代码质量**: 代码是否清晰、可维护
- **功能正确性**: 功能是否按预期工作
- **测试覆盖**: 是否有足够的测试
- **文档**: 文档是否同步更新
- **性能**: 是否有性能问题

### 审查者清单

- [ ] 代码符合项目规范
- [ ] 功能实现正确
- [ ] 测试充分
- [ ] 文档更新
- [ ] 无安全问题
- [ ] 无性能问题

### 响应审查意见

1. 认真对待每条审查意见
2. 有疑问及时沟通
3. 修改后回复 "Done" 或解释原因
4. 所有意见解决后请求重新审查

---

## 🏷️ 版本发布

项目维护者会定期发布新版本：

1. 从 develop 创建 release 分支
2. 更新版本号和 CHANGELOG
3. 合并到 main 并打标签
4. 合并回 develop

详细流程请参考 [GIT_WORKFLOW.md](./GIT_WORKFLOW.md)。

---

## 📞 联系方式

- **Issue**: [GitHub Issues](../../issues)
- **讨论**: [GitHub Discussions](../../discussions)

---

## 🙏 致谢

感谢所有为 Liars Game 项目做出贡献的开发者！

---

*最后更新: 2025-03-14*
