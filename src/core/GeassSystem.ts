/**
 * Code Geass: Liar's Game - Geass系统
 * 包含角色技能效果
 */

import type { CardRank } from './CardSystem';

export interface PlayerStats {
  hp: number;
  maxHp: number;
  geassSuccessCount: number;
  geassFailCount: number;
  geassImmunity?: boolean; // C.C.技能：免疫Geass
  geassResistance?: number; // 朱雀技能：Geass抗性
}

export interface GeassResult {
  hit: boolean;
  damage: number;
  newStats: PlayerStats;
  funnyAction?: string;
  message: string;
  isImmune?: boolean; // 是否免疫
}

export const FUNNY_ACTIONS = [
  { emoji: '😵', description: '突然跳起了奇怪的舞蹈', soundType: 'sfx-funny-dance' },
  { emoji: '🙈', description: '开始模仿猴子叫', soundType: 'sfx-funny-monkey' },
  { emoji: '🤪', description: '不停地说"披萨"', soundType: 'sfx-funny-pizza' },
  { emoji: '😂', description: '无法控制地大笑30秒', soundType: 'sfx-funny-laugh' },
  { emoji: '🐔', description: '学鸡打鸣', soundType: 'sfx-funny-chicken' },
  { emoji: '🎭', description: '开始背诵中二台词', soundType: 'sfx-funny-chunibyo' },
  { emoji: '🍕', description: '声称自己是披萨的化身', soundType: 'sfx-funny-pizza' },
  { emoji: '🦋', description: '追逐不存在的蝴蝶', soundType: 'sfx-funny-butterfly' },
];

export class GeassSystem {
  private randomSeed: number = 0;

  /**
   * 执行Geass判定
   * @param target 目标玩家
   * @param targetStats 目标玩家状态
   * @param isCC 是否是C.C.（50%免疫）
   * @param isSuzakuLowHP 朱雀是否HP≤1（抗性提升）
   */
  performGeass(
    target: 'player' | 'ai' | 'ai2' | 'ai3',
    targetStats: PlayerStats,
    isCC: boolean = false,
    isSuzakuLowHP: boolean = false
  ): GeassResult {
    let hitChance = 1 / 3; // 基础1/3概率

    // C.C.技能：50%免疫Geass
    if (isCC) {
      const immuneRoll = Math.random();
      if (immuneRoll < 0.5) {
        return {
          hit: false,
          damage: 0,
          newStats: targetStats,
          message: 'C.C.的不老不死之力免疫了Geass！',
          isImmune: true,
        };
      }
    }

    // 朱雀技能：HP≤1时Geass概率减半
    if (isSuzakuLowHP) {
      hitChance = hitChance / 2;
    }

    // 计算是否命中
    const roll = Math.random();
    const hit = roll < hitChance;

    if (hit) {
      const damage = 1;
      const newStats = {
        ...targetStats,
        hp: Math.max(0, targetStats.hp - damage),
        geassSuccessCount: targetStats.geassSuccessCount + 1,
      };

      const funnyAction = FUNNY_ACTIONS[Math.floor(Math.random() * FUNNY_ACTIONS.length)];

      return {
        hit: true,
        damage,
        newStats,
        funnyAction: funnyAction.description,
        message: `Geass命中！${funnyAction.emoji} ${funnyAction.description}`,
      };
    } else {
      return {
        hit: false,
        damage: 0,
        newStats: {
          ...targetStats,
          geassFailCount: targetStats.geassFailCount + 1,
        },
        message: 'Geass未命中！',
      };
    }
  }

  /**
   * 鲁鲁修技能：绝对命令 - 强制指定骗子牌
   */
  lelouchAbsoluteCommand(newRank: CardRank): { success: boolean; message: string } {
    return {
      success: true,
      message: `鲁鲁修发动绝对命令！骗子牌变为 ${newRank}`,
    };
  }

  /**
   * 卡莲技能：红莲突击 - 检查是否可以出多张牌
   */
  kallenRedLotusAssault(cardCount: number): { allowed: boolean; maxCards: number; message: string } {
    const maxCards = 4;
    if (cardCount > maxCards) {
      return {
        allowed: false,
        maxCards,
        message: `红莲突击最多只能出${maxCards}张牌`,
      };
    }
    return {
      allowed: true,
      maxCards,
      message: `红莲突击！出了${cardCount}张牌`,
    };
  }
}

export const geassSystem = new GeassSystem();
