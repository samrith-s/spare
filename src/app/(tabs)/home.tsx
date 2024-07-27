import { ScrollView } from 'react-native-gesture-handler';

import { Box, Screen } from '~/ui/Box';
import { Text } from '~/ui/Text';

export default function HomeScreen() {
  return (
    <Screen>
      <ScrollView style={{ flex: 1 }}>
        <Box className={'p-4 bg-destructive'}>
          <Text className='text-destructive-foreground'>Hello world</Text>
        </Box>
        {Array.from({ length: 100 }).map((_, i) => (
          <Text key={i}>Hello world {i + 1}!</Text>
        ))}
      </ScrollView>
    </Screen>
  );
}
