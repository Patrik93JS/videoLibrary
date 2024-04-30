'use server';

import { withDatabase } from '@/database';
import { FileController } from '@/database/controllers';

export const UploadFileAction = async (data: FormData) => {
	'use server';
	const file = data.get('file') as File;

	if (!file) {
		throw new Error('No file uploaded');
	}

	if (!file.type.match(/image\/(jpeg|png|gif|webp|svg\+xml)|video\/(mp4|webm|ogg)/)) return;

	const db = await withDatabase();

	await new FileController(db).upload(file);
};
