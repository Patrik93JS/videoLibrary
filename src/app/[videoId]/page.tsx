import { withDatabase } from '../../database';
import { VideoController } from '../../database/controllers';
import { S3Manager } from '../../database/controllers/S3Manager';

export default async function Video({ params }: { params: { videoId: string } }) {
	const db = await withDatabase();
	const s3 = new S3Manager();
	const videoController = new VideoController(db);

	const data = await videoController.findById(params.videoId, { relations: ['files'] });
	const video = data?.files.find((file) => file.minetype.match(/video\/(mp4|webm|ogg)/));
	if (!video) return;
	const videoUrl = await s3.getFilePresignedUrl(video.id);
	const videoDescription = data?.description;

	return (
		<>
			<div className="flex min-h-screen flex-col items-center justify-between p-24 ">
				<video src={videoUrl} controls className=" w-10/12 max-h-96" />
				<p className="mt-1">{videoDescription}</p>
			</div>
		</>
	);
}
