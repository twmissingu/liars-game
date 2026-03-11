/**
 * Code Geass: Liar's Game - 应用入口组件
 * 整合所有UI组件、状态管理和音效系统
 */

import React, { useState, useCallback, useEffect, useRef } from 'react';
import { MainMenu } from './ui/MainMenu';
import { CharacterSelect } from './ui/CharacterSelect';
import { GameTable } from './ui/GameTable';
import { ResultScreen } from './ui/ResultScreen';
import { characters, getCharacterName } from './data/characters';
import { soundManager, playSound, playBGM, stopBGM } from './audio';
import { GameEngine } from './core/GameEngine';
import type { 
  CharacterId, 
  CardRank,
  FunnyAction,
} from './types';
import { FUNNY_ACTIONS } from './types/game.types';

import './styles/global.css';

type ScreenType = 'main-menu' | 'character-select' | 'game-table' | 'result' | 'settings' | 'help';

const App: React.FC = () => {
  const [currentScreen, setCurrentScreen] = useState<ScreenType>('main-menu');
  const [selectedCharacter, setSelectedCharacter] = useState<CharacterId | null>(null);
  const [difficulty, setDifficulty] = useState<'easy' | 'normal' | 'hard'>('normal');
  const gameEngineRef = useRef<GameEngine | null>(null);
  const [gameState, setGameState] = useState<any>(null);
  const [gameLog, setGameLog] = useState<string[]>([]);
  const [currentFunnyAction, setCurrentFunnyAction] = useState<FunnyAction | null>(null);
  const [selectedCards, setSelectedCards] = useState<string[]>([]);
  const [isProcessing, setIsProcessing] = useState(false);

  // 初始化音效
  useEffect(() => {
    const initAudio = async () => {
      try {
        await soundManager.preload();
        console.log('音效预加载完成');
        playBGM('bgm-menu');
      } catch (e) {
        console.warn('音效初始化失败:', e);
      }
    };
    
    initAudio();
    
    return () => {
      stopBGM();
    };
  }, []);

  const addLog = useCallback((message: string) => {
    setGameLog(prev => [...prev.slice(-19), message]);
  }, []);

  const handleStart = useCallback(() => {
    playSound('sfx-button-click');
    setCurrentScreen('character-select');
  }, []);

  const handleSettings = useCallback(() => {
    playSound('sfx-button-click');
    setCurrentScreen('settings');
  }, []);

  const handleHelp = useCallback(() => {
    playSound('sfx-button-click');
    setCurrentScreen('help');
  }, []);

  const handleSelectCharacter = useCallback((id: CharacterId) => {
    playSound('sfx-character-select');
    setSelectedCharacter(id);
  }, []);

  const handleConfirmCharacter = useCallback(() => {
    if (selectedCharacter) {
      playSound('sfx-button-click');
      
      // 初始化游戏引擎
      gameEngineRef.current = new GameEngine();
      const initialState = gameEngineRef.current.initializeGame(selectedCharacter);
      
      setGameState(initialState);
      setSelectedCards([]);
      
      // 判断谁先手
      const isPlayerFirst = initialState.currentPlayerIndex === 0;
      const firstPlayerName = isPlayerFirst ? getCharacterName(selectedCharacter) : 
        initialState.aiPlayers[initialState.currentPlayerIndex - 1]?.name;
      
      setGameLog([
        '游戏开始！',
        `骗子牌是: ${initialState.liarCard}`,
        `${firstPlayerName} 先手！`,
        '选择1-3张牌打出，自动声称是骗子牌。'
      ]);
      setCurrentScreen('game-table');
      playBGM('bgm-game');
      
      // 如果AI先手，自动执行AI回合
      if (!isPlayerFirst) {
        setTimeout(() => {
          processAITurn();
        }, 1500);
      }
    }
  }, [selectedCharacter]);

  const handleBack = useCallback(() => {
    playSound('sfx-button-click');
    setCurrentScreen('main-menu');
    setSelectedCharacter(null);
  }, []);

  const handleBackToMenu = useCallback(() => {
    playSound('sfx-button-click');
    setCurrentScreen('main-menu');
    setSelectedCharacter(null);
    setGameState(null);
    setGameLog([]);
    setSelectedCards([]);
    setCurrentFunnyAction(null);
    playBGM('bgm-menu');
  }, []);

  // 玩家选择/取消选择牌
  const handleToggleCardSelection = useCallback((cardId: string) => {
    if (!gameEngineRef.current || isProcessing) return;
    
    const engine = gameEngineRef.current;
    const state = engine.getState();
    
    if (state.phase !== 'player_turn') return;
    
    // 同时更新 gameEngine 中的选中状态
    engine.toggleCardSelection(cardId);
    
    // 从 engine 获取最新的选中状态来更新 UI
    const newState = engine.getState();
    setSelectedCards(newState.playerSelectedCards);
    
    playSound('sfx-button-click');
  }, [isProcessing]);

  // 玩家确认出牌
  const handleConfirmPlay = useCallback(() => {
    if (!gameEngineRef.current || selectedCards.length === 0 || isProcessing) return;
    
    setIsProcessing(true);
    playSound('sfx-play-card');
    
    const engine = gameEngineRef.current;
    
    try {
      // 不再传递声称点数，直接出牌（自动声称是骗子牌）
      const newState = engine.playerPlayCards();
      setGameState(newState);
      setSelectedCards([]);
      const playerName = getCharacterName(selectedCharacter);
      addLog(`${playerName} 出了 ${newState.turnState.playedCards?.cardIds.length} 张牌`);
      
      // 延迟后AI决策
      setTimeout(() => {
        processAIChallenge();
      }, 1500);
    } catch (e) {
      console.error('出牌错误:', e);
    } finally {
      setIsProcessing(false);
    }
  }, [selectedCards, isProcessing, addLog, selectedCharacter]);

  // AI质疑处理 - 按顺序，下家质疑
  const processAIChallenge = useCallback(() => {
    if (!gameEngineRef.current) return;
    
    const engine = gameEngineRef.current;
    const state = engine.getState();
    
    if (state.phase !== 'challenge') return;
    
    // 获取出牌者ID
    const playedBy = state.turnState.playedCards?.playerId;
    if (!playedBy) return;
    
    // 计算下家（按顺序：玩家->AI1->AI2->AI3->玩家）
    const playerIndex = playedBy === 'player' ? 0 : 
      state.aiPlayers.findIndex((ai: any) => ai.id === playedBy) + 1;
    const nextIndex = (playerIndex + 1) % 4;
    
    // 下家质疑决策
    if (nextIndex === 0) {
      // 下家是玩家，等待玩家决策
      addLog('等待玩家决策...');
      return;
    }
    
    // 下家是AI
    const nextAI = state.aiPlayers[nextIndex - 1];
    if (!nextAI || !nextAI.isActive || nextAI.stats.hp <= 0) {
      // 下家已淘汰，继续到下下家
      continueToNextTurn();
      return;
    }
    
    // AI智能决策：根据牌面、血条、技能等判断
    const shouldChallenge = calculateAIChallengeDecision(nextAI, state);
    
    if (shouldChallenge) {
      playSound('sfx-challenge');
      addLog(`${nextAI.name} 向 ${getCharacterName(playedBy === 'player' ? selectedCharacter : playedBy.replace('ai', '') as CharacterId)} 发起质疑！`);
      
      const newState = engine.aiChallengeDecision(nextAI.id);
      handleGeassResult(newState);
    } else {
      addLog(`${nextAI.name} 选择不质疑`);
      // 继续到下一家
      continueToNextTurn();
    }
  }, [addLog, selectedCharacter]);

  // AI质疑决策算法
  const calculateAIChallengeDecision = (ai: any, state: any): boolean => {
    const playedCards = state.turnState.playedCards;
    if (!playedCards) return false;
    
    // 基础概率
    let challengeProbability = 0.3;
    
    // 根据出牌数量调整（出多张牌更可能是撒谎）
    const cardCount = playedCards.cardIds.length;
    if (cardCount >= 3) challengeProbability += 0.3;
    else if (cardCount === 2) challengeProbability += 0.15;
    
    // 根据AI血条调整（血少时更谨慎）
    if (ai.stats.hp === 1) challengeProbability -= 0.2;
    
    // 朱雀技能：更激进
    if (ai.character === 'suzaku') challengeProbability += 0.1;
    
    // C.C.技能：更保守
    if (ai.character === 'cc') challengeProbability -= 0.1;
    
    // 随机决策
    return Math.random() < challengeProbability;
  };

  // 处理Geass结果
  const handleGeassResult = useCallback((newState: any) => {
    setGameState(newState);
    
    if (newState.geassResult) {
      if (newState.geassResult.hit) {
        playSound('sfx-geass-hit');
        const funnyAction = FUNNY_ACTIONS[Math.floor(Math.random() * FUNNY_ACTIONS.length)];
        setCurrentFunnyAction(funnyAction);
        playSound(funnyAction.soundType as any);
        addLog(`Geass命中！${funnyAction.emoji} ${newState.geassResult.message}`);
      } else {
        playSound('sfx-geass-miss');
        if (newState.geassResult.isRevived) {
          addLog(`🔄 ${newState.geassResult.message}`);
        } else if (newState.geassResult.isCounter) {
          addLog(`⚔️ ${newState.geassResult.message}`);
        } else {
          addLog('Geass未命中！');
        }
      }
    }
    
    // 检查游戏结束
    if (newState.phase === 'game_over') {
      setTimeout(() => {
        if (newState.winner === 'player') {
          playBGM('bgm-victory');
        } else {
          playBGM('bgm-defeat');
        }
        setCurrentScreen('result');
      }, 2000);
      return;
    }
    
    // 惩罚后重置牌局（Liar's Bar规则）
    setTimeout(() => {
      setCurrentFunnyAction(null);
      if (gameEngineRef.current) {
        const resetState = gameEngineRef.current.resetRound();
        setGameState(resetState);
        setSelectedCards([]);
        
        // 判断谁先手
        const isPlayerFirst = resetState.currentPlayerIndex === 0;
        const firstPlayerName = isPlayerFirst ? getCharacterName(selectedCharacter) : 
          resetState.aiPlayers[resetState.currentPlayerIndex - 1]?.name;
        
        addLog(`牌局重置！新的骗子牌是 ${resetState.liarCard}`);
        addLog(`${firstPlayerName} 先手！`);
        
        // 如果AI先手，自动执行AI回合
        if (!isPlayerFirst) {
          setTimeout(() => {
            processAITurn();
          }, 1500);
        }
      }
    }, 2500);
  }, [addLog, selectedCharacter]);

  // 继续下一回合
  const continueToNextTurn = useCallback(() => {
    if (!gameEngineRef.current) return;
    
    const engine = gameEngineRef.current;
    const state = engine.getState();
    
    // 将牌放到桌面
    if (state.turnState.playedCards) {
      state.turnState.tableCards = [
        ...state.turnState.tableCards,
        ...state.turnState.playedCards.actualCards,
      ];
    }
    
    // 进入下一玩家
    const nextIndex = (state.currentPlayerIndex + 1) % 4;
    state.currentPlayerIndex = nextIndex;
    
    if (nextIndex === 0) {
      state.phase = 'player_turn';
      state.turnState.turnNumber++;
      addLog(`第 ${state.turnState.turnNumber} 回合开始`);
    } else {
      state.phase = 'ai_turn';
      processAITurn();
    }
    
    state.turnState.playedCards = null;
    setGameState({ ...state });
  }, [addLog]);

  // AI回合处理
  const processAITurn = useCallback(() => {
    if (!gameEngineRef.current) return;
    
    const engine = gameEngineRef.current;
    const state = engine.getState();
    
    if (state.phase === 'player_turn' || state.phase === 'game_over') return;
    
    // 找到当前活动的AI
    const currentAIIndex = state.currentPlayerIndex - 1;
    if (currentAIIndex < 0 || currentAIIndex >= state.aiPlayers.length) return;
    
    const ai = state.aiPlayers[currentAIIndex];
    const currentAIId = ai?.id as 'ai' | 'ai2' | 'ai3';
    
    if (!ai || !ai.isActive || ai.stats.hp <= 0) {
      // AI已淘汰，跳过
      continueToNextTurn();
      return;
    }
    
    setIsProcessing(true);
    playSound('sfx-turn-start');
    addLog(`${ai.name} 的回合...`);
    
    setTimeout(() => {
      try {
        const newState = engine.aiPlayCards(currentAIId);
        setGameState(newState);
        addLog(`${ai.name} 出了 ${newState.turnState.playedCards?.cardIds.length} 张牌`);
        
        // 玩家质疑决策
        setTimeout(() => {
          setIsProcessing(false);
          // 等待玩家决定是否质疑
        }, 1000);
      } catch (e) {
        console.error('AI出牌错误:', e);
        setIsProcessing(false);
      }
    }, 1000);
  }, [addLog, continueToNextTurn]);

  // 玩家质疑
  const handleChallenge = useCallback(() => {
    if (!gameEngineRef.current || isProcessing) return;
    
    setIsProcessing(true);
    playSound('sfx-challenge');
    addLog('你发起了质疑！');
    
    const engine = gameEngineRef.current;
    const newState = engine.playerChallengeDecision(true);
    handleGeassResult(newState);
    setIsProcessing(false);
  }, [isProcessing, addLog, handleGeassResult]);

  // 玩家不质疑
  const handlePass = useCallback(() => {
    if (!gameEngineRef.current || isProcessing) return;
    
    playSound('sfx-button-click');
    addLog('你选择不质疑');
    
    const engine = gameEngineRef.current;
    const newState = engine.playerChallengeDecision(false);
    setGameState(newState);
    
    if (newState.phase !== 'player_turn' && newState.phase !== 'game_over') {
      setTimeout(() => {
        processAITurn();
      }, 1000);
    }
  }, [isProcessing, addLog, processAITurn]);

  // 鲁鲁修技能：改变骗子牌
  const handleLelouchSkill = useCallback((newRank: CardRank) => {
    if (!gameEngineRef.current || selectedCharacter !== 'lelouch') return;
    
    playSound('sfx-geass-activate');
    const engine = gameEngineRef.current;
    const newState = engine.lelouchChangeLiarCard(newRank);
    setGameState(newState);
    addLog(`鲁鲁修发动绝对命令！骗子牌变为 ${newRank}`);
  }, [selectedCharacter, addLog]);

  const handleRestart = useCallback(() => {
    playSound('sfx-button-click');
    setCurrentScreen('character-select');
    setSelectedCharacter(null);
    setGameState(null);
    setGameLog([]);
    setSelectedCards([]);
    setCurrentFunnyAction(null);
    playBGM('bgm-menu');
  }, []);

  const handleMainMenu = useCallback(() => {
    playSound('sfx-button-click');
    setCurrentScreen('main-menu');
    setSelectedCharacter(null);
    setGameState(null);
    setGameLog([]);
    setSelectedCards([]);
    setCurrentFunnyAction(null);
    playBGM('bgm-menu');
  }, []);

  const renderScreen = () => {
    switch (currentScreen) {
      case 'main-menu':
        return <MainMenu onStart={handleStart} onSettings={handleSettings} onHelp={handleHelp} />;

      case 'character-select':
        return (
          <CharacterSelect
            characters={characters}
            selectedId={selectedCharacter}
            onSelect={handleSelectCharacter}
            onConfirm={handleConfirmCharacter}
            onBack={handleBack}
          />
        );

      case 'game-table':
        return (
          <GameTable
            gameState={gameState}
            selectedCards={selectedCards}
            selectedCharacter={selectedCharacter}
            onToggleCardSelection={handleToggleCardSelection}
            onConfirmPlay={handleConfirmPlay}
            onPass={handlePass}
            onChallenge={handleChallenge}
            onBackToMenu={handleBackToMenu}
            onLelouchSkill={handleLelouchSkill}
            gameLog={gameLog}
            funnyAction={currentFunnyAction}
            isProcessing={isProcessing}
          />
        );

      case 'result':
        const isWin = gameState?.winner === 'player';
        const playerScore = gameState?.playerStats?.geassSuccessCount || 0;
        const aiScore = gameState?.aiPlayers?.reduce((sum: number, ai: any) => sum + ai.stats.geassSuccessCount, 0) || 0;
        
        return (
          <ResultScreen
            isWin={isWin}
            playerScore={playerScore}
            opponentScore={aiScore}
            onRestart={handleRestart}
            onMainMenu={handleMainMenu}
          />
        );

      case 'settings':
        return (
          <div className="cg-placeholder-screen">
            <h2>设置</h2>
            <div className="cg-settings-content">
              <p style={{color: '#a1a1aa', textAlign: 'center'}}>AI 会根据牌面、血条、技能等综合判断，自动选择最优策略</p>
              <button onClick={() => setCurrentScreen('main-menu')} className="cg-menu-button">返回</button>
            </div>
          </div>
        );

      case 'help':
        return (
          <div className="cg-placeholder-screen">
            <h2>游戏帮助</h2>
            <div className="cg-help-content">
              <section className="cg-help-section">
                <h3>🎮 游戏规则</h3>
                <ul>
                  <li>每人初始5张牌（Q/K/A + 小丑牌），轮流出牌</li>
                  <li>每回合随机指定一张"骗子牌"（Q/K/A）</li>
                  <li><strong>出牌：</strong>选择1-3张牌打出，自动声称是骗子牌</li>
                  <li><strong>质疑：</strong>下家可以选择相信或质疑</li>
                  <li>质疑后翻牌验证：</li>
                  <li>• 出的牌<strong>确实是</strong>骗子牌 → 质疑者撒谎，受惩罚</li>
                  <li>• 出的牌<strong>不是</strong>骗子牌 → 你撒谎，受惩罚</li>
                  <li><strong>惩罚：</strong>触发Geass判定，命中则HP-1，然后牌局重置</li>
                  <li>HP归零被淘汰，最后存活者获胜</li>
                  <li>手牌出完且未被质疑成功，直接获胜</li>
                </ul>
              </section>
              
              <section className="cg-help-section">
                <h3>👤 角色技能详解</h3>
                <ul>
                  <li>
                    <strong style={{color: '#d4af37'}}>鲁鲁修 · 绝对命令</strong>
                    <br/><small>每局限用1次，强制将当前骗子牌改为任意点数（Q/K/A）。掌控全局的王者技能。</small>
                  </li>
                  <li>
                    <strong style={{color: '#22c55e'}}>C.C. · Code之力</strong>
                    <br/><small>首次受到致命伤害（HP归零）时，50%概率复活并免疫本次伤害。不老不死的神秘力量，每局限1次。</small>
                  </li>
                  <li>
                    <strong style={{color: '#3b82f6'}}>朱雀 · 枢木剑术</strong>
                    <br/><small>受到Geass判定时：15%基础闪避率 + 25%概率完美闪避并反击（让攻击者承受本次伤害）。骑士的战斗技巧。</small>
                  </li>
                  <li>
                    <strong style={{color: '#dc2626'}}>卡莲 · 红莲二式</strong>
                    <br/><small>可出1-4张牌。出2张及以上时，若被质疑且质疑失败（撒谎被揭穿），对质疑者的Geass命中率 = 20% × 出牌张数（最高80%）。高风险高回报的爆发战术！</small>
                  </li>
                </ul>
              </section>
              
              <section className="cg-help-section">
                <h3>🎯 骗子牌（Liar Card）</h3>
                <ul>
                  <li><strong>什么是骗子牌？</strong></li>
                  <li>每轮游戏随机指定 Q、K、A 中的一张作为"骗子牌"</li>
                  <li>出牌时你可以声称出的牌是骗子牌（可能是真话，也可能是撒谎）</li>
                  <li>下家可以选择相信你，或者质疑你</li>
                  <li><strong>质疑后翻牌：</strong></li>
                  <li>• 你出的牌确实是骗子牌 → 质疑者撒谎，受惩罚</li>
                  <li>• 你出的牌不是骗子牌 → 你撒谎，受惩罚</li>
                  <li><strong>小丑牌：</strong>可以当作任意骗子牌使用，是赖子牌</li>
                </ul>
              </section>
              
              <section className="cg-help-section">
                <h3>🃏 特殊牌</h3>
                <ul>
                  <li><strong>小丑牌（Joker）</strong>：万能牌，可以当作任意骗子牌使用</li>
                </ul>
              </section>
              
              <button onClick={() => setCurrentScreen('main-menu')} className="cg-menu-button">返回</button>
            </div>
          </div>
        );

      default:
        return <MainMenu onStart={handleStart} onSettings={handleSettings} onHelp={handleHelp} />;
    }
  };

  return (
    <div className="cg-app">
      {renderScreen()}
      
      <style>{`
        .cg-app {
          width: 100vw;
          height: 100vh;
          overflow: hidden;
        }

        .cg-placeholder-screen {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          width: 100%;
          height: 100%;
          background: linear-gradient(180deg, #0a0a0f 0%, #1a1a24 100%);
          color: #f5f5f5;
          gap: 1rem;
          padding: 2rem;
        }

        .cg-placeholder-screen h2 {
          font-family: 'Cinzel', serif;
          font-size: 2rem;
          color: #d4af37;
          margin-bottom: 1rem;
        }

        .cg-menu-button {
          padding: 0.75rem 1.5rem;
          font-family: 'Noto Sans SC', sans-serif;
          font-size: 1rem;
          color: #0a0a0f;
          background: linear-gradient(135deg, #b8941f 0%, #d4af37 100%);
          border: none;
          border-radius: 0.5rem;
          cursor: pointer;
          transition: all 0.3s ease;
          margin-top: 1rem;
        }

        .cg-menu-button:hover {
          box-shadow: 0 0 20px rgba(212, 175, 55, 0.4);
          transform: translateY(-2px);
        }

        .cg-help-content {
          max-width: 600px;
          text-align: left;
          max-height: 70vh;
          overflow-y: auto;
          padding-right: 1rem;
        }

        .cg-setting-item {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1.5rem;
        }

        .cg-setting-item label {
          color: #d4af37;
          font-family: 'Noto Sans SC', sans-serif;
          min-width: 100px;
        }

        .cg-setting-select {
          padding: 0.5rem 1rem;
          background: #1a1a24;
          border: 1px solid #3f3f46;
          border-radius: 0.375rem;
          color: #f5f5f5;
          font-family: 'Noto Sans SC', sans-serif;
          cursor: pointer;
        }

        .cg-help-section {
          margin-bottom: 2rem;
        }

        .cg-help-section h3 {
          color: #d4af37;
          font-family: 'Cinzel', serif;
          margin-bottom: 1rem;
          font-size: 1.25rem;
        }

        .cg-help-section ul {
          list-style: none;
          padding: 0;
        }

        .cg-help-section li {
          color: #a1a1aa;
          font-family: 'Noto Sans SC', sans-serif;
          margin-bottom: 0.5rem;
          padding-left: 1.5rem;
          position: relative;
        }

        .cg-help-section li::before {
          content: '◆';
          position: absolute;
          left: 0;
          color: #dc2626;
          font-size: 0.5rem;
          top: 0.4rem;
        }

        .cg-help-section strong {
          color: #f5f5f5;
        }
      `}</style>
    </div>
  );
};

export default App;
