/**
 * CharacterState 单元测试
 * 测试角色状态管理
 */

import {
  createCharacterState,
  canUseSkill,
  applySkill,
  resetSkill,
  onTurnEnd,
  getSkillStatusText,
  checkGeassImmunity,
  getGeassResistance,
  getMaxPlayCount,
  canUseAbsoluteOrder,
} from '../../src/characters/state';
import type { CharacterId, CharacterState } from '../../src/types';

describe('CharacterState', () => {
  describe('createCharacterState', () => {
    test('应该为鲁鲁修创建正确的初始状态', () => {
      const state = createCharacterState('lelouch');

      expect(state.characterId).toBe('lelouch');
      expect(state.skillUsesRemaining).toBeDefined();
      expect(state.cooldownRemaining).toBe(0);
      expect(state.isSkillActive).toBe(false);
    });

    test('应该为C.C.创建正确的初始状态', () => {
      const state = createCharacterState('cc');

      expect(state.characterId).toBe('cc');
      expect(state.skillUsesRemaining).toBeDefined();
      expect(state.cooldownRemaining).toBe(0);
    });

    test('应该为朱雀创建正确的初始状态', () => {
      const state = createCharacterState('suzaku');

      expect(state.characterId).toBe('suzaku');
      expect(state.skillUsesRemaining).toBeDefined();
    });

    test('应该为卡莲创建正确的初始状态', () => {
      const state = createCharacterState('kallen');

      expect(state.characterId).toBe('kallen');
      expect(state.skillUsesRemaining).toBeDefined();
    });

    test('所有角色都有完整的初始状态', () => {
      const characters: CharacterId[] = ['lelouch', 'cc', 'suzaku', 'kallen'];

      characters.forEach(char => {
        const state = createCharacterState(char);
        expect(state.characterId).toBe(char);
        expect(state.skillUsesRemaining).toBeDefined();
        expect(state.cooldownRemaining).toBeDefined();
        expect(state.isSkillActive).toBeDefined();
      });
    });

    test('无效角色ID返回默认状态', () => {
      const state = createCharacterState('invalid' as CharacterId);

      expect(state.characterId).toBe('invalid');
      expect(state.skillUsesRemaining).toBe(0);
    });
  });

  describe('canUseSkill', () => {
    test('鲁鲁修有技能次数时可以使用', () => {
      const state = createCharacterState('lelouch');
      expect(canUseSkill(state)).toBe(true);
    });

    test('鲁鲁修使用次数耗尽后不能使用', () => {
      const state = createCharacterState('lelouch');
      // 模拟使用次数耗尽
      const usedState = { ...state, skillUsesRemaining: 0 };
      expect(canUseSkill(usedState)).toBe(false);
    });

    test('朱雀被动技能不能主动使用', () => {
      const state = createCharacterState('suzaku');
      expect(canUseSkill(state)).toBe(false);
    });

    test('卡莲技能可以使用', () => {
      const state = createCharacterState('kallen');
      expect(canUseSkill(state)).toBe(true);
    });

    test('C.C.技能是被动技能，不能主动使用', () => {
      const state = createCharacterState('cc');
      expect(canUseSkill(state)).toBe(false);
    });

    test('冷却中时不能使用技能', () => {
      const state = createCharacterState('lelouch');
      const coolingState = { ...state, cooldownRemaining: 2 };
      expect(canUseSkill(coolingState)).toBe(false);
    });

    test('无效角色ID不能使用技能', () => {
      const state = createCharacterState('invalid' as CharacterId);
      expect(canUseSkill(state)).toBe(false);
    });
  });

  describe('applySkill', () => {
    test('鲁鲁修使用技能后减少使用次数', () => {
      const state = createCharacterState('lelouch');
      const initialUses = state.skillUsesRemaining;

      const newState = applySkill(state);

      expect(newState.skillUsesRemaining).toBe(initialUses - 1);
      expect(newState.isSkillActive).toBe(true);
    });

    test('使用技能后进入冷却', () => {
      const state = createCharacterState('kallen'); // 使用有冷却的角色

      const newState = applySkill(state);

      expect(newState.cooldownRemaining).toBeGreaterThan(0);
    });

    test('不能使用技能时状态不变', () => {
      const state = createCharacterState('suzaku'); // 被动技能
      const newState = applySkill(state);

      expect(newState).toEqual(state);
    });

    test('无效角色ID应用技能不改变状态', () => {
      const state = createCharacterState('invalid' as CharacterId);
      const newState = applySkill(state);

      expect(newState).toEqual(state);
    });
  });

  describe('resetSkill', () => {
    test('重置后恢复使用次数', () => {
      const state = createCharacterState('lelouch');
      const usedState = { ...state, skillUsesRemaining: 0 };

      const newState = resetSkill(usedState);

      expect(newState.skillUsesRemaining).toBeGreaterThan(0);
    });

    test('重置后清除冷却', () => {
      const state = createCharacterState('lelouch');
      const coolingState = { ...state, cooldownRemaining: 2 };

      const newState = resetSkill(coolingState);

      expect(newState.cooldownRemaining).toBe(0);
    });

    test('重置后技能激活状态为false', () => {
      const state = createCharacterState('lelouch');
      const activeState = { ...state, isSkillActive: true };

      const newState = resetSkill(activeState);

      expect(newState.isSkillActive).toBe(false);
    });

    test('无效角色ID重置返回默认状态', () => {
      const state = createCharacterState('invalid' as CharacterId);
      const newState = resetSkill(state);

      expect(newState.skillUsesRemaining).toBe(0);
      expect(newState.cooldownRemaining).toBe(0);
    });
  });

  describe('onTurnEnd', () => {
    test('回合结束减少冷却', () => {
      const state = createCharacterState('lelouch');
      const coolingState = { ...state, cooldownRemaining: 2 };

      const newState = onTurnEnd(coolingState);

      expect(newState.cooldownRemaining).toBe(1);
    });

    test('冷却为0时保持为0', () => {
      const state = createCharacterState('lelouch');

      const newState = onTurnEnd(state);

      expect(newState.cooldownRemaining).toBe(0);
    });

    test('回合结束重置技能激活状态', () => {
      const state = createCharacterState('lelouch');
      const activeState = { ...state, isSkillActive: true };

      const newState = onTurnEnd(activeState);

      expect(newState.isSkillActive).toBe(false);
    });
  });

  describe('getSkillStatusText', () => {
    test('被动技能显示被动生效中', () => {
      const state = createCharacterState('suzaku');
      const text = getSkillStatusText(state);

      expect(text).toBe('被动生效中');
    });

    test('冷却中显示冷却回合', () => {
      const state = createCharacterState('lelouch');
      const coolingState = { ...state, cooldownRemaining: 2 };
      const text = getSkillStatusText(coolingState);

      expect(text).toContain('冷却中');
    });

    test('可使用显示可使用', () => {
      const state = createCharacterState('lelouch');
      const text = getSkillStatusText(state);

      expect(text).toBe('可使用');
    });

    test('使用次数耗尽显示已用完', () => {
      const state = createCharacterState('lelouch');
      const usedState = { ...state, skillUsesRemaining: 0 };
      const text = getSkillStatusText(usedState);

      expect(text).toBe('已用完');
    });

    test('无效角色ID显示不可用', () => {
      const state = createCharacterState('invalid' as CharacterId);
      const text = getSkillStatusText(state);

      expect(text).toBe('不可用');
    });
  });

  describe('checkGeassImmunity', () => {
    test('C.C.有概率免疫Geass', () => {
      const state = createCharacterState('cc');

      // 多次测试，应该有概率免疫
      let immuneCount = 0;
      for (let i = 0; i < 100; i++) {
        if (checkGeassImmunity(state)) {
          immuneCount++;
        }
      }

      // 概率应该在40-60%之间
      expect(immuneCount).toBeGreaterThan(30);
      expect(immuneCount).toBeLessThan(70);
    });

    test('非C.C.角色不能免疫Geass', () => {
      const lelouch = createCharacterState('lelouch');
      const suzaku = createCharacterState('suzaku');
      const kallen = createCharacterState('kallen');

      expect(checkGeassImmunity(lelouch)).toBe(false);
      expect(checkGeassImmunity(suzaku)).toBe(false);
      expect(checkGeassImmunity(kallen)).toBe(false);
    });
  });

  describe('getGeassResistance', () => {
    test('朱雀HP>1时抗性为1', () => {
      const state = createCharacterState('suzaku');
      const resistance = getGeassResistance(state, 2);

      expect(resistance).toBe(1);
    });

    test('朱雀HP<=1时抗性减半', () => {
      const state = createCharacterState('suzaku');
      const resistance = getGeassResistance(state, 1);

      expect(resistance).toBe(0.5);
    });

    test('非朱雀角色抗性为1', () => {
      const lelouch = createCharacterState('lelouch');
      const cc = createCharacterState('cc');
      const kallen = createCharacterState('kallen');

      expect(getGeassResistance(lelouch, 1)).toBe(1);
      expect(getGeassResistance(cc, 1)).toBe(1);
      expect(getGeassResistance(kallen, 1)).toBe(1);
    });
  });

  describe('getMaxPlayCount', () => {
    test('卡莲技能可用时最大出牌数为4', () => {
      const state = createCharacterState('kallen');
      const maxCount = getMaxPlayCount(state);

      expect(maxCount).toBe(4);
    });

    test('卡莲技能不可用时最大出牌数为1', () => {
      const state = createCharacterState('kallen');
      // 冷却中时技能不可用
      const usedState = { ...state, cooldownRemaining: 1 };
      const maxCount = getMaxPlayCount(usedState);

      expect(maxCount).toBe(1);
    });

    test('非卡莲角色最大出牌数为1', () => {
      const lelouch = createCharacterState('lelouch');
      const cc = createCharacterState('cc');
      const suzaku = createCharacterState('suzaku');

      expect(getMaxPlayCount(lelouch)).toBe(1);
      expect(getMaxPlayCount(cc)).toBe(1);
      expect(getMaxPlayCount(suzaku)).toBe(1);
    });
  });

  describe('canUseAbsoluteOrder', () => {
    test('鲁鲁修可以发动绝对命令', () => {
      const state = createCharacterState('lelouch');
      expect(canUseAbsoluteOrder(state)).toBe(true);
    });

    test('鲁鲁修使用次数耗尽后不能发动', () => {
      const state = createCharacterState('lelouch');
      const usedState = { ...state, skillUsesRemaining: 0 };
      expect(canUseAbsoluteOrder(usedState)).toBe(false);
    });

    test('非鲁鲁修角色不能发动绝对命令', () => {
      const cc = createCharacterState('cc');
      const suzaku = createCharacterState('suzaku');
      const kallen = createCharacterState('kallen');

      expect(canUseAbsoluteOrder(cc)).toBe(false);
      expect(canUseAbsoluteOrder(suzaku)).toBe(false);
      expect(canUseAbsoluteOrder(kallen)).toBe(false);
    });
  });

  describe('角色特定行为', () => {
    test('鲁鲁修可以多次重置技能使用', () => {
      const state = createCharacterState('lelouch');
      const initialUses = state.skillUsesRemaining;

      // 使用技能
      let newState = applySkill(state);
      expect(newState.skillUsesRemaining).toBe(initialUses - 1);

      // 重置
      newState = resetSkill(newState);
      expect(newState.skillUsesRemaining).toBe(initialUses);

      // 再次使用
      newState = applySkill(newState);
      expect(newState.skillUsesRemaining).toBe(initialUses - 1);
    });

    test('C.C.免疫概率约50%', () => {
      const state = createCharacterState('cc');

      let immuneCount = 0;
      const trials = 1000;

      for (let i = 0; i < trials; i++) {
        if (checkGeassImmunity(state)) {
          immuneCount++;
        }
      }

      const immuneRate = immuneCount / trials;
      // 允许5%误差
      expect(immuneRate).toBeGreaterThan(0.45);
      expect(immuneRate).toBeLessThan(0.55);
    });

    test('朱雀低HP时抗性增强', () => {
      const state = createCharacterState('suzaku');

      const normalResistance = getGeassResistance(state, 2);
      const lowHpResistance = getGeassResistance(state, 1);

      expect(normalResistance).toBe(1);
      expect(lowHpResistance).toBe(0.5);
      expect(lowHpResistance).toBeLessThan(normalResistance);
    });

    test('卡莲技能状态影响最大出牌数', () => {
      const state = createCharacterState('kallen');

      // 初始状态可以出4张
      expect(getMaxPlayCount(state)).toBe(4);

      // 使用技能后，使用次数减少（卡莲技能maxUses为-1，表示无限使用）
      const usedState = applySkill(state);
      // 技能被激活
      expect(usedState.isSkillActive).toBe(true);
    });
  });
});
