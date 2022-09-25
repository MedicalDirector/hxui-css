// const formattedVariables = require('../utils/formatted-variables-mod.cjs')
const StyleDictionary = require('style-dictionary')
const sortByReference = StyleDictionary.formatHelpers.sortByReference

/**
 * Format for css typography classes
 * This generates theme-independent css classes so we're fine with just using css variables here
 * We're using the css shorthand to define the font: property and define all other values according to the typography token
 */
module.exports = {
  name: 'css/colorClasses',
  formatter: function ({ dictionary, options = {} }) {
    const outputReferences = (options && options.outputReferences) || false

    let { allTokens } = dictionary

    if (outputReferences) {
      // note: using the spread operator here so we get a new array rather than
      // mutating the original
      allTokens = [...allTokens].sort(sortByReference(dictionary))
    }

    return (
      `$namespace: "hx" !default;\n\n` +
      allTokens
        .map(
          createPropertyFormatter({
            outputReferences,
            dictionary,
            format: 'css',
            formatting: {
              prefix: '--',
              indentation: '  ',
              separator: ':',
              suffix: ';\n}\n',
            },
          })
        )
        .filter(function (strVal) {
          return !!strVal
        })
        .join('\n') +
      allTokens
        .map(
          createPropertyFormatter({
            outputReferences,
            dictionary,
            format: 'css',
            formatting: {
              prefix: '--',
              indentation: '  ',
              separator: ':',
              suffix: ';\n}\n',
            },
            important: true,
          })
        )
        .filter(function (strVal) {
          return !!strVal
        })
        .join('\n')
    )
  },
}

function createPropertyFormatter({
  outputReferences = false,
  outputReferenceFallbacks = false,
  dictionary,
  transform,
  formatting,
  important = false,
}) {
  let { prefix, indentation, separator, suffix } = Object.assign({}, formatting)

  return function (token) {
    let token_name_mod = token.name
      .replace('color-', '')
      .replace('foreground', 'fg')
      .replace('surface', 'bg')
      .replace('border', 'bdr')
      .replace('-default', '')

    let class_name = ''
    if (important) {
      class_name += `.\\!#{$namespace}-${token_name_mod},\n.\\!${token_name_mod} {\n`
    } else {
      class_name += `.#{$namespace}-${token_name_mod},\n.${token_name_mod} {\n`
    }

    let to_ret_prop = class_name

    let prop_key = ''
    if (token.path.includes('border')) {
      prop_key = 'border-color'
    } else if (token.path.includes('foreground')) {
      prop_key = 'color'
    } else if (token.path.includes('surface')) {
      prop_key = 'background-color'
    }

    to_ret_prop += `${indentation}${prop_key}${separator} `

    let value = token.value

    /**
     * A single value can have multiple references either by interpolation:
     * "value": "{size.border.width.value} solid {color.border.primary.value}"
     * or if the value is an object:
     * "value": {
     *    "size": "{size.border.width.value}",
     *    "style": "solid",
     *    "color": "{color.border.primary.value"}
     * }
     * This will see if there are references and if there are, replace
     * the resolved value with the reference's name.
     */
    if (outputReferences && dictionary.usesReference(token.original.value)) {
      // Formats that use this function expect `value` to be a string
      // or else you will get '[object Object]' in the output
      if (typeof value === 'string') {
        const refs = dictionary.getReferences(token.original.value)
        refs.forEach(ref => {
          // value should be a string that contains the resolved reference
          // because Style Dictionary resolved this in the resolution step.
          // Here we are undoing that by replacing the value with
          // the reference's name
          if (ref.value && ref.name) {
            value = value.replace(ref.value, function () {
              if (outputReferenceFallbacks) {
                return `var(${prefix}${ref.name}, ${ref.value})`
              } else {
                return `var(${prefix}${ref.name})`
              }
            })
          }
        })
      }
    }

    if (!!transform && typeof transform === 'function') {
      value = transform(value, token, dictionary)
    }

    to_ret_prop += value

    if (important) {
      to_ret_prop += ' !important'
    }

    to_ret_prop += suffix

    return to_ret_prop
  }
}
