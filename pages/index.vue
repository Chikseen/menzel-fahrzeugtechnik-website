<template>
	<div class="home">
		<div class="home_content">
			<div class="home_image">
				<NuxtImg fit="outside"
					:src="`${config.public.contentBaseUrl}/${config.public.containerName}/${'standing_under_car_II.webp'}`"
					provider="edgio" quality="100" alt="background Image"
					sizes="150px xs:300px sm:500px md:750px lg:1250 xl:1500 xxl:1960 2xl:2560 3xl:3840 " />
				<span class="home_image_text">
					<span class="home_image_text_titel">
						<span>
							<h1>Menzel Fahrzeugtechnik</h1>
							<h4>Fachmännische Autoreparaturen, damit Sie schnell und sicher wieder auf
								die
								Straße kommen</h4>
						</span>
						<button class="home_image_text_button" @click="scrollToSerivces">
							Leistungen
						</button>
					</span>
				</span>
			</div>
			<div id="services" class="home_content_info">
				<h2>Alles für dein Fahrzeug</h2>
				<ServiceSelection />
				<div class="imageContainer">
					<ImageComponent image="standing_under_car_II.webp" />
					<ImageComponent image="repair_area.webp" />
					<ImageComponent image="home_gen_view.webp" />
					<ImageComponent image="smart_in_transporter.webp" />
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Home',
	data() {
		return {
			config: useRuntimeConfig()
		}
	},
	methods: {
		scrollToSerivces() {
			const element = document.getElementById("services");
			element.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
		}
	}
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

<style lang="scss" scoped>
#services {
	margin-top: 100px;
}

.home {
	margin-top: $header_hight;
	position: relative;
	width: 100dvw;
	height: 100vh;
	padding: 0;
	//overflow-x: hidden;
	//overflow-y: scroll;
	scroll-behavior: smooth;

	&_content {
		display: flex;
		flex-direction: column;
		height: min-content;

		&_info {
			position: relative;
			display: flex;
			flex-direction: column;
			gap: 20px;
			min-height: calc(100vh - $header_hight);
			padding: 15px;
			z-index: 10;
			@include theme_based_background;
		}
	}

	&_image {
		position: relative;
		display: flex;
		justify-content: center;
		height: calc(100vh - $header_hight);
		width: 100dvw;
		margin: 0 auto;
		//overflow: hidden;

		&_text {
			position: absolute;
			top: 0;
			left: 0;
			height: calc(100vh - $header_hight);
			width: 100dvw;

			&_titel {
				position: absolute;
				left: 15px;
				right: 15px;
				top: 0;
				bottom: 15%;
				max-width: $max_content_width;
				margin: auto;
				display: flex;
				flex-direction: column;
				justify-content: center;
				color: $light-font-color;
			}

			&_button {
				@include mono_akzent_blue_cta;
			}

			h1,
			h4,
			p {
				padding: 15px 0;
			}

			button {
				cursor: pointer;
				max-width: min-content;
				padding: 12px 28px;
				background-color: $company_blue;
				color: $light-font-color;
				border: none;
				font-size: larger;
				border-radius: $border-radius
			}
		}

		img {
			position: fixed;
			width: 100dvw;
			height: 100vh;
			margin: 0 auto;
			object-fit: cover;
			object-position: 50% 50%;
			filter: brightness(0.5);
		}
	}
}
</style>
