/**
 * =============================================================================
 * 角色轮替系统 (Turn Order System)
 * =============================================================================
 *
 * 一个灵活的角色轮替管理系统，支持：
 * - 可配置的角色顺序
 * - 顺时针/逆时针轮替
 * - 自动跳过非活跃角色
 * - 状态追踪和事件通知
 *
 * 默认顺序：玩家(0) → 朱雀(1) → 卡莲(2) → C.C.(3) → 玩家(0)
 *
 * @author Code Agent
 * @version 1.0.0
 */

import type { CharacterId } from '../types';

// ============================================
// 类型定义
// ============================================

/** 角色槽位信息 */
export interface RoleSlot {
  /** 槽位索引 */
  index: number;
  /** 角色ID */
  id: string;
  /** 角色名称 */
  name: string;
  /** 对应的游戏角色ID */
  characterId?: CharacterId;
  /** 是否活跃（存活） */
  isActive: boolean;
  /** 是否玩家控制 */
  isPlayer: boolean;
  /** 自定义数据 */
  metadata?: Record<string, unknown>;
}

/** 轮替方向 */
export type RotationDirection = 'clockwise' | 'counterclockwise';

/** 轮替系统配置 */
export interface TurnOrderConfig {
  /** 角色槽位列表 */
  slots: Omit<RoleSlot, 'index'>[];
  /** 轮替方向 */
  direction: RotationDirection;
  /** 起始索引 */
  startIndex: number;
  /** 是否跳过非活跃角色 */
  skipInactive: boolean;
}

/** 轮替系统状态 */
export interface TurnOrderState {
  /** 当前激活的槽位索引 */
  currentIndex: number;
  /** 轮替次数 */
  rotationCount: number;
  /** 轮替历史 */
  history: string[];
  /** 是否暂停 */
  isPaused: boolean;
}

/** 轮替事件类型 */
export type TurnOrderEventType =
  | 'rotate'
  | 'skip'
  | 'activate'
  | 'deactivate'
  | 'reset'
  | 'pause'
  | 'resume';

/** 轮替事件 */
export interface TurnOrderEvent {
  type: TurnOrderEventType;
  fromIndex: number;
  toIndex: number;
  fromRole: RoleSlot;
  toRole: RoleSlot;
  timestamp: number;
}

/** 事件监听器 */
export type TurnOrderListener = (event: TurnOrderEvent) => void;

// ============================================
// 角色轮替系统类
// ============================================

export class TurnOrderSystem {
  /** 角色槽位列表 */
  private slots: RoleSlot[] = [];

  /** 当前激活的槽位索引 */
  private currentIndex: number = 0;

  /** 轮替方向 */
  private direction: RotationDirection = 'clockwise';

  /** 是否跳过非活跃角色 */
  private skipInactive: boolean = true;

  /** 轮替次数 */
  private rotationCount: number = 0;

  /** 轮替历史 */
  private history: string[] = [];

  /** 是否暂停 */
  private isPaused: boolean = false;

  /** 事件监听器列表 */
  private listeners: TurnOrderListener[] = [];

  /**
   * 构造函数
   * @param config - 轮替系统配置
   */
  constructor(config?: Partial<TurnOrderConfig>) {
    if (config?.slots) {
      this.initializeSlots(config.slots);
    }
    if (config?.direction) {
      this.direction = config.direction;
    }
    if (config?.startIndex !== undefined) {
      this.currentIndex = config.startIndex;
    }
    if (config?.skipInactive !== undefined) {
      this.skipInactive = config.skipInactive;
    }
  }

  // ============================================
  // 初始化方法
  // ============================================

  /**
   * 初始化角色槽位
   * @param slots - 角色槽位配置列表
   */
  private initializeSlots(slots: Omit<RoleSlot, 'index'>[]): void {
    this.slots = slots.map((slot, index) => ({
      ...slot,
      index,
    }));
  }

