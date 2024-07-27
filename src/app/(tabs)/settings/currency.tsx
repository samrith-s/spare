import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';

import { StackActions } from '@react-navigation/native';

import { useNavigation } from 'expo-router';

import { CURRENCIES, type CurrencyData } from '~/data/currencies';
import { useCurrency } from '~/providers/Currency';
import { KeyboardAvoidingView } from '~/ui/Box';
import { List, type ListRenderItem } from '~/ui/List';
import { Pressable } from '~/ui/Pressable';
import { Text } from '~/ui/Text';
import { TextInput } from '~/ui/TextInput';
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
  const ref = useRef<List<CurrencyData>>(null);
  const mounted = useRef(false);

  const handleLayout = useCallback(() => {
    let timeout: NodeJS.Timeout;
    if (!mounted.current) {
      timeout = setTimeout(() => {
        ref.current?.scrollToIndex({ index: idx, animated: false });
        mounted.current = true;
      }, 1);
    }

    return () => {
      clearTimeout(timeout);
    };
  }, [idx]);

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
          <Text className={cn('text-muted', 'shrink-0')}>{item.symbol}</Text>
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
    <KeyboardAvoidingView
      className={cn('gap-4')}
      onLayout={handleLayout}
    >
      <TextInput
        clearButtonMode='always'
        placeholder='Search currency'
        className={cn('mx-4')}
        onChangeText={setQuery}
      />
      <List
        ref={ref}
        extraData={current.code}
        estimatedItemSize={48}
        data={currencies}
        renderItem={renderItem}
      />
    </KeyboardAvoidingView>
  );
}
