<template>
  <div>
    <h4>Hinzugefügte Bilder</h4>
    <div>
      <div class="imageSelectionPreview">
        <div v-for="(image, index) in images" :key="index">
          <div v-if="image.length > 0">
            <img class="previewInSelcetion" @click="removeImage(index)" :src="image" />
          </div>
        </div>
      </div>

      <div class="imageUpload">
        <p>Weiteres Bild Hinzufügen (Bild anglicken um zu entfernen)</p>
        <input type="file" @change="previewImage" accept="image/*" />
        <button @click="addPicture">Hinzufügen</button>
      </div>
      <div class="image-preview" v-if="currentPreview.length > 0">
        <img class="preview" :src="currentPreview" />
      </div>
    </div>
  </div>
</template>

<script>
// import api from "@/apiService";

export default {
  data() {
    return {
      images: [],
      currentPreview: "",
    };
  },
  computed: {},
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
    addPicture() {
      this.images.push(this.currentPreview);
      this.currentPreview = "";
      this.updateImages();
    },
    removeImage(i) {
      this.images.splice(i, 1);
      this.updateImages();
    },
    updateImages() {
      console.log("trigger update");
      this.$emit("onImagesChange", this.images);
    },
  },
  mounted() {},
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
</style>
