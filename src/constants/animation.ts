/**
 * =============================================================================
 * Code Geass: Liar's Game - 动画时间常量
 * =============================================================================
 *
 * 集中管理所有动画持续时间，确保AI处理与动画呈现的同步
 *
 * 设计原则：
 * 1. 所有动画时间必须在此文件中定义，避免硬编码
 * 2. AI处理延迟必须与动画持续时间匹配
 * 3. 提供最小/推荐延迟时间供不同场景使用
 *
 * @module constants/animation
 * @version 1.0.0
 */

/** 动画持续时间配置（毫秒） */
export const ANIMATION_DURATION = {
  /** 出牌动画 - 统一为1500ms */
  PLAY: 1500,

  /** AI出牌动画 - 统一为1500ms */
  AI_PLAY: 1500,

  /** 质疑动画 - 统一为1500ms */
  CHALLENGE: 1500,

  /** 闪避动画 - 统一为1500ms */
  DODGE: 1500,

  /** 命中动画 - 统一为1500ms */
  HIT: 1500,

  /** 不质疑动画 - 统一为1500ms */
  SKIP: 1500,

  /** 回合切换动画 */
  TURN_TRANSITION: 500,

  /** 状态更新淡入淡出 */
  STATE_UPDATE: 300,

  /** 角色思考中指示器 */
  THINKING_INDICATOR: 800,
} as const;

/** AI处理延迟配置（毫秒） */
export const AI_DELAY = {
  /** AI思考时间 - 让玩家感知AI正在决策 */
  THINKING: 1000,

  /** AI出牌后等待质疑的时间 - 必须 >= 出牌动画时间 */
  PLAY_TO_CHALLENGE: 2000, // 1500ms动画 + 500ms缓冲

  /** 质疑后等待结算的时间 - 必须 >= 质疑动画时间 */
  CHALLENGE_TO_RESOLVE: 2000, // 1500ms动画 + 500ms缓冲

  /** Geass结果展示时间 - 必须 >= 闪避/命中动画时间 */
  GEASS_RESULT_DISPLAY: 2000, // 1500ms动画 + 500ms缓冲

  /** 回合切换延迟 */
  TURN_SWITCH: 1000,

  /** 新回合开始前的准备时间 */
  ROUND_START: 600,

  /** AI不质疑动画展示时间 */
  NO_CHALLENGE_DISPLAY: 1500,
} as const;

/** 动画与状态同步配置 */
export const SYNC_CONFIG = {
  /** 是否启用严格的动画同步模式 */
  STRICT_SYNC: true,

  /** 状态更新前的最小缓冲时间 */
  STATE_UPDATE_BUFFER: 100,

  /** 最大等待时间（防止无限等待） */
  MAX_WAIT_TIME: 5000,

  /** 是否启用AI思考指示器 */
  ENABLE_THINKING_INDICATOR: true,

  /** 是否等待动画完成后再更新状态 */
  WAIT_FOR_ANIMATION: true,
} as const;

/** 动画速度评估标准 */
export const ANIMATION_SPEED_STANDARDS = {
  /** 快速反馈 - 玩家操作后的即时响应 */
  INSTANT: { min: 0, max: 100, description: '即时响应，无感知延迟' },

  /** 短动画 - 出牌等简单操作 */
  SHORT: { min: 100, max: 500, description: '简短动画，快速完成' },

  /** 中等动画 - 质疑等重要操作 */
  MEDIUM: { min: 500, max: 1500, description: '中等动画，强调重要性' },

  /** 长动画 - Geass结算等戏剧性时刻 */
  LONG: { min: 1500, max: 2500, description: '长动画，营造戏剧效果' },

  /** 思考时间 - AI决策时间 */
  THINKING: { min: 800, max: 1500, description: 'AI思考时间，让玩家感知处理过程' },
} as const;

/**
 * 计算AI操作后的等待时间
 * @param animationType - 动画类型
 * @param buffer - 额外缓冲时间（毫秒）
 * @returns 总等待时间（毫秒）
 */
export function calculateWaitTime(
  animationType: keyof typeof ANIMATION_DURATION,
  buffer: number = SYNC_CONFIG.STATE_UPDATE_BUFFER
): number {
  return ANIMATION_DURATION[animationType] + buffer;
}

// 导出calculateWaitTime供外部使用
export { calculateWaitTime as _calculateWaitTime };

/**
 * 验证延迟配置是否合理
 * @returns 验证结果
 */
export function validateAnimationTiming(): { valid: boolean; issues: string[] } {
  const issues: string[] = [];

  // 检查AI延迟是否足够覆盖动画
  if (AI_DELAY.PLAY_TO_CHALLENGE < ANIMATION_DURATION.PLAY) {
    issues.push(`PLAY_TO_CHALLENGE (${AI_DELAY.PLAY_TO_CHALLENGE}ms) 小于 PLAY动画 (${ANIMATION_DURATION.PLAY}ms)`);
  }

  if (AI_DELAY.CHALLENGE_TO_RESOLVE < ANIMATION_DURATION.CHALLENGE) {
    issues.push(`CHALLENGE_TO_RESOLVE (${AI_DELAY.CHALLENGE_TO_RESOLVE}ms) 小于 CHALLENGE动画 (${ANIMATION_DURATION.CHALLENGE}ms)`);
  }

  if (AI_DELAY.GEASS_RESULT_DISPLAY < Math.max(ANIMATION_DURATION.DODGE, ANIMATION_DURATION.HIT)) {
    issues.push(`GEASS_RESULT_DISPLAY (${AI_DELAY.GEASS_RESULT_DISPLAY}ms) 小于 DODGE/HIT动画`);
  }

  // 检查思考时间是否在合理范围内
  const thinkingStandard = ANIMATION_SPEED_STANDARDS.THINKING;
  if (AI_DELAY.THINKING < thinkingStandard.min || AI_DELAY.THINKING > thinkingStandard.max) {
    issues.push(`THINKING延迟 (${AI_DELAY.THINKING}ms) 超出推荐范围 (${thinkingStandard.min}-${thinkingStandard.max}ms)`);
  }

  return {
    valid: issues.length === 0,
    issues,
  };
}

/**
 * 获取动画速度的评估等级
 * @param duration - 动画持续时间（毫秒）
 * @returns 速度等级
 */
export function getAnimationSpeedLevel(duration: number): keyof typeof ANIMATION_SPEED_STANDARDS {
  for (const [level, standard] of Object.entries(ANIMATION_SPEED_STANDARDS)) {
    if (duration >= standard.min && duration <= standard.max) {
      return level as keyof typeof ANIMATION_SPEED_STANDARDS;
    }
  }
  return duration < 100 ? 'INSTANT' : 'LONG';
}
