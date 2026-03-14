/**
 * =============================================================================
 * Code Geass: Liar's Game - 优化的头像组件
 * =============================================================================
 *
 * 功能特性：
 * - WebP格式优先，PNG回退
 * - Intersection Observer实现懒加载
 * - 分辨率适配 (根据设备DPR自动选择small/medium/large)
 * - Loading占位符
 *
 * @author Code Agent
 * @version 3.0.0
 */

import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';

interface OptimizedAvatarProps {
  characterId: 'lelouch' | 'cc' | 'suzaku' | 'kallen';
  size?: number;
  avatarNumber?: number;
  priority?: boolean; // 是否优先加载（预加载）
  onLoad?: () => void;
}

// 检测浏览器是否支持WebP
const supportsWebP = (): boolean => {
  const canvas = document.createElement('canvas');
  if (canvas.getContext && canvas.getContext('2d')) {
    return canvas.toDataURL('image/webp').indexOf('data:image/webp') === 0;
  }
  return false;
};

// 根据设备像素比和显示尺寸获取合适的图片尺寸名称
const getOptimalSizeName = (displaySize: number): 'small' | 'medium' | 'large' => {
  const dpr = window.devicePixelRatio || 1;
  const actualSize = displaySize * dpr;

  if (actualSize <= 50) return 'small';
  if (actualSize <= 100) return 'medium';
  return 'large';
};

// 缓存WebP支持检测结果
let webpSupportedCache: boolean | null = null;
const checkWebPSupport = (): boolean => {
  if (webpSupportedCache === null) {
    webpSupportedCache = supportsWebP();
  }
  return webpSupportedCache;
};

