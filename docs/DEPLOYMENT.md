# 🚀 Liars Game 部署文档

本文档详细说明 Liars Game 项目的部署流程、配置和故障排查方法。

---

## 📋 目录

1. [部署架构](#部署架构)
2. [快速开始](#快速开始)
3. [GitHub Actions 工作流](#github-actions-工作流)
4. [环境配置](#环境配置)
5. [部署流程](#部署流程)
6. [预览部署](#预览部署)
7. [回滚机制](#回滚机制)
8. [故障排查](#故障排查)
9. [最佳实践](#最佳实践)

---

## 部署架构

```
┌─────────────────┐     ┌─────────────────┐     ┌─────────────────┐
│   代码提交      │────▶│  GitHub Actions │────▶│  GitHub Pages   │
│  (main分支)     │     │   CI/CD 流程    │     │   静态托管      │
└─────────────────┘     └─────────────────┘     └─────────────────┘
                               │
                               ▼
                        ┌─────────────────┐
                        │   PR 预览环境   │
                        └─────────────────┘
```

### 技术栈

- **构建工具**: Vite
- **CI/CD**: GitHub Actions
- **托管**: GitHub Pages
- **包管理器**: npm

---

## 快速开始

### 1. 环境要求

- Node.js >= 20.0.0
- npm >= 10.0.0
- Git >= 2.30.0

### 2. 本地开发

```bash
# 克隆仓库
git clone https://github.com/twmissingu/liars-game.git
cd liars-game

# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 访问 http://localhost:5173
```

### 3. 生产构建

```bash
# 构建生产版本
npm run build

# 预览生产版本
npm run preview
```

---

## GitHub Actions 工作流

### 工作流概览

| 工作流 | 触发条件 | 用途 |
|--------|----------|------|
| `ci.yml` | PR / Push | 代码质量检查、测试、构建 |
| `deploy.yml` | Push to main | 部署到生产环境 |
| `preview.yml` | PR opened/synchronize | 部署 PR 预览环境 |
| `pr-checks.yml` | PR opened/synchronize | PR 规范检查 |
| `rollback.yml` | 手动触发 | 回滚到指定版本 |

### 详细说明

#### CI 工作流 (ci.yml)

并行执行以下任务：

- **🔍 ESLint 检查**: 代码风格检查
- **📐 TypeScript 类型检查**: 类型安全验证
- **💅 Prettier 格式检查**: 代码格式验证
- **🧪 单元测试**: 运行单元测试
- **🔗 集成测试**: 运行集成测试
- **🔨 构建项目**: 验证构建是否成功
- **🔒 安全扫描**: npm audit 检查

#### 部署工作流 (deploy.yml)

```
预检 → 构建 → 测试 → 部署 → 记录
```

包含以下步骤：

1. **部署预检**: 检查是否需要部署（排除纯文档变更）
2. **构建项目**: 安装依赖、类型检查、测试、构建
3. **部署到 GitHub Pages**: 上传构建产物并部署
4. **记录部署历史**: 创建部署标签

#### PR 预览工作流 (preview.yml)

为每个 PR 自动创建预览环境：

- 预览 URL: `https://twmissingu.github.io/liars-game/preview/pr-{PR_NUMBER}/`
- 在 PR 中自动评论预览链接
- PR 关闭时自动清理预览

---

## 环境配置

### GitHub Pages 设置

1. 进入仓库 **Settings** → **Pages**
2. **Build and deployment** → **Source** 选择 **GitHub Actions**
3. 保存设置

### 环境变量

构建时可用的环境变量：

| 变量名 | 说明 | 示例 |
|--------|------|------|
| `NODE_ENV` | 环境模式 | `production` |
| `VITE_APP_VERSION` | 应用版本号 | `1.0.0` |
| `VITE_BUILD_TIME` | 构建时间 | ISO 8601 格式 |
| `VITE_GIT_SHA` | Git 提交 SHA | `abc123...` |
| `VITE_BASE_URL` | 基础 URL | `/liars-game/` |
| `VITE_PREVIEW_MODE` | 预览模式 | `true` / `false` |

### Secrets 配置

当前项目不需要额外的 Secrets，使用默认的 `GITHUB_TOKEN`。

---

## 部署流程

### 自动部署

当代码推送到 `main` 分支时，自动触发部署：

```
代码推送 → GitHub Actions → 构建 → 测试 → 部署 → GitHub Pages
```

### 手动部署

1. 进入仓库 **Actions** 标签
2. 选择 **Deploy to GitHub Pages** 工作流
3. 点击 **Run workflow**
4. 选择分支和部署环境
5. 点击 **Run workflow**

### 部署验证

部署完成后，验证以下内容：

- [ ] 网站可正常访问
- [ ] 所有资源加载正常（无 404）
- [ ] 游戏功能正常
- [ ] 音效播放正常
- [ ] 无控制台报错

---

## 预览部署

### PR 预览

每个 Pull Request 会自动创建预览环境：

1. 创建 PR 时自动部署
2. 推送新提交时自动更新
3. PR 关闭时自动清理

### 访问预览

预览链接会在 PR 中自动评论，格式：

```
https://twmissingu.github.io/liars-game/preview/pr-{PR_NUMBER}/
```

### 清理预览

- 自动清理：PR 关闭时自动删除
- 手动清理：在 Actions 中运行清理工作流

---

## 回滚机制

### 自动回滚标签

每次成功部署会自动创建标签：

```
deploy-YYYYMMDD-HHMMSS-v{VERSION}
```

### 手动回滚

1. 进入仓库 **Actions** 标签
2. 选择 **Rollback - 回滚部署** 工作流
3. 点击 **Run workflow**
4. 选择回滚目标：
   - `previous`: 回滚到上一个版本
   - `specific`: 回滚到指定标签
5. 填写回滚原因
6. 点击 **Run workflow**

### 回滚标签

回滚后会创建新的标签：

```
rollback-YYYYMMDD-HHMMSS
```

---

## 故障排查

### 常见问题

#### 1. 构建失败

**症状**: GitHub Actions 构建步骤失败

**排查步骤**:

```bash
# 本地验证构建
npm ci
npm run lint
npm run type-check
npm run test:ci
npm run build
```

**常见原因**:
- TypeScript 类型错误
- ESLint 检查失败
- 测试失败
- 依赖安装问题

#### 2. 部署成功但网站 404

**症状**: Actions 显示成功，但访问网站返回 404

**排查步骤**:

1. 检查 GitHub Pages 设置
   - Settings → Pages → Source 应为 GitHub Actions

2. 检查构建输出
   ```bash
   # 确认 dist 目录存在且包含 index.html
   ls -la dist/
   ```

3. 检查 base URL 配置
   - `vite.config.ts` 中的 `base` 配置
   - `package.json` 中的 `homepage` 字段

4. 等待 DNS 生效
   - GitHub Pages 部署后可能需要几分钟生效

#### 3. 资源加载 404

**症状**: 页面能打开，但 CSS/JS/图片加载失败

**排查步骤**:

1. 检查浏览器开发者工具 Network 面板
2. 确认资源路径正确
3. 检查 `vite.config.ts` 中的 `base` 配置：
   ```typescript
   export default {
     base: '/liars-game/',
   }
   ```

#### 4. 预览部署失败

**症状**: PR 预览没有创建或更新

**排查步骤**:

1. 检查 PR 是否针对正确的分支（main/master/develop）
2. 检查 Actions 日志中的错误信息
3. 确认 `GITHUB_TOKEN` 有写入权限

#### 5. 缓存问题

**症状**: 部署后仍然看到旧版本

**解决方案**:

```bash
# 强制刷新浏览器
Ctrl + Shift + R  (Windows/Linux)
Cmd + Shift + R    (macOS)

# 或在 URL 后添加随机参数
https://twmissingu.github.io/liars-game/?v=2
```

### 调试技巧

#### 查看 Actions 日志

1. 进入仓库 **Actions** 标签
2. 点击失败的运行记录
3. 查看具体步骤的日志

#### 本地模拟 Actions 环境

```bash
# 使用 act 工具本地运行 Actions
# 安装: https://github.com/nektos/act

act push
```

#### 检查部署产物

```bash
# 下载并检查构建产物
# 1. 在 Actions 运行页面下载 artifacts
# 2. 解压检查 dist 目录内容
```

---

## 最佳实践

### 部署前检查清单

- [ ] 所有测试通过
- [ ] 代码审查完成
- [ ] 文档已更新（如需要）
- [ ] CHANGELOG 已更新
- [ ] 本地构建成功

### 分支策略

```
main     ─────●────────●────────●─────  生产分支
              ↑        ↑        ↑
develop  ────●──●──●──●──●──●──●─────  开发分支
                 ↑     ↑     ↑
feature  ────────●─────●─────●────────  功能分支
```

### 版本发布流程

1. 在 `develop` 分支完成开发和测试
2. 创建 PR 合并到 `main`
3. 通过 PR 预览验证功能
4. 合并后自动部署到生产环境
5. 验证生产环境功能正常
6. 如有问题，执行回滚

### 监控和告警

建议设置以下监控：

- GitHub Actions 运行状态
- GitHub Pages 可用性
- 网站性能指标

---

## 相关链接

- [GitHub Actions 文档](https://docs.github.com/en/actions)
- [GitHub Pages 文档](https://docs.github.com/en/pages)
- [Vite 部署指南](https://vitejs.dev/guide/static-deploy.html)
- [项目 README](../README.md)
- [贡献指南](../.github/CONTRIBUTING.md)

---

## 更新日志

| 日期 | 版本 | 变更内容 |
|------|------|----------|
| 2025-03-14 | 1.0 | 初始版本，完善 CI/CD 流程 |

---

*最后更新: 2025-03-14*
