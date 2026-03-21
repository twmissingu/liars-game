/**
 * Code Geass: Liar's Game - 音效管理系统
 * 使用 Howler.js 管理所有音效
 */

import { Howl, Howler } from 'howler';

// 音效类型
export type SoundType =
  // BGM
  | 'bgm-menu'
  | 'bgm-game'
  | 'bgm-victory'
  | 'bgm-defeat'
  // 音效
  | 'sfx-play-card'
  | 'sfx-challenge'
  | 'sfx-geass-activate'
  | 'sfx-geass-hit'
  | 'sfx-geass-miss'
  | 'sfx-button-click'
  | 'sfx-card-shuffle'
  | 'sfx-win'
  | 'sfx-lose'
  | 'sfx-character-select'
  | 'sfx-turn-start'
  // 搞笑动作音效
  | 'sfx-funny-dance'
  | 'sfx-funny-monkey'
  | 'sfx-funny-pizza'
  | 'sfx-funny-laugh'
  | 'sfx-funny-chicken'
  | 'sfx-funny-chunibyo'
  | 'sfx-funny-butterfly';

// 音效配置
interface SoundConfig {
  volume: number;
  loop: boolean;
}

// Code Geass风格混音配置
export const MIXER_BUS = {
  bgm: 0.35,    // BGM: 30-40%不干扰对话
  sfx: 0.75,    // SFX: 60-80%突出反馈
  ui: 0.45,     // UI: 40-50%清晰但不突兀
};

// 默认配置 - 按照Code Geass风格优化
const DEFAULT_CONFIG: Record<SoundType, SoundConfig> = {
  // BGM - 管弦乐+电子风格
  'bgm-menu': { volume: 0.35, loop: true },      // 主菜单: 庄重神秘
  'bgm-game': { volume: 0.30, loop: true },      // 游戏: 紧张悬疑
  'bgm-victory': { volume: 0.55, loop: false },  // 胜利: triumphant
  'bgm-defeat': { volume: 0.45, loop: false },   // 失败: 哀伤

  // SFX - P0优先级核心音效
  'sfx-play-card': { volume: 0.70, loop: false },     // 卡牌放置: 清脆
  'sfx-challenge': { volume: 0.85, loop: false },     // 质疑: 戏剧化
  'sfx-geass-activate': { volume: 0.85, loop: false }, // Geass: 神秘
  'sfx-geass-hit': { volume: 0.90, loop: false },     // 命中: 冲击感
  'sfx-geass-miss': { volume: 0.55, loop: false },    // 闪避: whoosh
  'sfx-button-click': { volume: 0.45, loop: false },  // 按钮: tech click
  'sfx-card-shuffle': { volume: 0.55, loop: false },  // 洗牌: 摩擦声
  'sfx-win': { volume: 0.80, loop: false },           // 胜利: triumphant
  'sfx-lose': { volume: 0.65, loop: false },          // 失败: 低沉
  'sfx-character-select': { volume: 0.55, loop: false }, // 角色选择
  'sfx-turn-start': { volume: 0.45, loop: false },    // 回合开始

  // 搞笑动作音效
  'sfx-funny-dance': { volume: 0.80, loop: false },
  'sfx-funny-monkey': { volume: 0.80, loop: false },
  'sfx-funny-pizza': { volume: 0.70, loop: false },
  'sfx-funny-laugh': { volume: 0.90, loop: false },
  'sfx-funny-chicken': { volume: 0.80, loop: false },
  'sfx-funny-chunibyo': { volume: 0.80, loop: false },
  'sfx-funny-butterfly': { volume: 0.60, loop: false },
};

