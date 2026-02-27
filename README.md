# Code Geass: Liar's Game

布里塔尼亚的谎言对决 - 基于《Code Geass》世界观的卡牌对战游戏

## 游戏简介

《Code Geass: Liar's Game》是一款结合了策略、欺骗和Geass能力的卡牌对战游戏。玩家将扮演《Code Geass》中的经典角色，通过出牌、质疑和发动Geass来击败对手。

## 游戏特色

- **4个可玩角色**：鲁鲁修、C.C.、朱雀、卡莲，每个角色都有独特的技能
- **3种AI难度**：简单、普通、困难，满足不同玩家需求
- **Geass判定系统**：1/3概率触发的Geass效果，增加游戏不确定性
- **8种搞笑动作**：Geass命中时的趣味表现
- **完整音效系统**：BGM、音效、角色语音

## 技术栈

- React 18 + TypeScript
- Vite 构建工具
- Howler.js 音效管理
- CSS3 动画效果

## 在线游玩

🎮 [点击这里开始游戏](https://your-username.github.io/code-geass-game/)

## 本地开发

```bash
# 克隆仓库
git clone https://github.com/your-username/code-geass-game.git
cd code-geass-game

# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build
```

## 游戏规则

1. 每人初始5张牌，轮流出牌
2. 可以质疑对手的出牌
3. 质疑成功将触发Geass判定
4. Geass有1/3概率命中，造成1点伤害
5. HP归零则游戏结束

## 角色技能

- **鲁鲁修**: 绝对命令 - 可强制改变骗子牌
- **C.C.**: 不老不死 - 50%概率免疫Geass
- **朱雀**: 生存本能 - HP≤1时Geass抗性提升
- **卡莲**: 红莲突击 - 可一次出多张牌

## 许可证

MIT License

## 免责声明

本项目是基于《Code Geass》的同人作品，仅供学习和娱乐使用。《Code Geass》的所有权利归其原始版权所有者所有。
