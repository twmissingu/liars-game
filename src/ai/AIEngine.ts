/**
 * AI引擎主类
 * 负责管理AI决策、动画状态和配置
 */
import { 
  AIStrategy, 
  EasyStrategy, 
  NormalStrategy, 
  HardStrategy 
} from './strategies';
import { 
  AIDecision, 
  AIConfig, 
  StrategyContext, 
  AIThought,
  AIAnimationState,
  Difficulty,
  Personality
} from '../types/ai.types';

export class AIEngine {
  private strategy: AIStrategy;
  private config: AIConfig;
  private thoughtCallback?: (thought: AIThought) => void;
  private currentState: AIAnimationState = 'idle';
  private decisionInProgress: boolean = false;
  
  constructor(difficulty: Difficulty = 'normal', personality: Personality = 'balanced') {
    this.config = this.createDefaultConfig(difficulty, personality);
    this.strategy = this.createStrategy(difficulty);
  }
  
  /**
   * 设置思考状态回调
   */
  setThoughtCallback(callback: (thought: AIThought) => void): void {
    this.thoughtCallback = callback;
  }
  
  /**
   * 更新AI配置
   */
  updateConfig(config: Partial<AIConfig>): void {
    this.config = { ...this.config, ...config };
    
    // 如果难度改变，重新创建策略
    if (config.difficulty && config.difficulty !== this.config.difficulty) {
      this.strategy = this.createStrategy(config.difficulty);
    }
  }
  
  /**
   * 获取当前配置
   */
  getConfig(): AIConfig {
    return { ...this.config };
  }
  
  /**
   * 执行AI决策（带动画效果）
   */
  async makeDecision(context: StrategyContext): Promise<AIDecision> {
    if (this.decisionInProgress) {
      throw new Error('AI决策正在进行中');
    }
    
    this.decisionInProgress = true;
    
    try {
      // 1. 思考阶段动画
      await this.playThinkingAnimation();
      
      // 2. 决策阶段
      await this.playDecidingAnimation();
      
      // 3. 执行策略决策
      const decision = this.strategy.makeDecision(context, this.config);
      
      // 4. 执行动作动画
      await this.playActionAnimation(decision);
      
      return decision;
    } finally {
      this.decisionInProgress = false;
      this.setAnimationState('idle');
    }
  }
  
  /**
   * 快速决策（无动画）
   */
  makeDecisionInstant(context: StrategyContext): AIDecision {
    return this.strategy.makeDecision(context, this.config);
  }
  
  /**
   * 获取AI思考信息（用于UI显示）
   */
  getCurrentThought(): AIThought {
    return {
      state: this.currentState,
      progress: this.getProgressForState(this.currentState),
      message: this.getMessageForState(this.currentState),
      emotion: this.getEmotionForState(this.currentState)
    };
  }
  
  /**
   * 获取策略名称
   */
  getStrategyName(): string {
    return this.strategy.name;
  }
  
  /**
   * 获取策略描述
   */
  getStrategyDescription(): string {
    return this.strategy.description;
  }
  
  /**
   * 更新算牌记忆
   */
  updateMemory(context: StrategyContext): void {
    this.strategy.updateMemory(context);
  }
  
  /**
   * 获取性格参数
   */
  getPersonalityTraits() {
    return this.strategy.getPersonalityTraits(this.config.personality);
  }
  
  // ============ 私有方法 ============
  
  private createStrategy(difficulty: Difficulty): AIStrategy {
    switch (difficulty) {
      case 'easy':
        return new EasyStrategy();
      case 'normal':
        return new NormalStrategy();
      case 'hard':
        return new HardStrategy();
      default:
        return new NormalStrategy();
    }
  }
  
  private createDefaultConfig(difficulty: Difficulty, personality: Personality): AIConfig {
    const delayMap: Record<Difficulty, number> = {
      easy: 800,
      normal: 1200,
      hard: 1500
    };
    
    return {
      difficulty,
      personality,
      reactionDelay: delayMap[difficulty],
      enableAnimation: true
    };
  }
  
  private async playThinkingAnimation(): Promise<void> {
    this.setAnimationState('thinking');
    
    const messages = [
      '分析局势中...',
      '计算概率...',
      '观察对手...',
      '评估风险...'
    ];
    
    const steps = 4;
    const stepDelay = this.config.reactionDelay / steps;
    
    for (let i = 0; i < steps; i++) {
      this.notifyThought({
        state: 'thinking',
        progress: (i / steps) * 100,
        message: messages[i % messages.length],
        emotion: 'calm'
      });
      
      await this.delay(stepDelay);
    }
  }
  
  private async playDecidingAnimation(): Promise<void> {
    this.setAnimationState('deciding');
    
    this.notifyThought({
      state: 'deciding',
      progress: 75,
      message: '做出决策...',
      emotion: 'confident'
    });
    
    await this.delay(this.config.reactionDelay * 0.3);
  }
  
  private async playActionAnimation(decision: AIDecision): Promise<void> {
    const state = decision.action === 'challenge' ? 'challenging' : 'playing';
    this.setAnimationState(state);
    
    const messages: Record<string, string> = {
      play: decision.isBluff ? '打出卡牌（虚张声势）' : '打出卡牌',
      challenge: '质疑！',
      pass: '选择观望'
    };
    
    this.notifyThought({
      state,
      progress: 100,
      message: messages[decision.action] || '执行动作',
      emotion: decision.confidence > 0.7 ? 'confident' : 'uncertain'
    });
    
    await this.delay(300);
  }
  
  private setAnimationState(state: AIAnimationState): void {
    this.currentState = state;
  }
  
  private notifyThought(thought: AIThought): void {
    if (this.thoughtCallback) {
      this.thoughtCallback(thought);
    }
  }
  
  private getProgressForState(state: AIAnimationState): number {
    const progressMap: Record<AIAnimationState, number> = {
      idle: 0,
      thinking: 25,
      deciding: 75,
      playing: 90,
      challenging: 90,
      reacting: 100
    };
    return progressMap[state] || 0;
  }
  
  private getMessageForState(state: AIAnimationState): string {
    const messageMap: Record<AIAnimationState, string> = {
      idle: '等待中...',
      thinking: '思考中...',
      deciding: '决策中...',
      playing: '出牌中...',
      challenging: '质疑中...',
      reacting: '反应中...'
    };
    return messageMap[state];
  }
  
  private getEmotionForState(state: AIAnimationState): AIThought['emotion'] {
    switch (state) {
      case 'thinking':
        return 'calm';
      case 'deciding':
        return 'confident';
      case 'challenging':
        return 'confident';
      case 'playing':
        return 'calm';
      default:
        return 'calm';
    }
  }
  
  private delay(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}

// 导出单例管理器
export class AIEngineManager {
  private static instances: Map<string, AIEngine> = new Map();
  
  static getInstance(
    playerId: string, 
    difficulty: Difficulty = 'normal',
    personality: Personality = 'balanced'
  ): AIEngine {
    if (!this.instances.has(playerId)) {
      this.instances.set(playerId, new AIEngine(difficulty, personality));
    }
    return this.instances.get(playerId)!;
  }
  
  static removeInstance(playerId: string): void {
    this.instances.delete(playerId);
  }
  
  static clearAll(): void {
    this.instances.clear();
  }
}