// 音效URL映射（使用本地资源）
const BASE_URL = import.meta.env.BASE_URL || '/';
const SOUND_URLS: Record<SoundType, string> = {
  // BGM
  'bgm-menu': `${BASE_URL}audio/bgm-menu.mp3`,
  'bgm-game': `${BASE_URL}audio/bgm-game.mp3`,
  'bgm-victory': `${BASE_URL}audio/bgm-victory.mp3`,
  'bgm-defeat': `${BASE_URL}audio/bgm-defeat.mp3`,
  // SFX
  'sfx-play-card': `${BASE_URL}audio/sfx-play-card.mp3`,
  'sfx-challenge': `${BASE_URL}audio/sfx-challenge.mp3`,
  'sfx-geass-activate': `${BASE_URL}audio/sfx-geass-activate.mp3`,
  'sfx-geass-hit': `${BASE_URL}audio/sfx-geass-hit.mp3`,
  'sfx-geass-miss': `${BASE_URL}audio/sfx-geass-miss.mp3`,
  'sfx-button-click': `${BASE_URL}audio/sfx-button-click.mp3`,
  'sfx-card-shuffle': `${BASE_URL}audio/sfx-card-shuffle.mp3`,
  'sfx-win': `${BASE_URL}audio/sfx-win.mp3`,
  'sfx-lose': `${BASE_URL}audio/sfx-lose.mp3`,
  'sfx-character-select': `${BASE_URL}audio/sfx-character-select.mp3`,
  'sfx-turn-start': `${BASE_URL}audio/sfx-turn-start.mp3`,
  // 搞笑动作音效 - 复用现有音效
  'sfx-funny-dance': `${BASE_URL}audio/sfx-funny-dance.mp3`,
  'sfx-funny-monkey': `${BASE_URL}audio/sfx-funny-monkey.mp3`,
  'sfx-funny-pizza': `${BASE_URL}audio/sfx-funny-pizza.mp3`,
  'sfx-funny-laugh': `${BASE_URL}audio/sfx-funny-laugh.mp3`,
  'sfx-funny-chicken': `${BASE_URL}audio/sfx-funny-chicken.mp3`,
  'sfx-funny-chunibyo': `${BASE_URL}audio/sfx-funny-chunibyo.mp3`,
  'sfx-funny-butterfly': `${BASE_URL}audio/sfx-funny-butterfly.mp3`,
};

class SoundManager {
  private sounds: Map<SoundType, Howl> = new Map();
  private currentBGM: SoundType | null = null;
  private enabled: boolean = true;
  private masterVolume: number = 1.0;
  private bgmVolume: number = 0.5;
  private sfxVolume: number = 0.7;

  constructor() {
    this.init();
  }

  /**
   * 初始化音效系统
   */
  private init(): void {
    // 预加载所有音效
    Object.entries(SOUND_URLS).forEach(([type, url]) => {
      const soundType = type as SoundType;
      const config = DEFAULT_CONFIG[soundType];

      try {
        const howl = new Howl({
          src: [url],
          volume: config.volume * this.getVolumeMultiplier(soundType),
          loop: config.loop,
          html5: true,
          preload: true, // 预加载所有音效
          onloaderror: (_id, err) => {
            console.warn(`Failed to load sound: ${soundType}`, err);
          },
          onplayerror: (_id, err) => {
            console.warn(`Failed to play sound: ${soundType}`, err);
            // 尝试恢复
            this.sounds.get(soundType)?.once('unlock', () => {
              this.sounds.get(soundType)?.play();
            });
          },
        });

        this.sounds.set(soundType, howl);
      } catch (e) {
        console.warn(`Error creating sound: ${soundType}`, e);
      }
    });
  }

  /**
   * 获取音量倍数
   */
  private getVolumeMultiplier(type: SoundType): number {
    if (type.startsWith('bgm-')) {
      return this.bgmVolume;
    }
    return this.sfxVolume;
  }

  /**
   * 播放音效
   */
  play(type: SoundType): void {
    if (!this.enabled) return;

    const sound = this.sounds.get(type);
    if (sound) {
      // 如果是BGM，先停止当前BGM
      if (type.startsWith('bgm-')) {
        this.stopBGM();
        this.currentBGM = type;
      }

      sound.play();
    }
  }

  /**
   * 停止音效
   */
  stop(type: SoundType): void {
    const sound = this.sounds.get(type);
    if (sound) {
      sound.stop();
    }
  }

  /**
   * 停止当前BGM
   */
  stopBGM(): void {
    if (this.currentBGM) {
      this.stop(this.currentBGM);
      this.currentBGM = null;
    }
  }

