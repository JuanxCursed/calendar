export default {
    ssr: false,
    head: {
        title: 'calendar',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: '' },
            { name: 'format-detection', content: 'telephone=no' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.png', async: true, },
            { rel: 'preconnect', href: '//fonts.googleapis.com', async: true, },
            { rel: 'preconnect', href: '//fonts.gstatic.com', async: true, crossorigin: true, },
            { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Poppins:300,400,600,700&display=swap' },
            { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.2/css/all.min.css', }
        ]
    },
    css: [],
    plugins: [
        '~/plugins/vee-validate.js',
        '~/plugins/i18n.js',
        '~/plugins/repositories.js',
        { src: '~plugins/persistedState.js' },
    ],
    components: true,
    loadingIndicator: {
        name: 'folding-cube',
        color: '#C94B4B',
        background: '#4B134F'
    },
    buildModules: [],
    modules: [
        '@nuxtjs/moment',
        '@nuxtjs/pwa',
        '@nuxtjs/i18n',
    ],
    moment: {
        defaultLocale: process.env.DEFAULT_LOCALE || 'pt-br',
        locales: ['pt-br'],
        timezone: true,
        defaultTimezone: process.env.DEFAULT_TIMEZONE || 'America/Sao_Paulo',
    },
    i18n: {
        baseUrl: process.env.APP_BASE_URL || 'localhost',
        locales: [{
            code: 'pt',
            iso: 'pt-BR',
            file: 'pt.js',
            name: 'Português',
        },
        {
            code: 'es',
            iso: 'es-ES',
            file: 'es.js',
            name: 'Español',
        },
        {
            code: 'en',
            iso: 'en-US',
            file: 'en.js',
            name: 'English',
        }
        ],
        lazy: true,
        langDir: 'lang/',
        defaultLocale: process.env.DEFAULT_LOCALE || 'pt',
        fallbackLocale: process.env.DEFAULT_LOCALE || 'pt',
        vueI18n: {
            fallbackLocale: process.env.DEFAULT_LOCALE || 'pt',
        },
        alwaysRedirect: true,
        detectBrowserLanguage: {
            useCookie: true,
            cookieKey: 'i18n_redirected',
            redirectOn: 'root',
        },

    },

    vue: {
        config: {
            productionTip: false,
            devtools: true
        }
    },
    pwa: {
        manifest: {
            lang: 'en'
        }
    },
    build: {}
}