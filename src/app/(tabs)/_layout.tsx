import React from 'react';

import {
  type BottomTabNavigationOptions,
  type BottomTabBarProps,
} from '@react-navigation/bottom-tabs';

import { Tabs } from 'expo-router';

import { headerRenderer } from '~/components/Header';
import { TAB_BAR_CONFIG, TabBar } from '~/components/TabBar';
import { Screen } from '~/ui/Box';

function tabBarRenderer(props: BottomTabBarProps) {
  return <TabBar {...props} />;
}

const SCREEN_OPTIONS: BottomTabNavigationOptions = {
  lazy: true,
  headerShown: true,
  header: headerRenderer,
};

export default function TabLayout() {
  return (
    <Screen>
      <Tabs
        screenOptions={SCREEN_OPTIONS}
        tabBar={tabBarRenderer}
        initialRouteName={TAB_BAR_CONFIG[0].route}
      >
        {TAB_BAR_CONFIG.map((tab) => (
          <Tabs.Screen
            key={tab.route}
            name={tab.route}
            options={{
              headerShown: tab.header,
              title: tab.title,
            }}
          />
        ))}
      </Tabs>
    </Screen>
  );
}
