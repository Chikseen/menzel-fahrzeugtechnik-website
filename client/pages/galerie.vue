<template>
  <div class="galerie_wrapper">
    <div class="pageTitel pageTitel_noSpace">
      <span>Galer</span>
      <span>ie</span>
    </div>
    <div :class="['galerie_content', $device.isMobile ? 'mobileOffset' : '']">
      <div v-for="image in images" :key="image" class="galeriesImage">
        <p>{{ image }}</p>
        <img class="galerie_image" :src="imageUrl + image" alt="" @click="deleteImage(image)" />
      </div>
    </div>
    <button @click="loadMoreImages">Mehr laden</button>
  </div>
</template>
<script>
import api from '@/apiService.js'

import NewsMessage from '@/components/NewsMessage'

export default {
  name: "galerie",
  head() {
    return {
      title: "Galerie",
      meta: [
        {
          hid: 'description_galerie',
          name: 'description',
          content: 'Alle Fotos und Bilder von Menzel Fahrzeugtechnik'
        },
        {
          hid: 'keywords_news',
          name: 'keywords',
          content: 'Fotos, Bilder'
        },
      ],
      link: [
        {
          hid: 'canonical',
          rel: 'canonical',
          href: 'https://menzel-fahrzeugtechnik.de/galerie'
        }
      ]
    }
  },
  components: {
    NewsMessage,
  },
  data() {
    return {
      limit: 20,
      offset: 0,
      images: [],
    }
  },
  computed: {
    imageUrl() {
      return `${process.env.VUE_APP_API}/Images?name=`
    },
  },
  methods: {
    async loadImages() {
      const resp = await api.get(
        `Images/All?limit=${this.limit}&offset=${this.offset}`
      )
      this.images = this.images.concat(resp)
    },
    async loadMoreImages() {
      this.offset += this.limit
      const newImages = await api.get(
        `Images/All?limit=${this.limit}&offset=${this.offset}`
      )
      newImages.forEach((item) => {
        this.images.push(item)
      })
    },
  },
  mounted() {
    this.loadImages()
  },
}
</script>

<style lang="scss">
.galerie {
  &_content {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  }

  &_image {
    box-shadow: 2px 2px 10px 0 #4d4d4d36;
    border-radius: 5px;
    max-height: 300px;
    max-width: 300px;
    transition: all 0.5s;

    &:hover {
      cursor: pointer;
      box-shadow: 0 0 5px 5px rgba(90, 90, 90, 0.301);
    }
  }
}
</style>
