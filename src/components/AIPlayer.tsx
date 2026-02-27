/**
 * AI玩家组件
 * React组件，用于显示AI玩家状态、动画和决策过程
 */
import React, { useState, useEffect, useCallback } from 'react';
import { AIEngine, AIEngineManager } from '../ai/AIEngine';
import { 
  AIPlayer as AIPlayerType, 
  AIGameState, 
  AIDecision, 
  AIThought,
  Difficulty
} from '../types';

interface AIPlayerProps {
  player: AIPlayerType;
  opponent: AIPlayerType;
  gameState: AIGameState;
  difficulty: Difficulty;
  personality: string;
  onDecision: (decision: AIDecision) => void;
  isActive: boolean;
  className?: string;
}

interface AIPlayerState {
  thought: AIThought | null;
  lastDecision: AIDecision | null;
  decisionCount: number;
  isThinking: boolean;
}

export const AIPlayer: React.FC<AIPlayerProps> = ({
  player,
  opponent,
  gameState,
  difficulty,
  personality,
  onDecision,
  isActive,
  className = ''
}) => {
  const [aiEngine] = useState(() => 
    AIEngineManager.getInstance(player.id, difficulty, personality as any)
  );
  
  const [state, setState] = useState<AIPlayerState>({
    thought: null,
    lastDecision: null,
    decisionCount: 0,
    isThinking: false
  });
  
  const [showThinkingBubble, setShowThinkingBubble] = useState(false);
  
  // 设置思考回调
  useEffect(() => {
    aiEngine.setThoughtCallback((thought) => {
      setState(prev => ({ ...prev, thought }));
    });
  }, [aiEngine]);
  
  // 执行决策
  const executeDecision = useCallback(async () => {
    if (!isActive || state.isThinking) return;
    
    setState(prev => ({ ...prev, isThinking: true }));
    setShowThinkingBubble(true);
    
    const context = {
      gameState,
      aiPlayer: player,
      opponent,
      history: [], // 需要从游戏状态获取历史
      knownCards: new Map()
    };
    
    try {
      const decision = await aiEngine.makeDecision(context);
      
      setState(prev => ({
        ...prev,
        lastDecision: decision,
        decisionCount: prev.decisionCount + 1,
        isThinking: false
      }));
      
      onDecision(decision);
      
      // 延迟隐藏思考气泡
      setTimeout(() => setShowThinkingBubble(false), 1000);
    } catch (error) {
      console.error('AI决策错误:', error);
      setState(prev => ({ ...prev, isThinking: false }));
      setShowThinkingBubble(false);
    }
  }, [isActive, state.isThinking, aiEngine, gameState, player, opponent, onDecision]);
  
  // 当轮到AI时自动执行
  useEffect(() => {
    if (isActive && gameState.currentPlayer === player.id) {
      executeDecision();
    }
  }, [isActive, gameState.currentPlayer, player.id, executeDecision]);
  
  // 获取头像表情
  const getAvatarEmotion = (): string => {
    if (!state.thought?.emotion) return '🤖';
    
    const emotionMap: Record<string, string> = {
      confident: '😏',
      uncertain: '🤔',
      surprised: '😲',
      calm: '😌'
    };
    
    return emotionMap[state.thought.emotion] || '🤖';
  };
  
  // 获取动画类名
  const getAnimationClass = (): string => {
    if (!state.thought) return '';
    
    const animationMap: Record<string, string> = {
      thinking: 'ai-thinking',
      deciding: 'ai-deciding',
      playing: 'ai-playing',
      challenging: 'ai-challenging',
      reacting: 'ai-reacting'
    };
    
    return animationMap[state.thought.state] || '';
  };
  
  // 获取难度标签
  const getDifficultyLabel = (): string => {
    const labels: Record<Difficulty, string> = {
      easy: '简单',
      normal: '普通',
      hard: '困难'
    };
    return labels[difficulty];
  };
  
  // 获取性格标签
  const getPersonalityLabel = (): string => {
    const labels: Record<string, string> = {
      aggressive: '激进',
      conservative: '保守',
      balanced: '平衡'
    };
    return labels[personality] || '平衡';
  };
  
  // 获取性格颜色
  const getPersonalityColor = (): string => {
    const colors: Record<string, string> = {
      aggressive: '#ff6b6b',
      conservative: '#4ecdc4',
      balanced: '#95a5a6'
    };
    return colors[personality];
  };
  
  return (
    <div className={`ai-player ${className} ${getAnimationClass()} ${isActive ? 'active' : ''}`}>
      {/* AI头像 */}
      <div className="ai-avatar-container">
        <div className="ai-avatar">
          {getAvatarEmotion()}
        </div>
        
        {/* 思考气泡 */}
        {showThinkingBubble && state.thought && (
          <div className="thinking-bubble">
            <div className="thinking-content">
              <div className="thinking-text">{state.thought.message}</div>
              <div className="thinking-progress">
                <div 
                  className="progress-bar" 
                  style={{ width: `${state.thought.progress}%` }}
                />
              </div>
            </div>
          </div>
        )}
        
        {/* 决策结果气泡 */}
        {state.lastDecision && !showThinkingBubble && (
          <div className="decision-bubble">
            <div className="decision-content">
              {state.lastDecision.action === 'challenge' ? (
                <span className="challenge-text">❗ 质疑！</span>
              ) : state.lastDecision.action === 'play' ? (
                <span className="play-text">
                  打出 {state.lastDecision.claimedCard}
                </span>
              ) : (
                <span className="pass-text">跳过</span>
              )}
            </div>
          </div>
        )}
      </div>
      
      {/* AI信息 */}
      <div className="ai-info">
        <div className="ai-name">{player.name}</div>
        <div className="ai-badges">
          <span className="difficulty-badge">
            {getDifficultyLabel()}
          </span>
          <span 
            className="personality-badge"
            style={{ backgroundColor: getPersonalityColor() }}
          >
            {getPersonalityLabel()}
          </span>
        </div>
        
        <div className="ai-stats">
          <span className="hand-count">手牌: {player.hand.length}</span>
          <span className="score">得分: {player.score}</span>
        </div>
        
        {/* 策略描述 */}
        <div className="ai-strategy-desc">
          {aiEngine.getStrategyDescription()}
        </div>
        
        {/* 决策历史 */}
        {state.lastDecision && (
          <div className="last-decision">
            <div className="decision-reasoning">
              💭 {state.lastDecision.reasoning}
            </div>
            <div className="decision-confidence">
              置信度: {(state.lastDecision.confidence * 100).toFixed(0)}%
            </div>
          </div>
        )}
      </div>
      
      {/* 活跃指示器 */}
      {isActive && (
        <div className="active-indicator">
          <div className="pulse-ring"></div>
          <span>思考中...</span>
        </div>
      )}
    </div>
  );
};

