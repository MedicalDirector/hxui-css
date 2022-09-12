# HXUI CSS

A pure css library based on the [HXUI design system](https://hxui.io).

## Installation

```bash
npm i @hxui/css
```

## Usage

Import uncompiled main sass file to your project.

```scss
// path/to/hxui-icon-font may need to be updated
@use '~@hxui/css' with (
  $icons-path: '~@hxui/css/dist/fonts/'
);
```

### Options

Working on a marketing or documentation site? Import the following:

```scss
@use '@hxui/css/src/marketing';
```

### Notes

It is expected that you provide your own css resets and fonts.

It is also expected you make use of `browserslist`, and use `autoprefixer` in your build step. This is handled automagically in modern JS frameworks.

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)
