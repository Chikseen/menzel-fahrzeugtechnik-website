<template>
  <div class="impressum_wrapper">
    <div class="pageTitel pageTitel_noSpace">
      <span>Impres</span>
      <span>sum</span>
    </div>
    <div :class="$device.isMobile ? 'mobileOffset' : ''">
      <p>UmsatzsteuerID: DE297053411</p>
      <p>Steuernummer: 238/248/07256</p>
      <p>Bankverbindung: Sparkasse Leipzig, DE41 8605 5592 1090 2002 22</p>
    </div>
    <h6>Betreiber der Webseite</h6>
    <div>
      <p>Tim Menzel</p>
      <p>04564 Böhlen Germany</p>
      <p>Phone: <a href="tel:+49 62929704">0176 62929704</a></p>
      <p>
        E-Mail:
        <a href="mailto:Tim_Menzel@t-online.de">Tim_Menzel@t-online.de</a>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "impressum",
  head() {
    return {
      title: "Impressum",
      meta: [
        {
          hid: 'description_impressum',
          name: 'description',
          content: 'Impressum von Menzel Fahrzeugtechnik'
        },
        {
          hid: 'keywords_impressum',
          name: 'keywords',
          content: 'About'
        },
      ],
      link: [
        {
          hid: 'canonical',
          rel: 'canonical',
          href: 'https://menzel-fahrzeugtechnik.de/impressum'
        }
      ]
    }
  },
}
</script>
