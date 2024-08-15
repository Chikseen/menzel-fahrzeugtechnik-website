<template>
  <div>
    <h2>Reifen und Räder</h2>
    <div>
      <p>
        Der Reifenwechsel sollte zwei Mal im Jahr erfolgen, denn nur ein den Wetterverhältnissen angepasstes
        Reifenprofil gewährleistet eine optimale
        Straßenhaftung. Auf Wunsch können die Reifen auch eingelagert werden. <b>Allwetter- oder
          Ganzjahresreifen</b> verfügen über die
        M+S-Kennzeichnung und vereinen sowohl die Eigenschaften eines Sommer- als auch eines Winterreifens. Sie dürfen
        bei allen Wettersituationen gefahren
        werden, also auch auf winterlichen Straßen. Aber: Auf Eis und Schnee sind sie dem Winterreifen deutlich in
        puncto Handling, Bremsen und Traktion
        unterlegen. Das hat der Autofahrer intus: Die Reifen werden zu <b>Ostern</b> und im
        <b>Oktober</b> gewechselt. Diese Faustregel ist
        im Großen und Ganzen sinnvoll, denn es kann bereits im Oktober schneien. Man sollte spätestens <b>Ende
          April</b> und frühestens im
        <b>Oktober</b> umgerüstet haben. Gesetzlich vorgeschrieben ist eine Mindestprofiltiefe von <b>1,6
          Millimetern</b> Doch sicher sind
        Reifen erst mit <b>4 Millimetern</b> Profiltiefe.
      </p>
      <div class="imageContainer">
        <ImageComponent image="tire_machine.webp" />
        <ImageComponent image="tire_machine_II.webp" />
        <ImageComponent image="tire_upclose.webp" />
      </div>
    </div>
  </div>
</template>

<script setup>
useSeoMeta({
  title: "Menzel - Reifen und Räder",
  meta: [
    {
      hid: 'description_tirest',
      name: 'description',
      content: 'Der Reifenwechsel sollte zwei Mal im Jahr erfolgen, denn nur ein den Wetterverhältnissen angepasstes Reifenprofil gewährleistet eine optimale Straßenhaftung. Auf Wunsch können die Reifen auch eingelagert werden.'
    },
    {
      hid: 'keywords_tires',
      name: 'keywords',
      content: 'Reifen, Räder, Wechsel, Lagerung, Winterreifen, Sommerreifen, Felgen, umziehen, auswuchten'
    },
  ],
  link: [
    {
      hid: 'canonical',
      rel: 'canonical',
      href: 'https://menzel-fahrzeugtechnik.de/service/tires'
    }
  ]
})
definePageMeta({
  keepalive: true,
  scrollToTop: false,
})
</script>