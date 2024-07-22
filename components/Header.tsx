import React from 'react';

import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { useNavigation } from 'expo-router';

import { cn } from '~/utilities/cn';

import { BackIcon } from './BackIcon';
import { Box } from './ui/Box';
import { Bold } from './ui/Text';

export type TabHeaderProps = {
  options: {
    title?: string;
    headerBackVisible?: boolean;
  };
  route: {
    name: string;
  };
};

export function Header({ options, route }: TabHeaderProps) {
  const navigation = useNavigation();
  const { top } = useSafeAreaInsets();

  const name = options.title || route.name;

  const canGoBack = options.headerBackVisible && navigation.canGoBack();

  return (
    <Box
      className={cn(
        'flex-row',
        'items-center',
        'justify-start',
        'bg-background',
        'py-4',
        'px-4',
        'gap-4'
      )}
      style={{
        paddingTop: top + 12,
      }}
    >
      {canGoBack && <BackIcon />}
      <Bold className={cn('text-3xl')}>{name}</Bold>
    </Box>
  );
}

export function headerRenderer(props: TabHeaderProps) {
  return <Header {...props} />;
}
