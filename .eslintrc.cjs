module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'standard-with-typescript',
    'plugin:vue/vue3-essential',
    // 'eslint:recommended',
    // 'plugin:vue/vue3-essential',
    // 'plugin:@typescript-eslint/recommended',
  ],
  overrides: [
    {
      env: {
        node: true,
      },
      files: [
        '.eslintrc.{js,cjs}',
      ],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 'latest',
    sourceType: 'module',
    extraFileExtensions: ['.vue'],
    project: './tsconfig.json', // 指定tsconfig.json路径
  },
  plugins: [
    'vue',
  ],
  rules: {
    '@typescript-eslint/semi': 'off',
    '@typescript-eslint/comma-dangle': 'off',
    '@typescript-eslint/promise-function-async': 'off',
    '@typescript-eslint/member-delimiter-style': 'off',
    'vue/multi-word-component-names': 'off',
  },
};
