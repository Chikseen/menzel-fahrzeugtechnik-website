<template>
	<MainContentWrapper>
		<p class="index_title"> Herzlich willkommen bei</p>
		<div class="imageContainer">
			<NuxtImg src="images/teuv_sign.webp" alt="Bild vom Eingangsschild" format="webp" fit='outside'
				sizes="xs:300px sm:325px md:350px lg:375px xl:400px" densities="x1 x2 x3" width="460" height="330" />
		</div>
		<ServiceSelection />
		<div class="imageContainer">
			<a href="/images/standing_under_car_II.webp">
				<NuxtImg src="/images/standing_under_car_II.webp" alt="Inhaber steht unter einem Auto" format="webp"
					fit='outside' sizes="xs:300px sm:325px md:350px lg:375px xl:400px" densities="x1 x2 x3" width="690"
					height="920" />
			</a>
			<a href="/images/repair_area.webp">
				<NuxtImg src="/images/repair_area.webp" alt="Blick in die Werkstatt" format="webp" fit='outside'
					sizes="xs:300px sm:325px md:350px lg:375px xl:400px" densities="x1 x2 x3" loading="lazy" width="690"
					height="920" />
			</a>
			<a href="/images/home_gen_view.webp">
				<NuxtImg src="/images/home_gen_view.webp" alt="Blick in die Werkstatt" format="webp" fit='outside'
					sizes="xs:300px sm:325px md:350px lg:375px xl:400px" densities="x1 x2 x3" width="690" height="920" />
			</a>
			<a href="/images/smart_in_transporter.webp">
				<NuxtImg src="/images/smart_in_transporter.webp" alt="Smart in einem Transporter" format="webp"
					fit='outside' sizes="xs:300px sm:325px md:350px lg:375px xl:400px" densities="x1 x2 x3" width="625"
					height="920" />
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

	&_img {
		max-width: 300px;
		object-fit: fill;
	}
}
</style>