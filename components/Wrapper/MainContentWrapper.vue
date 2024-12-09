<template>
	<div class="content_wrapper">
		<div class="content">
			<slot></slot>
		</div>
	</div>
</template>

<style lang="scss">
.content {
	position: relative;
	width: $max_content_width;
	height: min-content;
	margin: 10px;
	padding: 15px;
	display: flex;
	flex-direction: column;
	gap: $gap;

	&_wrapper {
		position: absolute;
		display: flex;
		justify-content: center;
		top: $header_hight;
		left: 0;
		width: 100%;
		height: calc(100dvh - $header_hight);
		padding-bottom: -150px;
		background-color: inherit;
		//overflow: auto;
	}

	h2 {
		text-align: center;
	}

	>img {
		margin: 0 auto;
		border-radius: $border-radius;
		max-width: calc(100% - 50px);
		width: $max_content_width;
		@include theme_based_morphism_shadow;
	}
}

@media only screen and (max-width: $mobile_threshold) {
	.content {
		&_wrapper {
			top: 0;
			margin: 50px 5px;
			width: calc(100% - 10px);
		}
	}
}
</style>