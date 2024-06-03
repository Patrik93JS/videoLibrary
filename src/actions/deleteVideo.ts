'use server';

import { revalidateTag } from 'next/cache';
import { withDatabase } from '../database';
import { VideoController } from '../database/controllers';
import { deleteVideoSchema } from '../util/schemas/deleteVideoSchema';

export const deleteVideo = async (data: { videoId: string }) => {
	const { videoId } = deleteVideoSchema.parse(data);

	const db = await withDatabase();

	await new VideoController(db).delete(videoId?.toString() ?? '');

	revalidateTag('video');
};
