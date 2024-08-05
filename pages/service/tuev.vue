<template>
  <div>
    <h2>Hauptuntersuchung und Abgasuntersuchung</h2>
    <div>
      <div class="imageContainer">
        <a href="https://mfzt-cdn.azureedge.net/images/teuv_sign.webp">
          <NuxtImg src="https://mfzt-cdn.azureedge.net/images/teuv_sign.webp" alt="Schild der Werkstatt" format="webp" fit='outside'
            sizes="xs:300px sm:325px md:350px lg:375px xl:400px" densities="x1 x2 x3" width="460" height="330" />
        </a>
      </div>
      <ul>
        <li>Neuwagen müssen nach drei Jahren zur Haupt- und Abgasuntersuchung, danach wechselt das Prüfintervall in den
          Zweijahresrhythmus.</li>
        <li>Die Hauptuntersuchung stellt die "Verkehrssicherheit, Vorschriftsmäßigkeit und Umweltverträglichkeit" der
          Fahrzeuge sicher.</li>
        <li>
          Seit dem 1. Dezember 1951 ist die Hauptuntersuchung (HU) - gemeinhin auch „TÜV“ genannt - gesetzlich
          vorgeschrieben. Sie soll sicherstellen, dass
          keine mängelbehafteten Fahrzeuge am Straßenverkehr teilnehmen und damit die Allgemeinheit gefährden. Die
          Hauptuntersuchung wird gemäß § 29 StVZO als
          zerlegungsfreie Sicht-, Funktions- und Wirkungsprüfung bestimmter Bauteile durchgeführt. Seit dem 1. Januar
          2010 ist die Abgasuntersuchung (AU) in die
          Hauptuntersuchung integriert. Die AU dient dem Schutz der Umwelt, indem sie prüft, ob die EU-weiten
          Emissionsvorschriften eingehalten werden. Mit der
          Zusammenlegung ist die zweite Prüfplakette für die AU auf dem vorderen Kennzeichen überflüssig geworden.
        </li>
        <li>
          Besteht ein Fahrzeug die HU, wird eine Plakette am hinteren Kennzeichen angebracht, auf der Sie den nächsten
          Prüftermin ablesen können. Die große Zahl
          in der Mitte verrät das Jahr, die Zahl auf 12 Uhr den Monat, in dem Ihr Wagen wieder zur Hauptuntersuchung
          muss.
        </li>
        <li>
          Übrigens: Fahrzeuge mit Saisonkennzeichen haben ein Sonderrecht, wenn der Termin für die nächste
          Hauptuntersuchung in den „Ruhezeitraum“ fällt. In
          diesem Fall muss das Auto erst im Monat der Wiederinbetriebnahme zur HU.
        </li>
        <li>
          Achtung: Eine überfällige Hauptuntersuchung kann Ihren Versicherungsschutz beeinträchtigen, wenn Mängel, die
          bei der HU festgestellt worden wären, zu
          einem Unfall führen. Der Versicherte wird dann ggf. in Regress genommen und muss einen Teil der Schadenssumme
          an die Versicherung zurückzahlen.
        </li>
      </ul>
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
  link: [
    {
      hid: 'canonical',
      rel: 'canonical',
      href: 'https://menzel-fahrzeugtechnik.de/service/tuev'
    }
  ]
})
definePageMeta({
  keepalive: true,
  scrollToTop: false,
})
</script>