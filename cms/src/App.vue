<template>
  <div>
    <h1>CMS für Menzel-Fahrzegtechnik</h1>
    <div>
      <button @click="toShow = 'msg'" :class="toShow == 'msg' ? 'active' : ''">aktive Nachrichten</button>
      <button @click="toShow = 'news'" :class="toShow == 'news' ? 'active' : ''">News</button>
      <button @click="toShow = 'galerie'" :class="toShow == 'galerie' ? 'active' : ''">Galerie</button>
      <button @click="toShow = 'open'" :class="toShow == 'open' ? 'active' : ''">Öffnungszeiten</button>
      <button @click="toShow = 'key'" :class="toShow == 'key' ? 'active' : ''">Zugriffskontrolle</button>
    </div>
    <div v-if="keyValid">
      <ActiveMessage v-if="toShow == 'msg'" msg="Welcome to Your Vue.js App" />
      <KeyHandler v-if="toShow == 'key'" :keyStatus="keyValid" @keyStatus="keyValid = $event" />
      <OpeningTimes v-if="toShow == 'open'" />
      <News v-if="toShow == 'news'" />
      <Galerie v-if="toShow == 'galerie'" />
    </div>
    <div v-else>
      <KeyHandler :keyStatus="keyValid" @keyStatus="keyValid = $event" />
    </div>
  </div>
</template>

<script>
import ActiveMessage from "@/components/ActiveMessage.vue";
import KeyHandler from "@/components/KeyHandler.vue";
import OpeningTimes from "@/components/OpeningTimes.vue";
import News from "@/components/News.vue";
import Galerie from "@/components/Galerie.vue";
import api from "@/apiService";

export default {
  name: "App",
  components: {
    ActiveMessage,
    KeyHandler,
    OpeningTimes,
    News,
    Galerie,
  },
  data() {
    return {
      keyValid: false,
      toShow: "galerie",
    };
  },
  methods: {
    async checkkey() {
      const data = await api.get("User");
      console.log("keystatus", data);
      if (data.status) {
        this.keyValid = true;
      } else {
        this.keyValid = false;
        this.toShow = "key";
      }
    },
  },
  mounted() {
   this.checkkey();
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=BIZ+UDPMincho&display=swap");

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  font-family: "BIZ UDPMincho", serif;
  font-size: 16px;
}

button {
  background-color: #e9e9e9;
  border: none;
  border-radius: 5px;
  margin: 5px 10px;
  height: 30px;
  padding: 6px;
  box-shadow: 2px 2px 10px 2px #8f8f8f27;
  font-family: "BIZ UDPMincho", serif;
  font-size: 0.8rem;
}
input {
  border-radius: 5px;
  border: 0.5px solid rgba(151, 151, 151, 0.479);
  height: 25px;
  box-shadow: 2px 2px 10px 2px #8f8f8f27;
  font-family: "BIZ UDPMincho", serif;
  font-size: 0.8rem;
}
textarea {
  border-radius: 5px;
  border: 0.5px solid rgba(151, 151, 151, 0.479);
  height: 100px;
  box-shadow: 2px 2px 10px 2px #8f8f8f27;
  font-family: "BIZ UDPMincho", serif;
  font-size: 0.8rem;
}
</style>
