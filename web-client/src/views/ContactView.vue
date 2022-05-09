<template>
  <div>
    <h1>Kontakt</h1>
    <div class="contactView_openTimes">
      <h2>Öffnungszeiten</h2>
      <div class="contactView_openTimes_content">
        <div class="contactView_openTimes_content_data">
          <div class="contactView_openTimes_content_data_opening_wrapper" v-if="openTimes[0]">
            <div class="contactView_openTimes_content_data_opening">
              <p>{{ openTimes[0][0].day }} - {{ openTimes[0][openTimes[0].length - 1].day }}</p>
              <div class="contactView_openTimes_content_data_opening_dates">
                <p>{{ openTimes[0][0].timeStart.slice(1, 6) }}</p>
                <p>{{ openTimes[0][0].timeEnd.slice(1, 6) }}</p>
              </div>
            </div>
            <div v-for="(day, index) in openTimes[1]" :key="index" class="contactView_openTimes_content_data_opening">
              <p>{{ day.day }}</p>
              <div v-if="day.day != 'Samstag'" class="contactView_openTimes_content_data_opening_dates">
                <p>{{ day.timeStart.slice(1, 6) }}</p>
                <p>{{ day.timeEnd.slice(1, 6) }}</p>
              </div>
              <!-- For now hardcoded, Change later -->
              <p v-if="day.day == 'Samstag'">nach Vereinbarung</p>
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
      const data = await api.fetchData("openTimes/getAll", {});

      let allOpenDays = [];
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
      this.openTimes.push(diffrent);
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

        &_opening {
          margin: 5px;

          &_wrapper {
            display: flex;
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
      &_content {
        flex-direction: column;
        width: 100%;

        &_data {
          width: 100%;

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
