const { parseToRgba } = require('color2k')

/**
 * Transforms boxShadow object to shadow shorthand
 * This currently works fine if every value uses an alias, but if any one of these use a raw value, it will not be transformed.
 */
function transformShadow(shadow) {
  const { x, y, blur, spread, color } = shadow
  return `${x}px ${y}px ${blur}px ${spread}px ${color}`
}

// TODO: add fix for rgbahex transform
/**
 * Transforms shadows post-resolution to fix gap (color/hslrgba) with composite tokens
 */
function transformResolvedShadows(value, token, dictionary) {
  if (
    typeof value === 'string' &&
    token.type === 'boxShadow' &&
    dictionary.usesReference(token.original.value) &&
    value.includes('rgba(hsl')
  ) {
    const result = value
      .split(/(rgba\(|\%\)\, )/i)
      .filter(v => v !== '%), ')
      .map(v => {
        if (v.startsWith('hsl(')) {
          const [r, g, b] = parseToRgba(`${v}%)`)
          const result = `${r}, ${g}, ${b}, `
          return result
        } else {
          return v
        }
      })
      .join('')
    return result
  } else {
    return value
  }
}

module.exports = {
  shorthand: {
    name: 'shadow/shorthand',
    type: 'value',
    transitive: true,
    matcher: token => ['boxShadow'].includes(token.type),
    transformer: token => {
      return Array.isArray(token.original.value)
        ? token.original.value.map(single => transformShadow(single)).join(', ')
        : transformShadow(token.original.value)
    },
  },
  transformResolvedShadows,
}