  /**
   * 使用默认配置创建轮替系统
   * 默认顺序：玩家 → 朱雀 → 卡莲 → C.C.
   */
  static createDefault(): TurnOrderSystem {
    const defaultSlots: Omit<RoleSlot, 'index'>[] = [
      {
        id: 'player',
        name: '玩家',
        isActive: true,
        isPlayer: true,
        metadata: { position: 'bottom' },
      },
      {
        id: 'suzaku',
        name: '朱雀',
        characterId: 'suzaku',
        isActive: true,
        isPlayer: false,
        metadata: { position: 'left' },
      },
      {
        id: 'kallen',
        name: '卡莲',
        characterId: 'kallen',
        isActive: true,
        isPlayer: false,
        metadata: { position: 'right' },
      },
      {
        id: 'cc',
        name: 'C.C.',
        characterId: 'cc',
        isActive: true,
        isPlayer: false,
        metadata: { position: 'top' },
      },
    ];

    return new TurnOrderSystem({
      slots: defaultSlots,
      direction: 'clockwise',
      startIndex: 0,
      skipInactive: true,
    });
  }

  /**
   * 从游戏状态创建轮替系统
   * @param playerCharacter - 玩家选择的角色
   * @param aiCharacters - AI角色列表
   */
  static fromGameState(
    playerCharacter: CharacterId,
    aiCharacters: { id: string; name: string; characterId: CharacterId; isActive: boolean }[]
  ): TurnOrderSystem {
    const slots: Omit<RoleSlot, 'index'>[] = [
      {
        id: 'player',
        name: '玩家',
        characterId: playerCharacter,
        isActive: true,
        isPlayer: true,
        metadata: { position: 'bottom' },
      },
      ...aiCharacters.map(ai => ({
        id: ai.id,
        name: ai.name,
        characterId: ai.characterId,
        isActive: ai.isActive,
        isPlayer: false,
        metadata: { position: 'auto' },
      })),
    ];

    return new TurnOrderSystem({
      slots,
      direction: 'clockwise',
      startIndex: 0,
      skipInactive: true,
    });
  }

  // ============================================
  // 核心轮替逻辑
  // ============================================

  /**
   * 切换到下一个角色
   * @returns 新的当前角色槽位
   */
  next(): RoleSlot {
    if (this.isPaused) {
      return this.getCurrentSlot();
    }

    const fromIndex = this.currentIndex;
    const fromRole = this.getCurrentSlot();

    // 计算下一个索引
    let nextIndex = this.calculateNextIndex(fromIndex);

    // 如果需要跳过非活跃角色
    if (this.skipInactive) {
      nextIndex = this.findNextActiveIndex(fromIndex, nextIndex);
    }

    // 更新当前索引
    this.currentIndex = nextIndex;
    this.rotationCount++;

    const toRole = this.getCurrentSlot();

    // 记录历史
    this.history.push(`${fromRole.name} → ${toRole.name}`);

    // 触发事件
    this.emit({
      type: 'rotate',
      fromIndex,
      toIndex: nextIndex,
      fromRole,
      toRole,
      timestamp: Date.now(),
    });

    return toRole;
  }

  /**
   * 切换到指定角色
   * @param targetIndex - 目标槽位索引
   * @returns 新的当前角色槽位
   */
  goto(targetIndex: number): RoleSlot {
    if (targetIndex < 0 || targetIndex >= this.slots.length) {
      throw new Error(`Invalid target index: ${targetIndex}`);
    }

    const fromIndex = this.currentIndex;
    const fromRole = this.getCurrentSlot();

    this.currentIndex = targetIndex;
    this.rotationCount++;

    const toRole = this.getCurrentSlot();

    // 记录历史
    this.history.push(`${fromRole.name} → ${toRole.name} (jump)`);

    // 触发事件
    this.emit({
      type: 'rotate',
      fromIndex,
      toIndex: targetIndex,
      fromRole,
      toRole,
      timestamp: Date.now(),
    });

    return toRole;
  }

  /**
   * 计算下一个索引
   * @param currentIndex - 当前索引
   * @returns 下一个索引
   */
  private calculateNextIndex(currentIndex: number): number {
    const totalSlots = this.slots.length;

    if (this.direction === 'clockwise') {
      return (currentIndex + 1) % totalSlots;
    } else {
      return (currentIndex - 1 + totalSlots) % totalSlots;
    }
  }

