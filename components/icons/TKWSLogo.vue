<template>
	<div class="dynamicLogo">
		<svg class="iconBase" width="24" viewBox="-1.5 0 103 65" xmlns="http://www.w3.org/2000/svg"
			xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMin slice">
			<g class="dynamicLogo_foldable_bottom" fill="none" stroke-linejoin="round">
				<path d="M 1.5 63.5 L 98.5 63.5" stroke-linecap="round" />
			</g>
			<g class="dynamicLogo_foldable">
				<path class="dynamicLogo_foldable_shell" d="M 1.5 50 L 1.5 1.5 L 98.5 1.5 L 98.5 50"
					stroke-linecap="round" fill="none" stroke-linejoin="round" />

				<g text-anchor="middle" class="dynamicLogo_text dynamicLogo_text_middle">
					<text x="50%" y="60%">WEB</text>
				</g>

				<text x="50%" y="30%" text-anchor="middle" class="dynamicLogo_text dynamicLogo_text_upper">Tim
					Keutel</text>

				<text x="50%" y="80%" text-anchor="middle"
					class="dynamicLogo_text dynamicLogo_text_lower">Services</text>
			</g>
		</svg>
	</div>
</template>


<style lang="scss">
$bannerAnimationDuration: 10s;

.dynamicLogo {
	position: relative;
	display: flex;
	width: 100%;
	height: 100%;
	padding: 0.25rem;

	&_foldable {
		transition: .5s all ease-out;
		transform-origin: 0% 92.5%;

		&_shell {
			stroke: #3498db;
			stroke-width: 3;
			opacity: 1;
		}

		&_bottom {
			stroke: #c9c9c9;
			stroke-width: 3;
			opacity: 1;
		}
	}

	&_text {

		&_upper,
		&_lower {
			font-size: 0.75rem;
			fill: #c9c9c9;
		}

		&_middle {
			font-weight: 800;
			font-size: 1.25rem;
			fill: #3498db;
		}
	}

	svg {
		backdrop-filter: blur(20px);
		border-radius: 7.5px;
		width: max-content;
		height: 100%;
		margin: auto;
	}
}
</style>