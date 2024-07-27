import React, { useCallback, useContext } from 'react';

import { IconDeleteBackFill } from '~/icons/System/DeleteBackFill';
import { Icon } from '~/ui/Icon';
import { Pressable } from '~/ui/Pressable';

import { cn } from '~/utilities/cn';

import { NumpadSetterContext } from './numpad-context';

export function NumpadClear() {
  const setValue = useContext(NumpadSetterContext);

  const handlePress = useCallback(() => {
    setValue('');
  }, [setValue]);

  return (
    <Pressable
      onPress={handlePress}
      className={cn(
        'w-full',
        'self-stretch',
        'shrink',
        'items-center',
        'justify-center',
        'rounded-xl',
        'bg-secondary'
      )}
    >
      <Icon
        icon={IconDeleteBackFill}
        color='foreground'
        size={32}
      />
    </Pressable>
  );
}
