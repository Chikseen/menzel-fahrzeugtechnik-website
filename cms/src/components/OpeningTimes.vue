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
              <label>isOpen</label>
              <div :class="selectedEntry.isOpen ? 'activeSpan' : 'inActiveSpan'" @click="selectedEntry.isOpen = !selectedEntry.isOpen"></div>
            </div>
          </div>
          <div class="OHcontainer">
            <div class="newOH">
              <label>{{ selectedEntry.showCutomText ? "Eigener Text" : "Von - Bis" }}</label>
              <div
                :class="selectedEntry.showCutomText ? 'activeSpan' : 'inActiveSpan'"
                @click="selectedEntry.showCutomText = !selectedEntry.showCutomText"
              ></div>
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
              <label>Zeitlich begränzt</label>
              <div
                :class="selectedEntry.isTimeLimited ? 'activeSpan' : 'inActiveSpan'"
                @click="selectedEntry.isTimeLimited = !selectedEntry.isTimeLimited"
              ></div>
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
        <button @click="selectedEntry = defaultEntry">Auswahl Zurücksetzten</button>
        <div>
          <button @click="saveEntry" v-if="selectedEntry.id">Eintrag Überarbeiten</button>
          <button @click="deleteEntry" v-if="selectedEntry.id">Eintrag entfernen</button>
          <button @click="saveEntry" v-if="!selectedEntry.id">Eintrag Erstellen</button>
        </div>
      </div>
      <div class="existingOH">
        <h2>Alle Einträge</h2>
        <div class="opneingTimes_selction" v-for="item in oh" :key="item.id" @click="selectedEntry = item">
          <div>
            <h4>Titel</h4>
            <p>{{ item.days }}</p>
          </div>
          <div>
            <h4>Geöffnet: {{ item.isOpen ? "Ja" : "Nein" }}</h4>
            <div v-if="item.isOpen">
              <h5>Zeige Text oder Zeit: {{ item.showCustomText ? "Text" : "Zeit" }}</h5>
              <div v-if="!item.showCutomText">
                <p>Öffnet: {{ item.open }}</p>
                <p>Schliest: {{ item.close }}</p>
              </div>
              <div v-else>
                <p>{{ item.customText }}</p>
              </div>
            </div>
          </div>
          <div>
            <h4>Zeitlich begränzt: {{ item.isTimeLimited ? "Ja" : "Nein" }}</h4>
            <div v-if="item.isTimeLimited">
              <p><bold>Wird Angezeigt ab: </bold>{{ item.startDate }}</p>
              <p><bold>Wird Angezeigt bis: </bold>{{ item.endDate }}</p>
            </div>
          </div>
          <div>
            <h4>Position</h4>
            <p>{{ item.orderposition }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import api from "@/apiService";

export default {
  name: "OpeningTimes",
  components: {},
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
        isTimeLimited: true,
        startDate: new Date(),
        endDate: new Date(),
        orderposition: -1,
      },
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
      return `${date.getFullYear()}-${String(date.getMonth()).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
    },
    endDate() {
      const date = new Date(this.selectedEntry.endDate);
      return `${date.getFullYear()}-${String(date.getMonth() + 2).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
    },
  },
  methods: {
    setTime(e, key) {
      console.log(e.target.value);
      console.log(e.target.value.match(/[0-9]*:/)[0].replace(/:/, ""), e.target.value.match(/:[0-9]*/)[0]);
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
      console.log(e.target.value);
      const date = new Date(e.target.value);
      console.log("time", date);
      this.selectedEntry[key] = date;
    },
    async getData() {
      this.oh = [];
      const oh = await api.get("Openinghours/All");
      this.oh = oh;
      //Multi User debuging
      /*       let counter = 1;
      while (counter > 0) {
        await this.getData();
      } */
    },
    async saveEntry() {
      if (this.selectedEntry.id) await api.put("Openinghours", this.selectedEntry);
      else await api.post("Openinghours", this.selectedEntry);
      this.getData();
    },
    async deleteEntry() {
      await api.delete("Openinghours", { id: this.selectedEntry.id });
      this.getData();
      this.selectedEntry = this.defaultEntry;
    },
  },
  mounted() {
    this.getData();
    this.selectedEntry = this.defaultEntry;
  },
};
</script>

<style>
.isActive {
  background-color: rgb(218, 245, 178);
}
.opneingTimes_selction {
  display: flex;
  gap: 25px;
  margin: 15px auto;
  padding: 0 15px;
  max-width: 1000px;
  justify-content: center;
  box-shadow: 0 0 10px 1px #1b1b1b36;
  border-radius: 10px;
}
.opneingTimes_selction_newTime {
  display: flex;
  margin: 0 5px;
}
.OHMain {
  display: flex;
  flex-direction: row;
  gap: 25px;
  padding: 25px;
  height: 750px;
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
.existingOH {
  height: 100%;
  overflow-y: scroll;
  padding: 10px;
}
.activeSpan {
  background-color: green;
  width: 24px;
  height: 24px;
}
.inActiveSpan {
  background-color: red;
  width: 24px;
  height: 24px;
}
</style>
