<template>
	<div v-if="time != null" class="CountdownTimer" @click="cycleForceFrame()">
		<p>{{ state }}</p>
		<CounterComponent :input="time[0] * 1" style="margin: auto 5px; width: min-content" />
		<p>{{ time[1] }}</p>
	</div>
</template>

<script>
import { GetCountDown } from "@/helper/countDownTimeHelper.js"

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
		setFuture() {
			const days = useRuntimeConfig()?.public?.openingHours
			const now = new Date;
			const dayOfToday = now.getDay()

			let today = days[dayOfToday]
			const todayOpenHours = [...today.open.matchAll(/\d\d/g)]
			const todayCloseHours = [...today.close.matchAll(/\d\d/g)]

			let state = "Öffnet in"

			let daysSkiped = 0

			let future = null

			while (!today.isOpen && daysSkiped < 7) {
				daysSkiped++
				today = days[(dayOfToday + daysSkiped) % 7]
			}

			if ((todayOpenHours[0][0] * 1 > now.getHours() * 1)) {
				state = "Öffnet in"
				future = now.setHours(todayOpenHours[0][0], todayOpenHours[1][0], 0)
			}
			else if (todayCloseHours[0][0] * 1 > now.getHours() * 1 && daysSkiped == 0) {
				state = "Schließt in"
				future = now.setHours(todayCloseHours[0][0], todayCloseHours[1][0], 0)
			}
			else {
				state = "Öffnet in"
				daysSkiped++
				today = days[(dayOfToday + daysSkiped) % 7]
				while (!today.isOpen && daysSkiped < 7) {
					daysSkiped++
					today = days[(dayOfToday + daysSkiped) % 7]
				}
				future = now.setHours(todayOpenHours[0][0], todayOpenHours[1][0], 0)
			}

			future += (daysSkiped * 8.64e+7)

			this.state = state
			this.future = future
		},
		calc() {
			this.time = GetCountDown(this.forceFrame, this.future);
			this.timer = setTimeout(() => {
				this.calc();
			}, 1000);
		},
		cycleForceFrame() {
			this.forceFrame++
			if (this.forceFrame > 3)
				this.forceFrame = 0
			this.calc()
		}
	},
	created() {
		this.setFuture()
		this.calc()
	},
	beforeDestroy() {
		clearTimeout(this.timer);
	},
}
</script>

<style lang="scss">
.CountdownTimer {
	cursor: pointer;
	user-select: none;
	text-align: center;
	margin: auto ;
	display: flex;
	flex-wrap: wrap;

	p {
		text-wrap: nowrap;
	}
}
</style>