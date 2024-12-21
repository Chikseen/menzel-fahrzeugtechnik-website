<template>
	<MainContentWrapper>
		<PageTitelWrapper>
			<h1>Impressum</h1>
		</PageTitelWrapper>
		<div>
			<h2>Informationen zum Unternehmen</h2>
			<p>Inhaber: Dirk Menzel</p>
			<p>Adresse: Städtelner Straße 62, 04416 Markkleeberg</p>
			<p>Telefon: 0341 35424333</p>
			<p>Umsatzsteuer-Identifikationsnummer gem&auml;&szlig; &sect; 27 a Umsatzsteuergesetz: DE297053411</p>
			<p>Steuernummer: 238/248/07256</p>
			<p>Bankverbindung: Sparkasse Leipzig, DE41 8605 5592 1090 2002 22</p>
		</div>
		<hr>
		<div>
			<p>Email Adresse für Allgemeine Informationen: info@menzel-fahrzeugtechnik.de</p>
			<p>Email Adresse für Rechnungen: rechnungen@menzel-fahrzeugtechnik.de</p>
		</div>
		<hr>
		<div>
			<h2>Betreiber der Webseite</h2>
			<p>Name: Tim Keutel</p>
			<p>Adresse: 04564 Böhlen Germany</p>
			<p>Telefon: <a href="tel:+49 62929704">0176 62929704</a></p>
			<p>
				E-Mail:
				<a href="mailto:tim@keutel.me">tim@keutel.me</a>
			</p>
			<p>
				Source:
				<a
					href="https://github.com/Chikseen/menzel-fahrzeugtechnik-website">Github/Chikseen/menzel-fahrzeugtechnik-website</a>
			</p>
			<p>Sie haben interesse an einer eigenen Website?</p>
			<p>Kontakieren sie mich!</p>
		</div>
	</MainContentWrapper>
</template>

<script setup>
useSeoMeta({
	title: "Menzel - Impressum",
	meta: [
		{
			hid: 'description_impressum',
			name: 'description',
			content: 'Impressum von Menzel Fahrzeugtechnik'
		},
		{
			hid: 'keywords_impressum',
			name: 'keywords',
			content: 'Impressum'
		},
	],
	link: [
		{
			hid: 'impressum_canonical',
			rel: 'canonical',
			href: 'https://www.menzel-fahrzeugtechnik.de/impressum'
		}
	]
})
definePageMeta({
	keepalive: true,
	scrollToTop: false,
})
</script>