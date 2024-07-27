import React from 'react';

import { Screen } from '~/components/ui/Box';
import { Link } from '~/components/ui/Link';
import { Text } from '~/components/ui/Text';
import { TextInput } from '~/components/ui/TextInput';
import { cn } from '~/utilities/cn';

export default function CategoriesScreen() {
  return (
    <Screen>
      <TextInput
        placeholder='Search'
        className={cn('mx-4')}
      />
      <Text>Categories</Text>
      <Link href='/categories/add'>Add</Link>
      <Link href='/categories/edit'>Edit</Link>
    </Screen>
  );
}
