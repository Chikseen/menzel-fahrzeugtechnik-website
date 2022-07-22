<template>
  <div class="serviceView_wrapper">
    <div class="pageTitel">
      <h1>Unsere</h1>
      <h1>Leistungen</h1>
    </div>
    <div class="serviceView_overview">
      <div class="serviceView_overview_container" @click="$router.push({ name: `tuev` })">
        <p>Hauptuntersuchung und Abgasuntersuchung</p>
        <TuevIcon :fontSize="'1.5'" />
      </div>
      <div class="serviceView_overview_container" @click="$router.push({ name: `ac` })">
        <p>Klimaservice</p>
        <ACIcon />
      </div>
      <div class="serviceView_overview_container" @click="$router.push({ name: `tiers` })">
        <p>Reifen und Räder</p>
        <WheelIcon />
      </div>
      <div class="serviceView_overview_container" @click="$router.push({ name: `repair` })">
        <p>Unfallreparaturen</p>
        <RepairService />
      </div>
    </div>
    <div v-if="this.$route.name == 'service'">
      <h3>Wir sind für Sie da</h3>
      <p>Klicken sie auf eine Leistung um mehr zu erfahren</p>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import TuevIcon from "@/assets/icons/TuevIcon.vue";
import WheelIcon from "@/assets/icons/WheelIcon2.vue";
import ACIcon from "@/assets/icons/ACIcon.vue";
import RepairService from "@/assets/icons/repairService/RepairServiceCluster.vue";

export default {
  components: {
    TuevIcon,
    WheelIcon,
    ACIcon,
    RepairService,
  },
  mounted() {},
};
</script>

<style lang="scss">
.serviceView {
  &_wrapper {
    max-width: 1500px;
    margin: 0 auto;
  }

  &_overview {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 10px;
    margin: 30px;

    &_container {
      cursor: pointer;
      height: 200px;
      width: 100%;
      border-radius: 5px;
      box-shadow: 1px 1px 7px 1px lighten($company_blue, 78);

      & div {
        height: 120px;
      }

      & p {
        position: relative;
        font-weight: 750;
      }
    }
  }
  &_detailed {
    &_text {
      text-align: left;
      max-width: 1000px;
      margin: auto;

      li {
        margin-top: 10px;
      }
    }
  }
}
</style>
