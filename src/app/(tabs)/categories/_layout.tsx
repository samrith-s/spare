import React from 'react';

import { Keyboard } from 'react-native';

import { Stack } from 'expo-router';

import { headerRenderer } from '~/components/Header';

export default function StackLayout() {
  return (
    <Stack
      screenOptions={{
        header: headerRenderer,
        headerBackVisible: false,
      }}
    >
      <Stack.Screen
        name='index'
        options={{
          title: 'Categories',
        }}
      />
      <Stack.Screen
        name='add'
        options={{
          title: 'Add category',
          presentation: 'modal',
        }}
        listeners={{
          transitionStart: Keyboard.dismiss,
        }}
      />
      <Stack.Screen
        name='edit'
        options={{
          title: 'Edit category',
          presentation: 'modal',
        }}
        listeners={{
          transitionStart: Keyboard.dismiss,
        }}
      />
    </Stack>
  );
}
