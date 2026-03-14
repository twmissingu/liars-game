/**
 * 测试环境设置文件
 * Code Geass: Liar's Game
 */

import '@testing-library/jest-dom';

// Mock Howler.js
global.Howl = class Howl {
  constructor(options: any) {}
  play() { return 1; }
  pause() {}
  stop() {}
  mute() {}
  volume() { return 1; }
  fade() {}
  rate() { return 1; }
  seek() { return 0; }
  loop() { return this; }
  state() { return 'loaded'; }
  playing() { return false; }
  duration() { return 0; }
  on(event: string, callback: Function) {}
  off(event: string, callback: Function) {}
  once(event: string, callback: Function) {}
};

global.Howler = {
  ctx: null,
  masterGain: null,
  usingWebAudio: true,
  noAudio: false,
  autoSuspend: true,
  autoUnlock: true,
  volume: () => 1,
  mute: () => {},
  codecs: () => true,
};

// Mock window.matchMedia
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation((query: string) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(),
    removeListener: jest.fn(),
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});

// Mock IntersectionObserver
global.IntersectionObserver = class IntersectionObserver {
  constructor() {}
  disconnect() {}
  observe() {}
  unobserve() {}
  takeRecords() { return []; }
};

// Mock ResizeObserver
global.ResizeObserver = class ResizeObserver {
  constructor() {}
  disconnect() {}
  observe() {}
  unobserve() {}
};

// Mock console methods for cleaner test output
global.console = {
  ...console,
  log: jest.fn(),
  debug: jest.fn(),
  info: jest.fn(),
  warn: jest.fn(),
  error: jest.fn(),
};

// Reset mocks before each test
beforeEach(() => {
  jest.clearAllMocks();
});
