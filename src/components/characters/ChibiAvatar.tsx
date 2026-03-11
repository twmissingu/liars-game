import React from 'react';
import type { AnimationState } from '../../types';

interface ChibiAvatarProps {
  characterId: 'lelouch' | 'cc' | 'suzaku' | 'kallen';
  size?: number;
  avatarNumber?: number; // 固定头像编号 1-4
  animationState?: AnimationState;
}

export const ChibiAvatar: React.FC<ChibiAvatarProps> = ({ 
  characterId, 
  size = 160,
  avatarNumber,
  animationState = 'idle'
}) => {
  // 使用传入的头像编号，如果没有则随机
  const num = avatarNumber || Math.floor(Math.random() * 4) + 1;
  const avatarSrc = `avatars/${characterId}/${num}.png`;
  
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
