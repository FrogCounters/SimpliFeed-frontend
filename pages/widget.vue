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
        <div class="rubik text-6xl font-semibold">
          SimpliFeed widget for <span class="accent font-bold">developers</span>
        </div>
      </div>
    </div>
    <div class="mt-8 flex flex-row justify-center text-2xl font-medium">
      Integrate SimpliFeed news onto your personal site in less than 1 minute.
    </div>

    <div class="w-fit m-auto mt-5">
      <!-- <div class="bg-slate-100 p-2 rounded-lg flex">
        <div>
          Theme:
          <select>
            <option>Light</option>
            <option>Dark</option>
          </select>
        </div>
        <div>
          Feed:
          <select>
            <option>Stocks</option>
            <option>Crypto</option>
          </select>
        </div>
        <div>
          Image:
          <select>
            <option>No</option>
            <option>Yes</option>
          </select>
        </div>
      </div> -->
      <div id="widget"></div>
      <pre class="bg-slate-100 p-2 rounded-lg whitespace-pre-line">
          {{ `&lt;link rel="stylesheet" href="${api_url}/widget.css"/>` }}
          {{ `&lt;script src="${api_url}/widget.js">&lt;/script>` }}
          &lt;script>
          &emsp;&emsp;Widget({ theme: "light", type: "crypto", image: false })
          &lt;/script>
          &lt;div id="widget">&lt;/div>
      </pre>
      <button
        class="accent-bg py-1 px-3 mt-2 rounded-lg"
        type="button"
        @click="() => copyText()"
      >
        {{ buttonText }}
      </button>
    </div>
  </div>
</template>

<!-- <link rel="stylesheet" href="http://localhost:3000/widget.css" />
<script src="http://localhost:3000/widget.js" defer></script>
<script>
Widget({ theme: 'light', type: 'crypto', image: false })
</script> -->

<script>
import Vue from 'vue'
import { API_URl } from '~/utils/config'

export default Vue.extend({
  name: 'WidgetPage',
  methods: {
    copyText() {
      const text = `
        <link rel="stylesheet" href="${API_URl}/widget.css"/>
        \<script src="${API_URl}/widget.js"><\/script>
        \<script>
            Widget({ theme: ${this.theme}, type: ${this.feed}, image: ${this.imagePreview} })
        <\/script>
        <div id="widget"></div>
      `
      navigator.clipboard.writeText(text)
      this.buttonText = 'Copied!'
    },
  },
  data: function () {
    return {
      buttonText: 'Copy code',
      imagePreview: false,
      theme: 'light',
      feed: 'crypto',
      api_url: API_URl,
    }
  },
})
</script>

<style scoped>
.rubik {
  font-family: Rubik;
}

.accent {
  color: #928ee2;
}

.accent-bg {
  background-color: #928ee2;
}
</style>
