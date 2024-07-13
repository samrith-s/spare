import { Box } from '~/components/ui/Box';

import { cn } from '~/utilities/cn';

export type NumpadRowProps = {
  children: React.ReactNode;
};

export function NumpadRow({ children }: NumpadRowProps) {
  return (
    <Box className={cn('flex-row', 'gap-4', 'items-center', 'justify-center')}>
      {children}
    </Box>
  );
}
