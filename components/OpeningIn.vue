<template>
	<p class="openingIn" @click="cycleForceFrame()">{{ timeText }}</p>
</template>

<script>
export default {
	data() {
		return {
			future: null,
			state: null,
			timeText: null,
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
			const diff = (this.future - new Date().getTime()) / 1000;
			let timeText = "";
			if (this.forceFrame == 0 || diff < 60) {
				const d = diff.toFixed(0)
				if (d <= 1)
					timeText = `${d} Sekunde`;
				else
					timeText = `${d} Sekunden`;
			}
			else if (this.forceFrame == 1 || diff < 3600) {
				const d = (diff / 60).toFixed(0)
				if (d <= 1)
					timeText = `${d} Minute`;
				else
					timeText = `${d} Minuten`;
			}
			else if (this.forceFrame == 2 || diff < 86400) {
				const d = (diff / 3600).toFixed(0)
				if (d <= 1)
					timeText = `${d} Stunde`;
				else
					timeText = `${d} Stunden`;
			}
			else {
				const d = (diff / 86400).toFixed(0)
				if (d <= 1)
					timeText = `${d} Tag`;
				else
					timeText = `${d} Tagen`;
			}

			this.timeText = `${this.state} ${timeText}`;
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
.openingIn {
	cursor: pointer;
	color: $light-font-color;
	user-select: none;
	text-align: center;
}
</style>