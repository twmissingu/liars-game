/**
 * =============================================================================
 * Code Geass: Liar's Game - 增强版音效管理系统
 * =============================================================================
 *
 * 扩展的音效系统，包含：
 * - 完整的游戏背景音乐体系
 * - 角色语音库（每个角色3+种情境语音）
 * - 场景化音效管理
 * - 音量控制和音频预设
 *
 * @author Code Agent
 * @version 3.0.0
 */

import { Howl, Howler } from 'howler';
import type { CharacterId } from '../types';

// ============================================
// 音效类型定义
// ============================================

/** 背景音乐类型 */
export type BGMType =
  | 'main-menu'      // 主界面音乐
  | 'character-select' // 角色选择音乐
  | 'game-normal'    // 普通战斗音乐
  | 'game-intense'   // 激烈战斗音乐
  | 'geass-activate' // Geass激活音乐
  | 'victory'        // 胜利音乐
  | 'defeat'         // 失败音乐
  | 'game-over';     // 游戏结束音乐

/** 游戏音效类型 */
export type SFXType =
  // 卡牌相关
  | 'card-play'
  | 'card-shuffle'
  | 'card-draw'
  | 'card-flip'
  // 游戏事件
  | 'challenge'
  | 'challenge-success'
  | 'challenge-fail'
  | 'turn-start'
  | 'turn-end'
  // Geass相关
  | 'geass-activate'
  | 'geass-hit'
  | 'geass-miss'
  | 'geass-immunity'
  // UI交互
  | 'button-click'
  | 'button-hover'
  | 'menu-open'
  | 'menu-close'
  // 角色动作
  | 'character-select'
  | 'character-skill'
  | 'damage-taken'
  | 'heal'
  // 游戏结果
  | 'win'
  | 'lose'
  | 'round-win'
  | 'round-lose';

/** 角色语音情境类型 */
export type VoiceSituation =
  | 'select'      // 角色被选中
  | 'play-card'   // 出牌时
  | 'challenge'   // 质疑时
  | 'bluff'       // 虚张声势时
  | 'geass-activate' // 使用Geass
  | 'geass-hit'   // Geass命中
  | 'geass-miss'  // Geass未命中
  | 'damage'      // 受到伤害
  | 'victory'     // 胜利
  | 'defeat'      // 失败
  | 'taunt'       // 嘲讽对手
  | 'surprised';  // 惊讶

// ============================================
// 音频配置
// ============================================

/** 音频配置接口 */
interface AudioConfig {
  volume: number;
  loop: boolean;
  preload?: boolean;
}

/** BGM配置 */
const BGM_CONFIG: Record<BGMType, AudioConfig> = {
  'main-menu': { volume: 0.4, loop: true, preload: true },
  'character-select': { volume: 0.35, loop: true, preload: true },
  'game-normal': { volume: 0.3, loop: true, preload: true },
  'game-intense': { volume: 0.35, loop: true, preload: false },
  'geass-activate': { volume: 0.5, loop: false, preload: false },
  'victory': { volume: 0.5, loop: false, preload: true },
  'defeat': { volume: 0.4, loop: false, preload: true },
  'game-over': { volume: 0.35, loop: false, preload: true },
};

/** SFX配置 */
const SFX_CONFIG: Record<SFXType, AudioConfig> = {
  // 卡牌
  'card-play': { volume: 0.6, loop: false },
  'card-shuffle': { volume: 0.5, loop: false },
  'card-draw': { volume: 0.4, loop: false },
  'card-flip': { volume: 0.5, loop: false },
  // 游戏事件
  'challenge': { volume: 0.7, loop: false },
  'challenge-success': { volume: 0.8, loop: false },
  'challenge-fail': { volume: 0.6, loop: false },
  'turn-start': { volume: 0.4, loop: false },
  'turn-end': { volume: 0.3, loop: false },
  // Geass
  'geass-activate': { volume: 0.8, loop: false },
  'geass-hit': { volume: 0.9, loop: false },
  'geass-miss': { volume: 0.5, loop: false },
  'geass-immunity': { volume: 0.7, loop: false },
  // UI
  'button-click': { volume: 0.4, loop: false },
  'button-hover': { volume: 0.2, loop: false },
  'menu-open': { volume: 0.3, loop: false },
  'menu-close': { volume: 0.3, loop: false },
  // 角色
  'character-select': { volume: 0.5, loop: false },
  'character-skill': { volume: 0.7, loop: false },
  'damage-taken': { volume: 0.8, loop: false },
  'heal': { volume: 0.6, loop: false },
  // 结果
  'win': { volume: 0.8, loop: false },
  'lose': { volume: 0.6, loop: false },
  'round-win': { volume: 0.7, loop: false },
  'round-lose': { volume: 0.5, loop: false },
};

