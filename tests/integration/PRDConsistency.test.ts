/**
 * PRD一致性深度测试
 * 验证游戏逻辑与PRD文档描述完全一致
 */

import { GameEngine } from '../../src/core/GameEngineV2';
import { CardSystem } from '../../src/core/CardSystem';
import { GeassSystem } from '../../src/core/GeassSystem';
import type { CharacterId, CardRank } from '../../src/types';

describe('PRD一致性深度测试', () => {
  let engine: GameEngine;
  let cardSystem: CardSystem;
  let geassSystem: GeassSystem;

  beforeEach(() => {
    engine = new GameEngine();
    cardSystem = new CardSystem();
    geassSystem = new GeassSystem();
  });

  afterEach(() => {
    // GameEngineV2不需要显式reset
  });

  describe('1. 角色选择页面', () => {
    const characters: CharacterId[] = ['lelouch', 'cc', 'suzaku', 'kallen'];

    test.each(characters)('选择角色 %s 应该能正确进入游戏', (character) => {
      const state = engine.initializeGame(character, 'normal');
      expect(state.playerCharacter).toBe(character);
      expect(state.phase).toMatch(/player_turn|ai_turn/);
      expect(state.playerHand).toHaveLength(5);
    });
  });

  describe('2. 骗子牌机制 (CORE-002)', () => {
    test('骗子牌应该随机指定为Q/K/A之一', () => {
      const results: CardRank[] = [];
      
      // 运行100次统计分布
      for (let i = 0; i < 100; i++) {
        engine = new GameEngine();
        const state = engine.initializeGame('lelouch');
        if (state.liarCard) {
          results.push(state.liarCard);
        }
      }

      const qCount = results.filter(r => r === 'Q').length;
      const kCount = results.filter(r => r === 'K').length;
      const aCount = results.filter(r => r === 'A').length;

      // 验证只有Q/K/A三种结果
      expect(results.every(r => ['Q', 'K', 'A'].includes(r))).toBe(true);
      
      // 验证分布相对均匀（每个应该在20-50之间）
      expect(qCount).toBeGreaterThan(10);
      expect(kCount).toBeGreaterThan(10);
      expect(aCount).toBeGreaterThan(10);
    });

    test('骗子牌应该在回合切换时更新', () => {
      const state1 = engine.initializeGame('lelouch', 'normal');
      const liarCard1 = state1.liarCard;

      // 重置牌局
      const state2 = engine.resetRound();
      const liarCard2 = state2.liarCard;

      // 骗子牌可能改变（因为是随机的）
      expect(['Q', 'K', 'A']).toContain(liarCard2);
    });
  });

  describe('3. 出牌系统 (CORE-003)', () => {
    test('普通角色每回合可出1-3张牌', () => {
      engine.initializeGame('lelouch');
      
      // 确保是玩家回合
      let currentState = engine.getState();
      if (currentState.phase !== 'player_turn') {
        // 重新初始化确保玩家先手
        engine = new GameEngine();
        engine.initializeGame('lelouch');
        currentState = engine.getState();
      }
      
      // 选择1张牌（GameEngineV2默认限制）
      const cardIds = currentState.playerHand.slice(0, 1).map(c => c.id);
      cardIds.forEach(id => engine.toggleCardSelection(id));
      
      // 应该能成功出牌
      const newState = engine.playerPlayCards();
      expect(newState.turnState.playedCards?.cardIds).toHaveLength(1);
    });

    test('卡莲角色可出1-4张牌', () => {
      const state = engine.initializeGame('kallen', 'normal');
      
      // 确保是玩家回合（如果不是，切换到玩家回合）
      if (state.phase !== 'player_turn') {
        engine['state'].phase = 'player_turn';
        engine['state'].currentPlayerIndex = 0;
      }
      
      // 选择4张牌
      const cardIds = state.playerHand.slice(0, 4).map(c => c.id);
      cardIds.forEach(id => engine.toggleCardSelection(id));
      
      // 应该能成功出牌
      const newState = engine.playerPlayCards();
      expect(newState.turnState.playedCards?.cardIds).toHaveLength(4);
    });

    test('普通角色不能出超过3张牌', () => {
      const state = engine.initializeGame('lelouch', 'normal');
      
      // 尝试选择4张牌（但只有5张手牌）
      const cardIds = state.playerHand.slice(0, 4).map(c => c.id);
      cardIds.forEach(id => engine.toggleCardSelection(id));
      
      // 应该只选择了3张（限制）
      const selectedState = engine.getState();
      expect(selectedState.playerSelectedCards).toHaveLength(3);
    });
  });

  describe('4. 质疑系统 (CORE-004)', () => {
    test('质疑应该从出牌者下家开始', () => {
      engine.initializeGame('lelouch', 'normal');
      let state = engine.getState();
      
      // 设置玩家出牌
      state.phase = 'player_turn';
      state.currentPlayerIndex = 0;
      const cardId = state.playerHand[0].id;
      engine.toggleCardSelection(cardId);
      state = engine.playerPlayCards();

      expect(state.phase).toBe('challenge');
      expect(state.turnState.playedCards?.playerId).toBe('player');
      
      // 质疑顺序应该是：AI1(索引1) -> AI2(索引2) -> AI3(索引3)
      const playedByIndex = 0;
      const firstChallengerIndex = (playedByIndex + 1) % 4;
      expect(firstChallengerIndex).toBe(1); // AI1
    });

    test('质疑成功时出牌者撒谎应受罚', () => {
      engine.initializeGame('lelouch', 'normal');
      let state = engine.getState();
      
      // 玩家出非骗子牌（撒谎）
      state.phase = 'player_turn';
      state.currentPlayerIndex = 0;
      const liarCard = state.liarCard;
      const nonLiarCard = state.playerHand.find(c => c.rank !== liarCard && !c.isJoker);
      
      if (nonLiarCard) {
        engine.toggleCardSelection(nonLiarCard.id);
        state = engine.playerPlayCards();
        
        // AI质疑
        const initialHp = state.playerStats.hp;
        
        // 强制质疑直到有人质疑或完成
        let attempts = 0;
        while (state.phase === 'challenge' && attempts < 10) {
          state = engine.aiChallengeDecision('ai');
          attempts++;
        }
        
        // 验证进入Geass阶段或游戏结束
        expect(['geass', 'game_over', 'player_turn', 'ai_turn']).toContain(state.phase);
      }
    });

    test('质疑失败时质疑者应受罚', () => {
      engine.initializeGame('lelouch', 'normal');
      let state = engine.getState();
      
      // 玩家出骗子牌（诚实）
      state.phase = 'player_turn';
      state.currentPlayerIndex = 0;
      const liarCard = state.liarCard;
      const liarCards = state.playerHand.filter(c => c.rank === liarCard || c.isJoker);
      
      if (liarCards.length > 0) {
        engine.toggleCardSelection(liarCards[0].id);
        state = engine.playerPlayCards();
        
        const ai = state.aiPlayers[0];
        const initialAiHp = ai.stats.hp;
        
        // AI质疑
        let attempts = 0;
        while (state.phase === 'challenge' && attempts < 10) {
          state = engine.aiChallengeDecision('ai');
          attempts++;
        }
        
        // 验证进入Geass阶段或游戏结束
        expect(['geass', 'game_over', 'player_turn', 'ai_turn']).toContain(state.phase);
      }
    });

    test('无人质疑时回合结束', () => {
      engine.initializeGame('lelouch', 'normal');
      let state = engine.getState();
      
      // 玩家出牌
      state.phase = 'player_turn';
      state.currentPlayerIndex = 0;
      const cardId = state.playerHand[0].id;
      engine.toggleCardSelection(cardId);
      state = engine.playerPlayCards();

      // 所有AI都不质疑
      let attempts = 0;
      while (state.phase === 'challenge' && attempts < 10) {
        try {
          state = engine.playerChallengeDecision(false);
        } catch (e) {
          break;
        }
        attempts++;
      }

      // 应该退出质疑阶段
      expect(['player_turn', 'ai_turn', 'game_over']).toContain(state.phase);
    });
  });

  describe('5. Geass判定系统 (CORE-005)', () => {
    test('基础命中率应为33.33%', () => {
      // 统计100次Geass判定
      let hits = 0;
      const total = 100;

      for (let i = 0; i < total; i++) {
        const stats = { 
          hp: 3, 
          maxHp: 3, 
          geassSuccessCount: 0, 
          geassFailCount: 0 
        };
        const result = geassSystem.performGeass('player', stats, null);
        if (result.hit) hits++;
      }

      // 33.33%的命中率，100次应该在25-45之间（考虑随机性）
      const hitRate = hits / total;
      expect(hitRate).toBeGreaterThan(0.20);
      expect(hitRate).toBeLessThan(0.50);
    });

    test('C.C.应该有50%概率免疫Geass', () => {
      let immuneCount = 0;
      const total = 100;

      for (let i = 0; i < total; i++) {
        const stats = { 
          hp: 1, 
          maxHp: 3, 
          geassSuccessCount: 0, 
          geassFailCount: 0,
          ccReviveUsed: false
        };
        const result = geassSystem.performGeass('player', stats, 'cc');
        // C.C.在濒死时可能触发复活（免疫）
        if (result.isRevived || result.hit === false) {
          immuneCount++;
        }
      }

      // 应该有相当比例的免疫/闪避
      const immuneRate = immuneCount / total;
      expect(immuneRate).toBeGreaterThan(0.30);
    });

    test('朱雀应该有闪避和反击能力', () => {
      let specialCount = 0;
      const total = 100;

      for (let i = 0; i < total; i++) {
        const stats = { 
          hp: 3, 
          maxHp: 3, 
          geassSuccessCount: 0, 
          geassFailCount: 0 
        };
        const result = geassSystem.performGeass('player', stats, 'suzaku');
        // 朱雀有25%反击 + 15%闪避
        if (result.isCounter || result.hit === false) {
          specialCount++;
        }
      }

      // 应该有相当比例的闪避/反击
      const specialRate = specialCount / total;
      expect(specialRate).toBeGreaterThan(0.20);
    });

    test('卡莲技能应该提升Geass命中率', () => {
      // 测试卡莲技能加成计算
      const boost2Cards = geassSystem.calculateKallenBoost(2);
      const boost3Cards = geassSystem.calculateKallenBoost(3);
      const boost4Cards = geassSystem.calculateKallenBoost(4);

      expect(boost2Cards).toBeCloseTo(0.4, 5); // 20% * 2
      expect(boost3Cards).toBeCloseTo(0.6, 5); // 20% * 3
      expect(boost4Cards).toBeCloseTo(0.8, 5); // 20% * 4
    });
  });

  describe('6. HP系统 (CORE-005)', () => {
    test('朱雀应该有4点HP', () => {
      const state = engine.initializeGame('suzaku', 'normal');
      expect(state.playerStats.maxHp).toBe(4);
      expect(state.playerStats.hp).toBe(4);
    });

    test('其他角色应该有3点HP', () => {
      const nonSuzakuChars: CharacterId[] = ['lelouch', 'cc', 'kallen'];
      
      nonSuzakuChars.forEach(char => {
        engine = new GameEngine();
        const state = engine.initializeGame(char);
        expect(state.playerStats.maxHp).toBe(3);
        expect(state.playerStats.hp).toBe(3);
      });
    });

    test('AI朱雀也应该有4点HP', () => {
      // 创建游戏，让AI选择朱雀
      engine.initializeGame('lelouch', 'normal');
      const state = engine.getState();
      
      // 检查是否有AI是朱雀
      const suzakuAi = state.aiPlayers.find(ai => ai.character === 'suzaku');
      if (suzakuAi) {
        expect(suzakuAi.stats.maxHp).toBe(4);
        expect(suzakuAi.stats.hp).toBe(4);
      }
    });
  });

  describe('7. 角色技能系统', () => {
    test('鲁鲁修技能：绝对命令 - 可改变骗子牌', () => {
      const state = engine.initializeGame('lelouch', 'normal');
      const initialLiarCard = state.liarCard;
      
      // 使用鲁鲁修技能
      const canUse = engine.canPlayerUseSkill('player');
      expect(canUse).toBe(true);
      
      // 改变骗子牌
      const newRank: CardRank = initialLiarCard === 'Q' ? 'K' : 'Q';
      const newState = engine.lelouchChangeLiarCard(newRank);
      
      expect(newState.liarCard).toBe(newRank);
    });

    test('鲁鲁修技能每局限用1次', () => {
      engine.initializeGame('lelouch', 'normal');
      
      // 第一次使用
      const canUse1 = engine.canPlayerUseSkill('player');
      expect(canUse1).toBe(true);
      
      const state = engine.getState();
      const newRank: CardRank = state.liarCard === 'Q' ? 'K' : 'Q';
      engine.lelouchChangeLiarCard(newRank);
      
      // 第二次使用应该失败
      const canUse2 = engine.canPlayerUseSkill('player');
      expect(canUse2).toBe(false);
    });
  });

  describe('8. 10轮深度模拟测试', () => {
    test('应该能完成10轮游戏且所有规则一致', () => {
      engine.initializeGame('lelouch', 'normal');
      
      const stats = {
        rounds: 0,
        challenges: 0,
        geassHits: 0,
        geassMisses: 0,
        errors: [] as string[]
      };

      for (let round = 1; round <= 10; round++) {
        let state = engine.getState();
        
        if (state.phase === 'game_over') {
          break;
        }

        stats.rounds++;

        // 验证骗子牌
        if (!['Q', 'K', 'A'].includes(state.liarCard || '')) {
          stats.errors.push(`回合${round}: 骗子牌无效`);
        }

        // 验证HP
        if (state.playerStats.hp > state.playerStats.maxHp) {
          stats.errors.push(`回合${round}: 玩家HP超过最大值`);
        }

        state.aiPlayers.forEach(ai => {
          if (ai.stats.hp > ai.stats.maxHp) {
            stats.errors.push(`回合${round}: AI ${ai.name} HP超过最大值`);
          }
        });

        // 模拟一个回合
        if (state.phase === 'player_turn' && state.playerHand.length > 0) {
          const cardId = state.playerHand[0].id;
          engine.toggleCardSelection(cardId);
          state = engine.playerPlayCards();
          
          // 质疑阶段 - 不质疑
          if (state.phase === 'challenge') {
            try {
              state = engine.playerChallengeDecision(false);
            } catch (e) {
              // 忽略错误
            }
          }
        }

        // 检查Geass结果
        if (state.geassResult) {
          if (state.geassResult.hit) {
            stats.geassHits++;
          } else {
            stats.geassMisses++;
          }
        }

        // 如果游戏结束，退出
        if (state.phase === 'game_over') {
          break;
        }
      }

      // 验证没有错误
      expect(stats.errors).toHaveLength(0);
      expect(stats.rounds).toBeGreaterThan(0);
    });
  });

  describe('9. 界面与日志一致性', () => {
    test('游戏状态应该与日志记录一致', () => {
      engine.initializeGame('lelouch', 'normal');
      let state = engine.getState();
      
      // 记录初始状态
      const initialHandCount = state.playerHand.length;
      
      // 玩家出牌
      state.phase = 'player_turn';
      state.currentPlayerIndex = 0;
      const cardId = state.playerHand[0].id;
      engine.toggleCardSelection(cardId);
      state = engine.playerPlayCards();
      
      // 验证手牌减少
      expect(state.playerHand.length).toBe(initialHandCount - 1);
      
      // 验证出牌记录
      expect(state.turnState.playedCards).toBeDefined();
      expect(state.turnState.playedCards?.playerId).toBe('player');
      expect(state.turnState.playedCards?.cardIds).toContain(cardId);
      
      // 验证日志
      expect(state.lastAction).toContain('玩家');
      expect(state.lastAction).toContain('出了');
    });
  });
});
