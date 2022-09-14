const StyleDictionary = require('style-dictionary')
const transformer = StyleDictionary.transform['name/cti/kebab'].transformer

function rename(input) {
  // remove 'component'
  if (input.startsWith('component-')) {
    return input.replace('component-', '')
  }

  // simplify 'font-size' to 'size'
  // TODO: fix with tokens and remove this
  if (input.includes('font-size-')) {
    return input.replace('font-size-', 'size-')
  }

  // simplify 'color-semantic' to 'color'
  if (input.includes('color-semantic-')) {
    return input.replace('color-semantic-', 'color-')
  }

  // remove 'font-semantic'
  const preF = 'font-semantic-'
  if (input.startsWith('font-semantic-')) {
    const options = ['body-', 'heading-', 'display-']

    const hasOption = options.some(o => input.startsWith(`${preF}${o}`))
    if (hasOption) {
      for (const o of options) {
        if (input.includes(o)) {
          return input.replace(`${preF}${o}`, '')
        }
      }
    } else {
      return input.replace(preF, '')
    }
  }

  return input
}

module.exports = {
  rename,
  component: {
    name: 'name/tokenRename',
    type: 'name',
    transformer: (token, options) => {
      const kebabed = transformer(token, options)

      return rename(kebabed)
    },
  },
}
