import { useContext, useMemo } from 'react';

import { CURRENCIES } from '~/data/currencies';

import { CurrencyContext } from './Currency.context';

export function useCurrency() {
  const [currency, setCurrency] = useContext(CurrencyContext);

  return useMemo(
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    () => [CURRENCIES.find((c) => c.code === currency)!, setCurrency] as const,
    [currency, setCurrency]
  );
}
