#!/bin/bash

# =============================================================================
# Code Geass: Liar's Game - BGM快速替换脚本
# =============================================================================
#
# 本脚本用于快速替换项目中的BGM文件
# 使用前请先从Incompetech或Free Music Archive下载音频
#
# 使用方法:
#   chmod +x scripts/replace-bgm.sh
#   ./scripts/replace-bgm.sh
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

print_error() {
    echo -e "${RED}✗ $1${NC}"
}

# 创建目录
mkdir -p "$DOWNLOAD_DIR"
mkdir -p "$AUDIO_DIR"

print_header "Code Geass: Liar's Game - BGM替换助手"

# =============================================================================
# 显示推荐列表
# =============================================================================

echo -e "${YELLOW}推荐的BGM匹配方案 (Incompetech):${NC}"
echo ""
echo -e "${CYAN}方案A: 纯Incompetech (推荐)${NC}"
echo "  主菜单:   Oppressive Gloom"
echo "  游戏场景: The Complex"
echo "  胜利:     Heroic Age"
echo "  失败:     Sad Trio"
echo ""
echo -e "${CYAN}方案B: 混合风格${NC}"
echo "  主菜单:   Impact Prelude"
echo "  游戏场景: Unity"
echo "  胜利:     Heroic Age"
echo "  失败:     Evening Melodrama"
echo ""

# =============================================================================
# 检查下载文件
# =============================================================================

print_header "检查下载目录"

if [ ! -d "$DOWNLOAD_DIR" ]; then
    print_error "下载目录不存在: $DOWNLOAD_DIR"
    mkdir -p "$DOWNLOAD_DIR"
    print_info "已创建下载目录"
fi

# 检查文件
files_found=0
for file in bgm-menu.mp3 bgm-game.mp3 bgm-victory.mp3 bgm-defeat.mp3; do
    if [ -f "$DOWNLOAD_DIR/$file" ]; then
        print_success "找到: $file"
        files_found=$((files_found + 1))
    else
        print_warning "缺少: $file"
    fi
done

echo ""
print_info "找到 $files_found/4 个BGM文件"
echo ""

# =============================================================================
# 如果没有文件，显示下载指南
# =============================================================================

if [ $files_found -eq 0 ]; then
    print_header "下载指南"
    
    echo "请将下载的音频文件放入:"
    echo "  $DOWNLOAD_DIR"
    echo ""
    echo "下载步骤:"
    echo ""
    echo -e "${BLUE}1. 访问 Incompetech${NC}"
    echo "   https://incompetech.com/music/royalty-free/music.html"
    echo ""
    echo -e "${BLUE}2. 搜索并下载以下曲目:${NC}"
    echo "   • Oppressive Gloom → 重命名为 bgm-menu.mp3"
    echo "   • The Complex → 重命名为 bgm-game.mp3"
    echo "   • Heroic Age → 重命名为 bgm-victory.mp3"
    echo "   • Sad Trio → 重命名为 bgm-defeat.mp3"
    echo ""
    echo -e "${BLUE}3. 将文件放入 downloads 目录${NC}"
    echo ""
    echo "详细推荐列表: docs/BGM_RECOMMENDATIONS.md"
    echo ""
    exit 0
fi

# =============================================================================
# 确认替换
# =============================================================================

if [ $files_found -lt 4 ]; then
    print_warning "未找全所有BGM文件，是否继续替换现有文件?"
    read -p "继续? (y/n) " -n 1 -r
    echo ""
    if [[ ! $REPLY =~ ^[Yy]$ ]]; then
        echo "已取消"
        exit 0
    fi
fi

# =============================================================================
# 备份现有文件
# =============================================================================

print_header "备份现有BGM"

BACKUP_DIR="$PROJECT_DIR/backups/bgm-$(date +%Y%m%d-%H%M%S)"
mkdir -p "$BACKUP_DIR"

for file in bgm-menu.mp3 bgm-game.mp3 bgm-victory.mp3 bgm-defeat.mp3; do
    if [ -f "$AUDIO_DIR/$file" ]; then
        cp "$AUDIO_DIR/$file" "$BACKUP_DIR/"
        print_success "已备份: $file"
    fi
done

print_info "备份位置: $BACKUP_DIR"

# =============================================================================
# 替换文件
# =============================================================================

print_header "替换BGM文件"

replaced=0
for file in bgm-menu.mp3 bgm-game.mp3 bgm-victory.mp3 bgm-defeat.mp3; do
    if [ -f "$DOWNLOAD_DIR/$file" ]; then
        cp "$DOWNLOAD_DIR/$file" "$AUDIO_DIR/$file"
        print_success "已替换: $file"
        replaced=$((replaced + 1))
    fi
done

echo ""
print_success "成功替换 $replaced 个BGM文件"

# =============================================================================
# 验证
# =============================================================================

print_header "验证"

echo "检查音频文件..."
for file in bgm-menu.mp3 bgm-game.mp3 bgm-victory.mp3 bgm-defeat.mp3; do
    if [ -f "$AUDIO_DIR/$file" ]; then
        size=$(ls -lh "$AUDIO_DIR/$file" | awk '{print $5}')
        print_success "$file ($size)"
    else
        print_error "$file 不存在"
    fi
done

echo ""
print_header "完成"

echo "BGM替换完成!"
echo ""
echo "下一步:"
echo "  1. 运行测试: npm test -- tests/unit/AudioSystem.test.ts"
echo "  2. 启动服务: npm run dev"
echo "  3. 在游戏中测试新BGM"
echo ""
echo "注意: 使用Incompetech音乐需要署名"
echo "      详见: docs/BGM_RECOMMENDATIONS.md"
echo ""
