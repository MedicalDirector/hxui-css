const { parseToRgba } = require('color2k')

/** Transforms hex rgba colors used in figma tokens: rgba(#ffffff, 0.5) =? rgba(255, 255, 255, 0.5). This is kind of like an alpha() function. */
function transformHexRgba(value) {
  if (value.startsWith('rgba(#')) {
    const [hex, alpha] = value.replace(')', '').split('rgba(').pop().split(', ')
    const [r, g, b] = parseToRgba(hex)
    const rgba = `rgba(${r}, ${g}, ${b}, ${alpha})`
    return rgba
  } else {
    return value
  }
}

/** Transforms hsl rgba colors used in figma tokens: rgba(hsl(0, 0%, 100%), 0.5) =? rgba(255, 255, 255, 0.5). This is kind of like an alpha() function. */
function transformHslRgba(value) {
  if (value.startsWith('rgba(hsl')) {
    const [hsl, alpha] = value.slice(0, -1).split('rgba(').pop().split('), ')
    const [r, g, b] = parseToRgba(`${hsl})`)
    const rgba = `rgba(${r}, ${g}, ${b}, ${alpha})`
    return rgba
  } else {
    return value
  }
}

module.exports = {
  hexRgba: {
    name: 'color/hexrgba',
    type: 'value',
    transitive: true,
    matcher: token =>
      typeof token.value === 'string' && token.value.startsWith('rgba(#'),
    transformer: token => transformHexRgba(token.value),
  },
  hslRgba: {
    name: 'color/hslrgba',
    type: 'value',
    transitive: true,
    matcher: token =>
      typeof token.value === 'string' && token.value.startsWith('rgba(hsl'),
    transformer: token => transformHslRgba(token.value),
  },
}
