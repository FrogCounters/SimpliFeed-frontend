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
        <div class="rubik text-4xl md:text-6xl font-semibold text-center">
          SimpliFeed widget for <span class="accent font-bold">developers</span>
        </div>
      </div>
    </div>
    <div
      class="mt-8 flex flex-row justify-center text-2xl font-medium text-center"
    >
      Integrate our customisable SimpliFeed news widget onto your personal site
      in less than 1 minute.
    </div>

    <div class="w-fit m-auto mt-5 max-w-[95vw] m-auto">
      <div class="bg-slate-100 p-2 rounded-lg flex mb-2">
        <div class="mr-4">
          Theme:
          <select @change="(e) => handleChange(e, 'theme')">
            <option value="light">Light</option>
            <option value="dark">Dark</option>
          </select>
        </div>
        <div class="mr-4">
          Feed:
          <select @change="(e) => handleChange(e, 'feed')">
            <option value="crypto">Crypto</option>
            <option value="all">All</option>
            <option value="economics">Economics</option>
            <option value="stocks">Stocks</option>
            <option value="general">General</option>
          </select>
        </div>
        <div>
          Image:
          <select @change="(e) => handleChange(e, 'image')">
            <option value="false">No</option>
            <option value="true">Yes</option>
          </select>
        </div>
      </div>
      <pre
        class="bg-slate-100 p-2 rounded-lg whitespace-pre-line overflow-x-auto"
      >
          {{ `&lt;link rel="stylesheet" href="${frontend_url}/widget.css"/>` }}
          {{ `&lt;script src="${frontend_url}/widget.js">&lt;/script>` }}
          &lt;script>
          {{
          `&emsp;&emsp;Widget({ theme: "${theme}", type: "${feed}", image: ${imagePreview} })`
        }}
          &lt;/script>
          &lt;div id="widget">&lt;/div>
        </pre
      >
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

<script>
import Vue from 'vue'

export default Vue.extend({
  name: 'WidgetPage',
  // mounted() {
  //   Widget()
  // },
  methods: {
    copyText() {
      const text = `
        <link rel="stylesheet" href="${this.frontend_url}/widget.css"/>
        \<script src="${this.frontend_url}/widget.js"><\/script>
        \<script>
            Widget({ theme: "${this.theme}", type: "${this.feed}", image: ${this.imagePreview} })
        <\/script>
        <div id="widget"></div>
      `
      navigator.clipboard.writeText(text)
      this.buttonText = 'Copied!'
    },
    handleChange(e, category) {
      if (e.target.options.selectedIndex > -1) {
        const value = e.target.options[e.target.options.selectedIndex].value
        switch (category) {
          case 'image':
            this.imagePreview = value
            break
          case 'feed':
            this.feed = value
            break
          case 'theme':
            this.theme = value
        }
      }
    },
  },
  data: function () {
    return {
      buttonText: 'Copy code',
      imagePreview: false,
      theme: 'light',
      feed: 'crypto',
      frontend_url: 'https://simplifeed.netlify.app',
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
