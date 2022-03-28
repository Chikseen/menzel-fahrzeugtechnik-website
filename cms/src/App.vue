<template>
  <div>
    <div>
      <button @click="toShow = 'msg'">Aktive Nachrichten</button>
      <button @click="toShow = 'key'">ZugriffsKontrolle</button>
      <button @click="toShow = 'open'">Öffnungszeiten</button>
    </div>
    <div v-if="keyValid">
      <ActiveMessage v-if="toShow == 'msg'" msg="Welcome to Your Vue.js App" />
      <KeyHandler v-if="toShow == 'key'" :keyStatus="keyValid" @keyStatus="keyValid = $event" />
      <OpeningTimes v-if="toShow == 'open'" />
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
import api from "@/apiService";

export default {
  name: "App",
  components: {
    ActiveMessage,
    KeyHandler,
    OpeningTimes,
  },
  data() {
    return {
      keyValid: false,
      toShow: "open",
    };
  },
  methods: {
    async checkkey() {
      const data = await api.fetchData("key/check", { key: localStorage.getItem("authKey") });
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
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
