<template>
  <div>
    <div>
      <h3>Neuer Eintrag</h3>
      <div>
        <div class="createnewMessage_date">
          <div class="createnewMessage_date_selection">
            <label>Datum</label>
            <input type="date" v-model="date" />
          </div>
        </div>
        <div class="createnewMessage_input">
          <div class="createnewMessage_input_text">
            <label>Titel</label>
            <input type="text" v-model="titel" />
          </div>
          <div class="createnewMessage_input_text">
            <label>Text</label>
            <textarea name="" id="" cols="50" rows="5" v-model="text"></textarea>
          </div>
        </div>
      </div>
    </div>
    <FileUpload @onImagesChange="upadteImages($event)" :imagesFromAbove="images" />
    <button @click="createnewMessage">EINTRAG ERSTELLEN</button>
    <div>
      <h3>Alle Nachrichten</h3>
      <div v-for="(item, index) in allMessages" :key="index" class="newsPreviewWrapper" @click="editNews(item)">
        <p>Erstellt {{ item.date }}</p>
        <p>{{ item.titel }}</p>
        <p>Erstellt {{ item.text }}</p>
        <img v-for="(img, index) in item.imageIds" :key="index + 'imgs'" :src="url + img" alt="" class="newsImagePreview" />
        <h6 class="test">{{ item }}</h6>
        <button style="background-color: red; z-index: 10" @click="deleteNews(item.uuid)">Eintrag Löschen</button>
      </div>
    </div>
  </div>
</template>

<script>
import api from "@/apiService";
import FileUpload from "./FileUpload.vue";

export default {
  components: {
    FileUpload,
  },
  data() {
    return {
      allMessages: [],
      date: "",
      titel: "",
      text: "",
      images: [],
    };
  },
  computed: {
    url() {
      if (process.env.NODE_ENV == "development") return "http://192.168.2.100:7081?id=";
      else return "https://image.menzel-fahrzeugtechnik.de?id=";
    },
  },
  methods: {
    async getAll() {
      this.allMessages = await api.post("news/loadAll", {
        key: localStorage.getItem("authKey"),
      });
      console.log("data", this.allMessages);
    },
    async createnewMessage() {
      this.allMessages = await api.post("news/create", {
        date: this.date,
        titel: this.titel,
        text: this.text,
        key: localStorage.getItem("authKey"),
        images: this.images,
      });
      console.log("data", this.allMessages);
    },
    async deleteNews(uuid) {
      this.allMessages = await api.post("news/delete", {
        uuid: uuid,
        key: localStorage.getItem("authKey"),
      });
      console.log("data", this.allMessages);
      this.getAll();
    },
    editNews(data) {
      console.log("images", data);
      this.date = data.data;
      this.titel = data.titel;
      this.text = data.text;
      this.images = data.imageIds;
    },
    upadteImages(evt) {
      console.log("update", evt);
      this.images = evt;
      this.getAll();
    },
  },
  mounted() {
    this.getAll();
    const date = new Date();
    this.date = `${String(date.getFullYear()).padStart(4, "0")}-${String(date.getDay()).padStart(2, "0")}-${String(date.getMonth() + 1).padStart(2, "0")}`;
  },
};
</script>

<style>
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
</style>
