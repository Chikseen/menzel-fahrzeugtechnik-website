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
            <div class="createnewMessage_coloerpicker_boxes_single_box" @mouseup="colorselection = 'red'">
              <div v-if="colorselection == 'red'" style="background-color: rgb(241, 50, 50); width: 100%; height: 100%"></div>
            </div>
          </div>
          <div class="createnewMessage_coloerpicker_boxes_single">
            <label>Grün</label>
            <div class="createnewMessage_coloerpicker_boxes_single_box" @mouseup="colorselection = 'green'">
              <div v-if="colorselection == 'green'" style="background-color: rgb(50, 235, 75); width: 100%; height: 100%"></div>
            </div>
          </div>
          <div class="createnewMessage_coloerpicker_boxes_single">
            <label>Weiß</label>
            <div class="createnewMessage_coloerpicker_boxes_single_box" @mouseup="colorselection = 'white'">
              <div v-if="colorselection == 'white'" style="background-color: rgb(235, 235, 235); width: 100%; height: 100%"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="createnewMessage_status">
      <label>Aktiv anzeigen</label>
      <h6>nachrichten werden nur angezeigt wenn ihr status "Aktiv" ist</h6>
      <button @mouseup="showStatus = true" :class="showStatus ? 'active' : ''">Anzeigen</button>
      <button @mouseup="showStatus = false" :class="!showStatus ? 'active' : ''">Nicht Anzeigen</button>
    </div>
    <button @click="createnewMessage" v-if="id == ''">Nachricht Hinzufügen</button>
    <div v-else>
      <button @click="createnewMessage">Nachricht überarbeiten</button>
      <button @click="id = ''">Nachricht neu erstellen</button>
    </div>
    <button @click="resetSelection">Auswahl zurücksetzten</button>
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
      colorselection: "red",
      showStatus: true,
      created: "",
      id: "",
    };
  },
  methods: {
    async createnewMessage() {
      if (this.id === "") {
        const data = await api.post("Notification", {
          startDate: new Date(this.startDate),
          endDate: new Date(this.endDate),
          titel: this.titel,
          text: this.text,
          color: this.colorselection,
          isActive: this.showStatus,
        });
        console.log(data);
      } else {
        const data = await api.put("Notification", {
          id: this.id,
          startDate: new Date(this.startDate),
          endDate: new Date(this.endDate),
          titel: this.titel,
          text: this.text,
          color: this.colorselection,
          isActive: this.showStatus,
        });
        console.log(data);
      }
      this.$emit("newData");
    },
    resetSelection() {
      this.startDate = "";
      this.endDate = "";
      this.text = "";
      this.titel = "";
      this.colorselection = "red";
      this.showStatus = true;
      this.created = "";
      this.id = "";
    },
  },
  mounted() {
    const date = new Date();

    this.startDate = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
    this.endDate = `${date.getFullYear()}-${String(date.getMonth() + 2).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
  },
  watch: {
    setdata() {
      let startDate = new Date(this.setdata.startDate);
      let endDate = new Date(this.setdata.startDate);

      //yyyy-MM-dd
      this.startDate = `${startDate.getFullYear()}-${String(startDate.getMonth() + 1).padStart(2, "0")}-${String(startDate.getDate()).padStart(2, "0")}`;
      this.endDate = `${endDate.getFullYear()}-${String(endDate.getMonth() + 1).padStart(2, "0")}-${String(endDate.getDate()).padStart(2, "0")}`;
      this.text = this.setdata.text;
      this.titel = this.setdata.titel;
      this.colorselection = this.setdata.color;
      this.showStatus = this.setdata.isActive;
      this.id = this.setdata.id;
      this.created = this.setdata.created;
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
