<template>
  <div :class="$device.isMobile ? 'mobileOffset' : ''">
    <div class="about_images">
      <img src="~/assets/images/teuv_sign.png" alt="Schild der Werkstatt">
      <img src="~/assets/images/standing_under_car.png" alt="Inhaber steht unter einem Fahrzeug">
      <img src="~/assets/images/dirty_hand.png" alt="Inhaber hat eine dreckige Hand">
      <img src="~/assets/images/holding_master_certificate.png" alt="Inhaber hält seinen silbernen Meisterbrief">
    </div>
  </div>
</template>

<script>
export default {
  name: "about",
  head() {
    return {
      title: "Über mich",
      meta: [
        {
          hid: 'description_about',
          name: 'description',
          content: 'Alle Informationen über denn Inhaber von Menzel Fahrzeugtechnik'
        },
        {
          hid: 'keywords_about',
          name: 'keywords',
          content: 'About'
        },
      ],
      link: [
        {
          hid: 'canonical',
          rel: 'canonical',
          href: 'https://menzel-fahrzeugtechnik.de/about'
        }
      ]
    }
  },
}
</script>

<style lang="scss">
.about {
  &_images {
    img {
      max-width: 250px;
      border-radius: 5px;
      margin: 15px;
    }
  }
}
</style>