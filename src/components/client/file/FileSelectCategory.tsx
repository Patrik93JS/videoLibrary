'use client';
import type { FC } from 'react';
import { useFormContext } from 'react-hook-form';
import type { Category } from 'src/database/entity/Category';
import { UploadForm } from './UploadForm';

type Props = {
	categories: Category[];
};

export const FileSelectCategory: FC<Props> = ({ categories }) => {
	const {
		register,
		formState: { errors },
	} = useFormContext<UploadForm>();

	return (
		<div className="mb-4">
			<select
				id="categoryId"
				className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-md sm:text-sm border-gray-300 rounded-md"
				{...register('categoryId')}
			>
				{categories.map((category) => (
					<option key={category.id} value={category.id}>
						{category.name}
					</option>
				))}
			</select>

			{errors.name && <p className="text-red-500 mt-2">{errors.name.message}</p>}
		</div>
	);
};
