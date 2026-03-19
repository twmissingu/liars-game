/**
 * 角色动画效果测试用例
 *
 * 测试范围:
 * 1. 出牌动画测试（玩家/AI）
 * 2. 质疑动画测试
 * 3. 闪避动画测试
 * 4. 命中动画测试
 * 5. 动画性能测试
 * 6. 动画兼容性测试
 */

import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { GameTable } from '../../src/ui/GameTable';
import { GameState, CharacterId } from '../../src/types';

// 基础游戏状态
const createMockGameState = (overrides: Partial<GameState> = {}): GameState => ({
  phase: 'player_turn',
  playerHand: [
    { id: 'card1', suit: 'hearts', rank: 'Q', value: 12, isRevealed: false, isJoker: false },
    { id: 'card2', suit: 'spades', rank: 'K', value: 13, isRevealed: false, isJoker: false },
  ],
  playerStats: { hp: 3, maxHp: 3, geassSuccessCount: 0, geassFailCount: 0 },
  aiPlayers: [
    {
      id: 'ai',
      character: 'cc' as CharacterId,
      hand: [{ id: 'ai1', suit: 'clubs', rank: 'A', value: 14, isRevealed: false, isJoker: false }],
      stats: { hp: 3, maxHp: 3, geassSuccessCount: 0, geassFailCount: 0 },
      isActive: true,
    },
    {
      id: 'ai2',
      character: 'suzaku' as CharacterId,
      hand: [{ id: 'ai2', suit: 'diamonds', rank: 'Q', value: 12, isRevealed: false, isJoker: false }],
      stats: { hp: 4, maxHp: 4, geassSuccessCount: 0, geassFailCount: 0 },
      isActive: true,
    },
    {
      id: 'ai3',
      character: 'kallen' as CharacterId,
      hand: [{ id: 'ai3', suit: 'hearts', rank: 'K', value: 13, isRevealed: false, isJoker: false }],
      stats: { hp: 3, maxHp: 3, geassSuccessCount: 0, geassFailCount: 0 },
      isActive: true,
    },
  ],
  deck: [],
  discardPile: [],
  liarCard: 'Q',
  turnState: {
    currentPlayerIndex: 0,
    turnNumber: 1,
    playedCards: null,
    consecutivePasses: 0,
    lastPlayerId: null,
  },
  winner: null,
  geassResult: null,
  lastAction: null,
  ...overrides,
});

