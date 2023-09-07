<template>
  <MainContentWrapper>
    <PageTitelWrapper>
      <h1>Über mich</h1>
    </PageTitelWrapper>
    <div>
      <p>Mein Name ist
        <span>Dirk</span>
        <span>Menzel</span>
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
      <a href="/images/being_productive.png">
        <NuxtImg src="/images/being_productive.png" alt="Inhaber steht am Leptop" loading="lazy" fit='outside'
          sizes="xs:300px sm:325px md:350px lg:375px xl:400px" densities="x1 x2 x3" />
      </a>
      <a href="/images/standing_under_car.png">
        <NuxtImg src="/images/standing_under_car.png" alt="Inhaber steht unter einem Fahrzeug" loading="lazy"
          fit='outside' sizes="xs:300px sm:325px md:350px lg:375px xl:400px" densities="x1 x2 x3" />
      </a>
      <a href="/images/holding_master_certificate.png">
        <NuxtImg src="/images/holding_master_certificate.png" alt="Inhaber hält seinen silbernen Meisterbrief"
          loading="lazy" fit='outside' sizes="xs:300px sm:325px md:350px lg:375px xl:400px" densities="x1 x2 x3" />
      </a>
      <a href="/images/dirty_hand.png">
        <NuxtImg src="/images/dirty_hand.png" alt="Inhaber hat eine dreckige Hand" loading="lazy" fit='outside'
          sizes="xs:300px sm:325px md:350px lg:375px xl:400px" densities="x1 x2 x3" />
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