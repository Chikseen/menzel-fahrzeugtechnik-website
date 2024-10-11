<template>
	<MainContentWrapper>
		<PageTitelWrapper>
			<h1>Kontakt</h1>
		</PageTitelWrapper>
		<div class="contact_box_wrappper">
			<div class="contact_map">
				<GoogleMap api-key="YOUR_GOOGLE_MAPS_API_KEY" :center="{ lat: 37.7749, lng: -122.4194 }" :zoom="12"
					style="width: 100%; height: 400px;" />
			</div>
			<div class="contact_box">
				<CountdownTimer />
				<hr>
				<ul class="contact" v-for="(day, i) in openingHours" :key="i">
					<li class="contact_item">
						<p>{{ day.translated }}</p>
						<span v-if="day.isOpen">
							<p>{{ day.open.replace(":00", "") }} Uhr</p>
							<p>{{ day.close.replace(":00", "") }} Uhr</p>
						</span>
						<p v-else>Geschlossen</p>
					</li>
					<hr>
				</ul>
			</div>
			<div class="contact_box">
				<ul class="contact">
					<li>
						<p>Dirk Menzel</p>
					</li>
					<hr>
					<li class="contact_item">
						<p>Anschrift</p>
						<a href="https://www.google.com/maps/place/Menzel+Fahrzeugtechnik/@51.2712801,12.3680665,17z/data=!3m1!4b1!4m5!3m4!1s0x47a6fa232e12aaf5:0x5c63bbdad67219bd!8m2!3d51.2712768!4d12.3702552"
							target="_blank">Städtelner Straße 62, 04416 Markkleeberg</a>
					</li>
					<hr>
					<li class="contact_item">
						<p>E-Mail:</p>
						<a href="mailto:menzel-fahrzeugtechnik@t-online.de">menzel-fahrzeugtechnik@t-online.de</a>
					</li>
					<hr>
					<li class="contact_item">
						<p> Telefon:</p>
						<a href="tel:+034135424333">0341 35424333</a>
					</li>
					<hr>
					<li class="contact_item">
						<p>Mobil: </p>
						<a href="tel:+497725199">0160 7725199</a>
					</li>
				</ul>
			</div>
		</div>
	</MainContentWrapper>
</template>

<script>
export default {
	computed: {
		openingHours() {
			return useRuntimeConfig()?.public?.openingHours
		}
	}
}
</script>

<script setup>
useSeoMeta({
	title: "Menzel - Kontakt",
	meta: [
		{
			hid: 'description_contact_overview',
			name: 'description',
			content: 'Unsere Anschrift und Öffnungszeiten von Menzel Fahrzeugtechnik'
		},
		{
			hid: 'keywords_contact',
			name: 'keywords',
			content: 'Öffnungszeiten, Adresse, Anschrift, EMail, Telefon, Karte'
		},
	],
	link: [
		{
			hid: 'canonical',
			rel: 'canonical',
			href: 'https://menzel-fahrzeugtechnik.de/contact'
		}
	]
})
definePageMeta({
	keepalive: true,
	scrollToTop: false,
})
</script>

<style lang="scss">
.contact {
	list-style-type: none;
	padding: 0;
	margin: 0;

	&_box {
		padding: 15px;
		width: 100%;
		max-width: 400px;
		border-radius: $border-radius;
		@include theme_based_morphism_shadow;

		&_wrappper {
			width: 100%;
			height: max-content;
			display: flex;
			flex-wrap: wrap;
			justify-content: center;
			gap: 15px;
			margin-bottom: 15px;
		}
	}

	&_item {
		display: flex;
		justify-content: space-between;
		gap: 25px;

		p {
			margin: 0;
		}
	}

	&_map {
		width: 100%;
		height: 100%;
		max-width: 500px;
		max-height: 500px;
		border-radius: $border-radius;
		//overflow: hidden;
		z-index: 5;
		@include theme_based_morphism_shadow;
	}
}
</style>