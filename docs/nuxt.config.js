export default {
  /*
   * Headers of the page
   */
  head: {
    title: 'HxUI - A health care focused UI Library',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', media: 'all', href: '/' },
    ],
  },
  target: 'static',
  /*
   * Customize the progress bar color
   */
  loading: { color: '#3B8070' },
  /*
   * Build configuration
   */
  build: {
    extractCSS: true,
    postcss: null,
    babel: {
      babelrc: false,
      cacheDirectory: undefined,
      presets: [
        [
          '@nuxt/babel-preset-app',
          {
            corejs: { version: 3 },
          },
        ],
      ],
    },
  },
  buildModules: ['@nuxtjs/google-fonts'],
  buildDir: '../.nuxt',
  generate: {
    // TODO move to ./dist
    dir: '../dist',
  },
  /**
   * Fonts
   *
   * **Note:** Needed for nuxt website
   */
  googleFonts: {
    families: {
      Roboto: [300, 400, 500, 700],
    },
  },
  /*
   * CSS
   */
  css: ['~/assets/styles/main.scss'],
  /*
   * Plug-ins
   */
  plugins: [
    '~/plugins/vue-highlightjs',
    { src: '~/plugins/ga.js', ssr: false },
  ],
}