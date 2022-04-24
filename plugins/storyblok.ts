import {
    StoryblokVue, apiPlugin
} from '@storyblok/vue';

export default defineNuxtPlugin(nuxtApp => {
    const config = useRuntimeConfig().public

    nuxtApp.vueApp.use(StoryblokVue, {
        accessToken: config.apiToken,
        use: [apiPlugin]
    });
})