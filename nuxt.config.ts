export default defineNuxtConfig({
	devtools: { enabled: true },
	vite: {
		css: {
			preprocessorOptions: {
				scss: {
					additionalData: '@import  "@/assets/styles/_global.scss";',
				},
			},
		},
	},
	components: [{ path: "~/components", pathPrefix: false }],
	server: {
		port: 8000, // default: 3000
	},
	modules: ["@nuxt/image", "nuxt3-leaflet"],
	image: {
		format: ["webp"],
		provider: "edgio",
		baseURL: ""
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
				},
				{
					rel: "preconnect",
					href: "https://fonts.googleapis.com",
				},
				{
					rel: "stylesheet",
					href: "https://fonts.googleapis.com/css2?family=Raleway&display=swap",
				},
			],
		},
	},
	runtimeConfig: {
		public: {
			openingHours: [
				{
					name: "Sunday",
					isOpen: false,
					open: "08:00:00",
					close: "16:00:00",
					translated: "Sonntag",
				},
				{
					name: "Monday",
					isOpen: true,
					open: "08:00:00",
					close: "16:00:00",
					translated: "Montag",
				},
				{
					name: "Tuesday",
					isOpen: true,
					open: "08:00:00",
					close: "16:00:00",
					translated: "Dienstag",
				},
				{
					name: "Wednesday",
					isOpen: true,
					open: "08:00:00",
					close: "16:00:00",
					translated: "Mittwoch",
				},
				{
					name: "Thursday",
					isOpen: true,
					open: "08:00:00",
					close: "16:00:00",
					translated: "Donnerstag",
				},
				{
					name: "Friday",
					isOpen: true,
					open: "08:00:00",
					close: "13:00:00",
					translated: "Freitag",
				},
				{
					name: "Saturday",
					isOpen: false,
					open: "08:00:00",
					close: "16:00:00",
					translated: "Samstag",
				},
			],
		},
	},
});
