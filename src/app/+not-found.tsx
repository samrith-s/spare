import { Stack, useNavigation } from 'expo-router';

import { Screen } from '~/ui/Box';
import { Text } from '~/ui/Text';
import { cn } from '~/utilities/cn';

export default function NotFoundScreen() {
  const navigation = useNavigation();

  return (
    <>
      <Stack.Screen
        options={{
          title: 'Oops!',
          animation: 'fade',
          animationTypeForReplace: 'pop',
        }}
      />
      <Screen className={cn('items-center', 'justify-center')}>
        <Text size='heading'>This screen doesn't exist.</Text>
        <Text onPress={() => navigation.navigate('(tabs)' as never)}>
          Go to home screen!
        </Text>
      </Screen>
    </>
  );
}
