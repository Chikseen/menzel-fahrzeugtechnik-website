<template>
  <div>
    <h1>Aktive Nachrichten</h1>
    <CreateNewActiveMessage @newData="allMessages = $event" :setdata="setdata" />
    <br />
    <div class="activeMessages_wrapper">
      <div>
        <h3>Aktive Nachrichten</h3>
        <div v-for="message in allMessages" :key="message.uuid">
          <div v-if="message.showStatus == 'true'" @mouseup="setsetData(message)" class="activeMessages_slection">
            <p>{{ message.titel }}</p>
            <p>{{ message.text }}</p>
            <button @mouseup="deleteMessage(message.uuid)">Entfernen</button>
          </div>
        </div>
      </div>
      <div>
        <h3>Inaktive Nachrichten</h3>
        <div v-for="message in allMessages" :key="message.uuid">
          <div v-if="message.showStatus == 'false'" @mouseup="setsetData(message)" class="activeMessages_slection">
            <p>{{ message.titel }}</p>
            <p>{{ message.text }}</p>
            <button @mouseup="deleteMessage(message.uuid)">Entfernen</button>
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
      const data = await api.post("activeMessages/get", {
        key: localStorage.getItem("authKey"),
      });
      this.allMessages = data;
    },
    async deleteMessage(uuid) {
      const data = await api.post("activeMessages/delete", {
        uuid: uuid,
        key: localStorage.getItem("authKey"),
      });
      this.allMessages = data;
    },
    setsetData(msg) {
      this.setdata = msg;
    },
  },
  watch: {
    allMessages() {
      console.log("222", this.allMessages);
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
