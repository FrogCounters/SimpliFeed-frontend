<template>
  <div class="rounded overflow-hidden m-6 shadow-lg">
    <NuxtLink to="#">
      <div class="w-64 flex flex-col">
        <img class="h-32 w-full" src="https://media.zenfs.com/en/valuepenguin_951/28473626fac94922e228d387f48725b1">
        <div class="bg-white w-full h-full flex flex-col">
          <div class="font-medium h-20 pt-2 px-4 overflow-hidden text-ellipsis">
            What are Singapore Treasury Bills and Are They a Good Invesment?
          </div>
          <div class="text-stone-500 text-sm h-12 px-4 overflow-hidden text-ellipsis">
            One sentence summary of article should suffice for this section.
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
  },
})
</script>

<style scoped>
</style>
