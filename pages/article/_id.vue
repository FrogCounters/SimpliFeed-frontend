<template>
  <div class="w-full max-w-screen-xl mx-auto relative pt-8 px-6">
    <ArticleReader :article="article" />
  </div>
</template>

<script>
import { API_URl } from '~/utils/config'

export default {
  data() {
    return {
      article: {},
    }
  },
  methods: {
    getBooks() {
      fetch(`${API_URl}/article?news_id=${this.$route.params.id}`)
        .then((response) => response.json())
        .then((data) => (this.article = data))
    },
  },
  mounted() {
    this.getBooks()
  },
}
</script>
