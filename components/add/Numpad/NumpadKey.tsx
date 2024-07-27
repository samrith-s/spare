import { useCallback, useContext } from 'react';

import { Pressable } from '~/ui/Pressable';
import { Text } from '~/ui/Text';
import { cn } from '~/utilities/cn';

import { NumpadDisabledContext, NumpadSetterContext } from './numpad-context';

export type NumpadKeyProps = {
  value: string;
};

export function NumpadKey({ value }: NumpadKeyProps) {
  const setValue = useContext(NumpadSetterContext);
  const { keyDisabled } = useContext(NumpadDisabledContext);

  const handlePress = useCallback(() => {
    setValue(value);
  }, [value, setValue]);

  return (
    <Pressable
      disabled={keyDisabled}
      className={cn(
        'w-full',
        'shrink',
        'py-3',
        'items-center',
        'rounded-xl',
        'bg-secondary'
      )}
      onPress={handlePress}
    >
      <Text className={cn('text-3xl')}>{value}</Text>
    </Pressable>
  );
}
