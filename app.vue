<script setup lang="ts">
 import { useStoryblokApi } from "@storyblok/vue";
import ModuleCard from "./components/module-card.vue";

  const storyblokApi = useStoryblokApi();
  const { data } = await storyblokApi.get("cdn/stories", { version: "draft", starts_with: 'modules' });
  const modules = computed(() => data.stories);
</script>

<template>
  <TheHeader />
  <div class="container mx-auto p-8 grid grid-cols-1 md:grid-cols-3 gap-4">
    <ModuleCard v-for="module in modules" v-bind="module.content" />
  </div>
</template>

