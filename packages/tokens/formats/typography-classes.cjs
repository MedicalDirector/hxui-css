/**
 * Format for css typography classes
 * This generates theme-independent css classes so we're fine with just using css variables here
 * We're using the css shorthand to define the font: property and define all other values according to the typography token
 */
module.exports = {
  name: 'css/typographyClasses',
  formatter: (dictionary, options = {}) => {
    return dictionary.allTokens.map(t => t.value.replace('END', '}')).join('\n')
  },
}
