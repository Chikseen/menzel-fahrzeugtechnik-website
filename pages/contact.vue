<template>
	<MainContentWrapper>
		<PageTitelWrapper>
			<h1>Kontakt</h1>
		</PageTitelWrapper>
		<div class="contact_box_wrappper">
			<div class="contact_map">
				<LMap ref="map" :zoom="15" :center="[51.271428, 12.369805]">
					<LTileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
						attribution="&amp;copy; <a href=&quot;https://www.openstreetmap.org/&quot;>OpenStreetMap</a> contributors"
						layer-type="base" name="OpenStreetMap" />
					<l-marker :lat-lng="[51.271428, 12.369805]">
					</l-marker>
				</LMap>
			</div>
			<div class="contact_box" style="max-width: 250px;">
				<OpeningIn />
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
			<div class="contact_box" style="max-width: 450px;">
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
		border-radius: 10px;
		box-shadow: $image-shadow;

		&_wrappper {
			width: 100%;
			display: flex;
			flex-wrap: wrap;
			justify-content: center;
			gap: 15px;
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
		border-radius: 10px;
		box-shadow: $image-shadow;
		overflow: hidden;
		z-index: 5;
	}
}
</style>