#!/bin/bash

# =============================================================================
# Code Geass: Liar's Game - 音频文件管理脚本
# =============================================================================
#
# 功能：
#   1. 验证现有音频文件质量
#   2. 从在线资源下载新音频
#   3. 替换项目中的音频文件
#   4. 验证替换后的音频兼容性
#
# 使用方法:
#   chmod +x scripts/audio-manager.sh
#   ./scripts/audio-manager.sh [command] [options]
#
# 命令:
#   verify      - 验证现有音频文件
#   download    - 下载音频文件
#   replace     - 替换音频文件
#   test        - 测试音频播放
#   all         - 执行完整流程
#
# =============================================================================

set -e

# 颜色定义
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
CYAN='\033[0;36m'
NC='\033[0m' # No Color

# 项目路径
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_DIR="$(dirname "$SCRIPT_DIR")"
AUDIO_DIR="$PROJECT_DIR/public/audio"
TEMP_DIR="$PROJECT_DIR/temp/audio"

# 质量标准
MIN_BITRATE=192000      # 192 kbps
MIN_SAMPLE_RATE=44100   # 44.1 kHz
TARGET_FORMAT="mp3"

# 创建临时目录
mkdir -p "$TEMP_DIR"

# =============================================================================
# 工具函数
# =============================================================================

print_header() {
    echo -e "${BLUE}========================================${NC}"
    echo -e "${BLUE}  $1${NC}"
    echo -e "${BLUE}========================================${NC}"
    echo ""
}

print_success() {
    echo -e "${GREEN}✓ $1${NC}"
}

print_error() {
    echo -e "${RED}✗ $1${NC}"
}

print_warning() {
    echo -e "${YELLOW}⚠ $1${NC}"
}

print_info() {
    echo -e "${CYAN}ℹ $1${NC}"
}

