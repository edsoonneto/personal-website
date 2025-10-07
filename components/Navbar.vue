<template>
  <div class="flex w-full items-center py-2">
    <NuxtImg src="/brand.svg" height="48" width="48" />
    <div class="flex gap-4 items-center mx-auto capitalize">
      <NuxtLink :to="localePath('index')">{{ $t('home') }}</NuxtLink>
      <NuxtLink :to="localePath('experience')">{{ $t('experience') }}</NuxtLink>
      <NuxtLink :to="localePath('skills')">{{ $t('skills') }}</NuxtLink>
      <NuxtLink :to="localePath('contact')">{{ $t('contact') }}</NuxtLink>
    </div>
  </div>
</template>

<script lang="ts" setup>
const localePath = useLocalePath()

</script>

<style></style>