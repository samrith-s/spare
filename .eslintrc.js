/* eslint-disable @typescript-eslint/no-var-requires */
// @ts-check
/* eslint-env node */

const globals = require('globals');

module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  globals: {
    ...globals.node,
    ...globals.nodeBuiltin,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/strict',
    'plugin:@typescript-eslint/stylistic',
    'plugin:import-x/recommended',
    'plugin:import-x/typescript',
    'plugin:prettier/recommended',
    'plugin:react-hooks/recommended',
  ],
  plugins: [
    '@typescript-eslint',
    'react',
    'react-hooks',
    '@react-native',
    'import-x',
  ],
  rules: {
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
    '@typescript-eslint/consistent-type-imports': [
      'error',
      {
        fixStyle: 'inline-type-imports',
        prefer: 'type-imports',
        disallowTypeAnnotations: true,
      },
    ],
    'import-x/no-named-as-default': 'off',
    'import-x/order': [
      'error',
      {
        pathGroups: [
          {
            pattern: '~/**',
            group: 'external',
            position: 'after',
          },
          {
            pattern: 'react',
            group: 'builtin',
            position: 'before',
          },
          {
            pattern: 'react-native',
            group: 'builtin',
            position: 'before',
          },
          {
            pattern: '@react-navigation/*',
            group: 'builtin',
            position: 'before',
          },
          {
            pattern: 'react-native-*',
            group: 'builtin',
            position: 'after',
          },
          {
            pattern: 'expo-*',
            group: 'builtin',
            position: 'after',
          },
          {
            pattern: '@expo/*',
            group: 'builtin',
            position: 'after',
          },
        ],
        pathGroupsExcludedImportTypes: ['react', 'react-native', '*expo*'],
        'newlines-between': 'always-and-inside-groups',
        distinctGroup: true,
        alphabetize: {
          order: 'asc',
          orderImportKind: 'asc',
        },
      },
    ],
  },
  settings: {
    'import-x/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import-x/resolver': {
      typescript: true,
      node: true,
    },
  },
};
