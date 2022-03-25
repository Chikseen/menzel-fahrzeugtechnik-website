<template>
  <div>
    <ActiveMessage msg="Welcome to Your Vue.js App" v-if="keyValid" />
    <KeyHandler :keyStatus="keyValid" @keyStatus="keyValid = $event" />
  </div>
</template>

<script>
import ActiveMessage from "@/components/ActiveMessage.vue";
import KeyHandler from "@/components/KeyHandler.vue";
import api from "@/apiService";

export default {
  name: "App",
  components: {
    ActiveMessage,
    KeyHandler,
  },
  data() {
    return {
      keyValid: false,
    };
  },
  methods: {
    async checkkey() {
      const data = await api.fetchData("key/check", { key: localStorage.getItem("authKey") });
      console.log("data", data);
      if (data.status === "keyNotValid") {
        this.keyValid = false;
      } else if (data.status === "keyValid") {
        this.keyValid = true;
      } else {
        this.keyValid = false;
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
