/**
 * 测试：getState() Map 序列化修复
 * 验证 structuredClone 替换 JSON.parse(JSON.stringify()) 后
 * characterStates Map 类型在序列化后仍然正确保留
 */

import { GameEngine } from '../../src/core/GameEngineV2';

describe('GameEngine.getState() - Map序列化修复', () => {
  let engine: GameEngine;

  beforeEach(() => {
    engine = new GameEngine();
    engine.initializeGame('lelouch', ['cc', 'suzaku', 'kallen']);
  });

  it('getState() 应返回包含有效 Map 的 characterStates', () => {
    const state = engine.getState();
    expect(typeof state.characterStates.get).toBe('function');
    expect(typeof state.characterStates.set).toBe('function');
    expect(typeof state.characterStates.has).toBe('function');
  });

  it('characterStates Map 应包含全部4个玩家的技能状态', () => {
    const state = engine.getState();
    expect(state.characterStates.size).toBe(4);
    expect(state.characterStates.has('player')).toBe(true);
    expect(state.characterStates.has('ai')).toBe(true);
    expect(state.characterStates.has('ai2')).toBe(true);
    expect(state.characterStates.has('ai3')).toBe(true);
  });

  it('多次调用 getState() 后 Map 仍然是 Map 实例', () => {
    for (let i = 0; i < 5; i++) {
      const state = engine.getState();
      expect(typeof state.characterStates.get).toBe('function');
      expect(state.characterStates.size).toBe(4);
    }
  });

  it('返回的状态是深拷贝，修改不影响引擎内部状态', () => {
    const state = engine.getState();
    state.playerStats.hp = 999;

    const state2 = engine.getState();
    expect(state2.playerStats.hp).not.toBe(999);
  });

  it('characterStates 中应能通过 Map.get() 正确读取角色ID', () => {
    const state = engine.getState();
    const playerCharState = state.characterStates.get('player');
    expect(playerCharState).toBeDefined();
    expect(playerCharState?.characterId).toBe('lelouch');
  });

  it('AI角色技能状态应与初始化时的角色一致', () => {
    const state = engine.getState();

    const ai0State = state.characterStates.get('ai');
    expect(ai0State?.characterId).toBe('cc');

    const ai1State = state.characterStates.get('ai2');
    expect(ai1State?.characterId).toBe('suzaku');

    const ai2State = state.characterStates.get('ai3');
    expect(ai2State?.characterId).toBe('kallen');
  });

  it('重置牌局后 characterStates 仍然是有效 Map', () => {
    engine.resetRound();
    const state = engine.getState();
    expect(typeof state.characterStates.get).toBe('function');
    expect(state.characterStates.size).toBe(4);
  });
});
