/**
 * Code Geass: Liar's Game - 角色数据
 * 包含角色技能和描述
 */

import type { Character } from '../types';

export const characters: Character[] = [
  {
    id: 'lelouch',
    name: '鲁鲁修',
    nameEn: 'Lelouch',
    color: '#4c1d95',        // 深紫色
    secondaryColor: '#1e1b4b', // 更深紫
    accentColor: '#dc2626',  // Geass红
    description: '黑色骑士团的领袖，拥有Geass之力。可以强制改变骗子牌。',
    personality: 'calculating',
    pose: '思考姿势 - 单手托腮，眼神锐利',
    accessories: ['眼罩（遮住Geass之眼）', '黑色披风', '金色装饰'],
    skillName: '绝对命令',
    skillDescription: '可以强制指定骗子牌为任意点数',
  },
  {
    id: 'cc',
    name: 'C.C.',
    nameEn: 'C.C.',
    color: '#15803d',        // 绿色
    secondaryColor: '#14532d', // 深绿
    accentColor: '#fbbf24',  // 金色
    description: '赋予鲁鲁修Geass的神秘少女。首次濒死时50%概率复活。',
    personality: 'mysterious',
    pose: '慵懒姿势 - 手持披萨，侧躺',
    accessories: ['披萨', '白色拘束服', '绿色长发'],
    skillName: 'Code之力',
    skillDescription: '首次受到致命伤害时，50%概率复活并免疫本次伤害',
  },
  {
    id: 'suzaku',
    name: '枢木朱雀',
    nameEn: 'Suzaku',
    color: '#f8fafc',        // 白色
    secondaryColor: '#cbd5e1', // 浅灰
    accentColor: '#3b82f6',  // 蓝色
    description: '圆桌骑士，拥有超凡的战斗技巧。受到Geass时25%概率反击。',
    personality: 'passionate',
    pose: '热血姿势 - 握拳，充满干劲',
    accessories: ['骑士制服', '兰斯洛特徽章', '白色披风'],
    skillName: '枢木剑术',
    skillDescription: '受到Geass时25%概率反击，15%基础闪避率',
  },
  {
    id: 'kallen',
    name: '红月卡莲',
    nameEn: 'Kallen',
    color: '#dc2626',        // 红色
    secondaryColor: '#991b1b', // 深红
    accentColor: '#fbbf24',  // 金色
    description: '黑色骑士团的王牌驾驶员。可出1-4张牌，出2张及以上时质疑失败有额外惩罚。',
    personality: 'tsundere',
    pose: '傲娇姿势 - 双臂交叉，侧头',
    accessories: ['红色头巾', '驾驶服', '红莲徽章'],
    skillName: '红莲二式',
    skillDescription: '可出1-4张牌，出2张及以上时被质疑且质疑失败，Geass命中率+20%',
  },
];

// 角色颜色映射（用于Q版色块）
export const characterColors = {
  lelouch: {
    primary: '#4c1d95',      // 深紫
    secondary: '#2e1065',    // 更深紫
    highlight: '#7c3aed',    // 亮紫
    shadow: '#1e1b4b',       // 阴影紫
    eye: '#dc2626',          // Geass红
    outline: '#0a0a0f',      // 轮廓黑
  },
  cc: {
    primary: '#15803d',      // 绿
    secondary: '#166534',    // 深绿
    highlight: '#22c55e',    // 亮绿
    shadow: '#14532d',       // 阴影绿
    eye: '#fbbf24',          // 金
    outline: '#0a0a0f',
  },
  suzaku: {
    primary: '#f8fafc',      // 白
    secondary: '#e2e8f0',    // 浅灰
    highlight: '#ffffff',    // 纯白
    shadow: '#94a3b8',       // 阴影灰
    eye: '#3b82f6',          // 蓝
    outline: '#0a0a0f',
  },
  kallen: {
    primary: '#dc2626',      // 红
    secondary: '#b91c1c',    // 深红
    highlight: '#ef4444',    // 亮红
    shadow: '#7f1d1d',       // 阴影红
    eye: '#fbbf24',          // 金
    outline: '#0a0a0f',
  },
} as const;

// 动画配置
export const characterAnimations = {
  idle: {
    duration: 3000,
    easing: 'ease-in-out',
  },
  breathing: {
    duration: 3000,
    easing: 'ease-in-out',
  },
  playingCard: {
    duration: 400,
    easing: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
  },
  win: {
    duration: 1000,
    easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
  },
  lose: {
    duration: 800,
    easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
  },
} as const;

// 获取角色技能描述
export function getCharacterSkillDescription(characterId: string): { name: string; description: string } {
  const character = characters.find(c => c.id === characterId);
  if (!character) return { name: '', description: '' };
  return {
    name: character.skillName,
    description: character.skillDescription,
  };
}
