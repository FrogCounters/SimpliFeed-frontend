<template>
  <div>
    <h2 class="text-xl font-semibold">{{ article.title }}</h2>
    <p class="text-stone-500">Joyce Chua (ValueChampion)</p>
    <img class="h-64 my-8" v-bind:src="article.image_url ? article.image_url : 'https://media.zenfs.com/en/valuepenguin_951/28473626fac94922e228d387f48725b1'">
    <div class="w-full max-w-screen-lg">
      <div class="w-full flex flex-row justify-end">
        <div class="px-4 py-2 rounded-tr rounded-tl bg-purple-accent">simplified</div>
      </div>
      <div class="w-full flex flex-row">
        <div class="w-12 bg-beige-accent rounded-tl rounded-bl shadow-inner"></div>
        <div class="w-full p-8 font-light text-lg text-stone-800 whitespace-pre-wrap bg-white rounded-tl rounded-bl shadow-lg">
          {{ article.actual_content }}
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ArticleReader',
  data: function() {
    return {
      simplified: true,
    }
  },
  props: {
    article: {
      type: Object,
      required: true,
    }
  },
})
</script>

<style scoped>
.rubik {
  font-family: Rubik;
}

.bg-purple-accent {
  background-color: #928EE2;
}

.bg-beige-accent {
  background-color: #FED0AB;
}
</style>
