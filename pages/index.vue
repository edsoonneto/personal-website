<template>
  <div
    class="flex flex-row-reverse justify-center gap-2 mt-1/2 md:flex-row items-center md:items-start my-auto md:justify-between w-full">
    <span class="w-1/5 rotate-90 absolute left-2 bottom-2 h-0.5 rounded-2xl bg-black"></span>
    <div class="flex flex-col md:gap-2">
      <h1 class="md:text-8xl">Hi, I'm</h1>
      <h1 class="md:text-8xl">Edson Neto.</h1>
      <h4 class="md:text-4xl">Senior Software Developer</h4>
      <NuxtLink
        class="w-fit mt-3 appearance-none rounded-md inline-flex justify-center border border-mercury-950 px-5 py-2.5 text-sm select-none font-semibold text-black inset-ring inset-ring-white/5 hover:cursor-pointer hover:border-mercury-500"
        target="_blank" to="/Edson_Neto_CV-en-US.pdf" external>
        Download Resume
      </NuxtLink>
    </div>
    <div class="flex flex-col gap-2">
      <NuxtImg src="/me.png" alt="A picture of myself" loading="eager" sizes="150px sm:200px md:400px" />
      <div class="inline-flex gap-1 py-0.5 border-b-2 w-fit mx-auto">
        <NuxtLink class="hover:text-mercury-400" href="https://github.com/edsoonneto" target="_blank">
          <Icon name="fa7-brands:github" mode="svg" class="text-xl md:text-[32px]" />
        </NuxtLink>
        <NuxtLink class="hover:text-mercury-400" href="https://www.linkedin.com/in/netoo-edson/" target="_blank">
          <Icon name="fa7-brands:linkedin" mode="svg" class="text-xl md:text-[32px]" />
        </NuxtLink>
        <NuxtLink class="hover:text-mercury-400" href="mailto:contact@edsonneto.com" target="_blank">
          <Icon name="fa7-solid:envelope" mode="svg" class="text-xl md:text-[32px]" />
        </NuxtLink>
      </div>
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
