#!/bin/bash

# =============================================================================
# Code Geass: Liar's Game - 音频文件手动下载脚本
# =============================================================================
#
# 由于Mixkit等网站的直接下载链接需要浏览器环境，
# 本脚本提供手动下载指南和文件处理工具
#
# 使用方法:
#   chmod +x scripts/download-audio-manual.sh
#   ./scripts/download-audio-manual.sh
#
# =============================================================================

set -e

# 颜色定义
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
CYAN='\033[0;36m'
NC='\033[0m'

PROJECT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
AUDIO_DIR="$PROJECT_DIR/public/audio"
DOWNLOAD_DIR="$PROJECT_DIR/downloads"

print_header() {
    echo -e "${BLUE}========================================${NC}"
    echo -e "${BLUE}  $1${NC}"
    echo -e "${BLUE}========================================${NC}"
    echo ""
}

print_success() {
    echo -e "${GREEN}✓ $1${NC}"
}

print_info() {
    echo -e "${CYAN}ℹ $1${NC}"
}

print_warning() {
    echo -e "${YELLOW}⚠ $1${NC}"
}

# 创建目录
mkdir -p "$DOWNLOAD_DIR"
mkdir -p "$AUDIO_DIR"

print_header "Code Geass: Liar's Game 音频下载助手"

echo "由于版权保护，音频文件需要手动下载。"
echo "本脚本将指导您完成下载和替换流程。"
echo ""

# =============================================================================
# 第一步: 显示下载指南
# =============================================================================

print_header "第一步: 音频资源下载指南"

echo -e "${YELLOW}请访问以下网站下载音频文件:${NC}"
echo ""

echo -e "${BLUE}1. YouTube Audio Library (推荐)${NC}"
echo "   网址: https://www.youtube.com/audiolibrary/music"
echo "   登录: 需要Google账号"
echo "   许可: YouTube Audio Library License (免费商用)"
echo ""
echo "   搜索关键词:"
echo "   - 主菜单BGM: 'Epic Dramatic' 或 'Orchestral'"
echo "   - 游戏BGM: 'Suspense' 或 'Action'"
echo "   - 胜利BGM: 'Triumphant' 或 'Victory'"
echo "   - 失败BGM: 'Sad' 或 'Melancholic'"
echo ""

echo -e "${BLUE}2. Free Music Archive${NC}"
echo "   网址: https://freemusicarchive.org"
echo "   登录: 可选"
echo "   许可: CC-BY (需署名)"
echo ""
echo "   搜索关键词:"
echo "   - Genre: Classical, Orchestral"
echo "   - Mood: Epic, Dramatic, Dark"
echo ""

echo -e "${BLUE}3. Incompetech${NC}"
echo "   网址: https://incompetech.com/music/royalty-free/music.html"
echo "   作者: Kevin MacLeod"
echo "   许可: CC-BY (需署名)"
echo ""
echo "   推荐曲目:"
echo "   - 'Oppressive Gloom' - 紧张悬疑"
echo "   - 'The Descent' - 史诗战斗"
echo "   - 'Impact Prelude' - 戏剧性事件"
echo ""

echo -e "${BLUE}4. Freesound (音效)${NC}"
echo "   网址: https://freesound.org"
echo "   登录: 需要免费注册"
echo "   许可: CC0 (公共领域)"
echo ""
echo "   搜索关键词:"
echo "   - 'card place' - 卡牌放置"
echo "   - 'button click' - 按钮点击"
echo "   - 'magic spell' - Geass音效"
echo "   - 'sword clash' - 战斗音效"
echo ""

# =============================================================================
# 第二步: 文件命名规范
# =============================================================================

print_header "第二步: 文件命名规范"

