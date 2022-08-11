<template>
  <div class="createNews">
    <h1>News</h1>
    <div class="createNews_input">
      <div class="createNews_input_text">
        <label>Titel</label>
        <input type="text" v-model="titel" />
      </div>
      <div class="createNews_input_text">
        <label>Text</label>
        <textarea name="" id="" cols="50" rows="5" v-model="text"></textarea>
      </div>
      <h3>Bilder Auswahl</h3>
      <div class="createNews_imageSelection">
        <div>
          <h4>Bilder in der Galerie verfügbar</h4>
          <div v-for="img in galerieImages" :key="img + 0" @click="currentImages.indexOf(img) == -1 ? currentImages.push(img) : ''">
            <p v-if="currentImages.indexOf(img) === -1">{{ img }}</p>
          </div>
          <button @click="loadMoreGalerieImages">Mehr</button>
        </div>
        <div class="createNews_imageSelection_current">
          <h4>Bilder die zu diesen Eintrag hinzugefügt werden</h4>
          <div v-for="img in currentImages" :key="img + 1" @click="currentImages.splice(currentImages.indexOf(img), 1)" class="removeButton">
            <img :src="imageUrl + img" alt="" />
          </div>
        </div>
        <div>
          <h4>Bilder hochladen undhinzufügen</h4>
          <form name="form1" method="post" enctype="multipart/form-data" :action="imageApi" v-on:submit.prevent="uploadImage">
            <p>Image File</p>
            <input name="files" type="file" accept="image/png" multiple />
            <input type="submit" value="Submit" />
          </form>
        </div>
      </div>
    </div>
    <div class="createNews_buttons">
      <button @click="saveNews" v-if="id == ''">Nachricht Hinzufügen</button>
      <div v-else>
        <button @click="editNews">Ausgewählte Nachricht überschreiben</button>
        <button @click="id = ''">Neue Nachricht erstellen</button>
      </div>
      <button class="removeButton" @click="resetSelection">Auswahl zurücksetzten</button>
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
  props: {
    setdata: { type: Object, default: () => {} },
  },
  data() {
    return {
      text: "",
      titel: "",
      id: "",
      galerieImagesOffset: 0,
      galerieImagesLimit: 20,
      galerieImages: [],
      currentImages: [],
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
    resetSelection() {
      this.text = "";
      this.titel = "";
      this.id = "";
      this.currentImages = [];
    },
    async loadGalerieImages() {
      this.galerieImages = await api.get(`Images/All?limit=${this.galerieImagesLimit}&offset=${this.galerieImagesOffset}`);
    },
    async loadMoreGalerieImages() {
      this.galerieImagesOffset += this.galerieImagesLimit;
      const newGalerieImages = await api.get(`Images/All?limit=${this.galerieImagesLimit}&offset=${this.galerieImagesOffset}`);
      newGalerieImages.forEach((item) => {
        this.galerieImages.push(item);
      });
    },
    async saveNews() {
      const data = await api.post("News", {
        titel: this.titel,
        text: this.text,
        images: this.currentImages,
      });
      this.apiResponse = data;
      this.$emit("newData");
    },
    async editNews() {
      const data = await api.put("News", {
        id: this.id,
        titel: this.titel,
        text: this.text,
        images: this.currentImages,
      });
      this.apiResponse = data;
      this.$emit("newData");
    },
    async uploadImage($event) {
      const form = $event.target;
      const addedimages = await api.uploadFile("Images", form);
      this.apiResponse = addedimages;
      this.galerieImagesOffset = 0;
      this.loadGalerieImages();
      addedimages?.forEach((img) => {
        this.currentImages.push(img);
      });
    },
  },
  mounted() {
    this.loadGalerieImages();
  },
  watch: {
    setdata() {
      this.text = this.setdata.text;
      this.titel = this.setdata.titel;
      this.id = this.setdata.id;
      this.created = this.setdata.created;
      this.currentImages = this.setdata.images;
    },
    apiResponse() {
      setTimeout(() => {
        this.apiResponse = null;
      }, 5000);
    },
  },
};
</script>

<style>
.createNews {
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1250px;
  margin: auto;
}
.createNews_input {
  display: flex;
  flex-direction: column;
  width: 100%;
}
.createNews_input_text {
  max-width: 750px;
  min-width: 750px;
  display: flex;
  margin: 5px auto;
  justify-content: flex-start;
}
.createNews_input_text label {
  width: 50px;
}
.createNews_input_text input,
textarea {
  width: 100%;
}
.createNews_imageSelection {
  display: flex;
  gap: 25px;
  margin: 0 auto;
}
.createNews_imageSelection_current {
  border-left: 1px grey solid;
  border-right: 1px grey solid;
  padding: 0 25px;
}
.createNews_imageSelection_current img {
  max-width: 150px;
  max-height: 150px;
}
.createNews_buttons {
  max-width: 750px;
  min-width: 250px;
  margin: 25px auto;
}
</style>
