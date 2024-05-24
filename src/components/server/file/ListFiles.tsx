import Image from 'next/image';
import Link from 'next/link';
import { withDatabase } from '../../../database';
import { FileController } from '../../../database/controllers';

export const ListFiles = async () => {
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
						<div key={file.video.id} className="border border-gray-300 rounded-md overflow h-1/6 w-1/6">
							<p className="flex justify-center">{file.video.name}</p>
							<Link href={`/${file.video.id}`} className="w-72 h-60">
								<Image src={file.url} alt={file.video.name} width={500} height={500} />
							</Link>
						</div>
					);
				})}
		</div>
	);
};
