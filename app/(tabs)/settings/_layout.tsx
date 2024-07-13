import React from 'react';

import { Stack } from 'expo-router';

import { headerRenderer } from '~/components/Header';

export default function SettingsLayout() {
  return (
    <Stack
      screenOptions={{
        header: headerRenderer,
      }}
    >
      <Stack.Screen
        name='index'
        options={{
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
