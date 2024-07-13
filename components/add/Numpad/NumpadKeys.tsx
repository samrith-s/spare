import { type LayoutChangeEvent } from 'react-native';

import { Box } from '~/components/ui/Box';

import { cn } from '~/utilities/cn';

export type NumpadKeysProps = {
  children: React.ReactNode;
  onLayout?(event: LayoutChangeEvent): void;
};

export function NumpadKeys({ children, onLayout }: NumpadKeysProps) {
  return (
    <Box
      className={cn(
        'w-full',
        'items-center',
        'px-4',
        'gap-4',
        'justify-center',
        'shrink-0'
      )}
      onLayout={onLayout}
    >
      {children}
    </Box>
  );
}
