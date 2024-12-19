<template>
    <div class="serviceContent">
        <h2>Ölwechsel</h2>
        <p>
            Der Ölwechsel ist ein essenzieller Service, der von uns angeboten wird, um die Langlebigkeit und
            Leistungsfähigkeit Ihres Fahrzeugs sicherzustellen. Das Motoröl spielt eine entscheidende Rolle in der
            Schmierung, Kühlung und Reinigung des Motors, wodurch Reibung und Verschleiß minimiert werden. Regelmäßige
            Ölwechsel tragen dazu bei, dass Ihr Motor reibungslos läuft und seine volle Leistung erbringt.
        </p>
        <div class="imageContainer">
            <ImageComponent image="oil_change_device.webp" />
        </div>
        <div class="checked">
            <div class="checked_list">
                <p>Reduzierter Motorverschleiß</p>
                <p>Verbesserte Schmierung</p>
                <p>Erhöhte Zuverlässigkeit</p>
                <p>Effiziente Leistung</p>
            </div>
        </div>
        <div class="serviceContent_banner">
            <h3>Empfohlene Intervalle</h3>
            <p>
                Der Ölwechsel sollte regelmäßig durchgeführt werden, um Schäden am Motor zu vermeiden. Abhängig vom
                Fahrzeug und der Art des verwendeten Öls wird der Ölwechsel in der Regel alle 15.000 bis 30.000
                Kilometer oder mindestens einmal im Jahr empfohlen. Bei intensiver Nutzung oder häufigem Fahren
                unter
                extremen Bedingungen kann ein kürzeres Intervall notwendig sein.
            </p>
        </div>
        <div class="serviceContent_banner">
            <h3>Kompletter Ölwechsel</h3>
            <p>
                Bei einem Ölwechsel wird das alte Motoröl vollständig abgelassen und durch neues, hochwertiges Öl
                ersetzt. Dies gewährleistet, dass der Motor stets optimal geschmiert und vor Verschleiß geschützt
                ist.
            </p>
        </div>
        <div class="serviceContent_banner">
            <h3>Wechsel des Ölfilters</h3>
            <p>
                Neben dem Motoröl wird auch der Ölfilter ausgetauscht. Der Ölfilter spielt eine wichtige Rolle
                dabei,
                Verunreinigungen wie Schmutz und Metallpartikel aus dem Öl zu filtern, bevor sie in den Motor
                gelangen
                können. Ein verstopfter Filter kann die Schmierfähigkeit des Öls erheblich beeinträchtigen.
            </p>
        </div>
        <div class="serviceContent_banner">
            <h3>Verwendung des richtigen Motoröls</h3>
            <p>
                Je nach Fahrzeugmodell und Herstellerempfehlung verwendet die Werkstatt das passende Motoröl für Ihr
                Fahrzeug. Hierbei wird zwischen mineralischem, halbsynthetischem und vollsynthetischem Öl
                unterschieden,
                wobei moderne Fahrzeuge in der Regel vollsynthetische Öle verwenden, die für bessere Leistung und
                längere Intervalle zwischen den Ölwechseln sorgen.
            </p>
        </div>
        <div class="serviceContent_banner">
            <h3>Überprüfung des Ölstands und der Qualität</h3>
            <p>
                Vor dem Ölwechsel wird der aktuelle Ölstand überprüft, ebenso wie die Konsistenz und Farbe des Öls.
                Dies
                kann Hinweise auf den Zustand des Motors geben, z. B. ob das Öl durch Schmutz oder Metallspäne
                verunreinigt ist oder ob es Anzeichen für einen übermäßigen Ölverbrauch gibt.
            </p>
        </div>
        <div class="serviceContent_banner">
            <h3>Überprüfung weiterer Flüssigkeiten</h3>
            <p>
                Oft wird der Ölwechsel-Service durch die Überprüfung anderer wichtiger Flüssigkeiten im Fahrzeug
                ergänzt. Dazu gehören Kühlflüssigkeit, Bremsflüssigkeit, Getriebeöl und Scheibenwaschwasser, um
                sicherzustellen, dass alle Systeme des Fahrzeugs ordnungsgemäß funktionieren.
            </p>
        </div>
        <div class="serviceContent_banner">
            <h3>Umweltgerechte Entsorgung</h3>
            <p>
                Das Altöl und der alte Ölfilter werden umweltgerecht entsorgt, da diese Materialien Schadstoffe
                enthalten, die die Umwelt belasten könnten. Wir achteten auf eine fachgerechte Entsorgung gemäß den
                gesetzlichen Vorschriften.
            </p>
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
})
definePageMeta({
    keepalive: true,
    scrollToTop: false,
})
</script>