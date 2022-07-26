<template>
  <div class="keyHandler_wrapper">
    <div v-if="keyStatus">
      <p>Alle Regrestierten Benutzter</p>
      <h6>Sollten irgendwelche unregelmäsigkeiten auffallen bitte an an denn Betreiber wenden ;)</h6>
      <div v-for="(item, index) in allUser" :key="index">
        <p v-if="item == ''">NoName</p>
        <p v-else>{{ item }}</p>
      </div>
    </div>
    <div v-else>
      <h2>Der authKey ist ungültig oder sie sind nicht authentifiziert!</h2>
      <div>
        <p>
          Um dieses produkt nutzten zu können müssen sie sich authentifizieren. Dazu können sie einen neuen Code an die bestimme E-Mail addresse anfordern und
          ihn anschliesend hier eingeben
        </p>
      </div>
      <div class="keyHandler_newKey">
        <label>Wer benutzt diesen authKey</label>
        <input type="text" v-model="user" />
        <label>Neuen authKey anfordern</label>
        <button @mouseup="requestNewKey" @click="showclickMessage = true">Anfordern</button>
        <p v-if="showclickMessage">Der authKey für {{ user }} wurde an !-! geschickt</p>
      </div>
      <div class="keyHandler_newKey">
        <label>authKey hier eingeben </label>
        <input type="text" v-model="keyInput" />
        <button @mouseup="confirmKey">Überprüfen</button>
      </div>
    </div>
  </div>
</template>

<script>
import api from "@/apiService";

export default {
  name: "Keyhandler",
  components: {},
  props: {
    keyStatus: { type: Boolean, default: false },
  },
  data() {
    return {
      showclickMessage: false,
      keyInput: "",
      user: "",
      allUser: [],
    };
  },
  methods: {
    async requestNewKey() {
      const data = await api.post("key/sendNew", {
        key: localStorage.getItem("authKey"),
        user: this.user,
      });
      console.log("data", data);
    },
    async confirmKey() {
      const data = await api.get("key/check", { key: this.keyInput });
      if (data.status) this.$emit("keyStatus", false);
      if (data.status) {
        localStorage.setItem("authKey", this.keyInput);
        this.$emit("keyStatus", true);
      }
    },
    async getAlluser() {
      console.log("hi");
      const data = await api.get("key/getuser", { key: localStorage.getItem("authKey") });
      this.allUser = data.data;
    },
  },
  mounted() {
    this.getAlluser();
  },
};
</script>

<style>
.keyHandler_wrapper {
  max-width: 500px;
  margin: 0 auto;
}
.keyHandler_newKey {
  display: flex;
  flex-direction: column;
  margin-top: 15px;
}
</style>
