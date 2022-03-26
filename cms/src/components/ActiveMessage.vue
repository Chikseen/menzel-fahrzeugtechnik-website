<template>
  <div>
    <h1>Aktive Nachrichten</h1>
    <CreateNewActiveMessage @newData="allMessages = $event" />
    <br />
    <div>
      <h3>Aktive Nachrichten</h3>
      <div v-for="message in allMessages" :key="message.uuid">
        <div v-if="message.showStatus == 'true'">
          <p>{{ message.titel }}</p>
          <p>{{ message.text }}</p>
          <button @mouseup="deleteMessage(message.uuid)">Entfernen</button>
          <hr />
        </div>
      </div>
      <h3>Inaktive Nachrichten</h3>
      <div v-for="message in allMessages" :key="message.uuid">
        <div v-if="message.showStatus == 'false'">
          <p>{{ message.titel }}</p>
          <p>{{ message.text }}</p>
          <button @mouseup="deleteMessage(message.uuid)">Entfernen</button>
          <hr />
        </div>
      </div>
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
  watch: {
    allMessages() {
      this.allMessages.sort((a, b) => (new Date(a.startDate) > new Date(b.startDate) ? 1 : new Date(b.startDate) > new Date(a.startDate) ? -1 : 0));
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
