import React, { forwardRef, useCallback } from 'react';

import {
  Keyboard,
  type NativeSyntheticEvent,
  TextInput as RNTextInput,
  type TextInputProps as RNTextInputProps,
  type TextInputFocusEventData,
} from 'react-native';

import { cn } from '~/utilities/cn';

export type TextInputProps = RNTextInputProps;

export const TextInput = forwardRef<RNTextInput, TextInputProps>(
  function TextInput(
    {
      className,
      blurOnSubmit = true,
      clearButtonMode = 'always',
      onBlur,
      ...rest
    },
    ref
  ) {
    const handleBlur = useCallback(
      (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
        Keyboard.dismiss();
        onBlur?.(e);
      },
      [onBlur]
    );

    return (
      <RNTextInput
        ref={ref}
        onSubmitEditing={blurOnSubmit ? Keyboard.dismiss : undefined}
        blurOnSubmit={blurOnSubmit}
        clearButtonMode={clearButtonMode}
        onBlur={handleBlur}
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
);
