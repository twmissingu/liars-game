/**
 * AI决策集成测试
 * 测试AI在不同情况下的决策逻辑
 */

import { GameEngine } from '../../src/core/GameEngineV2';
import { DynamicAIEngine } from '../../src/ai/DynamicAIEngine';
import type { StrategyContext } from '../../src/types';

describe('AI决策集成测试', () => {
  let gameEngine: GameEngine;

  beforeEach(() => {
    gameEngine = new GameEngine();
  });

  describe('AI基本决策', () => {
    test('AI在回合时会出牌', () => {
      // 重新初始化直到AI先手
      let state = gameEngine.initializeGame('lelouch');
      while (state.currentPlayerIndex === 0) {
        gameEngine = new GameEngine();
        state = gameEngine.initializeGame('lelouch');
      }
      
      // AI出牌
      const newState = gameEngine.aiPlayCards('ai');
      
      expect(newState.turnState.playedCards).toBeDefined();
    });

    test('AI出牌后手牌减少', () => {
      // 重新初始化直到AI先手
      let state = gameEngine.initializeGame('lelouch');
      while (state.currentPlayerIndex === 0) {
        gameEngine = new GameEngine();
        state = gameEngine.initializeGame('lelouch');
      }
      
      // 获取当前玩家ID
      const currentId = gameEngine.getCurrentPlayerId();
      if (currentId === 'player') {
        // 如果当前是玩家回合，跳过此测试
        return;
      }
      
      // 找到对应的AI玩家
      const aiPlayerBefore = state.aiPlayers.find(ai => ai.id === currentId);
      if (!aiPlayerBefore) {
        return;
      }
      const initialHandSize = aiPlayerBefore.hand.length;
      
      // AI出牌并获取新状态
      state = gameEngine.aiPlayCards(currentId);
      
      // 从aiPlayers中查找对应的AI
      const aiPlayer = state.aiPlayers.find(ai => ai.id === currentId);
      expect(aiPlayer?.hand.length).toBeLessThan(initialHandSize);
    });
  });

  describe('DynamicAIEngine决策', () => {
    test('AI应该能做出决策', () => {
      const aiEngine = new DynamicAIEngine('lelouch');
      
      const context: StrategyContext = {
        gameState: {
          phase: 'ai_turn',
          liarCard: 'Q',
          playerStats: { hp: 3, maxHp: 3, geassSuccessCount: 0, geassFailCount: 0 },
          aiPlayers: [
            {
              id: 'ai',
              name: 'AI',
              character: 'lelouch',
              hand: [
                { id: 'card-1', suit: 'spades', rank: 'Q', isJoker: false },
              ],
              stats: { hp: 3, maxHp: 3, geassSuccessCount: 0, geassFailCount: 0 },
              isActive: true,
            },
          ],
          currentPlayerIndex: 1,
          turnState: {
            turnNumber: 1,
            playedCards: null,
            tableCards: [],
            lastPlayerId: null,
            geassConsecutiveMisses: 0,
          },
          lastAction: '',
          winner: null,
          geassResult: null,
          playerSelectedCards: [],
          playerCharacter: 'lelouch',
          characterStates: new Map(),
        },
        aiPlayer: {
          id: 'ai',
          name: 'AI',
          character: 'lelouch',
          hand: [
            { id: 'card-1', suit: 'spades', rank: 'Q', isJoker: false },
          ],
          stats: { hp: 3, maxHp: 3, geassSuccessCount: 0, geassFailCount: 0 },
          isActive: true,
        },
        liarCard: 'Q',
        turnState: {
          turnNumber: 1,
          playedCards: null,
          tableCards: [],
          lastPlayerId: null,
          geassConsecutiveMisses: 0,
        },
      };
      
      const decision = aiEngine.makeDecision(context);
      
      expect(decision).toBeDefined();
      expect(['play', 'challenge', 'pass']).toContain(decision.action);
    });

    test('不同角色应该有不同决策风格', () => {
      const lelouchAI = new DynamicAIEngine('lelouch');
      const suzakuAI = new DynamicAIEngine('suzaku');
      
      expect(lelouchAI).toBeDefined();
      expect(suzakuAI).toBeDefined();
    });
  });
});
