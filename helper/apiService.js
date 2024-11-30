let openingHoursCache = null

export default {
	async getOpeningHours() {
		if (openingHoursCache != null)
			return openingHoursCache

		const openingHoursEndpoint = useRuntimeConfig()?.public?.openingHoursApi
		const response = await fetch(openingHoursEndpoint)
		const openingHours = await response.json()
		openingHoursCache = openingHours
		return openingHours;
	}
}