# 修复建议文档 - Code Geass: Liar's Game

**文档版本**: v1.0  
**生成日期**: 2026-02-28  
**对应Bug清单**: BUG_LIST.md

---

## 一、短期修复 (1-2天)

### 1.1 修复角色技能集成 (P0-001)

**问题**: 角色技能系统未与游戏逻辑集成

**修复方案**:

```typescript
// App.tsx - 修改游戏状态管理
import { CharacterIntegration } from './core/CharacterIntegration';
import { SkillEffect } from './components/SkillEffects';

const App: React.FC = () => {
  const [activeSkill, setActiveSkill] = useState<>(null);
  const charIntegrationRef = useRef<CharacterIntegration | null>(null);

  const handleConfirmCharacter = useCallback(() => {
    if (selectedCharacter) {
      // 初始化角色集成
      charIntegrationRef.current = new CharacterIntegration(selectedCharacter);
      
      // 根据角色调整初始状态
      const initialHP = selectedCharacter === 'suzaku' ? 4 : 3;
      
      setGameState({
        // ...
        playerHP: initialHP,
        maxHP: initialHP,
      });
    }
  }, [selectedCharacter]);

  const handleGeassResult = useCallback((target: 'player' | 'opponent') => {
    // C.C.技能：50%免疫
    if (target === 'player' && selectedCharacter === 'cc') {
      if (Math.random() < 0.5) {
        addLog('C.C.的不老不死技能发动，免疫了Geass！');
        return; // 免疫，不扣血
      }
    }
    
    // 朱雀技能：HP<=1时抗性提升
    if (target === 'player' && selectedCharacter === 'suzaku' && gameState.playerHP <= 1) {
      if (Math.random() < 0.5) { // 额外50%闪避
        addLog('朱雀的生存本能发动，闪避了Geass！');
        return;
      }
    }
    
    // 正常扣血逻辑...
  }, [selectedCharacter, gameState.playerHP]);

  return (
    <div className="cg-app">
      {/* ... */}
      
      {/* 技能特效层 */}
      {activeSkill && (
        <SkillEffect
          characterId={activeSkill.characterId}
          isActive={activeSkill.isActive}
          onComplete={() => setActiveSkill(null)}
        />
      )}
    </div>
  );
};
```

---

### 1.2 完善骗子牌机制 (P0-002)

**问题**: 骗子牌核心机制不完整

**修复方案**:

```typescript
// 统一牌组系统 - 修改 types/game.types.ts
export type LiarCardRank = 'Q' | 'K' | 'A';

export interface Card {
  id: string;
  rank: LiarCardRank | 'JOKER';
  type: 'liar' | 'normal' | 'joker';
  owner: 'player' | 'ai' | 'table' | null;
}

// App.tsx - 修改出牌和质疑逻辑
const handlePlayCards = useCallback((cardIds: string[], claimedRank: LiarCardRank) => {
  const cards = cardIds.map(id => playerHand.find(c => c.id === id)).filter(Boolean);
  
  // 记录声称的骗子牌
  setLastClaimedRank(claimedRank);
  setLastPlayedCards(cards);
  
  // 移动到桌面
  setGameState(prev => ({
    ...prev,
    playerHand: prev.playerHand.filter(c => !cardIds.includes(c.id)),
    tableCards: [...prev.tableCards, ...cards],
  }));
}, [playerHand]);

const handleChallenge = useCallback(() => {
  if (!lastPlayedCards || !lastClaimedRank) return;
  
  // 检查是否为谎言
  const wasLie = lastPlayedCards.some(card => 
    card.rank !== lastClaimedRank && card.rank !== 'JOKER'
  );
  
  if (wasLie) {
    addLog(`质疑成功！对方撒谎了！`);
    // 撒谎者受惩罚
    triggerGeass('opponent');
  } else {
    addLog(`质疑失败！对方说的是实话！`);
    // 质疑者受惩罚
    triggerGeass('player');
  }
}, [lastPlayedCards, lastClaimedRank]);
```

---

### 1.3 修复手牌耗尽处理 (P1-003)

**修复方案**:

```typescript
// App.tsx - 添加手牌检测
useEffect(() => {
  // 检查手牌耗尽
  if (gameState.gamePhase === 'playing') {
    if (gameState.playerHand.length === 0 || gameState.opponentHand.length === 0) {
      handleRoundEnd();
    }
  }
}, [gameState.playerHand, gameState.opponentHand]);

const handleRoundEnd = useCallback(() => {
  // 结算本回合
  const playerCards = gameState.tableCards.filter(c => c.owner === 'player');
  const opponentCards = gameState.tableCards.filter(c => c.owner === 'ai');
  
  // 比较牌数或其他规则决定胜负
  // ...
  
  // 重新发牌或结束游戏
  if (gameState.currentRound < gameState.maxRounds) {
    // 重新发牌
    const deck = createDeck();
    const { playerHand, opponentHand } = dealCards(deck);
    
    setGameState(prev => ({
      ...prev,
      currentRound: prev.currentRound + 1,
      playerHand,
      opponentHand,
      tableCards: [],
    }));
  } else {
    // 游戏结束
    setCurrentScreen('result');
  }
}, [gameState]);
```

