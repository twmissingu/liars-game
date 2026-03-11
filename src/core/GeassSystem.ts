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
   // 技能相关状态
   ccReviveUsed?: boolean;      // C.C.是否已使用复活
   suzakuCounterActive?: boolean; // 朱雀反击是否激活
   kallenBoostActive?: boolean;   // 卡莲爆发是否激活
}

export interface GeassResult {
  hit: boolean;
   damage: number;
   newStats: PlayerStats;
   funnyAction?: string;
   message: string;
   isImmune?: boolean;
   isRevived?: boolean;  // C.C.复活
   isCounter?: boolean;  // 朱雀反击
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
  /**
   * 执行Geass判定
   * @param target 目标玩家
   * @param targetStats 目标玩家状态
   * @param character 角色ID
   */
  performGeass(
    target: 'player' | 'ai' | 'ai2' | 'ai3',
    targetStats: PlayerStats,
    character: 'lelouch' | 'cc' | 'suzaku' | 'kallen' | null = null
  ): GeassResult {
    let hitChance = 1 / 3; // 基础1/3概率

    // ========== C.C.技能：Code之力（复活） ==========
    // 第一次受到致命伤害时，有50%概率复活并免疫本次伤害
    if (character === 'cc' && !targetStats.ccReviveUsed) {
      const reviveRoll = Math.random();
      if (reviveRoll < 0.5) {
        return {
          hit: false,
          damage: 0,
          newStats: { ...targetStats, ccReviveUsed: true },
          message: 'C.C.发动Code之力！从死亡边缘复活并免疫本次Geass！',
          isRevived: true,
        };
      }
    }

    // ========== 朱雀技能：枢木剑术（反击） ==========
    // 受到Geass时有25%概率反击，让攻击者承受伤害
    if (character === 'suzaku') {
      const counterRoll = Math.random();
      if (counterRoll < 0.25) {
        return {
          hit: false,
          damage: 0,
          newStats: targetStats,
          message: '朱雀发动枢木剑术！完美闪避并准备反击！',
          isCounter: true,
        };
      }
      // 朱雀有15%基础闪避率
      hitChance -= 0.15;
    }

    // ========== 卡莲技能：红莲二式（爆发） ==========
    // 卡莲没有防御技能，但出牌时可以爆发（在出牌逻辑中处理）
    // 这里只处理Geass命中判定

    // 确保概率在合理范围
    hitChance = Math.max(0.1, Math.min(0.9, hitChance));

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
   * 每局限用1次，可以强制改变当前骗子牌
   */
  lelouchAbsoluteCommand(newRank: CardRank): { success: boolean; message: string } {
    return {
      success: true,
      message: `鲁鲁修发动绝对命令！骗子牌变为 ${newRank}`,
    };
  }

  /**
   * C.C.技能：Code之力 - 获取技能描述
   */
  getCCSkillDescription(): string {
    return 'Code之力：首次受到致命伤害时，50%概率复活并免疫本次伤害（每局限1次）';
  }

  /**
   * 朱雀技能：枢木剑术 - 获取技能描述
   */
  getSuzakuSkillDescription(): string {
    return '枢木剑术：受到Geass时25%概率反击，15%基础闪避率';
  }

  /**
   * 卡莲技能：红莲二式 - 获取技能描述
   */
  getKallenSkillDescription(): string {
    return '红莲二式：可出1-4张牌，出3张及以上时Geass命中率+20%（高风险高回报）';
  }
}

export const geassSystem = new GeassSystem();
