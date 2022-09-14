/** Transforms letter spacing % to em */
function transformLetterSpacing(value) {
  if (value.endsWith('%')) {
    const percentValue = value.slice(0, -1)
    return `${percentValue / 100}em`
  }
  return value
}

module.exports = {
  name: 'size/letterSpacing',
  type: 'value',
  transitive: true,
  matcher: token => token.type === 'letterSpacing',
  transformer: token => transformLetterSpacing(token.value),
}
