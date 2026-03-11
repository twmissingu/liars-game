import React from 'react';
import type { AnimationState } from '../../types';

interface ChibiAvatarProps {
  characterId: 'lelouch' | 'cc' | 'suzaku' | 'kallen';
  size?: number;
  animationState?: AnimationState;
}

export const ChibiAvatar: React.FC<ChibiAvatarProps> = ({ 
  characterId, 
  size = 160,
  animationState = 'idle'
}) => {
  // 使用缩略图 - 尺寸为显示尺寸的一半，保持清晰且加载快
  const avatarNumber = Math.floor(Math.random() * 4) + 1;
  const avatarSrc = `avatars/${characterId}/${avatarNumber}.png`;
  
  return (
    <img 
      src={avatarSrc}
      alt={characterId}
      style={{ 
        width: size, 
        height: size, 
        borderRadius: '8px',
        objectFit: 'cover'
      }}
    />
  );
};
