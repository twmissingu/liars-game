/**
 * 角色数据单元测试
 * 测试角色配置和数据
 */

import { 
  characters, 
  getCharacterById, 
  getCharacterName,
  CHARACTER_AVATARS,
  getRandomAvatar 
} from '../../src/data/characters';
import type { CharacterId } from '../../src/types';

describe('角色数据', () => {
  describe('角色列表', () => {
    test('应该有4个角色', () => {
      expect(characters).toHaveLength(4);
    });

    test('应该包含所有4个角色ID', () => {
      const ids = characters.map(c => c.id);
      expect(ids).toContain('lelouch');
      expect(ids).toContain('cc');
      expect(ids).toContain('suzaku');
      expect(ids).toContain('kallen');
    });
  });

  describe('鲁鲁修', () => {
    const lelouch = getCharacterById('lelouch');

    test('应该存在', () => {
      expect(lelouch).toBeDefined();
    });

    test('应该有正确的名称', () => {
      expect(lelouch?.name).toBe('鲁鲁修');
      expect(lelouch?.nameEn).toBe('Lelouch');
    });

    test('应该有技能名称和描述', () => {
      expect(lelouch?.skillName).toBe('绝对命令');
      expect(lelouch?.skillDescription).toBeDefined();
      expect(lelouch?.skillDescription.length).toBeGreaterThan(0);
    });

    test('应该有描述', () => {
      expect(lelouch?.description).toBeDefined();
      expect(lelouch?.description.length).toBeGreaterThan(0);
    });

    test('应该有颜色', () => {
      expect(lelouch?.color).toBeDefined();
      expect(lelouch?.color.startsWith('#')).toBe(true);
    });
  });

  describe('C.C.', () => {
    const cc = getCharacterById('cc');

    test('应该存在', () => {
      expect(cc).toBeDefined();
    });

    test('应该有正确的名称', () => {
      expect(cc?.name).toBe('C.C.');
      expect(cc?.nameEn).toBe('C.C.');
    });

    test('技能应该与复活相关', () => {
      expect(cc?.skillName).toBe('Code之力');
      expect(cc?.skillDescription).toContain('复活');
    });
  });

  describe('朱雀', () => {
    const suzaku = getCharacterById('suzaku');

    test('应该存在', () => {
      expect(suzaku).toBeDefined();
    });

    test('应该有正确的名称', () => {
      expect(suzaku?.name).toBe('朱雀');
      expect(suzaku?.nameEn).toBe('Suzaku');
    });

    test('技能应该与闪避/反击相关', () => {
      expect(suzaku?.skillName).toBe('枢木剑术');
    });
  });

  describe('卡莲', () => {
    const kallen = getCharacterById('kallen');

    test('应该存在', () => {
      expect(kallen).toBeDefined();
    });

    test('应该有正确的名称', () => {
      expect(kallen?.name).toBe('卡莲');
      expect(kallen?.nameEn).toBe('Kallen');
    });

    test('技能应该与多张出牌相关', () => {
      expect(kallen?.skillName).toBe('红莲二式');
    });
  });

  describe('getCharacterById', () => {
    test('应该能通过ID获取角色', () => {
      expect(getCharacterById('lelouch')).toBeDefined();
      expect(getCharacterById('cc')).toBeDefined();
      expect(getCharacterById('suzaku')).toBeDefined();
      expect(getCharacterById('kallen')).toBeDefined();
    });

    test('不存在的ID应该返回undefined', () => {
      expect(getCharacterById('non-existent')).toBeUndefined();
    });

    test('空字符串应该返回undefined', () => {
      expect(getCharacterById('')).toBeUndefined();
    });
  });

  describe('getCharacterName', () => {
    test('应该返回角色中文名', () => {
      expect(getCharacterName('lelouch')).toBe('鲁鲁修');
      expect(getCharacterName('cc')).toBe('C.C.');
      expect(getCharacterName('suzaku')).toBe('朱雀');
      expect(getCharacterName('kallen')).toBe('卡莲');
    });

    test('不存在的ID应该返回原ID', () => {
      expect(getCharacterName('unknown')).toBe('unknown');
    });
  });

  describe('角色头像', () => {
    test('每个角色应该有4个头像', () => {
      expect(CHARACTER_AVATARS['lelouch']).toHaveLength(4);
      expect(CHARACTER_AVATARS['cc']).toHaveLength(4);
      expect(CHARACTER_AVATARS['suzaku']).toHaveLength(4);
      expect(CHARACTER_AVATARS['kallen']).toHaveLength(4);
    });

    test('头像路径应该正确', () => {
      const lelouchAvatars = CHARACTER_AVATARS['lelouch'];
      lelouchAvatars.forEach((avatar, index) => {
        expect(avatar).toContain('/avatars/lelouch/');
        expect(avatar).toContain(`${index + 1}.png`);
      });
    });

    test('getRandomAvatar应该返回一个头像路径', () => {
      const avatar = getRandomAvatar('lelouch');
      expect(avatar).toBeDefined();
      expect(avatar.length).toBeGreaterThan(0);
      expect(CHARACTER_AVATARS['lelouch']).toContain(avatar);
    });

    test('getRandomAvatar对不存在的角色应该返回空字符串', () => {
      const avatar = getRandomAvatar('non-existent');
      expect(avatar).toBe('');
    });

    test('多次调用getRandomAvatar应该返回不同结果（概率性）', () => {
      const results = new Set();
      for (let i = 0; i < 20; i++) {
        results.add(getRandomAvatar('lelouch'));
      }
      // 至少应该看到2个不同的头像
      expect(results.size).toBeGreaterThan(1);
    });
  });

  describe('角色数据结构完整性', () => {
    test('每个角色应该有所有必要字段', () => {
      characters.forEach(character => {
        expect(character.id).toBeDefined();
        expect(character.name).toBeDefined();
        expect(character.nameEn).toBeDefined();
        expect(character.color).toBeDefined();
        expect(character.description).toBeDefined();
        expect(character.skillName).toBeDefined();
        expect(character.skillDescription).toBeDefined();
      });
    });

    test('ID应该是有效的CharacterId', () => {
      const validIds: CharacterId[] = ['lelouch', 'cc', 'suzaku', 'kallen'];
      characters.forEach(character => {
        expect(validIds).toContain(character.id);
      });
    });

    test('颜色应该是有效的十六进制格式', () => {
      characters.forEach(character => {
        expect(character.color).toMatch(/^#[0-9A-Fa-f]{6}$/);
      });
    });
  });
});
