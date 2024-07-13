import React from 'react';

import { Text } from '~/components/ui/Text';
import { cn } from '~/utilities/cn';

export type SettingsTitleProps = {
  children: React.ReactNode;
};

export function SettingsTitle({ children }: SettingsTitleProps) {
  return <Text className={cn('px-3', 'text-lg')}>{children}</Text>;
}