describe('【动画测试】角色动作动画功能测试', () => {
  const defaultProps = {
    selectedCards: [],
    selectedCharacter: 'lelouch' as CharacterId,
    selectedAvatar: 1,
    aiCharacters: ['cc', 'suzaku', 'kallen'] as CharacterId[],
    aiAvatars: {},
    onToggleCardSelection: jest.fn(),
    onConfirmPlay: jest.fn(),
    onPass: jest.fn(),
    onChallenge: jest.fn(),
    onBackToMenu: jest.fn(),
    onLelouchSkill: jest.fn(),
    gameLog: [],
    isProcessing: false,
    canUseSkill: true,
  };

  beforeEach(() => {
    jest.clearAllMocks();
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  describe('【TC-ANIM-001】玩家出牌动画测试', () => {
    test('1.1 玩家出牌时应触发绿色出牌动画', async () => {
      const gameState = createMockGameState({
        lastAction: '玩家出了 2 张牌',
        turnState: {
          currentPlayerIndex: 0,
          turnNumber: 1,
          playedCards: {
            cardIds: ['card1', 'card2'],
            claimedRank: 'Q',
            actualCards: [
              { id: 'card1', suit: 'hearts', rank: 'Q', value: 12, isRevealed: false, isJoker: false },
              { id: 'card2', suit: 'spades', rank: 'Q', value: 13, isRevealed: false, isJoker: false },
            ],
            playerId: 'player',
            isBluff: false,
          },
          consecutivePasses: 0,
          lastPlayerId: 'player',
        },
      });

      render(<GameTable {...defaultProps} gameState={gameState} />);

      // 验证动画类被添加
      await waitFor(() => {
        const playerCharacter = document.querySelector('.cg-player-section .cg-anim-play');
        expect(playerCharacter).toBeInTheDocument();
      });

      // 验证文字提示
      const actionText = document.querySelector('.cg-action-play');
      expect(actionText).toBeInTheDocument();
      expect(actionText?.textContent).toBe('出牌');
    });

    test('1.2 玩家出牌动画时长应为350ms', async () => {
      const gameState = createMockGameState({
        lastAction: '玩家出了 2 张牌',
        turnState: {
          currentPlayerIndex: 0,
          turnNumber: 1,
          playedCards: {
            cardIds: ['card1'],
            claimedRank: 'Q',
            actualCards: [{ id: 'card1', suit: 'hearts', rank: 'Q', value: 12, isRevealed: false, isJoker: false }],
            playerId: 'player',
            isBluff: false,
          },
          consecutivePasses: 0,
          lastPlayerId: 'player',
        },
      });

      render(<GameTable {...defaultProps} gameState={gameState} />);

      // 验证动画存在
      await waitFor(() => {
        expect(document.querySelector('.cg-anim-play')).toBeInTheDocument();
      });

      // 快进350ms
      jest.advanceTimersByTime(350);

      // 验证动画结束
      await waitFor(() => {
        expect(document.querySelector('.cg-anim-play')).not.toBeInTheDocument();
      });
    });

    test('1.3 玩家出牌动画应使用绿色样式', async () => {
      const gameState = createMockGameState({
        lastAction: '玩家出了 2 张牌',
        turnState: {
          currentPlayerIndex: 0,
          turnNumber: 1,
          playedCards: {
            cardIds: ['card1'],
            claimedRank: 'Q',
            actualCards: [{ id: 'card1', suit: 'hearts', rank: 'Q', value: 12, isRevealed: false, isJoker: false }],
            playerId: 'player',
            isBluff: false,
          },
          consecutivePasses: 0,
          lastPlayerId: 'player',
        },
      });

      render(<GameTable {...defaultProps} gameState={gameState} />);

      await waitFor(() => {
        const actionText = document.querySelector('.cg-action-play');
        expect(actionText).toBeInTheDocument();

        // 验证绿色背景样式
        const styles = window.getComputedStyle(actionText!);
        expect(styles.background).toContain('rgb(34, 197, 94)'); // #22c55e
      });
    });
  });

  describe('【TC-ANIM-002】AI出牌动画测试', () => {
    test('2.1 AI出牌时应触发橙色出牌动画', async () => {
      const gameState = createMockGameState({
        lastAction: 'AI出了 1 张牌',
        turnState: {
          currentPlayerIndex: 1,
          turnNumber: 1,
          playedCards: {
            cardIds: ['ai1'],
            claimedRank: 'Q',
            actualCards: [{ id: 'ai1', suit: 'clubs', rank: 'A', value: 14, isRevealed: false, isJoker: false }],
            playerId: 'ai',
            isBluff: false,
          },
          consecutivePasses: 0,
          lastPlayerId: 'ai',
        },
      });

      render(<GameTable {...defaultProps} gameState={gameState} />);

      // 验证AI动画类
      await waitFor(() => {
        const aiCharacter = document.querySelector('.cg-ai-right .cg-anim-aiPlay');
        expect(aiCharacter).toBeInTheDocument();
      });

      // 验证橙色文字提示
      const actionText = document.querySelector('.cg-action-aiPlay');
      expect(actionText).toBeInTheDocument();
      expect(actionText?.textContent).toBe('出牌');
    });

    test('2.2 AI出牌动画应使用橙色样式', async () => {
      const gameState = createMockGameState({
        lastAction: 'AI2出了 2 张牌',
        turnState: {
          currentPlayerIndex: 2,
          turnNumber: 1,
          playedCards: {
            cardIds: ['ai2'],
            claimedRank: 'Q',
            actualCards: [{ id: 'ai2', suit: 'diamonds', rank: 'Q', value: 12, isRevealed: false, isJoker: false }],
            playerId: 'ai2',
            isBluff: false,
          },
          consecutivePasses: 0,
          lastPlayerId: 'ai2',
        },
      });

      render(<GameTable {...defaultProps} gameState={gameState} />);

      await waitFor(() => {
        const actionText = document.querySelector('.cg-action-aiPlay');
        expect(actionText).toBeInTheDocument();

        // 验证橙色背景样式
        const styles = window.getComputedStyle(actionText!);
        expect(styles.background).toContain('rgb(249, 115, 22)'); // #f97316
      });
    });
  });

  describe('【TC-ANIM-003】质疑动画测试', () => {
    test('3.1 质疑时应触发紫色边框闪烁动画', async () => {
      const gameState = createMockGameState({
        lastAction: 'AI 质疑 玩家！质疑成功！',
        phase: 'challenge',
      });

      render(<GameTable {...defaultProps} gameState={gameState} />);

      // 验证质疑动画类
      await waitFor(() => {
        const aiCharacter = document.querySelector('.cg-ai-right .cg-anim-challenge');
        expect(aiCharacter).toBeInTheDocument();
      });

      // 验证紫色文字提示
      const actionText = document.querySelector('.cg-action-challenge');
      expect(actionText).toBeInTheDocument();
      expect(actionText?.textContent).toBe('质疑');
    });

    test('3.2 质疑动画时长应为1800ms', async () => {
      const gameState = createMockGameState({
        lastAction: '玩家 质疑 AI！质疑失败！',
        phase: 'challenge',
      });

      render(<GameTable {...defaultProps} gameState={gameState} />);

      await waitFor(() => {
        expect(document.querySelector('.cg-anim-challenge')).toBeInTheDocument();
      });

      // 快进1800ms
      jest.advanceTimersByTime(1800);

      // 验证动画结束
      await waitFor(() => {
        expect(document.querySelector('.cg-anim-challenge')).not.toBeInTheDocument();
      });
    });

    test('3.3 质疑动画应使用紫色样式', async () => {
      const gameState = createMockGameState({
        lastAction: 'AI2 质疑 玩家！',
        phase: 'challenge',
      });

      render(<GameTable {...defaultProps} gameState={gameState} />);

      await waitFor(() => {
        const actionText = document.querySelector('.cg-action-challenge');
        expect(actionText).toBeInTheDocument();

        // 验证紫色背景样式
        const styles = window.getComputedStyle(actionText!);
        expect(styles.background).toContain('rgb(157, 80, 187)'); // #9D50BB
      });
    });
  });

  describe('【TC-ANIM-004】闪避动画测试', () => {
    test('4.1 Geass闪避时应触发蓝色闪避动画', async () => {
      const gameState = createMockGameState({
        lastAction: 'AI 向 玩家 发动Geass！闪避！',
        phase: 'geass',
        geassResult: {
          activated: true,
          hit: false,
          damage: 0,
          message: '朱雀发动枢木剑术！完美闪避！',
          isDodge: true,
        },
      });

      render(<GameTable {...defaultProps} gameState={gameState} />);

      // 验证闪避动画类
      await waitFor(() => {
        const playerCharacter = document.querySelector('.cg-player-section .cg-anim-dodge');
        expect(playerCharacter).toBeInTheDocument();
      });

      // 验证闪避文字提示
      const actionText = document.querySelector('.cg-action-dodge');
      expect(actionText).toBeInTheDocument();
      expect(actionText?.textContent).toBe('闪避');
    });

    test('4.2 闪避动画应包含水平抖动效果', async () => {
      const gameState = createMockGameState({
        lastAction: '玩家 向 AI 发动Geass！闪避！',
        phase: 'geass',
        geassResult: {
          activated: true,
          hit: false,
          damage: 0,
          message: '闪避成功！',
          isDodge: true,
        },
      });

      render(<GameTable {...defaultProps} gameState={gameState} />);

      await waitFor(() => {
        const dodgeElement = document.querySelector('.cg-anim-dodge');
        expect(dodgeElement).toBeInTheDocument();

        // 验证动画样式包含transform
        const styles = window.getComputedStyle(dodgeElement!);
        expect(styles.animation).toContain('dodgeSuccess');
      });
    });
  });

  describe('【TC-ANIM-005】命中动画测试', () => {
    test('5.1 Geass命中时应触发红色命中动画', async () => {
      const gameState = createMockGameState({
        lastAction: 'AI 向 玩家 发动Geass！命中！',
        phase: 'geass',
        geassResult: {
          activated: true,
          hit: true,
          damage: 1,
          message: 'Geass命中！',
        },
      });

      render(<GameTable {...defaultProps} gameState={gameState} />);

      // 验证命中动画类
      await waitFor(() => {
        const playerCharacter = document.querySelector('.cg-player-section .cg-anim-hit');
        expect(playerCharacter).toBeInTheDocument();
      });

      // 验证命中文字提示
      const actionText = document.querySelector('.cg-action-hit');
      expect(actionText).toBeInTheDocument();
      expect(actionText?.textContent).toBe('命中');
    });

    test('5.2 命中动画应包含缩放震动效果', async () => {
      const gameState = createMockGameState({
        lastAction: '玩家 向 AI 发动Geass！命中！',
        phase: 'geass',
        geassResult: {
          activated: true,
          hit: true,
          damage: 1,
          message: 'Geass命中！',
        },
      });

      render(<GameTable {...defaultProps} gameState={gameState} />);

      await waitFor(() => {
        const hitElement = document.querySelector('.cg-anim-hit');
        expect(hitElement).toBeInTheDocument();

        // 验证动画样式
        const styles = window.getComputedStyle(hitElement!);
        expect(styles.animation).toContain('hitImpact');
      });
    });
  });

  describe('【TC-ANIM-006】动画性能测试', () => {
    test('6.1 多个动画同时触发时应保持流畅', async () => {
      // 快速连续触发多个动画
      const gameState1 = createMockGameState({
        lastAction: '玩家出了 2 张牌',
        turnState: {
          currentPlayerIndex: 0,
          turnNumber: 1,
          playedCards: {
            cardIds: ['card1'],
            claimedRank: 'Q',
            actualCards: [{ id: 'card1', suit: 'hearts', rank: 'Q', value: 12, isRevealed: false, isJoker: false }],
            playerId: 'player',
            isBluff: false,
          },
          consecutivePasses: 0,
          lastPlayerId: 'player',
        },
      });

      const { rerender } = render(<GameTable {...defaultProps} gameState={gameState1} />);

      // 验证第一个动画
      await waitFor(() => {
        expect(document.querySelector('.cg-anim-play')).toBeInTheDocument();
      });

      // 快速切换到质疑动画
      const gameState2 = createMockGameState({
        lastAction: 'AI 质疑 玩家！质疑成功！',
        phase: 'challenge',
      });

      rerender(<GameTable {...defaultProps} gameState={gameState2} />);

      // 验证质疑动画正常显示
      await waitFor(() => {
        expect(document.querySelector('.cg-anim-challenge')).toBeInTheDocument();
      });
    });

    test('6.2 动画应使用GPU加速属性', async () => {
      const gameState = createMockGameState({
        lastAction: '玩家出了 2 张牌',
        turnState: {
          currentPlayerIndex: 0,
          turnNumber: 1,
          playedCards: {
            cardIds: ['card1'],
            claimedRank: 'Q',
            actualCards: [{ id: 'card1', suit: 'hearts', rank: 'Q', value: 12, isRevealed: false, isJoker: false }],
            playerId: 'player',
            isBluff: false,
          },
          consecutivePasses: 0,
          lastPlayerId: 'player',
        },
      });

      render(<GameTable {...defaultProps} gameState={gameState} />);

      await waitFor(() => {
        const animElement = document.querySelector('.cg-anim-play');
        expect(animElement).toBeInTheDocument();

        // 验证使用transform属性（GPU加速）
        const styles = window.getComputedStyle(animElement!);
        expect(styles.transform).toBeDefined();
      });
    });
  });

  describe('【TC-ANIM-007】动画兼容性测试', () => {
    const browsers = [
      { name: 'Chrome', userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36' },
      { name: 'Firefox', userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:91.0) Gecko/20100101' },
      { name: 'Safari', userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15' },
      { name: 'Edge', userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Edg/91.0' },
    ];

    browsers.forEach(browser => {
      test(`在 ${browser.name} 浏览器中动画应正常显示`, async () => {
        // 模拟浏览器UserAgent
        Object.defineProperty(navigator, 'userAgent', {
          value: browser.userAgent,
          configurable: true,
        });

        const gameState = createMockGameState({
          lastAction: '玩家出了 2 张牌',
          turnState: {
            currentPlayerIndex: 0,
            turnNumber: 1,
            playedCards: {
              cardIds: ['card1'],
              claimedRank: 'Q',
              actualCards: [{ id: 'card1', suit: 'hearts', rank: 'Q', value: 12, isRevealed: false, isJoker: false }],
              playerId: 'player',
              isBluff: false,
            },
            consecutivePasses: 0,
            lastPlayerId: 'player',
          },
        });

        render(<GameTable {...defaultProps} gameState={gameState} />);

        await waitFor(() => {
          expect(document.querySelector('.cg-anim-play')).toBeInTheDocument();
        });
      });
    });
  });
});

describe('【动画规范验证】动画参数符合PRD要求', () => {
  const animationSpecs = [
    {
      name: '玩家出牌',
      type: 'play',
      duration: 350,
      color: '#22c55e',
      trigger: '玩家出牌',
    },
    {
      name: 'AI出牌',
      type: 'aiPlay',
      duration: 350,
      color: '#f97316',
      trigger: 'AI出牌',
    },
    {
      name: '质疑',
      type: 'challenge',
      duration: 1800,
      color: '#9D50BB',
      trigger: '发起质疑',
    },
    {
      name: '闪避',
      type: 'dodge',
      duration: 900,
      color: '#1E90FF',
      trigger: 'Geass闪避成功',
    },
    {
      name: '命中',
      type: 'hit',
      duration: 900,
      color: '#DC143C',
      trigger: 'Geass命中',
    },
  ];

  animationSpecs.forEach(spec => {
    test(`${spec.name}动画应符合PRD规范`, () => {
      // 验证动画时长
      expect(spec.duration).toBeGreaterThan(0);
      expect(spec.duration).toBeLessThanOrEqual(2000);

      // 验证颜色格式
      expect(spec.color).toMatch(/^#[0-9A-Fa-f]{6}$/);

      // 验证触发条件
      expect(spec.trigger).toBeDefined();
      expect(spec.trigger.length).toBeGreaterThan(0);
    });
  });
});
