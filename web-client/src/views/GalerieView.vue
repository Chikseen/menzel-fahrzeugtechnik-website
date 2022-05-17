<template>
  <div v-if="allMessages">
    <div v-for="(message, index) in allMessages" :key="index">
      <NewsMessage :message="message" />
    </div>
    <button @click="get">Mehr</button>
  </div>
</template>
<script>
import api from "@/apiService.js";

import NewsMessage from "@/components/NewsMessage";

export default {
  components: {
    NewsMessage,
  },
  data() {
    return {
      allMessages: [],
      top: 0,
      count: 5,
    };
  },
  methods: {
    async get() {
      const resp = await api.fetchData("news/get", {
        top: this.top,
        count: this.count,
      });
      this.top = this.top + 5;
      this.count = this.count + 5;
      console.log("resp", resp);
      this.allMessages = this.allMessages.concat(resp);
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
