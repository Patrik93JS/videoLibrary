/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	webpack: (config) => {
		config.ignoreWarnings = [
			{
				module: /typeorm/,
				message: /Module not found|dependency is an expression|Critical dependency: the request of a dependency is an expression/
			}
		];
		config.optimization.minimize = false;
		return config;
	},
	images: {
		remotePatterns: [
			{
				protocol: 'http',
				hostname: 'localhost',
				port: '9000',
				pathname: '/video-app-files/**'
			}
		]
	}
};

export default nextConfig;
