<template>
  <div class="min-h-screen h-full relative bg-gray-100 pb-20">
    <Navbar />
     <div class="fixed bottom-0 w-full">
      <Authenticated v-if="user" :user-data="user" />
      <NotAuthenticated v-else  />
    </div> 
    <Welcome />
    <NuxtPage />
  </div>
</template>

<script setup lang="ts">
import Authenticated from "~/components/Authenticated.vue";
import NotAuthenticated from "~/components/NotAuthenticated.vue";
import Navbar from "~/components/Navbar.vue";
import { useHead } from "#head";
import Welcome from "~/components/Welcome.vue";

const user = useDirectusUser();

useHead({
  title: '💜 Nuxt Directus',
})
</script>
