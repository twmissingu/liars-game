/**
 * =============================================================================
 * Code Geass: Liar's Game - 音频模块导出
 * =============================================================================
 *
 * 提供完整的游戏音效、背景音乐和角色语音管理
 *
 * @author Code Agent
 * @version 3.0.0
 */

// 导出增强版音效管理器
export {
  EnhancedSoundManager,
  soundManager,
  playBGM,
  playSFX,
  playVoice,
  stopBGM,
  toggleMute,
} from './EnhancedSoundManager';

// 导出类型定义
export type { BGMType, SFXType, VoiceSituation } from './EnhancedSoundManager';

// 为了向后兼容，导出playSound别名
export { playSFX as playSound } from './EnhancedSoundManager';
