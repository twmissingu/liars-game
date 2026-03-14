/**
 * AI玩家组件
 * React组件，用于显示AI玩家状态、动画和决策过程
 */
import React, { useState, useEffect, useCallback } from 'react';
import { AIEngineManager } from '../ai/AIEngine';
import type {
  AIPlayer as AIPlayerType,
  GameState,
  AIDecision,
  AIThought,
  Difficulty,
  Personality,
  CardRank,
} from '../types';

interface AIPlayerProps {
  player: AIPlayerType;
  opponent: AIPlayerType;
  gameState: GameState;
  difficulty: Difficulty;
  personality: Personality;
  liarCard: CardRank;
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
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  opponent,
  gameState,
  difficulty,
  personality,
  liarCard,
  onDecision,
  isActive,
  className = '',
}) => {
  const [aiEngine] = useState(() =>
    AIEngineManager.getInstance(player.id, difficulty, personality)
  );

  const [state, setState] = useState<AIPlayerState>({
    thought: null,
    lastDecision: null,
    decisionCount: 0,
    isThinking: false,
  });

  const [showThinkingBubble, setShowThinkingBubble] = useState(false);

  // 设置思考回调
  useEffect(() => {
    aiEngine.setThoughtCallback(thought => {
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
      liarCard,
      history: [],
    };

    try {
      const decision = await aiEngine.makeDecision(context);

      setState(prev => ({
        ...prev,
        lastDecision: decision,
        decisionCount: prev.decisionCount + 1,
        isThinking: false,
      }));

      onDecision(decision);

      // 延迟隐藏思考气泡
      setTimeout(() => setShowThinkingBubble(false), 1000);
    } catch (error) {
      console.error('AI决策错误:', error);
      setState(prev => ({ ...prev, isThinking: false }));
      setShowThinkingBubble(false);
    }
  }, [isActive, state.isThinking, aiEngine, gameState, player, liarCard, onDecision]);

  // 当轮到AI时自动执行
  useEffect(() => {
    if (isActive && !state.isThinking) {
      executeDecision();
    }
  }, [isActive, executeDecision, state.isThinking]);

  // 获取情绪对应的表情
  const getEmotionEmoji = (emotion?: string) => {
    switch (emotion) {
      case 'confident':
        return '😏';
      case 'uncertain':
        return '🤔';
      case 'surprised':
        return '😮';
      case 'calm':
        return '😐';
      default:
        return '😐';
    }
  };

  // 获取动画状态对应的样式
  const getAnimationClass = () => {
    if (!state.thought) return '';

    switch (state.thought.state) {
      case 'thinking':
        return 'ai-thinking';
      case 'deciding':
        return 'ai-deciding';
      case 'playing':
        return 'ai-playing';
      case 'challenging':
        return 'ai-challenging';
      default:
        return '';
    }
  };

  return (
    <div className={`ai-player ${className} ${getAnimationClass()}`}>
      {/* AI头像 */}
      <div className="ai-avatar-container">
        <div className={`ai-avatar ${state.isThinking ? 'thinking' : ''}`}>
          <img
            src={`/avatars/${player.character}/1.png`}
            alt={player.name}
            className="avatar-image"
          />
          <div className="emotion-indicator">{getEmotionEmoji(state.thought?.emotion)}</div>
        </div>

        {/* 思考气泡 */}
        {showThinkingBubble && state.thought && (
          <div className="thinking-bubble">
            <div className="bubble-content">
              <p className="thought-message">{state.thought.message}</p>
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: `${state.thought.progress}%` }} />
              </div>
            </div>
          </div>
        )}
      </div>

      {/* AI信息 */}
      <div className="ai-info">
        <h4 className="ai-name">{player.name}</h4>
        <div className="ai-stats">
          <div className="hp-bar">
            <div className="hp-label">HP</div>
            <div className="hp-value">
              {Array.from({ length: player.stats.maxHp }).map((_, i) => (
                <span key={i} className={`hp-heart ${i < player.stats.hp ? 'active' : ''}`}>
                  ❤️
                </span>
              ))}
            </div>
          </div>

          <div className="hand-count">🃏 {player.hand.length}张</div>
        </div>
      </div>

      <style>{`
        .ai-player {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1rem;
          background: rgba(0, 0, 0, 0.3);
          border-radius: 12px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          transition: all 0.3s ease;
        }

        .ai-player.ai-thinking {
          border-color: rgba(255, 193, 7, 0.5);
          box-shadow: 0 0 20px rgba(255, 193, 7, 0.2);
        }

        .ai-player.ai-challenging {
          border-color: rgba(244, 67, 54, 0.5);
          box-shadow: 0 0 20px rgba(244, 67, 54, 0.2);
        }

        .ai-avatar-container {
          position: relative;
        }

        .ai-avatar {
          position: relative;
          width: 64px;
          height: 64px;
          border-radius: 50%;
          overflow: hidden;
          border: 3px solid rgba(255, 255, 255, 0.2);
          transition: all 0.3s ease;
        }

        .ai-avatar.thinking {
          border-color: #ffc107;
          animation: pulse 1.5s infinite;
        }

        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }

        .avatar-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .emotion-indicator {
          position: absolute;
          bottom: -5px;
          right: -5px;
          font-size: 1.2rem;
          background: rgba(0, 0, 0, 0.7);
          border-radius: 50%;
          width: 24px;
          height: 24px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .thinking-bubble {
          position: absolute;
          bottom: 100%;
          left: 50%;
          transform: translateX(-50%);
          margin-bottom: 10px;
          background: rgba(0, 0, 0, 0.9);
          border: 1px solid rgba(255, 193, 7, 0.5);
          border-radius: 12px;
          padding: 12px;
          min-width: 150px;
          z-index: 100;
        }

        .thinking-bubble::after {
          content: '';
          position: absolute;
          top: 100%;
          left: 50%;
          transform: translateX(-50%);
          border: 8px solid transparent;
          border-top-color: rgba(255, 193, 7, 0.5);
        }

        .thought-message {
          margin: 0 0 8px 0;
          font-size: 0.8rem;
          color: #fff;
          text-align: center;
        }

        .progress-bar {
          height: 4px;
          background: rgba(255, 255, 255, 0.2);
          border-radius: 2px;
          overflow: hidden;
        }

        .progress-fill {
          height: 100%;
          background: linear-gradient(90deg, #ffc107, #ff9800);
          transition: width 0.3s ease;
        }

        .ai-info {
          flex: 1;
        }

        .ai-name {
          margin: 0 0 0.5rem 0;
          font-size: 1rem;
          color: #fff;
        }

        .ai-stats {
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
        }

        .hp-bar {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .hp-label {
          font-size: 0.75rem;
          color: rgba(255, 255, 255, 0.6);
        }

        .hp-value {
          display: flex;
          gap: 2px;
        }

        .hp-heart {
          font-size: 0.875rem;
          opacity: 0.3;
          transition: opacity 0.3s ease;
        }

        .hp-heart.active {
          opacity: 1;
        }

        .hand-count {
          font-size: 0.75rem;
          color: rgba(255, 255, 255, 0.6);
        }
      `}</style>
    </div>
  );
};

export default AIPlayer;
