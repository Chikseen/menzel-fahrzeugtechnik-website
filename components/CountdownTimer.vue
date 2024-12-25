<template>
	<div v-if="isHoliday" class="CountdownTimer">
		<p class="CountdownTimer_vaction">{{ state }}</p>
	</div>
	<div v-else-if="time != null" class="CountdownTimer" @click="cycleForceFrame()">
		<p class="CountdownTimer_text">{{ state }}</p>
		<CounterComponent :input="time[0] * 1" style="margin: auto 5px; width: min-content" />
		<p class="CountdownTimer_text">{{ time[1] }}</p>
	</div>
</template>

<script>
import { GetCountDown } from "@/helper/countDownTimeHelper.js"
import apiService from "../helper/apiService";

export default {
	data() {
		return {
			future: null,
			state: null,
			time: null,
			forceFrame: -1,
			timer: null,
			isHoliday: false
		}
	},
	methods: {
		async setFuture() {
			const openingHours = await apiService.getOpeningHours();

			const nextOpenTime = openingHours.CurrentOpeningHours.NextOpenTime
			const nextCloseTime = openingHours.CurrentOpeningHours.NextCloseTime

			if (nextOpenTime == nextCloseTime) {
				this.state = "Vorübergehend wegen Urlaub geschlossen, besuchen sie uns später wieder."
				this.isHoliday = true
				return
			}

			if (openingHours.CurrentOpeningHours.OpenNow) {
				this.state = "Schließt in"
				this.future = nextCloseTime
			}
			else {
				this.state = "Öffnet in"
				this.future = nextOpenTime
			}
		},
		calc() {
			this.time = GetCountDown(this.forceFrame, this.future);
		},
		cycleForceFrame() {
			this.forceFrame++
			if (this.forceFrame > 3)
				this.forceFrame = 0
			this.calc()
		},
		reCalcTrigger() {
			setTimeout(() => {
				this.calc()
				this.reCalcTrigger();
			}, 1000, "OpeningHourTimerId");
		}
	},
	created() {
		this.setFuture()
	},
	mounted() {
		this.reCalcTrigger()
	},
	beforeDestroy() {
		clearTimeout("OpeningHourTimerId");
	},
}
</script>

<style lang="scss">
.CountdownTimer {
	cursor: pointer;
	user-select: none;
	text-align: center;
	margin: auto;
	display: flex;
	justify-content: flex-start;
	flex-wrap: wrap;
	height: calc(100% - 30px);
	max-height: 100%;

	&_text {
		line-height: 0;
		margin: auto 0;
		text-wrap: nowrap;
	}

	&_vaction {
		margin: auto 0;
	}
}
</style>