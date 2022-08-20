<template>
  <div>
    <div :class="['headerMobile_nav_menu', menuOpen ? 'headerMobile_nav_menu_extendet' : '']"
      @mouseup="menuOpen = !menuOpen">
      <div class="headerMobile_nav_menu_quickinfo">
        <div class="headerMobile_nav_menu_quickinfo_titel">
          <span>Menzel</span>
          <span>Fahrzeugtechnik</span>
        </div>
        <HeaderOpeningHours class="headerMobile_nav_menu_quickinfo_openinghours" />
        <div class="headerMobile_nav_menu_quickinfo_currentRoute">
          <transition name="fade">
            <p v-if="$route.path === '/home'">Home</p>
            <p v-else-if="$route.path === '/service'">Service</p>
            <p v-else-if="$route.path === '/contact'">Kontakt</p>
            <p v-else-if="$route.path === '/news'">News</p>
            <p v-else-if="$route.path === '/galerie'">Galerie</p>
            <p v-else-if="$route.path === '/about'">Über mich</p>
            <p v-else-if="$route.path === '/impressum'">Impressum</p>
            <p v-else-if="$route.path === '/service/tuev'">TÜV</p>
            <p v-else-if="$route.path === '/service/tiers'">Reifen</p>
            <p v-else-if="$route.path === '/service/ac'">Klima</p>
            <p v-else-if="$route.path === '/service/repair'">Reperatur</p>
            <p v-else-if="$route.path === '/service/glasservice'">Glasschäden</p>
          </transition>
        </div>
      </div>
      <MenuIcon class="headerMobile_nav_menu_icon" />
      <nav class="headerMobile_nav_smallWindow">
        <NuxtLink class="headerMobile_nav_route" to="/home">
          <p>Home</p>
        </NuxtLink>
        <NuxtLink class="headerMobile_nav_route" to="/service">
          <p>Service</p>
        </NuxtLink>
        <NuxtLink class="headerMobile_nav_route" to="/contact">
          <p>Kontakt</p>
        </NuxtLink>
        <NuxtLink class="headerMobile_nav_route" to="/news">
          <p>News</p>
        </NuxtLink>
        <NuxtLink class="headerMobile_nav_route" to="/galerie">
          <p>Galerie</p>
        </NuxtLink>
        <NuxtLink class="headerMobile_nav_route" to="/about">
          <p>Über mich</p>
        </NuxtLink>
        <NuxtLink class="headerMobile_nav_route" to="/impressum">
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
.nuxt-link-active {
  p {
    background-color: #d3d7df;
    color: $company_blue;
    padding: 15px;
    margin: 0;
    border-radius: 5px;
  }
}
</style>

<style lang="scss">
.headerMobile {
  width: 100%;
  background-color: #8f8f8f00;

  &_nav {

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
      overflow: hidden;

      p {
        margin: 5px 0;
        padding: 5px 0;
        transition: all 0.5s;
      }
    }

    &_menu {
      position: fixed;
      top: 0;
      left: 0;
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
      z-index: 10;
      transition: all 0.5s ease;

      &_extendet {
        height: 26rem;
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
        width: calc(100% - 40px);
        height: 5rem;
        padding: 0 15px 0 25px;
        background-color: $company-blue;
        box-shadow: 0 0 5px 1px $company-blue;
        z-index: 5;

        &_titel {
          display: flex;

          span {
            position: relative;
            padding: 0 5px;
            font-size: 1.2rem;
            margin-top: 10px;
            margin-bottom: 0;
            font-weight: 700;

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
          padding-right: 0;

          p {
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
      width: 150px;

      p {
        margin: 0;
        padding: 5px 0;
        transition: all 0.5s;
      }

    }
  }
}

.headerMobile-active-enter-from,
.headerMobile-active-leave-to {
  transition: all 0.25s ease;
  transform: translateX(0);
  background-color: antiquewhite;
}

.headerMobile-active-enter-active,
.headerMobile-active-leave-active {
  transition: all 0.25s ease;
  background-color: antiquewhite;
}

.headerMobile-active-enter,
.headerMobile-active-leave {
  transition: all 0.25s ease;
  transform: translateX(-150px);
  background-color: antiquewhite;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
