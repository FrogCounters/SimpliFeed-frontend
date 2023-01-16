<template>
  <div class="w-full p-5">
    <div class="w-full flex flex-row">
      <div class="left w-64">
        <div
          v-for="(category, index) in categories"
          :key="category"
          @click="() => selectTab(index, category)"
        >
          <Tab :label="category" :inFocus="index == focusIndex" />
        </div>
      </div>
      <div
        :class="[
          'right',
          'w-full',
          focusIndex != 0 ? 'rounded-tl-lg' : '',
          'rounded-tr-lg',
          'rounded-br-lg',
          'rounded-bl-lg',
          'flex',
          'flex-row',
          'flex-wrap',
          'justify-center',
          'content-around',
          'py-8',
        ]"
      >
        <ArticleCard
          v-for="preview in previews"
          :key="preview.news_id"
          :news_id="preview.news_id"
          :title="preview.title"
          :summary="preview.summary"
          :img="preview.image_url"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { API_URl } from '~/utils/config'

const CATEGORIES = ['All', 'General', 'Economics', 'Stocks', 'Crypto']
const LOADING_STATE = [
  { news_id: 1, title: '', summary: '', image_url: '', category: '' },
  { news_id: 2, title: '', summary: '', image_url: '', category: '' },
  { news_id: 3, title: '', summary: '', image_url: '', category: '' },
  { news_id: 4, title: '', summary: '', image_url: '', category: '' },
]

export default defineComponent({
  name: 'FeedPreview',
  data: function () {
    return {
      categories: CATEGORIES,
      focusIndex: Number(localStorage.getItem('focusIndex')) || 0,
      previews: LOADING_STATE,
      default: LOADING_STATE,
    }
  },
  methods: {
    selectTab: function (index: number, category: string) {
      this.focusIndex = index
      if (category == 'All') {
        this.previews = this.default
      } else {
        this.previews = this.default.filter((x) => x.category == category)
      }
      localStorage.setItem('focusIndex', String(index))
    },
    getPreviews() {
      fetch(API_URl)
        .then((response) => response.json())
        .then((data) => {
          this.default = data
          this.selectTab(this.focusIndex, CATEGORIES[this.focusIndex])
        })
    },
  },
  mounted() {
    this.getPreviews()
  },
})
</script>

<style scoped>
.left {
}

.right {
  background-color: #b1aeea;
}
</style>
