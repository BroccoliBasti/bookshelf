// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  telemetry: false,
  devtools: { enabled: true },
  ssr: false,
  srcDir: "Bookshelf",
  vite: {
    server: {
      strictPort: true,
      hmr: {
        protocol: "ws",
      },
    },
  },
  modules: ["@nuxtjs/tailwindcss"],
});
