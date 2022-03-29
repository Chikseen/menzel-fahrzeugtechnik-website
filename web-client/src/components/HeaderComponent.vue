<template>
  <div class="">
    <div class="header">
      <WheelIcon class="header_icon" />
      <div class="header_quickConntact header_quickConntact_timeing" @mouseup="$router.push('/contact')">
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
        <p>Städtelner Straße 62</p>
        <p>04416 Markkleeberg</p>
      </div>
      <div class="header_nav_menu" @mouseup="menuOpen = !menuOpen">
        <p>MENU</p>
        <Transition name="profile-setting">
          <nav v-if="menuOpen" class="header_nav_smallWindow">
            <router-link class="header_nav_route" to="/home">Home</router-link>
            <router-link class="header_nav_route" to="/news">News</router-link>
            <router-link class="header_nav_route" to="/service">Leistungen</router-link>
            <router-link class="header_nav_route" to="/contact">Kontakt</router-link>
            <router-link class="header_nav_route" to="/about">About</router-link>
          </nav>
        </Transition>
      </div>
    </div>
    <router-view />
  </div>
</template>

<script>
import WheelIcon from "@/assets/icons/WheelIcon.vue";

import api from "../apiService";

export default {
  components: {
    WheelIcon,
  },
  data() {
    return {
      isOpen: "",
      nextOpen: "",
      menuOpen: false,
    };
  },
  methods: {
    async getData() {
      const data = await api.fetchData("openTimes/get", {});
      this.$store.commit("setOpenTime", data);
      this.isOpen = data.isOpen;
      this.nextOpen = data.nextOpen;
    },
  },
  mounted() {
    this.getData();
  },
};
</script>

<style lang="scss">
.profile-setting-enter-active,
.profile-setting-leave-active {
  transform: translateX(0);
}
.profile-setting-enter-from,
.profile-setting-leave-to {
  transform: translateX(100%);
}
/* _______ */

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

    &_menu {
      display: none;
    }
    &_smallWindow {
      display: none;
    }
  }

  &_quickConntact {
    cursor: pointer;
    max-width: 200px;
    color: rgb(185, 185, 185);
    transition: all 0.25s;

    p {
      margin: 2px;
    }

    &_timeing {
      padding-left: 100px;
    }
    margin: auto;
  }
  &_quickConntact:hover {
    color: rgb(230, 230, 230);
  }
}

@media only screen and (max-width: 1100px) {
  .header {
    &_quickConntact {
      display: none;
    }
  }
}

@media only screen and (max-width: 920px) {
  .header {
    margin-left: 0;
  }
}
@media only screen and (max-width: 810px) {
  .header {
    border-radius: 0 0 3rem 3rem;
    height: 3rem;
    transition: all 0.3s;
    
    &_icon {
      display: none;
    }

    &_nav {
      display: none;

      &_smallWindow {
        position: absolute;
        top: 0;
        right: 0;
        overflow-x: hidden;
        overflow-y: scroll;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        background-color: $company_blue;
        box-shadow: 1px 1px 5px 1px rgba(204, 203, 203, 0.151);
        border-radius: 10px;
        height: 300px;
      }

      &_menu {
        display: flex;
        color: aliceblue;
        width: 100%;
        justify-content: flex-end;
        text-align: center;
        margin: auto 0;
      }
    }
  }
}
</style>
