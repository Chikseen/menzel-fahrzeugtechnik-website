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
            <div v-for="item in openTimes" :key="item.id" class="contactView_openTimes_content_data_opening">
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
import date from "@/date.js";
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
    },
    convertToTime(time) {
      return date.dateObjectToHHMM(time);
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
        width: 100%;

        &_opening {
          margin: 5px;
          min-width: 120px;

          &_wrapper {
            display: flex;
            justify-content: space-evenly;
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

@media only screen and (max-width: 870px) {
  .contactView {
    transition: all 0.3s;

    &_openTimes {
      overflow: hidden;
      margin-top: 6rem;

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
