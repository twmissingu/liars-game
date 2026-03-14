import type { GeassResult, FunnyAction } from '../types';
import { FUNNY_ACTIONS } from '../types/game.types';

/**
 * 执行Geass判定（兼容方法）
 * 
 * @param target - 目标玩家ID
 * @param hitChance - 命中率（0-1之间）
 * @returns Geass判定结果
 */
export function executeGeassWithChance(
  target: 'player' | 'ai' | 'ai2' | 'ai3',
  hitChance: number
): GeassResult {
  const roll = Math.random();
  const hit = roll < hitChance;
  
  const funnyAction = FUNNY_ACTIONS[Math.floor(Math.random() * FUNNY_ACTIONS.length)];
  
  return {
    hit,
    damage: hit ? 1 : 0,
    funnyAction,
    message: hit 
      ? `Geass命中！${target}受到了1点伤害！${funnyAction.description}`
      : `${target}躲过了Geass！`,
  };
}
