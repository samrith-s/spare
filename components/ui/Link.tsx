import { Link as ExpoLink } from 'expo-router';

import { type LinkProps } from 'expo-router/build/link/Link';

import { Text } from './Text';

export function Link({ children, href, ...rest }: LinkProps) {
  return (
    <ExpoLink
      href={href}
      {...rest}
    >
      <Text>{children}</Text>
    </ExpoLink>
  );
}
