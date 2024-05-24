'use server';
import { fetchVideoId } from '../../util/helpers/fetchVideoId';

const Video = async ({ params }: { params: { videoId: string } }) => {
	const videoId = params.videoId;
	const { s3, data } = await fetchVideoId({ videoId });
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
};
export default Video;
