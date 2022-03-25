<template>
  <div class="keyHandler_wrapper">
    <div v-if="keyStatus">
      <p>OPTIONS FOR VALID KEY</p>
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
        <label>Neuen authKey anfordern</label>
        <button @mouseup="requestNewKey">Anfordern</button>
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
      keyInput: "",
    };
  },
  methods: {
    async requestNewKey() {
      console.log("new key requested");
      const data = await api.fetchData("key/sendNew", { key: localStorage.getItem("authKey") });
      console.log("data", data);
    },
    async confirmKey() {
      console.log("new key requested");
      const data = await api.fetchData("key/check", { key: this.keyInput });
      if (data.status === "keyNotValid") this.$emit("keyStatus", false);
      if (data.status === "keyValid") {
        localStorage.setItem("authKey", this.keyInput);
        this.$emit("keyStatus", true);
      }
    },
  },
  mounted() {},
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
