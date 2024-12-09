<template>
	<div>
		<svg width="100%" height="100%" viewBox="-2.5 -2.5 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path fill-rule="nonzero" clip-rule="evenodd"
				d="M4 5C3.4477 5 3 5.4477 3 6 3 6.5523 3.4477 7 4 7L20 7C20.5523 7 21 6.5523 21 6 21 5.4477 20.5523 5 20 5L4 5"
				fill="#d1d1d1" :class="['menuIconPath', { 'menuIconPath_top_active': isMenuOpen }]" />
			<path fill-rule="nonzero" clip-rule="evenodd"
				d="M7 12C7 11.4477 7.4477 11 8 11L20 11C20.5523 11 21 11.4477 21 12 21 12.5523 20.5523 13 20 13L8 13C7.4477 13 7 12.5523 7 12"
				fill="#d1d1d1" :class="['menuIconPath', { 'menuIconPath_mid_active': isMenuOpen }]" />
			<path fill-rule="nonzero" clip-rule="evenodd"
				d="M13 18C13 17.4477 13.4477 17 14 17L20 17C20.5523 17 21 17.4477 21 18 21 18.5523 20.5523 19 20 19L14 19C13.4477 19 13 18.5523 13 18"
				fill="#d1d1d1" :class="['menuIconPath', { 'menuIconPath_bot_active': isMenuOpen }]" />
		</svg>
	</div>
</template>

<script>
export default {
	props: {
		isMenuOpen: { type: Boolean }
	}
}
</script>

<style lang="scss">
.menuIconPath {
	transition: all 0.5s;
	transform-origin: 50% 50%;

	&_top {
		&_active {
			transform: translateX(27%) rotateZ(-45deg);
		}
	}

	&_mid {
		&_active {
			transform-origin: 50% 50%;
			transform: rotateZ(45deg);
			d: path("M3 12C3 11.4477 3.4477 11 4 11L20 11C20.5523 11 21 11.4477 21 12 21 12.5523 20.5523 13 20 13L4 13C3.4477 13 3 12.5523 3 12");
		}
	}

	&_bot {
		&_active {
			opacity: 0;
			transform-origin: 50% 50%;
			transform: translateX(-10%) translateY(-30%) rotateZ(-45deg);
			d: path("M3 18C3 17.4477 3.4477 17 4 17L20 17C20.5523 17 21 17.4477 21 18 21 18.5523 20.5523 19 20 19L4 19C3.4477 19 3 18.5523 3 18");
		}
	}
}
</style>