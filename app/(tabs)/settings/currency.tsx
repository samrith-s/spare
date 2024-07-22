import React, { useCallback, useEffect, useMemo, useState } from 'react';

import { StackActions } from '@react-navigation/native';

import { useNavigation } from 'expo-router';

import { FlashList, type ListRenderItem } from '@shopify/flash-list';

import { CURRENCIES, type CurrencyData } from '~/assets/data/currencies';
import { Screen } from '~/components/ui/Box';
import { Pressable } from '~/components/ui/Pressable';
import { Text } from '~/components/ui/Text';
import { TextInput } from '~/components/ui/TextInput';
import { useCurrency } from '~/providers/Currency';
import { cn } from '~/utilities/cn';

export default function CurrencyScreen() {
  const navigation = useNavigation();
  const [query, setQuery] = useState('');
  const [current, setCurrency] = useCurrency();
  const [currencies, setCurrencies] = useState<CurrencyData[]>(CURRENCIES);
  const idx = useMemo(
    () => CURRENCIES.findIndex((currency) => currency.code === current.code),
    [current.code]
  );

  const renderItem = useCallback<ListRenderItem<CurrencyData>>(
    ({ item, extraData }) => {
      const isCurrent = extraData === item.code;
      return (
        <Pressable
          onPress={() => {
            setCurrency(item.code);
            navigation.dispatch(StackActions.pop());
          }}
          className={cn(
            'flex-row',
            'gap-2',
            'px-4',
            'h-12',
            'items-center',
            'justify-between',
            isCurrent && 'bg-secondary'
          )}
        >
          <Text className={cn('shrink-1')}>{item.name}</Text>
          <Text className={cn('text-foreground', 'shrink-0')}>
            {item.symbol}
          </Text>
        </Pressable>
      );
    },
    [navigation, setCurrency]
  );

  useEffect(() => {
    if (query) {
      setCurrencies(
        CURRENCIES.filter((c) => {
          return (
            c.name.trim().toLowerCase().includes(query.toLowerCase()) ||
            c.code.trim().toLowerCase().includes(query.toLowerCase())
          );
        })
      );
    } else {
      setCurrencies(CURRENCIES);
    }
  }, [query]);

  return (
    <Screen className={cn('gap-4')}>
      <TextInput
        clearButtonMode='always'
        placeholder='Search currency'
        className={cn('mx-4')}
        onChangeText={setQuery}
      />
      <FlashList
        extraData={current.code}
        initialScrollIndex={idx}
        estimatedItemSize={40}
        data={currencies}
        renderItem={renderItem}
      />
    </Screen>
  );
}
