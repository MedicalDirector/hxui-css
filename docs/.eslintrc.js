// http://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@babel/eslint-parser',
    sourceType: 'module',
    ecmaVersion: 'latest',
    requireConfigFile: false,
  },
  env: {
    browser: true,
    node: true,
  },
  ignorePatterns: ['node_modules/', '.nuxt/', 'dist/', 'static/'],
  // https://github.com/standard/standard/blob/master/docs/RULES-en.md
  extends: [
    'standard',
    'plugin:nuxt/recommended',
    'plugin:vue/base',
    'plugin:vue/essential',
    'prettier',
  ],
  // required to lint *.vue files
  plugins: ['vue'],
  // add your custom rules here
  rules: {
    // allow async-await
    'generator-star-spacing': 'off',
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
  },
  // TODO: temporary overrides - reinstate when implementing prettier
  overrides: [
    {
      files: ['*.vue'],
      rules: {
        indent: 'off',
        'vue/multi-word-component-names': 'off',
      },
    },
  ],
}
