'use client';

import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { createCategoryAction } from '../../../actions/createCategoryAction';
import { Button } from '../reusable/Button';
import { CloseRedirectLink } from '../reusable/CloseRedirectLink';

const schema = z.object({
	name: z.string().min(3, { message: 'Must be # or more characters long' }),
});

export type CreateFormCategory = z.infer<typeof schema>;

export const CreateFormCategory: FC = () => {
	const { register } = useForm<CreateFormCategory>();

	return (
		<form
			action={createCategoryAction}
			className="fixed top-0 left-0 w-full h-screen flex justify-center items-center bg-black bg-opacity-50 z-10"
		>
			<div className="max-w-md w-full bg-white p-8 bottom-20 rounded-xl relative">
				<CloseRedirectLink />
				<p className="block text-sm font-medium text-gray-700">Name of category</p>
				<input
					type="text"
					{...register('name')}
					className="my-2 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-md sm:text-sm rounded-md"
				/>
				<Button>Create</Button>
			</div>
		</form>
	);
};