/** BGM音频URL映射（使用免费在线资源） */
const BGM_URLS: Record<BGMType, string> = {
  'main-menu': 'https://assets.mixkit.co/music/preview/mixkit-epic-orchestra-689.mp3',
  'character-select': 'https://assets.mixkit.co/music/preview/mixkit-tech-house-vibes-130.mp3',
  'game-normal': 'https://assets.mixkit.co/music/preview/mixkit-intense-puzzle-game-1122.mp3',
  'game-intense': 'https://assets.mixkit.co/music/preview/mixkit-driving-ambition-32.mp3',
  'geass-activate': 'https://assets.mixkit.co/music/preview/mixkit-magical-coin-win-193.mp3',
  'victory': 'https://assets.mixkit.co/music/preview/mixkit-winning-chimes-2015.mp3',
  'defeat': 'https://assets.mixkit.co/music/preview/mixkit-sad-piano-553.mp3',
  'game-over': 'https://assets.mixkit.co/music/preview/mixkit-sad-trombone-471.mp3',
};

/** SFX音频URL映射 */
const SFX_URLS: Record<SFXType, string> = {
  // 卡牌
  'card-play': 'https://assets.mixkit.co/sfx/preview/mixkit-card-flip-1535.mp3',
  'card-shuffle': 'https://assets.mixkit.co/sfx/preview/mixkit-shuffling-cards-1698.mp3',
  'card-draw': 'https://assets.mixkit.co/sfx/preview/mixkit-paper-slide-1533.mp3',
  'card-flip': 'https://assets.mixkit.co/sfx/preview/mixkit-page-turn-single-1104.mp3',
  // 游戏事件
  'challenge': 'https://assets.mixkit.co/sfx/preview/mixkit-dramatic-boom-991.mp3',
  'challenge-success': 'https://assets.mixkit.co/sfx/preview/mixkit-achievement-bell-600.mp3',
  'challenge-fail': 'https://assets.mixkit.co/sfx/preview/mixkit-fail-drum-and-bells-571.mp3',
  'turn-start': 'https://assets.mixkit.co/sfx/preview/mixkit-game-notification-wave-alarm-987.mp3',
  'turn-end': 'https://assets.mixkit.co/sfx/preview/mixkit-modern-technology-select-3124.mp3',
  // Geass
  'geass-activate': 'https://assets.mixkit.co/sfx/preview/mixkit-magical-coin-win-193.mp3',
  'geass-hit': 'https://assets.mixkit.co/sfx/preview/mixkit-arcade-game-explosion-2759.mp3',
  'geass-miss': 'https://assets.mixkit.co/sfx/preview/mixkit-falling-into-mud-391.mp3',
  'geass-immunity': 'https://assets.mixkit.co/sfx/preview/mixkit-magic-flute-sound-2428.mp3',
  // UI
  'button-click': 'https://assets.mixkit.co/sfx/preview/mixkit-modern-technology-select-3124.mp3',
  'button-hover': 'https://assets.mixkit.co/sfx/preview/mixkit-mouse-click-close-1113.mp3',
  'menu-open': 'https://assets.mixkit.co/sfx/preview/mixkit-software-interface-start-2574.mp3',
  'menu-close': 'https://assets.mixkit.co/sfx/preview/mixkit-software-interface-back-2575.mp3',
  // 角色
  'character-select': 'https://assets.mixkit.co/sfx/preview/mixkit-select-click-1109.mp3',
  'character-skill': 'https://assets.mixkit.co/sfx/preview/mixkit-magical-coin-win-193.mp3',
  'damage-taken': 'https://assets.mixkit.co/sfx/preview/mixkit-arcade-game-explosion-2759.mp3',
  'heal': 'https://assets.mixkit.co/sfx/preview/mixkit-achievement-bell-600.mp3',
  // 结果
  'win': 'https://assets.mixkit.co/sfx/preview/mixkit-winning-chimes-2015.mp3',
  'lose': 'https://assets.mixkit.co/sfx/preview/mixkit-sad-trombone-471.mp3',
  'round-win': 'https://assets.mixkit.co/sfx/preview/mixkit-achievement-bell-600.mp3',
  'round-lose': 'https://assets.mixkit.co/sfx/preview/mixkit-fail-drum-and-bells-571.mp3',
};

