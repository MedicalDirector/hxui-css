#!/usr/bin/env node

const fs = require('fs-extra')
const yargs = require('yargs/yargs')
const hideBin = require('yargs/helpers').hideBin

///////////
// SETUP //
///////////

// figma-tokens properties reference
// https://github.com/six7/figma-tokens/blob/main/src/constants/Properties.ts

const attributeCTI = require('../transforms/attribute-cti.cjs')
const { component: nameComponent } = require('../transforms/name.cjs')
// const sizePX = require('../transforms/size-px.cjs')
const sizePxToRem = require('../transforms/size-px-to-rem.cjs')
const sizeLetterSpacing = require('../transforms/size-letter-spacing.cjs')
const {
  shorthand: shadowShorthand,
} = require('../transforms/shadow-shorthand.cjs')
const typeFontWeight = require('../transforms/type-font-weight.cjs')
const resolveMath = require('../transforms/resolve-math.cjs')
const {
  hslRgba: colorHslRgba,
  hexRgba: colorHexRgba,
} = require('../transforms/color-rgba.cjs')
const {
  shorthand: typeShorthand,
  classes: typeClasses,
} = require('../transforms/type-shorthand.cjs')

const cssVariables = require('../formats/css-variables.cjs')
const scssVariablesMixin = require('../formats/scss-variables-mixin.cjs')
const typographyClasses = require('../formats/typography-classes.cjs')
const colorClasses = require('../formats/color-classes.cjs')

const StyleDictionary = require('style-dictionary')

// register transforms
StyleDictionary.registerTransform(attributeCTI)
StyleDictionary.registerTransform(nameComponent)
// StyleDictionary.registerTransform(sizePX)
StyleDictionary.registerTransform(sizePxToRem)
StyleDictionary.registerTransform(sizeLetterSpacing)
StyleDictionary.registerTransform(shadowShorthand)
StyleDictionary.registerTransform(resolveMath)
StyleDictionary.registerTransform(colorHexRgba)
StyleDictionary.registerTransform(colorHslRgba)
StyleDictionary.registerTransform(typeFontWeight)
StyleDictionary.registerTransform(typeShorthand)
StyleDictionary.registerTransform(typeClasses)

// register transformGroups
StyleDictionary.registerTransformGroup({
  name: 'css/typeClasses',
  transforms: [
    'name/cti/kebab',
    'name/tokenRename',
    'type/classes',
    'value/resolveMath',
    'type/fontWeight',
    'size/letterSpacing',
    'size/pxToRem',
    // 'size/px',
  ],
})
StyleDictionary.registerTransformGroup({
  name: 'css/colorClasses',
  transforms: [
    'name/cti/kebab',
    'name/tokenRename',
    'color/hexrgba',
    'color/hslrgba',
    // 'type/classes',
  ],
})
StyleDictionary.registerTransformGroup({
  name: 'webVariables',
  transforms: [
    'attribute/cti',
    'name/cti/kebab',
    'name/tokenRename',
    'value/resolveMath',
    'type/shorthand',
    'shadow/shorthand',
    'size/letterSpacing',
    'type/fontWeight',
    'color/hexrgba',
    'color/hslrgba',
    'size/pxToRem',
    // 'size/px',
  ],
})
// register formats
StyleDictionary.registerFormat(cssVariables)
StyleDictionary.registerFormat(scssVariablesMixin)
StyleDictionary.registerFormat(typographyClasses)
StyleDictionary.registerFormat(colorClasses)

/////////
// CLI //
/////////

/** Command line arguments */
const argv = yargs(hideBin(process.argv))
  .usage('build input output themes name')
  .example('build ./tokens ./dist/ base,md md-light')
  .command(
    '$0 <input> <output> [themes] [name]',
    'build token outputs',
    _yargs => {
      _yargs
        .positional('input', {
          description: 'Input folder containing the token directory',
          type: 'string',
          array: true,
          demandOption: 'ERROR: Specify an input first (e.g. ./tokens)',
        })
        .positional('output', {
          description: 'Output file to write the figma tokens to',
          type: 'string',
          array: true,
          demandOption:
            'ERROR: Specify an output first (e.g. ./figma-tokens.json)',
        })
        .positional('themes', {
          description: 'Themes to be included',
          type: 'string',
          default: [],
        })
        .positional('name', {
          description: 'Name of output associated with the themes',
          type: 'string',
          default: '',
        })
    }
  )
  .help()
  .version()
  .parse()

// taken from jan6 gist: https://gist.github.com/six7/9cbce8bcbb16b308c5c87f3729392d21

function build() {
  const { input, output, themes: themesArg, name } = argv

  const _themes =
    typeof themesArg === 'string' ? themesArg.split(',') : themesArg ?? []

  // remove forward slash at end of input directory
  const inputPath = input.substr(-1) === '/' ? input.slice(0, -1) : input

  // add forward slash at end of output directory
  const outputPath = output.substr(-1) === '/' ? output : `${output}/`

  // check if themes contains 'base'; move/add to start
  const themes = _themes.includes('base')
    ? [].concat(_themes.filter(x => x !== 'base'))
    : [].concat(_themes)

  const baseOnly = _themes === ['base']

  if (fs.existsSync(input)) {
    // remove directories before generating files to make sure they are clean
    console.log(`✨ Cleaning ${outputPath}...`)
    fs.removeSync(outputPath)

    console.log('📦 Build started...')
    console.log('\n==============================================')

    console.log(`\n\n🌈🌙 Building ${name} mode...`)
    const buildTheme = StyleDictionary.extend(
      getStyleDictionaryConfig(name, themes, inputPath, outputPath, baseOnly)
    )

    buildTheme.buildAllPlatforms()

    console.log(`\n\n🌈🌙 Building typgraphy classes for ${name} mode...`)
    const buildTypography = StyleDictionary.extend(
      getTypographyConfig(inputPath, outputPath, themes, baseOnly)
    )
    buildTypography.buildAllPlatforms()

    console.log(`\n\n🌈🌙 Building color classes for ${name} mode...`)
    const buildColor = StyleDictionary.extend(
      getColorConfig(inputPath, outputPath, themes, baseOnly)
    )
    buildColor.buildAllPlatforms()

    console.log('\n==============================================')
    console.log('\n✅ Build completed!')
  } else {
    console.log('\n🐞 Input directory not found!')
  }
}

