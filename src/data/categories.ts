export type Category = {
  id: string;
  name: string;
  emoji: string;
};

export const CATEGORIES: Category[] = [
  {
    id: '1',
    name: 'Groceries',
    emoji: '🍞',
  },
  {
    id: '2',
    name: 'Commute',
    emoji: '🚍',
  },
  {
    id: '3',
    name: 'Health',
    emoji: '💊',
  },
  {
    id: '4',
    name: 'Entertainment',
    emoji: '🎬',
  },
  {
    id: '5',
    name: 'Eating out',
    emoji: '🍔',
  },
  {
    id: '6',
    name: 'Shopping',
    emoji: '🛍️',
  },
];
