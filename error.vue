<template>
	<div>
		<h1 style="color: azure;">Page not found</h1>
		<NuxtLink to="/">Click here to go back</NuxtLink>
	</div>
</template>

<script>
export default {
	mounted() {
		this.$router.push("/")
	},
}
</script>