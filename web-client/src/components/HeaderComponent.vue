<template>
  <div class="">
    <div class="header" @click="testclick">
      <WheelIcon class="header_icon" />
      <div class="header_quickConntact header_quickConntact_timeing" @mouseup="$router.push('/contact')">
        <p>{{ isOpen }}</p>
        <p>{{ nextOpen }}</p>
      </div>
      <nav class="header_nav">
        <router-link class="header_nav_route" to="/home">
          <transition name="header-active">
            <div v-if="this.$route.name == 'home'" class="header_nav_route_active"></div>
          </transition>
          <a>Home</a>
        </router-link>
        <router-link class="header_nav_route" to="/service">
          <transition name="header-active">
            <div v-if="isService" class="header_nav_route_active"></div>
          </transition>
          <a>Service</a>
        </router-link>
        <router-link class="header_nav_route" to="/contact">
          <transition name="header-active">
            <div v-if="this.$route.name == 'contact'" class="header_nav_route_active"></div>
          </transition>
          <a>Kontakt</a>
        </router-link>
        <router-link class="header_nav_route" to="/galerie">
          <transition name="header-active">
            <div v-if="this.$route.name == 'galerie'" class="header_nav_route_active"></div>
          </transition>
          <a>Galerie</a>
        </router-link>
        <router-link class="header_nav_route" to="/about">
          <transition name="header-active">
            <div v-if="this.$route.name == 'about'" class="header_nav_route_active"></div>
          </transition>
          <a>Über mich</a>
        </router-link>
        <router-link class="header_nav_route" to="/impressum">
          <transition name="header-active">
            <div v-if="this.$route.name == 'impressum'" class="header_nav_route_active"></div>
          </transition>
          <a>Impressum</a>
        </router-link>
      </nav>
      <div class="header_quickConntact" @mouseup="$router.push('/contact')">
        <p>Städtelner Straße 62</p>
        <p>04416 Markkleeberg</p>
      </div>
      <div class="header_nav_menu" @mouseup="menuOpen = !menuOpen">
        <div class="header_nav_menu_quickinfo">
          <h4>Menzel-Fharzeugtechnik</h4>
          <h5>{{ isOpen }}</h5>
        </div>
        <ArrowIcon :class="['header_nav_menu_icon', menuOpen ? 'header_nav_menu_icon_open' : '']" />
        <Transition name="header-menu">
          <nav v-if="menuOpen" class="header_nav_smallWindow">
            <router-link class="header_nav_route" to="/home">
              <transition name="header-active">
                <div v-if="this.$route.name == 'home'" class="header_nav_route_active"></div>
              </transition>
              <a>Home</a>
            </router-link>
            <router-link class="header_nav_route" to="/service">
              <transition name="header-active">
                <div v-if="isService" class="header_nav_route_active"></div>
              </transition>
              <a>Service</a>
            </router-link>
            <router-link class="header_nav_route" to="/contact">
              <transition name="header-active">
                <div v-if="this.$route.name == 'contact'" class="header_nav_route_active"></div>
              </transition>
              <a>Kontakt</a>
            </router-link>
            <router-link class="header_nav_route" to="/galerie">
              <transition name="header-active">
                <div v-if="this.$route.name == 'galerie'" class="header_nav_route_active"></div>
              </transition>
              <a>Galerie</a>
            </router-link>
            <router-link class="header_nav_route" to="/about">
              <transition name="header-active">
                <div v-if="this.$route.name == 'about'" class="header_nav_route_active"></div>
              </transition>
              <a>Über mich</a>
            </router-link>
            <router-link class="header_nav_route" to="/impressum">
              <transition name="header-active">
                <div v-if="this.$route.name == 'impressum'" class="header_nav_route_active"></div>
              </transition>
              <a>Impressum</a>
            </router-link>
          </nav>
        </Transition>
      </div>
    </div>
    <router-view />
  </div>
</template>

<script>
import WheelIcon from "@/assets/icons/WheelIcon.vue";
import ArrowIcon from "@/assets/icons/ArrowIcon.vue";

import api from "../apiService";

