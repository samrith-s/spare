import React from 'react';

import { Tabs } from 'expo-router';

import { headerRenderer } from '~/components/Header';
import { TAB_BAR_CONFIG, TabBar } from '~/components/TabBar';
import { Screen } from '~/ui/Box';

export default function TabLayout() {
  return (
    <Screen>
      <Tabs
        screenOptions={{
          lazy: true,
          headerShown: false,
        }}
        tabBar={(props) => <TabBar {...props} />}
        initialRouteName={TAB_BAR_CONFIG[0].route}
      >
        {TAB_BAR_CONFIG.map((tab) => (
          <Tabs.Screen
            key={tab.route}
            name={tab.route}
            options={{
              headerShown: tab.header || false,
              header: headerRenderer,
              title: tab.title,
            }}
          />
        ))}
      </Tabs>
    </Screen>
  );
}
