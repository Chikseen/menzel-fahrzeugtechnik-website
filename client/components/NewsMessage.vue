<template>
  <div class="news_wrapper">
    <div class="news_header">
      <h2>{{ message.titel }}</h2>
      <h6>Erstellt am: {{ toDate(message.created) }}</h6>
    </div>
    <p>{{ message.text }}</p>
    <div class="news_image_wrapper">
      <div v-for="img in message.images" :key="img + 2" class="news_image">
        <a class="news_image" :href="imageUrl + img">
          <img :src="imageUrl + img" alt=""
        /></a>
      </div>
    </div>
    <hr />
  </div>
</template>

<script>
import date from '@/date'

export default {
  props: {
    message: { type: Object, default: () => {} },
  },
  methods: {
    toDate(dateT) {
      return date.dateObjectToDDMMYYYY(dateT)
    },
  },
  computed: {
    imageUrl() {
      return `${process.env.VUE_APP_API}/Images?name=`
    },
  },
}
</script>

<style lang="scss">
.news {
  &_wrapper {
    max-width: 1000px;
    margin: 0 auto;
    text-align: left;
  }

  &_header {
    display: flex;
    justify-content: space-between;
  }

  &_image {
    border-radius: 5px;
    overflow: auto;

    &_wrapper {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 25px;
      padding: 25px;
      max-width: 1000px;
      margin: 0 auto;
    }

    img {
      max-width: 250px;
      max-height: 250px;
    }
  }
}

.news_image:hover + .news_image_overlay {
  opacity: 1;
}

@media only screen and (max-width: 460px) {
}
</style>
