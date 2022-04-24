import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    runtimeConfig: {
        public: {
            apiToken: process.env.STORYBLOK_TOKEN
        }
    },
    ssr: false,
    modules: ['@nuxtjs/tailwindcss'],
})
