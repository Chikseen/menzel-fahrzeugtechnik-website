<template>
  <div>
    <h4>hinzugefügte Bilder</h4>
    <div>
      <div class="imageSelectionPreview">
        <div v-for="(image, index) in images" :key="index">
          <div v-if="image.length > 0">
            <img class="previewInSelcetion" @click="removeImage(index)" :src="url + image" />
          </div>
        </div>
      </div>

      <div class="imageHandler">
        <div class="imageUpload">
          <p>Bild hochladen</p>
          <div>
            <p>Bildtitel</p>
            <input type="text" v-model="imageSearch" />
          </div>
          <input v-if="reloadImagebox" type="file" @change="previewImage" accept="image/png" />
          <button @click="addPicture" v-if="this.currentPreview != '' && imageSearch.length > 2 && imageSearchResults.length === 0">Hochladen</button>
        </div>
        <div>
          <p>Oder ein vorhandenes Bild auswählen</p>
          <input type="text" v-model="imageSearch" />
        </div>
        <div class="imageSearchPreviewWrapper">
          <div v-for="(img, index) in imageSearchResults" :key="index + 'sec'">
            <img @click="addImage(img)" class="imageSearchPreview" :src="url + img" alt="" />
          </div>
          <p v-if="imageSearch.length > 0 && imageSearchResults.length === 0">keine Bilder die dieser Suche entsprechen</p>
        </div>
      </div>
      <div class="image-preview" v-if="currentPreview.length > 0">
        <img class="preview" :src="currentPreview" />
      </div>
    </div>
  </div>
</template>

<script>
import api from "@/apiService";

export default {
  components: {},
  props: {
    imagesFromAbove: { type: Array },
  },
  data() {
    return {
      images: [],
      currentPreview: "",
      reloadImagebox: true,
      allImages: [],
      imageSearch: "",
      imageSearchResults: [],
    };
  },
  computed: {
    url() {
      if (process.env.NODE_ENV == "development") return "http://192.168.2.100:7081?id=";
      else return "https://image.menzel-fahrzeugtechnik.de?id=";
    },
  },
  methods: {
    previewImage: function (event) {
      var input = event.target;
      if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = (e) => {
          this.currentPreview = e.target.result;
        };
        reader.readAsDataURL(input.files[0]);
      }
    },
    async addPicture() {
      if (this.currentPreview != "") {
        const imageId = await api.fetchData("news/uploadImage", {
          key: localStorage.getItem("authKey"),
          image: this.currentPreview,
          name: this.imageSearch,
        });
        console.log("imageid", imageId.imageId);
        this.images.push(imageId.imageId);
        this.reloadImagebox = false;
        this.reloadImagebox = true;
        this.currentPreview = "";
        this.updateImages();
      }
    },
    removeImage(i) {
      this.images.splice(i, 1);
      this.updateImages();
    },
    updateImages() {
      console.log("trigger update");
      this.$emit("onImagesChange", this.images);
    },
    addImage(imageId) {
      console.log("push image", imageId);
      this.images.push(imageId);
      this.updateImages();
    },
    async loadPictures() {
      const images = await api.fetchData("news/getAllImage", {
        key: localStorage.getItem("authKey"),
      });
      this.allImages = images.map((img) => img.replace(/.png/, ""));
    },
  },
  watch: {
    imageSearch() {
      if (this.ImageSearch != "") {
        console.log("this.imageSearch", this.imageSearch);
        const regEx = new RegExp(this.imageSearch);
        this.imageSearchResults = this.allImages.filter((img) => img.match(regEx));
      } else {
        this.imageSearchResults = null;
      }
    },
    imagesFromAbove() {
      this.images = this.imagesFromAbove;
    },
  },
  mounted() {
    this.loadPictures();
  },
};
</script>

<style>
.preview {
  max-width: 300px;
}
.previewInSelcetion {
  max-width: 200px;
}
.previewInSelcetion:hover {
  border-radius: 50px;
  filter: grayscale(100);
  filter: brightness(0.9);
}

.previewInSelcetion::before {
  content: "REMOVE";
  position: absolute;
  top: 0;
  right: 0;
  width: 20px;
  height: 20px;
  background-color: red;
}
.imageSelectionPreview {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
}

.imageSelectionPreview div {
  max-width: 200px;
}

.imageHandler {
  display: flex;
  justify-content: center;
}

.imageHandler input {
  width: 300px;
  height: 21px;
}

.imageSearchPreviewWrapper {
  max-width: 750px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 200px));
  gap: 5px;
}

.imageSearchPreview {
  max-width: 200px;
}
</style>
