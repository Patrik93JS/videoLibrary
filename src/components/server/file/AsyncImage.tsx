import Image from 'next/image';
import { FC } from 'react';
import type { File } from 'src/database/entity/File';
import { S3Manager } from '../../../database/controllers/S3Manager';

type AsyncImageProsp = {
	file: File;
};

export const AsyncImage: FC<AsyncImageProsp> = async ({ file }) => {
	const fileUrl = await new S3Manager().getFilePresignedUrl(file.id);
	if (!fileUrl) return;

	return <Image src={fileUrl} alt={file.name} layout="fill" objectFit="cover" className="object-cover w-full h-full" />;
};
