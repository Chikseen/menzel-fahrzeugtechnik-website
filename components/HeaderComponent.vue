<template>
	<header id="header_wrapper"
		:class="['header_wrapper', { 'header_wrapper_active': isLoaded, 'header_wrapper_openMenu': isMenuOpen, }]">
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
		<span :class="['header_left', { 'header_left_active': isNavControllActive }]">
			<h3 class="header_left_services" @click="scrollToSerivces">Leistungen</h3>
			<h3 class="header_left_contact" @click="$router.push('contact')">Kontakt</h3>
			<div id="header_left_menuIcon"
				:class="['header_left_menuIcon', { 'header_left_menuIcon_active': isLoaded, 'header_left_menuIcon_open': isLoaded }]">
				<MenuIcon @click="isMenuOpen = !isMenuOpen" :isMenuOpen="isMenuOpen" />
			</div>
		</span>
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
			isMenuOpen: false,
			isNavControllActive: false
		}
	},
	watch: {
		$route() {
			setTimeout(() => {
				this.isMenuOpen = false
			}, 1);
		}
	},
	methods: {
		scrollToSerivces() {
			this.$router.push('/')
			const element = document.getElementById("services");
			element.scrollIntoView();
		}
	},
	mounted() {
		setTimeout(() => {
			this.isLoaded = true;
			setTimeout(() => {
				const transition = "all 0.25s ease-out 0s"
				document.getElementById("header_wrapper").style.transition = transition;
				document.getElementById("header_content_logo_placeholder").style.transition = transition;
				document.getElementById("header_content_text").style.transition = transition;
				document.getElementById("header_content_logo").style.transition = transition;
				document.getElementById("header_left_menuIcon").style.transition = transition;
				this.isNavControllActive = true
			}, 3000);
		}, 1)
	},
}
</script>

<style lang="scss">
.header {
	&_wrapper {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		width: 100%;
		height: 100dvh;
		margin: 0 auto;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		background-color: $company_blue;
		transition: height 1s ease-out 2s;
		z-index: 99;
		border-radius: 0 0 $border-radius $border-radius;
		box-shadow: 4px 4px 12px #000000a1, -3px -3px 12px #ffffff1a;

		&_active {
			height: $header_hight;
		}

		&_openMenu {
			border-radius: 0 0 0 0;

		}
	}

	&_left {
		display: flex;
		gap: 20px;
		flex-direction: row;
		transition: all 0.25s ease-out 0s;
		opacity: 0;

		&_active {
			opacity: 1;
		}

		&_services {
			cursor: pointer;
			margin: auto 0;
			padding: 10px 20px;
			color: $light-font-color;
		}

		&_contact {
			cursor: pointer;
			margin: auto 0;
			padding: 10px 20px;
			@include akzent_blue_cta;
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
				height: 100vh;
				max-height: 50px;
				width: 100%;
				max-width: 50px;
			}

			&_open {
				background-color: $company_blue;
			}
		}
	}

	&_content {
		position: relative;
		display: flex;
		justify-content: flex-start;
		flex-direction: row;
		margin: auto 0;
		margin-left: 12.5%;
		max-width: 100vh;
		max-height: $header_hight;
		width: min-content;
		transition: all 0.75s ease-out;
		opacity: 1;

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
			left: 0;
			margin: auto 0;
			color: $light-font-color;
			width: min-content;
			height: min-content;
			line-height: 2rem;
			font-size: 2rem;
			transition: all 1s ease-in-out 2s;
			text-decoration: none;

			p {
				margin: 5px;
				font-size: 3rem;
				margin: auto 0;
				color: $light-font-color !important
			}
		}
	}

	&_menuField {
		position: fixed;
		top: $header_hight;
		right: 0;
		height: calc(100vh - $header_hight);
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

		p {
			color: $light-font-color !important
		}
	}
}

@media only screen and (max-width: 1050px) {
	.header {
		&_left {
			&_services {
				display: none;
			}
		}

		&_content {
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
					font-size: 1.3rem;
					color: $light-font-color !important
				}
			}
		}
	}
}

@media only screen and (max-width: 550px) {
	.header {
		&_left {
			&_contact {
				display: none;
			}
		}

		&_menuField {
			&_left {
				left: 0;
				width: calc(51% - 20px);
				transform-origin: left;
				transition: all 0.4s ease-in-out 0s;
			}
		}

		&_content {
			&_text {
				p {
					font-size: 1rem;
				}
			}
		}
	}
}
</style>