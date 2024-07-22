import React, { useState } from 'react';

import { type Currencies } from '~/assets/data/currencies';

import { CurrencyContext } from './Currency.context';

export type CurrencyProviderProps = {
  children: React.ReactNode;
};

export function CurrencyProvider({ children }: CurrencyProviderProps) {
  const state = useState<Currencies>('INR');

  return (
    <CurrencyContext.Provider value={state}>
      {children}
    </CurrencyContext.Provider>
  );
}
