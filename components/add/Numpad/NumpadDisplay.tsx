import React, { useContext } from 'react';

import { Box } from '~/ui/Box';
import { Text } from '~/ui/Text';

import { useCurrency } from '~/providers/Currency';
import { cn } from '~/utilities/cn';

import { NumpadValueContext } from './numpad-context';

export function NumpadDisplay() {
  const [currency] = useCurrency();
  const value = useContext(NumpadValueContext);

  let formattedValue = value.replace(/^0+/, '').padStart(3, '0');

  if (!formattedValue) {
    formattedValue = '000';
  }

  const length = formattedValue.length;
  const display = `${formattedValue.substring(0, length - 2)}.${formattedValue.substring(length - 2)}`;

  return (
    <Box className={cn('flex-row', 'justify-center', 'items-center', 'gap-1')}>
      <Text className={cn('text-muted', 'text-3xl')}>{currency.symbol}</Text>
      <Text className={cn('text-5xl')}>{display}</Text>
    </Box>
  );
}
