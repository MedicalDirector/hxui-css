#!/usr/bin/env node

const glob = require('glob')
const fs = require('fs')
const yargs = require('yargs/yargs')
const hideBin = require('yargs/helpers').hideBin
const getDirName = require('path').dirname

/////////
// CLI //
/////////

/** Command line arguments */
const argv = yargs(hideBin(process.argv))
  .usage('generate-figma-tokens input output folders themes')
  .example(
    'token-transformer ./tokens figma-tokens.json global,semantic,component md,cc'
  )
  .command(
    '$0 <input> <output> [folders] [themes]',
    'transforms given tokens',
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
        .positional('folders', {
          description: 'Folders to be searched, comma separated',
          type: 'string',
          default: [],
        })
        .positional('themes', {
          description:
            'Themes to be included in addition to base, comma separated',
          type: 'string',
          default: [],
        })
    }
  )
  .help()
  .version()
  .parse()

const tokenWarnings = []

/**
 * write figma tokens (single) from `tokens/` directory
 *
 * references:
 * @see {@link https://github.com/six7/figma-tokens/blob/1a3b9fc188c99dd69d057c20d5bf3fe91fa4b255/token-transformer/index.js}
 * @see {@link https://github.com/phantasmagoriadigital/sux-style-dictionary/blob/master/git/generate-figma-tokens.js}
 */
function generate() {
  const {
    input,
    output: outputPath,
    folders: foldersArg,
    themes: themesArg,
  } = argv

  const folders =
    typeof foldersArg === 'string' ? foldersArg.split(',') : foldersArg ?? []
  const _themes =
    typeof themesArg === 'string' ? themesArg.split(',') : themesArg ?? []

  // remove forward slash at end of input directory
  const inputPath = input.substr(-1) === '/' ? input.slice(0, -1) : input

  // check if themes contains 'base'; move/add to start
  const themes = _themes.includes('base')
    ? ['base'].concat(_themes.filter(x => x !== 'base'))
    : ['base'].concat(_themes)

  if (fs.existsSync(input)) {
    // get flat array of filepaths in folders per theme, ordered
    const filesByThemeArr = themes.flatMap(t =>
      folders.flatMap(f => findFiles(inputPath, f, t))
    )

    const tokensObj = composeFigmaObjects(inputPath, filesByThemeArr)

    console.log(`📦 Writing Figma Tokens file to '${outputPath}'`)
    storeData(outputPath, tokensObj)
    console.log('✅ \u001b[' + 32 + 'm' + `You're all done` + '\u001b[0m')
    console.log(
      `🐞 Token Warnings: ` + '\u001b[' + 33 + 'm' + `${tokenWarnings.length}`,
      '\u001b[0m'
    )
  } else {
    throw new Error('input directory not found')
  }
}

/////////////
// HELPERS //
/////////////

function findFiles(tokensPath, searchFolder, themeName) {
  if (
    typeof tokensPath !== 'string' ||
    typeof searchFolder !== 'string' ||
    typeof themeName !== 'string'
  ) {
    throw new Error('type needs to be either global, semantic or component')
  }

  return glob.sync(`${tokensPath}/${searchFolder}/**/*${themeName}*.json`)
}

function composeFigmaObjects(tokensPath, filesArr) {
  const result = filesArr.reduce((acc, filePath) => {
    const setName = transformFilepathToSetName(tokensPath, filePath)
    const json = fs.readFileSync(filePath, 'utf-8')
    const obj = JSON.parse(json)

    lintTokens(obj)

    return { ...acc, [setName]: obj }
  }, {})

  return result
}

function transformFilepathToSetName(tokensPath, filePath) {
  const setArr = filePath
    .replace(`${tokensPath}/`, '')
    .replace('.json', '')
    .split('/')

  let setName
  if (setArr.length > 3) {
    const inner = setArr.slice(1, -1).join('_')
    setName = [setArr[0], inner, setArr[setArr.length - 1]].join('-')
  } else {
    setName = setArr.join('-')
  }

  return setName
}

