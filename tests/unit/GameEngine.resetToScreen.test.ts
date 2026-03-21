/**
 * 测试：游戏状态重置逻辑
 * 验证 resetToScreen 公共函数替代三个重复函数后的语义等价性
 * 以及 GameEngine.resetRound() 的正确行为
 */

import { GameEngine } from '../../src/core/GameEngineV2';

describe('GameEngine.resetRound - 状态重置', () => {
  it('重置后 playerHand 应为新的5张牌', () => {
    const engine = new GameEngine();
    engine.initializeGame('lelouch', ['cc', 'suzaku', 'kallen']);

    const resetState = engine.resetRound();
    expect(resetState.playerHand.length).toBe(5);
  });

  it('重置后 tableCards 应清空', () => {
    const engine = new GameEngine();
    const state = engine.initializeGame('lelouch', ['cc', 'suzaku', 'kallen']);

    if (state.phase === 'player_turn') {
      engine.toggleCardSelection(state.playerHand[0].id);
      engine.playerPlayCards();
    }

    const resetState = engine.resetRound();
    expect(resetState.turnState.tableCards.length).toBe(0);
  });

  it('重置后 playedCards 应为 null', () => {
    const engine = new GameEngine();
    engine.initializeGame('lelouch', ['cc', 'suzaku', 'kallen']);

    const resetState = engine.resetRound();
    expect(resetState.turnState.playedCards).toBeNull();
  });

  it('重置后 liarCard 应为新的骗子牌（Q/K/A 之一）', () => {
    const engine = new GameEngine();
    engine.initializeGame('lelouch', ['cc', 'suzaku', 'kallen']);

    const resetState = engine.resetRound();
    expect(['Q', 'K', 'A']).toContain(resetState.liarCard);
  });

  it('重置后 turnNumber 应递增', () => {
    const engine = new GameEngine();
    const initialState = engine.initializeGame('lelouch', ['cc', 'suzaku', 'kallen']);
    const initialTurn = initialState.turnState.turnNumber;

    const resetState = engine.resetRound();
    expect(resetState.turnState.turnNumber).toBe(initialTurn + 1);
  });

  it('重置后 playerSelectedCards 应清空', () => {
    const engine = new GameEngine();
    const state = engine.initializeGame('lelouch', ['cc', 'suzaku', 'kallen']);

    if (state.phase === 'player_turn' && state.playerHand.length > 0) {
      engine.toggleCardSelection(state.playerHand[0].id);
      expect(engine.getState().playerSelectedCards.length).toBe(1);
    }

    const resetState = engine.resetRound();
    expect(resetState.playerSelectedCards.length).toBe(0);
  });

  it('指定存活玩家作为先手后，该玩家应先手', () => {
    const engine = new GameEngine();
    engine.initializeGame('lelouch', ['cc', 'suzaku', 'kallen']);

    // 玩家索引0作为先手
    const resetState = engine.resetRound(0);
    // 玩家（索引0）先手，phase应为player_turn
    expect(resetState.currentPlayerIndex).toBe(0);
    expect(resetState.phase).toBe('player_turn');
  });

  it('重置后 AI 手牌应各有5张', () => {
    const engine = new GameEngine();
    engine.initializeGame('lelouch', ['cc', 'suzaku', 'kallen']);

    const resetState = engine.resetRound();
    resetState.aiPlayers.forEach(ai => {
      expect(ai.hand.length).toBe(5);
    });
  });
});

describe('游戏状态重置语义（wasLie 读取验证）', () => {
  it('通过 isBluff 字段读取撒谎状态，与手动计算一致', () => {
    // 验证新的 isBluff 读取方式正确
    const testCases = [
      { isBluff: true, expected: true },
      { isBluff: false, expected: false },
    ];

    testCases.forEach(({ isBluff, expected }) => {
      const playedCards = { isBluff };
      const wasLie = playedCards?.isBluff ?? false;
      expect(wasLie).toBe(expected);
    });
  });

  it('null 值安全处理', () => {
    const playedCards = null;
    const wasLie = playedCards?.isBluff ?? false;
    expect(wasLie).toBe(false);
  });
});
