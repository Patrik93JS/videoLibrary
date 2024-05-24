'use client';
import type { FC } from 'react';
import { useFormContext } from 'react-hook-form';
import type { Category } from 'src/database/entity/Category';
import { CustomSelect } from '../reusable/CustomSelect';
import { UploadForm } from './UploadForm';

type Props = {
	categories: Category[];
};

export const FileSelectCategory: FC<Props> = ({ categories }) => {
	const {
		formState: { errors },
	} = useFormContext<UploadForm>();

	return (
		<div className="mb-4">
			<CustomSelect options={categories} name="categoryId" />

			{errors.categoryId && <p className="text-red-500 mt-2">{errors.categoryId.message}</p>}
		</div>
	);
};