/////////////
// HELPERS //
/////////////

function getTypographyConfig(
  inputPath,
  outputPath,
  allThemes,
  baseOnly = false
) {
  return {
    // include is for baseline tokens
    include: [
      `${inputPath}/global/font/**/*base.json`,
      `${inputPath}/semantic/font/**/*base.json`,
    ],
    ...(allThemes?.length || !baseOnly
      ? {
          // source is for overrides to baseline tokens
          source: [
            `${inputPath}/global/font/**/*(${allThemes.join(`|*.`)}).json`,
            `${inputPath}/semantic/font/**/*(${allThemes.join(`|*.`)}).json`,
          ],
        }
      : {}),

    platforms: {
      css: {
        transformGroup: 'css/typeClasses',
        buildPath: outputPath,
        files: [
          {
            destination: `css/typography.css`,
            format: 'css/typographyClasses',
            filter: token => token.type === 'typography',
          },
        ],
      },
      scss: {
        transformGroup: 'css/typeClasses',
        buildPath: outputPath,
        files: [
          {
            destination: `scss/_typography.scss`,
            format: 'css/typographyClasses',
            filter: token => token.type === 'typography',
          },
        ],
      },
    },
  }
}

function getColorConfig(inputPath, outputPath, allThemes, baseOnly = false) {
  const colorFilter = token =>
    !token.path[token.path.length - 1].startsWith('_') &&
    token.type === 'color' &&
    token.path.includes('semantic') &&
    !token.path.includes('action')

  return {
    // include is for baseline tokens
    include: [
      `${inputPath}/global/opacity/**/*base.json`,
      `${inputPath}/global/color/**/*base.json`,
      `${inputPath}/semantic/color/**/*base.json`,
    ],
    ...(allThemes?.length || !baseOnly
      ? {
          // source is for overrides to baseline tokens
          source: [
            `${inputPath}/global/color/**/*(${allThemes.join(`|*.`)}).json`,
            `${inputPath}/semantic/color/**/*(${allThemes.join(`|*.`)}).json`,
          ],
        }
      : {}),

    platforms: {
      // css: {
      //   transformGroup: 'css/colorClasses',
      //   buildPath: outputPath,
      //   files: [
      //     {
      //       destination: `css/color.css`,
      //       format: 'css/colorClasses',
      //       filter: token => colorFilter(token),
      //       options: {
      //         outputReferences: true,
      //       },
      //     },
      //   ],
      // },
      scss: {
        transformGroup: 'css/colorClasses',
        buildPath: outputPath,
        files: [
          {
            destination: `scss/_color.scss`,
            format: 'css/colorClasses',
            filter: token => colorFilter(token),
            // options: {
            //   outputReferences: true,
            // },
          },
        ],
      },
    },
  }
}

function getStyleDictionaryConfig(
  theme,
  allThemes,
  inputPath,
  outputPath,
  baseOnly = false
) {
  const baseFilter = token =>
    !['color', 'boxShadow'].includes(token.type) &&
    !['global', 'font'].every(v => token.path.includes(v))
  const colorFilter = token =>
    !token.path[token.path.length - 1].startsWith('_') &&
    ((token.type === 'color' && !token.path.includes('global')) ||
      token.type === 'boxShadow')

  return {
    // include is for baseline tokens
    include: [
      `${inputPath}/global/**/*base.json`,
      `${inputPath}/semantic/**/*base.json`,
      `${inputPath}/component/**/*base.json`,
    ],
    // source is for overrides to baseline tokens
    ...(allThemes?.length || !baseOnly
      ? {
          source: [
            `${inputPath}/global/**/*(${allThemes.join(`|*.`)}).json`,
            `${inputPath}/semantic/**/*(${allThemes.join(`|*.`)}).json`,
            `${inputPath}/component/**/*(${allThemes.join(`|*.`)}).json`,
          ],
        }
      : {}),
    platforms: {
      css: {
        transformGroup: 'webVariables',
        buildPath: outputPath,
        files: [
          {
            destination: `css/misc.css`,
            format: `css/variables`,
            filter: token => baseFilter(token),
            options: {
              selector: ':root',
              outputReferences: false,
            },
          },
          {
            destination: `css/color/${theme}.css`,
            format: `css/variables`,
            filter: token => colorFilter(token),
            options: {
              selector: baseOnly ? ':root' : `.${theme}-theme`,
            },
          },
        ],
      },
      scss: {
        transformGroup: 'webVariables',
        buildPath: outputPath,
        files: [
          {
            destination: `scss/_variables.scss`,
            format: `scss/variables`,
            filter: token => baseFilter(token),
            options: {
              selector: 'base',
              outputReferences: false,
            },
          },
          {
            destination: `scss/_mixin.scss`,
            format: `scss/variables-mixin`,
            filter: token => baseFilter(token),
            options: {
              selector: 'base',
              outputReferences: false,
            },
          },
          {
            destination: `scss/colors/_${theme}.scss`,
            format: 'scss/variables-mixin',
            filter: token => colorFilter(token),
            options: {
              selector: baseOnly ? 'light' : `${theme}`,
            },
          },
        ],
      },
    },
  }
}

/////////
// RUN //
/////////

build()
