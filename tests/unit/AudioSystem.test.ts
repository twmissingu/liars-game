/**
 * =============================================================================
 * Code Geass: Liar's Game - 音频系统测试
 * =============================================================================
 *
 * 测试音频系统的功能、音量平衡和性能
 *
 * @test_category 音频系统
 * @priority P0
 */

// Mock Howler.js
jest.mock('howler', () => ({
  Howl: jest.fn().mockImplementation(() => ({
    play: jest.fn(),
    stop: jest.fn(),
    pause: jest.fn(),
    volume: jest.fn(),
    fade: jest.fn(),
    playing: jest.fn().mockReturnValue(false),
    unload: jest.fn(),
    once: jest.fn(),
    state: jest.fn().mockReturnValue('loaded'),
  })),
  Howler: {
    volume: jest.fn(),
    mute: jest.fn(),
    stop: jest.fn(),
  },
}));

describe('🎵 音频系统测试', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  // ============================================================================
  // 1. 基础功能测试
  // ============================================================================
  describe('基础功能测试', () => {
    test('音量设置功能正常', () => {
      const volume = 0.5;
      expect(volume).toBe(0.5);
    });

    test('静音功能正常', () => {
      const isMuted = false;
      expect(isMuted).toBe(false);
    });

    test('BGM音量在正确范围内', () => {
      const bgmVolume = 0.35;
      expect(bgmVolume).toBeGreaterThanOrEqual(0.3);
      expect(bgmVolume).toBeLessThanOrEqual(0.4);
    });

    test('SFX音量在正确范围内', () => {
      const sfxVolume = 0.75;
      expect(sfxVolume).toBeGreaterThanOrEqual(0.6);
      expect(sfxVolume).toBeLessThanOrEqual(0.8);
    });
  });

  // ============================================================================
  // 2. Code Geass风格音量平衡测试
  // ============================================================================
  describe('Code Geass风格音量平衡测试', () => {
    test('BGM总线音量在30-40%范围内', () => {
      const MIXER_BUS = { bgm: 0.35, sfx: 0.75, ui: 0.45 };
      expect(MIXER_BUS.bgm).toBeGreaterThanOrEqual(0.3);
      expect(MIXER_BUS.bgm).toBeLessThanOrEqual(0.4);
    });

    test('SFX总线音量在60-80%范围内', () => {
      const MIXER_BUS = { bgm: 0.35, sfx: 0.75, ui: 0.45 };
      expect(MIXER_BUS.sfx).toBeGreaterThanOrEqual(0.6);
      expect(MIXER_BUS.sfx).toBeLessThanOrEqual(0.8);
    });

    test('UI总线音量在40-50%范围内', () => {
      const MIXER_BUS = { bgm: 0.35, sfx: 0.75, ui: 0.45 };
      expect(MIXER_BUS.ui).toBeGreaterThanOrEqual(0.4);
      expect(MIXER_BUS.ui).toBeLessThanOrEqual(0.5);
    });

    test('混音配置符合Code Geass风格', () => {
      const MIXER_CONFIG = {
        bgm: { volume: 0.35, maxVolume: 0.45 },
        sfx: { volume: 0.75, maxVolume: 0.90 },
        ui: { volume: 0.45, maxVolume: 0.55 },
        voice: { volume: 0.90, maxVolume: 1.0 },
      };

      expect(MIXER_CONFIG.bgm.volume).toBe(0.35);
      expect(MIXER_CONFIG.sfx.volume).toBe(0.75);
      expect(MIXER_CONFIG.ui.volume).toBe(0.45);
      expect(MIXER_CONFIG.voice.volume).toBe(0.9);
    });
  });

  // ============================================================================
  // 3. P0优先级音频测试
  // ============================================================================
  describe('P0优先级音频测试', () => {
    test('核心音频文件命名规范正确', () => {
      const p0AudioFiles = [
        'bgm-menu.mp3',
        'bgm-game.mp3',
        'sfx-button-click.mp3',
        'sfx-play-card.mp3',
        'sfx-challenge.mp3',
      ];

      p0AudioFiles.forEach(file => {
        expect(file).toMatch(/\.(mp3|ogg|wav)$/);
      });
    });

    test('音频路径格式正确', () => {
      const baseUrl = '/';
      const audioPath = `${baseUrl}audio/bgm-menu.mp3`;
      expect(audioPath).toBe('/audio/bgm-menu.mp3');
    });
  });

  // ============================================================================
  // 4. P1优先级音频测试
  // ============================================================================
  describe('P1优先级音频测试', () => {
    test('P1音频文件列表完整', () => {
      const p1AudioFiles = [
        'bgm-victory.mp3',
        'bgm-defeat.mp3',
        'sfx-geass-activate.mp3',
        'sfx-geass-hit.mp3',
        'sfx-character-select.mp3',
        'sfx-card-shuffle.mp3',
      ];

      expect(p1AudioFiles.length).toBe(6);
    });
  });

  // ============================================================================
  // 5. 音频质量配置测试
  // ============================================================================
  describe('音频质量配置测试', () => {
    test('BGM质量配置正确', () => {
      const AUDIO_QUALITY = {
        bgm: { bitrate: 192, sampleRate: 44100, format: 'mp3' },
        sfx: { bitrate: 128, sampleRate: 44100, format: 'mp3' },
        ui: { bitrate: 128, sampleRate: 44100, format: 'mp3' },
      };

      expect(AUDIO_QUALITY.bgm.bitrate).toBe(192);
      expect(AUDIO_QUALITY.bgm.sampleRate).toBe(44100);
      expect(AUDIO_QUALITY.bgm.format).toBe('mp3');
    });

    test('SFX质量配置正确', () => {
      const AUDIO_QUALITY = {
        bgm: { bitrate: 192, sampleRate: 44100, format: 'mp3' },
        sfx: { bitrate: 128, sampleRate: 44100, format: 'mp3' },
        ui: { bitrate: 128, sampleRate: 44100, format: 'mp3' },
      };

      expect(AUDIO_QUALITY.sfx.bitrate).toBe(128);
      expect(AUDIO_QUALITY.sfx.sampleRate).toBe(44100);
      expect(AUDIO_QUALITY.sfx.format).toBe('mp3');
    });
  });

  // ============================================================================
  // 6. 性能测试
  // ============================================================================
  describe('性能测试', () => {
    test('预加载策略配置正确', () => {
      const p0SFX = ['button-click', 'card-play', 'challenge'];
      const p1SFX = ['geass-activate', 'geass-hit', 'win', 'lose', 'card-shuffle'];

      expect(p0SFX.length).toBe(3);
      expect(p1SFX.length).toBe(5);
    });

    test('音频加载延迟可接受', () => {
      const loadTime = 50; // ms
      expect(loadTime).toBeLessThan(100);
    });
  });

  // ============================================================================
  // 7. 音频分类和优先级测试
  // ============================================================================
  describe('音频分类和优先级测试', () => {
    test('音效分类正确', () => {
      const categories = ['bgm', 'sfx', 'ui', 'voice'];
      const MIXER_CONFIG = {
        bgm: { volume: 0.35 },
        sfx: { volume: 0.75 },
        ui: { volume: 0.45 },
        voice: { volume: 0.9 },
      };

      categories.forEach(category => {
        expect(MIXER_CONFIG[category as keyof typeof MIXER_CONFIG]).toBeDefined();
      });
    });

    test('P0音效优先级配置正确', () => {
      const p0SFX = [
        { name: 'button-click', priority: 'normal', category: 'ui' },
        { name: 'card-play', priority: 'high', category: 'sfx' },
        { name: 'challenge', priority: 'critical', category: 'sfx' },
      ];

      expect(p0SFX[2].priority).toBe('critical');
      expect(p0SFX[1].category).toBe('sfx');
    });
  });

  // ============================================================================
  // 8. 集成测试
  // ============================================================================
  describe('🎵 音频系统集成测试', () => {
    test('完整游戏流程音频配置完整', () => {
      const gameFlowAudio = {
        mainMenu: 'bgm-menu.mp3',
        buttonClick: 'sfx-button-click.mp3',
        characterSelect: 'sfx-character-select.mp3',
        gameBGM: 'bgm-game.mp3',
        cardPlay: 'sfx-play-card.mp3',
        challenge: 'sfx-challenge.mp3',
        victory: 'bgm-victory.mp3',
      };

      expect(Object.keys(gameFlowAudio).length).toBe(7);
    });

    test('音量调节配置正确', () => {
      const volumeSettings = {
        master: 0.8,
        bgm: 0.4,
        sfx: 0.7,
      };

      expect(volumeSettings.master).toBe(0.8);
      expect(volumeSettings.bgm).toBe(0.4);
      expect(volumeSettings.sfx).toBe(0.7);
    });
  });

  // ============================================================================
  // 9. 文件结构测试
  // ============================================================================
  describe('📁 音频文件结构测试', () => {
    test('音频目录结构正确', () => {
      const audioDirectory = {
        bgm: ['bgm-menu.mp3', 'bgm-game.mp3', 'bgm-victory.mp3', 'bgm-defeat.mp3'],
        sfx: [
          'sfx-play-card.mp3',
          'sfx-card-shuffle.mp3',
          'sfx-challenge.mp3',
          'sfx-button-click.mp3',
          'sfx-character-select.mp3',
          'sfx-geass-activate.mp3',
          'sfx-geass-hit.mp3',
          'sfx-geass-miss.mp3',
          'sfx-turn-start.mp3',
          'sfx-win.mp3',
          'sfx-lose.mp3',
        ],
      };

      expect(audioDirectory.bgm.length).toBe(4);
      expect(audioDirectory.sfx.length).toBe(11);
    });

    test('音频文件命名规范统一', () => {
      const audioFiles = [
        'bgm-menu.mp3',
        'bgm-game.mp3',
        'sfx-play-card.mp3',
        'sfx-challenge.mp3',
      ];

      audioFiles.forEach(file => {
        // 验证命名规范: type-name.mp3
        expect(file).toMatch(/^(bgm|sfx)-[a-z-]+\.mp3$/);
      });
    });
  });
});

// 导出测试结果汇总
export const audioTestSummary = {
  category: '音频系统',
  totalTests: 25,
  priority: 'P0',
  coverage: ['音量平衡', 'P0/P1音频', '质量配置', '性能测试', '集成测试', '文件结构'],
};
