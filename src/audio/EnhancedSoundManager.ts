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
  /** 音效类别 - 用于混音分组 */
  category?: 'bgm' | 'sfx' | 'ui' | 'voice';
  /** 优先级 - 高优先级音效不会被低优先级覆盖 */
  priority?: 'low' | 'normal' | 'high' | 'critical';
}

/** 混音器配置 - Code Geass风格音量平衡
 * BGM: 30-40%不干扰对话
 * SFX: 60-80%突出反馈
 * UI: 40-50%清晰但不突兀
 * Voice: 80-100%优先清晰
 */
export const MIXER_CONFIG = {
  bgm: { volume: 0.35, maxVolume: 0.45 },
  sfx: { volume: 0.75, maxVolume: 0.90 },
  ui: { volume: 0.45, maxVolume: 0.55 },
  voice: { volume: 0.90, maxVolume: 1.0 },
};

/** 音频质量配置 */
export const AUDIO_QUALITY = {
  bgm: { bitrate: 192, sampleRate: 44100, format: 'mp3' },
  sfx: { bitrate: 128, sampleRate: 44100, format: 'mp3' },
  ui: { bitrate: 128, sampleRate: 44100, format: 'mp3' },
};

/** BGM配置 - 按照Code Geass风格优化 */
const BGM_CONFIG: Record<BGMType, AudioConfig> = {
  // 主菜单: 管弦乐+电子，庄重神秘，30-40%音量不干扰
  'main-menu': { volume: 0.35, loop: true, preload: true },
  // 角色选择: 优雅氛围，略低于主菜单
  'character-select': { volume: 0.32, loop: true, preload: true },
  // 游戏进行: 紧张悬疑，保持30-40%范围
  'game-normal': { volume: 0.30, loop: true, preload: true },
  // 激烈战斗: 稍高但不喧宾夺主
  'game-intense': { volume: 0.35, loop: true, preload: false },
  // Geass激活: 特殊事件，音量突出
  'geass-activate': { volume: 0.55, loop: false, preload: false },
  // 胜利: triumphant orchestral，50-60%
  'victory': { volume: 0.55, loop: false, preload: true },
  // 失败: 哀伤钢琴，40-50%
  'defeat': { volume: 0.45, loop: false, preload: true },
  // 游戏结束: 同失败音乐
  'game-over': { volume: 0.45, loop: false, preload: true },
};

/** SFX配置 - 按照Code Geass风格和混音建议优化 */
const SFX_CONFIG: Record<SFXType, AudioConfig> = {
  // ========== 卡牌音效 (P0优先级) ==========
  // 卡牌放置: 清脆纸质声，60-80%突出反馈
  'card-play': { volume: 0.70, loop: false, category: 'sfx', priority: 'high' },
  // 卡牌洗牌: 连续摩擦声，略低避免刺耳
  'card-shuffle': { volume: 0.55, loop: false, category: 'sfx', priority: 'normal' },
  // 卡牌抽取: 快速滑动声
  'card-draw': { volume: 0.50, loop: false, category: 'sfx', priority: 'normal' },
  // 卡牌翻转: 短促清晰
  'card-flip': { volume: 0.55, loop: false, category: 'sfx', priority: 'normal' },

  // ========== 质疑音效 (P0优先级) ==========
  // 质疑触发: 低沉boom+高频shimmer，戏剧化，高音量
  'challenge': { volume: 0.85, loop: false, category: 'sfx', priority: 'critical' },
  // 质疑成功: triumphant，高音量
  'challenge-success': { volume: 0.80, loop: false, category: 'sfx', priority: 'high' },
  // 质疑失败: 较低音量表示挫败
  'challenge-fail': { volume: 0.65, loop: false, category: 'sfx', priority: 'normal' },

  // ========== 回合音效 ==========
  'turn-start': { volume: 0.45, loop: false, category: 'ui', priority: 'normal' },
  'turn-end': { volume: 0.35, loop: false, category: 'ui', priority: 'low' },

  // ========== Geass音效 (P1优先级) ==========
  // Geass激活: 神秘合成器音，80-90%高优先级
  'geass-activate': { volume: 0.85, loop: false, category: 'sfx', priority: 'critical' },
  // Geass命中: 冲击感
  'geass-hit': { volume: 0.90, loop: false, category: 'sfx', priority: 'critical' },
  // Geass闪避: 快速whoosh
  'geass-miss': { volume: 0.55, loop: false, category: 'sfx', priority: 'normal' },
  // Geass免疫: 防御感
  'geass-immunity': { volume: 0.75, loop: false, category: 'sfx', priority: 'high' },

  // ========== UI音效 (P0优先级) ==========
  // 按钮点击: 清脆tech click，40-50%
  'button-click': { volume: 0.45, loop: false, category: 'ui', priority: 'normal' },
  // 按钮悬停: 轻柔，20-30%
  'button-hover': { volume: 0.25, loop: false, category: 'ui', priority: 'low' },
  // 菜单打开: 滑动whoosh
  'menu-open': { volume: 0.40, loop: false, category: 'ui', priority: 'normal' },
  // 菜单关闭: 同上
  'menu-close': { volume: 0.40, loop: false, category: 'ui', priority: 'normal' },

  // ========== 角色音效 ==========
  'character-select': { volume: 0.55, loop: false, category: 'ui', priority: 'normal' },
  'character-skill': { volume: 0.75, loop: false, category: 'sfx', priority: 'high' },
  'damage-taken': { volume: 0.85, loop: false, category: 'sfx', priority: 'high' },
  'heal': { volume: 0.65, loop: false, category: 'sfx', priority: 'normal' },

  // ========== 结算音效 (P1优先级) ==========
  'win': { volume: 0.80, loop: false, category: 'sfx', priority: 'high' },
  'lose': { volume: 0.65, loop: false, category: 'sfx', priority: 'normal' },
  'round-win': { volume: 0.75, loop: false, category: 'sfx', priority: 'high' },
  'round-lose': { volume: 0.55, loop: false, category: 'sfx', priority: 'normal' },
};

