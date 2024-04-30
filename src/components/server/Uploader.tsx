'use server';
import { FC } from 'react';
import { UploadFileAction } from '@/actions/UploadFileAction';
import { withDatabase } from '@/database';
import { FileController } from '@/database/controllers';

export const Uploader: FC = async () => {
	'use server';

	const db = await withDatabase();
	const fileController = new FileController(db);
	const data = await fileController.list(1, 355);

	return (
		<>
			<form action={UploadFileAction}>
				<input type="file" name="file" />
				<button type="submit">Upload</button>
			</form>
			<div>
				{data.map((file) => (
					<div key={file.id}>
						{file.minetype.match(/video\/(mp4|webm|ogg)/) ? (
							<video src={file.url} controls />
						) : (
							<img src={file.url} alt={file.name} />
						)}
						<p>{file.name}</p>
						<p>{file.url}</p>
					</div>
				))}
			</div>
		</>
	);
};
