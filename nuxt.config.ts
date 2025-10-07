// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],

  vite: {
    plugins: [tailwindcss()],
  },
  modules: ["@nuxt/image", "@nuxt/icon", "@nuxtjs/i18n"],
  i18n: {
    customRoutes: "config",
    defaultLocale: "en",
    locales: [
      { code: "en", name: "English", file: "en.json" },
      { code: "pt", name: "Portugues", file: "pt.json" },
    ],
    pages: {
      experience: {
        pt: "/experiência",
      },
      skills: {
        pt: "/habilidades",
      },
      contact: {
        pt: "/contato",
      },
    },
  },
});
