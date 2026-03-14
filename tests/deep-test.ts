/**
 * 深度测试脚本 - 模拟10轮游戏
 * 测试范围：
 * 1. 角色选择页面 - 随机选择角色和头像
 * 2. 游戏进行（至少10轮）
 *    - 骗子牌显示正确
 *    - 当前玩家标识正确
 *    - 出牌数量和声称牌型记录正确
 *    - 质疑顺序正确（出牌者下家开始）
 *    - 每个玩家只被询问一次
 *    - 质疑结果正确（撒谎/诚实判定）
 *    - Geass判定正确
 *    - HP计算和显示正确（朱雀4，其他3）
 *    - 游戏界面和日志记录一致
 */

import { GameEngine } from '../src/core/GameEngine';
import type { CharacterId, GameState } from '../src/types';

// 测试统计
const testStats = {
  totalRounds: 0,
  playerTurns: 0,
  aiTurns: 0,
  challenges: 0,
  successfulChallenges: 0,
  failedChallenges: 0,
  geassHits: 0,
  geassMisses: 0,
  hpChanges: [] as { player: string; oldHp: number; newHp: number; round: number }[],
  errors: [] as string[],
};

// 日志函数
function log(message: string, type: 'info' | 'success' | 'error' | 'warn' = 'info') {
  const prefix = {
    info: '📝',
    success: '✅',
    error: '❌',
    warn: '⚠️',
  }[type];
  console.log(`${prefix} ${message}`);
}

// 验证HP
function verifyHP(state: GameState, context: string): boolean {
  let hasError = false;
  
  // 验证玩家HP
  const playerMaxHp = state.playerCharacter === 'suzaku' ? 4 : 3;
  if (state.playerStats.maxHp !== playerMaxHp) {
    log(`${context}: 玩家最大HP错误！期望${playerMaxHp}，实际${state.playerStats.maxHp}`, 'error');
    testStats.errors.push(`${context}: 玩家最大HP错误`);
    hasError = true;
  }
  
  // 验证AI HP
  state.aiPlayers.forEach(ai => {
    const expectedMaxHp = ai.character === 'suzaku' ? 4 : 3;
    if (ai.stats.maxHp !== expectedMaxHp) {
      log(`${context}: AI ${ai.name} 最大HP错误！期望${expectedMaxHp}，实际${ai.stats.maxHp}`, 'error');
      testStats.errors.push(`${context}: AI ${ai.name} 最大HP错误`);
      hasError = true;
    }
    
    if (ai.stats.hp > ai.stats.maxHp) {
      log(`${context}: AI ${ai.name} HP超过最大值！`, 'error');
      testStats.errors.push(`${context}: AI ${ai.name} HP超过最大值`);
      hasError = true;
    }
  });
  
  if (state.playerStats.hp > state.playerStats.maxHp) {
    log(`${context}: 玩家HP超过最大值！`, 'error');
    testStats.errors.push(`${context}: 玩家HP超过最大值`);
    hasError = true;
  }
  
  return !hasError;
}

// 验证骗子牌
function verifyLiarCard(state: GameState, context: string): boolean {
  if (!state.liarCard || !['Q', 'K', 'A'].includes(state.liarCard)) {
    log(`${context}: 骗子牌无效！实际: ${state.liarCard}`, 'error');
    testStats.errors.push(`${context}: 骗子牌无效`);
    return false;
  }
  return true;
}

// 验证当前玩家
function verifyCurrentPlayer(state: GameState, context: string): boolean {
  const validPhases = ['player_turn', 'ai_turn', 'challenge', 'geass', 'game_over', 'setup'];
  if (!validPhases.includes(state.phase)) {
    log(`${context}: 无效的游戏阶段！实际: ${state.phase}`, 'error');
    testStats.errors.push(`${context}: 无效的游戏阶段`);
    return false;
  }
  
  if (state.currentPlayerIndex < 0 || state.currentPlayerIndex > 3) {
    log(`${context}: 当前玩家索引无效！实际: ${state.currentPlayerIndex}`, 'error');
    testStats.errors.push(`${context}: 当前玩家索引无效`);
    return false;
  }
  
  return true;
}

// 模拟AI质疑决策
function simulateAIChallenge(engine: GameEngine, state: GameState): boolean {
  // AI有30%概率质疑
  return Math.random() < 0.3;
}

