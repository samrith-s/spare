import React, { useCallback, useMemo } from 'react';

import {
  FadeIn,
  FadeOut,
  SlideInDown,
  SlideOutDown,
} from 'react-native-reanimated';

import DateTimePicker from 'react-native-ui-datepicker';

import dayjs, { type Dayjs } from 'dayjs';

import { type SingleChange } from 'react-native-ui-datepicker/lib/typescript/src/types';

import { IconArrowLeftWideFill } from '~/assets/icons/Arrows/ArrowLeftWideFill';
import { IconArrowRightWideFill } from '~/assets/icons/Arrows/ArrowRightWideFill';
import { useColor } from '~/hooks/useColor';
import { cn } from '~/utilities/cn';

import { Box } from '../ui/Box';
import { Icon } from '../ui/Icon';
import { Pressable } from '../ui/Pressable';

export type DatepickerProps = {
  open: boolean;
  date: Dayjs;
  onChange?(date: Dayjs): void;
  onOpenChange?(open: boolean): void;
};

export function Datepicker({
  date,
  open,
  onChange,
  onOpenChange,
}: DatepickerProps) {
  const background = useColor('background');
  const foreground = useColor('foreground');
  const secondary = useColor('secondary');
  const muted = useColor('muted');
  const tint = useColor({
    light: 'tint-lighter',
    dark: 'tint-lighter',
  });

  const current = useMemo(() => dayjs(), []);

  const handleClose = useCallback(() => {
    onOpenChange?.(false);
  }, [onOpenChange]);

  const handleChange = useCallback<SingleChange>(
    ({ date: d }) => {
      const next = dayjs(d);

      if (next.isAfter(current)) {
        return onChange?.(current);
      }

      if (next.isBefore(date)) {
        handleClose();
      }

      onChange?.(next);
    },
    [current, date, handleClose, onChange]
  );

  return (
    <Box
      className={cn(
        'px-4',
        'z-10',
        'absolute',
        'bottom-0',
        'left-0',
        'right-0',
        'top-0'
      )}
      pointerEvents={open ? 'auto' : 'none'}
    >
      {open && (
        <Box
          entering={FadeIn}
          exiting={FadeOut}
          className={cn(
            'absolute',
            'top-0',
            'left-0',
            'right-0',
            'bottom-0',
            'z-10'
          )}
        >
          <Pressable
            disableAnimation
            className={'flex-1'}
            style={{
              backgroundColor: 'rgba(0,0,0,0.5)',
            }}
            onPress={handleClose}
          />
        </Box>
      )}

      {open && (
        <Box
          entering={SlideInDown.duration(300)}
          exiting={SlideOutDown.duration(300)}
          className={cn(
            'absolute',
            'left-0',
            'right-0',
            'bottom-0',
            'bg-background',
            'rounded-xl',
            'px-4',
            'pt-4',
            'z-20'
          )}
        >
          <DateTimePicker
            mode='single'
            date={date}
            onChange={handleChange}
            firstDayOfWeek={1}
            maxDate={current}
            headerButtonsPosition='right'
            selectedItemColor={foreground}
            buttonNextIcon={
              <Icon
                icon={IconArrowRightWideFill}
                size={14}
              />
            }
            buttonPrevIcon={
              <Icon
                icon={IconArrowLeftWideFill}
                size={14}
              />
            }
            timePicker
            selectedTextStyle={{
              color: background,
            }}
            timePickerTextStyle={{
              color: foreground,
              fontFamily: 'Inter_400Regular',
            }}
            timePickerDecelerationRate='fast'
            timePickerIndicatorStyle={{
              backgroundColor: tint,
              borderRadius: 12,
            }}
            weekDaysContainerStyle={{
              borderColor: secondary,
              marginBottom: 2,
            }}
            calendarTextStyle={{
              color: foreground,
              fontFamily: 'Inter_400Regular',
            }}
            todayTextStyle={{
              color: foreground,
              fontFamily: 'Inter_400Regular',
              borderColor: secondary,
            }}
            headerButtonColor={foreground}
            headerTextStyle={{
              color: foreground,
              fontFamily: 'Inter_600SemiBold',
            }}
            todayContainerStyle={{
              backgroundColor: muted,
              borderColor: secondary,
            }}
            weekDaysTextStyle={{
              color: muted,
              fontFamily: 'Inter_400Regular',
            }}
            monthContainerStyle={{
              backgroundColor: background,
              borderWidth: 0,
              borderColor: secondary,
            }}
            headerButtonStyle={{
              backgroundColor: tint,
              borderRadius: 8,
            }}
            headerTextContainerStyle={{
              backgroundColor: tint,
              paddingHorizontal: 12,
              margin: 0,
              borderRadius: 12,
            }}
            yearContainerStyle={{
              backgroundColor: background,
              borderWidth: 0,
              borderColor: secondary,
            }}
            dayContainerStyle={{
              borderRadius: 12,
            }}
          />
        </Box>
      )}
    </Box>
  );
}
