'use server';
import Head from 'next/head';
import { fetchVideoData } from '../../util/helpers/fetchVideoData';

const Video = async ({ params }: { params: { videoId: string } }) => {
	const videoData = await fetchVideoData({ params });
	if (!videoData) return;

	const { videoUrl, videoDescription, videoName } = videoData;

	return (
		<>
			<Head>
				<title>{videoName} - Video Detail</title>
				<meta name="description" content={videoDescription} />
			</Head>
			<div className="flex flex-col items-center justify-center  px-5 p-12 bg-gray-800 h-screen w-screen fixed ">
				<video src={videoUrl} controls className="w-full max-w-4xl max-h-96 rounded-lg shadow-xl" />
				<p className="text-lg text-center my-4 text-white">{videoDescription}</p>
			</div>
		</>
	);
};
export default Video;
