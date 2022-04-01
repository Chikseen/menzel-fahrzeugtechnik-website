<template>
  <div>
    <br />
    <p v-for="text in allData.new" :key="text">{{ text }}</p>
  </div>
</template>
<script>
import api from "@/apiService.js";

export default {
  data() {
    return {
      allData: [],
    };
  },
  methods: {
    async getData() {
      console.log("hi",await api.fetchData("getAll", {}))
      this.allData = await api.fetchData("getAll", {});
    },
  },
  mounted() {
    this.getData();
  },
};
</script>