  /**
   * 查找下一个活跃的角色索引
   * @param fromIndex - 起始索引
   * @param startIndex - 开始查找的索引
   * @returns 下一个活跃角色的索引
   */
  private findNextActiveIndex(fromIndex: number, startIndex: number): number {
    const totalSlots = this.slots.length;
    let attempts = 0;
    let current = startIndex;

    while (attempts < totalSlots) {
      const slot = this.slots[current];

      if (slot && slot.isActive) {
        return current;
      }

      // 继续查找
      if (this.direction === 'clockwise') {
        current = (current + 1) % totalSlots;
      } else {
        current = (current - 1 + totalSlots) % totalSlots;
      }

      attempts++;
    }

    // 如果没有找到活跃角色，返回原索引
    return fromIndex;
  }

  // ============================================
  // 角色状态管理
  // ============================================

  /**
   * 设置角色活跃状态
   * @param index - 角色槽位索引
   * @param isActive - 是否活跃
   */
  setActive(index: number, isActive: boolean): void {
    if (index < 0 || index >= this.slots.length) {
      throw new Error(`Invalid index: ${index}`);
    }

    const slot = this.slots[index];
    const wasActive = slot.isActive;
    slot.isActive = isActive;

    // 触发事件
    this.emit({
      type: isActive ? 'activate' : 'deactivate',
      fromIndex: index,
      toIndex: index,
      fromRole: slot,
      toRole: slot,
      timestamp: Date.now(),
    });

    // 如果当前角色被设为不活跃，自动切换到下一个
    if (!isActive && wasActive && this.currentIndex === index && this.skipInactive) {
      this.next();
    }
  }

  /**
   * 获取角色活跃状态
   * @param index - 角色槽位索引
   * @returns 是否活跃
   */
  isActive(index: number): boolean {
    if (index < 0 || index >= this.slots.length) {
      return false;
    }
    return this.slots[index].isActive;
  }

  // ============================================
  // 状态查询
  // ============================================

  /**
   * 获取当前角色槽位
   * @returns 当前角色槽位
   */
  getCurrentSlot(): RoleSlot {
    return this.slots[this.currentIndex];
  }

  /**
   * 获取当前索引
   * @returns 当前槽位索引
   */
  getCurrentIndex(): number {
    return this.currentIndex;
  }

  /**
   * 获取所有角色槽位
   * @returns 角色槽位列表
   */
  getAllSlots(): RoleSlot[] {
    return [...this.slots];
  }

  /**
   * 获取指定索引的角色槽位
   * @param index - 槽位索引
   * @returns 角色槽位
   */
  getSlot(index: number): RoleSlot | undefined {
    return this.slots[index];
  }

  /**
   * 获取系统状态
   * @returns 轮替系统状态
   */
  getState(): TurnOrderState {
    return {
      currentIndex: this.currentIndex,
      rotationCount: this.rotationCount,
      history: [...this.history],
      isPaused: this.isPaused,
    };
  }

  /**
   * 获取轮替顺序预览
   * @param count - 预览步数
   * @returns 角色名称列表
   */
  getRotationPreview(count: number = 4): string[] {
    const preview: string[] = [];
    let index = this.currentIndex;

    for (let i = 0; i < count; i++) {
      index = this.calculateNextIndex(index);

      if (this.skipInactive) {
        index = this.findNextActiveIndex(this.currentIndex, index);
      }

      const slot = this.slots[index];
      if (slot) {
        preview.push(slot.name);
      }
    }

    return preview;
  }

  // ============================================
  // 配置管理
  // ============================================

  /**
   * 设置轮替方向
   * @param direction - 轮替方向
   */
  setDirection(direction: RotationDirection): void {
    this.direction = direction;
  }

  /**
   * 获取轮替方向
   * @returns 轮替方向
   */
  getDirection(): RotationDirection {
    return this.direction;
  }

