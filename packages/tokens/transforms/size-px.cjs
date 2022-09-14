/** Transforms dimensions to px */
// TODO: currently causing math resolutions to fail --> hence not used atm
function transformDimension(value) {
  if (value.endsWith('px')) {
    return value
  }
  return value + 'px'
}

module.exports = {
  name: 'size/px',
  type: 'value',
  transitive: true,
  matcher: token =>
    ['dimension', 'borderRadius', 'spacing'].includes(token.type),
  transformer: token => transformDimension(token.value),
}
