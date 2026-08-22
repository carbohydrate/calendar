import { defineConfig } from 'oxfmt';

export default defineConfig({
  printWidth: 100,
  singleQuote: true,
  jsxSingleQuote: true,

  ignorePatterns: ['vite.config.ts'],
});