/** 角色语音配置（使用占位符URL，实际项目中应替换为真实语音文件） */
const VOICE_URLS: Record<CharacterId, Record<VoiceSituation, string[]>> = {
  lelouch: {
    select: ['https://example.com/voice/lelouch/select1.mp3'],
    'play-card': ['https://example.com/voice/lelouch/play1.mp3', 'https://example.com/voice/lelouch/play2.mp3'],
    challenge: ['https://example.com/voice/lelouch/challenge1.mp3', 'https://example.com/voice/lelouch/challenge2.mp3'],
    bluff: ['https://example.com/voice/lelouch/bluff1.mp3'],
    'geass-activate': ['https://example.com/voice/lelouch/geass1.mp3', 'https://example.com/voice/lelouch/geass2.mp3'],
    'geass-hit': ['https://example.com/voice/lelouch/hit1.mp3'],
    'geass-miss': ['https://example.com/voice/lelouch/miss1.mp3'],
    damage: ['https://example.com/voice/lelouch/damage1.mp3', 'https://example.com/voice/lelouch/damage2.mp3'],
    victory: ['https://example.com/voice/lelouch/victory1.mp3', 'https://example.com/voice/lelouch/victory2.mp3'],
    defeat: ['https://example.com/voice/lelouch/defeat1.mp3'],
    taunt: ['https://example.com/voice/lelouch/taunt1.mp3', 'https://example.com/voice/lelouch/taunt2.mp3'],
    surprised: ['https://example.com/voice/lelouch/surprised1.mp3'],
  },
  cc: {
    select: ['https://example.com/voice/cc/select1.mp3'],
    'play-card': ['https://example.com/voice/cc/play1.mp3', 'https://example.com/voice/cc/play2.mp3'],
    challenge: ['https://example.com/voice/cc/challenge1.mp3'],
    bluff: ['https://example.com/voice/cc/bluff1.mp3', 'https://example.com/voice/cc/bluff2.mp3'],
    'geass-activate': ['https://example.com/voice/cc/geass1.mp3'],
    'geass-hit': ['https://example.com/voice/cc/hit1.mp3'],
    'geass-miss': ['https://example.com/voice/cc/miss1.mp3'],
    damage: ['https://example.com/voice/cc/damage1.mp3'],
    victory: ['https://example.com/voice/cc/victory1.mp3'],
    defeat: ['https://example.com/voice/cc/defeat1.mp3'],
    taunt: ['https://example.com/voice/cc/taunt1.mp3'],
    surprised: ['https://example.com/voice/cc/surprised1.mp3'],
  },
  suzaku: {
    select: ['https://example.com/voice/suzaku/select1.mp3'],
    'play-card': ['https://example.com/voice/suzaku/play1.mp3'],
    challenge: ['https://example.com/voice/suzaku/challenge1.mp3', 'https://example.com/voice/suzaku/challenge2.mp3'],
    bluff: ['https://example.com/voice/suzaku/bluff1.mp3'],
    'geass-activate': ['https://example.com/voice/suzaku/geass1.mp3'],
    'geass-hit': ['https://example.com/voice/suzaku/hit1.mp3'],
    'geass-miss': ['https://example.com/voice/suzaku/miss1.mp3'],
    damage: ['https://example.com/voice/suzaku/damage1.mp3', 'https://example.com/voice/suzaku/damage2.mp3'],
    victory: ['https://example.com/voice/suzaku/victory1.mp3'],
    defeat: ['https://example.com/voice/suzaku/defeat1.mp3'],
    taunt: ['https://example.com/voice/suzaku/taunt1.mp3'],
    surprised: ['https://example.com/voice/suzaku/surprised1.mp3'],
  },
  kallen: {
    select: ['https://example.com/voice/kallen/select1.mp3'],
    'play-card': ['https://example.com/voice/kallen/play1.mp3', 'https://example.com/voice/kallen/play2.mp3'],
    challenge: ['https://example.com/voice/kallen/challenge1.mp3'],
    bluff: ['https://example.com/voice/kallen/bluff1.mp3'],
    'geass-activate': ['https://example.com/voice/kallen/geass1.mp3'],
    'geass-hit': ['https://example.com/voice/kallen/hit1.mp3', 'https://example.com/voice/kallen/hit2.mp3'],
    'geass-miss': ['https://example.com/voice/kallen/miss1.mp3'],
    damage: ['https://example.com/voice/kallen/damage1.mp3'],
    victory: ['https://example.com/voice/kallen/victory1.mp3', 'https://example.com/voice/kallen/victory2.mp3'],
    defeat: ['https://example.com/voice/kallen/defeat1.mp3'],
    taunt: ['https://example.com/voice/kallen/taunt1.mp3'],
    surprised: ['https://example.com/voice/kallen/surprised1.mp3'],
  },
};

