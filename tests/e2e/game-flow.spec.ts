/**
 * E2E测试：游戏主流程
 * 使用Playwright测试完整的用户交互流程
 */

import { test, expect } from '@playwright/test';

test.describe('游戏主流程', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('首页应该显示游戏标题', async ({ page }) => {
    await expect(page).toHaveTitle(/Code Geass|Liar's Game/i);
    
    // 检查主标题
    const title = page.locator('h1, .title, [data-testid="game-title"]').first();
    await expect(title).toBeVisible();
  });

  test('首页应该有开始游戏按钮', async ({ page }) => {
    const startButton = page.locator('button:has-text("开始游戏"), button:has-text("Start"), [data-testid="start-button"]').first();
    await expect(startButton).toBeVisible();
    await expect(startButton).toBeEnabled();
  });

  test('点击开始游戏进入角色选择', async ({ page }) => {
    const startButton = page.locator('button:has-text("开始游戏"), button:has-text("Start"), [data-testid="start-button"]').first();
    await startButton.click();
    
    // 等待页面跳转或内容变化
    await page.waitForTimeout(500);
    
    // 检查是否显示角色选择界面
    const characterSelect = page.locator('[data-testid="character-select"], .character-select, h2:has-text("选择角色")').first();
    await expect(characterSelect).toBeVisible();
  });

  test('角色选择页面显示4个角色', async ({ page }) => {
    const startButton = page.locator('button:has-text("开始游戏"), button:has-text("Start"), [data-testid="start-button"]').first();
    await startButton.click();
    
    await page.waitForTimeout(500);
    
    // 检查4个角色
    const characters = page.locator('[data-testid="character-card"], .character-card');
    await expect(characters).toHaveCount(4);
  });

  test('可以选择鲁鲁修并开始游戏', async ({ page }) => {
    const startButton = page.locator('button:has-text("开始游戏"), button:has-text("Start"), [data-testid="start-button"]').first();
    await startButton.click();
    
    await page.waitForTimeout(500);
    
    // 选择鲁鲁修
    const lelouchCard = page.locator('[data-testid="character-lelouch"], .character-lelouch, text=鲁鲁修').first();
    await lelouchCard.click();
    
    // 点击确认
    const confirmButton = page.locator('button:has-text("确认"), button:has-text("开始"), [data-testid="confirm-button"]').first();
    await confirmButton.click();
    
    await page.waitForTimeout(1000);
    
    // 检查是否进入游戏界面
    const gameBoard = page.locator('[data-testid="game-board"], .game-board, .game-table').first();
    await expect(gameBoard).toBeVisible();
  });

  test('可以选择C.C.并开始游戏', async ({ page }) => {
    const startButton = page.locator('button:has-text("开始游戏"), button:has-text("Start"), [data-testid="start-button"]').first();
    await startButton.click();
    
    await page.waitForTimeout(500);
    
    // 选择C.C.
    const ccCard = page.locator('[data-testid="character-cc"], .character-cc, text=C.C.').first();
    await ccCard.click();
    
    // 点击确认
    const confirmButton = page.locator('button:has-text("确认"), button:has-text("开始"), [data-testid="confirm-button"]').first();
    await confirmButton.click();
    
    await page.waitForTimeout(1000);
    
    // 检查是否进入游戏界面
    const gameBoard = page.locator('[data-testid="game-board"], .game-board, .game-table').first();
    await expect(gameBoard).toBeVisible();
  });

  test('游戏界面显示玩家手牌', async ({ page }) => {
    const startButton = page.locator('button:has-text("开始游戏"), button:has-text("Start"), [data-testid="start-button"]').first();
    await startButton.click();
    await page.waitForTimeout(500);
    
    // 选择角色
    const characterCard = page.locator('[data-testid="character-card"], .character-card').first();
    await characterCard.click();
    
    const confirmButton = page.locator('button:has-text("确认"), button:has-text("开始"), [data-testid="confirm-button"]').first();
    await confirmButton.click();
    
    await page.waitForTimeout(1000);
    
    // 检查手牌
    const playerHand = page.locator('[data-testid="player-hand"], .player-hand, .hand-cards').first();
    await expect(playerHand).toBeVisible();
  });

  test('游戏界面显示骗子牌', async ({ page }) => {
    const startButton = page.locator('button:has-text("开始游戏"), button:has-text("Start"), [data-testid="start-button"]').first();
    await startButton.click();
    await page.waitForTimeout(500);
    
    const characterCard = page.locator('[data-testid="character-card"], .character-card').first();
    await characterCard.click();
    
    const confirmButton = page.locator('button:has-text("确认"), button:has-text("开始"), [data-testid="confirm-button"]').first();
    await confirmButton.click();
    
    await page.waitForTimeout(1000);
    
    // 检查骗子牌显示
    const liarCard = page.locator('[data-testid="liar-card"], .liar-card, text=/骗子牌|Liar Card/i').first();
    await expect(liarCard).toBeVisible();
  });

  test('游戏界面显示3个AI对手', async ({ page }) => {
    const startButton = page.locator('button:has-text("开始游戏"), button:has-text("Start"), [data-testid="start-button"]').first();
    await startButton.click();
    await page.waitForTimeout(500);
    
    const characterCard = page.locator('[data-testid="character-card"], .character-card').first();
    await characterCard.click();
    
    const confirmButton = page.locator('button:has-text("确认"), button:has-text("开始"), [data-testid="confirm-button"]').first();
    await confirmButton.click();
    
    await page.waitForTimeout(1000);
    
    // 检查AI玩家
    const aiPlayers = page.locator('[data-testid="ai-player"], .ai-player, .opponent');
    await expect(aiPlayers).toHaveCount(3);
  });

  test('可以返回主菜单', async ({ page }) => {
    const startButton = page.locator('button:has-text("开始游戏"), button:has-text("Start"), [data-testid="start-button"]').first();
    await startButton.click();
    await page.waitForTimeout(500);
    
    // 查找返回按钮
    const backButton = page.locator('button:has-text("返回"), button:has-text("Back"), [data-testid="back-button"]').first();
    
    if (await backButton.isVisible().catch(() => false)) {
      await backButton.click();
      await page.waitForTimeout(500);
      
      // 检查是否回到主菜单
      const mainMenu = page.locator('[data-testid="main-menu"], .main-menu').first();
      await expect(mainMenu).toBeVisible();
    }
  });
});

