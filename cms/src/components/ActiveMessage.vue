<template>
  <div>
    <h1>Aktive Nachrichten</h1>
    <CreateNewActiveMessage @newData="getData" :setdata="setdata" />
    <br />
    <div class="activeMessages_wrapper">
      <div>
        <h3>Aktive Nachrichten</h3>
        <div v-for="message in allMessages" :key="message.id">
          <div v-if="message.isActive" @mouseup="setsetData(message)" class="activeMessages_slection">
            <p>{{ message.titel }}</p>
            <p>{{ message.text }}</p>
            <button @mouseup="deleteMessage(message.id)">Entfernen</button>
          </div>
        </div>
      </div>
      <div>
        <h3>Inaktive Nachrichten</h3>
        <div v-for="message in allMessages" :key="message.id">
          <div v-if="!message.isActive" @mouseup="setsetData(message)" class="activeMessages_slection">
            <p>{{ message.titel }}</p>
            <p>{{ message.text }}</p>
            <button @mouseup="deleteMessage(message.id)">Entfernen</button>
          </div>
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
      setdata: {},
    };
  },
  methods: {
    async getData() {
      const data = await api.get("Notification/All");
      this.allMessages = data;
    },
    async deleteMessage(id) {
      const data = await api.delete("Notification", {
        id: id,
      });
      if (data.status) this.getData();
      else console.log("error while deleting Notification");
    },
    setsetData(msg) {
      this.setdata = msg;
    },
  },
  watch: {
    allMessages() {
      this.allMessages.sort((a, b) => (new Date(a.created) > new Date(b.created) ? 1 : new Date(b.created) > new Date(a.created) ? -1 : 0)).reverse();
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
.activeMessages_wrapper {
  display: grid;
  grid-template-columns: 50% 50%;
  width: 100%;
  max-width: 1000px;
  flex-basis: 45% 45%;
  margin: auto;
}
.activeMessages_slection {
  border: 1px solid #8a8a8a52;
  border-radius: 10px;
  box-shadow: 2px 2px 10px 2px #8f8f8f25;
  padding: 10px;
  transition: 0.3s all;
  margin: 10px;
}

.activeMessages_slection:hover {
  box-shadow: 2px 2px 10px 2px #8f8f8f56;
  background-color: rgb(250, 250, 250);
}
</style>
