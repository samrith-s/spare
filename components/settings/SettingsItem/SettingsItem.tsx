import React from 'react';

import { Link } from 'expo-router';

import { Box } from '~/ui/Box';
import { cn } from '~/utilities/cn';

import { Icon, type IconLike } from '../../ui/Icon';
import { Text } from '../../ui/Text';

export type SettingsItemProps = {
  icon: IconLike;
  label: string;
  children?: React.ReactNode;
  color?: string;
  href?: string;
  className?: string;
};

export function SettingsItem({
  icon,
  children,
  label,
  className,
  color = 'bg-muted',
  href = '',
}: SettingsItemProps) {
  const Container = href ? Link : Box;
  return (
    <Container href={href}>
      <Box
        className={cn(
          'w-full',
          'flex-row',
          'px-4',
          'gap-2',
          'items-center',
          'justify-items-start',
          'py-3',
          'px-5',
          className
        )}
      >
        <Box className={cn(color, 'p-2', 'rounded-lg', 'shrink-0')}>
          <Icon
            color='foreground'
            icon={icon}
            size={14}
          />
        </Box>
        <Text className={cn('flex', 'shrink', 'w-full')}>{label}</Text>
        <Box className={cn('shrink-0')}>{children}</Box>
      </Box>
    </Container>
  );
}
