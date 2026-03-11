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
    color: '#d4af37',
    description: '布里塔尼亚帝国王子，拥有Geass之力',
    skillName: '绝对命令',
    skillDescription: '强制改变骗子牌（每局限用1次）'
  },
  {
    id: 'cc',
    name: 'C.C.',
    nameEn: 'C.C.',
    color: '#22c55e',
    description: '神秘的魔女，拥有Code之力赋予的不死之身',
    skillName: 'Code之力',
    skillDescription: '首次濒死50%复活（每局限1次）'
  },
  {
    id: 'suzaku',
    name: '朱雀',
    nameEn: 'Suzaku',
    color: '#3b82f6',
    description: '枢木朱雀，拥有超群的战斗技巧',
    skillName: '枢木剑术',
    skillDescription: '15%闪避 + 25%反击'
  },
  {
    id: 'kallen',
    name: '卡莲',
    nameEn: 'Kallen',
    color: '#dc2626',
    description: '红月卡莲，黑色骑士团王牌驾驶员',
    skillName: '红莲二式',
    skillDescription: '出2张+且质疑失败，Geass命中率=20%×N'
  }
];

export function getCharacterById(id: string): Character | undefined {
  return characters.find(c => c.id === id);
}

export function getCharacterName(characterId: string): string {
  const char = getCharacterById(characterId);
  return char?.name || characterId;
}
