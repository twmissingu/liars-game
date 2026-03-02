import React, { useEffect, useRef, useCallback } from 'react';
import { View, Animated, Dimensions, StyleSheet, Easing } from 'react-native';
import { Audio } from 'expo-av';

const { width, height } = Dimensions.get('window');

interface GeassEffectProps {
  active: boolean;
  onComplete?: () => void;
  intensity?: 'low' | 'medium' | 'high';
}

// 红色鸟纹路径 - 模拟Geass标志
const GEASS_SYMBOL_PATH = `
  M ${width * 0.5} ${height * 0.3}
  Q ${width * 0.3} ${height * 0.35} ${width * 0.25} ${height * 0.5}
  Q ${width * 0.3} ${height * 0.65} ${width * 0.5} ${height * 0.7}
  Q ${width * 0.7} ${height * 0.65} ${width * 0.75} ${height * 0.5}
  Q ${width * 0.7} ${height * 0.35} ${width * 0.5} ${height * 0.3}
  M ${width * 0.5} ${height * 0.4}
  L ${width * 0.5} ${height * 0.6}
  M ${width * 0.4} ${height * 0.45}
  Q ${width * 0.5} ${height * 0.5} ${width * 0.6} ${height * 0.45}
`;

export const GeassEffect: React.FC<GeassEffectProps> = ({
  active,
  onComplete,
  intensity = 'medium',
}) => {
  const shakeAnimation = useRef(new Animated.Value(0)).current;
  const symbolScale = useRef(new Animated.Value(0)).current;
  const symbolOpacity = useRef(new Animated.Value(0)).current;
  const glowOpacity = useRef(new Animated.Value(0)).current;
  const redOverlayOpacity = useRef(new Animated.Value(0)).current;
  const soundRef = useRef<Audio.Sound | null>(null);

  // 播放Geass音效
  const playGeassSound = useCallback(async () => {
    try {
      const { sound } = await Audio.Sound.createAsync(
        require('../../assets/sounds/geass_activate.mp3'),
        { volume: 0.8 }
      );
      soundRef.current = sound;
      await sound.playAsync();
    } catch (error) {
      console.log('Geass sound not available, using fallback');
      // 音效文件不存在时的静默处理
    }
  }, []);

  // 屏幕震动效果
  const startShake = useCallback(() => {
    const intensityMap = {
      low: 3,
      medium: 6,
      high: 10,
    };
    const shakeIntensity = intensityMap[intensity];

    Animated.sequence([
      Animated.timing(shakeAnimation, {
        toValue: shakeIntensity,
        duration: 50,
        useNativeDriver: true,
      }),
      Animated.timing(shakeAnimation, {
        toValue: -shakeIntensity,
        duration: 50,
        useNativeDriver: true,
      }),
      Animated.timing(shakeAnimation, {
        toValue: shakeIntensity,
        duration: 50,
        useNativeDriver: true,
      }),
      Animated.timing(shakeAnimation, {
        toValue: -shakeIntensity,
        duration: 50,
        useNativeDriver: true,
      }),
      Animated.timing(shakeAnimation, {
        toValue: shakeIntensity,
        duration: 50,
        useNativeDriver: true,
      }),
      Animated.timing(shakeAnimation, {
        toValue: 0,
        duration: 50,
        useNativeDriver: true,
      }),
    ]).start();
  }, [intensity, shakeAnimation]);

  // 红色鸟纹蔓延动画
  const startSymbolAnimation = useCallback(() => {
    // 先显示红色覆盖层
    Animated.timing(redOverlayOpacity, {
      toValue: 0.3,
      duration: 200,
      useNativeDriver: true,
    }).start();

    // 鸟纹从中心放大出现
    Animated.parallel([
      Animated.timing(symbolScale, {
        toValue: 1,
        duration: 800,
        easing: Easing.out(Easing.exp),
        useNativeDriver: true,
      }),
      Animated.timing(symbolOpacity, {
        toValue: 1,
        duration: 400,
        useNativeDriver: true,
      }),
      Animated.timing(glowOpacity, {
        toValue: 0.8,
        duration: 600,
        useNativeDriver: true,
      }),
    ]).start();

    // 脉冲发光效果
    Animated.loop(
      Animated.sequence([
        Animated.timing(glowOpacity, {
          toValue: 1,
          duration: 500,
          useNativeDriver: true,
        }),
        Animated.timing(glowOpacity, {
          toValue: 0.6,
          duration: 500,
          useNativeDriver: true,
        }),
      ]),
      { iterations: 3 }
    ).start();
  }, [symbolScale, symbolOpacity, glowOpacity, redOverlayOpacity]);

  // 清理动画
  const cleanupAnimation = useCallback(() => {
    Animated.parallel([
      Animated.timing(symbolOpacity, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
      }),
      Animated.timing(glowOpacity, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
      }),
      Animated.timing(redOverlayOpacity, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
      }),
      Animated.timing(symbolScale, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
      }),
    ]).start(() => {
      onComplete?.();
    });
  }, [symbolOpacity, glowOpacity, redOverlayOpacity, symbolScale, onComplete]);

  useEffect(() => {
    if (active) {
      // 触发Geass特效序列
      playGeassSound();
      startShake();
      startSymbolAnimation();

      // 2.5秒后自动清理
      const timer = setTimeout(() => {
        cleanupAnimation();
      }, 2500);

      return () => {
        clearTimeout(timer);
        soundRef.current?.unloadAsync();
      };
    }
  }, [active, playGeassSound, startShake, startSymbolAnimation, cleanupAnimation]);

  // 震动插值
  const shakeTranslateX = shakeAnimation.interpolate({
    inputRange: [-10, 10],
    outputRange: [-10, 10],
  });

  const shakeTranslateY = shakeAnimation.interpolate({
    inputRange: [-10, 10],
    outputRange: [-5, 5],
  });

  if (!active) return null;

  return (
    <View style={StyleSheet.absoluteFill} pointerEvents="none">
      {/* 红色覆盖层 */}
      <Animated.View
        style={[
          styles.redOverlay,
          { opacity: redOverlayOpacity },
        ]}
      />

      {/* 震动容器 */}
      <Animated.View
        style={[
          StyleSheet.absoluteFill,
          {
            transform: [
              { translateX: shakeTranslateX },
              { translateY: shakeTranslateY },
            ],
          },
        ]}
      >
        {/* 发光背景 */}
        <Animated.View
          style={[
            styles.glowBackground,
            {
              opacity: glowOpacity,
              transform: [{ scale: symbolScale }],
            },
          ]}
        />

        {/* Geass鸟纹符号 */}
        <Animated.View
          style={[
            styles.symbolContainer,
            {
              opacity: symbolOpacity,
              transform: [{ scale: symbolScale }],
            },
          ]}
        >
          {/* 外圈 */}
          <View style={styles.outerRing} />
          
          {/* 内圈鸟纹 */}
          <View style={styles.innerSymbol}>
            <View style={styles.birdHead} />
            <View style={styles.birdBody} />
            <View style={styles.birdWingLeft} />
            <View style={styles.birdWingRight} />
          </View>

          {/* 中心瞳孔 */}
          <View style={styles.centerPupil} />
        </Animated.View>

        {/* 蔓延的红色纹路 */}
        <Animated.View
          style={[
            styles.veinContainer,
            { opacity: symbolOpacity },
          ]}
        >
          {[...Array(8)].map((_, i) => (
            <Animated.View
              key={i}
              style={[
                styles.vein,
                {
                  transform: [
                    { rotate: `${i * 45}deg` },
                    { scale: symbolScale },
                  ],
                },
              ]}
            />
          ))}
        </Animated.View>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  redOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(139, 0, 0, 0.3)',
  },
  glowBackground: {
    position: 'absolute',
    width: 300,
    height: 300,
    borderRadius: 150,
    backgroundColor: 'rgba(220, 20, 60, 0.4)',
    top: height * 0.5 - 150,
    left: width * 0.5 - 150,
    shadowColor: '#DC143C',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.8,
    shadowRadius: 50,
    elevation: 20,
  },
  symbolContainer: {
    position: 'absolute',
    width: 200,
    height: 200,
    top: height * 0.5 - 100,
    left: width * 0.5 - 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  outerRing: {
    position: 'absolute',
    width: 180,
    height: 180,
    borderRadius: 90,
    borderWidth: 4,
    borderColor: '#DC143C',
    shadowColor: '#DC143C',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 20,
    elevation: 10,
  },
  innerSymbol: {
    width: 120,
    height: 120,
    justifyContent: 'center',
    alignItems: 'center',
  },
  birdHead: {
    position: 'absolute',
    width: 30,
    height: 40,
    backgroundColor: '#DC143C',
    borderRadius: 15,
    top: 10,
  },
  birdBody: {
    position: 'absolute',
    width: 20,
    height: 60,
    backgroundColor: '#DC143C',
    borderRadius: 10,
    top: 35,
  },
  birdWingLeft: {
    position: 'absolute',
    width: 50,
    height: 20,
    backgroundColor: '#DC143C',
    borderRadius: 10,
    left: 5,
    top: 40,
    transform: [{ rotate: '-30deg' }],
  },
  birdWingRight: {
    position: 'absolute',
    width: 50,
    height: 20,
    backgroundColor: '#DC143C',
    borderRadius: 10,
    right: 5,
    top: 40,
    transform: [{ rotate: '30deg' }],
  },
  centerPupil: {
    position: 'absolute',
    width: 25,
    height: 25,
    borderRadius: 12.5,
    backgroundColor: '#8B0000',
    borderWidth: 3,
    borderColor: '#FF0000',
  },
  veinContainer: {
    position: 'absolute',
    width: 400,
    height: 400,
    top: height * 0.5 - 200,
    left: width * 0.5 - 200,
    justifyContent: 'center',
    alignItems: 'center',
  },
  vein: {
    position: 'absolute',
    width: 200,
    height: 3,
    backgroundColor: 'rgba(220, 20, 60, 0.6)',
    left: 200,
    top: 200,
    transformOrigin: 'left center',
  },
});

export default GeassEffect;
