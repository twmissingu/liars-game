/** @type {import('eslint').Linter.Config} */
export default {
  languageOptions: {
    globals: {
      browser: true,
      es2020: true,
    },
    parserOptions: {
      ecmaVersion: 2020,
      sourceType: 'module',
    },
  },
  files: ['src/**/*.{ts,tsx}'],
  ignores: ['dist/**', '.eslintrc.cjs', 'node_modules/**'],
}
