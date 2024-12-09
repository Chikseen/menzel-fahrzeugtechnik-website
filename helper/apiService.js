let openingHoursCache = null
let reviewCache = null

export default {
	async getOpeningHours() {
		if (openingHoursCache != null)
			return openingHoursCache

		const openingHoursEndpoint = useRuntimeConfig()?.public?.openingHoursApi
		const response = await fetch(openingHoursEndpoint)
		const openingHours = await response.json()
		openingHoursCache = openingHours
		return openingHours;
	},

	async getReviews() {
		if (reviewCache != null)
			return reviewCache

		const reviewEndpoint = useRuntimeConfig()?.public?.reviewApi
		const response = await fetch(reviewEndpoint)
		const reviews = await response.json()
		reviewCache = reviews
		return reviews;
	}
}