<template>
  <div class="home">
    <h1>Menzel-Fahrzeugpflege</h1>
    <p>Diese seite befindet sich in der Entwicklung Besuchen sie uns bald wieder ;)</p>
    <div class="home_content">
      <!-- TEMPORARY PLACEHOLDER -->
      <div class="home_content_left home_content_wrapper">
        <div class="home_content_picture">
          <p>DAS IST EIN BILD</p>
        </div>
        <div class="home_content_text">
          <p>DAS IST EINE SCHNELLE BESCHREIBUNG EINES THEMAS</p>
        </div>
      </div>
      <div class="home_content_rigth home_content_wrapper">
        <div class="home_content_picture">
          <p>DAS IST EIN BILD</p>
        </div>
        <div class="home_content_text">
          <p>DAS IST EINE SCHNELLE BESCHREIBUNG EINES THEMAS</p>
        </div>
      </div>
      <div class="home_content_left home_content_wrapper">
        <div class="home_content_picture">
          <p>DAS IST EIN BILD</p>
        </div>
        <div class="home_content_text">
          <p>DAS IST EINE SCHNELLE BESCHREIBUNG EINES THEMAS</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeView",
  components: {},
};
</script>

<style lang="scss">
.home {
  &_content {
    display: flex;
    flex-direction: column;

    &_wrapper {
      display: flex;
      flex-direction: row;
      justify-content: center;
      margin: 0 auto;

      height: 30rem;
      width: 100%;
      max-width: 1250px;
    }

    &_left {
      flex-direction: row-reverse;
    }

    &_text,
    &_picture {
      width: 50%;
    }

    &_text {
      background-color: rgb(245, 242, 239);
    }

    &_picture {
      background-color: rgb(249, 250, 245);
    }
  }
}
</style>
