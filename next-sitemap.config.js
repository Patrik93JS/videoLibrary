/** @type {import('next-sitemap').IConfig} */
// eslint-disable-next-line no-undef
module.exports = {
	siteUrl: 'http://localhost:3000/',
	generateRobotsTxt: true,
	additionalPaths: async () => [
		{ loc: '/', changefreq: 'daily', priority: 0.9 },
		{ loc: '/admin', changefreq: 'weekly', priority: 0.8 },
		{ loc: '/video', changefreq: 'monthly', priority: 0.7 },
	],
};
