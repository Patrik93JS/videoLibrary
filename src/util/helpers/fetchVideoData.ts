import { VideoController } from '../../database/controllers';
import { S3Manager } from '../../database/controllers/S3Manager';
import { withDatabase } from '../../database/index';

export const fetchVideoData = async ({ params }: { params: { videoId: string } }) => {
	const videoId = params.videoId;
	const db = await withDatabase();
	const s3 = new S3Manager();
	const videoController = new VideoController(db);

	const data = await videoController.findById(videoId, { relations: ['files'] });

	const videoData = data?.files.find((file) => file.minetype.match(/video\/(mp4|webm|ogg)/));

	if (!videoData) return;
	const videoUrl = await s3.getFilePresignedUrl(videoData.id);
	const videoDescription = data?.description;
	const videoName = data?.name;
	return { s3, videoUrl, videoDescription, videoName };
};
