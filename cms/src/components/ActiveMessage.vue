<template>
  <div>
    <h1>Aktive Nachrichten</h1>
    <CreateNewActiveMessage @newData="allMessages = $event" />
    <br />
    <div v-for="message in allMessages" :key="message.uuid">
      <p>{{ message.titel }}</p>
      <p>{{ message.text }}</p>
      <p>{{ message.startDate }}</p>
      <p>{{ message.endDate }}</p>
      <button @mouseup="deleteMessage(message.uuid)">Entfernen</button>
      <hr />
    </div>
  </div>
</template>

<script>
import api from "../apiService";
import CreateNewActiveMessage from "@/assets/CreatenNewActiveMessage.vue";

export default {
  components: {
    CreateNewActiveMessage,
  },
  data() {
    return {
      text: "",
      allMessages: [],
    };
  },
  methods: {
    async getData() {
      const data = await api.fetchData("activeMessages/get", {});
      this.allMessages = data;
    },
    async deleteMessage(uuid) {
      const data = await api.fetchData("activeMessages/delete", { uuid: uuid });
      this.allMessages = data;
    },
  },
  mounted() {
    this.getData();
  },
};
</script>

<style>
.text:hover {
  color: red;
}
</style>
