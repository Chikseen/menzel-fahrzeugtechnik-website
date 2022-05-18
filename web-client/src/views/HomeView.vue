<template>
  <div class="home">
    <ActiveMessage />
    <h1>Menzel Fahrzeugtechnik</h1>
    <div class="home_content">
      <!-- TEMPORARY PLACEHOLDER -->
      <div class="home_content_left home_content_wrapper" @mousemove="mouseMove($event, 'TuevImg')">
        <div class="home_content_picture_wrapper">
          <TuevIcon />
        </div>
        <div class="home_content_text">
          <h2>TÜV Prüfstützpunkt und Abgasuntersuchung</h2>
          <p></p>
          <button @mouseup="$router.push('service#tuev')">Erfahre mehr</button>
        </div>
      </div>
      <div class="home_content_rigth home_content_wrapper" @mousemove="mouseMove($event, 'divTwoWheel')">
        <div class="home_content_picture_wrapper">
          <BrandCluster />
        </div>
        <div class="home_content_text">
          <h2>Freie KFZ-Werkstatt</h2>
          <button @mouseup="$router.push('service#klimaservice')">Erfahre mehr</button>
        </div>
      </div>
      <div class="home_content_left home_content_wrapper" @mousemove="mouseMove($event, 'divThreeGlas')">
        <div class="home_content_picture_wrapper">
          <div class="home_content_picture" id="divThreeGlas">
            <ACIcon />
          </div>
        </div>
        <div class="home_content_text">
          <h2>Klimaservice</h2>
          <button @mouseup="$router.push('service')">Erfahre mehr</button>
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
      </div> -->
      <div class="home_content_rigth home_content_wrapper" @mousemove="mouseMove($event, 'divThreeGlas')">
        <div class="home_content_picture_wrapper">
          <RepairService />
        </div>
        <div class="home_content_text">
          <h2>Unfallreparaturen</h2>
          <button @mouseup="$router.push('service')">Erfahre mehr</button>
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

    &_wrapper {
      display: flex;
      flex-direction: row;
      justify-content: center;
      margin: 10px auto;

      height: 20rem;
      width: 100%;
      max-width: 1250px;

      /*  box-shadow: 1px 1px 5px 1px rgba(204, 203, 203, 0.151); */
    }

    &_left {
      flex-direction: row-reverse;
      /*  margin-right: 300px; */
    }

    &_text,
    &_picture_wrapper {
      width: 50%;
    }

    &_text {
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
}

@media only screen and (max-width: 870px) {
  .home {
    &_content {
      &_left {
        flex-direction: row-reverse;
        /*  margin-right: 300px; */
      }

      &_text,
      &_picture_wrapper {
        width: 50%;
        font-size: 0.8rem;
      }

      &_text {
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
  }
}
</style>
