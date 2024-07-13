import React, { useContext } from 'react';

import { Box } from '~/components/ui/Box';
import { Text } from '~/components/ui/Text';

import { cn } from '~/utilities/cn';

import { NumpadValueContext } from './numpad-context';

export function NumpadDisplay() {
  const value = useContext(NumpadValueContext);

  let formattedValue = value.replace(/^0+/, '').padStart(3, '0');

  if (!formattedValue) {
    formattedValue = '000';
  }

  const length = formattedValue.length;
  const display = `${formattedValue.substring(0, length - 2)}.${formattedValue.substring(length - 2)}`;

  return (
    <Box className={cn('flex-row', 'justify-center', 'items-center', 'gap-1')}>
      <Text className={cn('text-muted', 'text-3xl')}>$</Text>
      <Text className={cn('text-5xl')}>{display}</Text>
    </Box>
  );
}
