<template>
  <div class="galerie_wrapper">
    <div class="pageTitel pageTitel_noSpace">
      <h1>Galer</h1>
      <h1>ie</h1>
    </div>
    <div v-if="news">
      <div v-for="(message, index) in news" :key="index">
        <NewsMessage :message="message" />
      </div>
      <button @click="loadMoreNews">Mehr</button>
    </div>
  </div>
</template>
<script>
import api from "@/apiService.js";

import NewsMessage from "@/components/NewsMessage";

export default {
  components: {
    NewsMessage,
  },
  data() {
    return {
      limit: 5,
      offset: 0,
      news: [],
    };
  },
  methods: {
    async loadNews() {
      const resp = await api.get(`News?limit=${this.limit}&offset=${this.offset}`);
      this.news = this.news.concat(resp);
    },
    async loadMoreNews() {
      this.offset += this.limit;
      const newNews = await api.get(`News?limit=${this.limit}&offset=${this.offset}`);
      newNews.forEach((item) => {
        this.news.push(item);
      });
    },
  },
  mounted() {
    this.loadNews();
  },
};
</script>

<style lang="scss">
.galerie {
  &_wrapper {
    margin-top: 6rem;
  }
}
</style>
