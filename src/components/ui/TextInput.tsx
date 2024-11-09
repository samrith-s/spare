import React from 'react';

import {
  Keyboard,
  TextInput as RNTextInput,
  type TextInputProps as RNTextInputProps,
} from 'react-native';

import { cn } from '~/utilities/cn';

export type TextInputProps = RNTextInputProps;

export function TextInput({
  className,
  blurOnSubmit = true,
  clearButtonMode = 'always',
  ...rest
}: TextInputProps) {
  return (
    <RNTextInput
      onSubmitEditing={blurOnSubmit ? Keyboard.dismiss : undefined}
      blurOnSubmit={blurOnSubmit}
      clearButtonMode={clearButtonMode}
      className={cn(
        'p-2',
        'rounded-lg',
        'border',
        'border-secondary',
        'focus:border-muted',
        'text-foreground',
        className
      )}
      {...rest}
    />
  );
}
