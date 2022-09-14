const StyleDictionary = require('style-dictionary')
const formattedVariables = StyleDictionary.formatHelpers.formattedVariables

/** Format for css variables */
module.exports = {
  name: 'css/variables',
  formatter: function ({ dictionary, options = {} }) {
    const selector = options.selector ? options.selector : `:root`
    const outputReferences = (options && options.outputReferences) || false

    return (
      `${selector} {\n` +
      formattedVariables({
        format: 'css',
        dictionary,
        outputReferences,
      }) +
      `\n}\n`
    )
  },
}
