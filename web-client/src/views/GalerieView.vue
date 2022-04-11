<template>
  <div v-if="allMessages">
    <div v-for="(message, index) in allMessages" :key="index">
      <h3>{{ message.titel }}</h3>
      <p>{{ message.text }}</p>
      <h6>{{ message.date }}</h6>
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
