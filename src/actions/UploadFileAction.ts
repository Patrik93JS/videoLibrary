'use server';

import { revalidateTag } from 'next/cache';
import { redirect } from 'next/navigation';
import { z } from 'zod';
import { withDatabase } from '../database';
import { FileController, VideoController } from '../database/controllers';

const formDataSchema = z.object({
	video: z.instanceof(File).refine((file) => file.type.match(/video\/(mp4|webm|ogg)/), {
		message: 'Invalid video format',
	}),
	image: z.instanceof(File).refine((file) => file.type.match(/image\/(jpeg|png|gif|webp|svg\+xml)/), {
		message: 'Invalid image format',
	}),
	name: z.string().nonempty('Name is required'),
	description: z.string().nonempty('Description is required'),
	categoryId: z.string().nonempty('Category ID is required'),
});

export const uploadFileAction = async (data: FormData) => {
	try {
		const formData = {
			video: data.get('video') as File,
			image: data.get('image') as File,
			name: data.get('name')?.toString(),
			description: data.get('description')?.toString(),
			categoryId: data.get('categoryId')?.toString(),
		};

		formDataSchema.parse(formData);

		const { video, image, name, description, categoryId } = formData;

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

		revalidateTag('./');
		redirect('/');
	} catch (error) {
		console.error('Validation error:', error);
	}
};
