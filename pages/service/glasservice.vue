<template>
  <div class="serviceContent">
    <h2>Glasschäden</h2>
    <p>
      Der Glasschaden-Service ist eine wichtige Dienstleistung, die Wir anbieteten, um die Sicherheit und
      Sichtbarkeit Ihres Fahrzeugs zu gewährleisten. Glasschäden an Autos, wie Steinschläge oder Risse in der
      Windschutzscheibe, können die Sicht beeinträchtigen und das Risiko von Unfällen erhöhen. Die schnelle Reparatur
      oder der Austausch beschädigter Scheiben ist daher unerlässlich, um die Stabilität und Sicherheit des Fahrzeugs zu
      gewährleisten.
    </p>
    <div class="imageContainer">
      <ImageComponent image="holding_windshield.webp" />
    </div>
    <div class="checked">
      <div class="checked_list">
        <p>Verbesserte Sicht</p>
        <p>Erhöhte Sicherheit</p>
        <p>Weniger Blendung</p>
        <p>Strukturelle Integrität des Fahrzeugs</p>
      </div>
    </div>
    <div class="serviceContent_banner">
      <h3>Steinschlagreparatur</h3>
      <p>
        Kleinere Steinschläge in der Windschutzscheibe können oft schnell und kostengünstig repariert werden, ohne die
        gesamte Scheibe austauschen zu müssen. Dabei wird ein spezielles Harz in die beschädigte Stelle eingefüllt und
        unter UV-Licht ausgehärtet, wodurch der Schaden nahezu unsichtbar wird und die Stabilität der Scheibe
        wiederhergestellt ist. Diese Reparatur ist besonders sinnvoll, wenn der Steinschlag nicht im Sichtfeld des
        Fahrers liegt und die Bruchstelle kleiner als eine 2-Euro-Münze ist.
      </p>
    </div>
    <div class="serviceContent_banner">
      <h3>Austausch der Windschutzscheibe</h3>
      <p>
        Wenn der Schaden zu groß oder der Riss zu tief ist, wird die komplette Windschutzscheibe ausgetauscht. Wir
        verwenden hierbei ausschließlich Scheiben in Erstausrüsterqualität, die passgenau für Ihr Fahrzeugmodell
        gefertigt sind. Ein Scheibenaustausch dauert in der Regel wenige Stunden und gewährleistet, dass Ihr Fahrzeug
        wieder sicher auf die Straße kann.
      </p>
    </div>
    <div class="serviceContent_banner">
      <h3>Seiten- und Heckscheiben</h3>
      <p>
        Neben der Windschutzscheibe können auch die Seiten- und Heckscheiben beschädigt werden, z. B. durch
        Einbruchsversuche oder Unfälle. Diese Scheiben werden bei Bedarf ebenfalls schnell und fachgerecht ausgetauscht.
        Hierbei wird darauf geachtet, dass die neuen Scheiben sowohl in puncto Qualität als auch Tönung den Vorgaben des
        Herstellers entsprechen.
      </p>
    </div>
    <div class="serviceContent_banner">
      <h3>Kalibrierung von Fahrassistenzsystemen</h3>
      <p>
        Moderne Fahrzeuge sind oft mit Kameras und Sensoren in der Windschutzscheibe ausgestattet, die für
        Fahrerassistenzsysteme wie Spurhalteassistent oder Notbremsassistent wichtig sind. Nach einem Scheibenaustausch
        müssen diese Systeme kalibriert werden, um sicherzustellen, dass sie weiterhin einwandfrei funktionieren.
      </p>
    </div>
    <div class="serviceContent_banner">
      <h3>Abwicklung über die Versicherung</h3>
      <p>
        In vielen Fällen werden Glasschäden von der Teilkaskoversicherung abgedeckt. Wir helfen Ihnen bei der
        Schadensmeldung und übernimmt die direkte Abrechnung mit Ihrer Versicherung. Oft fallen für die Reparatur oder
        den Austausch der Scheibe nur geringe Kosten an, wenn Sie teilkaskoversichert sind - meist lediglich die
        vereinbarte Selbstbeteiligung.
      </p>
    </div>
  </div>
</template>

<script setup>
import { useSchemaOrg } from '#imports'

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
      hid: 'service_glasService_canonical',
      rel: 'canonical',
      href: 'https://www.menzel-fahrzeugtechnik.de/service/glasService'
    }
  ]
})
definePageMeta({
  keepalive: true,
  scrollToTop: false,
})
useSchemaOrg([
  defineBreadcrumb({
    itemListElement: [
      { name: 'Home', item: '/' },
      { name: 'Services', item: '/services' },
      { name: 'Glasschäden', item: '/services/glasService' }
    ]
  }),
])
</script>