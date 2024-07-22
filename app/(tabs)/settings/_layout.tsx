import React from 'react';

import { Stack } from 'expo-router';

import { headerRenderer } from '~/components/Header';

export default function SettingsLayout() {
  return (
    <Stack
      screenOptions={{
        header: headerRenderer,
        headerBackVisible: true,
      }}
    >
      <Stack.Screen
        name='index'
        options={{
          headerBackVisible: false,
          title: 'Settings',
        }}
      />
      <Stack.Screen
        name='currency'
        options={{
          title: 'Currency',
        }}
      />
    </Stack>
  );
}
