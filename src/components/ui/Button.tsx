import React from 'react';

import { type PressableProps } from 'react-native';

import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '~/utilities/cn';

import { Pressable } from './Pressable';
import { Text } from './Text';

export type ButtonProps = Omit<PressableProps, 'children'> &
  (
    | {
        label: string;
        children?: never;
      }
    | {
        label?: never;
        children: React.ReactNode;
      }
  ) &
  VariantProps<typeof buttonVariants>;

const buttonVariants = cva(['self-stretch', 'rounded-xl', 'px-4', 'py-3'], {
  variants: {
    type: {
      primary: 'bg-foreground',
      muted: 'bg-muted',
      secondary: 'bg-secondary',
    },
  },
  defaultVariants: {
    type: 'primary',
  },
});

const buttonTextVariants = cva('text-foreground', {
  variants: {
    type: {
      primary: 'text-background',
      muted: '',
      secondary: '',
    },
  },
  defaultVariants: {
    type: 'primary',
  },
});

export function Button({
  label,
  children,
  className,
  type,
  ...rest
}: ButtonProps) {
  const hasChildren = !!children;
  return (
    <Pressable
      className={cn(
        'flex-1',
        'shrink-1',
        'items-center',
        'justify-center',
        'flex-row',
        'gap-2',
        buttonVariants({ type, className })
      )}
      {...rest}
    >
      {hasChildren ? (
        <>{children}</>
      ) : (
        <Text className={cn(buttonTextVariants({ type }), 'text-md')}>
          {label}
        </Text>
      )}
    </Pressable>
  );
}
