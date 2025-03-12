// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: false },
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

  tailwindcss: {
    config: {
      content: [
        "./app/pages/**/*.{vue,js,ts}",
        "./app/components/**/*.{vue,js,ts}",
      ],
    },
  },

  $development: {
    security: {
      removeLoggers: false,
    },
  },

  $production: {
    ignorePrefix: "_",
  },

  security: {
    headers: {
      permissionsPolicy: {
        camera: false,
      },
      crossOriginEmbedderPolicy: false,
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
  },
});
