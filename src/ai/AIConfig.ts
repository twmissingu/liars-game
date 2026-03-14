/**
 * AI系统配置和预设
 */
import { AIConfig, Difficulty, Personality } from '../types/ai.types';

// 默认配置
export const defaultAIConfig: AIConfig = {
  difficulty: 'normal',
  personality: 'balanced',
  reactionDelay: 1200,
  enableAnimation: true,
};

// 难度预设
export const difficultyPresets: Record<Difficulty, Partial<AIConfig>> = {
  easy: {
    difficulty: 'easy',
    reactionDelay: 800,
    enableAnimation: true,
  },
  normal: {
    difficulty: 'normal',
    reactionDelay: 1200,
    enableAnimation: true,
  },
  hard: {
    difficulty: 'hard',
    reactionDelay: 1500,
    enableAnimation: true,
  },
};

// 性格预设
export const personalityPresets: Record<
  Personality,
  {
    name: string;
    description: string;
    icon: string;
  }
> = {
  aggressive: {
    name: '激进型',
    description: '爱质疑，高风险高回报',
    icon: '🔥',
  },
  conservative: {
    name: '保守型',
    description: '少质疑，稳扎稳打',
    icon: '🛡️',
  },
  balanced: {
    name: '平衡型',
    description: '灵活调整，随机应变',
    icon: '⚖️',
  },
};

// AI名称生成器
export const aiNames = {
  easy: ['新手AI', '初级玩家', '学徒', '菜鸟'],
  normal: ['熟练AI', '中级玩家', '老手', '高手'],
  hard: ['大师AI', '专家玩家', '宗师', '传说'],
};

// 生成AI玩家配置
export function generateAIPlayerConfig(
  difficulty: Difficulty,
  personality: Personality,
  customName?: string
): {
  name: string;
  config: AIConfig;
} {
  const names = aiNames[difficulty];
  const randomName = names[Math.floor(Math.random() * names.length)];

  return {
    name: customName || `${randomName} ${personalityPresets[personality].icon}`,
    config: {
      ...defaultAIConfig,
      ...difficultyPresets[difficulty],
      personality,
    },
  };
}

// 动画时长配置
export const animationDurations = {
  thinking: { min: 500, max: 2000 },
  deciding: { min: 300, max: 800 },
  playing: 500,
  challenging: 600,
  reacting: 400,
};

// 情绪配置
export const emotionConfig = {
  confident: { color: '#48bb78', animation: 'pulse' },
  uncertain: { color: '#ed8936', animation: 'shake' },
  surprised: { color: '#e53e3e', animation: 'bounce' },
  calm: { color: '#4299e1', animation: 'none' },
};
