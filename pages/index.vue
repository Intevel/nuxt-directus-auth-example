<template>
  <div class="max-w-5xl mx-auto mt-5 px-5">
    <h3 class="text-xl font-bold ">Authentication Overview</h3>
    <p class="text-sm">See all available authentication information below.</p>
    <pre><span>Status:</span> {{ user ? 'Authenticated' : 'Not authenticated' }}</pre>
    <pre v-if="user"><span>User:</span> {{ user }}</pre>
    <pre v-if="token"><span>Token:</span> {{ token }}</pre>
  </div>
</template>

<script setup>
const token = useDirectusToken();
const user = useDirectusUser();

</script>

<style scoped>
pre {
  @apply bg-gray-800 text-white p-3 my-3 rounded shadow overflow-x-auto;
}

pre span {
  @apply text-purple-400;
}
</style>
