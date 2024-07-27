import React from 'react';

import { Box } from '~/ui/Box';
import { cn } from '~/utilities/cn';

import { SettingsTitle } from './SettingsTitle';

export type SettingsGroupProps = {
  title?: string;
  children: React.ReactNode;
};

export function SettingsGroup({ children, title }: SettingsGroupProps) {
  return (
    <Box className={cn('gap-2', 'mb-4')}>
      {!!title && <SettingsTitle>{title}</SettingsTitle>}

      <Box className={cn('bg-secondary', 'rounded-xl')}>{children}</Box>
    </Box>
  );
}
