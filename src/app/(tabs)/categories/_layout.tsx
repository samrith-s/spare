import React from 'react';

import { Stack } from 'expo-router';

import { headerRenderer } from '~/components/Header';

export default function StackLayout() {
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
          title: 'Categories',
        }}
      />
      <Stack.Screen
        name='add'
        options={{
          title: 'Add category',
        }}
      />
      <Stack.Screen
        name='edit'
        options={{
          title: 'Edit category',
        }}
      />
    </Stack>
  );
}
