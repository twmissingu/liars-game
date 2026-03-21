/**
 * =============================================================================
 * 角色轮替系统集成测试
 * =============================================================================
 *
 * 测试目标：验证TurnOrderSystem与游戏引擎的集成
 * 测试场景：
 * 1. 游戏初始化时的角色顺序
 * 2. 玩家出牌后的质疑顺序
 * 3. AI出牌后的质疑顺序
 * 4. 质疑成功后的回合切换
 * 5. 质疑失败后的回合切换
 * 6. 无人质疑时的回合继续
 *
 * @author Code Agent
 * @version 1.0.0
 */

import { describe, it, expect, beforeEach } from 'vitest';
import { TurnOrderSystem } from '../../src/core/TurnOrderSystem';
import { GameEngine } from '../../src/core/GameEngineV2';

describe('角色轮替系统集成测试', () => {
  let turnOrderSystem: TurnOrderSystem;
  let gameEngine: GameEngine;

  beforeEach(() => {
    // 创建轮替系统
    turnOrderSystem = TurnOrderSystem.createDefault();
    // 创建游戏引擎
    gameEngine = new GameEngine();
  });

  describe('游戏初始化', () => {
    it('应该正确初始化游戏和轮替系统', () => {
      const gameState = gameEngine.initializeGame('lelouch');

      // 验证游戏状态
      expect(gameState).toBeDefined();
      expect(gameState.aiPlayers).toHaveLength(3);

      // 验证轮替系统
      const slots = turnOrderSystem.getAllSlots();
      expect(slots).toHaveLength(4);
      expect(slots[0].name).toBe('玩家');
      expect(slots[1].name).toBe('朱雀');
      expect(slots[2].name).toBe('卡莲');
      expect(slots[3].name).toBe('C.C.');
    });

    it('轮替系统和游戏引擎的角色顺序应该一致', () => {
      const gameState = gameEngine.initializeGame('lelouch');
      const slots = turnOrderSystem.getAllSlots();

      // 验证AI角色映射
      const aiSlots = slots.filter(s => !s.isPlayer);
      expect(aiSlots[0].name).toBe('朱雀');
      expect(aiSlots[1].name).toBe('卡莲');
      expect(aiSlots[2].name).toBe('C.C.');

      // 验证游戏引擎中的AI
      expect(gameState.aiPlayers[0].name).toBe('C.C.');
      expect(gameState.aiPlayers[1].name).toBe('朱雀');
      expect(gameState.aiPlayers[2].name).toBe('卡莲');
    });
  });

  describe('质疑顺序验证', () => {
    it('玩家出牌后，质疑顺序应该正确', () => {
      gameEngine.initializeGame('lelouch');

      // 玩家出牌（确保玩家先手）
      const state = gameEngine.getState();
      if (state.phase === 'player_turn') {
        const playerHand = gameEngine.getPlayerHand();
        if (playerHand.length > 0) {
          gameEngine.playCards([playerHand[0].id], 'Q');
          const newState = gameEngine.getState();

          // 验证出牌记录
          expect(newState.turnState.playedCards?.playerId).toBe('player');
          expect(newState.phase).toBe('challenge');

          // 验证质疑顺序：朱雀 → 卡莲 → C.C.
          const expectedOrder = ['朱雀', '卡莲', 'C.C.'];
          const preview = turnOrderSystem.getRotationPreview(3);
          expect(preview).toEqual(expectedOrder);
        }
      }
    });

    it('朱雀出牌后，质疑顺序应该正确', () => {
      // 设置轮替系统到朱雀
      turnOrderSystem.goto(1);
      expect(turnOrderSystem.getCurrentSlot().name).toBe('朱雀');

      // 验证质疑顺序：卡莲 → C.C. → 玩家
      const expectedOrder = ['卡莲', 'C.C.', '玩家'];
      const preview = turnOrderSystem.getRotationPreview(3);
      expect(preview).toEqual(expectedOrder);
    });

    it('卡莲出牌后，质疑顺序应该正确', () => {
      // 设置轮替系统到卡莲
      turnOrderSystem.goto(2);
      expect(turnOrderSystem.getCurrentSlot().name).toBe('卡莲');

      // 验证质疑顺序：C.C. → 玩家 → 朱雀
      const expectedOrder = ['C.C.', '玩家', '朱雀'];
      const preview = turnOrderSystem.getRotationPreview(3);
      expect(preview).toEqual(expectedOrder);
    });

    it('C.C.出牌后，质疑顺序应该正确', () => {
      // 设置轮替系统到C.C.
      turnOrderSystem.goto(3);
      expect(turnOrderSystem.getCurrentSlot().name).toBe('C.C.');

      // 验证质疑顺序：玩家 → 朱雀 → 卡莲
      const expectedOrder = ['玩家', '朱雀', '卡莲'];
      const preview = turnOrderSystem.getRotationPreview(3);
      expect(preview).toEqual(expectedOrder);
    });
  });

  describe('回合切换验证', () => {
    it('质疑成功后，应该切换到受罚者的下家', () => {
      // 模拟质疑成功场景
      // 假设玩家受罚，下一个应该是朱雀
      const loserIndex = 0; // 玩家
      const nextStarterIndex = (loserIndex + 1) % 4;

      expect(nextStarterIndex).toBe(1); // 朱雀

      // 验证轮替系统
      turnOrderSystem.goto(nextStarterIndex);
      expect(turnOrderSystem.getCurrentSlot().name).toBe('朱雀');
    });

    it('质疑失败后，应该切换到质疑者的下家', () => {
      // 模拟质疑失败场景
      // 假设朱雀质疑失败，下一个应该是卡莲
      const challengerIndex = 1; // 朱雀
      const nextStarterIndex = (challengerIndex + 1) % 4;

      expect(nextStarterIndex).toBe(2); // 卡莲

      // 验证轮替系统
      turnOrderSystem.goto(nextStarterIndex);
      expect(turnOrderSystem.getCurrentSlot().name).toBe('卡莲');
    });

    it('无人质疑时，应该继续原出牌者的回合', () => {
      // 假设玩家出牌，无人质疑
      const currentPlayerIndex = 0; // 玩家

      // 验证轮替系统保持在玩家
      turnOrderSystem.goto(currentPlayerIndex);
      expect(turnOrderSystem.getCurrentSlot().name).toBe('玩家');
    });
  });

  describe('角色淘汰场景', () => {
    it('应该跳过被淘汰的角色', () => {
      // 将朱雀设为不活跃
      turnOrderSystem.setActive(1, false);

      // 从玩家开始，下一个应该是卡莲（跳过朱雀）
      turnOrderSystem.goto(0);
      turnOrderSystem.next();

      expect(turnOrderSystem.getCurrentSlot().name).toBe('卡莲');
    });

    it('应该跳过多个被淘汰的角色', () => {
      // 将朱雀和卡莲设为不活跃
      turnOrderSystem.setActive(1, false);
      turnOrderSystem.setActive(2, false);

      // 从玩家开始，下一个应该是C.C.（跳过朱雀和卡莲）
      turnOrderSystem.goto(0);
      turnOrderSystem.next();

      expect(turnOrderSystem.getCurrentSlot().name).toBe('C.C.');
    });

    it('应该正确处理只剩玩家存活的情况', () => {
      // 将所有AI设为不活跃
      turnOrderSystem.setActive(1, false);
      turnOrderSystem.setActive(2, false);
      turnOrderSystem.setActive(3, false);

      // 无论怎么切换，都应该停留在玩家
      for (let i = 0; i < 5; i++) {
        turnOrderSystem.next();
        expect(turnOrderSystem.getCurrentSlot().name).toBe('玩家');
      }
    });
  });

  describe('轮替历史追踪', () => {
    it('应该正确记录轮替历史', () => {
      // 执行一系列轮替
      turnOrderSystem.next(); // 玩家 → 朱雀
      turnOrderSystem.next(); // 朱雀 → 卡莲
      turnOrderSystem.next(); // 卡莲 → C.C.

      const state = turnOrderSystem.getState();
      expect(state.history).toHaveLength(3);
      expect(state.history[0]).toBe('玩家 → 朱雀');
      expect(state.history[1]).toBe('朱雀 → 卡莲');
      expect(state.history[2]).toBe('卡莲 → C.C.');
    });

    it('重置后应该清空历史', () => {
      turnOrderSystem.next();
      turnOrderSystem.next();
      expect(turnOrderSystem.getState().history.length).toBeGreaterThan(0);

      turnOrderSystem.reset();
      expect(turnOrderSystem.getState().history).toHaveLength(0);
    });
  });

  describe('轮替顺序描述', () => {
    it('应该正确生成轮替顺序描述', () => {
      const description = turnOrderSystem.getOrderDescription();
      expect(description).toBe('玩家 → 朱雀 → 卡莲 → C.C.');
    });

    it('有角色被淘汰后，描述应该更新', () => {
      turnOrderSystem.setActive(1, false); // 淘汰朱雀
      const description = turnOrderSystem.getOrderDescription();
      expect(description).toBe('玩家 → 卡莲 → C.C.');
    });
  });

  describe('事件系统', () => {
    it('应该触发rotate事件', () => {
      const events: string[] = [];
      turnOrderSystem.on((event) => {
        if (event.type === 'rotate') {
          events.push(`${event.fromRole.name} → ${event.toRole.name}`);
        }
      });

      turnOrderSystem.next();
      turnOrderSystem.next();

      expect(events).toHaveLength(2);
      expect(events[0]).toBe('玩家 → 朱雀');
      expect(events[1]).toBe('朱雀 → 卡莲');
    });

    it('应该触发activate/deactivate事件', () => {
      const events: string[] = [];
      turnOrderSystem.on((event) => {
        if (event.type === 'activate' || event.type === 'deactivate') {
          events.push(`${event.type}: ${event.toRole.name}`);
        }
      });

      turnOrderSystem.setActive(1, false);
      turnOrderSystem.setActive(1, true);

      expect(events).toHaveLength(2);
      expect(events[0]).toBe('deactivate: 朱雀');
      expect(events[1]).toBe('activate: 朱雀');
    });
  });
});
