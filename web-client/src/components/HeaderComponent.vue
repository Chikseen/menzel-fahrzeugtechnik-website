<template>
  <div class="">
    <div class="header">
      <WheelIcon class="header_icon" />
      <div class="header_quickConntact" @mouseup="$router.push('/contact')">
        <p>{{ isOpen }}</p>
        <p>{{ nextOpen }}</p>
      </div>
      <nav class="header_nav">
        <router-link class="header_nav_route" to="/home">Home</router-link>
        <router-link class="header_nav_route" to="/news">News</router-link>
        <router-link class="header_nav_route" to="/service">Leistungen</router-link>
        <router-link class="header_nav_route" to="/contact">Kontakt</router-link>
        <router-link class="header_nav_route" to="/about">About</router-link>
      </nav>
      <div class="header_quickConntact" @mouseup="$router.push('/contact')">
        <p>Adress?</p>
      </div>
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
  data() {
    return {
      nextOpen: "",
      isOpen: "h",
    };
  },
  mounted() {
    const date = new Date();
    date.getDay();

    if (date.getDay() == 0 || date.getDay() == 6) {
     this.nextOpen = "Öffnet Montag 8:00";
      this.isOpen = "Geschlossen";
    } else {
      //Opening
      const dateStart = new Date(`${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}T08:00:00`);

      //Closing
      const dateEnd = new Date(`${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}T16:00:00`);

      if (date > dateStart && date < dateEnd) {
        this.nextOpen = "Schließt 16:00";
        this.isOpen = "Geöffnet";
      } else {
        this.nextOpen = "Öffnet 8:00";
        this.isOpen = "Geschlossen";
      }
    }
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

  &_quickConntact {
    cursor: pointer;
  }
}
</style>