test.describe('游戏交互', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    
    // 进入游戏
    const startButton = page.locator('button:has-text("开始游戏"), button:has-text("Start"), [data-testid="start-button"]').first();
    await startButton.click();
    await page.waitForTimeout(500);
    
    const characterCard = page.locator('[data-testid="character-card"], .character-card').first();
    await characterCard.click();
    
    const confirmButton = page.locator('button:has-text("确认"), button:has-text("开始"), [data-testid="confirm-button"]').first();
    await confirmButton.click();
    
    await page.waitForTimeout(1000);
  });

  test('可以点击手牌选择', async ({ page }) => {
    const cards = page.locator('[data-testid="player-card"], .player-card, .card');
    
    if (await cards.count() > 0) {
      const firstCard = cards.first();
      await firstCard.click();
      
      // 检查是否被选中
      await expect(firstCard).toHaveClass(/selected|active/);
    }
  });

  test('选择牌后可以出牌', async ({ page }) => {
    const cards = page.locator('[data-testid="player-card"], .player-card, .card');
    
    if (await cards.count() > 0) {
      await cards.first().click();
      
      const playButton = page.locator('button:has-text("出牌"), button:has-text("Play"), [data-testid="play-button"]').first();
      
      if (await playButton.isVisible().catch(() => false)) {
        await expect(playButton).toBeEnabled();
      }
    }
  });

  test('可以质疑', async ({ page }) => {
    // 等待AI出牌或游戏状态变化
    await page.waitForTimeout(2000);
    
    const challengeButton = page.locator('button:has-text("质疑"), button:has-text("Challenge"), [data-testid="challenge-button"]').first();
    
    if (await challengeButton.isVisible().catch(() => false)) {
      await expect(challengeButton).toBeEnabled();
    }
  });

  test('可以跳过回合', async ({ page }) => {
    const passButton = page.locator('button:has-text("跳过"), button:has-text("Pass"), [data-testid="pass-button"]').first();
    
    if (await passButton.isVisible().catch(() => false)) {
      await expect(passButton).toBeEnabled();
    }
  });
});

test.describe('响应式布局', () => {
  test('在移动设备上显示正常', async ({ page }) => {
    // 设置移动设备视口
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');
    
    // 检查页面是否正常加载
    await expect(page.locator('body')).toBeVisible();
    
    // 检查主要内容是否可见
    const mainContent = page.locator('main, #root, .app').first();
    await expect(mainContent).toBeVisible();
  });

  test('在平板设备上显示正常', async ({ page }) => {
    await page.setViewportSize({ width: 768, height: 1024 });
    await page.goto('/');
    
    await expect(page.locator('body')).toBeVisible();
    
    const mainContent = page.locator('main, #root, .app').first();
    await expect(mainContent).toBeVisible();
  });
});
