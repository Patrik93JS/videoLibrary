'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { FC } from 'react';
import { Form, FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import type { Category } from 'src/database/entity/Category';
import { z } from 'zod';
import { uploadFileAction } from '../../../actions/UploadFileAction';
import { imageType, videoType } from '../../../util/constants';
import { Button } from '../reusable/Button';
import { CloseRedirectLink } from '../reusable/CloseRedirectLink';
import { CustomInput } from '../reusable/CustomInput';
import { FileSelectCategory } from './FileSelectCategory';

const formDataSchema = z.object({
	video: videoType.refine((value) => value !== undefined, { message: 'Please select a valid video file.' }),
	image: imageType.refine((value) => value !== undefined, { message: 'Please select a valid image file.' }),
	name: z.string().min(1, 'Name is required'),
	description: z.string().min(10, 'Description is required'),
	categoryId: z.string().min(1, 'Category ID is required'),
});

export type UploadForm = z.infer<typeof formDataSchema>;

type Props = {
	categories: Category[];
};

export const UploadForm: FC<Props> = ({ categories }) => {
	const methods = useForm<UploadForm>({
		resolver: zodResolver(formDataSchema),
	});
	const { handleSubmit } = methods;

	const onSubmit: SubmitHandler<UploadForm> = async (data) => {
		const formData = new FormData();
		formData.append('video', data.video);
		formData.append('image', data.image);
		formData.append('name', data.name);
		formData.append('description', data.description);
		formData.append('categoryId', data.categoryId);

		try {
			await uploadFileAction(formData);
		} catch (error) {
			console.error('Chyba při odesílání formuláře:', error);
		}
	};

	return (
		<FormProvider {...methods}>
			<Form
				onSubmit={handleSubmit(onSubmit)}
				className="fixed top-0 left-0 w-full h-screen flex justify-center items-center bg-black bg-opacity-50 z-10"
				style={{ zIndex: 9999 }}
			>
				<div className="max-w-md w-full bg-white p-8 rounded-xl relative">
					<CloseRedirectLink />
					<CustomInput type="text" name="name" registerInput="name" />
					<CustomInput type="text" name="description" registerInput="description" />
					<CustomInput type="file" name="video" registerInput="video" />
					<CustomInput type="file" name="image" registerInput="image" />
					<FileSelectCategory categories={categories} />
					<Button>Upload</Button>
				</div>
			</Form>
		</FormProvider>
	);
};
