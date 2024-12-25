import { defineLocalBusiness } from 'nuxt-schema-org/schema'

export default defineNuxtConfig({
	/// Tempoary Fix for https://github.com/nuxt/cli/issues/193
	hooks: {
		close: (nuxt) => {
			if (!nuxt.options._prepare)
				process.exit()
		}
	},
	///

	ssr: true,

	robots: {
		groups: [
			{
				userAgent: ['*'],
				disallow: [],
				allow: ["*"],
			},
		]
	},

	site: {
		url: 'https://www.menzel-fahrzeugtechnik.de',
		name: 'Menzel Fahrzeugtechnik'
	},

	devtools: { enabled: false },

	vite: {
		css: {
			preprocessorOptions: {
				scss: {
					api: 'modern-compiler',
					additionalData: '@use "@/assets/styles/_global.scss" as *;',
				},
			},
		},
	},

	components: [{ path: "~/components", pathPrefix: false }],

	server: {
		port: 8000, // default: 3000
	},

	modules: ["@nuxt/image", "@nuxtjs/robots", "@nuxtjs/leaflet", "@nuxtjs/sitemap", "nuxt-schema-org"],

	image: {
		format: ["webp"],
		provider: "cloudflare",
		cloudflare: {
			baseURL: 'https://cdn.menzel-fahrzeugtechnik.de'
		}
	},

	app: {
		head: {
			htmlAttrs: {
				lang: "de",
			},
			title: "Menzel",
			meta: [
				{ charset: "utf-8" },
				{ name: "theme-color", content: "#319197" },
				{ name: "viewport", content: "width=device-width, initial-scale=1" },
				{
					hid: "description_main",
					name: "description",
					content: "Ihre freie Kfz-Meisterwerkstatt in Markkleeberg",
				},
				{
					hid: "keywords_main",
					name: "keywords",
					content: "Leipzig, Markkleeberg, Werkstatt, Frei, Unabhänig, Auto, reparieren, Car Stop, Menzel, Fahrzeugtechnik, Fahrzeugpflege, Autoreparatur",
				},
				{
					hid: "location",
					name: "geo.position",
					content: "51.2716158,12.3669827",
				},
				{ hid: "author_main", name: "author", content: "Tim Menzel" },
			],
			link: [
				{
					rel: "icon",
					type: "image/x-icon",
					href: "/favicon.ico",
				}
			],
		},
	},
	runtimeConfig: {
		public: {
			contentBaseUrl: "https://cdn.menzel-fahrzeugtechnik.de",
			containerName: "images",
			openingHoursApi: "https://openinghours-function.azurewebsites.net/api/OpeningHoursFunction",
			reviewApi: "https://reviews-function.azurewebsites.net/api/ReviewHttpFunction",
		},
	},

	compatibilityDate: "2024-08-16",

	schemaOrg: {
		identity: defineLocalBusiness({
			'@type': 'AutomotiveBusiness',

			'name': 'Menzel Fahrzeugtechnik',
			'description': 'Ihre freie Kfz-Meisterwerkstatt in Markkleeberg',
			'url': 'www.menzel-fahrzeugtechnik.de',

			'address': {
				streetAddress: 'Städtelner Str. 62',
				addressLocality: 'Markkleeberg',
				postalCode: '04416',
				addressCountry: 'DE'
			},

			'geo': {
				'@type': 'GeoCoordinates',
				'latitude': '51.271718',
				'longitude': '12.3698214'
			},

			'telephone': '+49 0160 7725199',
			'email': 'info@menzel-fahrzeugtechnik.de',
			'openingHoursSpecification': [
				{
					dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday'],
					opens: '08:00:00',
					closes: '16:00:00'
				}
			],

			'priceRange': '$',

			'image': [
				'https://cdn.menzel-fahrzeugtechnik.de/images/standing_under_car_II.webp',
				'https://cdn.menzel-fahrzeugtechnik.de/images/teuv_sign.webp',
				'https://cdn.menzel-fahrzeugtechnik.de/images/holding_windshield.webp'
			],
			'logo': 'https://www.menzel-fahrzeugtechnik.de/favicon.ico',

			'paymentAccepted': [
				'Cash',
				'Credit Card'
			],
			'currenciesAccepted': 'EUR',

			'isAccessibleForDisabled': true,
			'amenityFeature': [
				{
					'@type': 'LocationFeatureSpecification',
					'name': 'Parking',
					'value': true
				},
				{
					'@type': 'LocationFeatureSpecification',
					'name': 'Wheelchair Accessible',
					'value': true
				}
			],
		}),
	}
});