---

### 1.4 添加数据持久化 (P1-004)

**修复方案**:

```typescript
// App.tsx - 集成storage
import { storage } from './utils';

// 游戏设置类型
interface GameSettings {
  difficulty: Difficulty;
  bgmVolume: number;
  sfxVolume: number;
}

const App: React.FC = () => {
  // 加载保存的设置
  useEffect(() => {
    const savedSettings = storage.load<GameSettings>();
    if (savedSettings) {
      setDifficulty(savedSettings.difficulty);
      soundManager.setBGMVolume(savedSettings.bgmVolume);
      soundManager.setSFXVolume(savedSettings.sfxVolume);
    }
  }, []);

  // 保存设置
  const saveSettings = useCallback(() => {
    const settings: GameSettings = {
      difficulty,
      bgmVolume: soundManager.getStatus().bgmVolume,
      sfxVolume: soundManager.getStatus().sfxVolume,
    };
    storage.save(settings);
  }, [difficulty]);

  // 在设置改变时保存
  useEffect(() => {
    saveSettings();
  }, [difficulty, saveSettings]);
};
```

---

## 二、中期修复 (3-5天)

### 2.1 实现多张出牌 (P1-001)

**修复方案**:

```typescript
// GameTable.tsx - 添加多选支持
interface GameTableProps {
  // ...
  onPlayCards: (cardIds: string[], claimedRank: CardRank) => void; // 改为多张
}

// 新增组件
const CardSelector: React.FC = () => {
  const [selectedCards, setSelectedCards] = useState<string[]>([]);
  const [claimedRank, setClaimedRank] = useState<CardRank>('Q');
  
  const maxCards = selectedCharacter === 'kallen' ? 4 : 1;
  
  const toggleCard = (cardId: string) => {
    if (selectedCards.includes(cardId)) {
      setSelectedCards(prev => prev.filter(id => id !== cardId));
    } else if (selectedCards.length < maxCards) {
      setSelectedCards(prev => [...prev, cardId]);
    }
  };
  
  return (
    <div className="cg-card-selector">
      {playerHand.map(card => (
        <button
          key={card.id}
          className={`cg-card ${selectedCards.includes(card.id) ? 'selected' : ''}`}
          onClick={() => toggleCard(card.id)}
        >
          {/* 卡牌内容 */}
        </button>
      ))}
      
      {selectedCards.length > 0 && (
        <div className="cg-claim-selector">
          <select value={claimedRank} onChange={e => setClaimedRank(e.target.value as CardRank)}>
            <option value="Q">Q</option>
            <option value="K">K</option>
            <option value="A">A</option>
          </select>
          <button onClick={() => onPlayCards(selectedCards, claimedRank)}>
            出牌
          </button>
        </div>
      )}
    </div>
  );
};
```

---

### 2.2 完善AI性格系统 (P1-002)

**修复方案**:

```typescript
// EasyStrategy.ts - 根据性格调整
export class EasyStrategy implements AIStrategy {
  getPersonalityTraits(personality: Personality): PersonalityTraits {
    const traits: Record<Personality, PersonalityTraits> = {
      aggressive: {
        bluffFrequency: 0.7,      // 爱撒谎
        challengeThreshold: 0.4,  // 爱质疑
        riskTolerance: 0.8,
        patience: 0.3,
        adaptability: 0.4,
      },
      conservative: {
        bluffFrequency: 0.2,      // 不爱撒谎
        challengeThreshold: 0.8,  // 不爱质疑
        riskTolerance: 0.3,
        patience: 0.8,
        adaptability: 0.3,
      },
      balanced: {
        bluffFrequency: 0.5,
        challengeThreshold: 0.6,
        riskTolerance: 0.5,
        patience: 0.5,
        adaptability: 0.5,
      },
    };
    
    return traits[personality] || traits.balanced;
  }
  
  makeDecision(context: StrategyContext, config: AIConfig): AIDecision {
    const traits = this.getPersonalityTraits(config.personality);
    
    // 根据性格决定是否质疑
    const shouldChallenge = Math.random() > traits.challengeThreshold;
    
    if (shouldChallenge) {
      return {
        action: 'challenge',
        confidence: 0.5 + Math.random() * 0.5,
        reasoning: '根据性格倾向质疑',
        animationState: 'challenging',
      };
    }
    
    // 根据性格决定是否撒谎
    const shouldBluff = Math.random() < traits.bluffFrequency;
    
    // ...
  }
}
```

---

## 三、长期优化 (1-2周)

### 3.1 音效本地化 (P2-001)

**修复步骤**:

1. 下载音效文件到本地
```bash
mkdir -p public/sounds
# 下载所有音效到 public/sounds/
```

2. 修改 SoundManager.ts
```typescript
const SOUND_URLS: Record<SoundType, string> = {
  'bgm-menu': '/sounds/bgm-menu.mp3',
  'bgm-game': '/sounds/bgm-game.mp3',
  // ... 其他音效使用本地路径
};
```

---

