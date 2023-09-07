<template>
  <div>
    <h2>Glasschäden</h2>
    <p>
      Wenn die Scheibe getauscht werden muss, zahlen Sie nur die mit der Kaskoversicherung vereinbarte
      Selbstbeteiligung. Wir regeln die Abrechnung mit der
      Versicherung.
    </p>
    <div class="imageContainer">
      <a href="/images/holding_windshield.png">
        <NuxtImg class="serviceView_detailed_img" src="/images/holding_windshield.png"
          alt="Inhaber hält getauschte Windschutzscheibe" loading="lazy" fit='outside'
          sizes="xs:300px sm:325px md:350px lg:375px xl:400px" densities="x1 x2 x3" />
      </a>
    </div>
  </div>
</template>

<script setup>
useSeoMeta({
  title: "Menzel - Glasschäden",
  meta: [
    {
      hid: 'description_glasService',
      name: 'description',
      content: 'Wenn die Scheibe getauscht werden muss, zahlen Sie nur die mit der Kaskoversicherung vereinbarte Selbstbeteiligung. Wir regeln die Abrechnung mit der Versicherung.'
    },
    {
      hid: 'keywords_glasService',
      name: 'keywords',
      content: 'Glasschäden, Frontscheibentausch, Garglas, Steinschlag, Riss, Scheibe, Tausch, '
    },
  ],
  link: [
    {
      hid: 'canonical',
      rel: 'canonical',
      href: 'https://menzel-fahrzeugtechnik.de/service/glasService'
    }
  ]
})
definePageMeta({
  keepalive: true,
  scrollToTop: false,
})
</script>