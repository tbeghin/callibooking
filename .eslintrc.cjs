module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb',
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname,
  },
  plugins: ['react', '@typescript-eslint', 'prettier'],
  rules: {
    'react/react-in-jsx-scope': 0,
    'react/prop-types': 0,
    'react/jsx-props-no-spreading': 0,
    'react/require-default-props': 'off',
    'react/display-name': 'off',
    'react/jsx-no-useless-fragment': ['warn', { allowExpressions: true }],
    'import/no-extraneous-dependencies': ['off', { devDependencies: true }],
    'no-restricted-exports': 'off',
    'import/prefer-default-export': 'off',
    'react/function-component-definition': 'off',
    'react/no-unescaped-entities': 'off',
    '@typescript-eslint/naming-convention': [
      'warn',
      {
        selector: 'enum',
        format: ['PascalCase', 'UPPER_CASE', 'camelCase'],
      },
    ],
  },
  overrides: [
    {
      files: [
        '**/*.test.ts',
        '**/*.test.tsx',
        '**/*.spec.ts',
        '**/*.spec.tsx',
        '**/*.steps.ts',
        '**/*.steps.tsx',
        'src/shared/testsUtils/**/*',
        '**/__tests__/*',
      ],
      rules: {
        'import/no-extraneous-dependencies': ['off'],
        'react/display-name': 0,
        '@typescript-eslint/ban-ts-comment': 'off',
        '@typescript-eslint/no-unused-vars': 'off',
      },
    },
  ],
};
