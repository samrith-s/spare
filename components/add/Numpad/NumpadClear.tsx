import React, { useCallback, useContext } from 'react';

import { IconDeleteBackFill } from '~/assets/icons/System/DeleteBackFill';
import { Icon } from '~/components/ui/Icon';
import { Pressable } from '~/components/ui/Pressable';

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
