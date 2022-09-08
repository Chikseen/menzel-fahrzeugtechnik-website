<template>
    <div :class="['serviceView_overview', $device.isMobile && this.$route.name != 'home'? 'mobileOffset' : '']" @click="scrollToTop">
        <NuxtLink class="serviceView_overview_container" to="/service/tuev">
            <p>Hauptuntersuchung und Abgasuntersuchung</p>
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
            <RepairService />
        </NuxtLink>
        <NuxtLink class="serviceView_overview_container" to="/service/glasservice">
            <p>Glasschäden</p>
            <WindowIcon />
        </NuxtLink>
        <NuxtLink class="serviceView_overview_container" to="/service/oilchange">
            <p>Ölwechsel</p>
            <OilChangeIcon />
        </NuxtLink>
    </div>
</template>

<script>
import TuevIcon from '@/assets/icons/TuevIcon.vue'
import WheelIcon from '@/assets/icons/WheelIcon2.vue'
import ACIcon from '@/assets/icons/ACIcon.vue'
import RepairService from '@/assets/icons/repairService/RepairServiceCluster.vue'
import WindowIcon from '@/assets/icons/WindowIcon.vue'
import OilChangeIcon from '@/assets/icons/OilChangeIcon.vue'

export default {
    name: "serviceSelection",
    head() {
        return {
            title: "Leistungen",
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
    components: {
        TuevIcon,
        WheelIcon,
        ACIcon,
        RepairService,
        WindowIcon,
        OilChangeIcon,
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
        gap: 10px;
        margin: 30px;

        &_container {
            cursor: pointer;
            display: flex;
            flex-direction: column;
            height: 200px;
            width: 100%;
            border-radius: 5px;
            box-shadow: 1px 1px 7px 1px lighten($company_blue, 78);

            & div {
                height: 120px;
            }

            & p {
                position: relative;
                font-weight: 750;
            }

        }

        & a {
            text-decoration: none;
        }
    }
}
</style>