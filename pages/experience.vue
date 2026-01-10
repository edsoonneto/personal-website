<template>
  <NuxtLayout name="inner">
    <ContentRenderer v-if="experience" :value="experience" />
    <div v-else>      
    </div>
  </NuxtLayout>
</template>

<script lang="ts" setup>
useHead({
  title: 'Experience'
})

const { data: experience } = await useAsyncData(() => queryCollection('content').path('/experience/').first())


</script>

<style></style>