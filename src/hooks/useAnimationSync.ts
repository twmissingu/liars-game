/**
 * =============================================================================
 * Code Geass: Liar's Game - 动画同步Hook
 * =============================================================================
 *
 * 管理AI后台处理与前端动画呈现的同步
 * 确保状态更新与动画完成时机一致
 *
 * 核心功能：
 * 1. 动画完成回调管理
 * 2. AI思考状态指示
 * 3. 状态更新队列控制
 * 4. 防止动画跳跃和卡顿
 *
 * @module hooks/useAnimationSync
 * @version 1.0.0
 */

import { useCallback, useRef, useState, useEffect } from 'react';
import {
  ANIMATION_DURATION,
  AI_DELAY,
  SYNC_CONFIG,
  calculateWaitTime,
} from '../constants/animation';

/** 动画类型 */
export type AnimationType = 'play' | 'aiPlay' | 'challenge' | 'dodge' | 'hit' | 'turnTransition';

/** 动画状态 */
interface AnimationState {
  type: AnimationType | null;
  startTime: number;
  duration: number;
  completed: boolean;
}

/** 待处理的状态更新 */
interface PendingStateUpdate {
  id: string;
  execute: () => void;
  waitForAnimation: AnimationType | null;
  minDelay: number;
}

/**
 * 动画同步Hook
 * @returns 同步控制方法
 */
