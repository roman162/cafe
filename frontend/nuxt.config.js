const imageminMozjpeg = require('imagemin-mozjpeg')
const ImageminPlugin = require('imagemin-webpack-plugin').default
const isDev = process.env.NODE_ENV !== 'production'
import PurgecssPlugin from 'purgecss-webpack-plugin'

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Кухня Лайм',
    htmlAttrs: {
      lang: 'ru_RU'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=no' },
      { name: 'format-detection', content: 'telephone=no' },
      { property: 'og:image', content: 'https://limehd.tv/img/promo.png' },
      { property: 'twitter:image', content: 'https://limehd.tv/img/promo.png' },
      { property: 'og:locale', content: 'ru_RU' },
      { property: 'og:site_name', content: 'Лайм HD TV - бесплатное ТВ' },
      { property: 'og:type', content: 'video.other' },
      { property: 'apple-itunes-app', content: 'app-id=998832333, app-argument=limehd://?token=site' },
      { name: 'twitter:card', content: 'summary' },
      { name: 'twitter:site', content: 'Лайм HD TV - бесплатное тв' },
      { itemprop: 'name', content: 'Лайм HD TV - бесплатное тв' },
      { itemprop: 'image', content: 'https://limehd.tv/img/promo.png' },
      { name: 'yandex-verification', content: '130c4cd3c1aff9aa'},
      { name: 'document-state', content: 'dynamic' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { href: '/favicon-57x57.png', rel: 'apple-touch-icon'  },
      { href: '/favicon-60x60.png', rel: 'apple-touch-icon'  },
      { href: '/favicon-72x72.png', rel: 'apple-touch-icon'  },
      { href: '/favicon-76x76.png', rel: 'apple-touch-icon'  },
      { href: '/favicon-114x114.png', rel: 'apple-touch-icon' },
      { href: '/favicon-120x120.png', rel: 'apple-touch-icon' },
      { href: '/favicon-144x144.png', rel: 'apple-touch-icon' },
      { href: '/favicon-152x152.png', rel: 'apple-touch-icon' },
      { href: '/favicon-180x180.png', rel: 'apple-touch-icon' },
      { href: '/favicon-192x192.png', rel: 'icon', type: 'image/png' },
      { href: '/favicon-96x96.png', rel: 'icon', type: 'image/png' },
      { href: '/favicon-32x32.png', rel: 'icon', type: 'image/png' },
      { href: '/favicon-16x16.png', rel: 'icon', type: 'image/png' }
    ]
    // script: [
    //   { src: 'https://cdn.jsdelivr.net/npm/hls.js@1' },
    //   { hid: 'yandex', src: 'https://yandex.ru/ads/system/adsdk.js', async: true },
    //   { src: '//imasdk.googleapis.com/js/sdkloader/ima3.js', async: true },
    //   // { src: '/script/ad-plugin-html5-nsc.min.js', async: true },
    //   // { src: '//ulogin.ru/js/ulogin.js?v=20191204', defer: true },
    //   // { src: '//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js', async: true },
    //   // { src: 'https://ad.mail.ru/static/ads-async.js', async: true },
    //   { src: 'https://yandex.ru/ads/system/context.js', async: true },
    //   { src: 'https://yookassa.ru/checkout-widget/v1/checkout-widget.js', async: true },
    //   // { src: '/script/googletag.js'},
    //   { src: '/script/yandexRtb.js'},
    //   // { src: '/script/adsmail.js'},
    //   { src: '/script/googleads.js'},
    //   { src: '/script/metrika.js'},
    //   { src: '/script/liveinternet.js'},
    //   { src: '/script/mediascope.js' }
    // ]
  },
  mode: 'universal',
  router: {
    prefetchLinks: false,
    prefetchPayloads: false,
    // scrollBehavior() {
    //   window.scrollTo(0, 0)
    // },    
    // middleware: 'api'
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@assets/scss/main.scss',
    'video.js/dist/video-js.min.css',
    'videojs-hls-quality-selector/dist/videojs-hls-quality-selector.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    // { src: '~/plugins/videojs-dash.js', mode: 'client'}
    // { src: '~/plugins/videojs-ttml.js', mode: 'client'}
    // { src: '~/plugins/vitrina-ads.js', mode: 'client'}
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    // '@nuxtjs/eslint-module',
    '@nuxtjs/axios',
    '@nuxtjs/device'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    'nuxt-trailingslash-module',
    'nuxt-webfontloader',
    'cookie-universal-nuxt',
    '@nuxtjs/style-resources',
    'nuxt-ssr-cache',
    '@nuxtjs/manifest',
    '@nuxtjs/redirect-module',
    '@nuxtjs/sitemap',
  ],
  start: {
    workers: 8,
    workerConcurrency: 500,
    concurrency: 500
  },
  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  webfontloader: {
    events: false,
    custom: {
      families: ['Inter:400,500,600,700,800&display=swap'],
      urls: ['https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap']
    },
    timeout: 5000
  },
  styleResources: {
    // your settings here
    scss: ['./assets/scss/main.scss'], // alternative: scss
    less: [],
    stylus: []
  },
  /*
  ** Axios module configuration
  */
  axios: {
    // headers: {
    //   c2RmO2w7a2xtYm93ZW9wbDM5MDQ1NGxnZGZh: 'c2Rmc2RmYmphc2tmc2pkZiZedDUyMzc0OHVzOWZaQ1YoODk5MFNGKDMyOTByc2Zrc2tkZm5zZG9pZigpKiZmODlzZA=='
    // }
    // See https://github.com/nuxt-community/axios-module#options
  },
  render: {
    // http2: {
    //     push: true,
    //     pushAssets: (req, res, publicPath, preloadFiles) => preloadFiles
    //     .map(f => `<${publicPath}${f.file}>; rel=preload; as=${f.asType}`)
    //   },
    resourceHints: false,
    etag: false,
    static: {
      etag: false
    }
  },
  /*
  ** Build configuration
  */
  build: {
    extractCSS: true,
    extend(config, { isDev, isClient }) {
      if (!isDev && isClient) {
      config.plugins.push(
        new PurgecssPlugin({
        paths: glob.sync([
        path.join(__dirname, './pages/**/*.vue'),
        path.join(__dirname, './layouts/**/*.vue'),
        path.join(__dirname, './components/**/*.vue')
        ]),
        whitelist: ['html', 'body']
        })
      )
      }
    },
    port: 3002,
    optimizeCss: false,
    filenames: {
      app: ({ isDev }) => isDev ? '[name].js' : 'js/[contenthash].js',
      chunk: ({ isDev }) => isDev ? '[name].js' : 'js/[contenthash].js',
      css: ({ isDev }) => isDev ? '[name].css' : 'css/[contenthash].css',
      img: ({ isDev }) => isDev ? '[path][name].[ext]' : 'img/[contenthash:7].[ext]',
      font: ({ isDev }) => isDev ? '[path][name].[ext]' : 'fonts/[contenthash:7].[ext]',
      video: ({ isDev }) => isDev ? '[path][name].[ext]' : 'videos/[contenthash:7].[ext]'
    },
    ...(!isDev && {
      html: {
        minify: {
          collapseBooleanAttributes: true,
          decodeEntities: true,
          minifyCSS: true,
          minifyJS: true,
          processConditionalComments: true,
          removeEmptyAttributes: true,
          removeRedundantAttributes: true,
          trimCustomFragments: true,
          useShortDoctype: true
        }
      }
    }),
    splitChunks: {
      layouts: true,
      pages: true,
      commons: true
    },
    optimization: {
      minimize: !isDev
    },
    ...(!isDev && {
      extractCSS: {
        ignoreOrder: true
      }
    }),
    transpile: ['vue-lazy-hydration', 'intersection-observer'],
    postcss: {
      plugins: {
        ...(!isDev && {
          cssnano: {
            preset: ['advanced', {
              autoprefixer: false,
              cssDeclarationSorter: false,
              zindex: false,
              discardComments: {
                removeAll: true
              }
            }]
          }
        })
      },
      ...(!isDev && {
        preset: {
          browsers: 'cover 99.5%',
          autoprefixer: true
        }
      }),

      order: 'cssnanoLast'
    },
    extend (config, ctx) {
      const ORIGINAL_TEST = '/\\.(png|jpe?g|gif|svg|webp)$/i'
      const vueSvgLoader = [
        {
          loader: 'vue-svg-loader',
          options: {
            svgo: false
          }
        }
      ]
      const imageMinPlugin = new ImageminPlugin({
        pngquant: {
          quality: '5-30',
          speed: 7,
          strip: true
        },
        jpegtran: {
          progressive: true

        },
        gifsicle: {
          interlaced: true
        },
        plugins: [
          imageminMozjpeg({
            quality: 70,
            progressive: true
          })

        ]
      })
      if (!ctx.isDev) config.plugins.push(imageMinPlugin)

      config.module.rules.forEach(rule => {
        if (rule.test.toString() === ORIGINAL_TEST) {
          rule.test = /\.(png|jpe?g|gif|webp)$/i
          rule.use = [
            {
              loader: 'url-loader',
              options: {
                limit: 1000,
                name: ctx.isDev ? '[path][name].[ext]' : 'img/[contenthash:7].[ext]'
              }
            }
          ]
        }
      })
      //  Create the custom SVG rule
      const svgRule = {
        test: /\.svg$/,
        oneOf: [
          {
            resourceQuery: /inline/,
            use: vueSvgLoader
          },
          {
            resourceQuery: /data/,
            loader: 'url-loader'
          },
          {
            resourceQuery: /raw/,
            loader: 'raw-loader'
          },
          {
            loader: 'file-loader' // By default, always use file-loader
          }
        ]
      }

      config.module.rules.push(svgRule) // Actually add the rule
    }
  }
}
