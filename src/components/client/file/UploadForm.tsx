'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { type FC, useRef } from 'react';
import { useFormState } from 'react-dom';
import { FormProvider, useForm } from 'react-hook-form';
import type { Category } from 'src/database/entity/Category';
import { z } from 'zod';
import { uploadFileAction } from '../../../actions/UploadFileAction';
import { imageType, videoType } from '../../../util/constants';
import { Button } from '../reusable/Button';
import { CloseRedirectLink } from '../reusable/CloseRedirectLink';
import { CustomInput } from '../reusable/CustomInput';
import { FileSelectCategory } from './FileSelectCategory';

const formDataSchema = z.object({
	video: videoType,
	image: imageType,
	name: z.string().min(1, 'Name is required'),
	description: z.string().min(10, 'Description is required'),
	categoryId: z.string().min(1, 'Category ID is required'),
});

export type UploadForm = z.infer<typeof formDataSchema>;

type Props = {
	categories: Category[];
};

export const UploadForm: FC<Props> = ({ categories }) => {
	const [, mutate] = useFormState(uploadFileAction, undefined);
	const form = useForm<UploadForm>({
		resolver: zodResolver(formDataSchema),
	});

	const formRef = useRef<HTMLFormElement>(null);

	return (
		<FormProvider {...form}>
			<form
				ref={formRef}
				action={mutate}
				onSubmit={(e) => {
					e.preventDefault();
					form.handleSubmit(() => {
						mutate(new FormData(formRef.current!));
					})(e);
				}}
				className="fixed top-0 left-0 w-full h-screen flex justify-center items-center bg-black bg-opacity-50 z-50"
			>
				<div className="max-w-md w-full bg-white p-8 rounded-xl relative">
					<CloseRedirectLink />
					<CustomInput type="text" name="name" />
					<CustomInput type="text" name="description" />
					<CustomInput type="file" name="video" />
					<CustomInput type="file" name="image" />
					<FileSelectCategory categories={categories} />
					<Button type="submit">Upload</Button>
				</div>
			</form>
		</FormProvider>
	);
};
