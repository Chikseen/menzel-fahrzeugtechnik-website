<template>
  <div>
    <h1>all images</h1>
    <div v-for="(img, index) in loadedImages" :key="index" class="galerieImages">
      <p>{{ img.url }}</p>
      <img :src="img.url" alt="" />
    </div>
  </div>
</template>

<script>
import api from "@/apiService";

export default {
  data() {
    return {
      images: [],
      loadedImages: [],
    };
  },
  computed: {
    url() {
      if (process.env.NODE_ENV == "development") return "http://192.168.2.100:7081?id=";
      else return "https://image.menzel-fahrzeugtechnik.de?id=";
    },
  },
  methods: {
    async loadPictures() {
      const images = await api.fetchData("news/getAllImage", {
        key: localStorage.getItem("authKey"),
      });
      this.images = images;
    },
  },
  watch: {
    images() {
      console.log(this.images);
      this.images.forEach((img) => {
        //   if (!this.loadedImages.some(img.id)) {
        this.loadedImages.push({ id: img, url: (this.url + img).replace(/.png/, "") });
        // }
      });
    },
  },
  mounted() {
    this.loadPictures();
  },
};
</script>

<style>
.galerieImages {
  max-width: 400px;
}
.galerieImages img {
  max-width: 400px;
}
</style>
