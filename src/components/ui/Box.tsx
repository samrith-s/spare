import React, { forwardRef } from 'react';

import { StyleSheet, type View, type ViewProps } from 'react-native';

import {
  KeyboardAvoidingView as RNKeyboardAvoidingView,
  type KeyboardAvoidingViewProps,
} from 'react-native-keyboard-controller';
import Animated, { type AnimatedProps } from 'react-native-reanimated';

import { useContentInsets } from '~/hooks/useContentInsets';

import { cn } from '~/utilities/cn';

export const Box = forwardRef<View, AnimatedProps<ViewProps>>(
  ({ children, className, ...rest }, ref) => {
    return (
      <Animated.View
        className={cn(className)}
        {...rest}
        ref={ref}
      >
        {children}
      </Animated.View>
    );
  }
);

export const Screen = forwardRef<View, AnimatedProps<ViewProps>>(
  ({ children, className, ...rest }, ref) => {
    return (
      <Box
        className={cn('bg-background', className, 'flex-1')}
        {...rest}
        ref={ref}
      >
        {children}
      </Box>
    );
  }
);

export const KeyboardAvoidingView = forwardRef<
  View,
  KeyboardAvoidingViewProps & {
    enableSafeArea?: boolean;
  }
>(({ children, className, contentContainerStyle, style, ...rest }, ref) => {
  const insets = useContentInsets();

  return (
    <RNKeyboardAvoidingView
      keyboardVerticalOffset={insets.bottom}
      behavior='padding'
      className={cn('flex-1', className)}
      contentContainerStyle={[styles.container, contentContainerStyle]}
      style={[styles.content, style]}
      ref={ref}
      {...rest}
    >
      {children}
    </RNKeyboardAvoidingView>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexShrink: 1,
  },
  content: {
    flex: 1,
    flexShrink: 1,
  },
});
