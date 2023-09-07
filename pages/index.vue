<template>
	<MainContentWrapper>
		<p class="index_title"> Herzlich willkommen bei</p>
		<NuxtImg src="images/teuv_sign.png" />
		<ServiceSelection />
		<div class="imageContainer">
			<a href="/images/standing_under_car_II.png">
				<NuxtImg src="/images/standing_under_car_II.png" alt="Inhaber steht unter einem Auto" loading="lazy"
					fit='outside' sizes="xs:300px sm:325px md:350px lg:375px xl:400px" densities="x1 x2 x3" />
			</a>
			<a href="/images/repair_area.png">
				<NuxtImg src="/images/repair_area.png" alt="Blick in die Werkstatt" loading="lazy" fit='outside'
					sizes="xs:300px sm:325px md:350px lg:375px xl:400px" densities="x1 x2 x3" />
			</a>
			<a href="/images/home_gen_view.png">
				<NuxtImg src="/images/home_gen_view.png" alt="Blick in die Werkstatt" loading="lazy" fit='outside'
					sizes="xs:300px sm:325px md:350px lg:375px xl:400px" densities="x1 x2 x3" />
			</a>
			<a href="/images/smart_in_transporter.png">
				<NuxtImg src="/images/smart_in_transporter.png" alt="Smart in einem Transporter" loading="lazy"
					fit='outside' sizes="xs:300px sm:325px md:350px lg:375px xl:400px" densities="x1 x2 x3" />
			</a>
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

<style lang="scss">
.index {
	&_title {
		font-size: 1.5rem;
	}
}
</style>