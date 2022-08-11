<template>
  <div>
    <h2>Öffnungszeiten</h2>
    <div class="OHMain">
      <div>
        <h4>Eintragsmanager</h4>
        <div class="newOHWrapper">
          <div class="OHcontainer">
            <div class="newOH">
              <label>Tage/Text</label>
              <input type="text" v-model="selectedEntry.days" />
            </div>
          </div>
          <div class="OHcontainer">
            <div class="newOH">
              <label>Ist Geöffnet</label>
              <span :class="selectedEntry.isOpen ? 'activeSpan' : 'inActiveSpan'" @click="selectedEntry.isOpen = !selectedEntry.isOpen"></span>
            </div>
          </div>
          <div class="OHcontainer">
            <div class="newOH">
              <label>{{ selectedEntry.showCutomText ? "Eigener Text" : "Von - Bis" }}</label>
              <span
                :class="selectedEntry.showCutomText ? 'activeSpan' : 'inActiveSpan'"
                @click="selectedEntry.showCutomText = !selectedEntry.showCutomText"
              ></span>
            </div>
            <div class="newOH" v-if="!selectedEntry.showCutomText">
              <label>Von</label>
              <input type="time" :value="open" @change="setTime($event, 'open')" />
            </div>
            <div class="newOH" v-if="!selectedEntry.showCutomText">
              <label>Bis</label>
              <input type="time" :value="close" @change="setTime($event, 'close')" />
            </div>
            <div class="newOH" v-if="selectedEntry.showCutomText">
              <label>Text</label>
              <input type="text" v-model="selectedEntry.customText" />
            </div>
          </div>
          <div class="OHcontainer">
            <div class="newOH">
              <label>Wochtags bestimmung Erlauben</label>
              <span
                :class="selectedEntry.allowWeekdays ? 'activeSpan' : 'inActiveSpan'"
                @click="selectedEntry.allowWeekdays = !selectedEntry.allowWeekdays"
              ></span>
            </div>
            <div v-if="selectedEntry.allowWeekdays" class="OHcontainer_Weekdayselection">
              <span :class="selectedEntry.weekdays.includes(0) ? 'activeSpan' : 'inActiveSpan'" @click="weekdayToggle(0)"><p>M</p></span>
              <span :class="selectedEntry.weekdays.includes(1) ? 'activeSpan' : 'inActiveSpan'" @click="weekdayToggle(1)"><p>D</p></span>
              <span :class="selectedEntry.weekdays.includes(2) ? 'activeSpan' : 'inActiveSpan'" @click="weekdayToggle(2)"><p>M</p></span>
              <span :class="selectedEntry.weekdays.includes(3) ? 'activeSpan' : 'inActiveSpan'" @click="weekdayToggle(3)"><p>D</p></span>
              <span :class="selectedEntry.weekdays.includes(4) ? 'activeSpan' : 'inActiveSpan'" @click="weekdayToggle(4)"><p>F</p></span>
              <span :class="selectedEntry.weekdays.includes(5) ? 'activeSpan' : 'inActiveSpan'" @click="weekdayToggle(5)"><p>S</p></span>
              <span :class="selectedEntry.weekdays.includes(6) ? 'activeSpan' : 'inActiveSpan'" @click="weekdayToggle(6)"><p>S</p></span>
            </div>
          </div>
          <div class="OHcontainer">
            <div class="newOH">
              <label>Zeitlich begränzt anzeigen</label>
              <span
                :class="selectedEntry.isTimeLimited ? 'activeSpan' : 'inActiveSpan'"
                @click="selectedEntry.isTimeLimited = !selectedEntry.isTimeLimited"
              ></span>
            </div>
            <div class="newOH" v-if="selectedEntry.isTimeLimited">
              <label>Start Date</label>
              <input type="date" :value="startDate" @change="setDate($event, 'startDate')" />
            </div>
            <div class="newOH" v-if="selectedEntry.isTimeLimited">
              <label>End Date</label>
              <input type="date" :value="endDate" @change="setDate($event, 'endDate')" />
            </div>
          </div>
          <div class="OHcontainer">
            <div class="newOH">
              <label>Position</label>
              <input type="text" v-model="selectedEntry.orderposition" />
            </div>
          </div>
        </div>
        <button @click="selectedEntry = { ...defaultEntry }">Auswahl Zurücksetzten</button>
        <div>
          <button @click="saveEntry" v-if="selectedEntry.id">Eintrag Überarbeiten</button>
          <button @click="deleteEntry" v-if="selectedEntry.id">Eintrag entfernen</button>
          <button @click="saveEntry" v-if="!selectedEntry.id">Eintrag Erstellen</button>
        </div>
      </div>
      <div class="existingOH">
        <div class="OHReadWeekdaysWrapper">
          <div class="OHReadWeekdaysState">
            <p>{{ openingState.status }}</p>
            <p>{{ openingState.text }}</p>
            <p>{{ openingState.time }}</p>
          </div>
          <div v-for="(item, index) in weekdayOpen" :key="index">
            <div v-if="item != null">
              <p>{{ item.name }}</p>
              <p>{{ toTime(item.open) }}</p>
              <p>{{ toTime(item.close) }}</p>
            </div>
          </div>
        </div>
        <h2>Alle Einträge</h2>
        <div v-for="item in oh" :key="item.id" @click="selectedEntry = item">
          <ShowCurrentOpeninghours :item="item" />
        </div>
      </div>
    </div>
    <SFC v-if="apiResponse" :res="apiResponse" @remove="apiResponse = null" />
  </div>
