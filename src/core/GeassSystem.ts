/**
 * =============================================================================
 * Code Geass: Liar's Game - Geass系统
 * =============================================================================
 *
 * Geass系统是游戏的核心惩罚机制：
 * - 质疑失败的一方需要接受Geass判定
 * - 基础命中率：1/3 (33.3%)
 * - 角色技能可影响命中率和效果
 *
 * 角色技能：
 * - C.C.: 首次致命伤害50%概率复活
 * - 朱雀: 25%概率反击，15%基础闪避
 * - 卡莲: 出牌张数增加命中率
 *
 * @author Code Agent
 * @version 2.0.0
 */

import type { CardRank, PlayerStats, GeassResult, CharacterId, FunnyAction } from '../types';
import {
  GEASS_BASE_HIT_CHANCE_FIRST,
  GEASS_BASE_HIT_CHANCE_SECOND,
  GEASS_BASE_HIT_CHANCE_THIRD,
  GEASS_HIT_CHANCE_MIN,
  GEASS_HIT_CHANCE_MAX,
  CC_REVIVE_CHANCE,
  SUZAKU_COUNTER_CHANCE,
  SUZAKU_DODGE_CHANCE,
  KALLEN_BOOST_PER_CARD,
  KALLEN_BOOST_MAX,
} from '../constants';

/**
 * 预定义的搞笑动作列表
 * Geass命中后，受害者需要执行的动作
 */
export const FUNNY_ACTIONS: FunnyAction[] = [
  { id: 0, emoji: '😵', description: '突然跳起了奇怪的舞蹈', soundType: 'sfx-funny-dance' },
  { id: 1, emoji: '🙈', description: '开始模仿猴子叫', soundType: 'sfx-funny-monkey' },
  { id: 2, emoji: '🤪', description: '不停地说"披萨"', soundType: 'sfx-funny-pizza' },
  { id: 3, emoji: '😂', description: '无法控制地大笑30秒', soundType: 'sfx-funny-laugh' },
  { id: 4, emoji: '🐔', description: '学鸡打鸣', soundType: 'sfx-funny-chicken' },
  { id: 5, emoji: '🎭', description: '开始背诵中二台词', soundType: 'sfx-funny-chunibyo' },
  { id: 6, emoji: '🍕', description: '声称自己是披萨的化身', soundType: 'sfx-funny-pizza' },
  { id: 7, emoji: '🦋', description: '追逐不存在的蝴蝶', soundType: 'sfx-funny-butterfly' },
];

/**
 * Geass系统类
 * 处理所有Geass判定和角色技能效果
 * 
 * 新的命中率机制：
 * - 第一次命中率：1/3 (33.3%)
 * - 如果闪避成功且其他玩家扣血前，下次命中率：1/2 (50%)
 * - 如果继续闪避成功且其他玩家扣血前，下次命中率：100%
 * - 有玩家扣血后，重置命中率为1/3
 */
export class GeassSystem {
  /**
   * 获取基础命中率
   * 根据连续闪避次数动态调整
   * @param consecutiveMisses - 连续闪避次数
   * @returns 基础命中率
   */
  private getBaseHitChance(consecutiveMisses: number): number {
    if (consecutiveMisses === 0) return GEASS_BASE_HIT_CHANCE_FIRST;
    if (consecutiveMisses === 1) return GEASS_BASE_HIT_CHANCE_SECOND;
    return GEASS_BASE_HIT_CHANCE_THIRD;
  }

