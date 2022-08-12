<template>
  <div class="">
    <div class="header" @click="testclick">
      <WheelIcon class="header_icon" />
      <div class="header_quickConntact header_quickConntact_timeing" @mouseup="$router.push('/contact')">
        <p>{{ openingState.status }}</p>
        <p>{{ openingState.text }}</p>
        <p>{{ openingState.time }}</p>
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
      <div :class="['header_nav_menu', menuOpen ? 'header_nav_menu_extendet' : '']" @mouseup="menuOpen = !menuOpen">
        <div class="header_nav_menu_quickinfo">
          <div class="header_nav_menu_quickinfo_titel">
            <h1>Menzel</h1>
            <h1>Fahrzeugtechnik</h1>
          </div>
          <div class="header_nav_menu_quickinfo_openinghours">
            <p>{{ openingState.text }} {{ openingState.time }}</p>
          </div>
          <div class="header_nav_menu_quickinfo_currentRoute">
            <transition name="header-active-smallwindow" mode="out-in">
              <p v-if="$route.name === 'home'">Home</p>
              <p v-else-if="$route.name === 'service'">Service</p>
              <p v-else-if="$route.name === 'contact'">Kontakt</p>
              <p v-else-if="$route.name === 'galerie'">Galerie</p>
              <p v-else-if="$route.name === 'about'">Über mich</p>
              <p v-else-if="$route.name === 'impressum'">Impressum</p>
              <p v-else-if="$route.name === 'tuev'">TÜV</p>
              <p v-else-if="$route.name === 'tiers'">Reifen</p>
              <p v-else-if="$route.name === 'ac'">Klima</p>
              <p v-else-if="$route.name === 'repair'">Reperatur</p>
              <p v-else-if="$route.name === 'glasService'">Glasschäden</p>
            </transition>
          </div>
        </div>
        <MenuIcon class="header_nav_menu_icon" />
        <nav class="header_nav_smallWindow">
          <router-link class="header_nav_route" to="/home">
            <a>Home</a>
          </router-link>
          <router-link class="header_nav_route" to="/service">
            <a>Service</a>
          </router-link>
          <router-link class="header_nav_route" to="/contact">
            <a>Kontakt</a>
          </router-link>
          <router-link class="header_nav_route" to="/galerie">
            <a>Galerie</a>
          </router-link>
          <router-link class="header_nav_route" to="/about">
            <a>Über mich</a>
          </router-link>
          <router-link class="header_nav_route" to="/impressum">
            <a>Impressum</a>
          </router-link>
        </nav>
      </div>
    </div>
    <router-view />
  </div>
</template>

<script>
import WheelIcon from "@/assets/icons/WheelIcon.vue";
import MenuIcon from "@/assets/icons/MenuIcon.vue";
import date from "@/date.js";

import api from "../apiService";

