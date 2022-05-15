<template>
  <div v-if="allMessages">
    <div v-for="(message, index) in allMessages" :key="index">
      <h3>{{ message.titel }}</h3>
      <p>{{ message.text }}</p>
      <h6>{{ message.date }}</h6>
      <div v-for="(img, index) in message.imageIds" :key="index + 'sec'">
        <img class="tmp" :src="url + img.imageId" alt="" />
      </div>
      <hr />
    </div>
  </div>
</template>
<script>
import api from "@/apiService.js";

export default {
  data() {
    return {
      allMessages: [],
    };
  },
  computed: {
    url() {
      if (process.env.NODE_ENV == "development") return "http://192.168.2.100:7081?id=";
      else return "https://image.menzel-fahrzeugtechnik.de?id=";
    },
  },
  methods: {
    async get() {
      this.allMessages = await api.fetchData("news/get", {});
    },
  },
  mounted() {
    this.get();
  },
};
</script>

<style>
.tmp {
  max-width: 500px;
}
</style>
