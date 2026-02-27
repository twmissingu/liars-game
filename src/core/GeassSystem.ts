/**
 * Geass判定系统 - GeassSystem.ts
 * 管理Geass的发动、命中判定和效果
 */

export interface GeassResult {
  activated: boolean;
  hit: boolean;
  message: string;
  damage: number;
  funnyAction?: string;
  newStats?: PlayerStats;
}

export interface PlayerStats {
  hp: number;
  maxHp: number;
  geassSuccessCount: number;
  geassFailCount: number;
}

export class GeassSystem {
  private readonly HIT_CHANCE = 1 / 3;  // 命中概率 1/3
  private readonly MAX_HP = 3;          // 最大生命值

  // 搞笑动作库
  private readonly funnyActions = [
    '😵 突然跳起了奇怪的舞蹈',
    '🙈 开始模仿猴子叫',
    '🤪 不停地说"披萨"',
    '😂 无法控制地大笑30秒',
    '🐔 学鸡打鸣',
    '🎭 开始背诵中二台词',
    '🍕 声称自己是披萨的化身',
    '🦋 追逐不存在的蝴蝶',
  ];

  /**
   * 创建初始玩家状态
   */
  createPlayerStats(): PlayerStats {
    return {
      hp: this.MAX_HP,
      maxHp: this.MAX_HP,
      geassSuccessCount: 0,
      geassFailCount: 0,
    };
  }

  /**
   * 判定Geass是否发动
   * @param triggerType 触发类型: 'challenge_success' | 'challenge_failed'
   */
  shouldActivateGeass(triggerType: 'challenge_success' | 'challenge_failed'): boolean {
    // Geass在质疑成功或失败时都可能发动
    // 这里根据游戏设计，可以调整发动条件
    return true; // 默认只要触发就进行判定
  }

  /**
   * 执行Geass判定
   * @param attacker 发动者: 'player' | 'ai'
   * @param target 目标: 'player' | 'ai'
   */
  executeGeass(attacker: string, target: string): GeassResult {
    const roll = Math.random();
    const hit = roll < this.HIT_CHANCE;

    if (hit) {
      const funnyAction = this.getRandomFunnyAction();
      const newStats = this.applyDamage(this.createPlayerStats(), 1);
      return {
        activated: true,
        hit: true,
        message: `Geass命中！`,
        damage: 1,
        funnyAction,
        newStats,
      };
    } else {
      return {
        activated: true,
        hit: false,
        message: `Geass未命中！`,
        damage: 0,
      };
    }
  }

  performGeass(target: string): GeassResult {
    return this.executeGeass('player', target);
  }

  /**
   * 获取随机搞笑动作
   */
  private getRandomFunnyAction(): string {
    return this.funnyActions[Math.floor(Math.random() * this.funnyActions.length)];
  }

  /**
   * 应用伤害
   */
  applyDamage(stats: PlayerStats, damage: number): PlayerStats {
    return {
      ...stats,
      hp: Math.max(0, stats.hp - damage),
    };
  }

  /**
   * 检查是否败北
   */
  isDefeated(stats: PlayerStats): boolean {
    return stats.hp <= 0;
  }

  /**
   * 记录Geass成功
   */
  recordGeassSuccess(stats: PlayerStats): PlayerStats {
    return {
      ...stats,
      geassSuccessCount: stats.geassSuccessCount + 1,
    };
  }

  /**
   * 记录Geass失败
   */
  recordGeassFail(stats: PlayerStats): PlayerStats {
    return {
      ...stats,
      geassFailCount: stats.geassFailCount + 1,
    };
  }

  /**
   * 获取命中概率描述
   */
  getHitChanceDescription(): string {
    return `${(this.HIT_CHANCE * 100).toFixed(1)}%`;
  }
}

export const geassSystem = new GeassSystem();
