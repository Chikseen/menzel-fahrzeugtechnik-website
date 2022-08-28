<template>
  <div :class="['home', $device.isMobile ? 'mobileOffset' : '']">
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
    <div class="home_section">
      <h2 v-if="!$device.isMobile">Unsere Leistungen im Überblick</h2>
      <h4 v-else>Unsere Leistungen im Überblick</h4>
      <ServiceSelection />
    </div>
    <div class="home_section">
      <img class="home_images" src="~/assets/images/standing_under_car_II.png" alt="Inhaber steht unter einem Auto" />
      <img class="home_images" src="~/assets/images/repair_area.png" alt="Blick in die Werkstatt" />
      <img class="home_images" src="~/assets/images/home_gen_view.png" alt="Blick in die Werkstatt" />
      <img class="home_images" src="~/assets/images/smart_in_transporter.png" alt="Smart in einem Transporter" />
    </div>
    <!-- <div class="home_content">
      <div class="home_content_left home_content_wrapper" @mousemove="mouseMove($event, 'TuevImg')">
        <div class="home_content_picture_wrapper">
          <TuevIcon />
        </div>
        <div class="home_content_titel" @mouseup="$router.push({ name: 'tuev' })">
          <h2 class="underlined">Hauptuntersuchung und Abgasuntersuchung</h2>
          <div class="home_content_text">
            <ul>
              <li>Neuwagen müssen nach drei Jahren zur Haupt- und Abgasuntersuchung, danach wechselt das Prüfintervall
                in den Zweijahresrhythmus.</li>
              <li>Die Hauptuntersuchung stellt die "Verkehrssicherheit, Vorschriftsmäßigkeit und Umweltverträglichkeit"
                der Fahrzeuge sicher.</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="home_content_rigth home_content_wrapper tempDotShow" @mousemove="mouseMove($event, 'divTwoWheel')">
        <div class="home_content_picture_wrapper">
          <BrandCluster />
        </div>
        <div class="home_content_titel" @mouseup="$router.push({ name: 'service' })">
          <h2 class="underlined">Freie KFZ-Werkstatt</h2>
          <div class="home_content_text">
          </div>
        </div>
      </div>
      <div class="home_content_left home_content_wrapper" @mousemove="mouseMove($event, 'divThreeGlas')">
        <div class="home_content_picture_wrapper">
          <div class="home_content_picture" id="divThreeGlas">
            <ACIcon />
          </div>
        </div>
        <div class="home_content_titel" @mouseup="$router.push({ name: 'ac' })">
          <h2 class="underlined">Klimaanlagenservice</h2>
          <div class="home_content_text">
            <ul>
              <li>
                Die regelmäßige Wartung der Klimaanlage erhöht die Sicherheit und verhindert teure Reparaturen. Jede
                Klimaanlage verliert pro Jahr Kältemittel,
                dadurch verringert sich die Kühlleistung der Klimaanlage deutlich. Deshalb sollte das Kältemittel alle 2
                Jahre aufgefüllt werden.
              </li>
              <li>
                Eine Klimaanlage kühlt nicht nur, sie hält bei optimaler Leistung auch die Innenraumluft trocken.
                Deshalb ist es auch wichtig im Herbst und
                Winter die Klimaanlage einzuschalten, denn es gilt: je trockener die Innenraumluft, desto weniger
                beschlagen die Scheiben.
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="home_content_rigth home_content_wrapper" @mousemove="mouseMove($event, 'divThreeGlas')">
        <div class="home_content_picture_wrapper">
          <RepairService />
        </div>
        <div class="home_content_titel">
          <h2 class="underlined">Unfallreparaturen</h2>
          <div class="home_content_text" @mouseup="$router.push({ name: 'repair' })">
            <ul>
              <li>Versicherungsschadenabwicklung</li>
              <li>Hol- und Bringeservice</li>
              <li>Werkstattersatzwagen</li>
            </ul>
          </div>
        </div>
      </div> 
    </div>-->
  </div>
</template>

<script>
import ActiveMessage from '@/components/ActiveMessage'
import ServiceSelection from '~/components/ServiceSelection.vue'

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
  },
  methods: {
    mouseMove(event, elem) {
      /* for (let i = 0; i < 3; i++) {
        document.getElementById(elem + "Layer" + i).style.transform = `translateX(${(event.screenX - event.screenX / 2 - 400) / (10 * (i + 1))}px)`;
      } */
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
