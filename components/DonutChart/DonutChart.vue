<template>
  <div class="flex flex-col gap-1 w-fit">
    <svg :height="height" :width="width" viewBox="0 0 42 42" xmlns="http://www.w3.org/2000/svg">
      <g fill="transparent" stroke-width="2">
        <circle cx="21" cy="21" r="15.91549430918954" stroke="#d0d0d1" />
        <circle cx="21" cy="21" r="15.91549430918954" stroke="#353536" :stroke-dasharray="strokeDashArray"
          stroke-dashoffset="25" />
      </g>
      <image :href="icon" x="15" y="15" height="12" width="12" />
    </svg>
    <span class="text-center font-bold text-sm text-gray-900">{{ text }}</span>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  height: { type: Number, default: 120 },
  width: { type: Number, default: 120 },
  icon: String,
  percentage: { type: Number, default: 0 },
  text: String,
});

const strokeDashArray = computed(() => {
  return `${props.percentage} ${100 - props.percentage}`;
});
</script>
