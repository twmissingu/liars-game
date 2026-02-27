/**
 * Code Geass: Liar's Game - 角色组件导出
 */

export { ChibiLelouch } from './ChibiLelouch';
export { ChibiCC } from './ChibiCC';
export { ChibiSuzaku } from './ChibiSuzaku';
export { ChibiKallen } from './ChibiKallen';

// 角色选择器组件
import React from 'react';
import { ChibiLelouch } from './ChibiLelouch';
import { ChibiCC } from './ChibiCC';
import { ChibiSuzaku } from './ChibiSuzaku';
import { ChibiKallen } from './ChibiKallen';
import type { CharacterId, AnimationState } from '../../types';

interface CharacterRendererProps {
  characterId: CharacterId;
  size?: number;
  animationState?: AnimationState;
  className?: string;
}

export const CharacterRenderer: React.FC<CharacterRendererProps> = (props) => {
  const { characterId, size = 200, animationState = 'idle', className = '' } = props;
  const componentProps = { size, animationState, className };

  switch (characterId) {
    case 'lelouch':
      return React.createElement(ChibiLelouch, componentProps);
    case 'cc':
      return React.createElement(ChibiCC, componentProps);
    case 'suzaku':
      return React.createElement(ChibiSuzaku, componentProps);
    case 'kallen':
      return React.createElement(ChibiKallen, componentProps);
    default:
      return React.createElement(ChibiLelouch, componentProps);
  }
};

export default CharacterRenderer;
