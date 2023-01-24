<template>
  <div class="flex flex-row items-center mr-4">
    <a href="https://simplifeed.onrender.com/docs" target="_blank">
      <div class="text-lg px-4">API</div>
    </a>
    <NuxtLink to="/widget">
      <div class="text-lg px-4">Widget</div>
    </NuxtLink>
    <NuxtLink to="/about">
      <div class="text-lg px-4">About</div>
    </NuxtLink>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Navbar',
})
</script>
