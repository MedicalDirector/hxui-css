const { parseToRgba } = require('color2k')

/** Transforms hex rgba colors used in figma tokens: rgba(#ffffff, 0.5) =? rgba(255, 255, 255, 0.5). This is kind of like an alpha() function. */
function transformHEXRGBa(value) {
  if (value.startsWith('rgba(#')) {
    const [hex, alpha] = value.replace(')', '').split('rgba(').pop().split(', ')
    const [r, g, b] = parseToRgba(hex)
    return `rgba(${r}, ${g}, ${b}, ${alpha})`
  } else {
    return value
  }
}

module.exports = {
  name: 'color/hexrgba',
  type: 'value',
  transitive: true,
  matcher: token =>
    typeof token.value === 'string' && token.value.startsWith('rgba(#'),
  transformer: token => transformHEXRGBa(token.value),
}
