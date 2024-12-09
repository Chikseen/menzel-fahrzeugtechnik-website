<template>
	<MainContentWrapper>
		<PageTitelWrapper>
			<h1>Plaketten Rechner</h1>
		</PageTitelWrapper>
		<div class="tuevcalc">
			<p>Um herauszufinden, wann du zu deiner Hauptuntersuchung musst, einfach das Jahr auswählen und solange den
				Monat anpassen bis
				die Plakette genau so aussieht wie auf deinem Auto</p>
			<span>
				<h3>Jahr</h3>
				<span class="tuevcalc_year_buttons">
					<button @click="year = currentYear()"
						:style="`background-color: ${tuevColor(currentYear(0))};`">20{{
							currentYear() }}</button>
					<button @click="year = currentYear(1)"
						:style="`background-color: ${tuevColor(currentYear(1))};`">20{{
							currentYear(1) }}</button>
					<button @click="year = currentYear(2)"
						:style="`background-color: ${tuevColor(currentYear(2))};`">20{{
							currentYear(2) }}</button>
				</span>
			</span>
			<span>
				<span class="tuevcalc_month_buttons">
					<button @click="changeMonthBy(1)">^</button>
				</span>
			</span>
			<span class="tuevcalc_icon">
				<TuevIcon :year="year" :month="month" :isActive="true" />
			</span>
			<span>
				<span class="tuevcalc_month_buttons tuevcalc_month_buttons_inverted">
					<button @click="changeMonthBy(-1)">^</button>
				</span>
			</span>
			<span class="tuevcalc_result" @click="cycleForceFrame()">
				<span v-if="remaingTime[0] > 0">
					<p class="tuevcalc_result_counter">Deine Hauptuntersuchung läuft in <b>
							<CounterComponent :input="remaingTime[0] * 1" :default="0" style="margin: 0" />
							{{ remaingTime[1] }}
						</b> ab.</p>
					<p>Fälligkeitsdatum: <b>{{ currentMonthString }}, {{ year }}</b></p>
				</span>
				<span v-else-if="remaingTime[0] == 0">
					<p>Deine Hauptuntersuchung läuft diesen Monat ab, vereinbare jetzt einen Termin bei Uns. </p>
					<button class="cta-button" @click="$router.push('/contact')">Kontakt aufnehmen</button>
				</span>
				<span v-else>
					<p>Deine Hauptuntersuchung ist fallig, vereinbare jetzt einen Termin bei Uns.</p>
					<button class="cta-button" @click="$router.push('/contact')">Kontakt aufnehmen</button>
				</span>
			</span>
		</div>
	</MainContentWrapper>
</template>

<script>
import { GetCountDown } from "@/helper/countDownTimeHelper.js"
import { GetCurrentYear, GetCurrentMonth, GetTuevColor } from '@/helper/tuevHelper';

export default {
	data() {
		return {
			year: null,
			month: null,
			future: null,
			forceFrame: -1,
		}
	},
	computed: {
		remaingTime() {
			const now = new Date;
			return GetCountDown(this.forceFrame, now.setFullYear(`20${this.year}`, (Math.abs(this.month) % 12) + 1));
		},
		currentMonthString() {
			let adjustedMonth = this.month
			if (adjustedMonth < 0)
				adjustedMonth += 1200;

			switch (adjustedMonth % 12) {
				case 0:
					return "Januar"
				case 1:
					return "Februar"
				case 2:
					return "März"
				case 3:
					return "April"
				case 4:
					return "Mai"
				case 5:
					return "Juni"
				case 6:
					return "Juli"
				case 7:
					return "August"
				case 8:
					return "September"
				case 9:
					return "Oktober"
				case 10:
					return "November"
				case 11:
					return "Dezember"
			}
		}
	},
	methods: {
		currentYear(year) {
			return GetCurrentYear(year)
		},
		tuevColor(year) {
			return GetTuevColor(year)
		},
		cycleForceFrame() {
			this.forceFrame++
			if (this.forceFrame > 3)
				this.forceFrame = 0
		},
		changeMonthBy(amount) {
			this.month += amount;
		}
	},
	mounted() {
		this.year = GetCurrentYear()
		this.month = GetCurrentMonth()
	},
}
</script>

<style lang="scss">
.tuevcalc {
	position: relative;
	display: flex;
	flex-direction: column;
	justify-content: center;
	max-width: calc(100vw - 60px);
	margin-top: 20px;
	user-select: none;

	&_year {
		&_buttons {
			display: flex;
			flex-direction: row;
			gap: $gap;
			padding: $gap;
			max-height: 75px;

			button {
				cursor: pointer;
				user-select: none;
				width: 100%;
				border: none;
				border-radius: 15px;
				aspect-ratio: 1/1;
				color: black;
				font-size: 1.25rem;
				font-weight: bolder;
				@include theme_based_morphism_shadow;
			}
		}
	}

	&_month {
		&_buttons {
			display: flex;
			flex-direction: column;
			gap: 15px;
			padding: 15px;

			button {
				cursor: pointer;
				user-select: none;
				width: 100%;
				max-height: 40px;
				max-width: 250px;
				margin: 0 auto;
				border: none;
				border-radius: 15px;
				aspect-ratio: 1/1;
				color: black;
				font-size: 1.25rem;
				font-weight: bolder;
				@include theme_based_morphism_shadow;
			}

			&_inverted {
				transform: rotateX(180deg);
			}
		}
	}

	&_icon {
		height: 200px;
	}

	&_result {
		max-width: calc(100vw - 50px);
		min-height: 250px;

		&_counter {
			max-width: 100%;
			display: flex;
			flex-wrap: wrap;
			gap: 5px;
			margin: 0;
			width: max-content;

			b {
				display: flex;
				gap: 5px;
			}
		}
	}
}
</style>

<script setup>
useSeoMeta({
	title: "Menzel - Plaketten Rechner",
	meta: [
		{
			hid: 'description_tuevcalc',
			name: 'description',
			content: 'Mit diesem Tool können Sie schnell und einfach herausfinden, wann Sie Ihren nächsten HU/AU Untersuchungs Termin planen sollten.'
		},
		{
			hid: 'keywords_tuevcalc',
			name: 'keywords',
			content: 'Plaketten Rechner'
		},
	],
	link: [
		{
			hid: 'canonical',
			rel: 'canonical',
			href: 'https://menzel-fahrzeugtechnik.de/tuevcalculator'
		}
	]
})
definePageMeta({
	keepalive: true,
	scrollToTop: false,
})
</script>