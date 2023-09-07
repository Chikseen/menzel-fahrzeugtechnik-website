<template>
  <div>
    <h2>Unfallreparaturen</h2>
    <ul>
      <li>Versicherungsschadenabwicklung</li>
      <li>Hol- und Bringeservice</li>
      <li>Werkstattersatzwagen</li>
      <li>Smartrepair</li>
    </ul>
  </div>
</template>

<script setup>
useSeoMeta({
  title: "Menzel - Unfallreparaturen",
  meta: [
    {
      hid: 'description_repair',
      name: 'description',
      content: 'Unfallreparaturen'
    },
    {
      hid: 'keywords_repair',
      name: 'keywords',
      content: 'Unfall, Reperatur, Unabhänig, Frei, schnell, gut, Versicherung, Abhol, Bring, Service, Ersatz, Wagen'
    },
  ],
  link: [
    {
      hid: 'canonical',
      rel: 'canonical',
      href: 'https://menzel-fahrzeugtechnik.de/service/repair'
    }
  ]
})
definePageMeta({
  keepalive: true,
  scrollToTop: false,
})
</script>