</template>

<script>
import api from "@/apiService";
import date from "@/date.js";
import ShowCurrentOpeninghours from "@/components/Openinghours/ShowCurrentOpeninghours";
import SFC from "@/components/SimpleFeedbackComponent.vue";

export default {
  name: "OpeningTimes",
  components: {
    ShowCurrentOpeninghours,
    SFC,
  },
  props: {},
  data() {
    return {
      oh: [],
      selectedEntry: {},
      defaultEntry: {
        days: "Von-Bis",
        isOpen: true,
        open: new Date(),
        close: new Date(),
        showCutomText: false,
        customText: "Wird angezeigt wenn ausgewählt",
        isTimeLimited: false,
        startDate: new Date(),
        endDate: new Date(),
        orderposition: -1,
        allowWeekdays: false,
        weekdays: [],
      },
      weekdayOpen: [],
      apiResponse: null,
    };
  },
  computed: {
    open() {
      const date = new Date(this.selectedEntry.open);
      return `${String(date.getHours()).padStart(2, "0")}:${String(date.getMinutes()).padStart(2, "0")}`;
    },
    close() {
      const date = new Date(this.selectedEntry.close);
      return `${String(date.getHours()).padStart(2, "0")}:${String(date.getMinutes()).padStart(2, "0")}`;
    },
    startDate() {
      const date = new Date(this.selectedEntry.startDate);
      return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
    },
    endDate() {
      const date = new Date(this.selectedEntry.endDate);
      return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
    },
    openingState() {
      const now = new Date();
      const today = (now.getDay() + 6) % 7;
      const days = [...this.weekdayOpen];
      let state = {};
      const nowTime = this.toTime(now);

      if (days[today] && !days[today].close >= nowTime) {
        const open = this.toTime(days[today].open);
        const close = this.toTime(days[today].close);

        if (open <= nowTime && close >= nowTime) {
          state.status = "Geöffnet";
          state.text = "schließt um";
          state.time = close;
        } else {
          state.status = "Geschlossen";
          state.text = "öffnet um";
          state.time = open;
        }
      } else {
        for (let i = today; i < today + 7; i++) {
          const nextOpenDay = i % 7;
          if (days[nextOpenDay]) {
            const open = this.toTime(days[nextOpenDay].open);
            const close = this.toTime(days[nextOpenDay].close);

            if (open <= nowTime && close >= nowTime) {
              state.status = "Geöffnet";
              state.text = "schließt um";
              state.time = close;
            } else {
              state.status = "Geschlossen";
              state.text = `öffnet am ${days[nextOpenDay].name} um`;
              state.time = open;
            }
            break;
          }
        }
      }
      return state;
    },
  },
  methods: {
    setTime(e, key) {
      const date = new Date(
        null,
        null,
        null,
        String(e.target.value.match(/[0-9]*:/)[0].replace(/:/, "")).padStart(2, "0"),
        String(e.target.value.match(/:[0-9]*/)[0].replace(/:/, "")).padStart(2, "0")
      );
      console.log("time", date);
      this.selectedEntry[key] = date;
    },
    setDate(e, key) {
      const date = new Date(e.target.value);
      this.selectedEntry[key] = date;
    },
    weekdayToggle(day) {
      if (this.selectedEntry.weekdays.includes(day)) this.selectedEntry.weekdays.splice(this.selectedEntry.weekdays.indexOf(day), 1);
      else this.selectedEntry.weekdays.push(day);
    },
    toDate(dateT) {
      return date.dateObjectToDDMMYYYY(dateT);
    },
    toTime(dateT) {
      return date.dateObjectToHHMM(dateT);
    },
    isTimeOutOfRange(start, end) {
      const now = new Date();
      const startDate = new Date(start);
      const endDate = new Date(end);
      return !(new Date(startDate) <= now && new Date(endDate) >= now);
    },
    async getData() {
      this.oh = [];
      const oh = await api.get("Openinghours/All");
      this.oh = oh;
    },
    async getWeekdayOpen() {
      this.weekdayOpen = await api.get("Openinghours/Weekdays");
    },
    async saveEntry() {
      let data;
      if (this.selectedEntry.id) data = await api.put("Openinghours", this.selectedEntry);
      else data = await api.post("Openinghours", this.selectedEntry);
      this.apiResponse = data;
      this.getData();
      this.getWeekdayOpen();
    },
    async deleteEntry() {
      const data = await api.delete("Openinghours", { id: this.selectedEntry.id });
      this.apiResponse = data;
      this.getData();
      this.selectedEntry = { ...this.defaultEntry };
      this.getWeekdayOpen();
    },
  },
  watch: {
    apiResponse() {
      setTimeout(() => {
        this.apiResponse = null;
      }, 5000);
    },
  },
  mounted() {
    this.getWeekdayOpen();
    this.getData();
    this.selectedEntry = { ...this.defaultEntry };
  },
};
</script>

