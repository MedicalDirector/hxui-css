function getBasePxFontSize(options) {
  return (options && options.basePxFontSize) || 16
}

function throwSizeError(name, value, unitType) {
  throw `Invalid Number: '${name}: ${value}' is not a valid number, cannot transform to '${unitType}' \n`
}

/**
 * Scales non-zero numbers to rem. If you define a "basePxFontSize" on the platform in your config, it will be used to scale the value, otherwise 16 (default web font size) will be used.
 * modified from https://github.com/amzn/style-dictionary/blob/main/lib/common/transforms.js
 */
module.exports = {
  name: 'size/pxToRem',
  type: 'value',
  transitive: true,
  matcher: token =>
    ['fontSizes', 'lineHeights'].includes(token.type) &&
    token.path[token.path.length - 1] !== '_base',
  transformer: (token, options) => {
    const baseFont = getBasePxFontSize(options)
    const floatVal = parseFloat(token.value)

    if (isNaN(floatVal)) {
      throwSizeError(token.name, token.value, 'rem')
    }

    if (floatVal === 0) {
      return '0'
    }

    return `${floatVal / baseFont}`
  },
}
