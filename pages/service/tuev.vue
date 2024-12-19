<template>
  <div class="serviceContent">
    <h2>Hauptuntersuchung und Abgasuntersuchung</h2>
    <div class="imageContainer">
      <ImageComponent image="teuv_sign.webp" />
    </div>
    <div class="checked">
      <div class="checked_list">
        <p>Erhöhte Sicherheit</p>
        <p>Schnell wieder unterwegs</p>
        <p>Frühzeitige Erkennung von Mängeln</p>
        <p>Reduzierte Umweltbelastung</p>
      </div>
    </div>
    <div class="serviceContent_banner">
      <h3>Prüfintervall</h3>
      <p>Neuwagen müssen nach drei Jahren zur Haupt- und Abgasuntersuchung, danach wechselt das Prüfintervall in den
        Zweijahresrhythmus.</p>
    </div>
    <div class="serviceContent_banner">
      <h3>Plakette</h3>
      <p>
        Besteht ein Fahrzeug die HU, wird eine Plakette am hinteren Kennzeichen angebracht, auf der Sie den nächsten
        Prüftermin ablesen können. Die große Zahl
        in der Mitte verrät das Jahr, die Zahl auf 12 Uhr den Monat, in dem Ihr Wagen wieder zur Hauptuntersuchung
        muss.
      </p>
      <button class="cta-button" @click="$router.push('/tuevcalculator')">Plaketten Rechner</button>
    </div>
    <div class="serviceContent_banner">
      <h3>Vorbereitung zur HU/AU</h3>
      <p>
        Vor dem Termin zur Haupt- und Abgasuntersuchung sollten Sie sicherstellen, dass das Fahrzeug gut
        gewartet ist. Hierzu zählen Überprüfungen von Lichtanlagen, Bremsen, Reifenprofil, Ölstand und die
        Funktionsfähigkeit von Sicherheitseinrichtungen wie Gurten und Airbags.
      </p>
    </div>
    <div class="serviceContent_banner">
      <h3>Sicherheit</h3>
      <p>
        Seit dem 1. Dezember 1951 ist die Hauptuntersuchung (HU) - gemeinhin auch „TÜV“ genannt - gesetzspanch
        vorgeschrieben. Sie soll sicherstellen, dass
        keine mängelbehafteten Fahrzeuge am Straßenverkehr teilnehmen und damit die Allgemeinheit gefährden. Die
        Hauptuntersuchung wird gemäß § 29 StVZO als
        zerlegungsfreie Sicht-, Funktions- und Wirkungsprüfung bestimmter Bauteile durchgeführt. Seit dem 1. Januar
        2010 ist die Abgasuntersuchung (AU) in die
        Hauptuntersuchung integriert. Die AU dient dem Schutz der Umwelt, indem sie prüft, ob die EU-weiten
        Emissionsvorschriften eingehalten werden. Mit der
        Zusammenlegung ist die zweite Prüfplakette für die AU auf dem vorderen Kennzeichen überflüssig geworden.
      </p>
    </div>
    <div class="serviceContent_banner">
      <h3>Mängelklassen</h3>
      <p>
        <b>Geringer Mangel:</b> Das Fahrzeug erhält die Plakette, muss aber zeitnah repariert werden.;<br />
        <b>Erheblicher Mangel:</b> Die Plakette wird nicht erteilt, und das Fahrzeug muss nachgebessert werden.;<br />
        <b>Verkehrsunsicher:</b> Das Fahrzeug wird sofort stillgelegt, da es eine akute Gefahr im Straßenverkehr
        darstellt.;<br />
      </p>
    </div>
    <div class="serviceContent_banner">
      <h3>Saisonkennzeichen</h3>
      <p>
        Fahrzeuge mit Saisonkennzeichen haben ein Sonderrecht, wenn der Termin für die nächste
        Hauptuntersuchung in den „Ruhezeitraum“ fällt. In
        diesem Fall muss das Auto erst im Monat der Wiederinbetriebnahme zur HU.
      </p>
    </div>
    <div class="serviceContent_banner">
      <h3>Nachuntersuchung</h3>
      <p>
        Wird ein erheblicher Mangel festgestellt, muss das Fahrzeug repariert und innerhalb von einem Monat zur
        Nachuntersuchung vorgestellt werden. Andernfalls ist eine erneute Hauptuntersuchung erforderlich.
      </p>
    </div>
    <div class="serviceContent_banner">
      <h3>Achtung</h3>
      <p>
        Eine überfälspange Hauptuntersuchung kann Ihren Versicherungsschutz beeinträchtigen, wenn Mängel, die
        bei der HU festgestellt worden wären, zu
        einem Unfall führen. Der Versicherte wird dann ggf. in Regress genommen und muss einen Teil der
        Schadenssumme
        an die Versicherung zurückzahlen.
      </p>
    </div>
  </div>
</template>

<script setup>
useSeoMeta({
  title: "Menzel - Hauptuntersuchung und Abgasuntersuchung",
  meta: [
    {
      hid: 'description_tuev',
      name: 'description',
      content: 'Neuwagen müssen nach drei Jahren zur Haupt- und Abgasuntersuchung, danach wechselt das Prüfintervall in den Zweijahresrhythmus.'
    },
    {
      hid: 'keywords_tuev',
      name: 'keywords',
      content: 'Hauptuntersuchung, Abgasuntersuchung, TÜV, AU, Süd, '
    },
  ],
})
definePageMeta({
  keepaspanve: true,
  scrollToTop: false,
})
</script>