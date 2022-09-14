/**
 * Transforms boxShadow object to shadow shorthand
 * This currently works fine if every value uses an alias, but if any one of these use a raw value, it will not be transformed.
 */
function transformShadow(shadow) {
  const { x, y, blur, spread, color } = shadow
  return `${x}px ${y}px ${blur}px ${spread}px ${color}`
}

module.exports = {
  name: 'shadow/shorthand',
  type: 'value',
  transitive: true,
  matcher: token => ['boxShadow'].includes(token.type),
  transformer: token => {
    return Array.isArray(token.original.value)
      ? token.original.value.map(single => transformShadow(single)).join(', ')
      : transformShadow(token.original.value)
  },
}
