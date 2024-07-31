<template>
	<header id="header_wrapper" :class="['header_wrapper', { 'header_wrapper_active': isLoaded }]">
		<div :class="['header_content', { 'header_content_active': isLoaded }]">
			<div id="header_content_logo_placeholder"
				:class="['header_content_logo_placeholder', { 'header_content_logo_placeholder_active': isLoaded }]" />
			<NuxtLink id="header_content_text"
				:class="['header_content_text', { 'header_content_text_active': isLoaded }]" to="/">
				<p>Menzel</p>
				<p>-</p>
				<p>Fahrzeugtechnik</p>
			</NuxtLink>
			<MainLogoStatic id="header_content_logo"
				:class="['header_content_logo', { 'header_content_logo_active': isLoaded }]" />
		</div>
		<div id="header_menuIcon"
			:class="['header_menuIcon', { 'header_menuIcon_active': isLoaded, 'header_menuIcon_open': isMenuOpen }]">
			<MenuIcon @click="isMenuOpen = !isMenuOpen" />
		</div>
	</header>
	<div :class="['header_menuField', 'header_menuField_right', { 'header_menuField_open': !isMenuOpen }]">
		<ServiceSelectionRightMenu />
	</div>
	<div :class="['header_menuField', 'header_menuField_left', { 'header_menuField_open': !isMenuOpen }]">
		<ServiceSelectionLeftMenu />
	</div>
</template>

<script>
export default {
	data() {
		return {
			isLoaded: false,
			isMenuOpen: false
		}
	},
	watch: {
		$route() {
			setTimeout(() => this.isMenuOpen = false, 10);
		}
	},
	mounted() {
		this.isLoaded = true;
		setTimeout(() => {
			const transition = "all 0.25s ease-out 0s"
			document.getElementById("header_wrapper").style.transition = transition;
			document.getElementById("header_content_logo_placeholder").style.transition = transition;
			document.getElementById("header_content_text").style.transition = transition;
			document.getElementById("header_content_logo").style.transition = transition;
			document.getElementById("header_menuIcon").style.transition = transition;
		}, 3000);
	},
}
</script>

<style lang="scss" scoped>
.header {
	&_wrapper {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		width: 100dvw;
		height: 100dvh;
		margin: 0 auto;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		background-color: $company_blue;
		overflow: hidden;
		transition: height 1s ease-out 2s;
		z-index: 99;

		&_active {
			height: $header_hight;
		}
	}

	&_menuIcon {
		display: flex;
		flex-direction: column;
		justify-content: center;
		margin: auto 0;
		margin-right: 15px;
		width: 0;
		height: 0;
		opacity: 0;
		transition: all 0.75s ease-out 2.75s;
		z-index: 99;

		&_active {
			opacity: 1;
			height: 100%;
			max-height: 50px;
			width: 100%;
			max-width: 50px;
		}

		&_open {
			background-color: $company_blue;
		}
	}

	&_content {
		position: relative;
		display: flex;
		justify-content: flex-start;
		flex-direction: row;
		margin: auto 0;
		margin-left: 12.5%;
		max-width: 100%;
		width: min-content;
		transition: all 0.75s ease-out;
		opacity: 0;

		&_active {
			opacity: 1;
		}

		&_logo {
			position: absolute;
			top: 0;
			left: 100%;
			height: 50dvw;
			aspect-ratio: 379/455;
			max-width: min-content;
			max-height: 100%;
			background-color: $company_blue;
			transition: left 1.5s ease-in-out 0.5s;

			&::before {
				content: "";
				position: absolute;
				top: 0;
				left: -100vh;
				width: 100vh;
				height: 100%;
				background-color: $company_blue;
			}

			&_active {
				left: -10px;
				height: 100%;
			}

			&_placeholder {
				content: "";
				height: 50dvh;
				width: 41.648dvh;
				opacity: 0;
				transition: all 1s ease-in-out 2s;

				&_active {
					height: 50px;
					width: 41.648px;
				}
			}
		}

		&_text {
			display: flex;
			gap: 5px;
			height: 50dvh;
			margin: auto 0;
			color: $light-font-color;
			transition: all 1s ease-in-out 2s;
			text-decoration: none;

			&_active {
				left: 0;
				height: min-content;
				line-height: 2rem;
				font-size: 2rem;
			}

			p {
				margin: 5px;
				font-size: 3rem;
				margin: auto 0;
			}
		}
	}

	&_menuField {
		position: absolute;
		top: $header_hight;
		right: 0;
		height: calc(100dvh - $header_hight);
		width: calc(250px - 20px);
		max-width: calc(50% - 20px);
		padding: 10px;
		background-color: $company_blue;
		z-index: 99;
		transform: rotateY(0);
		transform-origin: right;
		transition: background-color 0.3s ease-in 1s;
		overflow: auto;

		&_right {
			transition: all 0.4s ease-in-out;
		}

		&_left {
			right: 250px;
			transition: all 0.4s ease-in-out 0.3s;
			border-right: 1px solid $light-font-color;
		}

		&_open {
			transform: rotateY(90deg);
			transition: all 0.4s ease-in-out 0s;
		}
	}
}

@media only screen and (max-width: 1000px) {
	.header_content {
		&_logo {
			height: 100%;
			width: 50px;

			&_placeholder {
				height: 100%;
				width: 50px;
			}
		}

		&_text {
			p {
				font-size: 1rem;
			}
		}
	}
}

@media only screen and (max-width: 500px) {
	.header {
		&_menuField {
			&_left {
				left: 0;
				width: calc(51% - 20px);
				transform-origin: left;
				transition: all 0.4s ease-in-out 0s;
			}
		}
	}
}
</style>