// ============================================
// 增强版音效管理器
// ============================================

/**
 * 增强版音效管理器
 * 提供完整的BGM、SFX和角色语音管理
 */
export class EnhancedSoundManager {
  /** BGM实例映射 */
  private bgmMap: Map<BGMType, Howl> = new Map();

  /** SFX实例映射 */
  private sfxMap: Map<SFXType, Howl> = new Map();

  /** 当前播放的BGM */
  private currentBGM: BGMType | null = null;

  /** 全局音量设置 */
  private masterVolume: number = 1.0;
  private bgmVolume: number = 1.0;
  private sfxVolume: number = 1.0;
  private voiceVolume: number = 1.0;

  /** 是否静音 */
  private isMuted: boolean = false;

  /** 是否已初始化 */
  private initialized: boolean = false;

  /** 当前播放的语音 */
  private currentVoice: Howl | null = null;

  /**
   * 单例实例
   */
  private static instance: EnhancedSoundManager;

  static getInstance(): EnhancedSoundManager {
    if (!EnhancedSoundManager.instance) {
      EnhancedSoundManager.instance = new EnhancedSoundManager();
    }
    return EnhancedSoundManager.instance;
  }

  /**
   * 初始化音效管理器
   */
  init(): void {
    if (this.initialized) return;

    // 预加载常用BGM
    this.preloadBGM(['main-menu', 'victory', 'defeat']);

    // 预加载常用SFX
    this.preloadSFX(['button-click', 'card-play', 'challenge']);

    this.initialized = true;
    console.log('[EnhancedSoundManager] 初始化完成');
  }

  /**
   * 预加载BGM
   */
  private preloadBGM(types: BGMType[]): void {
    types.forEach(type => {
      if (!this.bgmMap.has(type)) {
        const config = BGM_CONFIG[type];
        const sound = new Howl({
          src: [BGM_URLS[type]],
          volume: config.volume * this.bgmVolume * this.masterVolume,
          loop: config.loop,
          preload: config.preload ?? true,
          html5: true, // 使用HTML5 Audio播放大文件
        });
        this.bgmMap.set(type, sound);
      }
    });
  }

