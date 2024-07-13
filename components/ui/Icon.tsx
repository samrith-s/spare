import React, { forwardRef } from 'react';

import { type SvgProps } from 'react-native-svg';

import { useColor, type UseColorKey } from '~/hooks/useColor';

import { cn } from '~/utilities/cn';

export type IconLike = React.MemoExoticComponent<
  React.ForwardRefExoticComponent<SvgProps & React.RefAttributes<SVGSVGElement>>
>;

export type IconProps = {
  icon: IconLike;
  size?: number;
  className?: string;
} & (
  | {
      color?: keyof ColorTheme extends `--${infer T}` ? T : never;
    }
  | {
      color?: string;
    }
);

export const Icon = forwardRef<SVGSVGElement, IconProps>(function IconInner(
  { icon: IconComponent, color = 'foreground', size = 16, className },
  ref
) {
  const c = useColor(color as UseColorKey) || color;

  return (
    <IconComponent
      ref={ref}
      color={c}
      className={cn('text-foreground', className)}
      width={size}
      height={size}
    />
  );
});
