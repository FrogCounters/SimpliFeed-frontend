<template>
  <div class="rounded overflow-hidden m-6 shadow-lg">
    <NuxtLink :to="'/article/' + String(news_id)">
      <div class="w-64 flex flex-col">
        <img class="h-32 w-full" v-bind:src="img ? img : 'https://media.zenfs.com/en/valuepenguin_951/28473626fac94922e228d387f48725b1'">
        <div class="bg-white w-full h-full flex flex-col">
          <div class="font-medium h-20 pt-2 px-4 overflow-hidden text-ellipsis">
            {{ title }}
          </div>
          <div class="text-stone-500 text-sm h-12 px-4 overflow-hidden text-ellipsis">
            {{ summary }}
          </div>
          <div class="self-end text-sm place-self-end px-4 py-2">
            Read more ...
          </div>
        </div>
      </div>
    </NuxtLink>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ArticleCard',
  props: {
    news_id: {
      type: Number,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    summary: {
      type: String,
      required: true,
    },
    img: {
      type: String,
    }
  },
})
</script>

<style scoped>
</style>
