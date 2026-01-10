// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],

  vite: {
    plugins: [tailwindcss()],
  },
  ignore: [
    "content/*",
    "components/*",
    "pages/contact.vue",
    "pages/experience.vue",
    "pages/skills.vue",
  ],
  modules: ["@nuxt/image", "@nuxt/icon", "@nuxtjs/i18n", "@nuxt/content"],
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
