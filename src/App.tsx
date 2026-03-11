/**
 * Code Geass: Liar's Game - 应用入口组件
 * 整合所有UI组件、状态管理和音效系统
 */

import React, { useState, useCallback, useEffect, useRef } from 'react';
import { MainMenu } from './ui/MainMenu';
import { CharacterSelect } from './ui/CharacterSelect';
import { GameTable } from './ui/GameTable';
import { ResultScreen } from './ui/ResultScreen';
import { characters } from './data/characters';
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
      setGameLog([
        '游戏开始！',
        `骗子牌是: ${initialState.liarCard}`,
        '每次可出1-3张牌，然后选择声称的点数。'
      ]);
      setCurrentScreen('game-table');
      playBGM('bgm-game');
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
  const handleConfirmPlay = useCallback((claimedRank: CardRank) => {
    if (!gameEngineRef.current || selectedCards.length === 0 || isProcessing) return;
    
    setIsProcessing(true);
    playSound('sfx-play-card');
    
    const engine = gameEngineRef.current;
    
    try {
      const newState = engine.playerPlayCards(claimedRank);
      setGameState(newState);
      setSelectedCards([]);
      addLog(`你出了 ${newState.turnState.playedCards?.cardIds.length} 张牌，声称是 ${claimedRank}`);
      
      // 延迟后AI决策
      setTimeout(() => {
        processAIChallenge();
      }, 1500);
    } catch (e) {
      console.error('出牌错误:', e);
    } finally {
      setIsProcessing(false);
    }
  }, [selectedCards, isProcessing, addLog]);

  // AI质疑处理
  const processAIChallenge = useCallback(() => {
    if (!gameEngineRef.current) return;
    
    const engine = gameEngineRef.current;
    const state = engine.getState();
    
    if (state.phase !== 'challenge') return;
    
    // 随机选择一个AI来质疑
    const activeAIs = state.aiPlayers.filter(ai => ai.isActive && ai.stats.hp > 0);
    if (activeAIs.length === 0) {
      // 没有AI质疑，继续下一回合
      continueToNextTurn();
      return;
    }
    
    // 随机决定是否质疑
    const shouldChallenge = Math.random() > 0.6;
    
    if (shouldChallenge) {
      const challengingAI = activeAIs[Math.floor(Math.random() * activeAIs.length)];
      playSound('sfx-challenge');
      addLog(`${challengingAI.name} 发起了质疑！`);
      
      const newState = engine.aiChallengeDecision(challengingAI.id);
      handleGeassResult(newState);
    } else {
      addLog('AI们选择不质疑');
      continueToNextTurn();
    }
  }, [addLog]);

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
        if (newState.geassResult.isImmune) {
          addLog(`Geass被免疫！${newState.geassResult.message}`);
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
        addLog(`牌局重置！新的骗子牌是 ${resetState.liarCard}`);
      }
    }, 2500);
  }, [addLog]);

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
              <div className="cg-setting-item">
                <label>难度选择</label>
                <select 
                  value={difficulty} 
                  onChange={(e) => setDifficulty(e.target.value as any)}
                  className="cg-setting-select"
                >
                  <option value="easy">简单</option>
                  <option value="normal">普通</option>
                  <option value="hard">困难</option>
                </select>
              </div>
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
                <h3>游戏规则</h3>
                <ul>
                  <li>每人初始5张牌，轮流出牌</li>
                  <li>每回合会指定一张"骗子牌"</li>
                  <li>出牌时可以声称是骗子牌（可能撒谎）</li>
                  <li>其他玩家可以质疑你的出牌</li>
                  <li>质疑成功将触发Geass判定</li>
                  <li>Geass有1/3概率命中，造成1点伤害</li>
                  <li>HP归零则被淘汰</li>
                  <li>最后存活的玩家获胜</li>
                </ul>
              </section>
              
              <section className="cg-help-section">
                <h3>角色技能</h3>
                <ul>
                  <li><strong>鲁鲁修</strong>: 绝对命令 - 可强制改变骗子牌</li>
                  <li><strong>C.C.</strong>: 不老不死 - 50%概率免疫Geass</li>
                  <li><strong>朱雀</strong>: 生存本能 - HP≤1时Geass抗性提升</li>
                  <li><strong>卡莲</strong>: 红莲突击 - 可一次出1-4张牌</li>
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

        .cg-settings-content, .cg-help-content {
          max-width: 600px;
          text-align: left;
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
