import React, { useCallback, useMemo, useState } from 'react';

import {
  NumpadDisabledContext,
  NumpadSetterContext,
  NumpadValueContext,
  type NumpadDisabledContextType,
} from './numpad-context';

export type NumpadProps = {
  children: React.ReactNode;
};

export function Numpad({ children }: NumpadProps) {
  const [value, setValue] = useState('');

  const setter = useCallback((value: string) => {
    setValue((prev) => {
      if (!value) {
        return '';
      }

      if (prev.length === 10) {
        return prev;
      }

      return prev + value;
    });
  }, []);

  const disabledContextType = useMemo<NumpadDisabledContextType>(
    () => ({
      saveDisabled: !value,
      keyDisabled: value.length === 10,
    }),
    [value]
  );

  return (
    <NumpadValueContext.Provider value={value}>
      <NumpadSetterContext.Provider value={setter}>
        <NumpadDisabledContext.Provider value={disabledContextType}>
          {children}
        </NumpadDisabledContext.Provider>
      </NumpadSetterContext.Provider>
    </NumpadValueContext.Provider>
  );
}
