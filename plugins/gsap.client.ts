// plugins/gsap.client.ts
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TextPlugin } from 'gsap/TextPlugin';
// Anda bisa mengimpor plugin GSAP lainnya sesuai kebutuhan

export default defineNuxtPlugin((nuxtApp) => {
  if (process.client) {
    gsap.registerPlugin(ScrollTrigger, TextPlugin); // Daftarkan plugin yang Anda gunakan
    nuxtApp.provide('gsap', gsap); // Membuat GSAP tersedia sebagai $gsap di seluruh aplikasi
  }
});