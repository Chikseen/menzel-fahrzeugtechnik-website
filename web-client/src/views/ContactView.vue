<template>
  <div>
    <div class="pageTitel pageTitel_noSpace">
      <h1>Kon</h1>
      <h1>takt</h1>
    </div>
    <div class="contactView_openTimes">
      <h2>Öffnungszeiten</h2>
      <div class="contactView_openTimes_content">
        <div class="contactView_openTimes_content_data">
          <div class="contactView_openTimes_content_data_opening_wrapper" v-if="openTimes[0]">
            <div v-for="item in openTimes" :key="item.id">
              <!-- {{ item }} -->
              <p v-if="!item.showCutomText">{{ item.days }}</p>
              <p v-if="!item.showCutomText">{{ convertToTime(item.open) }} - {{ convertToTime(item.close) }}</p>
              <p v-else="item.showCutomText">{{ item.customText }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <MapComponent />
    <div class="contactView_openTimes">
      <h2>Anschrift</h2>
      <div class="contactView_openTimes_content contactView_openTimes_content_adress">
        <p>Dirk Menzel</p>
        <p>Städtelner Straße 62</p>
        <p>04416 Markkleeberg</p>
        <p>E-Mail: <a href="mailto:menzel-fahrzeugtechnik@t-online.de">menzel-fahrzeugtechnik@t-online.de</a></p>
        <p>Telefon: <a href="tel:+034135424333">0341 35424333</a></p>
        <p>Mobil: <a href="tel:+497725199">0160 7725199</a></p>
      </div>
    </div>
  </div>
</template>

<script>
import api from "@/apiService";
import MapComponent from "@/components/MapComponent";

export default {
  components: {
    MapComponent,
  },
  data() {
    return {
      openTimes: [],
    };
  },
  methods: {
    async getTimes() {
      const data = await api.get("Openinghours");
      this.openTimes = data;
      //Multi User debuging
      /* let counter = 1;
      while (counter > 0) {
        await this.getTimes();
      } */

      /*       let allOpenDays = [];
      data.weekdays.forEach((day) => {
        if (day.isOpen) allOpenDays.push(day);
      });

      let squshed = [];
      let diffrent = [];
      this.openTimes = [];

      if (allOpenDays.length > 1) {
        for (let i = 1; i < allOpenDays.length; i++) {
          if (allOpenDays[i].timeStart == allOpenDays[i - 1].timeStart && allOpenDays[i].timeEnd == allOpenDays[i - 1].timeEnd) {
            if (i == 1) {
              squshed.push(allOpenDays[i - 1]);
            }
            squshed.push(allOpenDays[i]);
          } else {
            diffrent.push(allOpenDays[i]);
          }
        }
      }
      this.openTimes.push(squshed);
      this.openTimes.push(diffrent); */
    },
    convertToTime(time) {
      const date = new Date(time);
      return `${String(date.getHours()).padStart(2, "0")}:${String(date.getMinutes()).padStart(2, "0")}`;
    },
  },
  mounted() {
    this.getTimes();
  },
};
</script>
<style lang="scss">
.contactView {
  &_openTimes {
    display: flex;
    flex-direction: column;

    &_content {
      margin: auto;
      display: flex;
      justify-content: center;
      border: 1px solid rgba(224, 224, 224, 0.507);
      box-shadow: 1px 1px 5px 1px rgba(204, 203, 203, 0.151);
      border-radius: 10px;
      width: 550px;

      &_data {
        margin: 10px;
        flex-direction: column;
        display: flex;
        width: 150px;

        &_opening {
          margin: 5px;

          &_wrapper {
            display: flex;
            width: calc(100% - 20px);
          }

          &_dates {
            p {
              margin: 0;
            }
          }
        }
      }

      &_adress {
        flex-direction: column;
      }
    }
  }
}

@media only screen and (max-width: 550px) {
  .contactView {
    transition: all 0.3s;

    &_openTimes {
      overflow: hidden;

      &_content {
        flex-direction: column;
        width: 100%;

        &_data {
          width: 100%;
          margin: 0;
          &_opening > div {
            margin: 5px;
            display: flex;
            flex-direction: row;
            justify-content: space-around;
            margin: 15px;
            width: 90%;
          }

          &_opening {
            &_wrapper {
              display: flex;
              flex-direction: column;
            }
          }
        }
      }
    }
  }
}
</style>
