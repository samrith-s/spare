import React from 'react';

import {
  interpolate,
  useAnimatedStyle,
  type SharedValue,
} from 'react-native-reanimated';

import { useRouter } from 'expo-router';

import Swipeable from 'react-native-gesture-handler/ReanimatedSwipeable';

import { CATEGORIES } from '~/data/categories';

import { Box, Screen } from '~/ui/Box';
import { Link } from '~/ui/Link';
import { Pressable } from '~/ui/Pressable';
import { Text } from '~/ui/Text';
import { TextInput } from '~/ui/TextInput';
import { cn } from '~/utilities/cn';

const DeleteAction = ({ progress }: { progress: SharedValue<number> }) => {
  const style = useAnimatedStyle(() => ({
    opacity: interpolate(progress.value, [0, -80], [0.25, 1]),
  }));

  return (
    <Pressable
      className={cn(
        'bg-destructive',
        'items-end',
        'justify-center',
        'px-4',
        'rounded-r-lg'
      )}
      style={[
        {
          width: 80,
        },
        style,
      ]}
    >
      <Text>Delete</Text>
    </Pressable>
  );
};

export default function CategoriesScreen() {
  const router = useRouter();

  return (
    <Screen className={cn('gap-4')}>
      <TextInput
        placeholder='Search'
        className={cn('mx-4')}
      />
      <Screen className={cn('px-4', 'gap-2')}>
        {CATEGORIES.map((category) => (
          <Box className={cn('rounded-lg', 'overflow-hidden')}>
            <Swipeable
              overshootLeft={false}
              overshootRight={false}
              renderRightActions={(_, drag) => {
                return <DeleteAction progress={drag} />;
              }}
              childrenContainerStyle={{
                pointerEvents: 'none',
              }}
            >
              <Pressable
                className={cn(
                  'flex-row',
                  'gap-4',
                  'items-center',
                  'px-4',
                  'py-3',
                  'bg-secondary'
                )}
                onPress={() => {
                  router.navigate({
                    pathname: '/categories/edit',
                    params: {
                      name: category.name,
                      emoji: category.emoji,
                    },
                  });
                }}
              >
                <Text>{category.emoji}</Text>
                <Text>{category.name}</Text>
              </Pressable>
            </Swipeable>
          </Box>
        ))}
        <Link href='/categories/add'>Add</Link>
        <Link href='/categories/edit'>Edit</Link>
      </Screen>
    </Screen>
  );
}
