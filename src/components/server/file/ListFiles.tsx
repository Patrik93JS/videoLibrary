'use server';
import Image from 'next/image';
import { type FC } from 'react';
import type { Filter } from 'src/components/client/file/types';
import type { File } from 'src/database/entity/File';
import { getCurrentUserAction } from '../../../actions/getCurrentUserAction';
import { withDatabase } from '../../../database';
import { VideoController } from '../../../database/controllers';
import { S3Manager } from '../../../database/controllers/S3Manager';
import { DeleteButton } from '../../client/file/DeleteButton';
import { Link } from '../../ui/reusable/Link';

type Props = { filter: Filter };

export const ListFiles: FC<Props> = async ({ filter }) => {
	const userEntity = await getCurrentUserAction();
	const userId = userEntity?.id ?? '';
	const db = await withDatabase();
	const videoController = new VideoController(db);
	const videos = await videoController.listAllByUser();

	const filteredVideos = filter === 'on' ? videos.filter((video) => video.user?.id === userId) : videos;

	return (
		<div className="grid grid-cols-4 gap-4 my-10 mx-5">
			{filteredVideos.map((video) => {
				const file = video.files.find((file) => file.minetype.match(/image\/(jpeg|png|gif|webp|svg\+xml)/));
				if (!file) return;

				return (
					<div key={video.id} className="bg-gray-400 shadow-md  rounded-lg overflow-hidden">
						<Link href={`/${video.id}`} variant="image">
							<div className="relative w-full " style={{ height: '200px' }}>
								<AsyncImage file={file} />
							</div>
						</Link>
						<div className="p-4 flex justify-between items-center">
							<h3 className="text-lg font-semibold">{video.name}</h3>
						</div>
						{(userEntity?.role.name === 'admin' || video.user?.id === userId) && <DeleteButton videoId={video.id} />}
						<p className="flex justify-center m-2">{userEntity?.name}</p>
					</div>
				);
			})}
		</div>
	);
};

type AsyncImageProsp = {
	file: File;
};

const AsyncImage: FC<AsyncImageProsp> = async ({ file }) => {
	const fileUrl = await new S3Manager().getFilePresignedUrl(file.id);
	if (!fileUrl) return;

	return <Image src={fileUrl} alt={file.name} layout="fill" objectFit="cover" className="object-cover w-full h-full" />;
};
