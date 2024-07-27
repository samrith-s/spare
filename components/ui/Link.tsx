import {
  Link as ExpoLink,
  type LinkProps as ExpoLinkProps,
  type Href,
} from 'expo-router';

import { Text } from './Text';

export type LinkProps = ExpoLinkProps<Href>;

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
