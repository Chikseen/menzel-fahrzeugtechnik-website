<template>
	<MainContentWrapper>
		<PageTitelWrapper>
			<h1>Impressum</h1>
		</PageTitelWrapper>
		<div>
			<p>UmsatzsteuerID: DE297053411</p>
			<p>Steuernummer: 238/248/07256</p>
			<p>Bankverbindung: Sparkasse Leipzig, DE41 8605 5592 1090 2002 22</p>
		</div>
		<br>
		<div>
			<p>Betreiber der Webseite</p>
			<p>Tim Menzel</p>
			<p>04564 Böhlen Germany</p>
			<p>Phone: <a href="tel:+49 62929704">0176 62929704</a></p>
			<p>
				E-Mail:
				<a href="mailto:Tim_Menzel@t-online.de">Tim_Menzel@t-online.de</a>
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
			hid: 'canonical',
			rel: 'canonical',
			href: 'https://menzel-fahrzeugtechnik.de/impressum'
		}
	]
})
definePageMeta({
	keepalive: true,
	scrollToTop: false,
})
</script>