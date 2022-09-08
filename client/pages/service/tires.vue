<template>
  <div>
    <h1>Reifen und Räder</h1>
    <div class="serviceView_detailed_text">
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
      <div class="serviceView_detailed_img_wrapper">
        <img class="serviceView_detailed_img" src="~/assets/images/tire_machine.png" alt=""> <!-- Add later -->
        <img class="serviceView_detailed_img" src="~/assets/images/tire_machine_II.png" alt=""> <!-- Add later -->
        <img class="serviceView_detailed_img" src="~/assets/images/tire_upclose.png" alt="Bild einer Felge">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "tirest",
  head() {
    return {
      title: "Reifen und Räder",
      meta: [
        {
          hid: 'description_tirest',
          name: 'description',
          content: 'Der Reifenwechsel sollte zwei Mal im Jahr erfolgen, denn nur ein den Wetterverhältnissen angepasstes Reifenprofil gewährleistet eine optimale Straßenhaftung. Auf Wunsch können die Reifen auch eingelagert werden.'
        },
        {
          hid: 'keywords_tires',
          name: 'keywords',
          content: 'Reifen, Räder'
        },
      ],
      link: [
        {
          hid: 'canonical',
          rel: 'canonical',
          href: 'https://menzel-fahrzeugtechnik.de/service/tires'
        }
      ]
    }
  },
}
</script>