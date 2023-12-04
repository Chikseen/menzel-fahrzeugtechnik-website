<template>
	<MainContentWrapper>
		<PageTitelWrapper>
			<h1>Unsere Leistungen</h1>
		</PageTitelWrapper>
		<router-view></router-view>
		<p>Wir sind für Sie da</p>
		<p>Klicken sie auf eine Leistung um mehr zu erfahren</p>
		<ServiceSelection />
	</MainContentWrapper>
</template>

<script setup>
useSeoMeta({
	title: "Menzel - Leistungen",
	meta: [
		{
			hid: 'description_service',
			name: 'description',
			content: 'Alle Leistungen und Angebote von Menzel Fahrzeugtechnik'
		},
		{
			hid: 'keywords_service',
			name: 'keywords',
			content: 'Leistungen, Services, Übersicht, alle'
		},
	],
	link: [
		{
			hid: 'canonical',
			rel: 'canonical',
			href: 'https://menzel-fahrzeugtechnik.de/service'
		}
	]
})
definePageMeta({
	keepalive: true,
	scrollToTop: false,
})
</script>