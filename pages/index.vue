<template>
  <div class="flex flex-row flex-1 gap-6">
    <div class="flex flex-col gap-4 basis-1/3 h-full">
      <div
        class="flex flex-col flex-1 items-center gap-4 py-8 px-6 border-4 border-solid border-gray-800"
      >
        <!-- My Picture goes here -->
        <div
          class="bg-gray-200 h-40 w-40 rounded-full border-2 border-solid border-gray-800"
        ></div>

        <div class="flex flex-col gap-2 justify-center items-center">
          <h1>Edson Neto</h1>
          <h3>Senior Full Stack developer</h3>
        </div>

        <div class="flex flex-col gap-4">
          <h2>Profile</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            viverra finibus quam at facilisis. Nunc sit amet viverra ipsum.
            Nulla nec velit vel neque sodales dictum et at augue. Sed vitae
            lacinia leo. Morbi erat ex, sagittis a molestie non, lacinia vel
            felis. Proin porttitor consectetur condimentum. Proin pellentesque
            massa commodo ante rutrum, quis consequat lorem rhoncus.
          </p>
        </div>
        <div class="flex flex-col gap-4">
          <h2>Hobbies</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            viverra finibus quam at facilisis. Nunc sit amet viverra ipsum.
            Nulla nec velit vel neque sodales dictum et at augue. Sed vitae
            lacinia leo. Morbi erat ex, sagittis a molestie non, lacinia vel
            felis. Proin porttitor consectetur condimentum. Proin pellentesque
            massa commodo ante rutrum, quis consequat lorem rhoncus.
          </p>
        </div>
      </div>
      <div class="flex flex-col bg-slate-900">
        <div class="flex flex-col gap-4 py-4 px-8">
          <h2 class="text-white">Social Media</h2>
          <span class="flex gap-4">
            <span class="h-8 w-8 bg-white rounded-full"></span>
            <span class="text-white">Github</span>
          </span>
          <span class="flex gap-4">
            <span class="h-8 w-8 bg-white rounded-full"></span>
            <span class="text-white">LinkedIn</span>
          </span>
        </div>
      </div>
    </div>
    <div class="flex flex-col gap-6 basis-2/3">
      <div class="flex flex-col gap-4">
        <span class="pb-1 border-b-2 border-solid border-b-gray-900">
          <h1>Skills</h1>
        </span>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
          viverra finibus quam at facilisis. Nunc sit amet viverra ipsum. Nulla
          nec velit vel neque sodales dictum et at augue. Sed vitae lacinia leo.
          Morbi erat ex, sagittis a molestie non, lacinia vel felis. Proin
          porttitor consectetur condimentum. Proin pellentesque massa commodo
          ante rutrum, quis consequat lorem rhoncus.
        </p>
        <div class="flex gap-8 max-w-2xl mx-auto flex-wrap">
          <DonutChart
            icon="https://api.iconify.design/cib:vue-js.svg"
            :percentage="100"
            text="Vuejs"
          />
          <DonutChart
            icon="https://api.iconify.design/cib:react.svg"
            :percentage="70"
            text="React"
          />
          <DonutChart
            icon="https://api.iconify.design/cib:node-js.svg"
            :percentage="100"
            text="NodeJs"
          />
          <DonutChart
            icon="https://api.iconify.design/cib:javascript.svg"
            :percentage="70"
            text="JavaScript"
          />
          <DonutChart
            icon="https://api.iconify.design/cib:mongodb.svg"
            :percentage="50"
            text="MongoDB"
          />
          <DonutChart
            icon="https://api.iconify.design/cib:postgresql.svg"
            :percentage="40"
            text="PostgreSQL"
          />
          <DonutChart
            icon="https://api.iconify.design/cib:angular.svg"
            :percentage="80"
            text="Angular"
          />
          <DonutChart
            icon="https://api.iconify.design/cib:flutter.svg"
            :percentage="70"
            text="Flutter"
          />
        </div>
      </div>

      <div class="flex flex-col gap-4">
        <span class="pb-1 border-b-2 border-solid border-b-gray-900">
          <h1>Education</h1>
        </span>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
          viverra finibus quam at facilisis. Nunc sit amet viverra ipsum. Nulla
          nec velit vel neque sodales dictum et at augue. Sed vitae lacinia leo.
          Morbi erat ex, sagittis a molestie non, lacinia vel felis. Proin
          porttitor consectetur condimentum. Proin pellentesque massa commodo
          ante rutrum, quis consequat lorem rhoncus.
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default defineNuxtComponent({
  head() {
    return {
      title: "Edson Neto",
    };
  },
  setup() {
    return {};
  },
});
</script>
