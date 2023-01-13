<template>
  <div class="flex flex-row items-center mr-4">
    <NuxtLink to="/about">
      <div class="text-lg px-4">About</div>
    </NuxtLink>

    <NuxtLink to="/get-started">
      <div class="text-lg px-4">Get Started</div>
    </NuxtLink>

    <NuxtLink to="/api">
      <div class="text-lg px-4">API</div>
    </NuxtLink>

    <SignIn class="ml-3" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Navbar',
})
</script>
