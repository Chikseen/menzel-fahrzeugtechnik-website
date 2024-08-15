<template>
	<div class="image_wrapper">
		<a class="image" :href="`${config.public.contentBaseUrl}/${config.public.containerName}/${image}`">
			<NuxtImg :src="`${config.public.contentBaseUrl}/${config.public.containerName}/${image}`"
				class="galleryImage" provider="edgio" fit="cover"
				sizes="75px xs:100px sm:125px md:150px lg:175 xl:200 xxl:250" quality="80" />
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

<style lang="scss"></style>