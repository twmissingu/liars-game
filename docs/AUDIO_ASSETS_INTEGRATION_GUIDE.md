# 🎵 Code Geass: Liar's Game - 音频资产整合指南

## 📋 项目概述

本文档提供系统性的音频资源整合方案，包括资源来源、下载链接、分类整理和加载配置。

---

## 🎯 音频资源需求清单

### P0 - 核心音频（必须实现）

| 类别 | 音效名称 | 用途 | 推荐来源 | 许可类型 |
|------|---------|------|---------|---------|
| **BGM** | 主菜单音乐 | 主界面背景 | Mixkit - Epic Orchestral | Mixkit License |
| **BGM** | 游戏场景音乐 | 对战背景 | Mixkit - Intense Puzzle | Mixkit License |
| **SFX** | 卡牌放置 | 出牌操作 | Freesound - card_place | CC0 |
| **SFX** | 质疑触发 | 质疑按钮 | Mixkit - Dramatic Boom | Mixkit License |
| **SFX** | 按钮点击 | UI交互 | Mixkit - Tech Select | Mixkit License |

### P1 - 重要音频（建议实现）

| 类别 | 音效名称 | 用途 | 推荐来源 | 许可类型 |
|------|---------|------|---------|---------|
| **BGM** | 胜利音乐 | 结算页面 | Mixkit - Winning Chimes | Mixkit License |
| **BGM** | 失败音乐 | 结算页面 | Mixkit - Sad Piano | Mixkit License |
| **SFX** | Geass激活 | 技能发动 | 原创合成器音色 | 自有版权 |
| **SFX** | Geass命中 | 惩罚判定 | Mixkit - Arcade Explosion | Mixkit License |
| **SFX** | 卡牌洗牌 | 回合重置 | Freesound - shuffle | CC0 |
| **SFX** | 角色选择 | 选人界面 | Mixkit - Select Click | Mixkit License |

---

## 🌐 推荐资源网站

### 1. Mixkit (https://mixkit.co)
**许可**: Mixkit License (免费商用，无需署名)
**优势**: 
- 无需登录即可下载
- 高质量音频素材
- 分类清晰，搜索方便

**推荐搜索关键词**:
- "Epic Orchestral" - 史诗管弦乐
- "Dramatic" - 戏剧性音乐
- "Tech Interface" - 科技界面音效
- "Card Game" - 卡牌游戏音效

### 2. Freesound (https://freesound.org)
**许可**: CC0 / CC-BY (需查看具体文件)
**优势**:
- 全球最大的免费音效社区
- 专业级广播质量
- 支持频谱特征搜索

**推荐搜索关键词**:
- "card place" - 卡牌放置
- "card shuffle" - 卡牌洗牌
- "button click" - 按钮点击
- "magic spell" - 魔法音效

### 3. YouTube Audio Library
**许可**: YouTube Audio Library License
**优势**:
- 官方认证，安全商用
- 音乐质量高
- 分类详细

---

## 📥 下载指南

### 主菜单BGM
```
来源: Mixkit
搜索: "Epic Orchestral" 或 "Cinematic Dramatic"
推荐文件: 
- mixkit-epic-orchestra-689.mp3
- mixkit-cinematic-drama-646.mp3

下载步骤:
1. 访问 https://mixkit.co/free-music/
2. 搜索 "epic orchestral"
3. 试听并选择合适的音乐
4. 点击下载按钮（无需登录）
5. 重命名为 bgm-menu.mp3
```

### 游戏场景BGM
```
来源: Mixkit
搜索: "Intense" 或 "Suspense"
推荐文件:
- mixkit-intense-puzzle-game-1122.mp3
- mixkit-driving-ambition-32.mp3

风格要求:
- BPM: 120-140
- 风格: 紧张悬疑
- 乐器: 弦乐+电子合成器
```

### 卡牌操作音效
```
来源: Freesound.org
搜索: "card" + "place/shuffle/draw"
推荐文件:
- 449901__kyles__card-place.wav (CC0)
- 240783__f4ngy__card-shuffle.wav (CC0)
- 219056__j1987__card-flip.wav (CC0)

下载步骤:
1. 访问 https://freesound.org
2. 注册免费账号
3. 搜索 "card place"
4. 筛选 CC0 许可
5. 下载并转换为 MP3 格式
```

### 质疑交互音效
```
来源: Mixkit
搜索: "Dramatic Boom" 或 "Impact"
推荐文件:
- mixkit-dramatic-boom-991.mp3
- mixkit-cinematic-impact-646.mp3

特征:
- 低沉boom + 高频shimmer
- 戏剧化冲击感
- 音量: 85%
```

### 按钮点击音效
```
来源: Mixkit
搜索: "Tech" 或 "Interface"
推荐文件:
- mixkit-modern-technology-select-3124.mp3
- mixkit-software-interface-start-2574.mp3

特征:
- 清脆tech click
- 短促 (0.05s)
- 频率: 2-5kHz
```

