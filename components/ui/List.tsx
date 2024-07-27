import { forwardRef } from 'react';

import {
  FlashList,
  type FlashListProps,
  type ListRenderItem as FlashListRenderItem,
} from '@shopify/flash-list';

function ListComponent<T>(
  { keyboardDismissMode = 'on-drag', ...rest }: ListProps<T>,
  ref: React.ForwardedRef<List<T>>
) {
  return (
    <FlashList
      ref={ref}
      keyboardDismissMode={keyboardDismissMode}
      {...rest}
    />
  );
}

export const List = forwardRef(ListComponent) as <T>(
  props: ListProps<T> & { ref?: React.ForwardedRef<List<T>> }
) => ReturnType<typeof ListComponent<T>>;

export type ListProps<T> = Omit<FlashListProps<T>, 'renderItem'> & {
  renderItem: ListRenderItem<T>;
};
export type ListRenderItem<T> = FlashListRenderItem<T>;
export type List<T> = FlashList<T>;
