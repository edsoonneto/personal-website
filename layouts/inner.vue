<template>
  <div class="flex flex-1 flex-col py-4 overflow-hidden">
    <h1
      class="relative capitalize before:absolute before:content-[''] before:top-1/2 before:mr-2 before:right-full before:h-1 before:size-1/4 before:border-b before:my-auto">
      {{ baseRouteName }}</h1>
    <slot />
  </div>
</template>

<script lang="ts" setup>
const route = useRoute();
const getRouteBaseName = useRouteBaseName()
const baseRouteName = computed(() => getRouteBaseName(route))
</script>

<style></style>