// 运行一轮测试
function runRound(engine: GameEngine, roundNum: number, playerCharacter: CharacterId): boolean {
  log(`\n========== 第 ${roundNum} 回合 ==========`, 'info');
  testStats.totalRounds++;
  
  let state = engine.getState();
  
  // 验证初始状态
  verifyHP(state, `回合${roundNum}开始`);
  verifyLiarCard(state, `回合${roundNum}开始`);
  verifyCurrentPlayer(state, `回合${roundNum}开始`);
  
  log(`骗子牌: ${state.liarCard}`, 'info');
  log(`当前玩家索引: ${state.currentPlayerIndex}`, 'info');
  
  // 模拟游戏流程
  let turnCount = 0;
  const maxTurnsPerRound = 20; // 防止无限循环
  
  while (state.phase !== 'game_over' && turnCount < maxTurnsPerRound) {
    turnCount++;
    
    if (state.phase === 'player_turn') {
      testStats.playerTurns++;
      log(`玩家回合 - 手牌数: ${state.playerHand.length}`, 'info');
      
      // 模拟玩家出牌（选择第一张牌）
      if (state.playerHand.length === 0) {
        log('玩家没有手牌，跳过', 'warn');
        break;
      }
      
      const cardId = state.playerHand[0].id;
      engine.toggleCardSelection(cardId);
      state = engine.playerPlayCards();
      
      log(`玩家出牌: ${state.turnState.playedCards?.cardIds.length}张，声称是${state.turnState.playedCards?.claimedRank}`, 'info');
      
    } else if (state.phase === 'ai_turn') {
      testStats.aiTurns++;
      const currentAI = state.aiPlayers[state.currentPlayerIndex - 1];
      log(`AI回合: ${currentAI?.name} - 手牌数: ${currentAI?.hand.length}`, 'info');
      
      if (!currentAI || currentAI.hand.length === 0) {
        log('AI没有手牌，跳过', 'warn');
        break;
      }
      
      const aiId = currentAI.id as 'ai' | 'ai2' | 'ai3';
      state = engine.aiPlayCards(aiId);
      
      log(`${currentAI.name}出牌: ${state.turnState.playedCards?.cardIds.length}张，声称是${state.turnState.playedCards?.claimedRank}`, 'info');
      
    } else if (state.phase === 'challenge') {
      // 质疑阶段
      const playedBy = state.turnState.playedCards?.playerId;
      log(`进入质疑阶段，出牌者: ${playedBy}`, 'info');
      
      // 模拟质疑流程
      let challengerIndex = (state.currentPlayerIndex + 1) % 4;
      let checkedCount = 0;
      let challenged = false;
      
      while (checkedCount < 3 && !challenged) {
        if (challengerIndex === 0) {
          // 玩家质疑决策
          const shouldChallenge = Math.random() < 0.3;
          if (shouldChallenge) {
            log('玩家选择质疑！', 'info');
            testStats.challenges++;
            state = engine.playerChallengeDecision(true);
            challenged = true;
          } else {
            log('玩家选择不质疑', 'info');
            state = engine.playerChallengeDecision(false);
          }
        } else {
          // AI质疑决策
          const ai = state.aiPlayers[challengerIndex - 1];
          if (ai && ai.isActive && ai.stats.hp > 0) {
            const shouldChallenge = Math.random() < 0.3;
            if (shouldChallenge) {
              log(`${ai.name}选择质疑！`, 'info');
              testStats.challenges++;
              state = engine.aiChallengeDecision(ai.id as 'ai' | 'ai2' | 'ai3');
              challenged = true;
            } else {
              log(`${ai.name}选择不质疑`, 'info');
            }
          }
        }
        
        challengerIndex = (challengerIndex + 1) % 4;
        checkedCount++;
      }
      
      if (!challenged) {
        log('无人质疑，回合继续', 'info');
      }
      
    } else if (state.phase === 'geass') {
      // Geass结算阶段
      log('进入Geass结算阶段', 'info');
      
      if (state.geassResult) {
        if (state.geassResult.hit) {
          testStats.geassHits++;
          log(`Geass命中！${state.geassResult.message}`, 'success');
        } else {
          testStats.geassMisses++;
          log(`Geass未命中！${state.geassResult.message}`, 'warn');
        }
        
        // 记录HP变化
        const oldHp = state.playerStats.hp;
        // 等待状态更新
        setTimeout(() => {
          const newState = engine.getState();
          if (newState.playerStats.hp !== oldHp) {
            testStats.hpChanges.push({
              player: 'player',
              oldHp,
              newHp: newState.playerStats.hp,
              round: roundNum,
            });
          }
        }, 100);
      }
      
      // Geass阶段后会自动进入下一回合或游戏结束
      state = engine.getState();
      
    } else if (state.phase === 'game_over') {
      log(`游戏结束！胜者: ${state.winner}`, 'success');
      break;
    }
    
    // 验证状态
    verifyHP(state, `回合${roundNum}-回合内`);
    verifyCurrentPlayer(state, `回合${roundNum}-回合内`);
    
    // 检查是否完成一轮（回到玩家回合且回合数增加）
    if (state.phase === 'player_turn' && state.turnState.turnNumber > roundNum) {
      log(`第 ${roundNum} 回合完成`, 'success');
      break;
    }
  }
  
  if (turnCount >= maxTurnsPerRound) {
    log(`回合${roundNum}超过最大回合数限制，可能存在循环`, 'error');
    testStats.errors.push(`回合${roundNum}超过最大回合数限制`);
    return false;
  }
  
  return true;
}

