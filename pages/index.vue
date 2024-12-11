<template>
	<div class="home">
		<div class="home_content">
			<div class="home_image">
				<NuxtImg fit="outside"
					:src="`${config.public.contentBaseUrl}/${config.public.containerName}/${'standing_under_car_II.webp'}`"
					:placeholder="`${config.public.contentBaseUrl}/${config.public.containerName}/${'standing_under_car_II_placeholder.webp'}`"
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
				<p class="serviceContent_banner">Unsere Werkstatt bietet eine Vielzahl von Dienstleistungen an, um
					sicherzustellen, dass Ihr Fahrzeug
					in bestem Zustand bleibt. Dazu gehören regelmäßige Inspektionen und Wartungen, Reparaturen aller
					Art, Unfallinstandsetzungen, Reifenservice und -wechsel, Ölwechsel und Flüssigkeitsprüfungen,
					Bremsenservice, Diagnose und Fehlerbehebung, Klimaanlagenservice sowie elektronische
					Systemprüfungen.</p>
				<ServiceSelection />
			</div>
			<div class="home_content_info">
				<h2>Das sagen unsere Kunden</h2>
				<a
					href="https://www.google.com/search?sa=X&sca_esv=d7e7d90bd6b3a957&hl=en&authuser=0&tbm=lcl&sxsrf=ADLYWILu7dQrFkJQe-s1xJ1tkCTQY6FGuQ:1733935207026&q=Menzel+Fahrzeugtechnik+Reviews&rflfq=1&num=20&stick=H4sIAAAAAAAAAONgkxI2MzM1NzY3NDIyMje1MLc0NDM03sDI-IpRzjc1ryo1R8EtMaOoKrU0vSQ1OSMvM1shKLUsM7W8eBErAQUASHqSVFwAAAA&rldimm=6657371222758791613&ved=2ahUKEwjA4s-AlKCKAxVCRvEDHew0Lu8Q9fQKegQIQBAF&biw=1119&bih=785&dpr=1#lkt=LocalPoiReviews">
					<h6>Alle bewertungen</h6>
				</a>
				<CommentComponent />
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
			element.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "nearest" });
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
			hid: 'home_canonical',
			rel: 'canonical',
			href: 'www.https://menzel-fahrzeugtechnik.de/home',
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
	margin-top: calc($header_hight - $border-radius);
	position: relative;
	width: 100%;
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
			scroll-margin-top: calc($header_hight - $border-radius);
			display: flex;
			flex-direction: column;
			gap: $gap;
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
		width: 100%;
		margin: 0 auto;
		//overflow: hidden;

		&_text {
			position: absolute;
			top: 0;
			left: 0;
			height: calc(100vh - $header_hight);
			width: 100%;

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
			width: 100%;
			height: calc(100vh + $border-radius);
			margin: 0 auto;
			object-fit: cover;
			object-position: 50% 50%;
			filter: brightness(0.5);
		}
	}
}
</style>
