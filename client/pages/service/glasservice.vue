<template>
  <div>
    <h1>Glasschäden</h1>
    <div class="serviceView_detailed_text">
      <p>
        Wenn die Scheibe getauscht werden muss, zahlen Sie nur die mit der Kaskoversicherung vereinbarte
        Selbstbeteiligung. Wir regeln die Abrechnung mit der
        Versicherung.
      </p>
    </div>
    <img class="serviceView_detailed_img" src="~/assets/images/holding_windshield.png" alt="Inhaber hält getauschte Windschutzscheibe">
  </div>
</template>

<script>
export default {
  name: "glasService",
  head() {
    return {
      title: "Glasschäden",
      meta: [
        {
          hid: 'description_glasService',
          name: 'description',
          content: 'Wenn die Scheibe getauscht werden muss, zahlen Sie nur die mit der Kaskoversicherung vereinbarte Selbstbeteiligung. Wir regeln die Abrechnung mit der Versicherung.'
        },
        {
          hid: 'keywords_glasService',
          name: 'keywords',
          content: 'Glasschäden'
        },
      ],
      link: [
        {
          hid: 'canonical',
          rel: 'canonical',
          href: 'https://menzel-fahrzeugtechnik.de/service/glasService'
        }
      ]
    }
  },
}
</script>