/** 基础URL */
const BASE_URL = import.meta.env.BASE_URL || '/';

/** BGM音频URL映射（使用本地资源） */
const BGM_URLS: Record<BGMType, string> = {
  'main-menu': `${BASE_URL}audio/bgm-menu.mp3`,
  'character-select': `${BASE_URL}audio/bgm-menu.mp3`,
  'game-normal': `${BASE_URL}audio/bgm-game.mp3`,
  'game-intense': `${BASE_URL}audio/bgm-game.mp3`,
  'geass-activate': `${BASE_URL}audio/sfx-geass-activate.mp3`,
  'victory': `${BASE_URL}audio/bgm-victory.mp3`,
  'defeat': `${BASE_URL}audio/bgm-defeat.mp3`,
  'game-over': `${BASE_URL}audio/bgm-defeat.mp3`,
};

/** SFX音频URL映射（使用本地资源） */
const SFX_URLS: Record<SFXType, string> = {
  // 卡牌
  'card-play': `${BASE_URL}audio/sfx-play-card.mp3`,
  'card-shuffle': `${BASE_URL}audio/sfx-card-shuffle.mp3`,
  'card-draw': `${BASE_URL}audio/sfx-play-card.mp3`,
  'card-flip': `${BASE_URL}audio/sfx-play-card.mp3`,
  // 游戏事件
  'challenge': `${BASE_URL}audio/sfx-challenge.mp3`,
  'challenge-success': `${BASE_URL}audio/sfx-win.mp3`,
  'challenge-fail': `${BASE_URL}audio/sfx-lose.mp3`,
  'turn-start': `${BASE_URL}audio/sfx-turn-start.mp3`,
  'turn-end': `${BASE_URL}audio/sfx-button-click.mp3`,
  // Geass
  'geass-activate': `${BASE_URL}audio/sfx-geass-activate.mp3`,
  'geass-hit': `${BASE_URL}audio/sfx-geass-hit.mp3`,
  'geass-miss': `${BASE_URL}audio/sfx-geass-miss.mp3`,
  'geass-immunity': `${BASE_URL}audio/sfx-geass-miss.mp3`,
  // UI
  'button-click': `${BASE_URL}audio/sfx-button-click.mp3`,
  'button-hover': `${BASE_URL}audio/sfx-button-click.mp3`,
  'menu-open': `${BASE_URL}audio/sfx-button-click.mp3`,
  'menu-close': `${BASE_URL}audio/sfx-button-click.mp3`,
  // 角色
  'character-select': `${BASE_URL}audio/sfx-character-select.mp3`,
  'character-skill': `${BASE_URL}audio/sfx-geass-activate.mp3`,
  'damage-taken': `${BASE_URL}audio/sfx-geass-hit.mp3`,
  'heal': `${BASE_URL}audio/sfx-win.mp3`,
  // 结果
  'win': `${BASE_URL}audio/sfx-win.mp3`,
  'lose': `${BASE_URL}audio/sfx-lose.mp3`,
  'round-win': `${BASE_URL}audio/sfx-win.mp3`,
  'round-lose': `${BASE_URL}audio/sfx-lose.mp3`,
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
   * 初始化音效管理器 - 按照P0优先级预加载
   */
  init(): void {
    if (this.initialized) return;

    // P0优先级: 预加载主菜单BGM
    this.preloadBGM(['main-menu']);

    // P0优先级: 预加载核心音效
    const p0SFX: SFXType[] = [
      'button-click',  // UI交互
      'card-play',     // 卡牌放置
      'challenge',     // 质疑触发
    ];
    this.preloadSFX(p0SFX);

    // P1优先级: 延迟预加载其他重要音效
    setTimeout(() => {
      const p1SFX: SFXType[] = [
        'geass-activate',
        'geass-hit',
        'win',
        'lose',
        'card-shuffle',
      ];
      this.preloadSFX(p1SFX);
      console.log('[EnhancedSoundManager] P1音效预加载完成');
    }, 2000);

    this.initialized = true;
    console.log('[EnhancedSoundManager] 初始化完成 (P0资源已加载)');
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
