<template>
  <div>
    <h1>all images</h1>
    <h3>Neue Bilder Hochladen (Diese werden nur in der Galerie angezeigt, haben aber noch keine verlinkung zu "News")</h3>
    <form name="form1" method="post" enctype="multipart/form-data" :action="imageApi" v-on:submit.prevent="uploadImage">
      <label for="image1">Image File</label>
      <input name="files" type="file" accept="image/png" multiple />
      <input type="submit" value="Submit" />
    </form>
    <button @click="loadMore">LoadMore</button>
    <div class="galeriesImageWrapper">
      <div v-for="image in images" :key="image" class="galeriesImage">
        <p>{{ image }}</p>
        <img class="removeButton" :src="imageUrl + image" alt="" @click="deleteImage(image)" />
      </div>
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
      offset: 0,
      limit: 10,
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
    async loadPictures() {
      this.images = await api.get(`Images/All?limit=${this.limit}&offset=${this.offset}`);
    },
    async uploadImage($event) {
      const form = $event.target;
      await api.uploadFile("Images", form);
      this.limit += this.offset;
      this.offset = 0;
      this.loadPictures();
    },
    async deleteImage(image) {
      console.log("hi1");
      const res = await api.delete("Images", { id: image });
      console.log(res);
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
  watch: {},
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

.galeriesImage img{
  max-height: 200px;
  max-width: 300px;
}
</style>
