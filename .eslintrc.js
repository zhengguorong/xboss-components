module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  // extends有顺序关系，规则按从左到右应用，假设把prettier放最左边，他的规则会被后面规则覆盖
  extends: ['airbnb-base', 'plugin:@typescript-eslint/recommended', 'prettier'],
  rules: {
    'import/prefer-default-export': 'off',
    'import/extensions': 'off',
    'import/no-unresolved': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off'
  }
};
