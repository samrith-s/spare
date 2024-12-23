import { useCallback, useMemo, useState } from 'react';

import { KeyboardStickyView } from 'react-native-keyboard-controller';

import EmojiPicker, { type EmojiType } from 'rn-emoji-keyboard';

import {
  type KeyboardProps,
  type Theme,
} from 'rn-emoji-keyboard/lib/typescript/contexts/KeyboardContext';

import { EMOJIS } from '~/data/emojis';
import { useColor } from '~/hooks/useColor';
import { Box, Screen } from '~/ui/Box';
import { Button } from '~/ui/Button';
import { Pressable } from '~/ui/Pressable';
import { Text } from '~/ui/Text';
import { TextInput } from '~/ui/TextInput';
import { cn } from '~/utilities/cn';

export type AddOrEditCategoryProps = {
  name?: string;
  emoji?: string;
};

export function AddOrEditCategory({
  emoji: emojiProp = '😎',
  name: nameProp = '',
}: AddOrEditCategoryProps) {
  const emojiObject = EMOJIS.find(
    (o) => o.emoji === emojiProp
  ) as unknown as EmojiType;

  const [emoji, setEmoji] = useState(emojiObject);
  const [name, setName] = useState(nameProp);
  const [emojiPickerOpen, setEmojiPickerOpen] = useState(false);

  const foreground = useColor('foreground');
  const muted = useColor('muted');
  const background = useColor('background');
  const secondary = useColor('secondary');
  const tint = useColor({
    light: 'tint',
    dark: 'tint-lightest',
  });

  const theme = useMemo<Partial<Theme>>(
    () => ({
      container: background,
      category: {
        container: secondary,
        containerActive: muted,
        icon: tint,
        iconActive: foreground,
      },
      header: foreground,
      search: {
        background: secondary,
        placeholder: muted,
        text: foreground,
        icon: foreground,
      },
      knob: muted,
      emoji: {
        selected: muted,
      },
    }),
    [background, foreground, muted, secondary, tint]
  );

  const selectedEmojis = useMemo(() => [emoji.name], [emoji]);

  const handleEmojiPickerClose = useCallback(() => {
    setEmojiPickerOpen(false);
  }, []);

  return (
    <Screen className={cn('p-4')}>
      <Box className={cn('flex-row', 'gap-4', 'flex-1', 'shrink-1')}>
        <Pressable
          onPress={() => {
            setEmojiPickerOpen(true);
          }}
          className={cn(
            'bg-secondary',
            'rounded-lg',
            'p-2',
            'self-start',
            'pt-2',
            'shrink-0'
          )}
        >
          <Text className={cn('text-2xl')}>{emoji.emoji}</Text>
        </Pressable>
        <TextInput
          multiline
          lineBreakStrategyIOS='hangul-word'
          autoFocus
          placeholder='Category name'
          value={name}
          onChangeText={(text) => {
            const trimmed = text.trim().replace(/\n+/g, '');
            setName(trimmed);
          }}
          className={cn('self-start', 'flex-1', 'text-2xl', 'border-0')}
          blurOnSubmit={false}
        />
      </Box>
      <KeyboardStickyView
        className={cn(
          'flex-row',
          'gap-4',
          'pb-4',
          'items-center',
          'justify-center'
        )}
      >
        <Button label='Submit' />
      </KeyboardStickyView>
      <EmojiPicker
        theme={theme}
        disableSafeArea
        enableSearchBar
        selectedEmojis={selectedEmojis}
        enableSearchAnimation={false}
        enableCategoryChangeAnimation={false}
        expandable={false}
        styles={EMOJI_CONTAINER_STYLES}
        open={emojiPickerOpen}
        onClose={handleEmojiPickerClose}
        onEmojiSelected={setEmoji}
      />
    </Screen>
  );
}

const EMOJI_CONTAINER_STYLES: KeyboardProps['styles'] = {
  emoji: {
    selected: {
      borderRadius: 8,
    },
  },
  container: {
    borderRadius: 8,
  },
  category: {
    container: {
      display: 'none',
    },
  },
  header: {
    fontFamily: 'Inter_400Regular',
  },
  searchBar: {
    container: {
      borderRadius: 8,
      borderWidth: 0,
    },
    text: {
      fontFamily: 'Inter_400Regular',
    },
  },
};
