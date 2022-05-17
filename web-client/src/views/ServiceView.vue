<template>
  <div class="serviceView_wrapper">
    <h1>Unsere Leistungen</h1>
    <div class="serviceView_overview">
      <div class="serviceView_overview_container" @click="$router.push({ name: `tuev` })">
        <p>TÜV Prüfstützpunkt und Abgasuntersuchung</p>
        <TuevIcon :fontSize="'1.5'" />
      </div>
      <div class="serviceView_overview_container" @click="$router.push({ name: `ac` })">
        <p>Klimaservice</p>
      </div>
      <div class="serviceView_overview_container" @click="$router.push({ name: `tiers` })">
        <p>Reifen und Räder</p>
      </div>
    </div>
    <div v-if="this.$route.name == 'service'">
      <p>Wir sind für sie da</p>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import TuevIcon from "@/assets/icons/TuevIcon.vue";

export default {
  components: {
    TuevIcon,
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
      height: 200px;
      width: 100%;
      border-radius: 5px;
      box-shadow: 1px 1px 5px 1px lighten($company_blue, 81);

      & div {
        height: 120px;
      }

      & p {
        font-weight: 750;
      }
    }
  }
}
</style>
