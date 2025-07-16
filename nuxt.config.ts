import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],

  vite: {
   plugins: [
     tailwindcss(),
   ]
  },

  modules: ["@nuxt/fonts", "@nuxt/icon", "vue3-carousel-nuxt"],
  plugins: ["~/plugins/gsap.client.ts"],

  fonts: {
    google: [
      {
        name: "Lato",
        weights: ["400", "700"],
      },
      {
        name: "Lora",
        weights: ["600", "700"],
      },
      {
        name: "Playwrite US Trad",
        weights: ["100", "200", "300"],
      }
    ],
  },

})