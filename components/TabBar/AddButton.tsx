import React, { useCallback, useEffect } from 'react';

import type { BottomTabBarProps } from '@react-navigation/bottom-tabs';

import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';

import { IconAddLine } from '~/assets/icons/System/AddLine';
import { Icon } from '~/ui/Icon';
import { cn } from '~/utilities/cn';

import { Box } from '../ui/Box';
import { Pressable } from '../ui/Pressable';

export type AddButtonProps = {
  navigation: BottomTabBarProps['navigation'];
};

export function AddButton({ navigation }: AddButtonProps) {
  const handlePress = useCallback(() => {
    navigation.navigate('add');
  }, [navigation]);

  const value = useSharedValue(0);

  const pulse = useAnimatedStyle(() => ({
    opacity: interpolate(value.value, [0, 1], [0.75, 0]),
    transform: [{ scale: interpolate(value.value, [0, 1], [0.9, 1.5]) }],
  }));

  useEffect(() => {
    value.value = withRepeat(
      withDelay(2000, withTiming(1, { duration: 1500 })),
      -1,
      false
    );
  }, [value]);

  return (
    <Box
      className={cn(
        'relative',
        'justify-self-center',
        'w-auto',
        'h-auto',
        'mx-4',
        'shrink-0'
      )}
    >
      <Animated.View
        className={cn(
          'absolute',
          'top-0',
          'left-0',
          'right-0',
          'bottom-0',
          'rounded-xl',
          'bg-primary'
        )}
        style={pulse}
      />
      <Pressable
        className={cn(
          'bg-primary',
          'px-4',
          'py-1',
          'rounded-xl',
          'items-center',
          'justify-center'
        )}
        onPress={handlePress}
      >
        <Icon
          icon={IconAddLine}
          color='background'
          size={32}
        />
      </Pressable>
    </Box>
  );
}
