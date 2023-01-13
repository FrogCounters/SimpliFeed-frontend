<template>
  <div class="w-full p-5">
    <div class="w-full flex flex-row">
      <div class="left w-64">
        <div
          v-for="(category, index) in categories"
          :key="category"
          @click="() => selectTab(index)"
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
          'py-8'
        ]"
      >
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'FeedPreview',
  data: function () {
    return {
      categories: ['Crypto', 'Markets', 'Forex', 'Others'],
      focusIndex: 0,
    }
  },
  methods: {
    selectTab: function (index: number) {
      console.log(index)
      this.focusIndex = index
    },
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
