// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  modules: [
    "@nuxt/ui",
    "@nuxt/image",
    "@nuxt/fonts",
    "nuxt-security",
    "@nuxt/eslint",
    "@nuxtjs/cloudinary",
  ],
  future: {
    compatibilityVersion: 4,
  },

  runtimeConfig: {
    databaseUrl: process.env.DATABASE_URL,
    databaseAuthToken: process.env.DATABASE_AUTH_TOKEN,
  },

  $production: {
    ignorePrefix: "_",
  },

  security: {
    headers: {
      contentSecurityPolicy: {
        "img-src": ["'self'", "data:", "https://res.cloudinary.com"],
      },
    },
  },

  routeRules: {
    "/": { prerender: true },
    "/contact": { prerender: true },
    "/product": { prerender: true },
    "/about": { prerender: true },
    "/dashboard/daftar": {
      security: {
        headers: {
          crossOriginOpenerPolicy: false,
        },
      },
    },
  },
});
