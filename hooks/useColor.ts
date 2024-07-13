import { useColorScheme } from 'nativewind';

import { COLORS } from '~/theme';

export type UseColorKey = keyof ColorTheme extends `--${infer T}` ? T : never;

export function useColor(
  key:
    | UseColorKey
    | {
        light: UseColorKey;
        dark: UseColorKey;
      }
) {
  const { colorScheme } = useColorScheme();

  if (typeof key === 'string') {
    return COLORS[colorScheme as keyof typeof COLORS][`--${key}`];
  }

  return COLORS[colorScheme as keyof typeof COLORS][
    `--${key[colorScheme as keyof typeof key]}`
  ];
}
