<template>
  <div>
    <div>
      <h3>Neuer Eintrag</h3>
      <div>
        <div class="createnewMessage_date">
          <div class="createnewMessage_date_selection">
            <label>Datum</label>
            <input type="date" v-model="date" />
          </div>
        </div>
        <div class="createnewMessage_input">
          <div class="createnewMessage_input_text">
            <label>Titel</label>
            <input type="text" v-model="titel" />
          </div>
          <div class="createnewMessage_input_text">
            <label>Text</label>
            <textarea name="" id="" cols="50" rows="5" v-model="text"></textarea>
          </div>
        </div>
        <p>?pictures?</p>
        <p>?videos?</p>
        <button @click="createnewMessage">Post erstellen</button>
      </div>
    </div>
    <div>
      <h3>Alle Nachrichten</h3>
      <div v-for="(item, index) in allMessages" :key="index">
        <p class="test" @mouseup="deleteNews(item.uuid)">{{ item }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import api from "@/apiService";
export default {
  data() {
    return {
      allMessages: [],
      date: "",
      titel: "",
      text: "",
    };
  },
  methods: {
    async getAll() {
      this.allMessages = await api.fetchData("news/loadAll", {
        key: localStorage.getItem("authKey"),
      });
      console.log("data", this.allMessages);
    },
    async createnewMessage() {
      this.allMessages = await api.fetchData("news/create", {
        date: this.date,
        titel: this.titel,
        text: this.text,
        key: localStorage.getItem("authKey"),
      });
      console.log("data", this.allMessages);
    },
    async deleteNews(uuid) {
      this.allMessages = await api.fetchData("news/delete", {
        uuid: uuid,
        key: localStorage.getItem("authKey"),
      });
      console.log("data", this.allMessages);
    },
  },
  mounted() {
    this.getAll();
    const date = new Date();
    this.date = `${String(date.getFullYear()).padStart(4, "0")}-${String(date.getDay()).padStart(2, "0")}-${String(date.getMonth() + 1).padStart(2, "0")}`;
  },
};
</script>

<style>
.test:hover {
  background-color: rgb(235, 72, 72);
}
</style>
