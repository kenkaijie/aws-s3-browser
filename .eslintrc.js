module.exports = {
    root: true,
    parserOptions: {
        parser: '@typescript-eslint/parser'
    },
    plugins: [
      'html',
      'vue',
      '@typescript-eslint'
    ],
    extends: [
      'plugin:@typescript-eslint/recommended',
      'plugin:vue/vue3-recommended'
    ],
};