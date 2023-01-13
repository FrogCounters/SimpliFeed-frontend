<template>
  <div
    class="h-16 relative w-full max-w-screen-xl mx-auto flex flex-row justify-between items-center"
  >
    <NuxtLink to="/">
      <div class="text-xl font-bold px-6">SimpliFeed</div>
    </NuxtLink>
    <Navbar />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Header',
})
</script>
