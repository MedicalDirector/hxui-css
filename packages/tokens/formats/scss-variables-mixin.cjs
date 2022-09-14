const formattedVariables = require('../utils/formatted-variables-mod.cjs')
const {
  transformResolvedShadows,
} = require('../transforms/shadow-shorthand.cjs')

/** Format for scss variables as a mixin */
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
        transform: (value, token, dictionary) => {
          const result = transformResolvedShadows(value, token, dictionary)
          return result
        },
      }) +
      `}\n}\n`
    )
  },
}
