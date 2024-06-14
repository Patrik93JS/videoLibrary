export const getBaseUrl = () => {
	if (typeof window !== 'undefined') {
		return window.location.origin;
	}
	return process.env['BASE_URL'] || 'http://localhost:3000';
};
