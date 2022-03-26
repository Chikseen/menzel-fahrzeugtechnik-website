<template>
  <div class="">
    <div class="header">
      <WheelIcon class="header_icon" />
      <nav class="header_nav">
        <router-link class="header_nav_route" to="/home">Home</router-link>
        <router-link class="header_nav_route" to="/news">News</router-link>
        <router-link class="header_nav_route" to="/service">Leistungen</router-link>
        <router-link class="header_nav_route" to="/contact">Kontakt</router-link>
        <router-link class="header_nav_route" to="/about">About</router-link>
      </nav>
    </div>
    <router-view />
  </div>
</template>

<script>
import WheelIcon from "@/assets/icons/WheelIcon.vue";

export default {
  components: {
    WheelIcon,
  },
};
</script>

<style lang="scss">
.header {
  position: sticky;
  top: 0;
  right: 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  background-color: $company_blue;
  box-shadow: 10px -1px 10px 2px $company_blue;
  border-radius: 3rem 0 0 3rem;
  margin-left: 10%;
  padding-right: 10%;
  height: 6rem;
  z-index: 11;

  &_icon {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    transition: 1s all ease-in-out;
  }
  &_icon:hover {
    transform: rotate(360deg);
  }

  &_nav {
    display: flex;
    flex-direction: row;
    justify-content: center;

    &_route {
      margin: 0 1rem;
      font-size: 1.5rem;
      color: $ligth_font_color;
    }
  }
}
</style>
