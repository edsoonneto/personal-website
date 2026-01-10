<template>
  <div class="group flex w-full items-center justify-between py-2" :data-is-open="isOpen">
    <NuxtImg class="z-20" src="/brand.svg" height="36" width="36" />
    <span class="md:hidden z-20" @click="handleOpen">
      <Icon :name="isOpen ? 'fa7-solid:close' : 'fa7-solid:bars'" mode="svg" size="32" />
    </span>
    <div
      class="top-0 left-full -translate-x-[100vw] group-data-[is-open='false']:hidden md:group-data-[is-open='false']:flex w-screen h-screen md:h-fit md:w-fit md:translate-x-[none] md:top-[unset] md:left-[unset] z-10 justify-center flex flex-col absolute bg-mercury-100 md:bg-none md:relative md:flex-row gap-4 items-center md:mx-auto capitalize">
      <NuxtLink class="hover:text-mercury-400" :to="localePath('index')">{{ $t('home') }}</NuxtLink>
      <NuxtLink class="hover:text-mercury-400" :to="localePath('experience')">{{ $t('experience') }}</NuxtLink>
      <NuxtLink class="hover:text-mercury-400" :to="localePath('skills')">{{ $t('skills') }}</NuxtLink>
      <NuxtLink class="hover:text-mercury-400" :to="localePath('contact')">{{ $t('contact') }}</NuxtLink>
    </div>
  </div>
</template>

<script lang="ts" setup>
const localePath = useLocalePath()
const isOpen = ref<boolean>(false);

const handleOpen = () => isOpen.value = !isOpen.value;

</script>

<style></style>