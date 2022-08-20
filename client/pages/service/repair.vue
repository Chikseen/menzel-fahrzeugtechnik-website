<template>
  <div>
    <h1>Unfallreparaturen</h1>
    <div class="serviceView_detailed_text">
      <ul>
        <li>Versicherungsschadenabwicklung</li>
        <li>Hol- und Bringeservice</li>
        <li>Werkstattersatzwagen</li>
        <li>Smartrepair</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "repair",
  head() {
    return {
      title: "Unfallreparaturen",
      meta: [
        {
          hid: 'description_repair',
          name: 'description',
          content: 'Unfallreparaturen'
        },
        {
          hid: 'keywords_repair',
          name: 'keywords',
          content: 'Unfallreparaturen'
        },
      ],
      link: [
        {
          hid: 'canonical',
          rel: 'canonical',
          href: 'https://menzel-fahrzeugtechnik.de/service/repair'
        }
      ]
    }
  },
}
</script>