<template>
	<div class="image">
		<a class="image" :href="`${config.public.contentBaseUrl}/${config.public.containerName}/${image}`">
			<NuxtImg :src="`${config.public.contentBaseUrl}/${config.public.containerName}/${image}`" provider="edgio"
				fit="cover" sizes="75px xs:100px sm:125px md:150px lg:175 xl:200 xxl:250" quality="80"
				:alt="`image ${image}`" />
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