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
import { createDeck, dealCards } from './utils';
import { soundManager, playSound, playBGM, stopBGM } from './audio';
import { AIEngine } from './ai/AIEngine';
import { GeassSystem } from './core/GeassSystem';
import { FUNNY_ACTIONS } from './types/game.types';
import type { 
  CharacterId, 
  Card, 
  Difficulty,
  FunnyAction,
} from './types';

import './styles/global.css';

// 本地游戏状态类型
interface LocalGameState {
  selectedCharacter: CharacterId | null;
  playerHand: Card[];
  opponentHand: Card[];
  tableCards: Card[];
  currentRound: number;
  maxRounds: number;
  playerScore: number;
  opponentScore: number;
  playerHP: number;
  opponentHP: number;
  maxHP: number;
  currentTurn: 'player' | 'opponent';
  lastAction: string;
  gamePhase: 'setup' | 'playing' | 'ended';
}

type ScreenType = 'main-menu' | 'character-select' | 'game-table' | 'result' | 'settings' | 'help';

const App: React.FC = () => {
  const [currentScreen, setCurrentScreen] = useState<ScreenType>('main-menu');
  const [selectedCharacter, setSelectedCharacter] = useState<CharacterId | null>(null);
  const [difficulty, setDifficulty] = useState<Difficulty>('normal');
  const aiEngineRef = useRef<AIEngine | null>(null);
  const geassSystemRef = useRef<GeassSystem | null>(null);
  
  const [gameState, setGameState] = useState<LocalGameState>({
    selectedCharacter: null,
    playerHand: [],
    opponentHand: [],
    tableCards: [],
    currentRound: 1,
    maxRounds: 5,
    playerScore: 0,
    opponentScore: 0,
    playerHP: 3,
    opponentHP: 3,
    maxHP: 3,
    currentTurn: 'player',
    lastAction: '',
    gamePhase: 'setup',
  });

  const [currentFunnyAction, setCurrentFunnyAction] = useState<FunnyAction | null>(null);
  const [gameLog, setGameLog] = useState<string[]>([]);

  // 初始化音效
  useEffect(() => {
    soundManager.preload().then(() => {
      console.log('音效预加载完成');
    });
    
    playBGM('bgm-menu');
    
    return () => {
      stopBGM();
    };
  }, []);

  const addLog = useCallback((message: string) => {
    setGameLog(prev => [...prev.slice(-9), message]);
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
      
      aiEngineRef.current = new AIEngine(difficulty, 'balanced');
      geassSystemRef.current = new GeassSystem();
      
      const deck = createDeck();
      const { playerHand, opponentHand } = dealCards(deck);
      
      setGameState({
        selectedCharacter,
        playerHand,
        opponentHand,
        tableCards: [],
        currentRound: 1,
        maxRounds: 5,
        playerScore: 0,
        opponentScore: 0,
        playerHP: 3,
        opponentHP: 3,
        maxHP: 3,
        currentTurn: 'player',
        lastAction: '游戏开始！',
        gamePhase: 'playing',
      });
      
      setGameLog(['游戏开始！请选择要出的牌。']);
      setCurrentScreen('game-table');
      playBGM('bgm-game');
    }
  }, [selectedCharacter, difficulty]);

  const handleBack = useCallback(() => {
    playSound('sfx-button-click');
    setCurrentScreen('main-menu');
    setSelectedCharacter(null);
  }, []);

  const handlePlayCard = useCallback((cardId: string) => {
    if (gameState.currentTurn !== 'player') return;
    
    playSound('sfx-play-card');
    
    setGameState(prev => {
      const card = prev.playerHand.find(c => c.id === cardId);
      if (!card) return prev;

      return {
        ...prev,
        playerHand: prev.playerHand.filter(c => c.id !== cardId),
        tableCards: [...prev.tableCards, card],
        currentTurn: 'opponent',
        lastAction: `你出了 ${card.rank}${getSuitSymbol(card.suit)}`,
      };
    });
    
    addLog(`你出了一张牌`);
    
    setTimeout(() => {
      handleAIturn();
    }, 1000);
  }, [gameState.currentTurn]);

  const handleAIturn = useCallback(() => {
    if (!aiEngineRef.current) return;
    
    playSound('sfx-turn-start');
    
    const shouldChallenge = Math.random() > 0.7 && gameState.tableCards.length > 0;
    
    if (shouldChallenge) {
      handleChallenge();
    } else {
      if (gameState.opponentHand.length > 0) {
        const randomCard = gameState.opponentHand[Math.floor(Math.random() * gameState.opponentHand.length)];
        
        setGameState(prev => ({
          ...prev,
          opponentHand: prev.opponentHand.filter(c => c.id !== randomCard.id),
          tableCards: [...prev.tableCards, randomCard],
          currentTurn: 'player',
          lastAction: '对手出了一张牌',
        }));
        
        addLog('对手出了一张牌');
        playSound('sfx-play-card');
      }
    }
  }, [gameState.opponentHand, gameState.tableCards]);

  const handlePass = useCallback(() => {
    playSound('sfx-button-click');
    addLog('你选择跳过');
    
    setGameState(prev => ({
      ...prev,
      currentTurn: 'opponent',
      lastAction: '你选择了跳过',
    }));
    
    setTimeout(() => {
      handleAIturn();
    }, 1000);
  }, []);

  const handleChallenge = useCallback(() => {
    playSound('sfx-challenge');
    addLog('你发起了质疑！');
    
    if (geassSystemRef.current) {
      const result = geassSystemRef.current.executeGeass('player', 'ai');
      
      setTimeout(() => {
        if (result.hit) {
          playSound('sfx-geass-hit');
          
          const randomAction = FUNNY_ACTIONS[Math.floor(Math.random() * FUNNY_ACTIONS.length)];
          setCurrentFunnyAction(randomAction);
          playSound(randomAction.soundType as any);
          
          setGameState(prev => {
            const newOpponentHP = prev.opponentHP - 1;
            
            if (newOpponentHP <= 0) {
              setTimeout(() => {
                playBGM('bgm-victory');
                setCurrentScreen('result');
              }, 2000);
            }
            
            return {
              ...prev,
              opponentHP: newOpponentHP,
              playerScore: prev.playerScore + 1,
              lastAction: `Geass命中！${randomAction.emoji} ${randomAction.description}`,
            };
          });
          
          addLog(`Geass命中！${result.funnyAction || ''}`);
        } else {
          playSound('sfx-geass-miss');
          
          setGameState(prev => ({
            ...prev,
            lastAction: 'Geass未命中！',
          }));
          
          addLog('Geass未命中！');
        }
      }, 1000);
    }
  }, []);

  const handleRestart = useCallback(() => {
    playSound('sfx-button-click');
    setCurrentScreen('character-select');
    setSelectedCharacter(null);
    setGameState({
      selectedCharacter: null,
      playerHand: [],
      opponentHand: [],
      tableCards: [],
      currentRound: 1,
      maxRounds: 5,
      playerScore: 0,
      opponentScore: 0,
      playerHP: 3,
      opponentHP: 3,
      maxHP: 3,
      currentTurn: 'player',
      lastAction: '',
      gamePhase: 'setup',
    });
    setGameLog([]);
    setCurrentFunnyAction(null);
    playBGM('bgm-menu');
  }, []);

  const handleMainMenu = useCallback(() => {
    playSound('sfx-button-click');
    setCurrentScreen('main-menu');
    setSelectedCharacter(null);
    setGameState({
      selectedCharacter: null,
      playerHand: [],
      opponentHand: [],
      tableCards: [],
      currentRound: 1,
      maxRounds: 5,
      playerScore: 0,
      opponentScore: 0,
      playerHP: 3,
      opponentHP: 3,
      maxHP: 3,
      currentTurn: 'player',
      lastAction: '',
      gamePhase: 'setup',
    });
    setGameLog([]);
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
            onPlayCard={handlePlayCard}
            onPass={handlePass}
            onChallenge={handleChallenge}
            gameLog={gameLog}
            funnyAction={currentFunnyAction}
          />
        );

      case 'result':
        return (
          <ResultScreen
            isWin={gameState.playerScore > gameState.opponentScore}
            playerScore={gameState.playerScore}
            opponentScore={gameState.opponentScore}
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
                  onChange={(e) => setDifficulty(e.target.value as Difficulty)}
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
                  <li>可以质疑对手的出牌</li>
                  <li>质疑成功将触发Geass判定</li>
                  <li>Geass有1/3概率命中，造成1点伤害</li>
                  <li>HP归零则游戏结束</li>
                </ul>
              </section>
              
              <section className="cg-help-section">
                <h3>角色技能</h3>
                <ul>
                  <li><strong>鲁鲁修</strong>: 绝对命令 - 可强制改变骗子牌</li>
                  <li><strong>C.C.</strong>: 不老不死 - 50%概率免疫Geass</li>
                  <li><strong>朱雀</strong>: 生存本能 - HP≤1时Geass抗性提升</li>
                  <li><strong>卡莲</strong>: 红莲突击 - 可一次出多张牌</li>
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

function getSuitSymbol(suit: string): string {
  const symbols: Record<string, string> = {
    spades: '♠',
    hearts: '♥',
    clubs: '♣',
    diamonds: '♦',
  };
  return symbols[suit] || suit;
}

export default App;
