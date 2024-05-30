'use server';

import { revalidateTag } from 'next/cache';
import { withDatabase } from '../database';
import { FileController, VideoController } from '../database/controllers';
import { uploadFileSchema } from '../util/schemas/uploadFileSchema';
import { getCurrentUserAction } from './getCurrentUserAction';

export const uploadFileAction = async (state: unknown, data: FormData) => {
	const formData = Object.fromEntries(data);
	const { video, image, name, description, categoryId } = uploadFileSchema.parse(formData);

	const user = await getCurrentUserAction();
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
		user: { id: user?.id },
	});

	revalidateTag('result');
	return result;
};
