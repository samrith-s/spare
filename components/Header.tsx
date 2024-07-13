import React from 'react';

import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { cn } from '~/utilities/cn';

import { Box } from './ui/Box';
import { Bold } from './ui/Text';

export type TabHeaderProps = {
  options: {
    title?: string;
  };
  route: {
    name: string;
  };
};

export function TabHeader({ options, route }: TabHeaderProps) {
  const { top } = useSafeAreaInsets();

  const name = options.title || route.name;

  return (
    <Box
      className={cn(
        'flex-row',
        'items-center',
        'justify-start',
        'bg-background',
        'py-4',
        'px-4'
      )}
      style={{
        paddingTop: top,
      }}
    >
      <Bold className={cn('text-3xl')}>{name}</Bold>
    </Box>
  );
}

export function headerRenderer(props: TabHeaderProps) {
  return <TabHeader {...props} />;
}
