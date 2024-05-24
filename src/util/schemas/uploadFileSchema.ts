import { z } from 'zod';
import { imageType, videoType } from '../constants';

export const uploadFileSchema = z.object({
	video: videoType,
	image: imageType,
	name: z.string().min(1),
	description: z.string().min(1),
	categoryId: z.string().min(1),
});
