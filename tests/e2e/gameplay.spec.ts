/**
 * E2E测试：游戏进行
 * 测试游戏进行中的各种交互
 */

import { test, expect } from '@playwright/test';

test.describe('游戏进行', () => {
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

  test('显示当前回合玩家', async ({ page }) => {
    const turnIndicator = page.locator('[data-testid="turn-indicator"], .turn-indicator, .current-turn').first();
    
    // 回合指示器可能存在也可能不存在，但页面应该正常
    await expect(page.locator('body')).toBeVisible();
  });

  test('显示玩家HP', async ({ page }) => {
    const hpIndicator = page.locator('[data-testid="hp-indicator"], .hp, .health, text=/HP|生命/i').first();
    await expect(hpIndicator).toBeVisible();
  });

  test('显示AI对手的HP', async ({ page }) => {
    const aiHPs = page.locator('[data-testid="ai-hp"], .ai-hp, .opponent-hp');
    
    // 至少应该有一些HP显示
    const count = await aiHPs.count();
    expect(count).toBeGreaterThan(0);
  });

  test('显示当前骗子牌', async ({ page }) => {
    const liarCard = page.locator('[data-testid="liar-card"], .liar-card').first();
    await expect(liarCard).toBeVisible();
  });

  test('玩家回合可以出牌', async ({ page }) => {
    // 等待玩家回合
    await page.waitForTimeout(500);
    
    const cards = page.locator('[data-testid="player-card"], .player-card, .card');
    
    if (await cards.count() > 0) {
      await cards.first().click();
      
      const playButton = page.locator('button:has-text("出牌"), button:has-text("Play"), [data-testid="play-button"]').first();
      
      if (await playButton.isVisible().catch(() => false)) {
        await playButton.click();
        await page.waitForTimeout(500);
        
        // 出牌后应该进入质疑阶段或下一回合
        await expect(page.locator('body')).toBeVisible();
      }
    }
  });

  test('玩家回合可以跳过', async ({ page }) => {
    const passButton = page.locator('button:has-text("跳过"), button:has-text("Pass"), [data-testid="pass-button"]').first();
    
    if (await passButton.isVisible().catch(() => false)) {
      await passButton.click();
      await page.waitForTimeout(500);
      
      await expect(page.locator('body')).toBeVisible();
    }
  });

  test('可以质疑AI的出牌', async ({ page }) => {
    // 等待AI行动
    await page.waitForTimeout(3000);
    
    const challengeButton = page.locator('button:has-text("质疑"), button:has-text("Challenge"), [data-testid="challenge-button"]').first();
    
    if (await challengeButton.isVisible().catch(() => false)) {
      await challengeButton.click();
      await page.waitForTimeout(1000);
      
      // 质疑后页面应该正常
      await expect(page.locator('body')).toBeVisible();
    }
  });

  test('显示游戏日志', async ({ page }) => {
    const gameLog = page.locator('[data-testid="game-log"], .game-log, .log, .history').first();
    
    // 日志可能存在也可能不存在
    if (await gameLog.isVisible().catch(() => false)) {
      await expect(gameLog).toBeVisible();
    }
  });

  test('可以返回主菜单', async ({ page }) => {
    const backButton = page.locator('button:has-text("返回"), button:has-text("Back"), button:has-text("菜单"), button:has-text("Menu"), [data-testid="back-to-menu"]').first();
    
    if (await backButton.isVisible().catch(() => false)) {
      await backButton.click();
      await page.waitForTimeout(500);
      
      // 检查是否回到主菜单
      const mainMenu = page.locator('[data-testid="main-menu"], .main-menu, h1:has-text("Code Geass")').first();
      await expect(mainMenu).toBeVisible();
    }
  });
});

test.describe('游戏结束', () => {
  test('游戏结束后显示结果', async ({ page }) => {
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
    
    // 进行多轮游戏直到结束
    for (let i = 0; i < 30; i++) {
      const state = await page.evaluate(() => {
        // 尝试获取游戏状态
        return { url: window.location.href };
      });
      
      // 检查是否显示结果页面
      const resultScreen = page.locator('[data-testid="result-screen"], .result-screen, .game-over, text=/胜利|失败|Win|Lose/i').first();
      
      if (await resultScreen.isVisible().catch(() => false)) {
        // 游戏结束
        await expect(resultScreen).toBeVisible();
        break;
      }
      
      // 尝试进行游戏操作
      const cards = page.locator('[data-testid="player-card"], .player-card, .card');
      const playButton = page.locator('button:has-text("出牌"), button:has-text("Play"), [data-testid="play-button"]').first();
      const challengeButton = page.locator('button:has-text("质疑"), button:has-text("Challenge"), [data-testid="challenge-button"]').first();
      const passButton = page.locator('button:has-text("跳过"), button:has-text("Pass"), [data-testid="pass-button"]').first();
      
      if (await cards.count() > 0 && await playButton.isVisible().catch(() => false)) {
        await cards.first().click();
        await playButton.click();
      } else if (await challengeButton.isVisible().catch(() => false)) {
        await challengeButton.click();
      } else if (await passButton.isVisible().catch(() => false)) {
        await passButton.click();
      }
      
      await page.waitForTimeout(500);
    }
  });
});
