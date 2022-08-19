<template>
  <div class="">
    <div class="header">
      <WheelIcon class="header_icon" />
      <HeaderOpeningHours class="header_quickConntact header_quickConntact_timeing" />
      <nav class="header_nav">
        <NuxtLink class="header_nav_route" to="/home">
          <transition name="header-active">
            <div v-if="this.$route.name == 'home'" class="header_nav_route_active"></div>
          </transition>
          <p>Home</p>
        </NuxtLink>
        <NuxtLink class="header_nav_route" to="/service">
          <transition name="header-active">
            <div v-if="isService" class="header_nav_route_active"></div>
          </transition>
          <p>Service</p>
        </NuxtLink>
        <NuxtLink class="header_nav_route" to="/contact">
          <transition name="header-active">
            <div v-if="this.$route.name == 'contact'" class="header_nav_route_active"></div>
          </transition>
          <p>Kontakt</p>
        </NuxtLink>
        <NuxtLink class="header_nav_route" to="/news">
          <transition name="header-active">
            <div v-if="this.$route.name == 'news'" class="header_nav_route_active"></div>
          </transition>
          <p>News</p>
        </NuxtLink>
        <NuxtLink class="header_nav_route" to="/galerie">
          <transition name="header-active">
            <div v-if="this.$route.name == 'galerie'" class="header_nav_route_active"></div>
          </transition>
          <p>Galerie</p>
        </NuxtLink>
        <NuxtLink class="header_nav_route" to="/about">
          <transition name="header-active">
            <div v-if="this.$route.name == 'about'" class="header_nav_route_active"></div>
          </transition>
          <p>Über mich</p>
        </NuxtLink>
        <NuxtLink class="header_nav_route" to="/impressum">
          <transition name="header-active">
            <div v-if="this.$route.name == 'impressum'" class="header_nav_route_active"></div>
          </transition>
          <p>Impressum</p>
        </NuxtLink>
      </nav>
      <div class="header_quickConntact" @mouseup="$router.push('/contact')">
        <p>Städtelner Straße 62</p>
        <p>04416 Markkleeberg</p>
      </div>
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
  },
}
</script>

<style lang="scss" scoped>
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
          content: '';
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
}

nav {
  padding: 0 30px;
  white-space: nowrap;

  p {
    p {
      font-weight: bold;
      color: #d3d7df;
      transition: all 1s;
    }

    &.NuxtLink-active {
      p {
        color: $company_blue;
      }
    }
  }
}

@media only screen and (max-width: 1300px) {
  .header {
    &_quickConntact {
      display: none;
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