### 角色选择音效
```
来源: Mixkit
搜索: "Select" 或 "Confirm"
推荐文件:
- mixkit-select-click-1109.mp3
- mixkit-achievement-bell-600.mp3

特征:
- 优雅确认音
- 轻微reverb
- 音量: 55%
```

---

## 📁 文件命名规范

```
/public/audio/
├── bgm-menu.mp3          # 主菜单BGM
├── bgm-game.mp3          # 游戏场景BGM
├── bgm-victory.mp3       # 胜利BGM
├── bgm-defeat.mp3        # 失败BGM
├── sfx-play-card.mp3     # 卡牌放置
├── sfx-card-shuffle.mp3  # 卡牌洗牌
├── sfx-challenge.mp3     # 质疑触发
├── sfx-button-click.mp3  # 按钮点击
├── sfx-character-select.mp3 # 角色选择
├── sfx-geass-activate.mp3   # Geass激活
├── sfx-geass-hit.mp3     # Geass命中
├── sfx-geass-miss.mp3    # Geass闪避
├── sfx-turn-start.mp3    # 回合开始
├── sfx-win.mp3           # 回合胜利
└── sfx-lose.mp3          # 回合失败
```

---

## 🔧 技术规格

### 音频格式
| 用途 | 格式 | 比特率 | 采样率 | 声道 |
|------|------|--------|--------|------|
| BGM | MP3 | 192kbps | 44.1kHz | 立体声 |
| SFX | MP3 | 128kbps | 44.1kHz | 单声道/立体声 |
| UI | MP3 | 128kbps | 44.1kHz | 单声道 |

### 音量平衡 (Code Geass风格)
```typescript
// BGM总线: 30-40%不干扰对话
bgm: { volume: 0.35, maxVolume: 0.45 }

// SFX总线: 60-80%突出反馈
sfx: { volume: 0.75, maxVolume: 0.90 }

// UI总线: 40-50%清晰但不突兀
ui: { volume: 0.45, maxVolume: 0.55 }

// 语音总线: 80-100%优先清晰
voice: { volume: 0.90, maxVolume: 1.0 }
```

---

## 📝 加载配置

### EnhancedSoundManager.ts 配置
```typescript
// P0优先级: 立即预加载
const p0SFX: SFXType[] = [
  'button-click',  // UI交互
  'card-play',     // 卡牌放置
  'challenge',     // 质疑触发
];

// P1优先级: 延迟预加载
const p1SFX: SFXType[] = [
  'geass-activate',
  'geass-hit',
  'win',
  'lose',
  'card-shuffle',
];
```

### 音频路径配置
```typescript
const BASE_URL = import.meta.env.BASE_URL || '/';

const BGM_URLS: Record<BGMType, string> = {
  'main-menu': `${BASE_URL}audio/bgm-menu.mp3`,
  'game-normal': `${BASE_URL}audio/bgm-game.mp3`,
  'victory': `${BASE_URL}audio/bgm-victory.mp3`,
  'defeat': `${BASE_URL}audio/bgm-defeat.mp3`,
  // ...
};
```

---

## ✅ 测试清单

### 功能测试
- [ ] 主菜单BGM自动播放
- [ ] 按钮点击音效触发
- [ ] 卡牌放置音效同步
- [ ] 质疑音效触发
- [ ] BGM切换无卡顿
- [ ] 音效不重叠冲突

### 音量测试
- [ ] BGM 30-40%范围
- [ ] SFX 60-80%范围
- [ ] UI 40-50%范围
- [ ] 音量调节生效
- [ ] 静音功能正常

### 性能测试
- [ ] 预加载完成时间 < 3s
- [ ] 音频播放延迟 < 100ms
- [ ] 内存占用合理
- [ ] 无内存泄漏

### 兼容性测试
- [ ] Chrome 正常
- [ ] Firefox 正常
- [ ] Safari 正常
- [ ] 移动端正常

---

## 📚 许可声明

所有使用的音频资源必须满足以下条件之一：
1. **CC0** - 公共领域，可自由使用
2. **Mixkit License** - 免费商用，无需署名
3. **YouTube Audio Library** - 免费使用，需遵守条款
4. **自有版权** - 原创或已购买授权

**禁止使用的许可**：
- CC-BY-NC (非商业用途)
- 未明确许可的商业音乐
- 未经授权的版权音乐

---

## 🔗 快速参考链接

- Mixkit: https://mixkit.co/free-music/
- Freesound: https://freesound.org
- YouTube Audio Library: https://www.youtube.com/audiolibrary
- Free Music Archive: https://freemusicarchive.org

---

*最后更新: 2025年*
*版本: v1.0*
