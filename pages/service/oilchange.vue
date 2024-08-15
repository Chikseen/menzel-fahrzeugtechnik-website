<template>
    <div>
        <h2>Ölwechsel</h2>
        <p> Wir führen Ölwechsel durch </p>
        <div class="imageContainer">
            <ImageComponent image="oil_change_device.webp" />
        </div>
    </div>
</template>

<script setup>
useSeoMeta({
    title: "Menzel - Ölwechel",
    meta: [
        {
            hid: 'description_uel',
            name: 'description',
            content: 'Ölwechel'
        },
        {
            hid: 'keywords_oel',
            name: 'keywords',
            content: 'Ölwechsel, Öl, tausch, wechsel, Motoren, Umweltgerecht'
        },
    ],
    link: [
        {
            hid: 'canonical',
            rel: 'canonical',
            href: 'https://menzel-fahrzeugtechnik.de/service/oilchange'
        }
    ]
})
definePageMeta({
    keepalive: true,
    scrollToTop: false,
})
</script>