echo "下载后，请将文件重命名为以下格式:"
echo ""
echo -e "${CYAN}BGM (背景音乐):${NC}"
echo "  - 主菜单: bgm-menu.mp3"
echo "  - 游戏场景: bgm-game.mp3"
echo "  - 胜利: bgm-victory.mp3"
echo "  - 失败: bgm-defeat.mp3"
echo ""
echo -e "${CYAN}SFX (音效):${NC}"
echo "  - 卡牌放置: sfx-play-card.mp3"
echo "  - 卡牌洗牌: sfx-card-shuffle.mp3"
echo "  - 质疑: sfx-challenge.mp3"
echo "  - 按钮点击: sfx-button-click.mp3"
echo "  - 角色选择: sfx-character-select.mp3"
echo "  - Geass激活: sfx-geass-activate.mp3"
echo "  - Geass命中: sfx-geass-hit.mp3"
echo "  - Geass闪避: sfx-geass-miss.mp3"
echo "  - 回合开始: sfx-turn-start.mp3"
echo "  - 胜利: sfx-win.mp3"
echo "  - 失败: sfx-lose.mp3"
echo ""

# =============================================================================
# 第三步: 音频格式转换
# =============================================================================

print_header "第三步: 音频格式转换"

echo "如果下载的音频不是MP3格式，可以使用ffmpeg转换:"
echo ""
echo "安装ffmpeg:"
echo "  macOS: brew install ffmpeg"
echo "  Ubuntu: sudo apt-get install ffmpeg"
echo ""
echo "转换命令:"
echo "  ffmpeg -i input.wav -codec:a libmp3lame -q:a 2 output.mp3"
echo ""
echo "参数说明:"
echo "  -q:a 2  表示VBR质量，约190-250kbps"
echo ""

# =============================================================================
# 第四步: 文件放置
# =============================================================================

print_header "第四步: 文件放置"

echo "将处理好的音频文件放入项目目录:"
echo ""
echo "  $AUDIO_DIR"
echo ""
echo "当前该目录已有 $(ls -1 "$AUDIO_DIR"/*.mp3 2>/dev/null | wc -l) 个音频文件"
echo ""

# =============================================================================
# 第五步: 验证和测试
# =============================================================================

print_header "第五步: 验证和测试"

echo "放置文件后，运行以下命令验证:"
echo ""
echo "  npm test -- tests/unit/AudioSystem.test.ts"
echo ""
echo "启动开发服务器测试:"
echo ""
echo "  npm run dev"
echo ""

# =============================================================================
# 快速处理已下载的文件
# =============================================================================

print_header "快速处理"

if [ -d "$DOWNLOAD_DIR" ] && [ "$(ls -A "$DOWNLOAD_DIR"/*.mp3 2>/dev/null | wc -l)" -gt 0 ]; then
    echo "检测到下载目录有 $(ls -1 "$DOWNLOAD_DIR"/*.mp3 2>/dev/null | wc -l) 个音频文件"
    echo ""
    read -p "是否将这些文件移动到项目目录? (y/n) " -n 1 -r
    echo ""
    
    if [[ $REPLY =~ ^[Yy]$ ]]; then
        # 备份现有文件
        BACKUP_DIR="$PROJECT_DIR/backups/audio-$(date +%Y%m%d-%H%M%S)"
        mkdir -p "$BACKUP_DIR"
        cp "$AUDIO_DIR"/*.mp3 "$BACKUP_DIR/" 2>/dev/null || true
        print_success "已备份现有音频到: $BACKUP_DIR"
        
        # 移动新文件
        for file in "$DOWNLOAD_DIR"/*.mp3; do
            if [ -f "$file" ]; then
                filename=$(basename "$file")
                mv "$file" "$AUDIO_DIR/$filename"
                print_success "已移动: $filename"
            fi
        done
        
        echo ""
        print_success "音频文件更新完成!"
    fi
else
    echo "下载目录为空，请将下载的音频文件放入:"
    echo "  $DOWNLOAD_DIR"
    echo ""
    echo "然后重新运行此脚本进行快速处理。"
fi

echo ""
print_header "完成"
echo "音频下载和替换指南已完成。"
echo ""
echo "如需帮助，请参考:"
echo "  - 音频整合指南: docs/AUDIO_ASSETS_INTEGRATION_GUIDE.md"
echo "  - 音频质量报告: docs/AUDIO_QUALITY_REPORT.md"
echo ""
