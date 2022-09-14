const { Parser } = require('expr-eval')

function checkAndEvaluateMath(expr) {
  try {
    /** Transforms math like Figma Tokens */
    const parser = new Parser()
    const x = parser.parse(expr)
    return +x.evaluate(expr).toFixed(3)
  } catch (ex) {
    return expr
  }
}

module.exports = {
  name: 'value/resolveMath',
  type: 'value',
  transitive: true,
  // Putting this in strings seems to be required
  transformer: token => `${checkAndEvaluateMath(token.value)}`,
}
