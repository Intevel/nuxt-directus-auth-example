<template>
  <div class="w-full max-w-5xl mx-auto bg-white px-5 py-4 rounded-t shadow-xl">
    <div class="flex items-center justify-between">
      <div class="flex items-center space-x-2">
        <h1 class="text-lg">
          Not authenticated
        </h1>
      </div>
      <button class="flex items-center justify-center space-x-2 bg-purple-500 text-white rounded-lg py-2 px-3 text-lg" @click="signIn">
        <Icon name="material-symbols:login" />
        <span>Login</span>
      </button>
    </div>
  </div>
</template>

<script setup>
const { login } = useDirectusAuth()

const signIn = async () => {
  await login({ email: 'nuxt-is-my-love@nuxtdirectus.de', password: 'NuxtDirectus123' })
}
</script>