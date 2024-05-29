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

export const fileMatcherSchema = (fileTypeRegexp: RegExp) =>
	z
		.any()
		.refine((file): file is File => (file && file.length > 0 && fileTypeRegexp.test(file[0].type)) || file.type.match(fileTypeRegexp));

export const videoType = fileMatcherSchema(/video\/(mp4|webm|ogg)/);
export const imageType = fileMatcherSchema(/image\/(jpeg|png|gif|webp|svg\+xml)/);
