'use server';
import Image from 'next/image';
import { getCurrentUserAction } from '../../../actions/getCurrentUserAction';
import { withDatabase } from '../../../database';
import { VideoController } from '../../../database/controllers';
import { S3Manager } from '../../../database/controllers/S3Manager';
import { DeleteButton } from '../../client/file/DeleteButton';
import { Link } from '../../ui/reusable/Link';

export const ListFiles = async ({ filter }: { filter: FormDataEntryValue | null }) => {
	const userEntity = await getCurrentUserAction();
	const userId = userEntity.id;
	const db = await withDatabase();
	const videoController = new VideoController(db);
	const videos = await videoController.listAllWithFiles();

	const filteredVideos = filter === 'ownVideos' ? videos.filter((video) => video.user?.id === userId) : videos;

	return (
		<div className="flex flex-wrap justify-center gap-4 my-10 mx-5">
			{await Promise.all(
				filteredVideos.map(async (video) => {
					const file = video.files.find((file) => file.minetype.match(/image\/(jpeg|png|gif|webp|svg\+xml)/));
					if (!file) return;

					const fileUrl = await new S3Manager().getFilePresignedUrl(file.id);
					if (!fileUrl) return;

					return (
						<div key={video?.id} className="border border-black rounded-md overflow-hidden">
							<p className="flex justify-center">{video?.name}</p>
							<Link href={`/${video?.id}`} variant="image">
								<div className="relative block h-[100px] w-[100px]">
									<Image src={fileUrl} alt={video.name} width={100} height={100} />
								</div>
							</Link>
							{(userEntity.role.name === 'admin' || video.user?.id === userId) && <DeleteButton videoId={video.id} />}
							<p className="flex justify-center">{userEntity.name}</p>
						</div>
					);
				}),
			)}
		</div>
	);
};
