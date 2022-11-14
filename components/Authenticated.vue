<script setup>
const user = useDirectusUser();
const { logout } = useDirectusAuth()
</script>

<template>
    <div class="w-full max-w-5xl mx-auto bg-white px-5 py-4 rounded-t shadow-xl">
      <div class="flex items-center justify-between">
        <div class="flex items-center space-x-2">
          <h1 class="text-lg">
            Authenticated as {{user.email}}!
          </h1>
        </div>
        <button class="flex items-center justify-center space-x-2 bg-red-500 text-white rounded-lg py-2 px-3 text-lg" @click="logout">
          <span>Logout</span>
        </button>
      </div>
    </div>
</template>
