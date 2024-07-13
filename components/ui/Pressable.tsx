import React, { forwardRef, memo, useCallback, useEffect } from 'react';

import {
  Pressable as RNPressable,
  type PressableProps,
  type View,
} from 'react-native';

import Animated, {
  Easing,
  type WithTimingConfig,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
  type AnimatedProps,
} from 'react-native-reanimated';

const AnimatedPressable = Animated.createAnimatedComponent(RNPressable);

export const PRESSABLE_ANIMATION_DURATION = 250;

export const PRESSABLE_PRESS_ANIMATION_CONFIG: WithTimingConfig = {
  duration: PRESSABLE_ANIMATION_DURATION,
  easing: Easing.elastic(0.5),
};

export const PRESSABLE_DISABLED_ANIMATION_CONFIG: WithTimingConfig = {
  duration: PRESSABLE_ANIMATION_DURATION,
  easing: Easing.ease,
};

export const Pressable = memo(
  forwardRef<
    View,
    AnimatedProps<Omit<PressableProps, 'onPressIn' | 'onPressOut'>> & {
      disableAnimation?: boolean;
    }
  >(({ style, children, disabled, disableAnimation, ...rest }, ref) => {
    const scale = useSharedValue(0);
    const opacity = useSharedValue(disabled ? 1 : 0);

    const handlePressIn = useCallback(() => {
      if (!disableAnimation) {
        scale.value = withTiming(1, PRESSABLE_PRESS_ANIMATION_CONFIG);
      }
    }, [scale, disableAnimation]);

    const handlePressOut = useCallback(() => {
      if (!disableAnimation) {
        scale.value = withTiming(0, PRESSABLE_PRESS_ANIMATION_CONFIG);
      }
    }, [scale, disableAnimation]);

    const pressStyle = useAnimatedStyle(() => ({
      transform: [{ scale: interpolate(scale.value, [0, 1], [1, 0.97]) }],
    }));

    const disabledStyle = useAnimatedStyle(() => ({
      opacity: interpolate(opacity.value, [0, 1], [1, 0.25]),
    }));

    useEffect(() => {
      if (!disableAnimation) {
        opacity.value = withTiming(
          disabled ? 1 : 0,
          PRESSABLE_DISABLED_ANIMATION_CONFIG
        );
      }
    }, [disableAnimation, disabled, opacity]);

    return (
      <AnimatedPressable
        {...rest}
        style={[pressStyle, disabledStyle, style]}
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
        ref={ref}
      >
        {children}
      </AnimatedPressable>
    );
  })
);
