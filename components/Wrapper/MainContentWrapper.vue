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
	margin: 0;
	padding: 25px;
	display: flex;
	flex-direction: column;
	gap: 15px;

	&_wrapper {
		position: absolute;
		display: flex;
		justify-content: center;
		top: $header_hight;
		left: 0;
		width: 100dvw;
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
		border-radius: 20px;
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