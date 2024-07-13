import React from 'react';

import { Text as RNText, type TextProps as RNTextProps } from 'react-native';

import { type VariantProps, cva } from 'class-variance-authority';

import { cn } from '~/utilities/cn';

const textVariants = cva(['text-foreground'], {
  variants: {
    size: {
      xs: 'text-xs',
      sm: 'text-base',
      body: 'text-lg',
      subheading: ['text-xl', 'text-muted'],
      heading: ['text-2xl'],
    },
  },
  defaultVariants: {
    size: 'body',
  },
});

export type TextProps = RNTextProps & VariantProps<typeof textVariants>;

export function Text({ children, size, className, style, ...rest }: TextProps) {
  return (
    <RNText
      {...rest}
      className={cn('text-foreground', textVariants({ size }), className)}
      style={[
        {
          fontFamily: 'Inter_400Regular',
        },
        style,
      ]}
      {...rest}
    >
      {children}
    </RNText>
  );
}

export function Strong({ style, children, ...rest }: TextProps) {
  return (
    <Text
      {...rest}
      style={[
        {
          fontFamily: 'Inter_600SemiBold',
        },
        style,
      ]}
    >
      {children}
    </Text>
  );
}

export function Bold({ style, children, ...rest }: TextProps) {
  return (
    <Text
      {...rest}
      style={[
        {
          fontFamily: 'Inter_700Bold',
        },
        style,
      ]}
    >
      {children}
    </Text>
  );
}
