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
    "@vueuse/nuxt",
  ],
  future: {
    compatibilityVersion: 4,
  },
  css: ["~/assets/css/main.css"],

  runtimeConfig: {
    databaseUrl: process.env.DATABASE_URL,
    databaseAuthToken: process.env.DATABASE_AUTH_TOKEN,
    googleMapsApiKey: process.env.GOOGLE_MAPS_API_KEY,
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
        "img-src": [
          "'self'",
          "data:",
          "https://res.cloudinary.com",
          "https://maps.googleapis.com",
          "https://maps.gstatic.com",
        ],
      },
    },
  },

  nitro: {
    prerender: {
      routes: ["/", "/contact", "/product", "/about"],
    },
  },
});
