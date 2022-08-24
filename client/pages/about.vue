<template>
  <div :class="['about', $device.isMobile ? 'mobileOffset' : '']">
    <div class="about_text">
      <h3>Mein Name ist
        <div v-if="!$device.isMobile" class="pageTitel pageTitel_noSpace">
          <span>Dirk</span>
          <span>Menzel</span>
        </div>
        <div v-else>
          Dirk Menzel
        </div>
      </h3>
      <p>
        Ich habe mich hier in der Städtelner Straße 62 in Markkleeberg im August 2018
        selbständig gemacht. Ich bin seit 1995 KFZ Meister und wagte relativ spät den Schritt zur Selbstständigkeit.
        Mein
        erlernter Beruf ist für mich immer noch Berufung, ich repariere mit Leidenschaft und Engagement Fahrzeuge aller
        Art mit mindestens zwei Rädern.
      </p>
    </div>
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
  padding: 0 20px;

  &_text {
    max-width: 500px;
    margin: 0 auto;
  }

  &_images {
    img {
      max-width: 250px;
      border-radius: 5px;
      margin: 15px;
    }
  }
}
</style>