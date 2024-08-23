module.exports = {
  root: true,
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        '@typescript-eslint/no-shadow': ['error'],
        'no-shadow': 'off',
        'no-undef': 'off',
      },
    },
  ],
  env: {
    es2021: true,
    node: true,
  },
  settings: { react: { version: 'detect' } },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', 'react-hooks', '@typescript-eslint'],
  rules: {
    '@typescript-eslint/no-explicit-any': 'warn',
    '@typescript-eslint/no-var-requires': 0,
    '@typescript-eslint/no-unused-vars': ['error'],
    'no-unused-vars': 'off',
    'no-console': 'warn',
    'react/prop-types': 'off',
    'react/jsx-no-duplicate-props': 'error',
    'react/no-unused-prop-types': 'error',
    'react/react-in-jsx-scope': 'off',
    'react/no-unescaped-entities': 'off',
  },
  ignorePatterns: [
    'node_modules',
  ],
};
