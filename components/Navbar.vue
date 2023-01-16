<template>
  <div class="flex flex-row items-center mr-4">
    <a href="https://simplifeed.onrender.com/docs" target="_blank">
      <div class="text-lg px-4">API</div>
    </a>

    <NuxtLink to="/about">
      <div class="text-lg px-4">About</div>
    </NuxtLink>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { API_URl } from '~/utils/config'

export default Vue.extend({
  name: 'Navbar',
})
</script>
