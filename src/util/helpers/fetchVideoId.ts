import { withDatabase } from '../../database';
import { VideoController } from '../../database/controllers';
import { S3Manager } from '../../database/controllers/S3Manager';

export const fetchVideoId = async ({ videoId }: { videoId: string }) => {
	const db = await withDatabase();
	const s3 = new S3Manager();
	const videoController = new VideoController(db);

	const data = await videoController.findById(videoId, { relations: ['files'] });

	return { s3, data };
};
