<template>
	<MainContentWrapper>
		<PageTitelWrapper>
			<h1>Kontakt</h1>
		</PageTitelWrapper>
		<div class="contact_wrappper">
			<div class="contact_map">
				<MapComponent />
				<button class="cta-button contact_map_button" @click="startNavigation">Navigation starten</button>
			</div>
			<div class="contact_box">
				<CountdownTimer />
				<ul class="contact" v-for="(day, dayNumber) in weekdayDescriptions" :key="day">
					<div class="contact_box_openingHoursText">
						<p class="contact_box_openingHoursText_today" v-if="isToday(dayNumber)"></p>
						<p> {{ day }} </p>
					</div>
					<hr v-if="dayNumber != weekdayDescriptions.length - 1">
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
import apiService from "../helper/apiService";

export default {
	data() {
		return {
			weekdayDescriptions: null,
		}
	},
	methods: {
		isToday(dayNumber) {
			return dayNumber == (new Date().getDay() - 1) % 7
		},
		startNavigation() {
			window.open(`https://www.google.com/maps?saddr=My+Location&daddr=Städtelner+Str+62+04416+Markkleeberg`);
		}
	},
	async mounted() {
		const openingHours = await apiService.getOpeningHours()
		this.weekdayDescriptions = openingHours?.CurrentOpeningHours?.WeekdayDescriptions
	},
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

	&_wrappper {
		width: 100%;
		height: 100%;
		min-height: 500px;
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		gap: 15px;
		margin-bottom: 15px;
	}

	&_box {
		position: relative;
		display: flex;
		flex-direction: column;
		padding: 15px;
		width: calc(100% - 30px);
		max-width: 400px;
		border-radius: $border-radius;
		@include theme_based_morphism_shadow;

		&_openingHoursText {
			position: relative;
			margin: 0;

			&_today {
				position: absolute;
				top: -100%;
				left: -$border-radius;
				width: calc(100% + 2 * $border-radius);
				height: 250%;
				margin: 0;
				background-color: $company_blue;
				border-radius: $border-radius;
				z-index: -1;
			}
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
		position: relative;
		height: 500px;
		width: 100%;
		max-width: 430px;
		border-radius: $border-radius;
		//overflow: hidden;
		z-index: 5;
		@include theme_based_morphism_shadow;

		&_button {
			position: absolute;
			bottom: 15px;
			left: 50%;
			transform: translateX(-50%);
			z-index: 10;
			max-width: 100%;
		}
	}
}
</style>