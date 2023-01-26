<template>
  <div>
    <h2 class="text-xl font-semibold">{{ article.title }}</h2>
    <p class="text-stone-500">{{ article.author }}</p>
    <p class="text-stone-500">{{ article.published_date }}</p>
    <p class="text-stone-500 underline">
      <a :href="article.url" target="_blank">{{
        article.url && 'Visit Link'
      }}</a>
    </p>
    <img
      class="h-64 my-8"
      v-bind:src="
        article.image_url
          ? article.image_url
          : 'https://media.zenfs.com/en/valuepenguin_951/28473626fac94922e228d387f48725b1'
      "
    />
    <div class="w-full max-w-screen-lg">
      <div class="w-full flex flex-row justify-end">
        <div
          class="px-4 py-2 mr-1 rounded-tr rounded-tl bg-beige-accent cursor-pointer"
          @click="() => toggleText(false)"
        >
          original
        </div>
        <div
          class="px-4 py-2 rounded-tr rounded-tl bg-purple-accent cursor-pointer"
          @click="() => toggleText(true)"
        >
          simplified
        </div>
      </div>
      <div class="w-full flex flex-row">
        <div
          class="w-12 rounded-tl rounded-bl shadow-inner"
          v-bind:class="simplified ? 'bg-purple-accent' : 'bg-beige-accent'"
        ></div>
        <div
          class="w-full p-8 font-light text-lg text-stone-800 whitespace-pre-wrap bg-white rounded-tl rounded-bl shadow-lg"
        >
          <div
            v-if="simplified == true && article.summary"
            class="whitespace-normal"
          >
            <div class="text-right">
              <range-slider
                min="0"
                max="1"
                step="1"
                v-model="value"
                @change="() => sliderValue()"
              />
            </div>
            {{ article.summary[value] }}
          </div>
          <div v-else>{{ article.actual_content }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import RangeSlider from 'vue-range-slider'
import 'vue-range-slider/dist/vue-range-slider.css'

export default defineComponent({
  name: 'ArticleReader',
  components: {
    RangeSlider,
  },
  data: function () {
    return {
      simplified: false,
      value: localStorage.getItem('sliderPreference') || 1,
    }
  },
  props: {
    article: {
      type: Object,
      required: true,
    },
  },
  methods: {
    toggleText: function (is_simplified) {
      if (is_simplified) {
        this.simplified = true
      } else {
        this.simplified = false
      }
    },
    sliderValue: function () {
      localStorage.setItem('sliderPreference', this.value)
    },
  },
})
</script>

<style scoped>
.rubik {
  font-family: Rubik;
}

.bg-purple-accent {
  background-color: #928ee2;
}

.bg-beige-accent {
  background-color: #fed0ab;
}
.range-slider {
  width: 90px;
}
</style>
