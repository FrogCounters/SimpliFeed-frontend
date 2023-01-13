<template>
  <div id="signin" class="rounded">
    <NuxtLink to="/signin">
      <div class="font-bold text-white px-4 py-1">
        sign in
      </div>
    </NuxtLink>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'SignIn',
})
</script>

<style scoped>
#signin {
  background-color: #676767;
}
</style>
