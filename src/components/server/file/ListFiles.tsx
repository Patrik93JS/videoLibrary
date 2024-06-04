'use server';
import Image from 'next/image';
import { getCurrentUserAction } from '../../../actions/getCurrentUserAction';
import { withDatabase } from '../../../database';
import { VideoController } from '../../../database/controllers';
import { Link } from '../../ui/reusable/Link';
import { DeleteButton } from './DeleteButton';

export const ListFiles = async () => {
	const userEntity = await getCurrentUserAction();

	const db = await withDatabase();
	const videoController = new VideoController(db);
	const dataFiles = await videoController.list(1, 355);

	const files = dataFiles.map((e) => e.files);

	return (
		<div className="flex flex-wrap justify-center gap-4 my-10 mx-5">
			{files
				.filter((file) => file.map((video) => video.minetype.match(/image\/(jpeg|png|gif|webp|svg\+xml)/)))
				.map((file) => {
					if (!file.map((video) => video.video)) return;
					return (
						<div key={file.video?.id} className="border border-black rounded-md overflow ">
							<p className="flex justify-center">{file.video?.name}</p>
							<Link href={`/${file.video?.id}`} variant="image">
								<div className="relative block h-[100px] w-[100px]">
									<Image src={file.url} alt={file.video?.name} width={100} height={100} />
								</div>
							</Link>
							<DeleteButton videoId={file.video?.id} />
							<p className="flex justify-center">{userEntity.name}</p>
						</div>
					);
				})}
		</div>
	);
};