export default {
  components: {
    WheelIcon,
    ArrowIcon,
  },
  data() {
    return {
      isOpen: "",
      nextOpen: "",
      menuOpen: false,
    };
  },
  computed: {
    isService() {
      return this.$router.currentRoute.value.matched.some((item) => item.path == "/service/");
    },
  },
  methods: {
    async getData() {
      const data = await api.get("openTimes/get", {});
      this.$store.commit("setOpenTime", data);
      this.isOpen = data.isOpen;
      this.nextOpen = data.nextOpen;
    },
    async testclick(e) {},
  },
  mounted() {
    this.getData();
    console.log("t", this.$route.name);
  },
};
</script>

<style lang="scss">
.header-active-enter-active,
.header-active-leave-active {
  transform: translateY(0) rotateZ(0deg);
}
.header-active-enter-from {
  transform: translateY(-110%) rotateZ(-10deg);
}
.header-active-leave-to {
  transform: translateY(110%) rotateZ(10deg);
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
  border-radius: 3rem 0 0 3rem;
  margin-left: 10%;
  padding-right: 10%;
  height: 6rem;
  z-index: 11;
  transition: all 1s;

  &_icon {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
  }

  &_nav {
    display: flex;
    flex-direction: row;
    justify-content: center;
    overflow: hidden;

    &_route {
      position: relative;
      padding: 30px 10px;
      font-size: 1.5rem;
      color: $ligth_font_color;
      text-decoration: none;

      &_active {
        position: absolute;
        top: 20px;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: white;
        border-radius: 10px;
        transition: all 1s;
        z-index: -1;

        ::after {
          content: "";
          position: absolute;

          background-color: aqua;
          top: 0;
          left: 0;
          height: 10px;
          width: 10px;
          z-index: 999;
          /*           border-top-left-radius: 25px;
          box-shadow: 0 -25px 0 0 #f66969; */
        }
      }
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

nav {
  padding: 0 30px;
  white-space: nowrap;

  a {
    a {
      font-weight: bold;
      color: #d3d7df;
      transition: all 1s;
    }

    &.router-link-active {
      a {
        color: $company_blue;
      }
    }
  }
}

@media only screen and (max-width: 1400px) {
  .header {
    margin-left: 0;
    padding-right: 0;
  }
}

@media only screen and (max-width: 1150px) {
  .header {
    &_quickConntact {
      display: none;
    }
  }
}

@media only screen and (max-width: 990px) {
  .header {
    margin-left: 0;
  }
}
@media only screen and (max-width: 870px) {
  .header-menu-enter-active,
  .header-menu-leave-active {
    transform: translateX(100%);
  }
  .header-menu-enter-from,
  .header-menu-leave-to {
    transform: translateX(0);
  }

  .header {
    border-radius: 0 0 3rem 3rem;
    height: 3rem;
    transition: all 0.3s;
    padding: 0;

    &_icon {
      display: none;
    }

    &_nav {
      display: none;

      &_smallWindow {
        position: absolute;
        top: 0;
        right: 0;
        width: 200px;
        padding: auto;
        margin: 0;
        overflow-x: hidden;
        overflow-y: scroll;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        background-color: $company_blue;
        box-shadow: 1px 1px 10px 1px $company_blue;
        border-radius: 10px;
        height: auto;
        
      }

      &_menu {
        display: flex;
        color: aliceblue;
        width: 100%;
        justify-content: space-between;
        text-align: center;
        margin: auto;
        padding: 0 25px;

        &_icon {
          max-height: 30px;
          width: 35px;
          margin: 7px 10px 0 0;
          transition: all 0.3s;
          z-index: 9;

          &_open {
            transform: rotateZ(180deg);
          }
        }

        &_quickinfo {
          display: flex;
          flex-direction: column;
          

          h4,
          h5 {
            margin: 1px;
            font-weight: 600;
          }
          h4 {
            margin-top: 6px;
          }
        }
      }

      &_route {
        position: relative;
        padding: 5px 5px;
        font-size: 1.2rem;
        color: $ligth_font_color;
        text-decoration: none;
        width: 120px;
      }
    }
  }
  nav {
    padding: 0 10px;
    white-space: nowrap;

    a {
      margin: 5px 0;
      a {
        font-weight: bold;
        color: #d3d7df;
        transition: all 1s;
      }

      &.router-link-active {
        a {
          color: #8f8f8f;
        }
      }
    }
  }
}
</style>
