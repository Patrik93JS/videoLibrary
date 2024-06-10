import { FC } from 'react';
import type { File } from 'src/database/entity/File';
import { S3Manager } from '../../../database/controllers/S3Manager';

type AsyncImageProsp = {
	file: File;
};

export const AsyncHtmlImage: FC<AsyncImageProsp> = async ({ file }) => {
	const fileUrl = await new S3Manager().getFilePresignedUrl(file.id);
	if (!fileUrl) return;

	return (
		<img
			src={fileUrl}
			alt={file.name}
			style={{
				width: '100%',
				height: '200px',
				objectFit: 'cover',
			}}
		/>
	);
};
