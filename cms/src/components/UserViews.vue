<template>
  <table class="viewsTable">
    <div class="viewsTable_quickview">
      <table>
        <tr>
          <td>Seitenaufrufe insgesamt:</td>
          <td>{{ sum }}</td>
          <td><h6>Es werden alle Aufrufe zusammengefasst und durch 4 geteilt da bei jedem Aufruf in 4 Feldern ein Eintrag gemacht werden muss</h6></td>
        </tr>
        <tr>
          <td>Seitenaufrufe ohne CMS:</td>
          <td>{{ sumWithoutCMS }}</td>
          <td><h6>Das CMS (Diese Anwendung) erzeugt ebenfalls anfragen die hier nicht betrachtet wurden</h6></td>
        </tr>
      </table>
    </div>
    <div class="viewsTable_header">
      <button @click="getData">Laden</button>
      <div>
        <label for="">Von</label>
        <input type="date" v-model="startDate" />
      </div>
      <div>
        <label for="">Bis</label>
        <input type="date" v-model="endDate" />
      </div>
    </div>
    <tr>
      <th v-for="header in tableHeaderToShow" :key="header + 'h'">{{ header }}</th>
    </tr>
    <tr v-for="tableRow in tableBodyToShow" :key="tableRow + 'tr'">
      <td v-for="item in tableRow" :key="item + 'i'">{{ item }}</td>
    </tr>
  </table>
</template>

<script>
import api from "@/apiService";
import date from "@/date.js";

export default {
  data() {
    return {
      views: {},
      startDate: "",
      endDate: "",
    };
  },
  computed: {
    sum() {
      if (this.views && this.views.data && this.views.data.length > 0) {
        let sum = 0;
        const data = JSON.parse(JSON.stringify(this.views.data));
        data.map((item) => item.splice(0, 4));
        data.forEach((subdata) => {
          subdata.forEach((item) => {
            sum += item * 1;
          });
        });
        return Math.round(sum / 4);
      } else return null;
    },
    sumWithoutCMS() {
      if (this.views && this.views.data && this.views.data.length > 0) {
        let sum = 0;
        const data = JSON.parse(JSON.stringify(this.views.data));

        const indexOfElectron = this.views.header?.indexOf("electron");

        data.forEach((item) => {
          sum += item[indexOfElectron] * 1;
        });
        return this.sum - sum;
      } else return null;
    },
    tableBodyToShow() {
      if (this.views && this.views.data && this.views.data.length > 0) {
        let data = JSON.parse(JSON.stringify(this.views.data)).map((item) => item.slice(4, item.length));
        let wodate = data.map((item, i) => {
          item.unshift(`${this.views.data[i][3]}.${this.views.data[i][2]}.${this.views.data[i][1]}`);
          return item;
        });
        return wodate;
      } else return null;
    },
    tableHeaderToShow() {
      if (this.views && this.views.header && this.views.header.length > 0) {
        let data = JSON.parse(JSON.stringify(this.views.header));
        let wodate = data.slice(4, data.length);
        wodate.unshift("date");
        return wodate;
      } else return null;
    },
  },
  methods: {
    async getData() {
      const data = await api.get(
        `User/Count/${this.startDate === "" ? "-1" : this.startDate.replaceAll("/", "-")}/${this.endDate === "" ? "-1" : this.endDate.replaceAll("/", "-")}`
      );
      this.views = data;
    },
  },
  mounted() {
    this.startDate = date.dateObjectToInputDatemmddyyyy(new Date());
    this.endDate = date.dateObjectToInputDatemmddyyyy(new Date());
    this.getData();
  },
};
</script>

<style>
.viewsTable {
  position: relative;
  margin: 0 auto;
}
.viewsTable td {
  padding: 15px;
  border: 1px solid gray;
  min-width: 75px;
}
.viewsTable th {
  position: sticky;
  top: 0;
  background-color: white;
}
.viewsTable_header {
  display: flex;
  gap: 10px;
  margin: 15px 0;
}
.viewsTable_header > div,
.viewsTable_header > button {
  min-width: 150px;
}
.viewsTable_quickview {
  margin: 15px 0;
}
</style>
