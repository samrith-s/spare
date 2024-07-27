import React from 'react';

import Animated from 'react-native-reanimated';

import { useColorScheme } from 'nativewind';

import { IconExchangeDollarFill } from '~/icons/Finance/ExchangeDollarFill';
import { IconVipDiamondFill } from '~/icons/Finance/VipDiamondFill';
import { IconHeadphoneFill } from '~/icons/Media/HeadphoneFill';
import { IconMoonClearFill } from '~/icons/Weather/MoonClearFill';
import { SettingsItem } from '~/components/settings/SettingsItem';

import { Screen } from '~/ui/Box';
import { Switch } from '~/ui/Switch';
import { cn } from '~/utilities/cn';

export default function SettingsScreen() {
  const { colorScheme, setColorScheme } = useColorScheme();

  return (
    <Screen className={cn('gap-1', 'pt-4')}>
      <Animated.ScrollView
        className={cn('px-3')}
        bounces={false}
      >
        <SettingsItem.Group title='Appearance'>
          <SettingsItem.Entry
            label='Dark mode'
            icon={IconMoonClearFill}
          >
            <Switch
              defaultChecked={colorScheme === 'dark'}
              onCheckChange={(checked) => {
                setColorScheme(checked ? 'dark' : 'light');
              }}
            />
          </SettingsItem.Entry>
          <SettingsItem.Entry
            label='Currency'
            icon={IconExchangeDollarFill}
            href='/settings/currency'
          />
        </SettingsItem.Group>

        <SettingsItem.Group title='Help'>
          <SettingsItem.Entry
            label='Upgrade to Premium'
            icon={IconVipDiamondFill}
            href='/settings/currency'
          />
          <SettingsItem.Entry
            label='Contact support'
            icon={IconHeadphoneFill}
            href='/settings/currency'
          />
        </SettingsItem.Group>
      </Animated.ScrollView>
    </Screen>
  );
}
