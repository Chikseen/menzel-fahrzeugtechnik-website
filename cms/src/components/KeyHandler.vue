<template>
  <div class="keyHandler_wrapper">
    <div v-if="keyStatus">
      <p>Alle Regrestireten Benutzter</p>
      <button @click="getAlluser">LoadUser</button>
      <div v-for="(item, index) in allUser" :key="index">
        <div class="keyHandler_keys">
          <p>{{ item.name }}</p>
          <span>{{ item.value }}</span>
        </div>
      </div>
      <div>
        <input type="text" v-model="valueToDelete" />
        <button @click="removeUser">Delete user value</button>
      </div>
    </div>
    <div v-else>
      <h2>Der authKey ist ungültig oder sie sind nicht authentifiziert!</h2>
      <div>
        <p>
          Um dieses produkt nutzten zu können müssen sie sich authentifizieren. Dazu können sie einen neuen Code an die
          bestimme E-Mail addresse anfordern und
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
      valueToDelete: "",
    };
  },
  methods: {
    async requestNewKey() {
      const data = await api.post("User", {
        name: this.user,
      });
      console.log("data", data);
    },
    async confirmKey() {
      const data = await api.post("User/Validate", { value: this.keyInput });
      console.log("data", data);
      localStorage.setItem("key", this.keyInput);
      document.location.reload(true);
    },
    async getAlluser() {
      const data = await api.get("User/All");
      this.allUser = data;
    },
    async removeUser() {
      await api.delete("User", { value: this.valueToDelete });
      this.getAlluser();
    },
  },
  mounted() {
    this.keyInput = localStorage.getItem("key");
    this.getAlluser();
  },
};
</script>

<style>
.keyHandler_wrapper {
  max-width: 500px;
  margin: 0 auto;
  text-align: center;
}

.keyHandler_newKey {
  display: flex;
  flex-direction: column;
  margin-top: 15px;
}

.keyHandler_keys {
  box-shadow: 0 0 5px 5px #2d2d2d26;
  border-radius: 10px;
}

.keyHandler_keys span {
  font-size: 0.65rem;
  word-wrap: break-word;
}
</style>
