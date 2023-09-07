<template>
	<div class="pageTitel_wrapper">
		<slot></slot>
	</div>
</template>

<style lang="scss">
.pageTitel {
	&_wrapper {
		display: flex;
		justify-content: center;
		flex-wrap: wrap;
		gap: 15px;
		font-weight: 800;


		h1 {
			position: relative;
			font-size: 2rem;
			margin: 0;
			color: $company_blue;

			&::after {
				content: "";
				position: absolute;
				bottom: -5px;
				left: -10%;
				width: 120%;
				height: 100%;
				border-bottom: 1px double $akzent_blue;
				border-radius: 10px;
				transition: all 0.5s;
			}

			&:hover {
				color: $akzent_blue;

				&::after {
					border-bottom: 4px double $akzent_blue;
				}
			}
		}

	}
}

@media only screen and (max-width: $mobile_threshold) {
	.pageTitel {
		&_wrapper {
			h1 {
				font-size: 1.3rem;
			}
		}
	}
}

@media only screen and (max-width: 325px) {
	.pageTitel {
		&_wrapper {
			h1 {
				font-size: 1rem;
			}
		}
	}
}
</style>