export const OptimizedAvatar: React.FC<OptimizedAvatarProps> = ({
  characterId,
  size = 160,
  avatarNumber,
  priority = false,
  onLoad,
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(priority);
  const [hasError, setHasError] = useState(false);
  const [useWebP, setUseWebP] = useState(true);
  const imgRef = useRef<HTMLImageElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // 使用传入的头像编号，如果没有则只随机一次并保存到state
  const [randomNum] = useState(() => Math.floor(Math.random() * 4) + 1);
  const num = avatarNumber || randomNum;

  // 获取最优尺寸名称
  const sizeName = useMemo(() => getOptimalSizeName(size), [size]);

  // 构建图片URL（优先WebP，回退PNG）
  const getImageSrc = useCallback(
    (useWebPFormat: boolean = true): string => {
      const basePath = `avatars/${characterId}/${num}`;
      const ext = useWebPFormat ? 'webp' : 'png';
      // 使用对应尺寸的图片
      return `${basePath}-${sizeName}.${ext}`;
    },
    [characterId, num, sizeName]
  );

  // Intersection Observer实现懒加载
  useEffect(() => {
    if (priority || isInView) return;

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setIsInView(true);
            observer.disconnect();
          }
        });
      },
      {
        rootMargin: '50px', // 提前50px开始加载
        threshold: 0.1,
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [priority]);

  // 预加载图片，支持WebP/PNG回退
  useEffect(() => {
    if (!isInView) return;

    const tryLoadImage = async () => {
      // 首先检查WebP支持
      const webpSupported = checkWebPSupport();

      // 尝试加载WebP
      if (webpSupported && useWebP) {
        const webpImg = new Image();
        webpImg.src = getImageSrc(true);

        webpImg.onload = () => {
          setIsLoaded(true);
          onLoad?.();
        };

        webpImg.onerror = () => {
          // WebP加载失败，回退到PNG
          setUseWebP(false);
        };
      } else {
        // 直接加载PNG
        const pngImg = new Image();
        pngImg.src = getImageSrc(false);

        pngImg.onload = () => {
          setIsLoaded(true);
          onLoad?.();
        };

        pngImg.onerror = () => {
          setHasError(true);
        };
      }
    };

    tryLoadImage();
  }, [isInView, getImageSrc, onLoad, useWebP]);

  return (
    <div
      ref={containerRef}
      style={{
        width: size,
        height: size,
        borderRadius: '8px',
        overflow: 'hidden',
        backgroundColor: '#1a1a24',
        position: 'relative',
      }}
    >
      {/* Loading占位符 */}
      {!isLoaded && !hasError && (
        <div
          style={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#1a1a24',
          }}
        >
          <div
            style={{
              width: size * 0.3,
              height: size * 0.3,
              border: '3px solid rgba(212, 175, 55, 0.2)',
              borderTopColor: '#d4af37',
              borderRadius: '50%',
              animation: 'avatar-spin 1s linear infinite',
            }}
          />
        </div>
      )}

      {/* 错误状态 */}
      {hasError && (
        <div
          style={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#1a1a24',
            color: '#dc2626',
            fontSize: size * 0.2,
          }}
        >
          ?
        </div>
      )}

      {/* 实际图片 */}
      {isInView && (
        <picture>
          {/* WebP格式 - 优先加载 */}
          {checkWebPSupport() && useWebP && <source srcSet={getImageSrc(true)} type="image/webp" />}
          {/* PNG回退 */}
          <img
            ref={imgRef}
            src={getImageSrc(false)}
            alt={characterId}
            loading={priority ? 'eager' : 'lazy'}
            width={size}
            height={size}
            style={{
              width: size,
              height: size,
              objectFit: 'cover',
              opacity: isLoaded ? 1 : 0,
              transition: 'opacity 0.3s ease',
              borderRadius: '8px',
            }}
          />
        </picture>
      )}

      <style>{`
        @keyframes avatar-spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

// 头像预加载管理器
export class AvatarPreloader {
  private static preloadedAvatars = new Set<string>();

  /**
   * 预加载指定角色的所有头像（所有分辨率）
   */
  static preloadCharacter(characterId: 'lelouch' | 'cc' | 'suzaku' | 'kallen'): void {
    const sizes = ['small', 'medium', 'large'];
    const webpSupported = checkWebPSupport();

    for (let i = 1; i <= 4; i++) {
      // 预加载所有尺寸的WebP和PNG
      sizes.forEach(size => {
        const webpSrc = `avatars/${characterId}/${i}-${size}.webp`;
        const pngSrc = `avatars/${characterId}/${i}-${size}.png`;

        // 预加载WebP（如果支持）
        if (webpSupported && !this.preloadedAvatars.has(webpSrc)) {
          const webpImg = new Image();
          webpImg.src = webpSrc;
          this.preloadedAvatars.add(webpSrc);
        }

        // 预加载PNG（回退）
        if (!this.preloadedAvatars.has(pngSrc)) {
          const pngImg = new Image();
          pngImg.src = pngSrc;
          this.preloadedAvatars.add(pngSrc);
        }
      });
    }
  }

  /**
   * 预加载所有角色头像
   */
  static preloadAll(): void {
    const characters: ('lelouch' | 'cc' | 'suzaku' | 'kallen')[] = [
      'lelouch',
      'cc',
      'suzaku',
      'kallen',
    ];
    characters.forEach(char => this.preloadCharacter(char));
  }

  /**
   * 预加载特定头像（指定分辨率）
   */
  static preloadAvatar(
    characterId: string,
    avatarNumber: number,
    size: 'small' | 'medium' | 'large' = 'medium'
  ): void {
    const webpSupported = checkWebPSupport();

    if (webpSupported) {
      const webpSrc = `avatars/${characterId}/${avatarNumber}-${size}.webp`;
      if (!this.preloadedAvatars.has(webpSrc)) {
        const img = new Image();
        img.src = webpSrc;
        this.preloadedAvatars.add(webpSrc);
      }
    }

    const pngSrc = `avatars/${characterId}/${avatarNumber}-${size}.png`;
    if (!this.preloadedAvatars.has(pngSrc)) {
      const img = new Image();
      img.src = pngSrc;
      this.preloadedAvatars.add(pngSrc);
    }
  }

  /**
   * 获取已预加载的头像数量
   */
  static getPreloadedCount(): number {
    return this.preloadedAvatars.size;
  }

  /**
   * 清除预加载缓存
   */
  static clearCache(): void {
    this.preloadedAvatars.clear();
  }
}

export default OptimizedAvatar;
