/**
 * =============================================================================
 * 角色轮替系统 Hook
 * =============================================================================
 *
 * 提供React组件使用角色轮替系统的接口
 * 包含状态管理、视觉反馈和切换控制
 *
 * @author Code Agent
 * @version 1.0.0
 */

import { useState, useCallback, useRef, useEffect, useMemo } from 'react';
import {
  TurnOrderSystem,
  RoleSlot,
  TurnOrderEvent,
  TurnOrderState,
  RotationDirection,
} from '../core/TurnOrderSystem';
import type { CharacterId } from '../types';

// ============================================
// Hook 返回类型
// ============================================

export interface UseTurnOrderReturn {
  /** 当前激活的角色槽位 */
  currentSlot: RoleSlot;
  /** 当前激活的索引 */
  currentIndex: number;
  /** 所有角色槽位 */
  allSlots: RoleSlot[];
  /** 系统状态 */
  state: TurnOrderState;
  /** 轮替方向 */
  direction: RotationDirection;
  /** 是否暂停 */
  isPaused: boolean;

  // 控制方法
  /** 切换到下一个角色 */
  next: () => void;
  /** 切换到指定角色 */
  goto: (index: number) => void;
  /** 暂停轮替 */
  pause: () => void;
  /** 恢复轮替 */
  resume: () => void;
  /** 重置系统 */
  reset: (startIndex?: number) => void;
  /** 设置角色活跃状态 */
  setActive: (index: number, isActive: boolean) => void;
  /** 切换轮替方向 */
  toggleDirection: () => void;

  // 查询方法
  /** 获取轮替顺序预览 */
  getPreview: (count?: number) => string[];
  /** 获取轮替顺序描述 */
  getOrderDescription: () => string;
  /** 检查是否完成一轮 */
  isCompleteRound: () => boolean;
  /** 获取活跃角色数量 */
  getActiveCount: () => number;
  /** 查找角色索引 */
  findRoleIndex: (roleId: string) => number;

  // 事件监听
  /** 添加事件监听器 */
  on: (listener: (event: TurnOrderEvent) => void) => void;
  /** 移除事件监听器 */
  off: (listener: (event: TurnOrderEvent) => void) => void;
}

// ============================================
// Hook 参数
// ============================================

export interface UseTurnOrderOptions {
  /** 玩家角色 */
  playerCharacter?: CharacterId;
  /** AI角色列表 */
  aiCharacters?: { id: string; name: string; characterId: CharacterId; isActive: boolean }[];
  /** 起始索引 */
  startIndex?: number;
  /** 轮替方向 */
  direction?: RotationDirection;
  /** 是否跳过非活跃角色 */
  skipInactive?: boolean;
  /** 轮替事件回调 */
  onRotate?: (from: RoleSlot, to: RoleSlot) => void;
  /** 角色激活状态变化回调 */
  onActiveChange?: (index: number, isActive: boolean) => void;
}

// ============================================
// Hook 实现
// ============================================

export function useTurnOrder(options: UseTurnOrderOptions = {}): UseTurnOrderReturn {
  const {
    playerCharacter,
    aiCharacters,
    startIndex = 0,
    direction = 'clockwise',
    onRotate,
    onActiveChange,
  } = options;

  // 创建轮替系统实例
  const systemRef = useRef<TurnOrderSystem>(
    playerCharacter && aiCharacters
      ? TurnOrderSystem.fromGameState(playerCharacter, aiCharacters)
      : TurnOrderSystem.createDefault()
  );

  // 使用state来触发重渲染
  const [currentIndex, setCurrentIndex] = useState(startIndex);
  const [isPaused, setIsPaused] = useState(false);
  const [rotationCount, setRotationCount] = useState(0);
  const [history, setHistory] = useState<string[]>([]);

  // 获取当前状态
  const currentSlot = useMemo(() => systemRef.current.getCurrentSlot(), [currentIndex]);
  const allSlots = useMemo(() => systemRef.current.getAllSlots(), []);
  const currentDirection = useMemo(() => systemRef.current.getDirection(), []);

  // 系统状态
  const state: TurnOrderState = useMemo(
    () => ({
      currentIndex,
      rotationCount,
      history,
      isPaused,
    }),
    [currentIndex, rotationCount, history, isPaused]
  );

  // 初始化
  useEffect(() => {
    const system = systemRef.current;

    // 设置初始方向
    system.setDirection(direction);

    // 设置起始索引
    if (startIndex !== 0) {
      system.goto(startIndex);
    }

    // 监听事件
    const handleEvent = (event: TurnOrderEvent) => {
      switch (event.type) {
        case 'rotate':
          setCurrentIndex(event.toIndex);
          setRotationCount(prev => prev + 1);
          setHistory(prev => [...prev, `${event.fromRole.name} → ${event.toRole.name}`]);
          onRotate?.(event.fromRole, event.toRole);
          break;
        case 'activate':
        case 'deactivate':
          onActiveChange?.(event.toIndex, event.type === 'activate');
          break;
        case 'pause':
          setIsPaused(true);
          break;
        case 'resume':
          setIsPaused(false);
          break;
        case 'reset':
          setCurrentIndex(event.toIndex);
          setRotationCount(0);
          setHistory([]);
          break;
      }
    };

    system.on(handleEvent);

    return () => {
      system.off(handleEvent);
    };
  }, [direction, startIndex, onRotate, onActiveChange]);

  // 控制方法
  const next = useCallback(() => {
    systemRef.current.next();
  }, []);

  const goto = useCallback((index: number) => {
    systemRef.current.goto(index);
  }, []);

  const pause = useCallback(() => {
    systemRef.current.pause();
  }, []);

  const resume = useCallback(() => {
    systemRef.current.resume();
  }, []);

  const reset = useCallback((newStartIndex: number = 0) => {
    systemRef.current.reset(newStartIndex);
  }, []);

  const setActive = useCallback((index: number, active: boolean) => {
    systemRef.current.setActive(index, active);
  }, []);

  const toggleDirection = useCallback(() => {
    const newDirection = currentDirection === 'clockwise' ? 'counterclockwise' : 'clockwise';
    systemRef.current.setDirection(newDirection);
  }, [currentDirection]);

  // 查询方法
  const getPreview = useCallback((count: number = 4) => {
    return systemRef.current.getRotationPreview(count);
  }, []);

  const getOrderDescription = useCallback(() => {
    return systemRef.current.getOrderDescription();
  }, []);

  const isCompleteRound = useCallback(() => {
    return systemRef.current.isCompleteRound();
  }, []);

  const getActiveCount = useCallback(() => {
    return systemRef.current.getActiveCount();
  }, []);

  const findRoleIndex = useCallback((roleId: string) => {
    return systemRef.current.findRoleIndex(roleId);
  }, []);

  // 事件监听
  const on = useCallback((listener: (event: TurnOrderEvent) => void) => {
    systemRef.current.on(listener);
  }, []);

  const off = useCallback((listener: (event: TurnOrderEvent) => void) => {
    systemRef.current.off(listener);
  }, []);

  return {
    currentSlot,
    currentIndex,
    allSlots,
    state,
    direction: currentDirection,
    isPaused,
    next,
    goto,
    pause,
    resume,
    reset,
    setActive,
    toggleDirection,
    getPreview,
    getOrderDescription,
    isCompleteRound,
    getActiveCount,
    findRoleIndex,
    on,
    off,
  };
}

export default useTurnOrder;
