import { Numpad as BaseNumpad } from './Numpad';
import { NumpadClear } from './NumpadClear';
import { NumpadDisplay } from './NumpadDisplay';
import { NumpadKey } from './NumpadKey';
import { NumpadKeys } from './NumpadKeys';
import { NumpadRow } from './NumpadRow';
import { NumpadSave } from './NumpadSave';

type NumpadLike = typeof BaseNumpad & {
  Keys: typeof NumpadKeys;
  Key: typeof NumpadKey;
  Row: typeof NumpadRow;
  Clear: typeof NumpadClear;
  Save: typeof NumpadSave;
  Display: typeof NumpadDisplay;
};

export const Numpad = BaseNumpad as NumpadLike;

Numpad.Keys = NumpadKeys;
Numpad.Key = NumpadKey;
Numpad.Row = NumpadRow;
Numpad.Clear = NumpadClear;
Numpad.Save = NumpadSave;
Numpad.Display = NumpadDisplay;
