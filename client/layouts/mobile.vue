<template>
  <div>
    <div :class="['header_nav_menu', menuOpen ? 'header_nav_menu_extendet' : '']" @mouseup="menuOpen = !menuOpen">
      <div class="header_nav_menu_quickinfo">
        <div class="header_nav_menu_quickinfo_titel">
          <h1>Menzel</h1>
          <h1>Fahrzeugtechnik</h1>
        </div>
        <HeaderOpeningHours class="header_nav_menu_quickinfo_openinghours" />
        <div class="header_nav_menu_quickinfo_currentRoute">
          <transition name="header-active-smallwindow" mode="out-in">
            <p v-if="$route.name === 'home'">Home</p>
            <p v-else-if="$route.name === 'service'">Service</p>
            <p v-else-if="$route.name === 'contact'">Kontakt</p>
            <p v-else-if="$route.name === 'news'">News</p>
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
        <NuxtLink class="header_nav_route" to="/home">
          <p>Home</p>
        </NuxtLink>
        <NuxtLink class="header_nav_route" to="/service">
          <p>Service</p>
        </NuxtLink>
        <NuxtLink class="header_nav_route" to="/contact">
          <p>Kontakt</p>
        </NuxtLink>
        <NuxtLink class="header_nav_route" to="/news">
          <p>News</p>
        </NuxtLink>
        <NuxtLink class="header_nav_route" to="/galerie">
          <p>Galerie</p>
        </NuxtLink>
        <NuxtLink class="header_nav_route" to="/about">
          <p>Über mich</p>
        </NuxtLink>
        <NuxtLink class="header_nav_route" to="/impressum">
          <p>Impressum</p>
        </NuxtLink>
      </nav>
    </div>


    <nuxt />
  </div>
</template>

<script>
import WheelIcon from '~/assets/icons/WheelIcon.vue'
import MenuIcon from '~/assets/icons/MenuIcon.vue'

import HeaderOpeningHours from "~/components/headerData/HeaderOpeningHours.vue"

export default {
  components: {
    WheelIcon,
    MenuIcon,
    HeaderOpeningHours
  },
  data() {
    return {
      menuOpen: false,
    }
  },
  computed: {
    isService() {
      return this.$nuxt.$route.path.match(/\/service/)?.length > 0
    },
  }
}
</script>

<style lang="scss" scoped>
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
        height: 25rem;
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
                content: '';
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
                content: '';
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
          display: flex;
          justify-content: flex-end;

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
  p {
    margin: 5px 0;
    padding: 5px 0;
    transition: all 0.5s;

    &.router-link-active {
      p {
        background-color: #d3d7df;
        color: $company_blue;
        padding: 15px;
        margin: 30px 0;
        border-radius: 5px;
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
