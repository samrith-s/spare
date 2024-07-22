import { createContext } from 'react';

import { type Currencies } from '~/assets/data/currencies';
import { noop } from '~/utilities/noop';

export type CurrencyContextType = [Currencies, (currency: Currencies) => void];

export const CurrencyContext = createContext<CurrencyContextType>([
  'INR',
  noop,
]);
