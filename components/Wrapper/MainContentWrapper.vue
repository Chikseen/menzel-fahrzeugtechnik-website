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
	width: 1500px;
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
		background-color: inherit;
		overflow: auto;
	}

	h2,
	p {
		text-align: center;
	}

	>img {
		margin: 0 auto;
		border-radius: 20px;
		box-shadow: $image-shadow;
		max-width: calc(100% - 50px);
		width: 750px;
	}
}

@media only screen and (max-width: $mobile_threshold) {
	.content {
		&_wrapper {
			top: 0;
			min-height: 100%;
			margin: 50px 5px;
			width: calc(100% - 10px);
		}
	}
}
</style>