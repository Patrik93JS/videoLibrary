'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { imageType, videoType } from 'src/util/constants';
import { z } from 'zod';
import { withDatabase } from '../database';
import { FileController, VideoController } from '../database/controllers';

const formDataSchema = z.object({
	video: videoType,
	image: imageType,
	name: z.string().min(1, 'Name is required'),
	description: z.string().min(10, 'Description is required'),
	categoryId: z.string().min(1, 'Category ID is required'),
});

export const uploadFileAction = async (state: unknown, data: FormData) => {
	try {
		const formData = Object.fromEntries(data);

		const parsed = formDataSchema.parse(formData);

		const { video, image, name, description, categoryId } = parsed;

		const db = await withDatabase();

		const fileController = new FileController(db);
		const uploadedVideo = await fileController.upload(video);
		const uploadedImage = await fileController.upload(image);

		const videoFile = new VideoController(db);

		videoFile.create({
			files: [uploadedImage, uploadedVideo],
			category: { id: categoryId },
			description: description,
			name: name,
		});

		revalidatePath('./');
		redirect('/');
	} catch (error) {
		console.error('Validation error:', error);
	}
};
