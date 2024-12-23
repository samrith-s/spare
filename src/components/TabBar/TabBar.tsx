import type { BottomTabBarProps } from '@react-navigation/bottom-tabs';

import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { TAB_BAR_HEIGHT } from '~/constants/Heights';
import { Box } from '~/ui/Box';
import { cn } from '~/utilities/cn';

import { AddButton } from './AddButton';
import { TAB_BAR_CONFIG } from './TabBar.constants';
import { TabBarItem } from './TabBarItem';

const TAB_LEFT = TAB_BAR_CONFIG.slice(0, TAB_BAR_CONFIG.length / 2);
const TAB_RIGHT = TAB_BAR_CONFIG.slice(TAB_BAR_CONFIG.length / 2);

export function TabBar({ state, navigation }: BottomTabBarProps) {
  const insets = useSafeAreaInsets();

  return (
    <Box
      className={cn(
        'flex-row',
        'pt-2',
        'self-center',
        'items-center',
        'justify-between',
        'px-4',
        'border-t',
        'border-t-tint-lighter'
      )}
      style={{
        height: TAB_BAR_HEIGHT,
        paddingBottom: insets.bottom,
      }}
    >
      {TAB_LEFT.map((route) => (
        <TabBarItem
          key={route.route}
          navigation={navigation}
          state={state}
          route={route}
        />
      ))}

      <AddButton navigation={navigation} />

      {TAB_RIGHT.map((route) => (
        <TabBarItem
          key={route.route}
          navigation={navigation}
          state={state}
          route={route}
        />
      ))}
    </Box>
  );
}

export * from './TabBar.constants';
