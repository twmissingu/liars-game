#!/bin/bash

# =============================================================================
# Code Geass: Liar's Game - 音频资源下载脚本
# =============================================================================
#
# 本脚本用于从推荐的免费音频资源网站下载项目所需的音频文件
#
# 使用方法:
#   chmod +x scripts/download-audio-assets.sh
#   ./scripts/download-audio-assets.sh
#
# =============================================================================

set -e

# 颜色定义
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# 项目目录
PROJECT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
AUDIO_DIR="$PROJECT_DIR/public/audio"

# 创建音频目录
mkdir -p "$AUDIO_DIR"

echo -e "${BLUE}========================================${NC}"
echo -e "${BLUE}  Code Geass: Liar's Game 音频资源下载${NC}"
echo -e "${BLUE}========================================${NC}"
echo ""

# 检查必要的工具
check_dependencies() {
    local missing=()
    
    if ! command -v curl &> /dev/null; then
        missing+=("curl")
    fi
    
    if ! command -v ffmpeg &> /dev/null; then
        missing+=("ffmpeg")
    fi
    
    if [ ${#missing[@]} -ne 0 ]; then
        echo -e "${RED}错误: 缺少以下依赖工具:${NC}"
        for tool in "${missing[@]}"; do
            echo "  - $tool"
        done
        echo ""
        echo "请安装这些工具:"
        echo "  macOS: brew install curl ffmpeg"
        echo "  Ubuntu: sudo apt-get install curl ffmpeg"
        exit 1
    fi
}

# 下载文件函数
download_file() {
    local url=$1
    local output=$2
    local description=$3
    
    echo -e "${YELLOW}下载: $description${NC}"
    
    if [ -f "$output" ]; then
        echo -e "${GREEN}  ✓ 文件已存在，跳过下载${NC}"
        return 0
    fi
    
    if curl -L -o "$output" "$url" --silent --fail; then
        echo -e "${GREEN}  ✓ 下载成功${NC}"
        return 0
    else
        echo -e "${RED}  ✗ 下载失败${NC}"
        return 1
    fi
}

# 显示手动下载指南
show_manual_guide() {
    echo ""
    echo -e "${YELLOW}========================================${NC}"
    echo -e "${YELLOW}  手动下载指南${NC}"
    echo -e "${YELLOW}========================================${NC}"
    echo ""
    echo "由于版权和网站限制，部分音频需要手动下载。"
    echo "请按照以下步骤操作:"
    echo ""
    
    echo -e "${BLUE}1. Mixkit (https://mixkit.co/free-music/)${NC}"
    echo "   搜索并下载以下文件:"
    echo "   - Epic Orchestral → 重命名为 bgm-menu.mp3"
    echo "   - Intense Puzzle → 重命名为 bgm-game.mp3"
    echo "   - Winning Chimes → 重命名为 bgm-victory.mp3"
    echo "   - Sad Piano → 重命名为 bgm-defeat.mp3"
    echo "   - Dramatic Boom → 重命名为 sfx-challenge.mp3"
    echo "   - Modern Technology Select → 重命名为 sfx-button-click.mp3"
    echo "   - Select Click → 重命名为 sfx-character-select.mp3"
    echo ""
    
    echo -e "${BLUE}2. Freesound (https://freesound.org)${NC}"
    echo "   注册免费账号，搜索并下载:"
    echo "   - card place (CC0) → 重命名为 sfx-play-card.mp3"
    echo "   - card shuffle (CC0) → 重命名为 sfx-card-shuffle.mp3"
    echo ""
    
    echo "下载完成后，将所有文件放入: $AUDIO_DIR"
    echo ""
}

# 主函数
main() {
    check_dependencies
    
    echo -e "${BLUE}音频文件将保存到: $AUDIO_DIR${NC}"
    echo ""
    
    # 注意: 由于Mixkit和Freesound的下载链接会变化，
    # 这里提供的是示例URL，实际使用时需要替换为有效的下载链接
    
    echo -e "${YELLOW}注意: 本脚本提供下载指南，实际文件需要手动下载${NC}"
    echo ""
    
    # 创建占位符文件
    echo -e "${BLUE}创建音频文件清单...${NC}"
    
    cat > "$AUDIO_DIR/README.md" << 'EOF'
# 音频资源目录

## 必需文件清单

### BGM (背景音乐)
- [ ] bgm-menu.mp3 - 主菜单BGM (Epic Orchestral风格)
- [ ] bgm-game.mp3 - 游戏场景BGM (Intense/Suspense风格)
- [ ] bgm-victory.mp3 - 胜利BGM (Triumphant风格)
- [ ] bgm-defeat.mp3 - 失败BGM (Sad Piano风格)

### SFX (音效)
- [ ] sfx-play-card.mp3 - 卡牌放置音效
- [ ] sfx-card-shuffle.mp3 - 卡牌洗牌音效
- [ ] sfx-challenge.mp3 - 质疑触发音效
- [ ] sfx-button-click.mp3 - 按钮点击音效
- [ ] sfx-character-select.mp3 - 角色选择音效
- [ ] sfx-geass-activate.mp3 - Geass激活音效
- [ ] sfx-geass-hit.mp3 - Geass命中音效
- [ ] sfx-geass-miss.mp3 - Geass闪避音效
- [ ] sfx-turn-start.mp3 - 回合开始音效
- [ ] sfx-win.mp3 - 回合胜利音效
- [ ] sfx-lose.mp3 - 回合失败音效

## 推荐下载来源

### Mixkit (https://mixkit.co)
- 许可: Mixkit License (免费商用)
- 无需登录即可下载

### Freesound (https://freesound.org)
- 许可: CC0 / CC-BY
- 需要注册免费账号

### YouTube Audio Library
- 许可: YouTube Audio Library License
- 需要Google账号

## 技术规格

- 格式: MP3
- BGM比特率: 192kbps
- SFX比特率: 128kbps
- 采样率: 44.1kHz

## 音量配置

- BGM: 30-40%
- SFX: 60-80%
- UI: 40-50%

详见: /docs/AUDIO_ASSETS_INTEGRATION_GUIDE.md
EOF

    echo -e "${GREEN}✓ 音频文件清单已创建${NC}"
    echo ""
    
    # 显示手动下载指南
    show_manual_guide
    
    echo -e "${GREEN}========================================${NC}"
    echo -e "${GREEN}  音频资源下载准备完成${NC}"
    echo -e "${GREEN}========================================${NC}"
    echo ""
    echo "请按照上述指南手动下载音频文件。"
    echo "下载完成后，音频文件将自动被项目加载。"
    echo ""
    echo "测试音频系统:"
    echo "  npm test -- tests/unit/AudioSystem.test.ts"
}

# 运行主函数
main "$@"
