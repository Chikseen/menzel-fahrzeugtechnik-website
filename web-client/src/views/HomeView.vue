<template>
  <div class="home">
    <div class="pageTitel">
      <h1>Menzel</h1>
      <h1>Fahrzeugtechnik</h1>
    </div>
    <ActiveMessage />
    <div class="home_content">
      <!-- TEMPORARY PLACEHOLDER -->
      <div class="home_content_left home_content_wrapper" @mousemove="mouseMove($event, 'TuevImg')">
        <div class="home_content_picture_wrapper">
          <TuevIcon />
        </div>
        <div class="home_content_titel" @mouseup="$router.push({ name: 'tuev' })">
          <h2 class="underlined">Hauptuntersuchung und Abgasuntersuchung</h2>
          <div class="home_content_text">
            <ul>
              <li>Neuwagen müssen nach drei Jahren zur Haupt- und Abgasuntersuchung, danach wechselt das Prüfintervall in den Zweijahresrhythmus.</li>
              <li>Die Hauptuntersuchung stellt die "Verkehrssicherheit, Vorschriftsmäßigkeit und Umweltverträglichkeit" der Fahrzeuge sicher.</li>
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
            <!--             <ul>
              <li></li>
            </ul> -->
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
          <h2 class="underlined">Klimaservice</h2>
          <div class="home_content_text">
            <ul>
              <li>
                Die regelmäßige Wartung der Klimaanlage erhöht die Sicherheit und verhindert teure Reparaturen. Jede Klimaanlage verliert pro Jahr Kältemittel,
                dadurch verringert sich die Kühlleistung der Klimaanlage deutlich. Deshalb sollte das Kältemittel alle 2 Jahre aufgefüllt werden.
              </li>
              <li>
                Eine Klimaanlage kühlt nicht nur, sie hält bei optimaler Leistung auch die Innenraumluft trocken. Deshalb ist es auch wichtig im Herbst und
                Winter die Klimaanlage einzuschalten, denn es gilt: je trockener die Innenraumluft, desto weniger beschlagen die Scheiben.
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
    </div>
  </div>
</template>

<script>
import ActiveMessage from "@/components/ActiveMessage";
import TuevIcon from "@/assets/icons/TuevIcon.vue";
import BrandCluster from "@/assets/icons/logos/LogoClusterIcon.vue";
import RepairService from "@/assets/icons/repairService/RepairServiceCluster.vue";
import ACIcon from "@/assets/icons/ACIcon.vue";

export default {
  name: "HomeView",
  components: {
    ActiveMessage,
    TuevIcon,
    BrandCluster,
    RepairService,
    ACIcon,
  },
  methods: {
    mouseMove(event, elem) {
      /* for (let i = 0; i < 3; i++) {
        document.getElementById(elem + "Layer" + i).style.transform = `translateX(${(event.screenX - event.screenX / 2 - 400) / (10 * (i + 1))}px)`;
      } */
    },
  },
};
</script>

<style lang="scss">
.home {
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
}

@media only screen and (max-width: 870px) {
  .home {
    margin-top: 6rem;

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
