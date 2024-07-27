import React from 'react';

import { TextInput as RNTextInput, type TextInputProps } from 'react-native';

import { cn } from '~/utilities/cn';

export function TextInput({ className, ...rest }: TextInputProps) {
  return (
    <RNTextInput
      clearButtonMode='always'
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
