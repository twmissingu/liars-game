/**
 * 角色选择组件
 * Code Geass: Liar's Game - Phase 2
 */

import React, { useState } from 'react';
import type { CharacterId } from '../characters/types';
import { characterList, getCharacter } from '../characters/data';
import { CharacterAvatar } from './CharacterAvatar';
import './CharacterSelect.css';

export interface CharacterSelectProps {
  /** 当前选中的角色ID */
  selectedId?: CharacterId;
  /** 已禁用的角色ID列表 */
  disabledIds?: CharacterId[];
  /** 选择回调 */
  onSelect?: (characterId: CharacterId) => void;
  /** 确认回调 */
  onConfirm?: (characterId: CharacterId) => void;
  /** 是否显示确认按钮 */
  showConfirm?: boolean;
  /** 自定义标题 */
  title?: string;
}

/**
 * 角色选择界面组件
 *
 * 使用示例：
 * ```tsx
 * <CharacterSelect
 *   onSelect={(id) => console.log('选中:', id)}
 *   onConfirm={(id) => console.log('确认:', id)}
 *   showConfirm
 * />
 * ```
 */
export const CharacterSelect: React.FC<CharacterSelectProps> = ({
  selectedId,
  disabledIds = [],
  onSelect,
  onConfirm,
  showConfirm = false,
  title = '选择你的角色',
}) => {
  const [hoveredId, setHoveredId] = useState<CharacterId | null>(null);
  const [localSelected, setLocalSelected] = useState<CharacterId | null>(selectedId || null);

  const currentId = selectedId ?? localSelected;
  const currentCharacter = currentId ? getCharacter(currentId) : null;

  const handleSelect = (id: CharacterId) => {
    if (disabledIds.includes(id)) return;

    setLocalSelected(id);
    onSelect?.(id);
  };

  const handleConfirm = () => {
    if (currentId) {
      onConfirm?.(currentId);
    }
  };

  return (
    <div className="character-select">
      <h2 className="character-select__title">{title}</h2>

      <div className="character-select__container">
        {/* 角色列表 */}
        <div className="character-select__grid">
          {characterList.map(char => {
            const isSelected = currentId === char.id;
            const isDisabled = disabledIds.includes(char.id);
            const isHovered = hoveredId === char.id;

            return (
              <div
                key={char.id}
                className={`
                  character-select__card
                  ${isSelected ? 'character-select__card--selected' : ''}
                  ${isDisabled ? 'character-select__card--disabled' : ''}
                  ${isHovered ? 'character-select__card--hover' : ''}
                `}
                onClick={() => handleSelect(char.id)}
                onMouseEnter={() => setHoveredId(char.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                <CharacterAvatar
                  characterId={char.id}
                  size="large"
                  showName
                  showFaction
                  animate={isSelected}
                />

                {/* 禁用遮罩 */}
                {isDisabled && (
                  <div className="character-select__disabled-overlay">
                    <span>已选择</span>
                  </div>
                )}

                {/* 选中标记 */}
                {isSelected && <div className="character-select__selected-badge">✓</div>}
              </div>
            );
          })}
        </div>

        {/* 角色详情面板 */}
        <div className="character-select__detail">
          {currentCharacter ? (
            <>
              <div className="character-select__detail-header">
                <CharacterAvatar characterId={currentCharacter.id} size="xlarge" animate />
                <div className="character-select__detail-titles">
                  <h3>{currentCharacter.name}</h3>
                  <p className="character-select__detail-en">
                    {currentCharacter.nameEn} / {currentCharacter.nameJa}
                  </p>
                  <div
                    className="character-select__faction"
                    style={
                      {
                        '--faction-color': currentCharacter.color,
                      } as React.CSSProperties
                    }
                  >
                    {getFactionName(currentCharacter.faction)}
                  </div>
                </div>
              </div>

              <div className="character-select__detail-section">
                <h4>角色介绍</h4>
                <p>{currentCharacter.description}</p>
              </div>

              <div className="character-select__detail-section">
                <h4>技能：{currentCharacter.skill.name}</h4>
                <div className="character-select__skill-info">
                  <span className="character-select__skill-icon">
                    {currentCharacter.skill.icon}
                  </span>
                  <span className="character-select__skill-type">
                    {getSkillTypeName(currentCharacter.skill.type)}
                  </span>
                </div>
                <p>{currentCharacter.skill.description}</p>
              </div>

              <div className="character-select__detail-stats">
                <div className="character-select__stat">
                  <span>生命值</span>
                  <div className="character-select__stat-bar">
                    {renderHpBar(currentCharacter.stats.hp)}
                  </div>
                </div>
                <div className="character-select__stat">
                  <span>操作难度</span>
                  <div className="character-select__difficulty">
                    {renderDifficulty(currentCharacter.stats.difficulty)}
                  </div>
                </div>
              </div>

              {showConfirm && (
                <button className="character-select__confirm-btn" onClick={handleConfirm}>
                  确认选择
                </button>
              )}
            </>
          ) : (
            <div className="character-select__empty">
              <p>请选择一个角色</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

/** 获取阵营名称 */
function getFactionName(faction: string): string {
  const names: Record<string, string> = {
    'black-knights': '黑色骑士团',
    britannia: '布里塔尼亚',
    neutral: '中立',
  };
  return names[faction] || faction;
}

/** 获取技能类型名称 */
function getSkillTypeName(type: string): string {
  const names: Record<string, string> = {
    active: '主动技能',
    passive: '被动技能',
    trigger: '触发技能',
  };
  return names[type] || type;
}

/** 渲染生命值条 */
function renderHpBar(hp: number): React.ReactNode {
  return Array.from({ length: hp }, (_, i) => (
    <span key={i} className="character-select__hp-heart">
      ❤️
    </span>
  ));
}

/** 渲染难度星星 */
function renderDifficulty(difficulty: number): React.ReactNode {
  return Array.from({ length: 5 }, (_, i) => (
    <span key={i} className={`character-select__difficulty-star ${i < difficulty ? 'active' : ''}`}>
      ★
    </span>
  ));
}