  /**
   * 预加载SFX
   */
  private preloadSFX(types: SFXType[]): void {
    types.forEach(type => {
      if (!this.sfxMap.has(type)) {
        const config = SFX_CONFIG[type];
        const sound = new Howl({
          src: [SFX_URLS[type]],
          volume: config.volume * this.sfxVolume * this.masterVolume,
          loop: config.loop,
          preload: true,
        });
        this.sfxMap.set(type, sound);
      }
    });
  }

  /**
   * 播放BGM
   */
  playBGM(type: BGMType, fadeDuration: number = 1000): void {
    if (this.isMuted) return;

    // 停止当前BGM
    if (this.currentBGM && this.currentBGM !== type) {
      this.stopBGM(fadeDuration);
    }

    // 获取或创建BGM实例
    let sound = this.bgmMap.get(type);
    if (!sound) {
      const config = BGM_CONFIG[type];
      sound = new Howl({
        src: [BGM_URLS[type]],
        volume: 0,
        loop: config.loop,
        html5: true,
      });
      this.bgmMap.set(type, sound);
    }

    // 播放并淡入
    if (!sound.playing()) {
      sound.play();
      const bgmConfig = BGM_CONFIG[type];
      sound.fade(0, bgmConfig.volume * this.bgmVolume * this.masterVolume, fadeDuration);
    }

    this.currentBGM = type;
  }

  /**
   * 停止BGM
   */
  stopBGM(fadeDuration: number = 1000): void {
    if (this.currentBGM) {
      const sound = this.bgmMap.get(this.currentBGM);
      if (sound && sound.playing()) {
        sound.fade(sound.volume(), 0, fadeDuration);
        setTimeout(() => {
          sound.stop();
        }, fadeDuration);
      }
      this.currentBGM = null;
    }
  }

  /**
   * 暂停BGM
   */
  pauseBGM(): void {
    if (this.currentBGM) {
      const sound = this.bgmMap.get(this.currentBGM);
      if (sound) {
        sound.pause();
      }
    }
  }

  /**
   * 恢复BGM
   */
  resumeBGM(): void {
    if (this.isMuted) return;

    if (this.currentBGM) {
      const sound = this.bgmMap.get(this.currentBGM);
      if (sound) {
        sound.play();
      }
    }
  }

  /**
   * 播放音效
   */
  playSFX(type: SFXType): void {
    if (this.isMuted) return;

    const config = SFX_CONFIG[type];
    if (!config) {
      console.warn(`[SoundManager] 未知音效类型: ${type}`);
      return;
    }

    let sound = this.sfxMap.get(type);
    if (!sound) {
      sound = new Howl({
        src: [SFX_URLS[type]],
        volume: (config.volume || 0.5) * this.sfxVolume * this.masterVolume,
        loop: config.loop || false,
      });
      this.sfxMap.set(type, sound);
    }

    // 停止之前的相同音效（避免重叠）
    if (sound.playing()) {
      sound.stop();
    }

    sound.play();
  }

  /**
   * 播放角色语音
   */
  playVoice(characterId: CharacterId, situation: VoiceSituation): void {
    if (this.isMuted) return;

    const voiceUrls = VOICE_URLS[characterId]?.[situation];
    if (!voiceUrls || voiceUrls.length === 0) {
      console.warn(`[EnhancedSoundManager] 未找到语音: ${characterId} - ${situation}`);
      return;
    }

    // 随机选择一个语音
    const randomUrl = voiceUrls[Math.floor(Math.random() * voiceUrls.length)];

    // 停止当前语音
    if (this.currentVoice) {
      this.currentVoice.stop();
    }

    // 创建并播放新语音
    const voice = new Howl({
      src: [randomUrl],
      volume: 0.8 * this.voiceVolume * this.masterVolume,
      onend: () => {
        this.currentVoice = null;
      },
    });

    this.currentVoice = voice;
    voice.play();
  }

  /**
   * 设置主音量
   */
  setMasterVolume(volume: number): void {
    this.masterVolume = Math.max(0, Math.min(1, volume));
    Howler.volume(this.masterVolume);
    this.updateAllVolumes();
  }

