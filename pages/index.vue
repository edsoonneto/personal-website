<template>
  <div class="relative flex my-auto justify-between w-full">
    <div class="flex flex-col gap-2 text-right">
      <h3 class="text-4xl">Edson Neto's</h3>
      <h1 class="text-8xl">Portfolio</h1>
    </div>
    <div class="flex flex-col gap-2">
      <NuxtPicture format="avif,webp" src="/me.png" />
      <div class="inline-flex gap-1 py-0.5 border-b w-fit mx-auto">
        <Icon name="fa7-brands:github" width="16" height="16" />
        <Icon name="fa7-brands:linkedin" width="16" height="16" />
        <Icon name="fa7-solid:envelope" width="16" height="16" />
      </div>
    </div>
    <div class="absolute top-full left-0 flex flex-col gap-2 w-14 h-fit flex-nowrap">
      <h4 class="whitespace-pre-line">Senior Fullstack</h4>
      <span class="flex border-l h-24 w-1"></span>
    </div>
  </div>
</template>

<script lang="ts">
export default defineNuxtComponent({
  head() {
    return {
      title: "Hi, I'm Edson Neto",
    };
  },
  setup() {
    return {};
  },
});
</script>
