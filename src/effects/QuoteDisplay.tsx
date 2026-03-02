import React, { useState, useCallback, useEffect, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Animated,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import { Quote, getRandomQuote, getActionQuote } from './Quotes';

const { width, height } = Dimensions.get('window');

interface TypewriterTextProps {
  quote: Quote;
  speed?: number;
  onComplete?: () => void;
  showSubText?: boolean;
}

/**
 * 打字机效果组件
 * 逐字显示台词
 */
export const TypewriterText: React.FC<TypewriterTextProps> = ({
  quote,
  speed = 80,
  onComplete,
  showSubText = true,
}) => {
  const [displayText, setDisplayText] = useState('');
  const [displaySubText, setDisplaySubText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [cursorVisible, setCursorVisible] = useState(true);
  const opacityAnim = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    if (!quote) return;

    setIsTyping(true);
    setDisplayText('');
    setDisplaySubText('');

    let currentIndex = 0;
    const text = quote.text;

    // 主文本打字机效果
    const typeInterval = setInterval(() => {
      if (currentIndex < text.length) {
        setDisplayText(text.slice(0, currentIndex + 1));
        currentIndex++;
      } else {
        clearInterval(typeInterval);
        setIsTyping(false);

        // 主文本完成后，开始副文本
        if (showSubText && quote.subText) {
          setTimeout(() => {
            typeSubText(quote.subText!);
          }, 300);
        } else {
          onComplete?.();
        }
      }
    }, speed);

    return () => {
      clearInterval(typeInterval);
    };
  }, [quote, speed, showSubText, onComplete]);

  // 副文本打字机效果
  const typeSubText = (subText: string) => {
    let currentIndex = 0;

    const subInterval = setInterval(() => {
      if (currentIndex < subText.length) {
        setDisplaySubText(subText.slice(0, currentIndex + 1));
        currentIndex++;
      } else {
        clearInterval(subInterval);
        onComplete?.();
      }
    }, speed * 0.8);
  };

  // 光标闪烁效果
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setCursorVisible((prev) => !prev);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <View style={styles.typewriterContainer}>
      <Text style={styles.mainText}>
        {displayText}
        {isTyping && (
          <Text
            style={[
              styles.cursor,
              { opacity: cursorVisible ? 1 : 0 },
            ]}
          >
            |
          </Text>
        )}
      </Text>
      {displaySubText.length > 0 && (
        <Text style={styles.subText}>{displaySubText}</Text>
      )}
    </View>
  );
};

interface QuoteDisplayProps {
  quote?: Quote;
  visible: boolean;
  onClose?: () => void;
  autoCloseDelay?: number;
  showTypewriter?: boolean;
}

/**
 * 台词显示组件
 * 支持打字机效果和自动关闭
 */
export const QuoteDisplay: React.FC<QuoteDisplayProps> = ({
  quote,
  visible,
  onClose,
  autoCloseDelay = 3000,
  showTypewriter = true,
}) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const scaleAnim = useRef(new Animated.Value(0.8)).current;
  const [autoCloseTimer, setAutoCloseTimer] = useState<NodeJS.Timeout | null>(
    null
  );

  useEffect(() => {
    if (visible) {
      // 淡入动画
      Animated.parallel([
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 300,
          useNativeDriver: true,
        }),
        Animated.spring(scaleAnim, {
          toValue: 1,
          friction: 8,
          tension: 40,
          useNativeDriver: true,
        }),
      ]).start();

      // 自动关闭
      if (autoCloseDelay > 0) {
        const timer = setTimeout(() => {
          handleClose();
        }, autoCloseDelay);
        setAutoCloseTimer(timer);
      }
    } else {
      fadeAnim.setValue(0);
      scaleAnim.setValue(0.8);
    }

    return () => {
      if (autoCloseTimer) {
        clearTimeout(autoCloseTimer);
      }
    };
  }, [visible, autoCloseDelay]);

  const handleClose = () => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 200,
        useNativeDriver: true,
      }),
      Animated.timing(scaleAnim, {
        toValue: 0.8,
        duration: 200,
        useNativeDriver: true,
      }),
    ]).start(() => {
      onClose?.();
    });
  };

  if (!visible || !quote) return null;

  return (
    <Animated.View
      style={[
        styles.quoteOverlay,
        {
          opacity: fadeAnim,
          transform: [{ scale: scaleAnim }],
        },
      ]}
    >
      <TouchableOpacity
        style={styles.quoteContainer}
        onPress={handleClose}
        activeOpacity={0.9}
      >
        <View style={styles.quoteBox}>
          {showTypewriter ? (
            <TypewriterText
              quote={quote}
              onComplete={() => {
                // 打字完成后的回调
              }}
            />
          ) : (
            <>
              <Text style={styles.mainText}>{quote.text}</Text>
              {quote.subText && (
                <Text style={styles.subText}>{quote.subText}</Text>
              )}
            </>
          )}
        </View>

        {/* 分类标签 */}
        <View
          style={[
            styles.categoryTag,
            { backgroundColor: getCategoryColor(quote.category) },
          ]}
        >
          <Text style={styles.categoryText}>
            {getCategoryLabel(quote.category)}
          </Text>
        </View>

        {/* 强度指示 */}
        <View style={styles.intensityIndicator}>
          <Text style={styles.intensityText}>
            {getIntensityEmoji(quote.intensity)}
          </Text>
        </View>
      </TouchableOpacity>
    </Animated.View>
  );
};

