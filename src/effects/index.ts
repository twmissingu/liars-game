/**
 * 特效模块统一导出
 * Geass特效系统 - Phase 4
 */

// Geass发动特效
export { GeassEffect, default as GeassEffectDefault } from './GeassEffect';
export type { GeassEffectProps } from './GeassEffect';

// 搞笑动作系统
export { FunnyActions, default as FunnyActionsDefault } from './FunnyActions';
export type { FunnyActionType, FunnyActionsProps } from './FunnyActions';

// 台词库
export {
  quotes,
  getQuotesByCategory,
  getQuotesByIntensity,
  getRandomQuote,
  getRandomQuotes,
  getActionQuote,
  categoryLabels,
  intensityLabels,
} from './Quotes';
export type { Quote } from './Quotes';

// 台词显示组件
export {
  TypewriterText,
  QuoteDisplay,
  RandomQuoteDisplay,
  default as QuoteDisplayDefault,
} from './QuoteDisplay';
export type {
  TypewriterTextProps,
  QuoteDisplayProps,
} from './QuoteDisplay';
