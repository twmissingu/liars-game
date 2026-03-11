import React from 'react';
import type { AnimationState } from '../../types';

interface ChibiAvatarProps {
  characterId: 'lelouch' | 'cc' | 'suzaku' | 'kallen';
  size?: number;
  animationState?: AnimationState;
}

export const ChibiAvatar: React.FC<ChibiAvatarProps> = ({ 
  characterId, 
  size = 80,
  animationState = 'idle'
}) => {
  // 使用随机头像
  const avatarNumber = Math.floor(Math.random() * 4) + 1;
  const avatarSrc = `/avatars/${characterId}/${avatarNumber}.png`;
  
  return (
    <img 
      src={avatarSrc}
      alt={characterId}
      style={{ 
        width: size, 
        height: size, 
        borderRadius: '50%',
        objectFit: 'cover',
        border: '3px solid #d4af37'
      }}
    />
  );
};
