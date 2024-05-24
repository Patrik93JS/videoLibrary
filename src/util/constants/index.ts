import { z } from 'zod';

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
export const categoryListLenght = 20;

export const videoType = z.enum(['video/mp4', 'video/webm', 'video/ogg']);
export const imageType = z.enum(['image/jpeg', 'image/png', 'image/gif', 'image/webp', 'image/svg+xml']);