  /**
   * 执行Geass判定
   *
   * @param target - 目标玩家ID
   * @param targetStats - 目标玩家当前状态
   * @param character - 目标角色ID
   * @param hitChanceBoost - 命中率加成（如卡莲技能）
   * @param consecutiveMisses - 连续闪避次数
   * @param attackerId - 攻击者ID（用于反击时确定目标）
   * @returns Geass判定结果
   */
  performGeass(
    target: 'player' | 'ai' | 'ai2' | 'ai3',
    targetStats: PlayerStats,
    character: CharacterId | null = null,
    hitChanceBoost: number = 0,
    consecutiveMisses: number = 0,
    attackerId?: 'player' | 'ai' | 'ai2' | 'ai3'
  ): GeassResult {
    // 根据连续闪避次数获取基础命中率
    let hitChance = this.getBaseHitChance(consecutiveMisses);

    // 应用命中率加成
    hitChance += hitChanceBoost;

    // ========== C.C.技能：Code之力（复活） ==========
    // 第一次受到致命伤害时（HP会减少到0），有50%概率复活并免疫本次伤害
    if (character === 'cc' && !targetStats.ccReviveUsed) {
      const roll = Math.random();
      const willHit = roll < hitChance;

      // 如果会命中且会导致HP归零，触发复活
      if (willHit && targetStats.hp <= 1) {
        const reviveRoll = Math.random();
        if (reviveRoll < CC_REVIVE_CHANCE) {
          return {
            activated: true,
            hit: false,
            damage: 0,
            newStats: {
              ...targetStats,
              hp: 1,  // 显式设置HP为1
              ccReviveUsed: true,
            },
            message: 'C.C.发动Code之力！从死亡边缘复活并免疫本次Geass！',
            isRevived: true,
            victimId: target,
          };
        }
      }
    }

    // ========== 朱雀技能：枢木剑术（闪避+反击） ==========
    // 受到Geass时有15%概率完全闪避，闪避成功后25%概率反击
    if (character === 'suzaku') {
      // 独立闪避判定（15%）
      const dodgeRoll = Math.random();
      console.log(`[GeassSystem] 朱雀闪避判定: roll=${dodgeRoll.toFixed(4)}, threshold=${SUZAKU_DODGE_CHANCE}`);
      if (dodgeRoll < SUZAKU_DODGE_CHANCE) {
        // 闪避成功后进行反击判定（25%）
        const counterRoll = Math.random();
        console.log(`[GeassSystem] 朱雀反击判定: roll=${counterRoll.toFixed(4)}, threshold=${SUZAKU_COUNTER_CHANCE}`);
        if (counterRoll < SUZAKU_COUNTER_CHANCE) {
          console.log(`[GeassSystem] 朱雀反击成功触发! target=${target}, attacker=${attackerId}, counterDamage=1`);
          const result: GeassResult = {
            activated: true,
            hit: false,
            damage: 0,
            newStats: targetStats,
            message: '朱雀发动枢木剑术！完美闪避并反击！',
            isCounter: true,
            isDodge: true,
            victimId: target,
            counterDamage: 1,  // 反击伤害为1
          };
          // 只有在有攻击者ID时才设置反击目标
          if (attackerId) {
            result.counterTargetId = attackerId;
          }
          return result;
        }
        // 闪避成功但反击失败
        console.log(`[GeassSystem] 朱雀闪避成功，但反击未触发`);
        return {
          activated: true,
          hit: false,
          damage: 0,
          newStats: targetStats,
          message: '朱雀发动枢木剑术！完美闪避！',
          isDodge: true,
          victimId: target,
        };
      }
    }

    // 确保概率在合理范围（但允许连续闪避后的100%命中率）
    if (consecutiveMisses < 2) {
      hitChance = Math.max(GEASS_HIT_CHANCE_MIN, Math.min(GEASS_HIT_CHANCE_MAX, hitChance));
    }

    // 计算是否命中
    const roll = Math.random();
    const hit = roll < hitChance;

    if (hit) {
      // Geass命中
      const damage = 1;
      const newStats = {
        ...targetStats,
        hp: Math.max(0, targetStats.hp - damage),
        geassSuccessCount: targetStats.geassSuccessCount + 1,
      };

      // 随机选择一个搞笑动作
      const funnyAction = FUNNY_ACTIONS[Math.floor(Math.random() * FUNNY_ACTIONS.length)];

      return {
        activated: true,
        hit: true,
        damage,
        newStats,
        funnyAction: funnyAction.description,
        message: `Geass命中！${funnyAction.emoji} ${funnyAction.description}`,
        victimId: target,
      };
    } else {
      // Geass未命中
      return {
        activated: true,
        hit: false,
        damage: 0,
        newStats: {
          ...targetStats,
          geassFailCount: targetStats.geassFailCount + 1,
        },
        message: 'Geass未命中！',
        victimId: target,
      };
    }
  }

  /**
   * 计算卡莲技能加成
   * 出2张+被质疑且质疑失败，Geass命中率加成：
   * - 2张牌: +20%
   * - 3张牌: +40%
   * - 4张牌: +60%
   *
   * @param cardCount - 出牌张数
   * @returns 命中率加成
   */
  calculateKallenBoost(cardCount: number): number {
    if (cardCount < 2) return 0;
    // 从第2张牌开始计算加成，每张牌+20%
    return Math.min(KALLEN_BOOST_MAX, KALLEN_BOOST_PER_CARD * (cardCount - 1));
  }

  /**
   * 鲁鲁修技能：绝对命令
   * 强制指定骗子牌
   *
   * @param newRank - 新的骗子牌点数
   * @returns 技能执行结果
   */
  lelouchAbsoluteCommand(newRank: CardRank): { success: boolean; message: string } {
    return {
      success: true,
      message: `鲁鲁修发动绝对命令！骗子牌变为 ${newRank}`,
    };
  }

  /**
   * 获取角色技能描述
   *
   * @param character - 角色ID
   * @returns 技能描述
   */
  getSkillDescription(character: CharacterId): string {
    const descriptions: Record<CharacterId, string> = {
      lelouch: '绝对命令：每局限用1次，强制将当前骗子牌改为任意点数（Q/K/A）',
      cc: 'Code之力：首次受到致命伤害时，50%概率复活并免疫本次伤害（每局限1次）',
      suzaku: '枢木剑术：受到Geass时25%概率反击，15%基础闪避率',
      kallen: '红莲二式：可出1-4张牌，出2张+被质疑且质疑失败，Geass命中率=20%×出牌张数',
    };
    return descriptions[character];
  }

  /**
   * 获取C.C.技能描述
   *
   * @returns C.C.技能描述
   */
  getCCSkillDescription(): string {
    return 'C.C. - Code之力：首次受到致命伤害时，50%概率复活并免疫本次伤害（每局限1次）';
  }

  /**
   * 获取朱雀技能描述
   *
   * @returns 朱雀技能描述
   */
  getSuzakuSkillDescription(): string {
    return '朱雀 - 枢木剑术：受到Geass时25%概率反击，15%基础闪避率';
  }

  /**
   * 获取卡莲技能描述
   *
   * @returns 卡莲技能描述
   */
  getKallenSkillDescription(): string {
    return '卡莲 - 红莲二式：可出1-4张牌，出2张+被质疑且质疑失败，Geass命中率=20%×出牌张数';
  }
}

/**
 * Geass系统单例
 */
export const geassSystem = new GeassSystem();

// ============================================
// 导出类型
// ============================================

export type { PlayerStats, GeassResult };