// AI玩家列表组件
interface AIPlayerListProps {
  players: Array<{
    player: AIPlayerType;
    difficulty: Difficulty;
    personality: string;
  }>;
  currentPlayerId: string;
  gameState: AIGameState;
  onDecision: (playerId: string, decision: AIDecision) => void;
}

export const AIPlayerList: React.FC<AIPlayerListProps> = ({
  players,
  currentPlayerId,
  gameState,
  onDecision
}) => {
  return (
    <div className="ai-player-list">
      {players.map(({ player, difficulty, personality }) => {
        // 找到对手
        const opponent = players.find(p => p.player.id !== player.id)?.player || player;
        
        return (
          <AIPlayer
            key={player.id}
            player={player}
            opponent={opponent}
            gameState={gameState}
            difficulty={difficulty}
            personality={personality}
            onDecision={(decision) => onDecision(player.id, decision)}
            isActive={currentPlayerId === player.id}
          />
        );
      })}
    </div>
  );
};

// 导出样式
export const aiPlayerStyles = `
.ai-player {
  display: flex;
  align-items: flex-start;
  gap: 16px;
  padding: 16px;
  border-radius: 12px;
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
  border: 2px solid transparent;
  transition: all 0.3s ease;
  position: relative;
}

.ai-player.active {
  border-color: #e94560;
  box-shadow: 0 0 20px rgba(233, 69, 96, 0.3);
}

.ai-avatar-container {
  position: relative;
  flex-shrink: 0;
}

.ai-avatar {
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 32px;
  box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);
  transition: transform 0.3s ease;
}

.ai-player.active .ai-avatar {
  animation: avatar-pulse 1.5s ease-in-out infinite;
}

@keyframes avatar-pulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.05); }
}

.thinking-bubble,
.decision-bubble {
  position: absolute;
  top: -60px;
  left: 50%;
  transform: translateX(-50%);
  background: white;
  padding: 12px 16px;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  white-space: nowrap;
  z-index: 10;
}

.thinking-bubble::after,
.decision-bubble::after {
  content: '';
  position: absolute;
  bottom: -8px;
  left: 50%;
  transform: translateX(-50%);
  border-left: 8px solid transparent;
  border-right: 8px solid transparent;
  border-top: 8px solid white;
}

.thinking-content {
  min-width: 120px;
}

.thinking-text {
  font-size: 12px;
  color: #333;
  margin-bottom: 6px;
}

.thinking-progress {
  height: 4px;
  background: #e0e0e0;
  border-radius: 2px;
  overflow: hidden;
}

.progress-bar {
  height: 100%;
  background: linear-gradient(90deg, #667eea, #764ba2);
  transition: width 0.3s ease;
}

.ai-info {
  flex: 1;
  color: white;
}

.ai-name {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 4px;
}

.ai-badges {
  display: flex;
  gap: 8px;
  margin-bottom: 8px;
}

.difficulty-badge,
.personality-badge {
  padding: 2px 8px;
  border-radius: 4px;
  font-size: 11px;
  font-weight: 500;
}

.difficulty-badge {
  background: #4a5568;
}

.ai-stats {
  display: flex;
  gap: 16px;
  font-size: 13px;
  color: #a0aec0;
  margin-bottom: 8px;
}

.ai-strategy-desc {
  font-size: 12px;
  color: #718096;
  font-style: italic;
}

.last-decision {
  margin-top: 8px;
  padding-top: 8px;
  border-top: 1px solid #2d3748;
  font-size: 12px;
}

.decision-reasoning {
  color: #a0aec0;
  margin-bottom: 4px;
}

.decision-confidence {
  color: #48bb78;
}

.active-indicator {
  position: absolute;
  bottom: -8px;
  right: 16px;
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 12px;
  color: #e94560;
}

.pulse-ring {
  width: 8px;
  height: 8px;
  background: #e94560;
  border-radius: 50%;
  animation: pulse-ring 1s ease-in-out infinite;
}

@keyframes pulse-ring {
  0% { transform: scale(1); opacity: 1; }
  100% { transform: scale(3); opacity: 0; }
}

/* 动画状态类 */
.ai-thinking .ai-avatar {
  animation: thinking-shake 0.5s ease-in-out infinite;
}

@keyframes thinking-shake {
  0%, 100% { transform: translateX(0); }
  25% { transform: translateX(-2px); }
  75% { transform: translateX(2px); }
}

.ai-deciding .ai-avatar {
  animation: deciding-glow 0.8s ease-in-out;
}

@keyframes deciding-glow {
  0%, 100% { box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4); }
  50% { box-shadow: 0 4px 30px rgba(102, 126, 234, 0.8); }
}

.ai-challenging .ai-avatar {
  animation: challenging-bounce 0.5s ease-in-out;
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%) !important;
}

@keyframes challenging-bounce {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.2); }
}

.ai-playing .ai-avatar {
  animation: playing-slide 0.5s ease-in-out;
}

@keyframes playing-slide {
  0% { transform: translateX(0); }
  50% { transform: translateX(10px); }
  100% { transform: translateX(0); }
}

/* AI玩家列表 */
.ai-player-list {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
`;

export default AIPlayer;
