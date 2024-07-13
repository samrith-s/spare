import React, { useContext, useEffect } from 'react';

import {
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

import { IconCheckFill } from '~/assets/icons/System/CheckFill';

import { Icon } from '~/components/ui/Icon';
import {
  PRESSABLE_DISABLED_ANIMATION_CONFIG,
  Pressable,
} from '~/components/ui/Pressable';

import { useColor } from '~/hooks/useColor';
import { cn } from '~/utilities/cn';

import { NumpadDisabledContext } from './numpad-context';

export function NumpadSave() {
  const { saveDisabled } = useContext(NumpadDisabledContext);
  const background = useSharedValue(saveDisabled ? 0 : 1);

  const enabled = useColor('success');
  const disabled = useColor('secondary');

  const backgroundColor = useAnimatedStyle(() => ({
    backgroundColor: interpolateColor(
      background.value,
      [0, 1],
      [disabled, enabled]
    ),
  }));

  useEffect(() => {
    background.value = withTiming(
      saveDisabled ? 0 : 1,
      PRESSABLE_DISABLED_ANIMATION_CONFIG
    );
  }, [background, saveDisabled]);

  return (
    <Pressable
      className={cn(
        'w-full',
        'self-stretch',
        'shrink',
        'items-center',
        'justify-center',
        'rounded-xl'
      )}
      style={backgroundColor}
      disabled={saveDisabled}
    >
      <Icon
        icon={IconCheckFill}
        size={32}
        color='foreground'
      />
    </Pressable>
  );
}
