const pkg = require('./package')

module.exports = {
  mode: 'spa',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: false,
  // loadingIndicator: {
  //   name: '~/components/loading-indicator.vue',
  //   color: '#000',
  //   background: '#fff'
  // },
  /*
  ** Global CSS
  */
  css: [
    // "drum/drum.css",
    // "bootstrap-datetimepicker.min.css",
    // "fullcalendar/dist/fullcalendar.css",
    // "switchery/switchery.css",
    // "chartist/dist/chartist.min.css",
    "@/assets/scss/global.scss",
    "@/assets/scss/page.scss",
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    "~/plugins/vue-loading-overlay"
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    '@nuxtjs/axios',
    '@nuxtjs/proxy'
  ],
  proxy: [
    [
      '/api', 
      { 
        target: 'http://localhost:3001', // api主机
        pathRewrite: { '^/api' : '/' }
      }
  ]
  ],
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      
    }
  }
}
