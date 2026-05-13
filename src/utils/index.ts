/**
 * =============================================================================
 * Code Geass: Liar's Game - 工具函数
 * =============================================================================
 *
 * @version 2.0.0
 */

// ============================================
// 本地存储工具
// ============================================

/**
 * 存储工具对象
 */
export const storage = {
  save: (key: string, data: unknown): void => {
    try {
      localStorage.setItem(key, JSON.stringify(data));
    } catch (e) {
      console.error('Failed to save to localStorage:', e);
    }
  },

  load: <T>(key: string): T | null => {
    try {
      const data = localStorage.getItem(key);
      return data ? (JSON.parse(data) as T) : null;
    } catch (e) {
      console.error('Failed to load from localStorage:', e);
      return null;
    }
  },

  clear: (key?: string): void => {
    try {
      if (key) {
        localStorage.removeItem(key);
      } else {
        localStorage.clear();
      }
    } catch (e) {
      console.error('Failed to clear localStorage:', e);
    }
  },
};
