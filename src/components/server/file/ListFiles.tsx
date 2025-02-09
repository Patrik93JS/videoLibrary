'use server';
import { type FC } from 'react';
import type { Filter } from 'src/components/client/file/types';
import { getCurrentUserAction } from '../../../actions/getCurrentUserAction';
import { VideoController } from '../../../database/controllers';
import { withDatabase } from '../../../database/index';
import { DeleteVideoButton } from '../../client/file/DeleteVideoButton';
import { Pagination } from '../../client/pagiantion/Pagination';
import { Link } from '../../ui/reusable/Link';
import { AsyncImage } from './AsyncImage';

type Props = { filter: Filter; currentPage: number };

export const ListFiles: FC<Props> = async ({ filter, currentPage }) => {
	const userEntity = await getCurrentUserAction();
	const userId = userEntity?.id ?? '';
	const db = await withDatabase();
	const videoController = new VideoController(db);

	const limit = 6;

	const videos = await videoController.listAllByUser(undefined, currentPage, limit);

	const filteredVideos = filter === 'on' ? videos.filter((video) => video.user?.id === userId) : videos;

	return (
		<>
			<div className="grid grid-cols-6 gap-4 my-10 mx-5">
				{filteredVideos.map((video) => {
					const file = video.files.find((file) => file.minetype.match(/image\/(jpeg|png|gif|webp|svg\+xml)/));

					return (
						<div key={video.id} className="bg-gray-400 shadow-md  rounded-lg overflow-hidden">
							<Link href={`/video/${video.id}`} variant="image">
								<div className="relative w-full " style={{ height: '200px' }}>
									{file ? <AsyncImage file={file} /> : null}
								</div>
							</Link>
							<div className="p-4 flex justify-between items-center">
								<h3 className="text-lg font-semibold">{video.name}</h3>
							</div>
							{(userEntity?.role.name === 'admin' || video.user?.id === userId) && <DeleteVideoButton videoId={video.id} />}
							<p className="flex justify-center m-2">{video.user.name ? video.user.name : video.user.email.split('@')[0]}</p>
						</div>
					);
				})}
			</div>
			<Pagination currentPage={currentPage} dataLength={videos.length} />
		</>
	);
};
