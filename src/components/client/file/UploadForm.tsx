'use client';

import { FC } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { z } from 'zod';
import { uploadFileAction } from '../../../actions/uploadFileAction';
import { FileInput } from '../../server/file/FileInput';
import { Button } from '../reusable/Button';
import { CloseRedirectLink } from '../reusable/CloseRedirectLink';
import { FileSelectCategory } from './FileSelectCategory';

const schema = z.object({
	video: z.string().refine(
		(value) => {
			const allowedTypes = ['video/mp4', 'video/webm', 'video/ogg'];
			return value && allowedTypes.includes(value);
		},
		{ message: 'Just video available upload.' },
	),
	image: z.string().refine(
		(value) => {
			const allowedTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/webp', 'image/svg+xml'];
			return value && allowedTypes.includes(value);
		},
		{ message: 'Just image available upload.' },
	),
	name: z.string().min(1, { message: 'Name is required.' }),
	description: z.string().min(1, { message: 'Description is required.' }),
	categoryId: z.string(),
});

export type UploadForm = z.infer<typeof schema>;

export const UploadForm: FC = async () => {
	const methods = useForm<UploadForm>();

	return (
		<FormProvider {...methods}>
			<form
				action={uploadFileAction}
				className="fixed top-0 left-0 w-full h-screen flex justify-center items-center bg-black bg-opacity-50 z-10"
				style={{ zIndex: 9999 }}
			>
				<div className="max-w-md w-full bg-white p-8 rounded-xl relative">
					<CloseRedirectLink />
					<FileInput type="text" name="name" registerInput="name" />
					<FileInput type="text" name="description" registerInput="description" />
					<FileInput type="file" name="video" registerInput="video" />
					<FileInput type="file" name="image" registerInput="image" />
					<FileSelectCategory />
					<Button>Upload</Button>
				</div>
			</form>
		</FormProvider>
	);
};