# 检查依赖
check_dependencies() {
    local missing=()
    
    if ! command -v ffmpeg &> /dev/null; then
        missing+=("ffmpeg")
    fi
    
    if ! command -v ffprobe &> /dev/null; then
        missing+=("ffprobe")
    fi
    
    if ! command -v curl &> /dev/null; then
        missing+=("curl")
    fi
    
    if [ ${#missing[@]} -ne 0 ]; then
        print_error "缺少以下依赖工具:"
        for tool in "${missing[@]}"; do
            echo "  - $tool"
        done
        echo ""
        print_info "请安装这些工具:"
        echo "  macOS: brew install ffmpeg curl"
        echo "  Ubuntu: sudo apt-get install ffmpeg curl"
        exit 1
    fi
    
    print_success "所有依赖工具已安装"
}

# 获取音频文件信息
get_audio_info() {
    local file="$1"
    
    if [ ! -f "$file" ]; then
        echo "FILE_NOT_FOUND"
        return 1
    fi
    
    local format=$(ffprobe -v quiet -print_format json -show_streams "$file" 2>/dev/null)
    echo "$format"
}

# 验证音频质量
verify_audio_quality() {
    local file="$1"
    local filename=$(basename "$file")
    
    print_info "检查: $filename"
    
    if [ ! -f "$file" ]; then
        print_error "文件不存在: $file"
        return 1
    fi
    
    # 获取音频信息
    local info=$(get_audio_info "$file")
    
    if [ "$info" = "FILE_NOT_FOUND" ]; then
        print_error "无法读取文件信息"
        return 1
    fi
    
    # 提取关键信息
    local codec=$(echo "$info" | grep -o '"codec_name": "[^"]*"' | head -1 | cut -d'"' -f4)
    local bitrate=$(echo "$info" | grep -o '"bit_rate": "[^"]*"' | head -1 | cut -d'"' -f4)
    local sample_rate=$(echo "$info" | grep -o '"sample_rate": "[^"]*"' | head -1 | cut -d'"' -f4)
    local channels=$(echo "$info" | grep -o '"channels": [0-9]*' | head -1 | grep -o '[0-9]*')
    
    # 转换比特率为数字
    local bitrate_num=${bitrate:-0}
    
    # 验证格式
    if [[ "$codec" != "mp3" ]]; then
        print_warning "格式非MP3: $codec"
    else
        print_success "格式: MP3"
    fi
    
    # 验证比特率
    if [ "$bitrate_num" -lt "$MIN_BITRATE" ]; then
        print_warning "比特率较低: $((bitrate_num/1000)) kbps (建议 ≥192 kbps)"
    else
        print_success "比特率: $((bitrate_num/1000)) kbps"
    fi
    
    # 验证采样率
    if [ "$sample_rate" -lt "$MIN_SAMPLE_RATE" ]; then
        print_warning "采样率较低: $sample_rate Hz (建议 ≥44.1 kHz)"
    else
        print_success "采样率: $sample_rate Hz"
    fi
    
    # 验证声道
    if [ "$channels" -eq 2 ]; then
        print_success "声道: 立体声"
    elif [ "$channels" -eq 1 ]; then
        print_info "声道: 单声道"
    else
        print_info "声道: $channels 声道"
    fi
    
    return 0
}

# =============================================================================
# 验证命令
# =============================================================================

cmd_verify() {
    print_header "音频文件质量验证"
    
    if [ ! -d "$AUDIO_DIR" ]; then
        print_error "音频目录不存在: $AUDIO_DIR"
        exit 1
    fi
    
    local total=0
    local passed=0
    local failed=0
    
    echo "扫描目录: $AUDIO_DIR"
    echo ""
    
    for file in "$AUDIO_DIR"/*.mp3; do
        if [ -f "$file" ]; then
            total=$((total + 1))
            if verify_audio_quality "$file"; then
                passed=$((passed + 1))
            else
                failed=$((failed + 1))
            fi
            echo ""
        fi
    done
    
    print_header "验证结果"
    echo "总计: $total 个文件"
    print_success "通过: $passed 个"
    if [ $failed -gt 0 ]; then
        print_error "失败: $failed 个"
    fi
}

# =============================================================================
# 下载命令
# =============================================================================

cmd_download() {
    print_header "音频文件下载"
    
    print_info "创建临时下载目录: $TEMP_DIR"
    mkdir -p "$TEMP_DIR"
    
    # 音频资源清单
    declare -A AUDIO_RESOURCES
    
    # Mixkit 资源 (免费商用)
    AUDIO_RESOURCES["bgm-menu"]='https://assets.mixkit.co/music/preview/mixkit-epic-orchestra-689.mp3'
    AUDIO_RESOURCES["bgm-game"]='https://assets.mixkit.co/music/preview/mixkit-intense-puzzle-game-1122.mp3'
    AUDIO_RESOURCES["bgm-victory"]='https://assets.mixkit.co/music/preview/mixkit-winning-chimes-2015.mp3'
    AUDIO_RESOURCES["bgm-defeat"]='https://assets.mixkit.co/music/preview/mixkit-sad-piano-553.mp3'
    AUDIO_RESOURCES["sfx-challenge"]='https://assets.mixkit.co/sfx/preview/mixkit-dramatic-boom-991.mp3'
    AUDIO_RESOURCES["sfx-button-click"]='https://assets.mixkit.co/sfx/preview/mixkit-modern-technology-select-3124.mp3'
    AUDIO_RESOURCES["sfx-character-select"]='https://assets.mixkit.co/sfx/preview/mixkit-select-click-1109.mp3'
    AUDIO_RESOURCES["sfx-play-card"]='https://assets.mixkit.co/sfx/preview/mixkit-card-flip-1535.mp3'
    AUDIO_RESOURCES["sfx-card-shuffle"]='https://assets.mixkit.co/sfx/preview/mixkit-shuffling-cards-1698.mp3'
    AUDIO_RESOURCES["sfx-geass-activate"]='https://assets.mixkit.co/sfx/preview/mixkit-magical-coin-win-193.mp3'
    AUDIO_RESOURCES["sfx-geass-hit"]='https://assets.mixkit.co/sfx/preview/mixkit-arcade-game-explosion-2759.mp3'
    AUDIO_RESOURCES["sfx-geass-miss"]='https://assets.mixkit.co/sfx/preview/mixkit-falling-into-mud-391.mp3'
    AUDIO_RESOURCES["sfx-turn-start"]='https://assets.mixkit.co/sfx/preview/mixkit-game-notification-wave-alarm-987.mp3'
    AUDIO_RESOURCES["sfx-win"]='https://assets.mixkit.co/sfx/preview/mixkit-achievement-bell-600.mp3'
    AUDIO_RESOURCES["sfx-lose"]='https://assets.mixkit.co/sfx/preview/mixkit-fail-drum-and-bells-571.mp3'
    
    local downloaded=0
    local failed=0
    
    for key in "${!AUDIO_RESOURCES[@]}"; do
        local url="${AUDIO_RESOURCES[$key]}"
        local output="$TEMP_DIR/$key.mp3"
        
        print_info "下载: $key"
        
        if curl -L -o "$output" "$url" --silent --fail --max-time 30; then
            print_success "下载成功: $key"
            downloaded=$((downloaded + 1))
            
            # 验证下载的文件
            if verify_audio_quality "$output" > /dev/null 2>&1; then
                print_success "质量验证通过"
            else
                print_warning "质量验证未通过，但文件可用"
            fi
        else
            print_error "下载失败: $key"
            failed=$((failed + 1))
        fi
        echo ""
    done
    
    print_header "下载结果"
    print_success "成功: $downloaded 个"
    if [ $failed -gt 0 ]; then
        print_error "失败: $failed 个"
    fi
    
    print_info "下载的文件保存在: $TEMP_DIR"
}

# =============================================================================
# 替换命令
# =============================================================================

cmd_replace() {
    print_header "音频文件替换"
    
    if [ ! -d "$TEMP_DIR" ]; then
        print_error "临时目录不存在，请先运行 download 命令"
        exit 1
    fi
    
    # 创建备份
    local backup_dir="$PROJECT_DIR/backups/audio-$(date +%Y%m%d-%H%M%S)"
    print_info "创建备份目录: $backup_dir"
    mkdir -p "$backup_dir"
    
    local replaced=0
    local skipped=0
    
    for file in "$TEMP_DIR"/*.mp3; do
        if [ -f "$file" ]; then
            local filename=$(basename "$file")
            local target="$AUDIO_DIR/$filename"
            
            # 备份原文件
            if [ -f "$target" ]; then
                cp "$target" "$backup_dir/"
                print_info "已备份: $filename"
            fi
            
            # 替换文件
            cp "$file" "$target"
            print_success "已替换: $filename"
            replaced=$((replaced + 1))
        fi
    done
    
    echo ""
    print_header "替换结果"
    print_success "已替换: $replaced 个文件"
    print_info "原文件备份在: $backup_dir"
}

# =============================================================================
# 测试命令
# =============================================================================

cmd_test() {
    print_header "音频播放测试"
    
    print_info "运行音频系统测试..."
    
    cd "$PROJECT_DIR"
    
    if npm test -- tests/unit/AudioSystem.test.ts --silent; then
        print_success "所有音频测试通过"
    else
        print_error "部分测试未通过"
        exit 1
    fi
}

# =============================================================================
# 完整流程命令
# =============================================================================

cmd_all() {
    print_header "完整音频管理流程"
    
    cmd_verify
    echo ""
    
    read -p "是否继续下载新音频? (y/n) " -n 1 -r
    echo ""
    if [[ $REPLY =~ ^[Yy]$ ]]; then
        cmd_download
        echo ""
        
        read -p "是否替换项目中的音频? (y/n) " -n 1 -r
        echo ""
        if [[ $REPLY =~ ^[Yy]$ ]]; then
            cmd_replace
            echo ""
        fi
    fi
    
    cmd_test
}

# =============================================================================
# 帮助信息
# =============================================================================

show_help() {
    echo "Code Geass: Liar's Game - 音频文件管理脚本"
    echo ""
    echo "用法:"
    echo "  ./audio-manager.sh [command]"
    echo ""
    echo "命令:"
    echo "  verify      验证现有音频文件质量"
    echo "  download    从在线资源下载音频文件"
    echo "  replace     替换项目中的音频文件"
    echo "  test        运行音频系统测试"
    echo "  all         执行完整流程"
    echo "  help        显示帮助信息"
    echo ""
    echo "示例:"
    echo "  ./audio-manager.sh verify     # 验证现有音频"
    echo "  ./audio-manager.sh download   # 下载新音频"
    echo "  ./audio-manager.sh all        # 完整流程"
    echo ""
    echo "质量标准:"
    echo "  格式: MP3"
    echo "  比特率: ≥192 kbps"
    echo "  采样率: ≥44.1 kHz"
}

# =============================================================================
# 主程序
# =============================================================================

main() {
    # 检查依赖
    check_dependencies
    
    # 解析命令
    case "${1:-all}" in
        verify)
            cmd_verify
            ;;
        download)
            cmd_download
            ;;
        replace)
            cmd_replace
            ;;
        test)
            cmd_test
            ;;
        all)
            cmd_all
            ;;
        help|--help|-h)
            show_help
            ;;
        *)
            print_error "未知命令: $1"
            show_help
            exit 1
            ;;
    esac
}

# 运行主程序
main "$@"
