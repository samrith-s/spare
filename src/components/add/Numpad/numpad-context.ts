import { createContext } from 'react';

import { noop } from '~/utilities/noop';

export type NumpadValueContextType = string;
export type NumpadSetterContextType = (value: string) => void;
export type NumpadDisabledContextType = {
  saveDisabled: boolean;
  keyDisabled: boolean;
};

export const NumpadValueContext = createContext<NumpadValueContextType>('');
export const NumpadSetterContext = createContext<NumpadSetterContextType>(noop);
export const NumpadDisabledContext = createContext<NumpadDisabledContextType>({
  saveDisabled: true,
  keyDisabled: false,
});
