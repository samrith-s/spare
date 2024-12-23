import React, { useState } from 'react';

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
    opacity: interpolate(progress.value, [0, -80], [0, 1]),
  }));

  return (
    <Pressable
      className={cn(
        'bg-destructive',
        'items-end',
        'justify-center',
        'px-4',
        'rounded-lg'
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
  const [pressDisabled, setPressDisabled] = useState(false);

  return (
    <Screen className={cn('gap-4')}>
      <TextInput
        autoFocus={false}
        placeholder='Search'
        className={cn('mx-4')}
      />
      <Screen className={cn('px-4', 'gap-2')}>
        {CATEGORIES.map((category) => (
          <Box
            className={cn('rounded-lg', 'overflow-hidden')}
            key={category.id}
          >
            <Swipeable
              overshootLeft={false}
              overshootRight={false}
              renderRightActions={(_, drag) => {
                return <DeleteAction progress={drag} />;
              }}
              onBegan={() => setPressDisabled(true)}
              onEnded={() => setPressDisabled(false)}
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
                  'bg-secondary',
                  'rounded-lg'
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
                disabled={pressDisabled}
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
