import React, { useEffect, useRef, useCallback } from 'react';
import {
  View,
  Animated,
  Dimensions,
  StyleSheet,
  Text,
  Easing,
} from 'react-native';
import { Audio } from 'expo-av';

const { width, height } = Dimensions.get('window');

export type FunnyActionType =
  | 'spinJump'
  | 'catMeow'
  | 'handstandWalk'
  | 'dramaticRecite'
  | 'robotDance'
  | 'mimicry'
  | 'ascendToHeaven'
  | 'spinAround';

interface FunnyActionsProps {
  action: FunnyActionType | null;
  onComplete?: () => void;
  targetName?: string; // 用于模仿秀
}

interface ActionConfig {
  duration: number;
  soundFile?: string;
}

const ACTION_CONFIG: Record<FunnyActionType, ActionConfig> = {
  spinJump: { duration: 2000 },
  catMeow: { duration: 2500, soundFile: 'meow.mp3' },
  handstandWalk: { duration: 3000 },
  dramaticRecite: { duration: 4000 },
  robotDance: { duration: 3500 },
  mimicry: { duration: 3000 },
  ascendToHeaven: { duration: 2500 },
  spinAround: { duration: 2000 },
};

export const FunnyActions: React.FC<FunnyActionsProps> = ({
  action,
  onComplete,
  targetName = '对方',
}) => {
  const spinValue = useRef(new Animated.Value(0)).current;
  const jumpValue = useRef(new Animated.Value(0)).current;
  const scaleValue = useRef(new Animated.Value(1)).current;
  const opacityValue = useRef(new Animated.Value(1)).current;
  const translateY = useRef(new Animated.Value(0)).current;
  const translateX = useRef(new Animated.Value(0)).current;
  const catEarOpacity = useRef(new Animated.Value(0)).current;
  const textOpacity = useRef(new Animated.Value(0)).current;
  const robotPose = useRef(new Animated.Value(0)).current;
  const soundRef = useRef<Audio.Sound | null>(null);

  // 播放音效
  const playSound = useCallback(async (soundFile: string) => {
    try {
      const { sound } = await Audio.Sound.createAsync(
        require(`../../assets/sounds/${soundFile}`),
        { volume: 0.7 }
      );
      soundRef.current = sound;
      await sound.playAsync();
    } catch (error) {
      console.log(`Sound ${soundFile} not available`);
    }
  }, []);

  // 1. 旋转跳跃 - 转圈摔倒
  const performSpinJump = useCallback(() => {
    Animated.parallel([
      // 旋转
      Animated.timing(spinValue, {
        toValue: 3,
        duration: 1500,
        easing: Easing.linear,
        useNativeDriver: true,
      }),
      // 跳跃
      Animated.sequence([
        Animated.timing(jumpValue, {
          toValue: -150,
          duration: 400,
          easing: Easing.out(Easing.quad),
          useNativeDriver: true,
        }),
        Animated.timing(jumpValue, {
          toValue: 0,
          duration: 400,
          easing: Easing.in(Easing.quad),
          useNativeDriver: true,
        }),
        // 摔倒
        Animated.timing(spinValue, {
          toValue: 4.25,
          duration: 300,
          easing: Easing.out(Easing.quad),
          useNativeDriver: true,
        }),
      ]),
    ]).start();
  }, [spinValue, jumpValue]);

  // 2. 学猫叫 - 猫耳+喵喵
  const performCatMeow = useCallback(() => {
    playSound('meow.mp3');
    
    Animated.sequence([
      // 显示猫耳
      Animated.timing(catEarOpacity, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }),
      // 喵喵文字
      Animated.timing(textOpacity, {
        toValue: 1,
        duration: 200,
        useNativeDriver: true,
      }),
      // 弹跳效果
      Animated.loop(
        Animated.sequence([
          Animated.timing(scaleValue, {
            toValue: 1.2,
            duration: 200,
            useNativeDriver: true,
          }),
          Animated.timing(scaleValue, {
            toValue: 1,
            duration: 200,
            useNativeDriver: true,
          }),
        ]),
        { iterations: 4 }
      ),
    ]).start();
  }, [catEarOpacity, textOpacity, scaleValue, playSound]);

  // 3. 倒立行走 - 撑地绕圈
  const performHandstandWalk = useCallback(() => {
    Animated.parallel([
      // 倒立旋转
      Animated.timing(spinValue, {
        toValue: 2,
        duration: 2500,
        easing: Easing.linear,
        useNativeDriver: true,
      }),
      // 上下浮动
      Animated.loop(
        Animated.sequence([
          Animated.timing(translateY, {
            toValue: -20,
            duration: 300,
            useNativeDriver: true,
          }),
          Animated.timing(translateY, {
            toValue: 20,
            duration: 300,
            useNativeDriver: true,
          }),
        ]),
        { iterations: 4 }
      ),
    ]).start();
  }, [spinValue, translateY]);

  // 4. 深情朗诵 - 中二台词
  const performDramaticRecite = useCallback(() => {
    Animated.sequence([
      // 文字淡入
      Animated.timing(textOpacity, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }),
      // 背景闪烁
      Animated.loop(
        Animated.sequence([
          Animated.timing(opacityValue, {
            toValue: 0.7,
            duration: 500,
            useNativeDriver: true,
          }),
          Animated.timing(opacityValue, {
            toValue: 1,
            duration: 500,
            useNativeDriver: true,
          }),
        ]),
        { iterations: 3 }
      ),
    ]).start();
  }, [textOpacity, opacityValue]);

  // 5. 机械舞 - Popping
  const performRobotDance = useCallback(() => {
    Animated.loop(
      Animated.sequence([
        // Pose 1
        Animated.timing(robotPose, {
          toValue: 1,
          duration: 200,
          easing: Easing.step0,
          useNativeDriver: true,
        }),
        Animated.delay(300),
        // Pose 2
        Animated.timing(robotPose, {
          toValue: 2,
          duration: 200,
          easing: Easing.step0,
          useNativeDriver: true,
        }),
        Animated.delay(300),
        // Pose 3
        Animated.timing(robotPose, {
          toValue: 3,
          duration: 200,
          easing: Easing.step0,
          useNativeDriver: true,
        }),
        Animated.delay(300),
        // Pose 4
        Animated.timing(robotPose, {
          toValue: 0,
          duration: 200,
          easing: Easing.step0,
          useNativeDriver: true,
        }),
        Animated.delay(300),
      ]),
      { iterations: 2 }
    ).start();
  }, [robotPose]);

  // 6. 模仿秀 - 模仿他人
  const performMimicry = useCallback(() => {
    Animated.sequence([
      // 变形效果
      Animated.timing(scaleValue, {
        toValue: 0.8,
        duration: 500,
        useNativeDriver: true,
      }),
      Animated.parallel([
        Animated.timing(translateX, {
          toValue: 50,
          duration: 400,
          useNativeDriver: true,
        }),
        Animated.timing(textOpacity, {
          toValue: 1,
          duration: 300,
          useNativeDriver: true,
        }),
      ]),
      Animated.timing(translateX, {
        toValue: -50,
        duration: 400,
        useNativeDriver: true,
      }),
      Animated.timing(translateX, {
        toValue: 0,
        duration: 400,
        useNativeDriver: true,
      }),
      Animated.timing(scaleValue, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }),
    ]).start();
  }, [scaleValue, translateX, textOpacity]);

  // 7. 原地升天 - 升天坠落
  const performAscendToHeaven = useCallback(() => {
    Animated.sequence([
      // 升天
      Animated.timing(translateY, {
        toValue: -300,
        duration: 800,
        easing: Easing.out(Easing.quad),
        useNativeDriver: true,
      }),
      // 悬停
      Animated.delay(300),
      // 坠落
      Animated.timing(translateY, {
        toValue: 0,
        duration: 500,
        easing: Easing.bounce,
        useNativeDriver: true,
      }),
      // 震动
      Animated.loop(
        Animated.sequence([
          Animated.timing(translateX, {
            toValue: 5,
            duration: 50,
            useNativeDriver: true,
          }),
          Animated.timing(translateX, {
            toValue: -5,
            duration: 50,
            useNativeDriver: true,
          }),
        ]),
        { iterations: 5 }
      ),
    ]).start();
  }, [translateY, translateX]);

  // 8. 转圈圈 - 抱头转圈
  const performSpinAround = useCallback(() => {
    Animated.parallel([
      // 快速旋转
      Animated.timing(spinValue, {
        toValue: 6,
        duration: 2000,
        easing: Easing.linear,
        useNativeDriver: true,
      }),
      // 头晕摇摆
      Animated.loop(
        Animated.sequence([
          Animated.timing(translateX, {
            toValue: 30,
            duration: 200,
            useNativeDriver: true,
          }),
          Animated.timing(translateX, {
            toValue: -30,
            duration: 200,
            useNativeDriver: true,
          }),
        ]),
        { iterations: 5 }
      ),
    ]).start();
  }, [spinValue, translateX]);

  // 重置所有动画值
  const resetAnimations = useCallback(() => {
    spinValue.setValue(0);
    jumpValue.setValue(0);
    scaleValue.setValue(1);
    opacityValue.setValue(1);
    translateY.setValue(0);
    translateX.setValue(0);
    catEarOpacity.setValue(0);
    textOpacity.setValue(0);
    robotPose.setValue(0);
  }, [spinValue, jumpValue, scaleValue, opacityValue, translateY, translateX, catEarOpacity, textOpacity, robotPose]);

  useEffect(() => {
    if (!action) return;

    resetAnimations();

    const actionMap: Record<FunnyActionType, () => void> = {
      spinJump: performSpinJump,
      catMeow: performCatMeow,
      handstandWalk: performHandstandWalk,
      dramaticRecite: performDramaticRecite,
      robotDance: performRobotDance,
      mimicry: performMimicry,
      ascendToHeaven: performAscendToHeaven,
      spinAround: performSpinAround,
    };

    actionMap[action]?.();

    const duration = ACTION_CONFIG[action].duration;
    const timer = setTimeout(() => {
      resetAnimations();
      onComplete?.();
    }, duration);

    return () => {
      clearTimeout(timer);
      soundRef.current?.unloadAsync();
    };
  }, [action, resetAnimations, onComplete]);

  if (!action) return null;

  // 旋转插值
  const spin = spinValue.interpolate({
    inputRange: [0, 4],
    outputRange: ['0deg', '1440deg'],
  });

  // 机械舞姿势插值
  const robotTransform = robotPose.interpolate({
    inputRange: [0, 1, 2, 3],
    outputRange: [
      'rotate(0deg) scale(1)',
      'rotate(-15deg) scale(1.1)',
      'rotate(15deg) scale(0.9)',
      'rotate(0deg) scale(1.05)',
    ],
  });

  const renderActionContent = () => {
    switch (action) {
      case 'catMeow':
        return (
          <>
            {/* 猫耳朵 */}
            <Animated.View
              style={[
                styles.catEar,
                styles.catEarLeft,
                { opacity: catEarOpacity },
              ]}
            />
            <Animated.View
              style={[
                styles.catEar,
                styles.catEarRight,
                { opacity: catEarOpacity },
              ]}
            />
            {/* 喵喵文字 */}
            <Animated.Text
              style={[
                styles.actionText,
                styles.catText,
                { opacity: textOpacity },
              ]}
            >
              喵～喵～♪
            </Animated.Text>
          </>
        );

      case 'dramaticRecite':
        return (
          <Animated.View style={[styles.reciteContainer, { opacity: textOpacity }]}>
            <Text style={styles.reciteText}>"吾乃...</Text>
            <Text style={styles.reciteText}>被选中之人！"</Text>
            <Text style={styles.reciteSubText}>—— 世界啊，臣服于我！</Text>
          </Animated.View>
        );

      case 'mimicry':
        return (
          <Animated.View style={[styles.mimicryContainer, { opacity: textOpacity }]}>
            <Text style={styles.mimicryText}>模仿 {targetName} 中...</Text>
            <Text style={styles.mimicrySubText}>（动作同步率 99%）</Text>
          </Animated.View>
        );

      case 'robotDance':
        return (
          <Animated.View
            style={[
              styles.robotContainer,
              {
                transform: [{ rotate: robotTransform }],
              },
            ]}
          >
            <View style={styles.robotHead} />
            <View style={styles.robotBody} />
            <View style={styles.robotArmLeft} />
            <View style={styles.robotArmRight} />
          </Animated.View>
        );

      default:
        return null;
    }
  };

  return (
    <View style={StyleSheet.absoluteFill} pointerEvents="none">
      <Animated.View
        style={[
          styles.characterContainer,
          {
            transform: [
              { rotate: spin },
              { translateY: jumpValue },
              { translateX },
              { translateY },
              { scale: scaleValue },
            ],
            opacity: opacityValue,
          },
        ]}
      >
        {/* 角色占位符 - 实际项目中替换为真实角色 */}
        <View style={styles.character}>
          <View style={styles.characterHead} />
          <View style={styles.characterBody} />
        </View>

        {renderActionContent()}
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  characterContainer: {
    position: 'absolute',
    width: 120,
    height: 180,
    top: height * 0.5 - 90,
    left: width * 0.5 - 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  character: {
    width: 80,
    height: 120,
    justifyContent: 'center',
    alignItems: 'center',
  },
  characterHead: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#FFD700',
    borderWidth: 3,
    borderColor: '#333',
  },
  characterBody: {
    width: 60,
    height: 60,
    backgroundColor: '#4169E1',
    borderRadius: 10,
    marginTop: 5,
    borderWidth: 3,
    borderColor: '#333',
  },
  // 猫耳样式
  catEar: {
    position: 'absolute',
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderLeftWidth: 15,
    borderRightWidth: 15,
    borderBottomWidth: 30,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: '#FF69B4',
    top: -20,
  },
  catEarLeft: {
    left: 10,
    transform: [{ rotate: '-20deg' }],
  },
  catEarRight: {
    right: 10,
    transform: [{ rotate: '20deg' }],
  },
  catText: {
    position: 'absolute',
    top: -60,
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FF69B4',
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 20,
  },
  // 朗诵样式
  reciteContainer: {
    position: 'absolute',
    top: -150,
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    padding: 20,
    borderRadius: 15,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#FFD700',
  },
  reciteText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFD700',
    textAlign: 'center',
  },
  reciteSubText: {
    fontSize: 14,
    color: '#FFF',
    marginTop: 10,
    fontStyle: 'italic',
  },
  // 模仿秀样式
  mimicryContainer: {
    position: 'absolute',
    top: -100,
    backgroundColor: 'rgba(138, 43, 226, 0.9)',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  mimicryText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFF',
  },
  mimicrySubText: {
    fontSize: 12,
    color: '#DDD',
    marginTop: 5,
  },
  // 机械舞样式
  robotContainer: {
    width: 80,
    height: 120,
    justifyContent: 'center',
    alignItems: 'center',
  },
  robotHead: {
    width: 40,
    height: 40,
    backgroundColor: '#C0C0C0',
    borderRadius: 5,
    borderWidth: 2,
    borderColor: '#666',
  },
  robotBody: {
    width: 50,
    height: 50,
    backgroundColor: '#A9A9A9',
    borderRadius: 5,
    marginTop: 5,
    borderWidth: 2,
    borderColor: '#666',
  },
  robotArmLeft: {
    position: 'absolute',
    width: 15,
    height: 40,
    backgroundColor: '#C0C0C0',
    left: -10,
    top: 45,
    borderRadius: 3,
    borderWidth: 2,
    borderColor: '#666',
  },
  robotArmRight: {
    position: 'absolute',
    width: 15,
    height: 40,
    backgroundColor: '#C0C0C0',
    right: -10,
    top: 45,
    borderRadius: 3,
    borderWidth: 2,
    borderColor: '#666',
  },
  actionText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default FunnyActions;
