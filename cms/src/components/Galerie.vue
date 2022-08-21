<template>
  <div>
    <h1>Galerie</h1>
    <h3>neue Bilder hochladen (diese werden nur in der Galerie angezeigt, haben aber noch keine Verlinkung zu "News")</h3>
    <form name="form1" method="post" enctype="multipart/form-data" :action="imageApi" v-on:submit.prevent="uploadImage">
      <label for="image1">Image File</label>
      <input name="files" type="file" accept="image/png" multiple />
      <input type="submit" value="Bilder hochladen" />
    </form>
    <button @click="loadMore">Mehr Bilder laden</button>
    <button @click="reloadPictures">Bilder neu laden</button>
    <div class="galeriesImageWrapper">
      <div v-for="image in images" :key="image" class="galeriesImage">
        <p>{{ image }}</p>
        <img class="removeButton" :src="imageUrl + image" alt="" @click="deleteImage(image)" />
      </div>
    </div>
    <SFC v-if="apiResponse" :res="apiResponse" @remove="apiResponse = null" />
  </div>
</template>

<script>
import api from "@/apiService";
import SFC from "@/components/SimpleFeedbackComponent.vue";

export default {
  components: {
    SFC,
  },
  data() {
    return {
      images: [],
      loadedImages: [],
      offset: 0,
      limit: 10,
      apiResponse: null,
    };
  },
  computed: {
    imageUrl() {
      return `${process.env.VUE_APP_API}/Images?name=`;
    },
    imageApi() {
      return `${process.env.VUE_APP_API}/Images`;
    },
  },
  methods: {
    reloadPictures() {
      this.offset = 0;
      this.limit = 10;
      this.loadPictures();
    },
    async loadPictures() {
      this.images = await api.get(`Images/All?limit=${this.limit}&offset=${this.offset}`);
    },
    async uploadImage($event) {
      const form = $event.target;
      const data = await api.uploadFile("Images", form);
      this.apiResponse = data;
      this.limit += this.offset;
      this.offset = 0;
      this.loadPictures();
    },
    async deleteImage(image) {
      const res = await api.delete("Images", { id: image });
      this.apiResponse = res;
      this.limit += this.offset;
      this.offset = 0;
      this.loadPictures();
    },
    async loadMore() {
      this.offset += 10;
      const newI = await api.get(`Images/All?offset=${this.offset}&limit=${this.limit}`);
      newI.forEach((img) => {
        if (this.images.indexOf(img) === -1) {
          this.images.push(img);
        }
      });
    },
  },
  watch: {
    apiResponse() {
      setTimeout(() => {
        this.apiResponse = null;
      }, 5000);
    },
  },
  mounted() {
    this.loadPictures();
  },
};
</script>

<style>
.galeriesImageWrapper {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 25px;
  padding: 25px;
  max-width: 1000px;
  margin: 0 auto;
}

.galeriesImage {
  box-shadow: 2px 2px 10px 0 #4d4d4d36;
  border-radius: 5px;
  max-height: 300px;
  max-width: 400px;
}

.galeriesImage img {
  max-height: 200px;
  max-width: 300px;
}
</style>
