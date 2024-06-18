/** @type {import('next-sitemap').IConfig} */
// eslint-disable-next-line no-undef
module.exports = {
	siteUrl: 'http://localhost:3000/',
	changefreq: 'daily',
	generateRobotsTxt: true,
	exclude: ['/server-sitemap.xml'],
	robotsTxtOptions: {
		additionalSitemaps: ['http://localhost:3000/server-sitemap.xml'],
	},
	additionalPaths: async () => [
		{ loc: '/', priority: 0.9 },
		{ loc: '/admin', priority: 0.8 },
	],
};
