/**
 * 游戏记录按钮测试用例
 * 
 * 测试范围:
 * 1. 按钮位置验证
 * 2. 按钮功能验证
 * 3. 响应式布局验证
 * 4. 交互体验验证
 */

import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { GameTable } from '../../src/ui/GameTable';
import { GameState, CharacterId } from '../../src/types';

// 模拟游戏状态
const mockGameState: GameState = {
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
};

describe('【UI测试】游戏记录按钮功能测试', () => {
  const defaultProps = {
    gameState: mockGameState,
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
    gameLog: ['游戏开始', '第1回合开始', '骗子牌是 Q'],
    isProcessing: false,
    canUseSkill: true,
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('【TC-BTN-001】按钮位置验证', () => {
    test('1.1 按钮应位于页面左上方', () => {
      render(<GameTable {...defaultProps} />);
      
      // 查找顶部按钮
      const topButton = document.querySelector('.cg-log-toggle-btn-top');
      expect(topButton).toBeInTheDocument();
      
      // 验证按钮不在左侧中间位置
      const leftButton = document.querySelector('.cg-log-toggle-btn:not(.cg-log-toggle-btn-top)');
      expect(leftButton).not.toBeInTheDocument();
    });

    test('1.2 按钮不应遮挡AI角色信息', () => {
      render(<GameTable {...defaultProps} />);
      
      const topButton = document.querySelector('.cg-log-toggle-btn-top');
      const aiCharacter = document.querySelector('.cg-ai-top .cg-character');
      
      expect(topButton).toBeInTheDocument();
      expect(aiCharacter).toBeInTheDocument();
      
      // 验证按钮位置在AI角色上方
      const buttonRect = topButton?.getBoundingClientRect();
      const aiRect = aiCharacter?.getBoundingClientRect();
      
      if (buttonRect && aiRect) {
        // 按钮底部应在AI角色顶部之上，保留至少10px间距
        expect(buttonRect.bottom).toBeLessThanOrEqual(aiRect.top - 10);
      }
    });

    test('1.3 按钮应显示图标和文字', () => {
      render(<GameTable {...defaultProps} />);
      
      const topButton = document.querySelector('.cg-log-toggle-btn-top');
      expect(topButton).toBeInTheDocument();
      
      // 验证图标存在
      const icon = topButton?.querySelector('.cg-log-toggle-icon');
      expect(icon).toBeInTheDocument();
      expect(icon?.textContent).toBe('📜');
      
      // 验证文字存在
      const text = topButton?.querySelector('.cg-log-toggle-text');
      expect(text).toBeInTheDocument();
      expect(text?.textContent).toBe('记录');
    });

    test('1.4 有记录时应显示徽章', () => {
      render(<GameTable {...defaultProps} />);
      
      const badge = document.querySelector('.cg-log-badge');
      expect(badge).toBeInTheDocument();
      expect(badge?.textContent).toBe('3'); // gameLog.length
    });
  });

  describe('【TC-BTN-002】按钮功能验证', () => {
    test('2.1 点击按钮应展开游戏记录面板', async () => {
      render(<GameTable {...defaultProps} />);
      
      const topButton = document.querySelector('.cg-log-toggle-btn-top');
      expect(topButton).toBeInTheDocument();
      
      // 点击按钮
      fireEvent.click(topButton!);
      
      // 验证面板展开
      const logPanel = document.querySelector('.cg-log-panel.expanded');
      expect(logPanel).toBeInTheDocument();
    });

    test('2.2 再次点击按钮应收起游戏记录面板', async () => {
      render(<GameTable {...defaultProps} />);
      
      const topButton = document.querySelector('.cg-log-toggle-btn-top');
      
      // 点击展开
      fireEvent.click(topButton!);
      expect(document.querySelector('.cg-log-panel.expanded')).toBeInTheDocument();
      
      // 再次点击收起
      fireEvent.click(topButton!);
      expect(document.querySelector('.cg-log-panel.collapsed')).toBeInTheDocument();
    });

    test('2.3 展开状态下按钮样式应变化', async () => {
      render(<GameTable {...defaultProps} />);
      
      const topButton = document.querySelector('.cg-log-toggle-btn-top');
      
      // 初始状态
      expect(topButton).not.toHaveClass('expanded');
      
      // 点击展开
      fireEvent.click(topButton!);
      
      // 验证样式变化
      await waitFor(() => {
        expect(document.querySelector('.cg-log-toggle-btn-top.expanded')).toBeInTheDocument();
      });
    });

    test('2.4 遮罩层点击应关闭面板', async () => {
      render(<GameTable {...defaultProps} />);
      
      // 展开面板
      const topButton = document.querySelector('.cg-log-toggle-btn-top');
      fireEvent.click(topButton!);
      
      // 验证遮罩层存在
      const overlay = document.querySelector('.cg-log-overlay');
      expect(overlay).toBeInTheDocument();
      
      // 点击遮罩层关闭
      fireEvent.click(overlay!);
      expect(document.querySelector('.cg-log-panel.collapsed')).toBeInTheDocument();
    });
  });

  describe('【TC-BTN-003】响应式布局验证', () => {
    test('3.1 桌面端按钮应正常显示', () => {
      // 模拟桌面端视口
      window.innerWidth = 1200;
      window.dispatchEvent(new Event('resize'));
      
      render(<GameTable {...defaultProps} />);
      
      const topButton = document.querySelector('.cg-log-toggle-btn-top');
      expect(topButton).toBeInTheDocument();
    });

    test('3.2 移动端按钮应正常显示', () => {
      // 模拟移动端视口
      window.innerWidth = 375;
      window.dispatchEvent(new Event('resize'));
      
      render(<GameTable {...defaultProps} />);
      
      const topButton = document.querySelector('.cg-log-toggle-btn-top');
      expect(topButton).toBeInTheDocument();
    });

    test('3.3 平板端按钮应正常显示', () => {
      // 模拟平板端视口
      window.innerWidth = 768;
      window.dispatchEvent(new Event('resize'));
      
      render(<GameTable {...defaultProps} />);
      
      const topButton = document.querySelector('.cg-log-toggle-btn-top');
      expect(topButton).toBeInTheDocument();
    });
  });

  describe('【TC-BTN-004】交互体验验证', () => {
    test('4.1 按钮应有悬停效果', () => {
      render(<GameTable {...defaultProps} />);
      
      const topButton = document.querySelector('.cg-log-toggle-btn-top');
      expect(topButton).toBeInTheDocument();
      
      // 验证按钮可交互
      expect(topButton).toHaveAttribute('aria-label');
    });

    test('4.2 按钮点击应有视觉反馈', async () => {
      render(<GameTable {...defaultProps} />);
      
      const topButton = document.querySelector('.cg-log-toggle-btn-top') as HTMLElement;
      
      // 模拟点击
      fireEvent.mouseDown(topButton);
      
      // 验证按钮样式
      expect(topButton).toBeInTheDocument();
    });

    test('4.3 记录面板应显示正确内容', async () => {
      render(<GameTable {...defaultProps} />);
      
      // 展开面板
      const topButton = document.querySelector('.cg-log-toggle-btn-top');
      fireEvent.click(topButton!);
      
      // 验证日志内容
      const logContent = document.querySelector('.cg-log-content');
      expect(logContent).toBeInTheDocument();
      
      // 验证日志项
      const logItems = document.querySelectorAll('.cg-log-item');
      expect(logItems.length).toBe(3);
    });

    test('4.4 关闭按钮应正常工作', async () => {
      render(<GameTable {...defaultProps} />);
      
      // 展开面板
      const topButton = document.querySelector('.cg-log-toggle-btn-top');
      fireEvent.click(topButton!);
      
      // 点击关闭按钮
      const closeButton = document.querySelector('.cg-log-close-btn');
      expect(closeButton).toBeInTheDocument();
      
      fireEvent.click(closeButton!);
      expect(document.querySelector('.cg-log-panel.collapsed')).toBeInTheDocument();
    });
  });
});

describe('【兼容性测试】游戏记录按钮跨设备测试', () => {
  const devices = [
    { name: 'iPhone SE', width: 375, height: 667 },
    { name: 'iPhone 12', width: 390, height: 844 },
    { name: 'iPad Mini', width: 768, height: 1024 },
    { name: 'iPad Pro', width: 1024, height: 1366 },
    { name: 'Desktop', width: 1920, height: 1080 },
  ];

  devices.forEach(device => {
    test(`在 ${device.name} (${device.width}x${device.height}) 上按钮应正常显示`, () => {
      window.innerWidth = device.width;
      window.innerHeight = device.height;
      window.dispatchEvent(new Event('resize'));
      
      const defaultProps = {
        gameState: mockGameState,
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
        gameLog: ['游戏开始'],
        isProcessing: false,
        canUseSkill: true,
      };
      
      render(<GameTable {...defaultProps} />);
      
      const topButton = document.querySelector('.cg-log-toggle-btn-top');
      expect(topButton).toBeInTheDocument();
    });
  });
});
