<template>
  <div class="">
    <div class="headerDesktop">
      <WheelIcon class="headerDesktop_icon" />
      <HeaderOpeningHours class="headerDesktop_quickConntact headerDesktop_quickConntact_timeing" />
      <nav class="headerDesktop_nav">
        <NuxtLink class="headerDesktop_nav_route" to="/home">
          <transition name="headerDesktop-menu">
            <div v-if="this.$route.name == 'home'" class="headerDesktop_nav_route_active"></div>
          </transition>
          <p>Home</p>
        </NuxtLink>
        <NuxtLink class="headerDesktop_nav_route" to="/service">
          <transition name="headerDesktop-menu">
            <div v-if="isService" class="headerDesktop_nav_route_active"></div>
          </transition>
          <p>Service</p>
        </NuxtLink>
        <NuxtLink class="headerDesktop_nav_route" to="/contact">
          <transition name="headerDesktop-menu">
            <div v-if="this.$route.name == 'contact'" class="headerDesktop_nav_route_active"></div>
          </transition>
          <p>Kontakt</p>
        </NuxtLink>
        <!--  <NuxtLink class="headerDesktop_nav_route" to="/news">
          <transition name="headerDesktop-menu">
            <div v-if="this.$route.name == 'news'" class="headerDesktop_nav_route_active"></div>
          </transition>
          <p>News</p>
        </NuxtLink> -->
        <NuxtLink class="headerDesktop_nav_route" to="/galerie">
          <transition name="headerDesktop-menu">
            <div v-if="this.$route.name == 'galerie'" class="headerDesktop_nav_route_active"></div>
          </transition>
          <p>Galerie</p>
        </NuxtLink>
        <NuxtLink class="headerDesktop_nav_route" to="/about">
          <transition name="headerDesktop-menu">
            <div v-if="this.$route.name == 'about'" class="headerDesktop_nav_route_active"></div>
          </transition>
          <p>Über mich</p>
        </NuxtLink>
        <NuxtLink class="headerDesktop_nav_route" to="/impressum">
          <transition name="headerDesktop-menu">
            <div v-if="this.$route.name == 'impressum'" class="headerDesktop_nav_route_active"></div>
          </transition>
          <p>Impressum</p>
        </NuxtLink>
      </nav>
      <div class="headerDesktop_quickConntact headerDesktop_quickConntact_address" @mouseup="$router.push('/contact')">
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
.nuxt-link-active {
  p {
    margin-top: 15px;
    color: $company-blue;
  }
}
</style>

<style lang="scss">
.headerDesktop {
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

      p {
        margin: 0;
        font-weight: bold;
        color: white;
        transition: all 1s;
      }

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

@media only screen and (max-width: 1500px) {
  .headerDesktop {
    justify-content: flex-end;
    padding-right: 5px;

    &_quickConntact_address {
      display: none;
    }
  }
}


@media only screen and (max-width: 1225px) {
  .headerDesktop {
    margin-left: 0;
  }
}

@media only screen and (max-width: 1100px) {
  .headerDesktop_quickConntact {
    display: none;
  }
}

.headerDesktop-menu {
  transition: all 0.5s;
}

.headerDesktop-menu-enter-active,
.headerDesktop-menu-leave-active {
  transform: translateY(0) rotateZ(0deg);
}

.headerDesktop-menu-enter {
  transform: translateY(-110%) rotateZ(-10deg);
}

.headerDesktop-menu-leave-to {
  transform: translateY(110%) rotateZ(10deg);
}
</style>