  /**
   * 暂停当前BGM
   */
  pauseBGM(): void {
    if (this.currentBGM) {
      const sound = this.sounds.get(this.currentBGM);
      if (sound) {
        sound.pause();
      }
    }
  }

  /**
   * 恢复当前BGM
   */
  resumeBGM(): void {
    if (this.currentBGM) {
      const sound = this.sounds.get(this.currentBGM);
      if (sound) {
        sound.play();
      }
    }
  }

  /**
   * 设置主音量
   */
  setMasterVolume(volume: number): void {
    this.masterVolume = Math.max(0, Math.min(1, volume));
    Howler.volume(this.masterVolume);
  }

  /**
   * 设置BGM音量
   */
  setBGMVolume(volume: number): void {
    this.bgmVolume = Math.max(0, Math.min(1, volume));
    // 更新所有BGM音量
    this.sounds.forEach((sound, type) => {
      if (type.startsWith('bgm-')) {
        sound.volume(DEFAULT_CONFIG[type].volume * this.bgmVolume);
      }
    });
  }

  /**
   * 设置音效音量
   */
  setSFXVolume(volume: number): void {
    this.sfxVolume = Math.max(0, Math.min(1, volume));
    // 更新所有SFX音量
    this.sounds.forEach((sound, type) => {
      if (!type.startsWith('bgm-')) {
        sound.volume(DEFAULT_CONFIG[type].volume * this.sfxVolume);
      }
    });
  }

  /**
   * 启用/禁用音效
   */
  setEnabled(enabled: boolean): void {
    this.enabled = enabled;
    if (!enabled) {
      this.stopAll();
    }
  }

  /**
   * 停止所有音效
   */
  stopAll(): void {
    Howler.stop();
    this.currentBGM = null;
  }

  /**
   * 播放搞笑动作音效
   */
  playFunnyAction(actionIndex: number): void {
    const funnySounds: SoundType[] = [
      'sfx-funny-dance',
      'sfx-funny-monkey',
      'sfx-funny-pizza',
      'sfx-funny-laugh',
      'sfx-funny-chicken',
      'sfx-funny-chunibyo',
      'sfx-funny-butterfly',
    ];

    const soundType = funnySounds[actionIndex % funnySounds.length];
    if (soundType) {
      this.play(soundType);
    }
  }

  /**
   * 预加载音效（用于游戏开始前）
   */
  preload(): Promise<void> {
    return new Promise(resolve => {
      let loadedCount = 0;
      const totalSounds = this.sounds.size;

      if (totalSounds === 0) {
        resolve();
        return;
      }

      this.sounds.forEach(sound => {
        if (sound.state() === 'loaded') {
          loadedCount++;
          if (loadedCount >= totalSounds) {
            resolve();
          }
        } else {
          sound.once('load', () => {
            loadedCount++;
            if (loadedCount >= totalSounds) {
              resolve();
            }
          });

          sound.once('loaderror', () => {
            loadedCount++;
            if (loadedCount >= totalSounds) {
              resolve();
            }
          });
        }
      });

      // 超时处理
      setTimeout(() => resolve(), 5000);
    });
  }

  /**
   * 获取当前状态
   */
  getStatus(): {
    enabled: boolean;
    masterVolume: number;
    bgmVolume: number;
    sfxVolume: number;
    currentBGM: SoundType | null;
  } {
    return {
      enabled: this.enabled,
      masterVolume: this.masterVolume,
      bgmVolume: this.bgmVolume,
      sfxVolume: this.sfxVolume,
      currentBGM: this.currentBGM,
    };
  }
}

// 导出单例
export const soundManager = new SoundManager();

// 便捷函数
export const playSound = (type: SoundType) => soundManager.play(type);
export const stopSound = (type: SoundType) => soundManager.stop(type);
export const playBGM = (type: 'bgm-menu' | 'bgm-game' | 'bgm-victory' | 'bgm-defeat') =>
  soundManager.play(type);
export const stopBGM = () => soundManager.stopBGM();
export const playFunnyAction = (index: number) => soundManager.playFunnyAction(index);
