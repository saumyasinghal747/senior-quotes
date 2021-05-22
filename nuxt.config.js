export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  router: {
    base: '/senior-notes/'
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Class of 2021 Send-Off',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
'@/assets/css/tailwind.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/tailwindcss',
    ['@nuxtjs/moment', { /* module options */ }]
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
  ],

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en'
    },
    meta:{
      name:'Class of 2021 Send-Off',
      description:'A collection of memories to send off the class of 2021 with lots of love!',
      ogHost:'https://saumyasinghal747.github.io/senior-quotes',
      ogImage:{
        path:'/embed-photo-large.png',
        width:'1200',
        height:'675',
        type:'image/png'
      }
    }
  },

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {
    markdown: {
      remarkPlugins: ['remark-emoji']
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
