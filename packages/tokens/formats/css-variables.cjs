const formattedVariables = require('../utils/formatted-variables-mod.cjs')
const {
  transformResolvedShadows,
} = require('../transforms/shadow-shorthand.cjs')

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
        transform: (value, token, dictionary) => {
          const result = transformResolvedShadows(value, token, dictionary)
          return result
        },
      }) +
      `\n}\n`
    )
  },
}
