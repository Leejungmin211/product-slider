// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss"],
  css: ["~/assets/css/tailwind.css", "~/assets/css/logo-fonts.css"],
  components: [{ path: "~/components", pathPrefix: false }],
  devServer: {
    port: 8888,
  },
  runtimeConfig: {
    public: {
      NHN_VERSION: process.env.NHN_VERSION,
      NHN_CLIENT_ID: process.env.NHN_CLIENT_ID,
      NHN_PLATFORM: process.env.NHN_PLATFORM,
    },
  },
});
