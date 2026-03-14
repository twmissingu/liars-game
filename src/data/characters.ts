import type { Character } from '../types';

// 角色头像配置 - 每个角色4张备选头像
export const CHARACTER_AVATARS: Record<string, string[]> = {
  'lelouch': [
    '/avatars/lelouch/1.png',
    '/avatars/lelouch/2.png',
    '/avatars/lelouch/3.png',
    '/avatars/lelouch/4.png'
  ],
  'cc': [
    '/avatars/cc/1.png',
    '/avatars/cc/2.png',
    '/avatars/cc/3.png',
    '/avatars/cc/4.png'
  ],
  'suzaku': [
    '/avatars/suzaku/1.png',
    '/avatars/suzaku/2.png',
    '/avatars/suzaku/3.png',
    '/avatars/suzaku/4.png'
  ],
  'kallen': [
    '/avatars/kallen/1.png',
    '/avatars/kallen/2.png',
    '/avatars/kallen/3.png',
    '/avatars/kallen/4.png'
  ]
};

// 随机获取角色头像
export function getRandomAvatar(characterId: string): string {
  const avatars = CHARACTER_AVATARS[characterId];
  if (!avatars || avatars.length === 0) return '';
  return avatars[Math.floor(Math.random() * avatars.length)];
}

export const characters: Character[] = [
  {
    id: 'lelouch',
    name: '鲁鲁修',
    nameEn: 'Lelouch',
    nameJa: 'ルルーシュ',
    faction: 'black-knights',
    avatar: '🔮',
    color: '#d4af37',
    description: '布里塔尼亚帝国王子，拥有Geass之力',
    skill: {
      id: 'absolute-order',
      name: '绝对命令',
      nameEn: 'Absolute Order',
      description: '强制改变骗子牌（每局限用1次）',
      type: 'active',
      target: 'card',
      maxUses: 1,
      cooldown: 0,
      effect: {
        type: 'force-liar',
        value: true,
      },
      icon: '👁️',
    },
    stats: {
      hp: 3,
      difficulty: 4,
    },
  },
  {
    id: 'cc',
    name: 'C.C.',
    nameEn: 'C.C.',
    nameJa: 'シーツー',
    faction: 'neutral',
    avatar: '🧀',
    color: '#22c55e',
    description: '神秘的魔女，拥有Code之力赋予的不死之身',
    skill: {
      id: 'code-power',
      name: 'Code之力',
      nameEn: 'Code Power',
      description: '首次濒死50%复活（每局限1次）',
      type: 'passive',
      target: 'self',
      maxUses: -1,
      cooldown: 0,
      effect: {
        type: 'geass-immunity',
        value: 0.5,
      },
      icon: '♾️',
    },
    stats: {
      hp: 3,
      difficulty: 2,
    },
  },
  {
    id: 'suzaku',
    name: '朱雀',
    nameEn: 'Suzaku',
    nameJa: 'スザク',
    faction: 'britannia',
    avatar: '⚔️',
    color: '#3b82f6',
    description: '枢木朱雀，拥有超群的战斗技巧',
    skill: {
      id: 'suzaku-sword',
      name: '枢木剑术',
      nameEn: 'Suzaku Sword',
      description: '15%闪避 + 25%反击',
      type: 'passive',
      target: 'self',
      maxUses: -1,
      cooldown: 0,
      effect: {
        type: 'geass-resistance',
        value: 0.25,
      },
      icon: '🛡️',
    },
    stats: {
      hp: 4,
      difficulty: 2,
    },
  },
  {
    id: 'kallen',
    name: '卡莲',
    nameEn: 'Kallen',
    nameJa: 'カレン',
    faction: 'black-knights',
    avatar: '🔥',
    color: '#dc2626',
    description: '红月卡莲，黑色骑士团王牌驾驶员',
    skill: {
      id: 'guren-assault',
      name: '红莲二式',
      nameEn: 'Guren Assault',
      description: '出2张+且质疑失败，Geass命中率=20%×N',
      type: 'active',
      target: 'self',
      maxUses: -1,
      cooldown: 1,
      effect: {
        type: 'multi-play',
        value: 4,
      },
      icon: '⚡',
    },
    stats: {
      hp: 3,
      difficulty: 3,
    },
  }
];

export function getCharacterById(id: string): Character | undefined {
  return characters.find(c => c.id === id);
}

export function getCharacterName(characterId: string): string {
  const char = getCharacterById(characterId);
  return char?.name || characterId;
}
