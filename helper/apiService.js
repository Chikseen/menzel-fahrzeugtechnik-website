let openingHoursCache = null
let reviewCache = null
let isVaction = false

export default {
	async getOpeningHours() {
		if (openingHoursCache != null)
			return openingHoursCache


		const openingHours = {
			CurrentOpeningHours:
			{
				WeekdayDescriptions: [
					"Monatg: 8 Uhr - 16 Uhr",
					"Dienstag: 8 Uhr - 16 Uhr",
					"Mittwoch: 8 Uhr - 16 Uhr",
					"Donerstag: 8 Uhr - 16 Uhr",
					"Freitag: 8 Uhr - 16 Uhr",
					"Samstag: Geschlossen",
					"Sonntag: Geschlossen"
				]
			}
		}

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
	},

	isVaction
}