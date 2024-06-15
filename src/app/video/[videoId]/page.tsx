'use server';
import { getCurrentUserAction } from '../../../actions/getCurrentUserAction';
import { fetchVideoData } from '../../../util/helpers/fetchVideoData';
import { pageSeo } from '../../../util/pageSeo';

const Video = async ({ params }: { params: { videoId: string } }) => {
	const videoData = await fetchVideoData({ params });
	if (!videoData) return;

	const { videoUrl, videoDescription } = videoData;

	return (
		<div className="flex flex-col items-center justify-center  px-5 p-12 bg-gray-800 h-screen w-screen fixed ">
			<video src={videoUrl} controls className="w-full max-w-4xl max-h-96 rounded-lg shadow-xl" />
			<p className={'text-lg text-center my-4 text-white'}>{videoDescription}</p>
		</div>
	);
};

export const generateMetadata = async ({ params }: { params: { videoId: string } }) => {
	const videoData = await fetchVideoData({ params });
	const user = await getCurrentUserAction();
	if (!videoData) return;

	const { videoName, videoDescription, videoUrl } = videoData;
	const isAdmin = user?.role.name === 'admin';

	return pageSeo({
		title: videoName,
		description: videoDescription,
		image: videoUrl,
		isAdmin: isAdmin,
	});
};

export default Video;
