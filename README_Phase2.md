# Code Geass: Liar's Game - Phase 2: 角色系统

## 已完成内容

### 1. 角色基础模块 (`src/characters/`)

#### 类型定义 (`types.ts`)
- `CharacterId`: 角色ID类型 ('lelouch' | 'cc' | 'suzaku' | 'kallen')
- `Character`: 角色数据结构
- `CharacterSkill`: 技能定义
- `CharacterState`: 角色使用状态
- `CharacterSelection`: 角色选择信息

#### 角色数据 (`data.ts`)
| 角色 | 技能 | 类型 | 效果 |
|------|------|------|------|
| 鲁鲁修 | 绝对命令 | 主动 | 每局1次，强制指定骗子牌 |
| C.C. | 不老不死 | 被动 | Geass命中时50%免疫 |
| 朱雀 | 生存本能 | 被动 | HP≤1时Geass概率减半 |
| 卡莲 | 红莲突击 | 主动 | 可出1-4张牌 |

#### 状态管理 (`state.ts`)
- `createCharacterState()`: 创建初始状态
- `canUseSkill()`: 检查技能可用性
- `useSkill()`: 使用技能
- `checkGeassImmunity()`: C.C.免疫检查
- `getGeassResistance()`: 朱雀抗性计算
- `getMaxPlayCount()`: 卡莲出牌数

### 2. UI组件 (`src/components/`)

#### 角色选择界面 (`CharacterSelect.tsx`)
- 4角色网格展示
- 角色详情面板
- 选中状态高亮
- 禁用状态处理
- 确认选择流程

#### 角色头像 (`CharacterAvatar.tsx`)
- 4种尺寸 (small/medium/large/xlarge)
- 动画效果（呼吸、光环、粒子）
- 技能图标显示
- 选中状态光环

#### 技能特效 (`SkillEffects.tsx`)
- 鲁鲁修: Geass之眼动画 + 绝对命令文字
- C.C.: Code印记 + 粒子环绕
- 朱雀: 能量护盾 + 层叠扩散
- 卡莲: 火焰突击 + 斩击效果

#### 技能按钮 (`SkillButton`)
- 使用次数显示
- 冷却倒计时
- 可用/禁用状态
- 激活脉冲效果

### 3. 游戏引擎集成 (`src/core/CharacterIntegration.ts`)

- `selectCharacterForPlayer()`: 角色选择
- `canPlayerUseCharacterSkill()`: 技能可用检查
- `playerUseCharacterSkill()`: 技能使用
- `activateAbsoluteOrder()`: 鲁鲁修技能
- `tryGeassImmunity()`: C.C.免疫
- `calculateGeassChance()`: 朱雀抗性
- `getPlayerMaxPlayCount()`: 卡莲出牌

### 4. 状态管理 (`src/store/CharacterStore.ts`)

Zustand风格的Store实现：
- 角色选择状态
- 技能使用状态
- 技能特效触发
- 回合管理

## 文件结构

```
src/
├── characters/
│   ├── index.ts          # 模块入口
│   ├── types.ts          # 类型定义
│   ├── data.ts           # 角色数据
│   └── state.ts          # 状态管理
├── components/
│   ├── index.ts          # 组件入口
│   ├── CharacterSelect.tsx    # 角色选择
│   ├── CharacterSelect.css
│   ├── CharacterAvatar.tsx    # 角色头像
│   ├── CharacterAvatar.css
│   ├── SkillEffects.tsx       # 技能特效
│   └── SkillEffects.css
├── core/
│   ├── GameEngine.ts           # Phase 1游戏引擎
│   ├── CharacterIntegration.ts # Phase 2角色集成
│   └── index.ts
├── store/
│   ├── gameStore.ts       # Phase 1状态管理
│   └── CharacterStore.ts  # Phase 2角色状态
└── examples.tsx           # 使用示例
```

## 使用示例

### 基本用法

```tsx
import { CharacterSelect, SkillButton, SkillEffect } from './components';
import { useGameStore } from './store';

// 角色选择
function SelectionScreen() {
  return (
    <CharacterSelect
      onSelect={(id) => console.log('选中:', id)}
      onConfirm={(id) => console.log('确认:', id)}
      showConfirm
    />
  );
}

// 技能按钮
function SkillPanel() {
  const [active, setActive] = useState(false);
  
  return (
    <>
      <SkillButton
        characterId="lelouch"
        usesLeft={1}
        cooldown={0}
        onClick={() => setActive(true)}
      />
      <SkillEffect
        characterId="lelouch"
        isActive={active}
        onComplete={() => setActive(false)}
      />
    </>
  );
}
```

### Zustand集成

```tsx
import { create } from 'zustand';
import { createCharacterStore } from './store/CharacterStore';

export const useCharacterStore = create((set, get) => 
  createCharacterStore(set, get)
);

// 在组件中使用
function GameComponent() {
  const { selectCharacter, useCharacterSkill, canUseCharacterSkill } = useCharacterStore();
  // ...
}
```

## 与Phase 1对接

游戏引擎提供以下接口供Phase 1调用：

```ts
// 角色选择阶段
selectCharacterForPlayer(characterGameState, playerId, characterId)

// 技能检查
canPlayerUseCharacterSkill(characterGameState, playerId)

// 使用技能
playerUseCharacterSkill(characterGameState, playerId)

// 角色特定技能
activateAbsoluteOrder(characterGameState, playerId, targetCardId)
tryGeassImmunity(characterGameState, playerId)
calculateGeassChance(characterGameState, playerId, baseChance, currentHp)
getPlayerMaxPlayCount(characterGameState, playerId)
```

## Phase 1 + Phase 2 整合使用

```tsx
import { useGameStore } from './store/gameStore';        // Phase 1
import { useCharacterStore } from './store/CharacterStore'; // Phase 2

function Game() {
  // Phase 1: 游戏核心逻辑
  const { initializeGame, playerPlayCards, phase } = useGameStore();
  
  // Phase 2: 角色系统
  const { selectCharacter, useCharacterSkill, getMaxPlayCount } = useCharacterStore();
  
  // 卡莲技能：获取最大出牌数
  const maxCards = getMaxPlayCount();
  
  return (
    <div>
      {/* 角色选择阶段 */}
      {phase === 'setup' && (
        <CharacterSelect onConfirm={selectCharacter} />
      )}
      
      {/* 游戏进行阶段 */}
      {phase === 'player_turn' && (
        <>
          <Hand maxPlayCount={maxCards} />
          <SkillButton onClick={useCharacterSkill} />
        </>
      )}
    </div>
  );
}
```

## 后续建议

1. **美术资源**: 替换Q版emoji占位为实际角色立绘
2. **音效**: 添加技能发动音效
3. **网络同步**: 多人游戏状态同步
4. **AI角色**: 为电脑玩家实现角色选择逻辑
