<template>
  <div class="group relative inline-flex gap-4 h-fit items-start">
    <span
      class="flex flex-1 items-center gap-4 [writing-mode:vertical-rl] origin-center rotate-180 text-nowrap before:content-[''] before:max-h-40 before:h-full group-last:before:content-none before:flex before:border-r before:min-h-8">{{
        period }}</span>
    <div class="flex flex-col h-full w-full">
      <slot />
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { PropType } from 'vue';

defineProps({
  period: String
})
</script>