/**
 * =============================================================================
 * 回合流转顺序测试
 * =============================================================================
 *
 * 测试目标：验证回合流转的正确性
 * 核心规则：顺时针流转 - 卡莲(1) -> 朱雀(2) -> 玩家(0) -> C.C.(3) -> 卡莲(1)
 *
 * @author Code Agent
 * @version 2.0.0
 */

import { describe, it, expect, beforeEach } from '@jest/globals';
import { GameEngine } from '../../src/core/GameEngineV2';
import type { GameState } from '../../src/core/GameEngineV2';

describe('回合流转顺序测试', () => {
  let engine: GameEngine;
  let state: GameState;

  const setupPlayCards = (playerId: string) => {
    state.turnState.playedCards = {
      cardIds: ['card1'],
      claimedRank: 'Q',
      actualCards: [{ id: 'card1', rank: 'Q', suit: 'spades', isJoker: false }],
      playerId,
      isBluff: false,
    };
  };

  beforeEach(() => {
    engine = new GameEngine();
    state = engine.initializeGame('lelouch');
  });

  describe('【场景1】卡莲/ai3出牌，无人质疑', () => {
    it('1.1 卡莲出牌后，下一个应该是朱雀/ai2(右方)', () => {
      // 设置卡莲为先手角色
      (engine as any).state.turnState.firstPlayerIndex = 1;
      setupPlayCards('ai3');

      const nextState = engine.endChallengePhase(false);

      // 卡莲(1) -> 朱雀(2)
      expect(nextState.currentPlayerIndex).toBe(2);
      expect(nextState.phase).toBe('ai_turn');
    });
  });

  describe('【场景2】朱雀/ai2出牌，无人质疑', () => {
    it('2.1 朱雀出牌后，下一个应该是玩家(下方)', () => {
      // 设置朱雀为先手角色
      (engine as any).state.turnState.firstPlayerIndex = 2;
      setupPlayCards('ai2');

      const nextState = engine.endChallengePhase(false);

      // 朱雀(2) -> 玩家(0)
      expect(nextState.currentPlayerIndex).toBe(0);
      expect(nextState.phase).toBe('player_turn');
    });
  });

  describe('【场景3】玩家出牌，无人质疑', () => {
    it('3.1 玩家出牌后，下一个应该是C.C./ai(左方)', () => {
      // 设置玩家为先手角色
      (engine as any).state.turnState.firstPlayerIndex = 0;
      setupPlayCards('player');

      const nextState = engine.endChallengePhase(false);

      // 玩家(0) -> C.C.(3)
      expect(nextState.currentPlayerIndex).toBe(3);
      expect(nextState.phase).toBe('ai_turn');
    });
  });

  describe('【场景4】C.C./ai出牌，无人质疑', () => {
    it('4.1 C.C.出牌后，下一个应该是卡莲/ai3(上方)', () => {
      // 设置C.C.为先手角色
      (engine as any).state.turnState.firstPlayerIndex = 3;
      setupPlayCards('ai');

      const nextState = engine.endChallengePhase(false);

      // C.C.(3) -> 卡莲(1)
      expect(nextState.currentPlayerIndex).toBe(1);
      expect(nextState.phase).toBe('ai_turn');
    });
  });

  describe('【场景5】完整顺时针流转', () => {
    it('5.1 完整一圈流转验证', () => {
      // 卡莲 -> 朱雀 -> 玩家 -> C.C. -> 卡莲
      engine.initializeGame('lelouch');
      let state = engine.getState();

      // 卡莲(1) -> 朱雀(2)
      (engine as any).state.turnState.firstPlayerIndex = 1;
      state.turnState.playedCards = {
        cardIds: ['card1'],
        claimedRank: 'Q',
        actualCards: [{ id: 'card1', rank: 'Q', suit: 'spades', isJoker: false }],
        playerId: 'ai3',
        isBluff: false,
      };
      state = engine.endChallengePhase(false);
      expect(state.currentPlayerIndex).toBe(2);

      // 朱雀(2) -> 玩家(0)
      (engine as any).state.turnState.firstPlayerIndex = 2;
      state.turnState.playedCards = {
        cardIds: ['card2'],
        claimedRank: 'Q',
        actualCards: [{ id: 'card2', rank: 'Q', suit: 'spades', isJoker: false }],
        playerId: 'ai2',
        isBluff: false,
      };
      state = engine.endChallengePhase(false);
      expect(state.currentPlayerIndex).toBe(0);

      // 玩家(0) -> C.C.(3)
      (engine as any).state.turnState.firstPlayerIndex = 0;
      state.turnState.playedCards = {
        cardIds: ['card3'],
        claimedRank: 'Q',
        actualCards: [{ id: 'card3', rank: 'Q', suit: 'spades', isJoker: false }],
        playerId: 'player',
        isBluff: false,
      };
      state = engine.endChallengePhase(false);
      expect(state.currentPlayerIndex).toBe(3);

      // C.C.(3) -> 卡莲(1)
      (engine as any).state.turnState.firstPlayerIndex = 3;
      state.turnState.playedCards = {
        cardIds: ['card4'],
        claimedRank: 'Q',
        actualCards: [{ id: 'card4', rank: 'Q', suit: 'spades', isJoker: false }],
        playerId: 'ai',
        isBluff: false,
      };
      state = engine.endChallengePhase(false);
      expect(state.currentPlayerIndex).toBe(1);
    });
  });

  describe('【场景6】跳过已淘汰玩家', () => {
    let engine: GameEngine;
    let state: GameState;

    beforeEach(() => {
      engine = new GameEngine();
      state = engine.initializeGame('lelouch');
    });

    it('6.1 单个AI被淘汰后的流转', () => {
      // 淘汰朱雀/ai2 (currentPlayerIndex=2, aiPlayers[1])
      (engine as any).state.aiPlayers[1].isActive = false;
      (engine as any).state.aiPlayers[1].stats.hp = 0;

      // 卡莲出牌，设置卡莲为先手角色
      (engine as any).state.turnState.firstPlayerIndex = 1;
      state.turnState.playedCards = {
        cardIds: ['card1'],
        claimedRank: 'Q',
        actualCards: [{ id: 'card1', rank: 'Q', suit: 'spades', isJoker: false }],
        playerId: 'ai3',
        isBluff: false,
      };
      const nextState = engine.endChallengePhase(false);

      // 卡莲(1) -> 朱雀(2)被淘汰 -> 玩家(0)
      expect(nextState.currentPlayerIndex).toBe(0);
    });

    it('6.2 多个AI被淘汰后的流转', () => {
      // aiPlayers数组: [0]=ai/C.C., [1]=ai2/朱雀, [2]=ai3/卡莲
      // currentPlayerIndex: 1=ai3/卡莲, 2=ai2/朱雀, 3=ai/C.C.
      // 淘汰朱雀/ai2 (currentPlayerIndex=2, aiPlayers[1])
      (engine as any).state.aiPlayers[1].isActive = false;
      (engine as any).state.aiPlayers[1].stats.hp = 0;
      // 淘汰卡莲/ai3 (currentPlayerIndex=1, aiPlayers[2])
      (engine as any).state.aiPlayers[2].isActive = false;
      (engine as any).state.aiPlayers[2].stats.hp = 0;

      // 玩家出牌，设置玩家为先手角色
      (engine as any).state.turnState.firstPlayerIndex = 0;
      state.turnState.playedCards = {
        cardIds: ['card1'],
        claimedRank: 'Q',
        actualCards: [{ id: 'card1', rank: 'Q', suit: 'spades', isJoker: false }],
        playerId: 'player',
        isBluff: false,
      };
      const nextState = engine.endChallengePhase(false);

      // 玩家(0) -> 朱雀(2)被淘汰 -> 卡莲(1)被淘汰 -> C.C.(3)
      expect(nextState.currentPlayerIndex).toBe(3);
    });
  });

  describe('【场景7】边界条件测试', () => {
    let engine: GameEngine;
    let state: GameState;

    beforeEach(() => {
      engine = new GameEngine();
      state = engine.initializeGame('lelouch');
    });

    it('7.1 所有AI被淘汰后应该结束游戏', () => {
      // 淘汰所有AI
      (engine as any).state.aiPlayers[0].isActive = false;
      (engine as any).state.aiPlayers[0].stats.hp = 0;
      (engine as any).state.aiPlayers[1].isActive = false;
      (engine as any).state.aiPlayers[1].stats.hp = 0;
      (engine as any).state.aiPlayers[2].isActive = false;
      (engine as any).state.aiPlayers[2].stats.hp = 0;

      // 玩家出牌，设置玩家为先手角色
      (engine as any).state.turnState.firstPlayerIndex = 0;
      state.turnState.playedCards = {
        cardIds: ['card1'],
        claimedRank: 'Q',
        actualCards: [{ id: 'card1', rank: 'Q', suit: 'spades', isJoker: false }],
        playerId: 'player',
        isBluff: false,
      };
      const nextState = engine.endChallengePhase(false);

      // 所有AI被淘汰，玩家获胜
      expect(nextState.winner).toBe('player');
    });
  });

  describe('【场景8】索引映射一致性验证', () => {
    it('8.1 索引到玩家ID的映射', () => {
      const { INDEX_TO_PLAYER_ID } = require('../../src/core/PlayerIndexMapper');
      
      expect(INDEX_TO_PLAYER_ID[0]).toBe('player');
      expect(INDEX_TO_PLAYER_ID[1]).toBe('ai3');
      expect(INDEX_TO_PLAYER_ID[2]).toBe('ai2');
      expect(INDEX_TO_PLAYER_ID[3]).toBe('ai');
    });

    it('8.2 不同玩家出牌后的流转顺序符合需求规格', () => {
      engine.initializeGame('lelouch');
      let state = engine.getState();
      let turnNumber = state.turnState.turnNumber;

      // 测试完整顺时针流转: 卡莲(1) -> 朱雀(2) -> 玩家(0) -> C.C.(3) -> 卡莲(1)
      const expectedOrder = ['ai3', 'ai2', 'player', 'ai'];
      const playerIndexMap: Record<string, number> = { ai3: 1, ai2: 2, player: 0, ai: 3 };
      let currentPlayer = 'ai3';

      for (let i = 0; i < 4; i++) {
        // 设置当前出牌者为先手角色
        (engine as any).state.turnState.firstPlayerIndex = playerIndexMap[currentPlayer];
        state.turnState.playedCards = {
          cardIds: [`card${i}`],
          claimedRank: 'Q',
          actualCards: [{ id: `card${i}`, rank: 'Q', suit: 'spades', isJoker: false }],
          playerId: currentPlayer,
          isBluff: false,
        };
        state = engine.endChallengePhase(false);
        const nextPlayerId = expectedOrder[(i + 1) % 4];
        const expectedIndex = playerIndexMap[nextPlayerId];
        expect(state.currentPlayerIndex).toBe(expectedIndex);
        currentPlayer = nextPlayerId;
        turnNumber++;
        expect(state.turnState.turnNumber).toBe(turnNumber);
      }
    });
  });
});
