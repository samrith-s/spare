import React, { forwardRef } from 'react';

import {
  type Text as RNText,
  type TextProps as RNTextProps,
} from 'react-native';

import Animated, { type AnimatedProps } from 'react-native-reanimated';

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

export type TextProps = AnimatedProps<RNTextProps> &
  VariantProps<typeof textVariants>;

export const Text = forwardRef<RNText, TextProps>(
  ({ children, size, className, style, ...rest }, ref) => {
    return (
      <Animated.Text
        ref={ref}
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
      </Animated.Text>
    );
  }
);
Text.displayName = 'Text';

export const Strong = forwardRef<RNText, TextProps>(
  ({ style, children, ...rest }, ref) => {
    return (
      <Text
        ref={ref}
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
);
Strong.displayName = 'Strong';

export const Bold = forwardRef<RNText, TextProps>(
  ({ style, children, ...rest }, ref) => {
    return (
      <Text
        ref={ref}
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
);
Bold.displayName = 'Bold';
