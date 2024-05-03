import { FC } from 'react';
import { createPortal } from 'react-dom';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { UploadFileAction } from '..';
import { useBodyRef } from '@/util/hooks/useBodyRef';

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
});

type UploadForm = z.infer<typeof schema>;

export const UploadForm: FC = () => {
	const { register, handleSubmit } = useForm<UploadForm>();
	const bodyRef = useBodyRef();

	// const onSubmit = handleSubmit((data) => {});

	return (
		bodyRef &&
		createPortal(
			<form
				onSubmit={onSubmit}
				action={UploadFileAction}
				className="h-screen w-full fixed left-0 top-0 flex justify-center items-center bg-black rounded-xl bg-opacity-50 z-10"
			>
				<p>insert video</p>
				<input type="file" {...register('video', { required: true })} />
				<p>insert image</p>
				<input type="file" {...register('image', { required: true })} />
				<button type="submit" onClick={closeModal}>
					Upload
				</button>
			</form>,
			bodyRef,
		)
	);
};
