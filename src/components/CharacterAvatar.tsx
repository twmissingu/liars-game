/**
 * 角色头像组件
 * Code Geass: Liar's Game - Phase 2
 */

import React from 'react';
import type { CharacterId } from '../characters/types';
import { getCharacter } from '../characters/data';
import './CharacterAvatar.css';

export type AvatarSize = 'small' | 'medium' | 'large' | 'xlarge';

export interface CharacterAvatarProps {
  /** 角色ID */
  characterId: CharacterId;
  /** 尺寸 */
  size?: AvatarSize;
  /** 是否显示名称 */
  showName?: boolean;
  /** 是否显示阵营 */
  showFaction?: boolean;
  /** 是否显示技能图标 */
  showSkill?: boolean;
  /** 是否启用动画 */
  animate?: boolean;
  /** 是否选中状态 */
  selected?: boolean;
  /** 点击回调 */
  onClick?: () => void;
  /** 自定义类名 */
  className?: string;
}

/**
 * 角色头像组件
 * 
 * 使用示例：
 * ```tsx
 * <CharacterAvatar characterId="lelouch" size="large" showName animate />
 * ```
 */
export const CharacterAvatar: React.FC<CharacterAvatarProps> = ({
  characterId,
  size = 'medium',
  showName = false,
  showFaction = false,
  showSkill = false,
  animate = false,
  selected = false,
  onClick,
  className = '',
}) => {
  const character = getCharacter(characterId);
  
  const sizeClasses: Record<AvatarSize, string> = {
    small: 'character-avatar--small',
    medium: 'character-avatar--medium',
    large: 'character-avatar--large',
    xlarge: 'character-avatar--xlarge',
  };
  
  return (
    <div
      className={`
        character-avatar
        ${sizeClasses[size]}
        ${animate ? 'character-avatar--animate' : ''}
        ${selected ? 'character-avatar--selected' : ''}
        ${onClick ? 'character-avatar--clickable' : ''}
        ${className}
      `}
      onClick={onClick}
      style={{ '--character-color': character.color } as React.CSSProperties}
    >
      {/* 头像主体 */}
      <div className="character-avatar__image">
        <div className="character-avatar__placeholder">
          {character.avatar}
        </div>
        
        {/* 选中光环 */}
        {selected && (
          <div className="character-avatar__glow" />
        )}
        
        {/* 动画效果 */}
        {animate && (
          <div className="character-avatar__effects">
            <div className="character-avatar__ring" />
            <div className="character-avatar__particles" />
          </div>
        )}
        
        {/* 技能图标 */}
        {showSkill && (
          <div className="character-avatar__skill">
            {character.skill.icon}
          </div>
        )}
      </div>
      
      {/* 信息区域 */}
      {(showName || showFaction) && (
        <div className="character-avatar__info">
          {showName && (
            <span className="character-avatar__name">{character.name}</span>
          )}
          {showFaction && (
            <span className="character-avatar__faction">
              {getFactionLabel(character.faction)}
            </span>
          )}
        </div>
      )}
    </div>
  );
};

/** 获取阵营标签 */
function getFactionLabel(faction: string): string {
  const labels: Record<string, string> = {
    'black-knights': '黑骑',
    'britannia': '帝国',
    'neutral': '中立',
  };
  return labels[faction] || faction;
}

/** 技能状态指示器组件 */
export interface SkillIndicatorProps {
  characterId: CharacterId;
  usesLeft?: number;
  cooldown?: number;
  isActive?: boolean;
  size?: 'small' | 'medium';
}

/**
 * 技能状态指示器
 * 显示技能使用次数和冷却状态
 */
export const SkillIndicator: React.FC<SkillIndicatorProps> = ({
  characterId,
  usesLeft,
  cooldown = 0,
  isActive = false,
  size = 'medium',
}) => {
  const character = getCharacter(characterId);
  const skill = character.skill;
  
  const isPassive = skill.type === 'passive';
  const isAvailable = !isPassive && cooldown === 0 && (usesLeft === undefined || usesLeft > 0);
  
  return (
    <div 
      className={`
        skill-indicator
        skill-indicator--${size}
        ${isActive ? 'skill-indicator--active' : ''}
        ${isAvailable ? 'skill-indicator--available' : ''}
        ${isPassive ? 'skill-indicator--passive' : ''}
      `}
    >
      <div className="skill-indicator__icon">{skill.icon}</div>
      
      {!isPassive && (
        <div className="skill-indicator__status">
          {cooldown > 0 ? (
            <span className="skill-indicator__cooldown">{cooldown}</span>
          ) : usesLeft !== undefined && skill.maxUses > 0 ? (
            <span className="skill-indicator__uses">{usesLeft}/{skill.maxUses}</span>
          ) : null}
        </div>
      )}
      
      {isActive && (
        <div className="skill-indicator__pulse" />
      )}
    </div>
  );
};
