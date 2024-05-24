'use server';

import { revalidateTag } from 'next/cache';
import { withDatabase } from '../database';
import { FileController, VideoController } from '../database/controllers';
import { uploadFileSchema } from '../util/schemas/uploadFileSchema';

export const uploadFileAction = async (state: unknown, data: FormData) => {
	try {
		const formData = Object.fromEntries(data);

		const parsed = uploadFileSchema.parse(formData);

		const { video, image, name, description, categoryId } = parsed;

		const db = await withDatabase();

		const fileController = new FileController(db);
		const uploadedVideo = await fileController.upload(video);
		const uploadedImage = await fileController.upload(image);

		const videoFile = new VideoController(db);

		const result = videoFile.create({
			files: [uploadedImage, uploadedVideo],
			category: { id: categoryId },
			description: description,
			name: name,
		});

		revalidateTag('./');
		return result;
	} catch (error) {
		console.error('Validation error:', error);
	}
};
