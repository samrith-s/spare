import React from 'react';

import { useLocalSearchParams } from 'expo-router';

import { type Category } from '~/data/categories';
import { AddOrEditCategory } from '~/screens/AddOrEditCategory';

export default function CategoriesEdit() {
  const { name, emoji } = useLocalSearchParams<Omit<Category, 'id'>>();

  return (
    <AddOrEditCategory
      name={name}
      emoji={emoji}
    />
  );
}
