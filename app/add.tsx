import React, { useState } from 'react';

import { useSafeAreaInsets } from 'react-native-safe-area-context';

import dayjs from 'dayjs';

import { IconCalendar2Fill } from '~/assets/icons/Business/Calendar2Fill';

import { IconListRadio } from '~/assets/icons/Editor/ListRadio';
import { Datepicker } from '~/components/add/Datepicker';
import { Numpad } from '~/components/add/Numpad';

import { Box, Screen } from '~/ui/Box';
import { Icon } from '~/ui/Icon';
import { Pressable } from '~/ui/Pressable';
import { Bold, Text } from '~/ui/Text';
import { cn } from '~/utilities/cn';

export default function AddScreen() {
  const insets = useSafeAreaInsets();
  const [showDatepicker, setShowDatepicker] = useState(false);
  const [date, setDate] = useState(dayjs());

  return (
    <Screen
      className={cn('gap-4', 'relative')}
      style={{
        paddingBottom: insets.bottom,
      }}
    >
      <Box className={cn('items-center', 'pt-8')}>
        <Bold size='heading'>Add expense</Bold>
      </Box>
      <Numpad>
        <Box
          className={cn('flex-1', 'items-center', 'justify-center', 'gap-2')}
        >
          <Numpad.Display />
          <Pressable
            className={cn(
              'px-4',
              'py-1',
              'rounded-xl',
              'flex-row',
              'gap-1',
              'items-center',
              'border',
              'border-secondary'
            )}
          >
            <Icon icon={IconListRadio} />
            <Text size='sm'>Category</Text>
          </Pressable>
        </Box>

        <Pressable
          onPress={() => {
            setShowDatepicker(true);
          }}
          className={cn(
            'px-6',
            'py-2',
            'rounded-xl',
            'flex-row',
            'items-center',
            'justify-between',
            'shrink',
            'mx-4',
            'gap-4',
            'border',
            'border-secondary'
          )}
        >
          <Box className={cn('flex', 'items-center', 'gap-2', 'flex-row')}>
            <Icon
              icon={IconCalendar2Fill}
              size={16}
            />
            <Text size='sm'>{date.format('dddd, D MMM YYYY')}</Text>
          </Box>
          <Text
            size='sm'
            className={cn('self')}
          >
            {date.format('h:mma')}
          </Text>
        </Pressable>

        <Numpad.Keys>
          <Numpad.Row>
            <Numpad.Key value='1' />
            <Numpad.Key value='2' />
            <Numpad.Key value='3' />
          </Numpad.Row>

          <Numpad.Row>
            <Numpad.Key value='4' />
            <Numpad.Key value='5' />
            <Numpad.Key value='6' />
          </Numpad.Row>

          <Numpad.Row>
            <Numpad.Key value='7' />
            <Numpad.Key value='8' />
            <Numpad.Key value='9' />
          </Numpad.Row>

          <Numpad.Row>
            <Numpad.Clear />
            <Numpad.Key value='0' />
            <Numpad.Save />
          </Numpad.Row>
        </Numpad.Keys>

        <Datepicker
          date={date}
          onChange={setDate}
          onOpenChange={setShowDatepicker}
          open={showDatepicker}
        />
      </Numpad>
    </Screen>
  );
}
