const StyleDictionary = require('style-dictionary')
const transformer = StyleDictionary.transform['name/cti/kebab'].transformer

module.exports = {
  shorthand: {
    name: 'type/shorthand',
    type: 'value',
    transitive: true,
    matcher: token => token.type === 'typography',
    transformer: (token, options) => {
      const { fontWeight, fontSize, lineHeight, fontFamily } =
        token.original.value

      return `${fontWeight} ${fontSize}rem/${lineHeight}rem ${fontFamily}`
    },
  },
  // TODO: awaiting resolution on composite tokens per draft w3C spec
  // https://github.com/amzn/style-dictionary/issues/848
  classes: {
    name: 'type/classes',
    type: 'value',
    transitive: true,
    matcher: token => token.type === 'typography',
    transformer: ({ value, name }, options) => {
      if (!value) return

      const _entries = Object.entries(value)

      const entries = _entries.filter(([t1]) =>
        ['letterSpacing', 'textDecoration', 'textCase'].includes(t1)
      )

      const flattendedValue = entries.reduce((acc, [key, v], index) => {
        const start = acc ? `${acc}\n  ` : ''
        const selector = transformer({ path: [key] }, { prefix: '' })
        const value = v
        const end = index + 1 === entries.length ? '' : ''

        if (!v) return `${acc}`
        return `${start}${selector}: ${value};${end}`
      }, `.${name} {\n  font: var(--${name});`)

      return `${flattendedValue}\nEND\n`.replace('text-case', 'text-transform')
    },
  },
}
