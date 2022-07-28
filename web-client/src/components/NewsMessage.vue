<template>
  <div>
    <h2>{{ message.titel }}</h2>
    <p>{{ message.text }}</p>
    <h6>Erstellt am: {{ message.date }}</h6>
    <div class="news_image_wrapper">
      <div v-for="(img, index) in message.imageIds" :key="index + 'sec'" class="news_image_container">
        <a class="news_image" :href="url + img"> <img :src="url + img" alt="" /></a>
        <span class="news_image_overlay">
          <p class="news_image_overlay_text">{{ img }}</p></span
        >
      </div>
    </div>
    <hr />
  </div>
</template>

<script>
export default {
  props: {
    message: { type: Object, default: () => {} },
  },
  computed: {
    url() {
      if (process.env.NODE_ENV == "development") return "http://192.168.2.100:7081?id=";
      else return "https://image.menzel-fahrzeugtechnik.de?id=";
    },
  },
};
</script>

<style lang="scss">
.news {
  &_image {
    margin: auto;

    img {
      max-width: 450px;
      border-radius: 10px;
      box-shadow: 2px 2px 25px 0 #38383880;
      transition: all 0.3s;
      cursor: pointer;
    }

    &_overlay {
      position: absolute;
      display: flex;
      justify-content: center;
      flex-direction: column;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      align-content: center;
      pointer-events: none;
      opacity: 0;
      transition: all 0.3;

      &_text {
        width: auto;
        height: auto;
        margin: auto;
        background-color: rgba(240, 255, 255, 0.884);
        padding: 5px;
        border-radius: 5px;
        font-weight: 900;
      }
    }

    &:hover {
      filter: blur(2px) grayscale(0.75);
    }

    &_wrapper {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
      gap: 15px;
      max-width: 1500px;
      width: auto;
      margin: 0 auto;
    }

    &_container {
      position: relative;
      display: flex;
      justify-content: center;
    }
  }
}

.news_image:hover + .news_image_overlay {
  opacity: 1;
}

@media only screen and (max-width: 460px) {
  .news {
    &_image {
      margin: auto;

      img {
        max-width: 100px;
      }

      &_wrapper {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
        gap: 2px;
        max-width: 100%;
        width: auto;
        margin: 0 auto;
      }

      &_container {
        position: relative;
        display: flex;
        justify-content: center;
        max-width: 100%;
      }
    }
  }
}
</style>
