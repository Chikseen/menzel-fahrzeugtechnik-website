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
			name: 'robots',
			content: 'noindex'
		},
	],
	link: [
		{
			hid: 'service_canonical',
			rel: 'canonical',
			href: 'https://www.menzel-fahrzeugtechnik.de/service'
		}
	],
})
definePageMeta({
	keepalive: true,
	scrollToTop: false,
})
</script>