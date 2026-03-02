/**
 * 中二台词库
 * 包含各种风格的Geass风格中二台词
 */

export interface Quote {
  id: string;
  text: string;
  subText?: string;
  author?: string;
  category: 'declaration' | 'command' | 'philosophy' | 'dramatic' | 'funny';
  intensity: 'low' | 'medium' | 'high';
}

export const quotes: Quote[] = [
  // 宣言类
  {
    id: 'decl-001',
    text: '吾乃被世界选中之人！',
    subText: '—— 所有的阻碍都将化为尘埃',
    category: 'declaration',
    intensity: 'high',
  },
  {
    id: 'decl-002',
    text: '在这双眼面前，没有秘密可言。',
    subText: '—— Geass之力，觉醒吧',
    category: 'declaration',
    intensity: 'high',
  },
  {
    id: 'decl-003',
    text: '我，即是规则。',
    category: 'declaration',
    intensity: 'medium',
  },
  {
    id: 'decl-004',
    text: '臣服于我吧，世界！',
    subText: '—— 这是来自王者的命令',
    category: 'declaration',
    intensity: 'high',
  },
  {
    id: 'decl-005',
    text: '命运？那种东西，由我来改写！',
    category: 'declaration',
    intensity: 'medium',
  },

  // 命令类
  {
    id: 'cmd-001',
    text: '以Geass之名，我命令你——',
    subText: '（说出你的愿望吧）',
    category: 'command',
    intensity: 'high',
  },
  {
    id: 'cmd-002',
    text: '服从我，这是绝对的。',
    category: 'command',
    intensity: 'medium',
  },
  {
    id: 'cmd-003',
    text: '你的意志，现在属于我了。',
    category: 'command',
    intensity: 'high',
  },
  {
    id: 'cmd-004',
    text: '跪下，向你的新主人致敬。',
    category: 'command',
    intensity: 'medium',
  },
  {
    id: 'cmd-005',
    text: '忘记一切，只记得服从。',
    category: 'command',
    intensity: 'high',
  },

  // 哲学类
  {
    id: 'phil-001',
    text: '力量不是为了征服，而是为了守护。',
    subText: '—— 即使这双手沾满鲜血',
    category: 'philosophy',
    intensity: 'medium',
  },
  {
    id: 'phil-002',
    text: '所谓王，就是背负着所有人的罪恶前行。',
    category: 'philosophy',
    intensity: 'high',
  },
  {
    id: 'phil-003',
    text: '孤独是王者的宿命，但我选择接受。',
    category: 'philosophy',
    intensity: 'medium',
  },
  {
    id: 'phil-004',
    text: '真相往往比谎言更加残酷。',
    category: 'philosophy',
    intensity: 'low',
  },
  {
    id: 'phil-005',
    text: '为了更大的善，小的恶是必要的。',
    subText: '—— 这就是我所选择的道路',
    category: 'philosophy',
    intensity: 'high',
  },

  // 戏剧类
  {
    id: 'dram-001',
    text: '啊哈哈哈哈！看到了吗，这就是我的力量！',
    category: 'dramatic',
    intensity: 'high',
  },
  {
    id: 'dram-002',
    text: '在这绝对的权力面前，颤抖吧！',
    category: 'dramatic',
    intensity: 'high',
  },
  {
    id: 'dram-003',
    text: '黑暗啊，吞噬一切吧！',
    subText: '（中二病发作中）',
    category: 'dramatic',
    intensity: 'medium',
  },
  {
    id: 'dram-004',
    text: '吾之名为——Zero！',
    category: 'dramatic',
    intensity: 'high',
  },
  {
    id: 'dram-005',
    text: '世界啊，聆听我的怒吼！',
    category: 'dramatic',
    intensity: 'medium',
  },

  // 搞笑类
  {
    id: 'fun-001',
    text: '我命令你...请我吃拉面！',
    subText: '（Geass的正确用法）',
    category: 'funny',
    intensity: 'low',
  },
  {
    id: 'fun-002',
    text: '以这双眼之力，看穿你的牌！',
    subText: '—— 出老千专用',
    category: 'funny',
    intensity: 'low',
  },
  {
    id: 'fun-003',
    text: '臣服于我吧，作业！',
    subText: '（学生党的愿望）',
    category: 'funny',
    intensity: 'low',
  },
  {
    id: 'fun-004',
    text: 'Geass发动！明天放假！',
    category: 'funny',
    intensity: 'low',
  },
  {
    id: 'fun-005',
    text: '我命令你...笑一个！',
    category: 'funny',
    intensity: 'low',
  },
  {
    id: 'fun-006',
    text: '这双眼，看透了太多社死现场...',
    category: 'funny',
    intensity: 'low',
  },
];

