import React, { useCallback, useEffect } from 'react';

import type { BottomTabBarProps } from '@react-navigation/bottom-tabs';

import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

import { Icon } from '~/components/ui/Icon';
import { Pressable } from '~/components/ui/Pressable';
import { cn } from '~/utilities/cn';

import { TAB_BAR_CONFIG } from './TabBar.constants';

export type TabBarItemProps = {
  state: BottomTabBarProps['state'];
  navigation: BottomTabBarProps['navigation'];
  route: (typeof TAB_BAR_CONFIG)[number];
};

export function TabBarItem({ state, route, navigation }: TabBarItemProps) {
  const focused = TAB_BAR_CONFIG[state.index].route === route.route;

  const scale = useSharedValue(focused ? 1 : 0);

  const onPress = useCallback(() => {
    const event = navigation.emit({
      type: 'tabPress',
      target: route.route,
      canPreventDefault: true,
    });

    if (!focused && !event.defaultPrevented) {
      navigation.navigate(route.route);
    }
  }, [navigation, route.route, focused]);

  const onLongPress = useCallback(() => {
    navigation.emit({
      type: 'tabLongPress',
      target: route.route,
    });
  }, [navigation, route.route]);

  useEffect(() => {
    scale.value = withTiming(focused ? 1 : 0, { duration: 200 });
  }, [focused, scale]);

  const style = useAnimatedStyle(() => ({
    opacity: interpolate(scale.value, [0, 1], [0.5, 1]),
    transform: [
      {
        scale: interpolate(scale.value, [0, 1], [1, 1.1]),
      },
    ],
  }));

  return (
    <Pressable
      key={route.route}
      accessibilityRole='button'
      accessibilityState={focused ? { selected: true } : {}}
      testID={`tab-bar-${route.route}`}
      onPress={onPress}
      onLongPress={onLongPress}
      className={cn('shrink-1', 'px-7', 'items-center', 'justify-center')}
    >
      <Animated.View style={style}>
        <Icon
          icon={focused ? route.icon.focused : route.icon.unfocused}
          size={24}
        />
      </Animated.View>
    </Pressable>
  );
}
