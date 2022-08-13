<template>
  <div>
    <h1>CMS für Menzel-Fahrzeugtechnik</h1>
    <div>
      <button @click="toShow = 'msg'" :class="toShow == 'msg' ? 'active' : ''">aktive Nachrichten</button>
      <button @click="toShow = 'news'" :class="toShow == 'news' ? 'active' : ''">News</button>
      <button @click="toShow = 'galerie'" :class="toShow == 'galerie' ? 'active' : ''">Galerie</button>
      <button @click="toShow = 'open'" :class="toShow == 'open' ? 'active' : ''">Öffnungszeiten</button>
      <button @click="toShow = 'views'" :class="toShow == 'key' ? 'views' : ''">Meta</button>
      <button @click="toShow = 'key'" :class="toShow == 'key' ? 'active' : ''">Zugriffskontrolle</button>
    </div>
    <div v-if="keyValid">
      <NotificationView v-show="toShow == 'msg'" msg="Welcome to Your Vue.js App" />
      <KeyHandler v-show="toShow == 'key'" :keyStatus="keyValid" @keyStatus="keyValid = $event" />
      <OpeningTimes v-show="toShow == 'open'" />
      <NewsView v-show="toShow == 'news'" />
      <Galerie v-show="toShow == 'galerie'" />
      <UserViews v-show="toShow == 'views'" />
    </div>
    <div v-else>
      <KeyHandler :keyStatus="keyValid" @keyStatus="keyValid = $event" />
    </div>
  </div>
</template>

<script>
import NotificationView from "@/components/Notifications/NotificationView.vue";
import KeyHandler from "@/components/KeyHandler.vue";
import OpeningTimes from "@/components/Openinghours/OpeningTimes.vue";
import NewsView from "@/components/News/NewsView.vue";
import Galerie from "@/components/Galerie.vue";
import UserViews from "@/components/UserViews.vue";
import api from "@/apiService";

export default {
  name: "App",
  components: {
    NotificationView,
    KeyHandler,
    OpeningTimes,
    NewsView,
    Galerie,
    UserViews,
  },
  data() {
    return {
      keyValid: false,
      toShow: "open",
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
  cursor: pointer;
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

.removeButton:hover {
  background-color: #e71c1c;
  box-shadow: 0 0 10px 5px #e71c1c5e;
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