/**
 * 根据分类获取台词
 */
export const getQuotesByCategory = (category: Quote['category']): Quote[] => {
  return quotes.filter((q) => q.category === category);
};

/**
 * 根据强度获取台词
 */
export const getQuotesByIntensity = (intensity: Quote['intensity']): Quote[] => {
  return quotes.filter((q) => q.intensity === intensity);
};

/**
 * 随机获取一条台词
 */
export const getRandomQuote = (category?: Quote['category']): Quote => {
  const pool = category ? getQuotesByCategory(category) : quotes;
  return pool[Math.floor(Math.random() * pool.length)];
};

/**
 * 随机获取多条不重复台词
 */
export const getRandomQuotes = (count: number, category?: Quote['category']): Quote[] => {
  const pool = category ? getQuotesByCategory(category) : [...quotes];
  const result: Quote[] = [];
  
  while (result.length < count && pool.length > 0) {
    const index = Math.floor(Math.random() * pool.length);
    result.push(pool.splice(index, 1)[0]);
  }
  
  return result;
};

/**
 * 获取搞笑动作对应的台词
 */
export const getActionQuote = (actionType: string): Quote | null => {
  const actionQuotes: Record<string, Quote> = {
    spinJump: {
      id: 'act-spin',
      text: '旋转吧，我的灵魂！',
      subText: '（然后摔倒了）',
      category: 'funny',
      intensity: 'low',
    },
    catMeow: {
      id: 'act-cat',
      text: '喵～吾乃猫之化身～',
      subText: '（学猫叫中）',
      category: 'funny',
      intensity: 'low',
    },
    handstandWalk: {
      id: 'act-hand',
      text: '倒立行走，此乃秘技！',
      subText: '（手好痛）',
      category: 'funny',
      intensity: 'low',
    },
    dramaticRecite: {
      id: 'act-drama',
      text: '听好了，这是来自深渊的咏叹...',
      subText: '（深情朗诵中）',
      category: 'dramatic',
      intensity: 'medium',
    },
    robotDance: {
      id: 'act-robot',
      text: '系统启动...舞蹈模式ON',
      subText: '（机械舞Popping）',
      category: 'funny',
      intensity: 'low',
    },
    mimicry: {
      id: 'act-mimic',
      text: '模仿能力，全开！',
      subText: '（同步率99%）',
      category: 'funny',
      intensity: 'low',
    },
    ascendToHeaven: {
      id: 'act-ascend',
      text: '我要升天了！（物理）',
      subText: '（然后掉下来了）',
      category: 'funny',
      intensity: 'low',
    },
    spinAround: {
      id: 'act-spin2',
      text: '转啊转啊转啊转～',
      subText: '（头晕目眩中）',
      category: 'funny',
      intensity: 'low',
    },
  };

  return actionQuotes[actionType] || null;
};

/**
 * 台词分类标签
 */
export const categoryLabels: Record<Quote['category'], { label: string; color: string }> = {
  declaration: { label: '宣言', color: '#DC143C' },
  command: { label: '命令', color: '#8B0000' },
  philosophy: { label: '哲学', color: '#4B0082' },
  dramatic: { label: '戏剧', color: '#FF8C00' },
  funny: { label: '搞笑', color: '#32CD32' },
};

/**
 * 强度标签
 */
export const intensityLabels: Record<Quote['intensity'], { label: string; emoji: string }> = {
  low: { label: '轻度', emoji: '😏' },
  medium: { label: '中度', emoji: '😤' },
  high: { label: '重度', emoji: '😈' },
};

export default quotes;