### 3.2 移动端适配优化 (P2-002)

**修复方案**:

```css
/* global.css - 添加移动端优化 */

/* 小屏手机 */
@media (max-width: 480px) {
  .cg-game-table {
    font-size: 14px;
  }
  
  .cg-card {
    width: 35px;
    height: 52px;
  }
  
  .cg-player-hand {
    gap: 5px;
  }
  
  .cg-action-bar {
    flex-direction: column;
    gap: 0.5rem;
  }
  
  .cg-action-button {
    width: 100%;
    padding: 0.75rem;
  }
}

/* 平板 */
@media (min-width: 481px) and (max-width: 768px) {
  .cg-table-surface {
    max-width: 450px;
  }
  
  .cg-card {
    width: 45px;
    height: 67px;
  }
}

/* 横屏模式 */
@media (max-height: 500px) and (orientation: landscape) {
  .cg-opponent-area {
    display: none; /* 简化布局 */
  }
  
  .cg-game-log {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    max-height: 100px;
  }
}
```

---

### 3.3 类型统一 (P2-003)

**修复方案**:

```typescript
// types/index.ts - 统一导出
export * from './game.types';
export * from './ai.types';

// 统一Card类型
export interface GameCard {
  id: string;
  rank: 'Q' | 'K' | 'A' | 'JOKER';
  suit?: 'spades' | 'hearts' | 'clubs' | 'diamonds'; // 可选，用于视觉效果
  owner: 'player' | 'ai' | 'table' | null;
}

// 统一使用GameCard
// 删除 CardSystem.ts 中的独立Card定义
// 删除 ai.types.ts 中的AICard，统一使用GameCard
```

---

### 3.4 日志持久化 (P2-004)

**修复方案**:

```typescript
// utils/gameLog.ts
const LOG_KEY = 'code-geass-game-logs';

export interface GameLog {
  id: string;
  date: string;
  playerCharacter: CharacterId;
  result: 'win' | 'lose';
  playerScore: number;
  opponentScore: number;
  rounds: number;
}

export const gameLogStorage = {
  save(log: GameLog): void {
    const logs = this.loadAll();
    logs.unshift(log);
    // 只保留最近50条
    localStorage.setItem(LOG_KEY, JSON.stringify(logs.slice(0, 50)));
  },
  
  loadAll(): GameLog[] {
    try {
      const data = localStorage.getItem(LOG_KEY);
      return data ? JSON.parse(data) : [];
    } catch {
      return [];
    }
  },
  
  clear(): void {
    localStorage.removeItem(LOG_KEY);
  },
};

// App.tsx - 游戏结束时保存日志
const handleGameEnd = useCallback((result: 'win' | 'lose') => {
  gameLogStorage.save({
    id: Date.now().toString(),
    date: new Date().toISOString(),
    playerCharacter: selectedCharacter!,
    result,
    playerScore: gameState.playerScore,
    opponentScore: gameState.opponentScore,
    rounds: gameState.currentRound,
  });
}, [selectedCharacter, gameState]);
```

---

## 四、修复时间表

| 阶段 | 问题 | 预计工时 | 负责人 |
|------|------|---------|--------|
| **第1天** | P0-001 角色技能集成 | 1天 | 后端 |
| **第2天** | P0-002 骗子牌机制 | 1天 | 后端 |
| **第3天** | P1-001 多张出牌 | 1天 | 前端 |
| **第4天** | P1-003 手牌耗尽 | 0.5天 | 后端 |
| **第4天** | P1-004 数据持久化 | 0.5天 | 前端 |
| **第5天** | P1-002 AI性格 | 1天 | AI |
| **第6-7天** | P2-001 音效本地化 | 2天 | 资源 |
| **第8-10天** | P2-002 移动端适配 | 3天 | 前端 |
| **第11天** | P2-003 类型统一 | 1天 | 架构 |
| **第12天** | P2-004 日志持久化 | 0.5天 | 前端 |
| **第12天** | 集成测试 | 0.5天 | QA |

**总计**: 12天

---

## 五、修复验证清单

修复完成后，请验证以下功能：

### 5.1 角色技能验证
- [ ] 选择鲁鲁修，技能按钮可用
- [ ] 选择C.C.，Geass有50%免疫
- [ ] 选择朱雀，HP<=1时有额外抗性
- [ ] 选择卡莲，可出1-4张牌

### 5.2 骗子牌验证
- [ ] 出牌时可选择声称的骗子牌
- [ ] 质疑时正确判定真伪
- [ ] 撒谎者受到惩罚
- [ ] 说真话的质疑者受到惩罚

### 5.3 游戏流程验证
- [ ] 手牌耗尽后重新发牌
- [ ] 设置保存后刷新页面仍保留
- [ ] 游戏日志可查看历史

### 5.4 AI验证
- [ ] 激进AI更爱撒谎和质疑
- [ ] 保守AI更谨慎
- [ ] 不同难度AI行为有差异

### 5.5 兼容性验证
- [ ] 手机浏览器正常游戏
- [ ] 平板正常游戏
- [ ] 断网时音效正常（使用本地资源）

---

**文档结束**