/**
 * 随机台词显示组件
 * 自动获取并显示随机台词
 */
export const RandomQuoteDisplay: React.FC<{
  category?: Quote['category'];
  onQuoteChange?: (quote: Quote) => void;
}> = ({ category, onQuoteChange }) => {
  const [currentQuote, setCurrentQuote] = useState<Quote | null>(null);
  const [visible, setVisible] = useState(false);

  const showRandomQuote = useCallback(() => {
    const quote = getRandomQuote(category);
    setCurrentQuote(quote);
    setVisible(true);
    onQuoteChange?.(quote);
  }, [category, onQuoteChange]);

  return (
    <View>
      <TouchableOpacity
        style={styles.randomButton}
        onPress={showRandomQuote}
      >
        <Text style={styles.randomButtonText}>🎲 随机台词</Text>
      </TouchableOpacity>

      <QuoteDisplay
        quote={currentQuote}
        visible={visible}
        onClose={() => setVisible(false)}
        autoCloseDelay={5000}
      />
    </View>
  );
};

// 辅助函数
const getCategoryColor = (category: Quote['category']): string => {
  const colors: Record<Quote['category'], string> = {
    declaration: '#DC143C',
    command: '#8B0000',
    philosophy: '#4B0082',
    dramatic: '#FF8C00',
    funny: '#32CD32',
  };
  return colors[category];
};

const getCategoryLabel = (category: Quote['category']): string => {
  const labels: Record<Quote['category'], string> = {
    declaration: '宣言',
    command: '命令',
    philosophy: '哲学',
    dramatic: '戏剧',
    funny: '搞笑',
  };
  return labels[category];
};

const getIntensityEmoji = (intensity: Quote['intensity']): string => {
  const emojis: Record<Quote['intensity'], string> = {
    low: '😏',
    medium: '😤',
    high: '😈',
  };
  return emojis[intensity];
};

const styles = StyleSheet.create({
  typewriterContainer: {
    alignItems: 'center',
    padding: 20,
  },
  mainText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFD700',
    textAlign: 'center',
    lineHeight: 32,
  },
  subText: {
    fontSize: 16,
    color: '#FFF',
    textAlign: 'center',
    marginTop: 12,
    fontStyle: 'italic',
  },
  cursor: {
    color: '#FFD700',
    fontWeight: 'bold',
  },
  quoteOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
  },
  quoteContainer: {
    width: width * 0.85,
    maxWidth: 400,
    alignItems: 'center',
  },
  quoteBox: {
    backgroundColor: 'rgba(20, 20, 40, 0.95)',
    borderRadius: 20,
    borderWidth: 3,
    borderColor: '#FFD700',
    padding: 25,
    width: '100%',
    shadowColor: '#FFD700',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 20,
    elevation: 20,
  },
  categoryTag: {
    position: 'absolute',
    top: -12,
    left: 20,
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderRadius: 15,
  },
  categoryText: {
    color: '#FFF',
    fontSize: 12,
    fontWeight: 'bold',
  },
  intensityIndicator: {
    position: 'absolute',
    top: -12,
    right: 20,
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#333',
    justifyContent: 'center',
    alignItems: 'center',
  },
  intensityText: {
    fontSize: 16,
  },
  randomButton: {
    backgroundColor: '#4B0082',
    paddingHorizontal: 25,
    paddingVertical: 15,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: '#FFD700',
  },
  randomButtonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default QuoteDisplay;
