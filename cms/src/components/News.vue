<template>
  <div>
    <div class="newNewsWrapper">
      <div>
        <h3>Neuer Eintrag</h3>
        <div>
          <div class="createnewMessage_input">
            <div class="createnewMessage_input_text">
              <label>Titel</label>
              <input type="text" v-model="currenttitel" />
            </div>
            <div class="createnewMessage_input_text">
              <label>Text</label>
              <textarea name="" id="" cols="50" rows="5" v-model="currenttext"></textarea>
            </div>
          </div>
        </div>
      </div>

      <div class="newsImageSelection">
        <div>
          <form name="form1" method="post" enctype="multipart/form-data" :action="imageApi" v-on:submit.prevent="uploadImage">
            <label for="image1">Image File</label>
            <input name="files" type="file" accept="image/png" multiple />
            <input type="submit" value="Submit" />
          </form>
        </div>
        <div>
          <div v-for="img in galerieImages" :key="img + 0" @click="currentimages.indexOf(img) == -1 ? currentimages.push(img) : ''">
            {{ img }}
          </div>
        </div>
        <div>
          <div v-for="img in currentimages" :key="img + 1" @click="currentimages.splice(currentimages.indexOf(img), 1)">
            {{ img }}
          </div>
        </div>
      </div>
      <button @click="saveNews">Speichern</button>
    </div>
    <h3>Alle News</h3>
    <div v-for="item in messages" :key="item.id">
      {{ item }}
      <h4>item.titel</h4>
      <p>item.text</p>
      <p>item.created</p>
      <div v-for="img in item.images" :key="img + 2">
        <p>{{ img }}</p>
        <img :src="imageUrl + img" alt="" />
      </div>
      <hr>
    </div>
  </div>
</template>

<script>
import api from "@/apiService";

export default {
  components: {},
  data() {
    return {
      messages: [],
      currentdate: "",
      currenttitel: "",
      currenttext: "",
      offset: 0,
      limit: 10,
      galerieImagesOffset: 0,
      galerieImagesLimit: 20,
      currentimages: [],
      galerieImages: [],
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
    async uploadImage($event) {
      const form = $event.target;
      await api.uploadFile("Images", form);
      this.limit += this.offset;
      this.offset = 0;
    },
    async loadGalerieImages() {
      this.galerieImages = await api.get(`Images/All?limit=${this.galerieImagesLimit}&offset=${this.galerieImagesOffset}`);
    },
    async loadMessages() {
      this.messages = await api.get(`News?limit=${this.limit}&offset=${this.offset}`);
    },
    async saveNews() {
      await api.post("News", { titel: this.currenttitel, text: this.currenttext, images: this.currentimages });
      this.loadMessages();
    },
  },
  mounted() {
    this.loadMessages();
    this.loadGalerieImages();
  },
};
</script>

<style>
.newNewsWrapper {
  box-shadow: 0 0 5px 5px #92929221;
  border-radius: 10px;
}

.newsPreviewWrapper {
  background-color: #f3f3f34d;
  border-radius: 10px;
  box-shadow: 2px 2px 10px 0 #4d4d4d36;
  padding: 10px;
  margin: 15px;
  transition: all 0.5s;
}
.newsPreviewWrapper:hover {
  background-color: rgba(223, 223, 223, 0.719);
}
.newsImagePreview {
  max-width: 200px;
}

.newsImageSelection {
  display: flex;
  justify-content: space-evenly;
  padding: 15px;
  margin: 15px auto;
}
</style>
