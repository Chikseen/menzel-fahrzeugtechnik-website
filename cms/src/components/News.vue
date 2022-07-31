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

    <form name="form1" method="post" enctype="multipart/form-data" :action="api" v-on:submit.prevent="uploadImage">
      <label for="image1">Image File</label>
      <input name="files" type="file" accept="image/png" multiple />
      <input type="submit" value="Submit" />
    </form>
  </div>
</template>

<script>
import api from "@/apiService";
//import FileUpload from "./FileUpload.vue";

export default {
  components: {
    //   FileUpload,
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
    api() {
      return `${process.env.VUE_APP_API}/Images`;
    },
  },
  methods: {
    async uploadImage($event) {
      const form = $event.target;
      console.log("hii", form);
      console.log("hii", form.action);
      let res = await api.uploadFile("Images", form);
      /*       let res = await fetch(form.action, {
        method: form.method,
        body: new FormData(form),
      }); */
      console.log(res);
      /*       const file = e.target.files[0];
      if (file !== undefined && config.imgTypes.includes(file.type)) {
        this.logoImage.name = file.name;
        if (this.logoImage.name.lastIndexOf(".") <= 0) {
          return;
        }
        const fr = new FileReader();
        fr.readAsDataURL(file);
        fr.addEventListener("load", () => {
          this.logoImage.url = fr.result;
          this.logoImage.file = file;
        });
      }
      this.defaultLogo = false;

      if (this.importedLogo) {
        this.importedLogo = null;
      } */
    },

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
