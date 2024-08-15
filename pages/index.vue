<template>
	<MainContentWrapper>
		<ServiceSelection />
		<div class="imageContainer">
			<ImageComponent image="standing_under_car_II.webp" />
			<ImageComponent image="repair_area.webp" />
			<ImageComponent image="home_gen_view.webp" />
			<ImageComponent image="smart_in_transporter.webp" />
		</div>
	</MainContentWrapper>
</template>

<script>
export default {
	name: 'Home',
}
</script>

<script setup>
useSeoMeta({
	title: 'Menzel - Home',
	meta: [
		{
			hid: 'description_home',
			name: 'description',
			content:
				'Informationen über die wichtigsten Leistungen und Angebote von Menzel Fahrzeugtechnik',
		},
		{
			hid: 'keywords_home',
			name: 'keywords',
			content: 'Home. index, KFZ, services, Leistungen',
		},
	],
	link: [
		{
			hid: 'canonical',
			rel: 'canonical',
			href: 'https://menzel-fahrzeugtechnik.de/home',
		},
	],
})
definePageMeta({
	keepalive: true,
	scrollToTop: false,
})
</script>