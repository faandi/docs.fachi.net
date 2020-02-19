const config = {
	"gatsby": {
		"pathPrefix": "/",
		"siteUrl": "https://docs.fachi.net",
		"gaTrackingId": null,
		"trailingSlash": false
	},
	"header": {
		"logo": "",
		"logoLink": "",
		"title": "docs.fachi.net",
		"githubUrl": "https://github.com/faandi/docs.fachi.net",
		"helpUrl": "",
		"tweetText": "",
		"links": [
			{ "text": "", "link": ""}
		],
		"search": {
			"enabled": false,
			"indexName": "",
			"algoliaAppId": process.env.GATSBY_ALGOLIA_APP_ID,
			"algoliaSearchKey": process.env.GATSBY_ALGOLIA_SEARCH_KEY,
			"algoliaAdminKey": process.env.ALGOLIA_ADMIN_KEY
		}
	},
	"sidebar": {
		"forcedNavOrder": [
			"/introduction"
		],
    // 	"collapsedNav": [
    //   		"/codeblock" // add trailing slash if enabled above
    // 	],
		"links": [
    //  { "text": "Hasura", "link": "https://hasura.io"},
		],
		"frontline": false,
		"ignoreIndex": true,
	},
	"siteMetadata": {
		"title": "docs.fachi.net",
		"description": "My personal documentation, built with mdx",
		"ogImage": null,
		"docsLocation": "https://github.com/faandi/docs.fachi.net/tree/master/content",
		// "favicon": "https://graphql-engine-cdn.hasura.io/img/hasura_icon_black.svg"
	},
	"pwa": {
		"enabled": false, // disabling this will also remove the existing service worker.
		"manifest": {
			"name": "My personal documentation, built with mdx",
			"short_name": "MyPersonalDocumentation",
			"start_url": "/",
			"background_color": "#6b37bf",
			"theme_color": "#6b37bf",
			"display": "standalone",
			"crossOrigin": "use-credentials",
			icons: [
				{
					src: "src/pwa-512.png",
					sizes: `512x512`,
					type: `image/png`,
				},
			],
		},
	}
};

module.exports = config;
