import { type ListRenderItemInfo } from 'react-native';

import { FlatList } from 'react-native-gesture-handler';

import { Screen } from '~/ui/Box';
import { Text } from '~/ui/Text';

const DATA = Array.from({ length: 100 });

function renderItem({ item, index }: ListRenderItemInfo<any>) {
  return <Text key={item}>Hello world {index + 1}!</Text>;
}

export default function HomeScreen() {
  return (
    <Screen>
      <FlatList
        data={DATA}
        renderItem={renderItem}
      />
    </Screen>
  );
}
