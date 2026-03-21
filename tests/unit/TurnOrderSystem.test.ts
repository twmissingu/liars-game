/**
 * =============================================================================
 * 角色轮替系统测试
 * =============================================================================
 *
 * 测试目标：验证角色轮替系统的所有功能
 * 测试场景：
 * 1. 基础轮替功能
 * 2. 顺时针/逆时针轮替
 * 3. 跳过非活跃角色
 * 4. 边界条件处理
 * 5. 事件系统
 * 6. 状态查询
 *
 * @author Code Agent
 * @version 1.0.0
 */

import { describe, it, expect, beforeEach, vi } from 'vitest';
import {
  TurnOrderSystem,
  createDefaultTurnOrder,
  createCustomTurnOrder,
} from '../../src/core/TurnOrderSystem';

describe('角色轮替系统测试', () => {
  let system: TurnOrderSystem;

  beforeEach(() => {
    system = createDefaultTurnOrder();
  });

  // ============================================
  // 基础功能测试
  // ============================================

  describe('基础功能', () => {
    it('应该正确创建默认轮替系统', () => {
      expect(system.getCurrentIndex()).toBe(0);
      expect(system.getAllSlots()).toHaveLength(4);
      expect(system.getCurrentSlot().name).toBe('玩家');
    });

    it('应该正确获取所有角色槽位', () => {
      const slots = system.getAllSlots();
      expect(slots[0].name).toBe('玩家');
      expect(slots[1].name).toBe('朱雀');
      expect(slots[2].name).toBe('卡莲');
      expect(slots[3].name).toBe('C.C.');
    });

    it('应该正确获取当前角色槽位', () => {
      const slot = system.getCurrentSlot();
      expect(slot.index).toBe(0);
      expect(slot.name).toBe('玩家');
      expect(slot.isPlayer).toBe(true);
    });
  });

  // ============================================
  // 顺时针轮替测试
  // ============================================

  describe('顺时针轮替', () => {
    it('应该按正确顺序顺时针轮替', () => {
      // 玩家(0) → 朱雀(1)
      system.next();
      expect(system.getCurrentSlot().name).toBe('朱雀');

      // 朱雀(1) → 卡莲(2)
      system.next();
      expect(system.getCurrentSlot().name).toBe('卡莲');

      // 卡莲(2) → C.C.(3)
      system.next();
      expect(system.getCurrentSlot().name).toBe('C.C.');

      // C.C.(3) → 玩家(0) (循环)
      system.next();
      expect(system.getCurrentSlot().name).toBe('玩家');
    });

    it('应该正确循环轮替', () => {
      // 轮替4次应该回到起点
      for (let i = 0; i < 4; i++) {
        system.next();
      }
      expect(system.getCurrentIndex()).toBe(0);
      expect(system.getCurrentSlot().name).toBe('玩家');
    });

    it('应该记录轮替历史', () => {
      system.next(); // 玩家 → 朱雀
      system.next(); // 朱雀 → 卡莲

      const state = system.getState();
      expect(state.history).toHaveLength(2);
      expect(state.history[0]).toBe('玩家 → 朱雀');
      expect(state.history[1]).toBe('朱雀 → 卡莲');
    });

    it('应该正确计数轮替次数', () => {
      system.next();
      system.next();
      system.next();

      const state = system.getState();
      expect(state.rotationCount).toBe(3);
    });
  });

  // ============================================
  // 逆时针轮替测试
  // ============================================

  describe('逆时针轮替', () => {
    beforeEach(() => {
      system.setDirection('counterclockwise');
    });

    it('应该按正确顺序逆时针轮替', () => {
      // 玩家(0) → C.C.(3)
      system.next();
      expect(system.getCurrentSlot().name).toBe('C.C.');

      // C.C.(3) → 卡莲(2)
      system.next();
      expect(system.getCurrentSlot().name).toBe('卡莲');

      // 卡莲(2) → 朱雀(1)
      system.next();
      expect(system.getCurrentSlot().name).toBe('朱雀');

      // 朱雀(1) → 玩家(0) (循环)
      system.next();
      expect(system.getCurrentSlot().name).toBe('玩家');
    });

    it('应该正确切换轮替方向', () => {
      expect(system.getDirection()).toBe('counterclockwise');

      system.setDirection('clockwise');
      expect(system.getDirection()).toBe('clockwise');
    });
  });

  // ============================================
  // 跳过非活跃角色测试
  // ============================================

  describe('跳过非活跃角色', () => {
    it('应该跳过非活跃角色', () => {
      // 将朱雀设为不活跃
      system.setActive(1, false);

      // 玩家(0) → 卡莲(2) (跳过朱雀)
      system.next();
      expect(system.getCurrentSlot().name).toBe('卡莲');
    });

    it('应该跳过多个非活跃角色', () => {
      // 将朱雀和卡莲设为不活跃
      system.setActive(1, false);
      system.setActive(2, false);

      // 玩家(0) → C.C.(3) (跳过朱雀和卡莲)
      system.next();
      expect(system.getCurrentSlot().name).toBe('C.C.');
    });

    it('应该正确处理所有其他角色都不活跃的情况', () => {
      // 将其他所有角色设为不活跃
      system.setActive(1, false);
      system.setActive(2, false);
      system.setActive(3, false);

      // 应该停留在当前角色
      system.next();
      expect(system.getCurrentSlot().name).toBe('玩家');
    });

    it('应该正确获取活跃角色数量', () => {
      expect(system.getActiveCount()).toBe(4);

      system.setActive(1, false);
      expect(system.getActiveCount()).toBe(3);

      system.setActive(2, false);
      expect(system.getActiveCount()).toBe(2);
    });
  });

  // ============================================
  // 跳转到指定角色测试
  // ============================================

  describe('跳转到指定角色', () => {
    it('应该正确跳转到指定索引', () => {
      system.goto(2);
      expect(system.getCurrentIndex()).toBe(2);
      expect(system.getCurrentSlot().name).toBe('卡莲');
    });

    it('应该记录跳转历史', () => {
      system.goto(3);
      const state = system.getState();
      expect(state.history[0]).toContain('jump');
    });

    it('应该对无效索引抛出错误', () => {
      expect(() => system.goto(-1)).toThrow();
      expect(() => system.goto(4)).toThrow();
    });
  });

  // ============================================
  // 暂停/恢复测试
  // ============================================

  describe('暂停/恢复', () => {
    it('应该正确暂停轮替', () => {
      system.pause();
      const state = system.getState();
      expect(state.isPaused).toBe(true);

      // 暂停时不应该切换
      const currentIndex = system.getCurrentIndex();
      system.next();
      expect(system.getCurrentIndex()).toBe(currentIndex);
    });

    it('应该正确恢复轮替', () => {
      system.pause();
      system.resume();
      const state = system.getState();
      expect(state.isPaused).toBe(false);

      // 恢复后应该正常切换
      system.next();
      expect(system.getCurrentIndex()).toBe(1);
    });
  });

  // ============================================
  // 重置测试
  // ============================================

  describe('重置', () => {
    it('应该正确重置到指定索引', () => {
      system.next();
      system.next();
      expect(system.getCurrentIndex()).toBe(2);

      system.reset(0);
      expect(system.getCurrentIndex()).toBe(0);
      expect(system.getCurrentSlot().name).toBe('玩家');
    });

    it('应该清空历史记录', () => {
      system.next();
      system.next();
      expect(system.getState().history.length).toBeGreaterThan(0);

      system.reset();
      expect(system.getState().history).toHaveLength(0);
    });

    it('应该重置轮替计数', () => {
      system.next();
      system.next();
      expect(system.getState().rotationCount).toBe(2);

      system.reset();
      expect(system.getState().rotationCount).toBe(0);
    });
  });

  // ============================================
  // 事件系统测试
  // ============================================

  describe('事件系统', () => {
    it('应该触发rotate事件', () => {
      const listener = vi.fn();
      system.on(listener);

      system.next();

      expect(listener).toHaveBeenCalled();
      const event = listener.mock.calls[0][0];
      expect(event.type).toBe('rotate');
      expect(event.fromIndex).toBe(0);
      expect(event.toIndex).toBe(1);
    });

    it('应该触发activate/deactivate事件', () => {
      const listener = vi.fn();
      system.on(listener);

      system.setActive(1, false);

      expect(listener).toHaveBeenCalled();
      const event = listener.mock.calls[0][0];
      expect(event.type).toBe('deactivate');
    });

    it('应该正确移除监听器', () => {
      const listener = vi.fn();
      system.on(listener);
      system.off(listener);

      system.next();

      expect(listener).not.toHaveBeenCalled();
    });

    it('应该触发pause/resume事件', () => {
      const listener = vi.fn();
      system.on(listener);

      system.pause();
      expect(listener).toHaveBeenCalledWith(
        expect.objectContaining({ type: 'pause' })
      );

      system.resume();
      expect(listener).toHaveBeenCalledWith(
        expect.objectContaining({ type: 'resume' })
      );
    });
  });

  // ============================================
  // 查询方法测试
  // ============================================

  describe('查询方法', () => {
    it('应该正确获取轮替顺序预览', () => {
      const preview = system.getRotationPreview(3);
      expect(preview).toEqual(['朱雀', '卡莲', 'C.C.']);
    });

    it('应该正确获取轮替顺序描述', () => {
      const description = system.getOrderDescription();
      expect(description).toBe('玩家 → 朱雀 → 卡莲 → C.C.');
    });

    it('应该正确检查是否完成一轮', () => {
      expect(system.isCompleteRound()).toBe(false);

      // 轮替4次回到起点
      for (let i = 0; i < 4; i++) {
        system.next();
      }

      expect(system.isCompleteRound()).toBe(true);
    });

    it('应该正确查找角色索引', () => {
      expect(system.findRoleIndex('player')).toBe(0);
      expect(system.findRoleIndex('suzaku')).toBe(1);
      expect(system.findRoleIndex('kallen')).toBe(2);
      expect(system.findRoleIndex('cc')).toBe(3);
      expect(system.findRoleIndex('nonexistent')).toBe(-1);
    });

    it('应该正确按名称查找角色索引', () => {
      expect(system.findRoleIndexByName('玩家')).toBe(0);
      expect(system.findRoleIndexByName('朱雀')).toBe(1);
      expect(system.findRoleIndexByName('卡莲')).toBe(2);
      expect(system.findRoleIndexByName('C.C.')).toBe(3);
    });
  });

  // ============================================
  // 自定义轮替系统测试
  // ============================================

  describe('自定义轮替系统', () => {
    it('应该正确创建自定义轮替系统', () => {
      const customSystem = createCustomTurnOrder(
        [
          { id: 'a', name: '角色A', isActive: true, isPlayer: true },
          { id: 'b', name: '角色B', isActive: true, isPlayer: false },
          { id: 'c', name: '角色C', isActive: true, isPlayer: false },
        ],
        1
      );

      expect(customSystem.getAllSlots()).toHaveLength(3);
      expect(customSystem.getCurrentIndex()).toBe(1);
      expect(customSystem.getCurrentSlot().name).toBe('角色B');
    });

    it('应该从游戏状态创建轮替系统', () => {
      const gameSystem = TurnOrderSystem.fromGameState('lelouch', [
        { id: 'ai1', name: 'C.C.', characterId: 'cc', isActive: true },
        { id: 'ai2', name: '朱雀', characterId: 'suzaku', isActive: true },
        { id: 'ai3', name: '卡莲', characterId: 'kallen', isActive: true },
      ]);

      expect(gameSystem.getAllSlots()).toHaveLength(4);
      expect(gameSystem.getCurrentSlot().isPlayer).toBe(true);
    });
  });

  // ============================================
  // 边界条件测试
  // ============================================

  describe('边界条件', () => {
    it('应该正确处理只有一个角色活跃的情况', () => {
      system.setActive(1, false);
      system.setActive(2, false);
      system.setActive(3, false);

      // 多次next应该始终停留在玩家
      for (let i = 0; i < 5; i++) {
        system.next();
        expect(system.getCurrentSlot().name).toBe('玩家');
      }
    });

    it('应该正确处理当前角色被设为不活跃的情况', () => {
      // 切换到朱雀
      system.next();
      expect(system.getCurrentSlot().name).toBe('朱雀');

      // 将朱雀设为不活跃
      system.setActive(1, false);

      // 应该自动切换到下一个活跃角色
      expect(system.getCurrentSlot().name).toBe('卡莲');
    });

    it('应该正确处理getSlot的边界情况', () => {
      expect(system.getSlot(0)?.name).toBe('玩家');
      expect(system.getSlot(3)?.name).toBe('C.C.');
      expect(system.getSlot(-1)).toBeUndefined();
      expect(system.getSlot(4)).toBeUndefined();
    });

    it('应该正确处理isActive的边界情况', () => {
      expect(system.isActive(0)).toBe(true);
      expect(system.isActive(-1)).toBe(false);
      expect(system.isActive(4)).toBe(false);
    });
  });
});
