# Code Geass: Liar's Game - 技术栈实现文档

**版本**: v2.1.0  
**日期**: 2026-03-14  
**作者**: PM Agent  

---

## 1. 技术栈概览

### 1.1 核心技术
| 技术 | 版本 | 用途 |
|------|------|------|
| React | 18.2.0 | UI框架 |
| TypeScript | 5.2.2 | 类型安全 |
| Vite | 5.0.8 | 构建工具 |
| Howler.js | 2.2.4 | 音效管理 |

### 1.2 开发工具
| 工具 | 用途 |
|------|------|
| VS Code | 代码编辑器 |
| Git | 版本控制 |
| GitHub Pages | 部署托管 |
| Chrome DevTools | 调试工具 |

---

## 2. 架构设计

### 2.1 整体架构
```
┌─────────────────────────────────────────┐
│           React Components              │
│  ┌──────────┐ ┌──────────┐ ┌─────────┐ │
│  │Character │ │  Game    │ │  Card   │ │
│  │ Select   │ │  Board   │ │         │ │
│  └──────────┘ └──────────┘ └─────────┘ │
├─────────────────────────────────────────┤
│           Custom Hooks                  │
│  ┌──────────┐ ┌──────────┐ ┌─────────┐ │
│  │ useGame  │ │ useAudio │ │  useAI  │ │
│  └──────────┘ └──────────┘ └─────────┘ │
├─────────────────────────────────────────┤
│           Game Logic                    │
│  ┌──────────┐ ┌──────────┐ ┌─────────┐ │
│  │  Game    │ │  Card    │ │   AI    │ │
│  │  State   │ │  Manager │ │ Decision│ │
│  └──────────┘ └──────────┘ └─────────┘ │
└─────────────────────────────────────────┘
```

### 2.2 组件架构

#### 角色选择组件 (CharacterSelect)
```typescript
interface CharacterSelectProps {
  onSelect: (character: Character) => void;
}

// 功能：
// - 展示4个可选角色
// - 显示角色技能和介绍
// - 处理角色选择
```

#### 游戏面板组件 (GameBoard)
```typescript
interface GameBoardProps {
  playerCharacter: Character;
  onBackToMenu: () => void;
}

// 功能：
// - 管理游戏状态
// - 渲染游戏界面
// - 处理用户输入
// - 协调AI行动
```

#### 卡牌组件 (Card)
```typescript
interface CardProps {
  card: Card;
  onClick?: () => void;
  disabled?: boolean;
  selected?: boolean;
}

// 功能：
// - 显示卡牌花色和点数
// - 处理点击事件
// - 显示选中状态
```

---

## 3. 核心功能实现

### 3.1 游戏状态管理 (useGame Hook)

```typescript
// 游戏状态定义
interface GameState {
  players: Player[];
  currentPlayerIndex: number;
  liarCard: Card | null;
  deck: Card[];
  discardPile: Card[];
  turn: number;
  phase: 'draw' | 'play' | 'challenge' | 'geass';
  gameOver: boolean;
  winner: Player | null;
}

// 核心方法
const useGame = () => {
  const [gameState, setGameState] = useState<GameState>(initialState);
  
  // 初始化游戏
  const initGame = (playerCharacter: Character) => {
    // 创建玩家和3个AI
    // 发牌
    // 设置初始状态
  };
  
  // 出牌
  const playCards = (playerId: string, cards: Card[], claimedCard: Card) => {
    // 验证出牌合法性
    // 更新游戏状态
    // 进入质疑阶段
  };
  
  // 质疑
  const challenge = (challengerId: string, targetId: string) => {
    // 验证质疑
    // 判定胜负
    // 触发Geass或惩罚
  };
  
  // Geass判定
  const geassJudgment = (targetId: string) => {
    // 计算命中概率（考虑角色技能）
    // 随机判定
    // 应用伤害和特效
  };
  
  return { gameState, initGame, playCards, challenge, geassJudgment };
};
```

### 3.2 AI实现 (useAI Hook)

```typescript
// AI决策逻辑
const useAI = (gameState: GameState) => {
  
  // AI决定出牌
  const decidePlay = (aiPlayer: Player): AIAction => {
    const hand = aiPlayer.hand;
    const liarCard = gameState.liarCard;
    
    // 策略1：有骗子牌就出真的
    const hasLiarCard = hand.some(c => c.rank === liarCard.rank);
    if (hasLiarCard) {
      return {
        type: 'play',
        cards: hand.filter(c => c.rank === liarCard.rank).slice(0, 1),
        claimedCard: liarCard,
        isLie: false
      };
    }
    
    // 策略2：随机选择一张牌撒谎
    const randomCard = hand[Math.floor(Math.random() * hand.length)];
    return {
      type: 'play',
      cards: [randomCard],
      claimedCard: liarCard,
      isLie: true
    };
  };
  
  // AI决定是否质疑
  const decideChallenge = (aiPlayer: Player, lastPlay: PlayAction): boolean => {
    // 基础质疑概率 30%
    let challengeProbability = 0.3;
    
    // 根据手牌调整
    const hasLiarCard = aiPlayer.hand.some(c => 
      c.rank === lastPlay.claimedCard.rank
    );
    if (hasLiarCard) {
      challengeProbability += 0.4; // 有骗子牌时更可能质疑
    }
    
    // 根据剩余HP调整（残血更谨慎）
    if (aiPlayer.hp === 1) {
      challengeProbability -= 0.2;
    }
    
    return Math.random() < challengeProbability;
  };
  
  return { decidePlay, decideChallenge };
};
```

