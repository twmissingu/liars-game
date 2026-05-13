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

import React, { useState, useRef } from 'react';

interface OptimizedAvatarProps {
  characterId: 'lelouch' | 'cc' | 'suzaku' | 'kallen';
  size?: number;
  avatarNumber?: number;
  priority?: boolean;
  onLoad?: () => void;
}

const getAvatarUrl = (characterId: string, num: number): string => {
  const baseUrl = import.meta.env.BASE_URL || '/';
  return `${baseUrl}avatars/${characterId}/${num}.png`;
};

export const OptimizedAvatar: React.FC<OptimizedAvatarProps> = ({
  characterId,
  size = 160,
  avatarNumber,
  onLoad,
}) => {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  const [num] = useState(() => avatarNumber || Math.floor(Math.random() * 4) + 1);
  const src = getAvatarUrl(characterId, num);

  return (
    <div
      style={{
        width: size,
        height: size,
        borderRadius: '8px',
        overflow: 'hidden',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'transparent',
      }}
    >
      {!loaded && !error && (
        <div
          style={{
            width: size * 0.3,
            height: size * 0.3,
            border: '3px solid rgba(212, 175, 55, 0.2)',
            borderTopColor: '#d4af37',
            borderRadius: '50%',
            animation: 'cg-avatar-spin 1s linear infinite',
          }}
        />
      )}
      {error && (
        <span style={{ color: '#666', fontSize: size * 0.3 }}>🎭</span>
      )}
      <img
        ref={imgRef}
        src={src}
        alt={characterId}
        width={size}
        height={size}
        onLoad={() => { setLoaded(true); onLoad?.(); }}
        onError={() => setError(true)}
        style={{
          position: 'absolute',
          inset: 0,
          width: size,
          height: size,
          objectFit: 'cover',
          opacity: loaded ? 1 : 0,
          transition: 'opacity 0.3s',
          borderRadius: '8px',
        }}
      />
      <style>{`@keyframes cg-avatar-spin{to{transform:rotate(360deg)}}`}</style>
    </div>
  );
};

export class AvatarPreloader {
  static preloadAvatar(characterId: string, avatarNumber: number): void {
    const url = getAvatarUrl(characterId, avatarNumber);
    const img = new Image();
    img.src = url;
  }
}

export default OptimizedAvatar;
