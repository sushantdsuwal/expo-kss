module.exports = {
  plugins: [require.resolve('@trivago/prettier-plugin-sort-imports')],
  bracketSpacing: true,
  singleQuote: true,
  trailingComma: 'all',
  arrowParens: 'avoid',
  semi: true,
  importOrder: ['^react', '^react-native', '^[~/]', '^[../]', '^[./]'],
  importOrderSeparation: true,
};
