module.exports = {
  extends: ['stylelint-config-standard-scss', 'stylelint-config-prettier-scss'],
  ignoreFiles: ['**/*.{js,vue,md}', '.nuxt', 'dist', 'node_modules'],
  rules: {
    // TODO: remove and resolve following at next major release
    // with view that postcss and autoprefixer be applied
    'property-no-vendor-prefix': null,
    'value-no-vendor-prefix': null,
    'at-rule-no-vendor-prefix': null,
    'selector-no-vendor-prefix': null,
    // TODO: remove and resolve following at next major release
    'keyframes-name-pattern': null,
    'function-name-case': null,
    'scss/at-function-pattern': null,
    'scss/no-global-function-names': null,
    /**
     * @see {@link https://stylelint.io/user-guide/rules/list#stylistic-issues}
     */
    'comment-empty-line-before': null,
    'comment-whitespace-inside': null,
    'selector-type-case': null,
    'custom-property-empty-line-before': null,
    'scss/dollar-variable-empty-line-before': null,
    'font-family-no-duplicate-names': null,
    'scss/double-slash-comment-whitespace-inside': null,
    'scss/at-extend-no-missing-placeholder': null,
    //
    'no-descending-specificity': [
      true,
      {
        ignore: ['selectors-within-list']
      }
    ],
    'font-family-no-missing-generic-family-keyword': [
      true,
      {
        ignoreFontFamilies: ['hxui']
      }
    ]
  },
  overrides: [
    {
      files: ['**/*.scss'],
      customSyntax: 'postcss-scss'
    }
  ]
}
