<template>
  <div class="opneingTimes_selction">
    <div>
      <h4>Titel</h4>
      <p>{{ item.days }}</p>
    </div>
    <div>
      <div class="opneingTimes_selction_header">
        <h4>geöffnet:</h4>
        <span :class="item.isOpen ? 'activeSpan' : 'inActiveSpan'"></span>
      </div>
      <div v-if="item.isOpen">
        <div class="opneingTimes_selction_header"></div>
        <div v-if="!item.showCutomText">
          <p>Öffnet: {{ toTime(item.open) }}</p>
          <p>Schliest: {{ toTime(item.close) }}</p>
        </div>
        <div v-else>
          <p>{{ item.customText }}</p>
        </div>
      </div>
    </div>
    <div>
      <div class="opneingTimes_selction_header">
        <h4>Zeitlich begrenzt:</h4>
        <span :class="item.isTimeLimited ? 'activeSpan' : 'inActiveSpan'"></span>
      </div>
      <div v-if="item.isTimeLimited" :style="`color: ${isTimeOutOfRange ? 'red' : ''}`">
        <p>Wird Angezeigt ab: {{ toDate(item.startDate) }}</p>
        <p>Wird Angezeigt bis: {{ toDate(item.endDate) }}</p>
      </div>
    </div>
    <div>
      <div class="opneingTimes_selction_header">
        <h4>erlaube Wochentage:</h4>
        <span :class="item.allowWeekdays ? '' : 'inActiveSpan'"></span>
      </div>
      <div v-if="item.allowWeekdays" class="OHcontainer_Weekdayselection">
        <span :class="item.weekdays.includes(0) ? 'activeSpan' : 'inActiveSpan'"><p>M</p></span>
        <span :class="item.weekdays.includes(1) ? 'activeSpan' : 'inActiveSpan'"><p>D</p></span>
        <span :class="item.weekdays.includes(2) ? 'activeSpan' : 'inActiveSpan'"><p>M</p></span>
        <span :class="item.weekdays.includes(3) ? 'activeSpan' : 'inActiveSpan'"><p>D</p></span>
        <span :class="item.weekdays.includes(4) ? 'activeSpan' : 'inActiveSpan'"><p>F</p></span>
        <span :class="item.weekdays.includes(5) ? 'activeSpan' : 'inActiveSpan'"><p>S</p></span>
        <span :class="item.weekdays.includes(6) ? 'activeSpan' : 'inActiveSpan'"><p>S</p></span>
      </div>
    </div>
    <div>
      <h4>Position</h4>
      <p>{{ item.orderposition }}</p>
    </div>
  </div>
</template>

<script>
import date from "@/date.js";

export default {
  props: {
    item: { type: Object },
  },
  computed: {
    isTimeOutOfRange() {
      const now = new Date();
      return !(new Date(this.item.startDate) <= now && new Date(this.item.endDate) >= now);
    },
  },
  methods: {
    toDate(dateT) {
      return date.dateObjectToDDMMYYYY(dateT);
    },
    toTime(dateT) {
      return date.dateObjectToHHMM(dateT);
    },
  },
};
</script>

<style>
.opneingTimes_selction_header {
  display: flex;
}
</style>
