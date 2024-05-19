'use client';

import { useActionState } from 'react';
import { useFormContext } from 'react-hook-form';
import { fetchCategoriesAction } from '../../../actions/fetchCategoriesAction';
import { UploadForm } from './UploadForm';

export const FileSelectCategory = () => {
	const [state, formAction] = useActionState(fetchCategoriesAction, {
		categories: [],
	});

	const {
		register,
		formState: { errors },
	} = useFormContext<UploadForm>();

	return (
		<div className="mb-4">
			<form action={formAction}>
				<select
					id="categoryId"
					className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-md sm:text-sm border-gray-300 rounded-md"
					{...register('categoryId')}
				>
					{state.categories.map((category) => (
						<option key={category.id} value={category.id}>
							{category.name}
						</option>
					))}
				</select>
			</form>
			{errors.name && <p className="text-red-500 mt-2">{errors.name.message}</p>}
		</div>
	);
};