  /**
   * 暂停轮替
   */
  pause(): void {
    this.isPaused = true;
    this.emit({
      type: 'pause',
      fromIndex: this.currentIndex,
      toIndex: this.currentIndex,
      fromRole: this.getCurrentSlot(),
      toRole: this.getCurrentSlot(),
      timestamp: Date.now(),
    });
  }

  /**
   * 恢复轮替
   */
  resume(): void {
    this.isPaused = false;
    this.emit({
      type: 'resume',
      fromIndex: this.currentIndex,
      toIndex: this.currentIndex,
      fromRole: this.getCurrentSlot(),
      toRole: this.getCurrentSlot(),
      timestamp: Date.now(),
    });
  }

  /**
   * 重置轮替系统
   * @param startIndex - 重置后的起始索引
   */
  reset(startIndex: number = 0): void {
    const fromIndex = this.currentIndex;
    const fromRole = this.getCurrentSlot();

    this.currentIndex = startIndex;
    this.rotationCount = 0;
    this.history = [];

    const toRole = this.getCurrentSlot();

    this.emit({
      type: 'reset',
      fromIndex,
      toIndex: startIndex,
      fromRole,
      toRole,
      timestamp: Date.now(),
    });
  }

  // ============================================
  // 事件系统
  // ============================================

  /**
   * 添加事件监听器
   * @param listener - 监听器函数
   */
  on(listener: TurnOrderListener): void {
    this.listeners.push(listener);
  }

  /**
   * 移除事件监听器
   * @param listener - 监听器函数
   */
  off(listener: TurnOrderListener): void {
    const index = this.listeners.indexOf(listener);
    if (index > -1) {
      this.listeners.splice(index, 1);
    }
  }

  /**
   * 触发事件
   * @param event - 轮替事件
   */
  private emit(event: TurnOrderEvent): void {
    this.listeners.forEach(listener => {
      try {
        listener(event);
      } catch (error) {
        console.error('TurnOrderSystem listener error:', error);
      }
    });
  }

  // ============================================
  // 工具方法
  // ============================================

  /**
   * 获取角色在轮替顺序中的位置
   * @param roleId - 角色ID
   * @returns 槽位索引，未找到返回-1
   */
  findRoleIndex(roleId: string): number {
    return this.slots.findIndex(slot => slot.id === roleId);
  }

  /**
   * 获取角色在轮替顺序中的位置（按名称）
   * @param roleName - 角色名称
   * @returns 槽位索引，未找到返回-1
   */
  findRoleIndexByName(roleName: string): number {
    return this.slots.findIndex(slot => slot.name === roleName);
  }

  /**
   * 检查是否完成一轮
   * @returns 是否完成一轮
   */
  isCompleteRound(): boolean {
    return this.rotationCount > 0 && this.currentIndex === 0;
  }

  /**
   * 获取活跃角色数量
   * @returns 活跃角色数量
   */
  getActiveCount(): number {
    return this.slots.filter(slot => slot.isActive).length;
  }

  /**
   * 获取轮替顺序描述
   * @returns 轮替顺序字符串
   */
  getOrderDescription(): string {
    const activeSlots = this.slots
      .filter(slot => slot.isActive)
      .map(slot => slot.name);

    return activeSlots.join(' → ');
  }
}

// ============================================
// 导出便捷函数
// ============================================

/**
 * 创建默认的顺时针轮替系统
 * 顺序：玩家 → 朱雀 → 卡莲 → C.C.
 */
export function createDefaultTurnOrder(): TurnOrderSystem {
  return TurnOrderSystem.createDefault();
}

/**
 * 创建自定义轮替系统
 * @param slots - 角色槽位配置
 * @param startIndex - 起始索引
 */
export function createCustomTurnOrder(
  slots: Omit<RoleSlot, 'index'>[],
  startIndex: number = 0
): TurnOrderSystem {
  return new TurnOrderSystem({
    slots,
    direction: 'clockwise',
    startIndex,
    skipInactive: true,
  });
}

export default TurnOrderSystem;
