<template>
  <MainContentWrapper>
    <PageTitelWrapper>
      <h1>Über mich</h1>
    </PageTitelWrapper>
    <div>
      <p>Mein Name ist
        <span>Dirk Menzel</span>
      </p>
      <p>
        Ich habe mich hier in der Städtelner Straße 62 in Markkleeberg im August 2018
        selbständig gemacht. Ich bin seit 1995 KFZ Meister und wagte relativ spät den Schritt zur Selbstständigkeit.
        Mein
        erlernter Beruf ist für mich immer noch Berufung, ich repariere mit Leidenschaft und Engagement Fahrzeuge aller
        Art mit mindestens zwei Rädern.
      </p>
    </div>
    <div class="imageContainer">
      <ImageComponent image="being_productive.webp" />
      <ImageComponent image="standing_under_car.webp" />
      <ImageComponent image="holding_master_certificate.webp" />
      <ImageComponent image="dirty_hand.webp" />
    </div>
  </MainContentWrapper>
</template>

<script setup>
useSeoMeta({
  title: "Menzel - Über mich",
  meta: [
    {
      hid: 'description_about',
      name: 'description',
      content: 'Ich habe mich hier in der Städtelner Straße 62 in Markkleeberg im August 2018 selbständig gemacht.Ich bin seit 1995 KFZ Meister und wagte relativ spät den Schritt zur Selbstständigkeit. Mein erlernter Beruf ist für mich immer noch Berufung, ich repariere mit Leidenschaft und Engagement Fahrzeuge aller Art mit mindestens zwei Rädern.'
    },
    {
      hid: 'keywords_about',
      name: 'keywords',
      content: 'About, Menzel, Dirk, Inhaber, Meister, Silbern'
    },
  ],
  link: [
    {
      hid: 'about_canonical',
      rel: 'canonical',
      href: 'www.https://menzel-fahrzeugtechnik.de/about'
    }
  ]
})
definePageMeta({
  keepalive: true,
  scrollToTop: false,
})
</script>