export default {
  components: {
    WheelIcon,
    MenuIcon,
  },
  data() {
    return {
      menuOpen: false,
      weekdayOpen: [],
    };
  },
  computed: {
    isService() {
      return this.$router.currentRoute.value.matched.some((item) => item.path == "/service/");
    },
    openingState() {
      const now = new Date();
      const today = (now.getDay() + 6) % 7;
      const days = [...this.weekdayOpen];
      let state = {};
      const nowTime = date.dateObjectToHHMM(now);

      if (days[today] && !days[today].close >= nowTime) {
        const open = date.dateObjectToHHMM(days[today].open);
        const close = date.dateObjectToHHMM(days[today].close);

        if (open <= nowTime && close >= nowTime) {
          state.status = "Geöffnet";
          state.text = "schließt um";
          state.time = close;
        } else {
          state.status = "Geschlossen";
          state.text = "öffnet um";
          state.time = open;
        }
      } else {
        for (let i = today; i < today + 7; i++) {
          const nextOpenDay = i % 7;
          if (days[nextOpenDay]) {
            const open = date.dateObjectToHHMM(days[nextOpenDay].open);
            const close = date.dateObjectToHHMM(days[nextOpenDay].close);

            if (open <= nowTime && close >= nowTime) {
              state.status = "Geöffnet";
              state.text = "schließt um";
              state.time = close;
            } else {
              state.status = "Geschlossen";
              state.text = `öffnet am ${days[nextOpenDay].name} um`;
              state.time = open;
            }
            break;
          }
        }
      }
      return state;
    },
  },
  methods: {
    async getData() {
      const data = await api.get("Openinghours/Weekdays");
      this.$store.commit("setOpenTime", data);
      this.weekdayOpen = data;
    },
    async testclick(e) {},
  },
  mounted() {
    this.getData();
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
    font-size: 0.8rem;

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
  .header {
    position: fixed;
    width: 100%;
    background-color: #8f8f8f00;

    &_icon {
      display: none;
    }

    &_nav {
      display: none;

      &_smallWindow {
        position: absolute;
        bottom: 15px;
        left: 0;
        width: 100%;
        height: calc(100% - 5rem - 25px);
        padding: 0;
        margin: 5rem 0 0 40px;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        font-size: 0.9rem;
        text-align: left;
        background-color: $company_blue;
      }

      &_menu {
        position: relative;
        display: flex;
        color: aliceblue;
        width: 100%;
        justify-content: space-between;
        text-align: center;
        margin: 0 auto;
        padding: 0;
        background-color: $company-blue;
        border-radius: 0 0 15px 15px;
        height: 5rem;
        overflow: hidden;
        transition: all 0.5s ease;

        &_extendet {
          height: 23rem;
        }

        &_icon {
          max-height: 24px;
          width: 35px;
          margin: 15px 10px 0 0;
          transition: all 0.5s;
          z-index: 9;
        }

        &_quickinfo {
          display: flex;
          flex-direction: column;
          width: 100%;
          height: 5rem;
          padding: 0 0 0 25px;
          background-color: $company-blue;
          box-shadow: 0 0 5px 1px $company-blue;
          z-index: 5;

          &_titel {
            display: flex;

            h1 {
              position: relative;
              padding: 0 5px;
              font-size: 1.2rem;
              margin-bottom: 0;

              &:nth-child(1) {
                &::after {
                  content: "";
                  position: absolute;
                  top: calc(50% + 0.6rem);
                  right: 0;
                  margin-right: 5px;
                  height: 2px;
                  width: 100%;
                  background-color: white;
                }
              }

              &:nth-child(2) {
                &::after {
                  content: "";
                  position: absolute;
                  top: calc(50% - 0.7rem);
                  left: 0;
                  margin-left: 5px;
                  height: 2px;
                  width: 100%;
                  background-color: white;
                }
              }
            }
          }

          &_openinghours {
            p {
              text-align: right;
              margin: 10px 0 0 7px;
              font-size: 0.8rem;
            }
          }

          &_currentRoute {
            position: absolute;
            top: 27px;
            left: 30px;
            margin: 0;

            p {
              font-weight: bold;
            }
          }

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
    a {
      margin: 5px 0;
      padding: 5px 0;
      transition: all 0.5s;

      &.router-link-active {
        a {
          background-color: #d3d7df;
          color: $company_blue;
          padding: 15px;
          margin: 30px 0;
          border-radius: 5px;
        }
      }
    }
  }
}

.header-active-smallwindow {
  position: absolute;
}
.header-active-smallwindow-enter-from,
.header-active-smallwindow-leave-to {
  transform: translateX(0);
}

.header-active-smallwindow-enter-active,
.header-active-smallwindow-leave-active {
  transition: all 0.25s ease;
}

.header-active-smallwindow-enter-from,
.header-active-smallwindow-leave-to {
  transform: translateX(-150px);
}
.header-menu {
  position: absolute;
}

.header-menu-enter-from,
.header-menu-leave-to {
  transform: translateX(0);
}

.header-menu-enter-active,
.header-menu-leave-active {
  transition: all 1s ease;
}

.header-menu-enter-from,
.header-menu-leave-to {
  transform: translateX(105%);
}
</style>
