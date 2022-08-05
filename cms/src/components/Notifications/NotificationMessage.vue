<template>
  <div>
    <div class="notificationText">
      <div class="notificationTextHeader">
        <h4>
          {{ message.titel }}
          <div
            class="notificationTextColorIndicator"
            :style="`background-color: ${message.color === 'red' ? '#fa3b3b' : message.color === 'green' ? '#43fa5b' : '#d1d1d1'};'`"
          ></div>
        </h4>
        <div :style="`color: ${isTimeOutOfRange ? 'red' : ''}`">
          <p>{{ toDate(message.startDate) }}</p>
          <p>{{ toDate(message.endDate) }}</p>
        </div>
      </div>
      <p>{{ message.text }}</p>
    </div>
    <button @mouseup="$emit('delete', message.id)">Entfernen</button>
  </div>
</template>

<script>
import date from "@/date.js";

export default {
  props: {
    message: { type: Object },
  },
  computed: {
    isTimeOutOfRange() {
      const now = new Date();
      return !(new Date(this.message.startDate) <= now && new Date(this.message.endDate) >= now);
    },
  },
  methods: {
    toDate(dateT) {
      return date.dateObjectToDDMMYYYY(dateT);
    },
  },
};
</script>

<style>
.notificationText {
  text-align: left;
}
.notificationText p {
  margin: 0;
}
.notificationText h4 {
  display: flex;
  margin: 0;
}
.notificationTextHeader {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
}
.notificationTextColorIndicator {
  background-color: red;
  border-radius: 5px;
  width: 15px;
  height: 15px;
  margin-left: 10px;
}
</style>
