// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@vite-pwa/nuxt"],

  tailwindcss: {
    cssPath: "~/assets/css/tailwind.css",
    configPath: "~/tailwind.config.ts",
  },

  pwa: {
    manifest: {
      name: "module1",
      short_name: "mdl1",
      theme_color: "#8936FF",
      background_color: "#f6f6f6",
      orientation: "portrait",
      scope: "/",
      start_url: "/",
      icons: [
        {
          purpose: "maskable",
          sizes: "512x512",
          src: "images/icons/icon512_maskable.png",
          type: "image/png",
        },
        {
          purpose: "any",
          sizes: "512x512",
          src: "icon512_rounded.png",
          type: "image/png",
        },
      ],
    },
    devOptions: {
      enabled: true,
    },
  },
});
