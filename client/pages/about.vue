<template>
  <div :class="$device.isMobile ? 'mobileOffset' : ''"></div>
</template>

<script>
export default {
  name: "about",
  head() {
    return {
      title: "Über mich",
      meta: [
        {
          hid: 'description_about',
          name: 'description',
          content: 'Alle Informationen über denn Inhaber von Menzel Fahrzeugtechnik'
        },
        {
          hid: 'keywords_about',
          name: 'keywords',
          content: 'About'
        },
      ],
      link: [
        {
          hid: 'canonical',
          rel: 'canonical',
          href: 'https://menzel-fahrzeugtechnik.de/about'
        }
      ]
    }
  },
}
</script>