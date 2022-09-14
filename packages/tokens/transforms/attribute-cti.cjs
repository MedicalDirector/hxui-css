// taken from: https://github.com/dbanksdesign/style-dictionary-dark-mode/blob/multi-file/transforms/attributeCTI.js
const StyleDictionary = require('style-dictionary')
const transformer = StyleDictionary.transform['attribute/cti'].transformer

const propertiesToCTI = {
  width: { category: 'size', type: 'dimension' },
  'min-width': { category: 'size', type: 'dimension' },
  'max-width': { category: 'size', type: 'dimension' },
  height: { category: 'size', type: 'dimension' },
  'min-height': { category: 'size', type: 'dimension' },
  'max-height': { category: 'size', type: 'dimension' },
  'border-width': { category: 'size', type: 'border', item: 'width' },
  'border-radius': { category: 'size', type: 'border', item: 'width' },
  'border-color': { category: 'color', type: 'border' },
  'background-color': { category: 'color', type: 'background' },
  color: { category: 'color', type: 'font' },
  'text-color': { category: 'color', type: 'font' },
  padding: { category: 'size', type: 'padding' },
  'padding-vertical': { category: 'size', type: 'padding' },
  'padding-horizontal': { category: 'size', type: 'padding' },
  icon: { category: 'content', type: 'icon' },
  'font-size': { category: 'size', type: 'font' },
  'line-height': { category: 'size', type: 'line-height' },
  size: { category: 'size', type: 'icon' },
}

module.exports = {
  name: 'attribute/cti',
  type: 'attribute',
  transformer: token => {
    // Only do this custom functionality in the 'component' top-level namespace.
    if (token.path.includes('component')) {
      // When defining component tokens, the key of the token is the relevant CSS property
      // The key of the token is the last element in the path array
      return propertiesToCTI[token.path[token.path.length - 1]]
    } else {
      // Fallback to the original 'attribute/cti' transformer
      return transformer(token)
    }
  },
}
