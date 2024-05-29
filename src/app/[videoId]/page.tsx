'use server';
import { fetchVideoData } from '../../util/helpers/fetchVideoData';

const Video = async ({ params }: { params: { videoId: string } }) => {
	const videoData = await fetchVideoData({ params });
	if (!videoData) return;

	const { videoUrl, videoDescription } = videoData;

	return (
		<div className="flex min-h-screen flex-col items-center justify-between p-24 ">
			<video src={videoUrl} controls className=" w-10/12 max-h-96" />
			<p className="mt-1">{videoDescription}</p>
		</div>
	);
};
export default Video;
