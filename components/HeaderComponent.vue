<template>
	<header class="menu_wrapper">
		<MainLogoAnimated class="menu_logo" />
		<MainLogoStatic class="menu_logoStatic" />
		<OpeningIn class="menu_openIn" />
		<menu class="menu_item_list">
			<li>
				<NuxtLink to="/">Home</NuxtLink>
			</li>
			<li>
				<NuxtLink to="/service">Service</NuxtLink>
			</li>
			<li>
				<NuxtLink to="/contact">Kontakt</NuxtLink>
			</li>
			<li>
				<NuxtLink to="/about" style="white-space: nowrap;">Über mich</NuxtLink>
			</li>
			<li>
				<NuxtLink to="/impressum">Impressum</NuxtLink>
			</li>
		</menu>
	</header>
</template>

<style lang="scss" scoped>
$header_borderradius: calc($header_hight / 2) 0 0 calc($header_hight / 2);
$header_minwidth: 750px;

.menu_item_list li {
	a {
		position: relative;
		padding: 10px 5px;
		color: $light-font-color !important;
		border: 2px solid #00000000;
		border-radius: 15px;
		text-decoration: none;
		transition: all 0.5s ease;
		overflow: hidden;

		&::before {
			position: absolute;
			content: "";
			top: 0;
			left: 0;
			height: 0%;
			width: 100%;
			background-color: $light-font-color;
			border-radius: 10px;
			transition: height 0.5s;
			z-index: -1;
		}

		&:hover {
			border: 2px solid $light-font-color;
		}
	}

	.router-link-active {
		color: $company_blue !important;

		&::before {
			height: 100%;
		}
	}
}

.menu {
	&_wrapper {
		position: absolute;
		top: 0;
		right: 0;
		min-width: $header_minwidth;
		width: 90%;
		height: $header_hight;
		display: flex;
		justify-content: center;
		border-radius: $header_borderradius;
		background-color: $company_blue;
		box-shadow: $image-shadow;
		z-index: 999;
		user-select: none;
	}

	&_item {

		&_list {
			display: flex;
			gap: 15px;
			list-style: none;
			margin: 0 15px;
			padding-inline-start: 0;
			font-size: 1.25rem;
			font-weight: 800;

			li {
				display: flex;
				flex-direction: column;
				justify-content: center;
				margin: 0;

				p {
					margin: 0;

					a {
						text-decoration: none;
						color: $light-font-color;
					}
				}
			}
		}
	}

	&_logoStatic {
		display: none;
	}

	&_openIn {
		margin: auto 10px;
	}
}

@media only screen and (max-width: 950px) {
	.menu {
		&_item {
			&_list {
				font-size: 1rem;
			}
		}

		&_openIn {
			display: none;
		}
	}
}

@media only screen and (max-width: $header_minwidth) {
	.menu {
		&_wrapper {
			min-width: 100%;
			border-radius: 0;
		}

		&_item {
			&_list {
				gap: 15px;

				li {
					p {
						a {
							font-size: 1.1rem;
						}
					}
				}
			}
		}

		&_logo {
			display: none;
		}
	}
}

@media only screen and (max-width: $mobile_threshold) {
	.menu {
		&_wrapper {
			right: 0;
			max-width: 80px;
			min-width: 0;
			height: 75px;
			display: flex;
			flex-direction: column;
			justify-content: flex-start;
			border-radius: 0 0 0 15px;
			gap: 15px;
			transition: all 0.5s;
			overflow: hidden;
		}

		&_item {
			&_list {
				flex-direction: column;
			}
		}

		&_logoStatic {
			display: inline;
			height: 70px;
			width: 70px;
		}

		&_openIn {
			display: inline;
			margin: 0 0 25px 15px;
		}
	}

	.menu_wrapper:hover {
		height: calc(100% + 0px);
		max-width: 200px;
	}
}
</style>