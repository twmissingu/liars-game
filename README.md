# Code Geass: Liar's Game

布里塔尼亚的谎言对决 - 基于《Code Geass》世界观的卡牌对战游戏

[![Deploy to GitHub Pages](https://github.com/twmissingu/liars-game/actions/workflows/deploy.yml/badge.svg)](https://github.com/twmissingu/liars-game/actions/workflows/deploy.yml)

## 🎮 在线游玩

**[点击这里开始游戏](https://twmissingu.github.io/liars-game/)**

---

## 📖 项目文档

- [软件需求规格书 (SRS)](./docs/SRS.md) - 完整的功能需求文档
- [技术栈实现文档](./docs/TECH_STACK.md) - 技术架构和实现细节

---

## 🎬 游戏简介

《Code Geass: Liar's Game》是一款结合了策略、欺骗和Geass能力的卡牌对战游戏。玩家将扮演《Code Geass》中的经典角色，与3个AI对手进行激烈的谎言对决。

### 核心玩法
- **1v3人机对战** - 同时对抗3个AI对手
- **标准扑克牌** - 使用52张标准扑克牌
- **骗子牌机制** - 每回合随机指定"骗子牌"
- **Geass判定** - 质疑成功触发Geass判定
- **角色技能** - 每个角色都有独特的Geass能力

---

## 🎯 游戏特色

### 🎭 4个可玩角色
每个角色都有独特的技能：

| 角色 | 技能名称 | 技能效果 |
|------|----------|----------|
| **鲁鲁修** | 绝对命令 | 可以强制改变骗子牌为任意点数 |
| **C.C.** | 不老不死 | 50%概率免疫Geass效果 |
| **朱雀** | 生存本能 | HP≤1时Geass命中概率减半 |
| **卡莲** | 红莲突击 | 每回合可出1-4张牌 |

### 🎯 1v3人机对战
- 同时对抗3个AI对手
- 每个AI都有不同的角色和策略
- 最后存活的玩家获胜

### 🃏 标准扑克牌系统
- 使用52张标准扑克牌
- 每回合随机指定"骗子牌"
- 可以出真牌或撒谎

### ⚡ Geass判定系统
- 质疑成功触发Geass判定
- 基础1/3概率命中
- 角色技能影响概率
- 8种搞笑动作效果

### 🎵 完整音效系统
- BGM背景音乐
- 出牌音效
- Geass激活音效
- 角色技能音效
- 搞笑动作音效

---

## 📋 游戏规则

### 游戏流程
1. **角色选择** - 选择你想扮演的角色
2. **初始发牌** - 每人5张牌
3. **骗子牌** - 每回合随机指定一张骗子牌（A-K）
4. **出牌** - 轮流出牌，可以声称是骗子牌（可能撒谎）
5. **质疑** - 其他玩家可以质疑出牌
6. **Geass判定** - 质疑成功触发Geass判定，有概率造成1点伤害
7. **胜利条件** - 淘汰所有对手，成为最后幸存者

### 出牌规则
- 每回合必须出牌
- 声称出的牌是骗子牌（可能撒谎）
- 其他玩家可以质疑
- 质疑成功：出牌者受Geass
- 质疑失败：质疑者受Geass

### Geass判定
- 基础命中概率：1/3
- 命中效果：造成1点HP伤害
- 触发搞笑动作动画
- 角色技能可以影响概率

---

## 🏗️ 技术栈

### 核心技术
| 技术 | 版本 | 用途 |
|------|------|------|
| React | 18.2.0 | UI框架 |
| TypeScript | 5.2.2 | 类型安全 |
| Vite | 5.0.8 | 构建工具 |
| Howler.js | 2.2.4 | 音效管理 |

### 项目结构
```
src/
├── components/          # React组件
│   ├── CharacterSelect/ # 角色选择
│   ├── GameBoard/       # 游戏主界面
│   ├── Card/            # 卡牌组件
│   ├── Effects/         # 特效组件
│   └── UI/              # UI组件
├── data/                # 游戏数据
├── hooks/               # 自定义Hooks
│   ├── useGame.ts       # 游戏逻辑
│   ├── useAudio.ts      # 音效管理
│   └── useAI.ts         # AI逻辑
├── types/               # TypeScript类型
└── utils/               # 工具函数
```

---

## 🚀 快速开始

### 本地开发

```bash
# 克隆仓库
git clone https://github.com/twmissingu/liars-game.git
cd liars-game

# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build

# 部署到GitHub Pages
npm run deploy
```

### 环境要求
- Node.js >= 16
- npm >= 8
- 现代浏览器（Chrome/Firefox/Safari/Edge）

---

## 📱 兼容性

| 平台 | 支持状态 |
|------|----------|
| Chrome | ✅ 完全支持 |
| Firefox | ✅ 完全支持 |
| Safari | ✅ 完全支持 |
| Edge | ✅ 完全支持 |
| iOS Safari | ✅ 支持 |
| Android Chrome | ✅ 支持 |

---

## 📝 更新日志

### v2.0.0 (2025-03-02)
- ✨ 新增1v3人机对战模式
- ✨ 新增标准52张扑克牌系统
- ✨ 新增骗子牌机制（每回合随机指定）
- ✨ 实现4个角色的独特技能
- ✨ 新增"回到主页面"按钮
- ✨ 改进角色选择界面，显示技能信息
- ✨ 游戏页面常驻显示骗子牌
- ✨ 修复音效系统
- ✨ 改进游戏逻辑和AI行为

### v1.0.0 (2025-02-28)
- 🎉 初始版本发布
- 基础游戏玩法
- 4个Q版角色
- 简单AI对手

---

## 🤝 贡献指南

欢迎提交Issue和Pull Request！

### 开发流程
1. Fork 本仓库
2. 创建你的特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交你的更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 打开一个 Pull Request

---

## 📄 许可证

MIT License

---

## ⚠️ 免责声明

本项目是基于《Code Geass》的同人作品，仅供学习和娱乐使用。《Code Geass》的所有权利归其原始版权所有者所有。

---

## 🙏 致谢

- 《Code Geass》制作团队
- 开源社区
- 所有测试玩家

---

**享受游戏，愿Geass与你同在！** 🎮✨
