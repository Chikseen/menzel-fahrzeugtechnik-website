<template>
	<MainContentWrapper>
		<div class="tuevcalc">
			<h2>Plaketten Rechner</h2>
			<p>Um herauszufinden, wann du zum TÜV musst, einfach das Jahr auswählen und solange den Monat anpassen bis
				die TÜV Plakette genau so aussieht wie auf deinem Auto</p>
			<span>
				<h3>Jahre</h3>
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
				<h3>Monat</h3>
				<span class="tuevcalc_month_buttons">
					<button @click="month = (month + 1)">^</button>
					<button @click="month = (month - 1)">^</button>
				</span>
			</span>
			<span class="tuevcalc_icon">
				<TuevIcon :year="year" :month="month" :isActive="true" />
			</span>
			<span class="tuevcalc_result" @click="cycleForceFrame()">
				<span v-if="remaingTime != '0 Sekunde' && !remaingTime.includes('-')">
					<p>Dein TÜV läuft in <b>{{ remaingTime }}</b> ab.</p>
				</span>
				<span v-else-if="!remaingTime.includes('-')">
					<p>Dein TÜV läuft diesen Monat ab, vereinbare jetzt einen Termin bei Uns. </p>
				</span>
				<span v-else>
					<p>Dein TÜV ist fallig, vereinbare jetzt einen Termin bei Uns.</p>
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
		}
	},
	computed: {
		remaingTime() {
			const now = new Date;
			return GetCountDown(this.forceFrame, now.setFullYear(`20${this.year}`, (this.month % 12) + 1));
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
	min-height: 100dvh;
	overflow: hidden;

	&_year {
		&_buttons {
			display: flex;
			flex-direction: row;
			gap: 15px;
			padding: 15px;
			max-height: 150px;

			button {
				cursor: pointer;
				user-select: none;
				width: 100%;
				border: none;
				border-radius: 15px;
				aspect-ratio: 1/1;
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
				border: none;
				border-radius: 15px;
				aspect-ratio: 1/1;
				max-height: 50px;
				font-size: 1.25rem;
				font-weight: bolder;
				@include theme_based_morphism_shadow;

				&:last-child {
					transform: rotateX(180deg);
				}
			}
		}
	}

	&_icon {
		height: 200px;
	}

	&_result {
		font-size: 1.2rem;
	}
}
</style>