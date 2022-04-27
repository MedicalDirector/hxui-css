// http://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@babel/eslint-parser',
    sourceType: 'module',
    ecmaVersion: 'latest',
    requireConfigFile: false
  },
  env: {
    browser: true,
    node: true
  },
  // https://github.com/standard/standard/blob/master/docs/RULES-en.md
  extends: [
    'standard',
    'plugin:nuxt/recommended',
    'plugin:vue/base',
    'plugin:vue/essential'
  ],
  // required to lint *.vue files
  plugins: [
    'vue'
  ],
  // add your custom rules here
  rules: {
    // allow paren-less arrow functions
    'arrow-parens': 0,
    // allow async-await
    'generator-star-spacing': 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0
  },
  // TODO: temporary overrides - reinstate when implementing prettier
  overrides: [
    {
      files: ['*.vue'],
      rules: {
        indent: 'off',
        'vue/multi-word-component-names': 'off'
      }
    }
  ]
}