export function useAnimationSync() {
  // 当前动画状态
  const [currentAnimation, setCurrentAnimation] = useState<AnimationState>({
    type: null,
    startTime: 0,
    duration: 0,
    completed: true,
  });

  // AI思考状态
  const [isAIThinking, setIsAIThinking] = useState(false);
  const [thinkingAIId, setThinkingAIId] = useState<string | null>(null);

  // 待处理的状态更新队列
  const pendingUpdatesRef = useRef<PendingStateUpdate[]>([]);
  const processingRef = useRef(false);
  const animationTimersRef = useRef<Map<string, NodeJS.Timeout>>(new Map());

  /**
   * 开始一个动画
   * @param type - 动画类型
   * @param customDuration - 自定义持续时间（可选）
   * @returns 动画ID
   */
  const startAnimation = useCallback((type: AnimationType, customDuration?: number): string => {
    const duration = customDuration ?? ANIMATION_DURATION[type.toUpperCase() as keyof typeof ANIMATION_DURATION] ?? 500;
    const animationId = `${type}_${Date.now()}`;

    setCurrentAnimation({
      type,
      startTime: Date.now(),
      duration,
      completed: false,
    });

    // 设置动画完成定时器
    const timer = setTimeout(() => {
      setCurrentAnimation(prev => ({
        ...prev,
        completed: true,
      }));
      processPendingUpdates();
    }, duration);

    animationTimersRef.current.set(animationId, timer);

    return animationId;
  }, []);

  /**
   * 结束当前动画
   */
  const endAnimation = useCallback(() => {
    setCurrentAnimation({
      type: null,
      startTime: 0,
      duration: 0,
      completed: true,
    });
    processPendingUpdates();
  }, []);

  /**
   * 设置AI思考状态
   * @param aiId - AI玩家ID
   * @param isThinking - 是否正在思考
   */
  const setAIThinkingState = useCallback((aiId: string | null, isThinking: boolean) => {
    setThinkingAIId(aiId);
    setIsAIThinking(isThinking);
  }, []);

  /**
   * 等待指定时间
   * @param ms - 等待毫秒数
   * @returns Promise
   */
  const wait = useCallback((ms: number): Promise<void> => {
    return new Promise(resolve => setTimeout(resolve, ms));
  }, []);

  /**
   * 等待当前动画完成
   * @returns Promise
   */
  const waitForAnimation = useCallback(async (): Promise<void> => {
    if (currentAnimation.completed || !currentAnimation.type) {
      return;
    }

    const elapsed = Date.now() - currentAnimation.startTime;
    const remaining = Math.max(0, currentAnimation.duration - elapsed);

    if (remaining > 0) {
      await wait(remaining + SYNC_CONFIG.STATE_UPDATE_BUFFER);
    }
  }, [currentAnimation, wait]);

  /**
   * 处理待更新的状态队列
   */
  const processPendingUpdates = useCallback(() => {
    if (processingRef.current) return;
    processingRef.current = true;

    const now = Date.now();
    const updatesToProcess: PendingStateUpdate[] = [];
    const remainingUpdates: PendingStateUpdate[] = [];

    for (const update of pendingUpdatesRef.current) {
      const shouldWaitForAnimation = update.waitForAnimation &&
        !currentAnimation.completed &&
        currentAnimation.type === update.waitForAnimation;

      const minDelayElapsed = now >= update.minDelay;

      if (!shouldWaitForAnimation && minDelayElapsed) {
        updatesToProcess.push(update);
      } else {
        remainingUpdates.push(update);
      }
    }

    pendingUpdatesRef.current = remainingUpdates;

    // 执行可以处理的更新
    for (const update of updatesToProcess) {
      try {
        update.execute();
      } catch (error) {
        console.error(`[useAnimationSync] 执行状态更新失败:`, error);
      }
    }

    processingRef.current = false;

    // 如果还有未处理的更新，继续检查
    if (remainingUpdates.length > 0) {
      setTimeout(processPendingUpdates, 50);
    }
  }, [currentAnimation]);

  /**
   * 排队一个状态更新
   * @param execute - 执行函数
   * @param options - 配置选项
   * @returns 更新ID
   */
  const queueStateUpdate = useCallback((
    execute: () => void,
    options: {
      waitForAnimation?: AnimationType;
      delay?: number;
      id?: string;
    } = {}
  ): string => {
    const id = options.id ?? `update_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    const minDelay = Date.now() + (options.delay ?? 0);

    const update: PendingStateUpdate = {
      id,
      execute,
      waitForAnimation: options.waitForAnimation ?? null,
      minDelay,
    };

    pendingUpdatesRef.current.push(update);

    // 立即尝试处理
    processPendingUpdates();

    return id;
  }, [processPendingUpdates]);

  /**
   * 执行AI回合流程（带同步控制）
   * @param aiId - AI玩家ID
   * @param actions - AI动作序列
   */
  const executeAITurn = useCallback(async (
    aiId: string,
    actions: {
      think: () => Promise<void>;
      play: () => Promise<void>;
      onComplete: () => void;
    }
  ): Promise<void> => {
    // 1. 显示思考状态
    setAIThinkingState(aiId, true);
    await wait(AI_DELAY.THINKING);
    setAIThinkingState(aiId, false);

    // 2. 执行出牌
    await actions.play();

    // 3. 开始出牌动画
    startAnimation('aiPlay');

    // 4. 等待动画完成后再继续
    await waitForAnimation();

    // 5. 等待额外缓冲时间
    await wait(AI_DELAY.PLAY_TO_CHALLENGE - ANIMATION_DURATION.AI_PLAY);

    // 6. 完成
    actions.onComplete();
  }, [setAIThinkingState, startAnimation, waitForAnimation, wait]);

  /**
   * 执行质疑流程（带同步控制）
   * @param actions - 质疑动作序列
   */
  const executeChallenge = useCallback(async (
    actions: {
      challenge: () => Promise<void>;
      onComplete: () => void;
    }
  ): Promise<void> => {
    // 1. 执行质疑
    await actions.challenge();

    // 2. 开始质疑动画
    startAnimation('challenge');

    // 3. 等待动画完成
    await waitForAnimation();

    // 4. 等待额外缓冲时间
    await wait(AI_DELAY.CHALLENGE_TO_RESOLVE - ANIMATION_DURATION.CHALLENGE);

    // 5. 完成
    actions.onComplete();
  }, [startAnimation, waitForAnimation, wait]);

  /**
   * 执行Geass结果展示（带同步控制）
   * @param isHit - 是否命中
   * @param actions - 结果动作序列
   */
  const executeGeassResult = useCallback(async (
    isHit: boolean,
    actions: {
      showResult: () => Promise<void>;
      onComplete: () => void;
    }
  ): Promise<void> => {
    // 1. 显示结果
    await actions.showResult();

    // 2. 开始命中/闪避动画
    startAnimation(isHit ? 'hit' : 'dodge');

    // 3. 等待动画完成
    await waitForAnimation();

    // 4. 等待额外展示时间
    await wait(AI_DELAY.GEASS_RESULT_DISPLAY - Math.max(ANIMATION_DURATION.HIT, ANIMATION_DURATION.DODGE));

    // 5. 完成
    actions.onComplete();
  }, [startAnimation, waitForAnimation, wait]);

  /**
   * 清除所有待处理的更新和定时器
   */
  const clearAll = useCallback(() => {
    pendingUpdatesRef.current = [];
    processingRef.current = false;

    // 清除所有动画定时器
    animationTimersRef.current.forEach(timer => clearTimeout(timer));
    animationTimersRef.current.clear();

    setCurrentAnimation({
      type: null,
      startTime: 0,
      duration: 0,
      completed: true,
    });

    setIsAIThinking(false);
    setThinkingAIId(null);
  }, []);

  // 清理效果
  useEffect(() => {
    return () => {
      clearAll();
    };
  }, [clearAll]);

  /**
   * 获取当前动画进度（0-1）
   */
  const getAnimationProgress = useCallback((): number => {
    if (currentAnimation.completed || !currentAnimation.type) {
      return 1;
    }

    const elapsed = Date.now() - currentAnimation.startTime;
    return Math.min(1, elapsed / currentAnimation.duration);
  }, [currentAnimation]);

  /**
   * 检查是否可以安全更新状态
   */
  const canUpdateState = useCallback((): boolean => {
    return currentAnimation.completed || !currentAnimation.type;
  }, [currentAnimation]);

  return {
    // 状态
    currentAnimation,
    isAIThinking,
    thinkingAIId,
    animationProgress: getAnimationProgress(),

    // 动画控制
    startAnimation,
    endAnimation,
    waitForAnimation,

    // AI思考状态
    setAIThinkingState,

    // 状态更新队列
    queueStateUpdate,
    canUpdateState,

    // 完整流程控制
    executeAITurn,
    executeChallenge,
    executeGeassResult,

    // 工具
    wait,
    clearAll,
  };
}

export default useAnimationSync;
