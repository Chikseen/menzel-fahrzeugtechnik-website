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
    <p v-for="text in allData.new" :key="text">{{ text }}</p>
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
    async sendData() {
      this.allData = await api.fetchData("createEntry", { text: this.text });
    },
  },
  created() {
    api.fetchData("getall", {});
  },
};
</script>
