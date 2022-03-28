<template>
  <div>
    <h3>Öffnungszeiten</h3>
    <div v-if="data.weekdays">
      <div v-for="(day, i) in data.weekdays" :key="day.day" @mouseover="selected = i">
        <p>{{ day.day }}</p>
        <div v-if="day.isOpen">
          <div class="opneingTimes_selction">
            <p>Von: {{ day.timeStart.slice(1) }}</p>
            <div v-if="selected == i" class="opneingTimes_selction_newTime">
              <div>
                <h6>Stunde</h6>
                <input type="number" min="0" max="23" v-model="newStartHH" />
              </div>
              <p>:</p>
              <div>
                <h6>Minute</h6>
                <input type="number" min="0" max="59" v-model="newStartMM" />
              </div>
            </div>
          </div>
          <div class="opneingTimes_selction">
            <p>Bis: {{ day.timeEnd.slice(1) }}</p>
            <div v-if="selected == i" class="opneingTimes_selction_newTime">
              <div>
                <h6>Stunde</h6>
                <input type="number" min="0" max="23" v-model="newEndHH" />
              </div>
              <p>:</p>
              <div>
                <h6>Minute</h6>
                <input type="number" min="0" max="59" v-model="newEndMM" />
              </div>
            </div>
          </div>
        </div>
        <div v-else>
          <p>Geschlossen</p>
        </div>
        <div v-if="selected == i">
          <div>
            <button @click="(isOpen = true), sendNewData(i)" :class="day.isOpen ? 'isActive' : ''">Geöffnet</button>
            <button @click="(isOpen = false), sendNewData(i)" :class="!day.isOpen ? 'isActive' : ''">Geschlossen</button>
          </div>
          <button @click="sendNewData(i)">Bestätigen</button>
        </div>
        <hr />
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
      data: {},
      newStartHH: null,
      newStartMM: null,
      newEndHH: null,
      newEndMM: null,
      isOpen: null,
      isStart: true,
      selected: -1,
    };
  },
  methods: {
    async getData() {
      const data = await api.fetchData("openTimes/getAll", {
        key: localStorage.getItem("authKey"),
      });
      this.data = data;
    },
    async sendNewData(i) {
      console.log("elem", i);
      const data = await api.fetchData("openTimes/set", {
        toChange: i,
        newStartHH: String(this.newStartHH).padStart(2, "0"),
        newStartMM: String(this.newStartMM).padStart(2, "0"),
        newEndHH: String(this.newEndHH).padStart(2, "0"),
        newEndMM: String(this.newEndMM).padStart(2, "0"),
        isOpen: this.isOpen,
        isStart: this.isStart,
        key: localStorage.getItem("authKey"),
      });
      this.data = data;
      this.newHH = null;
      this.newMM = null;
      this.isOpen = null;
    },
  },
  mounted() {
    this.getData();
  },
  watch: {
    newStartHH() {
      if (this.newStartHH <= 0) this.newStartHH = 0;
      if (this.newStartHH >= 23) this.newStartHH = 23;
    },
    newStartMM() {
      if (this.newStartMM <= 0) this.newStartMM = 0;
      if (this.newStartMM >= 59) this.newStartMM = 59;
    },
    newEndHH() {
      if (this.newEndHH <= 0) this.newEndHH = 0;
      if (this.newEndHH >= 23) this.newEndHH = 23;
    },
    newEndMM() {
      if (this.newEndMM <= 0) this.newEndMM = 0;
      if (this.newEndMM >= 59) this.newEndMM = 59;
    },
  },
};
</script>

<style>
.isActive {
  background-color: rgb(218, 245, 178);
}
.opneingTimes_selction {
  display: flex;
  margin: 5px auto;
  justify-content: center;
}
.opneingTimes_selction_newTime {
  display: flex;
  margin: 0 5px;
}
</style>
