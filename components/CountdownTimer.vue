<template>
	<div v-if="time != null" class="CountdownTimer" @click="cycleForceFrame()">
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
		}
	},
	methods: {
		async setFuture() {
			const openingHours = await apiService.getOpeningHours();

			if (openingHours.CurrentOpeningHours.OpenNow) {
				this.state = "Schließt in"
				this.future = openingHours.CurrentOpeningHours.NextCloseTime
			}
			else {
				this.state = "Öffnet in"
				this.future = openingHours.CurrentOpeningHours.NextOpenTime
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
	}

	p {
		margin: auto 0;
		text-wrap: nowrap;
	}
}
</style>