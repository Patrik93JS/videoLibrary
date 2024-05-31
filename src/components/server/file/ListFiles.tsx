import Image from 'next/image';
import { getCurrentUserAction } from '../../../actions/getCurrentUserAction';
import { withDatabase } from '../../../database';
import { FileController } from '../../../database/controllers';
import { Link } from '../../ui/reusable/Link';

export const ListFiles = async () => {
	const userEntity = await getCurrentUserAction();

	const db = await withDatabase();
	const fileController = new FileController(db);
	const dataFiles = await fileController.list(1, 355);

	return (
		<div className="flex flex-wrap justify-center gap-4 my-10 mx-5">
			{dataFiles
				.filter((file) => file.minetype.match(/image\/(jpeg|png|gif|webp|svg\+xml)/))
				.map((file) => {
					if (!file.url) return;
					return (
						<div key={file.video?.id} className="border border-black rounded-md overflow ">
							<p className="flex justify-center">{file.video?.name}</p>
							<Link href={`/${file.video?.id}`} variant="image">
								<div className="relative block h-[100px] w-[100px]">
									<Image src={file.url} alt={file.video?.name} width={100} height={0} />
								</div>
							</Link>
							<p className="flex justify-center">{userEntity.name}</p>
						</div>
					);
				})}
		</div>
	);
};
