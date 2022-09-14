const StyleDictionary = require('style-dictionary')
const formattedVariables = StyleDictionary.formatHelpers.formattedVariables

/** Format for css variables */
module.exports = {
  name: 'scss/variables-mixin',
  formatter: function ({ dictionary, options = {} }) {
    const selector = options.selector
    const outputReferences = (options && options.outputReferences) || false

    return (
      `@mixin variables-${selector} {\n` +
      '  & {\n' +
      formattedVariables({
        format: 'css',
        dictionary,
        outputReferences,
      }) +
      `}\n}\n`
    )
  },
}
