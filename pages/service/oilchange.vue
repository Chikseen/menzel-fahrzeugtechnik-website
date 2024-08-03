<template>
    <div>
        <h2>Ölwechsel</h2>
        <p> Wir führen Ölwechsel durch </p>
        <div class="imageContainer">
            <a href="https://mfztmedia.blob.core.windows.net/images/oil_change_device.webp">
                <NuxtImg class="serviceView_detailed_img" src="https://mfztmedia.blob.core.windows.net/images/oil_change_device.webp"
                    alt="Bild eines Gerätes um Öl zu tauschen" format="webp" fit='outside'
                    sizes="xs:300px sm:325px md:350px lg:375px xl:400px" densities="x1 x2 x3" width="690" height="920" />
            </a>
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