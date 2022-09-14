#!/usr/bin/env node

const fs = require('fs')
const yargs = require('yargs/yargs')
const hideBin = require('yargs/helpers').hideBin

/////////
// CLI //
/////////

/** Command line arguments */
const argv = yargs(hideBin(process.argv))
  .usage('figma-to-sd input output excludes')
  .example('figma-to-sd ./figma-tokens.json ./tokens')
  .command(
    '$0 <input> <output> <excludes>',
    'transforms given tokens',
    _yargs => {
      _yargs
        .positional('input', {
          description: 'Input file containing the figma tokens json',
          type: 'string',
          array: true,
          demandOption:
            'ERROR: Specify an input first (e.g. ./figma-tokens.json)',
        })
        .positional('output', {
          description:
            'Output directory to write the tokens to, readable by SD',
          type: 'string',
          array: true,
          demandOption: 'ERROR: Specify an output first (e.g. ./tokens)',
        })
        .positional('excludes', {
          description: 'Sets to be excluded, comma separated',
          type: 'string',
          default: [],
        })
    }
  )
  .help()
  .version()
  .parse()

/**
 * convert figma tokens to `tokens/` directory
 *
 * references:
 * @see {@link https://gist.github.com/six7/ddb9b1f0d0c6e434be4f1cdb8bfe56e1}
 */
function convert() {
  const { input, output, excludes: excludesArg } = argv

  const excludes =
    typeof excludesArg === 'string' ? excludesArg.split(',') : excludesArg ?? []

  // format output directory
  // TODO: streamline this
  let outputPath = output

  // remove leading
  if (outputPath.substr(0, 1) === './') {
    outputPath = output.substr(2)
  } else {
    outputPath = output
  }

  if (outputPath.substr(-1) === '/') {
    outputPath = outputPath.slice(0, -1)
  }

  if (fs.existsSync(input)) {
    // read JSON object from file
    fs.readFile(input, 'utf-8', (err, data) => {
      if (err) throw err

      // read single-file figma tokens file
      const tokensObj = JSON.parse(data.toString())

      Object.entries(tokensObj).forEach(([setName, setValues]) => {
        if (excludes.includes(setName)) {
          return null
        }

        const [stage, _folder, _file] = setName.split('-')

        const folder = _folder.split('_').join('/')
        const file = _file.split('_').join('.')

        const path = `${outputPath}/${stage}/${folder}/${file}`

        // create folders if required
        if (path.split('/').length > 2) {
          path
            .split('/')
            .slice(0, -1)
            .reduce((directories, directory) => {
              directories += `${directory}/`

              if (!fs.existsSync(directories)) {
                fs.mkdirSync(directories)
              }

              return directories
            }, '')
        }

        // write JSON string to a file
        fs.writeFile(
          `${path}.json`,
          JSON.stringify(setValues, null, 2),
          err => {
            if (err) throw err
          }
        )
      })
    })
  } else {
    throw new Error('input directory not found')
  }
}

/////////
// RUN //
/////////

convert()
