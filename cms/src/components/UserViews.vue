<template>
  <table class="viewsTable">
    <tr>
      <th v-for="header in views.header" :key="header + 'h'">{{ header }}</th>
    </tr>
    <tr v-for="tableRow in views.data" :key="tableRow + 'tr'">
      <td v-for="item in tableRow" :key="item + 'i'">{{ item }}</td>
    </tr>
  </table>
</template>

<script>
import api from "@/apiService";

export default {
  data() {
    return {
      views: {},
    };
  },
  methods: {
    async getData() {
      const data = await api.get("User/Count/-1/-1");
      this.views = data;
    },
  },
  mounted() {
    this.getData();
  },
};
</script>

<style>
.viewsTable {
  position: relative;
  margin: 0 auto;
}
.viewsTable td {
  padding: 15px;
  border: 1px solid gray;
  min-width: 75px;
}
.viewsTable th {
  position: sticky;
  top: 0;
  background-color: white;
}
</style>
