<script lang="ts" setup>
const props = defineProps({
  name: {
    type: String,
    default: "Module Card"
  },
  description: {
    type: String,
    default: "Crazy description"
  },
  icon: {
    type: Object,
    default: () => ({})
  },
  url: {
    type: Object,
    default: () => ({})
  }
})
</script>

<template>
  <a class="flex justify-center" :href="url.url">
    <div class="flex items-center p-8 flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg">
      <img class="w-10 h-10 object-fit" :src="icon.filename" :alt="icon.alt" />
      <div class="px-8 flex flex-col justify-start">
        <h5 class="text-gray-900 text-xl font-medium mb-2">{{name}}</h5>
        <p class="text-gray-700 text-base mb-4">
          {{description}}
        </p>
      </div>
    </div>
  </a>
</template>

<style scoped></style>
