<template>
  <div class="home">
    <ActiveMessage />
    <h1>Menzel-Fahrzeugpflege</h1>
    <p>Diese seite befindet sich in der Entwicklung Besuchen sie uns bald wieder ;)</p>
    <div class="home_content">
      <!-- TEMPORARY PLACEHOLDER -->
      <div class="home_content_left home_content_wrapper" @mousemove="mouseMove($event, 'TuevImg')">
        <div class="home_content_picture_wrapper">
          <div class="home_content_picture">
            <img src="@/assets/parrallax/L0.png" id="TuevImgLayer0" />
            <img src="@/assets/parrallax/L1.png" id="TuevImgLayer1" />
            <img src="@/assets/parrallax/L2.png" id="TuevImgLayer2" />
          </div>
        </div>
        <div class="home_content_text">
          <h2>TÜV</h2>
          <p>Wir machen TÜV</p>
          <button @mouseup="$router.push('service')">Erfahre mehr</button>
        </div>
      </div>
      <div class="home_content_rigth home_content_wrapper" @mousemove="mouseMove($event, 'divTwoWheel')">
        <div class="home_content_picture_wrapper">
          <div class="home_content_picture" id="divTwoWheel">
            <p>DAS IST EIN BILD</p>
          </div>
        </div>
        <div class="home_content_text">
          <h2>Reifen Service</h2>
          <p>Wir wechseln Reifen</p>
          <button @mouseup="$router.push('service')">Erfahre mehr</button>
        </div>
      </div>
      <div class="home_content_left home_content_wrapper" @mousemove="mouseMove($event, 'divThreeGlas')">
        <div class="home_content_picture_wrapper">
          <div class="home_content_picture" id="divThreeGlas">
            <p>DAS IST EIN BILD</p>
          </div>
        </div>
        <div class="home_content_text">
          <h2>Glas Service</h2>
          <p>Wir wechseln Gläßer</p>
          <button @mouseup="$router.push('service')">Erfahre mehr</button>
        </div>
      </div>
      <div class="home_content_rigth home_content_wrapper" @mousemove="mouseMove($event, 'divFouracc')">
        <div class="home_content_picture_wrapper">
          <div class="home_content_picture" id="divFouracc">
            <p>DAS IST EIN BILD</p>
          </div>
        </div>
        <div class="home_content_text">
          <h2>Unfall Service</h2>
          <p>Wir wechseln Gläßer</p>
          <button @mouseup="$router.push('service')">Erfahre mehr</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ActiveMessage from "@/components/ActiveMessage";

export default {
  name: "HomeView",
  components: {
    ActiveMessage,
  },
  methods: {
    mouseMove(event, elem) {
      for (let i = 0; i < 3; i++) {
        document.getElementById(elem + "Layer" + i).style.transform = `translateX(${(event.screenX - event.screenX / 2 - 400) / (10 * (i + 1))}px)`;
      }
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

      height: 30rem;
      width: 100%;
      max-width: 1250px;

      box-shadow: 1px 1px 5px 1px rgba(204, 203, 203, 0.151);
    }

    &_left {
      flex-direction: row-reverse;
      margin-right: 300px;
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
</style>
