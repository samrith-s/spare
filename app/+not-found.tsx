import { Stack } from 'expo-router';

import { Screen } from '~/components/ui/Box';
import { Link } from '~/components/ui/Link';
import { Text } from '~/components/ui/Text';

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: 'Oops!' }} />
      <Screen>
        <Text size='heading'>This screen doesn't exist.</Text>
        <Link href='/'>Go to home screen!</Link>
      </Screen>
    </>
  );
}
