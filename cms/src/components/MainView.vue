<template>
  <div>
    <h1>CMS FOR MFZT</h1>
    <h5>Das wird die Haupt seite sein um die daten enfach bearbeiten zu können :)</h5>
    <h2 style="color: red">Dient natürlich nur um das conzept zu zeigen aber du weißt ja mittlerweile wie das abläuft :)</h2>

    <div>
      <textarea name="" id="" cols="30" rows="10" v-model="text"></textarea>
      <button @click="sendData">Senden</button>
    </div>
    <br />
    <p class="text" v-for="text in allData.new" :key="text" @click="removeEntry(text)">{{ text }}</p>
  </div>
</template>

<script>
import api from "../apiService";

export default {
  data() {
    return {
      text: "",
      allData: [],
    };
  },
  methods: {
    async getData() {
      console.log("hi", await api.fetchData("getAll", {}));
      this.allData = await api.fetchData("getAll", {});
    },
    async sendData() {
      this.allData = await api.fetchData("createEntry", { text: this.text });
    },
    async removeEntry(text) {
      console.log("remove", text);
      this.allData = await api.fetchData("removeEntry", { text: text });
    },
  },
  mounted() {
    this.getData();
  },
};
</script>

<style>
.text:hover {
  color: red;
}
</style>
