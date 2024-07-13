import React, { useCallback } from 'react';

import { useNavigation } from 'expo-router';

import Icon from '@expo/vector-icons/Feather';

import { cn } from '~/utilities/cn';

import { Pressable } from './ui/Pressable';

export type BackButtonProps = {
  size?: number;
};

export function BackIcon({ size = 16 }: BackButtonProps) {
  const buttonSize = size * 1.5;

  const navigation = useNavigation();

  const handlePress = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  return (
    <Pressable
      onPress={handlePress}
      className={cn(
        'items-center',
        'justify-center',
        'bg-secondary',
        'shrink-0',
        'rounded-lg'
      )}
      style={{
        width: buttonSize,
        height: buttonSize,
      }}
    >
      <Icon
        name='arrow-left'
        className='text-foreground'
        size={size}
      />
    </Pressable>
  );
}
