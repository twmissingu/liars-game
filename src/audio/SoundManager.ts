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

// 默认配置
const DEFAULT_CONFIG: Record<SoundType, SoundConfig> = {
  // BGM
  'bgm-menu': { volume: 0.5, loop: true },
  'bgm-game': { volume: 0.4, loop: true },
  'bgm-victory': { volume: 0.6, loop: false },
  'bgm-defeat': { volume: 0.5, loop: false },
  // SFX
  'sfx-play-card': { volume: 0.7, loop: false },
  'sfx-challenge': { volume: 0.8, loop: false },
  'sfx-geass-activate': { volume: 0.9, loop: false },
  'sfx-geass-hit': { volume: 1.0, loop: false },
  'sfx-geass-miss': { volume: 0.6, loop: false },
  'sfx-button-click': { volume: 0.5, loop: false },
  'sfx-card-shuffle': { volume: 0.6, loop: false },
  'sfx-win': { volume: 0.8, loop: false },
  'sfx-lose': { volume: 0.7, loop: false },
  'sfx-character-select': { volume: 0.6, loop: false },
  'sfx-turn-start': { volume: 0.5, loop: false },
  // 搞笑动作音效
  'sfx-funny-dance': { volume: 0.8, loop: false },
  'sfx-funny-monkey': { volume: 0.8, loop: false },
  'sfx-funny-pizza': { volume: 0.7, loop: false },
  'sfx-funny-laugh': { volume: 0.9, loop: false },
  'sfx-funny-chicken': { volume: 0.8, loop: false },
  'sfx-funny-chunibyo': { volume: 0.8, loop: false },
  'sfx-funny-butterfly': { volume: 0.6, loop: false },
};

// 音效URL映射（使用在线资源）
const SOUND_URLS: Record<SoundType, string> = {
  // BGM
  'bgm-menu': 'https://assets.mixkit.co/music/preview/mixkit-epic-orchestra-689.mp3',
  'bgm-game': 'https://assets.mixkit.co/music/preview/mixkit-intense-puzzle-game-1122.mp3',
  'bgm-victory': 'https://assets.mixkit.co/music/preview/mixkit-winning-chimes-2015.mp3',
  'bgm-defeat': 'https://assets.mixkit.co/music/preview/mixkit-sad-piano-553.mp3',
  // SFX
  'sfx-play-card': 'https://assets.mixkit.co/sfx/preview/mixkit-card-flip-1535.mp3',
  'sfx-challenge': 'https://assets.mixkit.co/sfx/preview/mixkit-dramatic-boom-991.mp3',
  'sfx-geass-activate': 'https://assets.mixkit.co/sfx/preview/mixkit-magical-coin-win-193.mp3',
  'sfx-geass-hit': 'https://assets.mixkit.co/sfx/preview/mixkit-arcade-game-explosion-2759.mp3',
  'sfx-geass-miss': 'https://assets.mixkit.co/sfx/preview/mixkit-falling-into-mud-391.mp3',
  'sfx-button-click':
    'https://assets.mixkit.co/sfx/preview/mixkit-modern-technology-select-3124.mp3',
  'sfx-card-shuffle': 'https://assets.mixkit.co/sfx/preview/mixkit-shuffling-cards-1698.mp3',
  'sfx-win': 'https://assets.mixkit.co/sfx/preview/mixkit-achievement-bell-600.mp3',
  'sfx-lose': 'https://assets.mixkit.co/sfx/preview/mixkit-fail-drum-and-bells-571.mp3',
  'sfx-character-select': 'https://assets.mixkit.co/sfx/preview/mixkit-select-click-1109.mp3',
  'sfx-turn-start':
    'https://assets.mixkit.co/sfx/preview/mixkit-game-notification-wave-alarm-987.mp3',
  // 搞笑动作音效
  'sfx-funny-dance': 'https://assets.mixkit.co/sfx/preview/mixkit-funny-clown-horn-sound-560.mp3',
  'sfx-funny-monkey': 'https://assets.mixkit.co/sfx/preview/mixkit-monkey-laugh-96.mp3',
  'sfx-funny-pizza': 'https://assets.mixkit.co/sfx/preview/mixkit-cartoon-voice-laugh-468.mp3',
  'sfx-funny-laugh': 'https://assets.mixkit.co/sfx/preview/mixkit-laughing-cartoon-459.mp3',
  'sfx-funny-chicken': 'https://assets.mixkit.co/sfx/preview/mixkit-chicken-cluck-1762.mp3',
  'sfx-funny-chunibyo': 'https://assets.mixkit.co/sfx/preview/mixkit-dramatic-metal-hit-2771.mp3',
  'sfx-funny-butterfly': 'https://assets.mixkit.co/sfx/preview/mixkit-magic-flute-sound-2428.mp3',
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
          onloaderror: (id, err) => {
            console.warn(`Failed to load sound: ${soundType}`, err);
          },
          onplayerror: (id, err) => {
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
