<template>
  <div class="w-full relative">
    <div id="hero" class="w-full relative">
      <div class="wave-bg relative">
        <svg
          preserveAspectRatio="none"
          class="h-16 w-full"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#B1AEEA"
            fill-opacity="0.15"
            d="M0,256L80,261.3C160,267,320,277,480,245.3C640,213,800,139,960,122.7C1120,107,1280,149,1360,170.7L1440,192L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
          ></path>
        </svg>
        <svg
          preserveAspectRatio="none"
          class="h-48 w-full"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#B1AEEA"
            fill-opacity="0.15"
            d="M0,288L80,256C160,224,320,160,480,160C640,160,800,224,960,240C1120,256,1280,224,1360,208L1440,192L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
          ></path>
        </svg>
      </div>
      <div
        class="text-fg absolute top-6 left-0 w-full h-full flex flex-col items-center justify-center"
      >
        <div class="rubik text-6xl font-semibold">Financial news<br /><span class="accent font-bold">simplified</span> for all</div>
      </div>
    </div>
    <div class="mt-8 flex flex-row justify-center">
      <div class="w-full max-w-screen-lg flex flex-col items-center">
        <FeedPreview />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'IndexPage',
})
</script>

<style scoped>
.rubik {
  font-family: Rubik;
}

.accent {
  color: #928EE2;
}
</style>
