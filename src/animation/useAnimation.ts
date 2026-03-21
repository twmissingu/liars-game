/**
 * =============================================================================
 * Code Geass: Liar's Game - 动画Hook
 * =============================================================================
 *
 * 提供完整的动画状态管理能力，实现动画与UI的解耦
 *
 * @module animation/useAnimation
 * @version 1.0.0
 */

import { useState, useCallback, useRef, useEffect } from 'react';
import type {
  AnimationState,
  PersistentAnimationState,
  AnimationQueueItem,
  AnimationQueueState,
  AnimationType,
  PlayerId,
  UseAnimationReturn,
  PlayerChallengeAnimationState,
} from './types';
import { ANIMATION_CONFIG, QUEUE_CONFIG, DEFAULT_ANIMATION_TEXTS } from './constants';

// ============================================
// 工具函数
// ============================================

/** 生成唯一ID */
const generateId = (): string => `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;

/** 创建默认动画状态 */
const createDefaultAnimationState = (playerId: PlayerId): AnimationState => ({
  type: null,
  text: '',
  startTime: 0,
  duration: 0,
  playerId,
});

// ============================================
// Hook实现
// ============================================

export function useAnimation(): UseAnimationReturn {
  // 动画状态
  const [animations, setAnimations] = useState<Record<PlayerId, AnimationState>>({
    player: createDefaultAnimationState('player'),
    ai: createDefaultAnimationState('ai'),
    ai2: createDefaultAnimationState('ai2'),
    ai3: createDefaultAnimationState('ai3'),
  });

  // 持续动画状态
  const [persistentAnimation, setPersistentAnimation] = useState<PersistentAnimationState>({
    playerId: null,
    type: null,
    text: '',
    startTime: 0,
  });

  // 动画队列
  const [queue, setQueue] = useState<AnimationQueueState>({
    items: [],
    current: null,
    isProcessing: false,
  });

  // 玩家质疑动画状态
  const [playerChallengeAnimation, setPlayerChallengeAnimation] = useState<PlayerChallengeAnimationState>({
    show: false,
    targetId: null,
  });

  // 定时器引用
  const timersRef = useRef<Record<string, NodeJS.Timeout>>({});
  const processingRef = useRef(false);

  // ============================================
  // 动画触发
  // ============================================

  const triggerAnimation = useCallback((
    playerId: PlayerId,
    type: AnimationType,
    text?: string
  ) => {
    const config = ANIMATION_CONFIG[type];
    const animationText = text || DEFAULT_ANIMATION_TEXTS[type];

    setAnimations(prev => ({
      ...prev,
      [playerId]: {
        type,
        text: animationText,
        startTime: Date.now(),
        duration: config.duration,
        playerId,
      },
    }));

    // 清除之前的定时器
    if (timersRef.current[playerId]) {
      clearTimeout(timersRef.current[playerId]);
    }

    // 设置自动清除定时器
    timersRef.current[playerId] = setTimeout(() => {
      setAnimations(prev => ({
        ...prev,
        [playerId]: createDefaultAnimationState(playerId),
      }));
    }, config.duration);
  }, []);

  const triggerPersistentAnimation = useCallback((
    playerId: PlayerId,
    type: 'play' | 'aiPlay' | 'challenge',
    text: string
  ) => {
    // 清除之前的持续动画
    if (timersRef.current.persistent) {
      clearTimeout(timersRef.current.persistent);
    }

    setPersistentAnimation({
      playerId,
      type,
      text,
      startTime: Date.now(),
    });
  }, []);

  // ============================================
  // 动画清除
  // ============================================

  const clearAnimation = useCallback((playerId: PlayerId) => {
    if (timersRef.current[playerId]) {
      clearTimeout(timersRef.current[playerId]);
      delete timersRef.current[playerId];
    }

    setAnimations(prev => ({
      ...prev,
      [playerId]: createDefaultAnimationState(playerId),
    }));
  }, []);

  const clearPersistentAnimation = useCallback(() => {
    if (timersRef.current.persistent) {
      clearTimeout(timersRef.current.persistent);
      delete timersRef.current.persistent;
    }

    setPersistentAnimation({
      playerId: null,
      type: null,
      text: '',
      startTime: 0,
    });
  }, []);

  // ============================================
  // 队列管理
  // ============================================

  const enqueueAnimation = useCallback((
    playerId: PlayerId,
    type: AnimationType,
    text?: string,
    priority?: number
  ) => {
    const config = ANIMATION_CONFIG[type];
    const queueItem: AnimationQueueItem = {
      id: generateId(),
      playerId,
      type,
      text: text || DEFAULT_ANIMATION_TEXTS[type],
      duration: config.duration,
      priority: priority ?? config.priority,
      timestamp: Date.now(),
    };

    setQueue(prev => {
      // 检查队列是否已满
      if (prev.items.length >= QUEUE_CONFIG.MAX_QUEUE_SIZE) {
        console.warn('[Animation Queue] Queue is full, dropping oldest item');
        return {
          ...prev,
          items: [...prev.items.slice(1), queueItem],
        };
      }

      return {
        ...prev,
        items: [...prev.items, queueItem],
      };
    });
  }, []);

  // ============================================
  // 队列处理
  // ============================================

  useEffect(() => {
    if (processingRef.current || queue.items.length === 0 || queue.isProcessing) {
      return;
    }

    processingRef.current = true;

    // 按优先级排序
    const sortedItems = [...queue.items].sort((a, b) => b.priority - a.priority);
    const nextItem = sortedItems[0];

    setQueue(prev => ({
      ...prev,
      current: nextItem,
      isProcessing: true,
      items: prev.items.filter(item => item.id !== nextItem.id),
    }));

    // 触发动画
    triggerAnimation(nextItem.playerId, nextItem.type, nextItem.text);

    // 处理完成后重置状态
    timersRef.current.queue = setTimeout(() => {
      setQueue(prev => ({
        ...prev,
        current: null,
        isProcessing: false,
      }));
      processingRef.current = false;
    }, nextItem.duration + QUEUE_CONFIG.BUFFER_TIME);

    return () => {
      if (timersRef.current.queue) {
        clearTimeout(timersRef.current.queue);
      }
    };
  }, [queue.items, queue.isProcessing, triggerAnimation]);

  // ============================================
  // 清理
  // ============================================

  useEffect(() => {
    return () => {
      // 清理所有定时器
      Object.values(timersRef.current).forEach(timer => {
        clearTimeout(timer);
      });
      timersRef.current = {};
    };
  }, []);

  // ============================================
  // 返回值
  // ============================================

  // 为了兼容性，返回player的动画状态
  const animation = animations.player;

  return {
    animation,
    animations,
    persistentAnimation,
    playerChallengeAnimation,
    setPlayerChallengeAnimation,
    triggerAnimation,
    triggerPersistentAnimation,
    clearAnimation,
    clearPersistentAnimation,
    queue,
    enqueueAnimation,
  };
}

export default useAnimation;
