/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	webpack5: true,
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
