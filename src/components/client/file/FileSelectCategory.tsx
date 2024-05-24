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
			<CustomSelect options={categories} name="categoryid" />

			{errors.name && <p className="text-red-500 mt-2">{errors.name.message}</p>}
		</div>
	);
};
