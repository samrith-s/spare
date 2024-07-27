import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { HEADER_HEIGHT, TAB_BAR_HEIGHT } from '~/constants/Heights';

export function useContentInsets() {
  const insets = useSafeAreaInsets();

  return {
    bottom: TAB_BAR_HEIGHT + insets.bottom,
    top: HEADER_HEIGHT + insets.top,
  };
}
