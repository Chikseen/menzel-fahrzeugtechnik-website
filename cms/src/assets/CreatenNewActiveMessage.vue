<template>
  <div class="createnewMessage">
    <div class="createnewMessage_date">
      <div class="createnewMessage_date_selection">
        <label>Von</label>
        <input type="date" v-model="startDate" />
      </div>
      <div class="createnewMessage_date_selection">
        <label>Bis</label>
        <input type="date" v-model="endDate" />
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
    <div>
      <div class="createnewMessage_coloerpicker">
        <label>Anzeigen als:</label>
        <div class="createnewMessage_coloerpicker_boxes">
          <div class="createnewMessage_coloerpicker_boxes_single">
            <label>Rot</label>
            <div class="createnewMessage_coloerpicker_boxes_single_box" @mouseup="colorselection = '0'">
              <div v-if="colorselection == '0'" style="background-color: rgb(241, 50, 50); width: 100%; height: 100%"></div>
            </div>
          </div>
          <div class="createnewMessage_coloerpicker_boxes_single">
            <label>Grün</label>
            <div class="createnewMessage_coloerpicker_boxes_single_box" @mouseup="colorselection = '1'">
              <div v-if="colorselection == '1'" style="background-color: rgb(50, 235, 75); width: 100%; height: 100%"></div>
            </div>
          </div>
          <div class="createnewMessage_coloerpicker_boxes_single">
            <label>Weiß</label>
            <div class="createnewMessage_coloerpicker_boxes_single_box" @mouseup="colorselection = '2'">
              <div v-if="colorselection == '2'" style="background-color: rgb(235, 235, 235); width: 100%; height: 100%"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="createnewMessage_status">
      <label>Aktiv anzeigen</label>
      <h6>nachrichten werden nur angezeigt wenn ihr status "Aktiv" ist</h6>
      <button @mouseup="showStatus = 'true'" :class="showStatus == 'true' ? 'active' : ''">Anzeigen</button>
      <button @mouseup="showStatus = 'false'" :class="showStatus == 'false' ? 'active' : ''">Nicht Anzeigen</button>
    </div>
    <button @click="createnewMessage" v-if="uuid == ''">Nachricht Hinzufügen</button>
    <div v-else>
      <button @click="createnewMessage">Nachricht Änderen</button>
      <button @click="uuid = ''">Eine Neue Nachricht erstellen</button>
    </div>
  </div>
</template>

<script>
import api from "../apiService";

export default {
  props: {
    setdata: { type: Object, default: () => {} },
  },
  data() {
    return {
      startDate: "",
      endDate: "",
      text: "",
      titel: "",
      colorselection: "1",
      showStatus: "true",
      uuid: "",
    };
  },
  methods: {
    async createnewMessage() {
      const data = await api.post("activeMessages/create", {
        startDate: this.startDate,
        endDate: this.endDate,
        text: this.text,
        titel: this.titel,
        colorselection: this.colorselection,
        showStatus: this.showStatus,
        key: localStorage.getItem("authKey"),
        uuid: this.uuid,
      });
      const date = new Date();
      this.$emit("newData", data);

      this.startDate = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
      this.endDate = `${date.getFullYear()}-${String(date.getMonth() + 2).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
      this.text = "";
      this.titel = "";
      this.colorselection = "1";
      this.showStatus = "true";
      this.uuid = "";
    },
  },
  mounted() {
    const date = new Date();

    this.startDate = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
    this.endDate = `${date.getFullYear()}-${String(date.getMonth() + 2).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
  },
  watch: {
    setdata() {
      this.startDate = this.setdata.startDate;
      this.endDate = this.setdata.endDate;
      this.text = this.setdata.text;
      this.titel = this.setdata.titel;
      this.colorselection = this.setdata.colorselection;
      this.showStatus = this.setdata.showStatus;
      this.uuid = this.setdata.uuid;
    },
  },
};
</script>

<style>
.createnewMessage {
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 750px;
  margin: auto;
}
.createnewMessage_date {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 200px;
}
.createnewMessage_date_selection {
  display: flex;
  justify-content: space-between;
  margin: 5px 10px;
}
.createnewMessage_date_selection label {
  margin: auto;
  width: 50px;
}
.createnewMessage_input {
  display: flex;
  flex-direction: column;
  width: 100%;
}
.createnewMessage_input_text {
  display: flex;
  margin: 5px 10px;
  justify-content: flex-start;
}
.createnewMessage_input_text label {
  width: 50px;
}
.createnewMessage_input_text input,
textarea {
  width: 100%;
}
.createnewMessage_coloerpicker {
  display: flex;
  justify-content: flex-start;
}
.createnewMessage_coloerpicker label {
  margin: auto 20px;
}
.createnewMessage_coloerpicker_boxes {
  display: flex;
}
.createnewMessage_coloerpicker_boxes_single {
  display: flex;
  flex-direction: column;
  width: 40px;
  margin: 0 5px;
}
.createnewMessage_coloerpicker_boxes_single label {
  margin: 0;
}
.createnewMessage_coloerpicker_boxes_single_box {
  border: 1px solid;
  width: 40px;
  height: 40px;
}
.createnewMessage_status {
  display: flex;
  flex-direction: column;
  margin: 15px;
  margin-right: auto;
  text-align: left;
}
.createnewMessage_status label,
h6 {
  margin: 0;
}

.active {
  background-color: green;
}
</style>
