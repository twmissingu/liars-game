/**
 * 技能特效组件
 * Code Geass: Liar's Game - Phase 2
 */

import React, { useEffect, useState } from 'react';
import type { CharacterId } from '../characters/types';
import { getCharacter } from '../characters/data';
import './SkillEffects.css';

export interface SkillEffectProps {
  characterId: CharacterId;
  isActive: boolean;
  onComplete?: () => void;
}

/**
 * 技能发动特效组件
 * 根据角色显示不同的技能动画
 */
export const SkillEffect: React.FC<SkillEffectProps> = ({ characterId, isActive, onComplete }) => {
  const [showEffect, setShowEffect] = useState(false);
  const character = getCharacter(characterId);

  useEffect(() => {
    if (isActive) {
      setShowEffect(true);
      const timer = setTimeout(() => {
        setShowEffect(false);
        onComplete?.();
      }, 2000); // 2秒动画

      return () => clearTimeout(timer);
    }
    return undefined;
  }, [isActive, onComplete]);

  if (!showEffect) return null;

  const renderEffect = () => {
    switch (characterId) {
      case 'lelouch':
        return <LelouchEffect color={character.color} />;
      case 'cc':
        return <CCEffect color={character.color} />;
      case 'suzaku':
        return <SuzakuEffect color={character.color} />;
      case 'kallen':
        return <KallenEffect color={character.color} />;
      default:
        return null;
    }
  };

  return (
    <div className="skill-effect-overlay">
      <div className="skill-effect-container">
        {renderEffect()}
        <div className="skill-effect-text">
          <div className="skill-effect-name">{character.skill.name}</div>
          <div className="skill-effect-character">{character.name}</div>
        </div>
      </div>
    </div>
  );
};

/** 鲁鲁修 - 绝对命令特效 (Geass之眼) */
const LelouchEffect: React.FC<{ color: string }> = ({ color }) => (
  <div className="skill-effect lelouch-effect">
    <div className="geass-eye">
      <div className="geass-eye__outer" style={{ borderColor: color }} />
      <div className="geass-eye__inner" style={{ background: color }} />
      <div className="geass-eye__symbol">👁️</div>
      <div className="geass-eye__rings">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="geass-eye__ring" style={{ animationDelay: `${i * 0.2}s` }} />
        ))}
      </div>
    </div>
    <div className="geass-command">
      {['絶', '対', '命', '令'].map((char, i) => (
        <span key={i} className="geass-command__char" style={{ animationDelay: `${i * 0.15}s` }}>
          {char}
        </span>
      ))}
    </div>
  </div>
);

/** C.C. - 不老不死特效 (Code印记) */
const CCEffect: React.FC<{ color: string }> = ({ color }) => (
  <div className="skill-effect cc-effect">
    <div className="code-mark">
      <div className="code-mark__circle" style={{ borderColor: color }} />
      <div className="code-mark__symbol">♾️</div>
      <div className="code-mark__geass">✨</div>
      <div className="code-mark__particles">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="code-mark__particle"
            style={{
              animationDelay: `${i * 0.1}s`,
              transform: `rotate(${i * 45}deg) translateY(-60px)`,
            }}
          />
        ))}
      </div>
    </div>
    <div className="cc-quote">"我是...不老不死的..."</div>
  </div>
);

/** 朱雀 - 生存本能特效 (能量护盾) */
const SuzakuEffect: React.FC<{ color: string }> = ({ color }) => (
  <div className="skill-effect suzaku-effect">
    <div className="survival-shield">
      <div className="survival-shield__core" style={{ background: color }} />
      <div className="survival-shield__layers">
        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            className="survival-shield__layer"
            style={{
              borderColor: color,
              animationDelay: `${i * 0.15}s`,
              opacity: 1 - i * 0.2,
            }}
          />
        ))}
      </div>
      <div className="survival-shield__symbol">🛡️</div>
    </div>
    <div className="suzaku-quote">"我要...从内部改变它！"</div>
  </div>
);

/** 卡莲 - 红莲突击特效 (火焰突击) */
const KallenEffect: React.FC<{ color: string }> = ({ color }) => (
  <div className="skill-effect kallen-effect">
    <div className="guren-assault">
      <div className="guren-assault__flames">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="guren-assault__flame"
            style={{
              animationDelay: `${i * 0.1}s`,
              left: `${20 + i * 12}%`,
            }}
          />
        ))}
      </div>

      <div className="guren-assault__mech">🤖</div>

      <div className="guren-assault__slash">
        <div className="guren-assault__slash-line" style={{ background: color }} />
        <div className="guren-assault__slash-spark">⚡</div>
      </div>
    </div>
    <div className="kallen-quote">"红莲贰式，突击！"</div>
  </div>
);

/**
 * 技能发动按钮组件
 */
export interface SkillButtonProps {
  characterId: CharacterId;
  usesLeft?: number;
  cooldown?: number;
  isActive?: boolean;
  disabled?: boolean;
  onClick?: () => void;
  size?: 'small' | 'medium' | 'large';
}

export const SkillButton: React.FC<SkillButtonProps> = ({
  characterId,
  usesLeft,
  cooldown = 0,
  isActive = false,
  disabled = false,
  onClick,
  size = 'medium',
}) => {
  const character = getCharacter(characterId);
  const skill = character.skill;
  const isPassive = skill.type === 'passive';
  const isAvailable =
    !isPassive && !disabled && cooldown === 0 && (usesLeft === undefined || usesLeft > 0);

  return (
    <button
      className={`
        skill-button
        skill-button--${size}
        skill-button--${skill.type}
        ${isAvailable ? 'skill-button--available' : ''}
        ${isActive ? 'skill-button--active' : ''}
        ${disabled ? 'skill-button--disabled' : ''}
      `}
      onClick={onClick}
      disabled={!isAvailable || disabled}
      style={{ '--skill-color': character.color } as React.CSSProperties}
    >
      <span className="skill-button__icon">{skill.icon}</span>

      <span className="skill-button__name">{skill.name}</span>

      {!isPassive && (
        <span className="skill-button__status">
          {cooldown > 0 ? (
            <>冷却 {cooldown}</>
          ) : usesLeft !== undefined && skill.maxUses > 0 ? (
            <>
              {usesLeft}/{skill.maxUses}
            </>
          ) : null}
        </span>
      )}

      {isPassive && <span className="skill-button__passive-badge">被动</span>}

      {isActive && <div className="skill-button__glow" />}
    </button>
  );
};
