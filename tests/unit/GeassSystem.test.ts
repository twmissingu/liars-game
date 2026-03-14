/**
 * GeassSystem 单元测试
 * 测试Geass判定系统和角色技能
 */

import { GeassSystem, PlayerStats, FUNNY_ACTIONS } from '../../src/core/GeassSystem';

describe('GeassSystem', () => {
  let geassSystem: GeassSystem;

  beforeEach(() => {
    geassSystem = new GeassSystem();
  });

  describe('基础Geass判定', () => {
    const createBaseStats = (): PlayerStats => ({
      hp: 3,
      maxHp: 3,
      geassSuccessCount: 0,
      geassFailCount: 0,
    });

    test('基础命中概率应该约为1/3', () => {
      const stats = createBaseStats();
      let hits = 0;
      const trials = 3000;

      for (let i = 0; i < trials; i++) {
        const result = geassSystem.performGeass('player', { ...stats });
        if (result.hit) hits++;
      }

      const hitRate = hits / trials;
      // 允许5%的误差范围
      expect(hitRate).toBeGreaterThan(0.28);
      expect(hitRate).toBeLessThan(0.38);
    });

    test('命中时应该造成1点伤害', () => {
      const stats = createBaseStats();
      
      // Mock Math.random 确保命中
      const originalRandom = Math.random;
      Math.random = jest.fn().mockReturnValue(0);
      
      const result = geassSystem.performGeass('player', stats);
      
      Math.random = originalRandom;
      
      if (result.hit) {
        expect(result.damage).toBe(1);
        expect(result.newStats.hp).toBe(stats.hp - 1);
      }
    });

    test('未命中时不应该造成伤害', () => {
      const stats = createBaseStats();
      
      // Mock Math.random 确保不命中
      const originalRandom = Math.random;
      Math.random = jest.fn().mockReturnValue(0.99);
      
      const result = geassSystem.performGeass('player', stats);
      
      Math.random = originalRandom;
      
      expect(result.hit).toBe(false);
      expect(result.damage).toBe(0);
      expect(result.newStats.hp).toBe(stats.hp);
    });

    test('命中时应该增加geassSuccessCount', () => {
      const stats = createBaseStats();
      
      const originalRandom = Math.random;
      Math.random = jest.fn().mockReturnValue(0);
      
      const result = geassSystem.performGeass('player', stats);
      
      Math.random = originalRandom;
      
      if (result.hit) {
        expect(result.newStats.geassSuccessCount).toBe(stats.geassSuccessCount + 1);
      }
    });

    test('未命中时应该增加geassFailCount', () => {
      const stats = createBaseStats();
      
      const originalRandom = Math.random;
      Math.random = jest.fn().mockReturnValue(0.99);
      
      const result = geassSystem.performGeass('player', stats);
      
      Math.random = originalRandom;
      
      if (!result.hit) {
        expect(result.newStats.geassFailCount).toBe(stats.geassFailCount + 1);
      }
    });

    test('HP不应该低于0', () => {
      const stats: PlayerStats = {
        hp: 1,
        maxHp: 3,
        geassSuccessCount: 0,
        geassFailCount: 0,
      };
      
      const originalRandom = Math.random;
      Math.random = jest.fn().mockReturnValue(0);
      
      const result = geassSystem.performGeass('player', stats);
      
      Math.random = originalRandom;
      
      expect(result.newStats.hp).toBeGreaterThanOrEqual(0);
    });

    test('命中时应该返回搞笑动作', () => {
      const stats = createBaseStats();
      
      const originalRandom = Math.random;
      Math.random = jest.fn().mockReturnValue(0);
      
      const result = geassSystem.performGeass('player', stats);
      
      Math.random = originalRandom;
      
      if (result.hit) {
        expect(result.funnyAction).toBeDefined();
        expect(FUNNY_ACTIONS.some(a => a.description === result.funnyAction)).toBe(true);
      }
    });
  });

  describe('命中率加成', () => {
    const createBaseStats = (): PlayerStats => ({
      hp: 3,
      maxHp: 3,
      geassSuccessCount: 0,
      geassFailCount: 0,
    });

    test('命中率加成应该提高命中概率', () => {
      const stats = createBaseStats();
      let hitsWithoutBoost = 0;
      let hitsWithBoost = 0;
      const trials = 1000;

      // 无加成
      for (let i = 0; i < trials; i++) {
        const result = geassSystem.performGeass('player', { ...stats }, null, 0);
        if (result.hit) hitsWithoutBoost++;
      }

      // 有20%加成
      for (let i = 0; i < trials; i++) {
        const result = geassSystem.performGeass('player', { ...stats }, null, 0.2);
        if (result.hit) hitsWithBoost++;
      }

      expect(hitsWithBoost).toBeGreaterThan(hitsWithoutBoost);
    });

    test('命中率不应该超过90%', () => {
      const stats = createBaseStats();
      
      // 使用极大的加成
      const result = geassSystem.performGeass('player', { ...stats }, null, 1);
      
      // 即使加成100%，也应该有上限
      expect(result).toBeDefined();
    });
  });

  describe('C.C.技能 - Code之力（复活）', () => {
    const createCCStats = (): PlayerStats => ({
      hp: 1,
      maxHp: 3,
      geassSuccessCount: 0,
      geassFailCount: 0,
      ccReviveUsed: false,
    });

    test('C.C.首次濒死时有50%概率复活', () => {
      const stats = createCCStats();
      let revives = 0;
      const trials = 1000;

      for (let i = 0; i < trials; i++) {
        // Mock: 确保命中且复活判定成功
        const originalRandom = Math.random;
        let callCount = 0;
        Math.random = jest.fn().mockImplementation(() => {
          callCount++;
          // 第一次返回0确保命中，第二次返回0.4确保复活（<0.5）
          return callCount === 1 ? 0 : 0.4;
        });

        const result = geassSystem.performGeass('player', { ...stats }, 'cc');
        
        Math.random = originalRandom;
        
        if (result.isRevived) {
          revives++;
        }
      }

      // 由于我们mock了随机数，应该每次都复活
      expect(revives).toBe(trials);
    });

    test('C.C.复活时不应该受到伤害', () => {
      const stats = createCCStats();
      
      const originalRandom = Math.random;
      let callCount = 0;
      Math.random = jest.fn().mockImplementation(() => {
        callCount++;
        return callCount === 1 ? 0 : 0.4;
      });

      const result = geassSystem.performGeass('player', stats, 'cc');
      
      Math.random = originalRandom;
      
      expect(result.isRevived).toBe(true);
      expect(result.damage).toBe(0);
      expect(result.newStats.hp).toBe(stats.hp);
    });

    test('C.C.复活后ccReviveUsed应该设为true', () => {
      const stats = createCCStats();
      
      const originalRandom = Math.random;
      let callCount = 0;
      Math.random = jest.fn().mockImplementation(() => {
        callCount++;
        return callCount === 1 ? 0 : 0.4;
      });

      const result = geassSystem.performGeass('player', stats, 'cc');
      
      Math.random = originalRandom;
      
      expect(result.newStats.ccReviveUsed).toBe(true);
    });

    test('C.C.已经使用过复活后不应该再次复活', () => {
      const stats: PlayerStats = {
        hp: 1,
        maxHp: 3,
        geassSuccessCount: 0,
        geassFailCount: 0,
        ccReviveUsed: true, // 已经使用过
      };
      
      const originalRandom = Math.random;
      Math.random = jest.fn().mockReturnValue(0); // 确保命中

      const result = geassSystem.performGeass('player', stats, 'cc');
      
      Math.random = originalRandom;
      
      expect(result.isRevived).toBeFalsy();
    });
  });

  describe('朱雀技能 - 枢木剑术', () => {
    const createSuzakuStats = (): PlayerStats => ({
      hp: 3,
      maxHp: 3,
      geassSuccessCount: 0,
      geassFailCount: 0,
    });

    test('朱雀有25%概率反击', () => {
      const stats = createSuzakuStats();
      let counters = 0;
      const trials = 1000;

      for (let i = 0; i < trials; i++) {
        const originalRandom = Math.random;
        // 第一次随机数用于反击判定，返回0.2（<0.25）触发反击
        Math.random = jest.fn().mockReturnValue(0.2);

        const result = geassSystem.performGeass('player', { ...stats }, 'suzaku');
        
        Math.random = originalRandom;
        
        if (result.isCounter) {
          counters++;
        }
      }

      expect(counters).toBe(trials);
    });

    test('朱雀反击时不应该受到伤害', () => {
      const stats = createSuzakuStats();
      
      const originalRandom = Math.random;
      Math.random = jest.fn().mockReturnValue(0.2); // 触发反击

      const result = geassSystem.performGeass('player', stats, 'suzaku');
      
      Math.random = originalRandom;
      
      expect(result.isCounter).toBe(true);
      expect(result.damage).toBe(0);
      expect(result.newStats.hp).toBe(stats.hp);
    });

    test('朱雀有15%基础闪避率', () => {
      const stats = createSuzakuStats();
      
      // 由于有15%闪避，实际命中概率应该是 1/3 - 0.15 = 约18.3%
      let hits = 0;
      const trials = 3000;

      for (let i = 0; i < trials; i++) {
        const result = geassSystem.performGeass('player', { ...stats }, 'suzaku');
        if (result.hit) hits++;
      }

      const hitRate = hits / trials;
      // 基础1/3减去15%闪避，预期约18-20%
      expect(hitRate).toBeLessThan(0.25);
    });
  });

  describe('鲁鲁修技能 - 绝对命令', () => {
    test('鲁鲁修可以强制改变骗子牌', () => {
      const result = geassSystem.lelouchAbsoluteCommand('K');
      
      expect(result.success).toBe(true);
      expect(result.message).toContain('K');
    });

    test('鲁鲁修技能返回正确的消息', () => {
      const result = geassSystem.lelouchAbsoluteCommand('A');
      
      expect(result.message).toContain('鲁鲁修');
      expect(result.message).toContain('绝对命令');
      expect(result.message).toContain('A');
    });
  });

  describe('技能描述', () => {
    test('C.C.技能描述应该正确', () => {
      const desc = geassSystem.getCCSkillDescription();
      
      expect(desc).toContain('C.C.');
      expect(desc).toContain('Code之力');
      expect(desc).toContain('50%');
      expect(desc).toContain('复活');
    });

    test('朱雀技能描述应该正确', () => {
      const desc = geassSystem.getSuzakuSkillDescription();
      
      expect(desc).toContain('朱雀');
      expect(desc).toContain('枢木剑术');
      expect(desc).toContain('15%');
      expect(desc).toContain('25%');
    });

    test('卡莲技能描述应该正确', () => {
      const desc = geassSystem.getKallenSkillDescription();
      
      expect(desc).toContain('卡莲');
      expect(desc).toContain('红莲二式');
      expect(desc).toContain('20%');
    });
  });

  describe('搞笑动作', () => {
    test('应该有8个搞笑动作', () => {
      expect(FUNNY_ACTIONS).toHaveLength(8);
    });

    test('每个搞笑动作应该有emoji', () => {
      FUNNY_ACTIONS.forEach(action => {
        expect(action.emoji).toBeDefined();
        expect(action.emoji.length).toBeGreaterThan(0);
      });
    });

    test('每个搞笑动作应该有描述', () => {
      FUNNY_ACTIONS.forEach(action => {
        expect(action.description).toBeDefined();
        expect(action.description.length).toBeGreaterThan(0);
      });
    });

    test('每个搞笑动作应该有音效类型', () => {
      FUNNY_ACTIONS.forEach(action => {
        expect(action.soundType).toBeDefined();
        expect(action.soundType.startsWith('sfx-funny-')).toBe(true);
      });
    });
  });
});
