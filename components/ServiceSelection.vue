<template>
    <div class="serviceView_overview">
        <NuxtLink class="serviceView_overview_container" to="/tuevcalculator">
            <h3>Plaketten Rechner</h3>
            <TuevIcon :fontSize="'1.5'" />
            <p>Sie möchten wissen wann sie wieder zum TÜV müssen?</p>
            <div class="checked_list">
                <p>Einfach zu bedienen</p>
                <p>Schnelle Eingabe</p>
                <p>Live Ergebnis</p>
            </div>
        </NuxtLink>
        <NuxtLink class="serviceView_overview_container" to="/service/ac">
            <h3>Klimaanlagenservice</h3>
            <ImageComponent class="serviceView_overview_container_image" image="clima_device.webp" />
            <p>Der Klimaanlagenservice sorgt für Komfort während der Fahrt.</p>
            <div class="checked_list">
                <p>Verbesserte Luftqualität</p>
                <p>Optimale Luftentfeuchtung</p>
                <p>Vermeidung von Beschlag auf den Scheiben</p>
                <p>Angenehmen Temperatur im Auto</p>
            </div>
        </NuxtLink>
        <NuxtLink class="serviceView_overview_container" to="/service/tires">
            <h3>Reifen und Räder</h3>
            <ImageComponent class="serviceView_overview_container_image" image="tire_upclose.webp" />
            <p>Der Reifenservice und -wechsel sind
                wichtig für die Fahrsicherheit, insbesondere bei wechselnden Wetterbedingungen.</p>
            <div class="checked_list">
                <p>Verbesserte Fahrsicherheit</p>
                <p>Besserer Grip und Traktion</p>
                <p>Erhöhter Fahrkomfort</p>
                <p>Optimale Kraftstoffeffizienz</p>
            </div>
        </NuxtLink>
        <NuxtLink class="serviceView_overview_container" to="/service/repair">
            <h3>Unfallreparaturen</h3>
            <RepairServiceCluster />
            <p>Unfallinstandsetzungen stellen sicher, dass Ihr Fahrzeug nach
                einem Unfall wieder in den Originalzustand versetzt wird.</p>
            <div class="checked_list">
                <p>Wiederherstellung der Fahrzeugstruktur</p>
                <p>Verwendung von Originalteilen</p>
                <p>Sicherstellung der Fahrzeugsicherheit</p>
                <p>Vermeidung von Folgeschäden</p>
            </div>
        </NuxtLink>
        <NuxtLink class="serviceView_overview_container" to="/service/glasservice">
            <h3>Glasschäden</h3>
            <ImageComponent class="serviceView_overview_container_image" image="holding_windshield.webp" />
            <p> Der Glasschaden-Service ist eine wichtige Dienstleistung, die Wir anbieteten, um die Sicherheit und
                Sichtbarkeit Ihres Fahrzeugs zu gewährleisten.</p>
            <div class="checked_list">
                <p>Verbesserte Sicht</p>
                <p>Erhöhte Sicherheit</p>
                <p>Weniger Blendung</p>
                <p>Strukturelle Integrität des Fahrzeugs</p>
            </div>
        </NuxtLink>
        <NuxtLink class="serviceView_overview_container" to="/service/oilchange">
            <h3>Ölwechsel</h3>
            <ImageComponent class="serviceView_overview_container_image" image="oil_change_device.webp" />
            <p>Ölwechsel und
                Flüssigkeitsprüfungen tragen zur Langlebigkeit des Motors bei.</p>
            <div class="checked_list">
                <p>Reduzierter Motorverschleiß</p>
                <p>Verbesserte Schmierung</p>
                <p>Erhöhte Zuverlässigkeit</p>
                <p>Effiziente Leistung</p>
            </div>
        </NuxtLink>
        <NuxtLink class="serviceView_overview_container" to="/service/tuev">
            <h3>Hauptuntersuchung und Abgasuntersuchung</h3>
            <ImageComponent class="serviceView_overview_container_image" image="teuv_sign.webp" />
            <p>Regelmäßige Inspektionen und Wartungen sind entscheidend, um die Sicherheit und Zuverlässigkeit Ihres
                Fahrzeugs zu gewährleisten.</p>
            <div class="checked_list">
                <p>Erhöhte Sicherheit</p>
                <p>Schnell wieder unterwegs</p>
                <p>Frühzeitige Erkennung von Mängeln</p>
                <p>Reduzierte Umweltbelastung</p>
            </div>
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
            max-height: 500px;
            padding: $gap;
            width: calc(100% - $gap * 2);
            border-radius: $border-radius;
            @include theme_based_morphism_shadow;

            &_image {
                display: flex;
                justify-content: center;
                padding: 0 10px;

                img {
                    max-width: 100%;
                    border-radius: $border-radius;
                    margin: 5px;
                }
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