// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    modules: ['@nuxtjs/tailwindcss', 'nuxt-icon', 'nuxt-directus'],
    directus: {
        url: 'https://6lhyfw3c.directus.app/',
        autoFetch: true
    }
})