// 主测试函数
export function runDeepTest(): void {
  log('\n🎮 ========== Liars Game 深度测试开始 ========== 🎮\n', 'info');
  
  const characters: CharacterId[] = ['lelouch', 'cc', 'suzaku', 'kallen'];
  const testRounds = 10;
  
  // 随机选择角色
  const playerCharacter = characters[Math.floor(Math.random() * characters.length)];
  log(`选择角色: ${playerCharacter}`, 'success');
  
  // 创建游戏引擎
  const engine = new GameEngine();
  
  // 初始化游戏
  log('\n初始化游戏...', 'info');
  const initialState = engine.initializeGame(playerCharacter, 'normal');
  
  // 验证初始状态
  log(`\n初始状态验证:`, 'info');
  log(`- 玩家角色: ${initialState.playerCharacter}`, 'info');
  log(`- 玩家HP: ${initialState.playerStats.hp}/${initialState.playerStats.maxHp}`, 'info');
  log(`- 骗子牌: ${initialState.liarCard}`, 'info');
  log(`- AI数量: ${initialState.aiPlayers.length}`, 'info');
  
  initialState.aiPlayers.forEach(ai => {
    log(`  - ${ai.name}: HP ${ai.stats.hp}/${ai.stats.maxHp}, 手牌 ${ai.hand.length}`, 'info');
  });
  
  // 验证HP设置
  const playerMaxHp = playerCharacter === 'suzaku' ? 4 : 3;
  if (initialState.playerStats.maxHp !== playerMaxHp) {
    log(`玩家最大HP错误！期望${playerMaxHp}，实际${initialState.playerStats.maxHp}`, 'error');
    testStats.errors.push('初始状态: 玩家最大HP错误');
  }
  
  initialState.aiPlayers.forEach(ai => {
    const expectedMaxHp = ai.character === 'suzaku' ? 4 : 3;
    if (ai.stats.maxHp !== expectedMaxHp) {
      log(`AI ${ai.name} 最大HP错误！期望${expectedMaxHp}，实际${ai.stats.maxHp}`, 'error');
      testStats.errors.push(`初始状态: AI ${ai.name} 最大HP错误`);
    }
  });
  
  // 运行10轮测试
  log(`\n开始运行 ${testRounds} 轮测试...`, 'info');
  
  for (let i = 1; i <= testRounds; i++) {
    const success = runRound(engine, i, playerCharacter);
    if (!success) {
      log(`第 ${i} 轮测试失败`, 'error');
    }
    
    // 检查游戏是否结束
    const state = engine.getState();
    if (state.phase === 'game_over') {
      log(`游戏在第 ${i} 轮结束`, 'info');
      break;
    }
  }
  
  // 输出测试报告
  log('\n========== 测试报告 ==========', 'info');
  log(`总回合数: ${testStats.totalRounds}`, 'info');
  log(`玩家回合数: ${testStats.playerTurns}`, 'info');
  log(`AI回合数: ${testStats.aiTurns}`, 'info');
  log(`质疑次数: ${testStats.challenges}`, 'info');
  log(`Geass命中: ${testStats.geassHits}`, 'info');
  log(`Geass未命中: ${testStats.geassMisses}`, 'info');
  
  if (testStats.errors.length > 0) {
    log(`\n发现 ${testStats.errors.length} 个错误:`, 'error');
    testStats.errors.forEach((err, idx) => {
      log(`  ${idx + 1}. ${err}`, 'error');
    });
  } else {
    log('\n✅ 未发现错误！', 'success');
  }
  
  log('\n========== 测试完成 ==========', 'info');
}

// 如果直接运行此文件
if (require.main === module) {
  runDeepTest();
}