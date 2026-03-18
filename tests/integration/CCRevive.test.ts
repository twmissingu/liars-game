/**
 * C.C. - Code之力复活技能边界测试
 * 测试PRD 3.3节描述的技能效果
 */

import { GameEngine } from '../../src/core/GameEngineV2';
import { GeassSystem } from '../../src/core/GeassSystem';

describe('C.C. - Code之力复活技能边界测试', () => {
  let engine: GameEngine;
  let geassSystem: GeassSystem;

  beforeEach(() => {
    engine = new GameEngine();
    geassSystem = new GeassSystem();
  });

  describe('复活后HP验证', () => {
    test('复活后HP应为1', () => {
      // 使用GeassSystem直接测试
      const stats = {
        hp: 1,
        maxHp: 3,
        geassSuccessCount: 0,
        geassFailCount: 0,
        ccReviveUsed: false,
      };

      // 多次尝试直到触发复活
      let revived = false;
      for (let i = 0; i < 100; i++) {
        const result = geassSystem.performGeass('player', stats, 'cc', 1.0, 0); // 100%命中率确保触发
        if (result.isRevived) {
          expect(result.newStats?.hp).toBe(1);
          expect(result.newStats?.ccReviveUsed).toBe(true);
          revived = true;
          break;
        }
      }

      expect(revived).toBe(true);
    });

    test('复活后技能失效，再次受到致命伤害会被淘汰', () => {
      const stats = {
        hp: 1,
        maxHp: 3,
        geassSuccessCount: 0,
        geassFailCount: 0,
        ccReviveUsed: true, // 技能已使用
      };

      // 受到致命伤害
      const result = geassSystem.performGeass('player', stats, 'cc', 1.0, 0); // 100%命中率

      // 应该命中并扣血到0
      expect(result.hit).toBe(true);
      expect(result.newStats?.hp).toBe(0);
      expect(result.isRevived).toBeFalsy(); // 不应该再次复活
    });
  });

  describe('复活触发条件验证', () => {
    test('HP大于1时不会触发复活', () => {
      const stats = {
        hp: 2,
        maxHp: 3,
        geassSuccessCount: 0,
        geassFailCount: 0,
        ccReviveUsed: false,
      };

      // 受到Geass（1点伤害，HP从2变为1）
      const result = geassSystem.performGeass('player', stats, 'cc', 1.0, 0);

      // 应该命中但不会触发复活（因为HP不会归零）
      expect(result.hit).toBe(true);
      expect(result.isRevived).toBeFalsy();
      expect(result.newStats?.hp).toBe(1);
    });

    test('Geass未命中时不会触发复活', () => {
      const stats = {
        hp: 1,
        maxHp: 3,
        geassSuccessCount: 0,
        geassFailCount: 0,
        ccReviveUsed: false,
      };

      // 使用-1命中率确保不会命中（绕过复活判定）
      const result = geassSystem.performGeass('player', stats, 'cc', -1, 0);
      // 未命中时不会触发复活
      expect(result.isRevived).toBeFalsy();
    });
  });

  describe('复活概率验证', () => {
    test('复活概率应为50%', () => {
      const sampleSize = 200;
      let reviveCount = 0;

      for (let i = 0; i < sampleSize; i++) {
        const stats = {
          hp: 1,
          maxHp: 3,
          geassSuccessCount: 0,
          geassFailCount: 0,
          ccReviveUsed: false,
        };

        const result = geassSystem.performGeass('player', stats, 'cc', 1.0, 0);
        if (result.isRevived) {
          reviveCount++;
        }
      }

      const reviveRate = reviveCount / sampleSize;
      // 50%概率，允许±10%误差
      expect(reviveRate).toBeGreaterThan(0.40);
      expect(reviveRate).toBeLessThan(0.60);
    });
  });

  describe('复活消息验证', () => {
    test('复活时显示正确消息', () => {
      const stats = {
        hp: 1,
        maxHp: 3,
        geassSuccessCount: 0,
        geassFailCount: 0,
        ccReviveUsed: false,
      };

      // 多次尝试直到触发复活
      let foundRevive = false;
      for (let i = 0; i < 100; i++) {
        const result = geassSystem.performGeass('player', stats, 'cc', 1.0, 0);
        if (result.isRevived) {
          expect(result.message).toContain('Code之力');
          expect(result.message).toContain('复活');
          foundRevive = true;
          break;
        }
      }

      expect(foundRevive).toBe(true);
    });
  });
});
