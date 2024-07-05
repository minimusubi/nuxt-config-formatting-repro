// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	future: {
		compatibilityVersion: 4,
	},
	devtools: { enabled: false },
	// https://nuxt.com/docs/api/nuxt-config#components
	components: [
		{
			path: '~/components/global',
			global: true,
		},
		'~/components',
		// This line is custom
		// https://github.com/nuxt/nuxt/discussions/17167#discussioncomment-3288741
		{ path: '~/components/common', pathPrefix: false },
	],
});
