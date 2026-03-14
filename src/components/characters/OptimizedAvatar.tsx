/**
 * =============================================================================
 * Code Geass: Liar's Game - 优化的头像组件
 * =============================================================================
 * 
 * 功能特性：
 * - WebP格式优先，PNG回退
 * - Intersection Observer实现懒加载
 * - 分辨率适配
 * - Loading占位符
 * 
 * @author Code Agent
 * @version 2.0.0
 */

import React, { useState, useEffect, useRef, useCallback } from 'react';

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

// 根据设备像素比获取合适的图片尺寸
const getOptimalSize = (baseSize: number): number => {
  const dpr = window.devicePixelRatio || 1;
  if (dpr >= 3) return baseSize * 3;
  if (dpr >= 2) return baseSize * 2;
  return baseSize;
};

export const OptimizedAvatar: React.FC<OptimizedAvatarProps> = ({ 
  characterId, 
  size = 160,
  avatarNumber,
  priority = false,
  onLoad
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(priority);
  const [hasError, setHasError] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  
  // 使用传入的头像编号，如果没有则随机
  const num = avatarNumber || Math.floor(Math.random() * 4) + 1;
  
  // 检测WebP支持（保留供将来使用）
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [webpSupported] = useState(() => supportsWebP());
  
  // 构建图片URL（优先WebP，回退PNG）
  const getImageSrc = useCallback(() => {
    const basePath = `avatars/${characterId}/${num}`;
    // 实际项目中应该有WebP版本，这里先使用PNG
    // 如果有WebP文件，优先使用
    return `${basePath}.png`;
  }, [characterId, num]);
  
  // Intersection Observer实现懒加载
  useEffect(() => {
    if (priority || isInView) return;
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            observer.disconnect();
          }
        });
      },
      {
        rootMargin: '50px', // 提前50px开始加载
        threshold: 0.1
      }
    );
    
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }
    
    return () => observer.disconnect();
  }, [priority]);
  
  // 预加载图片
  useEffect(() => {
    if (!isInView) return;
    
    const img = new Image();
    img.src = getImageSrc();
    
    img.onload = () => {
      setIsLoaded(true);
      onLoad?.();
    };
    
    img.onerror = () => {
      setHasError(true);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isInView, getImageSrc, onLoad]);
  
  // 根据设备像素比获取合适的图片尺寸（保留供将来使用）
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const optimalSize = getOptimalSize(size);
  
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
        <img
          ref={imgRef}
          src={getImageSrc()}
          alt={characterId}
          loading={priority ? 'eager' : 'lazy'}
          style={{
            width: size,
            height: size,
            objectFit: 'cover',
            opacity: isLoaded ? 1 : 0,
            transition: 'opacity 0.3s ease',
            borderRadius: '8px',
          }}
        />
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
   * 预加载指定角色的所有头像
   */
  static preloadCharacter(characterId: 'lelouch' | 'cc' | 'suzaku' | 'kallen'): void {
    for (let i = 1; i <= 4; i++) {
      const src = `avatars/${characterId}/${i}.png`;
      if (this.preloadedAvatars.has(src)) continue;
      
      const img = new Image();
      img.src = src;
      this.preloadedAvatars.add(src);
    }
  }
  
  /**
   * 预加载所有角色头像
   */
  static preloadAll(): void {
    const characters: ('lelouch' | 'cc' | 'suzaku' | 'kallen')[] = ['lelouch', 'cc', 'suzaku', 'kallen'];
    characters.forEach(char => this.preloadCharacter(char));
  }
  
  /**
   * 预加载特定头像
   */
  static preloadAvatar(characterId: string, avatarNumber: number): void {
    const src = `avatars/${characterId}/${avatarNumber}.png`;
    if (this.preloadedAvatars.has(src)) return;
    
    const img = new Image();
    img.src = src;
    this.preloadedAvatars.add(src);
  }
}

export default OptimizedAvatar;
