// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",

  app: {
    head: {
      htmlAttrs: {
        lang: "en",
      },
    },
  },

  css: ["~/assets/css/main.css"],

  modules: [
    "@nuxt/content",
    "@nuxt/a11y",
    "@nuxt/ui",
    "@nuxt/image",
    "nuxt-gtag",
  ],

  ui: {
    colorMode: false,
  },

  gtag: {
    enabled: process.env.NODE_ENV === "production",
    id: "G-9KF9R8N2VK",
  },

  devtools: { enabled: true },
});
