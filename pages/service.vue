<template>
	<MainContentWrapper>
		<PageTitelWrapper>
			<h1>Unsere Leistungen</h1>
		</PageTitelWrapper>
		<router-view></router-view>
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
})
definePageMeta({
	keepalive: true,
	scrollToTop: false,
})
</script>