  /**
   * 设置BGM音量
   */
  setBGMVolume(volume: number): void {
    this.bgmVolume = Math.max(0, Math.min(1, volume));
    this.updateBGMVolumes();
  }

  /**
   * 设置SFX音量
   */
  setSFXVolume(volume: number): void {
    this.sfxVolume = Math.max(0, Math.min(1, volume));
    this.updateSFXVolumes();
  }

  /**
   * 设置语音音量
   */
  setVoiceVolume(volume: number): void {
    this.voiceVolume = Math.max(0, Math.min(1, volume));
  }

  /**
   * 更新所有音量
   */
  private updateAllVolumes(): void {
    this.updateBGMVolumes();
    this.updateSFXVolumes();
  }

  /**
   * 更新BGM音量
   */
  private updateBGMVolumes(): void {
    this.bgmMap.forEach((sound, type) => {
      const config = BGM_CONFIG[type];
      sound.volume(config.volume * this.bgmVolume * this.masterVolume);
    });
  }

  /**
   * 更新SFX音量
   */
  private updateSFXVolumes(): void {
    this.sfxMap.forEach((sound, type) => {
      const config = SFX_CONFIG[type];
      sound.volume(config.volume * this.sfxVolume * this.masterVolume);
    });
  }

  /**
   * 静音/取消静音
   */
  toggleMute(): boolean {
    this.isMuted = !this.isMuted;
    Howler.mute(this.isMuted);
    return this.isMuted;
  }

  /**
   * 设置静音状态
   */
  setMute(muted: boolean): void {
    this.isMuted = muted;
    Howler.mute(muted);
  }

  /**
   * 获取当前BGM
   */
  getCurrentBGM(): BGMType | null {
    return this.currentBGM;
  }

  /**
   * 获取音量设置
   */
  getVolumeSettings(): {
    master: number;
    bgm: number;
    sfx: number;
    voice: number;
    muted: boolean;
  } {
    return {
      master: this.masterVolume,
      bgm: this.bgmVolume,
      sfx: this.sfxVolume,
      voice: this.voiceVolume,
      muted: this.isMuted,
    };
  }

  /**
   * 获取音效状态（兼容旧版API）
   */
  getStatus(): {
    enabled: boolean;
    bgmVolume: number;
    sfxVolume: number;
  } {
    return {
      enabled: !this.isMuted,
      bgmVolume: this.bgmVolume,
      sfxVolume: this.sfxVolume,
    };
  }

  /**
   * 预加载音效资源
   */
  async preload(): Promise<void> {
    // 预加载常用音效
    const commonSFX: SFXType[] = ['button-click', 'card-play', 'challenge', 'geass-activate'];
    commonSFX.forEach(type => {
      this.playSFX(type);
    });
    console.log('[EnhancedSoundManager] 音效预加载完成');
  }

  /**
   * 销毁所有音效
   */
  destroy(): void {
    this.stopBGM(0);

    this.bgmMap.forEach(sound => sound.unload());
    this.sfxMap.forEach(sound => sound.unload());

    this.bgmMap.clear();
    this.sfxMap.clear();

    if (this.currentVoice) {
      this.currentVoice.unload();
      this.currentVoice = null;
    }

    this.initialized = false;
  }
}

// 导出单例实例
export const soundManager = EnhancedSoundManager.getInstance();

// 导出便捷函数（添加空值检查）
export const playBGM = (type: BGMType) => {
  if (soundManager) soundManager.playBGM(type);
};
export const playSFX = (type: SFXType) => {
  if (soundManager) soundManager.playSFX(type);
};
export const playVoice = (characterId: CharacterId, situation: VoiceSituation) => {
  if (soundManager) soundManager.playVoice(characterId, situation);
};
export const stopBGM = () => {
  if (soundManager) soundManager.stopBGM();
};
export const toggleMute = () => {
  if (soundManager) soundManager.toggleMute();
};
