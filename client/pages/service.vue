<template>
  <div class="serviceView_wrapper">
    <div class="pageTitel">
      <span>Unsere</span>
      <span>Leistungen</span>
    </div>
    <div v-if="this.$route.name == 'service'">
      <h3>Wir sind für Sie da</h3>
      <p>Klicken sie auf eine Leistung um mehr zu erfahren</p>
    </div>
    <router-view class="serviceView_content"></router-view>
    <ServiceSelection />
  </div>
</template>

<script>
import ServiceSelection from '~/components/ServiceSelection.vue';
export default {
  name: "service",
  head() {
    return {
      title: "Leistungen",
      meta: [
        {
          hid: 'description_service',
          name: 'description',
          content: 'Alle Leistungen und Angebote von Menzel Fahrzeugtechnik'
        },
        {
          hid: 'keywords_service',
          name: 'keywords',
          content: 'Leistungen'
        },
      ],
      link: [
        {
          hid: 'canonical',
          rel: 'canonical',
          href: 'https://menzel-fahrzeugtechnik.de/service'
        }
      ]
    }
  },
  components: {
    ServiceSelection
  },
  mounted() { },
}
</script>

<style lang="scss">
.serviceView {
  &_wrapper {
    max-width: 1500px;
    margin: 0 auto;
  }

  &_detailed {
    &_text {
      text-align: left;
      max-width: 1000px;
      margin: auto;
      padding: 0 25px;

      li {
        margin-top: 10px;
      }

    }

    &_img {
      margin: 15px auto;
      border-radius: 5px;
      max-width: calc(100% - 30px);
      max-height: 400px;

      &_wrapper {
        text-align: center
      }
    }
  }
}

@media only screen and (max-width: 870px) {
  .serviceView {
    &_overview {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(8rem, 1fr));

      &_container {
        min-width: 6rem;
        max-height: 8rem;
        font-size: 0.7rem;
        overflow: hidden;
      }
    }

    &_content {
      padding: 10px;
    }
  }
}
</style>
