<template>
    <div class="serviceView_overview">
        <NuxtLink class="serviceView_overview_container" to="/tuevcalculator">
            <h3>Plaketten Rechner</h3>
            <TuevIcon :fontSize="'1.5'" />
            <p>Sie möchten wissen wann sie wieder zum TÜV müssen?</p>
        </NuxtLink>
        <NuxtLink class="serviceView_overview_container" to="/service/ac">
            <h3>Klimaanlagenservice</h3>
            <ACIcon />
            <p>Der Klimaanlagenservice sorgt für Komfort während der Fahrt.</p>
        </NuxtLink>
        <NuxtLink class="serviceView_overview_container" to="/service/tires">
            <h3>Reifen und Räder</h3>
            <WheelIcon />
            <p>Der Reifenservice und -wechsel sind
                wichtig für die Fahrsicherheit, insbesondere bei wechselnden Wetterbedingungen.</p>
        </NuxtLink>
        <NuxtLink class="serviceView_overview_container" to="/service/repair">
            <h3>Unfallreparaturen</h3>
            <RepairServiceCluster />
            <p>Unfallinstandsetzungen stellen sicher, dass Ihr Fahrzeug nach
                einem Unfall wieder in den Originalzustand versetzt wird.</p>
        </NuxtLink>
        <NuxtLink class="serviceView_overview_container" to="/service/glasservice">
            <h3>Glasschäden</h3>
            <WindowIcon />
            <p> Der Glasschaden-Service ist eine wichtige Dienstleistung, die Wir anbieteten, um die Sicherheit und
                Sichtbarkeit Ihres Fahrzeugs zu gewährleisten.</p>
        </NuxtLink>
        <NuxtLink class="serviceView_overview_container" to="/service/oilchange">
            <h3>Ölwechsel</h3>
            <OilChangeIcon />
            <p>Ölwechsel und
                Flüssigkeitsprüfungen tragen zur Langlebigkeit des Motors bei.</p>
        </NuxtLink>
        <NuxtLink class="serviceView_overview_container" to="/service/tuev">
            <h3>Hauptuntersuchung und Abgasuntersuchung</h3>
            <TuevIcon :fontSize="'1.5'" />
            <p>Regelmäßige Inspektionen und Wartungen sind entscheidend, um die Sicherheit und Zuverlässigkeit Ihres
                Fahrzeugs zu gewährleisten.</p>
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
        gap: $gap;
        margin: 0 10px;

        &_container {
            cursor: pointer;
            display: flex;
            flex-direction: column;
            max-height: 250px;
            padding: $gap;
            width: calc(100% - $gap * 2);
            border-radius: $border-radius;
            @include theme_based_morphism_shadow;

            &>div {
                height: 120px;
            }

            & h3 {
                margin: 0 auto;
                position: relative;
                font-weight: 750;
                text-decoration: none;
            }

            & p {
                position: relative;
                text-decoration: none;
            }
        }

        a {
            text-decoration: none;
        }
    }
}
</style>