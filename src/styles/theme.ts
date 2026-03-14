/**
 * Code Geass: Liar's Game - 主题配置
 * 黑金主题 + Geass红色纹路 + 布里塔尼亚元素
 */

export const theme = {
  // ============================================
  // 颜色系统 - 黑金主题
  // ============================================
  colors: {
    // 基础色
    primary: '#0a0a0f', // 深邃黑 - 主背景
    secondary: '#1a1a24', // 次级黑 - 卡片背景
    surface: '#252532', // 表面色 - 组件背景

    // 金色系 - 布里塔尼亚皇室风格
    gold: {
      50: '#fffbeb',
      100: '#fef3c7',
      200: '#fde68a',
      300: '#fcd34d',
      400: '#fbbf24',
      500: '#d4af37', // 经典金色
      600: '#b8941f',
      700: '#a17a18',
      800: '#856213',
      900: '#714f12',
      metallic:
        'linear-gradient(135deg, #d4af37 0%, #f4d03f 25%, #d4af37 50%, #b8941f 75%, #d4af37 100%)',
      shimmer: 'linear-gradient(90deg, transparent, rgba(212, 175, 55, 0.4), transparent)',
    },

    // Geass红色系
    geass: {
      red: '#dc2626', // Geass红
      dark: '#991b1b', // 深红
      light: '#ef4444', // 亮红
      glow: 'rgba(220, 38, 38, 0.6)', // 发光效果
      symbol: '#b91c1c', // Geass符号色
    },

    // 文字色
    text: {
      primary: '#f5f5f5', // 主文字 - 白
      secondary: '#a1a1aa', // 次文字 - 灰
      muted: '#71717a', // 弱化文字
      gold: '#d4af37', // 金色文字
    },

    // 边框与分隔
    border: {
      DEFAULT: '#3f3f46',
      gold: '#d4af37',
      geass: '#dc2626',
    },

    // 状态色
    status: {
      success: '#22c55e',
      warning: '#eab308',
      error: '#dc2626',
      info: '#3b82f6',
    },
  },

  // ============================================
  // 字体系统
  // ============================================
  fonts: {
    // 标题字体 - 优雅衬线体
    title: '"Cinzel", "Playfair Display", "Noto Serif SC", serif',
    // 正文字体
    body: '"Inter", "Noto Sans SC", sans-serif',
    // 装饰字体 - 用于特殊元素
    decorative: '"Cinzel Decorative", "Cinzel", serif',
    // 等宽字体 - 用于数值显示
    mono: '"JetBrains Mono", "Fira Code", monospace',
  },

  // ============================================
  // 间距系统
  // ============================================
  spacing: {
    xs: '0.25rem', // 4px
    sm: '0.5rem', // 8px
    md: '1rem', // 16px
    lg: '1.5rem', // 24px
    xl: '2rem', // 32px
    '2xl': '3rem', // 48px
    '3xl': '4rem', // 64px
  },

  // ============================================
  // 圆角系统
  // ============================================
  borderRadius: {
    sm: '0.25rem',
    md: '0.5rem',
    lg: '0.75rem',
    xl: '1rem',
    '2xl': '1.5rem',
    full: '9999px',
  },

  // ============================================
  // 阴影系统
  // ============================================
  shadows: {
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.5)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.5), 0 2px 4px -2px rgba(0, 0, 0, 0.5)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.5), 0 4px 6px -4px rgba(0, 0, 0, 0.5)',
    xl: '0 20px 25px -5px rgba(0, 0, 0, 0.5), 0 8px 10px -6px rgba(0, 0, 0, 0.5)',
    // 金色发光
    gold: '0 0 20px rgba(212, 175, 55, 0.4), 0 0 40px rgba(212, 175, 55, 0.2)',
    goldSm: '0 0 10px rgba(212, 175, 55, 0.3)',
    // Geass红发光
    geass: '0 0 20px rgba(220, 38, 38, 0.5), 0 0 40px rgba(220, 38, 38, 0.3)',
    geassSm: '0 0 10px rgba(220, 38, 38, 0.4)',
    // 内阴影
    inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.6)',
  },

  // ============================================
  // 动画配置
  // ============================================
  animations: {
    // 呼吸动画 - 角色待机
    breathing: {
      duration: '3s',
      easing: 'ease-in-out',
      iteration: 'infinite',
    },
    // 悬浮动画
    float: {
      duration: '2s',
      easing: 'ease-in-out',
      iteration: 'infinite',
    },
    // 闪烁动画 - Geass纹路
    pulse: {
      duration: '1.5s',
      easing: 'ease-in-out',
      iteration: 'infinite',
    },
    // 洗牌动画
    shuffle: {
      duration: '0.5s',
      easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
    },
    // 出牌动画
    playCard: {
      duration: '0.4s',
      easing: 'cubic-bezier(0.34, 1.56, 0.64, 1)', // 弹性效果
    },
    // 胜利动画
    victory: {
      duration: '1s',
      easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
    },
    // 过渡动画
    transition: {
      fast: '150ms',
      normal: '300ms',
      slow: '500ms',
    },
  },

  // ============================================
  // 断点系统
  // ============================================
  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
  },

  // ============================================
  // Z-index层级
  // ============================================
  zIndex: {
    base: 0,
    dropdown: 100,
    sticky: 200,
    fixed: 300,
    modal: 400,
    popover: 500,
    tooltip: 600,
    overlay: 700,
    geassEffect: 800, // Geass特效层
    toast: 900,
  },
} as const;

// 导出类型
type Theme = typeof theme;
export type { Theme };
