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
      <a href="https://mfzt-cdn.azureedge.net/images/being_productive.webp">
        <NuxtImg src="https://mfzt-cdn.azureedge.net/images/being_productive.webp" alt="Inhaber steht am Leptop" format="webp" fit='outside'
          sizes="xs:300px sm:325px md:350px lg:375px xl:400px" densities="x1 x2 x3" width="690" height="920" />
      </a>
      <a href="https://mfzt-cdn.azureedge.net/images/standing_under_car.webp">
        <NuxtImg src="https://mfzt-cdn.azureedge.net/images/standing_under_car.webp" alt="Inhaber steht unter einem Fahrzeug" format="webp" fit='outside'
          sizes="xs:300px sm:325px md:350px lg:375px xl:400px" densities="x1 x2 x3" width="690" height="920" />
      </a>
      <a href="https://mfzt-cdn.azureedge.net/images/holding_master_certificate.webp">
        <NuxtImg src="https://mfzt-cdn.azureedge.net/images/holding_master_certificate.webp" alt="Inhaber hält seinen silbernen Meisterbrief"
          format="webp" fit='outside' sizes="xs:300px sm:325px md:350px lg:375px xl:400px" densities="x1 x2 x3"
          width="491" height="919" />
      </a>
      <a href="https://mfzt-cdn.azureedge.net/images/dirty_hand.webp">
        <NuxtImg src="https://mfzt-cdn.azureedge.net/images/dirty_hand.webp" alt="Inhaber hat eine dreckige Hand" format="webp" fit='outside'
          sizes="xs:300px sm:325px md:350px lg:375px xl:400px" densities="x1 x2 x3" width="737" height="919" />
      </a>
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
      content: 'Alle Informationen über denn Inhaber von Menzel Fahrzeugtechnik'
    },
    {
      hid: 'keywords_about',
      name: 'keywords',
      content: 'About, Menzel, Dirk, Inhaber, Meister, Silbern'
    },
  ],
  link: [
    {
      hid: 'canonical',
      rel: 'canonical',
      href: 'https://menzel-fahrzeugtechnik.de/about'
    }
  ]
})
definePageMeta({
  keepalive: true,
  scrollToTop: false,
})
</script>