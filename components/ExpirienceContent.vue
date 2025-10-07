<template>
  <h3 class="italic text-md font-extralight">{{ company }}</h3>
  <h4 class="font-semibold">{{ role }}</h4>
  <p class="text-sm font-light">
    {{ description }}
  </p>
  <ul class="text-sm font-light list-disc pl-6">
    <template v-for="(value, index) in tasks"
      :key="`task-${company?.toLocaleLowerCase().replace(' ', '-')}-${index}`">
      <li>{{ value }}</li>
    </template>
  </ul>
</template>

<script lang="ts" setup>
defineProps({
  company: String,
  role: String,
  description: String,
  tasks: Array as PropType<Array<string>>
})
</script>
