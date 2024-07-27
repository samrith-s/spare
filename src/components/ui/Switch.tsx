import React, { useCallback, useEffect, useRef, useState } from 'react';

import { Pressable, type LayoutChangeEvent } from 'react-native';

import Animated, {
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

import { cn } from '~/utilities/cn';

export type SwitchProps = (
  | {
      defaultChecked: boolean;
      checked?: never;
    }
  | {
      defaultChecked?: never;
      checked: boolean;
    }
) & {
  onCheckChange?(checked: boolean): void;
};

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

export function Switch({
  defaultChecked,
  checked,
  onCheckChange,
}: SwitchProps) {
  const [layout, setLayout] = useState({ width: 0, height: 0 });
  const [isChecked, setIsChecked] = useState(
    defaultChecked ?? checked ?? false
  );
  const check = useSharedValue(isChecked ? 1 : 0);
  const mounted = useRef(false);

  const handleLayout = useCallback((event: LayoutChangeEvent) => {
    mounted.current = true;
    const { width, height } = event.nativeEvent.layout;
    setLayout({ width, height });
  }, []);

  const handlePress = useCallback(() => {
    setIsChecked((prev) => {
      check.value = withTiming(prev ? 0 : 1, { duration: 250 });
      return !prev;
    });
  }, [check]);

  const backgroundStyle = useAnimatedStyle(() => ({
    backgroundColor: interpolateColor(
      check.value,
      [0, 1],
      ['#c3c3c3', '#039F34']
    ),
  }));

  const transformStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: check.value * (layout.width / 2) }],
  }));

  useEffect(() => {
    onCheckChange?.(isChecked);
  }, [onCheckChange, isChecked, check]);

  return (
    <AnimatedPressable
      onLayout={handleLayout}
      className={cn('h-6', 'w-12', 'rounded-full')}
      onPress={handlePress}
      style={backgroundStyle}
    >
      <Animated.View
        style={[transformStyle]}
        className={cn('bg-white', 'h-6', 'w-6', 'rounded-full')}
      />
    </AnimatedPressable>
  );
}
