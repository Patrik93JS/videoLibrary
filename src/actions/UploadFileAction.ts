'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { withDatabase } from '../database';
import { FileController, VideoController } from '../database/controllers';

export const uploadFileAction = async (data: FormData) => {
	const video = data.get('video') as File;
	const image = data.get('image') as File;
	const name = data.get('name')?.toString();
	const description = data.get('description')?.toString();
	const categoryId = data.get('categoryId')?.toString();

	if (!video || !image || !name || !description || !categoryId) {
		return;
	}
	if (!video.type.match(/video\/(mp4|webm|ogg)/) || !image.type.match(/image\/(jpeg|png|gif|webp|svg\+xml)/)) {
		return;
	}

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
};
