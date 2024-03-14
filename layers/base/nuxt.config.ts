// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/mdc',
  ],
  nitro: {
    preset: 'cloudflare-pages',
    prerender: {
      autoSubfolderIndex: false // Set to false to match Cloudflare route matching rules: https://nuxt.com/deploy/cloudflare
    },
    experimental: {
      wasm: true,
    },
  },
  vite: {
    build: {
      rollupOptions: {
        external: [
          'shiki/onig.wasm', // !Important: externalize the wasm import
        ],
      },
    },
  },
  mdc: {
    headings: {
      anchorLinks: {
        h1: false,
      },
    },
    highlight: {
      highlighter: 'shiki',
      theme: {
        default: 'material-theme-lighter',
      }
    },
  },
  typescript: {
    includeWorkspace: true,
  },
})
