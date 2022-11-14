<template>
  <Secret />
</template>

<script setup lang="ts">
import { definePageMeta } from '#imports'
import Secret from "~/components/Secret.vue";

definePageMeta({
  middleware: ['auth']
})
</script>
