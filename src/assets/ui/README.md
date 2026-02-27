# Code Geass: Liar's Game - UI素材目录

## 目录结构

```
src/assets/ui/
├── icons/              # 图标素材
│   ├── menu.svg
│   ├── settings.svg
│   ├── help.svg
│   ├── play.svg
│   ├── pass.svg
│   └── challenge.svg
├── backgrounds/        # 背景素材
│   ├── main-menu.svg
│   ├── table-felt.svg
│   └── pattern-geass.svg
├── effects/            # 特效素材
│   ├── geass-glow.svg
│   ├── gold-shimmer.svg
│   └── victory-rays.svg
└── cards/              # 卡牌素材
    ├── back.svg
    ├── spades.svg
    ├── hearts.svg
    ├── clubs.svg
    └── diamonds.svg
```

## UI设计规范

### 颜色系统
- **主背景**: #0a0a0f (深邃黑)
- **次背景**: #1a1a24 (次级黑)
- **金色**: #d4af37 (布里塔尼亚皇室金)
- **Geass红**: #dc2626
- **文字主色**: #f5f5f5
- **文字次色**: #a1a1aa

### 字体
- **标题**: Cinzel, Noto Serif SC
- **正文**: Inter, Noto Sans SC
- **装饰**: Cinzel Decorative

### 边框装饰
- 金色角落装饰
- Geass纹路背景
- 布里塔尼亚元素

## 使用说明

UI组件已使用内联SVG和CSS实现，无需外部素材文件。
组件位置: `src/ui/`
样式位置: `src/styles/`
