import React, { forwardRef } from 'react';

import { type View, type ViewProps } from 'react-native';

import Animated, { type AnimatedProps } from 'react-native-reanimated';

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
