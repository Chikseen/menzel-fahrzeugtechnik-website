<template>
	<div class="counter_wrapper">
		<div class="counter">
			<TransitionGroup name="counterAnimation">
				<div class="counter_gauge" v-for="(_, indexOfNumber) in length" :key="indexOfNumber">
					<div class="counter_gauge_spinner"
						:style="`transform: translateY(-${(value[indexOfNumber] % 10) * 25}px)`">
						<p class="counter_gauge_spinner_number" v-for="number in 10" :key="number">{{ (number - 1) % 10
							}}
						</p>
					</div>
				</div>
			</TransitionGroup>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		input: { type: Number, default: 0 },
		default: { type: Number, default: 0 }
	},
	data() {
		return {
			length: 0,
			value: 0
		}
	},
	watch: {
		input() {
			this.length = this.input.toString().length
			if (this.length != this.value?.toString().length) {
				this.value = new Array(this.length + 1).join("0");
				setTimeout(() => {
					this.value = this.input.toString()
				}, 50);
			}
			else
				this.value = this.input.toString()
		}
	},
	mounted() {
		setTimeout(() => {
			this.length = this.default.toString().length
			if (this.length != this.value?.toString().length) {
				this.value = new Array(this.length + 1).join("0");
				setTimeout(() => {
					this.value = this.default.toString()
				}, 50);
			}
			else
				this.value = this.default.toString()
		}, 100);
	}
}
</script>

<style lang="scss" scoped>
.counter {
	display: flex;
	justify-content: center;
	font-family: none;

	&_wrapper {
		display: flex;
		flex-direction: column;
		justify-content: center;
		height: 100%;
		width: 100%;
		margin: auto;
	}

	&_gauge {
		height: 25px;
		overflow: hidden;
		scroll-behavior: smooth;

		&:nth-child(1) {
			.counter_gauge_spinner {
				transition: transform 1.5s ease-out;
			}
		}

		&:nth-child(2) {
			.counter_gauge_spinner {
				transition: transform 1s ease-out;
			}
		}

		&:nth-child(+n+3) {
			.counter_gauge_spinner {
				transition: transform 0.5s ease-out;
			}
		}

		&_spinner {
			&_number {
				height: 25px;
				font-size: 25px;
				margin: 0;
				padding: 0;
				transition: scroll 2s;
			}
		}
	}
}

.counterAnimation-enter-active,
.counterAnimation-leave-active {
	transition: all 0.5s ease;
}

.counterAnimation-enter-from,
.counterAnimation-leave-to {
	opacity: 0;
	transform: translateX(-100%);
}
</style>