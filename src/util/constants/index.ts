export const PAGINATION_LIMIT = 10;

export const roles = ['user', 'admin'] as const;
export type UserRole = (typeof roles)[number];

export const bucket = 'video-app-files';

export const S3Config = {
	endpoint: 'http://localhost:9000',
	forcePathStyle: true,
	region: 'eu-central-1',
	credentials: {
		accessKeyId: 'root',
		secretAccessKey: 'rootroot',
	},
};
