/**
 * 测试：角色HP初始化（getCharacterInitialHP 提取为模块函数后）
 * 验证朱雀4血、其他角色3血的初始化逻辑正确性
 */

import { GameEngine } from '../../src/core/GameEngineV2';
import type { CharacterId } from '../../src/types';

describe('GameEngine - 角色HP初始化', () => {
  describe('玩家角色HP', () => {
    it('朱雀作为玩家时应有4点初始HP', () => {
      const engine = new GameEngine();
      const state = engine.initializeGame('suzaku', ['lelouch', 'cc', 'kallen']);
      expect(state.playerStats.hp).toBe(4);
      expect(state.playerStats.maxHp).toBe(4);
    });

    const nonSuzakuCharacters: CharacterId[] = ['lelouch', 'cc', 'kallen'];
    nonSuzakuCharacters.forEach(char => {
      it(`${char}作为玩家时应有3点初始HP`, () => {
        const engine = new GameEngine();
        const remaining = (['lelouch', 'cc', 'suzaku', 'kallen'] as CharacterId[]).filter(c => c !== char);
        const state = engine.initializeGame(char, remaining.slice(0, 3));
        expect(state.playerStats.hp).toBe(3);
        expect(state.playerStats.maxHp).toBe(3);
      });
    });
  });

  describe('AI角色HP', () => {
    it('AI角色朱雀应有4点HP', () => {
      const engine = new GameEngine();
      // 朱雀作为第一个AI角色
      const state = engine.initializeGame('lelouch', ['suzaku', 'cc', 'kallen']);
      const suzakuAI = state.aiPlayers.find(ai => ai.character === 'suzaku');
      expect(suzakuAI).toBeDefined();
      expect(suzakuAI!.stats.hp).toBe(4);
      expect(suzakuAI!.stats.maxHp).toBe(4);
    });

    it('AI角色朱雀在任意位置都应有4点HP', () => {
      const positions: [CharacterId, CharacterId, CharacterId][] = [
        ['suzaku', 'cc', 'kallen'],
        ['cc', 'suzaku', 'kallen'],
        ['cc', 'kallen', 'suzaku'],
      ];

      positions.forEach(aiChars => {
        const engine = new GameEngine();
        const state = engine.initializeGame('lelouch', aiChars);
        const suzakuAI = state.aiPlayers.find(ai => ai.character === 'suzaku');
        expect(suzakuAI).toBeDefined();
        expect(suzakuAI!.stats.hp).toBe(4);
        expect(suzakuAI!.stats.maxHp).toBe(4);
      });
    });

    it('非朱雀的AI角色应有3点HP', () => {
      const engine = new GameEngine();
      const state = engine.initializeGame('lelouch', ['cc', 'kallen', 'suzaku']);

      const ccAI = state.aiPlayers.find(ai => ai.character === 'cc');
      expect(ccAI?.stats.hp).toBe(3);
      expect(ccAI?.stats.maxHp).toBe(3);

      const kallenAI = state.aiPlayers.find(ai => ai.character === 'kallen');
      expect(kallenAI?.stats.hp).toBe(3);
      expect(kallenAI?.stats.maxHp).toBe(3);
    });
  });

  describe('HP 在 resetRound 后保持不变', () => {
    it('重置牌局不应改变角色最大HP', () => {
      const engine = new GameEngine();
      const initialState = engine.initializeGame('suzaku', ['lelouch', 'cc', 'kallen']);

      // 初始朱雀玩家HP应为4
      expect(initialState.playerStats.maxHp).toBe(4);

      // 重置牌局
      const resetState = engine.resetRound();
      expect(resetState.playerStats.maxHp).toBe(4);
    });
  });
});
