# 部署指南

## 快速部署到GitHub Pages

### 步骤1: 创建GitHub仓库
1. 登录GitHub
2. 点击右上角 "+" -> "New repository"
3. 仓库名称: `code-geass-game`
4. 选择 "Public"
5. 点击 "Create repository"

### 步骤2: 推送代码
```bash
# 在本地项目目录执行
git remote add origin https://github.com/YOUR_USERNAME/code-geass-game.git
git branch -M main
git push -u origin main
```

### 步骤3: 启用GitHub Pages
1. 进入仓库页面
2. 点击 "Settings" 标签
3. 左侧菜单选择 "Pages"
4. "Build and deployment" -> "Source" 选择 "GitHub Actions"
5. 等待GitHub Actions自动部署

### 步骤4: 访问游戏
部署完成后，访问:
```
https://YOUR_USERNAME.github.io/code-geass-game/
```

## 本地开发

### 安装依赖
```bash
npm install
```

### 开发服务器
```bash
npm run dev
```
访问 http://localhost:3000

### 生产构建
```bash
npm run build
```

### 预览生产版本
```bash
npm run preview
```

## 项目结构
```
code-geass-game/
├── .github/workflows/    # GitHub Actions配置
├── dist/                 # 构建输出
├── src/
│   ├── ai/              # AI系统
│   ├── audio/           # 音效管理
│   ├── characters/      # 角色数据
│   ├── components/      # UI组件
│   ├── core/            # 游戏核心逻辑
│   ├── data/            # 游戏数据
│   ├── store/           # 状态管理
│   ├── styles/          # 全局样式
│   ├── types/           # 类型定义
│   ├── ui/              # 页面组件
│   └── utils/           # 工具函数
├── index.html           # 入口HTML
├── package.json         # 项目配置
├── tsconfig.json        # TypeScript配置
└── vite.config.ts       # Vite配置
```

## 自定义配置

### 修改音效
编辑 `src/audio/SoundManager.ts` 中的 `SOUND_URLS`

### 添加新角色
1. 在 `src/data/characters.ts` 添加角色数据
2. 在 `src/components/characters/` 创建角色组件
3. 在 `src/components/characters/index.ts` 导出组件

### 调整游戏难度
编辑 `src/ai/strategies/` 中的策略文件

## 故障排除

### 构建失败
```bash
# 清除缓存
rm -rf node_modules package-lock.json
npm install
npm run build
```

### 音效不播放
- 检查浏览器是否允许自动播放
- 检查网络连接
- 查看控制台错误信息

### GitHub Pages 404
- 确认仓库是Public
- 检查GitHub Actions是否成功运行
- 等待几分钟让DNS生效