### 3.3 音效管理 (useAudio Hook)

```typescript
import { Howl } from 'howler';

const useAudio = () => {
  const [muted, setMuted] = useState(false);
  const [volume, setVolume] = useState(0.5);
  
  // 音效缓存
  const sounds = useRef<Record<string, Howl>>({});
  
  // 初始化音效
  const initSounds = () => {
    sounds.current = {
      bgm: new Howl({
        src: ['/assets/audio/bgm.mp3'],
        loop: true,
        volume: volume * 0.3
      }),
      playCard: new Howl({
        src: ['/assets/audio/play-card.mp3'],
        volume
      }),
      geass: new Howl({
        src: ['/assets/audio/geass.mp3'],
        volume
      }),
      // ... 其他音效
    };
  };
  
  // 播放音效
  const play = (soundName: string) => {
    if (!muted && sounds.current[soundName]) {
      sounds.current[soundName].play();
    }
  };
  
  // 切换静音
  const toggleMute = () => {
    setMuted(!muted);
    Howler.mute(!muted);
  };
  
  return { play, toggleMute, muted, volume, setVolume };
};
```

### 3.4 特效系统

```typescript
// Geass特效组件
const GeassEffect: React.FC = () => {
  return (
    <div className="geass-effect">
      <div className="geass-ring ring-1"></div>
      <div className="geass-ring ring-2"></div>
      <div className="geass-ring ring-3"></div>
      <div className="geass-symbol"></div>
    </div>
  );
};

// CSS动画
/*
.geass-ring {
  position: absolute;
  border: 3px solid #ff0000;
  border-radius: 50%;
  animation: geass-expand 2s ease-out forwards;
}

@keyframes geass-expand {
  0% {
    width: 0;
    height: 0;
    opacity: 1;
  }
  100% {
    width: 300px;
    height: 300px;
    opacity: 0;
  }
}
*/
```

---

## 4. 性能优化

### 4.1 渲染优化
- 使用 `React.memo` 避免不必要的重渲染
- 使用 `useMemo` 缓存计算结果
- 使用 `useCallback` 缓存回调函数

### 4.2 资源优化
- 图片使用 WebP 格式
- 音效使用 MP3 格式并压缩
- 使用懒加载减少初始加载时间

### 4.3 代码优化
```typescript
// 优化前：每次渲染都创建新数组
const sortedPlayers = players.sort((a, b) => b.hp - a.hp);

// 优化后：使用useMemo缓存
const sortedPlayers = useMemo(() => 
  players.sort((a, b) => b.hp - a.hp), 
  [players]
);
```

---

## 5. 部署配置

### 5.1 Vite配置
```typescript
// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/liars-game/',  // GitHub Pages路径
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: true,
  },
  server: {
    port: 3000,
    open: true
  }
});
```

### 5.2 GitHub Actions部署
```yaml
# .github/workflows/deploy.yml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node
        uses: actions/setup-node@v3
        with:
          node-version: '18'
      
      - name: Install Dependencies
        run: npm ci
      
      - name: Build
        run: npm run build
      
      - name: Deploy
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

---

## 6. 测试策略

### 6.1 单元测试
```typescript
// 游戏逻辑测试
describe('Game Logic', () => {
  test('should initialize game with 4 players', () => {
    const game = initGame(characters[0]);
    expect(game.players).toHaveLength(4);
  });
  
  test('should deal 5 cards to each player', () => {
    const game = initGame(characters[0]);
    game.players.forEach(player => {
      expect(player.hand).toHaveLength(5);
    });
  });
  
  test('should calculate Geass probability correctly', () => {
    const probability = calculateGeassProbability('lulu', 2);
    expect(probability).toBe(1/3); // 鲁鲁修不影响概率
  });
});
```

### 6.2 集成测试
- 测试完整游戏流程
- 测试角色技能触发
- 测试AI决策逻辑

---

## 7. 未来扩展

### 7.1 可能的扩展功能
| 功能 | 技术方案 | 优先级 |
|------|----------|--------|
| 联网对战 | WebSocket + Socket.io | P1 |
| 更多角色 | 扩展角色数据配置 | P2 |
| 成就系统 | LocalStorage存储 | P2 |
| 排行榜 | 后端API + 数据库 | P3 |
| 观战模式 | WebRTC直播 | P3 |

### 7.2 技术债务
- [ ] 将游戏状态管理迁移到 Redux/Zustand
- [ ] 添加更完善的错误处理
- [ ] 优化移动端触控体验
- [ ] 添加PWA离线支持

---

## 8. 参考资料

### 8.1 技术文档
- [React官方文档](https://react.dev/)
- [TypeScript手册](https://www.typescriptlang.org/docs/)
- [Vite指南](https://vitejs.dev/guide/)
- [Howler.js文档](https://howlerjs.com/)

### 8.2 设计参考
- 《Code Geass》动画设定
- 《骗子酒吧》游戏机制
- 扑克牌游戏设计模式

---

**文档结束**
