<template>
  <div class="createnewMessage">
    <div>
      <label>Von</label>
      <input type="date" v-model="startDate" />
    </div>
    <div>
      <label>Bis</label>
      <input type="date" v-model="endDate" />
    </div>
    <div>
      <label>Titel</label>
      <input type="text" v-model="titel" />
    </div>
    <div>
      <label>Text</label>
      <textarea name="" id="" cols="50" rows="5" v-model="text"></textarea>
    </div>
    <div>
      <div>
        <select name="colorpicker" v-model="colorselection">
          <option value="0">Rot</option>
          <option value="1">Grün</option>
          <option value="2">Weiß</option>
        </select>
      </div>
      <div>
        <label>Anzeigen</label>
        <input type="checkBox" checked v-model="showStatus" @mouseup="showStatus == 'true' ? (showStatus = 'false') : (showStatus = 'true')" />
      </div>
    </div>
    <button @click="createnewMessage">Erstellen</button>
  </div>
</template>

<script>
import api from "../apiService";

export default {
  data() {
    return {
      startDate: "",
      endDate: "",
      text: "",
      titel: "",
      colorselection: "1",
      showStatus: "true",
    };
  },
  methods: {
    async createnewMessage() {
      const data = await api.fetchData("activeMessages/create", {
        startDate: this.startDate,
        endDate: this.endDate,
        text: this.text,
        titel: this.titel,
        colorselection: this.colorselection,
        showStatus: this.showStatus,
      });
      this.$emit("newData", data)
    },
  },
  mounted() {
    const date = new Date();

    this.startDate = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
    this.endDate = `${date.getFullYear()}-${String(date.getMonth() + 2).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
  },
};
</script>
