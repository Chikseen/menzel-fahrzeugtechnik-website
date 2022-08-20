<template>
  <div class="news_wrapper">
    <div class="pageTitel pageTitel_noSpace">
      <span>Ne</span>
      <span>ws</span>
    </div>
    <div v-if="news" :class="$device.isMobile ? 'mobileOffset' : ''">
      <div v-for="(message, index) in news" :key="index">
        <NewsMessage :message="message" />
      </div>
      <button @click="loadMoreNews">Mehr</button>
    </div>
  </div>
</template>
<script>
import api from '@/apiService.js'

import NewsMessage from '@/components/NewsMessage'

export default {
  name: "news",
  head() {
    return {
      title: "News",
      meta: [
        {
          hid: 'description_news',
          name: 'description',
          content: 'Neuigkeiten und Blog von Menzel Fahrzeugtechnik'
        },
        {
          hid: 'keywords_news',
          name: 'keywords',
          content: 'Neuigkeiten, News, Blog'
        },
      ],
      link: [
        {
          hid: 'canonical',
          rel: 'canonical',
          href: 'https://menzel-fahrzeugtechnik.de/news'
        }
      ]
    }
  },
  components: {
    NewsMessage,
  },
  data() {
    return {
      limit: 5,
      offset: 0,
      news: [],
    }
  },
  methods: {
    async loadNews() {
      const resp = await api.get(
        `News?limit=${this.limit}&offset=${this.offset}`
      )
      this.news = this.news.concat(resp)
    },
    async loadMoreNews() {
      this.offset += this.limit
      const newNews = await api.get(
        `News?limit=${this.limit}&offset=${this.offset}`
      )
      newNews.forEach((item) => {
        this.news.push(item)
      })
    },
  },
  mounted() {
    this.loadNews()
  },
}
</script>