<style>
.opneingTimes_selction {
  display: flex;

  gap: 25px;
  margin: 15px auto;
  padding: 15px;
  max-width: 1000px;
  justify-content: center;
  box-shadow: 0 0 10px 1px #1b1b1b36;
  border-radius: 10px;
}
.opneingTimes_selction > div {
  flex: 1 1 20%;
}
.opneingTimes_selction_newTime {
  display: flex;
  margin: 0 5px;
}
.opneingTimes_selction h4 {
  margin: 5px;
}
.OHMain {
  display: flex;
  flex-direction: row;
  gap: 25px;
  padding: 25px;
  height: 750px;
  margin: 0 auto;
  max-width: 1250px;
}
.OHcontainer {
  box-shadow: 0 0 10px 1px #1b1b1b18;
  border-radius: 10px;
  padding: 5px 15px;
  margin: 10px 0;
}
.newOHWrapper {
  display: flex;
  flex-direction: column;
  max-width: 300px;
  margin: auto;
}
.newOH {
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  margin: 15px auto;
  align-items: center;
  gap: 10px;
}
.OHcontainer_Weekdayselection {
  display: flex;
  justify-content: space-evenly;
}
.existingOH {
  height: 100%;
  overflow-y: scroll;
  padding: 10px;
  padding-left: 25px;
  border-left: 1px grey solid;
}
.OHReadWeekdaysWrapper {
  display: flex;
  justify-content: space-between;
}
.OHReadWeekdaysState {
  display: flex;
  flex-direction: column;
  border-right: 1px solid gray;
  padding-right: 25px;
}
.activeSpan {
  background-color: green;
}
.inActiveSpan {
  background-color: red;
}
.activeSpan,
.inActiveSpan {
  width: 24px;
  height: 24px;
  text-align: center;
  border-radius: 5px;
}
.activeSpan p,
.inActiveSpan p {
  margin: 4px 0 0 0;
  font-weight: 600;
}
</style>
