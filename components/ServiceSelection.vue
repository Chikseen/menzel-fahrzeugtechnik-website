<template>
    <div class="serviceView_overview">
        <NuxtLink class="serviceView_overview_container" to="/tuevcalculator">
            <p>Plaketten Rechner</p>
            <TuevIcon :fontSize="'1.5'" />
        </NuxtLink>
        <NuxtLink class="serviceView_overview_container" to="/service/ac">
            <p>Klimaanlagenservice</p>
            <ACIcon />
        </NuxtLink>
        <NuxtLink class="serviceView_overview_container" to="/service/tires">
            <p>Reifen und Räder</p>
            <WheelIcon />
        </NuxtLink>
        <NuxtLink class="serviceView_overview_container" to="/service/repair">
            <p>Unfallreparaturen</p>
            <RepairServiceCluster />
        </NuxtLink>
        <NuxtLink class="serviceView_overview_container" to="/service/glasservice">
            <p>Glasschäden</p>
            <WindowIcon />
        </NuxtLink>
        <NuxtLink class="serviceView_overview_container" to="/service/oilchange">
            <p>Ölwechsel</p>
            <OilChangeIcon />
        </NuxtLink>
        <NuxtLink class="serviceView_overview_container" to="/service/tuev">
            <p>Hauptuntersuchung und Abgasuntersuchung</p>
            <TuevIcon :fontSize="'1.5'" />
        </NuxtLink>
    </div>
</template>

<script>

export default {
    name: "serviceSelection",
    head() {
        return {
            title: "Menzel - Service",
            meta: [
                {
                    hid: 'description_service',
                    name: 'description',
                    content: 'Alle Leistungen und Angebote von Menzel Fahrzeugtechnik'
                },
                {
                    hid: 'keywords_service',
                    name: 'keywords',
                    content: 'Leistungen'
                },
            ],
            link: [
                {
                    hid: 'canonical',
                    rel: 'canonical',
                    href: 'https://menzel-fahrzeugtechnik.de/service'
                }
            ]
        }
    },
    methods: {
        scrollToTop() {
            window.scroll({
                top: 0,
                behavior: 'smooth'
            });
        }
    },
}
</script>

<style lang="scss">
.serviceView {
    &_overview {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 20px;

        &_container {
            cursor: pointer;
            display: flex;
            flex-direction: column;
            height: 200px;
            padding: 15px;
            width: calc(100% - 30px);
            border-radius: $border-radius;
            @include theme_based_morphism_shadow;

            &>div {
                height: 120px;
            }

            & p {
                position: relative;
                font-weight: 750;
                text-decoration: none;
            }
        }

        a {
            text-decoration: none;
        }
    }
}
</style>