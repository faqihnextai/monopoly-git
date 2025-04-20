module.exports = {
	globDirectory: 'public/',
	globPatterns: [
		'**/*.{png,mp3,jpg,ico,html,json,txt,js}'
	],
	swDest: 'public/sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};