<template>
  <div id="home" :class="['home', $device.isMobile ? 'mobileOffset' : '']" ref="home">
    <div class="home_viewport home_viewport_withHeader">
      <div class="home_section">
        <h1 v-if="!$device.isMobile">
          Herzlich willkommen bei
          <div class="pageTitel">
            <span>Menzel</span>
            <span>Fahrzeugtechnik</span>
          </div>
        </h1>
        <h1 v-else class="home_smallTitel">
          Herzlich willkommen bei Menzel Fahrzeugtechnik
        </h1>
      </div>
      <div class="home_section">
        <ActiveMessage />
      </div>
      <div class="home_section">
        <img class="home_images home_images_big" src="~/assets/images/teuv_sign.png" alt="Schild der Werkstatt" />
      </div>
      <div :class="['home_viewport_scrollArrow', { 'home_viewport_scrollArrow_mobile': $device.isMobile }]"
        @click="scrollDown(1)">
        <ArrowIcon class="home_viewport_scrollArrow_icon" />
      </div>
    </div>
    <div class="home_viewport">
      <div class="home_section">
        <h2 v-if="!$device.isMobile">Unsere Leistungen im Überblick</h2>
        <h4 v-else>Unsere Leistungen im Überblick</h4>
        <ServiceSelection />
      </div>
<!--       <div :class="['home_viewport_scrollArrow', { 'home_viewport_scrollArrow_mobile': $device.isMobile }]"
        @click="scrollDown(2)">
        <ArrowIcon class="home_viewport_scrollArrow_icon" />
      </div> -->
      <div class="home_section">
        <img class="home_images" src="~/assets/images/standing_under_car_II.png" alt="Inhaber steht unter einem Auto" />
        <img class="home_images" src="~/assets/images/repair_area.png" alt="Blick in die Werkstatt" />
        <img class="home_images" src="~/assets/images/home_gen_view.png" alt="Blick in die Werkstatt" />
        <img class="home_images" src="~/assets/images/smart_in_transporter.png" alt="Smart in einem Transporter" />
      </div>
    </div>
  </div>
</template>

<script>
import ActiveMessage from '@/components/ActiveMessage'
import ServiceSelection from '~/components/ServiceSelection.vue'
import ArrowIcon from '~/assets/icons/ArrowIcon.vue'

export default {
  name: 'HomeView',
  head() {
    return {
      title: 'Übersicht',
      meta: [
        {
          hid: 'description_home',
          name: 'description',
          content:
            'Informationen über die wichtigsten Leistungen und Angebote von Menzel Fahrzeugtechnik',
        },
        {
          hid: 'keywords_home',
          name: 'keywords',
          content: 'Übersicht',
        },
      ],
      link: [
        {
          hid: 'canonical',
          rel: 'canonical',
          href: 'https://menzel-fahrzeugtechnik.de/home',
        },
      ],
    }
  },
  components: {
    ActiveMessage,
    ServiceSelection,
    ArrowIcon,
  },
  methods: {
    mouseMove(event, elem) {
      /* for (let i = 0; i < 3; i++) {
        document.getElementById(elem + "Layer" + i).style.transform = `translateX(${(event.screenX - event.screenX / 2 - 400) / (10 * (i + 1))}px)`;
      } */
    },
    scrollDown(multi) {
      //Multi is the number of viewport
      window.scroll({
        top: (window.innerHeight * multi) + (this.$device.isMobile ? -50 : 30), // x + gap
        behavior: 'smooth'
      });
    },
  },
}
</script>

<style lang="scss">
.home {
  padding: 15px;
  display: flex;
  flex-direction: column;
  gap: 30px;

  &_content {
    position: relative;
    display: flex;
    flex-direction: column;
    row-gap: 20px;

    &_wrapper {
      display: flex;
      flex-direction: row;
      justify-content: center;
      margin: 10px auto;

      height: 15rem;
      width: 100%;
      max-width: 1250px;
    }

    &_left {
      flex-direction: row-reverse;
    }

    &_titel,
    &_picture_wrapper {
      width: 50%;
    }

    &_titel {
      margin: 0 auto;
      cursor: pointer;

      h2 {
        position: relative;
      }
    }

    &_text {
      text-align: left;
    }

    &_picture {
      max-height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;

      &_wrapper {
        max-height: 100%;
        position: relative;
      }

      img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
      }
    }
  }

  &_smallTitel {
    font-size: 1.3rem;
  }

  &_images {
    max-width: 45%;
    max-height: 500px;
    border-radius: 5px;

    &_big {
      width: 100%;
      max-width: 600px;
    }
  }

  &_serviceSelection {
    margin-top: 0 !important;
    max-width: 650px;
    margin: 0 auto;
  }

  &_viewport {
    display: flex;
    flex-direction: column;
    min-height: 100vh;

    &_withHeader {
      min-height: calc(100vh - 6rem - 15px);
    }

    &_scrollArrow {
      margin-top: auto;

      &_mobile {
        margin-bottom: 8rem;
      }

      &_icon {
        width: 4rem;
      }
    }
  }

  &_section {
    margin-bottom: 10px;
  }
}

@media only screen and (max-width: 870px) {
  .home {
    &_content {
      &_wrapper {
        position: relative;
        height: auto;
      }

      &_titel,
      &_picture_wrapper {
        width: 50%;
        font-size: 0.8rem;
      }

      &_titel {
        width: 100%;
        text-align: left;

        h2 {
          //margin: 20px 25px 10px 100px;
          margin: 20px 25px 10px 20px;
        }
      }

      &_picture {
        &_wrapper {
          display: none;
          position: absolute;
          top: 10px;
          left: 0;
          height: 75px;
          width: 75px;
        }

        position: absolute;
        top: 0;
        left: 0;
        width: 100%;

        img {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
        }
      }

      &_text {
        margin-top: 40px;
      }
    }
  }
}
</style>
