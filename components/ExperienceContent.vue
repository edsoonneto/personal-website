<template>
  <div class="flex flex-row justify-between">
    <h3 class="italic text-md font-extralight">{{ company }}</h3>
    <h5 class="italic font-extralight text-end">{{ period }}</h5>
  </div>
  <h4 class="font-semibold">{{ role }}</h4>
  <div class="[&>*]:text-sm [&>*]:font-light [&>ul]:list-disc pl-6 pb-6">
    <slot />
  </div>
</template>

<script lang="ts" setup>
defineProps({
  company: String,
  role: String,
  period: String
})
</script>