/**
 * lint and attempt repair for tokens with missing types
 * by recursively run through tokens object and checking for missing types
 *
 * @param {Record<string,string|number>} obj
 *
 * taken from:
 * @see {@link https://github.com/phantasmagoriadigital/sux-style-dictionary/blob/master/git/generate-figma-tokens.js}
 */
function lintTokens(obj) {
  Object.keys(obj).forEach(key => {
    // check if the current node holds an object
    // if it does, recursively run through the object as well
    if (typeof obj[key] === 'object') {
      // Log the current key name
      console.log(
        // "%c "+key, "color: green",
        '\u001b[' + 32 + 'm' + '## ' + key + '\u001b[0m'
      )

      /**
       * check all keys for their type and assign proper type attribute to the token
       */
      switch (key) {
        case 'border-radius':
          !obj[key].type
            ? repairMissingType(key, obj[key], 'borderRadius')
            : null
          break
        case 'border-width':
          !obj[key].type
            ? repairMissingType(key, obj[key], 'borderWidth')
            : null
          break
        case 'color':
        case 'background-color':
        case 'border-color':
        case 'text-color':
        case 'background-color-hover':
        case 'text-color-hover':
          !obj[key].type ? repairMissingType(key, obj[key], 'color') : null
          break
        case 'font-family':
          !obj[key].type
            ? repairMissingType(key, obj[key], 'fontFamilies')
            : null
          break
        case 'font-size':
        case 'text-size':
          !obj[key].type ? repairMissingType(key, obj[key], 'fontSizes') : null
          break
        case 'font-style':
          !obj[key].type ? repairMissingType(key, obj[key], 'fontStyle') : null
          break
        case 'font-weight':
          !obj[key].type
            ? repairMissingType(key, obj[key], 'fontWeights')
            : null
          break
        case 'line-height':
          !obj[key].type
            ? repairMissingType(key, obj[key], 'lineHeights')
            : null
          break
        case 'opacity':
          !obj[key].type ? repairMissingType(key, obj[key], 'opacity') : null
          break
        case 'size':
          !obj[key].type ? repairMissingType(key, obj[key], 'sizing') : null
          break
        case 'space':
        case 'padding-left':
        case 'padding-right':
        case 'padding-top':
        case 'padding-bottom':
        case 'margin-left':
        case 'margin-right':
        case 'margin-top':
        case 'margin-bottom':
        case 'padding':
        case 'margin':
          !obj[key].type ? repairMissingType(key, obj[key], 'spacing') : null
          break
        default:
          break
      }
      lintTokens(obj[key])
    }
    //
    else {
      /**
       * check if obj[key] is a string and remove ".value" from each obj.key
       * to match the figma tokens json pattern
       */
      if (typeof obj[key] === 'string' || obj[key] instanceof String) {
        const valueBefore = obj[key]
        if (obj[key].includes('.value')) {
          obj[key] = obj[key].replace('.value', '')
          console.log("🛠 '.value' found in reference, updating string:")
          console.log(
            '  ',
            '\u001b[' + 31 + 'm' + valueBefore + '\u001b[0m',
            ' => ',
            '\u001b[' + 32 + 'm' + obj[key] + '\u001b[0m'
          )
        } else {
          valueBefore.includes('.value') ? console.log(`🎉 All good!`) : null
        }
        console.log(``)
      }
    }
  })
}

function repairMissingType(key, obj, type = 'not-set') {
  obj.type = type
  console.log(
    '💩 \u001b[' + 33 + 'm' + 'no type specified for ' + key + '\u001b[0m'
  )
  console.log(
    '   \u001b[' +
      33 +
      'm' +
      'consider adding "type": "' +
      type +
      '"' +
      '\u001b[0m'
  )
  tokenWarnings.push(key)
}

function storeData(path, data) {
  try {
    fs.mkdir(getDirName(path), { recursive: true }, err => {
      if (err) throw err

      return fs.writeFileSync(path, JSON.stringify(data, null, 2))
    })
  } catch (err) {
    console.error(err)
  }
}

/////////
// RUN //
/////////

generate()
