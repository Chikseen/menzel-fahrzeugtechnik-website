<template>
  <div class="home">
    <ActiveMessage />
    <div class="home_titel">
      <h1>Menzel</h1>
      <h1>Fahrzeugtechnik</h1>
    </div>
    <div class="home_content">
      <!-- TEMPORARY PLACEHOLDER -->
      <div class="home_content_left home_content_wrapper underined" @mousemove="mouseMove($event, 'TuevImg')">
        <div class="home_content_picture_wrapper">
          <TuevIcon />
        </div>
        <div class="home_content_titel" @mouseup="$router.push('service#tuev')">
          <h2 class="underlined">TÜV Prüfstützpunkt und Abgasuntersuchung</h2>
          <div class="home_content_text">
            <ul>
              <li>Neuwagen müssen nach drei Jahren zur Haupt- und Abgasuntersuchung, danach wechselt das Prüfintervall in den Zweijahresrhythmus.</li>
              <li>Die Hauptuntersuchung stellt die "Verkehrssicherheit, Vorschriftsmäßigkeit und Umweltverträglichkeit" der Fahrzeuge sicher.</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="home_content_rigth home_content_wrapper" @mousemove="mouseMove($event, 'divTwoWheel')">
        <div class="home_content_picture_wrapper">
          <BrandCluster />
        </div>
        <div class="home_content_titel" @mouseup="$router.push('service')">
          <h2 class="underlined">Freie KFZ-Werkstatt</h2>
          <div class="home_content_text">
            <ul>
              <li></li>
            </ul>
          </div>
        </div>
      </div>
      <div class="home_content_left home_content_wrapper" @mousemove="mouseMove($event, 'divThreeGlas')">
        <div class="home_content_picture_wrapper">
          <div class="home_content_picture" id="divThreeGlas">
            <ACIcon />
          </div>
        </div>
        <div class="home_content_titel" @mouseup="$router.push('service#klimaservice')">
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
      <!--  <div class="home_content_rigth home_content_wrapper" @mousemove="mouseMove($event, 'divFouracc')">
        <div class="home_content_picture_wrapper">
          <div class="home_content_picture" id="divFouracc">
            <p>DAS IST EIN BILD</p>
          </div>
        </div>
        <div class="home_content_text">
          <h2>Glassschaden</h2>
          <p>Wir wechseln Gläßer</p>
          <button @mouseup="$router.push('service')">Erfahre mehr</button>
        </div>

        Versicherungsschadenabwicklung 

Hol- und Bringeservice 

Werkstattersatzwagen 


      </div> -->
      <div class="home_content_rigth home_content_wrapper" @mousemove="mouseMove($event, 'divThreeGlas')">
        <div class="home_content_picture_wrapper">
          <RepairService />
        </div>
        <div class="home_content_titel">
          <h2 class="underlined">Unfallreparaturen</h2>
          <div class="home_content_text" @mouseup="$router.push('service')">
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

  &_titel {
    position: relative;
    display: flex;
    justify-content: center;
    &:hover {
      h1 {
        &:nth-child(1) {
          color: $error-red;
        }
      }
    }

    h1 {
      position: relative;
      font-size: 3rem;
      color: $company_blue;
      padding: 0 10px;
      background-color: #fff;
      letter-spacing: 2px;
      z-index: 2;
      transition: all 0.5s;

      &:nth-child(1) {
        &::after {
          content: "";
          position: absolute;
          top: calc(50% + 2rem);
          right: 0;
          margin: 0 10px;
          height: 2px;
          width: 100%;
          background-color: $company_blue;
        }
      }

      &:nth-child(2) {
        &::after {
          content: "";
          position: absolute;
          top: calc(50% - 2rem);
          left: 0;
          margin: 0 10px;
          height: 2px;
          width: 100%;
          background-color: $company_blue;
        }
      }
    }
    /*     &::before {
      content: "";
      position: absolute;
      top: 50%;
      left: 0;
      margin: 0 10%;
      height: 2px;
      width: 80%;
      background-color: $company_blue;
    }  */
  }
}

@media only screen and (max-width: 870px) {
  .home {
    &_content {
      &_left {
        flex-direction: row-reverse;
        /*  margin-right: 300px; */
      }

      &_titel,
      &_picture_wrapper {
        width: 50%;
        font-size: 0.8rem;
      }

      &_titel {
        margin: auto;
      }

      &_picture {
        &_wrapper {
          position: relative;
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
    }

    &_titel {
      display: none;
    }
  }
}
</style>
