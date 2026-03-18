import React from 'react';
import { OptimizedAvatar, AvatarPreloader } from './OptimizedAvatar';

interface ChibiAvatarProps {
  characterId: 'lelouch' | 'cc' | 'suzaku' | 'kallen';
  size?: number;
  avatarNumber?: number; // 固定头像编号 1-4
  animationState?: 'idle' | 'breathing' | 'playing-card' | 'win' | 'lose';
  priority?: boolean; // 是否优先加载
}

export const ChibiAvatar: React.FC<ChibiAvatarProps> = ({
  characterId,
  size = 160,
  avatarNumber,
  priority = false,
}) => {
  return (
    <OptimizedAvatar
      characterId={characterId}
      size={size}
      avatarNumber={avatarNumber ?? 1}
      priority={priority}
    />
  );
};

// 导出预加载器
export { AvatarPreloader };

export default ChibiAvatar;
