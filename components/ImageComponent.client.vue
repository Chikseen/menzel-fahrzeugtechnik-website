<template>
	<div>
		<a class="n_image" :href="`${config.public.contentBaseUrl}/${config.public.containerName}/${image}`">
			<NuxtImg :src="`${config.public.contentBaseUrl}/${config.public.containerName}/${image}`"
				provider="cloudflare" fit="inside" sizes="xs:275px sm:100px md:125px lg:175 xl:200"
				format="webp" quality="90" :alt="`image ${image}`" />
		</a>
	</div>
</template>

<script>
export default {
	props: {
		image: String
	},
	data() {
		return {
			config: useRuntimeConfig()
		}
	},
}
</script>

<style lang="scss">
.n_image {
	img {
		height: 150px !important;
	}
}
</style>