import React, { forwardRef } from 'react';

import { type ScrollViewProps } from 'react-native';

import {
  type NativeViewGestureHandlerProps,
  type ScrollView as RNScrollView,
} from 'react-native-gesture-handler';
import { KeyboardAwareScrollView } from 'react-native-keyboard-controller';

import { cn } from '~/utilities/cn';

export const ScrollView = forwardRef<
  RNScrollView,
  ScrollViewProps & NativeViewGestureHandlerProps
>(({ children, className, keyboardDismissMode = 'interactive', ...rest }) => {
  return (
    <KeyboardAwareScrollView
      className={cn(className)}
      keyboardDismissMode={keyboardDismissMode}
      {...rest}
    >
      {children}
    </KeyboardAwareScrollView>
  );
});

export type ScrollView = RNScrollView;
