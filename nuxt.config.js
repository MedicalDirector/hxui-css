module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'gethxui.com',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', media: 'all', href: '/'}
    ],
    htmlAttrs: {
      class: 'hxui-reset'
    }
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    },
    extractCSS: true,
    filenames: {
      css: 'css/hxui.css'
    }
  },
  /*
  ** CSS
  */
  css: [
    // SCSS file in the project
    '@/static/static/scss/hxui.scss',
    'highlight.js/styles/atom-one-dark.css'
  ],
  /*
  ** Plug-ins
  */
  plugins: [
    '~/plugins/vue-highlightjs'
  ]
}
